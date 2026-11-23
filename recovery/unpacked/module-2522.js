import module798 from "./module-798.js";
import { iso7064Check, luhnCheck, reverseMultiplyAndSum, verhoeffCheck } from "./module-1589.js";
import module1582 from "./module-1582.js";
function r(e) {
    return (r = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
(function(e, t = "en-US") {
    module798(e);
    let n = e.slice(0);
    if (t in p) {
        if (t in g) {
            n = n.replace(g[t], "");
        }
        return !!p[t].test(n) && (!(t in h) || h[t](n));
    }
    throw new Error(`Invalid locale '${t}'`);
});
function l() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    l = function() {
        return weakMap;
    };
    return weakMap;
}
const f = {
    andover: [
        "10",
        "12"
    ],
    atlanta: [
        "60",
        "67"
    ],
    austin: [
        "50",
        "53"
    ],
    brookhaven: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "11",
        "13",
        "14",
        "16",
        "21",
        "22",
        "23",
        "25",
        "34",
        "51",
        "52",
        "54",
        "55",
        "56",
        "57",
        "58",
        "59",
        "65"
    ],
    cincinnati: [
        "30",
        "32",
        "35",
        "36",
        "37",
        "38",
        "61"
    ],
    fresno: [
        "15",
        "24"
    ],
    internet: [
        "20",
        "26",
        "27",
        "45",
        "46",
        "47"
    ],
    kansas: [
        "40",
        "44"
    ],
    memphis: [
        "94",
        "95"
    ],
    ogden: [
        "80",
        "90"
    ],
    philadelphia: [
        "33",
        "39",
        "41",
        "42",
        "43",
        "46",
        "48",
        "62",
        "63",
        "64",
        "66",
        "68",
        "71",
        "72",
        "73",
        "74",
        "75",
        "76",
        "77",
        "81",
        "82",
        "83",
        "84",
        "85",
        "86",
        "87",
        "88",
        "91",
        "92",
        "93",
        "98",
        "99"
    ],
    sba: [
        "31"
    ]
};
function d(e) {
    let t = false;
    let n = false;
    for(let r = 0; r < 3; r++){
        if (!t && /[AEIOU]/.test(e[r])) {
            t = true;
        } else if (!n && t && e[r] === "X") {
            n = true;
        } else if (r > 0) {
            if (t && !n && !/[AEIOU]/.test(e[r])) {
                return false;
            }
            if (n && !/X/.test(e[r])) {
                return false;
            }
        }
    }
    return true;
}
var p = {
    "bg-BG": /^\d{10}$/,
    "cs-CZ": /^\d{6}\/{0,1}\d{3,4}$/,
    "de-AT": /^\d{9}$/,
    "de-DE": /^[1-9]\d{10}$/,
    "dk-DK": /^\d{6}-{0,1}\d{4}$/,
    "el-CY": /^[09]\d{7}[A-Z]$/,
    "el-GR": /^([0-4]|[7-9])\d{8}$/,
    "en-CA": /^\d{9}$/,
    "en-GB": /^\d{10}$|^(?!GB|NK|TN|ZZ)(?![DFIQUV])[A-Z](?![DFIQUVO])[A-Z]\d{6}[ABCD ]$/i,
    "en-IE": /^\d{7}[A-W][A-IW]{0,1}$/i,
    "en-US": /^\d{2}[- ]{0,1}\d{7}$/,
    "es-ES": /^(\d{0,8}|[XYZKLM]\d{7})[A-HJ-NP-TV-Z]$/i,
    "et-EE": /^[1-6]\d{6}(00[1-9]|0[1-9][0-9]|[1-6][0-9]{2}|70[0-9]|710)\d$/,
    "fi-FI": /^\d{6}[-+A]\d{3}[0-9A-FHJ-NPR-Y]$/i,
    "fr-BE": /^\d{11}$/,
    "fr-FR": /^[0-3]\d{12}$|^[0-3]\d\s\d{2}(\s\d{3}){3}$/,
    "fr-LU": /^\d{13}$/,
    "hr-HR": /^\d{11}$/,
    "hu-HU": /^8\d{9}$/,
    "it-IT": /^[A-Z]{6}[L-NP-V0-9]{2}[A-EHLMPRST][L-NP-V0-9]{2}[A-ILMZ][L-NP-V0-9]{3}[A-Z]$/i,
    "lv-LV": /^\d{6}-{0,1}\d{5}$/,
    "mt-MT": /^\d{3,7}[APMGLHBZ]$|^([1-8])\1\d{7}$/i,
    "nl-NL": /^\d{9}$/,
    "pl-PL": /^\d{10,11}$/,
    "pt-BR": /(?:^\d{11}$)|(?:^\d{14}$)/,
    "pt-PT": /^\d{9}$/,
    "ro-RO": /^\d{13}$/,
    "sk-SK": /^\d{6}\/{0,1}\d{3,4}$/,
    "sl-SI": /^[1-9]\d{7}$/,
    "sv-SE": /^(\d{6}[-+]{0,1}\d{4}|(18|19|20)\d{6}[-+]{0,1}\d{4})$/
};
p["lb-LU"] = p["fr-LU"];
p["lt-LT"] = p["et-EE"];
p["nl-BE"] = p["fr-BE"];
p["fr-CA"] = p["en-CA"];
var h = {
    "bg-BG": function(e) {
        let t = e.slice(0, 2);
        let n = parseInt(e.slice(2, 4), 10);
        if (n > 40) {
            n -= 40;
            t = `20${t}`;
        } else if (n > 20) {
            n -= 20;
            t = `18${t}`;
        } else {
            t = `19${t}`;
        }
        if (n < 10) {
            n = `0${n}`;
        }
        const r = `${t}/${n}/${e.slice(4, 6)}`;
        if (!module1582(r, "YYYY/MM/DD")) {
            return false;
        }
        const o = e.split("").map((e)=>parseInt(e, 10));
        for(var i = [
            2,
            4,
            8,
            5,
            10,
            9,
            7,
            3,
            6
        ], l = 0, u = 0; u < i.length; u++){
            l += o[u] * i[u];
        }
        return (l = l % 11 == 10 ? 0 : l % 11) === o[9];
    },
    "cs-CZ": function(e) {
        e = e.replace(/\W/, "");
        let t = parseInt(e.slice(0, 2), 10);
        if (e.length === 10) {
            t = t < 54 ? `20${t}` : `19${t}`;
        } else {
            if (e.slice(6) === "000") {
                return false;
            }
            if (!(t < 54)) {
                return false;
            }
            t = `19${t}`;
        }
        if (t.length === 3) {
            t = [
                t.slice(0, 2),
                "0",
                t.slice(2)
            ].join("");
        }
        let n = parseInt(e.slice(2, 4), 10);
        if (n > 50) {
            n -= 50;
        }
        if (n > 20) {
            if (parseInt(t, 10) < 2004) {
                return false;
            }
            n -= 20;
        }
        if (n < 10) {
            n = `0${n}`;
        }
        const r = `${t}/${n}/${e.slice(4, 6)}`;
        if (!module1582(r, "YYYY/MM/DD")) {
            return false;
        }
        if (e.length === 10 && parseInt(e, 10) % 11 != 0) {
            const o = parseInt(e.slice(0, 9), 10) % 11;
            if (!(parseInt(t, 10) < 1986 && o === 10)) {
                return false;
            }
            if (parseInt(e.slice(9), 10) !== 0) {
                return false;
            }
        }
        return true;
    },
    "de-AT": function(e) {
        return luhnCheck(e);
    },
    "de-DE": function(e) {
        for(var t = e.split("").map((e)=>parseInt(e, 10)), n = [], r = 0; r < t.length - 1; r++){
            n.push("");
            for(let o = 0; o < t.length - 1; o++){
                if (t[r] === t[o]) {
                    n[r] += o;
                }
            }
        }
        if ((n = n.filter((e)=>e.length > 1)).length !== 2 && n.length !== 3) {
            return false;
        }
        if (n[0].length === 3) {
            for(var a = n[0].split("").map((e)=>parseInt(e, 10)), l = 0, u = 0; u < a.length - 1; u++){
                if (a[u] + 1 === a[u + 1]) {
                    l += 1;
                }
            }
            if (l === 2) {
                return false;
            }
        }
        return iso7064Check(e);
    },
    "dk-DK": function(e) {
        e = e.replace(/\W/, "");
        let t = parseInt(e.slice(4, 6), 10);
        switch(e.slice(6, 7)){
            case "0":
            case "1":
            case "2":
            case "3":
                t = `19${t}`;
                break;
            case "4":
            case "9":
                t = t < 37 ? `20${t}` : `19${t}`;
                break;
            default:
                if (t < 37) {
                    t = `20${t}`;
                } else {
                    if (!(t > 58)) {
                        return false;
                    }
                    t = `18${t}`;
                }
        }
        if (t.length === 3) {
            t = [
                t.slice(0, 2),
                "0",
                t.slice(2)
            ].join("");
        }
        const n = `${t}/${e.slice(2, 4)}/${e.slice(0, 2)}`;
        if (!module1582(n, "YYYY/MM/DD")) {
            return false;
        }
        const r = e.split("").map((e)=>parseInt(e, 10));
        let o = 0;
        let i = 4;
        for(let l = 0; l < 9; l++){
            o += r[l] * i;
            if ((i -= 1) == 1) {
                i = 7;
            }
        }
        return (o %= 11) != 1 && (o === 0 ? r[9] === 0 : r[9] === 11 - o);
    },
    "el-CY": function(e) {
        for(var t = e.slice(0, 8).split("").map((e)=>parseInt(e, 10)), n = 0, r = 1; r < t.length; r += 2){
            n += t[r];
        }
        for(let o = 0; o < t.length; o += 2){
            if (t[o] < 2) {
                n += 1 - t[o];
            } else {
                n += 2 * (t[o] - 2) + 5;
                if (t[o] > 4) {
                    n += 2;
                }
            }
        }
        return String.fromCharCode(n % 26 + 65) === e.charAt(8);
    },
    "el-GR": function(e) {
        const t = e.split("").map((e)=>parseInt(e, 10));
        let n = 0;
        for(let r = 0; r < 8; r++){
            n += t[r] * 2 ** (8 - r);
        }
        return n % 11 % 10 === t[8];
    },
    "en-CA": function(e) {
        const t = e.split("");
        const n = t.filter((e, t)=>t % 2).map((e)=>2 * Number(e)).join("").split("");
        return t.filter((e, t)=>!(t % 2)).concat(n).map((e)=>Number(e)).reduce((acc, item)=>acc + item) % 10 == 0;
    },
    "en-IE": function(e) {
        let t = reverseMultiplyAndSum(e.split("").slice(0, 7).map((e)=>parseInt(e, 10)), 8);
        if (e.length === 9 && e[8] !== "W") {
            t += 9 * (e[8].charCodeAt(0) - 64);
        }
        if ((t %= 23) == 0) {
            return e[7].toUpperCase() === "W";
        }
        return e[7].toUpperCase() === String.fromCharCode(64 + t);
    },
    "en-US": function(e) {
        return (()=>{
            const e = [];
            for(const t in f){
                if (f.hasOwnProperty(t)) {
                    e.push(...f[t]);
                }
            }
            return e;
        })().indexOf(e.slice(0, 2)) !== -1;
    },
    "es-ES": function(e) {
        let t = e.toUpperCase().split("");
        if (isNaN(parseInt(t[0], 10)) && t.length > 1) {
            let n = 0;
            switch(t[0]){
                case "Y":
                    n = 1;
                    break;
                case "Z":
                    n = 2;
            }
            t.splice(0, 1, n);
        } else {
            while(t.length < 9){
                t.unshift(0);
            }
        }
        t = t.join("");
        const r = parseInt(t.slice(0, 8), 10) % 23;
        return t[8] === [
            "T",
            "R",
            "W",
            "A",
            "G",
            "M",
            "Y",
            "F",
            "P",
            "D",
            "X",
            "B",
            "N",
            "J",
            "Z",
            "S",
            "Q",
            "V",
            "H",
            "L",
            "C",
            "K",
            "E"
        ][r];
    },
    "et-EE": function(e) {
        let t = e.slice(1, 3);
        switch(e.slice(0, 1)){
            case "1":
            case "2":
                t = `18${t}`;
                break;
            case "3":
            case "4":
                t = `19${t}`;
                break;
            default:
                t = `20${t}`;
        }
        const n = `${t}/${e.slice(3, 5)}/${e.slice(5, 7)}`;
        if (!module1582(n, "YYYY/MM/DD")) {
            return false;
        }
        const r = e.split("").map((e)=>parseInt(e, 10));
        let o = 0;
        let i = 1;
        for(let l = 0; l < 10; l++){
            o += r[l] * i;
            if ((i += 1) === 10) {
                i = 1;
            }
        }
        if (o % 11 == 10) {
            o = 0;
            i = 3;
            for(let u = 0; u < 10; u++){
                o += r[u] * i;
                if ((i += 1) === 10) {
                    i = 1;
                }
            }
            if (o % 11 == 10) {
                return r[10] === 0;
            }
        }
        return o % 11 === r[10];
    },
    "fi-FI": function(e) {
        let t = e.slice(4, 6);
        switch(e.slice(6, 7)){
            case "+":
                t = `18${t}`;
                break;
            case "-":
                t = `19${t}`;
                break;
            default:
                t = `20${t}`;
        }
        const n = `${t}/${e.slice(2, 4)}/${e.slice(0, 2)}`;
        if (!module1582(n, "YYYY/MM/DD")) {
            return false;
        }
        let r = parseInt(e.slice(0, 6) + e.slice(7, 10), 10) % 31;
        if (r < 10) {
            return r === parseInt(e.slice(10), 10);
        }
        return [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "H",
            "J",
            "K",
            "L",
            "M",
            "N",
            "P",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y"
        ][r -= 10] === e.slice(10);
    },
    "fr-BE": function(e) {
        if (e.slice(2, 4) !== "00" || e.slice(4, 6) !== "00") {
            const t = `${e.slice(0, 2)}/${e.slice(2, 4)}/${e.slice(4, 6)}`;
            if (!module1582(t, "YY/MM/DD")) {
                return false;
            }
        }
        let n = 97 - parseInt(e.slice(0, 9), 10) % 97;
        const r = parseInt(e.slice(9, 11), 10);
        return n === r || (n = 97 - parseInt(`2${e.slice(0, 9)}`, 10) % 97) === r;
    },
    "fr-FR": function(e) {
        e = e.replace(/\s/g, "");
        return parseInt(e.slice(0, 10), 10) % 511 === parseInt(e.slice(10, 13), 10);
    },
    "fr-LU": function(e) {
        const t = `${e.slice(0, 4)}/${e.slice(4, 6)}/${e.slice(6, 8)}`;
        return !!module1582(t, "YYYY/MM/DD") && !!luhnCheck(e.slice(0, 12)) && verhoeffCheck(`${e.slice(0, 11)}${e[12]}`);
    },
    "hr-HR": function(e) {
        return iso7064Check(e);
    },
    "hu-HU": function(e) {
        const t = e.split("").map((e)=>parseInt(e, 10));
        let n = 8;
        for(let r = 1; r < 9; r++){
            n += t[r] * (r + 1);
        }
        return n % 11 === t[9];
    },
    "it-IT": function(e) {
        const t = e.toUpperCase().split("");
        if (!d(t.slice(0, 3))) {
            return false;
        }
        if (!d(t.slice(3, 6))) {
            return false;
        }
        const n = {
            L: "0",
            M: "1",
            N: "2",
            P: "3",
            Q: "4",
            R: "5",
            S: "6",
            T: "7",
            U: "8",
            V: "9"
        };
        for (const i of [
            6,
            7,
            9,
            10,
            12,
            13,
            14
        ]){
            if (t[i] in n) {
                t.splice(i, 1, n[t[i]]);
            }
        }
        const l = {
            A: "01",
            B: "02",
            C: "03",
            D: "04",
            E: "05",
            H: "06",
            L: "07",
            M: "08",
            P: "09",
            R: "10",
            S: "11",
            T: "12"
        }[t[8]];
        let u = parseInt(t[9] + t[10], 10);
        if (u > 40) {
            u -= 40;
        }
        if (u < 10) {
            u = `0${u}`;
        }
        const s = `${t[6]}${t[7]}/${l}/${u}`;
        if (!module1582(s, "YY/MM/DD")) {
            return false;
        }
        let c = 0;
        for(let f = 1; f < t.length - 1; f += 2){
            let p = parseInt(t[f], 10);
            if (isNaN(p)) {
                p = t[f].charCodeAt(0) - 65;
            }
            c += p;
        }
        const h = {
            A: 1,
            B: 0,
            C: 5,
            D: 7,
            E: 9,
            F: 13,
            G: 15,
            H: 17,
            I: 19,
            J: 21,
            K: 2,
            L: 4,
            M: 18,
            N: 20,
            O: 11,
            P: 3,
            Q: 6,
            R: 8,
            S: 12,
            T: 14,
            U: 16,
            V: 10,
            W: 22,
            X: 25,
            Y: 24,
            Z: 23,
            0: 1,
            1: 0
        };
        for(let v = 0; v < t.length - 1; v += 2){
            let g = 0;
            if (t[v] in h) {
                g = h[t[v]];
            } else {
                const y = parseInt(t[v], 10);
                g = 2 * y + 1;
                if (y > 4) {
                    g += 2;
                }
            }
            c += g;
        }
        return String.fromCharCode(65 + c % 26) === t[15];
    },
    "lv-LV": function(e) {
        const t = (e = e.replace(/\W/, "")).slice(0, 2);
        if (t !== "32") {
            if (e.slice(2, 4) !== "00") {
                let n = e.slice(4, 6);
                switch(e[6]){
                    case "0":
                        n = `18${n}`;
                        break;
                    case "1":
                        n = `19${n}`;
                        break;
                    default:
                        n = `20${n}`;
                }
                const r = `${n}/${e.slice(2, 4)}/${t}`;
                if (!module1582(r, "YYYY/MM/DD")) {
                    return false;
                }
            }
            let o = 1101;
            const i = [
                1,
                6,
                3,
                7,
                9,
                10,
                5,
                8,
                4,
                2
            ];
            for(let l = 0; l < e.length - 1; l++){
                o -= parseInt(e[l], 10) * i[l];
            }
            return parseInt(e[10], 10) === o % 11;
        }
        return true;
    },
    "mt-MT": function(e) {
        if (e.length !== 9) {
            for(var t = e.toUpperCase().split(""); t.length < 8;){
                t.unshift(0);
            }
            switch(e[7]){
                case "A":
                case "P":
                    if (parseInt(t[6], 10) === 0) {
                        return false;
                    }
                    break;
                default:
                    const n = parseInt(t.join("").slice(0, 5), 10);
                    if (n > 32000) {
                        return false;
                    }
                    if (n === parseInt(t.join("").slice(5, 7), 10)) {
                        return false;
                    }
            }
        }
        return true;
    },
    "nl-NL": function(e) {
        return reverseMultiplyAndSum(e.split("").slice(0, 8).map((e)=>parseInt(e, 10)), 9) % 11 === parseInt(e[8], 10);
    },
    "pl-PL": function(e) {
        if (e.length === 10) {
            for(var t = [
                6,
                5,
                7,
                2,
                3,
                4,
                5,
                6,
                7
            ], n = 0, r = 0; r < t.length; r++){
                n += parseInt(e[r], 10) * t[r];
            }
            return (n %= 11) != 10 && n === parseInt(e[9], 10);
        }
        let o = e.slice(0, 2);
        let i = parseInt(e.slice(2, 4), 10);
        if (i > 80) {
            o = `18${o}`;
            i -= 80;
        } else if (i > 60) {
            o = `22${o}`;
            i -= 60;
        } else if (i > 40) {
            o = `21${o}`;
            i -= 40;
        } else if (i > 20) {
            o = `20${o}`;
            i -= 20;
        } else {
            o = `19${o}`;
        }
        if (i < 10) {
            i = `0${i}`;
        }
        const l = `${o}/${i}/${e.slice(4, 6)}`;
        if (!module1582(l, "YYYY/MM/DD")) {
            return false;
        }
        let u = 0;
        let s = 1;
        for(let c = 0; c < e.length - 1; c++){
            u += parseInt(e[c], 10) * s % 10;
            if ((s += 2) > 10) {
                s = 1;
            } else if (s === 5) {
                s += 2;
            }
        }
        return (u = 10 - u % 10) === parseInt(e[10], 10);
    },
    "pt-BR": function(e) {
        if (e.length === 11) {
            let n;
            let t = 0;
            if (e === "11111111111" || e === "22222222222" || e === "33333333333" || e === "44444444444" || e === "55555555555" || e === "66666666666" || e === "77777777777" || e === "88888888888" || e === "99999999999" || e === "00000000000") {
                return false;
            }
            for(let r = 1; r <= 9; r++){
                t += parseInt(e.substring(r - 1, r), 10) * (11 - r);
            }
            if ((n = 10 * t % 11) == 10) {
                n = 0;
            }
            if (n !== parseInt(e.substring(9, 10), 10)) {
                return false;
            }
            t = 0;
            for(let o = 1; o <= 10; o++){
                t += parseInt(e.substring(o - 1, o), 10) * (12 - o);
            }
            if ((n = 10 * t % 11) == 10) {
                n = 0;
            }
            return n === parseInt(e.substring(10, 11), 10);
        }
        if (e === "00000000000000" || e === "11111111111111" || e === "22222222222222" || e === "33333333333333" || e === "44444444444444" || e === "55555555555555" || e === "66666666666666" || e === "77777777777777" || e === "88888888888888" || e === "99999999999999") {
            return false;
        }
        let i = e.length - 2;
        let a = e.substring(0, i);
        const l = e.substring(i);
        let u = 0;
        let s = i - 7;
        for(let c = i; c >= 1; c--){
            u += a.charAt(i - c) * s;
            if ((s -= 1) < 2) {
                s = 9;
            }
        }
        let f = u % 11 < 2 ? 0 : 11 - u % 11;
        if (f !== parseInt(l.charAt(0), 10)) {
            return false;
        }
        i += 1;
        a = e.substring(0, i);
        u = 0;
        s = i - 7;
        for(let d = i; d >= 1; d--){
            u += a.charAt(i - d) * s;
            if ((s -= 1) < 2) {
                s = 9;
            }
        }
        return (f = u % 11 < 2 ? 0 : 11 - u % 11) === parseInt(l.charAt(1), 10);
    },
    "pt-PT": function(e) {
        const t = 11 - reverseMultiplyAndSum(e.split("").slice(0, 8).map((e)=>parseInt(e, 10)), 9) % 11;
        if (t > 9) {
            return parseInt(e[8], 10) === 0;
        }
        return t === parseInt(e[8], 10);
    },
    "ro-RO": function(e) {
        if (e.slice(0, 4) !== "9000") {
            let t = e.slice(1, 3);
            switch(e[0]){
                case "1":
                case "2":
                    t = `19${t}`;
                    break;
                case "3":
                case "4":
                    t = `18${t}`;
                    break;
                case "5":
                case "6":
                    t = `20${t}`;
            }
            const n = `${t}/${e.slice(3, 5)}/${e.slice(5, 7)}`;
            if (n.length === 8) {
                if (!module1582(n, "YY/MM/DD")) {
                    return false;
                }
            } else if (!module1582(n, "YYYY/MM/DD")) {
                return false;
            }
            const r = e.split("").map((e)=>parseInt(e, 10));
            for(var o = [
                2,
                7,
                9,
                1,
                4,
                6,
                3,
                5,
                8,
                2,
                7,
                9
            ], i = 0, l = 0; l < o.length; l++){
                i += r[l] * o[l];
            }
            if (i % 11 == 10) {
                return r[12] === 1;
            }
            return r[12] === i % 11;
        }
        return true;
    },
    "sk-SK": function(e) {
        if (e.length === 9) {
            if ((e = e.replace(/\W/, "")).slice(6) === "000") {
                return false;
            }
            let t = parseInt(e.slice(0, 2), 10);
            if (t > 53) {
                return false;
            }
            t = t < 10 ? `190${t}` : `19${t}`;
            let n = parseInt(e.slice(2, 4), 10);
            if (n > 50) {
                n -= 50;
            }
            if (n < 10) {
                n = `0${n}`;
            }
            const r = `${t}/${n}/${e.slice(4, 6)}`;
            if (!module1582(r, "YYYY/MM/DD")) {
                return false;
            }
        }
        return true;
    },
    "sl-SI": function(e) {
        const t = 11 - reverseMultiplyAndSum(e.split("").slice(0, 7).map((e)=>parseInt(e, 10)), 8) % 11;
        if (t === 10) {
            return parseInt(e[7], 10) === 0;
        }
        return t === parseInt(e[7], 10);
    },
    "sv-SE": function(e) {
        let t = e.slice(0);
        if (e.length > 11) {
            t = t.slice(2);
        }
        let n = "";
        const r = t.slice(2, 4);
        let o = parseInt(t.slice(4, 6), 10);
        if (e.length > 11) {
            n = e.slice(0, 4);
        } else {
            n = e.slice(0, 2);
            if (e.length === 11 && o < 60) {
                let l = (new Date).getFullYear().toString();
                const u = parseInt(l.slice(0, 2), 10);
                l = parseInt(l, 10);
                if (e[6] === "-") {
                    n = parseInt(`${u}${n}`, 10) > l ? `${u - 1}${n}` : `${u}${n}`;
                } else {
                    n = `${u - 1}${n}`;
                    if (l - parseInt(n, 10) < 100) {
                        return false;
                    }
                }
            }
        }
        if (o > 60) {
            o -= 60;
        }
        if (o < 10) {
            o = `0${o}`;
        }
        const s = `${n}/${r}/${o}`;
        if (s.length === 8) {
            if (!module1582(s, "YY/MM/DD")) {
                return false;
            }
        } else if (!module1582(s, "YYYY/MM/DD")) {
            return false;
        }
        return luhnCheck(e.replace(/\W/, ""));
    }
};
h["lb-LU"] = h["fr-LU"];
h["lt-LT"] = h["et-EE"];
h["nl-BE"] = h["fr-BE"];
h["fr-CA"] = h["en-CA"];
const v = /[-\\\/!@#$%\^&\*\(\)\+\=\[\]]+/g;
var g = {
    "de-AT": v,
    "de-DE": /[\/\\]/g,
    "fr-BE": v
};
g["nl-BE"] = g["fr-BE"];
exports.default;
export default exports.default;
