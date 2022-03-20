import { cellState } from "./constants";

/**
 * @description This method checks if the state of a cell signifies that it contains a piece of 
 * the second player.
 * @param stateOfCell State of the cell to be checked
 * @returns {Boolean} True if the cell contains a piece of the second player and false if it does not.
 */
 const cellContainsPlayerTwoPiece = (stateOfCell: number) => {
    if (stateOfCell === cellState.CELL_CONTAINING_PIECE_PLAYER_2) return true;
    if (stateOfCell === cellState.CELL_MATCHED_PLAYER_2) return true;
    if (stateOfCell === cellState.CELL_SELECTED_PLAYER_2) return true;
    if (stateOfCell === cellState.CELL_MATCHED_BEFORE_PLAYER_2) return true;

    return false;
}

export { cellContainsPlayerTwoPiece };