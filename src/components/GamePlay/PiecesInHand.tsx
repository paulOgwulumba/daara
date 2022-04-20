import React from 'react';
import styles from './GamePlay.module.css';
import { player } from '../../utils/constants';
import { Selector } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const PiecesInHand = () => {
    const currentPlayer = useSelector(Selector.selectCurrentPlayer);

    const classNamePlayer = currentPlayer === player.FIRST_PLAYER? 
        styles['player-one-pieces-in-hand'] 
        : 
        styles['player-two-pieces-in-hand'];

    const classNameOpponent = currentPlayer === player.FIRST_PLAYER? 
        styles['player-two-pieces-in-hand'] 
        : 
        styles['player-one-pieces-in-hand'];

    const playerOnePiecesInHand = useSelector(Selector.selectPlayerOnePiecesInHand);
    const playerTwoPiecesInHand = useSelector(Selector.selectPlayerTwoPiecesInHand);

    const playerPiecesInHand = currentPlayer === player.FIRST_PLAYER? playerOnePiecesInHand : playerTwoPiecesInHand;
    const opponentPiecesInHand = currentPlayer === player.FIRST_PLAYER? playerTwoPiecesInHand : playerOnePiecesInHand;

    const generatePieces = () => {
        let playerPiecesInHandList = [];
        let opponentPiecesInHandList = []
        for (let i = 0; i < playerPiecesInHand; i++) {
            playerPiecesInHandList.push(<div className = { classNamePlayer } key = {i}></div>);
        }

        for (let i = 0; i < opponentPiecesInHand; i++) {
            opponentPiecesInHandList.push(<div className = { classNameOpponent} key = {i}></div>)
        }

        return { playerPiecesInHandList, opponentPiecesInHandList };
    }

    const shouldHide = () => {
        if (playerPiecesInHand === 0 && opponentPiecesInHand === 0) {
            return styles.hide;
        }
        else {
            return ''
        }
    }

    return (
        <div className={styles['player-pieces-in-hand-wrapper'] + ' ' + shouldHide()}>
            <div className={styles['player-pieces-in-hand-inner-wrapper-1']}>
              {
                  generatePieces().playerPiecesInHandList
              }
            </div>
            <div className={styles['player-pieces-in-hand-inner-wrapper-2']}>
              {
                  generatePieces().opponentPiecesInHandList
              }
            </div>
        </div>
    )
}