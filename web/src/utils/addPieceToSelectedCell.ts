import { cellPosition } from './interfaces';
import { cellState, player } from './constants';
import { stringifyBoardState } from '.';
import { IAppState, IAppProps } from '../App';
import React from 'react';

/**
   * @description This adds a piece of player one or player two to a cell depending on whose turn to play it is.
   * @param this React component that this method is bound to.
   * @param unpackedBoardState The array representing the current board state.
   * @param position The position to add the piece to.
   * @param setState This is a boolean value that specifies if a state change should happen or not.
   * @returns Array representing the new board state.
   */
function addPieceToSelectedCell (
    this: React.Component<IAppProps, IAppState>,
    unpackedBoardState: Array<Array<number>>, 
    position: cellPosition, 
    setState?: boolean,
): Array<Array<number>> {

    unpackedBoardState[position.Y][position.X] = this.state.playerTurn === player.FIRST_PLAYER? 
        cellState.CELL_CONTAINING_PIECE_PLAYER_1
        : 
        cellState.CELL_CONTAINING_PIECE_PLAYER_2;

    if (setState) {
        this.setState({boardState: stringifyBoardState(unpackedBoardState)});
    }

    return unpackedBoardState;
}

export { addPieceToSelectedCell };