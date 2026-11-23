const r = {};
function o(e, t, n) {
    let i;
    let a;
    let l;
    let u;
    let s;
    let c = "";
    if (typeof t !== "string") {
        n = t;
        t = o.defaultChars;
    }
    if (n === undefined) {
        n = true;
    }
    s = ((e)=>{
        let t;
        let n;
        let o = r[e];
        if (o) {
            return o;
        }
        o = r[e] = [];
        for(t = 0; t < 128; t++){
            n = String.fromCharCode(t);
            if (/^[0-9a-z]$/i.test(n)) {
                o.push(n);
            } else {
                o.push(`%${`0${t.toString(16).toUpperCase()}`.slice(-2)}`);
            }
        }
        for(t = 0; t < e.length; t++){
            o[e.charCodeAt(t)] = e[t];
        }
        return o;
    })(t);
    i = 0;
    for(a = e.length; i < a; i++){
        l = e.charCodeAt(i);
        if (n && l === 37 && i + 2 < a && /^[0-9a-f]{2}$/i.test(e.slice(i + 1, i + 3))) {
            c += e.slice(i, i + 3);
            i += 2;
        } else if (l < 128) {
            c += s[l];
        } else if (l >= 55296 && l <= 57343) {
            if (l >= 55296 && l <= 56319 && i + 1 < a && (u = e.charCodeAt(i + 1)) >= 56320 && u <= 57343) {
                c += encodeURIComponent(e[i] + e[i + 1]);
                i++;
                continue;
            }
            c += "%EF%BF%BD";
        } else {
            c += encodeURIComponent(e[i]);
        }
    }
    return c;
}
o.defaultChars = ";/?:@&=+$,-_.!~*'()#";
o.componentChars = "-_.!~*'()";
export default o;
