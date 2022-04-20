import { createSlice } from '@reduxjs/toolkit';

const initialPieces = 5;

export const playerStateSlice = createSlice({
    name: 'playerState',
    initialState: {
        startingNumberOfPieces: initialPieces,
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
        refreshPlayerState: (state) => {
            state.playerOnePiecesInHand = initialPieces;
            state.playerTwoPiecesInHand = initialPieces;
            state.playerOnePiecesLeft = initialPieces;
            state.playerTwoPiecesLeft = initialPieces;
        }
    }
});

export const {  
    updatePlayerOnePiecesInHand,
    updatePlayerTwoPiecesInHand,
    updatePlayerOnePiecesLeft,
    updatePlayerTwoPiecesLeft,
    refreshPlayerState,
} = playerStateSlice.actions;

export default playerStateSlice.reducer;