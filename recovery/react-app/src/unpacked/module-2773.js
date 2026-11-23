function o(e) {
    if (typeof window !== "undefined" && window.navigator) {
        return !!navigator.userAgent.match(e);
    }
}
const i = o(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
const a = o(/Edge/i);
const l = o(/firefox/i);
const u = o(/safari/i) && !o(/chrome/i) && !o(/android/i);
const s = o(/iP(ad|od|hone)/i);
const c = o(/chrome/i) && o(/android/i);
const f = {
    capture: false,
    passive: false
};
function on(e, t, n) {
    e.addEventListener(t, n, !i && f);
}
function off(e, t, n) {
    e.removeEventListener(t, n, !i && f);
}
function h(e, t) {
    if (t) {
        if (t[0] === ">") {
            t = t.substring(1);
        }
        if (e) {
            try {
                if (e.matches) {
                    return e.matches(t);
                }
                if (e.msMatchesSelector) {
                    return e.msMatchesSelector(t);
                }
                if (e.webkitMatchesSelector) {
                    return e.webkitMatchesSelector(t);
                }
            } catch (e) {
                return false;
            }
        }
        return false;
    }
}
function v(e) {
    if (e.host && e !== document && e.host.nodeType) {
        return e.host;
    }
    return e.parentNode;
}
function closest(e, t, n, r) {
    if (e) {
        n = n || document;
        do {
            if (t != null && (t[0] === ">" ? e.parentNode === n && h(e, t) : h(e, t)) || r && e === n) {
                return e;
            }
            if (e === n) {
                break;
            }
        }while (e = v(e))
    }
    return null;
}
let y;
const m = /\s+/g;
function toggleClass(e, t, n) {
    if (e && t) {
        if (e.classList) {
            e.classList[n ? "add" : "remove"](t);
        } else {
            const r = ` ${e.className} `.replace(m, " ").replace(` ${t} `, " ");
            e.className = (r + (n ? ` ${t}` : "")).replace(m, " ");
        }
    }
}
function css(e, t, n) {
    const r = e && e.style;
    if (r) {
        if (n === undefined) {
            if (document.defaultView && document.defaultView.getComputedStyle) {
                n = document.defaultView.getComputedStyle(e, "");
            } else if (e.currentStyle) {
                n = e.currentStyle;
            }
            if (t === undefined) {
                return n;
            }
            return n[t];
        }
        if (!(t in r || t.indexOf("webkit") !== -1)) {
            t = `-webkit-${t}`;
        }
        r[t] = n + (typeof n === "string" ? "" : "px");
    }
}
function w(e, t) {
    let n = "";
    if (typeof e === "string") {
        n = e;
    } else {
        do {
            const r = css(e, "transform");
            if (r && r !== "none") {
                n = `${r} ${n}`;
            }
        }while (!t && (e = e.parentNode))
    }
    const o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
    return o && new o(n);
}
function find(e, t, n) {
    if (e) {
        const r = e.getElementsByTagName(t);
        let o = 0;
        const i = r.length;
        if (n) {
            for(; o < i; o++){
                n(r[o], o);
            }
        }
        return r;
    }
    return [];
}
function C() {
    return document.scrollingElement || document.documentElement;
}
function O(e, t, n, r, o) {
    if (e.getBoundingClientRect || e === window) {
        let a;
        let top;
        let left;
        let bottom;
        let right;
        let height;
        let width;
        if (e !== window && e !== C()) {
            top = (a = e.getBoundingClientRect()).top;
            left = a.left;
            bottom = a.bottom;
            right = a.right;
            height = a.height;
            width = a.width;
        } else {
            top = 0;
            left = 0;
            bottom = window.innerHeight;
            right = window.innerWidth;
            height = window.innerHeight;
            width = window.innerWidth;
        }
        if ((t || n) && e !== window && (o = o || e.parentNode, !i)) {
            do {
                if (o && o.getBoundingClientRect && (css(o, "transform") !== "none" || n && css(o, "position") !== "static")) {
                    const p = o.getBoundingClientRect();
                    top -= p.top + parseInt(css(o, "border-top-width"));
                    left -= p.left + parseInt(css(o, "border-left-width"));
                    bottom = top + a.height;
                    right = left + a.width;
                    break;
                }
            }while (o = o.parentNode)
        }
        if (r && e !== window) {
            const h = w(o || e);
            const v = h && h.a;
            const g = h && h.d;
            if (h) {
                bottom = (top /= g) + (height /= g);
                right = (left /= v) + (width /= v);
            }
        }
        return {
            top,
            left,
            bottom,
            right,
            width,
            height
        };
    }
}
function E(e, t, n) {
    for(let r = j(e, true), o = O(e)[t]; r;){
        const i = O(r)[n];
        if (!(n === "top" || n === "left" ? o >= i : o <= i)) {
            return r;
        }
        if (r === C()) {
            break;
        }
        r = j(r, false);
    }
    return false;
}
function getChild(e, t, n) {
    let r = 0;
    for(let o = 0, i = e.children; o < i.length;){
        if (i[o].style.display !== "none" && i[o] !== Sortable.ghost && i[o] !== Sortable.dragged && closest(i[o], n.draggable, e, false)) {
            if (r === t) {
                return i[o];
            }
            r++;
        }
        o++;
    }
    return null;
}
function S(e, t) {
    for(var n = e.lastElementChild; n && (n === Sortable.ghost || css(n, "display") === "none" || t && !h(n, t));){
        n = n.previousElementSibling;
    }
    return n || null;
}
function A(e, t) {
    let n = 0;
    if (!e || !e.parentNode) {
        return -1;
    }
    while(e = e.previousElementSibling){
        if (!(e.nodeName.toUpperCase() === "TEMPLATE" || e === Sortable.clone || t && !h(e, t))) {
            n++;
        }
    }
    return n;
}
function k(e) {
    let t = 0;
    let n = 0;
    const r = C();
    if (e) {
        do {
            const o = w(e);
            t += e.scrollLeft * o.a;
            n += e.scrollTop * o.d;
        }while (e !== r && (e = e.parentNode))
    }
    return [
        t,
        n
    ];
}
function j(e, t) {
    if (!e || !e.getBoundingClientRect) {
        return C();
    }
    let n = e;
    let r = false;
    do {
        if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
            const o = css(n);
            if (n.clientWidth < n.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
                if (!n.getBoundingClientRect || n === document.body) {
                    return C();
                }
                if (r || t) {
                    return n;
                }
                r = true;
            }
        }
    }while (n = n.parentNode)
    return C();
}
function T(e, t) {
    return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width);
}
function throttle(e, t) {
    return function() {
        if (!y) {
            const n = arguments;
            const r = this;
            if (n.length === 1) {
                e.call(r, n[0]);
            } else {
                e.apply(r, n);
            }
            y = setTimeout(()=>{
                y = undefined;
            }, t);
        }
    };
}
function L(e, t, n) {
    e.scrollLeft += t;
    e.scrollTop += n;
}
function clone(e) {
    const window_Polymer = window.Polymer;
    const n = window.jQuery || window.Zepto;
    if (window_Polymer && window_Polymer.dom) {
        return window_Polymer.dom(e).cloneNode(true);
    }
    if (n) {
        return n(e).clone(true)[0];
    }
    return e.cloneNode(true);
}
function N(e, t) {
    css(e, "position", "absolute");
    css(e, "top", t.top);
    css(e, "left", t.left);
    css(e, "width", t.width);
    css(e, "height", t.height);
}
function D(e) {
    css(e, "position", "");
    css(e, "top", "");
    css(e, "left", "");
    css(e, "width", "");
    css(e, "height", "");
}
const I = `Sortable${(new Date).getTime()}`;
const R = [];
const H = {
    initializeByDefault: true
};
const B = {
    mount: function(e) {
        for(const t in H){
            if (H.hasOwnProperty(t) && !(t in e)) {
                e[t] = H[t];
            }
        }
        R.push(e);
    },
    pluginEvent: function(e, t, n) {
        const _this = this;
        this.eventCanceled = false;
        n.cancel = function() {
            _this.eventCanceled = true;
        };
        const i = `${e}Global`;
        R.forEach((o)=>{
            if (t[o.pluginName]) {
                if (t[o.pluginName][i]) {
                    t[o.pluginName][i]({
                        sortable: t,
                        ...n
                    });
                }
                if (t.options[o.pluginName] && t[o.pluginName][e]) {
                    t[o.pluginName][e]({
                        sortable: t,
                        ...n
                    });
                }
            }
        });
    },
    initializePlugins: function(e, t, n, r) {
        R.forEach((r)=>{
            const r_pluginName = r.pluginName;
            if (e.options[r_pluginName] || r.initializeByDefault) {
                const i = new r(e, t, e.options);
                i.sortable = e;
                i.options = e.options;
                e[r_pluginName] = i;
                Object.assign(n, i.defaults);
            }
        });
        for(const o in e.options){
            if (e.options.hasOwnProperty(o)) {
                const i = this.modifyOption(e, o, e.options[o]);
                if (i !== undefined) {
                    e.options[o] = i;
                }
            }
        }
    },
    getEventProperties: function(e, t) {
        const n = {};
        R.forEach((r)=>{
            if (typeof r.eventProperties === "function") {
                Object.assign(n, r.eventProperties.call(t[r.pluginName], e));
            }
        });
        return n;
    },
    modifyOption: function(e, t, n) {
        let r;
        R.forEach((o)=>{
            if (e[o.pluginName] && o.optionListeners && typeof o.optionListeners[t] === "function") {
                r = o.optionListeners[t].call(e[o.pluginName], n);
            }
        });
        return r;
    }
};
function F({ sortable, rootEl, name, targetEl, cloneEl, toEl, fromEl, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, originalEvent, putSortable, extraEventProperties }) {
    if (sortable = sortable || rootEl && rootEl[I]) {
        let m;
        const b = sortable.options;
        const x = `on${name.charAt(0).toUpperCase()}${name.substr(1)}`;
        if (!window.CustomEvent || i || a) {
            (m = document.createEvent("Event")).initEvent(name, true, true);
        } else {
            m = new CustomEvent(name, {
                bubbles: true,
                cancelable: true
            });
        }
        m.to = toEl || rootEl;
        m.from = fromEl || rootEl;
        m.item = targetEl || rootEl;
        m.clone = cloneEl;
        m.oldIndex = oldIndex;
        m.newIndex = newIndex;
        m.oldDraggableIndex = oldDraggableIndex;
        m.newDraggableIndex = newDraggableIndex;
        m.originalEvent = originalEvent;
        m.pullMode = putSortable ? putSortable.lastPutMode : undefined;
        const w = {
            ...extraEventProperties,
            ...B.getEventProperties(name, sortable)
        };
        for(const _ in w){
            m[_] = w[_];
        }
        if (rootEl) {
            rootEl.dispatchEvent(m);
        }
        if (b[x]) {
            b[x].call(sortable, m);
        }
    }
}
const V = (e, t, n = {})=>{
    const o = n;
    const o_evt = o.evt;
    const a = ((e, t)=>{
        if (e == null) {
            return {};
        }
        let n;
        let r;
        const o = {};
        const i = Object.keys(e);
        for(r = 0; r < i.length; r++){
            if (!(t.indexOf(n = i[r]) >= 0)) {
                o[n] = e[n];
            }
        }
        return o;
    })(o, [
        "evt"
    ]);
    B.pluginEvent.bind(Sortable)(e, t, {
        dragEl: U,
        parentEl: Z,
        ghostEl,
        rootEl: K,
        nextEl,
        lastDownEl,
        cloneEl,
        cloneHidden,
        dragStarted,
        putSortable,
        activeSortable: Sortable.active,
        originalEvent: o_evt,
        oldIndex,
        oldDraggableIndex,
        newIndex,
        newDraggableIndex,
        hideGhostForTarget,
        unhideGhostForTarget,
        cloneNowHidden: function() {
            cloneHidden = true;
        },
        cloneNowShown: function() {
            cloneHidden = false;
        },
        dispatchSortableEvent: function(name) {
            $({
                sortable: t,
                name,
                originalEvent: o_evt
            });
        },
        ...a
    });
};
function $(e) {
    F({
        putSortable,
        cloneEl,
        targetEl: U,
        rootEl: K,
        oldIndex,
        oldDraggableIndex,
        newIndex,
        newDraggableIndex,
        ...e
    });
}
var U;
var Z;
var ghostEl;
var K;
var nextEl;
var lastDownEl;
var cloneEl;
var cloneHidden;
var oldIndex;
var newIndex;
var oldDraggableIndex;
var newDraggableIndex;
let ne;
var putSortable;
let oe;
let ie;
let ae;
let le;
let ue;
let se;
var dragStarted;
let fe;
let de;
let pe;
let he;
let ve = false;
let ge = false;
var ye = [];
let me = false;
let be = false;
let xe = [];
let we = false;
const _e = [];
const Ce = typeof document !== "undefined";
const Oe = s;
const Ee = a || i ? "cssFloat" : "float";
var Me = Ce && !c && !s && "draggable" in document.createElement("div");
const Se = (()=>{
    if (Ce) {
        if (i) {
            return false;
        }
        const e = document.createElement("x");
        e.style.cssText = "pointer-events:auto";
        return e.style.pointerEvents === "auto";
    }
})();
var detectDirection = function(e, t) {
    const n = css(e);
    const r = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth);
    const o = getChild(e, 0, t);
    const i = getChild(e, 1, t);
    const a = o && css(o);
    const l = i && css(i);
    const u = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + O(o).width;
    const s = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + O(i).width;
    if (n.display === "flex") {
        if (n.flexDirection === "column" || n.flexDirection === "column-reverse") {
            return "vertical";
        }
        return "horizontal";
    }
    if (n.display === "grid") {
        if (n.gridTemplateColumns.split(" ").length <= 1) {
            return "vertical";
        }
        return "horizontal";
    }
    if (o && a.float && a.float !== "none") {
        if (!i || l.clear !== "both" && l.clear !== (a.float === "left" ? "left" : "right")) {
            return "horizontal";
        }
        return "vertical";
    }
    if (o && (a.display === "block" || a.display === "flex" || a.display === "table" || a.display === "grid" || u >= r && n[Ee] === "none" || i && n[Ee] === "none" && u + s > r)) {
        return "vertical";
    }
    return "horizontal";
};
var ke = (e)=>{
    function t(e, n) {
        return function(r, o, i, a) {
            if (e == null && (n || r.options.group.name && o.options.group.name && r.options.group.name === o.options.group.name)) {
                return true;
            }
            if (e == null || e === false) {
                return false;
            }
            if (n && e === "clone") {
                return e;
            }
            if (typeof e === "function") {
                return t(e(r, o, i, a), n)(r, o, i, a);
            }
            const name = (n ? r : o).options.group.name;
            return e === true || typeof e === "string" && e === name || e.join && e.indexOf(name) > -1;
        };
    }
    const n = {};
    let e_group = e.group;
    if (!(e_group && typeof e_group === "object")) {
        e_group = {
            name: e_group
        };
    }
    n.name = e_group.name;
    n.checkPull = t(e_group.pull, true);
    n.checkPut = t(e_group.put);
    n.revertClone = e_group.revertClone;
    e.group = n;
};
var hideGhostForTarget = function() {
    if (!Se && ghostEl) {
        css(ghostEl, "display", "none");
    }
};
var unhideGhostForTarget = function() {
    if (!Se && ghostEl) {
        css(ghostEl, "display", "");
    }
};
if (Ce) {
    document.addEventListener("click", function(e) {
        if (ge) {
            e.preventDefault();
            if (e.stopPropagation) {
                e.stopPropagation();
            }
            if (e.stopImmediatePropagation) {
                e.stopImmediatePropagation();
            }
            ge = false;
            return false;
        }
    }, true);
}
let swapItem;
const Le = function(e) {
    if (U) {
        o = (e = e.touches ? e.touches[0] : e).clientX;
        i = e.clientY;
        ye.some((e)=>{
            if (!S(e)) {
                const t = O(e);
                const n = e[I].options.emptyInsertThreshold;
                if (n && o >= t.left - n && o <= t.right + n && i >= t.top - n && i <= t.bottom + n) {
                    return a = e;
                }
                return undefined;
            }
        });
        const t = a;
        if (t) {
            const n = {};
            for(const r in e){
                if (e.hasOwnProperty(r)) {
                    n[r] = e[r];
                }
            }
            n.target = n.rootEl = t;
            n.preventDefault = undefined;
            n.stopPropagation = undefined;
            t[I]._onDragOver(n);
        }
    }
    var o;
    var i;
    var a;
};
const ze = function(e) {
    if (U) {
        U.parentNode[I]._isOutsideThisEl(e.target);
    }
};
export function Sortable(e, t) {
    if (!e || !e.nodeType || e.nodeType !== 1) {
        throw `Sortable: \`el\` must be an HTMLElement, not ${Object.prototype.toString.call(e)}`;
    }
    this.el = e;
    this.options = t = {
        ...t
    };
    e[I] = this;
    let n;
    let o;
    const i = {
        group: null,
        sort: true,
        disabled: false,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
        swapThreshold: 1,
        invertSwap: false,
        invertedSwapThreshold: null,
        removeCloneOnHide: true,
        direction: function() {
            return detectDirection(e, this.options);
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: true,
        animation: 0,
        easing: null,
        setData: function(e, t) {
            e.setData("Text", t.textContent);
        },
        dropBubble: false,
        dragoverBubble: false,
        dataIdAttr: "data-id",
        delay: 0,
        delayOnTouchOnly: false,
        touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
        forceFallback: false,
        fallbackClass: "sortable-fallback",
        fallbackOnBody: false,
        fallbackTolerance: 0,
        fallbackOffset: {
            x: 0,
            y: 0
        },
        supportPointer: Sortable.supportPointer !== false && "PointerEvent" in window,
        emptyInsertThreshold: 5
    };
    B.initializePlugins(this, e, i);
    for(const a in i){
        if (!(a in t)) {
            t[a] = i[a];
        }
    }
    ke(t);
    for(const l in this){
        if (l.charAt(0) === "_" && typeof this[l] === "function") {
            this[l] = this[l].bind(this);
        }
    }
    this.nativeDraggable = !t.forceFallback && Me;
    if (this.nativeDraggable) {
        this.options.touchStartThreshold = 1;
    }
    if (t.supportPointer) {
        on(e, "pointerdown", this._onTapStart);
    } else {
        on(e, "mousedown", this._onTapStart);
        on(e, "touchstart", this._onTapStart);
    }
    if (this.nativeDraggable) {
        on(e, "dragover", this);
        on(e, "dragenter", this);
    }
    ye.push(this.el);
    if (t.store && t.store.get) {
        this.sort(t.store.get(this) || []);
    }
    Object.assign(this, (o = [], {
        captureAnimationState: function() {
            o = [];
            if (this.options.animation) {
                Array.prototype.slice.call(this.el.children).forEach((e)=>{
                    if (css(e, "display") !== "none" && e !== undefined) {
                        o.push({
                            target: e,
                            rect: O(e)
                        });
                        const t = {
                            ...o[o.length - 1].rect
                        };
                        if (e.thisAnimationDuration) {
                            const n = w(e, true);
                            if (n) {
                                t.top -= n.f;
                                t.left -= n.e;
                            }
                        }
                        e.fromRect = t;
                    }
                });
            }
        },
        addAnimationState: function(e) {
            o.push(e);
        },
        removeAnimationState: function(target) {
            o.splice(((e, t)=>{
                for(const n in e){
                    if (e.hasOwnProperty(n)) {
                        for(const r in t){
                            if (t.hasOwnProperty(r) && t[r] === e[n][r]) {
                                return Number(n);
                            }
                        }
                    }
                }
                return -1;
            })(o, {
                target
            }), 1);
        },
        animateAll: function(e) {
            const _this = this;
            if (!this.options.animation) {
                clearTimeout(n);
                return void (typeof e === "function" && e());
            }
            let r = false;
            let i = 0;
            o.forEach((e)=>{
                let n = 0;
                const e_target = e.target;
                const o_fromRect = e_target.fromRect;
                const l = O(e_target);
                const { prevFromRect, prevToRect } = e_target;
                const e_rect = e.rect;
                const f = w(e_target, true);
                if (f) {
                    l.top -= f.f;
                    l.left -= f.e;
                }
                e_target.toRect = l;
                if (e_target.thisAnimationDuration && T(prevFromRect, l) && !T(o_fromRect, l) && (e_rect.top - l.top) / (e_rect.left - l.left) == (o_fromRect.top - l.top) / (o_fromRect.left - l.left)) {
                    n = ((e, t, n, r)=>Math.sqrt((t.top - e.top) ** 2 + (t.left - e.left) ** 2) / Math.sqrt((t.top - n.top) ** 2 + (t.left - n.left) ** 2) * r.animation)(e_rect, prevFromRect, prevToRect, _this.options);
                }
                if (!T(l, o_fromRect)) {
                    e_target.prevFromRect = o_fromRect;
                    e_target.prevToRect = l;
                    if (!n) {
                        n = _this.options.animation;
                    }
                    _this.animate(e_target, e_rect, l, n);
                }
                if (n) {
                    r = true;
                    i = Math.max(i, n);
                    clearTimeout(e_target.animationResetTimer);
                    e_target.animationResetTimer = setTimeout(()=>{
                        e_target.animationTime = 0;
                        e_target.prevFromRect = null;
                        e_target.fromRect = null;
                        e_target.prevToRect = null;
                        e_target.thisAnimationDuration = null;
                    }, n);
                    e_target.thisAnimationDuration = n;
                }
            });
            clearTimeout(n);
            if (r) {
                n = setTimeout(()=>{
                    if (typeof e === "function") {
                        e();
                    }
                }, i);
            } else if (typeof e === "function") {
                e();
            }
            o = [];
        },
        animate: function(e, t, n, r) {
            if (r) {
                css(e, "transition", "");
                css(e, "transform", "");
                const o = w(this.el);
                const i = (t.left - n.left) / (o && o.a || 1);
                const a = (t.top - n.top) / (o && o.d || 1);
                e.animatingX = !!i;
                e.animatingY = !!a;
                css(e, "transform", `translate3d(${i}px,${a}px,0)`);
                this.forRepaintDummy = ((e)=>e.offsetWidth)(e);
                css(e, "transition", `transform ${r}ms${this.options.easing ? ` ${this.options.easing}` : ""}`);
                css(e, "transform", "translate3d(0,0,0)");
                if (typeof e.animated === "number") {
                    clearTimeout(e.animated);
                }
                e.animated = setTimeout(()=>{
                    css(e, "transition", "");
                    css(e, "transform", "");
                    e.animated = false;
                    e.animatingX = false;
                    e.animatingY = false;
                }, r);
            }
        }
    }));
}
function De(e, toEl, n, dragRect, o, l, u, s) {
    let c;
    let f;
    const d = e[I];
    const onMove = d.options.onMove;
    if (!window.CustomEvent || i || a) {
        (c = document.createEvent("Event")).initEvent("move", true, true);
    } else {
        c = new CustomEvent("move", {
            bubbles: true,
            cancelable: true
        });
    }
    c.to = toEl;
    c.from = e;
    c.dragged = n;
    c.draggedRect = dragRect;
    c.related = o || toEl;
    c.relatedRect = l || O(toEl);
    c.willInsertAfter = s;
    c.originalEvent = u;
    e.dispatchEvent(c);
    if (onMove) {
        f = onMove.call(d, c, u);
    }
    return f;
}
function Ie(e) {
    e.draggable = false;
}
function Re() {
    we = false;
}
function He(e) {
    const t = e.tagName + e.className + e.src + e.href + e.textContent;
    for(var n = t.length, r = 0; n--;){
        r += t.charCodeAt(n);
    }
    return r.toString(36);
}
function nextTick(e) {
    return setTimeout(e, 0);
}
function cancelNextTick(e) {
    return clearTimeout(e);
}
Sortable.prototype = {
    constructor: Sortable,
    _isOutsideThisEl: function(e) {
        if (!(this.el.contains(e) || e === this.el)) {
            fe = null;
        }
    },
    _getDirection: function(e, t) {
        if (typeof this.options.direction === "function") {
            return this.options.direction.call(this, e, t, U);
        }
        return this.options.direction;
    },
    _onTapStart: function(e) {
        if (e.cancelable) {
            const t = this;
            const n = this.el;
            const r = this.options;
            const o = r.preventOnFilter;
            const i = e.type;
            const a = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e;
            let l = (a || e).target;
            const s = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || l;
            let c = r.filter;
            ((e)=>{
                _e.length = 0;
                const t = e.getElementsByTagName("input");
                for(let n = t.length; n--;){
                    const r = t[n];
                    if (r.checked) {
                        _e.push(r);
                    }
                }
            })(n);
            if (!U && !(/mousedown|pointerdown/.test(i) && e.button !== 0 || r.disabled) && !s.isContentEditable && (this.nativeDraggable || !u || !l || l.tagName.toUpperCase() !== "SELECT") && !((l = closest(l, r.draggable, n, false)) && l.animated || lastDownEl === l)) {
                oldIndex = A(l);
                oldDraggableIndex = A(l, r.draggable);
                if (typeof c === "function") {
                    if (c.call(this, e, l, this)) {
                        $({
                            sortable: t,
                            rootEl: s,
                            name: "filter",
                            targetEl: l,
                            toEl: n,
                            fromEl: n
                        });
                        V("filter", t, {
                            evt: e
                        });
                        return void (o && e.cancelable && e.preventDefault());
                    }
                } else if (c && (c = c.split(",").some((r)=>{
                    if (r = closest(s, r.trim(), n, false)) {
                        $({
                            sortable: t,
                            rootEl: r,
                            name: "filter",
                            targetEl: l,
                            fromEl: n,
                            toEl: n
                        });
                        V("filter", t, {
                            evt: e
                        });
                        return true;
                    }
                }))) {
                    return void (o && e.cancelable && e.preventDefault());
                }
                if (!(r.handle && !closest(s, r.handle, n, false))) {
                    this._prepareDragStart(e, a, l);
                }
            }
        }
    },
    _prepareDragStart: function(e, t, n) {
        let r;
        const _this = this;
        const { el, options } = _this;
        const el_ownerDocument = el.ownerDocument;
        if (n && !U && n.parentNode === el) {
            const f = O(n);
            K = el;
            Z = (U = n).parentNode;
            nextEl = U.nextSibling;
            lastDownEl = n;
            ne = options.group;
            Sortable.dragged = U;
            ue = (oe = {
                target: U,
                clientX: (t || e).clientX,
                clientY: (t || e).clientY
            }).clientX - f.left;
            se = oe.clientY - f.top;
            this._lastX = (t || e).clientX;
            this._lastY = (t || e).clientY;
            U.style["will-change"] = "all";
            r = function() {
                V("delayEnded", _this, {
                    evt: e
                });
                if (Sortable.eventCanceled) {
                    _this._onDrop();
                } else {
                    _this._disableDelayedDragEvents();
                    if (!l && _this.nativeDraggable) {
                        U.draggable = true;
                    }
                    _this._triggerDragStart(e, t);
                    $({
                        sortable: _this,
                        name: "choose",
                        originalEvent: e
                    });
                    toggleClass(U, options.chosenClass, true);
                }
            };
            options.ignore.split(",").forEach((e)=>{
                find(U, e.trim(), Ie);
            });
            on(el_ownerDocument, "dragover", Le);
            on(el_ownerDocument, "mousemove", Le);
            on(el_ownerDocument, "touchmove", Le);
            on(el_ownerDocument, "mouseup", _this._onDrop);
            on(el_ownerDocument, "touchend", _this._onDrop);
            on(el_ownerDocument, "touchcancel", _this._onDrop);
            if (l && this.nativeDraggable) {
                this.options.touchStartThreshold = 4;
                U.draggable = true;
            }
            V("delayStart", this, {
                evt: e
            });
            if (!options.delay || options.delayOnTouchOnly && !t || this.nativeDraggable && (a || i)) {
                r();
            } else {
                if (Sortable.eventCanceled) {
                    return void this._onDrop();
                }
                on(el_ownerDocument, "mouseup", _this._disableDelayedDrag);
                on(el_ownerDocument, "touchend", _this._disableDelayedDrag);
                on(el_ownerDocument, "touchcancel", _this._disableDelayedDrag);
                on(el_ownerDocument, "mousemove", _this._delayedDragTouchMoveHandler);
                on(el_ownerDocument, "touchmove", _this._delayedDragTouchMoveHandler);
                if (options.supportPointer) {
                    on(el_ownerDocument, "pointermove", _this._delayedDragTouchMoveHandler);
                }
                _this._dragStartTimer = setTimeout(r, options.delay);
            }
        }
    },
    _delayedDragTouchMoveHandler: function(e) {
        const t = e.touches ? e.touches[0] : e;
        if (Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
            this._disableDelayedDrag();
        }
    },
    _disableDelayedDrag: function() {
        if (U) {
            Ie(U);
        }
        clearTimeout(this._dragStartTimer);
        this._disableDelayedDragEvents();
    },
    _disableDelayedDragEvents: function() {
        const ownerDocument = this.el.ownerDocument;
        off(ownerDocument, "mouseup", this._disableDelayedDrag);
        off(ownerDocument, "touchend", this._disableDelayedDrag);
        off(ownerDocument, "touchcancel", this._disableDelayedDrag);
        off(ownerDocument, "mousemove", this._delayedDragTouchMoveHandler);
        off(ownerDocument, "touchmove", this._delayedDragTouchMoveHandler);
        off(ownerDocument, "pointermove", this._delayedDragTouchMoveHandler);
    },
    _triggerDragStart: function(e, t) {
        t = t || e.pointerType == "touch" && e;
        if (!this.nativeDraggable || t) {
            on(document, this.options.supportPointer ? "pointermove" : t ? "touchmove" : "mousemove", this._onTouchMove);
        } else {
            on(U, "dragend", this);
            on(K, "dragstart", this._onDragStart);
        }
        try {
            if (document.selection) {
                nextTick(function() {
                    document.selection.empty();
                });
            } else {
                window.getSelection().removeAllRanges();
            }
        } catch (e) {}
    },
    _dragStarted: function(e, t) {
        ve = false;
        if (K && U) {
            V("dragStarted", this, {
                evt: t
            });
            if (this.nativeDraggable) {
                on(document, "dragover", ze);
            }
            const n = this.options;
            if (!e) {
                toggleClass(U, n.dragClass, false);
            }
            toggleClass(U, n.ghostClass, true);
            Sortable.active = this;
            if (e) {
                this._appendGhost();
            }
            $({
                sortable: this,
                name: "start",
                originalEvent: t
            });
        } else {
            this._nulling();
        }
    },
    _emulateDragOver: function() {
        if (ie) {
            this._lastX = ie.clientX;
            this._lastY = ie.clientY;
            hideGhostForTarget();
            for(var e = document.elementFromPoint(ie.clientX, ie.clientY), t = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(ie.clientX, ie.clientY)) !== t;){
                t = e;
            }
            U.parentNode[I]._isOutsideThisEl(e);
            if (t) {
                do {
                    if (t[I] && t[I]._onDragOver({
                        clientX: ie.clientX,
                        clientY: ie.clientY,
                        target: e,
                        rootEl: t
                    }) && !this.options.dragoverBubble) {
                        break;
                    }
                    e = t;
                }while (t = t.parentNode)
            }
            unhideGhostForTarget();
        }
    },
    _onTouchMove: function(e) {
        if (oe) {
            const t = this.options;
            const { fallbackTolerance, fallbackOffset } = t;
            const o = e.touches ? e.touches[0] : e;
            let i = ghostEl && w(ghostEl, true);
            const a = ghostEl && i && i.a;
            const l = ghostEl && i && i.d;
            const u = Oe && he && k(he);
            const e_1 = (o.clientX - oe.clientX + fallbackOffset.x) / (a || 1) + (u ? u[0] - xe[0] : 0) / (a || 1);
            const f_1 = (o.clientY - oe.clientY + fallbackOffset.y) / (l || 1) + (u ? u[1] - xe[1] : 0) / (l || 1);
            if (!Sortable.active && !ve) {
                if (fallbackTolerance && Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) < fallbackTolerance) {
                    return;
                }
                this._onDragStart(e, true);
            }
            if (ghostEl) {
                if (i) {
                    i.e += e_1 - (ae || 0);
                    i.f += f_1 - (le || 0);
                } else {
                    i = {
                        a: 1,
                        b: 0,
                        c: 0,
                        d: 1,
                        e: e_1,
                        f: f_1
                    };
                }
                const f = `matrix(${i.a},${i.b},${i.c},${i.d},${i.e},${i.f})`;
                css(ghostEl, "webkitTransform", f);
                css(ghostEl, "mozTransform", f);
                css(ghostEl, "msTransform", f);
                css(ghostEl, "transform", f);
                ae = e_1;
                le = f_1;
                ie = o;
            }
            if (e.cancelable) {
                e.preventDefault();
            }
        }
    },
    _appendGhost: function() {
        if (!ghostEl) {
            const e = this.options.fallbackOnBody ? document.body : K;
            const t = O(U, true, Oe, true, e);
            const n = this.options;
            if (Oe) {
                for(he = e; css(he, "position") === "static" && css(he, "transform") === "none" && he !== document;){
                    he = he.parentNode;
                }
                if (he !== document.body && he !== document.documentElement) {
                    if (he === document) {
                        he = C();
                    }
                    t.top += he.scrollTop;
                    t.left += he.scrollLeft;
                } else {
                    he = C();
                }
                xe = k(he);
            }
            toggleClass(ghostEl = U.cloneNode(true), n.ghostClass, false);
            toggleClass(ghostEl, n.fallbackClass, true);
            toggleClass(ghostEl, n.dragClass, true);
            css(ghostEl, "transition", "");
            css(ghostEl, "transform", "");
            css(ghostEl, "box-sizing", "border-box");
            css(ghostEl, "margin", 0);
            css(ghostEl, "top", t.top);
            css(ghostEl, "left", t.left);
            css(ghostEl, "width", t.width);
            css(ghostEl, "height", t.height);
            css(ghostEl, "opacity", "0.8");
            css(ghostEl, "position", Oe ? "absolute" : "fixed");
            css(ghostEl, "zIndex", "100000");
            css(ghostEl, "pointerEvents", "none");
            Sortable.ghost = ghostEl;
            e.appendChild(ghostEl);
            css(ghostEl, "transform-origin", `${ue / parseInt(ghostEl.style.width) * 100}% ${se / parseInt(ghostEl.style.height) * 100}%`);
        }
    },
    _onDragStart: function(e, t) {
        const _this = this;
        const e_dataTransfer = e.dataTransfer;
        const options = _this.options;
        V("dragStart", this, {
            evt: e
        });
        if (Sortable.eventCanceled) {
            this._onDrop();
        } else {
            V("setupClone", this);
            if (!Sortable.eventCanceled) {
                cloneEl = clone(U);
                cloneEl.draggable = false;
                cloneEl.style["will-change"] = "";
                this._hideClone();
                toggleClass(cloneEl, this.options.chosenClass, false);
                Sortable.clone = cloneEl;
            }
            _this.cloneId = nextTick(function() {
                V("clone", _this);
                if (!Sortable.eventCanceled) {
                    if (!_this.options.removeCloneOnHide) {
                        K.insertBefore(cloneEl, U);
                    }
                    _this._hideClone();
                    $({
                        sortable: _this,
                        name: "clone"
                    });
                }
            });
            if (!t) {
                toggleClass(U, options.dragClass, true);
            }
            if (t) {
                ge = true;
                _this._loopId = setInterval(_this._emulateDragOver, 50);
            } else {
                off(document, "mouseup", _this._onDrop);
                off(document, "touchend", _this._onDrop);
                off(document, "touchcancel", _this._onDrop);
                if (e_dataTransfer) {
                    e_dataTransfer.effectAllowed = "move";
                    if (options.setData) {
                        options.setData.call(_this, e_dataTransfer, U);
                    }
                }
                on(document, "drop", _this);
                css(U, "transform", "translateZ(0)");
            }
            ve = true;
            _this._dragStartId = nextTick(_this._dragStarted.bind(_this, t, e));
            on(document, "selectstart", _this);
            dragStarted = true;
            if (u) {
                css(document.body, "user-select", "none");
            }
        }
    },
    _onDragOver: function(e) {
        let dragRect;
        let targetRect;
        let revert;
        let i;
        const toEl = this.el;
        let e_target = e.target;
        const options = this.options;
        const u_group = options.group;
        const Sortable_active = Sortable.active;
        const isOwner = ne === u_group;
        const u_sort = options.sort;
        const fromSortable = putSortable || Sortable_active;
        const _this = this;
        let v = false;
        if (!we) {
            if (e.preventDefault !== undefined && e.cancelable) {
                e.preventDefault();
            }
            e_target = closest(e_target, options.draggable, toEl, true);
            R("dragOver");
            if (Sortable.eventCanceled) {
                return v;
            }
            if (U.contains(e.target) || e_target.animated && e_target.animatingX && e_target.animatingY || _this._ignoreWhileAnimating === e_target) {
                return completed(false);
            }
            ge = false;
            if (Sortable_active && !options.disabled && (isOwner ? u_sort || (revert = !K.contains(U)) : putSortable === this || (this.lastPutMode = ne.checkPull(this, Sortable_active, U, e)) && u_group.checkPut(this, Sortable_active, U, e))) {
                i = this._getDirection(e, e_target) === "vertical";
                dragRect = O(U);
                R("dragOverValid");
                if (Sortable.eventCanceled) {
                    return v;
                }
                if (revert) {
                    Z = K;
                    H();
                    this._hideClone();
                    R("revert");
                    if (!Sortable.eventCanceled) {
                        if (nextEl) {
                            K.insertBefore(U, nextEl);
                        } else {
                            K.appendChild(U);
                        }
                    }
                    return completed(true);
                }
                const y = S(toEl, options.draggable);
                if (!y || ((e, t, n)=>{
                    const r = O(S(n.el, n.options.draggable));
                    if (t) {
                        return e.clientX > r.right + 10 || e.clientX <= r.right && e.clientY > r.bottom && e.clientX >= r.left;
                    }
                    return e.clientX > r.right && e.clientY > r.top || e.clientX <= r.right && e.clientY > r.bottom + 10;
                })(e, i, this) && !y.animated) {
                    if (y === U) {
                        return completed(false);
                    }
                    if (y && toEl === e.target) {
                        e_target = y;
                    }
                    if (e_target) {
                        targetRect = O(e_target);
                    }
                    if (De(K, toEl, U, dragRect, e_target, targetRect, e, !!e_target) !== false) {
                        H();
                        toEl.appendChild(U);
                        Z = toEl;
                        changed();
                        return completed(true);
                    }
                } else if (e_target.parentNode === toEl) {
                    targetRect = O(e_target);
                    let m;
                    let w;
                    let _;
                    const C = U.parentNode !== toEl;
                    const M = !((e, t, n)=>{
                        const r = n ? e.left : e.top;
                        const o = n ? t.left : t.top;
                        return r === o || (n ? e.right : e.bottom) === (n ? t.right : t.bottom) || r + (n ? e.width : e.height) / 2 === o + (n ? t.width : t.height) / 2;
                    })(U.animated && U.toRect || dragRect, e_target.animated && e_target.toRect || targetRect, i);
                    const k = i ? "top" : "left";
                    const j = E(e_target, "top", "top") || E(U, "top", "top");
                    const T = j ? j.scrollTop : undefined;
                    if (fe !== e_target) {
                        w = targetRect[k];
                        me = false;
                        be = !M && options.invertSwap || C;
                    }
                    if ((m = ((e, e_target_1, targetRect_1, r, o, i, a, l)=>{
                        const u = r ? e.clientY : e.clientX;
                        const s = r ? targetRect_1.height : targetRect_1.width;
                        const c = r ? targetRect_1.top : targetRect_1.left;
                        const f = r ? targetRect_1.bottom : targetRect_1.right;
                        let d = false;
                        if (!a) {
                            if (l && pe < s * o) {
                                if (!me && (de === 1 ? u > c + s * i / 2 : u < f - s * i / 2)) {
                                    me = true;
                                }
                                if (me) {
                                    d = true;
                                } else if (de === 1 ? u < c + pe : u > f - pe) {
                                    return -de;
                                }
                            } else if (u > c + s * (1 - o) / 2 && u < f - s * (1 - o) / 2) {
                                return ((e_target_1_1)=>{
                                    if (A(U) < A(e_target_1_1)) {
                                        return 1;
                                    }
                                    return -1;
                                })(e_target_1);
                            }
                        }
                        if ((d = d || a) && (u < c + s * i / 2 || u > f - s * i / 2)) {
                            if (u > c + s / 2) {
                                return 1;
                            }
                            return -1;
                        }
                        return 0;
                    })(e, e_target, targetRect, i, M ? 1 : options.swapThreshold, options.invertedSwapThreshold ?? options.swapThreshold, be, fe === e_target)) !== 0) {
                        let P = A(U);
                        do {
                            _ = Z.children[P -= m];
                        }while (_ && (css(_, "display") === "none" || _ === ghostEl))
                    }
                    if (m === 0 || _ === e_target) {
                        return completed(false);
                    }
                    fe = e_target;
                    de = m;
                    const z = e_target.nextElementSibling;
                    let N = false;
                    const D = De(K, toEl, U, dragRect, e_target, targetRect, e, N = m === 1);
                    if (D !== false) {
                        if (!(D !== 1 && D !== -1)) {
                            N = D === 1;
                        }
                        we = true;
                        setTimeout(Re, 30);
                        H();
                        if (N && !z) {
                            toEl.appendChild(U);
                        } else {
                            e_target.parentNode.insertBefore(U, N ? z : e_target);
                        }
                        if (j) {
                            L(j, 0, T - j.scrollTop);
                        }
                        Z = U.parentNode;
                        if (!(w === undefined || be)) {
                            pe = Math.abs(w - O(e_target)[k]);
                        }
                        changed();
                        return completed(true);
                    }
                }
                if (toEl.contains(U)) {
                    return completed(false);
                }
            }
            return false;
        }
        function R(u, s) {
            V(u, _this, {
                evt: e,
                isOwner,
                axis: i ? "vertical" : "horizontal",
                revert,
                dragRect,
                targetRect,
                canSort: u_sort,
                fromSortable,
                target: e_target,
                completed,
                onMove: function(n, r) {
                    return De(K, toEl, U, dragRect, n, O(n), e, r);
                },
                changed,
                ...s
            });
        }
        function H() {
            R("dragOverAnimationCapture");
            _this.captureAnimationState();
            if (_this !== fromSortable) {
                fromSortable.captureAnimationState();
            }
        }
        function completed(insertion) {
            R("dragOverCompleted", {
                insertion
            });
            if (insertion) {
                if (isOwner) {
                    Sortable_active._hideClone();
                } else {
                    Sortable_active._showClone(_this);
                }
                if (_this !== fromSortable) {
                    toggleClass(U, putSortable ? putSortable.options.ghostClass : Sortable_active.options.ghostClass, false);
                    toggleClass(U, options.ghostClass, true);
                }
                if (putSortable !== _this && _this !== Sortable.active) {
                    putSortable = _this;
                } else if (_this === Sortable.active && putSortable) {
                    putSortable = null;
                }
                if (fromSortable === _this) {
                    _this._ignoreWhileAnimating = e_target;
                }
                _this.animateAll(function() {
                    R("dragOverAnimationComplete");
                    _this._ignoreWhileAnimating = null;
                });
                if (_this !== fromSortable) {
                    fromSortable.animateAll();
                    fromSortable._ignoreWhileAnimating = null;
                }
            }
            if (e_target === U && !U.animated || e_target === toEl && !e_target.animated) {
                fe = null;
            }
            if (!(options.dragoverBubble || e.rootEl || e_target === document)) {
                U.parentNode[I]._isOutsideThisEl(e.target);
                if (!insertion) {
                    Le(e);
                }
            }
            if (!options.dragoverBubble && e.stopPropagation) {
                e.stopPropagation();
            }
            return v = true;
        }
        function changed() {
            newIndex = A(U);
            newDraggableIndex = A(U, options.draggable);
            $({
                sortable: _this,
                name: "change",
                toEl,
                newIndex,
                newDraggableIndex,
                originalEvent: e
            });
        }
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function() {
        off(document, "mousemove", this._onTouchMove);
        off(document, "touchmove", this._onTouchMove);
        off(document, "pointermove", this._onTouchMove);
        off(document, "dragover", Le);
        off(document, "mousemove", Le);
        off(document, "touchmove", Le);
    },
    _offUpEvents: function() {
        const ownerDocument = this.el.ownerDocument;
        off(ownerDocument, "mouseup", this._onDrop);
        off(ownerDocument, "touchend", this._onDrop);
        off(ownerDocument, "pointerup", this._onDrop);
        off(ownerDocument, "touchcancel", this._onDrop);
        off(document, "selectstart", this);
    },
    _onDrop: function(e) {
        const t = this.el;
        const options = this.options;
        newIndex = A(U);
        newDraggableIndex = A(U, options.draggable);
        V("drop", this, {
            evt: e
        });
        Z = U && U.parentNode;
        newIndex = A(U);
        newDraggableIndex = A(U, options.draggable);
        if (!Sortable.eventCanceled) {
            ve = false;
            be = false;
            me = false;
            clearInterval(this._loopId);
            clearTimeout(this._dragStartTimer);
            cancelNextTick(this.cloneId);
            cancelNextTick(this._dragStartId);
            if (this.nativeDraggable) {
                off(document, "drop", this);
                off(t, "dragstart", this._onDragStart);
            }
            this._offMoveEvents();
            this._offUpEvents();
            if (u) {
                css(document.body, "user-select", "");
            }
            css(U, "transform", "");
            if (e) {
                if (dragStarted) {
                    if (e.cancelable) {
                        e.preventDefault();
                    }
                    if (!options.dropBubble) {
                        e.stopPropagation();
                    }
                }
                if (ghostEl && ghostEl.parentNode) {
                    ghostEl.parentNode.removeChild(ghostEl);
                }
                if ((K === Z || putSortable && putSortable.lastPutMode !== "clone") && cloneEl && cloneEl.parentNode) {
                    cloneEl.parentNode.removeChild(cloneEl);
                }
                if (U) {
                    if (this.nativeDraggable) {
                        off(U, "dragend", this);
                    }
                    Ie(U);
                    U.style["will-change"] = "";
                    if (dragStarted && !ve) {
                        toggleClass(U, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
                    }
                    toggleClass(U, this.options.chosenClass, false);
                    $({
                        sortable: this,
                        name: "unchoose",
                        toEl: Z,
                        newIndex: null,
                        newDraggableIndex: null,
                        originalEvent: e
                    });
                    if (K !== Z) {
                        if (newIndex >= 0) {
                            $({
                                rootEl: Z,
                                name: "add",
                                toEl: Z,
                                fromEl: K,
                                originalEvent: e
                            });
                            $({
                                sortable: this,
                                name: "remove",
                                toEl: Z,
                                originalEvent: e
                            });
                            $({
                                rootEl: Z,
                                name: "sort",
                                toEl: Z,
                                fromEl: K,
                                originalEvent: e
                            });
                            $({
                                sortable: this,
                                name: "sort",
                                toEl: Z,
                                originalEvent: e
                            });
                        }
                        if (putSortable) {
                            putSortable.save();
                        }
                    } else if (newIndex !== oldIndex && newIndex >= 0) {
                        $({
                            sortable: this,
                            name: "update",
                            toEl: Z,
                            originalEvent: e
                        });
                        $({
                            sortable: this,
                            name: "sort",
                            toEl: Z,
                            originalEvent: e
                        });
                    }
                    if (Sortable.active) {
                        if (!(newIndex != null && newIndex !== -1)) {
                            newIndex = oldIndex;
                            newDraggableIndex = oldDraggableIndex;
                        }
                        $({
                            sortable: this,
                            name: "end",
                            toEl: Z,
                            originalEvent: e
                        });
                        this.save();
                    }
                }
            }
        }
        this._nulling();
    },
    _nulling: function() {
        V("nulling", this);
        K = U = Z = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = oe = ie = dragStarted = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = fe = de = putSortable = ne = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
        _e.forEach((e)=>{
            e.checked = true;
        });
        _e.length = ae = le = 0;
    },
    handleEvent: function(e) {
        switch(e.type){
            case "drop":
            case "dragend":
                this._onDrop(e);
                break;
            case "dragenter":
            case "dragover":
                if (U) {
                    this._onDragOver(e);
                    ((e)=>{
                        if (e.dataTransfer) {
                            e.dataTransfer.dropEffect = "move";
                        }
                        if (e.cancelable) {
                            e.preventDefault();
                        }
                    })(e);
                }
                break;
            case "selectstart":
                e.preventDefault();
        }
    },
    toArray: function() {
        let e;
        const t = [];
        const children = this.el.children;
        for(let r = 0, o = children.length, i = this.options; r < o; r++){
            if (closest(e = children[r], i.draggable, this.el, false)) {
                t.push(e.getAttribute(i.dataIdAttr) || He(e));
            }
        }
        return t;
    },
    sort: function(e) {
        const t = {};
        const n = this.el;
        this.toArray().forEach(function(e, r) {
            const o = n.children[r];
            if (closest(o, this.options.draggable, n, false)) {
                t[e] = o;
            }
        }, this);
        e.forEach((e)=>{
            if (t[e]) {
                n.removeChild(t[e]);
                n.appendChild(t[e]);
            }
        });
    },
    save: function() {
        const store = this.options.store;
        if (store && store.set) {
            store.set(this);
        }
    },
    closest: function(e, t) {
        return closest(e, t || this.options.draggable, this.el, false);
    },
    option: function(e, t) {
        const options = this.options;
        if (t === undefined) {
            return options[e];
        }
        const r = B.modifyOption(this, e, t);
        options[e] = r !== undefined ? r : t;
        if (e === "group") {
            ke(options);
        }
    },
    destroy: function() {
        V("destroy", this);
        let e = this.el;
        e[I] = null;
        off(e, "mousedown", this._onTapStart);
        off(e, "touchstart", this._onTapStart);
        off(e, "pointerdown", this._onTapStart);
        if (this.nativeDraggable) {
            off(e, "dragover", this);
            off(e, "dragenter", this);
        }
        Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(e) {
            e.removeAttribute("draggable");
        });
        this._onDrop();
        this._disableDelayedDragEvents();
        ye.splice(ye.indexOf(this.el), 1);
        this.el = e = null;
    },
    _hideClone: function() {
        if (!cloneHidden) {
            V("hideClone", this);
            if (Sortable.eventCanceled) {
                return;
            }
            css(cloneEl, "display", "none");
            if (this.options.removeCloneOnHide && cloneEl.parentNode) {
                cloneEl.parentNode.removeChild(cloneEl);
            }
            cloneHidden = true;
        }
    },
    _showClone: function(e) {
        if (e.lastPutMode === "clone") {
            if (cloneHidden) {
                V("showClone", this);
                if (Sortable.eventCanceled) {
                    return;
                }
                if (U.parentNode != K || this.options.group.revertClone) {
                    if (nextEl) {
                        K.insertBefore(cloneEl, nextEl);
                    } else {
                        K.appendChild(cloneEl);
                    }
                } else {
                    K.insertBefore(cloneEl, U);
                }
                if (this.options.group.revertClone) {
                    this.animate(U, cloneEl);
                }
                css(cloneEl, "display", "");
                cloneHidden = false;
            }
        } else {
            this._hideClone();
        }
    }
};
if (Ce) {
    on(document, "touchmove", function(e) {
        if ((Sortable.active || ve) && e.cancelable) {
            e.preventDefault();
        }
    });
}
Sortable.utils = {
    on,
    off,
    css,
    find,
    is: function(e, t) {
        return !!closest(e, t, e, false);
    },
    extend: function(e, t) {
        if (e && t) {
            for(const n in t){
                if (t.hasOwnProperty(n)) {
                    e[n] = t[n];
                }
            }
        }
        return e;
    },
    throttle,
    closest,
    toggleClass,
    clone,
    index: A,
    nextTick,
    cancelNextTick,
    detectDirection,
    getChild
};
Sortable.get = function(e) {
    return e[I];
};
Sortable.mount = function() {
    let e = Array.prototype.slice.call(arguments);
    if (e[0].constructor === Array) {
        e = e[0];
    }
    e.forEach((e)=>{
        if (!e.prototype || !e.prototype.constructor) {
            throw `Sortable: Mounted plugin must be a constructor function, not ${Object.prototype.toString.call(e)}`;
        }
        if (e.utils) {
            Sortable.utils = {
                ...Sortable.utils,
                ...e.utils
            };
        }
        B.mount(e);
    });
};
Sortable.create = function(e, t) {
    return new Sortable(e, t);
};
Sortable.version = "1.12.0";
let Ve;
let $e;
let Ue;
let Ze;
let We;
let Ke = [];
const Ge = [];
let qe = false;
let Ye = false;
let Xe = false;
function Je(e, rootEl) {
    Ge.forEach((n, r)=>{
        const o = rootEl.children[n.sortableIndex + (e ? Number(r) : 0)];
        if (o) {
            rootEl.insertBefore(n, o);
        } else {
            rootEl.appendChild(n);
        }
    });
}
function Qe() {
    Ke.forEach((e)=>{
        if (e !== Ue && e.parentNode) {
            e.parentNode.removeChild(e);
        }
    });
}
const drop = function(e) {
    const { originalEvent, putSortable, dragEl, dispatchSortableEvent, unhideGhostForTarget } = e;
    if (originalEvent) {
        const a = putSortable || e.activeSortable;
        e.hideGhostForTarget();
        const l = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
        const u = document.elementFromPoint(l.clientX, l.clientY);
        unhideGhostForTarget();
        if (a && !a.el.contains(u)) {
            dispatchSortableEvent("spill");
            this.onSpill({
                dragEl,
                putSortable
            });
        }
    }
};
function tt() {}
function nt() {}
tt.prototype = {
    startIndex: null,
    dragStart: function(e) {
        this.startIndex = e.oldDraggableIndex;
    },
    onSpill: function({ dragEl, putSortable }) {
        this.sortable.captureAnimationState();
        if (putSortable) {
            putSortable.captureAnimationState();
        }
        const r = getChild(this.sortable.el, this.startIndex, this.options);
        if (r) {
            this.sortable.el.insertBefore(dragEl, r);
        } else {
            this.sortable.el.appendChild(dragEl);
        }
        this.sortable.animateAll();
        if (putSortable) {
            putSortable.animateAll();
        }
    },
    drop
};
Object.assign(tt, {
    pluginName: "revertOnSpill"
});
nt.prototype = {
    onSpill: function(e) {
        const e_dragEl = e.dragEl;
        const n = e.putSortable || this.sortable;
        n.captureAnimationState();
        if (e_dragEl.parentNode) {
            e_dragEl.parentNode.removeChild(e_dragEl);
        }
        n.animateAll();
    },
    drop
};
Object.assign(nt, {
    pluginName: "removeOnSpill"
});
let rt;
let ot;
let it;
let at;
let lt;
let ut;
let st = [];
let ct = false;
function ft() {
    st.forEach((e)=>{
        clearInterval(e.pid);
    });
    st = [];
}
function dt() {
    clearInterval(ut);
}
const pt = throttle((e, t, n, r)=>{
    if (t.scroll) {
        let o;
        const i = (e.touches ? e.touches[0] : e).clientX;
        const a = (e.touches ? e.touches[0] : e).clientY;
        const { scrollSensitivity, scrollSpeed } = t;
        const s = C();
        let c = false;
        if (ot !== n) {
            ot = n;
            ft();
            o = t.scrollFn;
            if ((rt = t.scroll) === true) {
                rt = j(n, true);
            }
        }
        let layer = 0;
        let d = rt;
        do {
            const p = d;
            const h = O(p);
            const { top, bottom, left, right, width, height } = h;
            let _;
            let E;
            const { scrollWidth, scrollHeight } = p;
            const A = css(p);
            const { scrollLeft, scrollTop } = p;
            if (p === s) {
                _ = width < scrollWidth && (A.overflowX === "auto" || A.overflowX === "scroll" || A.overflowX === "visible");
                E = height < scrollHeight && (A.overflowY === "auto" || A.overflowY === "scroll" || A.overflowY === "visible");
            } else {
                _ = width < scrollWidth && (A.overflowX === "auto" || A.overflowX === "scroll");
                E = height < scrollHeight && (A.overflowY === "auto" || A.overflowY === "scroll");
            }
            const P = _ && (Math.abs(right - i) <= scrollSensitivity && scrollLeft + width < scrollWidth) - (Math.abs(left - i) <= scrollSensitivity && !!scrollLeft);
            const z = E && (Math.abs(bottom - a) <= scrollSensitivity && scrollTop + height < scrollHeight) - (Math.abs(top - a) <= scrollSensitivity && !!scrollTop);
            if (!st[layer]) {
                for(let N = 0; N <= layer; N++){
                    if (!st[N]) {
                        st[N] = {};
                    }
                }
            }
            if (!(st[layer].vx == P && st[layer].vy == z && st[layer].el === p)) {
                st[layer].el = p;
                st[layer].vx = P;
                st[layer].vy = z;
                clearInterval(st[layer].pid);
                if (!(P == 0 && z == 0)) {
                    c = true;
                    st[layer].pid = setInterval((function() {
                        if (r && this.layer === 0) {
                            Sortable.active._onTouchMove(lt);
                        }
                        const t = st[this.layer].vy ? st[this.layer].vy * scrollSpeed : 0;
                        const n = st[this.layer].vx ? st[this.layer].vx * scrollSpeed : 0;
                        if (!(typeof o === "function" && o.call(Sortable.dragged.parentNode[I], n, t, e, lt, st[this.layer].el) !== "continue")) {
                            L(st[this.layer].el, n, t);
                        }
                    }).bind({
                        layer
                    }), 24);
                }
            }
            layer++;
        }while (t.bubbleScroll && d !== s && (d = j(d, false)))
        ct = c;
    }
}, 30);
Sortable.mount(new function() {
    function e() {
        this.defaults = {
            scroll: true,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: true
        };
        for(const e in this){
            if (e.charAt(0) === "_" && typeof this[e] === "function") {
                this[e] = this[e].bind(this);
            }
        }
    }
    e.prototype = {
        dragStarted: function({ originalEvent }) {
            if (this.sortable.nativeDraggable) {
                on(document, "dragover", this._handleAutoScroll);
            } else {
                on(document, this.options.supportPointer ? "pointermove" : originalEvent.touches ? "touchmove" : "mousemove", this._handleFallbackAutoScroll);
            }
        },
        dragOverCompleted: function({ originalEvent }) {
            if (!(this.options.dragOverBubble || originalEvent.rootEl)) {
                this._handleAutoScroll(originalEvent);
            }
        },
        drop: function() {
            if (this.sortable.nativeDraggable) {
                off(document, "dragover", this._handleAutoScroll);
            } else {
                off(document, "pointermove", this._handleFallbackAutoScroll);
                off(document, "touchmove", this._handleFallbackAutoScroll);
                off(document, "mousemove", this._handleFallbackAutoScroll);
            }
            dt();
            ft();
            clearTimeout(y);
            y = undefined;
        },
        nulling: function() {
            at = null;
            it = null;
            ut = null;
            ct = null;
            rt = null;
            ot = null;
            lt = null;
            st.length = 0;
        },
        _handleFallbackAutoScroll: function(e) {
            this._handleAutoScroll(e, true);
        },
        _handleAutoScroll: function(e, t) {
            const _this = this;
            const clientX = (e.touches ? e.touches[0] : e).clientX;
            const clientY = (e.touches ? e.touches[0] : e).clientY;
            const l = document.elementFromPoint(clientX, clientY);
            lt = e;
            if (t || a || i || u) {
                pt(e, this.options, l, t);
                let s = j(l, true);
                if (!(!ct || ut && clientX === it && clientY === at)) {
                    if (ut) {
                        dt();
                    }
                    ut = setInterval(()=>{
                        const i = j(document.elementFromPoint(clientX, clientY), true);
                        if (i !== s) {
                            s = i;
                            ft();
                        }
                        pt(e, _this.options, i, t);
                    }, 10);
                    it = clientX;
                    at = clientY;
                }
            } else {
                if (!this.options.bubbleScroll || j(l, true) === C()) {
                    return void ft();
                }
                pt(e, this.options, j(l, false), false);
            }
        }
    };
    return Object.assign(e, {
        pluginName: "scroll",
        initializeByDefault: true
    });
});
Sortable.mount(nt, tt);
Sortable.mount(new function() {
    function e() {
        this.defaults = {
            swapClass: "sortable-swap-highlight"
        };
    }
    e.prototype = {
        dragStart: function(e) {
            swapItem = e.dragEl;
        },
        dragOverValid: function(e) {
            const { completed, target, changed, cancel } = e;
            if (e.activeSortable.options.swap) {
                const i = this.options;
                if (target && target !== this.sortable.el) {
                    const a = swapItem;
                    if (e.onMove(target) !== false) {
                        toggleClass(target, i.swapClass, true);
                        swapItem = target;
                    } else {
                        swapItem = null;
                    }
                    if (a && a !== swapItem) {
                        toggleClass(a, i.swapClass, false);
                    }
                }
                changed();
                completed(true);
                cancel();
            }
        },
        drop: function({ activeSortable, putSortable, dragEl }) {
            let t;
            let n;
            let r;
            let o;
            let i;
            let a;
            const c = putSortable || this.sortable;
            const options = this.options;
            if (swapItem) {
                toggleClass(swapItem, options.swapClass, false);
            }
            if (swapItem && (options.swap || putSortable && putSortable.options.swap) && dragEl !== swapItem) {
                c.captureAnimationState();
                if (c !== activeSortable) {
                    activeSortable.captureAnimationState();
                }
                a = (n = swapItem).parentNode;
                if ((i = (t = dragEl).parentNode) && a && !i.isEqualNode(n) && !a.isEqualNode(t)) {
                    r = A(t);
                    o = A(n);
                    if (i.isEqualNode(a) && r < o) {
                        o++;
                    }
                    i.insertBefore(n, i.children[r]);
                    a.insertBefore(t, a.children[o]);
                }
                c.animateAll();
                if (c !== activeSortable) {
                    activeSortable.animateAll();
                }
            }
        },
        nulling: function() {
            swapItem = null;
        }
    };
    return Object.assign(e, {
        pluginName: "swap",
        eventProperties: function() {
            return {
                swapItem
            };
        }
    });
});
Sortable.mount(new function() {
    function e(e) {
        for(const t in this){
            if (t.charAt(0) === "_" && typeof this[t] === "function") {
                this[t] = this[t].bind(this);
            }
        }
        if (e.options.supportPointer) {
            on(document, "pointerup", this._deselectMultiDrag);
        } else {
            on(document, "mouseup", this._deselectMultiDrag);
            on(document, "touchend", this._deselectMultiDrag);
        }
        on(document, "keydown", this._checkKeyDown);
        on(document, "keyup", this._checkKeyUp);
        this.defaults = {
            selectedClass: "sortable-selected",
            multiDragKey: null,
            setData: function(t, n) {
                let r = "";
                if (Ke.length && $e === e) {
                    Ke.forEach((e, t)=>{
                        r += (t ? ", " : "") + e.textContent;
                    });
                } else {
                    r = n.textContent;
                }
                t.setData("Text", r);
            }
        };
    }
    e.prototype = {
        multiDragKeyDown: false,
        isMultiDrag: false,
        delayStartGlobal: function(e) {
            Ue = e.dragEl;
        },
        delayEnded: function() {
            this.isMultiDrag = ~Ke.indexOf(Ue);
        },
        setupClone: function({ sortable, cancel }) {
            if (this.isMultiDrag) {
                for(let r = 0; r < Ke.length; r++){
                    Ge.push(clone(Ke[r]));
                    Ge[r].sortableIndex = Ke[r].sortableIndex;
                    Ge[r].draggable = false;
                    Ge[r].style["will-change"] = "";
                    toggleClass(Ge[r], this.options.selectedClass, false);
                    if (Ke[r] === Ue) {
                        toggleClass(Ge[r], this.options.chosenClass, false);
                    }
                }
                sortable._hideClone();
                cancel();
            }
        },
        clone: function(e) {
            const { dispatchSortableEvent, cancel } = e;
            if (this.isMultiDrag) {
                if (!this.options.removeCloneOnHide) {
                    if (Ke.length && $e === e.sortable) {
                        Je(true, e.rootEl);
                        dispatchSortableEvent("clone");
                        cancel();
                    }
                }
            }
        },
        showClone: function(e) {
            const { cloneNowShown, cancel } = e;
            if (this.isMultiDrag) {
                Je(false, e.rootEl);
                Ge.forEach((e)=>{
                    css(e, "display", "");
                });
                cloneNowShown();
                We = false;
                cancel();
            }
        },
        hideClone: function(e) {
            const _this = this;
            const { cloneNowHidden, cancel } = e;
            if (this.isMultiDrag) {
                Ge.forEach((e)=>{
                    css(e, "display", "none");
                    if (_this.options.removeCloneOnHide && e.parentNode) {
                        e.parentNode.removeChild(e);
                    }
                });
                cloneNowHidden();
                We = true;
                cancel();
            }
        },
        dragStartGlobal: function(e) {
            if (!this.isMultiDrag && $e) {
                $e.multiDrag._deselectMultiDrag();
            }
            Ke.forEach((e)=>{
                e.sortableIndex = A(e);
            });
            Ke = Ke.sort((e, t)=>e.sortableIndex - t.sortableIndex);
            Xe = true;
        },
        dragStarted: function(e) {
            const _this = this;
            const e_sortable = e.sortable;
            if (this.isMultiDrag) {
                if (this.options.sort && (e_sortable.captureAnimationState(), this.options.animation)) {
                    Ke.forEach((e)=>{
                        if (e !== Ue) {
                            css(e, "position", "absolute");
                        }
                    });
                    const r = O(Ue, false, true, true);
                    Ke.forEach((e)=>{
                        if (e !== Ue) {
                            N(e, r);
                        }
                    });
                    Ye = true;
                    qe = true;
                }
                e_sortable.animateAll(function() {
                    Ye = false;
                    qe = false;
                    if (_this.options.animation) {
                        Ke.forEach((e)=>{
                            D(e);
                        });
                    }
                    if (_this.options.sort) {
                        Qe();
                    }
                });
            }
        },
        dragOver: function(e) {
            const { completed, cancel } = e;
            if (Ye && ~Ke.indexOf(e.target)) {
                completed(false);
                cancel();
            }
        },
        revert: function({ fromSortable, rootEl, sortable, dragRect }) {
            if (Ke.length > 1) {
                Ke.forEach((e)=>{
                    sortable.addAnimationState({
                        target: e,
                        rect: Ye ? O(e) : dragRect
                    });
                    D(e);
                    e.fromRect = dragRect;
                    fromSortable.removeAnimationState(e);
                });
                Ye = false;
                ((e, rootEl_1)=>{
                    Ke.forEach((n, r)=>{
                        const o = rootEl_1.children[n.sortableIndex + (e ? Number(r) : 0)];
                        if (o) {
                            rootEl_1.insertBefore(n, o);
                        } else {
                            rootEl_1.appendChild(n);
                        }
                    });
                })(!this.options.removeCloneOnHide, rootEl);
            }
        },
        dragOverCompleted: function(e) {
            const { sortable, isOwner, activeSortable, parentEl, putSortable } = e;
            const options = this.options;
            if (e.insertion) {
                if (isOwner) {
                    activeSortable._hideClone();
                }
                qe = false;
                if (options.animation && Ke.length > 1 && (Ye || !isOwner && !activeSortable.options.sort && !putSortable)) {
                    const l = O(Ue, false, true, true);
                    Ke.forEach((e)=>{
                        if (e !== Ue) {
                            N(e, l);
                            parentEl.appendChild(e);
                        }
                    });
                    Ye = true;
                }
                if (!isOwner) {
                    if (!Ye) {
                        Qe();
                    }
                    if (Ke.length > 1) {
                        const u = We;
                        activeSortable._showClone(sortable);
                        if (activeSortable.options.animation && !We && u) {
                            Ge.forEach((e)=>{
                                activeSortable.addAnimationState({
                                    target: e,
                                    rect: Ze
                                });
                                e.fromRect = Ze;
                                e.thisAnimationDuration = null;
                            });
                        }
                    } else {
                        activeSortable._showClone(sortable);
                    }
                }
            }
        },
        dragOverAnimationCapture: function({ dragRect, isOwner, activeSortable }) {
            Ke.forEach((e)=>{
                e.thisAnimationDuration = null;
            });
            if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
                Ze = {
                    ...dragRect
                };
                const o = w(Ue, true);
                Ze.top -= o.f;
                Ze.left -= o.e;
            }
        },
        dragOverAnimationComplete: function() {
            if (Ye) {
                Ye = false;
                Qe();
            }
        },
        drop: function({ originalEvent, rootEl, parentEl, sortable, dispatchSortableEvent, oldIndex, putSortable }) {
            const u = putSortable || this.sortable;
            if (originalEvent) {
                const s = this.options;
                const c = parentEl.children;
                if (!Xe) {
                    if (s.multiDragKey && !this.multiDragKeyDown) {
                        this._deselectMultiDrag();
                    }
                    toggleClass(Ue, s.selectedClass, !~Ke.indexOf(Ue));
                    if (~Ke.indexOf(Ue)) {
                        Ke.splice(Ke.indexOf(Ue), 1);
                        Ve = null;
                        F({
                            sortable,
                            rootEl,
                            name: "deselect",
                            targetEl: Ue,
                            originalEvt: originalEvent
                        });
                    } else {
                        Ke.push(Ue);
                        F({
                            sortable,
                            rootEl,
                            name: "select",
                            targetEl: Ue,
                            originalEvt: originalEvent
                        });
                        if (originalEvent.shiftKey && Ve && sortable.el.contains(Ve)) {
                            let f;
                            let d;
                            const p = A(Ve);
                            const h = A(Ue);
                            if (~p && ~h && p !== h) {
                                for(h > p ? (d = p, f = h) : (d = h, f = p + 1); d < f; d++){
                                    if (!~Ke.indexOf(c[d])) {
                                        toggleClass(c[d], s.selectedClass, true);
                                        Ke.push(c[d]);
                                        F({
                                            sortable,
                                            rootEl,
                                            name: "select",
                                            targetEl: c[d],
                                            originalEvt: originalEvent
                                        });
                                    }
                                }
                            }
                        } else {
                            Ve = Ue;
                        }
                        $e = u;
                    }
                }
                if (Xe && this.isMultiDrag) {
                    if ((parentEl[I].options.sort || parentEl !== rootEl) && Ke.length > 1) {
                        const v = O(Ue);
                        let g = A(Ue, `:not(.${this.options.selectedClass})`);
                        if (!qe && s.animation) {
                            Ue.thisAnimationDuration = null;
                        }
                        u.captureAnimationState();
                        if (!qe && (s.animation && (Ue.fromRect = v, Ke.forEach((e)=>{
                            e.thisAnimationDuration = null;
                            if (e !== Ue) {
                                const t = Ye ? O(e) : v;
                                e.fromRect = t;
                                u.addAnimationState({
                                    target: e,
                                    rect: t
                                });
                            }
                        })), Qe(), Ke.forEach((e)=>{
                            if (c[g]) {
                                parentEl.insertBefore(e, c[g]);
                            } else {
                                parentEl.appendChild(e);
                            }
                            g++;
                        }), oldIndex === A(Ue))) {
                            let y = false;
                            Ke.forEach((e)=>{
                                if (e.sortableIndex !== A(e)) {
                                    y = true;
                                }
                            });
                            if (y) {
                                dispatchSortableEvent("update");
                            }
                        }
                        Ke.forEach((e)=>{
                            D(e);
                        });
                        u.animateAll();
                    }
                    $e = u;
                }
                if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") {
                    Ge.forEach((e)=>{
                        if (e.parentNode) {
                            e.parentNode.removeChild(e);
                        }
                    });
                }
            }
        },
        nullingGlobal: function() {
            this.isMultiDrag = Xe = false;
            Ge.length = 0;
        },
        destroyGlobal: function() {
            this._deselectMultiDrag();
            off(document, "pointerup", this._deselectMultiDrag);
            off(document, "mouseup", this._deselectMultiDrag);
            off(document, "touchend", this._deselectMultiDrag);
            off(document, "keydown", this._checkKeyDown);
            off(document, "keyup", this._checkKeyUp);
        },
        _deselectMultiDrag: function(originalEvt) {
            if (!(Xe !== undefined && Xe || $e !== this.sortable || originalEvt && closest(originalEvt.target, this.options.draggable, this.sortable.el, false) || originalEvt && originalEvt.button !== 0)) {
                while(Ke.length){
                    const t = Ke[0];
                    toggleClass(t, this.options.selectedClass, false);
                    Ke.shift();
                    F({
                        sortable: this.sortable,
                        rootEl: this.sortable.el,
                        name: "deselect",
                        targetEl: t,
                        originalEvt
                    });
                }
            }
        },
        _checkKeyDown: function(e) {
            if (e.key === this.options.multiDragKey) {
                this.multiDragKeyDown = true;
            }
        },
        _checkKeyUp: function(e) {
            if (e.key === this.options.multiDragKey) {
                this.multiDragKeyDown = false;
            }
        }
    };
    return Object.assign(e, {
        pluginName: "multiDrag",
        utils: {
            select: function(e) {
                const t = e.parentNode[I];
                if (t && t.options.multiDrag && !~Ke.indexOf(e)) {
                    if ($e && $e !== t) {
                        $e.multiDrag._deselectMultiDrag();
                        $e = t;
                    }
                    toggleClass(e, t.options.selectedClass, true);
                    Ke.push(e);
                }
            },
            deselect: function(e) {
                const t = e.parentNode[I];
                const n = Ke.indexOf(e);
                if (t && t.options.multiDrag && ~n) {
                    toggleClass(e, t.options.selectedClass, false);
                    Ke.splice(n, 1);
                }
            }
        },
        eventProperties: function() {
            const _this = this;
            const oldIndicies = [];
            const newIndicies = [];
            Ke.forEach((multiDragElement)=>{
                let o;
                oldIndicies.push({
                    multiDragElement,
                    index: multiDragElement.sortableIndex
                });
                o = Ye && multiDragElement !== Ue ? -1 : Ye ? A(multiDragElement, `:not(.${_this.options.selectedClass})`) : A(multiDragElement);
                newIndicies.push({
                    multiDragElement,
                    index: o
                });
            });
            return {
                items: [].concat(Ke),
                clones: [].concat(Ge),
                oldIndicies,
                newIndicies
            };
        },
        optionListeners: {
            multiDragKey: function(e) {
                if ((e = e.toLowerCase()) === "ctrl") {
                    e = "Control";
                } else if (e.length > 1) {
                    e = e.charAt(0).toUpperCase() + e.substr(1);
                }
                return e;
            }
        }
    });
});
export default Sortable;
