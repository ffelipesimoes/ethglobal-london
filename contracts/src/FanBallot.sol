// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface ILock {
    function getLockedTokens(address user, address tokenAddress) external view returns (uint256 amountLocked, uint256 lockedTimestamp);
}

contract FanBallot {
    ILock public lockContract;

    struct Proposal {
        string name;
        uint voteCount;
    }
    Proposal[] public proposals;

    constructor(string[] memory proposalNames, address _lockContractAddress) {
        lockContract = ILock(_lockContractAddress);
        for (uint i = 0; i < proposalNames.length; i++) {
            proposals.push(Proposal({name: proposalNames[i], voteCount: 0}));
        }
    }

    function vote_weight(uint proposalOption, address tokenAddress) external {
        require(proposalOption < proposals.length, "Invalid proposal index");

        // Get the timestamp when the tokens were locked
        (uint256 _amountLocked, uint256 lockedTimestamp) = lockContract.getLockedTokens(msg.sender, tokenAddress);

        // Calculate how long the tokens have been locked in weeks
        uint256 lockedDurationWeeks = (block.timestamp - lockedTimestamp) / 1 weeks;
        uint256 voteWeight = 1 + lockedDurationWeeks;

        // Use locked tokens duration as vote weight
        proposals[proposalOption].voteCount += voteWeight;
    }
}
