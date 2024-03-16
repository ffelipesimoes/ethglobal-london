export const chilizWallet = [
  // Existing networks (Ethereum Mainnet, Goerli, Polygon, etc.)
  {
    blockExplorerUrls: ['https://etherscan.io/'],
    chainId: 1,
    chainName: 'Ethereum Mainnet',
    iconUrls: ['https://app.dynamic.xyz/assets/networks/eth.svg'],
    name: 'Ethereum',
    nativeCurrency: {
      decimals: 18,
      name: 'Ether',
      symbol: 'ETH',
    },
    networkId: 1,
    rpcUrls: ['https://mainnet.infura.io/v3/'],
    vanityName: 'ETH Mainnet',
  },
  // Other predefined networks...
  // Chiliz Spicy Testnet configuration
  {
    blockExplorerUrls: ['https://testnet.chiliscan.com/'], // Spicy Block Explorer URL
    chainId: 88882, // Chain ID for Spicy Testnet
    chainName: 'Chiliz Spicy Testnet',
    iconUrls: ['https://path-to-your-chiliz-network-icon'], // You might want to host an appropriate icon and link it here
    name: 'Chiliz Spicy Testnet',
    nativeCurrency: {
      decimals: 18, // Assuming 18 decimal places, adjust if different
      name: 'Chiliz', // Currency Name
      symbol: 'CHZ', // Currency Symbol
    },
    networkId: 88882, // Network ID, same as Chain ID for custom networks
    rpcUrls: ['https://spicy-rpc.chiliz.com/'], // RPC endpoint, choose one
    vanityName: 'Chiliz Testnet',
  },
];
