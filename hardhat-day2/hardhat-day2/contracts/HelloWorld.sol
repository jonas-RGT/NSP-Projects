// SPDX-License-Identifier: MIT 
pragma solidity 0.8.28;

contract HelloWorld {

    // state variable
    string private message;

    // State-changing function (costs gas)
    function setMessage(string memory _message) public {
        message = _message;
    }

    //  View function (free to call)
    function getMessage() public view returns(string memory)  {
        return message;
    }

    // Pure function (free to call)
    function concatenate(string memory a, string memory b, string memory c)
        private 
        pure
        returns (string memory)
    {
        return string(abi.encodePacked(a,c, b));
    }
}
