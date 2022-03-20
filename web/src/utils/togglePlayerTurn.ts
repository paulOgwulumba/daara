import { player } from './constants';

/**
 * @description This method toggles the current player turn to give the next player the chance to play.
 * @param playerTurn The player whose turn it is to play.
 * @param setState Function that sets the state of the player whose turn it is to play.
 */
const togglePlayerTurn = (playerTurn: number, setState: Function) => {
  setState(playerTurn === player.FIRST_PLAYER? player.SECOND_PLAYER: player.FIRST_PLAYER);
};

export { togglePlayerTurn };