require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.3",
  // networks: {
  //   rinkeby: {
  //     url: "https://rinkeby.infura.io/v3/",
  //     accounts: [""]
  //   },
  // }
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
};
