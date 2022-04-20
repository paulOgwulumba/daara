import { cellPosition } from './interfaces';
import { player, cellState } from './constants';

/**
 * @description This method highlights a piece selected by a player that wants to move the piece.
 * @param unpackedBoardState Array representing the current board state.
 * @param playerTurn Player whose turn it is to play.
 * @param positionOfSelectedCell Cell position of the cell clicked on.
 * @returns Array representing the new board state.
 */
const selectPieceToBeMoved = (
    unpackedBoardState: Array<Array<number>>, 
    playerTurn: number, 
    positionOfSelectedCell: cellPosition,
) => {
    unpackedBoardState[positionOfSelectedCell.Y][positionOfSelectedCell.X] = 
      playerTurn === player.FIRST_PLAYER? 
          cellState.CELL_SELECTED_PLAYER_1
          : 
          cellState.CELL_SELECTED_PLAYER_2;
    return unpackedBoardState;
};

export { selectPieceToBeMoved };