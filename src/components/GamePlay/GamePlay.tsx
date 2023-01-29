/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector, useDispatch } from 'react-redux';
import styles from './GamePlay.module.css';
import { Board } from '../../components';
import { 
    addPieceToSelectedCell,
    checkIfAllPiecesHaveBeenAddedToBoard,
    decorateMatchedPieces,
    deselectPreviouslySelectedCell,
    endAttack,
    endDoublePlay,
    unpackBoardState, 
    stringifyBoardState, 
    isValidCellToAddPieceTo, 
    isValidCellToMovePieceTo,
    isValidPieceToAttack,
    isValidPieceToSelect,
    processMatch,
    reduceNumberOfPiecesHeldByPlayerThatJustPlayed,
    reduceNumberOfPiecesOfOpponentByOne,
    refreshMatchedCells,
    removePieceFromCell,
    selectPieceToBeMoved,
    togglePlayerTurn,
    isSelectedPieceClickedOnAgain,
} from '../../utils';
import { cellPosition, gamePlayState } from '../../utils/interfaces';
import { usePrompt } from '../Prompt/usePrompt';
import { DRAW_STATE, player } from '../../utils/constants';
import { Selector } from '../../redux/selectors';
import { 
    updateBoardState,
    updateCellOfSelectedPiece,
    updateNumberOfAttacksLeft,
    updateIsPlayerToAttackOpponentPieces,
    updateIsPlayerToPlayAgain,
    updatePlayerTwoPiecesLeft,
    updatePlayerOnePiecesLeft,
    updateDrawState,
 } from '../../redux/slices';
import { PiecesLeft } from './PiecesLeft';
import { PiecesCaptured } from './PiecesCaptured';
import { PiecesInHand } from './PiecesInHand';
import { PlayerTurnAnimator } from './PlayerTurnAnimator';
import { ActionButtons } from './ActionButtons';
import { useEffect } from 'react';

interface IGamePlayProps {
    resolvePromise: Function,
    isGameLoading: boolean,
}

function GamePlay({ resolvePromise, isGameLoading }: IGamePlayProps) {
    const dispatch = useDispatch();

    const boardState = useSelector(Selector.selectBoardState);

    const { ask, inform } = usePrompt();

    const allPiecesAddedToBoard = useSelector(Selector.selectAllPiecesAddedToBoard);
    const cellOfSelectedPiece = useSelector(Selector.selectCellOfSelectedPiece);
    const currentPlayer = useSelector(Selector.selectCurrentPlayer);

    const playerTurn = useSelector(Selector.selectPlayerTurn);
    
    const playerOnePiecesInHand = useSelector(Selector.selectPlayerOnePiecesInHand) as number;
    const playerTwoPiecesInHand = useSelector(Selector.selectPlayerTwoPiecesInHand) as number;
    const playerOnePiecesLeft = useSelector(Selector.selectPlayerOnePiecesLeft) as number;
    const playerTwoPiecesLeft = useSelector(Selector.selectPlayerTwoPiecesLeft) as number;
    const isPlayerToPlayAgain = useSelector(Selector.selectIsPlayerToPlayAgain) as boolean;
    const isPlayerToAttackOpponentPieces = useSelector(Selector.selectIsPlayerToAttackOpponentPieces) as boolean;
    const numberOfAttacksLeft = useSelector(Selector.selectNumberOfAttacksLeft) as number;
    const drawState = useSelector(Selector.selectDrawState) as DRAW_STATE;
    
    const handleClick = async (position: cellPosition) => {
        let unpackedBoardState = unpackBoardState(boardState);
        const gamePlayState: gamePlayState = {
            playerTurn, 
            boardState: unpackedBoardState,
            currentPlayer,
            cellClicked: position,
            allPiecesAddedToBoard,
            cellOfSelectedPiece,
        };

        if (!allPiecesAddedToBoard) {
            const cellAdditionValidityStatus = isValidCellToAddPieceTo(gamePlayState);
            if (cellAdditionValidityStatus.isValid) {
                unpackedBoardState = addPieceToSelectedCell(unpackedBoardState, position, playerTurn, dispatch);
                checkIfAllPiecesHaveBeenAddedToBoard(playerTurn, playerTwoPiecesInHand, dispatch);
                reduceNumberOfPiecesHeldByPlayerThatJustPlayed(playerTurn, playerOnePiecesInHand, playerTwoPiecesInHand, dispatch);
                togglePlayerTurn(playerTurn, dispatch); 

                resolvePromise(stringifyBoardState(unpackedBoardState));
            } 
            else {
                await inform({
                    heading: 'Invalid Move',
                    information: cellAdditionValidityStatus.message,
                });
            }
        }
        else {
            // Make sure it is this player's turn to play
            if (currentPlayer !== playerTurn) {
                await inform({
                    heading: 'Invalid Move',
                    information: "It is not your turn to play, please hold on."
                });

                return;
            };

            // check if current player selected a piece before
            if (isPlayerToPlayAgain) {  
               
                if (isSelectedPieceClickedOnAgain(cellOfSelectedPiece, position)) {
                    deselectPreviouslySelectedCell(unpackedBoardState, playerTurn, position, dispatch); 
                    endDoublePlay(dispatch);
                    return;
                }

                const cellMovingValidityStatus = isValidCellToMovePieceTo(gamePlayState);

                if (cellMovingValidityStatus.isValid) {
                    unpackedBoardState = addPieceToSelectedCell(unpackedBoardState, position, playerTurn);
                    
                    unpackedBoardState = removePieceFromCell(unpackedBoardState, cellOfSelectedPiece);

                    const matchHandling = processMatch(gamePlayState);
                    if (matchHandling.isAMatch) {
                        
                        decorateMatchedPieces(matchHandling.cellPositionsWithAMatch, unpackedBoardState, playerTurn)
                    
                        // Signify that player can attack opponent's pieces.
                        dispatch(updateNumberOfAttacksLeft(matchHandling.cellPositionsWithAMatch.length> 3? 2 : 1));
                        dispatch(updateIsPlayerToAttackOpponentPieces(true));
                        dispatch(updateIsPlayerToPlayAgain(false));
                    } 
                    else {
                        togglePlayerTurn(playerTurn, dispatch);
                        endDoublePlay(dispatch);
                    }  

                    dispatch(updateBoardState(stringifyBoardState(unpackedBoardState)));

                    resolvePromise(stringifyBoardState(unpackedBoardState));
                } 
                else {
                    await inform({
                        heading: 'Invalid Move',
                        information: cellMovingValidityStatus.message,
                    });
                }
            }
            else if (isPlayerToAttackOpponentPieces) {
                    
                    const pieceAttackValidityStatus = isValidPieceToAttack(gamePlayState);
                    if (pieceAttackValidityStatus.isValid) {
                        unpackedBoardState = removePieceFromCell(unpackedBoardState, position);
                        
                        //setNumberOfAttacksLeft(numberOfAttacksLeft - 1);
                        dispatch(updateNumberOfAttacksLeft(numberOfAttacksLeft - 1))

                        let boardStateString = stringifyBoardState(unpackedBoardState);

                        reduceNumberOfPiecesOfOpponentByOne(currentPlayer, playerOnePiecesLeft, playerTwoPiecesLeft, dispatch);

                        if (numberOfAttacksLeft < 2) {
                            togglePlayerTurn(playerTurn, dispatch);
                            
                            endAttack(dispatch);
                        
                            boardStateString = refreshMatchedCells(boardStateString, currentPlayer);
                        } 

                        dispatch(updateBoardState(boardStateString));

                        resolvePromise(boardStateString);
                    }
                    else {
                        await inform({
                            heading: 'Invalid Move',
                            information: pieceAttackValidityStatus.message,
                        });
                    }
            }
            else {
                const pieceSelectionValidationStatus = isValidPieceToSelect(gamePlayState);
                if (pieceSelectionValidationStatus.isValid) {
                    unpackedBoardState =  selectPieceToBeMoved(unpackedBoardState, playerTurn, position);
                    
                    dispatch(updateBoardState(stringifyBoardState(unpackedBoardState)));

                    dispatch(updateIsPlayerToPlayAgain(true));

                    dispatch(updateCellOfSelectedPiece(position));
                }
                else {
                    await inform({
                        heading: 'Invalid Move',
                        information: pieceSelectionValidationStatus.message,
                    });
                }
            }
        }
    };

    const handleDraw = async () => {
        const response = await ask({
            heading: 'Draw',
            question: 'Are you sure you want to request for a draw?'
        });

        if (!response) return;

        dispatch(updateDrawState(DRAW_STATE.REJECTED_DRAW));
        resolvePromise();
    };

    const handleResign = async () => {
        const response = await ask({
            heading: 'Resign',
            question: 'Are you sure you want to resign? You will lose your wager.',
        });

        if (!response) return;

        if (currentPlayer === player.FIRST_PLAYER) {
            dispatch(updatePlayerOnePiecesLeft(2));
        }
        else {
            dispatch(updatePlayerTwoPiecesLeft(2));
        }

        resolvePromise();
    };

    const analyzeDrawState = async () => {
        if (drawState === DRAW_STATE.ASK_FOR_DRAW) {
            acceptOrRejectDraw();
        }

        if (drawState === DRAW_STATE.REJECTED_DRAW) {
            await inform({
                heading: 'Oops',
                information: 'Your request for a draw was rejected. Please, play your next move',
            });

            dispatch(updateDrawState(DRAW_STATE.NO_DRAW));
        }

        if (drawState === DRAW_STATE.ACCEPTED_DRAW) {
            dispatch(updatePlayerOnePiecesLeft(2));
            dispatch(updatePlayerTwoPiecesLeft(2));
            resolvePromise();
        }
    };

    const acceptOrRejectDraw = async () => {
        const response = await ask({
            heading: 'Draw',
            question: 'Your opponent is requesting for a draw. Do you accept?'
        });

        if (response) {
            dispatch(updateDrawState(DRAW_STATE.ACCEPTED_DRAW));
            dispatch(updatePlayerOnePiecesLeft(2));
            dispatch(updatePlayerTwoPiecesLeft(2));
            resolvePromise();
        }
        else {
            dispatch(updateDrawState(DRAW_STATE.REJECTED_DRAW));
            resolvePromise();
        }
    };

    useEffect(() => {
        if (!isGameLoading) {
            analyzeDrawState();
        }
    }, [isGameLoading])

    return (
      <>
        <div className={styles.App}>
            <div className={styles["player-info-overview"]}>
                <div className = {styles["player-info-title-wrapper"]}>
                  <p className = {styles["player-info-title"]}>
                      You
                  </p>
                  
                  <PlayerTurnAnimator isActive = { !isGameLoading } title='Your turn'/>
                  
                </div>
                <div className={styles["player-info"]}>
                    <p className={styles["player-info-heading"]}>Pieces Left</p>
                    <PiecesLeft 
                        currentPlayer = { currentPlayer } 
                        piecesLeft = { currentPlayer === player.FIRST_PLAYER? playerOnePiecesLeft : playerTwoPiecesLeft }
                    />
                </div>
                <div className={styles["player-info"]}>
                    <p className={styles["player-info-heading"]}>Pieces Captured</p>
                    <PiecesCaptured
                        opponent = { currentPlayer === player.FIRST_PLAYER? player.SECOND_PLAYER : player.FIRST_PLAYER } 
                        piecesLeft = { currentPlayer === player.FIRST_PLAYER? playerTwoPiecesLeft : playerOnePiecesLeft }
                    />
                </div>
            </div>
            <Board 
                boardState = { boardState } 
                numberOfColumns = {5} 
                numberOfRows = {5}
                handleCellClick = { handleClick }
            />
            <div className={styles["player-info-overview"]}>
                <div className = {styles["player-info-title-wrapper"]}>
                    <p className = {styles["player-info-title"]}>
                        Opponent
                    </p>
                    
                    <PlayerTurnAnimator isActive = { isGameLoading } title="Opponent's turn"/>
                </div>
                <div className={styles["player-info"]}>
                    <p className={styles["player-info-heading"]}>Pieces Left</p>
                    <PiecesLeft 
                        currentPlayer = { currentPlayer === player.FIRST_PLAYER? player.SECOND_PLAYER : player.FIRST_PLAYER } 
                        piecesLeft = { currentPlayer === player.FIRST_PLAYER? playerTwoPiecesLeft : playerOnePiecesLeft }
                    />
                </div>
                <div className={styles["player-info"]}>
                    <p className={styles["player-info-heading"]}>Pieces Captured</p>
                    <PiecesCaptured
                        opponent = { currentPlayer === player.FIRST_PLAYER? currentPlayer : player.SECOND_PLAYER } 
                        piecesLeft = { currentPlayer === player.FIRST_PLAYER? playerOnePiecesLeft : playerTwoPiecesLeft }
                    />
                </div>
            </div>
        </div>

        <PiecesInHand />

        <ActionButtons 
            onDraw={handleDraw}
            onResign={handleResign}
        />
      </>
    );
};


export { GamePlay };