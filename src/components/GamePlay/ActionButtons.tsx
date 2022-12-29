import styles from './GamePlay.module.css';

interface ActionButtonsProp {
    onDraw: () => any;
    onResign: () => any;
}

export const ActionButtons = ({ onDraw, onResign }: ActionButtonsProp) => {
    return (
        <div className={styles.actionButtonsWrapper}>
            <div 
                className={ styles.drawButton }
                onClick = { onDraw }
            >
                Offer Draw
            </div>

            <div 
                className={styles.resignButton}
                onClick = { onResign }
            >
                Resign
            </div>
        </div>
    )
}