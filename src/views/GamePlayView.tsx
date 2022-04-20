import React from 'react';
import { GamePlay } from '../components';

interface IGamePlayProps {
    resolvePromise: Function,
    isGameLoading: boolean,
}

export const GamePlayView = ({ resolvePromise, isGameLoading }:  IGamePlayProps) => {
    return (
        <>
            <GamePlay resolvePromise = {resolvePromise} isGameLoading = { isGameLoading } />
        </>
    );
};
