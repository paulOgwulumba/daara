import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { ConditionalRender } from './components';
import { 
    AttacherView,
    ConnectAccountView, 
    ConnectAccountErrorView,
    DeployerOrAttacherView,
    DeployerSetWagerView,
    GamePlayView, 
    WaitingForAttacherView,
} from './views';
import { Views, participantTitle, player } from './utils/constants';
import { encodeGamePlayState, decodeGamePlayState } from './utils';
import { Selector } from './redux/selectors';
import Store from './redux/store';
import { 
    updateContractAddress,
    updatePlayerWalletAccount, 
    updateCurrentPlayer,
    updateCurrentView, 
    updateBoardState, 
    updateAllPiecesAddedToBoard,
    updateCellOfSelectedPiece,
    updateIsPlayerToAttackOpponentPieces,
    updateIsPlayerToPlayAgain,
    updateNumberOfAttacksLeft,
    updatePlayerOnePiecesInHand,
    updatePlayerOnePiecesLeft,
    updatePlayerTurn,
    updatePlayerTwoPiecesInHand,
    updatePlayerTwoPiecesLeft,
} from './redux/slices';


export interface IAppProps {
    reach: any,
    reachBackend: any,
};

const App = ({ reach, reachBackend }: IAppProps) => {
    const playerWalletAccount = useSelector(Selector.selectPlayerWalletAccount);
    const currentView = useSelector(Selector.selectCurrentView);
    let init:any;
    const [promise, setPromise] = useState(init); 
    const dispatch = useDispatch();
    
    //let promise: any;

    const awaitPlayerMove = async () => {
        await new Promise((resolve, reject) => {
            setPromise(resolve);
        })
    };



    const InteractInterface = {
        getNumberOfPiecesLeft: () => {
            const nothing = currentView === Views.GAME_PLAY_VIEW? '' : dispatch(updateCurrentView(Views.GAME_PLAY_VIEW));
            const currentPlayer = Store.getState().gamePlayState.currentPlayer;

            const playerPieces = 
                currentPlayer === player.FIRST_PLAYER? 
                Store.getState().playerState.playerTwoPiecesLeft
                :
                Store.getState().playerState.playerOnePiecesLeft;

            const opponentPieces = 
                currentPlayer === player.FIRST_PLAYER?
                Store.getState().playerState.playerOnePiecesLeft
                :
                Store.getState().playerState.playerTwoPiecesLeft
            
            return [playerPieces, opponentPieces];
        },

        dealPiece: async () => {
            const nothing = currentView === Views.GAME_PLAY_VIEW? '' : dispatch(updateCurrentView(Views.GAME_PLAY_VIEW));
            await awaitPlayerMove();
            const boardState = Store.getState().boardState.boardState;
            const gamePlayState = encodeGamePlayState();
            return [boardState, gamePlayState];
        },

        updateOpponentMove: (boardState: string, gamePlayState: string) => {
            const nothing = currentView === Views.GAME_PLAY_VIEW? '' : dispatch(updateCurrentView(Views.GAME_PLAY_VIEW));
            const decodedGamePlayState = decodeGamePlayState(gamePlayState);
            
            dispatch(updateAllPiecesAddedToBoard(decodedGamePlayState.allPiecesAddedToBoard));
            dispatch(updateCellOfSelectedPiece(decodedGamePlayState.cellOfSelectedPiece));
            dispatch(updateIsPlayerToAttackOpponentPieces(decodedGamePlayState.isPlayerToAttackOpponentPieces));
            dispatch(updateIsPlayerToPlayAgain(decodedGamePlayState.isPlayerToPlayAgain));
            dispatch(updateNumberOfAttacksLeft(decodedGamePlayState.numberOfAttacksLeft));
            dispatch(updatePlayerOnePiecesInHand(decodedGamePlayState.playerOnePiecesInHand));
            dispatch(updatePlayerOnePiecesLeft(decodedGamePlayState.playerOnePiecesLeft));
            dispatch(updatePlayerTurn(decodedGamePlayState.playerTurn));
            dispatch(updatePlayerTwoPiecesInHand(decodedGamePlayState.playerTwoPiecesInHand));
            dispatch(updatePlayerTwoPiecesLeft(decodedGamePlayState.playerTwoPiecesLeft));
            dispatch(updateBoardState(boardState));
        }, 

        informTimeout: () => {
            alert("Time is up!!!");
        },

        informDisagreement: () => {
            alert("Values from two players do not match!");
        }
    };

    const acceptWager = (wager: number) => {
        prompt(`Do you accept a wager of ${wager}?`);
    }

    const convertCurrencyFromBigNumberToSmallNumber = (amount: number) => {
        return reach.formatCurrency(amount, 10);
    };

    const convertCurrencyFromSmallNumberToBigNumber = (amount: number) => {
        return reach.parseCurrency(amount);
    };

    const handleCreateNewGame = async (wager: number) => {
        const balanceBigNum = await reach.balanceOf(playerWalletAccount);
        const balance = convertCurrencyFromBigNumberToSmallNumber(balanceBigNum);

        if ((balance) < (wager + 1)) {
            alert(`Insufficient funds in wallet to set the wager of ${wager}.`);
            return;
        }

        const interact = {
            ...InteractInterface,
            wager,
            deadline: 120,              // deadline of 120 seconds
        };

        let contract;

        try {
            console.log("Creating contract");
            contract = playerWalletAccount.contract(reachBackend);
            console.log("Contract created successfully")
        } 
        catch (err) {
            alert(err);
            console.log(err);
            return;
        } 

        try {  
            console.log("Making first publish");
            reachBackend?.Alice(contract, interact);

            console.log('Getting contract information');
            const contractAddress = JSON.stringify(await contract.getInfo(), null, 2);
            console.log(contractAddress);
            dispatch(updateContractAddress(contractAddress));
            console.log("waiting for attacher to join");
            dispatch(updateCurrentView(Views.WAITING_FOR_ATTACHER_VIEW));
            dispatch(updateCurrentPlayer(player.SECOND_PLAYER))
        }
        catch (err) {
            alert(err);
            console.log(err);
            return;
        }
    };

    const handleJoinGame = async (contractAddress: string) => {
        console.log("Joining the game.")
        const contract = await playerWalletAccount?.contract(reachBackend, JSON.parse(contractAddress));
        
        const interact = {
            ...InteractInterface,
            acceptWager,
        };
        
        reachBackend.Bob(contract, interact);
        console.log("Joined successfully");
        dispatch(updateCurrentPlayer(player.SECOND_PLAYER))
        dispatch(updateCurrentView(Views.GAME_PLAY_VIEW));
    };

    const resolvePromise = () => {
        promise();
    }

    const handlePlayerRoleSelect = (role: participantTitle) => {
        if (role === participantTitle.DEPLOYER) {
            dispatch(updateCurrentView(Views.DEPLOYER_SET_WAGER_VIEW));
        }
        else {
            dispatch(updateCurrentView(Views.ATTACHER_VIEW));
        } 
    };

    const handleReturn = (viewToReturnTo: Views) => {
        dispatch(updateCurrentView(viewToReturnTo));
    };

    const connectToDefaultAccount = async () => {
        try {
            const walletAccount = await reach.getDefaultAccount();
            console.log("connected");
            dispatch(updatePlayerWalletAccount(walletAccount));
            dispatch(updateCurrentView(Views.DEPLOYER_OR_ATTACHER_VIEW));
            console.log("connected");
        }
        catch (err) {
            dispatch(updateCurrentView(Views.CONNECT_ACCOUNT_ERROR_VIEW));
        }
    };

    useEffect(() => {
        connectToDefaultAccount();
    }, []);

    return (
      <div className = 'App'>
          <ConditionalRender isVisible = { currentView === Views.CONNECT_ACCOUNT_VIEW }>
              <ConnectAccountView />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.CONNECT_ACCOUNT_ERROR_VIEW }>
              <ConnectAccountErrorView />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.DEPLOYER_OR_ATTACHER_VIEW }>
              <DeployerOrAttacherView handleParticipantTitleSelect = { handlePlayerRoleSelect }/>
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.DEPLOYER_SET_WAGER_VIEW }>
              <DeployerSetWagerView 
                  handleReturn = { handleReturn }
                  handleCreateNewGame = { handleCreateNewGame }
              />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.GAME_PLAY_VIEW }>
              <GamePlayView 
                    resolvePromise = { resolvePromise }
              />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.WAITING_FOR_ATTACHER_VIEW }>
                <WaitingForAttacherView />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.ATTACHER_VIEW }>
                <AttacherView 
                    handleReturn = { handleReturn }
                    handleJoinGame = { handleJoinGame }
                />
          </ConditionalRender>
      </div>
    )
};

export default App;
