// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
import "./SimpleStorage.sol";

//Use 'is' for inheritance of another smart contract
contract ExtraStorage is SimpleStorage{
    //To modify an inherited function, mark as override
    function store(uint _num) public override{
        num = _num + 5;
    }
}