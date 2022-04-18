import React, { useState } from 'react';
import { Views } from '../utils/constants';
import style from './View.module.css';

interface IDeployerSetWagerViewProps {
    handleReturn: Function,
    handleCreateNewGame: Function,
}

export const DeployerSetWagerView = ({ handleReturn, handleCreateNewGame }: IDeployerSetWagerViewProps) => {
    const [wager, setWager] = useState(0);
    const [isError, setIsError] = useState(false);

    const onReturn = () => {
        handleReturn(Views.DEPLOYER_OR_ATTACHER_VIEW);
    };

    const onWagerChange = (event: any) => {
        setWager(event?.target?.value | 0);
        setIsError(false);
    };

    const onCreateNewGame = () => {
        if (wager > 0) {
            handleCreateNewGame(wager);
        }
        else {
            setIsError(true);
        }
    }
    
    return (
        <div>
            <p className={style['message']}>Please select a wager to create a new game.</p>
            <div 
              className={style['form-wrapper']}
              style={{minHeight: '70px'}}
            >
                <div 
                    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                >
                    <p className={style['message']}>Wager:</p>
                    <input className={style['input']} type={'number'} value = {wager} onChange = { onWagerChange }/>
                </div>
                <p className={ isError? style['form-error-message'] : style["hide"]}>
                    *Wager must be greater than 0.
                </p>
            </div>
            <div>
                <button onClick = { onCreateNewGame } className={style['button']}>Create game</button>
                <button onClick = { onReturn } className={style['button']}>Return</button>
            </div>
        </div>
    );
};