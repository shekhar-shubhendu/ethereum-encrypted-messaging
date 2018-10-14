var MessageRegistry = artifacts.require("./MessageRegistry.sol");
module.exports = function(deployer) {
  deployer.deploy(MessageRegistry);
};