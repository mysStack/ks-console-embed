import module_69 from "./module-69.js";
var _default;
export { _default as "default" };
((e)=>{
    const n = typeof window !== "undefined" && typeof document !== "undefined" && typeof navigator !== "undefined";
    const r = (()=>{
        for(let e = [
            "Edge",
            "Trident",
            "Firefox"
        ], t = 0; t < e.length; t += 1){
            if (n && navigator.userAgent.indexOf(e[t]) >= 0) {
                return 1;
            }
        }
        return 0;
    })();
    const o = n && window.Promise ? (e)=>{
        let t = false;
        return function() {
            if (!t) {
                t = true;
                window.Promise.resolve().then(()=>{
                    t = false;
                    e();
                });
            }
        };
    } : (e)=>{
        let t = false;
        return function() {
            if (!t) {
                t = true;
                setTimeout(()=>{
                    t = false;
                    e();
                }, r);
            }
        };
    };
    function a(e) {
        return e && Object.prototype.toString.call(e) === "[object Function]";
    }
    function i(e, t) {
        if (e.nodeType !== 1) {
            return [];
        }
        const n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        if (t) {
            return n[t];
        }
        return n;
    }
    function l(e) {
        if (e.nodeName === "HTML") {
            return e;
        }
        return e.parentNode || e.host;
    }
    function s(e) {
        if (!e) {
            return document.body;
        }
        switch(e.nodeName){
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body;
        }
        const t = i(e);
        const { overflow, overflowX, overflowY } = t;
        if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
            return e;
        }
        return s(l(e));
    }
    function u(e) {
        if (e && e.referenceNode) {
            return e.referenceNode;
        }
        return e;
    }
    const c = n && !(!window.MSInputMethodContext || !document.documentMode);
    const f = n && /MSIE 10/.test(navigator.userAgent);
    function d(e) {
        switch(e){
            case 11:
                return c;
            case 10:
                return f;
            default:
                return c || f;
        }
    }
    function p(e) {
        if (!e) {
            return document.documentElement;
        }
        for(var t = d(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;){
            n = (e = e.nextElementSibling).offsetParent;
        }
        const r = n && n.nodeName;
        if (r && r !== "BODY" && r !== "HTML") {
            if ([
                "TH",
                "TD",
                "TABLE"
            ].indexOf(n.nodeName) !== -1 && i(n, "position") === "static") {
                return p(n);
            }
            return n;
        }
        if (e) {
            return e.ownerDocument.documentElement;
        }
        return document.documentElement;
    }
    function h(e) {
        if (e.parentNode !== null) {
            return h(e.parentNode);
        }
        return e;
    }
    function v(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) {
            return document.documentElement;
        }
        const n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING;
        const r = n ? e : t;
        const o = n ? t : e;
        const a = document.createRange();
        a.setStart(r, 0);
        a.setEnd(o, 0);
        let i;
        let l;
        const a_commonAncestorContainer = a.commonAncestorContainer;
        if (e !== a_commonAncestorContainer && t !== a_commonAncestorContainer || r.contains(o)) {
            if ((l = (i = a_commonAncestorContainer).nodeName) === "BODY" || l !== "HTML" && p(i.firstElementChild) !== i) {
                return p(a_commonAncestorContainer);
            }
            return a_commonAncestorContainer;
        }
        const u = h(e);
        if (u.host) {
            return v(u.host, t);
        }
        return v(e, h(t).host);
    }
    function m(e, t = "top") {
        const n = t === "top" ? "scrollTop" : "scrollLeft";
        const e_nodeName = e.nodeName;
        if (e_nodeName === "BODY" || e_nodeName === "HTML") {
            const o = e.ownerDocument.documentElement;
            const a = e.ownerDocument.scrollingElement || o;
            return a[n];
        }
        return e[n];
    }
    function g(e, t) {
        const n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
        const r = m(t, "top");
        const o = m(t, "left");
        const a = n ? -1 : 1;
        e.top += r * a;
        e.bottom += r * a;
        e.left += o * a;
        e.right += o * a;
        return e;
    }
    function y(e, t) {
        const n = t === "x" ? "Left" : "Top";
        const r = n === "Left" ? "Right" : "Bottom";
        return parseFloat(e[`border${n}Width`]) + parseFloat(e[`border${r}Width`]);
    }
    function b(e, body, documentElement, r) {
        return Math.max(body[`offset${e}`], body[`scroll${e}`], documentElement[`client${e}`], documentElement[`offset${e}`], documentElement[`scroll${e}`], d(10) ? parseInt(documentElement[`offset${e}`]) + parseInt(r[`margin${e === "Height" ? "Top" : "Left"}`]) + parseInt(r[`margin${e === "Height" ? "Bottom" : "Right"}`]) : 0);
    }
    function C({ body, documentElement }) {
        const r = d(10) && getComputedStyle(documentElement);
        return {
            height: b("Height", body, documentElement, r),
            width: b("Width", body, documentElement, r)
        };
    }
    const w = (e, t)=>{
        if (!(e instanceof t)) {
            throw new TypeError("Cannot call a class as a function");
        }
    };
    const _ = (()=>{
        function e(e, t) {
            for (const r of t){
                r.enumerable = r.enumerable || false;
                r.configurable = true;
                if ("value" in r) {
                    r.writable = true;
                }
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            if (n) {
                e(t.prototype, n);
            }
            if (r) {
                e(t, r);
            }
            return t;
        };
    })();
    const x = (e, t, n)=>{
        if (t in e) {
            Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            e[t] = n;
        }
        return e;
    };
    const M = Object.assign || function(e) {
        for(let t = 1; t < arguments.length; t++){
            const n = arguments[t];
            for(const r in n){
                if (Object.prototype.hasOwnProperty.call(n, r)) {
                    e[r] = n[r];
                }
            }
        }
        return e;
    };
    function E(e) {
        return M({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        });
    }
    function k(e) {
        let t = {};
        try {
            if (d(10)) {
                t = e.getBoundingClientRect();
                const n = m(e, "top");
                const r = m(e, "left");
                t.top += n;
                t.left += r;
                t.bottom += n;
                t.right += r;
            } else {
                t = e.getBoundingClientRect();
            }
        } catch (e) {}
        const o = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top
        };
        const a = e.nodeName === "HTML" ? C(e.ownerDocument) : {};
        const l = a.width || e.clientWidth || o.width;
        const s = a.height || e.clientHeight || o.height;
        let u = e.offsetWidth - l;
        let c = e.offsetHeight - s;
        if (u || c) {
            const f = i(e);
            u -= y(f, "x");
            c -= y(f, "y");
            o.width -= u;
            o.height -= c;
        }
        return E(o);
    }
    function O(e, t) {
        const n = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
        const r = d(10);
        const o = t.nodeName === "HTML";
        const a = k(e);
        const l = k(t);
        const u = s(e);
        const c = i(t);
        const f = parseFloat(c.borderTopWidth);
        const p = parseFloat(c.borderLeftWidth);
        if (n && o) {
            l.top = Math.max(l.top, 0);
            l.left = Math.max(l.left, 0);
        }
        let h = E({
            top: a.top - l.top - f,
            left: a.left - l.left - p,
            width: a.width,
            height: a.height
        });
        h.marginTop = 0;
        h.marginLeft = 0;
        if (!r && o) {
            const v = parseFloat(c.marginTop);
            const m = parseFloat(c.marginLeft);
            h.top -= f - v;
            h.bottom -= f - v;
            h.left -= p - m;
            h.right -= p - m;
            h.marginTop = v;
            h.marginLeft = m;
        }
        if (r && !n ? t.contains(u) : t === u && u.nodeName !== "BODY") {
            h = g(h, t);
        }
        return h;
    }
    function S(e) {
        const t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        const documentElement = e.ownerDocument.documentElement;
        const r = O(e, documentElement);
        const width = Math.max(documentElement.clientWidth, window.innerWidth || 0);
        const height = Math.max(documentElement.clientHeight, window.innerHeight || 0);
        const i = t ? 0 : m(documentElement);
        const l = t ? 0 : m(documentElement, "left");
        const s = {
            top: i - r.top + r.marginTop,
            left: l - r.left + r.marginLeft,
            width,
            height
        };
        return E(s);
    }
    function L(e) {
        const e_nodeName = e.nodeName;
        if (e_nodeName === "BODY" || e_nodeName === "HTML") {
            return false;
        }
        if (i(e, "position") === "fixed") {
            return true;
        }
        const n = l(e);
        return !!n && L(n);
    }
    function z(e) {
        if (!e || !e.parentElement || d()) {
            return document.documentElement;
        }
        for(var t = e.parentElement; t && i(t, "transform") === "none";){
            t = t.parentElement;
        }
        return t || document.documentElement;
    }
    function D(e, t, n, r) {
        const o = arguments.length > 4 && arguments[4] !== undefined && arguments[4];
        let a = {
            top: 0,
            left: 0
        };
        const i = o ? z(e) : v(e, u(t));
        if (r === "viewport") {
            a = S(i, o);
        } else {
            let c;
            if (r === "scrollParent") {
                if ((c = s(l(t))).nodeName === "BODY") {
                    c = e.ownerDocument.documentElement;
                }
            } else {
                c = r === "window" ? e.ownerDocument.documentElement : r;
            }
            const f = O(c, i, o);
            if (c.nodeName !== "HTML" || L(i)) {
                a = f;
            } else {
                const d = C(e.ownerDocument);
                const { height, width } = d;
                a.top += f.top - f.marginTop;
                a.bottom = height + f.top;
                a.left += f.left - f.marginLeft;
                a.right = width + f.left;
            }
        }
        const m = typeof (n = n || 0) === "number";
        a.left += m ? n : n.left || 0;
        a.top += m ? n : n.top || 0;
        a.right -= m ? n : n.right || 0;
        a.bottom -= m ? n : n.bottom || 0;
        return a;
    }
    function T(e) {
        return e.width * e.height;
    }
    function V(placement, t, n, r, boundariesElement, a = 0) {
        if (placement.indexOf("auto") === -1) {
            return placement;
        }
        const i = D(n, r, a, boundariesElement);
        const l = {
            top: {
                width: i.width,
                height: t.top - i.top
            },
            right: {
                width: i.right - t.right,
                height: i.height
            },
            bottom: {
                width: i.width,
                height: i.bottom - t.bottom
            },
            left: {
                width: t.left - i.left,
                height: i.height
            }
        };
        const s = Object.keys(l).map((e)=>M({
                key: e
            }, l[e], {
                area: T(l[e])
            })).sort((e, t)=>t.area - e.area);
        const u = s.filter(({ width, height })=>width >= n.clientWidth && height >= n.clientHeight);
        const c = u.length > 0 ? u[0].key : s[0].key;
        const f = placement.split("-")[1];
        return c + (f ? `-${f}` : "");
    }
    function H(e, t, n, r = null) {
        const o = r ? z(t) : v(t, u(n));
        return O(n, o, r);
    }
    function P(e) {
        const t = e.ownerDocument.defaultView.getComputedStyle(e);
        const n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0);
        const r = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + r,
            height: e.offsetHeight + n
        };
    }
    function A(e) {
        const t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, (e)=>t[e]);
    }
    function R(popper, reference, n) {
        n = n.split("-")[0];
        const r = P(popper);
        const o = {
            width: r.width,
            height: r.height
        };
        const a = [
            "right",
            "left"
        ].indexOf(n) !== -1;
        const i = a ? "top" : "left";
        const l = a ? "left" : "top";
        const s = a ? "height" : "width";
        const u = a ? "width" : "height";
        o[i] = reference[i] + reference[s] / 2 - r[s] / 2;
        o[l] = n === l ? reference[l] - r[u] : reference[A(l)];
        return o;
    }
    function j(e, t) {
        if (Array.prototype.find) {
            return e.find(t);
        }
        return e.filter(t)[0];
    }
    function N(modifiers, t, n) {
        (n === undefined ? modifiers : modifiers.slice(0, ((modifiers_1, n)=>{
            const t = "name";
            if (Array.prototype.findIndex) {
                return modifiers_1.findIndex((e)=>e[t] === n);
            }
            const r = j(modifiers_1, function(e) {
                return e[t] === n;
            });
            return modifiers_1.indexOf(r);
        })(modifiers, n))).forEach((e)=>{
            if (e.function) {
                console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            }
            const n = e.function || e.fn;
            if (e.enabled && a(n)) {
                t.offsets.popper = E(t.offsets.popper);
                t.offsets.reference = E(t.offsets.reference);
                t = n(t, e);
            }
        });
        return t;
    }
    function I() {
        if (!this.state.isDestroyed) {
            let e = {
                instance: this,
                styles: {},
                arrowStyles: {},
                attributes: {},
                flipped: false,
                offsets: {}
            };
            e.offsets.reference = H(this.state, this.popper, this.reference, this.options.positionFixed);
            e.placement = V(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
            e.originalPlacement = e.placement;
            e.positionFixed = this.options.positionFixed;
            e.offsets.popper = R(this.popper, e.offsets.reference, e.placement);
            e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
            e = N(this.modifiers, e);
            if (this.state.isCreated) {
                this.options.onUpdate(e);
            } else {
                this.state.isCreated = true;
                this.options.onCreate(e);
            }
        }
    }
    function B(modifiers, t) {
        return modifiers.some((e)=>{
            const e_name = e.name;
            return e.enabled && e_name === t;
        });
    }
    function U(e) {
        for(let t = [
            false,
            "ms",
            "Webkit",
            "Moz",
            "O"
        ], n = e.charAt(0).toUpperCase() + e.slice(1), r = 0; r < t.length; r++){
            const o = t[r];
            const a = o ? `${o}${n}` : e;
            if (document.body.style[a] !== undefined) {
                return a;
            }
        }
        return null;
    }
    function F() {
        this.state.isDestroyed = true;
        if (B(this.modifiers, "applyStyle")) {
            this.popper.removeAttribute("x-placement");
            this.popper.style.position = "";
            this.popper.style.top = "";
            this.popper.style.left = "";
            this.popper.style.right = "";
            this.popper.style.bottom = "";
            this.popper.style.willChange = "";
            this.popper.style[U("transform")] = "";
        }
        this.disableEventListeners();
        if (this.options.removeOnDestroy) {
            this.popper.parentNode.removeChild(this.popper);
        }
        return this;
    }
    function Z({ ownerDocument }) {
        if (ownerDocument) {
            return ownerDocument.defaultView;
        }
        return window;
    }
    function q() {
        if (!this.state.eventsEnabled) {
            this.state = ((e, t, n, r)=>{
                n.updateBound = r;
                Z(e).addEventListener("resize", n.updateBound, {
                    passive: true
                });
                const o = s(e);
                (function e(t, n, r, o) {
                    const a = t.nodeName === "BODY";
                    const i = a ? t.ownerDocument.defaultView : t;
                    i.addEventListener(n, r, {
                        passive: true
                    });
                    if (!a) {
                        e(s(i.parentNode), n, r, o);
                    }
                    o.push(i);
                })(o, "scroll", n.updateBound, n.scrollParents);
                n.scrollElement = o;
                n.eventsEnabled = true;
                return n;
            })(this.reference, this.options, this.state, this.scheduleUpdate);
        }
    }
    function W() {
        let e;
        let t;
        if (this.state.eventsEnabled) {
            cancelAnimationFrame(this.scheduleUpdate);
            this.state = (e = this.reference, t = this.state, Z(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((e)=>{
                e.removeEventListener("scroll", t.updateBound);
            }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = false, t);
        }
    }
    function G(e) {
        return e !== "" && !isNaN(parseFloat(e)) && isFinite(e);
    }
    function Y(e, t) {
        Object.keys(t).forEach((n)=>{
            let r = "";
            if ([
                "width",
                "height",
                "top",
                "right",
                "bottom",
                "left"
            ].indexOf(n) !== -1 && G(t[n])) {
                r = "px";
            }
            e.style[n] = t[n] + r;
        });
    }
    const $ = n && /Firefox/i.test(navigator.userAgent);
    function K(modifiers, t, n) {
        const r = j(modifiers, function(e) {
            return e.name === t;
        });
        const o = !!r && modifiers.some((e)=>e.name === n && e.enabled && e.order < r.order);
        if (!o) {
            const a = `\`${t}\``;
            const i = `\`${n}\``;
            console.warn(`${i} modifier is required by ${a} modifier in order to work, be sure to include it before ${a}!`);
        }
        return o;
    }
    const J = [
        "auto-start",
        "auto",
        "auto-end",
        "top-start",
        "top",
        "top-end",
        "right-start",
        "right",
        "right-end",
        "bottom-end",
        "bottom",
        "bottom-start",
        "left-end",
        "left",
        "left-start"
    ];
    const Q = J.slice(3);
    function X(e) {
        const t = arguments.length > 1 && arguments[1] !== undefined && arguments[1];
        const n = Q.indexOf(e);
        const r = Q.slice(n + 1).concat(Q.slice(0, n));
        if (t) {
            return r.reverse();
        }
        return r;
    }
    const ee = {
        placement: "bottom",
        positionFixed: false,
        eventsEnabled: true,
        removeOnDestroy: false,
        onCreate: function() {},
        onUpdate: function() {},
        modifiers: {
            shift: {
                order: 100,
                enabled: true,
                fn: function(e) {
                    const e_placement = e.placement;
                    const n = e_placement.split("-")[0];
                    const r = e_placement.split("-")[1];
                    if (r) {
                        const o = e.offsets;
                        const { reference, popper } = o;
                        const l = [
                            "bottom",
                            "top"
                        ].indexOf(n) !== -1;
                        const s = l ? "left" : "top";
                        const u = l ? "width" : "height";
                        const c = {
                            start: x({}, s, reference[s]),
                            end: x({}, s, reference[s] + reference[u] - popper[u])
                        };
                        e.offsets.popper = M({}, popper, c[r]);
                    }
                    return e;
                }
            },
            offset: {
                order: 200,
                enabled: true,
                fn: function(e, t) {
                    let n;
                    const t_offset = t.offset;
                    const { placement, offsets } = e;
                    const { popper, reference } = offsets;
                    const s = placement.split("-")[0];
                    n = G(+t_offset) ? [
                        +t_offset,
                        0
                    ] : ((t_offset_1, popper_1, reference_1, r)=>{
                        const o = [
                            0,
                            0
                        ];
                        const a = [
                            "right",
                            "left"
                        ].indexOf(r) !== -1;
                        const i = t_offset_1.split(/(\+|\-)/).map((e)=>e.trim());
                        const l = i.indexOf(j(i, function(e) {
                            return e.search(/,|\s/) !== -1;
                        }));
                        if (i[l] && i[l].indexOf(",") === -1) {
                            console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                        }
                        const s = /\s*,\s*|\s+/;
                        let u = l !== -1 ? [
                            i.slice(0, l).concat([
                                i[l].split(s)[0]
                            ]),
                            [
                                i[l].split(s)[1]
                            ].concat(i.slice(l + 1))
                        ] : [
                            i
                        ];
                        (u = u.map((e, r)=>{
                            const o = (r === 1 ? !a : a) ? "height" : "width";
                            let i = false;
                            return e.reduce((acc, item)=>{
                                if (acc[acc.length - 1] === "" && [
                                    "+",
                                    "-"
                                ].indexOf(item) !== -1) {
                                    acc[acc.length - 1] = item;
                                    i = true;
                                    return acc;
                                }
                                if (i) {
                                    acc[acc.length - 1] += item;
                                    i = false;
                                    return acc;
                                }
                                return acc.concat(item);
                            }, []).map((e)=>((e, t, popper_1_1, reference_1_1)=>{
                                    const o = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
                                    const a = +o[1];
                                    const i = o[2];
                                    if (!a) {
                                        return e;
                                    }
                                    if (i.indexOf("%") === 0) {
                                        return E(i === "%p" ? popper_1_1 : reference_1_1)[t] / 100 * a;
                                    }
                                    if (i === "vh" || i === "vw") {
                                        return (i === "vh" ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * a;
                                    }
                                    return a;
                                })(e, o, popper_1, reference_1));
                        })).forEach((e, t)=>{
                            e.forEach((n, r)=>{
                                if (G(n)) {
                                    o[t] += n * (e[r - 1] === "-" ? -1 : 1);
                                }
                            });
                        });
                        return o;
                    })(t_offset, popper, reference, s);
                    switch(s){
                        case "left":
                            popper.top += n[0];
                            popper.left -= n[1];
                            break;
                        case "right":
                            popper.top += n[0];
                            popper.left += n[1];
                            break;
                        case "top":
                            popper.left += n[0];
                            popper.top -= n[1];
                            break;
                        default:
                            if (s === "bottom") {
                                popper.left += n[0];
                                popper.top += n[1];
                            }
                    }
                    e.popper = popper;
                    return e;
                },
                offset: 0
            },
            preventOverflow: {
                order: 300,
                enabled: true,
                fn: function(e, t) {
                    let n = t.boundariesElement || p(e.instance.popper);
                    if (e.instance.reference === n) {
                        n = p(n);
                    }
                    const r = U("transform");
                    const style = e.instance.popper.style;
                    const { top, left } = style;
                    const l = style[r];
                    style.top = "";
                    style.left = "";
                    style[r] = "";
                    const s = D(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                    style.top = top;
                    style.left = left;
                    style[r] = l;
                    t.boundaries = s;
                    const t_priority = t.priority;
                    let popper = e.offsets.popper;
                    const f = {
                        primary: function(e) {
                            let n = popper[e];
                            if (popper[e] < s[e] && !t.escapeWithReference) {
                                n = Math.max(popper[e], s[e]);
                            }
                            return x({}, e, n);
                        },
                        secondary: function(e) {
                            const n = e === "right" ? "left" : "top";
                            let r = popper[n];
                            if (popper[e] > s[e] && !t.escapeWithReference) {
                                r = Math.min(popper[n], s[e] - (e === "right" ? popper.width : popper.height));
                            }
                            return x({}, n, r);
                        }
                    };
                    t_priority.forEach((e)=>{
                        const t = [
                            "left",
                            "top"
                        ].indexOf(e) !== -1 ? "primary" : "secondary";
                        popper = M({}, popper, f[t](e));
                    });
                    e.offsets.popper = popper;
                    return e;
                },
                priority: [
                    "left",
                    "right",
                    "top",
                    "bottom"
                ],
                padding: 5,
                boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400,
                enabled: true,
                fn: function(e) {
                    const e_offsets = e.offsets;
                    const { popper, reference } = e_offsets;
                    const o = e.placement.split("-")[0];
                    const i = [
                        "top",
                        "bottom"
                    ].indexOf(o) !== -1;
                    const l = i ? "right" : "bottom";
                    const s = i ? "left" : "top";
                    const u = i ? "width" : "height";
                    if (popper[l] < Math.floor(reference[s])) {
                        e.offsets.popper[s] = Math.floor(reference[s]) - popper[u];
                    }
                    if (popper[s] > Math.floor(reference[l])) {
                        e.offsets.popper[s] = Math.floor(reference[l]);
                    }
                    return e;
                }
            },
            arrow: {
                order: 500,
                enabled: true,
                fn: function(e, t) {
                    let n;
                    if (!K(e.instance.modifiers, "arrow", "keepTogether")) {
                        return e;
                    }
                    let t_element = t.element;
                    if (typeof t_element === "string") {
                        if (!(t_element = e.instance.popper.querySelector(t_element))) {
                            return e;
                        }
                    } else if (!e.instance.popper.contains(t_element)) {
                        console.warn("WARNING: `arrow.element` must be child of its popper element!");
                        return e;
                    }
                    const o = e.placement.split("-")[0];
                    const e_offsets = e.offsets;
                    const { popper, reference } = e_offsets;
                    const u = [
                        "left",
                        "right"
                    ].indexOf(o) !== -1;
                    const c = u ? "height" : "width";
                    const f = u ? "Top" : "Left";
                    const d = f.toLowerCase();
                    const p = u ? "left" : "top";
                    const h = u ? "bottom" : "right";
                    const v = P(t_element)[c];
                    if (reference[h] - v < popper[d]) {
                        e.offsets.popper[d] -= popper[d] - (reference[h] - v);
                    }
                    if (reference[d] + v > popper[h]) {
                        e.offsets.popper[d] += reference[d] + v - popper[h];
                    }
                    e.offsets.popper = E(e.offsets.popper);
                    const m = reference[d] + reference[c] / 2 - v / 2;
                    const g = i(e.instance.popper);
                    const y = parseFloat(g[`margin${f}`]);
                    const b = parseFloat(g[`border${f}Width`]);
                    let C = m - e.offsets.popper[d] - y - b;
                    C = Math.max(Math.min(popper[c] - v, C), 0);
                    e.arrowElement = t_element;
                    e.offsets.arrow = (x(n = {}, d, Math.round(C)), x(n, p, ""), n);
                    return e;
                },
                element: "[x-arrow]"
            },
            flip: {
                order: 600,
                enabled: true,
                fn: function(e, t) {
                    if (B(e.instance.modifiers, "inner")) {
                        return e;
                    }
                    if (e.flipped && e.placement === e.originalPlacement) {
                        return e;
                    }
                    const n = D(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed);
                    let r = e.placement.split("-")[0];
                    let o = A(r);
                    let a = e.placement.split("-")[1] || "";
                    let i = [];
                    switch(t.behavior){
                        case "flip":
                            i = [
                                r,
                                o
                            ];
                            break;
                        case "clockwise":
                            i = X(r);
                            break;
                        case "counterclockwise":
                            i = X(r, true);
                            break;
                        default:
                            i = t.behavior;
                    }
                    i.forEach((l, s)=>{
                        if (r !== l || i.length === s + 1) {
                            return e;
                        }
                        r = e.placement.split("-")[0];
                        o = A(r);
                        const popper = e.offsets.popper;
                        const reference = e.offsets.reference;
                        const d = r === "left" && Math.floor(popper.right) > Math.floor(reference.left) || r === "right" && Math.floor(popper.left) < Math.floor(reference.right) || r === "top" && Math.floor(popper.bottom) > Math.floor(reference.top) || r === "bottom" && Math.floor(popper.top) < Math.floor(reference.bottom);
                        const p = Math.floor(popper.left) < Math.floor(n.left);
                        const h = Math.floor(popper.right) > Math.floor(n.right);
                        const v = Math.floor(popper.top) < Math.floor(n.top);
                        const m = Math.floor(popper.bottom) > Math.floor(n.bottom);
                        const g = r === "left" && p || r === "right" && h || r === "top" && v || r === "bottom" && m;
                        const y = [
                            "top",
                            "bottom"
                        ].indexOf(r) !== -1;
                        const b = !!t.flipVariations && (y && a === "start" && p || y && a === "end" && h || !y && a === "start" && v || !y && a === "end" && m);
                        const C = !!t.flipVariationsByContent && (y && a === "start" && h || y && a === "end" && p || !y && a === "start" && m || !y && a === "end" && v);
                        const w = b || C;
                        if (d || g || w) {
                            e.flipped = true;
                            if (d || g) {
                                r = i[s + 1];
                            }
                            if (w) {
                                a = ((e)=>{
                                    switch(e){
                                        case "end":
                                            return "start";
                                        case "start":
                                            return "end";
                                        default:
                                            return e;
                                    }
                                })(a);
                            }
                            e.placement = r + (a ? `-${a}` : "");
                            e.offsets.popper = M({}, e.offsets.popper, R(e.instance.popper, e.offsets.reference, e.placement));
                            e = N(e.instance.modifiers, e, "flip");
                        }
                    });
                    return e;
                },
                behavior: "flip",
                padding: 5,
                boundariesElement: "viewport",
                flipVariations: false,
                flipVariationsByContent: false
            },
            inner: {
                order: 700,
                enabled: false,
                fn: function(e) {
                    const e_placement = e.placement;
                    const n = e_placement.split("-")[0];
                    const e_offsets = e.offsets;
                    const { popper, reference } = e_offsets;
                    const i = [
                        "left",
                        "right"
                    ].indexOf(n) !== -1;
                    const l = [
                        "top",
                        "left"
                    ].indexOf(n) === -1;
                    popper[i ? "left" : "top"] = reference[n] - (l ? popper[i ? "width" : "height"] : 0);
                    e.placement = A(e_placement);
                    e.offsets.popper = E(popper);
                    return e;
                }
            },
            hide: {
                order: 800,
                enabled: true,
                fn: function(e) {
                    if (!K(e.instance.modifiers, "hide", "preventOverflow")) {
                        return e;
                    }
                    const reference = e.offsets.reference;
                    const boundaries = j(e.instance.modifiers, function(e) {
                        return e.name === "preventOverflow";
                    }).boundaries;
                    if (reference.bottom < boundaries.top || reference.left > boundaries.right || reference.top > boundaries.bottom || reference.right < boundaries.left) {
                        if (e.hide === true) {
                            return e;
                        }
                        e.hide = true;
                        e.attributes["x-out-of-boundaries"] = "";
                    } else {
                        if (e.hide === false) {
                            return e;
                        }
                        e.hide = false;
                        e.attributes["x-out-of-boundaries"] = false;
                    }
                    return e;
                }
            },
            computeStyle: {
                order: 850,
                enabled: true,
                fn: function(e, t) {
                    const { x, y: y_1 } = t;
                    const popper = e.offsets.popper;
                    const gpuAcceleration = j(e.instance.modifiers, function(e) {
                        return e.name === "applyStyle";
                    }).gpuAcceleration;
                    if (gpuAcceleration !== undefined) {
                        console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    }
                    let i;
                    let l;
                    const s = gpuAcceleration !== undefined ? gpuAcceleration : t.gpuAcceleration;
                    const u = p(e.instance.popper);
                    const c = k(u);
                    const f = {
                        position: popper.position
                    };
                    const d = ((e, t)=>{
                        const e_offsets = e.offsets;
                        const { popper, reference } = e_offsets;
                        const l = function(e) {
                            return e;
                        };
                        const s = Math.round(reference.width);
                        const u = Math.round(popper.width);
                        const c = [
                            "left",
                            "right"
                        ].indexOf(e.placement) !== -1;
                        const f = e.placement.indexOf("-") !== -1;
                        const d = t ? c || f || s % 2 == u % 2 ? Math.round : Math.floor : l;
                        const p = t ? Math.round : l;
                        return {
                            left: d(s % 2 == 1 && u % 2 == 1 && !f && t ? popper.left - 1 : popper.left),
                            top: p(popper.top),
                            bottom: p(popper.bottom),
                            right: d(popper.right)
                        };
                    })(e, window.devicePixelRatio < 2 || !$);
                    const h = x === "bottom" ? "top" : "bottom";
                    const v = y_1 === "right" ? "left" : "right";
                    const m = U("transform");
                    l = h === "bottom" ? u.nodeName === "HTML" ? -u.clientHeight + d.bottom : -c.height + d.bottom : d.top;
                    i = v === "right" ? u.nodeName === "HTML" ? -u.clientWidth + d.right : -c.width + d.right : d.left;
                    if (s && m) {
                        f[m] = `translate3d(${i}px, ${l}px, 0)`;
                        f[h] = 0;
                        f[v] = 0;
                        f.willChange = "transform";
                    } else {
                        const g = h === "bottom" ? -1 : 1;
                        const y = v === "right" ? -1 : 1;
                        f[h] = l * g;
                        f[v] = i * y;
                        f.willChange = `${h}, ${v}`;
                    }
                    const b = {
                        "x-placement": e.placement
                    };
                    e.attributes = M({}, b, e.attributes);
                    e.styles = M({}, f, e.styles);
                    e.arrowStyles = M({}, e.offsets.arrow, e.arrowStyles);
                    return e;
                },
                gpuAcceleration: true,
                x: "bottom",
                y: "right"
            },
            applyStyle: {
                order: 900,
                enabled: true,
                fn: function(e) {
                    let t;
                    let n;
                    Y(e.instance.popper, e.styles);
                    t = e.instance.popper;
                    n = e.attributes;
                    Object.keys(n).forEach((e)=>{
                        if (n[e] !== false) {
                            t.setAttribute(e, n[e]);
                        } else {
                            t.removeAttribute(e);
                        }
                    });
                    if (e.arrowElement && Object.keys(e.arrowStyles).length) {
                        Y(e.arrowElement, e.arrowStyles);
                    }
                    return e;
                },
                onLoad: function(e, t, n, r, o) {
                    const a = H(o, t, e, n.positionFixed);
                    const i = V(n.placement, a, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                    t.setAttribute("x-placement", i);
                    Y(t, {
                        position: n.positionFixed ? "fixed" : "absolute"
                    });
                    return n;
                },
                gpuAcceleration: undefined
            }
        }
    };
    const te = (()=>{
        function e(t, n, i = {}) {
            const _this = this;
            w(this, e);
            this.scheduleUpdate = function() {
                return requestAnimationFrame(_this.update);
            };
            this.update = o(this.update.bind(this));
            this.options = M({}, e.Defaults, i);
            this.state = {
                isDestroyed: false,
                isCreated: false,
                scrollParents: []
            };
            this.reference = t && t.jquery ? t[0] : t;
            this.popper = n && n.jquery ? n[0] : n;
            this.options.modifiers = {};
            Object.keys(M({}, e.Defaults.modifiers, i.modifiers)).forEach((t)=>{
                _this.options.modifiers[t] = M({}, e.Defaults.modifiers[t] || {}, i.modifiers ? i.modifiers[t] : {});
            });
            this.modifiers = Object.keys(this.options.modifiers).map((e)=>M({
                    name: e
                }, _this.options.modifiers[e])).sort((e, t)=>e.order - t.order);
            this.modifiers.forEach((e)=>{
                if (e.enabled && a(e.onLoad)) {
                    e.onLoad(_this.reference, _this.popper, _this.options, e, _this.state);
                }
            });
            this.update();
            const eventsEnabled = this.options.eventsEnabled;
            if (eventsEnabled) {
                this.enableEventListeners();
            }
            this.state.eventsEnabled = eventsEnabled;
        }
        _(e, [
            {
                key: "update",
                value: function() {
                    return I.call(this);
                }
            },
            {
                key: "destroy",
                value: function() {
                    return F.call(this);
                }
            },
            {
                key: "enableEventListeners",
                value: function() {
                    return q.call(this);
                }
            },
            {
                key: "disableEventListeners",
                value: function() {
                    return W.call(this);
                }
            }
        ]);
        return e;
    })();
    te.Utils = (typeof window !== "undefined" ? window : e).PopperUtils;
    te.placements = J;
    te.Defaults = ee;
    _default = te;
})(module_69);
