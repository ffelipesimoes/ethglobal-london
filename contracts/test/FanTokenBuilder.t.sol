// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test} from "forge-std/Test.sol";
import {FanTokenBuilder} from "../src/FanTokenBuilder.sol";

contract FanTokenBuilderTest is Test {
    FanTokenBuilder public token;
    address public owner;

    function setUp() public {
        owner = address(this);
        token = new FanTokenBuilder("ACMailandToken", "ACM", "filecoin_reference_cid");
    }

    function testConstructor() public {
        // Check that the token name, symbol, and filecoinReference are set correctly
        assertEq(token.name(), "ACMailandToken");
        assertEq(token.symbol(), "ACM");
        assertEq(token.filecoinReference(), "filecoin_reference_cid");
    }

    function testDecimals() public {
        // Check that decimals are set to 0
        assertEq(token.decimals(), 0);
    }

    function testGetFilecoinReference() public {
        // Check that the owner can get the filecoin reference
        string memory filecoinRef = token.getFilecoinReference();
        assertEq(filecoinRef, "filecoin_reference_cid");
    }

    function testSetFilecoinReference() public {
        // Only owner can set the filecoin reference
        string memory newFilecoinRef = "new_filecoin_reference_cid";
        token.setFilecoinReference(newFilecoinRef);

        // Verify the update
        assertEq(token.filecoinReference(), newFilecoinRef);
    }

    function testFailSetFilecoinReferenceNotOwner() public {
        // This test is expected to fail since a non-owner tries to set the filecoin reference
        vm.prank(address(0xdead)); // Impersonate a different address
        token.setFilecoinReference("attempted_unauthorized_update");
    }
}
