import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { loadStdlib } from '@reach-sh/stdlib';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import { RecoilRoot } from 'recoil';
import { Prompt } from './components/Prompt';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider as NetworkProvider } from './utils/constants';
import * as reachBackend from './build/index.main.mjs';
import store from './redux/store';
import './index.css';

const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback({ providerEnv: NetworkProvider.TEST_NET, MyAlgoConnect }))

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Provider store={store}>
          <App 
              reach = { reach } 
              reachBackend = { reachBackend }  
          />

          <Prompt />
      </Provider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
