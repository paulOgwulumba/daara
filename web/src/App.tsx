import React, { useState } from 'react';
import './App.css';
import { Board } from './components';
import { 
    addPieceToSelectedCell,
    checkIfAllPiecesHaveBeenAddedToBoard,
    decorateMatchedPieces,
    deselectPreviouslySelectedCell,
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
} from './utils';
import { cellPosition, gamePlayState } from './utils/interfaces';
import { player, cellState } from './utils/constants';

const initialBoardState = `00000_00000_00000_00000_00000`;

function App() {
  const numberOfPieces = 6;
  const [boardState, setBoardState] = useState(initialBoardState);
  const [playerTurn, setPlayerTurn] = useState(player.FIRST_PLAYER);
  const [currentPlayer, setCurrentPlayer] = useState(player.FIRST_PLAYER);
  const [allPiecesAddedToBoard, setAllPiecesAddedToBoard] = useState(false);
  const [playerOnePiecesInHand, setPlayerOnePiecesInHand] = useState(numberOfPieces);
  const [playerOnePiecesLeft, setPlayerOnePiecesLeft] = useState(numberOfPieces);
  const [playerTwoPiecesInHand, setPlayerTwoPiecesInHand] = useState(numberOfPieces);
  const [playerTwoPiecesLeft, setPlayerTwoPiecesLeft] = useState(numberOfPieces);
  const [isPlayerToPlayAgain, setIsPlayerToplayAgain] = useState(false);
  const [isPlayerToAttackOpponentPieces, setIsPlayerToAttackOpponentPieces] = useState(false);
  const [numberOfAttacksLeft, setNumberOfAttacksLeft] = useState(0);
  const [cellOfSelectedPiece, setCellOfselectedPiece] = useState({ X:0, Y:0 });
  
  
  
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
              addPieceToSelectedCell(unpackedBoardState, position, playerTurn, setBoardState);
              checkIfAllPiecesHaveBeenAddedToBoard(playerTurn, playerTwoPiecesInHand, setAllPiecesAddedToBoard);
              reduceNumberOfPiecesHeldByPlayerThatJustPlayed(playerTurn, setPlayerOnePiecesInHand, setPlayerTwoPiecesInHand, playerOnePiecesInHand, playerTwoPiecesInHand);
              togglePlayerTurn(playerTurn, setPlayerTurn); 
          } 
          else {
              alert(cellAdditionValidityStatus.message);
          }
      }
      else {
          // check if current player selected a piece before
          if (isPlayerToPlayAgain) {  
              if (isSelectedPieceClickedOnAgain(cellOfSelectedPiece, position)) {
                  deselectPreviouslySelectedCell(unpackedBoardState, playerTurn, position, setBoardState); 
                  endDoublePlay(setIsPlayerToplayAgain);
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
                      setNumberOfAttacksLeft(matchHandling.cellPositionsWithAMatch.length> 3? 2 : 1);
                      setIsPlayerToAttackOpponentPieces(true);
                      setIsPlayerToplayAgain(false);
                  } 
                  else {
                      togglePlayerTurn(playerTurn, setPlayerTurn);
                      togglePlayerTurn(playerTurn, setCurrentPlayer);
                      endDoublePlay(setIsPlayerToplayAgain);
                  }  

                  setBoardState(stringifyBoardState(unpackedBoardState));
              } 
              else {
                  alert(cellMovingValidityStatus.message);
              }
          }
          else if (isPlayerToAttackOpponentPieces) {
                const pieceAttackValidityStatus = isValidPieceToAttack(gamePlayState);
                if (pieceAttackValidityStatus.isValid) {
                    unpackedBoardState = removePieceFromCell(unpackedBoardState, position);
                    
                    setNumberOfAttacksLeft(numberOfAttacksLeft - 1);

                    let boardStateString = stringifyBoardState(unpackedBoardState);

                    if (numberOfAttacksLeft < 2) {
                        togglePlayerTurn(playerTurn, setPlayerTurn);

                        togglePlayerTurn(playerTurn, setCurrentPlayer);
                        
                        reduceNumberOfPiecesOfOpponentByOne(currentPlayer, playerOnePiecesLeft, playerTwoPiecesLeft, setPlayerOnePiecesLeft, setPlayerTwoPiecesLeft);
                        
                        endDoublePlay(setIsPlayerToAttackOpponentPieces);
                      
                        boardStateString = refreshMatchedCells(boardStateString, currentPlayer);
                    } 

                    setBoardState(boardStateString);
                }
                else {
                    alert(pieceAttackValidityStatus.message);
                }
          }
          else {
              const pieceSelectionValidationStatus = isValidPieceToSelect(gamePlayState);
              if (pieceSelectionValidationStatus.isValid) {
                  unpackedBoardState =  selectPieceToBeMoved(unpackedBoardState, playerTurn, position);
                  setBoardState(stringifyBoardState(unpackedBoardState));
                  setIsPlayerToplayAgain(true);
                  setCellOfselectedPiece(position);
              }
              else {
                  alert(pieceSelectionValidationStatus.message);
              }
          }
      }
  }

  return (
    <div className="App">
      <h2>{`Player ${playerTurn}'s Turn to Play.`}</h2>
      <p>{`Pieces left in hand: ${playerTurn === player.FIRST_PLAYER? playerOnePiecesInHand : playerTwoPiecesInHand}`}</p>
      <p>{`Pieces left: ${playerTurn === player.FIRST_PLAYER? playerOnePiecesLeft: playerTwoPiecesLeft}`}</p>
      <Board 
          boardState = { boardState } 
          numberOfColumns = {5} 
          numberOfRows = {5}
          handleCellClick = { handleClick }
      />
    </div>
  );
};



export default App;
