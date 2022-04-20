import React from 'react';
import styles from './GamePlay.module.css';
import { player, cellState } from '../../utils/constants';

export const PiecesLeft = ({currentPlayer, piecesLeft}) => {
    const className = currentPlayer === player.FIRST_PLAYER? styles['player-one-pieces-left'] : styles['player-two-pieces-left'];

    const generatePieces = () => {
        let pieces = [];
        for (let i = 0; i < piecesLeft; i++) {
            pieces.push(<div className = { className } key = {i}></div>);
        }

        return pieces;
    }
    return (
        <div className={styles['player-pieces-left-wrapper']}>
            <div className={styles['player-pieces-left-inner-wrapper']}>
              {
                  generatePieces()
              }
            </div>
            
        </div>
    )
}