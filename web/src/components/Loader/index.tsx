import React from 'react';
import Styles from './Loader.module.css';

interface ILoaderProps {
    isVisible: boolean,
} 

export const Loader = ({ isVisible }: ILoaderProps) => {
    return (
        isVisible?
        <div className = { Styles.loader }>
            
        </div>
        :
        null
    )
};
