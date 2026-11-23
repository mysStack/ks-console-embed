export default (()=>{
    function SyntaxError(t, n, r, o) {
        this.message = t;
        this.expected = n;
        this.found = r;
        this.location = o;
        this.name = "SyntaxError";
        if (typeof Error.captureStackTrace === "function") {
            Error.captureStackTrace(this, SyntaxError);
        }
    }
    ((SyntaxError_1, Error_1)=>{
        function n() {
            this.constructor = SyntaxError_1;
        }
        n.prototype = Error_1.prototype;
        SyntaxError_1.prototype = new n;
    })(SyntaxError, Error);
    return {
        SyntaxError,
        parse: function(t) {
            let n;
            const r = arguments.length > 1 ? arguments[1] : {};
            const o = {};
            const a = {
                start
            };
            let i = start;
            var l = (elements)=>({
                    type: "messageFormatPattern",
                    elements,
                    location: Ee()
                });
            var s = (e)=>{
                let t;
                let n;
                let r;
                let o;
                let a;
                let i = "";
                t = 0;
                for(r = e.length; t < r; t += 1){
                    n = 0;
                    for(a = (o = e[t]).length; n < a; n += 1){
                        i += o[n];
                    }
                }
                return i;
            };
            var u = (e)=>({
                    type: "messageTextElement",
                    value: e,
                    location: Ee()
                });
            var c = /^[^ \t\n\r,.+={}#]/;
            var f = {
                type: "class",
                value: "[^ \\t\\n\\r,.+={}#]",
                description: "[^ \\t\\n\\r,.+={}#]"
            };
            var d = "{";
            var p = {
                type: "literal",
                value: "{",
                description: '"{"'
            };
            var h = ",";
            var v = {
                type: "literal",
                value: ",",
                description: '","'
            };
            var m = "}";
            var g = {
                type: "literal",
                value: "}",
                description: '"}"'
            };
            var y = (id, t)=>({
                    type: "argumentElement",
                    id,
                    format: t && t[2],
                    location: Ee()
                });
            var b = "number";
            var C = {
                type: "literal",
                value: "number",
                description: '"number"'
            };
            var w = "date";
            var _ = {
                type: "literal",
                value: "date",
                description: '"date"'
            };
            var x = "time";
            var M = {
                type: "literal",
                value: "time",
                description: '"time"'
            };
            var E = (e, t)=>({
                    type: `${e}Format`,
                    style: t && t[2],
                    location: Ee()
                });
            var k = "plural";
            var O = {
                type: "literal",
                value: "plural",
                description: '"plural"'
            };
            var S = (e)=>({
                    type: e.type,
                    ordinal: false,
                    offset: e.offset || 0,
                    options: e.options,
                    location: Ee()
                });
            var L = "selectordinal";
            var z = {
                type: "literal",
                value: "selectordinal",
                description: '"selectordinal"'
            };
            var D = (e)=>({
                    type: e.type,
                    ordinal: true,
                    offset: e.offset || 0,
                    options: e.options,
                    location: Ee()
                });
            var T = "select";
            var V = {
                type: "literal",
                value: "select",
                description: '"select"'
            };
            var H = (e)=>({
                    type: "selectFormat",
                    options: e,
                    location: Ee()
                });
            var P = "=";
            var A = {
                type: "literal",
                value: "=",
                description: '"="'
            };
            var R = (selector, t)=>({
                    type: "optionalFormatPattern",
                    selector,
                    value: t,
                    location: Ee()
                });
            var j = "offset:";
            var N = {
                type: "literal",
                value: "offset:",
                description: '"offset:"'
            };
            var I = (e)=>e;
            var B = (offset, t)=>({
                    type: "pluralFormat",
                    offset,
                    options: t,
                    location: Ee()
                });
            var U = {
                type: "other",
                description: "whitespace"
            };
            var F = /^[ \t\n\r]/;
            var Z = {
                type: "class",
                value: "[ \\t\\n\\r]",
                description: "[ \\t\\n\\r]"
            };
            var q = {
                type: "other",
                description: "optionalWhitespace"
            };
            var W = /^[0-9]/;
            var G = {
                type: "class",
                value: "[0-9]",
                description: "[0-9]"
            };
            var Y = /^[0-9a-f]/i;
            var $ = {
                type: "class",
                value: "[0-9a-f]i",
                description: "[0-9a-f]i"
            };
            var K = "0";
            var J = {
                type: "literal",
                value: "0",
                description: '"0"'
            };
            var Q = /^[1-9]/;
            var X = {
                type: "class",
                value: "[1-9]",
                description: "[1-9]"
            };
            var ee = (e)=>parseInt(e, 10);
            var te = /^[^{}\\\0-\x1F \t\n\r]/;
            var ne = {
                type: "class",
                value: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]",
                description: "[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]"
            };
            var re = "\\\\";
            var oe = {
                type: "literal",
                value: "\\\\",
                description: '"\\\\\\\\"'
            };
            var ae = ()=>"\\";
            var ie = "\\#";
            var le = {
                type: "literal",
                value: "\\#",
                description: '"\\\\#"'
            };
            var se = ()=>"\\#";
            var ue = "\\{";
            var ce = {
                type: "literal",
                value: "\\{",
                description: '"\\\\{"'
            };
            var fe = ()=>"{";
            var de = "\\}";
            var pe = {
                type: "literal",
                value: "\\}",
                description: '"\\\\}"'
            };
            var he = ()=>"}";
            var ve = "\\u";
            var me = {
                type: "literal",
                value: "\\u",
                description: '"\\\\u"'
            };
            var ge = (e)=>String.fromCharCode(parseInt(e, 16));
            var ye = (e)=>e.join("");
            var be = 0;
            var Ce = 0;
            var we = [
                {
                    line: 1,
                    column: 1,
                    seenCR: false
                }
            ];
            var _e = 0;
            var xe = [];
            var Me = 0;
            if ("startRule" in r) {
                if (!(r.startRule in a)) {
                    throw new Error(`Can't start parsing from rule "${r.startRule}".`);
                }
                i = a[r.startRule];
            }
            function Ee() {
                return Oe(Ce, be);
            }
            function ke(e) {
                let n;
                let r;
                let o = we[e];
                if (o) {
                    return o;
                }
                for(n = e - 1; !we[n];){
                    n--;
                }
                for(o = {
                    line: (o = we[n]).line,
                    column: o.column,
                    seenCR: o.seenCR
                }; n < e;){
                    if ((r = t.charAt(n)) === "\n") {
                        if (!o.seenCR) {
                            o.line++;
                        }
                        o.column = 1;
                        o.seenCR = false;
                    } else if (r === "\r" || r === "\u2028" || r === "\u2029") {
                        o.line++;
                        o.column = 1;
                        o.seenCR = true;
                    } else {
                        o.column++;
                        o.seenCR = false;
                    }
                    n++;
                }
                we[e] = o;
                return o;
            }
            function Oe(e, t) {
                const n = ke(e);
                const r = ke(t);
                return {
                    start: {
                        offset: e,
                        line: n.line,
                        column: n.column
                    },
                    end: {
                        offset: t,
                        line: r.line,
                        column: r.column
                    }
                };
            }
            function Se(e) {
                if (!(be < _e)) {
                    if (be > _e) {
                        _e = be;
                        xe = [];
                    }
                    xe.push(e);
                }
            }
            function Le(t, n, r, o) {
                if (n !== null) {
                    ((e)=>{
                        let t = 1;
                        for(e.sort((e, t)=>{
                            if (e.description < t.description) {
                                return -1;
                            }
                            if (e.description > t.description) {
                                return 1;
                            }
                            return 0;
                        }); t < e.length;){
                            if (e[t - 1] === e[t]) {
                                e.splice(t, 1);
                            } else {
                                t++;
                            }
                        }
                    })(n);
                }
                return new SyntaxError(t !== null ? t : ((e, t)=>{
                    let n;
                    const r = new Array(e.length);
                    for(n = 0; n < e.length; n++){
                        r[n] = e[n].description;
                    }
                    return `Expected ${e.length > 1 ? `${r.slice(0, -1).join(", ")} or ${r[e.length - 1]}` : r[0]} but ${t ? `"${((e)=>{
                        function t(e) {
                            return e.charCodeAt(0).toString(16).toUpperCase();
                        }
                        return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, (e)=>`\\x0${t(e)}`).replace(/[\x10-\x1F\x80-\xFF]/g, (e)=>`\\x${t(e)}`).replace(/[\u0100-\u0FFF]/g, (e)=>`\\u0${t(e)}`).replace(/[\u1000-\uFFFF]/g, (e)=>`\\u${t(e)}`);
                    })(t)}"` : "end of input"} found.`;
                })(n, r), n, r, o);
            }
            function start() {
                return De();
            }
            function De() {
                let e;
                let t;
                let n;
                e = be;
                t = [];
                for(n = Te(); n !== o;){
                    t.push(n);
                    n = Te();
                }
                if (t !== o) {
                    Ce = e;
                    t = l(t);
                }
                return t;
            }
            function Te() {
                let e;
                if ((e = He()) === o) {
                    e = Ae();
                }
                return e;
            }
            function Ve() {
                let e;
                let n;
                let r;
                let a;
                let i;
                let l;
                e = be;
                n = [];
                r = be;
                if ((a = Ge()) !== o && (i = Qe()) !== o && (l = Ge()) !== o) {
                    r = a = [
                        a,
                        i,
                        l
                    ];
                } else {
                    be = r;
                    r = o;
                }
                if (r !== o) {
                    while(r !== o){
                        n.push(r);
                        r = be;
                        if ((a = Ge()) !== o && (i = Qe()) !== o && (l = Ge()) !== o) {
                            r = a = [
                                a,
                                i,
                                l
                            ];
                        } else {
                            be = r;
                            r = o;
                        }
                    }
                } else {
                    n = o;
                }
                if (n !== o) {
                    Ce = e;
                    n = s(n);
                }
                if ((e = n) === o) {
                    e = be;
                    e = (n = We()) !== o ? t.substring(e, be) : n;
                }
                return e;
            }
            function He() {
                let e;
                let t;
                e = be;
                if ((t = Ve()) !== o) {
                    Ce = e;
                    t = u(t);
                }
                return t;
            }
            function Pe() {
                let e;
                let n;
                let r;
                if ((e = Ke()) === o) {
                    e = be;
                    n = [];
                    if (c.test(t.charAt(be))) {
                        r = t.charAt(be);
                        be++;
                    } else {
                        r = o;
                        if (Me === 0) {
                            Se(f);
                        }
                    }
                    if (r !== o) {
                        while(r !== o){
                            n.push(r);
                            if (c.test(t.charAt(be))) {
                                r = t.charAt(be);
                                be++;
                            } else {
                                r = o;
                                if (Me === 0) {
                                    Se(f);
                                }
                            }
                        }
                    } else {
                        n = o;
                    }
                    e = n !== o ? t.substring(e, be) : n;
                }
                return e;
            }
            function Ae() {
                let e;
                let n;
                let r;
                let a;
                let i;
                let l;
                let s;
                e = be;
                if (t.charCodeAt(be) === 123) {
                    n = d;
                    be++;
                } else {
                    n = o;
                    if (Me === 0) {
                        Se(p);
                    }
                }
                if (n !== o && Ge() !== o && (r = Pe()) !== o && Ge() !== o) {
                    a = be;
                    if (t.charCodeAt(be) === 44) {
                        i = h;
                        be++;
                    } else {
                        i = o;
                        if (Me === 0) {
                            Se(v);
                        }
                    }
                    if (i !== o && (l = Ge()) !== o && (s = Re()) !== o) {
                        a = i = [
                            i,
                            l,
                            s
                        ];
                    } else {
                        be = a;
                        a = o;
                    }
                    if (a === o) {
                        a = null;
                    }
                    if (a !== o && (i = Ge()) !== o) {
                        if (t.charCodeAt(be) === 125) {
                            l = m;
                            be++;
                        } else {
                            l = o;
                            if (Me === 0) {
                                Se(g);
                            }
                        }
                        if (l !== o) {
                            Ce = e;
                            e = n = y(r, a);
                        } else {
                            be = e;
                            e = o;
                        }
                    } else {
                        be = e;
                        e = o;
                    }
                } else {
                    be = e;
                    e = o;
                }
                return e;
            }
            function Re() {
                let e;
                if ((e = je()) === o && (e = Ne()) === o && (e = Ie()) === o) {
                    e = Be();
                }
                return e;
            }
            function je() {
                let e;
                let n;
                let r;
                let a;
                let i;
                let l;
                e = be;
                if (t.substr(be, 6) === b) {
                    n = b;
                    be += 6;
                } else {
                    n = o;
                    if (Me === 0) {
                        Se(C);
                    }
                }
                if (n === o) {
                    if (t.substr(be, 4) === w) {
                        n = w;
                        be += 4;
                    } else {
                        n = o;
                        if (Me === 0) {
                            Se(_);
                        }
                    }
                    if (n === o) {
                        if (t.substr(be, 4) === x) {
                            n = x;
                            be += 4;
                        } else {
                            n = o;
                            if (Me === 0) {
                                Se(M);
                            }
                        }
                    }
                }
                if (n !== o && Ge() !== o) {
                    r = be;
                    if (t.charCodeAt(be) === 44) {
                        a = h;
                        be++;
                    } else {
                        a = o;
                        if (Me === 0) {
                            Se(v);
                        }
                    }
                    if (a !== o && (i = Ge()) !== o && (l = Qe()) !== o) {
                        r = a = [
                            a,
                            i,
                            l
                        ];
                    } else {
                        be = r;
                        r = o;
                    }
                    if (r === o) {
                        r = null;
                    }
                    if (r !== o) {
                        Ce = e;
                        e = n = E(n, r);
                    } else {
                        be = e;
                        e = o;
                    }
                } else {
                    be = e;
                    e = o;
                }
                return e;
            }
            function Ne() {
                let e;
                let n;
                let r;
                let a;
                e = be;
                if (t.substr(be, 6) === k) {
                    n = k;
                    be += 6;
                } else {
                    n = o;
                    if (Me === 0) {
                        Se(O);
                    }
                }
                if (n !== o && Ge() !== o) {
                    if (t.charCodeAt(be) === 44) {
                        r = h;
                        be++;
                    } else {
                        r = o;
                        if (Me === 0) {
                            Se(v);
                        }
                    }
                    if (r !== o && Ge() !== o && (a = qe()) !== o) {
                        Ce = e;
                        e = n = S(a);
                    } else {
                        be = e;
                        e = o;
                    }
                } else {
                    be = e;
                    e = o;
                }
                return e;
            }
            function Ie() {
                let e;
                let n;
                let r;
                let a;
                e = be;
                if (t.substr(be, 13) === L) {
                    n = L;
                    be += 13;
                } else {
                    n = o;
                    if (Me === 0) {
                        Se(z);
                    }
                }
                if (n !== o && Ge() !== o) {
                    if (t.charCodeAt(be) === 44) {
                        r = h;
                        be++;
                    } else {
                        r = o;
                        if (Me === 0) {
                            Se(v);
                        }
                    }
                    if (r !== o && Ge() !== o && (a = qe()) !== o) {
                        Ce = e;
                        e = n = D(a);
                    } else {
                        be = e;
                        e = o;
                    }
                } else {
                    be = e;
                    e = o;
                }
                return e;
            }
            function Be() {
                let e;
                let n;
                let r;
                let a;
                let i;
                e = be;
                if (t.substr(be, 6) === T) {
                    n = T;
                    be += 6;
                } else {
                    n = o;
                    if (Me === 0) {
                        Se(V);
                    }
                }
                if (n !== o) {
                    if (Ge() !== o) {
                        if (t.charCodeAt(be) === 44) {
                            r = h;
                            be++;
                        } else {
                            r = o;
                            if (Me === 0) {
                                Se(v);
                            }
                        }
                        if (r !== o) {
                            if (Ge() !== o) {
                                a = [];
                                if ((i = Fe()) !== o) {
                                    while(i !== o){
                                        a.push(i);
                                        i = Fe();
                                    }
                                } else {
                                    a = o;
                                }
                                if (a !== o) {
                                    Ce = e;
                                    e = n = H(a);
                                } else {
                                    be = e;
                                    e = o;
                                }
                            } else {
                                be = e;
                                e = o;
                            }
                        } else {
                            be = e;
                            e = o;
                        }
                    } else {
                        be = e;
                        e = o;
                    }
                } else {
                    be = e;
                    e = o;
                }
                return e;
            }
            function Ue() {
                let e;
                let n;
                let r;
                let a;
                e = be;
                n = be;
                if (t.charCodeAt(be) === 61) {
                    r = P;
                    be++;
                } else {
                    r = o;
                    if (Me === 0) {
                        Se(A);
                    }
                }
                if (r !== o && (a = Ke()) !== o) {
                    n = r = [
                        r,
                        a
                    ];
                } else {
                    be = n;
                    n = o;
                }
                if ((e = n !== o ? t.substring(e, be) : n) === o) {
                    e = Qe();
                }
                return e;
            }
            function Fe() {
                let e;
                let n;
                let r;
                let a;
                let i;
                e = be;
                if (Ge() !== o && (n = Ue()) !== o && Ge() !== o) {
                    if (t.charCodeAt(be) === 123) {
                        r = d;
                        be++;
                    } else {
                        r = o;
                        if (Me === 0) {
                            Se(p);
                        }
                    }
                    if (r !== o && Ge() !== o && (a = De()) !== o && Ge() !== o) {
                        if (t.charCodeAt(be) === 125) {
                            i = m;
                            be++;
                        } else {
                            i = o;
                            if (Me === 0) {
                                Se(g);
                            }
                        }
                        if (i !== o) {
                            Ce = e;
                            e = R(n, a);
                        } else {
                            be = e;
                            e = o;
                        }
                    } else {
                        be = e;
                        e = o;
                    }
                } else {
                    be = e;
                    e = o;
                }
                return e;
            }
            function Ze() {
                let e;
                let n;
                let r;
                e = be;
                if (t.substr(be, 7) === j) {
                    n = j;
                    be += 7;
                } else {
                    n = o;
                    if (Me === 0) {
                        Se(N);
                    }
                }
                if (n !== o && Ge() !== o && (r = Ke()) !== o) {
                    Ce = e;
                    e = n = I(r);
                } else {
                    be = e;
                    e = o;
                }
                return e;
            }
            function qe() {
                let e;
                let t;
                let n;
                let r;
                e = be;
                if ((t = Ze()) === o) {
                    t = null;
                }
                if (t !== o) {
                    if (Ge() !== o) {
                        n = [];
                        if ((r = Fe()) !== o) {
                            while(r !== o){
                                n.push(r);
                                r = Fe();
                            }
                        } else {
                            n = o;
                        }
                        if (n !== o) {
                            Ce = e;
                            e = t = B(t, n);
                        } else {
                            be = e;
                            e = o;
                        }
                    } else {
                        be = e;
                        e = o;
                    }
                } else {
                    be = e;
                    e = o;
                }
                return e;
            }
            function We() {
                let e;
                let n;
                Me++;
                e = [];
                if (F.test(t.charAt(be))) {
                    n = t.charAt(be);
                    be++;
                } else {
                    n = o;
                    if (Me === 0) {
                        Se(Z);
                    }
                }
                if (n !== o) {
                    while(n !== o){
                        e.push(n);
                        if (F.test(t.charAt(be))) {
                            n = t.charAt(be);
                            be++;
                        } else {
                            n = o;
                            if (Me === 0) {
                                Se(Z);
                            }
                        }
                    }
                } else {
                    e = o;
                }
                Me--;
                if (e === o) {
                    n = o;
                    if (Me === 0) {
                        Se(U);
                    }
                }
                return e;
            }
            function Ge() {
                let e;
                let n;
                let r;
                Me++;
                e = be;
                n = [];
                for(r = We(); r !== o;){
                    n.push(r);
                    r = We();
                }
                e = n !== o ? t.substring(e, be) : n;
                Me--;
                if (e === o) {
                    n = o;
                    if (Me === 0) {
                        Se(q);
                    }
                }
                return e;
            }
            function Ye() {
                let e;
                if (W.test(t.charAt(be))) {
                    e = t.charAt(be);
                    be++;
                } else {
                    e = o;
                    if (Me === 0) {
                        Se(G);
                    }
                }
                return e;
            }
            function $e() {
                let e;
                if (Y.test(t.charAt(be))) {
                    e = t.charAt(be);
                    be++;
                } else {
                    e = o;
                    if (Me === 0) {
                        Se($);
                    }
                }
                return e;
            }
            function Ke() {
                let e;
                let n;
                let r;
                let a;
                let i;
                let l;
                e = be;
                if (t.charCodeAt(be) === 48) {
                    n = K;
                    be++;
                } else {
                    n = o;
                    if (Me === 0) {
                        Se(J);
                    }
                }
                if (n === o) {
                    n = be;
                    r = be;
                    if (Q.test(t.charAt(be))) {
                        a = t.charAt(be);
                        be++;
                    } else {
                        a = o;
                        if (Me === 0) {
                            Se(X);
                        }
                    }
                    if (a !== o) {
                        i = [];
                        for(l = Ye(); l !== o;){
                            i.push(l);
                            l = Ye();
                        }
                        if (i !== o) {
                            r = a = [
                                a,
                                i
                            ];
                        } else {
                            be = r;
                            r = o;
                        }
                    } else {
                        be = r;
                        r = o;
                    }
                    n = r !== o ? t.substring(n, be) : r;
                }
                if (n !== o) {
                    Ce = e;
                    n = ee(n);
                }
                return n;
            }
            function Je() {
                let e;
                let n;
                let r;
                let a;
                let i;
                let l;
                let s;
                let u;
                if (te.test(t.charAt(be))) {
                    e = t.charAt(be);
                    be++;
                } else {
                    e = o;
                    if (Me === 0) {
                        Se(ne);
                    }
                }
                if (e === o) {
                    e = be;
                    if (t.substr(be, 2) === re) {
                        n = re;
                        be += 2;
                    } else {
                        n = o;
                        if (Me === 0) {
                            Se(oe);
                        }
                    }
                    if (n !== o) {
                        Ce = e;
                        n = ae();
                    }
                    if ((e = n) === o) {
                        e = be;
                        if (t.substr(be, 2) === ie) {
                            n = ie;
                            be += 2;
                        } else {
                            n = o;
                            if (Me === 0) {
                                Se(le);
                            }
                        }
                        if (n !== o) {
                            Ce = e;
                            n = se();
                        }
                        if ((e = n) === o) {
                            e = be;
                            if (t.substr(be, 2) === ue) {
                                n = ue;
                                be += 2;
                            } else {
                                n = o;
                                if (Me === 0) {
                                    Se(ce);
                                }
                            }
                            if (n !== o) {
                                Ce = e;
                                n = fe();
                            }
                            if ((e = n) === o) {
                                e = be;
                                if (t.substr(be, 2) === de) {
                                    n = de;
                                    be += 2;
                                } else {
                                    n = o;
                                    if (Me === 0) {
                                        Se(pe);
                                    }
                                }
                                if (n !== o) {
                                    Ce = e;
                                    n = he();
                                }
                                if ((e = n) === o) {
                                    e = be;
                                    if (t.substr(be, 2) === ve) {
                                        n = ve;
                                        be += 2;
                                    } else {
                                        n = o;
                                        if (Me === 0) {
                                            Se(me);
                                        }
                                    }
                                    if (n !== o) {
                                        r = be;
                                        a = be;
                                        if ((i = $e()) !== o && (l = $e()) !== o && (s = $e()) !== o && (u = $e()) !== o) {
                                            a = i = [
                                                i,
                                                l,
                                                s,
                                                u
                                            ];
                                        } else {
                                            be = a;
                                            a = o;
                                        }
                                        if ((r = a !== o ? t.substring(r, be) : a) !== o) {
                                            Ce = e;
                                            e = n = ge(r);
                                        } else {
                                            be = e;
                                            e = o;
                                        }
                                    } else {
                                        be = e;
                                        e = o;
                                    }
                                }
                            }
                        }
                    }
                }
                return e;
            }
            function Qe() {
                let e;
                let t;
                let n;
                e = be;
                t = [];
                if ((n = Je()) !== o) {
                    while(n !== o){
                        t.push(n);
                        n = Je();
                    }
                } else {
                    t = o;
                }
                if (t !== o) {
                    Ce = e;
                    t = ye(t);
                }
                return t;
            }
            if ((n = i()) !== o && be === t.length) {
                return n;
            }
            if (n !== o && be < t.length) {
                Se({
                    type: "end",
                    description: "end of input"
                });
            }
            throw Le(null, xe, _e < t.length ? t.charAt(_e) : null, _e < t.length ? Oe(_e, _e + 1) : Oe(_e, _e));
        }
    };
})();
