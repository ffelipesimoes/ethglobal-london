import axios from 'axios';

interface Token {
  chainId: string;
  tokenAddress: string;
  holderBalance: string;
  valueInUsd: string;
  token: {
    name: string;
    symbol: string;
    decimals: number;
    dexCheck: boolean;
    detail: any;
  };
}

interface ApiResponse {
  items: Token[];
  link: {
    next: string;
    nextToken: string;
  };
}

export const fetchTokenSymbols = async (walletAddress: string): Promise<string[]> => {
  const url = `https://cdn.testnet.routescan.io/api/evm/all/address/${walletAddress}/erc20-holdings?includedChainIds=88882&limit=100`;
  
  try {
    const response = await axios.get<ApiResponse>(url);
    const tokens = response.data.items;
    const symbols = tokens.map(token => token.token.symbol);
    return symbols;
  } catch (error) {
    console.error('Error fetching token symbols:', error);
    return [];
  }
};

// Example usage:
const walletAddress = '0x08Ab1Ce3686cb7E616af2D3E068356B160c4c038';
fetchTokenSymbols(walletAddress)
  .then(symbols => console.log('Symbols:', symbols))
  .catch(error => console.error(error));
