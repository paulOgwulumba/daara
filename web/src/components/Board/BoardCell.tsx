import React, { useState } from 'react';
import styles from './Board.module.css';
import { cellState as cellStateEnum } from '../../utils/constants';

interface BoardCellProps {
    cellPosition: {
        X: number,
        Y: number,
    }
    cellState: number,
    handleClick: Function,
}

const BoardCell = ({ 
    cellPosition,
    cellState = cellStateEnum.CELL_EMPTY,
    handleClick 
  }: BoardCellProps) => {

    return (
        <div className = { `${styles.boardCellWrapper}` }>
            <div 
                className = { `${styles.boardCell} ${getBoardCellClassName(cellState)}`}
                onClick = { () => handleClick(cellPosition) }
            >
                <div className = {`${styles.boardPiece} ${getBoardPieceClassName(cellState)}`}></div>
            </div>
        </div>
    );
};

const getBoardPieceClassName = (state: cellStateEnum) => {
    if (
        state === cellStateEnum.CELL_CONTAINING_PIECE_PLAYER_1 
        || state === cellStateEnum.CELL_MATCHED_PLAYER_1
        || state === cellStateEnum.CELL_SELECTED_PLAYER_1
        || state === cellStateEnum.CELL_MATCHED_BEFORE_PLAYER_1
    ) {
      return styles.boardPiecePlayerOne;
    }

    if (
        state === cellStateEnum.CELL_CONTAINING_PIECE_PLAYER_2
        || state === cellStateEnum.CELL_MATCHED_PLAYER_2
        || state === cellStateEnum.CELL_SELECTED_PLAYER_2
        || state === cellStateEnum.CELL_MATCHED_BEFORE_PLAYER_2
    ) {
      return styles.boardPiecePlayerTwo;
    }

    return styles.boardPieceHide;
}

const getBoardCellClassName = (state: cellStateEnum) => {
    if (state === cellStateEnum.CELL_MATCHED_PLAYER_1 || state === cellStateEnum.CELL_MATCHED_PLAYER_2) {
        return styles.boardCellHit;
    }
    if (state === cellStateEnum.CELL_SELECTED_PLAYER_1 || state === cellStateEnum.CELL_SELECTED_PLAYER_2) {
        return styles.boardCellSelected;
    }
    if (state === cellStateEnum.CELL_MATCHED_BEFORE_PLAYER_1 || state === cellStateEnum.CELL_MATCHED_BEFORE_PLAYER_2) {
        return styles.boardCellHitBefore;
    }
    return ''
}


export default BoardCell;