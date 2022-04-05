import React, { useState } from 'react';
import { Views } from '../utils/constants';

interface IAttacherViewProps {
    handleReturn: Function,
    handleJoinGame: Function,
}

export const AttacherView = ({ handleReturn, handleJoinGame }: IAttacherViewProps) => {
    const [contractAddress, setContractAddress] = useState('');

    const onReturn = () => {
        handleReturn(Views.DEPLOYER_OR_ATTACHER_VIEW);
    };

    const onAddressChange = (event: any) => {
        setContractAddress(event?.target?.value);
    };

    const onJoinGame = () => {
        handleJoinGame(contractAddress);
    }
    
    return (
        <div>
            <h2>Please enter the contract address to join the game</h2>
            <div>
                <p>Contract address:</p>
                <input type={'text'} value = {contractAddress} onChange = { onAddressChange }/>
            </div>
            <div>
                <button onClick = { onJoinGame } >Join game</button>
                <button onClick = { onReturn }>Return</button>
            </div>
        </div>
    );
};