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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 16));
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Tuple([ctc1, ctc2]);
  const ctc5 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc6 = stdlib.T_Address;
  
  
  const v250 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v251 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v251, v250],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:98:6:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v251, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v255, v256], secs: v258, time: v257, didSend: v31, from: v254 } = txn1;
      
      sim_r.txns.push({
        amt: v255,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v267 = stdlib.add(v257, v256);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v255, v256], secs: v258, time: v257, didSend: v31, from: v254 } = txn1;
  ;
  const v267 = stdlib.add(v257, v256);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v267],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v254, v255, v256, v267],
      evt_cnt: 0,
      funcNum: 2,
      lct: v257,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v421, time: v420, didSend: v216, from: v419 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v255,
          kind: 'from',
          to: v254,
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
    const {data: [], secs: v421, time: v420, didSend: v216, from: v419 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:77:29:application',
      fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:75:28:function exp)', 'at ./index.rsh:107:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v273, time: v272, didSend: v40, from: v271 } = txn2;
    const v275 = stdlib.add(v255, v255);
    ;
    let v276 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3);
    let v277 = v272;
    let v284 = v275;
    
    while (await (async () => {
      const v292 = stdlib.eq(v276, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3));
      
      return v292;})()) {
      const v299 = stdlib.add(v277, v256);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc1, ctc2],
        timeoutAt: ['time', v299],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v254, v255, v256, v271, v284, v299],
          evt_cnt: 0,
          funcNum: 5,
          lct: v277,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v378, time: v377, didSend: v162, from: v376 } = txn4;
            
            ;
            const v379 = stdlib.addressEq(v254, v376);
            const v380 = stdlib.addressEq(v271, v376);
            const v381 = v379 ? true : v380;
            ;
            sim_r.txns.push({
              amt: v284,
              kind: 'from',
              to: v254,
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
        const {data: [], secs: v378, time: v377, didSend: v162, from: v376 } = txn4;
        ;
        const v379 = stdlib.addressEq(v254, v376);
        const v380 = stdlib.addressEq(v271, v376);
        const v381 = v379 ? true : v380;
        stdlib.assert(v381, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:121:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:77:29:application',
          fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:75:28:function exp)', 'at ./index.rsh:121:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v307, v308], secs: v310, time: v309, didSend: v65, from: v306 } = txn3;
        ;
        const v311 = stdlib.addressEq(v271, v306);
        stdlib.assert(v311, {
          at: './index.rsh:120:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v318 = stdlib.add(v309, v256);
        stdlib.protect(ctc3, await interact.updateOpponentMove(v307, v308), {
          at: './index.rsh:127:34:application',
          fs: ['at ./index.rsh:126:15:application call to [unknown function] (defined at: ./index.rsh:126:19:function exp)'],
          msg: 'updateOpponentMove',
          who: 'Alice'
          });
        const v322 = stdlib.protect(ctc4, await interact.dealPiece(), {
          at: './index.rsh:128:72:application',
          fs: ['at ./index.rsh:126:15:application call to [unknown function] (defined at: ./index.rsh:126:19:function exp)'],
          msg: 'dealPiece',
          who: 'Alice'
          });
        const v323 = v322[stdlib.checkedBigNumberify('./index.rsh:128:13:array', stdlib.UInt_max, 0)];
        const v324 = v322[stdlib.checkedBigNumberify('./index.rsh:128:13:array', stdlib.UInt_max, 1)];
        const v325 = stdlib.protect(ctc5, await interact.getNumberOfPiecesLeft(), {
          at: './index.rsh:129:91:application',
          fs: ['at ./index.rsh:126:15:application call to [unknown function] (defined at: ./index.rsh:126:19:function exp)'],
          msg: 'getNumberOfPiecesLeft',
          who: 'Alice'
          });
        const v326 = v325[stdlib.checkedBigNumberify('./index.rsh:129:13:array', stdlib.UInt_max, 0)];
        const v327 = v325[stdlib.checkedBigNumberify('./index.rsh:129:13:array', stdlib.UInt_max, 1)];
        
        const txn4 = await (ctc.sendrecv({
          args: [v254, v255, v256, v271, v284, v318, v323, v324, v326, v327],
          evt_cnt: 4,
          funcNum: 6,
          lct: v309,
          onlyIf: true,
          out_tys: [ctc1, ctc2, ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:131:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v329, v330, v331, v332], secs: v334, time: v333, didSend: v83, from: v328 } = txn4;
            
            ;
            const v335 = stdlib.addressEq(v254, v328);
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v318],
          tys: [ctc6, ctc0, ctc0, ctc6, ctc0, ctc0, ctc1, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v254, v255, v256, v271, v284, v318],
            evt_cnt: 0,
            funcNum: 7,
            lct: v309,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v360, time: v359, didSend: v128, from: v358 } = txn5;
              
              ;
              const v361 = stdlib.addressEq(v254, v358);
              const v362 = stdlib.addressEq(v271, v358);
              const v363 = v361 ? true : v362;
              ;
              sim_r.txns.push({
                amt: v284,
                kind: 'from',
                to: v271,
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
          const {data: [], secs: v360, time: v359, didSend: v128, from: v358 } = txn5;
          ;
          const v361 = stdlib.addressEq(v254, v358);
          const v362 = stdlib.addressEq(v271, v358);
          const v363 = v361 ? true : v362;
          stdlib.assert(v363, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:132:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:77:29:application',
            fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:75:28:function exp)', 'at ./index.rsh:132:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v329, v330, v331, v332], secs: v334, time: v333, didSend: v83, from: v328 } = txn4;
          ;
          const v335 = stdlib.addressEq(v254, v328);
          stdlib.assert(v335, {
            at: './index.rsh:131:11:dot',
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
          const {data: [v342, v343], secs: v345, time: v344, didSend: v96, from: v341 } = txn5;
          ;
          const v346 = stdlib.addressEq(v271, v341);
          stdlib.assert(v346, {
            at: './index.rsh:140:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          let v347;
          let v348;
          const v349 = stdlib.eq(v343, v331);
          const v350 = stdlib.eq(v332, v342);
          const v351 = v349 ? v350 : false;
          if (v351) {
            v348 = true;
            }
          else {
            v348 = false;
            }
          if (v348) {
            const v353 = stdlib.lt(v342, stdlib.checkedBigNumberify('./index.rsh:37:24:decimal', stdlib.UInt_max, 3));
            const v354 = stdlib.lt(v331, stdlib.checkedBigNumberify('./index.rsh:37:46:decimal', stdlib.UInt_max, 3));
            const v355 = v353 ? v354 : false;
            if (v355) {
              v347 = stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, 1);
              }
            else {
              if (v354) {
                v347 = stdlib.checkedBigNumberify('./index.rsh:41:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                if (v353) {
                  v347 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, 2);
                  }
                else {
                  v347 = stdlib.checkedBigNumberify('./index.rsh:46:15:decimal', stdlib.UInt_max, 3);
                  }
                }
              }
            }
          else {
            v347 = stdlib.checkedBigNumberify('./index.rsh:35:12:decimal', stdlib.UInt_max, 4);
            }
          const cv276 = v347;
          const cv277 = v344;
          const cv284 = v284;
          
          v276 = cv276;
          v277 = cv277;
          v284 = cv284;
          
          continue;
          
          }
        
        }
      
      }
    const v394 = stdlib.eq(v276, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 4));
    if (v394) {
      ;
      ;
      stdlib.protect(ctc3, await interact.informDisagreement(), {
        at: './index.rsh:86:34:application',
        fs: ['at ./index.rsh:85:9:application call to [unknown function] (defined at: ./index.rsh:85:27:function exp)', 'at ./index.rsh:150:23:application call to "informDisagreement" (defined at: ./index.rsh:84:33:function exp)'],
        msg: 'informDisagreement',
        who: 'Alice'
        });
      
      return;
      }
    else {
      const v410 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:153:14:decimal', stdlib.UInt_max, 2), v255);
      const v411 = stdlib.eq(v276, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v412 = v411 ? v254 : v271;
      ;
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
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 32));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 16));
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
  const {data: [v255, v256], secs: v258, time: v257, didSend: v31, from: v254 } = txn1;
  ;
  const v267 = stdlib.add(v257, v256);
  stdlib.protect(ctc1, await interact.acceptWager(v255), {
    at: './index.rsh:104:25:application',
    fs: ['at ./index.rsh:103:11:application call to [unknown function] (defined at: ./index.rsh:103:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v254, v255, v256, v267],
    evt_cnt: 0,
    funcNum: 1,
    lct: v257,
    onlyIf: true,
    out_tys: [],
    pay: [v255, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v273, time: v272, didSend: v40, from: v271 } = txn2;
      
      const v275 = stdlib.add(v255, v255);
      sim_r.txns.push({
        amt: v255,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v276 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3);
      const v277 = v272;
      const v284 = v275;
      
      if (await (async () => {
        const v292 = stdlib.eq(v276, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3));
        
        return v292;})()) {
        const v299 = stdlib.add(v277, v256);
        sim_r.isHalt = false;
        }
      else {
        const v394 = stdlib.eq(v276, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 4));
        if (v394) {
          sim_r.txns.push({
            amt: v255,
            kind: 'from',
            to: v254,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: v255,
            kind: 'from',
            to: v271,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v410 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:153:14:decimal', stdlib.UInt_max, 2), v255);
          const v411 = stdlib.eq(v276, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
          const v412 = v411 ? v254 : v271;
          sim_r.txns.push({
            amt: v410,
            kind: 'from',
            to: v412,
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
    timeoutAt: ['time', v267],
    tys: [ctc6, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v254, v255, v256, v267],
      evt_cnt: 0,
      funcNum: 2,
      lct: v257,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v421, time: v420, didSend: v216, from: v419 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v255,
          kind: 'from',
          to: v254,
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
    const {data: [], secs: v421, time: v420, didSend: v216, from: v419 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:77:29:application',
      fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:75:28:function exp)', 'at ./index.rsh:107:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v273, time: v272, didSend: v40, from: v271 } = txn2;
    const v275 = stdlib.add(v255, v255);
    ;
    let v276 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3);
    let v277 = v272;
    let v284 = v275;
    
    while (await (async () => {
      const v292 = stdlib.eq(v276, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3));
      
      return v292;})()) {
      const v299 = stdlib.add(v277, v256);
      const v303 = stdlib.protect(ctc4, await interact.dealPiece(), {
        at: './index.rsh:118:68:application',
        fs: ['at ./index.rsh:117:13:application call to [unknown function] (defined at: ./index.rsh:117:17:function exp)'],
        msg: 'dealPiece',
        who: 'Bob'
        });
      const v304 = v303[stdlib.checkedBigNumberify('./index.rsh:118:13:array', stdlib.UInt_max, 0)];
      const v305 = v303[stdlib.checkedBigNumberify('./index.rsh:118:13:array', stdlib.UInt_max, 1)];
      
      const txn3 = await (ctc.sendrecv({
        args: [v254, v255, v256, v271, v284, v299, v304, v305],
        evt_cnt: 2,
        funcNum: 4,
        lct: v277,
        onlyIf: true,
        out_tys: [ctc2, ctc3],
        pay: [stdlib.checkedBigNumberify('./index.rsh:120:9:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v307, v308], secs: v310, time: v309, didSend: v65, from: v306 } = txn3;
          
          ;
          const v311 = stdlib.addressEq(v271, v306);
          ;
          const v318 = stdlib.add(v309, v256);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v299],
        tys: [ctc6, ctc0, ctc0, ctc6, ctc0, ctc0, ctc2, ctc3],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v254, v255, v256, v271, v284, v299],
          evt_cnt: 0,
          funcNum: 5,
          lct: v277,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v378, time: v377, didSend: v162, from: v376 } = txn4;
            
            ;
            const v379 = stdlib.addressEq(v254, v376);
            const v380 = stdlib.addressEq(v271, v376);
            const v381 = v379 ? true : v380;
            ;
            sim_r.txns.push({
              amt: v284,
              kind: 'from',
              to: v254,
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
        const {data: [], secs: v378, time: v377, didSend: v162, from: v376 } = txn4;
        ;
        const v379 = stdlib.addressEq(v254, v376);
        const v380 = stdlib.addressEq(v271, v376);
        const v381 = v379 ? true : v380;
        stdlib.assert(v381, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:121:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:77:29:application',
          fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:75:28:function exp)', 'at ./index.rsh:121:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v307, v308], secs: v310, time: v309, didSend: v65, from: v306 } = txn3;
        ;
        const v311 = stdlib.addressEq(v271, v306);
        stdlib.assert(v311, {
          at: './index.rsh:120:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v318 = stdlib.add(v309, v256);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 4,
          funcNum: 6,
          out_tys: [ctc2, ctc3, ctc0, ctc0],
          timeoutAt: ['time', v318],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v254, v255, v256, v271, v284, v318],
            evt_cnt: 0,
            funcNum: 7,
            lct: v309,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v360, time: v359, didSend: v128, from: v358 } = txn5;
              
              ;
              const v361 = stdlib.addressEq(v254, v358);
              const v362 = stdlib.addressEq(v271, v358);
              const v363 = v361 ? true : v362;
              ;
              sim_r.txns.push({
                amt: v284,
                kind: 'from',
                to: v271,
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
          const {data: [], secs: v360, time: v359, didSend: v128, from: v358 } = txn5;
          ;
          const v361 = stdlib.addressEq(v254, v358);
          const v362 = stdlib.addressEq(v271, v358);
          const v363 = v361 ? true : v362;
          stdlib.assert(v363, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:132:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:77:29:application',
            fs: ['at ./index.rsh:76:9:application call to [unknown function] (defined at: ./index.rsh:76:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:75:28:function exp)', 'at ./index.rsh:132:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v329, v330, v331, v332], secs: v334, time: v333, didSend: v83, from: v328 } = txn4;
          ;
          const v335 = stdlib.addressEq(v254, v328);
          stdlib.assert(v335, {
            at: './index.rsh:131:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          stdlib.protect(ctc1, await interact.updateOpponentMove(v329, v330), {
            at: './index.rsh:137:34:application',
            fs: ['at ./index.rsh:136:13:application call to [unknown function] (defined at: ./index.rsh:136:17:function exp)'],
            msg: 'updateOpponentMove',
            who: 'Bob'
            });
          const v338 = stdlib.protect(ctc5, await interact.getNumberOfPiecesLeft(), {
            at: './index.rsh:138:91:application',
            fs: ['at ./index.rsh:136:13:application call to [unknown function] (defined at: ./index.rsh:136:17:function exp)'],
            msg: 'getNumberOfPiecesLeft',
            who: 'Bob'
            });
          const v339 = v338[stdlib.checkedBigNumberify('./index.rsh:138:13:array', stdlib.UInt_max, 0)];
          const v340 = v338[stdlib.checkedBigNumberify('./index.rsh:138:13:array', stdlib.UInt_max, 1)];
          
          const txn5 = await (ctc.sendrecv({
            args: [v254, v255, v256, v271, v284, v331, v332, v339, v340],
            evt_cnt: 2,
            funcNum: 8,
            lct: v333,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:140:9:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v342, v343], secs: v345, time: v344, didSend: v96, from: v341 } = txn5;
              
              ;
              const v346 = stdlib.addressEq(v271, v341);
              ;
              let v347;
              let v348;
              const v349 = stdlib.eq(v343, v331);
              const v350 = stdlib.eq(v332, v342);
              const v351 = v349 ? v350 : false;
              if (v351) {
                v348 = true;
                }
              else {
                v348 = false;
                }
              if (v348) {
                const v353 = stdlib.lt(v342, stdlib.checkedBigNumberify('./index.rsh:37:24:decimal', stdlib.UInt_max, 3));
                const v354 = stdlib.lt(v331, stdlib.checkedBigNumberify('./index.rsh:37:46:decimal', stdlib.UInt_max, 3));
                const v355 = v353 ? v354 : false;
                if (v355) {
                  v347 = stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, 1);
                  }
                else {
                  if (v354) {
                    v347 = stdlib.checkedBigNumberify('./index.rsh:41:12:decimal', stdlib.UInt_max, 0);
                    }
                  else {
                    if (v353) {
                      v347 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, 2);
                      }
                    else {
                      v347 = stdlib.checkedBigNumberify('./index.rsh:46:15:decimal', stdlib.UInt_max, 3);
                      }
                    }
                  }
                }
              else {
                v347 = stdlib.checkedBigNumberify('./index.rsh:35:12:decimal', stdlib.UInt_max, 4);
                }
              const cv276 = v347;
              const cv277 = v344;
              const cv284 = v284;
              
              await (async () => {
                const v276 = cv276;
                const v277 = cv277;
                const v284 = cv284;
                
                if (await (async () => {
                  const v292 = stdlib.eq(v276, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3));
                  
                  return v292;})()) {
                  const v299 = stdlib.add(v277, v256);
                  sim_r.isHalt = false;
                  }
                else {
                  const v394 = stdlib.eq(v276, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 4));
                  if (v394) {
                    sim_r.txns.push({
                      amt: v255,
                      kind: 'from',
                      to: v254,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      amt: v255,
                      kind: 'from',
                      to: v271,
                      tok: undefined /* Nothing */
                      });
                    
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    const v410 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:153:14:decimal', stdlib.UInt_max, 2), v255);
                    const v411 = stdlib.eq(v276, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                    const v412 = v411 ? v254 : v271;
                    sim_r.txns.push({
                      amt: v410,
                      kind: 'from',
                      to: v412,
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
          const {data: [v342, v343], secs: v345, time: v344, didSend: v96, from: v341 } = txn5;
          ;
          const v346 = stdlib.addressEq(v271, v341);
          stdlib.assert(v346, {
            at: './index.rsh:140:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          let v347;
          let v348;
          const v349 = stdlib.eq(v343, v331);
          const v350 = stdlib.eq(v332, v342);
          const v351 = v349 ? v350 : false;
          if (v351) {
            v348 = true;
            }
          else {
            v348 = false;
            }
          if (v348) {
            const v353 = stdlib.lt(v342, stdlib.checkedBigNumberify('./index.rsh:37:24:decimal', stdlib.UInt_max, 3));
            const v354 = stdlib.lt(v331, stdlib.checkedBigNumberify('./index.rsh:37:46:decimal', stdlib.UInt_max, 3));
            const v355 = v353 ? v354 : false;
            if (v355) {
              v347 = stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, 1);
              }
            else {
              if (v354) {
                v347 = stdlib.checkedBigNumberify('./index.rsh:41:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                if (v353) {
                  v347 = stdlib.checkedBigNumberify('./index.rsh:44:12:decimal', stdlib.UInt_max, 2);
                  }
                else {
                  v347 = stdlib.checkedBigNumberify('./index.rsh:46:15:decimal', stdlib.UInt_max, 3);
                  }
                }
              }
            }
          else {
            v347 = stdlib.checkedBigNumberify('./index.rsh:35:12:decimal', stdlib.UInt_max, 4);
            }
          const cv276 = v347;
          const cv277 = v344;
          const cv284 = v284;
          
          v276 = cv276;
          v277 = cv277;
          v284 = cv284;
          
          continue;
          
          }
        
        }
      
      }
    const v394 = stdlib.eq(v276, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 4));
    if (v394) {
      ;
      ;
      stdlib.protect(ctc1, await interact.informDisagreement(), {
        at: './index.rsh:86:34:application',
        fs: ['at ./index.rsh:85:9:application call to [unknown function] (defined at: ./index.rsh:85:27:function exp)', 'at ./index.rsh:150:23:application call to "informDisagreement" (defined at: ./index.rsh:84:33:function exp)'],
        msg: 'informDisagreement',
        who: 'Bob'
        });
      
      return;
      }
    else {
      const v410 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:153:14:decimal', stdlib.UInt_max, 2), v255);
      const v411 = stdlib.eq(v276, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v412 = v411 ? v254 : v271;
      ;
      return;
      }}
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAOAAEIWAMCIFAoBgQwBQomAgEAACI1ADEYQQSeKWRJIls1ASRbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEMDEACC0mBBwxAARNJJAxAAL4kEkQhDTQBEkQ0BEkiEkw0AhIRRChkSTUDSVcwIDX/JVs1/kk1BUkiWzX9JFs1/IAENRoq0DT9FlA0/BZQsDT/MQASRDT8NP4SNAOBYFs0/RIQQQAGIzX6QgADIjX6NPpBADo0/SEEDDX5NP4hBAw1+DT5NPgQQQAGIzX7QgAbNPhBAAYiNftCABA0+UEAByEFNftCAAQhBDX7QgAEIQo1+zQDVwAgNAMhBls0AyEIWzT/NPsyBjQDIQdbQgLHSCQ0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gATiG7OpsDIGNAMlWw9ENANXACAxABI0/zEAEhFEsSKyATQDIQdbsggjshA0/7IHs0IDBkkhCQxAAJpIJDQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBls1/iEIWzX9VzAgNfwhB1s1+0k1BUlKVwAgNfpXIBA1+SELWzX4gThbNfeABMjJPXY0+lA0+VA0+BZQNPcWULAyBjQDJVsMRDT/MQASRDT/NP4WUDT9FlA0/FA0+xZQNPgWUDT3FlAoSwFXAGhnSCENNQEyBjUCQgKBSCEJNAESRDQESSISTDQCEhFEKGRJNQNXACA1/4AEzJmSXLAyBjQDJVsPRDT/MQASNANXMCAxABIRRLEisgE0AyEHW7III7IQNP+yB7NCAhVJIQUMQADSSSEKDEAAikghCTQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBls1/iEIWzX9VzAgNfwhB1s1+0k1BUlXACA1+lcgEDX5gASRyT3aNPpQNPlQsDIGNAMlWwxENPwxABJEMgY0/Qg1+DT/NP4WUDT9FlA0/FA0+xZQNPgWUChLAVcAYGdIJDUBMgY1AkIBmSEFEkQjNAESRDQESSISTDQCEhFEKGQ1A4AEQbFATbAyBjQDIQtbD0SxIrIBNAMhBluyCCOyEDQDVwAgsgezQgE8SSMMQABJSCM0ARJENARJIhJMNAISEUQoZEk1AyEGWzX/gASai5F0sDIGNAMhC1sMRDT/iAFfNANXACA0/zQDIQhbMQAhBDIGNP9JCEIAX0giNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwgaCNBogBEzT/iAEOMgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgCqNf81/jX9Nfw1+zX6Nfk0/SEEEkEALzT+NPsINfg0+TT6FlA0+xZQNPxQNP8WUDT4FlAoSwFXAGBnSCEJNQEyBjUCQgBlNP0hChJBACOxIrIBNPqyCCOyEDT5sgezsSKyATT6sggjshA0/LIHs0IAHrEisgEhBTT6C7III7IQNPw0+TT9IQUSTbIHs0IAADEZIQwSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjUBIjUCQv/DNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
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
                "name": "v255",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v256",
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
                "name": "v255",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v256",
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
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T10",
                "name": "v307",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes16",
                    "name": "elem0",
                    "type": "bytes16"
                  }
                ],
                "internalType": "struct T11",
                "name": "v308",
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
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T10",
                "name": "v329",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes16",
                    "name": "elem0",
                    "type": "bytes16"
                  }
                ],
                "internalType": "struct T11",
                "name": "v330",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v331",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v332",
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
                "name": "v342",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v343",
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
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T10",
                "name": "v307",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes16",
                    "name": "elem0",
                    "type": "bytes16"
                  }
                ],
                "internalType": "struct T11",
                "name": "v308",
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
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T10",
                "name": "v329",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes16",
                    "name": "elem0",
                    "type": "bytes16"
                  }
                ],
                "internalType": "struct T11",
                "name": "v330",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v331",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v332",
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
                "name": "v342",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v343",
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
  Bytecode: `0x6080604052604051620019c0380380620019c0833981016040819052620000269162000248565b600080805543600355604080516020810190915290815260408051835181526020808501518051828401520151918101919091527f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9060600160405180910390a16020820151516200009c903414600762000141565b6020808301510151620000b09043620002a8565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013792600292909101906200016b565b505050506200030c565b81620001675760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017990620002cf565b90600052602060002090601f0160209004810192826200019d5760008555620001e8565b82601f10620001b857805160ff1916838001178555620001e8565b82800160010185558215620001e8579182015b82811115620001e8578251825591602001919060010190620001cb565b50620001f6929150620001fa565b5090565b5b80821115620001f65760008155600101620001fb565b604080519081016001600160401b03811182821017156200024257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025c57600080fd5b6200026662000211565b835181526040601f19830112156200027d57600080fd5b6200028762000211565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002ca57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e457607f821691505b602082108114156200030657634e487b7160e01b600052602260045260246000fd5b50919050565b6116a4806200031c6000396000f3fe60806040526004361061008f5760003560e01c80638328d4c4116100565780638328d4c41461010a57806386fbb8e01461011d5780638e31476914610130578063ab53f2c614610143578063bf2c5b241461016657005b80631e93b0f1146100985780632c10a159146100bc5780637393ce14146100cf5780637eea518c146100e257806383230757146100f557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca366004611249565b610179565b6100966100dd366004611273565b61030e565b6100966100f0366004611249565b61051c565b34801561010157600080fd5b506001546100a9565b610096610118366004611273565b610698565b61009661012b366004611296565b610920565b61009661013e366004611249565b610b76565b34801561014f57600080fd5b50610158610d0b565b6040516100b39291906112a8565b610096610174366004611249565b610da8565b6101896001600054146009610f41565b6101a38135158061019c57506001548235145b600a610f41565b6000808055600280546101b590611305565b80601f01602080910402602001604051908101604052809291908181526020018280546101e190611305565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b50505050508060200190518101906102469190611356565b905061025981606001514310600b610f41565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d18260405161028891906113cf565b60405180910390a16102a1816020015134146008610f41565b6102a961111a565b815181516001600160a01b0390911690526020808301805183518301526040808501518451909101528251336060909101528183018051600390525143920191909152516102f7908061140f565b60208201516040015261030981610f66565b505050565b61031e6006600054146012610f41565b6103388135158061033157506001548235145b6013610f41565b60008080556002805461034a90611305565b80601f016020809104026020016040519081016040528092919081815260200182805461037690611305565b80156103c35780601f10610398576101008083540402835291602001916103c3565b820191906000526020600020905b8154815290600101906020018083116103a657829003601f168201915b50505050508060200190518101906103db91906114bb565b90506103f36040518060200160405280600081525090565b6104048260a0015143106014610f41565b7f5e5c1fd343340137b44267e779bbe5a43bafbd5f3a480fb17019d5217c4212ae836040516104339190611500565b60405180910390a161044734156010610f41565b6060820151610462906001600160a01b031633146011610f41565b6040820151610471904361140f565b81526040805160c081018252600080825260208083018281528385018381526060808601858152608080880187815260a089018881528c516001600160a01b039081168b528d8901519097528c8b0151909552928b015190941690529188015190915285519052600890915543600155915190916104f191839101611528565b60405160208183030381529060405260029080519060200190610515929190611173565b5050505050565b61052c600160005414600d610f41565b6105468135158061053f57506001548235145b600e610f41565b60008080556002805461055890611305565b80601f016020809104026020016040519081016040528092919081815260200182805461058490611305565b80156105d15780601f106105a6576101008083540402835291602001916105d1565b820191906000526020600020905b8154815290600101906020018083116105b457829003601f168201915b50505050508060200190518101906105e99190611356565b90506105fd8160600151431015600f610f41565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e18260405161062c91906113cf565b60405180910390a16106403415600c610f41565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561067d573d6000803e3d6000fd5b5060008080556001819055610694906002906111f7565b5050565b6106a8600a600054146026610f41565b6106c2813515806106bb57506001548235145b6027610f41565b6000808055600280546106d490611305565b80601f016020809104026020016040519081016040528092919081815260200182805461070090611305565b801561074d5780601f106107225761010080835404028352916020019161074d565b820191906000526020600020905b81548152906001019060200180831161073057829003601f168201915b50505050508060200190518101906107659190611575565b60408051608081018252600080825260208201819052918101829052606081019190915290915060408051843581526020808601359082015281850135918101919091527f41b6d8e223fb0a5cfe68af9f34b07a5a94b63517841457ccfc53fb18b8e41fde9060600160405180910390a16107e234156024610f41565b60608201516107fd906001600160a01b031633146025610f41565b60a082015160408401351461081357600061081f565b60c08201516020840135145b156108305760016020820152610838565b600060208201525b8060200151156108ae576003602084013581116040830181905260a084015191909110606083015261086b576000610871565b80606001515b1561087f57600181526108b3565b80606001511561089257600081526108b3565b8060400151156108a557600281526108b3565b600381526108b3565b600481525b6108bb61111a565b825181516001600160a01b03918216905260208085015183518201526040808601518451820152606080870151855194169301929092528351818401805191909152805143920191909152608085015190519091015261091a81610f66565b50505050565b610930600860005414601c610f41565b61094a8135158061094357506001548235145b601d610f41565b60008080556002805461095c90611305565b80601f016020809104026020016040519081016040528092919081815260200182805461098890611305565b80156109d55780601f106109aa576101008083540402835291602001916109d5565b820191906000526020600020905b8154815290600101906020018083116109b857829003601f168201915b50505050508060200190518101906109ed91906114bb565b9050610a008160a001514310601e610f41565b7f4edcd6416eef04262b648e8a285a0b24d1118be37fb9fc3bea2b6458d479c13582604051610a2f9190611613565b60405180910390a1610a433415601a610f41565b8051610a5b906001600160a01b03163314601b610f41565b610aad6040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015181870190815260608089015187168189019081526080808b0151818b019081528c84013560a0808d019182528e84013560c0808f01918252600a6000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e0820152610100015b6040516020818303038152906040526002908051906020019061091a929190611173565b610b866006600054146017610f41565b610ba081351580610b9957506001548235145b6018610f41565b600080805560028054610bb290611305565b80601f0160208091040260200160405190810160405280929190818152602001828054610bde90611305565b8015610c2b5780601f10610c0057610100808354040283529160200191610c2b565b820191906000526020600020905b815481529060010190602001808311610c0e57829003601f168201915b5050505050806020019051810190610c4391906114bb565b9050610c578160a001514310156019610f41565b7f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de882604051610c8691906113cf565b60405180910390a1610c9a34156015610f41565b8051610cce906001600160a01b03163314610cc45760608201516001600160a01b03163314610cc7565b60015b6016610f41565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561067d573d6000803e3d6000fd5b600060606000546002808054610d2090611305565b80601f0160208091040260200160405190810160405280929190818152602001828054610d4c90611305565b8015610d995780601f10610d6e57610100808354040283529160200191610d99565b820191906000526020600020905b815481529060010190602001808311610d7c57829003601f168201915b50505050509050915091509091565b610db86008600054146021610f41565b610dd281351580610dcb57506001548235145b6022610f41565b600080805560028054610de490611305565b80601f0160208091040260200160405190810160405280929190818152602001828054610e1090611305565b8015610e5d5780601f10610e3257610100808354040283529160200191610e5d565b820191906000526020600020905b815481529060010190602001808311610e4057829003601f168201915b5050505050806020019051810190610e7591906114bb565b9050610e898160a001514310156023610f41565b7fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e082604051610eb891906113cf565b60405180910390a1610ecc3415601f610f41565b8051610f00906001600160a01b03163314610ef65760608201516001600160a01b03163314610ef9565b60015b6020610f41565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f1935050505015801561067d573d6000803e3d6000fd5b816106945760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815260208201515160031415611023578151604001516020808401510151610f9b919061140f565b81526040805160c0810182526000808252602080830182815283850183815260608086018581526080870186815260a088018781528b51516001600160a01b039081168a528c518801519096528b518a01519094528a5190920151909316909252878301518601519091528551905260069091554360015591519091610b5291839101611528565b602082015151600414156110b557815180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611071573d6000803e3d6000fd5b50815160608101516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561067d573d6000803e3d6000fd5b6020820151516002146110cd578151606001516110d1565b8151515b6001600160a01b03166108fc83600001516020015160026110f2919061164f565b6040518115909202916000818181858888f1935050505015801561067d573d6000803e3d6000fd5b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161116e60405180606001604052806000815260200160008152602001600081525090565b905290565b82805461117f90611305565b90600052602060002090601f0160209004810192826111a157600085556111e7565b82601f106111ba57805160ff19168380011785556111e7565b828001600101855582156111e7579182015b828111156111e75782518255916020019190600101906111cc565b506111f3929150611234565b5090565b50805461120390611305565b6000825580601f10611213575050565b601f0160209004906000526020600020908101906112319190611234565b50565b5b808211156111f35760008155600101611235565b60006040828403121561125b57600080fd5b50919050565b60006060828403121561125b57600080fd5b60006060828403121561128557600080fd5b61128f8383611261565b9392505050565b600060a0828403121561125b57600080fd5b82815260006020604081840152835180604085015260005b818110156112dc578581018301518582016060015282016112c0565b818111156112ee576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061131957607f821691505b6020821081141561125b57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461135157600080fd5b919050565b60006080828403121561136857600080fd5b6040516080810181811067ffffffffffffffff8211171561139957634e487b7160e01b600052604160045260246000fd5b6040526113a58361133a565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b813581526040810160208301358015158082146113eb57600080fd5b806020850152505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115611422576114226113f9565b500190565b600060c0828403121561143957600080fd5b60405160c0810181811067ffffffffffffffff8211171561146a57634e487b7160e01b600052604160045260246000fd5b6040529050806114798361133a565b8152602083015160208201526040830151604082015261149b6060840161133a565b60608201526080830151608082015260a083015160a08201525092915050565b600060c082840312156114cd57600080fd5b61128f8383611427565b80356fffffffffffffffffffffffffffffffff1981168082146114f957600080fd5b9092525050565b81358152602080830135908201526060810161152260408084019085016114d7565b92915050565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c08101611522565b600060e0828403121561158757600080fd5b60405160e0810181811067ffffffffffffffff821117156115b857634e487b7160e01b600052604160045260246000fd5b6040526115c48361133a565b815260208301516020820152604083015160408201526115e66060840161133a565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b813581526020808301359082015260a0810161163560408084019085016114d7565b606083013560608301526080830135608083015292915050565b6000816000190483118215151615611669576116696113f9565b50029056fea2646970667358221220aa68326dd61e036440b601ea3ca66c0753169020aa18c820a4516a024e8bd87564736f6c634300080c0033`,
  BytecodeLen: 6592,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:100:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:107:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:155:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:155:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:113:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:121:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:122:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:132:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:133:13:after expr stmt semicolon',
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
