import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Selector } from '../redux/selectors';
import styles from './View.module.css';
import { Board } from '../components';
import { updateCurrentView, refreshBoardState, refreshGamePlayState, refreshPlayerState } from '../redux/slices';
import { Views } from '../utils/constants';

export const ReviewGameView = () => {
    const boardStateArchive = useSelector(Selector.selectBoardStateArchive);
    const [index, setIndex] = useState(0);
    const dispatch = useDispatch();

    const handleNext = () => {
        if (index < (boardStateArchive.length - 1)) {
            setIndex(index + 1);
        }
    };

    const handlePrevious = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const closePage = () => {
        dispatch(updateCurrentView(Views.DEPLOYER_OR_ATTACHER_VIEW));
        dispatch(refreshBoardState());
        dispatch(refreshGamePlayState());
        dispatch(refreshPlayerState());
    }

    return (
        <>
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '80vw',
                flexWrap: 'wrap',
            }}
        >
            <div>
                <button
                    onClick = { handlePrevious }
                    className = { styles['button-special'] }
                    disabled = { index === 0 }
                >
                    Previous
                </button>
            </div>

            <Board 
                numberOfColumns={5}
                numberOfRows={6}
                boardState = { boardStateArchive[index] }
                handleCellClick = { () => {} }
            />

            <div>
                <button
                    onClick = { handleNext }
                    className = { styles['button-special'] }
                    disabled = { !(index < (boardStateArchive.length - 1)) }
                >
                    Next
                </button>
            </div>
        </div>

        <button
            onClick = { closePage }
            className = { styles['button-special'] }
        >
            End review
        </button>
        </>
    )
}