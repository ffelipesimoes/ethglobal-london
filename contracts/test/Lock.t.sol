// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test} from "forge-std/Test.sol";
import {Lock} from "../src/Lock.sol";
import "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";


contract LockTest is Test {
    Lock public lock;
    ERC20 coin;
    address walletAddr;

    function setUp() public {
        walletAddr = makeAddr("walletAddr");
        lock = new Lock();
        coin = new ERC20("AC Miland token", "ACM");
        vm.label(msg.sender, "MSG_SENDER");
    }

    function test_Lock() public {
        uint256 amount = 10;
        deal(address(coin), walletAddr, amount);
        vm.startPrank(walletAddr);
        coin.approve(address(lock), amount);

        lock.lockTokens(coin, 10);
    }

    function test_Unlock_immediate_fail() public {
        uint256 amount = 10;
        deal(address(coin), walletAddr, amount);
        vm.startPrank(walletAddr);
        coin.approve(address(lock), amount);
        lock.lockTokens(coin, 10);

        vm.expectRevert();
        lock.unlockTokens(coin, 10);
    }

    function test_Unlock_custom() public {
        uint256 amount = 10;
        deal(address(coin), walletAddr, amount);
        vm.startPrank(walletAddr);
        coin.approve(address(lock), amount);
        lock.lockTokens(coin, 10);

        lock.unlockTokensUnsafe(coin, 10);
    }

    function test_getLockedTokens() public {
        uint256 amount = 10;
        deal(address(coin), walletAddr, amount);
        vm.startPrank(walletAddr);
        coin.approve(address(lock), amount);
        lock.lockTokens(coin, 10);

        lock.getLockedTokens(address(walletAddr), address(coin));
    }
}
