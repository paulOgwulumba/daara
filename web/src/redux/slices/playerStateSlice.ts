import { createSlice } from '@reduxjs/toolkit';

const initialPieces = 3;

export const playerStateSlice = createSlice({
    name: 'playerState',
    initialState: {
        playerOnePiecesInHand: initialPieces,
        playerOnePiecesLeft: initialPieces,
        playerTwoPiecesInHand: initialPieces,
        playerTwoPiecesLeft: initialPieces,
    },
    reducers: {
        updatePlayerOnePiecesInHand: (state, action) => {
            state.playerOnePiecesInHand = action.payload;
        },
        updatePlayerTwoPiecesInHand: (state, action) => {
            state.playerTwoPiecesInHand = action.payload;
        },
        updatePlayerOnePiecesLeft: (state, action) => {
            state.playerOnePiecesLeft = action.payload;
        },
        updatePlayerTwoPiecesLeft: (state, action) => {
            state.playerTwoPiecesLeft = action.payload;
        },
    }
});

export const {  
    updatePlayerOnePiecesInHand,
    updatePlayerTwoPiecesInHand,
    updatePlayerOnePiecesLeft,
    updatePlayerTwoPiecesLeft,
} = playerStateSlice.actions;

export default playerStateSlice.reducer;