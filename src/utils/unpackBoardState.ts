const unpackBoardState = (boardState: string) => {
    const boardRows = boardState.split('_');
    let unpackedData: Array<Array<number>> = [];

    boardRows.forEach((row) => {
        unpackedData.push(row.split('').map(value => parseInt(value)));
    });

    return unpackedData;
};

/**
 * @description This method converts a two-order array into a string where the items in the 
 * first-order arrays are joined by an empty string and the items in the second-order array are joined by an underscore '_'.
 * @param boardStateArray Second-order array.
 * @returns string.
 */
const stringifyBoardState = (boardStateArray: Array<Array<number>>): string => {
    return boardStateArray.map((boardRow) => boardRow.join('')).join('_');
}

export { unpackBoardState, stringifyBoardState };