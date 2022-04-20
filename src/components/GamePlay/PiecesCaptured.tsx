import React from 'react';
import styles from './GamePlay.module.css';
import { player } from '../../utils/constants';
import { Selector } from '../../redux/selectors';
import { useSelector } from 'react-redux';

export const PiecesCaptured = ({opponent, piecesLeft}) => {
    const className = opponent === player.FIRST_PLAYER? styles['player-one-pieces-left'] : styles['player-two-pieces-left'];
    const startingNumberOfPieces = useSelector(Selector.selectStartingNumberOfPieces);
    const generatePieces = () => {
        let pieces = [];
        for (let i = 0; i < (startingNumberOfPieces - piecesLeft); i++) {
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