import { CHAR_DATA_ATTR_INDEX, CHAR_DATA_CHAR_INDEX, CHAR_DATA_WIDTH_INDEX } from "unpacked/module-923.js";
export const CharacterJoinerRegistry = function() {
    class e {
        constructor(e){
            this._terminal = e;
            this._characterJoiners = [];
            this._nextCharacterJoinerId = 0;
        }
        registerCharacterJoiner(handler) {
            const t = {
                id: this._nextCharacterJoinerId++,
                handler
            };
            this._characterJoiners.push(t);
            return t.id;
        }
        deregisterCharacterJoiner(e) {
            for(let t = 0; t < this._characterJoiners.length; t++){
                if (this._characterJoiners[t].id === e) {
                    this._characterJoiners.splice(t, 1);
                    return true;
                }
            }
            return false;
        }
        getJoinedCharacters(e) {
            if (this._characterJoiners.length === 0) {
                return [];
            }
            const t = this._terminal.buffer.lines.get(e);
            if (t.length === 0) {
                return [];
            }
            const i = [];
            const n = this._terminal.buffer.translateBufferLineToString(e, true);
            let s = 0;
            let o = 0;
            let a = 0;
            let l = t.get(0)[CHAR_DATA_ATTR_INDEX] >> 9;
            for(let h = 0; h < this._terminal.cols; h++){
                const c = t.get(h);
                const u = c[CHAR_DATA_CHAR_INDEX];
                const _ = c[CHAR_DATA_WIDTH_INDEX];
                const f = c[CHAR_DATA_ATTR_INDEX] >> 9;
                if (_ !== 0) {
                    if (f !== l) {
                        if (h - s > 1) {
                            for(var d = this._getJoinedRanges(n, a, o, t, s), p = 0; p < d.length; p++){
                                i.push(d[p]);
                            }
                        }
                        s = h;
                        a = o;
                        l = f;
                    }
                    o += u.length;
                }
            }
            if (this._terminal.cols - s > 1) {
                d = this._getJoinedRanges(n, a, o, t, s);
                for(p = 0; p < d.length; p++){
                    i.push(d[p]);
                }
            }
            return i;
        }
        _getJoinedRanges(t, i, r, n, s) {
            const o = t.substring(i, r);
            const a = this._characterJoiners[0].handler(o);
            for(let l = 1; l < this._characterJoiners.length; l++){
                for(let h = this._characterJoiners[l].handler(o), c = 0; c < h.length; c++){
                    e._mergeRanges(a, h[c]);
                }
            }
            this._stringRangesToCellRanges(a, n, s);
            return a;
        }
        _stringRangesToCellRanges(e, t, i) {
            let n = 0;
            let s = false;
            let o = 0;
            let a = e[n];
            if (a) {
                for(let l = i; l < this._terminal.cols; l++){
                    const h = t.get(l);
                    const c = h[CHAR_DATA_WIDTH_INDEX];
                    const u = h[CHAR_DATA_CHAR_INDEX].length;
                    if (c !== 0) {
                        if (!s && a[0] <= o) {
                            a[0] = l;
                            s = true;
                        }
                        if (a[1] <= o) {
                            a[1] = l;
                            if (!(a = e[++n])) {
                                break;
                            }
                            if (a[0] <= o) {
                                a[0] = l;
                                s = true;
                            } else {
                                s = false;
                            }
                        }
                        o += u;
                    }
                }
                if (a) {
                    a[1] = this._terminal.cols;
                }
            }
        }
        static _mergeRanges(e, t) {
            let i = false;
            for(let r = 0; r < e.length; r++){
                const n = e[r];
                if (i) {
                    if (t[1] <= n[0]) {
                        e[r - 1][1] = t[1];
                        return e;
                    }
                    if (t[1] <= n[1]) {
                        e[r - 1][1] = Math.max(t[1], n[1]);
                        e.splice(r, 1);
                        i = false;
                        return e;
                    }
                    e.splice(r, 1);
                    r--;
                } else {
                    if (t[1] <= n[0]) {
                        e.splice(r, 0, t);
                        return e;
                    }
                    if (t[1] <= n[1]) {
                        n[0] = Math.min(t[0], n[0]);
                        return e;
                    }
                    if (t[0] < n[1]) {
                        n[0] = Math.min(t[0], n[0]);
                        i = true;
                    }
                }
            }
            if (i) {
                e[e.length - 1][1] = t[1];
            } else {
                e.push(t);
            }
            return e;
        }
    }
    return e;
}();
