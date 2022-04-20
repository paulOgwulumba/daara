import { createSlice } from '@reduxjs/toolkit';
import { player } from '../../utils/constants'; 

export const gamePlayStateSlice = createSlice({
    name: 'gamePlayState',
    initialState: {
        playerTurn: player.FIRST_PLAYER,
        currentPlayer: player.FIRST_PLAYER,
        isPlayerToPlayAgain: false,
        isPlayerToAttackOpponentPieces: false,
        numberOfAttacksLeft: 0,
    },
    reducers: {
        updatePlayerTurn: (state, action) => {
            state.playerTurn = action.payload;
        },
        updateCurrentPlayer: (state, action) => {
            state.currentPlayer = action.payload;
        },
        updateIsPlayerToPlayAgain: (state, action) => {
            state.isPlayerToPlayAgain = action.payload;
        },
        updateIsPlayerToAttackOpponentPieces: (state, action) => {
            state.isPlayerToAttackOpponentPieces = action.payload;
        },
        updateNumberOfAttacksLeft: (state, action) => {
            state.numberOfAttacksLeft = action.payload;
        }
    }
});

export const {  
    updatePlayerTurn,
    updateCurrentPlayer,
    updateIsPlayerToPlayAgain,
    updateIsPlayerToAttackOpponentPieces,
    updateNumberOfAttacksLeft
} = gamePlayStateSlice.actions;

export default gamePlayStateSlice.reducer;