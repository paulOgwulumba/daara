/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1';

const [ isOutcome, B_WINS, DRAW, A_WINS, CONTINUE, TERMINATE] = makeEnum(5);

/**
 * @description Makes sure both participants are in agreement about the number of
 * pieces they both expect the other to have
 * @param piecesAlice Number of pieces Alice claims to have left
 * @param piecesBob Number of pieces Bob claims to have left
 * @param computedPiecesAlice Number of pieces Bob computes Alice to have
 * @param computedPiecesBob Number of pieces Alice computes Bob to have
 * @returns Boolean
 */
 const inAgreement = (piecesAlice, piecesBob, computedPiecesAlice, computedPiecesBob) => {
  if (
    (computedPiecesAlice === piecesAlice) &&
    (computedPiecesBob === piecesBob)
  ) {
    return true;
  }
  else return false;
};

/**
 *
 * @param piecesAlice Number of pieces Alice has left at the end of round
 * @param piecesBob Number of pieces Bob has at the end of round
 * @returns integer that maps onto outcome enum
 */
const winner = (piecesAlice, piecesBob, computedPiecesAlice, computedPiecesBob) => {
  if(!inAgreement(piecesAlice, piecesBob, computedPiecesAlice, computedPiecesBob)){
    return 4;
  }
  else if((piecesBob < 3 ) && (piecesAlice < 3)){
    return 1;
  }
  else if(piecesAlice < 3){
    return 0;
  }
  else if(piecesBob < 3){
    return 2
  }
  else return 3
};


const Player = {
  ...hasRandom,
  getNumberOfPiecesLeft: Fun([], Tuple(UInt, UInt)),
  dealPiece: Fun([], Tuple(Bytes(29), Bytes(11))),
  updateOpponentMove: Fun([Bytes(29), Bytes(11)], Null),
  informTimeout: Fun([], Null),
  informDisagreement: Fun([], Null)
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

  /**
   * @description A function that calls the informTimeout interact interface function
   * on both Participants
   */
  const informTimeout = () => {
    each([Alice, Bob], () => {
      interact.informTimeout();
    });
  };

  /**
   * @description A function that calls the informDisagreement interface function on both participants
   */
  const informDisagreement = () => {
    each([Alice, Bob], () => {
      interact.informDisagreement();
    });
  };

  //Alice inputs and publishes wager and deadline duration. Then she pays the wager
  Alice
    .only(() =>{
      const wager = declassify(interact.wager);
      const deadline = declassify(interact.deadline);
  });

  Alice
    .publish(wager, deadline)
    .pay(wager);
  commit();

  //Bob on joining the contract accepts wager before deadline.
  Bob.only(() => {
    interact.acceptWager(wager);
  })
  Bob.pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
 
  //While loop that only terminates after a player's pieces become less than 3
  var outcome = CONTINUE;
  invariant (balance() == 2 * wager && isOutcome(outcome));
  while(outcome == CONTINUE) {
    commit();

    //Second player takes first turn
    //Plays a move and publishes it before timeout
    Bob.only(() => {
      const [handBob, gameStateBob] = declassify(interact.dealPiece());
    });
    Bob.publish(handBob, gameStateBob)
      .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
    commit();

    //Alice plays a move and publishes it. This completes a round
    //Also publishes number of pieces she has left after her move
    Alice.only(() => {
      interact.updateOpponentMove(handBob, gameStateBob);
      const [handAlice, gameStateAlice] = declassify(interact.dealPiece());
      const [ piecesAlice, computedPiecesBob ] = declassify(interact.getNumberOfPiecesLeft());
    });
    Alice.publish(handAlice, gameStateAlice, piecesAlice, computedPiecesBob)
      .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    commit();

    //Bob publishes number of pieces he has left at the end of round
    Bob.only(() => {
      interact.updateOpponentMove(handAlice, gameStateAlice);
      const [ piecesBob, computedPiecesAlice ] = declassify(interact.getNumberOfPiecesLeft());
    });
    Bob.publish(piecesBob, computedPiecesAlice);

    outcome = winner(piecesAlice, piecesBob, computedPiecesAlice, computedPiecesBob);
    continue;
  }

  //send contract balance to winner or reimburse both participants if game was terminated due to dishonesty
  if(outcome == TERMINATE){
    transfer(wager).to(Alice);
    transfer(wager).to(Bob);
    informDisagreement();
  }
  else {
    transfer(2 * wager).to(outcome == A_WINS ? Alice : Bob);
  }
  commit();
});