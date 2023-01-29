// Automatically generated with Reach 0.1.13 (f79282c4)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (f79282c4)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      11: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '29'));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc6 = stdlib.T_Address;
  
  
  const v281 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v282 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v282, v281],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:115:6:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v282, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v286, v287], secs: v289, time: v288, didSend: v31, from: v285 } = txn1;
      
      sim_r.txns.push({
        amt: v286,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v298 = stdlib.safeAdd(v288, v287);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v286, v287], secs: v289, time: v288, didSend: v31, from: v285 } = txn1;
  ;
  const v298 = stdlib.safeAdd(v288, v287);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v298],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v285, v286, v287, v298],
      evt_cnt: 0,
      funcNum: 2,
      lct: v288,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v481, time: v480, didSend: v247, from: v479 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v285,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v481, time: v480, didSend: v247, from: v479 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:79:29:application',
      fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:77:28:function exp)', 'at ./index.rsh:124:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v304, time: v303, didSend: v40, from: v302 } = txn2;
    const v306 = stdlib.add(v286, v286);
    ;
    let v307 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3');
    let v308 = v303;
    let v315 = v306;
    
    let txn3 = txn2;
    while (await (async () => {
      const v323 = stdlib.eq(v307, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
      
      return v323;})()) {
      const v330 = stdlib.safeAdd(v308, v287);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc1, ctc2],
        timeoutAt: ['time', v330],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v285, v286, v287, v302, v315, v330],
          evt_cnt: 0,
          funcNum: 5,
          lct: v308,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v417, time: v416, didSend: v170, from: v415 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v285,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc6, ctc0, ctc0, ctc6, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v417, time: v416, didSend: v170, from: v415 } = txn5;
        ;
        const v418 = stdlib.addressEq(v285, v415);
        const v419 = stdlib.addressEq(v302, v415);
        const v420 = v418 ? true : v419;
        stdlib.assert(v420, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:138:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:79:29:application',
          fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:77:28:function exp)', 'at ./index.rsh:138:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v340, v341], secs: v343, time: v342, didSend: v67, from: v339 } = txn4;
        ;
        const v344 = stdlib.addressEq(v302, v339);
        stdlib.assert(v344, {
          at: './index.rsh:137:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v351 = stdlib.safeAdd(v342, v287);
        stdlib.protect(ctc3, await interact.updateOpponentMove(v340, v341), {
          at: './index.rsh:144:34:application',
          fs: ['at ./index.rsh:143:15:application call to [unknown function] (defined at: ./index.rsh:143:19:function exp)'],
          msg: 'updateOpponentMove',
          who: 'Alice'
          });
        const v355 = stdlib.protect(ctc4, await interact.dealPiece(), {
          at: './index.rsh:145:72:application',
          fs: ['at ./index.rsh:143:15:application call to [unknown function] (defined at: ./index.rsh:143:19:function exp)'],
          msg: 'dealPiece',
          who: 'Alice'
          });
        const v356 = v355[stdlib.checkedBigNumberify('./index.rsh:145:72:application', stdlib.UInt_max, '0')];
        const v357 = v355[stdlib.checkedBigNumberify('./index.rsh:145:72:application', stdlib.UInt_max, '1')];
        const v360 = stdlib.protect(ctc5, await interact.getNumberOfPiecesLeft(), {
          at: './index.rsh:146:91:application',
          fs: ['at ./index.rsh:143:15:application call to [unknown function] (defined at: ./index.rsh:143:19:function exp)'],
          msg: 'getNumberOfPiecesLeft',
          who: 'Alice'
          });
        const v361 = v360[stdlib.checkedBigNumberify('./index.rsh:146:91:application', stdlib.UInt_max, '0')];
        const v362 = v360[stdlib.checkedBigNumberify('./index.rsh:146:91:application', stdlib.UInt_max, '1')];
        
        const txn5 = await (ctc.sendrecv({
          args: [v285, v286, v287, v302, v315, v351, v356, v357, v361, v362],
          evt_cnt: 4,
          funcNum: 6,
          lct: v342,
          onlyIf: true,
          out_tys: [ctc1, ctc2, ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:148:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v366, v367, v368, v369], secs: v371, time: v370, didSend: v89, from: v365 } = txn5;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v351],
          tys: [ctc6, ctc0, ctc0, ctc6, ctc0, ctc0, ctc1, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v285, v286, v287, v302, v315, v351],
            evt_cnt: 0,
            funcNum: 7,
            lct: v342,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v399, time: v398, didSend: v136, from: v397 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v302,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc6, ctc0, ctc0, ctc6, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v399, time: v398, didSend: v136, from: v397 } = txn6;
          ;
          const v400 = stdlib.addressEq(v285, v397);
          const v401 = stdlib.addressEq(v302, v397);
          const v402 = v400 ? true : v401;
          stdlib.assert(v402, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:149:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:79:29:application',
            fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:77:28:function exp)', 'at ./index.rsh:149:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v366, v367, v368, v369], secs: v371, time: v370, didSend: v89, from: v365 } = txn5;
          ;
          const v372 = stdlib.addressEq(v285, v365);
          stdlib.assert(v372, {
            at: './index.rsh:148:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const txn6 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc0],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v381, v382], secs: v384, time: v383, didSend: v104, from: v380 } = txn6;
          ;
          const v385 = stdlib.addressEq(v302, v380);
          stdlib.assert(v385, {
            at: './index.rsh:157:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v388 = stdlib.eq(v382, v368);
          const v389 = stdlib.eq(v369, v381);
          const v390 = v388 ? v389 : false;
          const v392 = stdlib.lt(v381, stdlib.checkedBigNumberify('./index.rsh:37:24:decimal', stdlib.UInt_max, '3'));
          const v393 = stdlib.lt(v368, stdlib.checkedBigNumberify('./index.rsh:37:46:decimal', stdlib.UInt_max, '3'));
          const v394 = v392 ? v393 : false;
          const v494 = v392 ? stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:46:15:decimal', stdlib.UInt_max, '3');
          const v495 = v393 ? stdlib.checkedBigNumberify('./index.rsh:41:12:decimal', stdlib.UInt_max, '0') : v494;
          const v496 = v394 ? stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, '1') : v495;
          const v386 = v390 ? v496 : stdlib.checkedBigNumberify('./index.rsh:35:12:decimal', stdlib.UInt_max, '4');
          const cv307 = v386;
          const cv308 = v383;
          const cv315 = v315;
          
          v307 = cv307;
          v308 = cv308;
          v315 = cv315;
          
          txn3 = txn6;
          continue;
          
          }
        
        }
      
      }
    const v433 = stdlib.eq(v307, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '4'));
    if (v433) {
      ;
      ;
      stdlib.protect(ctc3, await interact.informDisagreement(), {
        at: './index.rsh:88:34:application',
        fs: ['at ./index.rsh:87:9:application call to [unknown function] (defined at: ./index.rsh:87:27:function exp)', 'at ./index.rsh:167:23:application call to "informDisagreement" (defined at: ./index.rsh:86:33:function exp)'],
        msg: 'informDisagreement',
        who: 'Alice'
        });
      
      return;
      }
    else {
      const v449 = stdlib.eq(v307, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v449) {
        ;
        ;
        stdlib.protect(ctc3, await interact.informDraw(), {
          at: './index.rsh:94:26:application',
          fs: ['at ./index.rsh:93:9:application call to [unknown function] (defined at: ./index.rsh:93:27:function exp)', 'at ./index.rsh:172:15:application call to "informDraw" (defined at: ./index.rsh:92:25:function exp)'],
          msg: 'informDraw',
          who: 'Alice'
          });
        
        return;
        }
      else {
        const v465 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:175:14:decimal', stdlib.UInt_max, '2'), v286);
        const v466 = stdlib.eq(v307, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v467 = v466 ? v285 : v302;
        ;
        stdlib.protect(ctc3, await interact.announceWinner(), {
          at: './index.rsh:103:30:application',
          fs: ['at ./index.rsh:102:9:application call to [unknown function] (defined at: ./index.rsh:102:27:function exp)', 'at ./index.rsh:176:19:application call to "announceWinner" (defined at: ./index.rsh:101:29:function exp)'],
          msg: 'announceWinner',
          who: 'Alice'
          });
        
        return;
        }}}
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '29'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '12'));
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc6 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v286, v287], secs: v289, time: v288, didSend: v31, from: v285 } = txn1;
  ;
  const v298 = stdlib.safeAdd(v288, v287);
  stdlib.protect(ctc1, await interact.acceptWager(v286), {
    at: './index.rsh:121:25:application',
    fs: ['at ./index.rsh:120:11:application call to [unknown function] (defined at: ./index.rsh:120:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v285, v286, v287, v298],
    evt_cnt: 0,
    funcNum: 1,
    lct: v288,
    onlyIf: true,
    out_tys: [],
    pay: [v286, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v304, time: v303, didSend: v40, from: v302 } = txn2;
      
      const v306 = stdlib.add(v286, v286);
      sim_r.txns.push({
        amt: v286,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v307 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3');
      const v308 = v303;
      const v315 = v306;
      
      if (await (async () => {
        const v323 = stdlib.eq(v307, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
        
        return v323;})()) {
        const v330 = stdlib.safeAdd(v308, v287);
        sim_r.isHalt = false;
        }
      else {
        const v433 = stdlib.eq(v307, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '4'));
        if (v433) {
          sim_r.txns.push({
            kind: 'from',
            to: v285,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v302,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v449 = stdlib.eq(v307, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
          if (v449) {
            sim_r.txns.push({
              kind: 'from',
              to: v285,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v302,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          else {
            const v465 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:175:14:decimal', stdlib.UInt_max, '2'), v286);
            const v466 = stdlib.eq(v307, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
            const v467 = v466 ? v285 : v302;
            sim_r.txns.push({
              kind: 'from',
              to: v467,
              tok: undefined /* Nothing */
              });
            
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v298],
    tys: [ctc6, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v285, v286, v287, v298],
      evt_cnt: 0,
      funcNum: 2,
      lct: v288,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v481, time: v480, didSend: v247, from: v479 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v285,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc6, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v481, time: v480, didSend: v247, from: v479 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:79:29:application',
      fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:77:28:function exp)', 'at ./index.rsh:124:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v304, time: v303, didSend: v40, from: v302 } = txn2;
    const v306 = stdlib.add(v286, v286);
    ;
    let v307 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3');
    let v308 = v303;
    let v315 = v306;
    
    let txn3 = txn2;
    while (await (async () => {
      const v323 = stdlib.eq(v307, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
      
      return v323;})()) {
      const v330 = stdlib.safeAdd(v308, v287);
      const v334 = stdlib.protect(ctc4, await interact.dealPiece(), {
        at: './index.rsh:135:68:application',
        fs: ['at ./index.rsh:134:13:application call to [unknown function] (defined at: ./index.rsh:134:17:function exp)'],
        msg: 'dealPiece',
        who: 'Bob'
        });
      const v335 = v334[stdlib.checkedBigNumberify('./index.rsh:135:68:application', stdlib.UInt_max, '0')];
      const v336 = v334[stdlib.checkedBigNumberify('./index.rsh:135:68:application', stdlib.UInt_max, '1')];
      
      const txn4 = await (ctc.sendrecv({
        args: [v285, v286, v287, v302, v315, v330, v335, v336],
        evt_cnt: 2,
        funcNum: 4,
        lct: v308,
        onlyIf: true,
        out_tys: [ctc2, ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:137:9:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v340, v341], secs: v343, time: v342, didSend: v67, from: v339 } = txn4;
          
          ;
          const v351 = stdlib.safeAdd(v342, v287);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v330],
        tys: [ctc6, ctc0, ctc0, ctc6, ctc0, ctc0, ctc2, ctc3],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v285, v286, v287, v302, v315, v330],
          evt_cnt: 0,
          funcNum: 5,
          lct: v308,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v417, time: v416, didSend: v170, from: v415 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v285,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc6, ctc0, ctc0, ctc6, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v417, time: v416, didSend: v170, from: v415 } = txn5;
        ;
        const v418 = stdlib.addressEq(v285, v415);
        const v419 = stdlib.addressEq(v302, v415);
        const v420 = v418 ? true : v419;
        stdlib.assert(v420, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:138:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:79:29:application',
          fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:77:28:function exp)', 'at ./index.rsh:138:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v340, v341], secs: v343, time: v342, didSend: v67, from: v339 } = txn4;
        ;
        const v344 = stdlib.addressEq(v302, v339);
        stdlib.assert(v344, {
          at: './index.rsh:137:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v351 = stdlib.safeAdd(v342, v287);
        const txn5 = await (ctc.recv({
          didSend: false,
          evt_cnt: 4,
          funcNum: 6,
          out_tys: [ctc2, ctc3, ctc0, ctc0],
          timeoutAt: ['time', v351],
          waitIfNotPresent: false
          }));
        if (txn5.didTimeout) {
          const txn6 = await (ctc.sendrecv({
            args: [v285, v286, v287, v302, v315, v351],
            evt_cnt: 0,
            funcNum: 7,
            lct: v342,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v399, time: v398, didSend: v136, from: v397 } = txn6;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v302,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc6, ctc0, ctc0, ctc6, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v399, time: v398, didSend: v136, from: v397 } = txn6;
          ;
          const v400 = stdlib.addressEq(v285, v397);
          const v401 = stdlib.addressEq(v302, v397);
          const v402 = v400 ? true : v401;
          stdlib.assert(v402, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:149:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:79:29:application',
            fs: ['at ./index.rsh:78:9:application call to [unknown function] (defined at: ./index.rsh:78:27:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:77:28:function exp)', 'at ./index.rsh:149:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v366, v367, v368, v369], secs: v371, time: v370, didSend: v89, from: v365 } = txn5;
          ;
          const v372 = stdlib.addressEq(v285, v365);
          stdlib.assert(v372, {
            at: './index.rsh:148:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          stdlib.protect(ctc1, await interact.updateOpponentMove(v366, v367), {
            at: './index.rsh:154:34:application',
            fs: ['at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:17:function exp)'],
            msg: 'updateOpponentMove',
            who: 'Bob'
            });
          const v375 = stdlib.protect(ctc5, await interact.getNumberOfPiecesLeft(), {
            at: './index.rsh:155:91:application',
            fs: ['at ./index.rsh:153:13:application call to [unknown function] (defined at: ./index.rsh:153:17:function exp)'],
            msg: 'getNumberOfPiecesLeft',
            who: 'Bob'
            });
          const v376 = v375[stdlib.checkedBigNumberify('./index.rsh:155:91:application', stdlib.UInt_max, '0')];
          const v377 = v375[stdlib.checkedBigNumberify('./index.rsh:155:91:application', stdlib.UInt_max, '1')];
          
          const txn6 = await (ctc.sendrecv({
            args: [v285, v286, v287, v302, v315, v368, v369, v376, v377],
            evt_cnt: 2,
            funcNum: 8,
            lct: v370,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:157:9:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn6) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v381, v382], secs: v384, time: v383, didSend: v104, from: v380 } = txn6;
              
              ;
              const v388 = stdlib.eq(v382, v368);
              const v389 = stdlib.eq(v369, v381);
              const v390 = v388 ? v389 : false;
              const v392 = stdlib.lt(v381, stdlib.checkedBigNumberify('./index.rsh:37:24:decimal', stdlib.UInt_max, '3'));
              const v393 = stdlib.lt(v368, stdlib.checkedBigNumberify('./index.rsh:37:46:decimal', stdlib.UInt_max, '3'));
              const v394 = v392 ? v393 : false;
              const v494 = v392 ? stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:46:15:decimal', stdlib.UInt_max, '3');
              const v495 = v393 ? stdlib.checkedBigNumberify('./index.rsh:41:12:decimal', stdlib.UInt_max, '0') : v494;
              const v496 = v394 ? stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, '1') : v495;
              const v386 = v390 ? v496 : stdlib.checkedBigNumberify('./index.rsh:35:12:decimal', stdlib.UInt_max, '4');
              const cv307 = v386;
              const cv308 = v383;
              const cv315 = v315;
              
              await (async () => {
                const v307 = cv307;
                const v308 = cv308;
                const v315 = cv315;
                
                if (await (async () => {
                  const v323 = stdlib.eq(v307, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
                  
                  return v323;})()) {
                  const v330 = stdlib.safeAdd(v308, v287);
                  sim_r.isHalt = false;
                  }
                else {
                  const v433 = stdlib.eq(v307, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '4'));
                  if (v433) {
                    sim_r.txns.push({
                      kind: 'from',
                      to: v285,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v302,
                      tok: undefined /* Nothing */
                      });
                    
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    const v449 = stdlib.eq(v307, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                    if (v449) {
                      sim_r.txns.push({
                        kind: 'from',
                        to: v285,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'from',
                        to: v302,
                        tok: undefined /* Nothing */
                        });
                      
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }
                    else {
                      const v465 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:175:14:decimal', stdlib.UInt_max, '2'), v286);
                      const v466 = stdlib.eq(v307, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                      const v467 = v466 ? v285 : v302;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v467,
                        tok: undefined /* Nothing */
                        });
                      
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      }}}})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc6, ctc0, ctc0, ctc6, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [v381, v382], secs: v384, time: v383, didSend: v104, from: v380 } = txn6;
          ;
          const v385 = stdlib.addressEq(v302, v380);
          stdlib.assert(v385, {
            at: './index.rsh:157:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v388 = stdlib.eq(v382, v368);
          const v389 = stdlib.eq(v369, v381);
          const v390 = v388 ? v389 : false;
          const v392 = stdlib.lt(v381, stdlib.checkedBigNumberify('./index.rsh:37:24:decimal', stdlib.UInt_max, '3'));
          const v393 = stdlib.lt(v368, stdlib.checkedBigNumberify('./index.rsh:37:46:decimal', stdlib.UInt_max, '3'));
          const v394 = v392 ? v393 : false;
          const v494 = v392 ? stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:46:15:decimal', stdlib.UInt_max, '3');
          const v495 = v393 ? stdlib.checkedBigNumberify('./index.rsh:41:12:decimal', stdlib.UInt_max, '0') : v494;
          const v496 = v394 ? stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, '1') : v495;
          const v386 = v390 ? v496 : stdlib.checkedBigNumberify('./index.rsh:35:12:decimal', stdlib.UInt_max, '4');
          const cv307 = v386;
          const cv308 = v383;
          const cv315 = v315;
          
          v307 = cv307;
          v308 = cv308;
          v315 = cv315;
          
          txn3 = txn6;
          continue;
          
          }
        
        }
      
      }
    const v433 = stdlib.eq(v307, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '4'));
    if (v433) {
      ;
      ;
      stdlib.protect(ctc1, await interact.informDisagreement(), {
        at: './index.rsh:88:34:application',
        fs: ['at ./index.rsh:87:9:application call to [unknown function] (defined at: ./index.rsh:87:27:function exp)', 'at ./index.rsh:167:23:application call to "informDisagreement" (defined at: ./index.rsh:86:33:function exp)'],
        msg: 'informDisagreement',
        who: 'Bob'
        });
      
      return;
      }
    else {
      const v449 = stdlib.eq(v307, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      if (v449) {
        ;
        ;
        stdlib.protect(ctc1, await interact.informDraw(), {
          at: './index.rsh:94:26:application',
          fs: ['at ./index.rsh:93:9:application call to [unknown function] (defined at: ./index.rsh:93:27:function exp)', 'at ./index.rsh:172:15:application call to "informDraw" (defined at: ./index.rsh:92:25:function exp)'],
          msg: 'informDraw',
          who: 'Bob'
          });
        
        return;
        }
      else {
        const v465 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:175:14:decimal', stdlib.UInt_max, '2'), v286);
        const v466 = stdlib.eq(v307, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v467 = v466 ? v285 : v302;
        ;
        stdlib.protect(ctc1, await interact.announceWinner(), {
          at: './index.rsh:103:30:application',
          fs: ['at ./index.rsh:102:9:application call to [unknown function] (defined at: ./index.rsh:102:27:function exp)', 'at ./index.rsh:176:19:application call to "announceWinner" (defined at: ./index.rsh:101:29:function exp)'],
          msg: 'announceWinner',
          who: 'Bob'
          });
        
        return;
        }}}
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_2((uint64))void`, `_reachp_4((uint64,byte[29],byte[12]))void`, `_reachp_5((uint64))void`, `_reachp_6((uint64,byte[29],byte[12],uint64,uint64))void`, `_reachp_7((uint64))void`, `_reachp_8((uint64,uint64,uint64))void`],
    pure: [],
    sigs: [`_reachp_0((uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_2((uint64))void`, `_reachp_4((uint64,byte[29],byte[12]))void`, `_reachp_5((uint64))void`, `_reachp_6((uint64,byte[29],byte[12],uint64,uint64))void`, `_reachp_7((uint64))void`, `_reachp_8((uint64,uint64,uint64))void`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAPAAEIAyAoAgcJUFgQMAsEJgIAAQAxGEEDoChkSSJbNQEkWzUCKWSCCAQURzgPBBtu+VAEdQ7kBgSkcTyWBMp+huwE39kjKATiV8T5BP9Mlr02GgCOCAMzAygDEgLzAx0DBwM+A0kAMQA1FzQLIls1DDQLJFs1FjQLIQtbNRWABPdxE000DBZQNBYWUDQVFlCwNAyIA780FogDxDIGNBUINQ00FzQWFlA0FRZQNA0WUCEMr1AjMgY1AjUBKUxXAGhnKDQBFjQCFlBnMRkiEkSIBAk0A0AACoAEFR98dTQEULAjQzEANRQjNAESRIgD1DQLFzUMgATVFRkUNAwWULA0DIgDUTIGNA0MRDQWiANQJTIGNBZJCDURNRI1EzQTJRJBAr80EjQVCDULNBc0FhZQNBUWUDQUUDQRFlA0CxZQJK9QIQcyBkL/biM0ARJEiANyNAsXNQyABJdO9xc0DBZQsDQMiALvMgY0DQ9ENBY0F4gC2jEZgQUSRIgDXyIyCjIJiANjQv9LIQc0ARJEiAMPNAwiWzUNgAQEz40iNA0WUDQMVwgdUDQMVyUMULA0DYgCozIGNAsMRDQUMQASRDIGNBUINQ00FzQWFlA0FRZQNBRQNBEWUDQNFlAkr1AhCDIGQv7TIQc0ARJEiAKyNAwXNQ2ABIGqms80DRZQsDQNiAJTMgY0Cw9ENBcxABI0FDEAEhFENBE0F4gCMkL/VSEINAESRIgCVDQLIls1DDQLgTFbNRA0C4E5WzUPgASYLe/iNAwWUDQLVwgdUDQLVyUMUDQQFlA0DxZQsDQMiAH2MgY0DQxENBcxABJENBc0FhZQNBUWUDQUUDQRFlA0EBZQNA8WUCENMgZC/iwhCDQBEkSIAec0Cxc1DIAEcaixozQMFlCwNAyIAawyBjQND0Q0FzEAEjQUMQASEUQ0ETQUiAGLQv6uIQ00ARJESVcAIDUXSSEEWzUWSSEFWzUVSVcwIDUUSSEJWzURSSEKWzUQgWBbNQ80CyJbNQw0CyRbNQ40CyELWzUNgAQShlvANAwWUDQOFlA0DRZQsDQMiAE2NBQxABJENA4lDDUMNBAlDDULIQ4lIQY0DE0iNAtNIzQMNAsQTTQNNBASNA80DhIQTTIGNRI1E0L9w4gA9YGgjQY0Bgg1BjYaATULQvz6iADhNhoBNQtC/WuIANY2GgE1C0L9xogAyzYaATUMQv35iADANhoBNQxC/kuIALU2GgE1C0L+eogAqjYaATULQv7ciACfNhoBNQtC/wsiMTQSRCEGMTUSRCIxNhJEIjE3EkSIAH+BaK8iIkL83TEZIhJEQvz1NBMhDhJBABE0FjQXiABcNBY0FIgAVUL9eDQTIxJBABE0FjQXiABENBY0FIgAPUL9YCEGNBYLNBQ0FzQTIQYSTYgAKEL9SyKyASOyELIHsgiziUiJTAlJNQYyCYgADYkJSUH/7kk1BogAE4mxQv/XIzUDiUkiEkw0AhIRRIkxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJSVcAIDUXSSEEWzUWSSEFWzUVSVcwIDUUSSEJWzURIQpbNQ2JSVcAIDUXSSEEWzUWSSEFWzUVSVcwIDUUSSEJWzURIQpbNQuJSVcAIDUXSSEEWzUWSSEFWzUVIQxbNQ2JNAY0B0oPQf9SQv9asbIJQv87`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `20`,
    1000: `589`,
    1001: `590`,
    1002: `590`,
    1003: `590`,
    1004: `591`,
    1005: `591`,
    1006: `593`,
    1007: `593`,
    1008: `594`,
    1009: `594`,
    101: `20`,
    1010: `594`,
    1011: `595`,
    1012: `595`,
    1013: `597`,
    1014: `597`,
    1015: `598`,
    1016: `598`,
    1017: `598`,
    1018: `599`,
    1019: `599`,
    102: `20`,
    1020: `599`,
    1021: `601`,
    1022: `601`,
    1023: `602`,
    1024: `603`,
    1025: `604`,
    1026: `604`,
    1027: `604`,
    1028: `605`,
    1029: `605`,
    103: `20`,
    1030: `607`,
    1031: `607`,
    1032: `608`,
    1033: `608`,
    1034: `608`,
    1035: `609`,
    1036: `609`,
    1037: `611`,
    1038: `611`,
    1039: `612`,
    104: `22`,
    1040: `612`,
    1041: `612`,
    1042: `613`,
    1043: `613`,
    1044: `613`,
    1045: `615`,
    1046: `615`,
    1047: `616`,
    1048: `616`,
    1049: `617`,
    105: `24`,
    1050: `619`,
    1051: `619`,
    1052: `620`,
    1053: `620`,
    1054: `621`,
    1055: `621`,
    1056: `622`,
    1057: `622`,
    1058: `623`,
    1059: `624`,
    106: `24`,
    1060: `625`,
    1061: `625`,
    1062: `625`,
    1063: `626`,
    1064: `626`,
    1065: `626`,
    1066: `628`,
    1067: `629`,
    1068: `629`,
    1069: `630`,
    107: `25`,
    1070: `631`,
    1071: `631`,
    1072: `632`,
    1073: `632`,
    1074: `633`,
    1075: `633`,
    1076: `634`,
    1077: `635`,
    1078: `637`,
    1079: `638`,
    108: `25`,
    1080: `640`,
    1081: `641`,
    1082: `642`,
    1083: `643`,
    1084: `643`,
    1085: `644`,
    1086: `644`,
    1087: `645`,
    1088: `645`,
    1089: `645`,
    109: `26`,
    1090: `646`,
    1091: `648`,
    1092: `649`,
    1093: `650`,
    1094: `650`,
    1095: `650`,
    1096: `651`,
    1097: `652`,
    1098: `652`,
    1099: `653`,
    11: `2`,
    110: `26`,
    1100: `653`,
    1101: `653`,
    1102: `654`,
    1103: `656`,
    1104: `657`,
    1105: `657`,
    1106: `657`,
    1107: `659`,
    1108: `660`,
    1109: `660`,
    111: `27`,
    1110: `661`,
    1111: `663`,
    1112: `664`,
    1113: `665`,
    1114: `666`,
    1115: `667`,
    1116: `667`,
    1117: `668`,
    1118: `669`,
    1119: `670`,
    112: `28`,
    1120: `671`,
    1121: `674`,
    1122: `674`,
    1123: `675`,
    1124: `675`,
    1125: `676`,
    1126: `677`,
    1127: `678`,
    1128: `679`,
    1129: `679`,
    113: `29`,
    1130: `680`,
    1131: `681`,
    1132: `681`,
    1133: `682`,
    1134: `682`,
    1135: `683`,
    1136: `683`,
    1137: `684`,
    1138: `685`,
    1139: `686`,
    114: `29`,
    1140: `686`,
    1141: `687`,
    1142: `688`,
    1143: `689`,
    1144: `690`,
    1145: `690`,
    1146: `691`,
    1147: `692`,
    1148: `693`,
    1149: `695`,
    115: `30`,
    1150: `696`,
    1151: `696`,
    1152: `696`,
    1153: `697`,
    1154: `697`,
    1155: `698`,
    1156: `699`,
    1157: `699`,
    1158: `700`,
    1159: `701`,
    116: `30`,
    1160: `701`,
    1161: `702`,
    1162: `703`,
    1163: `703`,
    1164: `704`,
    1165: `705`,
    1166: `705`,
    1167: `706`,
    1168: `707`,
    1169: `707`,
    117: `31`,
    1170: `707`,
    1171: `708`,
    1172: `708`,
    1173: `709`,
    1174: `710`,
    1175: `710`,
    1176: `711`,
    1177: `712`,
    1178: `712`,
    1179: `713`,
    118: `32`,
    1180: `713`,
    1181: `714`,
    1182: `715`,
    1183: `715`,
    1184: `716`,
    1185: `718`,
    1186: `719`,
    1187: `719`,
    1188: `719`,
    1189: `720`,
    119: `33`,
    1190: `720`,
    1191: `721`,
    1192: `722`,
    1193: `722`,
    1194: `723`,
    1195: `724`,
    1196: `724`,
    1197: `725`,
    1198: `726`,
    1199: `726`,
    12: `2`,
    120: `33`,
    1200: `727`,
    1201: `728`,
    1202: `728`,
    1203: `729`,
    1204: `730`,
    1205: `730`,
    1206: `730`,
    1207: `731`,
    1208: `731`,
    1209: `732`,
    121: `34`,
    1210: `733`,
    1211: `733`,
    1212: `734`,
    1213: `735`,
    1214: `735`,
    1215: `736`,
    1216: `736`,
    1217: `737`,
    1218: `738`,
    1219: `738`,
    122: `34`,
    1220: `739`,
    1221: `741`,
    1222: `742`,
    1223: `742`,
    1224: `742`,
    1225: `743`,
    1226: `743`,
    1227: `744`,
    1228: `745`,
    1229: `745`,
    123: `35`,
    1230: `746`,
    1231: `747`,
    1232: `747`,
    1233: `748`,
    1234: `749`,
    1235: `749`,
    1236: `750`,
    1237: `751`,
    1238: `751`,
    1239: `752`,
    124: `35`,
    1240: `752`,
    1241: `753`,
    1242: `754`,
    1243: `754`,
    1244: `755`,
    1245: `757`,
    1246: `757`,
    1247: `758`,
    1248: `758`,
    1249: `759`,
    125: `36`,
    1250: `760`,
    1251: `761`,
    1252: `761`,
    1253: `761`,
    1254: `762`,
    1255: `762`,
    1256: `762`,
    1257: `764`,
    1258: `765`,
    1259: `765`,
    126: `37`,
    1260: `766`,
    127: `37`,
    128: `38`,
    129: `38`,
    13: `2`,
    130: `38`,
    131: `38`,
    132: `38`,
    133: `38`,
    134: `39`,
    135: `39`,
    136: `40`,
    137: `41`,
    138: `42`,
    139: `42`,
    14: `2`,
    140: `43`,
    141: `44`,
    142: `45`,
    143: `45`,
    144: `46`,
    145: `47`,
    146: `48`,
    147: `50`,
    148: `50`,
    149: `51`,
    15: `2`,
    150: `51`,
    151: `51`,
    152: `52`,
    153: `52`,
    154: `53`,
    155: `53`,
    156: `53`,
    157: `56`,
    158: `56`,
    159: `57`,
    16: `2`,
    160: `57`,
    161: `58`,
    162: `59`,
    163: `59`,
    164: `61`,
    165: `61`,
    166: `62`,
    167: `62`,
    168: `63`,
    169: `64`,
    17: `2`,
    170: `65`,
    171: `65`,
    172: `66`,
    173: `67`,
    174: `68`,
    175: `68`,
    176: `69`,
    177: `70`,
    178: `71`,
    179: `71`,
    18: `2`,
    180: `72`,
    181: `73`,
    182: `74`,
    183: `75`,
    184: `75`,
    185: `77`,
    186: `77`,
    187: `78`,
    188: `78`,
    189: `79`,
    19: `2`,
    190: `80`,
    191: `81`,
    192: `81`,
    193: `81`,
    194: `82`,
    195: `83`,
    196: `84`,
    197: `84`,
    198: `85`,
    199: `86`,
    2: `2`,
    20: `2`,
    200: `86`,
    201: `87`,
    202: `88`,
    203: `89`,
    204: `90`,
    205: `90`,
    206: `91`,
    207: `92`,
    208: `93`,
    209: `95`,
    21: `2`,
    210: `95`,
    211: `95`,
    212: `97`,
    213: `97`,
    214: `98`,
    215: `98`,
    216: `98`,
    217: `100`,
    218: `100`,
    219: `100`,
    22: `2`,
    220: `100`,
    221: `100`,
    222: `100`,
    223: `101`,
    224: `101`,
    225: `102`,
    226: `103`,
    227: `105`,
    228: `106`,
    229: `108`,
    23: `4`,
    230: `108`,
    231: `109`,
    232: `109`,
    233: `110`,
    234: `111`,
    235: `111`,
    236: `112`,
    237: `113`,
    238: `114`,
    239: `114`,
    24: `4`,
    240: `114`,
    241: `115`,
    242: `115`,
    243: `116`,
    244: `117`,
    245: `117`,
    246: `118`,
    247: `118`,
    248: `118`,
    249: `118`,
    25: `5`,
    250: `118`,
    251: `118`,
    252: `119`,
    253: `119`,
    254: `120`,
    255: `121`,
    256: `122`,
    257: `124`,
    258: `124`,
    259: `125`,
    26: `5`,
    260: `125`,
    261: `125`,
    262: `126`,
    263: `126`,
    264: `127`,
    265: `127`,
    266: `128`,
    267: `129`,
    268: `130`,
    269: `130`,
    27: `5`,
    270: `131`,
    271: `131`,
    272: `131`,
    273: `134`,
    274: `135`,
    275: `135`,
    276: `136`,
    277: `136`,
    278: `137`,
    279: `138`,
    28: `6`,
    280: `139`,
    281: `139`,
    282: `140`,
    283: `140`,
    284: `141`,
    285: `141`,
    286: `143`,
    287: `143`,
    288: `144`,
    289: `145`,
    29: `7`,
    290: `146`,
    291: `146`,
    292: `146`,
    293: `147`,
    294: `147`,
    295: `148`,
    296: `148`,
    297: `149`,
    298: `150`,
    299: `150`,
    3: `2`,
    30: `8`,
    300: `152`,
    301: `152`,
    302: `153`,
    303: `153`,
    304: `154`,
    305: `155`,
    306: `156`,
    307: `156`,
    308: `157`,
    309: `158`,
    31: `9`,
    310: `159`,
    311: `159`,
    312: `160`,
    313: `161`,
    314: `161`,
    315: `162`,
    316: `163`,
    317: `164`,
    318: `164`,
    319: `165`,
    32: `10`,
    320: `166`,
    321: `167`,
    322: `168`,
    323: `169`,
    324: `170`,
    325: `170`,
    326: `171`,
    327: `171`,
    328: `172`,
    329: `172`,
    33: `11`,
    330: `172`,
    331: `174`,
    332: `175`,
    333: `175`,
    334: `176`,
    335: `177`,
    336: `178`,
    337: `178`,
    338: `178`,
    339: `179`,
    34: `11`,
    340: `179`,
    341: `180`,
    342: `181`,
    343: `181`,
    344: `182`,
    345: `182`,
    346: `182`,
    347: `182`,
    348: `182`,
    349: `182`,
    35: `12`,
    350: `183`,
    351: `183`,
    352: `184`,
    353: `185`,
    354: `186`,
    355: `188`,
    356: `188`,
    357: `189`,
    358: `189`,
    359: `189`,
    36: `13`,
    360: `190`,
    361: `190`,
    362: `191`,
    363: `191`,
    364: `192`,
    365: `193`,
    366: `194`,
    367: `194`,
    368: `196`,
    369: `196`,
    37: `14`,
    370: `197`,
    371: `197`,
    372: `197`,
    373: `199`,
    374: `199`,
    375: `200`,
    376: `200`,
    377: `201`,
    378: `202`,
    379: `204`,
    38: `14`,
    380: `204`,
    381: `204`,
    382: `206`,
    383: `207`,
    384: `207`,
    385: `208`,
    386: `208`,
    387: `209`,
    388: `209`,
    389: `209`,
    39: `15`,
    390: `210`,
    391: `210`,
    392: `210`,
    393: `212`,
    394: `212`,
    395: `213`,
    396: `213`,
    397: `214`,
    398: `215`,
    399: `216`,
    4: `2`,
    40: `16`,
    400: `216`,
    401: `216`,
    402: `217`,
    403: `217`,
    404: `218`,
    405: `219`,
    406: `220`,
    407: `220`,
    408: `221`,
    409: `221`,
    41: `18`,
    410: `221`,
    411: `221`,
    412: `221`,
    413: `221`,
    414: `222`,
    415: `222`,
    416: `223`,
    417: `224`,
    418: `225`,
    419: `225`,
    42: `18`,
    420: `226`,
    421: `226`,
    422: `226`,
    423: `227`,
    424: `228`,
    425: `228`,
    426: `229`,
    427: `229`,
    428: `229`,
    429: `230`,
    43: `18`,
    430: `231`,
    431: `233`,
    432: `233`,
    433: `234`,
    434: `234`,
    435: `234`,
    436: `235`,
    437: `235`,
    438: `236`,
    439: `236`,
    44: `18`,
    440: `237`,
    441: `238`,
    442: `239`,
    443: `239`,
    444: `240`,
    445: `240`,
    446: `241`,
    447: `242`,
    448: `245`,
    449: `245`,
    45: `18`,
    450: `246`,
    451: `246`,
    452: `247`,
    453: `248`,
    454: `248`,
    455: `250`,
    456: `250`,
    457: `251`,
    458: `251`,
    459: `252`,
    46: `18`,
    460: `253`,
    461: `254`,
    462: `254`,
    463: `255`,
    464: `256`,
    465: `257`,
    466: `257`,
    467: `258`,
    468: `259`,
    469: `259`,
    47: `18`,
    470: `260`,
    471: `261`,
    472: `262`,
    473: `262`,
    474: `263`,
    475: `264`,
    476: `265`,
    477: `266`,
    478: `267`,
    479: `268`,
    48: `18`,
    480: `268`,
    481: `269`,
    482: `269`,
    483: `270`,
    484: `270`,
    485: `270`,
    486: `272`,
    487: `272`,
    488: `273`,
    489: `273`,
    49: `18`,
    490: `274`,
    491: `275`,
    492: `276`,
    493: `276`,
    494: `276`,
    495: `277`,
    496: `277`,
    497: `278`,
    498: `279`,
    499: `279`,
    5: `2`,
    50: `18`,
    500: `280`,
    501: `280`,
    502: `280`,
    503: `280`,
    504: `280`,
    505: `280`,
    506: `281`,
    507: `281`,
    508: `282`,
    509: `283`,
    51: `18`,
    510: `284`,
    511: `286`,
    512: `286`,
    513: `287`,
    514: `287`,
    515: `287`,
    516: `288`,
    517: `288`,
    518: `289`,
    519: `289`,
    52: `18`,
    520: `290`,
    521: `291`,
    522: `292`,
    523: `292`,
    524: `293`,
    525: `293`,
    526: `294`,
    527: `295`,
    528: `295`,
    529: `296`,
    53: `18`,
    530: `296`,
    531: `297`,
    532: `298`,
    533: `299`,
    534: `303`,
    535: `303`,
    536: `305`,
    537: `305`,
    538: `306`,
    539: `306`,
    54: `18`,
    540: `306`,
    541: `307`,
    542: `307`,
    543: `307`,
    544: `309`,
    545: `309`,
    546: `310`,
    547: `310`,
    548: `311`,
    549: `312`,
    55: `18`,
    550: `313`,
    551: `313`,
    552: `313`,
    553: `314`,
    554: `314`,
    555: `315`,
    556: `316`,
    557: `317`,
    558: `317`,
    559: `318`,
    56: `18`,
    560: `318`,
    561: `319`,
    562: `319`,
    563: `320`,
    564: `321`,
    565: `321`,
    566: `322`,
    567: `322`,
    568: `323`,
    569: `323`,
    57: `18`,
    570: `324`,
    571: `325`,
    572: `325`,
    573: `326`,
    574: `326`,
    575: `326`,
    576: `326`,
    577: `326`,
    578: `326`,
    579: `327`,
    58: `18`,
    580: `327`,
    581: `328`,
    582: `329`,
    583: `330`,
    584: `330`,
    585: `331`,
    586: `331`,
    587: `331`,
    588: `332`,
    589: `333`,
    59: `18`,
    590: `333`,
    591: `334`,
    592: `334`,
    593: `334`,
    594: `335`,
    595: `336`,
    596: `336`,
    597: `337`,
    598: `338`,
    599: `339`,
    6: `2`,
    60: `18`,
    600: `339`,
    601: `340`,
    602: `341`,
    603: `342`,
    604: `344`,
    605: `344`,
    606: `345`,
    607: `345`,
    608: `345`,
    609: `346`,
    61: `18`,
    610: `346`,
    611: `347`,
    612: `347`,
    613: `348`,
    614: `349`,
    615: `350`,
    616: `350`,
    617: `351`,
    618: `351`,
    619: `352`,
    62: `18`,
    620: `353`,
    621: `357`,
    622: `357`,
    623: `358`,
    624: `358`,
    625: `359`,
    626: `360`,
    627: `361`,
    628: `361`,
    629: `362`,
    63: `18`,
    630: `363`,
    631: `364`,
    632: `364`,
    633: `365`,
    634: `366`,
    635: `366`,
    636: `367`,
    637: `368`,
    638: `369`,
    639: `369`,
    64: `18`,
    640: `370`,
    641: `371`,
    642: `372`,
    643: `372`,
    644: `373`,
    645: `374`,
    646: `375`,
    647: `375`,
    648: `376`,
    649: `376`,
    65: `18`,
    650: `377`,
    651: `377`,
    652: `377`,
    653: `379`,
    654: `379`,
    655: `380`,
    656: `380`,
    657: `381`,
    658: `382`,
    659: `383`,
    66: `18`,
    660: `383`,
    661: `383`,
    662: `384`,
    663: `384`,
    664: `385`,
    665: `386`,
    666: `386`,
    667: `387`,
    668: `387`,
    669: `387`,
    67: `18`,
    670: `387`,
    671: `387`,
    672: `387`,
    673: `388`,
    674: `388`,
    675: `389`,
    676: `390`,
    677: `391`,
    678: `393`,
    679: `393`,
    68: `18`,
    680: `394`,
    681: `394`,
    682: `394`,
    683: `395`,
    684: `395`,
    685: `396`,
    686: `396`,
    687: `397`,
    688: `398`,
    689: `399`,
    69: `18`,
    690: `399`,
    691: `400`,
    692: `400`,
    693: `401`,
    694: `402`,
    695: `402`,
    696: `403`,
    697: `403`,
    698: `404`,
    699: `405`,
    7: `2`,
    70: `18`,
    700: `406`,
    701: `410`,
    702: `410`,
    703: `412`,
    704: `412`,
    705: `413`,
    706: `413`,
    707: `413`,
    708: `414`,
    709: `414`,
    71: `18`,
    710: `414`,
    711: `416`,
    712: `416`,
    713: `417`,
    714: `417`,
    715: `418`,
    716: `419`,
    717: `421`,
    718: `422`,
    719: `422`,
    72: `18`,
    720: `422`,
    721: `423`,
    722: `423`,
    723: `424`,
    724: `425`,
    725: `425`,
    726: `426`,
    727: `427`,
    728: `427`,
    729: `428`,
    73: `18`,
    730: `429`,
    731: `429`,
    732: `430`,
    733: `431`,
    734: `431`,
    735: `432`,
    736: `433`,
    737: `433`,
    738: `433`,
    739: `434`,
    74: `18`,
    740: `434`,
    741: `435`,
    742: `436`,
    743: `436`,
    744: `437`,
    745: `438`,
    746: `438`,
    747: `439`,
    748: `440`,
    749: `440`,
    75: `18`,
    750: `441`,
    751: `442`,
    752: `442`,
    753: `443`,
    754: `443`,
    755: `444`,
    756: `445`,
    757: `445`,
    758: `446`,
    759: `446`,
    76: `18`,
    760: `447`,
    761: `448`,
    762: `449`,
    763: `449`,
    764: `450`,
    765: `450`,
    766: `451`,
    767: `452`,
    768: `453`,
    769: `453`,
    77: `18`,
    770: `454`,
    771: `454`,
    772: `455`,
    773: `455`,
    774: `456`,
    775: `457`,
    776: `457`,
    777: `458`,
    778: `458`,
    779: `458`,
    78: `18`,
    780: `458`,
    781: `458`,
    782: `458`,
    783: `459`,
    784: `459`,
    785: `460`,
    786: `461`,
    787: `462`,
    788: `462`,
    789: `463`,
    79: `18`,
    790: `464`,
    791: `465`,
    792: `465`,
    793: `466`,
    794: `467`,
    795: `468`,
    796: `470`,
    797: `470`,
    798: `471`,
    799: `471`,
    8: `2`,
    80: `18`,
    800: `471`,
    801: `472`,
    802: `472`,
    803: `473`,
    804: `473`,
    805: `474`,
    806: `475`,
    807: `478`,
    808: `478`,
    809: `479`,
    81: `18`,
    810: `480`,
    811: `481`,
    812: `481`,
    813: `482`,
    814: `482`,
    815: `483`,
    816: `484`,
    817: `485`,
    818: `485`,
    819: `486`,
    82: `18`,
    820: `486`,
    821: `487`,
    822: `488`,
    823: `488`,
    824: `489`,
    825: `489`,
    826: `490`,
    827: `491`,
    828: `492`,
    829: `492`,
    83: `19`,
    830: `493`,
    831: `494`,
    832: `495`,
    833: `495`,
    834: `496`,
    835: `496`,
    836: `497`,
    837: `498`,
    838: `499`,
    839: `499`,
    84: `19`,
    840: `500`,
    841: `500`,
    842: `501`,
    843: `502`,
    844: `502`,
    845: `503`,
    846: `503`,
    847: `504`,
    848: `505`,
    849: `506`,
    85: `19`,
    850: `507`,
    851: `507`,
    852: `508`,
    853: `508`,
    854: `509`,
    855: `509`,
    856: `510`,
    857: `510`,
    858: `510`,
    859: `512`,
    86: `20`,
    860: `512`,
    861: `512`,
    862: `513`,
    863: `513`,
    864: `513`,
    865: `513`,
    866: `515`,
    867: `515`,
    868: `516`,
    869: `517`,
    87: `20`,
    870: `517`,
    871: `518`,
    872: `518`,
    873: `518`,
    874: `519`,
    875: `519`,
    876: `520`,
    877: `520`,
    878: `520`,
    879: `522`,
    88: `20`,
    880: `522`,
    881: `522`,
    882: `523`,
    883: `523`,
    884: `523`,
    885: `524`,
    886: `524`,
    887: `525`,
    888: `525`,
    889: `525`,
    89: `20`,
    890: `527`,
    891: `527`,
    892: `527`,
    893: `528`,
    894: `528`,
    895: `528`,
    896: `529`,
    897: `529`,
    898: `530`,
    899: `530`,
    9: `2`,
    90: `20`,
    900: `530`,
    901: `532`,
    902: `532`,
    903: `532`,
    904: `533`,
    905: `533`,
    906: `533`,
    907: `534`,
    908: `534`,
    909: `535`,
    91: `20`,
    910: `535`,
    911: `535`,
    912: `537`,
    913: `537`,
    914: `537`,
    915: `538`,
    916: `538`,
    917: `538`,
    918: `539`,
    919: `539`,
    92: `20`,
    920: `540`,
    921: `540`,
    922: `540`,
    923: `542`,
    924: `542`,
    925: `542`,
    926: `543`,
    927: `543`,
    928: `543`,
    929: `544`,
    93: `20`,
    930: `544`,
    931: `545`,
    932: `545`,
    933: `545`,
    934: `547`,
    935: `547`,
    936: `547`,
    937: `548`,
    938: `548`,
    939: `548`,
    94: `20`,
    940: `549`,
    941: `549`,
    942: `550`,
    943: `550`,
    944: `550`,
    945: `552`,
    946: `552`,
    947: `552`,
    948: `553`,
    949: `553`,
    95: `20`,
    950: `553`,
    951: `554`,
    952: `554`,
    953: `555`,
    954: `555`,
    955: `555`,
    956: `557`,
    957: `558`,
    958: `558`,
    959: `559`,
    96: `20`,
    960: `560`,
    961: `561`,
    962: `561`,
    963: `562`,
    964: `562`,
    965: `563`,
    966: `564`,
    967: `565`,
    968: `566`,
    969: `566`,
    97: `20`,
    970: `567`,
    971: `568`,
    972: `569`,
    973: `570`,
    974: `570`,
    975: `571`,
    976: `572`,
    977: `573`,
    978: `573`,
    979: `573`,
    98: `20`,
    980: `574`,
    981: `574`,
    982: `575`,
    983: `576`,
    984: `577`,
    985: `578`,
    986: `578`,
    987: `578`,
    988: `580`,
    989: `580`,
    99: `20`,
    990: `581`,
    991: `582`,
    992: `583`,
    993: `585`,
    994: `585`,
    995: `585`,
    996: `587`,
    997: `587`,
    998: `588`,
    999: `588`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 104,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"v643","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes29","name":"elem1","type":"bytes29"},{"internalType":"bytes12","name":"elem2","type":"bytes12"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes29","name":"elem1","type":"bytes29"},{"internalType":"bytes12","name":"elem2","type":"bytes12"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e7","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e8","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v646","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v649","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes29","name":"elem1","type":"bytes29"},{"internalType":"bytes12","name":"elem2","type":"bytes12"}],"internalType":"struct T4","name":"v652","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v655","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bytes29","name":"elem1","type":"bytes29"},{"internalType":"bytes12","name":"elem2","type":"bytes12"},{"internalType":"uint256","name":"elem3","type":"uint256"},{"internalType":"uint256","name":"elem4","type":"uint256"}],"internalType":"struct T7","name":"v658","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v661","type":"tuple"}],"name":"_reachp_7","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"v664","type":"tuple"}],"name":"_reachp_8","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062001d259081380391601f1980601f85011683019360018060401b0392848610848711176200036f578160609286926040988952833981010312620003855783519260608401848110848211176200036f5785528051845260209385858301519286830193845201519486820195865243600355865191818301838110878211176200036f578852600080935260049060ff82541662000358577f4f453854b6a90dba7951e2aeeb8854b2b5f80576fe444dd363a967d18d9175e460808a5133815283518682015287518c8201528a516060820152a15180159081156200034b575b50156200033457835134036200031d5787519360808501858110888211176200030a57895282850197848952898601908582526060870192868452338852518a5280518252514301804311620002f757438110620002f357825260018086554381558a5196516001600160a01b0316858801529851868b015251606086015251608080860191909152845260a0840186811185821017620002e05788528351958611620002cd57600254908782811c92168015620002c2575b83831014620002af5750601f811162000263575b508093601f8611600114620001fb57505091839491849394620001ef575b50501b916000199060031b1c1916176002555b5161199a90816200038b8239f35b015192503880620001ce565b600283528183209493928692918316915b888383106200024857505050106200022e575b505050811b01600255620001e1565b015160001960f88460031b161c191690553880806200021f565b8587015188559096019594850194879350908101906200020c565b60028352818320601f870160051c810191838810620002a4575b601f0160051c019087905b82811062000298575050620001b0565b84815501879062000288565b90915081906200027d565b634e487b7160e01b845260229052602483fd5b91607f16916200019c565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b8580fd5b634e487b7160e01b865260118452602486fd5b634e487b7160e01b855260418352602485fd5b602490600989519163100960cb60e01b8352820152fd5b602490600889519163100960cb60e01b8352820152fd5b90506001541438620000e3565b885163100960cb60e01b8152600781840152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe608080604052600436101561001a575b50361561001857005b005b60003560e01c9081631e93b0f11461156a575080632f132302146113bb57806330dd5d081461120f5780633cb4086314610f19578063573b851014610c5e5780638323075714610c4057806397f429b8146108c9578063ab53f2c614610855578063b559601a1461021f5763f5a239bc14610095573861000f565b602036600319011261021a5760006040516100af816115bf565b526100b9366116c5565b600160005403610201576100dd6100ce611610565b60208082518301019101611709565b9060ff600454166101e8577f794b69bffed607ab45148da3c7f9c613ba8e4d2d82b625153563a3a2f536190a6040518061011884338361175e565b0390a15180159081156101dc575b50156101c357606081015143106101aa573461019157600080808093602060018060a01b0382511691015190828215610188575bf11561017c576000805560006001556101716117c7565b602060405160008152f35b6040513d6000823e3d90fd5b506108fc61015a565b60405163100960cb60e01b815260136004820152602490fd5b60405163100960cb60e01b815260126004820152602490fd5b60405163100960cb60e01b815260116004820152602490fd5b90506001541438610126565b60405163100960cb60e01b815260106004820152602490fd5b60405163100960cb60e01b8152600f6004820152602490fd5b600080fd5b606036600319011261021a576000604051610239816115bf565b52604051610246816115da565b600435815260243560208201526044356040820152604051906040820182811060018060401b038211176105d3576040526000825260006020830152600b6000540361083c57610294611610565b60e08180518101031261021a5760e0604051916102b0836115f5565b6102bc602082016116f5565b835260408101516020840152606081015160408401526102de608082016116f5565b606084015260a0810151608084015260c081015160a0840152015160c082015260ff60045416610823577fd6d1c39c0a5020e00dd6931b7ce85fc33eab108766c9c35e10ee90df64121f446080604051338152845160208201526020850151604082015260408501516060820152a181518015908115610817575b50156107fe57346107e5576060810151336001600160a01b03909116036107cc5760036020830151108352600360a0820151106020840152610399611778565b9260018060a01b038251168085526020830151908160208701526040840151604087015260018060a01b03606085015116926060870195848752604081015160a0870151146000146107c457602060c0870151910151145b156107bb57805115801591906107b457602081015115155b1561079057505060015b925b836080880152608060a088019543875201519360c08801948552600381146000146105e9575050505061048d92939160409161044f61183f565b9560018060a01b03855116875260208501516020880152838501518488015260018060a01b03905116606087015251608086015251910151906118c1565b60a082015260076000556001904382556104ae604051916020830190611881565b60c081526104bb816115f5565b8051906001600160401b0382116105d3576104d7600254611585565b601f811161058b575b50602090601f83116001146105255792829391839260009461051a575b50501b916000199060031b1c191617600255602060405160008152f35b0151925084806104fd565b90601f1983169160026000528360206000209360005b8782821061057257505010610559575b505050811b01600255610171565b015160001960f88460031b161c1916905582808061054b565b848601518755909501946020948501948793500161053b565b60026000526105c39060008051602061196e833981519152601f850160051c810191602086106105c9575b601f0160051c01906117b0565b836104e0565b90915081906105b6565b634e487b7160e01b600052604160045260246000fd5b929450909250906004810361066f5750505050600080808060018060a01b03865116602087015190828215610666575bf11561017c5751602090910151600091829182918291906001600160a01b031682821561065d575bf11561017c576000805560006001556106586117c7565b610171565b506108fc610641565b506108fc610619565b600181036106d55750505050600080808060018060a01b0386511660208701519082821561066657f11561017c5751602090910151600091829182918291906001600160a01b031682821561065d57f11561017c576000805560006001556106586117c7565b9294509092509060020361078957505b6000918015908115610733575b501561021a576000808093819382908215610729575b6001600160a01b031690f11561017c576000805560006001556106586117c7565b6108fc9150610708565b909250600181901b906001600160ff1b038116810361077357819361075d576002910414836106f2565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b90506106e5565b60200151156107a157506000610413565b156107ad576002610413565b6003610413565b6000610409565b50600492610415565b5060006103f1565b60405163100960cb60e01b815260306004820152602490fd5b60405163100960cb60e01b8152602f6004820152602490fd5b60405163100960cb60e01b8152602e6004820152602490fd5b90506001541484610359565b60405163100960cb60e01b8152602d6004820152602490fd5b60405163100960cb60e01b8152602c6004820152602490fd5b3461021a57600036600319011261021a57600054610871611610565b6040519182528160206040818301528251908160408401526000935b8285106108b0575050606092506000838284010152601f80199101168101030190f35b848101820151868601606001529381019385935061088d565b60a08060031936011261021a5760006040516108e4816115bf565b52604051906001600160401b03818301818111848210176105d357604052600435835261090f6118d5565b916020938481019384526109216118e8565b93604082019485526060820191606435835260808101916084358352600960005403610c275761094f611610565b805181019060c08183031261021a57898061096c930191016118ff565b9660ff60045416610c0e576040805133815284518b820152925162ffffff191690830152516001600160a01b0319166060820152835160808201528251858201527ffbcca778e3790f02c4b719b8484b61f6eb42dad576495f1a122891064957ebb09060c090a1518015908115610c02575b5015610be95782850151431015610bd05734610bb95784516001600160a01b0393903390851603610ba057610a11611778565b928487511694858552888801519789860198895260408101516040870190815260c06080846060850151169360608a01948552015194608089019586525196868901978852519701968752600b600055600199438b55604051988c8a01525160408901525160608801525116608086015251908401525160c08301525160e082015260e081526101008101818110838211176105d35760405280519182116105d357610abe600254611585565b601f8111610b6f575b508390601f8311600114610b0a57928293918392600094610aff575b50501b916000199060031b1c1916176002555b60405160008152f35b015192508580610ae3565b90601f19831691600260005283866000209360005b8888838310610b585750505010610b3f575b505050811b01600255610af6565b015160001960f88460031b161c19169055838080610b31565b868601518855909601959485019487935001610b1f565b610b9a90600260005285600020601f850160051c8101918786106105c957601f0160051c01906117b0565b84610ac7565b60405163100960cb60e01b815260256004820152602490fd5b602460405163100960cb60e01b8152816004820152fd5b60405163100960cb60e01b815260236004820152602490fd5b60405163100960cb60e01b815260226004820152602490fd5b905060015414876109de565b60405163100960cb60e01b815260216004820152602490fd5b60405163100960cb60e01b815260048101899052602490fd5b3461021a57600036600319011261021a576020600154604051908152f35b60208060031936011261021a576000604051610c79816115bf565b52610c83366116c5565b6001908160005403610f0057610ca8610c9a611610565b848082518301019101611709565b9060ff60045416610ee7577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159660405180610ce384338361175e565b0390a1518015908115610edc575b5015610ec3576060810151431015610eaa578281019081513403610e9157610d9090610d1b611778565b9260018060a01b0391828151168552604082519188870192835201519260408601938452606086013381526003608088015260a0870193438552519260c08801938001845282610d6961183f565b985116885251898801528451604088015251166060860152516080850152519051906118c1565b60a08201526007600055438255610dad6040519184830190611881565b60c08152610dba816115f5565b8051906001600160401b0382116105d357610dd6600254611585565b601f8111610e60575b508390601f8311600114610e1557928293918392600094610aff5750501b916000199060031b1c19161760025560405160008152f35b90601f19831691600260005283866000209360005b8888838310610e495750505010610b3f57505050811b01600255610af6565b868601518855909601959485019487935001610e2a565b610e8b90600260005285600020601f850160051c8101918786106105c957601f0160051c01906117b0565b84610ddf565b60405163100960cb60e01b8152600e6004820152602490fd5b60405163100960cb60e01b8152600d6004820152602490fd5b60405163100960cb60e01b8152600c6004820152602490fd5b905082541484610cf1565b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b606036600319011261021a576000604051610f33816115bf565b52604051610f40816115da565b6004358152610f4d6118d5565b602091828101918252610f5e6118e8565b91604082019283526007600054036111f657610f78611610565b805181019060c08183031261021a578580610f95930191016118ff565b9260ff600454166111dd5760408051338152845187820152925162ffffff191690830152516001600160a01b03191660608201527fc5cf05f38a0afd28bf7f2da3170caa5845b3795b54bba00fea68974014e0d4cd90608090a15180159081156111d1575b50156111b85760a081015143101561119f5734611186576060810180516001600160a01b03929190339084160361116d5760806110699261103961183f565b948082511686528682015187870152604082019384516040880152511660608601520151608084015251436118c1565b60a082015260096000556001904382556110896040519184830190611881565b60c08152611096816115f5565b8051906001600160401b0382116105d3576110b2600254611585565b601f811161113c575b508390601f83116001146110f157928293918392600094610aff5750501b916000199060031b1c19161760025560405160008152f35b90601f19831691600260005283866000209360005b88888383106111255750505010610b3f57505050811b01600255610af6565b868601518855909601959485019487935001611106565b61116790600260005285600020601f850160051c8101918786106105c957601f0160051c01906117b0565b846110bb565b60405163100960cb60e01b815260196004820152602490fd5b60405163100960cb60e01b815260186004820152602490fd5b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b90506001541483610ffa565b60405163100960cb60e01b815260156004820152602490fd5b60405163100960cb60e01b815260146004820152602490fd5b602036600319011261021a576000604051611229816115bf565b52611233366116c5565b6007600054036113a257611245611610565b805181019060c08183031261021a57602080611263930191016118ff565b9060ff60045416611389577f46f247599a5fa9114da586bc9a4d716618c03f0781a481e77299e07c647c12496040518061129e84338361175e565b0390a151801590811561137d575b50156113645760a0810151431061134b57346113325780516001600160a01b0390811633036113245760015b1561130b576000808084608082958251169101519082821561018857f11561017c576000805560006001556101716117c7565b60405163100960cb60e01b8152601f6004820152602490fd5b3381606084015116146112d8565b60405163100960cb60e01b8152601e6004820152602490fd5b60405163100960cb60e01b8152601d6004820152602490fd5b60405163100960cb60e01b8152601c6004820152602490fd5b905060015414826112ac565b60405163100960cb60e01b8152601b6004820152602490fd5b60405163100960cb60e01b8152601a6004820152602490fd5b602036600319011261021a5760006040516113d5816115bf565b526113df366116c5565b600960005403611551576113f1611610565b805181019060c08183031261021a5760208061140f930191016118ff565b9060ff60045416611538577fa4850b05c9188495196ad609440a82393348559ec3e1eb1c2ab8d784a9e9d4016040518061144a84338361175e565b0390a151801590811561152c575b50156115135760a081015143106114fa57346114e15780516001600160a01b0390811633036114d35760015b156114ba576000808084608082956060830151169101519082821561018857f11561017c576000805560006001556101716117c7565b60405163100960cb60e01b8152602b6004820152602490fd5b338160608401511614611484565b60405163100960cb60e01b8152602a6004820152602490fd5b60405163100960cb60e01b815260296004820152602490fd5b60405163100960cb60e01b815260286004820152602490fd5b90506001541482611458565b60405163100960cb60e01b815260276004820152602490fd5b60405163100960cb60e01b815260266004820152602490fd5b3461021a57600036600319011261021a576020906003548152f35b90600182811c921680156115b5575b602083101461159f57565b634e487b7160e01b600052602260045260246000fd5b91607f1691611594565b602081019081106001600160401b038211176105d357604052565b606081019081106001600160401b038211176105d357604052565b60e081019081106001600160401b038211176105d357604052565b60405190600060025461162281611585565b8085526001918083169081156116a65750600114611660575b5050829003601f01601f191682016001600160401b038111838210176105d357604052565b6002600090815260209350918360008051602061196e8339815191525b8385106116925750505050830101388061163b565b80548886018301529301928490820161167d565b919250506020925060ff191682850152151560051b830101388061163b565b602090600319011261021a5760405190602082016001600160401b038111838210176105d3576040526004358252565b51906001600160a01b038216820361021a57565b9081608091031261021a576040519060808201906001600160401b038211838310176105d35760609160405261173e816116f5565b835260208101516020840152604081015160408401520151606082015290565b6001600160a01b0390911681529051602082015260400190565b60405190611785826115f5565b8160c06000918281528260208201528260408201528260608201528260808201528260a08201520152565b8181106117bb575050565b600081556001016117b0565b6117d2600254611585565b806117da5750565b601f81116001146117ed57506000600255565b600260005261183290601f0160051c60008051602061196e833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6117b0565b6000602081208160025555565b6040519060c082016001600160401b038111838210176105d3576040528160a06000918281528260208201528260408201528260608201528260808201520152565b60a08091600180831b0380825116855260208201516020860152604082015160408601526060820151166060850152608081015160808501520151910152565b919082019182811161077357821061021a57565b6024359062ffffff198216820361021a57565b604435906001600160a01b03198216820361021a57565b91908260c091031261021a5760405160c081016001600160401b038111828210176105d35760405260a0808294611935816116f5565b84526020810151602085015260408101516040850152611957606082016116f5565b606085015260808101516080850152015191015256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 7461,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:117:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:124:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:178:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:178:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:178:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:130:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:138:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:139:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:149:53:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:150:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
