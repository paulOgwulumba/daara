/**
 * @description Calling this method signifies that double play has ended and the player can start again.
 * Double play starts after a player selects their own piece to move it.
 * @param setState Method that sets the new state.
 */
 const endDoublePlay = (setState: React.Dispatch<React.SetStateAction<boolean>>) => {
      setState(false);
};

export { endDoublePlay };