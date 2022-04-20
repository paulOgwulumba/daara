import { configureStore } from '@reduxjs/toolkit';
import appStateReducer from './slices/appStateSlice';
import boardStateReducer from './slices/boardStateSlice';
import playerStateReducer from './slices/playerStateSlice';
import gamePlayStateReducer from './slices/gamePlayStateSlice';

export default configureStore({
    reducer: {
        appState: appStateReducer,
        boardState: boardStateReducer,
        playerState: playerStateReducer,
        gamePlayState: gamePlayStateReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            // Ignore these action types
            ignoredActions: ['appState/action/updatePlayerWalletAccount'],
            // Ignore these field paths in all actions
            ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
            // Ignore these paths in the state
            ignoredPaths: [
                'appState.playerWalletAccount',
            ],
          },
    }),
})