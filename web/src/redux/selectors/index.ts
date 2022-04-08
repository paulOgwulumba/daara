import Store from '../store';

const getBoardState = () => {
    return Store.getState().boardState.boardState;
};

const selectBoardState = (state: any) => {
    return state.boardState.boardState;
};

const getAllPiecesAddedToBoard = () => {
    return Store.getState().boardState.allPiecesAddedToBoard;
};

const selectAllPiecesAddedToBoard = (state: any) => {
    return state.boardState.allPiecesAddedToBoard;
};

const getCellOfSelectedPiece = () => {
    return Store.getState().boardState.cellOfSelectedPiece;
};

const selectCellOfSelectedPiece = (state: any) => {
    return state.boardState.cellOfSelectedPiece;
};

const getCurrentPlayer = () => {
    return Store.getState().gamePlayState.currentPlayer;
};

const selectCurrentPlayer = (state: any) => {
    return state.gamePlayState.currentPlayer;
};

const getIsPlayerToAttackOpponentPieces = () => {
    return Store.getState().gamePlayState.isPlayerToAttackOpponentPieces;
};

const selectIsPlayerToAttackOpponentPieces = (state: any) => {
    return state.gamePlayState.isPlayerToAttackOpponentPieces;
};

const getIsPlayerToPlayAgain = () => {
    return Store.getState().gamePlayState.isPlayerToPlayAgain;
};

const selectIsPlayerToPlayAgain = (state: any) => {
    return state.gamePlayState.isPlayerToPlayAgain;
};

const getNumberOfAttacksLeft = () => {
    return Store.getState().gamePlayState.numberOfAttacksLeft;
};

const selectNumberOfAttacksLeft = (state: any) => {
    return state.gamePlayState.numberOfAttacksLeft;
};

const getPlayerTurn = () => {
    return Store.getState().gamePlayState.playerTurn;
};

const selectPlayerTurn = (state: any) => {
    return state.gamePlayState.playerTurn;
};

const getPlayerOnePiecesInHand = () => {
    return Store.getState().playerState.playerOnePiecesInHand;
};

const selectPlayerOnePiecesInHand = (state: any) => {
    return state.playerState.playerOnePiecesInHand;
};

const getPlayerTwoPiecesInHand = () => {
    return Store.getState().playerState.playerTwoPiecesInHand;
};

const selectPlayerTwoPiecesInHand = (state: any) => {
    return state.playerState.playerTwoPiecesInHand;
};

const getPlayerOnePiecesLeft = () => {
    return Store.getState().playerState.playerOnePiecesLeft;
};

const selectPlayerOnePiecesLeft = (state: any) => {
    return state.playerState.playerOnePiecesLeft;
};

const getPlayerTwoPiecesLeft = () => {
    return Store.getState().playerState.playerTwoPiecesLeft;
};

const selectPlayerTwoPiecesLeft = (state: any) => {
    return state.playerState.playerTwoPiecesLeft;
};

const getPlayerWalletAccount = () => {
    return Store.getState().appState.playerWalletAccount;
};

const selectPlayerWalletAccount = (state: any) => {
  return state.appState.playerWalletAccount;
};

const getCurrentView = () => {
    return Store.getState().appState.currentView;
};

const selectCurrentView = (state: any) => {
  return state.appState.currentView;
};

const selectContractAddress = (state: any) => {
    return state.appState.contractAddress;
}

export const StateGetter = {
    getBoardState,
    getAllPiecesAddedToBoard,
    getCellOfSelectedPiece,
    getCurrentPlayer,
    getIsPlayerToAttackOpponentPieces,
    getIsPlayerToPlayAgain,
    getNumberOfAttacksLeft,
    getPlayerTurn,
    getPlayerOnePiecesInHand,
    getPlayerTwoPiecesInHand,
    getPlayerOnePiecesLeft,
    getPlayerTwoPiecesLeft,
    getPlayerWalletAccount,
    getCurrentView,
};

export const Selector = {
    selectBoardState,
    selectAllPiecesAddedToBoard,
    selectCellOfSelectedPiece,
    selectContractAddress,
    selectCurrentPlayer,
    selectIsPlayerToAttackOpponentPieces,
    selectIsPlayerToPlayAgain,
    selectNumberOfAttacksLeft,
    selectPlayerTurn,
    selectPlayerOnePiecesInHand,
    selectPlayerTwoPiecesInHand,
    selectPlayerOnePiecesLeft,
    selectPlayerTwoPiecesLeft,
    selectPlayerWalletAccount,
    selectCurrentView,
}