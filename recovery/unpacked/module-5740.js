import { Disposable } from "./module-1027.js";
let r;
const n = this && this.__extends || (r = function(e, t) {
    return (r = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for(const i in t){
            if (t.hasOwnProperty(i)) {
                e[i] = t[i];
            }
        }
    })(e, t);
}, (e, t)=>{
    function i() {
        this.constructor = e;
    }
    r(e, t);
    e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i);
});
function o(e, t) {
    for(var i = t - e, r = new Array(i); i--;){
        r[i] = --t;
    }
    return r;
}
export class TransitionTable {
    constructor(e){
        this.table = typeof Uint8Array === "undefined" ? new Array(e) : new Uint8Array(e);
    }
    add(e, t, i, r) {
        this.table[t << 8 | e] = (0 | i) << 4 | (r === undefined ? t : r);
    }
    addMany(e, t, i, r) {
        for(let n = 0; n < e.length; n++){
            this.add(e[n], t, i, r);
        }
    }
}
const l = o(32, 127);
const h = o(0, 24);
h.push(25);
h.concat(o(28, 32));
export const VT500_TRANSITION_TABLE = (()=>{
    let e;
    const t = new TransitionTable(4095);
    const i = o(0, 14);
    for(e in i){
        for(let r = 0; r < 160; ++r){
            t.add(r, e, 1, 0);
        }
    }
    t.addMany(l, 0, 2, 0);
    for(e in i){
        t.addMany([
            24,
            26,
            153,
            154
        ], e, 3, 0);
        t.addMany(o(128, 144), e, 3, 0);
        t.addMany(o(144, 152), e, 3, 0);
        t.add(156, e, 0, 0);
        t.add(27, e, 11, 1);
        t.add(157, e, 4, 8);
        t.addMany([
            152,
            158,
            159
        ], e, 0, 7);
        t.add(155, e, 11, 3);
        t.add(144, e, 11, 9);
    }
    t.addMany(h, 0, 3, 0);
    t.addMany(h, 1, 3, 1);
    t.add(127, 1, 0, 1);
    t.addMany(h, 8, 0, 8);
    t.addMany(h, 3, 3, 3);
    t.add(127, 3, 0, 3);
    t.addMany(h, 4, 3, 4);
    t.add(127, 4, 0, 4);
    t.addMany(h, 6, 3, 6);
    t.addMany(h, 5, 3, 5);
    t.add(127, 5, 0, 5);
    t.addMany(h, 2, 3, 2);
    t.add(127, 2, 0, 2);
    t.add(93, 1, 4, 8);
    t.addMany(l, 8, 5, 8);
    t.add(127, 8, 5, 8);
    t.addMany([
        156,
        27,
        24,
        26,
        7
    ], 8, 6, 0);
    t.addMany(o(28, 32), 8, 0, 8);
    t.addMany([
        88,
        94,
        95
    ], 1, 0, 7);
    t.addMany(l, 7, 0, 7);
    t.addMany(h, 7, 0, 7);
    t.add(156, 7, 0, 0);
    t.add(91, 1, 11, 3);
    t.addMany(o(64, 127), 3, 7, 0);
    t.addMany(o(48, 58), 3, 8, 4);
    t.add(59, 3, 8, 4);
    t.addMany([
        60,
        61,
        62,
        63
    ], 3, 9, 4);
    t.addMany(o(48, 58), 4, 8, 4);
    t.add(59, 4, 8, 4);
    t.addMany(o(64, 127), 4, 7, 0);
    t.addMany([
        58,
        60,
        61,
        62,
        63
    ], 4, 0, 6);
    t.addMany(o(32, 64), 6, 0, 6);
    t.add(127, 6, 0, 6);
    t.addMany(o(64, 127), 6, 0, 0);
    t.add(58, 3, 0, 6);
    t.addMany(o(32, 48), 3, 9, 5);
    t.addMany(o(32, 48), 5, 9, 5);
    t.addMany(o(48, 64), 5, 0, 6);
    t.addMany(o(64, 127), 5, 7, 0);
    t.addMany(o(32, 48), 4, 9, 5);
    t.addMany(o(32, 48), 1, 9, 2);
    t.addMany(o(32, 48), 2, 9, 2);
    t.addMany(o(48, 127), 2, 10, 0);
    t.addMany(o(48, 80), 1, 10, 0);
    t.addMany(o(81, 88), 1, 10, 0);
    t.addMany([
        89,
        90,
        92
    ], 1, 10, 0);
    t.addMany(o(96, 127), 1, 10, 0);
    t.add(80, 1, 11, 9);
    t.addMany(h, 9, 0, 9);
    t.add(127, 9, 0, 9);
    t.addMany(o(28, 32), 9, 0, 9);
    t.addMany(o(32, 48), 9, 9, 12);
    t.add(58, 9, 0, 11);
    t.addMany(o(48, 58), 9, 8, 10);
    t.add(59, 9, 8, 10);
    t.addMany([
        60,
        61,
        62,
        63
    ], 9, 9, 10);
    t.addMany(h, 11, 0, 11);
    t.addMany(o(32, 128), 11, 0, 11);
    t.addMany(o(28, 32), 11, 0, 11);
    t.addMany(h, 10, 0, 10);
    t.add(127, 10, 0, 10);
    t.addMany(o(28, 32), 10, 0, 10);
    t.addMany(o(48, 58), 10, 8, 10);
    t.add(59, 10, 8, 10);
    t.addMany([
        58,
        60,
        61,
        62,
        63
    ], 10, 0, 11);
    t.addMany(o(32, 48), 10, 9, 12);
    t.addMany(h, 12, 0, 12);
    t.add(127, 12, 0, 12);
    t.addMany(o(28, 32), 12, 0, 12);
    t.addMany(o(32, 48), 12, 9, 12);
    t.addMany(o(48, 64), 12, 0, 11);
    t.addMany(o(64, 127), 12, 12, 13);
    t.addMany(o(64, 127), 10, 12, 13);
    t.addMany(o(64, 127), 9, 12, 13);
    t.addMany(h, 13, 13, 13);
    t.addMany(l, 13, 13, 13);
    t.add(127, 13, 0, 13);
    t.addMany([
        27,
        156
    ], 13, 14, 0);
    return t;
})();
class c {
    hook(e, t, i) {}
    put(e, t, i) {}
    unhook() {}
}
export const EscapeSequenceParser = ((Disposable_1)=>{
    function i(i = VT500_TRANSITION_TABLE) {
        const r = Disposable_1.call(this) || this;
        r.TRANSITIONS = i;
        r.initialState = 0;
        r.currentState = r.initialState;
        r._osc = "";
        r._params = [
            0
        ];
        r._collect = "";
        r._printHandlerFb = function(e, t, i) {};
        r._executeHandlerFb = function(e) {};
        r._csiHandlerFb = function(e, t, i) {};
        r._escHandlerFb = function(e, t) {};
        r._oscHandlerFb = function(e, t) {};
        r._dcsHandlerFb = new c;
        r._errorHandlerFb = function(e) {
            return e;
        };
        r._printHandler = r._printHandlerFb;
        r._executeHandlers = Object.create(null);
        r._csiHandlers = Object.create(null);
        r._escHandlers = Object.create(null);
        r._oscHandlers = Object.create(null);
        r._dcsHandlers = Object.create(null);
        r._activeDcsHandler = null;
        r._errorHandler = r._errorHandlerFb;
        return r;
    }
    n(i, Disposable_1);
    i.prototype.dispose = function() {
        this._printHandlerFb = null;
        this._executeHandlerFb = null;
        this._csiHandlerFb = null;
        this._escHandlerFb = null;
        this._oscHandlerFb = null;
        this._dcsHandlerFb = null;
        this._errorHandlerFb = null;
        this._printHandler = null;
        this._executeHandlers = null;
        this._csiHandlers = null;
        this._escHandlers = null;
        this._oscHandlers = null;
        this._dcsHandlers = null;
        this._activeDcsHandler = null;
        this._errorHandler = null;
    };
    i.prototype.setPrintHandler = function(e) {
        this._printHandler = e;
    };
    i.prototype.clearPrintHandler = function() {
        this._printHandler = this._printHandlerFb;
    };
    i.prototype.setExecuteHandler = function(e, t) {
        this._executeHandlers[e.charCodeAt(0)] = t;
    };
    i.prototype.clearExecuteHandler = function(e) {
        if (this._executeHandlers[e.charCodeAt(0)]) {
            delete this._executeHandlers[e.charCodeAt(0)];
        }
    };
    i.prototype.setExecuteHandlerFallback = function(e) {
        this._executeHandlerFb = e;
    };
    i.prototype.setCsiHandler = function(e, t) {
        this._csiHandlers[e.charCodeAt(0)] = t;
    };
    i.prototype.clearCsiHandler = function(e) {
        if (this._csiHandlers[e.charCodeAt(0)]) {
            delete this._csiHandlers[e.charCodeAt(0)];
        }
    };
    i.prototype.setCsiHandlerFallback = function(e) {
        this._csiHandlerFb = e;
    };
    i.prototype.setEscHandler = function(e, t) {
        this._escHandlers[e] = t;
    };
    i.prototype.clearEscHandler = function(e) {
        if (this._escHandlers[e]) {
            delete this._escHandlers[e];
        }
    };
    i.prototype.setEscHandlerFallback = function(e) {
        this._escHandlerFb = e;
    };
    i.prototype.setOscHandler = function(e, t) {
        this._oscHandlers[e] = t;
    };
    i.prototype.clearOscHandler = function(e) {
        if (this._oscHandlers[e]) {
            delete this._oscHandlers[e];
        }
    };
    i.prototype.setOscHandlerFallback = function(e) {
        this._oscHandlerFb = e;
    };
    i.prototype.setDcsHandler = function(e, t) {
        this._dcsHandlers[e] = t;
    };
    i.prototype.clearDcsHandler = function(e) {
        if (this._dcsHandlers[e]) {
            delete this._dcsHandlers[e];
        }
    };
    i.prototype.setDcsHandlerFallback = function(e) {
        this._dcsHandlerFb = e;
    };
    i.prototype.setErrorHandler = function(e) {
        this._errorHandler = e;
    };
    i.prototype.clearErrorHandler = function() {
        this._errorHandler = this._errorHandlerFb;
    };
    i.prototype.reset = function() {
        this.currentState = this.initialState;
        this._osc = "";
        this._params = [
            0
        ];
        this._collect = "";
        this._activeDcsHandler = null;
    };
    i.prototype.parse = function(e) {
        let code = 0;
        let i = 0;
        let r = false;
        let currentState = this.currentState;
        let print = -1;
        let dcs = -1;
        let osc = this._osc;
        let _collect = this._collect;
        let _params = this._params;
        const table = this.TRANSITIONS.table;
        let _activeDcsHandler = this._activeDcsHandler;
        let _ = null;
        for(let f = e.length, position = 0; position < f; ++position){
            code = e.charCodeAt(position);
            if (currentState === 0 && code > 31 && code < 128) {
                print = ~print ? print : position;
                do {
                    position++;
                }while (position < f && e.charCodeAt(position) > 31 && e.charCodeAt(position) < 128)
                position--;
            } else if (currentState === 4 && code > 47 && code < 57) {
                _params[_params.length - 1] = 10 * _params[_params.length - 1] + code - 48;
            } else {
                switch((i = code < 160 ? table[currentState << 8 | code] : 16) >> 4){
                    case 2:
                        print = ~print ? print : position;
                        break;
                    case 3:
                        if (~print) {
                            this._printHandler(e, print, position);
                            print = -1;
                        }
                        if (_ = this._executeHandlers[code]) {
                            _();
                        } else {
                            this._executeHandlerFb(code);
                        }
                        break;
                    case 0:
                        if (~print) {
                            this._printHandler(e, print, position);
                            print = -1;
                        } else if (~dcs) {
                            _activeDcsHandler.put(e, dcs, position);
                            dcs = -1;
                        }
                        break;
                    case 1:
                        if (code > 159) {
                            switch(currentState){
                                case 0:
                                    print = ~print ? print : position;
                                    break;
                                case 8:
                                    osc += String.fromCharCode(code);
                                    i |= 8;
                                    break;
                                case 6:
                                    i |= 6;
                                    break;
                                case 11:
                                    i |= 11;
                                    break;
                                case 13:
                                    dcs = ~dcs ? dcs : position;
                                    i |= 13;
                                    break;
                                default:
                                    r = true;
                            }
                        } else {
                            r = true;
                        }
                        if (r) {
                            if (this._errorHandler({
                                position,
                                code,
                                currentState,
                                print,
                                dcs,
                                osc,
                                collect: _collect,
                                params: _params,
                                abort: false
                            }).abort) {
                                return;
                            }
                            r = false;
                        }
                        break;
                    case 7:
                        if (_ = this._csiHandlers[code]) {
                            _(_params, _collect);
                        } else {
                            this._csiHandlerFb(_collect, _params, code);
                        }
                        break;
                    case 8:
                        if (code === 59) {
                            _params.push(0);
                        } else {
                            _params[_params.length - 1] = 10 * _params[_params.length - 1] + code - 48;
                        }
                        break;
                    case 9:
                        _collect += String.fromCharCode(code);
                        break;
                    case 10:
                        if (_ = this._escHandlers[_collect + String.fromCharCode(code)]) {
                            _(_collect, code);
                        } else {
                            this._escHandlerFb(_collect, code);
                        }
                        break;
                    case 11:
                        if (~print) {
                            this._printHandler(e, print, position);
                            print = -1;
                        }
                        osc = "";
                        _params = [
                            0
                        ];
                        _collect = "";
                        dcs = -1;
                        break;
                    case 12:
                        if (!(_activeDcsHandler = this._dcsHandlers[_collect + String.fromCharCode(code)])) {
                            _activeDcsHandler = this._dcsHandlerFb;
                        }
                        _activeDcsHandler.hook(_collect, _params, code);
                        break;
                    case 13:
                        dcs = ~dcs ? dcs : position;
                        break;
                    case 14:
                        if (_activeDcsHandler) {
                            if (~dcs) {
                                _activeDcsHandler.put(e, dcs, position);
                            }
                            _activeDcsHandler.unhook();
                            _activeDcsHandler = null;
                        }
                        if (code === 27) {
                            i |= 1;
                        }
                        osc = "";
                        _params = [
                            0
                        ];
                        _collect = "";
                        dcs = -1;
                        break;
                    case 4:
                        if (~print) {
                            this._printHandler(e, print, position);
                            print = -1;
                        }
                        osc = "";
                        break;
                    case 5:
                        osc += e.charAt(position);
                        break;
                    case 6:
                        if (osc && code !== 24 && code !== 26) {
                            const p = osc.indexOf(";");
                            if (p === -1) {
                                this._oscHandlerFb(-1, osc);
                            } else {
                                const m = parseInt(osc.substring(0, p));
                                const y = osc.substring(p + 1);
                                if (_ = this._oscHandlers[m]) {
                                    _(y);
                                } else {
                                    this._oscHandlerFb(m, y);
                                }
                            }
                        }
                        if (code === 27) {
                            i |= 1;
                        }
                        osc = "";
                        _params = [
                            0
                        ];
                        _collect = "";
                        dcs = -1;
                }
                currentState = 15 & i;
            }
        }
        if (currentState === 0 && ~print) {
            this._printHandler(e, print, e.length);
        } else if (currentState === 13 && ~dcs && _activeDcsHandler) {
            _activeDcsHandler.put(e, dcs, e.length);
        }
        this._osc = osc;
        this._collect = _collect;
        this._params = _params;
        this._activeDcsHandler = _activeDcsHandler;
        this.currentState = currentState;
    };
    return i;
})(Disposable);
