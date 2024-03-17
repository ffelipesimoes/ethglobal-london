// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/FanTokenBuilder.sol"; 

contract FanTokenBuilderTest is Test {
    FanTokenBuilder public fanTokenBuilder;
    address public owner;

    function setUp() public {
        owner = vm.addr(1);
        vm.startPrank(owner);
        fanTokenBuilder = new FanTokenBuilder();
        vm.stopPrank();
    }

    function testCreateFanToken() public {
        string memory name = "AC Milan Token";
        string memory symbol = "ACM";
        string memory ipfsHash = "initial_ipfs_hash";

        // Simulate owner creating a new FanToken
        vm.startPrank(owner);
        address fanTokenAddress = fanTokenBuilder.createFanToken(name, symbol, ipfsHash);
        vm.stopPrank();
        assertTrue(fanTokenAddress != address(0));

        FanToken fanToken = FanToken(fanTokenAddress);
        assertEq(fanToken.name(), name);
        assertEq(fanToken.symbol(), symbol);
        assertEq(fanToken.getFilecoinReference(), ipfsHash);
    }

    function testSetIpfsHash() public {
        string memory name = "AC Milan Token";
        string memory symbol = "ACM";
        string memory ipfsHash = "initial_ipfs_hash";
        string memory newIpfsHash = "new_ipfs_hash";

        // Simulate owner creating a new FanToken and setting a new IPFS hash
        vm.startPrank(owner);
        address fanTokenAddress = fanTokenBuilder.createFanToken(name, symbol, ipfsHash);
        FanToken fanToken = FanToken(fanTokenAddress);

        fanToken.setIpfsHash(newIpfsHash);
        vm.stopPrank();

        assertEq(fanToken.getFilecoinReference(), newIpfsHash);
    }

    function testFailSetIpfsHashNotOwner() public {
        string memory name = "AC Milan Token";
        string memory symbol = "ACM";
        string memory ipfsHash = "initial_ipfs_hash";

        // Owner creates the FanToken
        vm.startPrank(owner);
        address fanTokenAddress = fanTokenBuilder.createFanToken(name, symbol, ipfsHash);
        vm.stopPrank();

        FanToken fanToken = FanToken(fanTokenAddress);

        // Another user (not the owner) attempts to change the IPFS hash
        vm.startPrank(address(0xdead));
        vm.expectRevert("Caller is not the owner");
        fanToken.setIpfsHash("unauthorized_update");
        vm.stopPrank();
    }
}
