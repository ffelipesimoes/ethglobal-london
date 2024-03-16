"use client"
import CommunityCard from "@/components/CommunityCard";
import Menu from "@/components/Menu";
import SearchSection from "@/components/Search";
import { fanTokens } from "@/lib/mocks/cards";
import { fetchTokenSymbols } from "@/lib/reader";
import { useState } from "react";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState("");
  const [symbols, setSymbols] = useState<string[]>([]);
  const [error, setError] = useState("");

  const handleFetchClick = async () => {
    if (!walletAddress) {
      alert("Please enter a wallet address.");
      return;
    }
    try {
      const fetchedSymbols = await fetchTokenSymbols(walletAddress);
      setSymbols(fetchedSymbols);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to fetch token symbols. Please try again.");
      setSymbols([]);
    }
  };

  return (
    <div>

    <Menu />
    <SearchSection />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {fanTokens.map(token => (
        <CommunityCard key={token.id} {...token} />
      ))}
    </div>

    </div>
  );
}
