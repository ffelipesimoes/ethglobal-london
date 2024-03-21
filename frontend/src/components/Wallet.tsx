"use client";
import React, { useState } from "react";
import { DynamicWidget, useDynamicContext } from "./../lib/dynamic";
import { fetchTokenSymbols } from "@/actions/wallet";

export default function Wallet() {
  const { primaryWallet: walletAddress } = useDynamicContext();

  const [symbols, setSymbols] = useState<string[]>([]);
  const [error, setError] = useState("");

  const handleFetchClick = async () => {
    if (!walletAddress) {
      alert("Please enter a wallet address.");
      return;
    }
    try {
      const fetchedSymbols = await fetchTokenSymbols(walletAddress as any);
      setSymbols(fetchedSymbols);
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to fetch token symbols. Please try again.");
      setSymbols([]);
    }
  };

  return (
    <div className="flex justify-between items-center p-2 border-b border-gray-300">
      <DynamicWidget />
    </div>
  );
}
