import { updateIsPlayerToAttackOpponentPieces } from "../redux/slices";

/**
 * @description Calling this method signifies that attack has ended and the next player can play.
 * Attack starts after a player achieves a match.
 * @param setState Method that sets the new state.
 */
 const endAttack = (dispatch: any) => {
      //setState(false);
      dispatch(updateIsPlayerToAttackOpponentPieces(false));
};

export { endAttack };