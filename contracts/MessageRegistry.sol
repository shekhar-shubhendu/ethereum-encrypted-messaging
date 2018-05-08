pragma solidity ^0.4.19;

contract MessageRegistry {

    address public _owner;
    uint private idNounce = 1;
    event NewMessageCreated(bytes32 msgId, address sender);
    mapping(bytes32 => string) private messageRegistry;
    
    constructor() public {
        _owner = msg.sender;
    }

    modifier isOwner() {
        require(_owner == msg.sender);
        _;
    }

    function createMessage(string message) public returns(bytes32 messageId) {
        messageId = keccak256(message, idNounce);
        messageRegistry[messageId] = message;
        idNounce++;
        emit NewMessageCreated(messageId, msg.sender);
    }

    function getMessage(string id) public view returns(string) {
        bytes32 msgId = stringToBytes32(id);
        return messageRegistry[msgId];
    }

    function kill() public isOwner {
        selfdestruct(_owner);
    }

    function stringToBytes32(string memory source) pure private returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }

        assembly {
        result := mload(add(source, 32))
        }
    }

}