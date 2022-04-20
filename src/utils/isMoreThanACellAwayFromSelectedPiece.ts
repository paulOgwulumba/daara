import { cellPosition } from "./interfaces";

/**
 * @description This method compares two cell positions and returns true if they are next to each other and false if there 
 * is another cell betwen them.
 * @param cellClicked One of the cells.
 * @param cellOfSelectedPiece The other cell.
 * @returns True if the two cells are next to each other and false if they are not.
 */
const isMoreThanACellAwayFromSelectedPiece = (cellClicked: cellPosition, cellOfSelectedPiece: cellPosition): boolean => {
    if ((Math.abs(cellClicked.X - cellOfSelectedPiece.X) > 1) || (Math.abs(cellClicked.Y - cellOfSelectedPiece.Y) > 1)) {
        return true
    }
    else {return false};
}

export { isMoreThanACellAwayFromSelectedPiece };