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
  organization: 'nautilus',

  // Enable persistence for demo purposes.
  persistAkitaState: true,
  nautilusWalletServer: 'https://wallet-demo-api.ntls.io/',
  nautilusAssetServices: 'https://wallet-demo-services.ntls.io/',
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
  xrpIssuer: 'rMP8zRBqn54yUXFbzquME8j3WSnCJmXyhS',
  hideXrpBalance: false,
  autofundXrp: true,
  hidePullPayment: false,
  enableInvites: false,
  enableQuickAccess: true,
  enablePinReset: true,
  autoLogout: true,
};
