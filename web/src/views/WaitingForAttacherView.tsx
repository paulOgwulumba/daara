import React from 'react';
import { useSelector } from 'react-redux';
import { Selector } from '../redux/selectors/index';

export const WaitingForAttacherView = () => {
    const contractAddress = useSelector(Selector.selectContractAddress);
    return (
        <div>
            <h2>
                Waiting for a player to accept your game play request.
                <br />
                Show player 2 this contract address: { contractAddress }
            </h2>
        </div>
    )
};
