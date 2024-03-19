// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface ILock {
    function getLockedTokens(address user, address tokenAddress) external view returns (uint256 amountLocked, uint256 lockedTimestamp);
}

contract FanBallot {
    ILock public lockContract;

    struct Voter {
        bool voted;  // if true, that person already voted
        uint vote;   // index of the voted proposal
    }

    struct Proposal {
        string name;   // short name (up to 32 bytes)
        uint voteCount; // number of accumulated votes
    }

    string public proposalTitle;
    mapping(address => Voter) public voters;
    Proposal[] public proposals;

    // The constructor now takes an additional argument for the lock contract address.
    constructor(string memory proposalTitle_, string[] memory proposalNames, address _lockContractAddress) {
        require(_lockContractAddress != address(0), "Lock contract address cannot be the zero address.");
        lockContract = ILock(_lockContractAddress);

        for (uint i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({
                name: proposalNames[i], 
                voteCount: 0
            }));
        }
        proposalTitle = proposalTitle_;
    }

    // Allows a user to vote on a proposal, with their vote's weight determined by the amount of time their tokens have been locked.
    function vote_weight(uint proposalOption, address tokenAddress) external {
        require(proposalOption < proposals.length, "Invalid proposal index");
        require(!voters[msg.sender].voted, "Already voted.");

        (, uint256 lockedTimestamp) = lockContract.getLockedTokens(msg.sender, tokenAddress);
        uint256 lockedDurationWeeks = (block.timestamp - lockedTimestamp) / 1 weeks;
        uint256 voteWeight = 1 + lockedDurationWeeks;

        voters[msg.sender].voted = true;
        voters[msg.sender].vote = proposalOption;
        
        proposals[proposalOption].voteCount += voteWeight;
    }

    // Returns the index of the winning proposal.
    function winningProposal() public view returns (uint winningProposal_) {
        uint winningVoteCount = 0;
        for (uint p = 0; p < proposals.length; p++) {
            if (proposals[p].voteCount > winningVoteCount) {
                winningVoteCount = proposals[p].voteCount;
                winningProposal_ = p;
            }
        }
    }

    // Utility function to get the total number of proposals.
    function getNumProposals() public view returns (uint) {
        return proposals.length;
    }

    // Returns the name of a specific proposal by index.
    function getProposal(uint index) external view returns (string memory) {
        require(index < proposals.length, "Invalid index");
        return proposals[index].name;
    }

    // Returns the name of the winning proposal.
    function winnerName() external view returns (string memory) {
        return proposals[winningProposal()].name;
    }
}

contract FanBallotFactory {
    event NewFanBallotDeployed(address indexed deployedContract, address indexed creator);

    // Deploys a new FanBallot contract with the provided proposal names and lock contract address.
    // Emits an event upon successful deployment.
    function deployFanBallot(string memory proposalTitle_, string[] memory proposalNames, address _lockContractAddress) external {
        FanBallot newContract = new FanBallot(proposalTitle_, proposalNames, _lockContractAddress);
        emit NewFanBallotDeployed(address(newContract), msg.sender);
    }
}
