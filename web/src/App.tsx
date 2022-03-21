import React, { useState } from 'react';
import { loadStdlib } from '@reach-sh/stdlib';
import './App.css';
import { GamePlay } from './components';

function App({ reach, reachBackend }) {
  console.log(reach);
  return (
    <div>
      <GamePlay />
    </div>
  );
};



export default App;
