pragma solidity ^0.4.19;

contract MessageRegistry {

    address public _owner;
    event NewMessageCreated(bytes32 msgId, string message, address receiver, address sender);
    event KeyRegistered(string key, address registrant);
    mapping(bytes32 => string) private messageRegistry;
    mapping(address => string) private publicKeyRegistry;
    
    constructor() public {
        _owner = msg.sender;
    }

    modifier isOwner() {
        require(_owner == msg.sender);
        _;
    }

    function createMessage(string message, address receiver) public {
        bytes32 messageId = keccak256(abi.encodePacked(message));
        messageRegistry[messageId] = message;
        emit NewMessageCreated(messageId, message, receiver, msg.sender);
    }

    function registerKey(string key) public {
        publicKeyRegistry[msg.sender] = key;
        emit KeyRegistered(key, msg.sender);
    }

    function getMessage(string id) public view returns(string) {
        bytes32 msgId = stringToBytes32(id);
        return messageRegistry[msgId];
    }

    function kill() public isOwner {
        selfdestruct(_owner);
    }

    function stringToBytes32(string memory source) internal pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
        result := mload(add(source, 32))
        }
    }

}