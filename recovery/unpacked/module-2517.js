import module798 from "./module-798.js";
import module1319 from "./module-1319.js";
(function(e, t) {
    module798(e);
    if (t in a) {
        return a[t](e);
    }
    if (t === "any") {
        for(const n in a){
            if (a.hasOwnProperty(n) && a[n](e)) {
                return true;
            }
        }
        return false;
    }
    throw new Error(`Invalid locale '${t}'`);
});
var a = {
    PL: function(e) {
        module798(e);
        const t = {
            1: 1,
            2: 3,
            3: 7,
            4: 9,
            5: 1,
            6: 3,
            7: 7,
            8: 9,
            9: 1,
            10: 3,
            11: 0
        };
        if (e != null && e.length === 11 && module1319(e, {
            allow_leading_zeroes: true
        })) {
            const n = e.split("").slice(0, -1).reduce((acc, item, index)=>acc + Number(item) * t[index + 1], 0) % 10;
            const i = Number(e.charAt(e.length - 1));
            if (n === 0 && i === 0 || i === 10 - n) {
                return true;
            }
        }
        return false;
    },
    ES: function(e) {
        module798(e);
        const t = {
            X: 0,
            Y: 1,
            Z: 2
        };
        const n = e.trim().toUpperCase();
        if (!/^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/.test(n)) {
            return false;
        }
        const o = n.slice(0, -1).replace(/[X,Y,Z]/g, (e)=>t[e]);
        return n.endsWith([
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
        ][o % 23]);
    },
    FI: function(e) {
        module798(e);
        return e.length === 11 && !!e.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/) && "0123456789ABCDEFHJKLMNPRSTUVWXY"[(1000 * parseInt(e.slice(0, 6), 10) + parseInt(e.slice(7, 10), 10)) % 31] === e.slice(10, 11);
    },
    IN: function(e) {
        const t = [
            [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            [
                1,
                2,
                3,
                4,
                0,
                6,
                7,
                8,
                9,
                5
            ],
            [
                2,
                3,
                4,
                0,
                1,
                7,
                8,
                9,
                5,
                6
            ],
            [
                3,
                4,
                0,
                1,
                2,
                8,
                9,
                5,
                6,
                7
            ],
            [
                4,
                0,
                1,
                2,
                3,
                9,
                5,
                6,
                7,
                8
            ],
            [
                5,
                9,
                8,
                7,
                6,
                0,
                4,
                3,
                2,
                1
            ],
            [
                6,
                5,
                9,
                8,
                7,
                1,
                0,
                4,
                3,
                2
            ],
            [
                7,
                6,
                5,
                9,
                8,
                2,
                1,
                0,
                4,
                3
            ],
            [
                8,
                7,
                6,
                5,
                9,
                3,
                2,
                1,
                0,
                4
            ],
            [
                9,
                8,
                7,
                6,
                5,
                4,
                3,
                2,
                1,
                0
            ]
        ];
        const n = [
            [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9
            ],
            [
                1,
                5,
                7,
                6,
                2,
                8,
                3,
                0,
                9,
                4
            ],
            [
                5,
                8,
                0,
                3,
                7,
                9,
                6,
                1,
                4,
                2
            ],
            [
                8,
                9,
                1,
                6,
                0,
                4,
                3,
                5,
                2,
                7
            ],
            [
                9,
                4,
                5,
                3,
                1,
                2,
                6,
                8,
                7,
                0
            ],
            [
                4,
                2,
                8,
                6,
                5,
                7,
                3,
                9,
                0,
                1
            ],
            [
                2,
                7,
                9,
                3,
                8,
                0,
                6,
                4,
                1,
                5
            ],
            [
                7,
                0,
                4,
                6,
                9,
                1,
                3,
                2,
                5,
                8
            ]
        ];
        const r = e.trim();
        if (!/^[1-9]\d{3}\s?\d{4}\s?\d{4}$/.test(r)) {
            return false;
        }
        let o = 0;
        r.replace(/\s/g, "").split("").map(Number).reverse().forEach((e, r)=>{
            o = t[o][n[r % 8][e]];
        });
        return o === 0;
    },
    IR: function(e) {
        if (!e.match(/^\d{10}$/)) {
            return false;
        }
        e = `0000${e}`.slice(e.length - 6);
        if (parseInt(e.slice(3, 9), 10) === 0) {
            return false;
        }
        const t = parseInt(e.slice(9, 10), 10);
        let n = 0;
        for(let r = 0; r < 9; r++){
            n += parseInt(e.slice(r, r + 1), 10) * (10 - r);
        }
        return (n %= 11) < 2 && t === n || n >= 2 && t === 11 - n;
    },
    IT: function(e) {
        return e.length === 9 && e !== "CA00000AA" && e.search(/C[A-Z][0-9]{5}[A-Z]{2}/i) > -1;
    },
    NO: function(e) {
        const t = e.trim();
        if (isNaN(Number(t))) {
            return false;
        }
        if (t.length !== 11) {
            return false;
        }
        if (t === "00000000000") {
            return false;
        }
        const n = t.split("").map(Number);
        const r = (11 - (3 * n[0] + 7 * n[1] + 6 * n[2] + 1 * n[3] + 8 * n[4] + 9 * n[5] + 4 * n[6] + 5 * n[7] + 2 * n[8]) % 11) % 11;
        const o = (11 - (5 * n[0] + 4 * n[1] + 3 * n[2] + 2 * n[3] + 7 * n[4] + 6 * n[5] + 5 * n[6] + 4 * n[7] + 3 * n[8] + 2 * r) % 11) % 11;
        return r === n[9] && o === n[10];
    },
    TH: function(e) {
        if (!e.match(/^[1-8]\d{12}$/)) {
            return false;
        }
        let t = 0;
        for(let n = 0; n < 12; n++){
            t += parseInt(e[n], 10) * (13 - n);
        }
        return e[12] === ((11 - t % 11) % 10).toString();
    },
    LK: function(e) {
        return !(e.length !== 10 || !/^[1-9]\d{8}[vx]$/i.test(e)) || !(e.length !== 12 || !/^[1-9]\d{11}$/i.test(e));
    },
    "he-IL": function(e) {
        const t = e.trim();
        if (!/^\d{9}$/.test(t)) {
            return false;
        }
        let n;
        for(var r = t, o = 0, i = 0; i < r.length; i++){
            o += (n = Number(r[i]) * (i % 2 + 1)) > 9 ? n - 9 : n;
        }
        return o % 10 == 0;
    },
    "ar-LY": function(e) {
        const t = e.trim();
        return !!/^(1|2)\d{11}$/.test(t);
    },
    "ar-TN": function(e) {
        const t = e.trim();
        return !!/^\d{8}$/.test(t);
    },
    "zh-CN": function(e) {
        let t;
        const n = [
            "11",
            "12",
            "13",
            "14",
            "15",
            "21",
            "22",
            "23",
            "31",
            "32",
            "33",
            "34",
            "35",
            "36",
            "37",
            "41",
            "42",
            "43",
            "44",
            "45",
            "46",
            "50",
            "51",
            "52",
            "53",
            "54",
            "61",
            "62",
            "63",
            "64",
            "65",
            "71",
            "81",
            "82",
            "91"
        ];
        const r = [
            "7",
            "9",
            "10",
            "5",
            "8",
            "4",
            "2",
            "1",
            "6",
            "3",
            "7",
            "9",
            "10",
            "5",
            "8",
            "4",
            "2"
        ];
        const o = [
            "1",
            "0",
            "X",
            "9",
            "8",
            "7",
            "6",
            "5",
            "4",
            "3",
            "2"
        ];
        const i = (e)=>n.includes(e);
        const a = (e)=>{
            const t = parseInt(e.substring(0, 4), 10);
            const n = parseInt(e.substring(4, 6), 10);
            const r = parseInt(e.substring(6), 10);
            const o = new Date(t, n - 1, r);
            return !(o > new Date) && o.getFullYear() === t && o.getMonth() === n - 1 && o.getDate() === r;
        };
        const l = (e)=>((e)=>{
                const t = e.substring(0, 17);
                let n = 0;
                for(let i = 0; i < 17; i++){
                    n += parseInt(t.charAt(i), 10) * parseInt(r[i], 10);
                }
                return o[n % 11];
            })(e) === e.charAt(17).toUpperCase();
        return !!/^\d{15}|(\d{17}(\d|x|X))$/.test(t = e) && (t.length === 15 ? ((e)=>{
            let t = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(e);
            if (!t) {
                return false;
            }
            const n = e.substring(0, 2);
            if (!(t = i(n))) {
                return false;
            }
            const r = `19${e.substring(6, 12)}`;
            return !!(t = a(r));
        })(t) : ((e)=>{
            let t = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(e);
            if (!t) {
                return false;
            }
            const n = e.substring(0, 2);
            if (!(t = i(n))) {
                return false;
            }
            const r = e.substring(6, 14);
            return !!(t = a(r)) && l(e);
        })(t));
    },
    "zh-HK": function(e) {
        const t = /^[0-9]$/;
        e = (e = e.trim()).toUpperCase();
        if (!/^[A-Z]{1,2}[0-9]{6}((\([0-9A]\))|(\[[0-9A]\])|([0-9A]))$/.test(e)) {
            return false;
        }
        if ((e = e.replace(/\[|\]|\(|\)/g, "")).length === 8) {
            e = `3${e}`;
        }
        let n = 0;
        for(let r = 0; r <= 7; r++){
            n += (t.test(e[r]) ? e[r] : (e[r].charCodeAt(0) - 55) % 11) * (9 - r);
        }
        return ((n %= 11) == 0 ? "0" : n === 1 ? "A" : String(11 - n)) === e[e.length - 1];
    },
    "zh-TW": function(e) {
        const t = {
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15,
            G: 16,
            H: 17,
            I: 34,
            J: 18,
            K: 19,
            L: 20,
            M: 21,
            N: 22,
            O: 35,
            P: 23,
            Q: 24,
            R: 25,
            S: 26,
            T: 27,
            U: 28,
            V: 29,
            W: 32,
            X: 30,
            Y: 31,
            Z: 33
        };
        const n = e.trim().toUpperCase();
        return !!/^[A-Z][0-9]{9}$/.test(n) && Array.from(n).reduce((acc, item, index)=>{
            if (index === 0) {
                const o = t[item];
                return o % 10 * 9 + Math.floor(o / 10);
            }
            if (index === 9) {
                return (10 - acc % 10 - Number(item)) % 10 == 0;
            }
            return acc + Number(item) * (9 - index);
        }, 0);
    }
};
export default exports.default;
