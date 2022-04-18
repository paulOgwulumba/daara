import React from 'react';
import { participantTitle } from '../utils/constants';
import style from './View.module.css';

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
        <div className={style['form-wrapper']}>
            <p 
                className={style['message']}
                style={{fontSize: '16px', }}
            >
                What would you like to do?
            </p>
            <div>
                <button onClick = { onCreateNewGame } className={style["button"]}>
                    Create a new game
                </button>
                <button onClick = { onAttachToExistingGame } className={style["button"]}>
                    Join an existing game
                </button>
            </div>
        </div>
    );
};