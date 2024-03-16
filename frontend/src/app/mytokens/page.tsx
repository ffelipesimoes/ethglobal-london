"use client"
import { fetchTokenSymbols } from "@/actions/wallet";
import CommunityCard from "@/components/CommunityCard";
import Menu from "@/components/Menu";
import { fanTokens } from "@/lib/mocks/cards";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useEffect, useState } from "react";


export default function Page() {

  const { primaryWallet: walletAddress} = useDynamicContext();
  const [tokenList, setTokenList] = useState([""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function getTokens(walletAddress: string) {
    try {
      setLoading(true);
      setError('');
      const tokens = await fetchTokenSymbols(walletAddress);
      setTokenList(tokens);
    } catch (err) {
      setError('Failed to fetch tokens.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (walletAddress?.address) {
      getTokens(walletAddress.address);
    }
  }, [walletAddress?.address]);
  console.log(tokenList)

  return (
    <div>
      <p> My Wallet: {walletAddress?.address} </p>
      
      <Menu />
        
      {loading && <p>Loading tokens...</p>}
      {error && <p>Error: {error}</p>}
      <button onClick={() => walletAddress?.address && getTokens(walletAddress.address)}> Get Tokens </button>
      {tokenList && <div>
        <p>Token List:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <pre>{tokenList}</pre>
            </div>
      </div>}
    </div>
  );
}
