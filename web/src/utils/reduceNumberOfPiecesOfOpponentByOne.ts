import React from "react";
import { player } from "./constants";

/**
 * @description This method reduces the number of pieces of the other player by one.
 * @param currentPlayer Player whose turn it is to play.
 * @param playerOnePiecesLeft Number of pieces player one has currently.
 * @param playerOnePiecesLeft Number of pieces player two has currently.
 * @param setStatePlayerOne Method that sets the new state for player one if their piece was taken.
 * @param setStatePlayerTwo Method that sets the new state for player two if their piece was taken.
 */
const reduceNumberOfPiecesOfOpponentByOne = (
    currentPlayer: number, 
    playerOnePiecesLeft: number,
    playerTwoPiecesLeft: number,
    setStatePlayerOne: React.Dispatch<React.SetStateAction<number>>, 
    setStatePlayerTwo: React.Dispatch<React.SetStateAction<number>>,
) => {
    currentPlayer === player.FIRST_PLAYER? 
        setStatePlayerTwo(playerTwoPiecesLeft - 1) 
        : 
        setStatePlayerOne(playerOnePiecesLeft - 1);
};

export { reduceNumberOfPiecesOfOpponentByOne };