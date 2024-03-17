// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "ds-test/test.sol";
import "../src/FanBallot.sol";
import "../src/Lock.sol";

contract MockLock is ILock {
    uint256 public amountLocked;
    uint256 public lockedTimestamp;

    function setLockedTokens(uint256 _amountLocked, uint256 _lockedTimestamp) external {
        amountLocked = _amountLocked;
        lockedTimestamp = _lockedTimestamp;
    }

    function getLockedTokens(address _user, address _tokenAddress) external view returns (uint256, uint256) {
        return (amountLocked, lockedTimestamp);
    }
}

contract FanBallotTest is DSTest {
    FanBallot fanBallot;
    MockLock mockLock;
    address tokenAddress = address(0x123); // Example token address

    function setUp() public {
        string[] memory proposalNames = new string[](3);
        proposalNames[0] = "Proposal 1";
        proposalNames[1] = "Proposal 2";

        mockLock = new MockLock();
        fanBallot = new FanBallot(proposalNames, address(mockLock));
    }

    function testVoteWeight() public {
        // Set locked tokens to 100 tokens locked 3 weeks ago
        mockLock.setLockedTokens(100, block.timestamp);

        // Vote on proposal 1
        fanBallot.vote_weight(0, tokenAddress);
    }
}
