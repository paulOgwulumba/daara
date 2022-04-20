import React from 'react';

interface IConditionalRenderProps {
    children: any,
    isVisible: boolean,
}

export const ConditionalRender = ({ children, isVisible }: IConditionalRenderProps) => {
    return (
        <>
            {
                isVisible? children : null
            }
        </>
    )
};
