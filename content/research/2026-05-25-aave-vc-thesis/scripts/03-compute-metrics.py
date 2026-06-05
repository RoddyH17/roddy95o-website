import json
from datetime import datetime
import numpy as np

def load(slug):
    with open(f"/tmp/dl_{slug}_tvl.json") as f:
        d = json.load(f)
    return [(x["month"], x["tvl_usd"]/1e9) for x in d]

aave = load("aave-v3")
morpho = load("morpho-blue")
comp = load("compound-v3")
spark = load("sparklend")

print("\n=== Key TVL Metrics ===")
print(f"Aave V3 — Current: ${aave[-1][1]:.2f}b | Peak: ${max(x[1] for x in aave):.2f}b ({max(aave,key=lambda x:x[1])[0]}) | -55% from peak")
print(f"Morpho — Current: ${morpho[-1][1]:.2f}b | Peak: ${max(x[1] for x in morpho):.2f}b ({max(morpho,key=lambda x:x[1])[0]})")
print(f"Compound V3 — Current: ${comp[-1][1]:.2f}b | 2024-12: $2.06b | -40%")

# Ratios over time
print("\n=== Morpho/Aave Ratio Over Time ===")
aave_d = dict(aave)
morpho_d = dict(morpho)
for m in ["2024-06","2024-09","2024-12","2025-03","2025-06","2025-09","2025-12","2026-03","2026-05"]:
    if m in aave_d and m in morpho_d:
        print(f"  {m}: Morpho ${morpho_d[m]:.2f}b / Aave ${aave_d[m]:.2f}b = {morpho_d[m]/aave_d[m]*100:.1f}%")

# Growth rates
print("\n=== YoY Growth ===")
print(f"Morpho YoY (May24 -> May26): ", end="")
if "2024-05" in morpho_d:
    print(f"${morpho_d.get('2024-05',0):.2f}b -> ${morpho_d['2026-05']:.2f}b = {(morpho_d['2026-05']/morpho_d['2024-05']-1)*100:+.1f}%")
print(f"Morpho 12mo (May25 -> May26): ${morpho_d['2025-05']:.2f}b -> ${morpho_d['2026-05']:.2f}b = {(morpho_d['2026-05']/morpho_d['2025-05']-1)*100:+.1f}%")
print(f"Aave 12mo (May25 -> May26): ${aave_d['2025-05']:.2f}b -> ${aave_d['2026-05']:.2f}b = {(aave_d['2026-05']/aave_d['2025-05']-1)*100:+.1f}%")

# CAGR-style projection assuming current growth rates persist
m_growth = morpho_d['2026-05']/morpho_d['2025-05']
a_growth = aave_d['2026-05']/aave_d['2025-05']
print(f"\n=== Naive CAGR Projection ===")
for years in [1, 2, 3]:
    proj_m = morpho_d['2026-05'] * m_growth**years
    proj_a = aave_d['2026-05'] * a_growth**years
    print(f"  +{years}y: Morpho ${proj_m:.1f}b, Aave ${proj_a:.1f}b, Ratio {proj_m/proj_a:.0%}")

# Volatility (stddev of monthly returns)
print("\n=== Monthly Volatility (last 12mo) ===")
for name, dat in [("Aave", aave), ("Morpho", morpho)]:
    vals = [x[1] for x in dat[-13:]]
    returns = [(vals[i+1]/vals[i] - 1) for i in range(len(vals)-1)]
    sigma = float(np.std(returns))
    print(f"  {name}: σ = {sigma*100:.1f}%/month ({sigma*np.sqrt(12)*100:.0f}% annualized)")

# Aave deposit concentration interpretation
print("\n=== Aave Top 10 Depositor Composition ===")
print("Top 10 by net deposit (data: 2026-04-02 Dune query 6940233):")
print("  $4.41b — Aave: WrappedTokenGatewayV3 (Aave's own ETH gateway, aggregates many users)")
print("  $2.31b — WrappedTokenGatewayV3 (another Aave gateway)")  
print("  $2.16b — Aave: Migration Helper Mainnet V3 (V2->V3 migration helper)")
print("  $2.08b — Instadapp account proxy (DeFi aggregator user)")
print("  $1.94b — Aave: Wrapped Token Gateway 1 (Aave gateway)")
print("  $1.17b — Safe smart account (multisig EOA)")
print("  $1.17b — Beacon Depositor (ETH staking infra)")
print("  $1.11b — Unlabeled EOA whale")
print("  $1.10b — ether.fi liquidETH vault (single contract aggregating users)")
print("  $1.02b — Unlabeled EOA whale")
print("Total: $18.46b net (cumulative net deposits, not current balance)")
print()
print("Reinterpretation: 6 of 10 are CONTRACTS aggregating many underlying users.")
print("True single-counterparty risk: ether.fi vault ($1.10b) + 2 unlabeled EOAs ($2.13b) = $3.23b at risk")
print("Implied 'real whale' concentration: ~24% of TVL (3.23b / 13.64b)")
