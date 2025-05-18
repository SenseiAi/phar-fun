# phar.fun

A memecoin creation and trading platform built on the Pharos Network Testnet, inspired by pump.fun.

## Features

- Create your own memecoins with just a few clicks
- Trade tokens using an automated bonding curve model
- Connect with MetaMask and OKX wallets
- Automated liquidity provision
- Modern, responsive UI

## Tech Stack

- **Frontend**: React with TypeScript
- **Smart Contracts**: Solidity (EVM-compatible)
- **Blockchain**: Pharos Network Testnet
- **Wallet Integration**: MetaMask, OKX, and WalletConnect

## Prerequisites

- Node.js (v16+)
- npm or yarn
- MetaMask or OKX wallet browser extension

## Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/phar-fun.git
cd phar-fun
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory with the following content:
```
REACT_APP_PHAROS_RPC_URL=https://testnet.dplabs-internal.com
REACT_APP_PHAROS_CHAIN_ID=688688
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

## Smart Contract Deployment

1. Install Hardhat:
```bash
npm install --save-dev hardhat @nomiclabs/hardhat-ethers ethers
```

2. Create a `hardhat.config.js` file:
```javascript
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.17",
  networks: {
    pharosTestnet: {
      url: "https://testnet.dplabs-internal.com",
      accounts: ["YOUR_PRIVATE_KEY"], // Replace with your private key
      chainId: 688688
    }
  }
};
```

3. Deploy the contracts:
```bash
npx hardhat run scripts/deploy.js --network pharosTestnet
```

4. Update the contract addresses in `src/config.js` with your deployed contract addresses.

## Production Deployment

1. Build the production version:
```bash
npm run build
# or
yarn build
```

2. Deploy the `build` folder to your web server.

## Connecting to Pharos Network

To connect to the Pharos Network Testnet in MetaMask:

1. Open MetaMask and click on the network dropdown
2. Select "Add Network"
3. Enter the following details:
   - Network Name: Pharos Testnet
   - RPC URL: https://testnet.dplabs-internal.com
   - Chain ID: 688688
   - Currency Symbol: PHAR
   - Block Explorer URL: https://testnet.pharosscan.xyz

## License

MIT

## Acknowledgements

This project is inspired by pump.fun and built for educational purposes on the Pharos Network Testnet.
