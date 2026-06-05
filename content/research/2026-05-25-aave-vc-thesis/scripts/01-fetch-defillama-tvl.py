import urllib.request, json
from datetime import datetime

def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "research"})
    with urllib.request.urlopen(req, timeout=120) as r:
        return json.loads(r.read())

# Get protocol detail with TVL history
def get_tvl_series(slug):
    d = fetch(f"https://api.llama.fi/protocol/{slug}")
    # 'tvl' is daily series of total TVL
    series = []
    for pt in d.get("tvl", []):
        series.append((pt["date"], pt["totalLiquidityUSD"]))
    return series, d.get("currentChainTvls", {})

for slug in ["aave-v3", "morpho-blue", "compound-v3", "sparklend"]:
    series, current = get_tvl_series(slug)
    if not series:
        print(f"\n{slug}: no series")
        continue
    print(f"\n=== {slug} ===")
    print(f"  Points: {len(series)}, Date range: {datetime.utcfromtimestamp(series[0][0]).date()} -> {datetime.utcfromtimestamp(series[-1][0]).date()}")
    # Sample monthly
    by_month = {}
    for ts, tvl in series:
        ym = datetime.utcfromtimestamp(ts).strftime("%Y-%m")
        if ym not in by_month or ts > by_month[ym][0]:
            by_month[ym] = (ts, tvl)
    months = sorted(by_month.keys())
    print(f"  Monthly snapshots: {len(months)}")
    # Print last 18 months
    for m in months[-18:]:
        ts, tvl = by_month[m]
        print(f"    {m}: ${tvl/1e9:.2f}b")
    # Save full series
    with open(f"/tmp/dl_{slug}_tvl.json", "w") as f:
        json.dump([{"month": m, "tvl_usd": by_month[m][1]} for m in months], f, indent=2)
