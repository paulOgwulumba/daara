// Automatically generated with Reach 0.1.9 (c449a2f7)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (c449a2f7)';
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
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 16));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const v244 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v245 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v245, v244],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:95:6:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v245, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v249, v250], secs: v252, time: v251, didSend: v31, from: v248 } = txn1;
      
      sim_r.txns.push({
        amt: v249,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v261 = stdlib.add(v251, v250);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v249, v250], secs: v252, time: v251, didSend: v31, from: v248 } = txn1;
  ;
  const v261 = stdlib.add(v251, v250);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v261],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v248, v249, v250, v261],
      evt_cnt: 0,
      funcNum: 2,
      lct: v251,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v409, time: v408, didSend: v210, from: v407 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v249,
          kind: 'from',
          to: v248,
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
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v409, time: v408, didSend: v210, from: v407 } = txn3;
    ;
    ;
    stdlib.protect(ctc2, await interact.informTimeout(), {
      at: './index.rsh:74:29:application',
      fs: ['at ./index.rsh:73:9:application call to [unknown function] (defined at: ./index.rsh:73:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:72:28:function exp)', 'at ./index.rsh:104:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v267, time: v266, didSend: v40, from: v265 } = txn2;
    const v269 = stdlib.add(v249, v249);
    ;
    let v270 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3);
    let v271 = v266;
    let v278 = v269;
    
    while (await (async () => {
      const v286 = stdlib.eq(v270, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3));
      
      return v286;})()) {
      const v293 = stdlib.add(v271, v250);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc1],
        timeoutAt: ['time', v293],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v248, v249, v250, v265, v278, v293],
          evt_cnt: 0,
          funcNum: 5,
          lct: v271,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v366, time: v365, didSend: v156, from: v364 } = txn4;
            
            ;
            const v367 = stdlib.addressEq(v248, v364);
            const v368 = stdlib.addressEq(v265, v364);
            const v369 = v367 ? true : v368;
            ;
            sim_r.txns.push({
              amt: v278,
              kind: 'from',
              to: v248,
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
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v366, time: v365, didSend: v156, from: v364 } = txn4;
        ;
        const v367 = stdlib.addressEq(v248, v364);
        const v368 = stdlib.addressEq(v265, v364);
        const v369 = v367 ? true : v368;
        stdlib.assert(v369, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:118:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc2, await interact.informTimeout(), {
          at: './index.rsh:74:29:application',
          fs: ['at ./index.rsh:73:9:application call to [unknown function] (defined at: ./index.rsh:73:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:72:28:function exp)', 'at ./index.rsh:118:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v299], secs: v301, time: v300, didSend: v62, from: v298 } = txn3;
        ;
        const v302 = stdlib.addressEq(v265, v298);
        stdlib.assert(v302, {
          at: './index.rsh:117:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v309 = stdlib.add(v300, v250);
        stdlib.protect(ctc2, await interact.updateOpponentMove(v299), {
          at: './index.rsh:124:34:application',
          fs: ['at ./index.rsh:123:15:application call to [unknown function] (defined at: ./index.rsh:123:19:function exp)'],
          msg: 'updateOpponentMove',
          who: 'Alice'
          });
        const v313 = stdlib.protect(ctc1, await interact.dealPiece(), {
          at: './index.rsh:125:54:application',
          fs: ['at ./index.rsh:123:15:application call to [unknown function] (defined at: ./index.rsh:123:19:function exp)'],
          msg: 'dealPiece',
          who: 'Alice'
          });
        const v314 = stdlib.protect(ctc3, await interact.getNumberOfPiecesLeft(), {
          at: './index.rsh:126:91:application',
          fs: ['at ./index.rsh:123:15:application call to [unknown function] (defined at: ./index.rsh:123:19:function exp)'],
          msg: 'getNumberOfPiecesLeft',
          who: 'Alice'
          });
        const v315 = v314[stdlib.checkedBigNumberify('./index.rsh:126:13:array', stdlib.UInt_max, 0)];
        const v316 = v314[stdlib.checkedBigNumberify('./index.rsh:126:13:array', stdlib.UInt_max, 1)];
        
        const txn4 = await (ctc.sendrecv({
          args: [v248, v249, v250, v265, v278, v309, v313, v315, v316],
          evt_cnt: 3,
          funcNum: 6,
          lct: v300,
          onlyIf: true,
          out_tys: [ctc1, ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:128:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v318, v319, v320], secs: v322, time: v321, didSend: v77, from: v317 } = txn4;
            
            ;
            const v323 = stdlib.addressEq(v248, v317);
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v309],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc1, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v248, v249, v250, v265, v278, v309],
            evt_cnt: 0,
            funcNum: 7,
            lct: v300,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v348, time: v347, didSend: v122, from: v346 } = txn5;
              
              ;
              const v349 = stdlib.addressEq(v248, v346);
              const v350 = stdlib.addressEq(v265, v346);
              const v351 = v349 ? true : v350;
              ;
              sim_r.txns.push({
                amt: v278,
                kind: 'from',
                to: v265,
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
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v348, time: v347, didSend: v122, from: v346 } = txn5;
          ;
          const v349 = stdlib.addressEq(v248, v346);
          const v350 = stdlib.addressEq(v265, v346);
          const v351 = v349 ? true : v350;
          stdlib.assert(v351, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:129:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc2, await interact.informTimeout(), {
            at: './index.rsh:74:29:application',
            fs: ['at ./index.rsh:73:9:application call to [unknown function] (defined at: ./index.rsh:73:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:72:28:function exp)', 'at ./index.rsh:129:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v318, v319, v320], secs: v322, time: v321, didSend: v77, from: v317 } = txn4;
          ;
          const v323 = stdlib.addressEq(v248, v317);
          stdlib.assert(v323, {
            at: './index.rsh:128:11:dot',
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
          const {data: [v330, v331], secs: v333, time: v332, didSend: v90, from: v329 } = txn5;
          ;
          const v334 = stdlib.addressEq(v265, v329);
          stdlib.assert(v334, {
            at: './index.rsh:137:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          let v335;
          let v336;
          const v337 = stdlib.eq(v331, v319);
          const v338 = stdlib.eq(v320, v330);
          const v339 = v337 ? v338 : false;
          if (v339) {
            v336 = true;
            }
          else {
            v336 = false;
            }
          if (v336) {
            const v341 = stdlib.lt(v330, stdlib.checkedBigNumberify('./index.rsh:34:24:decimal', stdlib.UInt_max, 3));
            const v342 = stdlib.lt(v319, stdlib.checkedBigNumberify('./index.rsh:34:46:decimal', stdlib.UInt_max, 3));
            const v343 = v341 ? v342 : false;
            if (v343) {
              v335 = stdlib.checkedBigNumberify('./index.rsh:35:12:decimal', stdlib.UInt_max, 1);
              }
            else {
              if (v342) {
                v335 = stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                if (v341) {
                  v335 = stdlib.checkedBigNumberify('./index.rsh:41:12:decimal', stdlib.UInt_max, 2);
                  }
                else {
                  v335 = stdlib.checkedBigNumberify('./index.rsh:43:15:decimal', stdlib.UInt_max, 3);
                  }
                }
              }
            }
          else {
            v335 = stdlib.checkedBigNumberify('./index.rsh:32:12:decimal', stdlib.UInt_max, 4);
            }
          const cv270 = v335;
          const cv271 = v332;
          const cv278 = v278;
          
          v270 = cv270;
          v271 = cv271;
          v278 = cv278;
          
          continue;
          
          }
        
        }
      
      }
    const v382 = stdlib.eq(v270, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 4));
    if (v382) {
      ;
      ;
      stdlib.protect(ctc2, await interact.informDisagreement(), {
        at: './index.rsh:83:34:application',
        fs: ['at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:27:function exp)', 'at ./index.rsh:147:23:application call to "informDisagreement" (defined at: ./index.rsh:81:33:function exp)'],
        msg: 'informDisagreement',
        who: 'Alice'
        });
      
      return;
      }
    else {
      const v398 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:150:14:decimal', stdlib.UInt_max, 2), v249);
      const v399 = stdlib.eq(v270, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v400 = v399 ? v248 : v265;
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
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 16));
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v249, v250], secs: v252, time: v251, didSend: v31, from: v248 } = txn1;
  ;
  const v261 = stdlib.add(v251, v250);
  stdlib.protect(ctc1, await interact.acceptWager(v249), {
    at: './index.rsh:101:25:application',
    fs: ['at ./index.rsh:100:11:application call to [unknown function] (defined at: ./index.rsh:100:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v248, v249, v250, v261],
    evt_cnt: 0,
    funcNum: 1,
    lct: v251,
    onlyIf: true,
    out_tys: [],
    pay: [v249, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v267, time: v266, didSend: v40, from: v265 } = txn2;
      
      const v269 = stdlib.add(v249, v249);
      sim_r.txns.push({
        amt: v249,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v270 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3);
      const v271 = v266;
      const v278 = v269;
      
      if (await (async () => {
        const v286 = stdlib.eq(v270, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3));
        
        return v286;})()) {
        const v293 = stdlib.add(v271, v250);
        sim_r.isHalt = false;
        }
      else {
        const v382 = stdlib.eq(v270, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 4));
        if (v382) {
          sim_r.txns.push({
            amt: v249,
            kind: 'from',
            to: v248,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            amt: v249,
            kind: 'from',
            to: v265,
            tok: undefined /* Nothing */
            });
          
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }
        else {
          const v398 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:150:14:decimal', stdlib.UInt_max, 2), v249);
          const v399 = stdlib.eq(v270, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
          const v400 = v399 ? v248 : v265;
          sim_r.txns.push({
            amt: v398,
            kind: 'from',
            to: v400,
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
    timeoutAt: ['time', v261],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v248, v249, v250, v261],
      evt_cnt: 0,
      funcNum: 2,
      lct: v251,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v409, time: v408, didSend: v210, from: v407 } = txn3;
        
        ;
        sim_r.txns.push({
          amt: v249,
          kind: 'from',
          to: v248,
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
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v409, time: v408, didSend: v210, from: v407 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:74:29:application',
      fs: ['at ./index.rsh:73:9:application call to [unknown function] (defined at: ./index.rsh:73:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:72:28:function exp)', 'at ./index.rsh:104:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v267, time: v266, didSend: v40, from: v265 } = txn2;
    const v269 = stdlib.add(v249, v249);
    ;
    let v270 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3);
    let v271 = v266;
    let v278 = v269;
    
    while (await (async () => {
      const v286 = stdlib.eq(v270, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3));
      
      return v286;})()) {
      const v293 = stdlib.add(v271, v250);
      const v297 = stdlib.protect(ctc2, await interact.dealPiece(), {
        at: './index.rsh:115:52:application',
        fs: ['at ./index.rsh:114:13:application call to [unknown function] (defined at: ./index.rsh:114:17:function exp)'],
        msg: 'dealPiece',
        who: 'Bob'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v248, v249, v250, v265, v278, v293, v297],
        evt_cnt: 1,
        funcNum: 4,
        lct: v271,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:117:9:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v299], secs: v301, time: v300, didSend: v62, from: v298 } = txn3;
          
          ;
          const v302 = stdlib.addressEq(v265, v298);
          ;
          const v309 = stdlib.add(v300, v250);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v293],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v248, v249, v250, v265, v278, v293],
          evt_cnt: 0,
          funcNum: 5,
          lct: v271,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v366, time: v365, didSend: v156, from: v364 } = txn4;
            
            ;
            const v367 = stdlib.addressEq(v248, v364);
            const v368 = stdlib.addressEq(v265, v364);
            const v369 = v367 ? true : v368;
            ;
            sim_r.txns.push({
              amt: v278,
              kind: 'from',
              to: v248,
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
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v366, time: v365, didSend: v156, from: v364 } = txn4;
        ;
        const v367 = stdlib.addressEq(v248, v364);
        const v368 = stdlib.addressEq(v265, v364);
        const v369 = v367 ? true : v368;
        stdlib.assert(v369, {
          at: 'reach standard library:189:11:dot',
          fs: ['at ./index.rsh:118:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:74:29:application',
          fs: ['at ./index.rsh:73:9:application call to [unknown function] (defined at: ./index.rsh:73:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:72:28:function exp)', 'at ./index.rsh:118:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v299], secs: v301, time: v300, didSend: v62, from: v298 } = txn3;
        ;
        const v302 = stdlib.addressEq(v265, v298);
        stdlib.assert(v302, {
          at: './index.rsh:117:9:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v309 = stdlib.add(v300, v250);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 3,
          funcNum: 6,
          out_tys: [ctc2, ctc0, ctc0],
          timeoutAt: ['time', v309],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v248, v249, v250, v265, v278, v309],
            evt_cnt: 0,
            funcNum: 7,
            lct: v300,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:189:11:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v348, time: v347, didSend: v122, from: v346 } = txn5;
              
              ;
              const v349 = stdlib.addressEq(v248, v346);
              const v350 = stdlib.addressEq(v265, v346);
              const v351 = v349 ? true : v350;
              ;
              sim_r.txns.push({
                amt: v278,
                kind: 'from',
                to: v265,
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
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v348, time: v347, didSend: v122, from: v346 } = txn5;
          ;
          const v349 = stdlib.addressEq(v248, v346);
          const v350 = stdlib.addressEq(v265, v346);
          const v351 = v349 ? true : v350;
          stdlib.assert(v351, {
            at: 'reach standard library:189:11:dot',
            fs: ['at ./index.rsh:129:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:74:29:application',
            fs: ['at ./index.rsh:73:9:application call to [unknown function] (defined at: ./index.rsh:73:27:function exp)', 'at reach standard library:192:8:application call to "after" (defined at: ./index.rsh:72:28:function exp)', 'at ./index.rsh:129:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v318, v319, v320], secs: v322, time: v321, didSend: v77, from: v317 } = txn4;
          ;
          const v323 = stdlib.addressEq(v248, v317);
          stdlib.assert(v323, {
            at: './index.rsh:128:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          stdlib.protect(ctc1, await interact.updateOpponentMove(v318), {
            at: './index.rsh:134:34:application',
            fs: ['at ./index.rsh:133:13:application call to [unknown function] (defined at: ./index.rsh:133:17:function exp)'],
            msg: 'updateOpponentMove',
            who: 'Bob'
            });
          const v326 = stdlib.protect(ctc3, await interact.getNumberOfPiecesLeft(), {
            at: './index.rsh:135:91:application',
            fs: ['at ./index.rsh:133:13:application call to [unknown function] (defined at: ./index.rsh:133:17:function exp)'],
            msg: 'getNumberOfPiecesLeft',
            who: 'Bob'
            });
          const v327 = v326[stdlib.checkedBigNumberify('./index.rsh:135:13:array', stdlib.UInt_max, 0)];
          const v328 = v326[stdlib.checkedBigNumberify('./index.rsh:135:13:array', stdlib.UInt_max, 1)];
          
          const txn5 = await (ctc.sendrecv({
            args: [v248, v249, v250, v265, v278, v319, v320, v327, v328],
            evt_cnt: 2,
            funcNum: 8,
            lct: v321,
            onlyIf: true,
            out_tys: [ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:137:9:decimal', stdlib.UInt_max, 0), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v330, v331], secs: v333, time: v332, didSend: v90, from: v329 } = txn5;
              
              ;
              const v334 = stdlib.addressEq(v265, v329);
              ;
              let v335;
              let v336;
              const v337 = stdlib.eq(v331, v319);
              const v338 = stdlib.eq(v320, v330);
              const v339 = v337 ? v338 : false;
              if (v339) {
                v336 = true;
                }
              else {
                v336 = false;
                }
              if (v336) {
                const v341 = stdlib.lt(v330, stdlib.checkedBigNumberify('./index.rsh:34:24:decimal', stdlib.UInt_max, 3));
                const v342 = stdlib.lt(v319, stdlib.checkedBigNumberify('./index.rsh:34:46:decimal', stdlib.UInt_max, 3));
                const v343 = v341 ? v342 : false;
                if (v343) {
                  v335 = stdlib.checkedBigNumberify('./index.rsh:35:12:decimal', stdlib.UInt_max, 1);
                  }
                else {
                  if (v342) {
                    v335 = stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, 0);
                    }
                  else {
                    if (v341) {
                      v335 = stdlib.checkedBigNumberify('./index.rsh:41:12:decimal', stdlib.UInt_max, 2);
                      }
                    else {
                      v335 = stdlib.checkedBigNumberify('./index.rsh:43:15:decimal', stdlib.UInt_max, 3);
                      }
                    }
                  }
                }
              else {
                v335 = stdlib.checkedBigNumberify('./index.rsh:32:12:decimal', stdlib.UInt_max, 4);
                }
              const cv270 = v335;
              const cv271 = v332;
              const cv278 = v278;
              
              await (async () => {
                const v270 = cv270;
                const v271 = cv271;
                const v278 = cv278;
                
                if (await (async () => {
                  const v286 = stdlib.eq(v270, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 3));
                  
                  return v286;})()) {
                  const v293 = stdlib.add(v271, v250);
                  sim_r.isHalt = false;
                  }
                else {
                  const v382 = stdlib.eq(v270, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 4));
                  if (v382) {
                    sim_r.txns.push({
                      amt: v249,
                      kind: 'from',
                      to: v248,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      amt: v249,
                      kind: 'from',
                      to: v265,
                      tok: undefined /* Nothing */
                      });
                    
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    const v398 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:150:14:decimal', stdlib.UInt_max, 2), v249);
                    const v399 = stdlib.eq(v270, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
                    const v400 = v399 ? v248 : v265;
                    sim_r.txns.push({
                      amt: v398,
                      kind: 'from',
                      to: v400,
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
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [v330, v331], secs: v333, time: v332, didSend: v90, from: v329 } = txn5;
          ;
          const v334 = stdlib.addressEq(v265, v329);
          stdlib.assert(v334, {
            at: './index.rsh:137:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          let v335;
          let v336;
          const v337 = stdlib.eq(v331, v319);
          const v338 = stdlib.eq(v320, v330);
          const v339 = v337 ? v338 : false;
          if (v339) {
            v336 = true;
            }
          else {
            v336 = false;
            }
          if (v336) {
            const v341 = stdlib.lt(v330, stdlib.checkedBigNumberify('./index.rsh:34:24:decimal', stdlib.UInt_max, 3));
            const v342 = stdlib.lt(v319, stdlib.checkedBigNumberify('./index.rsh:34:46:decimal', stdlib.UInt_max, 3));
            const v343 = v341 ? v342 : false;
            if (v343) {
              v335 = stdlib.checkedBigNumberify('./index.rsh:35:12:decimal', stdlib.UInt_max, 1);
              }
            else {
              if (v342) {
                v335 = stdlib.checkedBigNumberify('./index.rsh:38:12:decimal', stdlib.UInt_max, 0);
                }
              else {
                if (v341) {
                  v335 = stdlib.checkedBigNumberify('./index.rsh:41:12:decimal', stdlib.UInt_max, 2);
                  }
                else {
                  v335 = stdlib.checkedBigNumberify('./index.rsh:43:15:decimal', stdlib.UInt_max, 3);
                  }
                }
              }
            }
          else {
            v335 = stdlib.checkedBigNumberify('./index.rsh:32:12:decimal', stdlib.UInt_max, 4);
            }
          const cv270 = v335;
          const cv271 = v332;
          const cv278 = v278;
          
          v270 = cv270;
          v271 = cv271;
          v278 = cv278;
          
          continue;
          
          }
        
        }
      
      }
    const v382 = stdlib.eq(v270, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 4));
    if (v382) {
      ;
      ;
      stdlib.protect(ctc1, await interact.informDisagreement(), {
        at: './index.rsh:83:34:application',
        fs: ['at ./index.rsh:82:9:application call to [unknown function] (defined at: ./index.rsh:82:27:function exp)', 'at ./index.rsh:147:23:application call to "informDisagreement" (defined at: ./index.rsh:81:33:function exp)'],
        msg: 'informDisagreement',
        who: 'Bob'
        });
      
      return;
      }
    else {
      const v398 = stdlib.mul(stdlib.checkedBigNumberify('./index.rsh:150:14:decimal', stdlib.UInt_max, 2), v249);
      const v399 = stdlib.eq(v270, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2));
      const v400 = v399 ? v248 : v265;
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
  appApproval: `BiAOAAEIA1ggUAYCKAQKBTAmAgEAACI1ADEYQQSOKWRJIls1ASRbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSEKDEACikkhBwxAAaxJgQcMQAESSSQMQAC8JBJEIQs0ARJENARJIhJMNAISEUQoZEk1A0lXMCA1/yEEWzX+STUFSSJbNf0kWzX8gAQ1GirQNP0WUDT8FlCwNP8xABJENPw0/hI0A4FgWzT9EhBBAAYjNfpCAAMiNfo0+kEANzT9JQw1+TT+JQw1+DT5NPgQQQAGIzX7QgAaNPhBAAYiNftCAA80+UEAByEINftCAAMlNftCAAQhCjX7NANXACA0AyEFWzQDIQlbNP80+zIGNAMhBltCArNIJDQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABOIbs6mwMgY0AyEEWw9ENANXACAxABI0/zEAEhFEsSKyATQDIQZbsggjshA0/7IHs0IC8EgkNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEFWzX+IQlbNf1XMCA1/CEGWzX7STUFSUlXABA1+oEQWzX5gRhbNfiABEj8L0Q0+lA0+RZQNPgWULAyBjQDIQRbDEQ0/zEAEkQ0/zT+FlA0/RZQNPxQNPsWUDT5FlA0+BZQKEsBVwBoZ0ghCzUBMgY1AkICeUkhDAxAAFFIIQc0ARJENARJIhJMNAISEUQoZEk1A1cAIDX/gATMmZJcsDIGNAMhBFsPRDT/MQASNANXMCAxABIRRLEisgE0AyEGW7III7IQNP+yB7NCAgVIIQc0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQVbNf4hCVs1/VcwIDX8IQZbNftJNQU1+oAET1BwDTT6ULAyBjQDIQRbDEQ0/DEAEkQyBjT9CDX5NP80/hZQNP0WUDT8UDT7FlA0+RZQKEsBVwBgZ0gkNQEyBjUCQgGiSSEIDEAARUklDEAAAUhIIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyENWw9EsSKyATQDIQVbsggjshA0A1cAILIHs0IBOkkjDEAASEgjNAESRDQESSISTDQCEhFEKGRJNQMhBVs1/4AEmouRdLAyBjQDIQ1bDEQ0/4gBXTQDVwAgNP80AyEJWzEAJTIGNP9JCEIAX0giNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwgaCNBogBEjT/iAENMgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgCpNf81/jX9Nfw1+zX6Nfk0/SUSQQAvNP40+wg1+DT5NPoWUDT7FlA0/FA0/xZQNPgWUChLAVcAYGdIIQc1ATIGNQJCAGU0/SEKEkEAI7EisgE0+rIII7IQNPmyB7OxIrIBNPqyCCOyEDT8sgezQgAesSKyASEINPoLsggjshA0/DT5NP0hCBJNsgezQgAAMRkhDBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
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
                "name": "v249",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v250",
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
                "name": "v249",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v250",
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
                    "internalType": "bytes16",
                    "name": "elem0",
                    "type": "bytes16"
                  }
                ],
                "internalType": "struct T10",
                "name": "v299",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
                    "internalType": "bytes16",
                    "name": "elem0",
                    "type": "bytes16"
                  }
                ],
                "internalType": "struct T10",
                "name": "v318",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v319",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v320",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
                "name": "v330",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v331",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
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
                    "internalType": "bytes16",
                    "name": "elem0",
                    "type": "bytes16"
                  }
                ],
                "internalType": "struct T10",
                "name": "v299",
                "type": "tuple"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
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
                    "internalType": "bytes16",
                    "name": "elem0",
                    "type": "bytes16"
                  }
                ],
                "internalType": "struct T10",
                "name": "v318",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v319",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v320",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
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
                "name": "v330",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v331",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
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
  Bytecode: `0x6080604052604051620019ac380380620019ac833981016040819052620000269162000248565b600080805543600355604080516020810190915290815260408051835181526020808501518051828401520151918101919091527f80c0078efe412e5091172e0df54decefb16131f320816d23b64aede2bf8e9e4b9060600160405180910390a16020820151516200009c903414600762000141565b6020808301510151620000b09043620002a8565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013792600292909101906200016b565b505050506200030c565b81620001675760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017990620002cf565b90600052602060002090601f0160209004810192826200019d5760008555620001e8565b82601f10620001b857805160ff1916838001178555620001e8565b82800160010185558215620001e8579182015b82811115620001e8578251825591602001919060010190620001cb565b50620001f6929150620001fa565b5090565b5b80821115620001f65760008155600101620001fb565b604080519081016001600160401b03811182821017156200024257634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025c57600080fd5b6200026662000211565b835181526040601f19830112156200027d57600080fd5b6200028762000211565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002ca57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e457607f821691505b602082108114156200030657634e487b7160e01b600052602260045260246000fd5b50919050565b611690806200031c6000396000f3fe60806040526004361061008f5760003560e01c8063832307571161005657806383230757146101085780638328d4c41461011d5780638e31476914610130578063ab53f2c614610143578063bf2c5b241461016657005b80631e93b0f11461009857806321819f08146100bc5780632509b6fc146100cf5780632c10a159146100e25780637eea518c146100f557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca366004611261565b610179565b6100966100dd366004611284565b610387565b6100966100f0366004611261565b6105e3565b610096610103366004611261565b610778565b34801561011457600080fd5b506001546100a9565b61009661012b366004611296565b6108f4565b61009661013e366004611261565b610b76565b34801561014f57600080fd5b50610158610d0b565b6040516100b39291906112a8565b610096610174366004611261565b610da8565b6101896006600054146012610f41565b6101a38135158061019c57506001548235145b6013610f41565b6000808055600280546101b590611305565b80601f01602080910402602001604051908101604052809291908181526020018280546101e190611305565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b505050505080602001905181019061024691906113ea565b905061025e6040518060200160405280600081525090565b61026f8260a0015143106014610f41565b7f23a898db3536951fcd2d551627c3ea48ea6737687cf5a11ba6ad1d9727fb45848360405161029e919061142f565b60405180910390a16102b234156010610f41565b60608201516102cd906001600160a01b031633146011610f41565b60408201516102dc9043611463565b81526040805160c081018252600080825260208083018281528385018381526060808601858152608080880187815260a089018881528c516001600160a01b039081168b528d8901519097528c8b0151909552928b0151909416905291880151909152855190526008909155436001559151909161035c9183910161147b565b6040516020818303038152906040526002908051906020019061038092919061111a565b5050505050565b610397600860005414601c610f41565b6103b1813515806103aa57506001548235145b601d610f41565b6000808055600280546103c390611305565b80601f01602080910402602001604051908101604052809291908181526020018280546103ef90611305565b801561043c5780601f106104115761010080835404028352916020019161043c565b820191906000526020600020905b81548152906001019060200180831161041f57829003601f168201915b505050505080602001905181019061045491906113ea565b90506104678160a001514310601e610f41565b7f9c8b066c7f3c190df957e814f36f86321bc31376cc9ea17f8c575f8757bd28618260405161049691906114c8565b60405180910390a16104aa3415601a610f41565b80516104c2906001600160a01b03163314601b610f41565b6105146040518060e0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015181870190815260608089015187168189019081526080808b0151818b019081528c86013560a0808d019182528e86013560c0808f01918252600a6000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e0820152610100015b604051602081830303815290604052600290805190602001906105dd92919061111a565b50505050565b6105f36001600054146009610f41565b61060d8135158061060657506001548235145b600a610f41565b60008080556002805461061f90611305565b80601f016020809104026020016040519081016040528092919081815260200182805461064b90611305565b80156106985780601f1061066d57610100808354040283529160200191610698565b820191906000526020600020905b81548152906001019060200180831161067b57829003601f168201915b50505050508060200190518101906106b091906114fa565b90506106c381606001514310600b610f41565b7f79ca1a789d797004bc78dff9632d64e202e102f2d008dcc20c5a645ef7d4a7d1826040516106f29190611573565b60405180910390a161070b816020015134146008610f41565b61071361119e565b815181516001600160a01b0390911690526020808301805183518301526040808501518451909101528251336060909101528183018051600390525143920191909152516107619080611463565b60208201516040015261077381610f66565b505050565b610788600160005414600d610f41565b6107a28135158061079b57506001548235145b600e610f41565b6000808055600280546107b490611305565b80601f01602080910402602001604051908101604052809291908181526020018280546107e090611305565b801561082d5780601f106108025761010080835404028352916020019161082d565b820191906000526020600020905b81548152906001019060200180831161081057829003601f168201915b505050505080602001905181019061084591906114fa565b90506108598160600151431015600f610f41565b7f82e152e8b1d7e41adffbddbd5b2fe2e130356df9b7ab7d06526a80d7888af3e1826040516108889190611573565b60405180910390a161089c3415600c610f41565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108d9573d6000803e3d6000fd5b50600080805560018190556108f0906002906111f7565b5050565b610904600a600054146026610f41565b61091e8135158061091757506001548235145b6027610f41565b60008080556002805461093090611305565b80601f016020809104026020016040519081016040528092919081815260200182805461095c90611305565b80156109a95780601f1061097e576101008083540402835291602001916109a9565b820191906000526020600020905b81548152906001019060200180831161098c57829003601f168201915b50505050508060200190518101906109c1919061159d565b60408051608081018252600080825260208201819052918101829052606081019190915290915060408051843581526020808601359082015281850135918101919091527f41b6d8e223fb0a5cfe68af9f34b07a5a94b63517841457ccfc53fb18b8e41fde9060600160405180910390a1610a3e34156024610f41565b6060820151610a59906001600160a01b031633146025610f41565b60a0820151604084013514610a6f576000610a7b565b60c08201516020840135145b15610a8c5760016020820152610a94565b600060208201525b806020015115610b0a576003602084013581116040830181905260a0840151919091106060830152610ac7576000610acd565b80606001515b15610adb5760018152610b0f565b806060015115610aee5760008152610b0f565b806040015115610b015760028152610b0f565b60038152610b0f565b600481525b610b1761119e565b825181516001600160a01b0391821690526020808501518351820152604080860151845182015260608087015185519416930192909252835181840180519190915280514392019190915260808501519051909101526105dd81610f66565b610b866006600054146017610f41565b610ba081351580610b9957506001548235145b6018610f41565b600080805560028054610bb290611305565b80601f0160208091040260200160405190810160405280929190818152602001828054610bde90611305565b8015610c2b5780601f10610c0057610100808354040283529160200191610c2b565b820191906000526020600020905b815481529060010190602001808311610c0e57829003601f168201915b5050505050806020019051810190610c4391906113ea565b9050610c578160a001514310156019610f41565b7f9cdba579557d44a893ea7929682d6795d48dd5c40dc981d852842d4b18914de882604051610c869190611573565b60405180910390a1610c9a34156015610f41565b8051610cce906001600160a01b03163314610cc45760608201516001600160a01b03163314610cc7565b60015b6016610f41565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108d9573d6000803e3d6000fd5b600060606000546002808054610d2090611305565b80601f0160208091040260200160405190810160405280929190818152602001828054610d4c90611305565b8015610d995780601f10610d6e57610100808354040283529160200191610d99565b820191906000526020600020905b815481529060010190602001808311610d7c57829003601f168201915b50505050509050915091509091565b610db86008600054146021610f41565b610dd281351580610dcb57506001548235145b6022610f41565b600080805560028054610de490611305565b80601f0160208091040260200160405190810160405280929190818152602001828054610e1090611305565b8015610e5d5780601f10610e3257610100808354040283529160200191610e5d565b820191906000526020600020905b815481529060010190602001808311610e4057829003601f168201915b5050505050806020019051810190610e7591906113ea565b9050610e898160a001514310156023610f41565b7fba16100ad25f3c6798bc3b7e9ca316fb231388e6fa4444c0f477e2a4336514e082604051610eb89190611573565b60405180910390a1610ecc3415601f610f41565b8051610f00906001600160a01b03163314610ef65760608201516001600160a01b03163314610ef9565b60015b6020610f41565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156108d9573d6000803e3d6000fd5b816108f05760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602081019091526000815260208201515160031415611023578151604001516020808401510151610f9b9190611463565b81526040805160c0810182526000808252602080830182815283850183815260608086018581526080870186815260a088018781528b51516001600160a01b039081168a528c518801519096528b518a01519094528a51909201519093169092528783015186015190915285519052600690915543600155915190916105b99183910161147b565b602082015151600414156110b557815180516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611071573d6000803e3d6000fd5b50815160608101516020909101516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156108d9573d6000803e3d6000fd5b6020820151516002146110cd578151606001516110d1565b8151515b6001600160a01b03166108fc83600001516020015160026110f2919061163b565b6040518115909202916000818181858888f193505050501580156108d9573d6000803e3d6000fd5b82805461112690611305565b90600052602060002090601f016020900481019282611148576000855561118e565b82601f1061116157805160ff191683800117855561118e565b8280016001018555821561118e579182015b8281111561118e578251825591602001919060010190611173565b5061119a929150611234565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a082019290925290819081526020016111f260405180606001604052806000815260200160008152602001600081525090565b905290565b50805461120390611305565b6000825580601f10611213575050565b601f0160209004906000526020600020908101906112319190611234565b50565b5b8082111561119a5760008155600101611235565b60006040828403121561125b57600080fd5b50919050565b60006040828403121561127357600080fd5b61127d8383611249565b9392505050565b60006080828403121561125b57600080fd5b60006060828403121561125b57600080fd5b82815260006020604081840152835180604085015260005b818110156112dc578581018301518582016060015282016112c0565b818111156112ee576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061131957607f821691505b6020821081141561125b57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461135157600080fd5b919050565b600060c0828403121561136857600080fd5b60405160c0810181811067ffffffffffffffff8211171561139957634e487b7160e01b600052604160045260246000fd5b6040529050806113a88361133a565b815260208301516020820152604083015160408201526113ca6060840161133a565b60608201526080830151608082015260a083015160a08201525092915050565b600060c082840312156113fc57600080fd5b61127d8383611356565b80356fffffffffffffffffffffffffffffffff19811680821461142857600080fd5b9092525050565b81358152604081016114476020808401908501611406565b92915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156114765761147661144d565b500190565b81516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0808301519082015260c08101611447565b81358152608081016114e06020808401908501611406565b604083013560408301526060830135606083015292915050565b60006080828403121561150c57600080fd5b6040516080810181811067ffffffffffffffff8211171561153d57634e487b7160e01b600052604160045260246000fd5b6040526115498361133a565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b8135815260408101602083013580151580821461158f57600080fd5b806020850152505092915050565b600060e082840312156115af57600080fd5b60405160e0810181811067ffffffffffffffff821117156115e057634e487b7160e01b600052604160045260246000fd5b6040526115ec8361133a565b8152602083015160208201526040830151604082015261160e6060840161133a565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b60008160001904831182151516156116555761165561144d565b50029056fea2646970667358221220a10dcddd5e262e3448fb7af19dc8d11abaf8c6f38f26f5a894e302a0cd01533064736f6c634300080c0033`,
  BytecodeLen: 6572,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:97:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:104:51:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:152:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:152:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:110:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:118:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:119:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: 'reach standard library:191:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:129:53:application call to "closeTo" (defined at: reach standard library:187:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:130:13:after expr stmt semicolon',
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
