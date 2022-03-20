import { player, cellState } from "./constants";
import { cellPosition } from "./interfaces";

/**
 * @description This method decorates a list of pieces aligned to form a vertical or horizontal
 * match or both to look different from the other pieces.
 * @param cellPositionsWithAMatch Array containing cell positions that formed a match.
 * @param unpackedBoardState Array containing the current board state.
 * @param playerTurn The player whose turn it is to play.
 * @returns Array containing the updated board state.
 */
const decorateMatchedPieces = (
    cellPositionsWithAMatch: Array<cellPosition>, 
    unpackedBoardState: Array<Array<number>>, 
    playerTurn: number
) => {
    cellPositionsWithAMatch.forEach((cellPositionWithAMatch) => {
        unpackedBoardState[cellPositionWithAMatch.Y][cellPositionWithAMatch.X] = 
            playerTurn === player.FIRST_PLAYER? 
                cellState.CELL_MATCHED_PLAYER_1 
                :
                cellState.CELL_MATCHED_PLAYER_2
    });

    return unpackedBoardState;
};

export { decorateMatchedPieces };