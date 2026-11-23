import module1304 from "./module-1304.js";
import { isSpace } from "./module-819.js";
class i {
    constructor(e, t, n, r){
        let i;
        let a;
        let l;
        let u;
        let s;
        let c;
        let f;
        let d;
        this.src = e;
        this.md = t;
        this.env = n;
        this.tokens = r;
        this.bMarks = [];
        this.eMarks = [];
        this.tShift = [];
        this.sCount = [];
        this.bsCount = [];
        this.blkIndent = 0;
        this.line = 0;
        this.lineMax = 0;
        this.tight = false;
        this.ddIndent = -1;
        this.parentType = "root";
        this.level = 0;
        this.result = "";
        d = false;
        f = 0;
        c = 0;
        u = 0;
        l = 0;
        for(s = (a = this.src).length; u < s; u++){
            i = a.charCodeAt(u);
            if (!d) {
                if (isSpace(i)) {
                    c++;
                    if (i === 9) {
                        f += 4 - f % 4;
                    } else {
                        f++;
                    }
                    continue;
                }
                d = true;
            }
            if (!(i !== 10 && u !== s - 1)) {
                if (i !== 10) {
                    u++;
                }
                this.bMarks.push(l);
                this.eMarks.push(u);
                this.tShift.push(c);
                this.sCount.push(f);
                this.bsCount.push(0);
                d = false;
                c = 0;
                f = 0;
                l = u + 1;
            }
        }
        this.bMarks.push(a.length);
        this.eMarks.push(a.length);
        this.tShift.push(0);
        this.sCount.push(0);
        this.bsCount.push(0);
        this.lineMax = this.bMarks.length - 1;
    }
    push(e, t, n) {
        const o = new module1304(e, t, n);
        o.block = true;
        if (n < 0) {
            this.level--;
        }
        o.level = this.level;
        if (n > 0) {
            this.level++;
        }
        this.tokens.push(o);
        return o;
    }
    isEmpty(e) {
        return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
    }
    skipEmptyLines(e) {
        for(const t = this.lineMax; e < t && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++);
        return e;
    }
    skipSpaces(e) {
        for(let t, n = this.src.length; e < n && (t = this.src.charCodeAt(e), isSpace(t)); e++);
        return e;
    }
    skipSpacesBack(e, t) {
        if (e <= t) {
            return e;
        }
        while(e > t){
            if (!isSpace(this.src.charCodeAt(--e))) {
                return e + 1;
            }
        }
        return e;
    }
    skipChars(e, t) {
        for(const n = this.src.length; e < n && this.src.charCodeAt(e) === t; e++);
        return e;
    }
    skipCharsBack(e, t, n) {
        if (e <= n) {
            return e;
        }
        while(e > n){
            if (t !== this.src.charCodeAt(--e)) {
                return e + 1;
            }
        }
        return e;
    }
    getLines(e, t, n, r) {
        let i;
        let a;
        let l;
        let u;
        let s;
        let c;
        let f;
        let d = e;
        if (e >= t) {
            return "";
        }
        c = new Array(t - e);
        for(i = 0; d < t; d++, i++){
            a = 0;
            f = u = this.bMarks[d];
            for(s = d + 1 < t || r ? this.eMarks[d] + 1 : this.eMarks[d]; u < s && a < n;){
                l = this.src.charCodeAt(u);
                if (isSpace(l)) {
                    if (l === 9) {
                        a += 4 - (a + this.bsCount[d]) % 4;
                    } else {
                        a++;
                    }
                } else {
                    if (!(u - f < this.tShift[d])) {
                        break;
                    }
                    a++;
                }
                u++;
            }
            c[i] = a > n ? new Array(a - n + 1).join(" ") + this.src.slice(u, s) : this.src.slice(u, s);
        }
        return c.join("");
    }
}
i.prototype.Token = module1304;
export default i;
