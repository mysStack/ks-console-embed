export let ip2long;
export let long2ip;
export let Netmask;
(()=>{
    let e;
    let n;
    let r;
    let o;
    let a;
    let i;
    let l;
    const s = function(e) {
        return [
            (e & 255 << 24) >>> 24,
            (e & 255 << 16) >>> 16,
            (65280 & e) >>> 8,
            255 & e
        ].join(".");
    };
    l = function(e) {
        let r;
        let o;
        let a;
        let i;
        let l;
        const t = [];
        for(o = a = 0; a <= 3 && e.length !== 0; o = ++a){
            if (o > 0) {
                if (e[0] !== ".") {
                    throw new Error("Invalid IP");
                }
                e = e.substring(1);
            }
            i = (l = n(e))[0];
            r = l[1];
            e = e.substring(r);
            t.push(i);
        }
        if (e.length !== 0) {
            throw new Error("Invalid IP");
        }
        while(t.length < 4){
            t.unshift(0);
        }
        return (t[0] << 24 | t[1] << 16 | t[2] << 8 | t[3]) >>> 0;
    };
    o = (r = function(e) {
        return e.charCodeAt(0);
    })("0");
    i = r("a");
    a = r("A");
    n = function(e) {
        let t;
        let n;
        let l;
        let u;
        let s = 0;
        t = 10;
        n = "9";
        l = 0;
        if (e.length > 1 && e[l] === "0") {
            if (e[l + 1] === "x" || e[l + 1] === "X") {
                l += 2;
                t = 16;
            } else if (e[l + 1] >= "0" && e[l + 1] <= "7") {
                l++;
                t = 8;
                n = "7";
            }
        }
        for(u = l; e.length > 0;){
            if (e[l] >= "0" && e[l] <= n) {
                s = s * t + (r(e[l]) - o);
            } else {
                if (t !== 16) {
                    break;
                }
                if (e[l] >= "a" && e[l] <= "f") {
                    s = s * t + (10 + r(e[l]) - i);
                } else {
                    if (!(e[l] >= "A" && e[l] <= "F")) {
                        break;
                    }
                    s = s * t + (10 + r(e[l]) - a);
                }
            }
            if (s > 255) {
                throw new Error("byte overflow");
            }
            l++;
        }
        if (l === u) {
            throw new Error("empty octet");
        }
        return [
            s,
            l
        ];
    };
    e = function() {
        class e {
            constructor(e, t){
                let n;
                let r;
                let o;
                if (typeof e !== "string") {
                    throw new Error("Missing `net' parameter");
                }
                if (!t) {
                    o = e.split("/", 2);
                    e = o[0];
                    t = o[1];
                }
                if (!t) {
                    t = 32;
                }
                if (typeof t === "string" && t.indexOf(".") > -1) {
                    try {
                        this.maskLong = l(t);
                    } catch (e) {
                        throw new Error(`Invalid mask: ${t}`);
                    }
                    for(n = r = 32; r >= 0; n = --r){
                        if (this.maskLong === 4294967295 << 32 - n >>> 0) {
                            this.bitmask = n;
                            break;
                        }
                    }
                } else {
                    if (!t && t !== 0) {
                        throw new Error("Invalid mask: empty");
                    }
                    this.bitmask = parseInt(t, 10);
                    this.maskLong = 0;
                    if (this.bitmask > 0) {
                        this.maskLong = 4294967295 << 32 - this.bitmask >>> 0;
                    }
                }
                try {
                    this.netLong = (l(e) & this.maskLong) >>> 0;
                } catch (t) {
                    throw new Error(`Invalid net address: ${e}`);
                }
                if (!(this.bitmask <= 32)) {
                    throw new Error(`Invalid mask for ip4: ${t}`);
                }
                this.size = 2 ** (32 - this.bitmask);
                this.base = s(this.netLong);
                this.mask = s(this.maskLong);
                this.hostmask = s(~this.maskLong);
                this.first = this.bitmask <= 30 ? s(this.netLong + 1) : this.base;
                this.last = this.bitmask <= 30 ? s(this.netLong + this.size - 2) : s(this.netLong + this.size - 1);
                this.broadcast = this.bitmask <= 30 ? s(this.netLong + this.size - 1) : undefined;
            }
            contains(t) {
                if (typeof t === "string" && (t.indexOf("/") > 0 || t.split(".").length !== 4)) {
                    t = new e(t);
                }
                if (t instanceof e) {
                    return this.contains(t.base) && this.contains(t.broadcast || t.last);
                }
                return (l(t) & this.maskLong) >>> 0 == (this.netLong & this.maskLong) >>> 0;
            }
            next(t) {
                if (t == null) {
                    t = 1;
                }
                return new e(s(this.netLong + this.size * t), this.mask);
            }
            forEach(e) {
                let t;
                let n;
                let r;
                r = l(this.first);
                n = l(this.last);
                for(t = 0; r <= n;){
                    e(s(r), r, t);
                    t++;
                    r++;
                }
            }
            toString() {
                return `${this.base}/${this.bitmask}`;
            }
        }
        return e;
    }();
    ip2long = l;
    long2ip = s;
    Netmask = e;
})();
