import React, { useState, useEffect } from 'react';
import { loadStdlib } from '@reach-sh/stdlib';
import './App.css';
import { GamePlay } from './components';

interface IAppProps {
    reach: any,
    reachBackend: Object,
}

class App extends React.Component<IAppProps> {
    state = {
        playerWalletAccount: {},

    };

    constructor({ reach, reachBackend }: IAppProps) {
        super({ reach, reachBackend });
    }

    async componentDidMount() {
        const playerWalletAccount = await this.props.reach.getDefaultAccount();
        console.log(playerWalletAccount);
        this.setState({ playerWalletAccount });
    }

    render() {
        return (
          <div>
              <GamePlay />
          </div>
        )
    }
};



export default App;
