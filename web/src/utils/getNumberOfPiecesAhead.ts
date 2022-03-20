import { gamePlayState, cellPosition } from "./interfaces";
import { player, cellState } from './constants';

/**
 * @description This method gets the total number of identical pieces that would be lined ahead of a piece forming an unbroken chain
 * if the piece is placed on a particular cell.
 * @param currentGameState The current game state.
 * @returns The number of pieces ahead of a cell.
 */
 const getNumberOfPiecesAhead = (currentGameState: gamePlayState): number => {
    let numberOfPieces = 0;
    const { playerTurn, boardState, cellClicked } = currentGameState;   

    if (playerTurn === player.FIRST_PLAYER) {
        numberOfPieces = getNumberOfPiecesAheadPlayer1(boardState, cellClicked);
    } else if (playerTurn === player.SECOND_PLAYER) {
        numberOfPieces = getNumberOfPiecesAheadPlayer2(boardState, cellClicked);
    } else {
        throw `Invalid player number supplied: ${playerTurn}`;
    }

    return numberOfPieces;
};

const getNumberOfPiecesAheadPlayer1 = (boardState: Array<Array<number>>, cellPosition: cellPosition): number => {
    let numberOfPieces = 0;
    if (cellPosition.X < (boardState.length - 1)) {
        const stateOfCellAhead = boardState[cellPosition.Y][cellPosition.X + 1];
        if (stateOfCellAhead === cellState.CELL_CONTAINING_PIECE_PLAYER_1 || stateOfCellAhead === cellState.CELL_MATCHED_BEFORE_PLAYER_1) {
            const cellPositionAhead: cellPosition = {
                X: cellPosition.X + 1,
                Y: cellPosition.Y,
            };

            numberOfPieces += (1 + getNumberOfPiecesAheadPlayer1(boardState, cellPositionAhead));
        } 
    }

    return numberOfPieces;
};

const getNumberOfPiecesAheadPlayer2 = (boardState: Array<Array<number>>, cellPosition: cellPosition): number => {
    let numberOfPieces = 0;
    if (cellPosition.X < (boardState.length - 1)) {
        const stateOfCellAhead = boardState[cellPosition.Y][cellPosition.X + 1];
        if (stateOfCellAhead === cellState.CELL_CONTAINING_PIECE_PLAYER_2 || stateOfCellAhead === cellState.CELL_MATCHED_BEFORE_PLAYER_2) {
            const cellPositionAhead: cellPosition = {
                X: cellPosition.X + 1,
                Y: cellPosition.Y,
            };

            numberOfPieces += (1 + getNumberOfPiecesAheadPlayer2(boardState, cellPositionAhead));
        } 
    }

    return numberOfPieces;
};

export { getNumberOfPiecesAhead };
