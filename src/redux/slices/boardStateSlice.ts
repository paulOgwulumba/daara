import { createSlice } from '@reduxjs/toolkit';

export const boardStateSlice = createSlice({
    name: 'boardState',
    initialState: {
        boardState: '00000_00000_00000_00000_00000',
        allPiecesAddedToBoard: false,
        cellOfSelectedPiece: {
            X: 0, Y: 0,
        },
        boardStateArchive: ['00000_00000_00000_00000_00000'],
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
        },
        updateBoardStateArchive: (state, action) => {
            let tempArchive = [];

            for (let archive of state.boardStateArchive) {
                tempArchive.push(archive);
            }

            tempArchive.push(action.payload);

            state.boardStateArchive = tempArchive;
        },
        refreshBoardStateArchive: (state, action) => {
            state.boardStateArchive = ['00000_00000_00000_00000_00000'];
        }
    }
});

export const { updateBoardState, updateAllPiecesAddedToBoard, updateCellOfSelectedPiece, updateBoardStateArchive } = boardStateSlice.actions;

export default boardStateSlice.reducer;