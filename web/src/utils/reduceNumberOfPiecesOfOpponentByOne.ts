import React from "react";
import { player } from "./constants";
import { updatePlayerOnePiecesLeft, updatePlayerTwoPiecesLeft } from "../redux/slices";

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
    dispatch: any,
) => {
    currentPlayer === player.FIRST_PLAYER? 
        dispatch(updatePlayerTwoPiecesLeft(playerTwoPiecesLeft - 1))// setStatePlayerTwo(playerTwoPiecesLeft - 1) 
        : 
        dispatch(updatePlayerOnePiecesLeft(playerOnePiecesLeft - 1))//setStatePlayerOne(playerOnePiecesLeft - 1);
};

export { reduceNumberOfPiecesOfOpponentByOne };