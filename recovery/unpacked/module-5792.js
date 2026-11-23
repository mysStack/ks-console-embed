const r = (e, t, n)=>{
    e.prototype = t.prototype = n;
    n.constructor = e;
};
function o(e, t) {
    const n = Object.create(e.prototype);
    for(const r in t){
        n[r] = t[r];
    }
    return n;
}
function i() {}
const a = "\\s*([+-]?\\d+)\\s*";
const l = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";
const u = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
const s = /^#([0-9a-f]{3,8})$/;
const c = new RegExp(`^rgb\\(${[
    a,
    a,
    a
]}\\)\$`);
const f = new RegExp(`^rgb\\(${[
    u,
    u,
    u
]}\\)\$`);
const d = new RegExp(`^rgba\\(${[
    a,
    a,
    a,
    l
]}\\)\$`);
const p = new RegExp(`^rgba\\(${[
    u,
    u,
    u,
    l
]}\\)\$`);
const h = new RegExp(`^hsl\\(${[
    l,
    u,
    u
]}\\)\$`);
const v = new RegExp(`^hsla\\(${[
    l,
    u,
    u,
    l
]}\\)\$`);
const g = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
};
function y() {
    return this.rgb().formatHex();
}
function m() {
    return this.rgb().formatRgb();
}
function b(e) {
    let t;
    let n;
    e = `${e}`.trim().toLowerCase();
    if (t = s.exec(e)) {
        n = t[1].length;
        t = parseInt(t[1], 16);
        switch(n){
            case 6:
                return x(t);
            case 3:
                return new O(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | 240 & t, (15 & t) << 4 | 15 & t, 1);
            case 8:
                return w(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (255 & t) / 255);
            case 4:
                return w(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | 240 & t, ((15 & t) << 4 | 15 & t) / 255);
            default:
                return null;
        }
    }
    if (t = c.exec(e)) {
        return new O(t[1], t[2], t[3], 1);
    }
    if (t = f.exec(e)) {
        return new O(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, 1);
    }
    if (t = d.exec(e)) {
        return w(t[1], t[2], t[3], t[4]);
    }
    if (t = p.exec(e)) {
        return w(255 * t[1] / 100, 255 * t[2] / 100, 255 * t[3] / 100, t[4]);
    }
    if (t = h.exec(e)) {
        return A(t[1], t[2] / 100, t[3] / 100, 1);
    }
    if (t = v.exec(e)) {
        return A(t[1], t[2] / 100, t[3] / 100, t[4]);
    }
    if (g.hasOwnProperty(e)) {
        return x(g[e]);
    }
    if (e === "transparent") {
        return new O(NaN, NaN, NaN, 0);
    }
    return null;
}
export { b as a };
function x(e) {
    return new O(e >> 16 & 255, e >> 8 & 255, 255 & e, 1);
}
function w(e, t, n, r) {
    if (r <= 0) {
        n = NaN;
        t = NaN;
        e = NaN;
    }
    return new O(e, t, n, r);
}
function _(e) {
    if (!(e instanceof i)) {
        e = b(e);
    }
    if (e) {
        return new O((e = e.rgb()).r, e.g, e.b, e.opacity);
    }
    return new O;
}
function C(e, t, n, r) {
    if (arguments.length === 1) {
        return _(e);
    }
    return new O(e, t, n, r ?? 1);
}
export { C as b };
function O(e, t, n, r) {
    this.r = +e;
    this.g = +t;
    this.b = +n;
    this.opacity = +r;
}
function E() {
    return `#${S(this.r)}${S(this.g)}${S(this.b)}`;
}
function M() {
    let opacity = this.opacity;
    return `${((opacity = isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity))) === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0))}, ${Math.max(0, Math.min(255, Math.round(this.g) || 0))}, ${Math.max(0, Math.min(255, Math.round(this.b) || 0))}${opacity === 1 ? ")" : `, ${opacity})`}`;
}
function S(e) {
    return ((e = Math.max(0, Math.min(255, Math.round(e) || 0))) < 16 ? "0" : "") + e.toString(16);
}
function A(e, t, n, r) {
    if (r <= 0) {
        n = NaN;
        t = NaN;
        e = NaN;
    } else if (n <= 0 || n >= 1) {
        t = NaN;
        e = NaN;
    } else if (t <= 0) {
        e = NaN;
    }
    return new j(e, t, n, r);
}
function k(e) {
    if (e instanceof j) {
        return new j(e.h, e.s, e.l, e.opacity);
    }
    if (!(e instanceof i)) {
        e = b(e);
    }
    if (!e) {
        return new j;
    }
    if (e instanceof j) {
        return e;
    }
    const t = (e = e.rgb()).r / 255;
    const n = e.g / 255;
    const r = e.b / 255;
    const o = Math.min(t, n, r);
    const a = Math.max(t, n, r);
    let l = NaN;
    let u = a - o;
    const s = (a + o) / 2;
    if (u) {
        l = t === a ? (n - r) / u + 6 * (n < r) : n === a ? (r - t) / u + 2 : (t - n) / u + 4;
        u /= s < 0.5 ? a + o : 2 - a - o;
        l *= 60;
    } else {
        u = s > 0 && s < 1 ? 0 : l;
    }
    return new j(l, u, s, e.opacity);
}
function j(e, t, n, r) {
    this.h = +e;
    this.s = +t;
    this.l = +n;
    this.opacity = +r;
}
function T(e, t, n) {
    return 255 * (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t);
}
r(i, b, {
    copy: function(e) {
        return Object.assign(new this.constructor, this, e);
    },
    displayable: function() {
        return this.rgb().displayable();
    },
    hex: y,
    formatHex: y,
    formatHsl: function() {
        return k(this).formatHsl();
    },
    formatRgb: m,
    toString: m
});
r(O, C, o(i, {
    brighter: function(e) {
        e = e == null ? 1 / 0.7 : (1 / 0.7) ** e;
        return new O(this.r * e, this.g * e, this.b * e, this.opacity);
    },
    darker: function(e) {
        e = e == null ? 0.7 : 0.7 ** e;
        return new O(this.r * e, this.g * e, this.b * e, this.opacity);
    },
    rgb: function() {
        return this;
    },
    displayable: function() {
        return this.r >= -0.5 && this.r < 255.5 && this.g >= -0.5 && this.g < 255.5 && this.b >= -0.5 && this.b < 255.5 && this.opacity >= 0 && this.opacity <= 1;
    },
    hex: E,
    formatHex: E,
    formatRgb: M,
    toString: M
}));
r(j, function(e, t, n, r) {
    if (arguments.length === 1) {
        return k(e);
    }
    return new j(e, t, n, r ?? 1);
}, o(i, {
    brighter: function(e) {
        e = e == null ? 1 / 0.7 : (1 / 0.7) ** e;
        return new j(this.h, this.s, this.l * e, this.opacity);
    },
    darker: function(e) {
        e = e == null ? 0.7 : 0.7 ** e;
        return new j(this.h, this.s, this.l * e, this.opacity);
    },
    rgb: function() {
        const e = this.h % 360 + 360 * (this.h < 0);
        const t = isNaN(e) || isNaN(this.s) ? 0 : this.s;
        const n = this.l;
        const r = n + (n < 0.5 ? n : 1 - n) * t;
        const o = 2 * n - r;
        return new O(T(e >= 240 ? e - 240 : e + 120, o, r), T(e, o, r), T(e < 120 ? e + 240 : e - 120, o, r), this.opacity);
    },
    displayable: function() {
        return (this.s >= 0 && this.s <= 1 || isNaN(this.s)) && this.l >= 0 && this.l <= 1 && this.opacity >= 0 && this.opacity <= 1;
    },
    formatHsl: function() {
        let opacity = this.opacity;
        return `${((opacity = isNaN(opacity) ? 1 : Math.max(0, Math.min(1, opacity))) === 1 ? "hsl(" : "hsla(") + (this.h || 0)}, ${100 * (this.s || 0)}%, ${100 * (this.l || 0)}%${opacity === 1 ? ")" : `, ${opacity})`}`;
    }
}));
