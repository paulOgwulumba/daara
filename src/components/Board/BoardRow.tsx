import styles from './Board.module.css';

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