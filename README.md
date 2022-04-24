# daara
Dapp entry for decentralized-umoja-2 bounty hack. 

### Description
This is a board game very similar to the popular Tic-Tac-Toe. Two players set a wager in ALG and compete with each other for it.

#### The game rules are simple:
1. The board consists of 5x5 cells.
2. Each player has 6 pieces at the start of the game and no pieces are on the board.
3. At the start of the game, each player places a piece at a time on the board per turn.
4. While placing pieces on the board, each player must not break the following rule:
  Pieces of a player cannot be placed side by side to complete a horizontal or vertical alignment of more than two pieces.
5. After all pieces have been placed on the board, the players can now proceed to move their pieces around in line with the following rules:
  - Pieces can only be moved one cell up, down, right or left.
  - Pieces can not be moved diagonally.
  - Pieces cannot move more than a cell in any direction.
  - Pieces cannot be moved to a position that completes a horizontal or vertical alignment of more than three pieces of the player that played.
  - If a player moves their piece to a position that completes a horizontal or vertical alignment of three pieces, the player can take away one piece of their opponent.
  - If a player moves their piece to a position that completes a horizontal and vertical alignment simultaneously, the player can take away two pieces of their opponent.
  - First player to have less than 3 pieces on the board loses.

#### How to start the app
To get the app started, run the command:
### `yarn start`

##### If you don't have yarn installed, run the command:
### `npm install -g yarn`

Run 'yarn start' again.
