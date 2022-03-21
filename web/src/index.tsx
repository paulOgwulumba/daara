import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from './utils/constants';
import * as reachBackend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';

const reach = loadStdlib('ALGO');
reach.setProviderByName(Provider.TEST_NET);

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
