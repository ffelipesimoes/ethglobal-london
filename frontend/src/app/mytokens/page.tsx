"use client";
import { useEffect, useState } from "react";
import { fetchTokenSymbols } from "@/actions/wallet";
import SimpleCommunityCard from "@/components/SimpleCommunityCard";
import Menu from "@/components/Menu";
import { fanTokens } from "@/lib/mocks/cards";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

interface TokenProps {
  name: string;
  symbol: string;
  balance: string;
  description?: string;
  members?: number;
  image?: string;
}

interface FetchedToken {
  name: string;
  symbol: string;
  balance: string;
}

export default function Page() {
  const { primaryWallet: walletAddress } = useDynamicContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tokens, setTokens] = useState<TokenProps[]>([]);

  useEffect(() => {
    if (walletAddress?.address) {
      setLoading(true);
      setError("");

      fetchTokenSymbols(walletAddress.address)
        .then((fetchedTokens: FetchedToken[]) => {
          const enrichedTokens = fetchedTokens.map((token) => {
            const mockData = fanTokens.find((mock) => mock.symbol === token.symbol);
            return {
              name: token.name,
              symbol: token.symbol,
              balance: token.balance,
              description: mockData?.description || "No description available.",
              members: mockData?.members || 0,
              image: mockData?.image || "/default-image.png",
            };
          });

          setTokens(enrichedTokens);
        })
        .catch((err) => {
          setError("Failed to fetch tokens.");
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [walletAddress]);

  console.log(tokens);

  return (
    <div>
      <Menu />
      <div className="flex flex-col items-center my-8">
        <p className="text-2xl mb-4">Token List</p>
      </div>
      {loading && <p>Loading tokens...</p>}
      {error && <p>Error: {error}</p>}
      <div>
        {tokens.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tokens.map((token, index) => (
              <SimpleCommunityCard key={index} {...token} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
