//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

// Useful for debugging. Remove when deploying to a live network.
import "hardhat/console.sol";
import "./FanBallot.sol";

// Deployer contract to create ballots
contract FanBallotFactory {
    event NewFanBallotDeployed(address indexed deployedContract, address indexed creator);

    function deployFanBallot(string[] memory proposalNames) external {
        FanBallot newContract = new FanBallot(proposalNames);
        emit NewFanBallotDeployed(address(newContract), msg.sender);
    }
}
