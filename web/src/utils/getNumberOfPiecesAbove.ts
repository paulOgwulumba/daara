import { gamePlayState, cellPosition } from "./interfaces";
import { player, cellState } from './constants';

/**
 * @description This method gets the total number of identical pieces that would be lined above a piece forming an unbroken chain
 * if the piece is placed on a particular cell.
 * @param currentGameState The current game state.
 * @returns The number of pieces above a cell.
 */
 const getNumberOfPiecesAbove = (currentGameState: gamePlayState): number => {
    let numberOfPieces = 0;
    const { playerTurn, boardState, cellClicked } = currentGameState;   

    if (playerTurn === player.FIRST_PLAYER) {
        numberOfPieces = getNumberOfPiecesAbovePlayer1(boardState, cellClicked);
    } else if (playerTurn === player.SECOND_PLAYER) {
        numberOfPieces = getNumberOfPiecesAbovePlayer2(boardState, cellClicked);
    } else {
        throw `Invalid player number supplied: ${playerTurn}`;
    }

    return numberOfPieces;
};

const getNumberOfPiecesAbovePlayer1 = (boardState: Array<Array<number>>, cellPosition: cellPosition): number => {
    let numberOfPieces = 0;
    if (cellPosition.Y > 0) {
        const stateOfCellAbove = boardState[cellPosition.Y - 1][cellPosition.X];
        if (stateOfCellAbove === cellState.CELL_CONTAINING_PIECE_PLAYER_1 || stateOfCellAbove === cellState.CELL_MATCHED_BEFORE_PLAYER_1) {
            const cellPositionAbove: cellPosition = {
                X: cellPosition.X,
                Y: cellPosition.Y - 1,
            };

            numberOfPieces += (1 + getNumberOfPiecesAbovePlayer1(boardState, cellPositionAbove));
        } 
    }

    return numberOfPieces;
};

const getNumberOfPiecesAbovePlayer2 = (boardState: Array<Array<number>>, cellPosition: cellPosition): number => {
    let numberOfPieces = 0;
    if (cellPosition.Y > 0) {
        const stateOfCellAbove = boardState[cellPosition.Y - 1][cellPosition.X];
        if (stateOfCellAbove === cellState.CELL_CONTAINING_PIECE_PLAYER_2 || stateOfCellAbove === cellState.CELL_MATCHED_BEFORE_PLAYER_2) {
            const cellPositionAbove: cellPosition = {
                X: cellPosition.X,
                Y: cellPosition.Y - 1,
            };

            numberOfPieces += (1 + getNumberOfPiecesAbovePlayer2(boardState, cellPositionAbove));
        } 
    }

    return numberOfPieces;
};

export { getNumberOfPiecesAbove };
