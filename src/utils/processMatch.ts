import { getNumberOfPiecesAbove, getNumberOfPiecesBelow, getNumberOfPiecesAhead, getNumberOfPiecesBehind } from "./";
import { gamePlayState, cellPosition } from "./interfaces";

const processMatch = (gameState: gamePlayState) => {
    const { cellClicked } = gameState;
    const cellPositionsWithAMatch: Array<cellPosition> = [];
    // get number of pieces ahead and behind
    const numberOfPiecesAhead = getNumberOfPiecesAhead(gameState);
    const numberOfPiecesBehind = getNumberOfPiecesBehind(gameState);
    const numberOfPiecesAbove = getNumberOfPiecesAbove(gameState);
    const numberOfPiecesBelow = getNumberOfPiecesBelow(gameState);

    // check if there is a vertical match
    const verticalMatch = numberOfPiecesAbove + numberOfPiecesBelow === 2? true : false;

    // check if there is a horizontal match
    const horizontalMatch = numberOfPiecesAhead + numberOfPiecesBehind === 2? true : false
    
    // if there is horizontal match, compile an array of the cell positions that match
    if (horizontalMatch) {
        for (let i = 1; i < (numberOfPiecesAhead + 1); i++) {
            cellPositionsWithAMatch.push({ 
                X: cellClicked.X + i ,
                Y: cellClicked.Y
            });
        };
    
        for (let i = 1; i < (numberOfPiecesBehind + 1); i++) {
            cellPositionsWithAMatch.push({ 
                X: cellClicked.X - i ,
                Y: cellClicked.Y
            });
        };
    }

    if (verticalMatch) {
        for (let i = 1; i < (numberOfPiecesAbove + 1); i++) {
            cellPositionsWithAMatch.push({ 
                X: cellClicked.X,
                Y: cellClicked.Y - i
            });
        };
    
        for (let i = 1; i < (numberOfPiecesBelow + 1); i++) {
            cellPositionsWithAMatch.push({ 
                X: cellClicked.X,
                Y: cellClicked.Y + i
            });
        };
    }

    const isAMatch = horizontalMatch || verticalMatch? true : false;

    if (isAMatch) {
        cellPositionsWithAMatch.push(cellClicked);
    }

    return { isAMatch, cellPositionsWithAMatch }
};

const processHorizontalMatch = (gameState: gamePlayState) => {
    const { cellClicked } = gameState;
    const cellPositionsWithAMatch: Array<cellPosition> = [];
    // get number of pieces ahead and behind
    const numberOfPiecesAhead = getNumberOfPiecesAhead(gameState);
    const numberOfPiecesBehind = getNumberOfPiecesBehind(gameState);

    // check if there is a horizontal match
    const horizontalMatch = numberOfPiecesAhead + numberOfPiecesBehind === 2? true : false
    
    // if there is horizontal match, compile an array of the cell positions that match
    if (horizontalMatch) {
        for (let i = 1; i < (numberOfPiecesAhead + 1); i++) {
            cellPositionsWithAMatch.push({ 
                X: cellClicked.X + i ,
                Y: cellClicked.Y
            });
        };
    
        for (let i = 1; i < (numberOfPiecesBehind + 1); i++) {
            cellPositionsWithAMatch.push({ 
                X: cellClicked.X - i ,
                Y: cellClicked.Y
            });
        };
    }

    const isAMatch = horizontalMatch;

    if (isAMatch) {
        cellPositionsWithAMatch.push(cellClicked);
    }

    return { isAMatch, cellPositionsWithAMatch }
};

const processVerticalMatch = (gameState: gamePlayState) => {
    const { cellClicked } = gameState;
    const cellPositionsWithAMatch: Array<cellPosition> = [];
    
    // get number of pieces above and below
    const numberOfPiecesAbove = getNumberOfPiecesAbove(gameState);
    const numberOfPiecesBelow = getNumberOfPiecesBelow(gameState);

    // check if there is a vertical match
    const verticalMatch = numberOfPiecesAbove + numberOfPiecesBelow === 2? true : false;
    
    // if there is a vertical match, compile an array of the cell positions that match
    if (verticalMatch) {
        for (let i = 1; i < (numberOfPiecesAbove + 1); i++) {
            cellPositionsWithAMatch.push({ 
                X: cellClicked.X,
                Y: cellClicked.Y - i
            });
        };
    
        for (let i = 1; i < (numberOfPiecesBelow + 1); i++) {
            cellPositionsWithAMatch.push({ 
                X: cellClicked.X,
                Y: cellClicked.Y + i
            });
        };
    }

    const isAMatch = verticalMatch;

    if (isAMatch) {
        cellPositionsWithAMatch.push(cellClicked);
    }

    return { isAMatch, cellPositionsWithAMatch }
};


export { processMatch, processHorizontalMatch, processVerticalMatch };