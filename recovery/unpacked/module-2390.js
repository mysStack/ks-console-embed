import module1304 from "./module-1304.js";
import { isWhiteSpace, isPunctChar, isMdAsciiPunct } from "./module-819.js";
class l {
    constructor(e, t, n, r){
        this.src = e;
        this.env = n;
        this.md = t;
        this.tokens = r;
        this.pos = 0;
        this.posMax = this.src.length;
        this.level = 0;
        this.pending = "";
        this.pendingLevel = 0;
        this.cache = {};
        this.delimiters = [];
    }
    pushPending() {
        const e = new module1304("text", "", 0);
        e.content = this.pending;
        e.level = this.pendingLevel;
        this.tokens.push(e);
        this.pending = "";
        return e;
    }
    push(e, t, n) {
        if (this.pending) {
            this.pushPending();
        }
        const o = new module1304(e, t, n);
        if (n < 0) {
            this.level--;
        }
        o.level = this.level;
        if (n > 0) {
            this.level++;
        }
        this.pendingLevel = this.level;
        this.tokens.push(o);
        return o;
    }
    scanDelims(e, t) {
        let n;
        let r;
        let length;
        let can_open;
        let can_close;
        let c;
        let f;
        let d;
        let p;
        let h = e;
        let v = true;
        let g = true;
        const posMax = this.posMax;
        const m = this.src.charCodeAt(e);
        for(n = e > 0 ? this.src.charCodeAt(e - 1) : 32; h < posMax && this.src.charCodeAt(h) === m;){
            h++;
        }
        length = h - e;
        r = h < posMax ? this.src.charCodeAt(h) : 32;
        f = isMdAsciiPunct(n) || isPunctChar(String.fromCharCode(n));
        p = isMdAsciiPunct(r) || isPunctChar(String.fromCharCode(r));
        c = isWhiteSpace(n);
        if (d = isWhiteSpace(r)) {
            v = false;
        } else {
            if (p) {
                if (!(c || f)) {
                    v = false;
                }
            }
        }
        if (c) {
            g = false;
        } else {
            if (f) {
                if (!(d || p)) {
                    g = false;
                }
            }
        }
        if (t) {
            can_open = v;
            can_close = g;
        } else {
            can_open = v && (!g || f);
            can_close = g && (!v || p);
        }
        return {
            can_open,
            can_close,
            length
        };
    }
}
l.prototype.Token = module1304;
export default l;
