import { gamePlayState } from "./interfaces";

/**
 * @description This method checks if the cell clicked on is in a diagonal position with respect to the selected piece.
 * @param boardState 
 * @param cellClicked 
 * @returns 
 */
const isDiagonalCell = (currentGameState: gamePlayState): boolean => {
    const { cellClicked, cellOfSelectedPiece } = currentGameState;
    const differenceBetweenCellsInXDirection = Math.abs(cellClicked.X - cellOfSelectedPiece.X);
    const differenceBetweenCellsInYDirection = Math.abs(cellClicked.Y - cellOfSelectedPiece.Y);
    
    return (differenceBetweenCellsInXDirection > 0 && differenceBetweenCellsInYDirection > 0);
};

export { isDiagonalCell };