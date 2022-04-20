// Automatically generated with Reach 0.1.9 (d3fd55fe)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (d3fd55fe)';
export const _backendVersion = 11;

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
      6: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      8: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      10: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1]
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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 29));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 11));
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc6 = stdlib.T_Address;
  
  
  const v257 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v258 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v258, v257],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:108:6:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v258, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v262, v263], secs: v265, time: v264, didSend: v31, from: v261 } = txn1;
      
      sim_r.txns.push({
        amt: v262,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v274 = stdlib.add(v264, v263);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v262, v263], secs: v265, time: v264, didSend: v31, from: v261 } = txn1;
  ;
  const v274 = stdlib.add(v264, v263);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v274],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v261, v262, v263, v274],
      evt_cnt: 0,
      funcNum: 2,
      lct: v264,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v433, time: v432, didSend: v223, from: v431 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v262,
          kind: 'from',
          to: v261,
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
    const {data: [], secs: v433, time: v432, didSend: v223, from: v431 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:78:29:application',
      fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:76:28:function exp)', 'at ./index.rsh:117:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v280, time: v279, didSend: v40, from: v278 } = txn2;
    const v282 = stdlib.add(v262, v262);
    ;
    let v283 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3);
    let v284 = v279;
    let v291 = v282;
    
    while (await (async () => {
      const v299 = stdlib.eq(v283, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3));
      
      return v299;})()) {
      const v306 = stdlib.add(v284, v263);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc1, ctc2],
        timeoutAt: ['time', v306],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v261, v262, v263, v278, v291, v306],
          evt_cnt: 0,
          funcNum: 5,
          lct: v284,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v385, time: v384, didSend: v162, from: v383 } = txn4;
            
            ;
            const v386 = stdlib.addressEq(v261, v383);
            const v387 = stdlib.addressEq(v278, v383);
            const v388 = v386 ? true : v387;
            ;
            sim_r.txns.push({
              amt: v291,
              kind: 'from',
              to: v261,
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
        const {data: [], secs: v385, time: v384, didSend: v162, from: v383 } = txn4;
        ;
        const v386 = stdlib.addressEq(v261, v383);
        const v387 = stdlib.addressEq(v278, v383);
        const v388 = v386 ? true : v387;
        stdlib.assert(v388, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:131:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:78:29:application',
          fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:76:28:function exp)', 'at ./index.rsh:131:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v314, v315], secs: v317, time: v316, didSend: v65, from: v313 } = txn3;
        ;
        const v318 = stdlib.addressEq(v278, v313);
        stdlib.assert(v318, {
          at: './index.rsh:130:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v325 = stdlib.add(v316, v263);
        stdlib.protect(ctc3, await interact.updateOpponentMove(v314, v315), {
          at: './index.rsh:137:34:application',
          fs: ['at ./index.rsh:136:15:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'updateOpponentMove',
          who: 'Alice'
          });
        const v329 = stdlib.protect(ctc4, await interact.dealPiece(), {
          at: './index.rsh:138:72:application',
          fs: ['at ./index.rsh:136:15:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'dealPiece',
          who: 'Alice'
          });
        const v330 = v329[stdlib.checkedBigNumberify('./index.rsh:138:13:array', stdlib.UInt_max, 0)];
        const v331 = v329[stdlib.checkedBigNumberify('./index.rsh:138:13:array', stdlib.UInt_max, 1)];
        const v332 = stdlib.protect(ctc5, await interact.getNumberOfPiecesLeft(), {
          at: './index.rsh:139:91:application',
          fs: ['at ./index.rsh:136:15:application call to [unknown function] (defined at: ./index.rsh:136:19:function exp)'],
          msg: 'getNumberOfPiecesLeft',
          who: 'Alice'
          });
        const v333 = v332[stdlib.checkedBigNumberify('./index.rsh:139:13:array', stdlib.UInt_max, 0)];
        const v334 = v332[stdlib.checkedBigNumberify('./index.rsh:139:13:array', stdlib.UInt_max, 1)];
        
        const txn4 = await (ctc.sendrecv({
          args: [v261, v262, v263, v278, v291, v325, v330, v331, v333, v334],
          evt_cnt: 4,
          funcNum: 6,
          lct: v316,
          onlyIf: true,
          out_tys: [ctc1, ctc2, ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:141:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v336, v337, v338, v339], secs: v341, time: v340, didSend: v83, from: v335 } = txn4;
            
            ;
            const v342 = stdlib.addressEq(v261, v335);
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v325],
          tys: [ctc6, ctc0, ctc0, ctc6, ctc0, ctc0, ctc1, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v261, v262, v263, v278, v291, v325],
            evt_cnt: 0,
            funcNum: 7,
            lct: v316,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v367, time: v366, didSend: v128, from: v365 } = txn5;
              
              ;
              const v368 = stdlib.addressEq(v261, v365);
              const v369 = stdlib.addressEq(v278, v365);
              const v370 = v368 ? true : v369;
              ;
              sim_r.txns.push({
                amt: v291,
                kind: 'from',
                to: v278,
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
          const {data: [], secs: v367, time: v366, didSend: v128, from: v365 } = txn5;
          ;
          const v368 = stdlib.addressEq(v261, v365);
          const v369 = stdlib.addressEq(v278, v365);
          const v370 = v368 ? true : v369;
          stdlib.assert(v370, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:142:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:78:29:application',
            fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:76:28:function exp)', 'at ./index.rsh:142:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v336, v337, v338, v339], secs: v341, time: v340, didSend: v83, from: v335 } = txn4;
          ;
          const v342 = stdlib.addressEq(v261, v335);
          stdlib.assert(v342, {
            at: './index.rsh:141:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 2,
            funcNum: 8,
            out_tys: [ctc0, ctc0],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v349, v350], secs: v352, time: v351, didSend: v96, from: v348 } = txn5;
          ;
          const v353 = stdlib.addressEq(v278, v348);
          stdlib.assert(v353, {
            at: './index.rsh:150:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          let v354;
          let v355;
          const v356 = stdlib.eq(v350, v338);
          const v357 = stdlib.eq(v339, v349);
          const v358 = v356 ? v357 : false;
          if (v358) {
            v355 = true;
            }
          else {
            v355 = false;
            }
          if (v355) {
            const v360 = stdlib.lt(v349, stdlib.checkedBigNumberify('./index.rsh:37:24:decimal', stdlib.UInt_max, 3));
            const v361 = stdlib.lt(v338, stdlib.checkedBigNumberify('./index.rsh:37:46:decimal', stdlib.UInt_max, 3));
            const v362 = v360 ? v361 : false;
            if (v362) {
              v354 = stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, 1);
              }
            else {
              if (v361) {
                v354 = stdlib.checkedBigNumberify('./index.rsh:41:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                if (v360) {
                  v354 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, 2);
                  }
                else {
                  v354 = stdlib.checkedBigNumberify('./index.rsh:46:15:decimal', stdlib.UInt_max, 3);
                  }
                }
              }
            }
          else {
            v354 = stdlib.checkedBigNumberify('./index.rsh:35:12:decimal', stdlib.UInt_max, 4);
            }
          const cv283 = v354;
          const cv284 = v351;
          const cv291 = v291;
          
          v283 = cv283;
          v284 = cv284;
          v291 = cv291;
          
          continue;
          
          }
        
        }
      
      }
    const v401 = stdlib.eq(v283, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 4));
    if (v401) {
      ;
      ;
      stdlib.protect(ctc3, await interact.informDisagreement(), {
        at: './index.rsh:87:34:application',
        fs: ['at ./index.rsh:86:9:application call to [unknown function] (defined at: ./index.rsh:86:27:function exp)', 'at ./index.rsh:160:23:application call to "informDisagreement" (defined at: ./index.rsh:85:33:function exp)'],
        msg: 'informDisagreement',
        who: 'Alice'
        });
      
      return;
      }
    else {
      const v417 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 2), v262);
      const v418 = stdlib.eq(v283, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v419 = v418 ? v261 : v278;
      ;
      stdlib.protect(ctc3, await interact.announceWinner(), {
        at: './index.rsh:96:30:application',
        fs: ['at ./index.rsh:95:9:application call to [unknown function] (defined at: ./index.rsh:95:27:function exp)', 'at ./index.rsh:164:19:application call to "announceWinner" (defined at: ./index.rsh:94:29:function exp)'],
        msg: 'announceWinner',
        who: 'Alice'
        });
      
      return;
      }}
  
  
  
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
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 29));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 11));
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
  const {data: [v262, v263], secs: v265, time: v264, didSend: v31, from: v261 } = txn1;
  ;
  const v274 = stdlib.add(v264, v263);
  stdlib.protect(ctc1, await interact.acceptWager(v262), {
    at: './index.rsh:114:25:application',
    fs: ['at ./index.rsh:113:11:application call to [unknown function] (defined at: ./index.rsh:113:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v261, v262, v263, v274],
    evt_cnt: 0,
    funcNum: 1,
    lct: v264,
    onlyIf: true,
    out_tys: [],
    pay: [v262, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v280, time: v279, didSend: v40, from: v278 } = txn2;
      
      const v282 = stdlib.add(v262, v262);
      sim_r.txns.push({
        amt: v262,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v283 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3);
      const v284 = v279;
      const v291 = v282;
      
      if (await (async () => {
        const v299 = stdlib.eq(v283, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3));
        
        return v299;})()) {
        const v306 = stdlib.add(v284, v263);
        sim_r.isHalt = false;
        }
      else {
        const v401 = stdlib.eq(v283, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 4));
        if (v401) {
          sim_r.txns.push({
            amt: v262,
            kind: 'from',
            to: v261,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: v262,
            kind: 'from',
            to: v278,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v417 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 2), v262);
          const v418 = stdlib.eq(v283, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
          const v419 = v418 ? v261 : v278;
          sim_r.txns.push({
            amt: v417,
            kind: 'from',
            to: v419,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v274],
    tys: [ctc6, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v261, v262, v263, v274],
      evt_cnt: 0,
      funcNum: 2,
      lct: v264,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v433, time: v432, didSend: v223, from: v431 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v262,
          kind: 'from',
          to: v261,
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
    const {data: [], secs: v433, time: v432, didSend: v223, from: v431 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:78:29:application',
      fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:76:28:function exp)', 'at ./index.rsh:117:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v280, time: v279, didSend: v40, from: v278 } = txn2;
    const v282 = stdlib.add(v262, v262);
    ;
    let v283 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3);
    let v284 = v279;
    let v291 = v282;
    
    while (await (async () => {
      const v299 = stdlib.eq(v283, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3));
      
      return v299;})()) {
      const v306 = stdlib.add(v284, v263);
      const v310 = stdlib.protect(ctc4, await interact.dealPiece(), {
        at: './index.rsh:128:68:application',
        fs: ['at ./index.rsh:127:13:application call to [unknown function] (defined at: ./index.rsh:127:17:function exp)'],
        msg: 'dealPiece',
        who: 'Bob'
        });
      const v311 = v310[stdlib.checkedBigNumberify('./index.rsh:128:13:array', stdlib.UInt_max, 0)];
      const v312 = v310[stdlib.checkedBigNumberify('./index.rsh:128:13:array', stdlib.UInt_max, 1)];
      
      const txn3 = await (ctc.sendrecv({
        args: [v261, v262, v263, v278, v291, v306, v311, v312],
        evt_cnt: 2,
        funcNum: 4,
        lct: v284,
        onlyIf: true,
        out_tys: [ctc2, ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:130:9:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v314, v315], secs: v317, time: v316, didSend: v65, from: v313 } = txn3;
          
          ;
          const v318 = stdlib.addressEq(v278, v313);
          ;
          const v325 = stdlib.add(v316, v263);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v306],
        tys: [ctc6, ctc0, ctc0, ctc6, ctc0, ctc0, ctc2, ctc3],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v261, v262, v263, v278, v291, v306],
          evt_cnt: 0,
          funcNum: 5,
          lct: v284,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v385, time: v384, didSend: v162, from: v383 } = txn4;
            
            ;
            const v386 = stdlib.addressEq(v261, v383);
            const v387 = stdlib.addressEq(v278, v383);
            const v388 = v386 ? true : v387;
            ;
            sim_r.txns.push({
              amt: v291,
              kind: 'from',
              to: v261,
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
        const {data: [], secs: v385, time: v384, didSend: v162, from: v383 } = txn4;
        ;
        const v386 = stdlib.addressEq(v261, v383);
        const v387 = stdlib.addressEq(v278, v383);
        const v388 = v386 ? true : v387;
        stdlib.assert(v388, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:131:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:78:29:application',
          fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:76:28:function exp)', 'at ./index.rsh:131:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v314, v315], secs: v317, time: v316, didSend: v65, from: v313 } = txn3;
        ;
        const v318 = stdlib.addressEq(v278, v313);
        stdlib.assert(v318, {
          at: './index.rsh:130:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v325 = stdlib.add(v316, v263);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 4,
          funcNum: 6,
          out_tys: [ctc2, ctc3, ctc0, ctc0],
          timeoutAt: ['time', v325],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v261, v262, v263, v278, v291, v325],
            evt_cnt: 0,
            funcNum: 7,
            lct: v316,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v367, time: v366, didSend: v128, from: v365 } = txn5;
              
              ;
              const v368 = stdlib.addressEq(v261, v365);
              const v369 = stdlib.addressEq(v278, v365);
              const v370 = v368 ? true : v369;
              ;
              sim_r.txns.push({
                amt: v291,
                kind: 'from',
                to: v278,
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
          const {data: [], secs: v367, time: v366, didSend: v128, from: v365 } = txn5;
          ;
          const v368 = stdlib.addressEq(v261, v365);
          const v369 = stdlib.addressEq(v278, v365);
          const v370 = v368 ? true : v369;
          stdlib.assert(v370, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:142:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:78:29:application',
            fs: ['at ./index.rsh:77:9:application call to [unknown function] (defined at: ./index.rsh:77:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:76:28:function exp)', 'at ./index.rsh:142:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v336, v337, v338, v339], secs: v341, time: v340, didSend: v83, from: v335 } = txn4;
          ;
          const v342 = stdlib.addressEq(v261, v335);
          stdlib.assert(v342, {
            at: './index.rsh:141:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          stdlib.protect(ctc1, await interact.updateOpponentMove(v336, v337), {
            at: './index.rsh:147:34:application',
            fs: ['at ./index.rsh:146:13:application call to [unknown function] (defined at: ./index.rsh:146:17:function exp)'],
            msg: 'updateOpponentMove',
            who: 'Bob'
            });
          const v345 = stdlib.protect(ctc5, await interact.getNumberOfPiecesLeft(), {
            at: './index.rsh:148:91:application',
            fs: ['at ./index.rsh:146:13:application call to [unknown function] (defined at: ./index.rsh:146:17:function exp)'],
            msg: 'getNumberOfPiecesLeft',
            who: 'Bob'
            });
          const v346 = v345[stdlib.checkedBigNumberify('./index.rsh:148:13:array', stdlib.UInt_max, 0)];
          const v347 = v345[stdlib.checkedBigNumberify('./index.rsh:148:13:array', stdlib.UInt_max, 1)];
          
          const txn5 = await (ctc.sendrecv({
            args: [v261, v262, v263, v278, v291, v338, v339, v346, v347],
            evt_cnt: 2,
            funcNum: 8,
            lct: v340,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:150:9:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v349, v350], secs: v352, time: v351, didSend: v96, from: v348 } = txn5;
              
              ;
              const v353 = stdlib.addressEq(v278, v348);
              ;
              let v354;
              let v355;
              const v356 = stdlib.eq(v350, v338);
              const v357 = stdlib.eq(v339, v349);
              const v358 = v356 ? v357 : false;
              if (v358) {
                v355 = true;
                }
              else {
                v355 = false;
                }
              if (v355) {
                const v360 = stdlib.lt(v349, stdlib.checkedBigNumberify('./index.rsh:37:24:decimal', stdlib.UInt_max, 3));
                const v361 = stdlib.lt(v338, stdlib.checkedBigNumberify('./index.rsh:37:46:decimal', stdlib.UInt_max, 3));
                const v362 = v360 ? v361 : false;
                if (v362) {
                  v354 = stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, 1);
                  }
                else {
                  if (v361) {
                    v354 = stdlib.checkedBigNumberify('./index.rsh:41:12:decimal', stdlib.UInt_max, 0);
                    }
                  else {
                    if (v360) {
                      v354 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, 2);
                      }
                    else {
                      v354 = stdlib.checkedBigNumberify('./index.rsh:46:15:decimal', stdlib.UInt_max, 3);
                      }
                    }
                  }
                }
              else {
                v354 = stdlib.checkedBigNumberify('./index.rsh:35:12:decimal', stdlib.UInt_max, 4);
                }
              const cv283 = v354;
              const cv284 = v351;
              const cv291 = v291;
              
              await (async () => {
                const v283 = cv283;
                const v284 = cv284;
                const v291 = cv291;
                
                if (await (async () => {
                  const v299 = stdlib.eq(v283, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3));
                  
                  return v299;})()) {
                  const v306 = stdlib.add(v284, v263);
                  sim_r.isHalt = false;
                  }
                else {
                  const v401 = stdlib.eq(v283, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 4));
                  if (v401) {
                    sim_r.txns.push({
                      amt: v262,
                      kind: 'from',
                      to: v261,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      amt: v262,
                      kind: 'from',
                      to: v278,
                      tok: undefined /* Nothing */
                      });
                    
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    const v417 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 2), v262);
                    const v418 = stdlib.eq(v283, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                    const v419 = v418 ? v261 : v278;
                    sim_r.txns.push({
                      amt: v417,
                      kind: 'from',
                      to: v419,
                      tok: undefined /* Nothing */
                      });
                    
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc6, ctc0, ctc0, ctc6, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [v349, v350], secs: v352, time: v351, didSend: v96, from: v348 } = txn5;
          ;
          const v353 = stdlib.addressEq(v278, v348);
          stdlib.assert(v353, {
            at: './index.rsh:150:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          let v354;
          let v355;
          const v356 = stdlib.eq(v350, v338);
          const v357 = stdlib.eq(v339, v349);
          const v358 = v356 ? v357 : false;
          if (v358) {
            v355 = true;
            }
          else {
            v355 = false;
            }
          if (v355) {
            const v360 = stdlib.lt(v349, stdlib.checkedBigNumberify('./index.rsh:37:24:decimal', stdlib.UInt_max, 3));
            const v361 = stdlib.lt(v338, stdlib.checkedBigNumberify('./index.rsh:37:46:decimal', stdlib.UInt_max, 3));
            const v362 = v360 ? v361 : false;
            if (v362) {
              v354 = stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, 1);
              }
            else {
              if (v361) {
                v354 = stdlib.checkedBigNumberify('./index.rsh:41:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                if (v360) {
                  v354 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, 2);
                  }
                else {
                  v354 = stdlib.checkedBigNumberify('./index.rsh:46:15:decimal', stdlib.UInt_max, 3);
                  }
                }
              }
            }
          else {
            v354 = stdlib.checkedBigNumberify('./index.rsh:35:12:decimal', stdlib.UInt_max, 4);
            }
          const cv283 = v354;
          const cv284 = v351;
          const cv291 = v291;
          
          v283 = cv283;
          v284 = cv284;
          v291 = cv291;
          
          continue;
          
          }
        
        }
      
      }
    const v401 = stdlib.eq(v283, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 4));
    if (v401) {
      ;
      ;
      stdlib.protect(ctc1, await interact.informDisagreement(), {
        at: './index.rsh:87:34:application',
        fs: ['at ./index.rsh:86:9:application call to [unknown function] (defined at: ./index.rsh:86:27:function exp)', 'at ./index.rsh:160:23:application call to "informDisagreement" (defined at: ./index.rsh:85:33:function exp)'],
        msg: 'informDisagreement',
        who: 'Bob'
        });
      
      return;
      }
    else {
      const v417 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:163:14:decimal', stdlib.UInt_max, 2), v262);
      const v418 = stdlib.eq(v283, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v419 = v418 ? v261 : v278;
      ;
      stdlib.protect(ctc1, await interact.announceWinner(), {
        at: './index.rsh:96:30:application',
        fs: ['at ./index.rsh:95:9:application call to [unknown function] (defined at: ./index.rsh:95:27:function exp)', 'at ./index.rsh:164:19:application call to "announceWinner" (defined at: ./index.rsh:94:29:function exp)'],
        msg: 'announceWinner',
        who: 'Bob'
        });
      
      return;
      }}
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAOAAEIWAMCIChQBgQwBQomAgEAACI1ADEYQQSeKWRJIls1ASRbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEMDEACC0mBBwxAARNJJAxAAL4kEkQhDTQBEkQ0BEkiEkw0AhIRRChkSTUDSVcwIDX/JVs1/kk1BUkiWzX9JFs1/IAENRoq0DT9FlA0/BZQsDT/MQASRDT8NP4SNAOBYFs0/RIQQQAGIzX6QgADIjX6NPpBADo0/SEEDDX5NP4hBAw1+DT5NPgQQQAGIzX7QgAbNPhBAAYiNftCABA0+UEAByEFNftCAAQhBDX7QgAEIQo1+zQDVwAgNAMhBls0AyEHWzT/NPsyBjQDIQhbQgLHSCQ0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gATiG7OpsDIGNAMlWw9ENANXACAxABI0/zEAEhFEsSKyATQDIQhbsggjshA0/7IHs0IDBkkhCQxAAJpIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBls1/iEHWzX9VzAgNfwhCFs1+0k1BUlKVwAdNfpXHQs1+SEHWzX4IQtbNfeABNrDXMk0+lA0+VA0+BZQNPcWULAyBjQDJVsMRDT/MQASRDT/NP4WUDT9FlA0/FA0+xZQNPgWUDT3FlAoSwFXAGhnSCENNQEyBjUCQgKBSCEJNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEzJmSXLAyBjQDJVsPRDT/MQASNANXMCAxABIRRLEisgE0AyEIW7III7IQNP+yB7NCAhVJIQUMQADSSSEKDEAAikghCTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBls1/iEHWzX9VzAgNfwhCFs1+0k1BUlXAB01+lcdCzX5gARExc30NPpQNPlQsDIGNAMlWwxENPwxABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPgWUChLAVcAYGdIJDUBMgY1AkIBmSEFEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQtbD0SxIrIBNAMhBluyCCOyEDQDVwAgsgezQgE8SSMMQABJSCM0ARJENARJIhJMNAISEUQoZEk1AyEGWzX/gASai5F0sDIGNAMhC1sMRDT/iAFfNANXACA0/zQDIQdbMQAhBDIGNP9JCEIAX0giNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwgaCNBogBEzT/iAEOMgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgCqNf81/jX9Nfw1+zX6Nfk0/SEEEkEALzT+NPsINfg0+TT6FlA0+xZQNPxQNP8WUDT4FlAoSwFXAGBnSCEJNQEyBjUCQgBlNP0hChJBACOxIrIBNPqyCCOyEDT5sgezsSKyATT6sggjshA0/LIHs0IAHrEisgEhBTT6C7III7IQNPw0+TT9IQUSTbIHs0IAADEZIQwSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 104,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v262",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v263",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v262",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v263",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes29",
                    "name": "elem0",
                    "type": "bytes29"
                  }
                ],
                "internalType": "struct T10",
                "name": "v314",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes11",
                    "name": "elem0",
                    "type": "bytes11"
                  }
                ],
                "internalType": "struct T11",
                "name": "v315",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes29",
                    "name": "elem0",
                    "type": "bytes29"
                  }
                ],
                "internalType": "struct T10",
                "name": "v336",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes11",
                    "name": "elem0",
                    "type": "bytes11"
                  }
                ],
                "internalType": "struct T11",
                "name": "v337",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v338",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v339",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v349",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v350",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes29",
                    "name": "elem0",
                    "type": "bytes29"
                  }
                ],
                "internalType": "struct T10",
                "name": "v314",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes11",
                    "name": "elem0",
                    "type": "bytes11"
                  }
                ],
                "internalType": "struct T11",
                "name": "v315",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes29",
                    "name": "elem0",
                    "type": "bytes29"
                  }
                ],
                "internalType": "struct T10",
                "name": "v336",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes11",
                    "name": "elem0",
                    "type": "bytes11"
                  }
                ],
                "internalType": "struct T11",
                "name": "v337",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v338",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v339",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v349",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v350",
                "type": "uint256"
              }
            ],
            "internalType": "struct T17",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T18",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620019d8380380620019d8833981016040819052620000269162000248565b600080805543600355604080516020810190915290815260408051835181526020808501518051828401520151918101919091527f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9060600160405180910390a16020820151516200009c903414600762000141565b6020808301510151620000b09043620002a8565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013792600292909101906200016b565b505050506200030c565b81620001675760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017990620002cf565b90600052602060002090601f0160209004810192826200019d5760008555620001e8565b82601f10620001b857805160ff1916838001178555620001e8565b82800160010185558215620001e8579182015b82811115620001e8578251825591602001919060010190620001cb565b50620001f6929150620001fa565b5090565b5b80821115620001f65760008155600101620001fb565b604080519081016001600160401b03811182821017156200024257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025c57600080fd5b6200026662000211565b835181526040601f19830112156200027d57600080fd5b6200028762000211565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002ca57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e457607f821691505b602082108114156200030657634e487b7160e01b600052602260045260246000fd5b50919050565b6116bc806200031c6000396000f3fe60806040526004361061008f5760003560e01c80638e314769116100565780638e3147691461010a578063ab53f2c61461011d578063b7b7eacb14610140578063bf2c5b2414610153578063ce60d95e1461016657005b80631e93b0f1146100985780632c10a159146100bc5780637eea518c146100cf57806383230757146100e25780638328d4c4146100f757005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca366004611249565b610179565b6100966100dd366004611249565b61030e565b3480156100ee57600080fd5b506001546100a9565b610096610105366004611273565b61048a565b610096610118366004611249565b610712565b34801561012957600080fd5b506101326108a7565b6040516100b3929190611296565b61009661014e3660046112f3565b610944565b610096610161366004611249565b610b9a565b610096610174366004611273565b610d33565b6101896001600054146009610f41565b6101a38135158061019c57506001548235145b600a610f41565b6000808055600280546101b590611305565b80601f01602080910402602001604051908101604052809291908181526020018280546101e190611305565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b50505050508060200190518101906102469190611356565b905061025981606001514310600b610f41565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d18260405161028891906113cf565b60405180910390a16102a1816020015134146008610f41565b6102a961111a565b815181516001600160a01b0390911690526020808301805183518301526040808501518451909101528251336060909101528183018051600390525143920191909152516102f7908061140f565b60208201516040015261030981610f66565b505050565b61031e600160005414600d610f41565b6103388135158061033157506001548235145b600e610f41565b60008080556002805461034a90611305565b80601f016020809104026020016040519081016040528092919081815260200182805461037690611305565b80156103c35780601f10610398576101008083540402835291602001916103c3565b820191906000526020600020905b8154815290600101906020018083116103a657829003601f168201915b50505050508060200190518101906103db9190611356565b90506103ef8160600151431015600f610f41565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e18260405161041e91906113cf565b60405180910390a16104323415600c610f41565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561046f573d6000803e3d6000fd5b506000808055600181905561048690600290611173565b5050565b61049a600a600054146026610f41565b6104b4813515806104ad57506001548235145b6027610f41565b6000808055600280546104c690611305565b80601f01602080910402602001604051908101604052809291908181526020018280546104f290611305565b801561053f5780601f106105145761010080835404028352916020019161053f565b820191906000526020600020905b81548152906001019060200180831161052257829003601f168201915b50505050508060200190518101906105579190611427565b60408051608081018252600080825260208201819052918101829052606081019190915290915060408051843581526020808601359082015281850135918101919091527f41b6d8e223fb0a5cfe68af9f34b07a5a94b63517841457ccfc53fb18b8e41fde9060600160405180910390a16105d434156024610f41565b60608201516105ef906001600160a01b031633146025610f41565b60a0820151604084013514610605576000610611565b60c08201516020840135145b15610622576001602082015261062a565b600060208201525b8060200151156106a0576003602084013581116040830181905260a084015191909110606083015261065d576000610663565b80606001515b1561067157600181526106a5565b80606001511561068457600081526106a5565b80604001511561069757600281526106a5565b600381526106a5565b600481525b6106ad61111a565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855194169301929092528351818401805191909152805143920191909152608085015190519091015261070c81610f66565b50505050565b6107226006600054146017610f41565b61073c8135158061073557506001548235145b6018610f41565b60008080556002805461074e90611305565b80601f016020809104026020016040519081016040528092919081815260200182805461077a90611305565b80156107c75780601f1061079c576101008083540402835291602001916107c7565b820191906000526020600020905b8154815290600101906020018083116107aa57829003601f168201915b50505050508060200190518101906107df9190611559565b90506107f38160a001514310156019610f41565b7f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de88260405161082291906113cf565b60405180910390a161083634156015610f41565b805161086a906001600160a01b031633146108605760608201516001600160a01b03163314610863565b60015b6016610f41565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561046f573d6000803e3d6000fd5b6000606060005460028080546108bc90611305565b80601f01602080910402602001604051908101604052809291908181526020018280546108e890611305565b80156109355780601f1061090a57610100808354040283529160200191610935565b820191906000526020600020905b81548152906001019060200180831161091857829003601f168201915b50505050509050915091509091565b610954600860005414601c610f41565b61096e8135158061096757506001548235145b601d610f41565b60008080556002805461098090611305565b80601f01602080910402602001604051908101604052809291908181526020018280546109ac90611305565b80156109f95780601f106109ce576101008083540402835291602001916109f9565b820191906000526020600020905b8154815290600101906020018083116109dc57829003601f168201915b5050505050806020019051810190610a119190611559565b9050610a248160a001514310601e610f41565b7fb4879ee9add9464c27e2f1f063feb73290227fc36f0b0656c8b5c43c052d7f4582604051610a5391906115aa565b60405180910390a1610a673415601a610f41565b8051610a7f906001600160a01b03163314601b610f41565b610ad16040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015181870190815260608089015187168189019081526080808b0151818b019081528c84013560a0808d019182528e84013560c0808f01918252600a6000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e0820152610100015b6040516020818303038152906040526002908051906020019061070c9291906111b0565b610baa6008600054146021610f41565b610bc481351580610bbd57506001548235145b6022610f41565b600080805560028054610bd690611305565b80601f0160208091040260200160405190810160405280929190818152602001828054610c0290611305565b8015610c4f5780601f10610c2457610100808354040283529160200191610c4f565b820191906000526020600020905b815481529060010190602001808311610c3257829003601f168201915b5050505050806020019051810190610c679190611559565b9050610c7b8160a001514310156023610f41565b7fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e082604051610caa91906113cf565b60405180910390a1610cbe3415601f610f41565b8051610cf2906001600160a01b03163314610ce85760608201516001600160a01b03163314610ceb565b60015b6020610f41565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f1935050505015801561046f573d6000803e3d6000fd5b610d436006600054146012610f41565b610d5d81351580610d5657506001548235145b6013610f41565b600080805560028054610d6f90611305565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9b90611305565b8015610de85780601f10610dbd57610100808354040283529160200191610de8565b820191906000526020600020905b815481529060010190602001808311610dcb57829003601f168201915b5050505050806020019051810190610e009190611559565b9050610e186040518060200160405280600081525090565b610e298260a0015143106014610f41565b7fa2155e8cfcd4f8197a57f832cf8fc77f686b092953f8ad7e890c94d4938fb04f83604051610e5891906115ec565b60405180910390a1610e6c34156010610f41565b6060820151610e87906001600160a01b031633146011610f41565b6040820151610e96904361140f565b81526040805160c081018252600080825260208083018281528385018381526060808601858152608080880187815260a089018881528c516001600160a01b039081168b528d8901519097528c8b0151909552928b01519094169052918801519091528551905260089091554360015591519091610f169183910161161a565b60405160208183030381529060405260029080519060200190610f3a9291906111b0565b5050505050565b816104865760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815260208201515160031415611023578151604001516020808401510151610f9b919061140f565b81526040805160c0810182526000808252602080830182815283850183815260608086018581526080870186815260a088018781528b51516001600160a01b039081168a528c518801519096528b518a01519094528a5190920151909316909252878301518601519091528551905260069091554360015591519091610b769183910161161a565b602082015151600414156110b557815180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611071573d6000803e3d6000fd5b50815160608101516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561046f573d6000803e3d6000fd5b6020820151516002146110cd578151606001516110d1565b8151515b6001600160a01b03166108fc83600001516020015160026110f29190611667565b6040518115909202916000818181858888f1935050505015801561046f573d6000803e3d6000fd5b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161116e60405180606001604052806000815260200160008152602001600081525090565b905290565b50805461117f90611305565b6000825580601f1061118f575050565b601f0160209004906000526020600020908101906111ad9190611234565b50565b8280546111bc90611305565b90600052602060002090601f0160209004810192826111de5760008555611224565b82601f106111f757805160ff1916838001178555611224565b82800160010185558215611224579182015b82811115611224578251825591602001919060010190611209565b50611230929150611234565b5090565b5b808211156112305760008155600101611235565b60006040828403121561125b57600080fd5b50919050565b60006060828403121561125b57600080fd5b60006060828403121561128557600080fd5b61128f8383611261565b9392505050565b82815260006020604081840152835180604085015260005b818110156112ca578581018301518582016060015282016112ae565b818111156112dc576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561125b57600080fd5b600181811c9082168061131957607f821691505b6020821081141561125b57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461135157600080fd5b919050565b60006080828403121561136857600080fd5b6040516080810181811067ffffffffffffffff8211171561139957634e487b7160e01b600052604160045260246000fd5b6040526113a58361133a565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b813581526040810160208301358015158082146113eb57600080fd5b806020850152505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611422576114226113f9565b500190565b600060e0828403121561143957600080fd5b60405160e0810181811067ffffffffffffffff8211171561146a57634e487b7160e01b600052604160045260246000fd5b6040526114768361133a565b815260208301516020820152604083015160408201526114986060840161133a565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b600060c082840312156114d757600080fd5b60405160c0810181811067ffffffffffffffff8211171561150857634e487b7160e01b600052604160045260246000fd5b6040529050806115178361133a565b815260208301516020820152604083015160408201526115396060840161133a565b60608201526080830151608082015260a083015160a08201525092915050565b600060c0828403121561156b57600080fd5b61128f83836114c5565b803562ffffff19811680821461158a57600080fd5b9092525050565b80356001600160a81b0319811680821461158a57600080fd5b8135815260a081016115c26020808401908501611575565b6115d26040830160408501611591565b606083013560608301526080830135608083015292915050565b81358152606081016116046020808401908501611575565b6116146040830160408501611591565b92915050565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c08101611614565b6000816000190483118215151615611681576116816113f9565b50029056fea2646970667358221220102897db05990b526295dcedc538413982e36ddc57c81c77d2111baa43bfa03d64736f6c634300080c0033`,
  BytecodeLen: 6616,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:110:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:117:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:166:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:166:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:123:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:131:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:132:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:142:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:143:13:after expr stmt semicolon',
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
