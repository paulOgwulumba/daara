/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { ConditionalRender } from './components';
import { 
    AttacherView,
    ConnectAccountView, 
    ConnectAccountErrorView,
    DeployerOrAttacherView,
    DeployerSetWagerView,
    GamePlayView, 
    WaitingForAttacherView,
    ConnectAccountWithMnemonicView,
    WinnerView,
    LoserView,
    ReviewGameView,
} from './views';
import { Views, participantTitle, player } from './utils/constants';
import { encodeGamePlayState, decodeGamePlayState } from './utils';
import { Loader, GameLoader } from './components';
import { Selector } from './redux/selectors';
import Store from './redux/store';
import { usePrompt } from './components/Prompt/usePrompt';
import { 
    updateBoardStateArchive,
    updateContractAddress,
    updatePlayerWalletAccount, 
    updateCurrentPlayer,
    updateCurrentView, 
    updateBoardState, 
    updateAllPiecesAddedToBoard,
    updateCellOfSelectedPiece,
    updateIsPlayerToAttackOpponentPieces,
    updateIsPlayerToPlayAgain,
    updateNumberOfAttacksLeft,
    updatePlayerOnePiecesInHand,
    updatePlayerOnePiecesLeft,
    updatePlayerTurn,
    updatePlayerTwoPiecesInHand,
    updatePlayerTwoPiecesLeft,
} from './redux/slices';


export interface IAppProps {
    reach: any,
    reachBackend: any,
};

const App = ({ reach, reachBackend }: IAppProps) => {
    const playerWalletAccount = useSelector(Selector.selectPlayerWalletAccount);
    const currentView = useSelector(Selector.selectCurrentView);
    const [promise, setPromise] = useState({resolve: null});
    const [isLoading, setIsLoading] = useState(false);
    const [isGameLoading, setIsGameLoading] = useState(false);;
    const [mnemonic, setMnemonic] = useState('');
    const [contractAddressEntry, setContractAddressEntry] = useState('');
    const [displayContractAddressError, setDisplayContractAddressError] = useState(false);
    const [displayMnemonicError, setDisplayMnemonicError] = useState(false);

    const { ask, inform } = usePrompt();

    const dispatch = useDispatch();

    const handleMnemonicChange = (value: string) => {
        setMnemonic(value);
        setDisplayMnemonicError(false);
    };

    const handleContractAddressChange = (value: string) => {
        setContractAddressEntry(value);
        setDisplayContractAddressError(false);
    }

    const awaitPlayerMove = async () => {
        await new Promise((resolve) => {
            setPromise({resolve: resolve});
        })
    };

    const awaitPlayerMoveOrSkipIfGameHasEnded = async () => {
        const currentPlayer = Store.getState().gamePlayState.currentPlayer;      
        const piecesLeft = currentPlayer === player.FIRST_PLAYER? Store.getState().playerState.playerOnePiecesLeft : Store.getState().playerState.playerTwoPiecesLeft;
            
        if (piecesLeft >= 3) {
            setIsGameLoading(false);
            await awaitPlayerMove();
        }
        else {
            console.log("Skipping move execution because player does not have enough pieces left.");
        }
    };

    const InteractInterface = {
        getNumberOfPiecesLeft: () => {
            setIsGameLoading(true);

            if (currentView !== Views.GAME_PLAY_VIEW)
                dispatch(updateCurrentView(Views.GAME_PLAY_VIEW));

            const currentPlayer = Store.getState().gamePlayState.currentPlayer;

            const playerPieces = 
                currentPlayer === player.FIRST_PLAYER? 
                Store.getState().playerState.playerTwoPiecesLeft
                :
                Store.getState().playerState.playerOnePiecesLeft;

            const opponentPieces = 
                currentPlayer === player.FIRST_PLAYER?
                Store.getState().playerState.playerOnePiecesLeft
                :
                Store.getState().playerState.playerTwoPiecesLeft
            
            return [playerPieces, opponentPieces];
        },

        dealPiece: async () => {
            if (currentView !== Views.GAME_PLAY_VIEW)
                dispatch(updateCurrentView(Views.GAME_PLAY_VIEW));

            const currentPlayer = Store.getState().gamePlayState.currentPlayer;
            const playerTurn = Store.getState().gamePlayState.playerTurn;
            
            if (playerTurn === currentPlayer) {      
                await awaitPlayerMoveOrSkipIfGameHasEnded(); 
            }
            else {
                console.log("Skipping your turn for opponent to complete their move...");
            }

            const boardState = Store.getState().boardState.boardState;
            const gamePlayState = encodeGamePlayState();
            return [boardState, gamePlayState];
        },

        updateOpponentMove: (newBoardState: any, gamePlayState: any) => {
            setIsGameLoading(true);

            if (currentView !== Views.GAME_PLAY_VIEW)
                dispatch(updateCurrentView(Views.GAME_PLAY_VIEW));
                
            const decodedGamePlayState = decodeGamePlayState(gamePlayState);

            dispatch(updateBoardStateArchive(newBoardState));
            
            dispatch(updateAllPiecesAddedToBoard(decodedGamePlayState.allPiecesAddedToBoard));
            dispatch(updateCellOfSelectedPiece(decodedGamePlayState.cellOfSelectedPiece));
            dispatch(updateIsPlayerToAttackOpponentPieces(decodedGamePlayState.isPlayerToAttackOpponentPieces));
            dispatch(updateIsPlayerToPlayAgain(decodedGamePlayState.isPlayerToPlayAgain));
            dispatch(updateNumberOfAttacksLeft(decodedGamePlayState.numberOfAttacksLeft));
            dispatch(updatePlayerOnePiecesInHand(decodedGamePlayState.playerOnePiecesInHand));
            dispatch(updatePlayerOnePiecesLeft(decodedGamePlayState.playerOnePiecesLeft));
            dispatch(updatePlayerTurn(decodedGamePlayState.playerTurn));
            dispatch(updatePlayerTwoPiecesInHand(decodedGamePlayState.playerTwoPiecesInHand));
            dispatch(updatePlayerTwoPiecesLeft(decodedGamePlayState.playerTwoPiecesLeft));
            dispatch(updateBoardState(newBoardState));
        }, 

        informTimeout: async () => {
            await inform({
                heading: 'Time Up!',
                information: 'Oops! Time is up. The game has ended',
            });

            dispatch(updateCurrentView(Views.DEPLOYER_OR_ATTACHER_VIEW));
            dispatch(updateContractAddress(''));
        },

        informDisagreement: async () => {
            await inform({
                heading: 'Disagreement!',
                information: 'Values from you and your opponent do not match! The game cannot continue.',
            });

            dispatch(updateCurrentView(Views.DEPLOYER_OR_ATTACHER_VIEW));
            dispatch(updateContractAddress(''));
        }, 

        announceWinner: () => {
            const currentPlayer = Store.getState().gamePlayState.currentPlayer;
            const piecesLeft = currentPlayer === player.FIRST_PLAYER? Store.getState().playerState.playerOnePiecesLeft : Store.getState().playerState.playerTwoPiecesLeft;
            setIsGameLoading(false);
            setIsLoading(false);
            
            if (piecesLeft >= 3) {
                dispatch(updateCurrentView(Views.WINNER_VIEW));
            }
            else {
                dispatch(updateCurrentView(Views.LOSER_VIEW));
            }
        }
    };

    const acceptWager = async (wager: number) => {
        setIsGameLoading(true);

        const accepted = await ask({
            heading: 'Wager',
            question: `Do you accept a wager of ${wager}?`,
        });
        
        if (!accepted) {
            dispatch(updateCurrentView(Views.DEPLOYER_OR_ATTACHER_VIEW));
            dispatch(updateContractAddress(''));
            setIsGameLoading(false);

            return await new Promise(() => null);
        }
    }

    const convertCurrencyFromBigNumberToSmallNumber = (amount: number) => {
        return reach.formatCurrency(amount, 10);
    };

    const handleCreateNewGame = async (wager: number) => {
        const balanceBigNum = await reach.balanceOf(playerWalletAccount);
        const balance = convertCurrencyFromBigNumberToSmallNumber(balanceBigNum);

        if ((balance) < (wager + 1)) {
            await inform ({
                heading: 'Error',
                information: `Insufficient funds in wallet to set the wager of ${wager}.`
            })
            return;
        }

        const interact = {
            ...InteractInterface,
            wager,
            deadline: 120,              // deadline of 120 seconds
        };

        let contract;

        setIsLoading(true);

        try {
            contract = playerWalletAccount.contract(reachBackend);
        } 
        catch (err) {
            setIsLoading(false);
            return;
        } 

        try {  
            reachBackend?.Alice(contract, interact);

            const contractAddress = JSON.stringify(await contract.getInfo(), null, 2);
            setIsLoading(false);

            dispatch(updateContractAddress(contractAddress));
            dispatch(updateCurrentView(Views.WAITING_FOR_ATTACHER_VIEW));
            dispatch(updateCurrentPlayer(player.SECOND_PLAYER))
        }
        catch (err) {
            setIsLoading(false);
            return;
        }
    };

    const handleJoinGame = async (contractAddress: string) => {
        setIsLoading(true);
        
        try {
            const contract = await playerWalletAccount?.contract(reachBackend, JSON.parse(contractAddress));
        
            const interact = {
                ...InteractInterface,
                acceptWager,
            };
            
            reachBackend.Bob(contract, interact);
            setIsGameLoading(true);
            setIsLoading(false);
            
            dispatch(updateCurrentPlayer(player.FIRST_PLAYER))
            dispatch(updateCurrentView(Views.GAME_PLAY_VIEW));
        } catch (err) {
            setIsLoading(false);
            setDisplayContractAddressError(true);
            return;
        }
    };

    const resolvePromise = (boardStateString) => {
        setIsGameLoading(true);

        dispatch(updateBoardStateArchive(boardStateString));

        promise.resolve();
    }

    const handlePlayerRoleSelect = (role: participantTitle) => {
        if (role === participantTitle.DEPLOYER) {
            dispatch(updateCurrentView(Views.DEPLOYER_SET_WAGER_VIEW));
        }
        else {
            dispatch(updateCurrentView(Views.ATTACHER_VIEW));
        } 
    };

    const handleReturn = (viewToReturnTo: Views) => {
        dispatch(updateCurrentView(viewToReturnTo));
    };

    const connectToDefaultAccount = async () => {
        try {
            const walletAccount = await reach.getDefaultAccount();
            dispatch(updatePlayerWalletAccount(walletAccount));
            dispatch(updateCurrentView(Views.DEPLOYER_OR_ATTACHER_VIEW));
        }
        catch (err) {
            dispatch(updateCurrentView(Views.CONNECT_ACCOUNT_ERROR_VIEW));
        }
    };

    const connectAccountWithKeyPhrase = async (mnemonic: string) => {
        try {
            const walletAccount = await reach.newAccountFromMnemonic(mnemonic);
            dispatch(updatePlayerWalletAccount(walletAccount));
            dispatch(updateCurrentView(Views.DEPLOYER_OR_ATTACHER_VIEW));
        }
        catch (e) {
            setDisplayMnemonicError(true);
        }
    };

    useEffect(() => {
        // connectToDefaultAccount();
    }, []);

    return (
      <div className = 'App'>
          <Loader isVisible = { isLoading }/>

          <GameLoader isVisible = { isGameLoading } />

          <ConditionalRender isVisible = { currentView === Views.CONNECT_ACCOUNT_VIEW }>
              <ConnectAccountView />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.CONNECT_ACCOUNT_ERROR_VIEW }>
              <ConnectAccountErrorView handleReturn = { handleReturn }/>
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.DEPLOYER_OR_ATTACHER_VIEW }>
              <DeployerOrAttacherView handleParticipantTitleSelect = { handlePlayerRoleSelect }/>
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.DEPLOYER_SET_WAGER_VIEW }>
              <DeployerSetWagerView 
                  handleReturn = { handleReturn }
                  handleCreateNewGame = { handleCreateNewGame }
              />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.GAME_PLAY_VIEW }>
              <GamePlayView 
                    resolvePromise = { resolvePromise }
                    isGameLoading = { isGameLoading }
              />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.WAITING_FOR_ATTACHER_VIEW }>
                <WaitingForAttacherView />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.ATTACHER_VIEW }>
                <AttacherView 
                    handleReturn = { handleReturn }
                    handleJoinGame = { handleJoinGame }
                    contractAddress = { contractAddressEntry }
                    handleChange = { handleContractAddressChange }
                    isError  = { displayContractAddressError }
                />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.CONNECT_ACCOUNT_WITH_MNEMONIC_VIEW }>
                <ConnectAccountWithMnemonicView 
                    handleReturn = { handleReturn }
                    handleConnectAccountWithKeyPhrase = { connectAccountWithKeyPhrase }
                    handleChange = { handleMnemonicChange }
                    isError = { displayMnemonicError }
                    mnemonic = { mnemonic }
                />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.WINNER_VIEW }>
              <WinnerView />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.LOSER_VIEW }>
              <LoserView />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.REVIEW_GAME_VIEW }>
              <ReviewGameView />
          </ConditionalRender>
      </div>
    )
};

export default App;
