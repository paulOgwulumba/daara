import React from 'react';
import styles from './Board.module.css';
import BoardCell from './BoardCell';
import BoardRow from './BoardRow';
import { unpackBoardState } from '../../utils';

interface BoardProps {
    numberOfRows: number,
    numberOfColumns: number,
    boardState: string,
    handleCellClick: Function,
}

const Board = ({ numberOfRows = 5, numberOfColumns = 5, boardState, handleCellClick }: BoardProps) => {

    const renderBoard = (rows: number, columns: number, state: string) => {
        let boardArray = [];
        const boardStateArray = unpackBoardState(state);
    
        for (let i = 0; i < columns; i++) {
            let row: JSX.Element[] = [];
    
            for (let j = 0; j < rows; j++) {
                const cell = 
                  <BoardCell 
                    key = {`${i}${j}`}
                    cellPosition = { { X: j, Y: i } }
                    cellState = { boardStateArray[i][j] }
                    handleClick = { handleCellClick }
                  />
                row.push(cell);
            };
    
            const rowComponent = <BoardRow key={`${i}`}>{row}</BoardRow>;
            boardArray.push(rowComponent);
        };
    
        return boardArray;
    };

    return (
        <div className = { styles.boardWrapper }>
            { renderBoard(numberOfRows, numberOfColumns, boardState) }
        </div>
    );
};

export { Board };