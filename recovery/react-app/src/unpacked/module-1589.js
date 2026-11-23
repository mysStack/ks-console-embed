export const iso7064Check = function(e) {
    let t = 10;
    for(let n = 0; n < e.length - 1; n++){
        t = (parseInt(e[n], 10) + t) % 10 == 0 ? 9 : (parseInt(e[n], 10) + t) % 10 * 2 % 11;
    }
    return (t = t === 1 ? 0 : 11 - t) === parseInt(e[10], 10);
};
export const luhnCheck = function(e) {
    let t = 0;
    let n = false;
    for(let r = e.length - 1; r >= 0; r--){
        if (n) {
            const o = 2 * parseInt(e[r], 10);
            t += o > 9 ? o.toString().split("").map((e)=>parseInt(e, 10)).reduce((acc, item)=>acc + item, 0) : o;
        } else {
            t += parseInt(e[r], 10);
        }
        n = !n;
    }
    return t % 10 == 0;
};
export const reverseMultiplyAndSum = function(e, t) {
    let n = 0;
    for(let r = 0; r < e.length; r++){
        n += e[r] * (t - r);
    }
    return n;
};
export const verhoeffCheck = function(e) {
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
    for(var r = e.split("").reverse().join(""), o = 0, i = 0; i < r.length; i++){
        o = t[o][n[i % 8][parseInt(r[i], 10)]];
    }
    return o === 0;
};
