const o = 2 * Math.PI;
const i = o - 0.000001;
function constructor() {
    this._x0 = this._y0 = this._x1 = this._y1 = null;
    this._ = "";
}
function l() {
    return new constructor;
}
constructor.prototype = l.prototype = {
    constructor,
    moveTo: function(e, t) {
        this._ += `M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}`;
    },
    closePath: function() {
        if (this._x1 !== null) {
            this._x1 = this._x0;
            this._y1 = this._y0;
            this._ += "Z";
        }
    },
    lineTo: function(e, t) {
        this._ += `L${this._x1 = +e},${this._y1 = +t}`;
    },
    quadraticCurveTo: function(e, t, n, r) {
        this._ += `Q${+e},${+t},${this._x1 = +n},${this._y1 = +r}`;
    },
    bezierCurveTo: function(e, t, n, r, o, i) {
        this._ += `C${+e},${+t},${+n},${+r},${this._x1 = +o},${this._y1 = +i}`;
    },
    arcTo: function(e, t, n, o, i) {
        e = +e;
        t = +t;
        n = +n;
        o = +o;
        i = +i;
        const _x1 = this._x1;
        const _y1 = this._y1;
        const u = n - e;
        const s = o - t;
        const c = _x1 - e;
        const f = _y1 - t;
        const d = c * c + f * f;
        if (i < 0) {
            throw new Error(`negative radius: ${i}`);
        }
        if (this._x1 === null) {
            this._ += `M${this._x1 = e},${this._y1 = t}`;
        } else if (d > 0.000001) {
            if (Math.abs(f * u - s * c) > 0.000001 && i) {
                const p = n - _x1;
                const h = o - _y1;
                const v = u * u + s * s;
                const g = p * p + h * h;
                const y = Math.sqrt(v);
                const m = Math.sqrt(d);
                const b = i * Math.tan((Math.PI - Math.acos((v + d - g) / (2 * y * m))) / 2);
                const x = b / m;
                const w = b / y;
                if (Math.abs(x - 1) > 0.000001) {
                    this._ += `L${e + x * c},${t + x * f}`;
                }
                this._ += `A${i},${i},0,0,${+(f * p > c * h)},${this._x1 = e + w * u},${this._y1 = t + w * s}`;
            } else {
                this._ += `L${this._x1 = e},${this._y1 = t}`;
            }
        }
    },
    arc: function(e, t, n, a, l, u) {
        e = +e;
        t = +t;
        u = !!u;
        const s = (n = +n) * Math.cos(a);
        const c = n * Math.sin(a);
        const f = e + s;
        const d = t + c;
        const p = 1 ^ u;
        let h = u ? a - l : l - a;
        if (n < 0) {
            throw new Error(`negative radius: ${n}`);
        }
        if (this._x1 === null) {
            this._ += `M${f},${d}`;
        } else if (Math.abs(this._x1 - f) > 0.000001 || Math.abs(this._y1 - d) > 0.000001) {
            this._ += `L${f},${d}`;
        }
        if (n) {
            if (h < 0) {
                h = h % o + o;
            }
            if (h > i) {
                this._ += `A${n},${n},0,1,${p},${e - s},${t - c}A${n},${n},0,1,${p},${this._x1 = f},${this._y1 = d}`;
            } else if (h > 0.000001) {
                this._ += `A${n},${n},0,${+(h >= Math.PI)},${p},${this._x1 = e + n * Math.cos(l)},${this._y1 = t + n * Math.sin(l)}`;
            }
        }
    },
    rect: function(e, t, n, r) {
        this._ += `M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +t}h${+n}v${+r}h${-n}Z`;
    },
    toString: function() {
        return this._;
    }
};
const u = l;
const s = (e)=>function() {
        return e;
    };
const m = Math.PI / 2;
const b = 2 * Math.PI;
function x(e) {
    if (e > 1) {
        return 0;
    }
    if (e < -1) {
        return Math.PI;
    }
    return Math.acos(e);
}
function w(e) {
    if (e >= 1) {
        return m;
    }
    if (e <= -1) {
        return -m;
    }
    return Math.asin(e);
}
function _(e) {
    return e.innerRadius;
}
function C(e) {
    return e.outerRadius;
}
function O(e) {
    return e.startAngle;
}
function E(e) {
    return e.endAngle;
}
function M(e) {
    return e && e.padAngle;
}
function S(e, t, n, r, o, i, a, l) {
    const u = n - e;
    const s = r - t;
    const c = a - o;
    const f = l - i;
    let d = f * u - c * s;
    if (!(d * d < 1e-12)) {
        return [
            e + (d = (c * (t - i) - f * (e - o)) / d) * u,
            t + d * s
        ];
    }
}
function A(e, t, n, r, o, i, a) {
    const l = e - n;
    const u = t - r;
    const s = (a ? i : -i) / Math.sqrt(l * l + u * u);
    const c = s * u;
    const f = -s * l;
    const d = e + c;
    const h = t + f;
    const v = n + c;
    const y = r + f;
    const m = (d + v) / 2;
    const b = (h + y) / 2;
    const x = v - d;
    const w = y - h;
    const _ = x * x + w * w;
    const C = o - i;
    const O = d * y - v * h;
    const E = (w < 0 ? -1 : 1) * Math.sqrt(Math.max(0, C * C * _ - O * O));
    let cx = (O * w - x * E) / _;
    let cy = (-O * x - w * E) / _;
    const A = (O * w + x * E) / _;
    const k = (-O * x + w * E) / _;
    const j = cx - m;
    const T = cy - b;
    const P = A - m;
    const L = k - b;
    if (j * j + T * T > P * P + L * L) {
        cx = A;
        cy = k;
    }
    return {
        cx,
        cy,
        x01: -c,
        y01: -f,
        x11: cx * (o / C - 1),
        y11: cy * (o / C - 1)
    };
}
export const arc = function() {
    let e = _;
    let t = C;
    let n = s(0);
    let r = null;
    let o = O;
    let i = E;
    let a = M;
    let l = null;
    function p() {
        let s;
        let p;
        let _ = +e.apply(this, arguments);
        let C = +t.apply(this, arguments);
        const O = o.apply(this, arguments) - m;
        const E = i.apply(this, arguments) - m;
        const M = Math.abs(E - O);
        const k = E > O;
        if (!l) {
            l = s = u();
        }
        if (C < _) {
            p = C;
            C = _;
            _ = p;
        }
        if (C > 1e-12) {
            if (M > b - 1e-12) {
                l.moveTo(C * Math.cos(O), C * Math.sin(O));
                l.arc(0, 0, C, O, E, !k);
                if (_ > 1e-12) {
                    l.moveTo(_ * Math.cos(E), _ * Math.sin(E));
                    l.arc(0, 0, _, E, O, k);
                }
            } else {
                let j;
                let T;
                let P = O;
                let L = E;
                let z = O;
                let N = E;
                let D = M;
                let I = M;
                const R = a.apply(this, arguments) / 2;
                const H = R > 1e-12 && (r ? +r.apply(this, arguments) : Math.sqrt(_ * _ + C * C));
                const B = Math.min(Math.abs(C - _) / 2, +n.apply(this, arguments));
                let F = B;
                let V = B;
                if (H > 1e-12) {
                    let $ = w(H / _ * Math.sin(R));
                    let U = w(H / C * Math.sin(R));
                    if ((D -= 2 * $) > 1e-12) {
                        z += $ *= k ? 1 : -1;
                        N -= $;
                    } else {
                        D = 0;
                        z = N = (O + E) / 2;
                    }
                    if ((I -= 2 * U) > 1e-12) {
                        P += U *= k ? 1 : -1;
                        L -= U;
                    } else {
                        I = 0;
                        P = L = (O + E) / 2;
                    }
                }
                const Z = C * Math.cos(P);
                const W = C * Math.sin(P);
                const K = _ * Math.cos(N);
                const G = _ * Math.sin(N);
                if (B > 1e-12) {
                    let q;
                    var Y = C * Math.cos(L);
                    var X = C * Math.sin(L);
                    var J = _ * Math.cos(z);
                    var Q = _ * Math.sin(z);
                    if (M < Math.PI && (q = S(Z, W, J, Q, Y, X, K, G))) {
                        const ee = Z - q[0];
                        const te = W - q[1];
                        const ne = Y - q[0];
                        const re = X - q[1];
                        const oe = 1 / Math.sin(x((ee * ne + te * re) / (Math.sqrt(ee * ee + te * te) * Math.sqrt(ne * ne + re * re))) / 2);
                        const ie = Math.sqrt(q[0] * q[0] + q[1] * q[1]);
                        F = Math.min(B, (_ - ie) / (oe - 1));
                        V = Math.min(B, (C - ie) / (oe + 1));
                    }
                }
                if (I > 1e-12) {
                    if (V > 1e-12) {
                        j = A(J, Q, Z, W, C, V, k);
                        T = A(Y, X, K, G, C, V, k);
                        l.moveTo(j.cx + j.x01, j.cy + j.y01);
                        if (V < B) {
                            l.arc(j.cx, j.cy, V, Math.atan2(j.y01, j.x01), Math.atan2(T.y01, T.x01), !k);
                        } else {
                            l.arc(j.cx, j.cy, V, Math.atan2(j.y01, j.x01), Math.atan2(j.y11, j.x11), !k);
                            l.arc(0, 0, C, Math.atan2(j.cy + j.y11, j.cx + j.x11), Math.atan2(T.cy + T.y11, T.cx + T.x11), !k);
                            l.arc(T.cx, T.cy, V, Math.atan2(T.y11, T.x11), Math.atan2(T.y01, T.x01), !k);
                        }
                    } else {
                        l.moveTo(Z, W);
                        l.arc(0, 0, C, P, L, !k);
                    }
                } else {
                    l.moveTo(Z, W);
                }
                if (_ > 1e-12 && D > 1e-12) {
                    if (F > 1e-12) {
                        j = A(K, G, Y, X, _, -F, k);
                        T = A(Z, W, J, Q, _, -F, k);
                        l.lineTo(j.cx + j.x01, j.cy + j.y01);
                        if (F < B) {
                            l.arc(j.cx, j.cy, F, Math.atan2(j.y01, j.x01), Math.atan2(T.y01, T.x01), !k);
                        } else {
                            l.arc(j.cx, j.cy, F, Math.atan2(j.y01, j.x01), Math.atan2(j.y11, j.x11), !k);
                            l.arc(0, 0, _, Math.atan2(j.cy + j.y11, j.cx + j.x11), Math.atan2(T.cy + T.y11, T.cx + T.x11), k);
                            l.arc(T.cx, T.cy, F, Math.atan2(T.y11, T.x11), Math.atan2(T.y01, T.x01), !k);
                        }
                    } else {
                        l.arc(0, 0, _, N, z, k);
                    }
                } else {
                    l.lineTo(K, G);
                }
            }
        } else {
            l.moveTo(0, 0);
        }
        l.closePath();
        if (s) {
            l = null;
            return `${s}` || null;
        }
    }
    p.centroid = function() {
        const n = (+e.apply(this, arguments) + +t.apply(this, arguments)) / 2;
        const r = (+o.apply(this, arguments) + +i.apply(this, arguments)) / 2 - Math.PI / 2;
        return [
            Math.cos(r) * n,
            Math.sin(r) * n
        ];
    };
    p.innerRadius = function(t) {
        if (arguments.length) {
            e = typeof t === "function" ? t : s(+t);
            return p;
        }
        return e;
    };
    p.outerRadius = function(e) {
        if (arguments.length) {
            t = typeof e === "function" ? e : s(+e);
            return p;
        }
        return t;
    };
    p.cornerRadius = function(e) {
        if (arguments.length) {
            n = typeof e === "function" ? e : s(+e);
            return p;
        }
        return n;
    };
    p.padRadius = function(e) {
        if (arguments.length) {
            r = e == null ? null : typeof e === "function" ? e : s(+e);
            return p;
        }
        return r;
    };
    p.startAngle = function(e) {
        if (arguments.length) {
            o = typeof e === "function" ? e : s(+e);
            return p;
        }
        return o;
    };
    p.endAngle = function(e) {
        if (arguments.length) {
            i = typeof e === "function" ? e : s(+e);
            return p;
        }
        return i;
    };
    p.padAngle = function(e) {
        if (arguments.length) {
            a = typeof e === "function" ? e : s(+e);
            return p;
        }
        return a;
    };
    p.context = function(e) {
        if (arguments.length) {
            l = e ?? null;
            return p;
        }
        return l;
    };
    return p;
};
function j(e) {
    this._context = e;
}
j.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 1) {
            this._context.closePath();
        }
        this._line = 1 - this._line;
    },
    point: function(e, t) {
        e = +e;
        t = +t;
        switch(this._point){
            case 0:
                this._point = 1;
                if (this._line) {
                    this._context.lineTo(e, t);
                } else {
                    this._context.moveTo(e, t);
                }
                break;
            case 1:
                this._point = 2;
            default:
                this._context.lineTo(e, t);
        }
    }
};
export const curveLinear = function(e) {
    return new j(e);
};
function P(e) {
    return e[0];
}
function L(e) {
    return e[1];
}
export const line = function() {
    let e = P;
    let t = L;
    let n = s(true);
    let r = null;
    let o = curveLinear;
    let i = null;
    function a(a) {
        let l;
        let s;
        let c;
        const a_length = a.length;
        let d = false;
        if (r == null) {
            i = o(c = u());
        }
        for(l = 0; l <= a_length; ++l){
            if (!(l < a_length && n(s = a[l], l, a)) === d) {
                if (d = !d) {
                    i.lineStart();
                } else {
                    i.lineEnd();
                }
            }
            if (d) {
                i.point(+e(s, l, a), +t(s, l, a));
            }
        }
        if (c) {
            i = null;
            return `${c}` || null;
        }
    }
    a.x = function(t) {
        if (arguments.length) {
            e = typeof t === "function" ? t : s(+t);
            return a;
        }
        return e;
    };
    a.y = function(e) {
        if (arguments.length) {
            t = typeof e === "function" ? e : s(+e);
            return a;
        }
        return t;
    };
    a.defined = function(e) {
        if (arguments.length) {
            n = typeof e === "function" ? e : s(!!e);
            return a;
        }
        return n;
    };
    a.curve = function(e) {
        if (arguments.length) {
            o = e;
            if (r != null) {
                i = o(r);
            }
            return a;
        }
        return o;
    };
    a.context = function(e) {
        if (arguments.length) {
            if (e == null) {
                r = i = null;
            } else {
                i = o(r = e);
            }
            return a;
        }
        return r;
    };
    return a;
};
export const area = function() {
    let e = P;
    let t = null;
    let n = s(0);
    let r = L;
    let o = s(true);
    let i = null;
    let a = curveLinear;
    let l = null;
    function c(s) {
        let c;
        let f;
        let d;
        let p;
        let h;
        const s_length = s.length;
        let g = false;
        const y = new Array(s_length);
        const m = new Array(s_length);
        if (i == null) {
            l = a(h = u());
        }
        for(c = 0; c <= s_length; ++c){
            if (!(c < s_length && o(p = s[c], c, s)) === g) {
                if (g = !g) {
                    f = c;
                    l.areaStart();
                    l.lineStart();
                } else {
                    l.lineEnd();
                    l.lineStart();
                    for(d = c - 1; d >= f; --d){
                        l.point(y[d], m[d]);
                    }
                    l.lineEnd();
                    l.areaEnd();
                }
            }
            if (g) {
                y[c] = +e(p, c, s);
                m[c] = +n(p, c, s);
                l.point(t ? +t(p, c, s) : y[c], r ? +r(p, c, s) : m[c]);
            }
        }
        if (h) {
            l = null;
            return `${h}` || null;
        }
    }
    function f() {
        return line().defined(o).curve(a).context(i);
    }
    c.x = function(n) {
        if (arguments.length) {
            e = typeof n === "function" ? n : s(+n);
            t = null;
            return c;
        }
        return e;
    };
    c.x0 = function(t) {
        if (arguments.length) {
            e = typeof t === "function" ? t : s(+t);
            return c;
        }
        return e;
    };
    c.x1 = function(e) {
        if (arguments.length) {
            t = e == null ? null : typeof e === "function" ? e : s(+e);
            return c;
        }
        return t;
    };
    c.y = function(e) {
        if (arguments.length) {
            n = typeof e === "function" ? e : s(+e);
            r = null;
            return c;
        }
        return n;
    };
    c.y0 = function(e) {
        if (arguments.length) {
            n = typeof e === "function" ? e : s(+e);
            return c;
        }
        return n;
    };
    c.y1 = function(e) {
        if (arguments.length) {
            r = e == null ? null : typeof e === "function" ? e : s(+e);
            return c;
        }
        return r;
    };
    c.lineX0 = c.lineY0 = function() {
        return f().x(e).y(n);
    };
    c.lineY1 = function() {
        return f().x(e).y(r);
    };
    c.lineX1 = function() {
        return f().x(t).y(n);
    };
    c.defined = function(e) {
        if (arguments.length) {
            o = typeof e === "function" ? e : s(!!e);
            return c;
        }
        return o;
    };
    c.curve = function(e) {
        if (arguments.length) {
            a = e;
            if (i != null) {
                l = a(i);
            }
            return c;
        }
        return a;
    };
    c.context = function(e) {
        if (arguments.length) {
            if (e == null) {
                i = l = null;
            } else {
                l = a(i = e);
            }
            return c;
        }
        return i;
    };
    return c;
};
const D = function(e, t) {
    if (t < e) {
        return -1;
    }
    if (t > e) {
        return 1;
    }
    if (t >= e) {
        return 0;
    }
    return NaN;
};
const I = function(e) {
    return e;
};
export const pie = function() {
    let e = I;
    let t = D;
    let n = null;
    let r = s(0);
    let o = s(b);
    let i = s(0);
    function a(a) {
        let index;
        let u;
        let s;
        let endAngle;
        let f;
        const a_length = a.length;
        let p = 0;
        const h = new Array(a_length);
        const v = new Array(a_length);
        let startAngle = +r.apply(this, arguments);
        const y = Math.min(b, Math.max(-b, o.apply(this, arguments) - startAngle));
        const padAngle = Math.min(Math.abs(y) / a_length, i.apply(this, arguments));
        const x = padAngle * (y < 0 ? -1 : 1);
        for(index = 0; index < a_length; ++index){
            if ((f = v[h[index] = index] = +e(a[index], index, a)) > 0) {
                p += f;
            }
        }
        if (t != null) {
            h.sort((e, n)=>t(v[e], v[n]));
        } else if (n != null) {
            h.sort((e, t)=>n(a[e], a[t]));
        }
        index = 0;
        for(s = p ? (y - a_length * x) / p : 0; index < a_length; ++index, startAngle = endAngle){
            u = h[index];
            endAngle = startAngle + ((f = v[u]) > 0 ? f * s : 0) + x;
            v[u] = {
                data: a[u],
                index,
                value: f,
                startAngle,
                endAngle,
                padAngle
            };
        }
        return v;
    }
    a.value = function(t) {
        if (arguments.length) {
            e = typeof t === "function" ? t : s(+t);
            return a;
        }
        return e;
    };
    a.sortValues = function(e) {
        if (arguments.length) {
            t = e;
            n = null;
            return a;
        }
        return t;
    };
    a.sort = function(e) {
        if (arguments.length) {
            n = e;
            t = null;
            return a;
        }
        return n;
    };
    a.startAngle = function(e) {
        if (arguments.length) {
            r = typeof e === "function" ? e : s(+e);
            return a;
        }
        return r;
    };
    a.endAngle = function(e) {
        if (arguments.length) {
            o = typeof e === "function" ? e : s(+e);
            return a;
        }
        return o;
    };
    a.padAngle = function(e) {
        if (arguments.length) {
            i = typeof e === "function" ? e : s(+e);
            return a;
        }
        return i;
    };
    return a;
};
const H = F(curveLinear);
function B(e) {
    this._curve = e;
}
function F(e) {
    function t(t) {
        return new B(e(t));
    }
    t._curve = e;
    return t;
}
function V(e) {
    const e_curve = e.curve;
    e.angle = e.x;
    delete e.x;
    e.radius = e.y;
    delete e.y;
    e.curve = function(e) {
        if (arguments.length) {
            return e_curve(F(e));
        }
        return e_curve()._curve;
    };
    return e;
}
B.prototype = {
    areaStart: function() {
        this._curve.areaStart();
    },
    areaEnd: function() {
        this._curve.areaEnd();
    },
    lineStart: function() {
        this._curve.lineStart();
    },
    lineEnd: function() {
        this._curve.lineEnd();
    },
    point: function(e, t) {
        this._curve.point(t * Math.sin(e), t * -Math.cos(e));
    }
};
export const lineRadial = function() {
    return V(line().curve(H));
};
export { lineRadial as radialLine };
export const areaRadial = function() {
    const e = area().curve(H);
    const { curve, lineX0, lineX1, lineY0, lineY1 } = e;
    e.angle = e.x;
    delete e.x;
    e.startAngle = e.x0;
    delete e.x0;
    e.endAngle = e.x1;
    delete e.x1;
    e.radius = e.y;
    delete e.y;
    e.innerRadius = e.y0;
    delete e.y0;
    e.outerRadius = e.y1;
    delete e.y1;
    e.lineStartAngle = function() {
        return V(lineX0());
    };
    delete e.lineX0;
    e.lineEndAngle = function() {
        return V(lineX1());
    };
    delete e.lineX1;
    e.lineInnerRadius = function() {
        return V(lineY0());
    };
    delete e.lineY0;
    e.lineOuterRadius = function() {
        return V(lineY1());
    };
    delete e.lineY1;
    e.curve = function(e) {
        if (arguments.length) {
            return curve(F(e));
        }
        return curve()._curve;
    };
    return e;
};
export { areaRadial as radialArea };
export const pointRadial = function(e, t) {
    return [
        (t = +t) * Math.cos(e -= Math.PI / 2),
        t * Math.sin(e)
    ];
};
const slice = Array.prototype.slice;
function K(e) {
    return e.source;
}
function G(e) {
    return e.target;
}
function q(e) {
    let t = K;
    let n = G;
    let r = P;
    let o = L;
    let i = null;
    function a() {
        let a;
        const l = slice.call(arguments);
        const s = t.apply(this, l);
        const c = n.apply(this, l);
        if (!i) {
            i = a = u();
        }
        e(i, +r.apply(this, (l[0] = s, l)), +o.apply(this, l), +r.apply(this, (l[0] = c, l)), +o.apply(this, l));
        if (a) {
            i = null;
            return `${a}` || null;
        }
    }
    a.source = function(e) {
        if (arguments.length) {
            t = e;
            return a;
        }
        return t;
    };
    a.target = function(e) {
        if (arguments.length) {
            n = e;
            return a;
        }
        return n;
    };
    a.x = function(e) {
        if (arguments.length) {
            r = typeof e === "function" ? e : s(+e);
            return a;
        }
        return r;
    };
    a.y = function(e) {
        if (arguments.length) {
            o = typeof e === "function" ? e : s(+e);
            return a;
        }
        return o;
    };
    a.context = function(e) {
        if (arguments.length) {
            i = e ?? null;
            return a;
        }
        return i;
    };
    return a;
}
function Y(e, t, n, r, o) {
    e.moveTo(t, n);
    e.bezierCurveTo(t = (t + r) / 2, n, t, o, r, o);
}
function X(e, t, n, r, o) {
    e.moveTo(t, n);
    e.bezierCurveTo(t, n = (n + o) / 2, r, n, r, o);
}
function J(e, t, n, r, o) {
    const i = pointRadial(t, n);
    const a = pointRadial(t, n = (n + o) / 2);
    const l = pointRadial(r, n);
    const u = pointRadial(r, o);
    e.moveTo(i[0], i[1]);
    e.bezierCurveTo(a[0], a[1], l[0], l[1], u[0], u[1]);
}
export function linkHorizontal() {
    return q(Y);
}
export function linkVertical() {
    return q(X);
}
export function linkRadial() {
    const e = q(J);
    e.angle = e.x;
    delete e.x;
    e.radius = e.y;
    delete e.y;
    return e;
}
export const symbolCircle = {
    draw: function(e, t) {
        const n = Math.sqrt(t / Math.PI);
        e.moveTo(n, 0);
        e.arc(0, 0, n, 0, b);
    }
};
export const symbolCross = {
    draw: function(e, t) {
        const n = Math.sqrt(t / 5) / 2;
        e.moveTo(-3 * n, -n);
        e.lineTo(-n, -n);
        e.lineTo(-n, -3 * n);
        e.lineTo(n, -3 * n);
        e.lineTo(n, -n);
        e.lineTo(3 * n, -n);
        e.lineTo(3 * n, n);
        e.lineTo(n, n);
        e.lineTo(n, 3 * n);
        e.lineTo(-n, 3 * n);
        e.lineTo(-n, n);
        e.lineTo(-3 * n, n);
        e.closePath();
    }
};
const oe = Math.sqrt(1 / 3);
const ie = 2 * oe;
export const symbolDiamond = {
    draw: function(e, t) {
        const n = Math.sqrt(t / ie);
        const r = n * oe;
        e.moveTo(0, -n);
        e.lineTo(r, 0);
        e.lineTo(0, n);
        e.lineTo(-r, 0);
        e.closePath();
    }
};
const le = Math.sin(Math.PI / 10) / Math.sin(7 * Math.PI / 10);
const ue = Math.sin(b / 10) * le;
const se = -Math.cos(b / 10) * le;
export const symbolStar = {
    draw: function(e, t) {
        const n = Math.sqrt(0.8908130915292852 * t);
        const r = ue * n;
        const o = se * n;
        e.moveTo(0, -n);
        e.lineTo(r, o);
        for(let i = 1; i < 5; ++i){
            const a = b * i / 5;
            const l = Math.cos(a);
            const u = Math.sin(a);
            e.lineTo(u * n, -l * n);
            e.lineTo(l * r - u * o, u * r + l * o);
        }
        e.closePath();
    }
};
export const symbolSquare = {
    draw: function(e, t) {
        const n = Math.sqrt(t);
        const r = -n / 2;
        e.rect(r, r, n, n);
    }
};
const de = Math.sqrt(3);
export const symbolTriangle = {
    draw: function(e, t) {
        const n = -Math.sqrt(t / (3 * de));
        e.moveTo(0, 2 * n);
        e.lineTo(-de * n, -n);
        e.lineTo(de * n, -n);
        e.closePath();
    }
};
const he = Math.sqrt(3) / 2;
const ve = 1 / Math.sqrt(12);
const ge = 3 * (ve / 2 + 1);
export const symbolWye = {
    draw: function(e, t) {
        const n = Math.sqrt(t / ge);
        const r = n / 2;
        const o = n * ve;
        const i = r;
        const a = n * ve + n;
        const l = -i;
        const u = a;
        e.moveTo(r, o);
        e.lineTo(i, a);
        e.lineTo(l, u);
        e.lineTo(-0.5 * r - he * o, he * r + -0.5 * o);
        e.lineTo(-0.5 * i - he * a, he * i + -0.5 * a);
        e.lineTo(-0.5 * l - he * u, he * l + -0.5 * u);
        e.lineTo(-0.5 * r + he * o, -0.5 * o - he * r);
        e.lineTo(-0.5 * i + he * a, -0.5 * a - he * i);
        e.lineTo(-0.5 * l + he * u, -0.5 * u - he * l);
        e.closePath();
    }
};
export const symbols = [
    symbolCircle,
    symbolCross,
    symbolDiamond,
    symbolSquare,
    symbolStar,
    symbolTriangle,
    symbolWye
];
export const symbol = function() {
    let e = s(symbolCircle);
    let t = s(64);
    let n = null;
    function r() {
        let r;
        if (!n) {
            n = r = u();
        }
        e.apply(this, arguments).draw(n, +t.apply(this, arguments));
        if (r) {
            n = null;
            return `${r}` || null;
        }
    }
    r.type = function(t) {
        if (arguments.length) {
            e = typeof t === "function" ? t : s(t);
            return r;
        }
        return e;
    };
    r.size = function(e) {
        if (arguments.length) {
            t = typeof e === "function" ? e : s(+e);
            return r;
        }
        return t;
    };
    r.context = function(e) {
        if (arguments.length) {
            n = e ?? null;
            return r;
        }
        return n;
    };
    return r;
};
const xe = function() {};
function we(e, t, n) {
    e._context.bezierCurveTo((2 * e._x0 + e._x1) / 3, (2 * e._y0 + e._y1) / 3, (e._x0 + 2 * e._x1) / 3, (e._y0 + 2 * e._y1) / 3, (e._x0 + 4 * e._x1 + t) / 6, (e._y0 + 4 * e._y1 + n) / 6);
}
function _e(e) {
    this._context = e;
}
_e.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 3:
                we(this, this._x1, this._y1);
            case 2:
                this._context.lineTo(this._x1, this._y1);
        }
        if (this._line || this._line !== 0 && this._point === 1) {
            this._context.closePath();
        }
        this._line = 1 - this._line;
    },
    point: function(e, t) {
        e = +e;
        t = +t;
        switch(this._point){
            case 0:
                this._point = 1;
                if (this._line) {
                    this._context.lineTo(e, t);
                } else {
                    this._context.moveTo(e, t);
                }
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
            default:
                we(this, e, t);
        }
        this._x0 = this._x1;
        this._x1 = e;
        this._y0 = this._y1;
        this._y1 = t;
    }
};
export const curveBasis = function(e) {
    return new _e(e);
};
function Oe(e) {
    this._context = e;
}
Oe.prototype = {
    areaStart: xe,
    areaEnd: xe,
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 1:
                this._context.moveTo(this._x2, this._y2);
                this._context.closePath();
                break;
            case 2:
                this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
                this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
                this._context.closePath();
                break;
            case 3:
                this.point(this._x2, this._y2);
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
        }
    },
    point: function(e, t) {
        e = +e;
        t = +t;
        switch(this._point){
            case 0:
                this._point = 1;
                this._x2 = e;
                this._y2 = t;
                break;
            case 1:
                this._point = 2;
                this._x3 = e;
                this._y3 = t;
                break;
            case 2:
                this._point = 3;
                this._x4 = e;
                this._y4 = t;
                this._context.moveTo((this._x0 + 4 * this._x1 + e) / 6, (this._y0 + 4 * this._y1 + t) / 6);
                break;
            default:
                we(this, e, t);
        }
        this._x0 = this._x1;
        this._x1 = e;
        this._y0 = this._y1;
        this._y1 = t;
    }
};
export const curveBasisClosed = function(e) {
    return new Oe(e);
};
function Me(e) {
    this._context = e;
}
Me.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 3) {
            this._context.closePath();
        }
        this._line = 1 - this._line;
    },
    point: function(e, t) {
        e = +e;
        t = +t;
        switch(this._point){
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                const n = (this._x0 + 4 * this._x1 + e) / 6;
                const r = (this._y0 + 4 * this._y1 + t) / 6;
                if (this._line) {
                    this._context.lineTo(n, r);
                } else {
                    this._context.moveTo(n, r);
                }
                break;
            case 3:
                this._point = 4;
            default:
                we(this, e, t);
        }
        this._x0 = this._x1;
        this._x1 = e;
        this._y0 = this._y1;
        this._y1 = t;
    }
};
export const curveBasisOpen = function(e) {
    return new Me(e);
};
function Ae(e, t) {
    this._basis = new _e(e);
    this._beta = t;
}
Ae.prototype = {
    lineStart: function() {
        this._x = [];
        this._y = [];
        this._basis.lineStart();
    },
    lineEnd: function() {
        const e = this._x;
        const t = this._y;
        const n = e.length - 1;
        if (n > 0) {
            let r;
            const o = e[0];
            const i = t[0];
            const a = e[n] - o;
            const l = t[n] - i;
            for(let u = -1; ++u <= n;){
                r = u / n;
                this._basis.point(this._beta * e[u] + (1 - this._beta) * (o + r * a), this._beta * t[u] + (1 - this._beta) * (i + r * l));
            }
        }
        this._x = this._y = null;
        this._basis.lineEnd();
    },
    point: function(e, t) {
        this._x.push(+e);
        this._y.push(+t);
    }
};
export const curveBundle = function e(t) {
    function n(e) {
        if (t === 1) {
            return new _e(e);
        }
        return new Ae(e, t);
    }
    n.beta = function(t) {
        return e(+t);
    };
    return n;
}(0.85);
function je(e, t, n) {
    e._context.bezierCurveTo(e._x1 + e._k * (e._x2 - e._x0), e._y1 + e._k * (e._y2 - e._y0), e._x2 + e._k * (e._x1 - t), e._y2 + e._k * (e._y1 - n), e._x2, e._y2);
}
function Te(e, t) {
    this._context = e;
    this._k = (1 - t) / 6;
}
Te.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                je(this, this._x1, this._y1);
        }
        if (this._line || this._line !== 0 && this._point === 1) {
            this._context.closePath();
        }
        this._line = 1 - this._line;
    },
    point: function(e, t) {
        e = +e;
        t = +t;
        switch(this._point){
            case 0:
                this._point = 1;
                if (this._line) {
                    this._context.lineTo(e, t);
                } else {
                    this._context.moveTo(e, t);
                }
                break;
            case 1:
                this._point = 2;
                this._x1 = e;
                this._y1 = t;
                break;
            case 2:
                this._point = 3;
            default:
                je(this, e, t);
        }
        this._x0 = this._x1;
        this._x1 = this._x2;
        this._x2 = e;
        this._y0 = this._y1;
        this._y1 = this._y2;
        this._y2 = t;
    }
};
export const curveCardinal = function e(t) {
    function n(e) {
        return new Te(e, t);
    }
    n.tension = function(t) {
        return e(+t);
    };
    return n;
}(0);
function Le(e, t) {
    this._context = e;
    this._k = (1 - t) / 6;
}
Le.prototype = {
    areaStart: xe,
    areaEnd: xe,
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 1:
                this._context.moveTo(this._x3, this._y3);
                this._context.closePath();
                break;
            case 2:
                this._context.lineTo(this._x3, this._y3);
                this._context.closePath();
                break;
            case 3:
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
                this.point(this._x5, this._y5);
        }
    },
    point: function(e, t) {
        e = +e;
        t = +t;
        switch(this._point){
            case 0:
                this._point = 1;
                this._x3 = e;
                this._y3 = t;
                break;
            case 1:
                this._point = 2;
                this._context.moveTo(this._x4 = e, this._y4 = t);
                break;
            case 2:
                this._point = 3;
                this._x5 = e;
                this._y5 = t;
                break;
            default:
                je(this, e, t);
        }
        this._x0 = this._x1;
        this._x1 = this._x2;
        this._x2 = e;
        this._y0 = this._y1;
        this._y1 = this._y2;
        this._y2 = t;
    }
};
export const curveCardinalClosed = function e(t) {
    function n(e) {
        return new Le(e, t);
    }
    n.tension = function(t) {
        return e(+t);
    };
    return n;
}(0);
function Ne(e, t) {
    this._context = e;
    this._k = (1 - t) / 6;
}
Ne.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 3) {
            this._context.closePath();
        }
        this._line = 1 - this._line;
    },
    point: function(e, t) {
        e = +e;
        t = +t;
        switch(this._point){
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                if (this._line) {
                    this._context.lineTo(this._x2, this._y2);
                } else {
                    this._context.moveTo(this._x2, this._y2);
                }
                break;
            case 3:
                this._point = 4;
            default:
                je(this, e, t);
        }
        this._x0 = this._x1;
        this._x1 = this._x2;
        this._x2 = e;
        this._y0 = this._y1;
        this._y1 = this._y2;
        this._y2 = t;
    }
};
export const curveCardinalOpen = function e(t) {
    function n(e) {
        return new Ne(e, t);
    }
    n.tension = function(t) {
        return e(+t);
    };
    return n;
}(0);
function Ie(e, t, n) {
    let e__x1 = e._x1;
    let e__y1 = e._y1;
    let e__x2 = e._x2;
    let e__y2 = e._y2;
    if (e._l01_a > 1e-12) {
        const l = 2 * e._l01_2a + 3 * e._l01_a * e._l12_a + e._l12_2a;
        const u = 3 * e._l01_a * (e._l01_a + e._l12_a);
        e__x1 = (e__x1 * l - e._x0 * e._l12_2a + e._x2 * e._l01_2a) / u;
        e__y1 = (e__y1 * l - e._y0 * e._l12_2a + e._y2 * e._l01_2a) / u;
    }
    if (e._l23_a > 1e-12) {
        const s = 2 * e._l23_2a + 3 * e._l23_a * e._l12_a + e._l12_2a;
        const c = 3 * e._l23_a * (e._l23_a + e._l12_a);
        e__x2 = (e__x2 * s + e._x1 * e._l23_2a - t * e._l12_2a) / c;
        e__y2 = (e__y2 * s + e._y1 * e._l23_2a - n * e._l12_2a) / c;
    }
    e._context.bezierCurveTo(e__x1, e__y1, e__x2, e__y2, e._x2, e._y2);
}
function Re(e, t) {
    this._context = e;
    this._alpha = t;
}
Re.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x2, this._y2);
                break;
            case 3:
                this.point(this._x2, this._y2);
        }
        if (this._line || this._line !== 0 && this._point === 1) {
            this._context.closePath();
        }
        this._line = 1 - this._line;
    },
    point: function(e, t) {
        e = +e;
        t = +t;
        if (this._point) {
            const n = this._x2 - e;
            const r = this._y2 - t;
            this._l23_a = Math.sqrt(this._l23_2a = (n * n + r * r) ** this._alpha);
        }
        switch(this._point){
            case 0:
                this._point = 1;
                if (this._line) {
                    this._context.lineTo(e, t);
                } else {
                    this._context.moveTo(e, t);
                }
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
            default:
                Ie(this, e, t);
        }
        this._l01_a = this._l12_a;
        this._l12_a = this._l23_a;
        this._l01_2a = this._l12_2a;
        this._l12_2a = this._l23_2a;
        this._x0 = this._x1;
        this._x1 = this._x2;
        this._x2 = e;
        this._y0 = this._y1;
        this._y1 = this._y2;
        this._y2 = t;
    }
};
export const curveCatmullRom = function e(t) {
    function n(e) {
        if (t) {
            return new Re(e, t);
        }
        return new Te(e, 0);
    }
    n.alpha = function(t) {
        return e(+t);
    };
    return n;
}(0.5);
function Be(e, t) {
    this._context = e;
    this._alpha = t;
}
Be.prototype = {
    areaStart: xe,
    areaEnd: xe,
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
        this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 1:
                this._context.moveTo(this._x3, this._y3);
                this._context.closePath();
                break;
            case 2:
                this._context.lineTo(this._x3, this._y3);
                this._context.closePath();
                break;
            case 3:
                this.point(this._x3, this._y3);
                this.point(this._x4, this._y4);
                this.point(this._x5, this._y5);
        }
    },
    point: function(e, t) {
        e = +e;
        t = +t;
        if (this._point) {
            const n = this._x2 - e;
            const r = this._y2 - t;
            this._l23_a = Math.sqrt(this._l23_2a = (n * n + r * r) ** this._alpha);
        }
        switch(this._point){
            case 0:
                this._point = 1;
                this._x3 = e;
                this._y3 = t;
                break;
            case 1:
                this._point = 2;
                this._context.moveTo(this._x4 = e, this._y4 = t);
                break;
            case 2:
                this._point = 3;
                this._x5 = e;
                this._y5 = t;
                break;
            default:
                Ie(this, e, t);
        }
        this._l01_a = this._l12_a;
        this._l12_a = this._l23_a;
        this._l01_2a = this._l12_2a;
        this._l12_2a = this._l23_2a;
        this._x0 = this._x1;
        this._x1 = this._x2;
        this._x2 = e;
        this._y0 = this._y1;
        this._y1 = this._y2;
        this._y2 = t;
    }
};
export const curveCatmullRomClosed = function e(t) {
    function n(e) {
        if (t) {
            return new Be(e, t);
        }
        return new Le(e, 0);
    }
    n.alpha = function(t) {
        return e(+t);
    };
    return n;
}(0.5);
function Ve(e, t) {
    this._context = e;
    this._alpha = t;
}
Ve.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN;
        this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
    },
    lineEnd: function() {
        if (this._line || this._line !== 0 && this._point === 3) {
            this._context.closePath();
        }
        this._line = 1 - this._line;
    },
    point: function(e, t) {
        e = +e;
        t = +t;
        if (this._point) {
            const n = this._x2 - e;
            const r = this._y2 - t;
            this._l23_a = Math.sqrt(this._l23_2a = (n * n + r * r) ** this._alpha);
        }
        switch(this._point){
            case 0:
                this._point = 1;
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                if (this._line) {
                    this._context.lineTo(this._x2, this._y2);
                } else {
                    this._context.moveTo(this._x2, this._y2);
                }
                break;
            case 3:
                this._point = 4;
            default:
                Ie(this, e, t);
        }
        this._l01_a = this._l12_a;
        this._l12_a = this._l23_a;
        this._l01_2a = this._l12_2a;
        this._l12_2a = this._l23_2a;
        this._x0 = this._x1;
        this._x1 = this._x2;
        this._x2 = e;
        this._y0 = this._y1;
        this._y1 = this._y2;
        this._y2 = t;
    }
};
export const curveCatmullRomOpen = function e(t) {
    function n(e) {
        if (t) {
            return new Ve(e, t);
        }
        return new Ne(e, 0);
    }
    n.alpha = function(t) {
        return e(+t);
    };
    return n;
}(0.5);
function Ue(e) {
    this._context = e;
}
Ue.prototype = {
    areaStart: xe,
    areaEnd: xe,
    lineStart: function() {
        this._point = 0;
    },
    lineEnd: function() {
        if (this._point) {
            this._context.closePath();
        }
    },
    point: function(e, t) {
        e = +e;
        t = +t;
        if (this._point) {
            this._context.lineTo(e, t);
        } else {
            this._point = 1;
            this._context.moveTo(e, t);
        }
    }
};
export const curveLinearClosed = function(e) {
    return new Ue(e);
};
function We(e) {
    if (e < 0) {
        return -1;
    }
    return 1;
}
function Ke(e, t, n) {
    const r = e._x1 - e._x0;
    const o = t - e._x1;
    const i = (e._y1 - e._y0) / (r || o < 0 && -0);
    const a = (n - e._y1) / (o || r < 0 && -0);
    const l = (i * o + a * r) / (r + o);
    return (We(i) + We(a)) * Math.min(Math.abs(i), Math.abs(a), 0.5 * Math.abs(l)) || 0;
}
function Ge(e, t) {
    const n = e._x1 - e._x0;
    if (n) {
        return (3 * (e._y1 - e._y0) / n - t) / 2;
    }
    return t;
}
function qe(e, t, n) {
    const { _x0, _y0, _x1, _y1 } = e;
    const l = (_x1 - _x0) / 3;
    e._context.bezierCurveTo(_x0 + l, _y0 + l * t, _x1 - l, _y1 - l * n, _x1, _y1);
}
function Ye(e) {
    this._context = e;
}
function Xe(e) {
    this._context = new Je(e);
}
function Je(e) {
    this._context = e;
}
export function curveMonotoneX(e) {
    return new Ye(e);
}
export function curveMonotoneY(e) {
    return new Xe(e);
}
function tt(e) {
    this._context = e;
}
function nt(e) {
    let t;
    let n;
    const r = e.length - 1;
    const o = new Array(r);
    const i = new Array(r);
    const a = new Array(r);
    o[0] = 0;
    i[0] = 2;
    a[0] = e[0] + 2 * e[1];
    for(t = 1; t < r - 1; ++t){
        o[t] = 1;
        i[t] = 4;
        a[t] = 4 * e[t] + 2 * e[t + 1];
    }
    o[r - 1] = 2;
    i[r - 1] = 7;
    a[r - 1] = 8 * e[r - 1] + e[r];
    for(t = 1; t < r; ++t){
        n = o[t] / i[t - 1];
        i[t] -= n;
        a[t] -= n * a[t - 1];
    }
    o[r - 1] = a[r - 1] / i[r - 1];
    for(t = r - 2; t >= 0; --t){
        o[t] = (a[t] - o[t + 1]) / i[t];
    }
    i[r - 1] = (e[r] + o[r - 1]) / 2;
    for(t = 0; t < r - 1; ++t){
        i[t] = 2 * e[t + 1] - o[t + 1];
    }
    return [
        o,
        i
    ];
}
Ye.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                qe(this, this._t0, Ge(this, this._t0));
        }
        if (this._line || this._line !== 0 && this._point === 1) {
            this._context.closePath();
        }
        this._line = 1 - this._line;
    },
    point: function(e, t) {
        let n = NaN;
        t = +t;
        if ((e = +e) !== this._x1 || t !== this._y1) {
            switch(this._point){
                case 0:
                    this._point = 1;
                    if (this._line) {
                        this._context.lineTo(e, t);
                    } else {
                        this._context.moveTo(e, t);
                    }
                    break;
                case 1:
                    this._point = 2;
                    break;
                case 2:
                    this._point = 3;
                    qe(this, Ge(this, n = Ke(this, e, t)), n);
                    break;
                default:
                    qe(this, this._t0, n = Ke(this, e, t));
            }
            this._x0 = this._x1;
            this._x1 = e;
            this._y0 = this._y1;
            this._y1 = t;
            this._t0 = n;
        }
    }
};
(Xe.prototype = Object.create(Ye.prototype)).point = function(e, t) {
    Ye.prototype.point.call(this, t, e);
};
Je.prototype = {
    moveTo: function(e, t) {
        this._context.moveTo(t, e);
    },
    closePath: function() {
        this._context.closePath();
    },
    lineTo: function(e, t) {
        this._context.lineTo(t, e);
    },
    bezierCurveTo: function(e, t, n, r, o, i) {
        this._context.bezierCurveTo(t, e, r, n, i, o);
    }
};
tt.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x = [];
        this._y = [];
    },
    lineEnd: function() {
        const e = this._x;
        const t = this._y;
        const e_length = e.length;
        if (e_length) {
            if (this._line) {
                this._context.lineTo(e[0], t[0]);
            } else {
                this._context.moveTo(e[0], t[0]);
            }
            if (e_length === 2) {
                this._context.lineTo(e[1], t[1]);
            } else {
                const r = nt(e);
                const o = nt(t);
                for(let i = 0, a = 1; a < e_length; ++i, ++a){
                    this._context.bezierCurveTo(r[0][i], o[0][i], r[1][i], o[1][i], e[a], t[a]);
                }
            }
        }
        if (this._line || this._line !== 0 && e_length === 1) {
            this._context.closePath();
        }
        this._line = 1 - this._line;
        this._x = this._y = null;
    },
    point: function(e, t) {
        this._x.push(+e);
        this._y.push(+t);
    }
};
export const curveNatural = function(e) {
    return new tt(e);
};
function ot(e, t) {
    this._context = e;
    this._t = t;
}
ot.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x = this._y = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        if (this._t > 0 && this._t < 1 && this._point === 2) {
            this._context.lineTo(this._x, this._y);
        }
        if (this._line || this._line !== 0 && this._point === 1) {
            this._context.closePath();
        }
        if (this._line >= 0) {
            this._t = 1 - this._t;
            this._line = 1 - this._line;
        }
    },
    point: function(e, t) {
        e = +e;
        t = +t;
        switch(this._point){
            case 0:
                this._point = 1;
                if (this._line) {
                    this._context.lineTo(e, t);
                } else {
                    this._context.moveTo(e, t);
                }
                break;
            case 1:
                this._point = 2;
            default:
                if (this._t <= 0) {
                    this._context.lineTo(this._x, t);
                    this._context.lineTo(e, t);
                } else {
                    const n = this._x * (1 - this._t) + e * this._t;
                    this._context.lineTo(n, this._y);
                    this._context.lineTo(n, t);
                }
        }
        this._x = e;
        this._y = t;
    }
};
export const curveStep = function(e) {
    return new ot(e, 0.5);
};
export function curveStepBefore(e) {
    return new ot(e, 0);
}
export function curveStepAfter(e) {
    return new ot(e, 1);
}
export const stackOffsetNone = function(e, t) {
    if ((o = e.length) > 1) {
        let n;
        let r;
        for(var o, i = 1, a = e[t[0]], l = a.length; i < o; ++i){
            r = a;
            a = e[t[i]];
            for(n = 0; n < l; ++n){
                a[n][1] += a[n][0] = isNaN(r[n][1]) ? r[n][0] : r[n][1];
            }
        }
    }
};
export const stackOrderNone = function(e) {
    for(var t = e.length, n = new Array(t); --t >= 0;){
        n[t] = t;
    }
    return n;
};
function ct(e, t) {
    return e[t];
}
export const stack = function() {
    let e = s([]);
    let t = stackOrderNone;
    let n = stackOffsetNone;
    let r = ct;
    function o(o) {
        let i;
        let a;
        const l = e.apply(this, arguments);
        const o_length = o.length;
        const l_length = l.length;
        const c = new Array(l_length);
        for(i = 0; i < l_length; ++i){
            let f;
            const d = l[i];
            const p = c[i] = new Array(o_length);
            for(let h = 0; h < o_length; ++h){
                p[h] = f = [
                    0,
                    +r(o[h], d, h, o)
                ];
                f.data = o[h];
            }
            p.key = d;
        }
        i = 0;
        for(a = t(c); i < l_length; ++i){
            c[a[i]].index = i;
        }
        n(c, a);
        return c;
    }
    o.keys = function(t) {
        if (arguments.length) {
            e = typeof t === "function" ? t : s(slice.call(t));
            return o;
        }
        return e;
    };
    o.value = function(e) {
        if (arguments.length) {
            r = typeof e === "function" ? e : s(+e);
            return o;
        }
        return r;
    };
    o.order = function(e) {
        if (arguments.length) {
            t = e == null ? stackOrderNone : typeof e === "function" ? e : s(slice.call(e));
            return o;
        }
        return t;
    };
    o.offset = function(e) {
        if (arguments.length) {
            n = e ?? stackOffsetNone;
            return o;
        }
        return n;
    };
    return o;
};
export const stackOffsetExpand = function(e, t) {
    if ((r = e.length) > 0) {
        let n;
        var r;
        let o;
        for(let i = 0, a = e[0].length; i < a; ++i){
            for(o = n = 0; n < r; ++n){
                o += e[n][i][1] || 0;
            }
            if (o) {
                for(n = 0; n < r; ++n){
                    e[n][i][1] /= o;
                }
            }
        }
        stackOffsetNone(e, t);
    }
};
export const stackOffsetDiverging = function(e, t) {
    if ((l = e.length) > 0) {
        let n;
        let r;
        let o;
        let i;
        let a;
        var l;
        for(let u = 0, s = e[t[0]].length; u < s; ++u){
            a = 0;
            i = 0;
            for(n = 0; n < l; ++n){
                if ((o = (r = e[t[n]][u])[1] - r[0]) > 0) {
                    r[0] = i;
                    r[1] = i += o;
                } else if (o < 0) {
                    r[1] = a;
                    r[0] = a += o;
                } else {
                    r[0] = 0;
                    r[1] = o;
                }
            }
        }
    }
};
export const stackOffsetSilhouette = function(e, t) {
    if ((n = e.length) > 0) {
        var n;
        for(let r = 0, o = e[t[0]], i = o.length; r < i; ++r){
            for(var a = 0, l = 0; a < n; ++a){
                l += e[a][r][1] || 0;
            }
            o[r][1] += o[r][0] = -l / 2;
        }
        stackOffsetNone(e, t);
    }
};
export const stackOffsetWiggle = function(e, t) {
    if ((o = e.length) > 0 && (r = (n = e[t[0]]).length) > 0) {
        var n;
        var o;
        let i = 0;
        for(var r, a = 1; a < r; ++a){
            for(var l = 0, u = 0, s = 0; l < o; ++l){
                const c = e[t[l]];
                const f = c[a][1] || 0;
                let d = (f - (c[a - 1][1] || 0)) / 2;
                for(let p = 0; p < l; ++p){
                    const h = e[t[p]];
                    d += (h[a][1] || 0) - (h[a - 1][1] || 0);
                }
                u += f;
                s += d * f;
            }
            n[a - 1][1] += n[a - 1][0] = i;
            if (u) {
                i -= s / u;
            }
        }
        n[a - 1][1] += n[a - 1][0] = i;
        stackOffsetNone(e, t);
    }
};
export const stackOrderAppearance = function(e) {
    const t = e.map(yt);
    return stackOrderNone(e).sort((e, n)=>t[e] - t[n]);
};
function yt(e) {
    let t;
    for(var n = -1, r = 0, o = e.length, i = -Infinity; ++n < o;){
        if ((t = +e[n][1]) > i) {
            i = t;
            r = n;
        }
    }
    return r;
}
export const stackOrderAscending = function(e) {
    const t = e.map(bt);
    return stackOrderNone(e).sort((e, n)=>t[e] - t[n]);
};
function bt(e) {
    let t;
    let n = 0;
    for(let r = -1, o = e.length; ++r < o;){
        if (t = +e[r][1]) {
            n += t;
        }
    }
    return n;
}
export const stackOrderDescending = function(e) {
    return stackOrderAscending(e).reverse();
};
export const stackOrderInsideOut = function(e) {
    let t;
    let n;
    const e_length = e.length;
    const o = e.map(bt);
    const i = stackOrderAppearance(e);
    let a = 0;
    let l = 0;
    const u = [];
    const s = [];
    for(t = 0; t < e_length; ++t){
        n = i[t];
        if (a < l) {
            a += o[n];
            u.push(n);
        } else {
            l += o[n];
            s.push(n);
        }
    }
    return s.reverse().concat(u);
};
export const stackOrderReverse = function(e) {
    return stackOrderNone(e).reverse();
};
