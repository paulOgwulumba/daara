import React, { useEffect, useState } from 'react';
import styles from './View.module.css';

export const ConnectAccountView = () => {
    const loadingText = '...';
    let iterationCount = 0;
    const [loader, setLoader] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            iterationCount = iterationCount > loadingText.length? 0 : iterationCount;
            try {
                setLoader(loadingText.slice(0, iterationCount));
            } catch (e) {
                clearInterval(intervalId);
            }
            iterationCount++;
        }, 250)
    }, [])

    return (
        <div>
            
            <div className = {styles['loader']}>
                <div className = {styles['loader-blue']}></div>
                <div className = {styles['loader-red']}></div>
                <div className = {styles['loader-red']}></div>
                <div className = {styles['loader-blue']}></div>
            </div>
        </div>
    )
};
