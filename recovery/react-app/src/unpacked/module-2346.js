const r = {};
function o(e, t) {
    let n;
    if (typeof t !== "string") {
        t = o.defaultChars;
    }
    n = ((e)=>{
        let t;
        let n;
        let o = r[e];
        if (o) {
            return o;
        }
        o = r[e] = [];
        for(t = 0; t < 128; t++){
            n = String.fromCharCode(t);
            o.push(n);
        }
        for(t = 0; t < e.length; t++){
            o[n = e.charCodeAt(t)] = `%${`0${n.toString(16).toUpperCase()}`.slice(-2)}`;
        }
        return o;
    })(t);
    return e.replace(/(%[a-f0-9]{2})+/gi, (e)=>{
        let t;
        let r;
        let o;
        let i;
        let a;
        let l;
        let u;
        let s = "";
        t = 0;
        for(r = e.length; t < r; t += 3){
            if ((o = parseInt(e.slice(t + 1, t + 3), 16)) < 128) {
                s += n[o];
            } else if ((224 & o) == 192 && t + 3 < r && (192 & (i = parseInt(e.slice(t + 4, t + 6), 16))) == 128) {
                s += (u = o << 6 & 1984 | 63 & i) < 128 ? "��" : String.fromCharCode(u);
                t += 3;
            } else if ((240 & o) == 224 && t + 6 < r && (i = parseInt(e.slice(t + 4, t + 6), 16), a = parseInt(e.slice(t + 7, t + 9), 16), (192 & i) == 128 && (192 & a) == 128)) {
                s += (u = o << 12 & 61440 | i << 6 & 4032 | 63 & a) < 2048 || u >= 55296 && u <= 57343 ? "���" : String.fromCharCode(u);
                t += 6;
            } else if ((248 & o) == 240 && t + 9 < r && (i = parseInt(e.slice(t + 4, t + 6), 16), a = parseInt(e.slice(t + 7, t + 9), 16), l = parseInt(e.slice(t + 10, t + 12), 16), (192 & i) == 128 && (192 & a) == 128 && (192 & l) == 128)) {
                if ((u = o << 18 & 1835008 | i << 12 & 258048 | a << 6 & 4032 | 63 & l) < 65536 || u > 1114111) {
                    s += "����";
                } else {
                    u -= 65536;
                    s += String.fromCharCode(55296 + (u >> 10), 56320 + (1023 & u));
                }
                t += 9;
            } else {
                s += "�";
            }
        }
        return s;
    });
}
o.defaultChars = ";/?:@&=+$,#";
o.componentChars = "";
export default o;
