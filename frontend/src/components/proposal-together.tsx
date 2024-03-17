// Use the "use client" directive to mark this as a Client Component
"use client";

import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import FanBallot from './../app/ballot/contracts/FanBallot.json'; // Import your contract ABI
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card, CardDescription } from "@/components/ui/card";

const ProposalTogether: React.FC = () => {
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [proposals, setProposals] = useState<string[]>([]);
  const [selectedProposal, setSelectedProposal] = useState<number | null>(null);
  const [newProposal, setNewProposal] = useState('');
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');

  // Initialize contract
  useEffect(() => {
    const initContract = async () => {
      if (typeof window.ethereum !== 'undefined') { // Ensure window.ethereum is available
        try {
          // Connect to Ethereum provider
          const provider = new ethers.BrowserProvider(window.ethereum);
          // Retrieve signer
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
    initContract();
  }, []);

  // Function to handle creating a new proposal
  const handleCreateProposal = async () => {
    // Assume your contract has a function to create proposals
    if (!contract) return;

    // Call the createProposal function on the contract
    const tx = await contract.createProposal(newProposal, [optionOne, optionTwo]);
    await tx.wait();
    console.log('Proposal created!');
  };

  // Function to handle voting on a proposal
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
    <div className="flex justify-center py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Card className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle>Create a proposal</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-4">
                <Input placeholder="Proposal" value={newProposal} onChange={(e) => setNewProposal(e.target.value)} />
                <Input placeholder="Option 1" value={optionOne} onChange={(e) => setOptionOne(e.target.value)} />
                <Input placeholder="Option 2" value={optionTwo} onChange={(e) => setOptionTwo(e.target.value)} />
                <Button onClick={handleCreateProposal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle>Proposals</CardTitle>
          </CardHeader>
          <CardContent>
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
            <Button onClick={handleVote} className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Vote
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProposalTogether;
