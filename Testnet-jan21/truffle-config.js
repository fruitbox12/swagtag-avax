const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");
//const provider = new Web3.providers.HttpProvider(
//  `https://api.avax-test.network/ext/bc/C/rpc`
//);

const privateKeys = [
  "ebee0cad3a453c6a91b22fe11f8864522293ab34a3ecd5d9ffc8cc03429e778a",
];

module.exports = {
  compilers: {
    solc: {
      version: "0.8.11" ,
      settings: {
        optimizer: {
          enabled: true,
          runs: 1500
        }
      }
    }
  },
  networks: {
    testnet: {
      provider: () => {
        return new HDWalletProvider({
           privateKeys: privateKeys,
          providerOrUrl: `https://api.avax-test.network/ext/bc/C/rpc`,
        });
      },
      network_id: "*",
      gas: 8000000,
      gasPrice: 225000000000,
      skipDryRun: true
    },
    mainnet: {
      provider: () => {
        return new HDWalletProvider({
           privateKeys: privateKeys,
          providerOrUrl: `https://api.avax-test.network/ext/bc/C/rpc`,
        });
      },
      network_id: "*",
      gas: 8000000,
      gasPrice: 225000000000,
      skipDryRun: true
    },
  },
};