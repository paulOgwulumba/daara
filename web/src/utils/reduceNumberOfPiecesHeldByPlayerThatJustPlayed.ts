import { player } from './constants';

/**
 * @description This method removes a piece from the hand of the player that just played.
 * @param playerTurn Player whose turn it is to play.
 * @param setStatePlayer1 State changer for number of pieces in player one's hand.
 * @param setStatePlayer2 State changer for number of pieces in player two's hand.
 * @param playerOnePiecesInHand Number of pieces currently in player one's hand.
 * @param playerTwoPiecesInHand Number of pieces currently in player two's hand.
 */
const reduceNumberOfPiecesHeldByPlayerThatJustPlayed = (
    playerTurn: number, 
    setStatePlayer1: Function, 
    setStatePlayer2: Function, 
    playerOnePiecesInHand: number, 
    playerTwoPiecesInHand: number
) => {
    playerTurn === player.FIRST_PLAYER? 
    setStatePlayer1(playerOnePiecesInHand - 1) 
    :
    setStatePlayer2(playerTwoPiecesInHand - 1)
};

export { reduceNumberOfPiecesHeldByPlayerThatJustPlayed };
