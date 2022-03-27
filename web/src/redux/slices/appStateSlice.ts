import { createSlice } from '@reduxjs/toolkit';
import { Views } from '../../utils/constants';

export const appStateSlice = createSlice({
    name: 'appState',
    initialState: {
        playerWalletAccount: {},
        currentView: Views.CONNECT_ACCOUNT_VIEW,
    },
    reducers: {
        updatePlayerWalletAccount: (state, action) => {
            state.playerWalletAccount = action.payload;
        },
        updateCurrentView: (state, action) => {
            state.currentView = action.payload;
        },
    }
});

export const { updatePlayerWalletAccount, updateCurrentView } = appStateSlice.actions;

export default appStateSlice.reducer;