import store from '../redux/store';

/**
 * @description This function encodes the current game play state into a string.
 * @param useSelector Redux hook that lets the method have access to the global state of the app.
 * @returns The encoded string representation of the current game play state.
 */
export const encodeGamePlayState = () => {
    const state = store.getState();
    const allPiecesAddedToBoard = state.boardState.allPiecesAddedToBoard;
    const cellOfSelectedPiece = state.boardState.cellOfSelectedPiece;
    const playerTurn = state.gamePlayState.playerTurn;
    const playerOnePiecesInHand = state.playerState.playerOnePiecesInHand;
    const playerTwoPiecesInHand = state.playerState.playerTwoPiecesInHand;
    const playerOnePiecesLeft = state.playerState.playerOnePiecesLeft;
    const playerTwoPiecesLeft = state.playerState.playerTwoPiecesLeft;
    const isPlayerToPlayAgain = state.gamePlayState.isPlayerToPlayAgain;
    const isPlayerToAttackOpponentPieces = state.gamePlayState.isPlayerToAttackOpponentPieces;
    const numberOfAttacksLeft = state.gamePlayState.numberOfAttacksLeft;
    const drawState = state.gamePlayState.drawState;

    let encodedString = '';
    encodedString += allPiecesAddedToBoard? 'T' : 'F';
    encodedString  += cellOfSelectedPiece.X.toString();
    encodedString  += cellOfSelectedPiece.Y.toString();
    encodedString += playerTurn.toString();
    encodedString += playerOnePiecesInHand.toString();
    encodedString += playerTwoPiecesInHand.toString();
    encodedString += playerOnePiecesLeft.toString();
    encodedString += playerTwoPiecesLeft.toString();
    encodedString += isPlayerToPlayAgain? 'T' : 'F';
    encodedString += isPlayerToAttackOpponentPieces? 'T' : 'F';
    encodedString += numberOfAttacksLeft.toString();
    encodedString += drawState.toString();

    return encodedString;
}