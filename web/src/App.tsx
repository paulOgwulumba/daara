import React, { useState, Component } from 'react';
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
import { player } from './utils/constants';

interface IAppState {
    boardState: string,
    playerTurn: number,
    currentPlayer: number,
    allPiecesAddedToBoard: boolean,
    playerOnePiecesInHand: number,
    playerOnePiecesLeft: number,
    playerTwoPiecesInHand: number,
    playerTwoPiecesLeft: number,
    isPlayerToPlayAgain: boolean,
    isPlayerToAttackOpponentPieces: boolean,
    numberOfAttacksLeft: number,
    cellOfSelectedPiece: cellPosition,
}

interface IAppProps {}

class App extends Component<IAppProps, IAppState> {
    initialNumberOfPieces = 6;
    initialBoardState = `00000_00000_00000_00000_00000`;

    addPieceToSelectedCell = addPieceToSelectedCell;

    constructor(props: IAppProps) {
        super(props);
        this.addPieceToSelectedCell = this.addPieceToSelectedCell.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    state = {
        boardState: this.initialBoardState,
        playerTurn: player.FIRST_PLAYER,
        currentPlayer: player.FIRST_PLAYER,
        allPiecesAddedToBoard: false,
        playerOnePiecesInHand: this.initialNumberOfPieces,
        playerOnePiecesLeft: this.initialNumberOfPieces,
        playerTwoPiecesInHand: this.initialNumberOfPieces,
        playerTwoPiecesLeft: this.initialNumberOfPieces,
        isPlayerToPlayAgain: false,
        isPlayerToAttackOpponentPieces: false,
        numberOfAttacksLeft: 0,
        cellOfSelectedPiece: { 
            X: 0,
            Y: 0,
        },
    }
  
    componentDidMount() {
        
    }
  
    handleClick(this: React.Component<IAppProps, IAppState>, position: cellPosition) {
        let unpackedBoardState = unpackBoardState(this.state.boardState);
        const gamePlayState: gamePlayState = {
            playerTurn: this.state.playerTurn, 
            boardState: unpackedBoardState,
            currentPlayer: this.state.currentPlayer,
            cellClicked: position,
            allPiecesAddedToBoard: this.state.allPiecesAddedToBoard,
            cellOfSelectedPiece: this.state.cellOfSelectedPiece,
        };

        if (!this.state.allPiecesAddedToBoard) {
            const cellAdditionValidityStatus = isValidCellToAddPieceTo(gamePlayState);
            if (cellAdditionValidityStatus.isValid) {
                addPieceToSelectedCell(unpackedBoardState, position, true);
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

    render() {
      return (
        <div className="App">
          <h2>{`Player ${this.state.playerTurn}'s Turn to Play.`}</h2>
          <p>{`Pieces left in hand: ${this.state.playerTurn === player.FIRST_PLAYER? this.state.playerOnePiecesInHand : this.state.playerTwoPiecesInHand}`}</p>
          <p>{`Pieces left: ${this.state.playerTurn === player.FIRST_PLAYER? this.state.playerOnePiecesLeft: this.state.playerTwoPiecesLeft}`}</p>
          <Board 
              boardState = { this.state.boardState } 
              numberOfColumns = {5} 
              numberOfRows = {5}
              handleCellClick = { () => {} }
          />
        </div>
      );
    }
};

type ReactAppType = typeof App;

export default App;
export type { IAppState, IAppProps };
