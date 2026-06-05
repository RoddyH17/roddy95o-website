"""Fetch MORPHO and AAVE token data: FDV, float, unlock schedule."""
import urllib.request, json

def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": "research"})
    with urllib.request.urlopen(req, timeout=120) as r:
        return json.loads(r.read())

# CoinGecko free tier
for slug in ["aave", "morpho"]:
    try:
        d = fetch(f"https://api.coingecko.com/api/v3/coins/{slug}?localization=false&tickers=false&community_data=false&developer_data=false")
        print(f"\n=== {slug.upper()} ===")
        md = d.get("market_data", {})
        print(f"  Price: ${md.get('current_price',{}).get('usd',0):.2f}")
        print(f"  Market Cap: ${md.get('market_cap',{}).get('usd',0)/1e9:.2f}b")
        print(f"  FDV: ${md.get('fully_diluted_valuation',{}).get('usd',0)/1e9:.2f}b")
        print(f"  Circulating supply: {md.get('circulating_supply',0)/1e6:.2f}m")
        print(f"  Total supply: {md.get('total_supply',0)/1e6:.2f}m")
        print(f"  Max supply: {md.get('max_supply',0)/1e6 if md.get('max_supply') else 'unlimited'}m")
        circ = md.get('circulating_supply', 0)
        total = md.get('total_supply', 0) or md.get('max_supply', 0) or 1
        print(f"  Float: {circ/total*100:.1f}%")
        # 24h change
        print(f"  24h change: {md.get('price_change_percentage_24h',0):.2f}%")
        print(f"  30d change: {md.get('price_change_percentage_30d',0):.2f}%")
        print(f"  1y change: {md.get('price_change_percentage_1y',0):.2f}%")
    except Exception as e:
        print(f"\n{slug}: ERR {e}")
