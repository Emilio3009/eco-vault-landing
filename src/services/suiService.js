import { JsonRpcProvider, Network } from '@mysten/sui.js';

const provider = new JsonRpcProvider(Network.MAINNET);

export async function fetchDonationsTotal() {
  const address = process.env.VITE_GREEN_FUND_ADDRESS;
  const balance = await provider.getBalance({ owner: address, coinType: '0x2::sui::SUI' });
  return balance.totalBalance;
}

export async function fetchRecentProjects(limit = 5) {
  return [
    { id: 'proj1', name: 'Reforestación Amazonia', amount: 5000 },
    { id: 'proj2', name: 'Limpieza Costa Pacífico', amount: 3200 }
  ].slice(0, limit);
}
