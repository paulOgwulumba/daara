import React from 'react';
import { BaseType } from 'typescript';
import styles from './Board.module.css';
import BoardCell from './BoardCell';

interface BoardRowProps {
    children: JSX.Element[]
}
const BoardRow = ({ children }: BoardRowProps) => {
  return (
    <div className = {styles.boardRow}>
        { children }
    </div>
  );
};

export default BoardRow;