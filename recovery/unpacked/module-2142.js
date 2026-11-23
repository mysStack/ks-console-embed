import module2143 from "./module-2143.js";
function o(e, t) {
    for(let n = 0; n < e.length; n++){
        e[n] += t;
    }
    return e;
}
const i = [
    "sin",
    "cos",
    "tan",
    "pi",
    "(",
    ")",
    "P",
    "C",
    "asin",
    "acos",
    "atan",
    "7",
    "8",
    "9",
    "int",
    "cosh",
    "acosh",
    "ln",
    "^",
    "root",
    "4",
    "5",
    "6",
    "/",
    "!",
    "tanh",
    "atanh",
    "Mod",
    "1",
    "2",
    "3",
    "*",
    "sinh",
    "asinh",
    "e",
    "log",
    "0",
    ".",
    "+",
    "-",
    ",",
    "Sigma",
    "n",
    "Pi",
    "pow"
];
const a = [
    "sin",
    "cos",
    "tan",
    "&pi;",
    "(",
    ")",
    "P",
    "C",
    "asin",
    "acos",
    "atan",
    "7",
    "8",
    "9",
    "Int",
    "cosh",
    "acosh",
    " ln",
    "^",
    "root",
    "4",
    "5",
    "6",
    "&divide;",
    "!",
    "tanh",
    "atanh",
    " Mod ",
    "1",
    "2",
    "3",
    "&times;",
    "sinh",
    "asinh",
    "e",
    " log",
    "0",
    ".",
    "+",
    "-",
    ",",
    "&Sigma;",
    "n",
    "&Pi;",
    "pow"
];
const l = [
    module2143.math.sin,
    module2143.math.cos,
    module2143.math.tan,
    "PI",
    "(",
    ")",
    module2143.math.P,
    module2143.math.C,
    module2143.math.asin,
    module2143.math.acos,
    module2143.math.atan,
    "7",
    "8",
    "9",
    Math.floor,
    module2143.math.cosh,
    module2143.math.acosh,
    Math.log,
    Math.pow,
    Math.sqrt,
    "4",
    "5",
    "6",
    module2143.math.div,
    module2143.math.fact,
    module2143.math.tanh,
    module2143.math.atanh,
    module2143.math.mod,
    "1",
    "2",
    "3",
    module2143.math.mul,
    module2143.math.sinh,
    module2143.math.asinh,
    "E",
    module2143.math.log,
    "0",
    ".",
    module2143.math.add,
    module2143.math.sub,
    ",",
    module2143.math.sigma,
    "n",
    module2143.math.Pi,
    Math.pow
];
const u = {
    0: 11,
    1: 0,
    2: 3,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 11,
    8: 11,
    9: 1,
    10: 10,
    11: 0,
    12: 11,
    13: 0
};
const s = [
    0,
    0,
    0,
    3,
    4,
    5,
    10,
    10,
    0,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    10,
    0,
    1,
    1,
    1,
    2,
    7,
    0,
    0,
    2,
    1,
    1,
    1,
    2,
    0,
    0,
    3,
    0,
    1,
    6,
    9,
    9,
    11,
    12,
    13,
    12,
    8
];
const c = {
    0: true,
    1: true,
    3: true,
    4: true,
    6: true,
    8: true,
    9: true,
    12: true,
    13: true
};
const f = {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true
};
const d = {
    0: true,
    3: true,
    4: true,
    8: true,
    12: true,
    13: true
};
const p = {};
const h = {
    0: true,
    1: true,
    3: true,
    4: true,
    6: true,
    8: true,
    12: true,
    13: true
};
const v = {
    1: true
};
const g = [
    [],
    [
        "1",
        "2",
        "3",
        "7",
        "8",
        "9",
        "4",
        "5",
        "6",
        "+",
        "-",
        "*",
        "/",
        "(",
        ")",
        "^",
        "!",
        "P",
        "C",
        "e",
        "0",
        ".",
        ",",
        "n"
    ],
    [
        "pi",
        "ln",
        "Pi"
    ],
    [
        "sin",
        "cos",
        "tan",
        "Del",
        "int",
        "Mod",
        "log",
        "pow"
    ],
    [
        "asin",
        "acos",
        "atan",
        "cosh",
        "root",
        "tanh",
        "sinh"
    ],
    [
        "acosh",
        "atanh",
        "asinh",
        "Sigma"
    ]
];
function y(e, t, n, r) {
    for(let o = 0; o < r; o++){
        if (e[n + o] !== t[o]) {
            return false;
        }
    }
    return true;
}
module2143.addToken = function(e) {
    for(let t = 0; t < e.length; t++){
        const n = e[t].token.length;
        let r = -1;
        if (n < g.length) {
            for(let o = 0; o < g[n].length; o++){
                if (e[t].token === g[n][o]) {
                    r = i.indexOf(g[n][o]);
                    break;
                }
            }
        }
        if (r === -1) {
            i.push(e[t].token);
            s.push(e[t].type);
            if (g.length <= e[t].token.length) {
                g[e[t].token.length] = [];
            }
            g[e[t].token.length].push(e[t].token);
            l.push(e[t].value);
            a.push(e[t].show);
        } else {
            i[r] = e[t].token;
            s[r] = e[t].type;
            l[r] = e[t].value;
            a[r] = e[t].show;
        }
    }
};
module2143.lex = function(e, t) {
    "use strict";
    let n;
    let m;
    let b;
    let x;
    const w = {
        value: module2143.math.changeSign,
        type: 0,
        pre: 21,
        show: "-"
    };
    const _ = {
        value: ")",
        show: ")",
        type: 5,
        pre: 0
    };
    const C = {
        value: "(",
        type: 4,
        pre: 0,
        show: "("
    };
    const O = [
        C
    ];
    const E = [];
    const M = e;
    let S = c;
    let A = 0;
    let k = p;
    let j = "";
    if (t !== undefined) {
        module2143.addToken(t);
    }
    let T = {};
    for(m = 0; m < M.length; m++){
        if (M[m] !== " ") {
            n = "";
            for(b = M.length - m > g.length - 2 ? g.length - 1 : M.length - m; b > 0; b--){
                if (g[b] !== undefined) {
                    for(x = 0; x < g[b].length; x++){
                        if (y(M, g[b][x], m, b)) {
                            n = g[b][x];
                            x = g[b].length;
                            b = 0;
                        }
                    }
                }
            }
            m += n.length - 1;
            if (n === "") {
                throw new module2143.Exception(`Can't understand after ${M.slice(m)}`);
            }
            var P;
            const L = i.indexOf(n);
            const z = n;
            let N = s[L];
            let D = l[L];
            let pre = u[N];
            let show = a[L];
            let H = O[O.length - 1];
            for(P = E.length; P-- && E[P] === 0;){
                if ([
                    0,
                    2,
                    3,
                    4,
                    5,
                    9,
                    11,
                    12,
                    13
                ].indexOf(N) !== -1) {
                    if (S[N] !== true) {
                        throw new module2143.Exception(`${n} is not allowed after ${j}`);
                    }
                    O.push(_);
                    S = f;
                    k = h;
                    o(E, -1).pop();
                }
            }
            if (S[N] !== true) {
                throw new module2143.Exception(`${n} is not allowed after ${j}`);
            }
            if (k[N] === true) {
                N = 2;
                D = module2143.math.mul;
                show = "&times;";
                pre = 3;
                m -= n.length;
            }
            T = {
                value: D,
                type: N,
                pre,
                show
            };
            if (N === 0) {
                S = c;
                k = p;
                o(E, 2).push(2);
                O.push(T);
                O.push(C);
            } else if (N === 1) {
                if (H.type === 1) {
                    H.value += D;
                    o(E, 1);
                } else {
                    O.push(T);
                }
                S = f;
                k = d;
            } else if (N === 2) {
                S = c;
                k = p;
                o(E, 2);
                O.push(T);
            } else if (N === 3) {
                O.push(T);
                S = f;
                k = h;
            } else if (N === 4) {
                o(E, 1);
                A++;
                S = c;
                k = p;
                O.push(T);
            } else if (N === 5) {
                if (!A) {
                    throw new module2143.Exception("Closing parenthesis are more than opening one, wait What!!!");
                }
                A--;
                S = f;
                k = h;
                O.push(T);
            } else if (N === 6) {
                if (H.hasDec) {
                    throw new module2143.Exception("Two decimals are not allowed in one number");
                }
                if (H.type !== 1) {
                    H = {
                        value: 0,
                        type: 1,
                        pre: 0
                    };
                    O.push(H);
                    o(E, -1);
                }
                S = v;
                o(E, 1);
                k = p;
                H.value += D;
                H.hasDec = true;
            } else {
                if (N === 7) {
                    S = f;
                    k = h;
                    o(E, 1);
                    O.push(T);
                }
            }
            switch(N){
                case 8:
                    S = c;
                    k = p;
                    o(E, 4).push(4);
                    O.push(T);
                    O.push(C);
                    break;
                case 9:
                    if (H.type === 9) {
                        if (H.value === module2143.math.add) {
                            H.value = D;
                            H.show = show;
                            o(E, 1);
                        } else if (H.value === module2143.math.sub && show === "-") {
                            H.value = module2143.math.add;
                            H.show = "+";
                            o(E, 1);
                        }
                    } else if (H.type !== 5 && H.type !== 7 && H.type !== 1 && H.type !== 3 && H.type !== 13) {
                        if (z === "-") {
                            S = c;
                            k = p;
                            o(E, 2).push(2);
                            O.push(w);
                            O.push(C);
                        }
                    } else {
                        O.push(T);
                        o(E, 2);
                    }
                    S = c;
                    k = p;
                    break;
                case 10:
                    S = c;
                    k = p;
                    o(E, 2);
                    O.push(T);
                    break;
                case 11:
                    S = c;
                    k = p;
                    O.push(T);
                    break;
                case 12:
                    S = c;
                    k = p;
                    o(E, 6).push(6);
                    O.push(T);
                    O.push(C);
                    break;
                default:
                    if (N === 13) {
                        S = f;
                        k = h;
                        O.push(T);
                    }
            }
            o(E, -1);
            j = n;
        }
    }
    for(P = E.length; P-- && E[P] === 0;){
        O.push(_);
        o(E, -1).pop();
    }
    if (S[5] !== true) {
        throw new module2143.Exception("complete the expression");
    }
    while(A--){
        O.push(_);
    }
    O.push(_);
    return new module2143(O);
};
export default module2143;
