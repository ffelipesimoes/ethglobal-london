// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Lock {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    address public owner;

    struct TokenLock {
        uint256 amountLocked;
        uint256 lockedTimestamp;
    }

    // map wallet to erc fantoken address to tockenlock information
    mapping(address => mapping(address => TokenLock)) public tokenLocks;

    event TokensLocked(address indexed user, address token, uint256 amount, uint256 timestamp);
    event TokensUnlocked(address indexed user, address token, uint256 amount, uint256 timestamp);
    event MessageEvent(string message);

    constructor() {
        owner = msg.sender;
        emit MessageEvent("LOCK!");
    }

    // contract does not have to be payable cause it only accepts erc20 tokens not ETH
    function lockTokens(IERC20 token, uint256 amount) public {
        TokenLock storage lock = tokenLocks[msg.sender][address(token)];
        lock.amountLocked = lock.amountLocked.add(amount);
        lock.lockedTimestamp = block.timestamp;
        token.safeTransferFrom(msg.sender, address(this), amount);
        emit TokensLocked(msg.sender, address(token), amount, block.timestamp);
    }

    // get a list of tocket tokens for a user to verify duration of the lock period for the voting
    function getLockedTokens(address user, address tokenAddress)
        public
        view
        returns (uint256 amountLocked, uint256 lockedTimestamp)
    {
        TokenLock storage lock = tokenLocks[user][tokenAddress];
        return (lock.amountLocked, lock.lockedTimestamp);
    }

    // unlock the locked tokens
    function unlockTokens(IERC20 token, uint256 amount) public {
        TokenLock storage lock = tokenLocks[msg.sender][address(token)];

        // Ensure the caller is the wallet that originally locked the tokens!
        require(lock.amountLocked > 0, "You have not locked any tokens");

        // Check if at least one week has passed since the tokens were locked
        require(block.timestamp >= lock.lockedTimestamp + 1 weeks, "Tokens can only be unlocked after 1 week");

        // Check if the user is trying to unstake more tokens than they have locked
        require(lock.amountLocked >= amount, "Attempting to unstake more tokens than you have locked");

        // Update the locked amount
        lock.amountLocked = lock.amountLocked.sub(amount);

        // Transfer the unstaked tokens back to the user
        token.safeTransfer(msg.sender, amount);

        // emit an event for the unstaking action
        emit TokensUnlocked(msg.sender, address(token), amount, block.timestamp);
    }


    // unlock the locked tokens, without having to wait 1 week for testing purposes
    function unlockTokensUnsafe(IERC20 token, uint256 amount) public {
        TokenLock storage lock = tokenLocks[msg.sender][address(token)];

        // Ensure the caller is the wallet that originally locked the tokens!
        require(lock.amountLocked > 0, "You have not locked any tokens");

        // Check if the user is trying to unstake more tokens than they have locked
        require(lock.amountLocked >= amount, "Attempting to unstake more tokens than you have locked");

        // Update the locked amount
        lock.amountLocked = lock.amountLocked.sub(amount);

        // Transfer the unstaked tokens back to the user
        token.safeTransfer(msg.sender, amount);

        // emit an event for the unstaking action
        emit TokensUnlocked(msg.sender, address(token), amount, block.timestamp);
    }
}

// Solidity linter https://github.com/protofire/solhint
