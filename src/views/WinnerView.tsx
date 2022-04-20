import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCurrentView, refreshBoardState, refreshGamePlayState, refreshPlayerState } from '../redux/slices';
import { Views } from '../utils/constants';
import style from './View.module.css';

export const WinnerView = () => { 
    const dispatch = useDispatch();
    const onPlayAgain = () => {
        dispatch(updateCurrentView(Views.DEPLOYER_OR_ATTACHER_VIEW));
        dispatch(refreshBoardState());
        dispatch(refreshGamePlayState());
        dispatch(refreshPlayerState());
    };

    const onReviewGame = () => {
        dispatch(updateCurrentView(Views.REVIEW_GAME_VIEW));
    };

    return (
        <div className={style['form-wrapper']}>
            <p
                className={style['message']}
                style={{fontSize: '18px', }}
            >
                You win!!!
            </p>
            <p 
                className={style['message']}
                style={{fontSize: '16px', }}
            >
                That was fantastic!
            </p>
            <div>
                <button onClick = { onPlayAgain } className={style["button"]}>
                    Play again
                </button>
                <button onClick = { onReviewGame } className={style["button"]}>
                    Review last game
                </button>
            </div>
        </div>
    );
};