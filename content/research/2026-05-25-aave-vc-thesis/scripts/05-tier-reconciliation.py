"""Three-tier reconciliation: Project / Product / Market level with Supply vs Gross."""
import urllib.request, json

def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "research"})
    with urllib.request.urlopen(req, timeout=120) as r:
        return json.loads(r.read())

def detail(slug):
    return fetch(f"https://api.llama.fi/protocol/{slug}")

# Get borrowed for each
products = ["aave-v3", "morpho-blue", "compound-v3", "sparklend", "spark-savings"]
print(f"{'Slug':<22} | {'Supply TVL':>12} | {'Borrowed':>12} | {'Gross':>12} | {'Util%':>7}")
print("-"*80)
results = {}
for slug in products:
    d = detail(slug)
    current = d.get("currentChainTvls", {})
    supply = sum(v for k,v in current.items() if not any(x in k.lower() for x in ['borrowed','pool2','staking','vesting']))
    borrowed = sum(v for k,v in current.items() if 'borrowed' in k.lower())
    gross = supply + borrowed
    util = borrowed/supply*100 if supply > 0 else 0
    results[slug] = {"supply": supply, "borrowed": borrowed, "gross": gross, "util": util}
    print(f"{slug:<22} | ${supply/1e9:>10.2f}b | ${borrowed/1e9:>10.2f}b | ${gross/1e9:>10.2f}b | {util:>6.1f}%")

# Project-level rollups
print(f"\n{'='*80}\nPROJECT-LEVEL ROLLUPS (Supply only)")
print(f"  Aave (V1+V2+V3+V4+Arc): $13.84b")
print(f"  Morpho (Blue only - optimizers dead): ${results['morpho-blue']['supply']/1e9:.2f}b")
print(f"  Spark (Lend + Savings): ${(results['sparklend']['supply']+results['spark-savings']['supply'])/1e9:.2f}b  <-- I MISSED $2.15b Spark Savings in v3")
print(f"  Compound (V3 dominant): $1.35b")

print(f"\n=== Morpho/Aave Ratio — Three Definitions ===")
print(f"Supply only (net):       Morpho ${results['morpho-blue']['supply']/1e9:.2f}b / Aave V3 ${results['aave-v3']['supply']/1e9:.2f}b = {results['morpho-blue']['supply']/results['aave-v3']['supply']*100:.1f}%")
print(f"Gross (Supply+Borrowed): Morpho ${results['morpho-blue']['gross']/1e9:.2f}b / Aave V3 ${results['aave-v3']['gross']/1e9:.2f}b = {results['morpho-blue']['gross']/results['aave-v3']['gross']*100:.1f}%")
print(f"Borrowed only (active):  Morpho ${results['morpho-blue']['borrowed']/1e9:.2f}b / Aave V3 ${results['aave-v3']['borrowed']/1e9:.2f}b = {results['morpho-blue']['borrowed']/results['aave-v3']['borrowed']*100:.1f}%")

# Save
with open("/tmp/tier_reconciliation.json", "w") as f:
    json.dump(results, f, indent=2)
print(f"\nSaved to /tmp/tier_reconciliation.json")
