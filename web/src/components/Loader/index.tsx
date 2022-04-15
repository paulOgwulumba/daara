import React from 'react';
import styles from './Loader.module.css';

interface ILoaderProps {
    isVisible: boolean,
} 

export const Loader = ({ isVisible }: ILoaderProps) => {
    return (
        isVisible?
        <div className = { styles["loader-wrapper"] }>
            <div className = {styles['loader']}>
                <div className = {styles['loader-blue']}></div>
                <div className = {styles['loader-red']}></div>
                <div className = {styles['loader-red']}></div>
                <div className = {styles['loader-blue']}></div>
            </div>
        </div>
        :
        null
    )
};

export const GameLoader = ({ isVisible }: ILoaderProps) => {
    return (
        isVisible?
        <div className = { styles.gameLoader }>
            
        </div>
        :
        null
    )
};
