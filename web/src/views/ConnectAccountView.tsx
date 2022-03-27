import React, { useEffect, useState } from 'react';

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
            <h2>
                { `Connecting to your account${loader}` }
            </h2>
        </div>
    )
};
