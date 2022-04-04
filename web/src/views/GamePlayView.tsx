import React from 'react';
import { GamePlay } from '../components';

interface IGamePlayProps {
    resolvePromise: Function,
}

export const GamePlayView = ({ resolvePromise }:  IGamePlayProps) => {
    return (
        <>
            <GamePlay resolvePromise = {resolvePromise}  />
        </>
    );
};
