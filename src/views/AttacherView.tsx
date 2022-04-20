import React, { useState } from 'react';
import { Views } from '../utils/constants';
import styles from './View.module.css';

interface IAttacherViewProps {
    handleReturn: Function,
    handleJoinGame: Function,
    contractAddress: string,
    isError: boolean,
    handleChange: Function,
}

export const AttacherView = ({ 
    handleReturn, 
    handleJoinGame, 
    contractAddress, 
    isError, 
    handleChange 
}: IAttacherViewProps) => {
    const onReturn = () => {
        handleReturn(Views.DEPLOYER_OR_ATTACHER_VIEW);
    };

    const onAddressChange = (event: any) => {
        handleChange(event?.target?.value);
    };

    const onJoinGame = () => {
        handleJoinGame(contractAddress);
    }
    
    return (
        <div>
            <p className={styles['message']}>Please enter the contract address to join the game</p>
            <div className={styles['form-wrapper']}>
                <p className={styles['message']}>Contract address:</p>
                <textarea value = { contractAddress } onChange = { onAddressChange } className={styles['text-area-input']}/>
                <p className={ isError? styles['form-error-message'] : styles["hide"]}>
                    *Invalid contract information. Please check and re-enter.
                </p>
            </div>
            <div>
                <button className={styles['button']} onClick = { onJoinGame } >Join game</button>
                <button className={styles['button']} onClick = { onReturn }>Return</button>
            </div>
        </div>
    );
};