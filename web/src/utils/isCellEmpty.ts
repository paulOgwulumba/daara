import { cellState } from "./constants";

/**
 * @description This method checks if a cell is empty or not.
 * @param stateOfCell The state of the cell to be checked.
 * @returns True if the cell is empty and false if it contains a piece.
 */
 const isCellEmpty = (stateOfCell: number) => {
    if (stateOfCell === cellState.CELL_EMPTY) return true;
    else return false;
};

export { isCellEmpty };