import { cellPosition } from "./interfaces";
import { cellState } from "./constants";
import { stringifyBoardState } from ".";
import React from "react";

/**
 * @description This method removes a piece from a specified cell, making the cell empty.
 * @param unpackedBoardState Array representing the current board state.
 * @param cellToRemovePieceFrom The cell position to remove the piece from.
 * @param setState Method that sets the new board state.
 * @returns Array representing the new board state.
 */
const removePieceFromCell = (
    unpackedBoardState: Array<Array<number>>, 
    cellToRemovePieceFrom: cellPosition,
    setState?: React.Dispatch<React.SetStateAction<string>>
): Array<Array<number>> => {
    unpackedBoardState[cellToRemovePieceFrom.Y][cellToRemovePieceFrom.X] = cellState.CELL_EMPTY;

    if (setState) {
        setState(stringifyBoardState(unpackedBoardState));
    }

    return unpackedBoardState;
};

export { removePieceFromCell }