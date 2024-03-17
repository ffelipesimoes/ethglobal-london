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

export const fetchTokenSymbols = async (walletAddress: string): Promise<any> => {
  const url = `https://spicy-explorer.chiliz.com/api?module=account&action=tokenlist&address=${walletAddress}`;
  
  try {
    const response = await axios.get<ApiResponse>(url, { headers: { accept: 'application/json' } });
    if (response.data.message === "OK") {
      const tokens = response.data.result.map(token => ({
        balance: token.balance,
        symbol: token.symbol,
        name: token.name
      }));
      return tokens;
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
const walletAddress = '0x3501fa23Eeb457157C25d29045737D35f491A68a';
fetchTokenSymbols(walletAddress)
  .then(tokens => console.log('tokens:', tokens))
  .catch(error => console.error(error));
