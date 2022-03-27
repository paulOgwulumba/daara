import { configureStore } from '@reduxjs/toolkit';
import boardStateReducer from './slices/boardStateSlice';
import playerStateReducer from './slices/playerStateSlice';
import gamePlayStateReducer from './slices/gamePlayStateSlice';

export default configureStore({
    reducer: {
        boardState: boardStateReducer,
        playerState: playerStateReducer,
        gamePlayState: gamePlayStateReducer,
    }
})