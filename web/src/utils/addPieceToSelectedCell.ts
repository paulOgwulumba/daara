import { cellPosition } from './interfaces';
import { cellState, player } from './constants';
import { stringifyBoardState } from '.';

/**
   * @description This adds a piece of player one or player two to a cell depending on whose turn to play it is.
   * @param unpackedBoardState The array representing the current board state.
   * @param position The position to add the piece to.
   * @param playerTurn The player whose turn it is to play.
   * @param setState Method that sets the react state representing the board arrangement.
   * @returns Array representing the new board state.
   */
 const addPieceToSelectedCell = (
    unpackedBoardState: Array<Array<number>>, 
    position: cellPosition, 
    playerTurn: number, 
    setState?: Function
  ) => {
    unpackedBoardState[position.Y][position.X] = 
    playerTurn === player.FIRST_PLAYER? 
        cellState.CELL_CONTAINING_PIECE_PLAYER_1
        : 
        cellState.CELL_CONTAINING_PIECE_PLAYER_2;

    if (setState) {
        setState(stringifyBoardState(unpackedBoardState));
    }

    return unpackedBoardState;
}

export { addPieceToSelectedCell };