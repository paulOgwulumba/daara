import { player } from './constants';
import { updatePlayerOnePiecesInHand, updatePlayerTwoPiecesInHand } from '../redux/slices';

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
    playerOnePiecesInHand: number, 
    playerTwoPiecesInHand: number,
    dispatch: any, 
) => {
    playerTurn === player.FIRST_PLAYER? 
    dispatch(updatePlayerOnePiecesInHand(playerOnePiecesInHand - 1)) //setStatePlayer1(playerOnePiecesInHand - 1) 
    :
    dispatch(updatePlayerTwoPiecesInHand(playerTwoPiecesInHand - 1)) //setStatePlayer2(playerTwoPiecesInHand - 1)
};

export { reduceNumberOfPiecesHeldByPlayerThatJustPlayed };
