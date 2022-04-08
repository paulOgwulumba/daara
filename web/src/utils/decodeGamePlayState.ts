import { cellPosition } from "./interfaces";

/**
 * @description This function decodes a string representation of the game play state and converts it into an 
 * actual object representing the game play state.
 * @param encodedState String representation of the game play state
 */
export const decodeGamePlayState = (encodedState: string) => {
    if (encodedState.length !== 11) {
        throw `Invalid string encoding detected. String is ${encodedState.length} characters long instead of 11.`
    }

    const allPiecesAddedToBoard = encodedState[0] === 'T'? true : false;
    const cellOfSelectedPiece: cellPosition = {
        X: parseInt(encodedState[1]),
        Y: parseInt(encodedState[2])
    };
    const playerTurn = parseInt(encodedState[3]);
    const playerOnePiecesInHand = parseInt(encodedState[4]);
    const playerTwoPiecesInHand = parseInt(encodedState[5]);
    const playerOnePiecesLeft = parseInt(encodedState[6]);
    const playerTwoPiecesLeft = parseInt(encodedState[7]);
    const isPlayerToPlayAgain = encodedState[8] === 'T'? true : false;
    const isPlayerToAttackOpponentPieces = encodedState[9] === 'T'? true : false;
    const numberOfAttacksLeft = parseInt(encodedState[10]);
    
    return {
        allPiecesAddedToBoard,
        cellOfSelectedPiece,
        playerTurn,
        playerOnePiecesInHand,
        playerTwoPiecesInHand,
        playerOnePiecesLeft,
        playerTwoPiecesLeft,
        isPlayerToPlayAgain,
        isPlayerToAttackOpponentPieces,
        numberOfAttacksLeft
    }
};