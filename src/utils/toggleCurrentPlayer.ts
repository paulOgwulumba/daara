import { player } from './constants';
import { updateCurrentPlayer } from '../redux/slices';

/**
 * @description This method toggles the current player that owns this account.
 * @param playerTurn The player whose turn it is to play.
 * @param setState Function that sets the state of the player whose turn it is to play.
 */
const toggleCurrentPlayer = (playerTurn: number, dispatch: any) => {
    //setState(playerTurn === player.FIRST_PLAYER? player.SECOND_PLAYER: player.FIRST_PLAYER);
    dispatch(updateCurrentPlayer(playerTurn === player.FIRST_PLAYER? player.SECOND_PLAYER: player.FIRST_PLAYER));
};

export { toggleCurrentPlayer};