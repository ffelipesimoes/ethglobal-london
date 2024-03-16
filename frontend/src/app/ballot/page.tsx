
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
          const provider = new ethers.BrowserProvider(window.ethereum);
          // Retrieve signer
          const signer = provider.getSigner();
          // Get contract address
          const contractAddress = '0x6FB4e9092D67f04380a1DcD7aFD5D09ee79cf0DF';
          // Create contract instance
          const fanBallotContract = new ethers.Contract(contractAddress, FanBallot.abi, signer);
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
    <div>
      <h1>Vote for a Proposal</h1>
      <form>
        {proposals.map((proposal, index) => (
          <div key={index}>
            <input
              type="radio"
              id={`proposal-${index}`}
              name="proposal"
              value={index}
              checked={selectedProposal === index}
              onChange={() => setSelectedProposal(index)}
            />
            <label htmlFor={`proposal-${index}`}>{proposal}</label>
          </div>
        ))}
        <button type="button" onClick={handleVote}>
          Vote
        </button>
      </form>
    </div>
  );
};

export default Page;
