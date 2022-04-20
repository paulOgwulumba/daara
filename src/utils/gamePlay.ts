import { cellState, player } from './constants';
import { gamePlayState, cellPosition } from './interfaces';
import {
    cellContainsPlayerOnePiece, 
    cellContainsPlayerTwoPiece,
    isCellEmpty,
    isCellHorizontallyAligned,
    isCellVerticallyAligned,
    isDiagonalCell,
    isMoreThanACellAwayFromSelectedPiece,
} from './';

interface gamePlayCheckReturnValue {
    isValid: boolean,
    message: string,
};

/**
 * @description This method checks if a piece selected by a player is a valid one to select.
 * A player cannot select a cell containing the piece of the other player. A player cannot select
 * an empty cell too.
 * @param currentGameState Object containing the current game state.
 * @returns {Boolean} True if the cell can be selected and false if it cannot.
 */
const isValidPieceToSelect = (currentGameState: gamePlayState): gamePlayCheckReturnValue => {
    const { currentPlayer, boardState, playerTurn, cellClicked } = currentGameState;
    const stateOfCellClicked = boardState[cellClicked.Y][cellClicked.X];

    // If it is not this player's turn to play, return 'false';
    if (currentPlayer !== playerTurn) {
        return {
            isValid: false,
            message: "It is not your turn to play, please hold on.",
        }
    };

    // If it is an empty cell, return 'false'.
    if (isCellEmpty(stateOfCellClicked)){
        return {
            isValid: false,
            message: 'Please select your piece, there is no piece on this cell.'
        }
    }

    switch (currentGameState.currentPlayer) {
        case player.FIRST_PLAYER: {
            if (cellContainsPlayerTwoPiece(stateOfCellClicked)) {
                return {
                    isValid: false,
                    message: "You cannot select your opponent's piece."
                };
            }
            break;
        }
        case player.SECOND_PLAYER: {
            if (cellContainsPlayerOnePiece(stateOfCellClicked))  {
                return {
                    isValid: false,
                    message: "You cannot select your opponent's piece."
                }
            }
            break;
        }
    }

    return {
        isValid: true,
        message: 'Piece is valid to select.',
    }
};

/**
 * @description This method checks if the cell that a player wants to add a piece in hand to
 * is valid. To pass validity check, the cell must be empty and it must not complete a 3-piece match or higher in
 * either the horizontal or vertical axis.
 * @param currentGameState 
 */
const isValidCellToAddPieceTo = (currentGameState: gamePlayState): gamePlayCheckReturnValue => {
    const {boardState, cellClicked } = currentGameState;
    const stateOfCellClicked = boardState[cellClicked.Y][cellClicked.X];

    // If it is not an empty cell, return 'false'.
    if (!isCellEmpty(stateOfCellClicked)){
        return {
            isValid: false,
            message: 'Please select an empty cell.'
        };
    }

    // if adding piece to cell will complete a horizontal match, return 'false'.
    if (isCellHorizontallyAligned(currentGameState)) {
        return {
            isValid: false,
            message: 'You cannot place your piece here because it completes a horizontal match.'
        };
    }

    // if adding piece to cell will complete a vertical match, return 'false'.
    if (isCellVerticallyAligned(currentGameState)) {
        return {
            isValid: false,
            message: 'You cannot place your piece here because it completes a vertical match.'
        }
    }

    return {
        isValid: true,
        message: 'Validity check passed.',
    }
};

/**
 * @description This method checks if the cell that a player wants to move a piece on the board to
 * is valid. To pass validity check, the cell must be empty and it must not complete a 4-piece match or higher in
 * either the horizontal or vertical axis.
 * @param currentGameState 
 * @returns 
 */
const isValidCellToMovePieceTo = (currentGameState: gamePlayState):gamePlayCheckReturnValue => {
    const {boardState, cellClicked, cellOfSelectedPiece } = currentGameState;
    const stateOfCellClicked = boardState[cellClicked.Y][cellClicked.X];

    // If it is not an empty cell, return 'false'.
    if (!isCellEmpty(stateOfCellClicked)){
        return {
            isValid: false,
            message: 'You cannot move a piece to this cell because it is already occupied.'
        };
    }

    // if cell selected is not a cell away from the previously selected piece, return 'false'.
    if (isMoreThanACellAwayFromSelectedPiece(cellClicked, cellOfSelectedPiece)){
        return {
            isValid: false,
            message: 'You cannot place your piece here because it is not next to your piece\'s original position.',
        };
    }

    // if cell selected is diagonally placed with respect to previously selected piece, return false.
    if (isDiagonalCell(currentGameState)) {
        return {
            isValid: false,
            message: 'You can only move your piece in the North, South, West or East direction. No diagonal movement allowed',
        };
    }

    // if adding piece to cell will complete a horizontal match of more than 3 pieces, return 'false'.
    if (isCellHorizontallyAligned(currentGameState, 4)) {
        return {
            isValid: false,
            message: 'You cannot place your piece here because it completes a horizontal match of more than 3 pieces.'
        };
    }

    // if adding piece to cell will complete a vertical match of more than 3, return 'false'.
    if (isCellVerticallyAligned(currentGameState, 4)) {
        return {
            isValid: false,
            message: 'You cannot place your piece here because it completes a vertical match of more than 3 pieces.'
        }
    }

    return {
        isValid: true,
        message: 'Validity check passed.',
    };
};

/**
 * @description This method checks if a piece attacked by a player is a valid one to attack.
 * A player cannot select a cell containing either their piece or no piece at all. A player can only attack the opponent's piece.
 * @param currentGameState Object containing the current game state.
 * @returns {Boolean} True if the cell can be attacked and false if it cannot.
 */
const isValidPieceToAttack = (currentGameState: gamePlayState): gamePlayCheckReturnValue => {
    const { currentPlayer, boardState, playerTurn, cellClicked } = currentGameState;
    const stateOfCellClicked = boardState[cellClicked.Y][cellClicked.X];

    // If it is an empty cell, return 'false'.
    if (isCellEmpty(stateOfCellClicked)){
        return {
            isValid: false,
            message: 'Please select your opponent\'s piece, there is no piece on this cell.'
        }
    }

    switch (currentGameState.currentPlayer) {
        case player.FIRST_PLAYER: {
            if (cellContainsPlayerOnePiece(stateOfCellClicked)) {
                return {
                    isValid: false,
                    message: "You cannot select your opponent's piece."
                };
            }
            break;
        }
        case player.SECOND_PLAYER: {
            if (cellContainsPlayerTwoPiece(stateOfCellClicked))  {
                return {
                    isValid: false,
                    message: "You cannot select your piece. Please select your opponent's piece"
                }
            }
            break;
        }
    }

    return {
        isValid: true,
        message: 'Validity check passed.',
    };
}

export { isValidPieceToSelect, isValidCellToAddPieceTo, isValidCellToMovePieceTo, isValidPieceToAttack };