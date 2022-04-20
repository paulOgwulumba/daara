import React, { useState, useEffect } from 'react';
// import { loadStdlib } from '@reach-sh/stdlib';
// import './App.css';
// import { ConditionalRender } from './components';
// import { 
//     ConnectAccountView, 
//     ConnectAccountErrorView,
//     DeployerOrAttacherView,
//     DeployerSetWagerView,
//     GamePlayView, 
// } from './views';
// import { Views, participantTitle } from './utils/constants';
// import { StateGetter } from './redux/selectors';
// import Store from './redux/store';

// export interface IAppProps {
//     reach: any,
//     reachBackend: Object,
// }

// class App extends React.Component<IAppProps> {
//     state = {
//         playerWalletAccount: {},
//         currentView: Views.CONNECT_ACCOUNT_VIEW,
//     };

//     constructor(props: IAppProps) {
//         super(props);
        
//         this.convertCurrencyFromBigNumberToSmallNumber = this.convertCurrencyFromBigNumberToSmallNumber.bind(this);
//         this.convertCurrencyFromSmallNumberToBigNumber = this.convertCurrencyFromSmallNumberToBigNumber.bind(this);
//         this.handleCreateNewGame =  this.handleCreateNewGame.bind(this);
//         this.handlePlayerRoleSelect = this.handlePlayerRoleSelect.bind(this);
//         this.handleReturn = this.handleReturn.bind(this);
//     }

//     async componentDidMount() {
//         const { reach } = this.props;
//         let playerWalletAccount;
//         try {
//             playerWalletAccount = await reach.getDefaultAccount();
//             this.setState({ playerWalletAccount, currentView: Views.DEPLOYER_OR_ATTACHER_VIEW });
//         }
//         catch (err) {
//             this.setState({ currentView: Views.CONNECT_ACCOUNT_ERROR_VIEW });
//         }
//     }

//     render() {
//         return (
//           <div className = 'App'>
//               <ConditionalRender isVisible = { this.state.currentView === Views.CONNECT_ACCOUNT_VIEW }>
//                   <ConnectAccountView />
//               </ConditionalRender>

//               <ConditionalRender isVisible = { this.state.currentView === Views.CONNECT_ACCOUNT_ERROR_VIEW }>
//                   <ConnectAccountErrorView />
//               </ConditionalRender>

//               <ConditionalRender isVisible = { this.state.currentView === Views.DEPLOYER_OR_ATTACHER_VIEW }>
//                   <DeployerOrAttacherView handleParticipantTitleSelect = { this.handlePlayerRoleSelect }/>
//               </ConditionalRender>

//               <ConditionalRender isVisible = { this.state.currentView === Views.DEPLOYER_SET_WAGER_VIEW }>
//                   <DeployerSetWagerView 
//                       handleReturn = { this.handleReturn }
//                       handleCreateNewGame = { this.handleCreateNewGame }
//                   />
//               </ConditionalRender>

//               <ConditionalRender isVisible = { this.state.currentView === Views.GAME_PLAY_VIEW }>
//                   <GamePlayView />
//               </ConditionalRender>
//           </div>
//         )
//     };

//     convertCurrencyFromBigNumberToSmallNumber(amount: number) {
//         return this.props.reach.formatCurrency(amount, 10);
//     }

//     convertCurrencyFromSmallNumberToBigNumber(amount: number) {
//         return this.props.reach.parseCurrency(amount);
//     }

//     handleCreateNewGame(wager: number) {
//         console.log(this.convertCurrencyFromBigNumberToSmallNumber(this.convertCurrencyFromSmallNumberToBigNumber(wager)));
//     }

//     handlePlayerRoleSelect(role: participantTitle) {
//         if (role === participantTitle.DEPLOYER) {
//             this.setState({ currentView: Views.DEPLOYER_SET_WAGER_VIEW })
//         }
//         else {
//             // state change for displaying attacher view goes here.
//         } 
//     }

//     handleReturn(viewToReturnTo: Views) {
//         this.setState({ currentView: viewToReturnTo });
//     }

//     InteractInterface =  {
//         getNumberOfPiecesLeft () {
            
//         }
//     }
// };

// export default App;
