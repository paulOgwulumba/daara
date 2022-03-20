import { player, cellState } from './constants';

/**
 * @description This method changes all matched cells back to normal.
 * @param boardStateString String representation of current board state.
 * @param currentPlayer Player whose turn it is to play.
 */
const refreshMatchedCells = (boardStateString: string, currentPlayer: number) => {
    return boardStateString.replaceAll(
      currentPlayer === player.FIRST_PLAYER? 
        cellState.CELL_MATCHED_PLAYER_1.toString() 
        : 
        cellState.CELL_MATCHED_PLAYER_2.toString(),
      currentPlayer === player.FIRST_PLAYER? 
        cellState.CELL_CONTAINING_PIECE_PLAYER_1.toString()
        : 
        cellState.CELL_CONTAINING_PIECE_PLAYER_2.toString()
    );
};

export { refreshMatchedCells };