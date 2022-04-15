import React from 'react';
import styles from './GamePlay.module.css';

export const PlayerTurnAnimator = ({isActive, title}) => {
    return (
        <>
            <p className = {isActive? styles["player-info-title-animator"] : styles['hide']}>
                {title}
            </p>

            <p className = {isActive? styles["player-info-title-animator-helper"] : styles['hide']}>
                {title}
            </p>
        </>
    )
}