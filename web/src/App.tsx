import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { ConditionalRender } from './components';
import { 
    ConnectAccountView, 
    ConnectAccountErrorView,
    DeployerOrAttacherView,
    DeployerSetWagerView,
    GamePlayView, 
} from './views';
import { Views, participantTitle, player } from './utils/constants';
import { encodeGamePlayState, decodeGamePlayState } from './utils';
import { Selector } from './redux/selectors';
import Store from './redux/store';
import { 
    updatePlayerWalletAccount, 
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
    reachBackend: Object,
};

const App = ({ reach, reachBackend }: IAppProps) => {
    const playerWalletAccount = useSelector(Selector.selectPlayerWalletAccount);
    const currentView = useSelector(Selector.selectCurrentView);
    const dispatch = useDispatch();

    const Interact = {
        getNumberOfPiecesLeft: () => {
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

        dealPiece: () => {
            const boardState = Store.getState().boardState.boardState;
            const gamePlayState = encodeGamePlayState();
            return boardState;
        },

        updateOpponentMove: (boardState: string, gamePlayState: string) => {
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
    }

    const convertCurrencyFromBigNumberToSmallNumber = (amount: number) => {
        return reach.formatCurrency(amount, 10);
    };

    const convertCurrencyFromSmallNumberToBigNumber = (amount: number) => {
        return reach.parseCurrency(amount);
    };

    const handleCreateNewGame = async (wager: number) => {
        console.log(convertCurrencyFromBigNumberToSmallNumber(convertCurrencyFromSmallNumberToBigNumber(wager)));
        const balanceBigNum = await reach.balanceOf(playerWalletAccount);
        const balance = convertCurrencyFromBigNumberToSmallNumber(balanceBigNum);

        if ((balance) > (wager + 1)) {
            dispatch(updateCurrentView(Views.GAME_PLAY_VIEW));
        }
        else {
            alert(`Insufficient funds in wallet to set the wager of ${wager}.`);
        } 
    };

    const handlePlayerRoleSelect = (role: participantTitle) => {
        if (role === participantTitle.DEPLOYER) {
            dispatch(updateCurrentView(Views.DEPLOYER_SET_WAGER_VIEW));
        }
        else {
            // state change for displaying attacher view goes here.
        } 
    };

    const handleReturn = (viewToReturnTo: Views) => {
        dispatch(updateCurrentView(viewToReturnTo));
    };

    const connectToDefaultAccount = async () => {
        try {
            const walletAccount = await reach.getDefaultAccount();
            dispatch(updatePlayerWalletAccount(walletAccount));
            dispatch(updateCurrentView(Views.DEPLOYER_OR_ATTACHER_VIEW));
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
              <GamePlayView />
          </ConditionalRender>
      </div>
    )
};

export default App;
