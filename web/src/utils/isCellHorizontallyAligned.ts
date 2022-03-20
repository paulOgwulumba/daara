import { gamePlayState } from "./interfaces";
import { getNumberOfPiecesAhead, getNumberOfPiecesBehind } from ".";

/**
 * @description This method checks if placing a piece in a cell makes it horizontally align with at least three other identical pieces.
 * @param currentGameState The current game state.
 * @returns True if horizontal alignment is observed, false if it is not.
 */
 const isCellHorizontallyAligned = (currentGameState: gamePlayState, numberOfMatches = 3): boolean => {
    const numberOfPiecesAhead = getNumberOfPiecesAhead(currentGameState);
    const numberOfPiecesBehind = getNumberOfPiecesBehind(currentGameState);

    return numberOfPiecesAhead + numberOfPiecesBehind > (numberOfMatches - 2)? true : false;
};

export { isCellHorizontallyAligned };