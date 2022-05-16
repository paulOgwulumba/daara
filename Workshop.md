# Workshop: Daara

---

In this workshop, we'll go through my bounty hack submission for the Decentralized Umoja 2 Bounty Hack.

This workshop assumes that you've completed the tutorial.

I'll assume that you’ll go through this workshop in a directory named `~/reach/daara`:

```bash
$ mkdir -p ~/reach/daara
```

And that you have a copy of Reach installed in ~/reach so you can write

```bash
$ ../reach version
```

and it will run Reach.

You should start off by initializing your Reach program:

```bash
$ ../reach init
```

## Problem Analysis

The first step of designing any program is to perform problem analysis and determine what we have to do to successfully solve the problem.

You should answer some questions concerning the design of the application to go through the same process I did while writing this project.

You should also write your own answers in your Reach program (index.rsh) using a comment. /* Remember comments are written like this. */

    Who is involved in this application?
    
    What information do they know at the start of the program?
    
    What information are they going to discover and use in the program?
    
    What funds change ownership during the application and how?

**Stop!**
Write down the problem analysis of this program as a comment.

Here's my answers to those questions:

    Daara involves 2 roles: One player (Alice) who creates the game and a second player (Bob) who joins the game.
	
	At the start of the program, Alice would know the wager and the timeout limit (deadline) they set for that particular session.
	
	During the course of the game, each player is going to know about their opponent's moves and the number of pieces the opponent assumes each player has.
	
	The two players will both pay the wager and the winner of the game would get paid both players' wagers as a reward.  

It is completely okay if your answers differ from mine. If you're confident that your answers are correct, you can continue with them through this workshop.

## Data Definition

For the next step, I am going to define the data type equivalents of the values I used in my answers from the previous section. Also, in this step I'll be deciding what functions our participants will have.

* What functions/values does Alice need to start the game?
* What functions/values does Bob need to join the game?
* What functions/values do the two players need to play and observe moves?
* What functions/values do the two players need to inform the contract of the number of pieces they have and assume their opponent has?

You should look back at your problem analysis to do this step. Whenever a participant starts off knowing something, then it is a field in the interact object. If they learn something, then it will be an argument to a function. If they provide something later, then it will be the result of a function.

You should write your answers in your Reach file (`index.rsh`) as the participant interact interface for each of the participants.

**Stop!**
Write down the data definitions for this program as definitions.

It's time to see my answers!

```javascript
const Player = {
    ...hasRandom,
    getNumberOfPiecesLeft: Fun([], Tuple(UInt, UInt)),
    dealPiece: Fun([], Tuple(Bytes(29), Bytes(11))),
    updateOpponentMove: Fun([Bytes(29), Bytes(11)], Null),
    informTimeout: Fun([], Null),
    informDisagreement: Fun([], Null),
    announceWinner: Fun([], Null)
};

[
	Participant('Alice', {
        ...Player,
        wager: UInt,
        deadline: UInt,
    }),

    Participant('Bob', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    }),
];
```
We are going to represent the cost of the wager and the deadline with UInt (unsigned integer). Alice will set these two values after creating the contract. There is a function that gives Bob the choice of accepting or rejecting the wager set by Alice. The two participants have six (6) other functions in common that lets them do the following:
    
    Inform the contract of the number of pieces they have left and also the number of pieces they assume the other player has.

    Make a move.

    Observe their opponent's move.

    Get informed of a timeout.

    Get informed of a disagreement. A disagreement occurs when the number of pieces a player informs the contract of their being in possession of does not correspond with the number of pieces the other player thinks they have.

    Get informed of the winner of the game.

## Communication Construction

Now we can design the structure of communication of our application. Try to write this part in accordance with what the flow of the contract would be from start to finish:

**Stop!**
Write down the communication pattern for this program as comments.

Here's what I wrote

> 1. Alice sets the wager and deadline and deploys the contract.
> 2. Bob accepts the wager and joins the game.
> 3. As long as both players have more than three pieces in their possession:
>    1. Bob plays a move.
>    2. Alice observes the move.
>    3. Alice plays a move.
>    4. Alice informs the contract of the number of pieces she has and the number of pieces Bob has according to her calculation.
>    5. Bob observes Alice's move.
>    6. Bob informs the contract of the number of pieces he has and the number of pieces Alice has according to his calculation.
>    7. The contract calculates the outcome of this round by comparing the number of pieces each player published and making sure that the values correspond, after which it checks if any of the players has less than three pieces in their possession.

The phrase "As long as" indicates a loop going on in the game. Considering that the game can go on and on for an indefinite number of rounds, a loop is the most feasible option for implementing this. The above information would be enough to implement the logic of our contract.

**Stop!**
Write down the communication pattern for this program as code.

Main logic of our contract should now look like:

```javascript
// Enum value that we use to represent the current outcome of the game
const [ isOutcome, B_WINS, DRAW, A_WINS, CONTINUE, TERMINATE] = makeEnum(5);

// Function that computes the outcome of a round given the number of pieces each player has.
const winner = (piecesAlice, piecesBob, computedPiecesAlice, computedPiecesBob) => {
    if((computedPiecesAlice !== piecesAlice) || (computedPiecesBob !== piecesBob)){
        return TERMINATE;
    }
    else if((piecesBob < 3 ) && (piecesAlice < 3)){
        return DRAW;
    }
    else if(piecesAlice < 3){
        return B_WINS;
    }
    else if(piecesBob < 3){
        return A_WINS;
    }
    else return CONTINUE;
};

// Get wager and deadline from Alice. Alice pays the wager amount to the contract too.
Alice.only(() => {
	const wager = declassify(interact.wager);
    const deadline = declassify(interact.deadline);
});
Alice.publish(wager, deadline).pay(wager);
commit();

// Bob accepts the wager and pays the wager amount to the contract.
Bob.only(() => {
    interact.acceptWager(wager);
})
Bob.pay(wager);

var outcome = CONTINUE;
/** There will always be double of the wager amount in the contract since Alice and Bob 
 * both pay the wager into the contract before this point. 
 *  Also, the value of 'outcome' should always be one of B_WINS, A_WINS, CONTINUE or TERMINATE.
 **/
invariant (balance() == 2 * wager && isOutcome(outcome));

while(outcome == CONTINUE) {
    commit();

    // Bob takes first turn by playing a move.
    Bob.only(() => {
        const [handBob, gameStateBob] = declassify(interact.dealPiece());
    });
    Bob.publish(handBob, gameStateBob);
    commit();

    // Alice goes next
    Alice.only(() => {
        // Alice observes Bob's move and updates her board accordingly.
        interact.updateOpponentMove(handBob, gameStateBob);

        // Alice makes her own move.
        const [handAlice, gameStateAlice] = declassify(interact.dealPiece());

        // Alice publishes the number of pieces she has and the number of pieces she assumes Bob has
        const [ piecesAlice, computedPiecesBob ] = declassify(interact.getNumberOfPiecesLeft());
    });
    Alice.publish(handAlice, gameStateAlice, piecesAlice, computedPiecesBob);
    commit();

    // Bob observes Alice's move and then publishes the number of pieces he has and the number of pieces he assumes Alice has.
    Bob.only(() => {
        interact.updateOpponentMove(handAlice, gameStateAlice);
        const [ piecesBob, computedPiecesAlice ] = declassify(interact.getNumberOfPiecesLeft());
    });
    Bob.publish(piecesBob, computedPiecesAlice);

    outcome = winner(piecesAlice, piecesBob, computedPiecesAlice, computedPiecesBob);
    continue;
}
```

In the code, we defined the values that would represent the current outcome of our game using an enum  (```isOutcome```). 

We also defined a function (```winner```) that calculates the current outcome of the game by running a comparison of the number of pieces published by both players. 
If the number of pieces that Alice assumes Bob has (```computedPiecesBob```) does not correspond with the number of pieces that Bob claims he has (```piecesBob```) and vice versa, the game terminates. If the number of pieces published are in agreement, the function checks for the player with pieces less than three in number and declares the other player as the winner. If both players have more than three pieces each, the game continues. 

Within the while loop, both players are given the opportunity to make their moves (```dealPiece```), get updates on the opponent's move (```updateOpponentMove```), and publish the number of pieces they have along with the number of pieces they assume the other player has (```getNumberOfPiecesLeft```). 

## Assertion Insertion

In addition to the invariant assertion we defined for our loop like this:
```javascript
invariant (balance() == 2 * wager);
```
We can add an extra assertion that ensures that the value passed to our ```outcome``` variable is always one of the possible values of our enum ```isOutcome```, thus:

```javascript
invariant (balance() == 2 * wager && isOutcome(outcome));
```

## Possible Additions

So far, our code works fine. But there are some points we can improve.

One improvement is to enforce a timeout limit on each player to make sure that they don't take too long to play their move or worse, abandon a game midway. Of course, we will need a means to inform both players when a timeout occurs. For that, we will define a function thus:

```javascript
// ...

const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
};

// ...
```

To implement the timeout, we will use the ```deadline``` value that Alice created the contract with. 

The timeout will be enforced when - 

* Bob is to pay the wager:

```javascript
// ...

Bob.only(() => {
    interact.acceptWager(wager);
});
Bob
    .pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

// ...
```

* Bob is to make his move:

```javascript
// ...

Bob.only(() => {
    const [handBob, gameStateBob] = declassify(interact.dealPiece());
});
Bob
    .publish(handBob, gameStateBob)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

// ...
```

* Alice is to make her move:

```javascript
// ...

Alice.only(() => {
    interact.updateOpponentMove(handBob, gameStateBob);
    const [handAlice, gameStateAlice] = declassify(interact.dealPiece());
    const [ piecesAlice, computedPiecesBob ] = declassify(interact.getNumberOfPiecesLeft());
});
Alice.publish(handAlice, gameStateAlice, piecesAlice, computedPiecesBob)
    .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));

// ...
```

In addition, we can define two functions that inform the players when there is a disagreement or when a winner is announced:

```javascript
// ...

const informDisagreement = () => {
    each([Alice, Bob], () => {
      interact.informDisagreement();
    });
};

const announceWinner = () => {
    each([Alice, Bob], () => {
      interact.announceWinner();
    });
;}

//...
```

With all of these changes, our backend will look like this

```javascript
const [ isOutcome, B_WINS, DRAW, A_WINS, CONTINUE, TERMINATE] = makeEnum(5);

const winner = (piecesAlice, piecesBob, computedPiecesAlice, computedPiecesBob) => {
    if((computedPiecesAlice !== piecesAlice) || (computedPiecesBob !== piecesBob)){
        return TERMINATE;
    }
    else if((piecesBob < 3 ) && (piecesAlice < 3)){
        return DRAW;
    }
    else if(piecesAlice < 3){
        return B_WINS;
    }
    else if(piecesBob < 3){
        return A_WINS;
    }
    else return CONTINUE;
};

const Player = {
    ...hasRandom,
    getNumberOfPiecesLeft: Fun([], Tuple(UInt, UInt)),
    dealPiece: Fun([], Tuple(Bytes(29), Bytes(11))),
    updateOpponentMove: Fun([Bytes(29), Bytes(11)], Null),
    informTimeout: Fun([], Null),
    informDisagreement: Fun([], Null),
    announceWinner: Fun([], Null)
};

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
        wager: UInt,
        deadline: UInt,
    });

    const Bob = Participant('Bob', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    });
    init();

    
    const informTimeout = () => {
        each([Alice, Bob], () => {
        interact.informTimeout();
        });
    };

    
    const informDisagreement = () => {
        each([Alice, Bob], () => {
        interact.informDisagreement();
        });
    };

    
    const announceWinner = () => {
        each([Alice, Bob], () => {
        interact.announceWinner();
        });
    };

    Alice.only(() =>{
        const wager = declassify(interact.wager);
        const deadline = declassify(interact.deadline);
    });

    Alice
        .publish(wager, deadline)
        .pay(wager);
    commit();

    Bob.only(() => {
        interact.acceptWager(wager);
    })
    Bob.pay(wager)
        .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    
    var outcome = CONTINUE;
    invariant (balance() == 2 * wager && isOutcome(outcome));
    while(outcome == CONTINUE) {
        commit();
    
        Bob.only(() => {
            const [handBob, gameStateBob] = declassify(interact.dealPiece());
        });

        Bob
            .publish(handBob, gameStateBob)
            .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
        commit();

        Alice.only(() => {
            interact.updateOpponentMove(handBob, gameStateBob);
            const [handAlice, gameStateAlice] = declassify(interact.dealPiece());
            const [ piecesAlice, computedPiecesBob ] = declassify(interact.getNumberOfPiecesLeft());
        });
        Alice
            .publish(handAlice, gameStateAlice, piecesAlice, computedPiecesBob)
            .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
        commit();

        Bob.only(() => {
            interact.updateOpponentMove(handAlice, gameStateAlice);
            const [ piecesBob, computedPiecesAlice ] = declassify(interact.getNumberOfPiecesLeft());
        });

        Bob.publish(piecesBob, computedPiecesAlice);

        outcome = winner(piecesAlice, piecesBob, computedPiecesAlice, computedPiecesBob);
        continue;
    }

    if (outcome == TERMINATE){
        transfer(wager).to(Alice);
        transfer(wager).to(Bob);
        informDisagreement();
    }
    else {
        transfer(2 * wager).to(outcome == A_WINS ? Alice : Bob);
        announceWinner();
    }

    commit();
});
```

## Interaction Introduction
Now that we have a complete contract, we can write the frontend. Since we'll be interacting with an API to play the actual Daara game, using a web frontend library is a better choice. In our case it will be React. The code below was wrote using Typescript. For state management, the redux library was used.

**Stop!**
Insert `interact` calls to the [frontend](https://docs.reach.sh/ref-model.html#(tech._frontend)) into the program.

```javascript
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { ConditionalRender } from './components';
import { 
    AttacherView,
    ConnectAccountView, 
    ConnectAccountErrorView,
    DeployerOrAttacherView,
    DeployerSetWagerView,
    GamePlayView, 
    WaitingForAttacherView,
    ConnectAccountWithMnemonicView,
    WinnerView,
    LoserView,
    ReviewGameView,
} from './views';
import { Views, participantTitle, player } from './utils/constants';
import { encodeGamePlayState, decodeGamePlayState } from './utils';
import { Loader, GameLoader } from './components';
import { Selector } from './redux/selectors';
import Store from './redux/store';
import { 
    updateBoardStateArchive,
    updateContractAddress,
    updatePlayerWalletAccount, 
    updateCurrentPlayer,
    updateCurrentView, 
    updateBoardState, 
    updateAllPiecesAddedToBoard,
    updateCellOfSelectedPiece,
    updateIsPlayerToAttackOpponentPieces,
    updateIsPlayerToPlayAgain,
    updateNumberOfAttacksLeft,
    updatePlayerOnePiecesInHand,
    updatePlayerOnePiecesLeft,
    updatePlayerTurn,
    updatePlayerTwoPiecesInHand,
    updatePlayerTwoPiecesLeft,
} from './redux/slices';


export interface IAppProps {
    reach: any,
    reachBackend: any,
};

const App = ({ reach, reachBackend }: IAppProps) => {
    const playerWalletAccount = useSelector(Selector.selectPlayerWalletAccount);
    const currentView = useSelector(Selector.selectCurrentView);
    const [promise, setPromise] = useState({resolve: null});
    const [isLoading, setIsLoading] = useState(false);
    const [isGameLoading, setIsGameLoading] = useState(false);;
    const [mnemonic, setMnemonic] = useState('');
    const [contractAddressEntry, setContractAddressEntry] = useState('');
    const [displayContractAddressError, setDisplayContractAddressError] = useState(false);
    const [displayMnemonicError, setDisplayMnemonicError] = useState(false);

    const dispatch = useDispatch();

    const handleMnemonicChange = (value: string) => {
        setMnemonic(value);
        setDisplayMnemonicError(false);
    };

    const handleContractAddressChange = (value: string) => {
        setContractAddressEntry(value);
        setDisplayContractAddressError(false);
    }

    const awaitPlayerMove = async () => {
        await new Promise((resolve) => {
            setPromise({resolve: resolve});
        })
    };

    const awaitPlayerMoveOrSkipIfGameHasEnded = async () => {
        const currentPlayer = Store.getState().gamePlayState.currentPlayer;      
        const piecesLeft = currentPlayer === player.FIRST_PLAYER? Store.getState().playerState.playerOnePiecesLeft : Store.getState().playerState.playerTwoPiecesLeft;
            
        if (piecesLeft >= 3) {
            setIsGameLoading(false);
            await awaitPlayerMove();
        }
        else {
            console.log("Skipping move execution because player does not have enough pieces left.");
        }
    };

    const InteractInterface = {
        getNumberOfPiecesLeft: () => {
            setIsGameLoading(true);
            const nothing = currentView === Views.GAME_PLAY_VIEW? '' : dispatch(updateCurrentView(Views.GAME_PLAY_VIEW));
            
            const currentPlayer = Store.getState().gamePlayState.currentPlayer;

            const playerPieces = 
                currentPlayer === player.FIRST_PLAYER? 
                Store.getState().playerState.playerTwoPiecesLeft
                :
                Store.getState().playerState.playerOnePiecesLeft;

            const opponentPieces = 
                currentPlayer === player.FIRST_PLAYER?
                Store.getState().playerState.playerOnePiecesLeft
                :
                Store.getState().playerState.playerTwoPiecesLeft
            
            return [playerPieces, opponentPieces];
        },

        dealPiece: async () => {
            let nothing = currentView === Views.GAME_PLAY_VIEW? '' : dispatch(updateCurrentView(Views.GAME_PLAY_VIEW));
            const currentPlayer = Store.getState().gamePlayState.currentPlayer;
            const playerTurn = Store.getState().gamePlayState.playerTurn;
            
            if (playerTurn === currentPlayer) {      
                await awaitPlayerMoveOrSkipIfGameHasEnded(); 
            }
            else {
                console.log("Skipping your turn for opponent to complete their move...");
            }

            const boardState = Store.getState().boardState.boardState;
            const gamePlayState = encodeGamePlayState();
            return [boardState, gamePlayState];
        },

        updateOpponentMove: (newBoardState: any, gamePlayState: any) => {
            setIsGameLoading(true);
            const nothing = currentView === Views.GAME_PLAY_VIEW? '' : dispatch(updateCurrentView(Views.GAME_PLAY_VIEW));
            const decodedGamePlayState = decodeGamePlayState(gamePlayState);

            dispatch(updateBoardStateArchive(newBoardState));
            
            dispatch(updateAllPiecesAddedToBoard(decodedGamePlayState.allPiecesAddedToBoard));
            dispatch(updateCellOfSelectedPiece(decodedGamePlayState.cellOfSelectedPiece));
            dispatch(updateIsPlayerToAttackOpponentPieces(decodedGamePlayState.isPlayerToAttackOpponentPieces));
            dispatch(updateIsPlayerToPlayAgain(decodedGamePlayState.isPlayerToPlayAgain));
            dispatch(updateNumberOfAttacksLeft(decodedGamePlayState.numberOfAttacksLeft));
            dispatch(updatePlayerOnePiecesInHand(decodedGamePlayState.playerOnePiecesInHand));
            dispatch(updatePlayerOnePiecesLeft(decodedGamePlayState.playerOnePiecesLeft));
            dispatch(updatePlayerTurn(decodedGamePlayState.playerTurn));
            dispatch(updatePlayerTwoPiecesInHand(decodedGamePlayState.playerTwoPiecesInHand));
            dispatch(updatePlayerTwoPiecesLeft(decodedGamePlayState.playerTwoPiecesLeft));
            dispatch(updateBoardState(newBoardState));
        }, 

        informTimeout: () => {
            alert("Time is up!!!");
        },

        informDisagreement: () => {
            alert("Values from two players do not match!");
        }, 

        announceWinner: () => {
            const currentPlayer = Store.getState().gamePlayState.currentPlayer;
            const piecesLeft = currentPlayer === player.FIRST_PLAYER? Store.getState().playerState.playerOnePiecesLeft : Store.getState().playerState.playerTwoPiecesLeft;
            setIsGameLoading(false);
            setIsLoading(false);
            
            if (piecesLeft >= 3) {
                dispatch(updateCurrentView(Views.WINNER_VIEW));
            }
            else {
                dispatch(updateCurrentView(Views.LOSER_VIEW));
            }
        }
    };

    const acceptWager = (wager: number) => {
        setIsGameLoading(true);
        alert(`Do you accept a wager of ${wager}?`);
    }

    const convertCurrencyFromBigNumberToSmallNumber = (amount: number) => {
        return reach.formatCurrency(amount, 10);
    };

    const handleCreateNewGame = async (wager: number) => {
        const balanceBigNum = await reach.balanceOf(playerWalletAccount);
        const balance = convertCurrencyFromBigNumberToSmallNumber(balanceBigNum);

        if ((balance) < (wager + 1)) {
            alert(`Insufficient funds in wallet to set the wager of ${wager}.`);
            return;
        }

        const interact = {
            ...InteractInterface,
            wager,
            deadline: 120,              // deadline of 120 seconds
        };

        let contract;

        setIsLoading(true);

        try {
            contract = playerWalletAccount.contract(reachBackend);
        } 
        catch (err) {
            setIsLoading(false);
            return;
        } 

        try {  
            reachBackend?.Alice(contract, interact);

            const contractAddress = JSON.stringify(await contract.getInfo(), null, 2);
            setIsLoading(false);

            dispatch(updateContractAddress(contractAddress));
            dispatch(updateCurrentView(Views.WAITING_FOR_ATTACHER_VIEW));
            dispatch(updateCurrentPlayer(player.SECOND_PLAYER))
        }
        catch (err) {
            setIsLoading(false);
            return;
        }
    };

    const handleJoinGame = async (contractAddress: string) => {
        setIsLoading(true);
        
        try {
            const contract = await playerWalletAccount?.contract(reachBackend, JSON.parse(contractAddress));
        
            const interact = {
                ...InteractInterface,
                acceptWager,
            };
            
            reachBackend.Bob(contract, interact);
            setIsGameLoading(true);
            setIsLoading(false);
            
            dispatch(updateCurrentPlayer(player.FIRST_PLAYER))
            dispatch(updateCurrentView(Views.GAME_PLAY_VIEW));
        } catch (err) {
            setIsLoading(false);
            setDisplayContractAddressError(true);
            return;
        }
    };

    const resolvePromise = (boardStateString) => {
        setIsGameLoading(true);

        dispatch(updateBoardStateArchive(boardStateString));

        promise.resolve();
    }

    const handlePlayerRoleSelect = (role: participantTitle) => {
        if (role === participantTitle.DEPLOYER) {
            dispatch(updateCurrentView(Views.DEPLOYER_SET_WAGER_VIEW));
        }
        else {
            dispatch(updateCurrentView(Views.ATTACHER_VIEW));
        } 
    };

    const handleReturn = (viewToReturnTo: Views) => {
        dispatch(updateCurrentView(viewToReturnTo));
    };

    const connectToDefaultAccount = async () => {
        try {
            const walletAccount = await reach.getDefaultAccount();
            dispatch(updatePlayerWalletAccount(walletAccount));
            dispatch(updateCurrentView(Views.DEPLOYER_OR_ATTACHER_VIEW));
        }
        catch (err) {
            dispatch(updateCurrentView(Views.CONNECT_ACCOUNT_ERROR_VIEW));
        }
    };

    const connectAccountWithKeyPhrase = async (mnemonic: string) => {
        try {
            const walletAccount = await reach.newAccountFromMnemonic(mnemonic);
            dispatch(updatePlayerWalletAccount(walletAccount));
            dispatch(updateCurrentView(Views.DEPLOYER_OR_ATTACHER_VIEW));
        }
        catch (e) {
            setDisplayMnemonicError(true);
        }
    }

    useEffect(() => {
        connectToDefaultAccount();
    }, []);

    return (
      <div className = 'App'>
          <Loader isVisible = { isLoading }/>

          <GameLoader isVisible = { isGameLoading } />

          <ConditionalRender isVisible = { currentView === Views.CONNECT_ACCOUNT_VIEW }>
              <ConnectAccountView />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.CONNECT_ACCOUNT_ERROR_VIEW }>
              <ConnectAccountErrorView handleReturn = { handleReturn }/>
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.DEPLOYER_OR_ATTACHER_VIEW }>
              <DeployerOrAttacherView handleParticipantTitleSelect = { handlePlayerRoleSelect }/>
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.DEPLOYER_SET_WAGER_VIEW }>
              <DeployerSetWagerView 
                  handleReturn = { handleReturn }
                  handleCreateNewGame = { handleCreateNewGame }
              />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.GAME_PLAY_VIEW }>
              <GamePlayView 
                    resolvePromise = { resolvePromise }
                    isGameLoading = { isGameLoading }
              />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.WAITING_FOR_ATTACHER_VIEW }>
                <WaitingForAttacherView />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.ATTACHER_VIEW }>
                <AttacherView 
                    handleReturn = { handleReturn }
                    handleJoinGame = { handleJoinGame }
                    contractAddress = { contractAddressEntry }
                    handleChange = { handleContractAddressChange }
                    isError  = { displayContractAddressError }
                />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.CONNECT_ACCOUNT_WITH_MNEMONIC_VIEW }>
                <ConnectAccountWithMnemonicView 
                    handleReturn = { handleReturn }
                    handleConnectAccountWithKeyPhrase = { connectAccountWithKeyPhrase }
                    handleChange = { handleMnemonicChange }
                    isError = { displayMnemonicError }
                    mnemonic = { mnemonic }
                />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.WINNER_VIEW }>
              <WinnerView />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.LOSER_VIEW }>
              <LoserView />
          </ConditionalRender>

          <ConditionalRender isVisible = { currentView === Views.REVIEW_GAME_VIEW }>
              <ReviewGameView />
          </ConditionalRender>
      </div>
    )
};

export default App;

```

---
## Discussion

Congrats for making it to the end of the workshop. You succeeded in implementing the Daara game to run on the blockchain all by yourself!

The same concept can be implemented for a wide variety of board games like chess, checkers, backgammon etc.

If you found this workshop rewarding, please let us know on [the Discord community](https://discord.gg/AZsgcXu)!
If you want to know what to do next, you should check out squidKid's [Tic-Tac-Toe](https://github.com/squidKid-deluxe/reach--tic-tac-toe) and other workshops.
(There should be the link of squid's workshop too)
See you around 😉