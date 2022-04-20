import { createSlice } from '@reduxjs/toolkit';

export const boardStateSlice = createSlice({
    name: 'boardState',
    initialState: {
        boardState: '00000_00000_00000_00000_00000',
        allPiecesAddedToBoard: false,
        cellOfSelectedPiece: {
            X: 0, Y: 0,
        },
    },
    reducers: {
        updateBoardState: (state, action) => {
            state.boardState = action.payload;
        },
        updateAllPiecesAddedToBoard: (state, action = { payload: true, type: '' }) => {
            state.allPiecesAddedToBoard = action.payload;
        },
        updateCellOfSelectedPiece: (state, action) => {
            state.cellOfSelectedPiece = action.payload;
        }
    }
});

export const { updateBoardState, updateAllPiecesAddedToBoard, updateCellOfSelectedPiece } = boardStateSlice.actions;

export default boardStateSlice.reducer;