import { Environment } from 'src/environments/types';

export const environment: Environment = {
  firebase: {
    projectId: 'wallet-setup',
    appId: '1:907972056790:web:18c0095eccf21eedf15b77',
    databaseURL:
      'https://wallet-setup-default-rtdb.europe-west1.firebasedatabase.app',
    storageBucket: 'wallet-setup.appspot.com',
    apiKey: 'AIzaSyDPq5JcM2dVVYisvvqANjJipKInkMdy_zc',
    authDomain: 'wallet-setup.firebaseapp.com',
    messagingSenderId: '907972056790',
    measurementId: 'G-TW4DGPTJ62',
  },
  production: true,
  staging: true,
  organization: 'nautilus',

  // Enable persistence for demo purposes.
  persistAkitaState: true,
  nautilusWalletServer: 'https://wallet-staging-api.ntls.io/',
  nautilusAssetServices: 'https://wallet-staging-services.ntls.io/',
  // USDC from https://testnet.folks.finance/faucet
  defaultAlgorandAssetId: 67395862,
  xrplClient: {
    server: 'wss://s.altnet.rippletest.net:51233',
    options: {
      connectionTimeout: 20000,
    },
  },
  commissionPercentage: 0.01,
  tokenIssuer: 'rHqubSujbYhxBRYvdb63RMQYdE5AXJSCbT',
  tokenSymbol: 'FOO',
  xrpIssuer: 'r9web3Ca7gXmQgdym3EQMgWw6vB4DYMPzC',
  hideXrpBalance: false,
  autofundXrp: true,
  hidePullPayment: false,
  enableInvites: true,
  enableQuickAccess: true,
  enablePinReset: true,
  autoLogout: true,
};
