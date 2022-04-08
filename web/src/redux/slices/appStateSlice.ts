import { createSlice } from '@reduxjs/toolkit';
import { Views } from '../../utils/constants';

export const appStateSlice = createSlice({
    name: 'appState',
    initialState: {
        playerWalletAccount: {},
        currentView: Views.CONNECT_ACCOUNT_VIEW,
        contractAddress: '',
    },
    reducers: {
        updatePlayerWalletAccount: (state, action) => {
            state.playerWalletAccount = action.payload;
        },
        updateCurrentView: (state, action) => {
            state.currentView = action.payload;
        },
        updateContractAddress: (state, action) => {
            state.contractAddress = action.payload;
        },
    }
});

export const { updatePlayerWalletAccount, updateCurrentView, updateContractAddress } = appStateSlice.actions;

export default appStateSlice.reducer;