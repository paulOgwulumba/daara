import React, { useState } from 'react';
import { Views } from '../utils/constants';

interface IDeployerSetWagerViewProps {
    handleReturn: Function,
    handleCreateNewGame: Function,
}

export const DeployerSetWagerView = ({ handleReturn, handleCreateNewGame }: IDeployerSetWagerViewProps) => {
    const [wager, setWager] = useState(0);

    const onReturn = () => {
        handleReturn(Views.DEPLOYER_OR_ATTACHER_VIEW);
    };

    const onWagerChange = (event: any) => {
        setWager(event?.target?.value | 0);
    };

    const onCreateNewGame = () => {
        handleCreateNewGame(wager);
    }
    
    return (
        <div>
            <h2>Please enter the wager and create new game</h2>
            <div>
                <p>Wager:</p>
                <input type={'number'} value = {wager} onChange = { onWagerChange }/>
            </div>
            <div>
                <button onClick = { onCreateNewGame } >Create game</button>
                <button onClick = { onReturn }>Return</button>
            </div>
        </div>
    );
};