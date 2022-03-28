import { player } from './constants';
import { updatePlayerTurn } from '../redux/slices';

/**
 * @description This method toggles the current player turn to give the next player the chance to play.
 * @param playerTurn The player whose turn it is to play.
 * @param setState Function that sets the state of the player whose turn it is to play.
 */
const togglePlayerTurn = (playerTurn: number, dispatch: any) => {
    //setState(playerTurn === player.FIRST_PLAYER? player.SECOND_PLAYER: player.FIRST_PLAYER);
    dispatch(updatePlayerTurn(playerTurn === player.FIRST_PLAYER? player.SECOND_PLAYER: player.FIRST_PLAYER));
};

export { togglePlayerTurn };