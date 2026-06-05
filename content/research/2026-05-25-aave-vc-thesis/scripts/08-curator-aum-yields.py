"""Fetch Morpho vault data from DefiLlama yields API."""
import urllib.request, json

def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "research"})
    with urllib.request.urlopen(req, timeout=120) as r:
        return json.loads(r.read())

# DefiLlama yields API
print("=== Morpho vaults via DefiLlama Yields ===")
try:
    data = fetch("https://yields.llama.fi/pools")
    pools = data.get("data", [])
    morpho_pools = [p for p in pools if "morpho" in (p.get("project","") or "").lower()]
    print(f"Total Morpho pools: {len(morpho_pools)}")
    # Sort by TVL
    morpho_pools.sort(key=lambda p: -(p.get("tvlUsd", 0) or 0))
    print(f"\n{'#':<3} | {'Pool name':<50} | {'TVL':>12} | {'APY':>6} | {'Chain':<10}")
    print("-"*100)
    for i, p in enumerate(morpho_pools[:30]):
        name = p.get("symbol", p.get("pool", "?"))[:48]
        tvl = p.get("tvlUsd", 0) or 0
        apy = p.get("apy", 0) or 0
        chain = p.get("chain", "?")
        print(f"{i+1:<3} | {name:<50} | ${tvl/1e6:>10.2f}m | {apy:>5.2f}% | {chain:<10}")
    
    # Aggregate by some token if curator info is there
    total = sum((p.get("tvlUsd",0) or 0) for p in morpho_pools)
    print(f"\nTotal Morpho TVL across {len(morpho_pools)} pools: ${total/1e9:.2f}b")
except Exception as e:
    print(f"err: {e}")
