import { cellPosition } from "./interfaces"

/**
 * @description This method compares the cell of the previously selected piece and the cell currently clicked on
 * and returns true if they are the same.
 * @param cellOfSelectedPiece Cell position of the previously selected piece.
 * @param cellClickedOn Cell position player clicked on.
 * @returns {boolean} True if the two cells are the same and false if not.
 */
const isSelectedPieceClickedOnAgain = (cellOfSelectedPiece: cellPosition, cellClickedOn: cellPosition) => {
    return JSON.stringify(cellOfSelectedPiece) === JSON.stringify(cellClickedOn);
};

export { isSelectedPieceClickedOnAgain };