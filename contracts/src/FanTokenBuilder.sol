// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FanTokenBuilder is ERC20 {
    // State variable to store the address of the contract creator (owner)
    address public owner;

    // Filecoin reference that stores the legal contract, which confirms that the created token can be trusted
    string public filecoinReference;

    constructor(string memory name, string memory symbol, string memory _filecoinReference)
        ERC20(name, symbol) {
        filecoinReference = _filecoinReference;
        owner = msg.sender;
    }

    // decimals in an ERC20 token are just for representation to the user. 
    // Wallets calls decimals() function, to represent the number of tokens to the user in a more readable way.
    function decimals() public pure override returns (uint8) {
        return 0;
    }

    // Function to get the Filecoin reference, restricted to the owner
    function getFilecoinReference() public view returns (string memory) {
        require(msg.sender == owner, "Caller is not the owner");
        return filecoinReference;
    }

    // Function to set or update the Filecoin reference, restricted to the owner
    function setFilecoinReference(string memory _filecoinReference) public {
        require(msg.sender == owner, "Caller is not the owner");
        filecoinReference = _filecoinReference;
    }
}
