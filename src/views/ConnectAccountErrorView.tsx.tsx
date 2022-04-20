import React from 'react';
import { Views } from '../utils/constants';
import styles from './View.module.css';

export const ConnectAccountErrorView = ({ handleReturn }) => {
    return (
        <>
            <p className={styles['message']}>
                Error  encountered while connecting to your wallet account.       
            </p>
            <p className={styles['message']}>
                Please enable popups for this site and refresh the web page or check your network connection and try again.
            </p>
            <button
                className={styles['button']}
                onClick = { () => handleReturn(Views.CONNECT_ACCOUNT_WITH_MNEMONIC_VIEW) }
            >
                Connect account with mnemonic key phrase.
            </button>
        </>
    )
};
