const IdoFactory = artifacts.require("IDOFactory");
const TokenLockerFactory = artifacts.require("TokenLockerFactory");

module.exports = function (deployer) {
  deployer.then(async () => {
    let feeToken = "0x4a81401aD0aEcc02E7c3D796a593a2fDE589d2F8";
    await deployer.deploy(IdoFactory, feeToken, "0", "0");
    await deployer.deploy(TokenLockerFactory);
  });
};



//IDOFactory = 0x910bF27Dd89EB1c8c70600912A7C72322fc663d7
//TOkenLocakerFactory = 0x182aD09cD05769Cd16C39919f5d193FcebAc85C8