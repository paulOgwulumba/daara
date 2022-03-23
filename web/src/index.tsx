import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from './utils/constants';
import * as reachBackend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
import MyAlgoConnect from '@reach-sh/stdlib/ALGO_MyAlgoConnect';

const reach = loadStdlib('ALGO');
reach.setWalletFallback(reach.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect }))

ReactDOM.render(
  <React.StrictMode>
    <App 
        reach = { reach } 
        reachBackend = { reachBackend }  
    />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
