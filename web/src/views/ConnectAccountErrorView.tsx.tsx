import React from 'react';
import { Views } from '../utils/constants';

export const ConnectAccountErrorView = ({ handleReturn }) => {
    return (
        <div>
            <h2>
                Unable to connect to your wallet account. Please enable popups for this site and refresh the web page.
                <br />
                Or check your network connection.
                <br />
                <button
                    onClick = { () => handleReturn(Views.CONNECT_ACCOUNT_WITH_MNEMONIC_VIEW) }
                >
                    Connect account with mnemonic
                </button>
            </h2>
        </div>
    )
};
