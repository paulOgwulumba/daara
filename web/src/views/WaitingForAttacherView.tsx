import React from 'react';
import { useSelector } from 'react-redux';
import { Selector } from '../redux/selectors/index';
import style from './View.module.css';

export const WaitingForAttacherView = () => {
    const contractAddress = useSelector(Selector.selectContractAddress);
    return (
        <div>
            <p className={style["message"]}>
                Waiting for a player to join your game.
                
            </p>
            <p className={style["message"]}>
                Share the contract information below with them:
            </p>
            <textarea value = { contractAddress } className={style['text-area-input']} disabled={true}/>
            
        </div>
    )
};
