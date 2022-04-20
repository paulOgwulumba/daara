enum player {
    FIRST_PLAYER = 1,
    SECOND_PLAYER = 2,
};

class Player {
    private piecesLeft: number;
    private piecesInHand: number;

    constructor() {
        this.piecesInHand = 8;
        this.piecesLeft = 8;
    }

    public decreasePiecesInHand() {
        this.piecesInHand-= 1;
    }

    public decreasePiecesLeft() {
        this.piecesLeft-=1;
    }

    public getPiecesInHand() {
        return this.piecesInHand;
    }

    public getPiecesLeft() {
        return this.piecesLeft;
    }
}

export { player, Player };