import { player } from './constants';

/**
   * @description This method checks if the last piece has been added to the board and players can proceed to move their pieces
   * around.
   * @param playerTurn The player whose turn it is to play.
   * @param playerTwoPiecesInHand The number of pieces left in the hand of player two.
   * @param setState Function that sets the new state if conditions are met.
   */
 const checkIfAllPiecesHaveBeenAddedToBoard = (playerTurn: number, playerTwoPiecesInHand: number, setState: Function) => {
  if (playerTurn === player.SECOND_PLAYER && playerTwoPiecesInHand === 1) {
      setState(true);
  } 
};

export { checkIfAllPiecesHaveBeenAddedToBoard };