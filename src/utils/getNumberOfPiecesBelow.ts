import { gamePlayState, cellPosition } from "./interfaces";
import { player, cellState } from './constants';

/**
 * @description This method gets the total number of identical pieces that would be lined behind a piece forming an unbroken chain
 * if the piece is placed on a particular cell.
 * @param currentGameState The current game state.
 * @returns The number of pieces behind of a cell that meet the aforementioned criteria.
 */
const getNumberOfPiecesBelow = (currentGameState: gamePlayState): number => {
    let numberOfPieces = 0;
    const { playerTurn, boardState, cellClicked } = currentGameState;   

    if (playerTurn === player.FIRST_PLAYER) {
        numberOfPieces = getNumberOfPiecesBelowPlayer1(boardState, cellClicked);
    } else if (playerTurn === player.SECOND_PLAYER) {
        numberOfPieces = getNumberOfPiecesBelowPlayer2(boardState, cellClicked);
    } else {
        throw `Invalid player number supplied: ${playerTurn}`;
    }

    return numberOfPieces;
};

const getNumberOfPiecesBelowPlayer1 = (boardState: Array<Array<number>>, cellPosition: cellPosition): number => {
    let numberOfPieces = 0;
    if (cellPosition.Y < (boardState.length - 1)) {
        const stateOfCellBelow = boardState[cellPosition.Y + 1][cellPosition.X];
        if (stateOfCellBelow === cellState.CELL_CONTAINING_PIECE_PLAYER_1 || stateOfCellBelow === cellState.CELL_MATCHED_BEFORE_PLAYER_1) {
            const cellPositionBelow: cellPosition = {
                X: cellPosition.X,
                Y: cellPosition.Y + 1,
            };

            numberOfPieces += (1 + getNumberOfPiecesBelowPlayer1(boardState, cellPositionBelow));
        } 
    }

    return numberOfPieces;
};

const getNumberOfPiecesBelowPlayer2 = (boardState: Array<Array<number>>, cellPosition: cellPosition): number => {
    let numberOfPieces = 0;
    if (cellPosition.Y < (boardState.length - 1)) {
        const stateOfCellBelow = boardState[cellPosition.Y + 1][cellPosition.X];
        if (stateOfCellBelow === cellState.CELL_CONTAINING_PIECE_PLAYER_2 || stateOfCellBelow === cellState.CELL_MATCHED_BEFORE_PLAYER_2) {
            const cellPositionBelow: cellPosition = {
                X: cellPosition.X,
                Y: cellPosition.Y + 1,
            };

            numberOfPieces += (1 + getNumberOfPiecesBelowPlayer2(boardState, cellPositionBelow));
        } 
    }

    return numberOfPieces;
};

export { getNumberOfPiecesBelow };
