import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './GamePlay.css';
import { Board } from '../../components';
import { 
    addPieceToSelectedCell,
    checkIfAllPiecesHaveBeenAddedToBoard,
    decodeGamePlayState,
    decorateMatchedPieces,
    deselectPreviouslySelectedCell,
    encodeGamePlayState,
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
    //toggleCurrentPlayer,
    togglePlayerTurn,
    isSelectedPieceClickedOnAgain,
} from '../../utils';
import { cellPosition, gamePlayState } from '../../utils/interfaces';
import { player, cellState } from '../../utils/constants';
import { Selector } from '../../redux/selectors';
import { 
    updateBoardState,
    updateCellOfSelectedPiece,
    updateNumberOfAttacksLeft,
    updateIsPlayerToAttackOpponentPieces,
    updateIsPlayerToPlayAgain,
 } from '../../redux/slices';

const initialBoardState = `00000_00000_00000_00000_00000`;

interface IGamePlayProps {
    resolvePromise: Function,
}

function GamePlay({ resolvePromise }: IGamePlayProps) {
    const dispatch = useDispatch();

    const boardState = useSelector(Selector.selectBoardState);

    const allPiecesAddedToBoard = useSelector(Selector.selectAllPiecesAddedToBoard);
    const cellOfSelectedPiece = useSelector(Selector.selectCellOfSelectedPiece);
    const currentPlayer = useSelector(Selector.selectCurrentPlayer);

    const playerTurn = useSelector(Selector.selectPlayerTurn);
    
    const playerOnePiecesInHand = useSelector(Selector.selectPlayerOnePiecesInHand);
    const playerTwoPiecesInHand = useSelector(Selector.selectPlayerTwoPiecesInHand);
    const playerOnePiecesLeft = useSelector(Selector.selectPlayerOnePiecesLeft);
    const playerTwoPiecesLeft = useSelector(Selector.selectPlayerTwoPiecesLeft);
    const isPlayerToPlayAgain = useSelector(Selector.selectIsPlayerToPlayAgain);
    const isPlayerToAttackOpponentPieces = useSelector(Selector.selectIsPlayerToAttackOpponentPieces);
    const numberOfAttacksLeft = useSelector(Selector.selectNumberOfAttacksLeft);
    
    
    const handleClick = (position: cellPosition) => {
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
                addPieceToSelectedCell(unpackedBoardState, position, playerTurn, dispatch);
                checkIfAllPiecesHaveBeenAddedToBoard(playerTurn, playerTwoPiecesInHand, dispatch);
                reduceNumberOfPiecesHeldByPlayerThatJustPlayed(playerTurn, playerOnePiecesInHand, playerTwoPiecesInHand, dispatch);
                togglePlayerTurn(playerTurn, dispatch); 
                resolvePromise();
            } 
            else {
                alert(cellAdditionValidityStatus.message);
            }
        }
        else {
            // Make sure it is this player's turn to play
            if (currentPlayer !== playerTurn) {
                alert("It is not your turn to play, please hold on.");
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

                    resolvePromise();
                } 
                else {
                    alert(cellMovingValidityStatus.message);
                }
            }
            else if (isPlayerToAttackOpponentPieces) {
                    
                    const pieceAttackValidityStatus = isValidPieceToAttack(gamePlayState);
                    if (pieceAttackValidityStatus.isValid) {
                        unpackedBoardState = removePieceFromCell(unpackedBoardState, position);
                        
                        //setNumberOfAttacksLeft(numberOfAttacksLeft - 1);
                        dispatch(updateNumberOfAttacksLeft(numberOfAttacksLeft - 1))

                        let boardStateString = stringifyBoardState(unpackedBoardState);

                        if (numberOfAttacksLeft < 2) {
                            togglePlayerTurn(playerTurn, dispatch);
                            
                            reduceNumberOfPiecesOfOpponentByOne(currentPlayer, playerOnePiecesLeft, playerTwoPiecesLeft, dispatch);
                            
                            endAttack(dispatch);
                        
                            boardStateString = refreshMatchedCells(boardStateString, currentPlayer);
                        } 

                        dispatch(updateBoardState(boardStateString));

                        resolvePromise();
                    }
                    else {
                        alert(pieceAttackValidityStatus.message);
                    }
            }
            else {
                const pieceSelectionValidationStatus = isValidPieceToSelect(gamePlayState);
                if (pieceSelectionValidationStatus.isValid) {
                    unpackedBoardState =  selectPieceToBeMoved(unpackedBoardState, playerTurn, position);
                    
                    dispatch(updateBoardState(stringifyBoardState(unpackedBoardState)));

                    dispatch(updateIsPlayerToPlayAgain(true));

                    dispatch(updateCellOfSelectedPiece(position));

                    resolvePromise();
                }
                else {
                    alert(pieceSelectionValidationStatus.message);
                }
            }
        }
    }

    return (
        <div className="App">
        <h2>{playerTurn === currentPlayer? 'Your turn to play' : "Your opponent's turn to play"}</h2>
        <p>{`Pieces left in hand: ${currentPlayer === player.FIRST_PLAYER? playerOnePiecesInHand : playerTwoPiecesInHand}`}</p>
        <p>{`Pieces left: ${currentPlayer === player.FIRST_PLAYER? playerOnePiecesLeft: playerTwoPiecesLeft}`}</p>
        <Board 
            boardState = { boardState } 
            numberOfColumns = {5} 
            numberOfRows = {5}
            handleCellClick = { handleClick }
        />
        </div>
    );
};


export { GamePlay };