import React, { useState } from 'react';
import { Views } from '../utils/constants';

interface IConnectAccountWithMnemonicView {
    handleReturn: Function,
    handleConnectAccountWithKeyPhrase: Function,
}

export const ConnectAccountWithMnemonicView = ({ handleReturn, handleConnectAccountWithKeyPhrase }: IConnectAccountWithMnemonicView) => {
    const [mnemonic, setMnemonic] = useState('');

    const onReturn = () => {
        handleReturn(Views.CONNECT_ACCOUNT_ERROR_VIEW);
    };

    const onMnemonicChange = (event: any) => {
        setMnemonic(event?.target?.value);
    };

    const onConnectAccountWithMnemonic = () => {
      handleConnectAccountWithKeyPhrase(mnemonic.trim());
    }
    
    return (
        <div>
            <h2>Please enter your mnemonic key phrase to connect your account.</h2>
            <div>
                <p>Key phrase:</p>
                <textarea value = { mnemonic } onChange = { onMnemonicChange } />
            </div>
            <div>
                <button onClick = { onConnectAccountWithMnemonic } >Connect Account</button>
                <button onClick = { onReturn }>Return</button>
            </div>
        </div>
    );
};