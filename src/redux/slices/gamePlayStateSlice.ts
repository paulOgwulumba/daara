import { createSlice } from '@reduxjs/toolkit';
import { DRAW_STATE, player } from '../../utils/constants'; 

export const gamePlayStateSlice = createSlice({
    name: 'gamePlayState',
    initialState: {
        playerTurn: player.FIRST_PLAYER,
        currentPlayer: player.FIRST_PLAYER,
        isPlayerToPlayAgain: false,
        isPlayerToAttackOpponentPieces: false,
        numberOfAttacksLeft: 0,
        drawState: DRAW_STATE.NO_DRAW,
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
        },
        updateDrawState: (state, action) => {
          state.drawState = action.payload;
        },
        refreshGamePlayState: (state) => {
            state.playerTurn = player.FIRST_PLAYER;
            state.currentPlayer = player.FIRST_PLAYER;
            state.isPlayerToPlayAgain = false;
            state.isPlayerToAttackOpponentPieces = false;
            state.numberOfAttacksLeft = 0;
            state.drawState = DRAW_STATE.NO_DRAW
        }
    }
});

export const {  
    updatePlayerTurn,
    updateCurrentPlayer,
    updateIsPlayerToPlayAgain,
    updateIsPlayerToAttackOpponentPieces,
    updateNumberOfAttacksLeft,
    updateDrawState,
    refreshGamePlayState,
} = gamePlayStateSlice.actions;

export default gamePlayStateSlice.reducer;