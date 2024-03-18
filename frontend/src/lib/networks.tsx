export const chilizWallet = [
  // Existing networks (Ethereum Mainnet, Goerli, Polygon, etc.)
  // Other predefined networks...
  // Chiliz Spicy Testnet configuration
  {
    blockExplorerUrls: ['https://testnet.chiliscan.com/'], // Spicy Block Explorer URL
    chainId: 88882, // Chain ID for Spicy Testnet
    chainName: 'Chiliz Spicy Testnet',
    iconUrls: ['https://s2.coinmarketcap.com/static/img/coins/200x200/4066.png'], // You might want to host an appropriate icon and link it here
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
