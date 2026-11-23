import { C0 } from "unpacked/module-1255.js";
const n = {
    48: [
        "0",
        ")"
    ],
    49: [
        "1",
        "!"
    ],
    50: [
        "2",
        "@"
    ],
    51: [
        "3",
        "#"
    ],
    52: [
        "4",
        "$"
    ],
    53: [
        "5",
        "%"
    ],
    54: [
        "6",
        "^"
    ],
    55: [
        "7",
        "&"
    ],
    56: [
        "8",
        "*"
    ],
    57: [
        "9",
        "("
    ],
    186: [
        ";",
        ":"
    ],
    187: [
        "=",
        "+"
    ],
    188: [
        ",",
        "<"
    ],
    189: [
        "-",
        "_"
    ],
    190: [
        ".",
        ">"
    ],
    191: [
        "/",
        "?"
    ],
    192: [
        "`",
        "~"
    ],
    219: [
        "[",
        "{"
    ],
    220: [
        "\\",
        "|"
    ],
    221: [
        "]",
        "}"
    ],
    222: [
        "'",
        '"'
    ]
};
export const evaluateKeyboardEvent = function(e, t, i, s) {
    const o = {
        type: 0,
        cancel: false,
        key: undefined
    };
    const a = (e.shiftKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.ctrlKey ? 4 : 0) | (e.metaKey ? 8 : 0);
    switch(e.keyCode){
        case 0:
            if (e.key === "UIKeyInputUpArrow") {
                o.key = t ? `${C0.ESC}OA` : `${C0.ESC}[A`;
            } else if (e.key === "UIKeyInputLeftArrow") {
                o.key = t ? `${C0.ESC}OD` : `${C0.ESC}[D`;
            } else if (e.key === "UIKeyInputRightArrow") {
                o.key = t ? `${C0.ESC}OC` : `${C0.ESC}[C`;
            } else if (e.key === "UIKeyInputDownArrow") {
                o.key = t ? `${C0.ESC}OB` : `${C0.ESC}[B`;
            }
            break;
        case 8:
            if (e.shiftKey) {
                o.key = C0.BS;
                break;
            }
            if (e.altKey) {
                o.key = C0.ESC + C0.DEL;
                break;
            }
            o.key = C0.DEL;
            break;
        case 9:
            if (e.shiftKey) {
                o.key = `${C0.ESC}[Z`;
                break;
            }
            o.key = C0.HT;
            o.cancel = true;
            break;
        case 13:
            o.key = C0.CR;
            o.cancel = true;
            break;
        case 27:
            o.key = C0.ESC;
            o.cancel = true;
            break;
        case 37:
            if (a) {
                o.key = `${C0.ESC}[1;${a + 1}D`;
                if (o.key === `${C0.ESC}[1;3D`) {
                    o.key = i ? `${C0.ESC}b` : `${C0.ESC}[1;5D`;
                }
            } else {
                o.key = t ? `${C0.ESC}OD` : `${C0.ESC}[D`;
            }
            break;
        case 39:
            if (a) {
                o.key = `${C0.ESC}[1;${a + 1}C`;
                if (o.key === `${C0.ESC}[1;3C`) {
                    o.key = i ? `${C0.ESC}f` : `${C0.ESC}[1;5C`;
                }
            } else {
                o.key = t ? `${C0.ESC}OC` : `${C0.ESC}[C`;
            }
            break;
        case 38:
            if (a) {
                o.key = `${C0.ESC}[1;${a + 1}A`;
                if (o.key === `${C0.ESC}[1;3A`) {
                    o.key = `${C0.ESC}[1;5A`;
                }
            } else {
                o.key = t ? `${C0.ESC}OA` : `${C0.ESC}[A`;
            }
            break;
        case 40:
            if (a) {
                o.key = `${C0.ESC}[1;${a + 1}B`;
                if (o.key === `${C0.ESC}[1;3B`) {
                    o.key = `${C0.ESC}[1;5B`;
                }
            } else {
                o.key = t ? `${C0.ESC}OB` : `${C0.ESC}[B`;
            }
            break;
        case 45:
            if (!(e.shiftKey || e.ctrlKey)) {
                o.key = `${C0.ESC}[2~`;
            }
            break;
        case 46:
            o.key = a ? `${C0.ESC}[3;${a + 1}~` : `${C0.ESC}[3~`;
            break;
        case 36:
            o.key = a ? `${C0.ESC}[1;${a + 1}H` : t ? `${C0.ESC}OH` : `${C0.ESC}[H`;
            break;
        case 35:
            o.key = a ? `${C0.ESC}[1;${a + 1}F` : t ? `${C0.ESC}OF` : `${C0.ESC}[F`;
            break;
        case 33:
            if (e.shiftKey) {
                o.type = 2;
            } else {
                o.key = `${C0.ESC}[5~`;
            }
            break;
        case 34:
            if (e.shiftKey) {
                o.type = 3;
            } else {
                o.key = `${C0.ESC}[6~`;
            }
            break;
        case 112:
            o.key = a ? `${C0.ESC}[1;${a + 1}P` : `${C0.ESC}OP`;
            break;
        case 113:
            o.key = a ? `${C0.ESC}[1;${a + 1}Q` : `${C0.ESC}OQ`;
            break;
        case 114:
            o.key = a ? `${C0.ESC}[1;${a + 1}R` : `${C0.ESC}OR`;
            break;
        case 115:
            o.key = a ? `${C0.ESC}[1;${a + 1}S` : `${C0.ESC}OS`;
            break;
        case 116:
            o.key = a ? `${C0.ESC}[15;${a + 1}~` : `${C0.ESC}[15~`;
            break;
        case 117:
            o.key = a ? `${C0.ESC}[17;${a + 1}~` : `${C0.ESC}[17~`;
            break;
        case 118:
            o.key = a ? `${C0.ESC}[18;${a + 1}~` : `${C0.ESC}[18~`;
            break;
        case 119:
            o.key = a ? `${C0.ESC}[19;${a + 1}~` : `${C0.ESC}[19~`;
            break;
        case 120:
            o.key = a ? `${C0.ESC}[20;${a + 1}~` : `${C0.ESC}[20~`;
            break;
        case 121:
            o.key = a ? `${C0.ESC}[21;${a + 1}~` : `${C0.ESC}[21~`;
            break;
        case 122:
            o.key = a ? `${C0.ESC}[23;${a + 1}~` : `${C0.ESC}[23~`;
            break;
        case 123:
            o.key = a ? `${C0.ESC}[24;${a + 1}~` : `${C0.ESC}[24~`;
            break;
        default:
            if (!e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) {
                if (i && !s || !e.altKey || e.metaKey) {
                    if (i && !e.altKey && !e.ctrlKey && e.metaKey && e.keyCode === 65) {
                        o.type = 1;
                    }
                } else {
                    const l = n[e.keyCode];
                    const h = l && l[e.shiftKey ? 1 : 0];
                    if (h) {
                        o.key = C0.ESC + h;
                    } else if (e.keyCode >= 65 && e.keyCode <= 90) {
                        const c = e.ctrlKey ? e.keyCode - 64 : e.keyCode + 32;
                        o.key = C0.ESC + String.fromCharCode(c);
                    }
                }
            } else {
                if (e.keyCode >= 65 && e.keyCode <= 90) {
                    o.key = String.fromCharCode(e.keyCode - 64);
                } else if (e.keyCode === 32) {
                    o.key = String.fromCharCode(0);
                } else if (e.keyCode >= 51 && e.keyCode <= 55) {
                    o.key = String.fromCharCode(e.keyCode - 51 + 27);
                } else if (e.keyCode === 56) {
                    o.key = String.fromCharCode(127);
                } else if (e.keyCode === 219) {
                    o.key = String.fromCharCode(27);
                } else if (e.keyCode === 220) {
                    o.key = String.fromCharCode(28);
                } else if (e.keyCode === 221) {
                    o.key = String.fromCharCode(29);
                }
            }
    }
    return o;
};
