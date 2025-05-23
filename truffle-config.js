const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require("fs");
const mnemonic = "manage scorpion common giant goat topple various brother exact about runway bench";
const infuraId = '9a0b9c112a084682a4be93417eb71c8d';

module.exports = {
  contracts_build_directory: "./src/contracts/",
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard BSC port (default: none)
      network_id: "*", // Any network (default: none)
    },
    bsc_testnet: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://data-seed-prebsc-1-s1.binance.org:8545`
        ),
      network_id: 97,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    bsc: {
      provider: () =>
        new HDWalletProvider(mnemonic, `https://bsc-dataseed1.binance.org`),
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          `https://ropsten.infura.io/v3/${infuraId}`
        );
      },
      networkCheckTimeoutnetworkCheckTimeout: 10000,
      timeoutBlocks: 200,
      network_id: 3,
      skipDryRun: true,
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          `https://rinkeby.infura.io/v3/${infuraId}`
        );
      },
      network_id: 4,
      networkCheckTimeoutnetworkCheckTimeout: 10000,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    goerli: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          `https://goerli.infura.io/v3/${infuraId}`
        );
      },
      network_id: 5,
      confirmations: 3,
      networkCheckTimeoutnetworkCheckTimeout: 10000,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    nsc: {
      provider: function () {
        return new HDWalletProvider(
          mnemonic,
          `https://rpc.nextsmartchain.com`
        );
      },
      network_id: 96,
      networkCheckTimeoutnetworkCheckTimeout: 10000,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.0", // A version or constraint - Ex. "^0.5.0"
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
          details: {
            yul: false,
          },
        },
      },
    },
  },

  plugins: ['truffle-plugin-verify'],
  api_keys: {
    etherscan: 'X88AP9B52SENYPTR31W5SGRK5EGJZD2BJC'
  },
};
