import React from 'react';
import { participantTitle } from '../utils/constants';

export interface IDeployerOrAttacherViewProps {
    handleParticipantTitleSelect: Function,
}

export const DeployerOrAttacherView = ({ handleParticipantTitleSelect }: IDeployerOrAttacherViewProps) => {
    const onCreateNewGame = () => {
        handleParticipantTitleSelect(participantTitle.DEPLOYER);
    };

    const onAttachToExistingGame = () => {
        handleParticipantTitleSelect(participantTitle.ATTACHER);
    };

    return (
        <div>
            <h2>Do you want to create a new game or attach to an existing game?</h2>
            <div>
                <button onClick = { onCreateNewGame }>Create a new game</button>
                <button onClick = { onAttachToExistingGame } >Attach to existing game</button>
            </div>
        </div>
    );
};