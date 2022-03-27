import React, { useState, useEffect } from 'react';
import { loadStdlib } from '@reach-sh/stdlib';
import './App.css';
import { ConditionalRender } from './components';
import { 
    ConnectAccountView, 
    ConnectAccountErrorView,
    GamePlayView, 
} from './views';
import { Views } from './utils/constants';

interface IAppProps {
    reach: any,
    reachBackend: Object,
}

class App extends React.Component<IAppProps> {
    state = {
        playerWalletAccount: {},
        currentView: Views.CONNECT_ACCOUNT_VIEW,
    };

    constructor({ reach, reachBackend }: IAppProps) {
        super({ reach, reachBackend });
    }

    async componentDidMount() {
        let playerWalletAccount;
        try {
            playerWalletAccount = await this.props.reach.getDefaultAccount();
            console.log(playerWalletAccount);
            this.setState({ playerWalletAccount, currentView: Views.GAME_PLAY_VIEW });
        }
        catch (err) {
            this.setState({ currentView: Views.CONNECT_ACCOUNT_ERROR_VIEW });
        }
    }

    render() {
        return (
          <div className = 'App'>
              <ConditionalRender isVisible = { this.state.currentView === Views.CONNECT_ACCOUNT_VIEW }>
                  <ConnectAccountView />
              </ConditionalRender>

              <ConditionalRender isVisible = { this.state.currentView === Views.CONNECT_ACCOUNT_ERROR_VIEW }>
                  <ConnectAccountErrorView />
              </ConditionalRender>

              <ConditionalRender isVisible = { this.state.currentView === Views.GAME_PLAY_VIEW }>
                  <GamePlayView />
              </ConditionalRender>
          </div>
        )
    }
};



export default App;
