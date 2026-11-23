import { Children, Component, cloneElement, createContext, useContext, useMemo } from "./module-553.js";
import module486 from "./module-486.js";
import module31 from "./module-31.js";
import module61 from "./module-61.js";
import module1 from "./module-1.js";
import module106 from "./module-106.js";
function i(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function a(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function l(e, t, n) {
    if (t) {
        a(e.prototype, t);
    }
    if (n) {
        a(e, n);
    }
    return e;
}
function u(e) {
    return (u = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function s(e) {
    return (s = typeof Symbol === "function" && u(Symbol.iterator) === "symbol" ? function(e) {
        return u(e);
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return u(e);
    })(e);
}
function c(e) {
    if (e === undefined) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return e;
}
function f(e, t) {
    if (!t || s(t) !== "object" && typeof t !== "function") {
        return c(e);
    }
    return t;
}
function d(e) {
    return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function p(e, t) {
    return (p = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
function h(e, Component) {
    if (typeof Component !== "function" && Component !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    e.prototype = Object.create(Component && Component.prototype, {
        constructor: {
            value: e,
            writable: true,
            configurable: true
        }
    });
    if (Component) {
        p(e, Component);
    }
}
const O = (e)=>{
    if (e === Object(e)) {
        return Object.keys(e);
    }
    return [];
};
const E = (e)=>{
    if (e === Object(e)) {
        return Object.values(e);
    }
    return [];
};
function M(e, t) {
    const n = {
        ...e
    };
    if (k(e) && k(t)) {
        O(t).forEach((r)=>{
            if (k(t[r]) && r in e) {
                n[r] = M(e[r], t[r]);
            } else {
                Object.assign(n, module31({}, r, t[r]));
            }
        });
    }
    return n;
}
const S = (e, ...n)=>n.reduce((acc, item)=>M(acc, item), e);
const A = (e, t)=>{
    const n = {
        ...e
    };
    if (t) {
        for(let r = 0; r < t.length; r++){
            delete n[t[r]];
        }
    }
    return n;
};
var k = (e)=>!(e !== Object(e) || e instanceof Date || Array.isArray(e));
const j = (e)=>(e || []).filter(Boolean);
const T = function(e) {
    return e[0] === "&";
};
const P = function(e) {
    return !T(e);
};
const L = function(e) {
    return e.replace(/-(\w)/g, (e, t)=>t.toUpperCase());
};
const z = (style, t = [])=>{
    const n = O(style);
    const r = {};
    for(let o = 0, i = n.length; o < i; o += 1){
        const a = n[o];
        const l = Object.prototype.toString.call(style[a]) !== "[object Object]" || a[0] === ":" || a[0] === "@" || t.indexOf(a) >= 0;
        if (l) {
            r[a] = style[a];
        }
    }
    return r;
};
const N = (e, t)=>{
    const n = t.map(L);
    const r = O(e);
    const o = {};
    for(let i = 0, a = r.length; i < a; i += 1){
        const l = r[i];
        if (t.indexOf(l) >= 0 || n.indexOf(L(l)) >= 0) {
            o[l] = e[l];
        }
    }
    return o;
};
const D = function e(t, n) {
    let r = S(...[
        {},
        A(t, n)
    ].concat(module61(E(N(t, n)))));
    const o = O(r).filter(T);
    for(let i = 0, a = o.length; i < a; i += 1){
        const l = o[i];
        const u = e(r[l], n);
        if (n.indexOf(l) >= 0) {
            delete r[l];
            r = S({}, r, u);
        } else {
            r[l] = u;
        }
    }
    return r;
};
function I(e, t) {
    const n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        n.push.apply(n, r);
    }
    return n;
}
const R = [
    "animationName"
];
const H = function({ style, className }) {
    return {
        ...style ? {
            style: z(style, R)
        } : {},
        ...className ? {
            className
        } : {}
    };
};
const BContext = createContext(H);
BContext.Provider;
const F = (e)=>{
    if (!e) {
        return [];
    }
    if (typeof e === "string") {
        return [
            e
        ];
    }
    if (!Array.isArray(e)) {
        const t = e;
        return O(e).reduce((acc, item)=>acc.concat(t[item] ? [
                item
            ] : []), []);
    }
    return e;
};
const V = {};
const $ = (e)=>function(t, n) {
        let r;
        const o = n || V;
        e.memoize = e.memoize || new WeakMap;
        if (e.memoize.has(o)) {
            r = e.memoize.get(o);
        } else {
            r = {};
            e.memoize.set(o, r);
        }
        const i = F(t).join(" ");
        if (i in r) {
            return r[i];
        }
        return r[i] = e(t || [], n);
    };
const W = (classNames)=>{
    const t = classNames && O(classNames)[0];
    return t && t.split("__")[0].split("--")[0];
};
const K = (e, t, n)=>{
    if (e) {
        const r = e.split(" ")[0];
        const o = [].concat(module61(t.length === 0 ? n.map((e)=>`${r}--${e.substring(1)}`) : []), module61(t.map((e)=>`${r}__${e}`)));
        if (t.length === 0) {
            return [
                e
            ].concat(module61(o));
        }
        return o;
    }
};
const G = function e({ style, className, classNames }, i = H) {
    const a = className || W(classNames) || style?.className;
    const l = typeof style === "function" ? style : $(function(t, r) {
        const l = F(t);
        module486(Array.isArray(l), "First parameter must be a string, an array of strings, a plain object with boolean values, or a falsy value.");
        module486(!r || k(r), "Optional second parameter must be a plain object.");
        const u = l.filter(T);
        const s = l.filter(P);
        const c = s.length > 0 ? (e)=>E(N(e, s)) : (e)=>[
                e
            ];
        const f = (e = {})=>c(D(e, u));
        const d = K(a, s, u);
        return e({
            ...(style || r) && {
                style: S(...[
                    {}
                ].concat(module61(f(r)), module61(f(style))))
            },
            ...d && {
                className: d.join(" ")
            },
            ...classNames && {
                classNames
            }
        }, i);
    });
    const u = {
        ...typeof style === "function" ? style : {
            style
        }
    };
    const s = module61(new Set([].concat(module61(u.className ? u.className.split(" ") : []), module61(a ? a.split(" ") : []))));
    const c = classNames ? j(s.map((e)=>classNames[e])) : s;
    const f = i({
        ...u,
        ...c.length > 0 ? {
            className: c.join(" ")
        } : {}
    });
    Object.assign(l, f);
    return l;
};
const useQ = (e, { style, className, classNames }, n)=>{
    const a = useContext(BContext);
    return useMemo(function() {
        return G({
            style,
            className,
            classNames
        }, a);
    }, [
        style,
        className,
        classNames,
        a
    ])(n, e);
};
const ne = (e)=>e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
const re = "__id__";
const oe = "__display__";
const ie = (markup, t)=>{
    module486(t === "id" || t === "display", `Second arg must be either "id" or "display", got: "${t}"`);
    let n = markup.indexOf(oe);
    let r = markup.indexOf(re);
    if (n < 0) {
        n = null;
    }
    if (r < 0) {
        r = null;
    }
    module486(n !== null || r !== null, `The markup '${markup}' does not contain either of the placeholders '__id__' or '__display__'`);
    if (n !== null && r !== null) {
        if (t === "id" && r <= n || t === "display" && n <= r) {
            return 0;
        }
        return 1;
    }
    return 0;
};
const ae = (e)=>{
    const t = /^\/(.+)\/(\w+)?$/;
    return new RegExp(e.map((e)=>{
        const n = ((e)=>{
            const t = 3;
            return ((e)=>{
                if (Array.isArray(e)) {
                    return e;
                }
            })(e) || ((e, t)=>{
                const n = [];
                let r = true;
                let o = false;
                let i;
                try {
                    for(var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !t || n.length !== t); r = true);
                } catch (error) {
                    o = true;
                    i = error;
                } finally{
                    try {
                        if (!(r || l.return == null)) {
                            l.return();
                        }
                    } finally{
                        if (o) {
                            throw i;
                        }
                    }
                }
                return n;
            })(e, t) || (()=>{
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            })();
        })(t.exec(e.toString()));
        const r = n[1];
        const o = n[2];
        module486(!o, `RegExp flags are not supported. Change /${r}/${o} into /${r}/`);
        return `(${r})`;
    }).join("|"), "g");
};
const le = (markup)=>{
    let t = 0;
    if (markup.indexOf("__id__") >= 0) {
        t++;
    }
    if (markup.indexOf("__display__") >= 0) {
        t++;
    }
    return t;
};
const ue = function() {};
const se = (e, t, n, o = ue)=>{
    let r;
    for(var i = ae(t.map((e)=>e.regex)), a = 2, l = t.map(({ markup })=>{
        const n = a;
        a += le(markup) + 1;
        return n;
    }), u = 0, s = 0; (r = i.exec(e)) !== null;){
        const c = l.find((e)=>!!r[e]);
        const f = l.indexOf(c);
        const d = t[f];
        const { markup, displayTransform } = d;
        const v = c + ie(markup, "id");
        const g = c + ie(markup, "display");
        const y = r[v];
        const m = displayTransform(y, r[g]);
        const b = e.substring(u, r.index);
        o(b, u, s);
        s += b.length;
        n(r[0], r.index, s, y, m, f, u);
        s += m.length;
        u = i.lastIndex;
    }
    if (u < e.length) {
        o(e.substring(u), u, s);
    }
};
const ce = (e, t)=>{
    let n = "";
    se(e, t, (e, t, r, o, i)=>{
        n += i;
    }, function(e) {
        n += e;
    });
    return n;
};
const fe = (e, t, n, o = "START")=>{
    let r;
    if (typeof n !== "number") {
        return n;
    }
    const i = function(e, t, o) {
        if (r === undefined && o + e.length >= n) {
            r = t + n - o;
        }
    };
    const a = function(e, t, i, a, l, u, s) {
        if (r === undefined && i + l.length > n) {
            r = o === "NULL" ? null : t + (o === "END" ? e.length : 0);
        }
    };
    se(e, t, a, i);
    if (r === undefined) {
        return e.length;
    }
    return r;
};
const de = (e, t, n, r)=>e.substring(0, t) + r + e.substring(n);
const pe = (e, t)=>{
    const n = [];
    se(e, t, (e, index, plainTextIndex, o, i, childIndex, l)=>{
        n.push({
            id: o,
            display: i,
            childIndex,
            index,
            plainTextIndex
        });
    });
    return n;
};
const he = (suggestions)=>Object.values(suggestions).reduce((acc, item)=>acc + item.results.length, 0);
const ve = (markup)=>{
    const t = ne(markup);
    const n = markup[markup.indexOf(oe) + oe.length];
    const r = markup[markup.indexOf(re) + re.length];
    return new RegExp(t.replace(oe, `([^${ne(n || "")}]+?)`).replace(re, `([^${ne(r || "")}]+?)`));
};
const ge = (children)=>Children.toArray(children).map(({ props })=>{
        const { markup, regex, displayTransform } = props;
        return {
            markup,
            regex: regex ? ye(regex, markup) : ve(markup),
            displayTransform: displayTransform || function(e, t) {
                return t || e;
            }
        };
    });
var ye = (regex, markup)=>{
    const n = new RegExp(`${regex.toString()}|`).exec("").length - 1;
    const r = le(markup);
    module486(n === r, `Number of capturing groups in RegExp ${regex.toString()} (${n}) does not match the number of placeholders in the markup '${markup}' (${r})`);
    return regex;
};
const me = [
    {
        base: "A",
        letters: /(&#65;|&#9398;|&#65313;|&#192;|&#193;|&#194;|&#7846;|&#7844;|&#7850;|&#7848;|&#195;|&#256;|&#258;|&#7856;|&#7854;|&#7860;|&#7858;|&#550;|&#480;|&#196;|&#478;|&#7842;|&#197;|&#506;|&#461;|&#512;|&#514;|&#7840;|&#7852;|&#7862;|&#7680;|&#260;|&#570;|&#11375;|[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F])/g
    },
    {
        base: "AA",
        letters: /(&#42802;|[\uA732])/g
    },
    {
        base: "AE",
        letters: /(&#198;|&#508;|&#482;|[\u00C6\u01FC\u01E2])/g
    },
    {
        base: "AO",
        letters: /(&#42804;|[\uA734])/g
    },
    {
        base: "AU",
        letters: /(&#42806;|[\uA736])/g
    },
    {
        base: "AV",
        letters: /(&#42808;|&#42810;|[\uA738\uA73A])/g
    },
    {
        base: "AY",
        letters: /(&#42812;|[\uA73C])/g
    },
    {
        base: "B",
        letters: /(&#66;|&#9399;|&#65314;|&#7682;|&#7684;|&#7686;|&#579;|&#386;|&#385;|[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181])/g
    },
    {
        base: "C",
        letters: /(&#67;|&#9400;|&#65315;|&#262;|&#264;|&#266;|&#268;|&#199;|&#7688;|&#391;|&#571;|&#42814;|[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E])/g
    },
    {
        base: "D",
        letters: /(&#68;|&#9401;|&#65316;|&#7690;|&#270;|&#7692;|&#7696;|&#7698;|&#7694;|&#272;|&#395;|&#394;|&#393;|&#42873;|&#208;|[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\u00D0])/g
    },
    {
        base: "DZ",
        letters: /(&#497;|&#452;|[\u01F1\u01C4])/g
    },
    {
        base: "Dz",
        letters: /(&#498;|&#453;|[\u01F2\u01C5])/g
    },
    {
        base: "E",
        letters: /(&#69;|&#9402;|&#65317;|&#200;|&#201;|&#202;|&#7872;|&#7870;|&#7876;|&#7874;|&#7868;|&#274;|&#7700;|&#7702;|&#276;|&#278;|&#203;|&#7866;|&#282;|&#516;|&#518;|&#7864;|&#7878;|&#552;|&#7708;|&#280;|&#7704;|&#7706;|&#400;|&#398;|[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E])/g
    },
    {
        base: "F",
        letters: /(&#70;|&#9403;|&#65318;|&#7710;|&#401;|&#42875;|[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B])/g
    },
    {
        base: "G",
        letters: /(&#71;|&#9404;|&#65319;|&#500;|&#284;|&#7712;|&#286;|&#288;|&#486;|&#290;|&#484;|&#403;|&#42912;|&#42877;|&#42878;|[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E])/g
    },
    {
        base: "H",
        letters: /(&#72;|&#9405;|&#65320;|&#292;|&#7714;|&#7718;|&#542;|&#7716;|&#7720;|&#7722;|&#294;|&#11367;|&#11381;|&#42893;|[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D])/g
    },
    {
        base: "I",
        letters: /(&#73;|&#9406;|&#65321;|&#204;|&#205;|&#206;|&#296;|&#298;|&#300;|&#304;|&#207;|&#7726;|&#7880;|&#463;|&#520;|&#522;|&#7882;|&#302;|&#7724;|&#407;|[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197])/g
    },
    {
        base: "J",
        letters: /(&#74;|&#9407;|&#65322;|&#308;|&#584;|[\u004A\u24BF\uFF2A\u0134\u0248])/g
    },
    {
        base: "K",
        letters: /(&#75;|&#9408;|&#65323;|&#7728;|&#488;|&#7730;|&#310;|&#7732;|&#408;|&#11369;|&#42816;|&#42818;|&#42820;|&#42914;|[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2])/g
    },
    {
        base: "L",
        letters: /(&#76;|&#9409;|&#65324;|&#319;|&#313;|&#317;|&#7734;|&#7736;|&#315;|&#7740;|&#7738;|&#321;|&#573;|&#11362;|&#11360;|&#42824;|&#42822;|&#42880;|[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780])/g
    },
    {
        base: "LJ",
        letters: /(&#455;|[\u01C7])/g
    },
    {
        base: "Lj",
        letters: /(&#456;|[\u01C8])/g
    },
    {
        base: "M",
        letters: /(&#77;|&#9410;|&#65325;|&#7742;|&#7744;|&#7746;|&#11374;|&#412;|[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C])/g
    },
    {
        base: "N",
        letters: /(&#78;|&#9411;|&#65326;|&#504;|&#323;|&#209;|&#7748;|&#327;|&#7750;|&#325;|&#7754;|&#7752;|&#544;|&#413;|&#42896;|&#42916;|&#330;|[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4\u014A])/g
    },
    {
        base: "NJ",
        letters: /(&#458;|[\u01CA])/g
    },
    {
        base: "Nj",
        letters: /(&#459;|[\u01CB])/g
    },
    {
        base: "O",
        letters: /(&#79;|&#9412;|&#65327;|&#210;|&#211;|&#212;|&#7890;|&#7888;|&#7894;|&#7892;|&#213;|&#7756;|&#556;|&#7758;|&#332;|&#7760;|&#7762;|&#334;|&#558;|&#560;|&#214;|&#554;|&#7886;|&#336;|&#465;|&#524;|&#526;|&#416;|&#7900;|&#7898;|&#7904;|&#7902;|&#7906;|&#7884;|&#7896;|&#490;|&#492;|&#216;|&#510;|&#390;|&#415;|&#42826;|&#42828;|[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C])/g
    },
    {
        base: "OE",
        letters: /(&#338;|[\u0152])/g
    },
    {
        base: "OI",
        letters: /(&#418;|[\u01A2])/g
    },
    {
        base: "OO",
        letters: /(&#42830;|[\uA74E])/g
    },
    {
        base: "OU",
        letters: /(&#546;|[\u0222])/g
    },
    {
        base: "P",
        letters: /(&#80;|&#9413;|&#65328;|&#7764;|&#7766;|&#420;|&#11363;|&#42832;|&#42834;|&#42836;|[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754])/g
    },
    {
        base: "Q",
        letters: /(&#81;|&#9414;|&#65329;|&#42838;|&#42840;|&#586;|[\u0051\u24C6\uFF31\uA756\uA758\u024A])/g
    },
    {
        base: "R",
        letters: /(&#82;|&#9415;|&#65330;|&#340;|&#7768;|&#344;|&#528;|&#530;|&#7770;|&#7772;|&#342;|&#7774;|&#588;|&#11364;|&#42842;|&#42918;|&#42882;|[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782])/g
    },
    {
        base: "S",
        letters: /(&#83;|&#9416;|&#65331;|&#7838;|&#346;|&#7780;|&#348;|&#7776;|&#352;|&#7782;|&#7778;|&#7784;|&#536;|&#350;|&#11390;|&#42920;|&#42884;|[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784])/g
    },
    {
        base: "T",
        letters: /(&#84;|&#9417;|&#65332;|&#7786;|&#356;|&#7788;|&#538;|&#354;|&#7792;|&#7790;|&#358;|&#428;|&#430;|&#574;|&#42886;|[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786])/g
    },
    {
        base: "TH",
        letters: /(&#222;|[\u00DE])/g
    },
    {
        base: "TZ",
        letters: /(&#42792;|[\uA728])/g
    },
    {
        base: "U",
        letters: /(&#85;|&#9418;|&#65333;|&#217;|&#218;|&#219;|&#360;|&#7800;|&#362;|&#7802;|&#364;|&#220;|&#475;|&#471;|&#469;|&#473;|&#7910;|&#366;|&#368;|&#467;|&#532;|&#534;|&#431;|&#7914;|&#7912;|&#7918;|&#7916;|&#7920;|&#7908;|&#7794;|&#370;|&#7798;|&#7796;|&#580;|[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244])/g
    },
    {
        base: "V",
        letters: /(&#86;|&#9419;|&#65334;|&#7804;|&#7806;|&#434;|&#42846;|&#581;|[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245])/g
    },
    {
        base: "VY",
        letters: /(&#42848;|[\uA760])/g
    },
    {
        base: "W",
        letters: /(&#87;|&#9420;|&#65335;|&#7808;|&#7810;|&#372;|&#7814;|&#7812;|&#7816;|&#11378;|[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72])/g
    },
    {
        base: "X",
        letters: /(&#88;|&#9421;|&#65336;|&#7818;|&#7820;|[\u0058\u24CD\uFF38\u1E8A\u1E8C])/g
    },
    {
        base: "Y",
        letters: /(&#89;|&#9422;|&#65337;|&#7922;|&#221;|&#374;|&#7928;|&#562;|&#7822;|&#376;|&#7926;|&#7924;|&#435;|&#590;|&#7934;|[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE])/g
    },
    {
        base: "Z",
        letters: /(&#90;|&#9423;|&#65338;|&#377;|&#7824;|&#379;|&#381;|&#7826;|&#7828;|&#437;|&#548;|&#11391;|&#11371;|&#42850;|[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762])/g
    },
    {
        base: "a",
        letters: /(&#97;|&#9424;|&#65345;|&#7834;|&#224;|&#225;|&#226;|&#7847;|&#7845;|&#7851;|&#7849;|&#227;|&#257;|&#259;|&#7857;|&#7855;|&#7861;|&#7859;|&#551;|&#481;|&#228;|&#479;|&#7843;|&#229;|&#507;|&#462;|&#513;|&#515;|&#7841;|&#7853;|&#7863;|&#7681;|&#261;|&#11365;|&#592;|[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250])/g
    },
    {
        base: "aa",
        letters: /(&#42803;|[\uA733])/g
    },
    {
        base: "ae",
        letters: /(&#230;|&#509;|&#483;|[\u00E6\u01FD\u01E3])/g
    },
    {
        base: "ao",
        letters: /(&#42805;|[\uA735])/g
    },
    {
        base: "au",
        letters: /(&#42807;|[\uA737])/g
    },
    {
        base: "av",
        letters: /(&#42809;|&#42811;|[\uA739\uA73B])/g
    },
    {
        base: "ay",
        letters: /(&#42813;|[\uA73D])/g
    },
    {
        base: "b",
        letters: /(&#98;|&#9425;|&#65346;|&#7683;|&#7685;|&#7687;|&#384;|&#387;|&#595;|[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253])/g
    },
    {
        base: "c",
        letters: /(&#99;|&#9426;|&#65347;|&#263;|&#265;|&#267;|&#269;|&#231;|&#7689;|&#392;|&#572;|&#42815;|&#8580;|[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184])/g
    },
    {
        base: "d",
        letters: /(&#100;|&#9427;|&#65348;|&#7691;|&#271;|&#7693;|&#7697;|&#7699;|&#7695;|&#273;|&#396;|&#598;|&#599;|&#42874;|&#240;|[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A\u00F0])/g
    },
    {
        base: "dz",
        letters: /(&#499;|&#454;|[\u01F3\u01C6])/g
    },
    {
        base: "e",
        letters: /(&#101;|&#9428;|&#65349;|&#232;|&#233;|&#234;|&#7873;|&#7871;|&#7877;|&#7875;|&#7869;|&#275;|&#7701;|&#7703;|&#277;|&#279;|&#235;|&#7867;|&#283;|&#517;|&#519;|&#7865;|&#7879;|&#553;|&#7709;|&#281;|&#7705;|&#7707;|&#583;|&#603;|&#477;|[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD])/g
    },
    {
        base: "f",
        letters: /(&#102;|&#9429;|&#65350;|&#7711;|&#402;|&#42876;|[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C])/g
    },
    {
        base: "g",
        letters: /(&#103;|&#9430;|&#65351;|&#501;|&#285;|&#7713;|&#287;|&#289;|&#487;|&#291;|&#485;|&#608;|&#42913;|&#7545;|&#42879;|[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F])/g
    },
    {
        base: "h",
        letters: /(&#104;|&#9431;|&#65352;|&#293;|&#7715;|&#7719;|&#543;|&#7717;|&#7721;|&#7723;|&#7830;|&#295;|&#11368;|&#11382;|&#613;|[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265])/g
    },
    {
        base: "hv",
        letters: /(&#405;|[\u0195])/g
    },
    {
        base: "i",
        letters: /(&#105;|&#9432;|&#65353;|&#236;|&#237;|&#238;|&#297;|&#299;|&#301;|&#239;|&#7727;|&#7881;|&#464;|&#521;|&#523;|&#7883;|&#303;|&#7725;|&#616;|&#305;|[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131])/g
    },
    {
        base: "ij",
        letters: /(&#307;|[\u0133])/g
    },
    {
        base: "j",
        letters: /(&#106;|&#9433;|&#65354;|&#309;|&#496;|&#585;|[\u006A\u24D9\uFF4A\u0135\u01F0\u0249])/g
    },
    {
        base: "k",
        letters: /(&#107;|&#9434;|&#65355;|&#7729;|&#489;|&#7731;|&#311;|&#7733;|&#409;|&#11370;|&#42817;|&#42819;|&#42821;|&#42915;|[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3])/g
    },
    {
        base: "l",
        letters: /(&#108;|&#9435;|&#65356;|&#320;|&#314;|&#318;|&#7735;|&#7737;|&#316;|&#7741;|&#7739;|&#322;|&#410;|&#619;|&#11361;|&#42825;|&#42881;|&#42823;|[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u0142\u019A\u026B\u2C61\uA749\uA781\uA747])/g
    },
    {
        base: "lj",
        letters: /(&#457;|[\u01C9])/g
    },
    {
        base: "m",
        letters: /(&#109;|&#9436;|&#65357;|&#7743;|&#7745;|&#7747;|&#625;|&#623;|[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F])/g
    },
    {
        base: "n",
        letters: /(&#110;|&#9437;|&#65358;|&#505;|&#324;|&#241;|&#7749;|&#328;|&#7751;|&#326;|&#7755;|&#7753;|&#414;|&#626;|&#329;|&#42897;|&#42917;|&#331;|[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u014B])/g
    },
    {
        base: "nj",
        letters: /(&#460;|[\u01CC])/g
    },
    {
        base: "o",
        letters: /(&#111;|&#9438;|&#65359;|&#242;|&#243;|&#244;|&#7891;|&#7889;|&#7895;|&#7893;|&#245;|&#7757;|&#557;|&#7759;|&#333;|&#7761;|&#7763;|&#335;|&#559;|&#561;|&#246;|&#555;|&#7887;|&#337;|&#466;|&#525;|&#527;|&#417;|&#7901;|&#7899;|&#7905;|&#7903;|&#7907;|&#7885;|&#7897;|&#491;|&#493;|&#248;|&#511;|&#596;|&#42827;|&#42829;|&#629;|[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275])/g
    },
    {
        base: "oe",
        letters: /(&#339;|[\u0153])/g
    },
    {
        base: "oi",
        letters: /(&#419;|[\u01A3])/g
    },
    {
        base: "ou",
        letters: /(&#547;|[\u0223])/g
    },
    {
        base: "oo",
        letters: /(&#42831;|[\uA74F])/g
    },
    {
        base: "p",
        letters: /(&#112;|&#9439;|&#65360;|&#7765;|&#7767;|&#421;|&#7549;|&#42833;|&#42835;|&#42837;|[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755])/g
    },
    {
        base: "q",
        letters: /(&#113;|&#9440;|&#65361;|&#587;|&#42839;|&#42841;|[\u0071\u24E0\uFF51\u024B\uA757\uA759])/g
    },
    {
        base: "r",
        letters: /(&#114;|&#9441;|&#65362;|&#341;|&#7769;|&#345;|&#529;|&#531;|&#7771;|&#7773;|&#343;|&#7775;|&#589;|&#637;|&#42843;|&#42919;|&#42883;|[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783])/g
    },
    {
        base: "s",
        letters: /(&#115;|&#9442;|&#65363;|&#347;|&#7781;|&#349;|&#7777;|&#353;|&#7783;|&#7779;|&#7785;|&#537;|&#351;|&#575;|&#42921;|&#42885;|&#7835;|&#383;|[\u0073\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B\u017F])/g
    },
    {
        base: "ss",
        letters: /(&#223;|[\u00DF])/g
    },
    {
        base: "t",
        letters: /(&#116;|&#9443;|&#65364;|&#7787;|&#7831;|&#357;|&#7789;|&#539;|&#355;|&#7793;|&#7791;|&#359;|&#429;|&#648;|&#11366;|&#42887;|[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787])/g
    },
    {
        base: "th",
        letters: /(&#254;|[\u00FE])/g
    },
    {
        base: "tz",
        letters: /(&#42793;|[\uA729])/g
    },
    {
        base: "u",
        letters: /(&#117;|&#9444;|&#65365;|&#249;|&#250;|&#251;|&#361;|&#7801;|&#363;|&#7803;|&#365;|&#252;|&#476;|&#472;|&#470;|&#474;|&#7911;|&#367;|&#369;|&#468;|&#533;|&#535;|&#432;|&#7915;|&#7913;|&#7919;|&#7917;|&#7921;|&#7909;|&#7795;|&#371;|&#7799;|&#7797;|&#649;|[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289])/g
    },
    {
        base: "v",
        letters: /(&#118;|&#9445;|&#65366;|&#7805;|&#7807;|&#651;|&#42847;|&#652;|[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C])/g
    },
    {
        base: "vy",
        letters: /(&#42849;|[\uA761])/g
    },
    {
        base: "w",
        letters: /(&#119;|&#9446;|&#65367;|&#7809;|&#7811;|&#373;|&#7815;|&#7813;|&#7832;|&#7817;|&#11379;|[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73])/g
    },
    {
        base: "x",
        letters: /(&#120;|&#9447;|&#65368;|&#7819;|&#7821;|[\u0078\u24E7\uFF58\u1E8B\u1E8D])/g
    },
    {
        base: "y",
        letters: /(&#121;|&#9448;|&#65369;|&#7923;|&#253;|&#375;|&#7929;|&#563;|&#7823;|&#255;|&#7927;|&#7833;|&#7925;|&#436;|&#591;|&#7935;|[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF])/g
    },
    {
        base: "z",
        letters: /(&#122;|&#9449;|&#65370;|&#378;|&#7825;|&#380;|&#382;|&#7827;|&#7829;|&#438;|&#549;|&#576;|&#11372;|&#42851;|[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763])/g
    }
];
const be = (e)=>((e)=>{
        let t = e;
        me.forEach((e)=>{
            t = t.replace(e.letters, e.base);
        });
        return t;
    })(e).toLowerCase();
const xe = (e, t, ignoreAccents)=>{
    if (ignoreAccents) {
        return be(e).indexOf(be(t));
    }
    return e.toLowerCase().indexOf(t.toLowerCase());
};
const we = (e)=>typeof e === "number";
const _e = (e)=>{
    if (e === Object(e)) {
        return Object.keys(e);
    }
    return [];
};
const Ce = (props, ...r)=>{
    const i = [].concat(...r);
    return Object.keys(props).reduce((acc, key)=>{
        if (props.hasOwnProperty(key) && !i.includes(key) && props[key] !== undefined) {
            acc[key] = props[key];
        }
        return acc;
    }, {});
};
function Oe(e, t) {
    return function(N) {
        const RComponent = function({ style, className, classNames, ...rest }) {
            const s = t ? t(rest) : undefined;
            const style_1 = useQ(e, {
                style,
                className,
                classNames
            }, s);
            return <N {...rest} style={style_1}/>;
        };
        const i = N.displayName || N.name || "Component";
        RComponent.displayName = `defaultStyle(${i})`;
        return RComponent;
    };
}
const Ee = ((Component_1)=>{
    function t() {
        let e;
        i(this, t);
        c(e = f(this, d(t).apply(this, arguments))).setCaretElement = function(t) {
            e.caretElement = t;
        };
        e.state = {
            left: undefined,
            top: undefined
        };
        return e;
    }
    h(t, Component_1);
    l(t, [
        {
            key: "componentDidMount",
            value: function() {
                this.notifyCaretPosition();
            }
        },
        {
            key: "componentDidUpdate",
            value: function() {
                this.notifyCaretPosition();
            }
        },
        {
            key: "notifyCaretPosition",
            value: function() {
                if (this.caretElement) {
                    const e = this.caretElement;
                    const { offsetLeft, offsetTop } = e;
                    if (this.state.left !== offsetLeft || this.state.top !== offsetTop) {
                        const r = {
                            left: offsetLeft,
                            top: offsetTop
                        };
                        this.setState(r);
                        this.props.onCaretPositionChange(r);
                    }
                }
            }
        },
        {
            key: "render",
            value: function() {
                let e;
                const _this = this;
                const props = this.props;
                const { selectionStart, selectionEnd, value, style, children, containerRef } = props;
                const c = ge(children);
                if (selectionStart === selectionEnd) {
                    e = fe(value, c, selectionStart, "START");
                }
                const f = [];
                const d = {};
                let p = f;
                let h = 0;
                se(value, c, (e, n, r, o, i, a, l)=>{
                    const u = ((e, t)=>{
                        if (e.hasOwnProperty(t)) {
                            e[t]++;
                        } else {
                            e[t] = 0;
                        }
                        return `${t}_${e[t]}`;
                    })(d, o);
                    p.push(_this.getMentionComponentForMatch(o, i, a, u));
                }, function(n, r, o) {
                    if (we(e) && e >= r && e <= r + n.length) {
                        const i = e - r;
                        p.push(_this.renderSubstring(n.substring(0, i), h));
                        p = [
                            _this.renderSubstring(n.substring(i), h)
                        ];
                    } else {
                        p.push(_this.renderSubstring(n, h));
                    }
                    h++;
                });
                p.push(" ");
                if (p !== f) {
                    f.push(this.renderHighlighterCaret(p));
                }
                return <div {...style} ref={containerRef}>{f}</div>;
            }
        },
        {
            key: "renderSubstring",
            value: function(e, t) {
                return <span {...this.props.style("substring")} key={t}>{e}</span>;
            }
        },
        {
            key: "getMentionComponentForMatch",
            value: function(e, t, n, r) {
                const o = {
                    id: e,
                    display: t,
                    key: r
                };
                const i = Children.toArray(this.props.children)[n];
                return cloneElement(i, o);
            }
        },
        {
            key: "renderHighlighterCaret",
            value: function(e) {
                return <span {...this.props.style("caret")} ref={this.setCaretElement} key="caret">{e}</span>;
            }
        }
    ]);
    return t;
})(Component);
Ee.propTypes = {
    selectionStart: module1.number,
    selectionEnd: module1.number,
    value: module1.string.isRequired,
    onCaretPositionChange: module1.func.isRequired,
    containerRef: module1.oneOfType([
        module1.func,
        module1.shape({
            current: typeof Element === "undefined" ? module1.any : module1.instanceOf(Element)
        })
    ]),
    children: module1.oneOfType([
        module1.element,
        module1.arrayOf(module1.element)
    ]).isRequired
};
Ee.defaultProps = {
    value: ""
};
const Me = Oe({
    position: "relative",
    boxSizing: "border-box",
    width: "100%",
    color: "transparent",
    overflow: "hidden",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    border: "1px solid transparent",
    textAlign: "start",
    "&singleLine": {
        whiteSpace: "pre",
        wordWrap: null
    },
    substring: {
        visibility: "hidden"
    }
}, function(e) {
    return {
        "&singleLine": e.singleLine
    };
})(Ee);
const Se = ((Component_1)=>{
    function t() {
        i(this, t);
        return f(this, d(t).apply(this, arguments));
    }
    h(t, Component_1);
    l(t, [
        {
            key: "render",
            value: function() {
                const e = Ce(this.props, [
                    "style",
                    "classNames",
                    "className"
                ], _e(t.propTypes));
                return <li {...e} {...this.props.style}>{this.renderContent()}</li>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                const props = this.props;
                const { query, renderSuggestion, suggestion, index, focused } = props;
                const a = this.getDisplay();
                const l = this.renderHighlightedDisplay(a, query);
                if (renderSuggestion) {
                    return renderSuggestion(suggestion, query, l, index, focused);
                }
                return l;
            }
        },
        {
            key: "getDisplay",
            value: function() {
                const suggestion = this.props.suggestion;
                if (suggestion instanceof String) {
                    return suggestion;
                }
                const { id, display } = suggestion;
                if (id !== undefined && display) {
                    return display;
                }
                return id;
            }
        },
        {
            key: "renderHighlightedDisplay",
            value: function(e) {
                const props = this.props;
                const { ignoreAccents, query, style } = props;
                const i = xe(e, query, ignoreAccents);
                if (i === -1) {
                    return <span {...style("display")}>{e}</span>;
                }
                return <span {...style("display")}>{e.substring(0, i)}<b {...style("highlight")}>{e.substring(i, i + query.length)}</b>{e.substring(i + query.length)}</span>;
            }
        }
    ]);
    return t;
})(Component);
Se.propTypes = {
    id: module1.oneOfType([
        module1.string,
        module1.number
    ]).isRequired,
    query: module1.string.isRequired,
    index: module1.number.isRequired,
    ignoreAccents: module1.bool,
    suggestion: module1.oneOfType([
        module1.string,
        module1.shape({
            id: module1.oneOfType([
                module1.string,
                module1.number
            ]).isRequired,
            display: module1.string
        })
    ]).isRequired,
    renderSuggestion: module1.func,
    focused: module1.bool
};
const Ae = Oe({
    cursor: "pointer"
}, function(e) {
    return {
        "&focused": e.focused
    };
})(Se);
function KeComponent() {
    const e = useQ();
    const t = e("spinner");
    return <div {...e}><div {...t}><div {...t([
        "element",
        "element1"
    ])}/><div {...t([
        "element",
        "element2"
    ])}/><div {...t([
        "element",
        "element3"
    ])}/><div {...t([
        "element",
        "element4"
    ])}/><div {...t([
        "element",
        "element5"
    ])}/></div></div>;
}
const je = ((Component_1)=>{
    function t(...o) {
        let n;
        i(this, t);
        c(n = f(this, d(t).call(this, ...o))).handleMouseEnter = function(e, t) {
            if (n.props.onMouseEnter) {
                n.props.onMouseEnter(e);
            }
        };
        c(n).select = function(e, t) {
            n.props.onSelect(e, t);
        };
        c(n).setUlElement = function(e) {
            n.ulElement = e;
        };
        return n;
    }
    h(t, Component_1);
    l(t, [
        {
            key: "componentDidUpdate",
            value: function() {
                if (this.ulElement && !(this.ulElement.offsetHeight >= this.ulElement.scrollHeight) && this.props.scrollFocusedIntoView) {
                    const e = this.ulElement.scrollTop;
                    const t = this.ulElement.children[this.props.focusIndex].getBoundingClientRect();
                    let n = t.top;
                    let r = t.bottom;
                    const o = this.ulElement.getBoundingClientRect().top;
                    r = r - o + e;
                    if ((n = n - o + e) < e) {
                        this.ulElement.scrollTop = n;
                    } else if (r > this.ulElement.offsetHeight) {
                        this.ulElement.scrollTop = r - this.ulElement.offsetHeight;
                    }
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { suggestions, isLoading, style, onMouseDown, containerRef, position, left, top } = props;
                if (he(suggestions) !== 0 || isLoading) {
                    return <div {...((...t_1)=>t_1.reduce((acc, item)=>({
                                ...acc,
                                ...typeof item === "function" ? item : {},
                                style: {
                                    ...acc.style,
                                    ...typeof item === "function" ? item.style : item
                                }
                            }), {}))({
                        position: position || "absolute",
                        left,
                        top
                    }, style)} onMouseDown={onMouseDown} ref={containerRef}><ul ref={this.setUlElement} {...style("list")}>{this.renderSuggestions()}</ul>{this.renderLoadingIndicator()}</div>;
                }
                return null;
            }
        },
        {
            key: "renderSuggestions",
            value: function() {
                const _this = this;
                return Object.values(this.props.suggestions).reduce((acc, { results, queryInfo })=>[
                        ...acc,
                        ...results.map((n, r)=>_this.renderSuggestion(n, queryInfo, acc.length + r))
                    ], []);
            }
        },
        {
            key: "renderSuggestion",
            value: function(suggestion, t, index) {
                const _this = this;
                const o = Te(suggestion);
                const focused = index === this.props.focusIndex;
                const { childIndex, query } = t;
                const renderSuggestion = Children.toArray(this.props.children)[childIndex].props.renderSuggestion;
                const ignoreAccents = this.props.ignoreAccents;
                return <Ae style={this.props.style("item")} key={`${childIndex}-${o}`} id={o} query={query} index={index} ignoreAccents={ignoreAccents} renderSuggestion={renderSuggestion} suggestion={suggestion} focused={focused} onClick={function() {
                    return _this.select(suggestion, t);
                }} onMouseEnter={function() {
                    return _this.handleMouseEnter(index);
                }}/>;
            }
        },
        {
            key: "renderLoadingIndicator",
            value: function() {
                if (this.props.isLoading) {
                    return <KeComponent style={this.props.style("loadingIndicator")}/>;
                }
            }
        }
    ]);
    return t;
})(Component);
je.propTypes = {
    suggestions: module1.object.isRequired,
    focusIndex: module1.number,
    position: module1.string,
    left: module1.number,
    top: module1.number,
    scrollFocusedIntoView: module1.bool,
    isLoading: module1.bool,
    onSelect: module1.func,
    ignoreAccents: module1.bool,
    containerRef: module1.oneOfType([
        module1.func,
        module1.shape({
            current: typeof Element === "undefined" ? module1.any : module1.instanceOf(Element)
        })
    ]),
    children: module1.oneOfType([
        module1.element,
        module1.arrayOf(module1.element)
    ]).isRequired
};
je.defaultProps = {
    suggestions: {},
    onSelect: function() {
        return null;
    }
};
var Te = (suggestion)=>{
    if (suggestion instanceof String) {
        return suggestion;
    }
    return suggestion.id;
};
const Pe = Oe({
    zIndex: 1,
    backgroundColor: "white",
    marginTop: 14,
    minWidth: 100,
    list: {
        margin: 0,
        padding: 0,
        listStyleType: "none"
    }
})(je);
const Ne = {
    TAB: 9,
    RETURN: 13,
    ESC: 27,
    UP: 38,
    DOWN: 40
};
let De = false;
const Ie = {
    singleLine: module1.bool,
    allowSpaceInQuery: module1.bool,
    allowSuggestionsAboveCursor: module1.bool,
    ignoreAccents: module1.bool,
    value: module1.string,
    onKeyDown: module1.func,
    onSelect: module1.func,
    onBlur: module1.func,
    onChange: module1.func,
    suggestionsPortalHost: typeof Element === "undefined" ? module1.any : module1.PropTypes.instanceOf(Element),
    inputRef: module1.oneOfType([
        module1.func,
        module1.shape({
            current: typeof Element === "undefined" ? module1.any : module1.instanceOf(Element)
        })
    ]),
    children: module1.oneOfType([
        module1.element,
        module1.arrayOf(module1.element)
    ]).isRequired
};
const Re = ((Component_1)=>{
    function t(e) {
        let n;
        i(this, t);
        c(n = f(this, d(t).call(this, e))).setContainerElement = function(e) {
            n.containerElement = e;
        };
        c(n).getInputProps = function() {
            const n_props = n.props;
            const { readOnly, disabled, style } = n_props;
            return {
                ...Ce(n.props, [
                    "style",
                    "classNames",
                    "className"
                ], _e(Ie)),
                ...style("input"),
                value: n.getPlainText(),
                ...!readOnly && !disabled && {
                    onChange: n.handleChange,
                    onSelect: n.handleSelect,
                    onKeyDown: n.handleKeyDown,
                    onBlur: n.handleBlur,
                    onCompositionStart: n.handleCompositionStart,
                    onCompositionEnd: n.handleCompositionEnd,
                    onScroll: n.updateHighlighterScroll
                }
            };
        };
        c(n).renderControl = function() {
            const n_props = n.props;
            const { singleLine, style } = n_props;
            const o = n.getInputProps();
            return <div {...style("control")}>{n.renderHighlighter()}{singleLine ? n.renderInput(o) : n.renderTextarea(o)}</div>;
        };
        c(n).renderInput = function(e) {
            return <input type="text" ref={n.setInputRef} {...e}/>;
        };
        c(n).renderTextarea = function(e) {
            return <textarea ref={n.setInputRef} {...e}/>;
        };
        c(n).setInputRef = function(e) {
            n.inputElement = e;
            const inputRef = n.props.inputRef;
            if (typeof inputRef === "function") {
                inputRef(e);
            } else if (inputRef) {
                inputRef.current = e;
            }
        };
        c(n).setSuggestionsElement = function(e) {
            n.suggestionsElement = e;
        };
        c(n).renderSuggestionsOverlay = function() {
            if (!we(n.state.selectionStart)) {
                return null;
            }
            const suggestionsPosition = n.state.suggestionsPosition;
            const { position, left, top } = suggestionsPosition;
            const i = <Pe style={n.props.style("suggestions")} position={position} left={left} top={top} focusIndex={n.state.focusIndex} scrollFocusedIntoView={n.state.scrollFocusedIntoView} containerRef={n.setSuggestionsElement} suggestions={n.state.suggestions} onSelect={n.addMention} onMouseDown={n.handleSuggestionsMouseDown} onMouseEnter={n.handleSuggestionsMouseEnter} isLoading={n.isLoading()} ignoreAccents={n.props.ignoreAccents}>{n.props.children}</Pe>;
            if (n.props.suggestionsPortalHost) {
                return module106.createPortal(i, n.props.suggestionsPortalHost);
            }
            return i;
        };
        c(n).renderHighlighter = function() {
            const n_state = n.state;
            const { selectionStart, selectionEnd } = n_state;
            const n_props = n.props;
            const { singleLine, children, value, style } = n_props;
            return <Me containerRef={n.setHighlighterElement} style={style("highlighter")} value={value} singleLine={singleLine} selectionStart={selectionStart} selectionEnd={selectionEnd} onCaretPositionChange={n.handleCaretPositionChange}>{children}</Me>;
        };
        c(n).setHighlighterElement = function(e) {
            n.highlighterElement = e;
        };
        c(n).handleCaretPositionChange = function(caretPosition) {
            n.setState({
                caretPosition
            });
        };
        c(n).getPlainText = function() {
            return ce(n.props.value || "", ge(n.props.children));
        };
        c(n).executeOnChange = function(e, ...r) {
            if (n.props.onChange) {
                return n.props.onChange(e, ...r);
            }
            if (n.props.valueLink) {
                return n.props.valueLink.requestChange(e.target.value, ...r);
            }
        };
        c(n).handleChange = function(e) {
            De = false;
            if ((document.activeElement && document.activeElement.contentDocument || document).activeElement === e.target) {
                const t = n.props.value || "";
                const r = ge(n.props.children);
                let o = e.target.value;
                const i = ((e, t, { selectionStartBefore, selectionEndBefore, selectionEndAfter }, r)=>{
                    const l = ce(e, r);
                    const u = l.length - t.length;
                    if (selectionStartBefore === "undefined") {
                        selectionStartBefore = selectionEndAfter + u;
                    }
                    if (selectionEndBefore === "undefined") {
                        selectionEndBefore = selectionStartBefore;
                    }
                    if (selectionStartBefore === selectionEndBefore && selectionEndBefore === selectionEndAfter && l.length === t.length) {
                        selectionStartBefore -= 1;
                    }
                    let s = t.slice(selectionStartBefore, selectionEndAfter);
                    let c = Math.min(selectionStartBefore, selectionEndAfter);
                    let f = selectionEndBefore;
                    if (selectionStartBefore === selectionEndAfter) {
                        f = Math.max(selectionEndBefore, selectionStartBefore + u);
                    }
                    let d = fe(e, r, c, "START");
                    let p = fe(e, r, f, "END");
                    const h = fe(e, r, c, "NULL");
                    const v = fe(e, r, f, "NULL");
                    const g = h === null || v === null;
                    let y = de(e, d, p, s);
                    if (!g) {
                        const m = ce(y, r);
                        if (m !== t) {
                            for(c = 0; t[c] === m[c];){
                                c++;
                            }
                            s = t.slice(c, selectionEndAfter);
                            f = l.lastIndexOf(t.substring(selectionEndAfter));
                            d = fe(e, r, c, "START");
                            p = fe(e, r, f, "END");
                            y = de(e, d, p, s);
                        }
                    }
                    return y;
                })(t, o, {
                    selectionStartBefore: n.state.selectionStart,
                    selectionEndBefore: n.state.selectionEnd,
                    selectionEndAfter: e.target.selectionEnd
                }, r);
                o = ce(i, r);
                let selectionStart = e.target.selectionStart;
                let selectionEnd = e.target.selectionEnd;
                let setSelectionAfterMentionChange = false;
                const s = ((e, t, selectionStart_1)=>{
                    let r = selectionStart_1;
                    let o = false;
                    se(e, t, (e, t, i, a, l, u, s)=>{
                        if (i <= selectionStart_1 && i + l.length > selectionStart_1) {
                            r = i;
                            o = true;
                        }
                    });
                    if (o) {
                        return r;
                    }
                })(t, r, selectionStart);
                if (s !== undefined && n.state.selectionEnd > s) {
                    selectionStart = s;
                    selectionEnd = s;
                    setSelectionAfterMentionChange = true;
                }
                n.setState({
                    selectionStart,
                    selectionEnd,
                    setSelectionAfterMentionChange
                });
                const c = pe(i, r);
                const f = {
                    target: {
                        value: i
                    }
                };
                n.executeOnChange(f, i, o, c);
            }
        };
        c(n).handleSelect = function(e) {
            n.setState({
                selectionStart: e.target.selectionStart,
                selectionEnd: e.target.selectionEnd
            });
            if (!De) {
                const t = n.inputElement;
                if (e.target.selectionStart === e.target.selectionEnd) {
                    n.updateMentionsQueries(t.value, e.target.selectionStart);
                } else {
                    n.clearSuggestions();
                }
                n.updateHighlighterScroll();
                n.props.onSelect(e);
            }
        };
        c(n).handleKeyDown = function(e) {
            if (he(n.state.suggestions) !== 0 && n.suggestionsElement) {
                if (Object.values(Ne).indexOf(e.keyCode) >= 0) {
                    e.preventDefault();
                }
                switch(e.keyCode){
                    case Ne.ESC:
                        return void n.clearSuggestions();
                    case Ne.DOWN:
                        return void n.shiftFocus(1);
                    case Ne.UP:
                        return void n.shiftFocus(-1);
                    case Ne.RETURN:
                    case Ne.TAB:
                        return void n.selectFocused();
                    default:
                        return;
                }
            } else {
                n.props.onKeyDown(e);
            }
        };
        c(n).shiftFocus = function(e) {
            const t = he(n.state.suggestions);
            n.setState({
                focusIndex: (t + n.state.focusIndex + e) % t,
                scrollFocusedIntoView: true
            });
        };
        c(n).selectFocused = function() {
            const n_state = n.state;
            const { suggestions, focusIndex } = n_state;
            const i = Object.values(suggestions).reduce((acc, { results, queryInfo })=>[
                    ...acc,
                    ...results.map((result_1)=>({
                            result: result_1,
                            queryInfo
                        }))
                ], [])[focusIndex];
            const { result, queryInfo } = i;
            n.addMention(result, queryInfo);
            n.setState({
                focusIndex: 0
            });
        };
        c(n).handleBlur = function(e) {
            const n__suggestionsMouseDown = n._suggestionsMouseDown;
            n._suggestionsMouseDown = false;
            if (!n__suggestionsMouseDown) {
                n.setState({
                    selectionStart: null,
                    selectionEnd: null
                });
            }
            window.setTimeout(function() {
                n.updateHighlighterScroll();
            }, 1);
            n.props.onBlur(e, n__suggestionsMouseDown);
        };
        c(n).handleSuggestionsMouseDown = function(e) {
            n._suggestionsMouseDown = true;
        };
        c(n).handleSuggestionsMouseEnter = function(focusIndex) {
            n.setState({
                focusIndex,
                scrollFocusedIntoView: false
            });
        };
        c(n).updateSuggestionsPosition = function() {
            const caretPosition = n.state.caretPosition;
            const n_props = n.props;
            const { suggestionsPortalHost, allowSuggestionsAboveCursor } = n_props;
            if (caretPosition && n.suggestionsElement) {
                const { suggestionsElement, highlighterElement } = n;
                const l = highlighterElement.getBoundingClientRect();
                const u = He(highlighterElement, "font-size");
                const s = {
                    left: l.left + caretPosition.left,
                    top: l.top + caretPosition.top + u
                };
                const c = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                if (suggestionsElement) {
                    const suggestionsPosition = {};
                    if (suggestionsPortalHost) {
                        suggestionsPosition.position = "fixed";
                        let d = s.left;
                        let p = s.top;
                        d -= He(suggestionsElement, "margin-left");
                        p -= He(suggestionsElement, "margin-top");
                        d -= highlighterElement.scrollLeft;
                        p -= highlighterElement.scrollTop;
                        const h = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                        if (d + suggestionsElement.offsetWidth > h) {
                            suggestionsPosition.left = Math.max(0, h - suggestionsElement.offsetWidth);
                        } else {
                            suggestionsPosition.left = d;
                        }
                        if (allowSuggestionsAboveCursor && p + suggestionsElement.offsetHeight > c && suggestionsElement.offsetHeight < p - u) {
                            suggestionsPosition.top = Math.max(0, p - suggestionsElement.offsetHeight - u);
                        } else {
                            suggestionsPosition.top = p;
                        }
                    } else {
                        const v = caretPosition.left - highlighterElement.scrollLeft;
                        const g = caretPosition.top - highlighterElement.scrollTop;
                        if (v + suggestionsElement.offsetWidth > n.containerElement.offsetWidth) {
                            suggestionsPosition.right = 0;
                        } else {
                            suggestionsPosition.left = v;
                        }
                        if (allowSuggestionsAboveCursor && s.top - highlighterElement.scrollTop + suggestionsElement.offsetHeight > c && suggestionsElement.offsetHeight < l.top - u - highlighterElement.scrollTop) {
                            suggestionsPosition.top = g - suggestionsElement.offsetHeight - u;
                        } else {
                            suggestionsPosition.top = g;
                        }
                    }
                    if (!(suggestionsPosition.left === n.state.suggestionsPosition.left && suggestionsPosition.top === n.state.suggestionsPosition.top && suggestionsPosition.position === n.state.suggestionsPosition.position)) {
                        n.setState({
                            suggestionsPosition
                        });
                    }
                }
            }
        };
        c(n).updateHighlighterScroll = function() {
            const { inputElement, highlighterElement } = n;
            if (inputElement && highlighterElement) {
                highlighterElement.scrollLeft = inputElement.scrollLeft;
                highlighterElement.scrollTop = inputElement.scrollTop;
                highlighterElement.height = inputElement.height;
            }
        };
        c(n).handleCompositionStart = function() {
            De = true;
        };
        c(n).handleCompositionEnd = function() {
            De = false;
        };
        c(n).setSelection = function(e, t) {
            if (e !== null && t !== null) {
                const r = n.inputElement;
                if (r.setSelectionRange) {
                    r.setSelectionRange(e, t);
                } else if (r.createTextRange) {
                    const o = r.createTextRange();
                    o.collapse(true);
                    o.moveEnd("character", t);
                    o.moveStart("character", e);
                    o.select();
                }
            }
        };
        c(n).updateMentionsQueries = function(e, t) {
            n._queryId++;
            n.suggestions = {};
            n.setState({
                suggestions: {}
            });
            const r = n.props.value || "";
            const children = n.props.children;
            const i = ge(children);
            const a = fe(r, i, t, "NULL");
            if (a !== null) {
                const l = ((e, t)=>{
                    const n = pe(e, t);
                    const r = n[n.length - 1];
                    if (r) {
                        return r.plainTextIndex + r.display.length;
                    }
                    return 0;
                })(r.substring(0, a), i);
                const u = e.substring(l, t);
                Children.forEach(children, function(t, r) {
                    if (t) {
                        const o = ((e, t = {})=>{
                            if (e instanceof RegExp) {
                                return e;
                            }
                            const t_allowSpaceInQuery = t.allowSpaceInQuery;
                            const r = ne(e);
                            return new RegExp(`(?:^|\\s)(${r}([^${t_allowSpaceInQuery ? "" : "\\s"}${r}]*))\$`);
                        })(t.props.trigger, n.props);
                        const i = u.match(o);
                        if (i) {
                            const a = l + u.indexOf(i[1], i.index);
                            n.queryData(i[2], r, a, a + i[1].length, e);
                        }
                    }
                });
            }
        };
        c(n).clearSuggestions = function() {
            n._queryId++;
            n.suggestions = {};
            n.setState({
                suggestions: {},
                focusIndex: 0
            });
        };
        c(n).queryData = function(e, t, r, o, i) {
            const n_props = n.props;
            const { children, ignoreAccents } = n_props;
            const s = ((e, ignoreAccents_1)=>{
                if (e instanceof Array) {
                    return function(n, r) {
                        const o = [];
                        for(let i = 0, a = e.length; i < a; ++i){
                            const l = e[i].display || e[i].id;
                            if (xe(l, n, ignoreAccents_1) >= 0) {
                                o.push(e[i]);
                            }
                        }
                        return o;
                    };
                }
                return e;
            })(Children.toArray(children)[t].props.data, ignoreAccents)(e, n.updateSuggestions.bind(null, n._queryId, t, e, r, o, i));
            if (s instanceof Array) {
                n.updateSuggestions(n._queryId, t, e, r, o, i, s);
            }
        };
        c(n).updateSuggestions = function(e, childIndex, query, querySequenceStart, querySequenceEnd, plainTextValue, results) {
            if (e === n._queryId) {
                n.suggestions = {
                    ...n.suggestions,
                    ...{
                        [childIndex]: {
                            queryInfo: {
                                childIndex,
                                query,
                                querySequenceStart,
                                querySequenceEnd,
                                plainTextValue
                            },
                            results
                        }
                    }
                };
                const u = n.state.focusIndex;
                const s = he(n.suggestions);
                n.setState({
                    suggestions: n.suggestions,
                    focusIndex: u >= s ? Math.max(s - 1, 0) : u
                });
            }
        };
        c(n).addMention = function({ id, display }, { childIndex, querySequenceStart, querySequenceEnd, plainTextValue }) {
            const s = n.props.value || "";
            const c = ge(n.props.children);
            const props = Children.toArray(n.props.children)[childIndex].props;
            const { markup, displayTransform, appendSpaceOnAdd, onAdd } = props;
            const y = fe(s, c, querySequenceStart, "START");
            const m = y + querySequenceEnd - querySequenceStart;
            let b = ((e, t, n)=>e.replace(re, t).replace(oe, n))(markup, id, display);
            if (appendSpaceOnAdd) {
                b += " ";
            }
            const x = de(s, y, m, b);
            n.inputElement.focus();
            let w = displayTransform(id, display);
            if (appendSpaceOnAdd) {
                w += " ";
            }
            const _ = querySequenceStart + w.length;
            n.setState({
                selectionStart: _,
                selectionEnd: _,
                setSelectionAfterMentionChange: true
            });
            const C = {
                target: {
                    value: x
                }
            };
            const O = pe(x, c);
            const E = de(plainTextValue, querySequenceStart, querySequenceEnd, w);
            n.executeOnChange(C, x, E, O);
            if (onAdd) {
                onAdd(id, display);
            }
            n.clearSuggestions();
        };
        c(n).isLoading = function() {
            let e = false;
            Children.forEach(n.props.children, function(t) {
                e = e || t && t.props.isLoading;
            });
            return e;
        };
        c(n)._queryId = 0;
        n.suggestions = {};
        n.handleCopy = n.handleCopy.bind(c(n));
        n.handleCut = n.handleCut.bind(c(n));
        n.handlePaste = n.handlePaste.bind(c(n));
        n.state = {
            focusIndex: 0,
            selectionStart: null,
            selectionEnd: null,
            suggestions: {},
            caretPosition: null,
            suggestionsPosition: {}
        };
        return n;
    }
    h(t, Component_1);
    l(t, [
        {
            key: "componentDidMount",
            value: function() {
                document.addEventListener("copy", this.handleCopy);
                document.addEventListener("cut", this.handleCut);
                document.addEventListener("paste", this.handlePaste);
                this.updateSuggestionsPosition();
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e, t) {
                if (t.suggestionsPosition === this.state.suggestionsPosition) {
                    this.updateSuggestionsPosition();
                }
                if (this.state.setSelectionAfterMentionChange) {
                    this.setState({
                        setSelectionAfterMentionChange: false
                    });
                    this.setSelection(this.state.selectionStart, this.state.selectionEnd);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                document.removeEventListener("copy", this.handleCopy);
                document.removeEventListener("cut", this.handleCut);
                document.removeEventListener("paste", this.handlePaste);
            }
        },
        {
            key: "render",
            value: function() {
                return <div ref={this.setContainerElement} {...this.props.style}>{this.renderControl()}{this.renderSuggestionsOverlay()}</div>;
            }
        },
        {
            key: "handlePaste",
            value: function(e) {
                if (e.target === this.inputElement && this.supportsClipboardActions(e)) {
                    e.preventDefault();
                    const t = this.state;
                    const { selectionStart, selectionEnd } = t;
                    const o = this.props;
                    const { value, children } = o;
                    const l = ge(children);
                    const u = fe(value, l, selectionStart, "START");
                    const s = fe(value, l, selectionEnd, "END");
                    const c = e.clipboardData.getData("text/react-mentions");
                    const f = e.clipboardData.getData("text/plain");
                    const d = de(value, u, s, c || f).replace(/\r/g, "");
                    const p = ce(d, l);
                    const h = {
                        target: {
                            ...e.target,
                            value: d
                        }
                    };
                    this.executeOnChange(h, d, p, pe(d, l));
                }
            }
        },
        {
            key: "saveSelectionToClipboard",
            value: function(e) {
                const state = this.state;
                const { selectionStart, selectionEnd } = state;
                const props = this.props;
                const { children, value } = props;
                const l = ge(children);
                const u = fe(value, l, selectionStart, "START");
                const s = fe(value, l, selectionEnd, "END");
                e.clipboardData.setData("text/plain", e.target.value.slice(selectionStart, selectionEnd));
                e.clipboardData.setData("text/react-mentions", value.slice(u, s));
            }
        },
        {
            key: "supportsClipboardActions",
            value: function(e) {
                return !!e.clipboardData;
            }
        },
        {
            key: "handleCopy",
            value: function(e) {
                if (e.target === this.inputElement && this.supportsClipboardActions(e)) {
                    e.preventDefault();
                    this.saveSelectionToClipboard(e);
                }
            }
        },
        {
            key: "handleCut",
            value: function(e) {
                if (e.target === this.inputElement && this.supportsClipboardActions(e)) {
                    e.preventDefault();
                    this.saveSelectionToClipboard(e);
                    const t = this.state;
                    const { selectionStart, selectionEnd } = t;
                    const o = this.props;
                    const { children, value } = o;
                    const l = ge(children);
                    const u = fe(value, l, selectionStart, "START");
                    const s = fe(value, l, selectionEnd, "END");
                    const c = [
                        value.slice(0, u),
                        value.slice(s)
                    ].join("");
                    const f = ce(c, l);
                    const d = {
                        target: {
                            ...e.target,
                            value: f
                        }
                    };
                    this.executeOnChange(d, c, f, pe(value, l));
                }
            }
        }
    ]);
    return t;
})(Component);
Re.propTypes = Ie;
Re.defaultProps = {
    ignoreAccents: false,
    singleLine: false,
    allowSuggestionsAboveCursor: false,
    onKeyDown: function() {
        return null;
    },
    onSelect: function() {
        return null;
    },
    onBlur: function() {
        return null;
    }
};
var He = (e, t)=>{
    const n = parseFloat(window.getComputedStyle(e, null).getPropertyValue(t));
    if (isFinite(n)) {
        return n;
    }
    return 0;
};
export const MentionsInput = Oe({
    position: "relative",
    overflowY: "visible",
    input: {
        display: "block",
        width: "100%",
        position: "absolute",
        margin: 0,
        top: 0,
        left: 0,
        boxSizing: "border-box",
        backgroundColor: "transparent",
        fontFamily: "inherit",
        fontSize: "inherit",
        letterSpacing: "inherit"
    },
    "&multiLine": {
        input: {
            height: "100%",
            bottom: 0,
            overflow: "hidden",
            resize: "none",
            ...typeof navigator !== "undefined" && /iPhone|iPad|iPod/i.test(navigator.userAgent) ? {
                marginTop: 1,
                marginLeft: -3
            } : null
        }
    }
}, function({ singleLine }) {
    return {
        "&singleLine": singleLine,
        "&multiLine": !singleLine
    };
})(Re);
const Fe = {
    fontWeight: "inherit"
};
export const Mention = function({ display, style, className, classNames }) {
    const i = useQ(Fe, {
        style,
        className,
        classNames
    });
    return <strong {...i}>{display}</strong>;
};
Mention.propTypes = {
    onAdd: module1.func,
    onRemove: module1.func,
    renderSuggestion: module1.func,
    trigger: module1.oneOfType([
        module1.string,
        module1.instanceOf(RegExp)
    ]),
    markup: module1.string,
    displayTransform: module1.func,
    allowSpaceInQuery: module1.bool,
    isLoading: module1.bool
};
Mention.defaultProps = {
    trigger: "@",
    markup: "@[__display__](__id__)",
    displayTransform: function(e, t) {
        return t || e;
    },
    onAdd: function() {
        return null;
    },
    onRemove: function() {
        return null;
    },
    renderSuggestion: null,
    isLoading: false,
    appendSpaceOnAdd: false
};
