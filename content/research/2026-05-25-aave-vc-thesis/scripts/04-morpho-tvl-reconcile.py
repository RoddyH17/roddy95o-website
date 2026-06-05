import urllib.request, json

def fetch_dl(slug):
    url = f"https://api.llama.fi/protocol/{slug}"
    req = urllib.request.Request(url, headers={"User-Agent": "research-tool"})
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.loads(r.read())

# Check multiple Morpho-related slugs
slugs = ["morpho-blue", "morpho-aave-v3", "morpho-aaveV2", "morpho-compound", "metamorpho"]
for slug in slugs:
    try:
        d = fetch_dl(slug)
        name = d.get("name", "?")
        category = d.get("category", "?")
        # Use currentChainTvls (latest snapshot, exclude borrowed)
        current = d.get("currentChainTvls", {})
        # Strip pool2/staking/borrowed
        tvl = sum(v for k,v in current.items() if not any(x in k.lower() for x in ['borrowed','pool2','staking','vesting']))
        all_tvl = sum(v for v in current.values())
        print(f"  {slug:30s} | {name:25s} | category={category:20s} | TVL(net)={tvl/1e9:.2f}b | TVL(all)={all_tvl/1e9:.2f}b")
        # Show breakdown
        for k, v in sorted(current.items(), key=lambda x: -x[1])[:5]:
            print(f"      {k:30s} ${v/1e9:.2f}b")
    except Exception as e:
        print(f"  {slug}: FAILED {e}")

# Also try parent protocol
print("\n=== Parent protocol ===")
try:
    parent = fetch_dl("parent#morpho")
    print(f"parent#morpho: {json.dumps({k:v for k,v in parent.items() if k in ['name','currentChainTvls','category']}, default=str)[:1500]}")
except Exception as e:
    print(f"parent failed: {e}")

# Try the protocols list with morpho filter
print("\n=== Search /protocols for Morpho ===")
all_p = json.loads(urllib.request.urlopen(urllib.request.Request("https://api.llama.fi/protocols", headers={"User-Agent": "research"}), timeout=60).read())
for p in all_p:
    if 'morpho' in p.get('name', '').lower() or 'morpho' in p.get('slug', '').lower():
        print(f"  {p.get('slug'):30s} | {p.get('name'):25s} | parentProtocol={p.get('parentProtocol','-')} | TVL=${p.get('tvl',0)/1e9:.2f}b")
