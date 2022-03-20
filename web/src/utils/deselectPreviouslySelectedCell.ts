import { cellPosition } from './interfaces';
import { cellState, player } from './constants';
import { stringifyBoardState } from '.';

/**
 * @description This method deselects a previously selected cell.
 * @param unpackedBoardState Array representing the board state.
 * @param playerTurn The player whose turn it is to play.
 * @param position Position of the cell to be deselected.
 * @param setState Function that sets the new state of the board.
 */
 const deselectPreviouslySelectedCell = (
    unpackedBoardState: Array<Array<number>>, 
    playerTurn: number, 
    position: cellPosition, 
    setState: Function
) => {
    unpackedBoardState[position.Y][position.X] = 
    playerTurn === player.FIRST_PLAYER? 
        cellState.CELL_CONTAINING_PIECE_PLAYER_1
        : 
        cellState.CELL_CONTAINING_PIECE_PLAYER_2
    setState(stringifyBoardState(unpackedBoardState));
};

export { deselectPreviouslySelectedCell };