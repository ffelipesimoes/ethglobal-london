
// Use the "use client" directive to mark this as a Client Component
"use client";

import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import FanBallot from './contracts/FanBallot.json'; // Import your contract ABI

const Page: React.FC = () => {
  const [contract, setContract] = useState<any>(null);
  const [proposals, setProposals] = useState<string[]>([]);
  const [selectedProposal, setSelectedProposal] = useState<number | null>(null);

  useEffect(() => {
    const init = async () => {
      if (typeof window.ethereum !== 'undefined') { // Ensure window.ethereum is available
        try {
          // Connect to Ethereum provider
const provider = new ethers.providers.Web3Provider(window.ethereum);          // Retrieve signer
          const signer = provider.getSigner();
          // Get contract address
          const contractAddress = '0x6FB4e9092D67f04380a1DcD7aFD5D09ee79cf0DF';
          // Create contract instance
          const fanBallotContract = new ethers.Contract(contractAddress, FanBallot.abi, provider);
          setContract(fanBallotContract);

          // Get the number of proposals
          const numProposals = await fanBallotContract.getNumProposals();
          const proposalsArray: string[] = [];
          // Get each proposal name using the getProposal function
          for (let i = 0; i < numProposals; i++) {
            const proposalName = await fanBallotContract.getProposal(i);
            proposalsArray.push(proposalName);
          }
          setProposals(proposalsArray);
        } catch (error) {
          console.error('Error initializing contract:', error);
        }
      }
    };
    init();
  }, []);

  const handleVote = async () => {
    if (contract && selectedProposal !== null) {
      try {
        // Call the vote function on the contract
        await contract.vote(selectedProposal);
        console.log('Voted successfully!');
      } catch (error) {
        console.error('Error voting:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-center text-blue-800 mb-8">Vote for a Proposal</h1>
        <form className="bg-white shadow-md rounded-lg p-6">
          {proposals.map((proposal, index) => (
            <div key={index} className="flex items-center mb-4">
              <input
                type="radio"
                id={`proposal-${index}`}
                name="proposal"
                value={index}
                checked={selectedProposal === index}
                onChange={() => setSelectedProposal(index)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor={`proposal-${index}`} className="ml-2 block text-sm font-medium text-gray-700">{proposal}</label>
            </div>
          ))}
          <button
            type="button"
            onClick={handleVote}
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Vote
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
