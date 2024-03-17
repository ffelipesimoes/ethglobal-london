// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FanToken is ERC20 {
    address private owner;
    string private ipfsHash;

    constructor(string memory name, string memory symbol, string memory _ipfsHash, address _owner)
        ERC20(name, symbol) {
            require(_owner != address(0), "Owner address cannot be the zero address");
            owner = _owner; // Set the owner to the provided address
            ipfsHash = _ipfsHash;
    }

    function decimals() public pure override returns (uint8) {
        return 0; 
    }

    function getFilecoinReference() public view returns (string memory) {
        return ipfsHash;
    }

    function setIpfsHash(string memory _ipfsHash) public {
        require(msg.sender == owner, "Only the owner can set the IPFS hash.");
        ipfsHash = _ipfsHash;
    }
}

contract FanTokenBuilder {
    mapping(string => address) public fanTokens;

    event FanTokenCreated(address indexed tokenAddress, string name, string symbol);

    function createFanToken(string memory name, string memory symbol, string memory filecoinReference) public returns (address) {
        require(fanTokens[symbol] == address(0), "Token with this symbol already exists");
        
        // Create the FanToken with the caller as the owner
        FanToken fanToken = new FanToken(name, symbol, filecoinReference, msg.sender);
        fanTokens[symbol] = address(fanToken);
        
        emit FanTokenCreated(address(fanToken), name, symbol);
        return address(fanToken);
    }
}