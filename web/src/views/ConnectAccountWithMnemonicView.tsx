import React, { useState } from 'react';
import { Views } from '../utils/constants';
import styles from './View.module.css';

interface IConnectAccountWithMnemonicView {
    handleReturn: Function,
    handleConnectAccountWithKeyPhrase: Function,
    handleChange: Function,
    mnemonic: string,
    isError: boolean,
}

export const ConnectAccountWithMnemonicView = ({ 
    handleReturn, 
    handleChange, 
    mnemonic, 
    handleConnectAccountWithKeyPhrase ,
    isError

}: IConnectAccountWithMnemonicView) => {
    const onReturn = () => {
        handleReturn(Views.CONNECT_ACCOUNT_ERROR_VIEW);
    };

    const onMnemonicChange = (event: any) => {
        handleChange(event?.target?.value);
    };

    const onConnectAccountWithMnemonic = () => {
        handleConnectAccountWithKeyPhrase(mnemonic.trim());
    }
    
    return (
        <div>
            <p className={styles['message']}>Please enter your mnemonic key phrase to connect your account to Daara.</p>
            <div className={styles['form-wrapper']}>
                <p className={styles['message']}>Key phrase:</p>
                <textarea className={styles['text-area-input']} value = { mnemonic } onChange = { onMnemonicChange } />
                <p className={ isError? styles['form-error-message'] : styles["hide"]}>
                    *Invalid key phrase. Please enter the correct one.
                </p>
            </div>
            <div>
                <button className={styles['button']} onClick = { onConnectAccountWithMnemonic } >Connect Account</button>
                <button className={styles['button']} onClick = { onReturn }>Return</button>
            </div>
        </div>
    );
};