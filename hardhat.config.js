module.exports = {
  solidity: "0.8.17",
  networks: {
    pharosTestnet: {
      url: "https://testnet.dplabs-internal.com",
      chainId: 688688,
      accounts: {
        mnemonic: "test test test test test test test test test test test junk", // DO NOT USE IN PRODUCTION
      }
    }
  },
  paths: {
    sources: "./src/contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./src/artifacts"
  }
};
