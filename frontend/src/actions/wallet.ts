import axios from 'axios';

interface Token {
  balance: string;
  contractAddress: string;
  decimals: string;
  name: string;
  symbol: string;
  type: string;
}

interface ApiResponse {
  message: string;
  result: Token[];
  status: string;
}

export const fetchTokenSymbols = async (walletAddress: string): Promise<string[]> => {
  const url = `https://spicy-explorer.chiliz.com/api?module=account&action=tokenlist&address=${walletAddress}`;
  
  try {
    const response = await axios.get<ApiResponse>(url, { headers: { accept: 'application/json' } });
    if (response.data.message === "OK") {
      const symbols = response.data.result.map(token => token.symbol);
      return symbols;
    } else {
      console.error('Error fetching token symbols:', response.data.message);
      return [];
    }
  } catch (error) {
    console.error('Error fetching token symbols:', error);
    return [];
  }
};

// Example usage
const walletAddress = '0x08Ab1Ce3686cb7E616af2D3E068356B160c4c038';
fetchTokenSymbols(walletAddress)
  .then(symbols => console.log('Symbols:', symbols))
  .catch(error => console.error(error));
