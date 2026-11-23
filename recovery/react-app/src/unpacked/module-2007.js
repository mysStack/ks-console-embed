((e)=>{
    (()=>{
        let e = function() {
            return this;
        }();
        if (!(e || typeof window === "undefined")) {
            e = window;
        }
        const t = function(e, i, n) {
            if (typeof e === "string") {
                if (arguments.length == 2) {
                    n = i;
                }
                if (!t.modules[e]) {
                    t.payloads[e] = n;
                    t.modules[e] = null;
                }
            } else if (t.original) {
                t.original.apply(this, arguments);
            } else {
                console.error("dropping module because define wasn't a string.");
                console.trace();
            }
        };
        t.modules = {};
        t.payloads = {};
        let i;
        let n;
        const o = (e, t, i)=>{
            if (typeof t === "string") {
                const n = a(e, t);
                if (n != null) {
                    if (i) {
                        i();
                    }
                    return n;
                }
            } else if (Object.prototype.toString.call(t) === "[object Array]") {
                const o = [];
                for(let r = 0, c = t.length; r < c; ++r){
                    const l = a(e, t[r]);
                    if (l == null && s.original) {
                        return;
                    }
                    o.push(l);
                }
                return i && i.apply(null, o) || true;
            }
        };
        var s = function(e, t) {
            const i = o("", e, t);
            if (i == null && s.original) {
                return s.original.apply(this, arguments);
            }
            return i;
        };
        const r = (e, t)=>{
            if (t.indexOf("!") !== -1) {
                const i = t.split("!");
                return `${r(e, i[0])}!${r(e, i[1])}`;
            }
            if (t.charAt(0) == ".") {
                for(t = `${e.split("/").slice(0, -1).join("/")}/${t}`; t.indexOf(".") !== -1 && n != t;){
                    var n = t;
                    t = t.replace(/\/\.\//, "/").replace(/[^\/]+\/\.\.\//, "");
                }
            }
            return t;
        };
        var a = (e, i)=>{
            i = r(e, i);
            let n = t.modules[i];
            if (!n) {
                if (typeof (n = t.payloads[i]) === "function") {
                    var exports = {};
                    const a = {
                        id: i,
                        uri: "",
                        exports,
                        packaged: true
                    };
                    exports = n(function(e, t) {
                        return o(i, e, t);
                    }, exports, a) || a.exports;
                    t.modules[i] = exports;
                    delete t.payloads[i];
                }
                n = t.modules[i] = exports || n;
            }
            return n;
        };
        n = e;
        if (i = "ace") {
            if (!e[i]) {
                e[i] = {};
            }
            n = e[i];
        }
        if (!(n.define && n.define.packaged)) {
            t.original = n.define;
            n.define = t;
            n.define.packaged = true;
        }
        if (!(n.require && n.require.packaged)) {
            s.original = n.require;
            n.require = s;
            n.require.packaged = true;
        }
    })();
    ace.define("ace/lib/fixoldbrowsers", [
        "require",
        "exports",
        "module"
    ], function(e, t, i) {
        "use strict";
        if (!(typeof Element === "undefined" || Element.prototype.remove)) {
            Object.defineProperty(Element.prototype, "remove", {
                enumerable: false,
                writable: true,
                configurable: true,
                value: function() {
                    if (this.parentNode) {
                        this.parentNode.removeChild(this);
                    }
                }
            });
        }
    });
    ace.define("ace/lib/useragent", [
        "require",
        "exports",
        "module"
    ], function(e, t, i) {
        "use strict";
        t.OS = {
            LINUX: "LINUX",
            MAC: "MAC",
            WINDOWS: "WINDOWS"
        };
        t.getOS = function() {
            if (t.isMac) {
                return t.OS.MAC;
            }
            if (t.isLinux) {
                return t.OS.LINUX;
            }
            return t.OS.WINDOWS;
        };
        const n = typeof navigator === "object" ? navigator : {};
        const o = (/mac|win|linux/i.exec(n.platform) || [
            "other"
        ])[0].toLowerCase();
        const s = n.userAgent || "";
        const r = n.appName || "";
        t.isWin = o == "win";
        t.isMac = o == "mac";
        t.isLinux = o == "linux";
        t.isIE = r == "Microsoft Internet Explorer" || r.indexOf("MSAppHost") >= 0 ? parseFloat((s.match(/(?:MSIE |Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]) : parseFloat((s.match(/(?:Trident\/[0-9]+[\.0-9]+;.*rv:)([0-9]+[\.0-9]+)/) || [])[1]);
        t.isOldIE = t.isIE && t.isIE < 9;
        t.isGecko = t.isMozilla = s.match(/ Gecko\/\d+/);
        t.isOpera = typeof opera === "object" && Object.prototype.toString.call(window.opera) == "[object Opera]";
        t.isWebKit = parseFloat(s.split("WebKit/")[1]) || undefined;
        t.isChrome = parseFloat(s.split(" Chrome/")[1]) || undefined;
        t.isEdge = parseFloat(s.split(" Edge/")[1]) || undefined;
        t.isAIR = s.indexOf("AdobeAIR") >= 0;
        t.isAndroid = s.indexOf("Android") >= 0;
        t.isChromeOS = s.indexOf(" CrOS ") >= 0;
        t.isIOS = /iPad|iPhone|iPod/.test(s) && !window.MSStream;
        if (t.isIOS) {
            t.isMac = true;
        }
        t.isMobile = t.isIOS || t.isAndroid;
    });
    ace.define("ace/lib/dom", [
        "require",
        "exports",
        "module",
        "ace/lib/useragent"
    ], function(e, t, i) {
        "use strict";
        const n = e("./useragent");
        t.buildDom = function e(t, i, n) {
            if (typeof t === "string" && t) {
                const o = document.createTextNode(t);
                if (i) {
                    i.appendChild(o);
                }
                return o;
            }
            if (!Array.isArray(t)) {
                if (t && t.appendChild && i) {
                    i.appendChild(t);
                }
                return t;
            }
            if (typeof t[0] !== "string" || !t[0]) {
                const s = [];
                for(var r = 0; r < t.length; r++){
                    const a = e(t[r], i, n);
                    if (a) {
                        s.push(a);
                    }
                }
                return s;
            }
            const c = document.createElement(t[0]);
            const l = t[1];
            let h = 1;
            if (l && typeof l === "object" && !Array.isArray(l)) {
                h = 2;
            }
            for(r = h; r < t.length; r++){
                e(t[r], c, n);
            }
            if (h == 2) {
                Object.keys(l).forEach((e)=>{
                    const t = l[e];
                    if (e === "class") {
                        c.className = Array.isArray(t) ? t.join(" ") : t;
                    } else if (typeof t === "function" || e == "value" || e[0] == "$") {
                        c[e] = t;
                    } else if (e === "ref") {
                        if (n) {
                            n[t] = c;
                        }
                    } else if (t != null) {
                        c.setAttribute(e, t);
                    }
                });
            }
            if (i) {
                i.appendChild(c);
            }
            return c;
        };
        t.getDocumentHead = function(e) {
            if (!e) {
                e = document;
            }
            return e.head || e.getElementsByTagName("head")[0] || e.documentElement;
        };
        t.createElement = function(e, t) {
            if (document.createElementNS) {
                return document.createElementNS(t || "http://www.w3.org/1999/xhtml", e);
            }
            return document.createElement(e);
        };
        t.removeChildren = function(e) {
            e.innerHTML = "";
        };
        t.createTextNode = function(e, t) {
            return (t ? t.ownerDocument : document).createTextNode(e);
        };
        t.createFragment = function(e) {
            return (e ? e.ownerDocument : document).createDocumentFragment();
        };
        t.hasCssClass = function(e, t) {
            return `${e.className}`.split(/\s+/g).indexOf(t) !== -1;
        };
        t.addCssClass = function(e, i) {
            if (!t.hasCssClass(e, i)) {
                e.className += ` ${i}`;
            }
        };
        t.removeCssClass = function(e, t) {
            const i = e.className.split(/\s+/g);
            while(true){
                const n = i.indexOf(t);
                if (n == -1) {
                    break;
                }
                i.splice(n, 1);
            }
            e.className = i.join(" ");
        };
        t.toggleCssClass = function(e, t) {
            const i = e.className.split(/\s+/g);
            let n = true;
            while(true){
                const o = i.indexOf(t);
                if (o == -1) {
                    break;
                }
                n = false;
                i.splice(o, 1);
            }
            if (n) {
                i.push(t);
            }
            e.className = i.join(" ");
            return n;
        };
        t.setCssClass = function(e, i, n) {
            if (n) {
                t.addCssClass(e, i);
            } else {
                t.removeCssClass(e, i);
            }
        };
        t.hasCssString = function(e, t) {
            let i;
            let n = 0;
            if (i = (t = t || document).querySelectorAll("style")) {
                while(n < i.length){
                    if (i[n++].id === e) {
                        return true;
                    }
                }
            }
        };
        t.importCssString = function(e, i, n) {
            let o = n;
            if (!(n && n.getRootNode && (o = n.getRootNode()) && o != n)) {
                o = document;
            }
            const s = o.ownerDocument || o;
            if (i && t.hasCssString(i, o)) {
                return null;
            }
            if (i) {
                e += `
/*# sourceURL=ace/css/${i} */`;
            }
            const styleElement = t.createElement("style");
            styleElement.appendChild(s.createTextNode(e));
            if (i) {
                styleElement.id = i;
            }
            if (o == s) {
                o = t.getDocumentHead(s);
            }
            o.insertBefore(styleElement, o.firstChild);
        };
        t.importCssStylsheet = function(href, i) {
            t.buildDom([
                "link",
                {
                    rel: "stylesheet",
                    href
                }
            ], t.getDocumentHead(i));
        };
        t.scrollbarWidth = function(e) {
            const i = t.createElement("ace_inner");
            i.style.width = "100%";
            i.style.minWidth = "0px";
            i.style.height = "200px";
            i.style.display = "block";
            const n = t.createElement("ace_outer");
            const n_style = n.style;
            n_style.position = "absolute";
            n_style.left = "-10000px";
            n_style.overflow = "hidden";
            n_style.width = "200px";
            n_style.minWidth = "0px";
            n_style.height = "150px";
            n_style.display = "block";
            n.appendChild(i);
            const e_documentElement = e.documentElement;
            e_documentElement.appendChild(n);
            const i_offsetWidth = i.offsetWidth;
            n_style.overflow = "scroll";
            let i_offsetWidth_1 = i.offsetWidth;
            if (i_offsetWidth == i_offsetWidth_1) {
                i_offsetWidth_1 = n.clientWidth;
            }
            e_documentElement.removeChild(n);
            return i_offsetWidth - i_offsetWidth_1;
        };
        if (typeof document === "undefined") {
            t.importCssString = function() {};
        }
        t.computedStyle = function(e, t) {
            return window.getComputedStyle(e, "") || {};
        };
        t.setStyle = function(e, t, i) {
            if (e[t] !== i) {
                e[t] = i;
            }
        };
        t.HAS_CSS_ANIMATION = false;
        t.HAS_CSS_TRANSFORMS = false;
        t.HI_DPI = !n.isWin || typeof window !== "undefined" && window.devicePixelRatio >= 1.5;
        if (typeof document !== "undefined") {
            let o = document.createElement("div");
            if (t.HI_DPI && o.style.transform !== undefined) {
                t.HAS_CSS_TRANSFORMS = true;
            }
            if (!(n.isEdge || o.style.animationName === undefined)) {
                t.HAS_CSS_ANIMATION = true;
            }
            o = null;
        }
        if (t.HAS_CSS_TRANSFORMS) {
            t.translate = function(e, t, i) {
                e.style.transform = `translate(${Math.round(t)}px, ${Math.round(i)}px)`;
            };
        } else {
            t.translate = function(e, t, i) {
                e.style.top = `${Math.round(i)}px`;
                e.style.left = `${Math.round(t)}px`;
            };
        }
    });
    ace.define("ace/lib/oop", [
        "require",
        "exports",
        "module"
    ], function(e, t, i) {
        "use strict";
        t.inherits = function(e, t) {
            e.super_ = t;
            e.prototype = Object.create(t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
        };
        t.mixin = function(e, t) {
            for(const i in t){
                e[i] = t[i];
            }
            return e;
        };
        t.implement = function(e, i) {
            t.mixin(e, i);
        };
    });
    ace.define("ace/lib/keys", [
        "require",
        "exports",
        "module",
        "ace/lib/oop"
    ], function(e, t, i) {
        "use strict";
        const n = e("./oop");
        const o = (()=>{
            let e;
            let t;
            const i = {
                MODIFIER_KEYS: {
                    16: "Shift",
                    17: "Ctrl",
                    18: "Alt",
                    224: "Meta",
                    91: "MetaLeft",
                    92: "MetaRight",
                    93: "ContextMenu"
                },
                KEY_MODS: {
                    ctrl: 1,
                    alt: 2,
                    option: 2,
                    shift: 4,
                    super: 8,
                    meta: 8,
                    command: 8,
                    cmd: 8,
                    control: 1
                },
                FUNCTION_KEYS: {
                    8: "Backspace",
                    9: "Tab",
                    13: "Return",
                    19: "Pause",
                    27: "Esc",
                    32: "Space",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "Left",
                    38: "Up",
                    39: "Right",
                    40: "Down",
                    44: "Print",
                    45: "Insert",
                    46: "Delete",
                    96: "Numpad0",
                    97: "Numpad1",
                    98: "Numpad2",
                    99: "Numpad3",
                    100: "Numpad4",
                    101: "Numpad5",
                    102: "Numpad6",
                    103: "Numpad7",
                    104: "Numpad8",
                    105: "Numpad9",
                    "-13": "NumpadEnter",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "Numlock",
                    145: "Scrolllock"
                },
                PRINTABLE_KEYS: {
                    32: " ",
                    48: "0",
                    49: "1",
                    50: "2",
                    51: "3",
                    52: "4",
                    53: "5",
                    54: "6",
                    55: "7",
                    56: "8",
                    57: "9",
                    59: ";",
                    61: "=",
                    65: "a",
                    66: "b",
                    67: "c",
                    68: "d",
                    69: "e",
                    70: "f",
                    71: "g",
                    72: "h",
                    73: "i",
                    74: "j",
                    75: "k",
                    76: "l",
                    77: "m",
                    78: "n",
                    79: "o",
                    80: "p",
                    81: "q",
                    82: "r",
                    83: "s",
                    84: "t",
                    85: "u",
                    86: "v",
                    87: "w",
                    88: "x",
                    89: "y",
                    90: "z",
                    107: "+",
                    109: "-",
                    110: ".",
                    186: ";",
                    187: "=",
                    188: ",",
                    189: "-",
                    190: ".",
                    191: "/",
                    192: "`",
                    219: "[",
                    220: "\\",
                    221: "]",
                    222: "'",
                    111: "/",
                    106: "*"
                }
            };
            for(t in i.FUNCTION_KEYS){
                e = i.FUNCTION_KEYS[t].toLowerCase();
                i[e] = parseInt(t, 10);
            }
            for(t in i.PRINTABLE_KEYS){
                e = i.PRINTABLE_KEYS[t].toLowerCase();
                i[e] = parseInt(t, 10);
            }
            n.mixin(i, i.MODIFIER_KEYS);
            n.mixin(i, i.PRINTABLE_KEYS);
            n.mixin(i, i.FUNCTION_KEYS);
            i.enter = i.return;
            i.escape = i.esc;
            i.del = i.delete;
            i[173] = "-";
            (()=>{
                const e = [
                    "cmd",
                    "ctrl",
                    "alt",
                    "shift"
                ];
                for(var t = 2 ** e.length; t--;){
                    i.KEY_MODS[t] = `${e.filter((e)=>t & i.KEY_MODS[e]).join("-")}-`;
                }
            })();
            i.KEY_MODS[0] = "";
            i.KEY_MODS[-1] = "input-";
            return i;
        })();
        n.mixin(t, o);
        t.keyCodeToString = function(e) {
            let t = o[e];
            if (typeof t !== "string") {
                t = String.fromCharCode(e);
            }
            return t.toLowerCase();
        };
    });
    ace.define("ace/lib/event", [
        "require",
        "exports",
        "module",
        "ace/lib/keys",
        "ace/lib/useragent"
    ], function(e, t, i) {
        "use strict";
        let n;
        const o = e("./keys");
        const s = e("./useragent");
        let r = null;
        let a = 0;
        function c() {
            if (n == null) {
                (()=>{
                    n = false;
                    try {
                        document.createComment("").addEventListener("test", function() {}, {
                            get passive () {
                                n = {
                                    passive: false
                                };
                            }
                        });
                    } catch (e) {}
                })();
            }
            return n;
        }
        class l {
            constructor(e, t, i){
                this.elem = e;
                this.type = t;
                this.callback = i;
            }
            destroy() {
                d(this.elem, this.type, this.callback);
                this.elem = this.type = this.callback = undefined;
            }
        }
        const h = t.addListener = function(e, t, i, n) {
            e.addEventListener(t, i, c());
            if (n) {
                n.$toDestroy.push(new l(e, t, i));
            }
        };
        var d = t.removeListener = function(e, t, i) {
            e.removeEventListener(t, i, c());
        };
        t.stopEvent = function(e) {
            t.stopPropagation(e);
            t.preventDefault(e);
            return false;
        };
        t.stopPropagation = function(e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            }
        };
        t.preventDefault = function(e) {
            if (e.preventDefault) {
                e.preventDefault();
            }
        };
        t.getButton = function(e) {
            if (e.type == "dblclick") {
                return 0;
            }
            if (e.type == "contextmenu" || s.isMac && e.ctrlKey && !e.altKey && !e.shiftKey) {
                return 2;
            }
            return e.button;
        };
        t.capture = function(e, t, i) {
            const n = e && e.ownerDocument || document;
            function o(e) {
                if (t) {
                    t(e);
                }
                if (i) {
                    i(e);
                }
                d(n, "mousemove", t);
                d(n, "mouseup", o);
                d(n, "dragstart", o);
            }
            h(n, "mousemove", t);
            h(n, "mouseup", o);
            h(n, "dragstart", o);
            return o;
        };
        t.addMouseWheelListener = function(e, t, i) {
            if ("onmousewheel" in e) {
                h(e, "mousewheel", function(e) {
                    if (e.wheelDeltaX !== undefined) {
                        e.wheelX = -e.wheelDeltaX / 8;
                        e.wheelY = -e.wheelDeltaY / 8;
                    } else {
                        e.wheelX = 0;
                        e.wheelY = -e.wheelDelta / 8;
                    }
                    t(e);
                }, i);
            } else if ("onwheel" in e) {
                h(e, "wheel", function(e) {
                    switch(e.deltaMode){
                        case e.DOM_DELTA_PIXEL:
                            e.wheelX = 0.35 * e.deltaX || 0;
                            e.wheelY = 0.35 * e.deltaY || 0;
                            break;
                        case e.DOM_DELTA_LINE:
                        case e.DOM_DELTA_PAGE:
                            e.wheelX = 5 * (e.deltaX || 0);
                            e.wheelY = 5 * (e.deltaY || 0);
                    }
                    t(e);
                }, i);
            } else {
                h(e, "DOMMouseScroll", function(e) {
                    if (e.axis && e.axis == e.HORIZONTAL_AXIS) {
                        e.wheelX = 5 * (e.detail || 0);
                        e.wheelY = 0;
                    } else {
                        e.wheelX = 0;
                        e.wheelY = 5 * (e.detail || 0);
                    }
                    t(e);
                }, i);
            }
        };
        t.addMultiMouseDownListener = function(e, i, n, o, r) {
            let a;
            let c;
            let l;
            let d = 0;
            const u = {
                2: "dblclick",
                3: "tripleclick",
                4: "quadclick"
            };
            function f(e) {
                if (t.getButton(e) !== 0) {
                    d = 0;
                } else if (e.detail > 1) {
                    if (++d > 4) {
                        d = 1;
                    }
                } else {
                    d = 1;
                }
                if (s.isIE) {
                    const r = Math.abs(e.clientX - a) > 5 || Math.abs(e.clientY - c) > 5;
                    if (!(l && !r)) {
                        d = 1;
                    }
                    if (l) {
                        clearTimeout(l);
                    }
                    l = setTimeout(()=>{
                        l = null;
                    }, i[d - 1] || 600);
                    if (d == 1) {
                        a = e.clientX;
                        c = e.clientY;
                    }
                }
                e._clicks = d;
                n[o]("mousedown", e);
                if (d > 4) {
                    d = 0;
                } else if (d > 1) {
                    return n[o](u[d], e);
                }
            }
            if (!Array.isArray(e)) {
                e = [
                    e
                ];
            }
            e.forEach((e)=>{
                h(e, "mousedown", f, r);
            });
        };
        const u = (e)=>0 | (e.ctrlKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.metaKey ? 8 : 0);
        function f(e, t, i) {
            let n = u(t);
            if (!s.isMac && r) {
                if (t.getModifierState && (t.getModifierState("OS") || t.getModifierState("Win"))) {
                    n |= 8;
                }
                if (r.altGr) {
                    if ((3 & n) == 3) {
                        return;
                    }
                    r.altGr = 0;
                }
                if (i === 18 || i === 17) {
                    var c = "location" in t ? t.location : t.keyLocation;
                    if (i === 17 && c === 1) {
                        if (r[i] == 1) {
                            a = t.timeStamp;
                        }
                    } else if (i === 18 && n === 3 && c === 2 && t.timeStamp - a < 50) {
                        r.altGr = true;
                    }
                }
            }
            if (i in o.MODIFIER_KEYS) {
                i = -1;
            }
            if (n || i !== 13 || (c = "location" in t ? t.location : t.keyLocation) !== 3 || (e(t, n, -i), !t.defaultPrevented)) {
                if (s.isChromeOS && 8 & n) {
                    e(t, n, i);
                    if (t.defaultPrevented) {
                        return;
                    }
                    n &= -9;
                }
                return !!(n || i in o.FUNCTION_KEYS || i in o.PRINTABLE_KEYS) && e(t, n, i);
            }
        }
        function g() {
            r = Object.create(null);
        }
        t.getModifierString = function(e) {
            return o.KEY_MODS[u(e)];
        };
        t.addCommandKeyListener = function(e, i, n) {
            if (s.isOldGecko || s.isOpera && !("KeyboardEvent" in window)) {
                let o = null;
                h(e, "keydown", function(e) {
                    o = e.keyCode;
                }, n);
                h(e, "keypress", function(e) {
                    return f(i, e, o);
                }, n);
            } else {
                let a = null;
                h(e, "keydown", function(e) {
                    r[e.keyCode] = (r[e.keyCode] || 0) + 1;
                    const t = f(i, e, e.keyCode);
                    a = e.defaultPrevented;
                    return t;
                }, n);
                h(e, "keypress", function(e) {
                    if (a && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey)) {
                        t.stopEvent(e);
                        a = null;
                    }
                }, n);
                h(e, "keyup", function(e) {
                    r[e.keyCode] = null;
                }, n);
                if (!r) {
                    g();
                    h(window, "focus", g);
                }
            }
        };
        if (typeof window === "object" && window.postMessage && !s.isOldIE) {
            let p = 1;
            t.nextTick = function(e, i) {
                i = i || window;
                const n = `zero-timeout-message-${p++}`;
                const o = function(s) {
                    if (s.data == n) {
                        t.stopPropagation(s);
                        d(i, "message", o);
                        e();
                    }
                };
                h(i, "message", o);
                i.postMessage(n, "*");
            };
        }
        t.$idleBlocked = false;
        t.onIdle = function(e, i) {
            return setTimeout(function i() {
                if (t.$idleBlocked) {
                    setTimeout(i, 100);
                } else {
                    e();
                }
            }, i);
        };
        t.$idleBlockId = null;
        t.blockIdle = function(e) {
            if (t.$idleBlockId) {
                clearTimeout(t.$idleBlockId);
            }
            t.$idleBlocked = true;
            t.$idleBlockId = setTimeout(()=>{
                t.$idleBlocked = false;
            }, e || 100);
        };
        t.nextFrame = typeof window === "object" && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame);
        if (t.nextFrame) {
            t.nextFrame = t.nextFrame.bind(window);
        } else {
            t.nextFrame = function(e) {
                setTimeout(e, 17);
            };
        }
    });
    ace.define("ace/range", [
        "require",
        "exports",
        "module"
    ], function(e, t, i) {
        "use strict";
        const n = function(e, t, i, n) {
            this.start = {
                row: e,
                column: t
            };
            this.end = {
                row: i,
                column: n
            };
        };
        (function() {
            this.isEqual = function(e) {
                return this.start.row === e.start.row && this.end.row === e.end.row && this.start.column === e.start.column && this.end.column === e.end.column;
            };
            this.toString = function() {
                return `Range: [${this.start.row}/${this.start.column}] -> [${this.end.row}/${this.end.column}]`;
            };
            this.contains = function(e, t) {
                return this.compare(e, t) == 0;
            };
            this.compareRange = function({ end, start }) {
                let t;
                if ((t = this.compare(end.row, end.column)) == 1) {
                    if ((t = this.compare(start.row, start.column)) == 1) {
                        return 2;
                    }
                    if (t == 0) {
                        return 1;
                    }
                    return 0;
                }
                if (t == -1) {
                    return -2;
                }
                if ((t = this.compare(start.row, start.column)) == -1) {
                    return -1;
                }
                if (t == 1) {
                    return 42;
                }
                return 0;
            };
            this.comparePoint = function(e) {
                return this.compare(e.row, e.column);
            };
            this.containsRange = function(e) {
                return this.comparePoint(e.start) == 0 && this.comparePoint(e.end) == 0;
            };
            this.intersects = function(e) {
                const t = this.compareRange(e);
                return t == -1 || t == 0 || t == 1;
            };
            this.isEnd = function(e, t) {
                return this.end.row == e && this.end.column == t;
            };
            this.isStart = function(e, t) {
                return this.start.row == e && this.start.column == t;
            };
            this.setStart = function(e, t) {
                if (typeof e === "object") {
                    this.start.column = e.column;
                    this.start.row = e.row;
                } else {
                    this.start.row = e;
                    this.start.column = t;
                }
            };
            this.setEnd = function(e, t) {
                if (typeof e === "object") {
                    this.end.column = e.column;
                    this.end.row = e.row;
                } else {
                    this.end.row = e;
                    this.end.column = t;
                }
            };
            this.inside = function(e, t) {
                return this.compare(e, t) == 0 && !this.isEnd(e, t) && !this.isStart(e, t);
            };
            this.insideStart = function(e, t) {
                return this.compare(e, t) == 0 && !this.isEnd(e, t);
            };
            this.insideEnd = function(e, t) {
                return this.compare(e, t) == 0 && !this.isStart(e, t);
            };
            this.compare = function(e, t) {
                if (this.isMultiLine() || e !== this.start.row) {
                    if (e < this.start.row) {
                        return -1;
                    }
                    if (e > this.end.row) {
                        return 1;
                    }
                    if (this.start.row === e) {
                        if (t >= this.start.column) {
                            return 0;
                        }
                        return -1;
                    }
                    if (this.end.row === e) {
                        if (t <= this.end.column) {
                            return 0;
                        }
                        return 1;
                    }
                    return 0;
                }
                if (t < this.start.column) {
                    return -1;
                }
                if (t > this.end.column) {
                    return 1;
                }
                return 0;
            };
            this.compareStart = function(e, t) {
                if (this.start.row == e && this.start.column == t) {
                    return -1;
                }
                return this.compare(e, t);
            };
            this.compareEnd = function(e, t) {
                if (this.end.row == e && this.end.column == t) {
                    return 1;
                }
                return this.compare(e, t);
            };
            this.compareInside = function(e, t) {
                if (this.end.row == e && this.end.column == t) {
                    return 1;
                }
                if (this.start.row == e && this.start.column == t) {
                    return -1;
                }
                return this.compare(e, t);
            };
            this.clipRows = function(e, t) {
                if (this.end.row > t) var i = {
                    row: t + 1,
                    column: 0
                };
                else {
                    if (this.end.row < e) {
                        i = {
                            row: e,
                            column: 0
                        };
                    }
                }
                if (this.start.row > t) var o = {
                    row: t + 1,
                    column: 0
                };
                else {
                    if (this.start.row < e) {
                        o = {
                            row: e,
                            column: 0
                        };
                    }
                }
                return n.fromPoints(o || this.start, i || this.end);
            };
            this.extend = function(e, t) {
                const i = this.compare(e, t);
                if (i == 0) {
                    return this;
                }
                if (i == -1) var o = {
                    row: e,
                    column: t
                };
                else {
                    var s = {
                        row: e,
                        column: t
                    };
                }
                return n.fromPoints(o || this.start, s || this.end);
            };
            this.isEmpty = function() {
                return this.start.row === this.end.row && this.start.column === this.end.column;
            };
            this.isMultiLine = function() {
                return this.start.row !== this.end.row;
            };
            this.clone = function() {
                return n.fromPoints(this.start, this.end);
            };
            this.collapseRows = function() {
                if (this.end.column == 0) {
                    return new n(this.start.row, 0, Math.max(this.start.row, this.end.row - 1), 0);
                }
                return new n(this.start.row, 0, this.end.row, 0);
            };
            this.toScreenRange = function(e) {
                const t = e.documentToScreenPosition(this.start);
                const i = e.documentToScreenPosition(this.end);
                return new n(t.row, t.column, i.row, i.column);
            };
            this.moveBy = function(e, t) {
                this.start.row += e;
                this.start.column += t;
                this.end.row += e;
                this.end.column += t;
            };
        }).call(n.prototype);
        n.fromPoints = function(e, t) {
            return new n(e.row, e.column, t.row, t.column);
        };
        n.comparePoints = function(e, t) {
            return e.row - t.row || e.column - t.column;
        };
        n.comparePoints = function(e, t) {
            return e.row - t.row || e.column - t.column;
        };
        t.Range = n;
    });
    ace.define("ace/lib/lang", [
        "require",
        "exports",
        "module"
    ], function(e, t, i) {
        "use strict";
        t.last = function(e) {
            return e[e.length - 1];
        };
        t.stringReverse = function(e) {
            return e.split("").reverse().join("");
        };
        t.stringRepeat = function(e, t) {
            let i = "";
            while(t > 0){
                if (1 & t) {
                    i += e;
                }
                if (t >>= 1) {
                    e += e;
                }
            }
            return i;
        };
        const n = /^\s\s*/;
        const o = /\s\s*$/;
        t.stringTrimLeft = function(e) {
            return e.replace(n, "");
        };
        t.stringTrimRight = function(e) {
            return e.replace(o, "");
        };
        t.copyObject = function(e) {
            const t = {};
            for(const i in e){
                t[i] = e[i];
            }
            return t;
        };
        t.copyArray = function(e) {
            const t = [];
            for(let i = 0, n = e.length; i < n; i++){
                if (e[i] && typeof e[i] === "object") {
                    t[i] = this.copyObject(e[i]);
                } else {
                    t[i] = e[i];
                }
            }
            return t;
        };
        t.deepCopy = function e(t) {
            if (typeof t !== "object" || !t) {
                return t;
            }
            let i;
            if (Array.isArray(t)) {
                i = [];
                for(var n = 0; n < t.length; n++){
                    i[n] = e(t[n]);
                }
                return i;
            }
            if (Object.prototype.toString.call(t) !== "[object Object]") {
                return t;
            }
            i = {};
            for(var n in t){
                i[n] = e(t[n]);
            }
            return i;
        };
        t.arrayToMap = function(e) {
            const t = {};
            for(let i = 0; i < e.length; i++){
                t[e[i]] = 1;
            }
            return t;
        };
        t.createMap = function(e) {
            const t = Object.create(null);
            for(const i in e){
                t[i] = e[i];
            }
            return t;
        };
        t.arrayRemove = function(e, t) {
            for(let i = 0; i <= e.length; i++){
                if (t === e[i]) {
                    e.splice(i, 1);
                }
            }
        };
        t.escapeRegExp = function(e) {
            return e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1");
        };
        t.escapeHTML = function(e) {
            return `${e}`.replace(/&/g, "&#38;").replace(/"/g, "&#34;").replace(/'/g, "&#39;").replace(/</g, "&#60;");
        };
        t.getMatchOffsets = function(e, t) {
            const i = [];
            e.replace(t, function(e) {
                i.push({
                    offset: arguments[arguments.length - 2],
                    length: e.length
                });
            });
            return i;
        };
        t.deferredCall = function(e) {
            let t = null;
            const i = function() {
                t = null;
                e();
            };
            const n = function(e) {
                n.cancel();
                t = setTimeout(i, e || 0);
                return n;
            };
            n.schedule = n;
            n.call = function() {
                this.cancel();
                e();
                return n;
            };
            n.cancel = function() {
                clearTimeout(t);
                t = null;
                return n;
            };
            n.isPending = function() {
                return t;
            };
            return n;
        };
        t.delayedCall = function(e, t) {
            let i = null;
            const n = function() {
                i = null;
                e();
            };
            const o = function(e) {
                if (i == null) {
                    i = setTimeout(n, e || t);
                }
            };
            o.delay = function(e) {
                if (i) {
                    clearTimeout(i);
                }
                i = setTimeout(n, e || t);
            };
            o.schedule = o;
            o.call = function() {
                this.cancel();
                e();
            };
            o.cancel = function() {
                if (i) {
                    clearTimeout(i);
                }
                i = null;
            };
            o.isPending = function() {
                return i;
            };
            return o;
        };
    });
    ace.define("ace/clipboard", [
        "require",
        "exports",
        "module"
    ], function(e, t, i) {
        "use strict";
        let n;
        i.exports = {
            lineMode: false,
            pasteCancelled: function() {
                return !!(n && n > Date.now() - 50) || (n = false);
            },
            cancel: function() {
                n = Date.now();
            }
        };
    });
    ace.define("ace/keyboard/textinput", [
        "require",
        "exports",
        "module",
        "ace/lib/event",
        "ace/lib/useragent",
        "ace/lib/dom",
        "ace/lib/lang",
        "ace/clipboard",
        "ace/lib/keys"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/event");
        const o = e("../lib/useragent");
        const s = e("../lib/dom");
        const r = e("../lib/lang");
        const a = e("../clipboard");
        const c = o.isChrome < 18;
        const o_isIE = o.isIE;
        const h = o.isChrome > 63;
        const d = e("../lib/keys");
        const d_KEY_MODS = d.KEY_MODS;
        let o_isIOS = o.isIOS;
        const g = o_isIOS ? /\s/ : /\n/;
        let o_isMobile = o.isMobile;
        t.TextInput = function(e, target) {
            const textareaElement = s.createElement("textarea");
            textareaElement.className = "ace_text-input";
            textareaElement.setAttribute("wrap", "off");
            textareaElement.setAttribute("autocorrect", "off");
            textareaElement.setAttribute("autocapitalize", "off");
            textareaElement.setAttribute("spellcheck", false);
            textareaElement.style.opacity = "0";
            e.insertBefore(textareaElement, e.firstChild);
            let m = false;
            let b = false;
            let v = false;
            let w = false;
            let x = "";
            if (!o_isMobile) {
                textareaElement.style.fontSize = "1px";
            }
            let y = false;
            let $ = false;
            let S = "";
            let C = 0;
            let k = 0;
            let M = 0;
            try {
                var A = document.activeElement === textareaElement;
            } catch (e) {}
            n.addListener(textareaElement, "blur", function(e) {
                if (!$) {
                    target.onBlur(e);
                    A = false;
                }
            }, target);
            n.addListener(textareaElement, "focus", function(e) {
                if (!$) {
                    A = true;
                    if (o.isEdge) {
                        try {
                            if (!document.hasFocus()) {
                                return;
                            }
                        } catch (e) {}
                    }
                    target.onFocus(e);
                    if (o.isEdge) {
                        setTimeout(L);
                    } else {
                        L();
                    }
                }
            }, target);
            this.$focusScroll = false;
            this.focus = function() {
                if (x || h || this.$focusScroll == "browser") {
                    return textareaElement.focus({
                        preventScroll: true
                    });
                }
                const top = textareaElement.style.top;
                textareaElement.style.position = "fixed";
                textareaElement.style.top = "0px";
                try {
                    var t = textareaElement.getBoundingClientRect().top != 0;
                } catch (e) {
                    return;
                }
                const n = [];
                if (t) {
                    for(let o = textareaElement.parentElement; o && o.nodeType == 1;){
                        n.push(o);
                        o.setAttribute("ace_nocontext", true);
                        o = !o.parentElement && o.getRootNode ? o.getRootNode().host : o.parentElement;
                    }
                }
                textareaElement.focus({
                    preventScroll: true
                });
                if (t) {
                    n.forEach((e)=>{
                        e.removeAttribute("ace_nocontext");
                    });
                }
                setTimeout(()=>{
                    textareaElement.style.position = "";
                    if (textareaElement.style.top == "0px") {
                        textareaElement.style.top = top;
                    }
                }, 0);
            };
            this.blur = function() {
                textareaElement.blur();
            };
            this.isFocused = function() {
                return A;
            };
            target.on("beforeEndOperation", function() {
                const t_curOp = target.curOp;
                const n = t_curOp && t_curOp.command && t_curOp.command.name;
                if (n != "insertstring") {
                    const o = n && (t_curOp.docChanged || t_curOp.selectionChanged);
                    if (v && o) {
                        S = textareaElement.value = "";
                        j();
                    }
                    L();
                }
            });
            var L = o_isIOS ? function(e) {
                if (A && (!m || e) && !w) {
                    if (!e) {
                        e = "";
                    }
                    const n = `
 ab${e}cde fg
`;
                    if (n != textareaElement.value) {
                        textareaElement.value = S = n;
                    }
                    const o = 4 + (e.length || (target.selection.isEmpty() ? 0 : 1));
                    if (!(C == 4 && k == o)) {
                        textareaElement.setSelectionRange(4, o);
                    }
                    C = 4;
                    k = o;
                }
            } : function() {
                if (!v && !w && (A || _)) {
                    v = true;
                    let e = 0;
                    let n = 0;
                    let o = "";
                    if (target.session) {
                        const s = target.selection;
                        const r = s.getRange();
                        const a = s.cursor.row;
                        e = r.start.column;
                        n = r.end.column;
                        o = target.session.getLine(a);
                        if (r.start.row != a) {
                            const c = target.session.getLine(a - 1);
                            e = r.start.row < a - 1 ? 0 : e;
                            n += c.length + 1;
                            o = `${c}
${o}`;
                        } else if (r.end.row != a) {
                            const l = target.session.getLine(a + 1);
                            n = r.end.row > a + 1 ? l.length : n;
                            n += o.length + 1;
                            o = `${o}
${l}`;
                        } else {
                            if (o_isMobile && a > 0) {
                                o = `
${o}`;
                                n += 1;
                                e += 1;
                            }
                        }
                        if (o.length > 400) {
                            if (e < 400 && n < 400) {
                                o = o.slice(0, 400);
                            } else {
                                o = "\n";
                                if (e == n) {
                                    e = n = 0;
                                } else {
                                    e = 0;
                                    n = 1;
                                }
                            }
                        }
                    }
                    const h = `${o}

`;
                    if (h != S) {
                        textareaElement.value = S = h;
                        C = k = h.length;
                    }
                    if (_) {
                        C = textareaElement.selectionStart;
                        k = textareaElement.selectionEnd;
                    }
                    if (k != n || C != e || textareaElement.selectionEnd != k) {
                        try {
                            textareaElement.setSelectionRange(e, n);
                            C = e;
                            k = n;
                        } catch (e) {}
                    }
                    v = false;
                }
            };
            this.resetSelection = L;
            if (A) {
                target.onFocus();
            }
            let R = null;
            this.setInputHandler = function(e) {
                R = e;
            };
            this.getInputHandler = function() {
                return R;
            };
            var _ = false;
            const E = (e, n)=>{
                if (_) {
                    _ = false;
                }
                if (b) {
                    L();
                    if (e) {
                        target.onPaste(e);
                    }
                    b = false;
                    return "";
                }
                const { selectionStart, selectionEnd } = textareaElement;
                for(var extendLeft = C, extendRight = S.length - k, l = e, restoreStart = e.length - selectionStart, restoreEnd = e.length - selectionEnd, u = 0; extendLeft > 0 && S[u] == e[u];){
                    u++;
                    extendLeft--;
                }
                l = l.slice(u);
                for(u = 1; extendRight > 0 && S.length - u > C - 1 && S[S.length - u] == e[e.length - u];){
                    u++;
                    extendRight--;
                }
                restoreStart -= u - 1;
                restoreEnd -= u - 1;
                let f = l.length - u + 1;
                if (f < 0) {
                    extendLeft = -f;
                    f = 0;
                }
                l = l.slice(0, f);
                if (!(n || l || restoreStart || extendLeft || extendRight || restoreEnd)) {
                    return "";
                }
                w = true;
                let g = false;
                if (o.isAndroid && l == ". ") {
                    l = "  ";
                    g = true;
                }
                if (l && !extendLeft && !extendRight && !restoreStart && !restoreEnd || y) {
                    target.onTextInput(l);
                } else {
                    target.onTextInput(l, {
                        extendLeft,
                        extendRight,
                        restoreStart,
                        restoreEnd
                    });
                }
                w = false;
                S = e;
                C = selectionStart;
                k = selectionEnd;
                M = restoreEnd;
                if (g) {
                    return "\n";
                }
                return l;
            };
            const T = function(e) {
                if (v) {
                    return B();
                }
                if (e && e.inputType) {
                    if (e.inputType == "historyUndo") {
                        return target.execCommand("undo");
                    }
                    if (e.inputType == "historyRedo") {
                        return target.execCommand("redo");
                    }
                }
                const textareaElement_value = textareaElement.value;
                const o = E(textareaElement_value, true);
                if (textareaElement_value.length > 500 || g.test(o) || o_isMobile && C < 1 && C == k) {
                    L();
                }
            };
            const O = (e, t, i)=>{
                const n = e.clipboardData || window.clipboardData;
                if (n && !c) {
                    const o = o_isIE || i ? "Text" : "text/plain";
                    try {
                        if (t) {
                            return n.setData(o, t) !== false;
                        }
                        return n.getData(o);
                    } catch (error) {
                        if (!i) {
                            return O(error, t, true);
                        }
                    }
                }
            };
            const F = (e, o)=>{
                const s = target.getCopyText();
                if (!s) {
                    return n.preventDefault(e);
                }
                if (O(e, s)) {
                    if (o_isIOS) {
                        L(s);
                        m = s;
                        setTimeout(()=>{
                            m = false;
                        }, 10);
                    }
                    if (o) {
                        target.onCut();
                    } else {
                        target.onCopy();
                    }
                    n.preventDefault(e);
                } else {
                    m = true;
                    textareaElement.value = s;
                    textareaElement.select();
                    setTimeout(()=>{
                        m = false;
                        L();
                        if (o) {
                            target.onCut();
                        } else {
                            target.onCopy();
                        }
                    });
                }
            };
            const U = function(e) {
                F(e, true);
            };
            const I = function(e) {
                F(e, false);
            };
            const W = function(e) {
                const s = O(e);
                if (!a.pasteCancelled()) {
                    if (typeof s === "string") {
                        if (s) {
                            target.onPaste(s, e);
                        }
                        if (o.isIE) {
                            setTimeout(L);
                        }
                        n.preventDefault(e);
                    } else {
                        textareaElement.value = "";
                        b = true;
                    }
                }
            };
            n.addCommandKeyListener(textareaElement, target.onCommandKey.bind(target), target);
            n.addListener(textareaElement, "select", function(e) {
                if (!v) {
                    if (m) {
                        m = false;
                    } else if (((e)=>e.selectionStart === 0 && e.selectionEnd >= S.length && e.value === S && S && e.selectionEnd !== k)(textareaElement)) {
                        target.selectAll();
                        L();
                    } else if (o_isMobile && textareaElement.selectionStart != C) {
                        L();
                    }
                }
            }, target);
            n.addListener(textareaElement, "input", T, target);
            n.addListener(textareaElement, "cut", U, target);
            n.addListener(textareaElement, "copy", I, target);
            n.addListener(textareaElement, "paste", W, target);
            if (!("oncut" in textareaElement && "oncopy" in textareaElement && "onpaste" in textareaElement)) {
                n.addListener(e, "keydown", function(e) {
                    if ((!o.isMac || e.metaKey) && e.ctrlKey) {
                        switch(e.keyCode){
                            case 67:
                                I(e);
                                break;
                            case 86:
                                W(e);
                                break;
                            case 88:
                                U(e);
                        }
                    }
                }, target);
            }
            var B = function() {
                if (v && target.onCompositionUpdate && !target.$readOnly) {
                    if (y) {
                        return D();
                    }
                    if (v.useTextareaForIME) {
                        target.onCompositionUpdate(textareaElement.value);
                    } else {
                        const e = textareaElement.value;
                        E(e);
                        if (v.markerRange) {
                            if (v.context) {
                                v.markerRange.start.column = v.selectionStart = v.context.compositionStartOffset;
                            }
                            v.markerRange.end.column = v.markerRange.start.column + k - v.selectionStart + M;
                        }
                    }
                }
            };
            var j = function(e) {
                if (target.onCompositionEnd && !target.$readOnly) {
                    v = false;
                    target.onCompositionEnd();
                    target.off("mousedown", D);
                    if (e) {
                        T();
                    }
                }
            };
            function D() {
                $ = true;
                textareaElement.blur();
                textareaElement.focus();
                $ = false;
            }
            let P;
            const H = r.delayedCall(B, 50).schedule.bind(null, null);
            function N() {
                clearTimeout(P);
                P = setTimeout(()=>{
                    if (x) {
                        textareaElement.style.cssText = x;
                        x = "";
                    }
                    target.renderer.$isMousePressed = false;
                    if (target.renderer.$keepTextAreaAtCursor) {
                        target.renderer.$moveTextAreaToCursor();
                    }
                }, 0);
            }
            n.addListener(textareaElement, "compositionstart", function(e) {
                if (!v && target.onCompositionStart && !target.$readOnly && (v = {}, !y)) {
                    if (e.data) {
                        v.useTextareaForIME = false;
                    }
                    setTimeout(B, 0);
                    target._signal("compositionStart");
                    target.on("mousedown", D);
                    const n = target.getSelectionRange();
                    n.end.row = n.start.row;
                    n.end.column = n.start.column;
                    v.markerRange = n;
                    v.selectionStart = C;
                    target.onCompositionStart(v);
                    if (v.useTextareaForIME) {
                        S = textareaElement.value = "";
                        C = 0;
                        k = 0;
                    } else {
                        if (textareaElement.msGetInputContext) {
                            v.context = textareaElement.msGetInputContext();
                        }
                        if (textareaElement.getInputContext) {
                            v.context = textareaElement.getInputContext();
                        }
                    }
                }
            }, target);
            n.addListener(textareaElement, "compositionupdate", B, target);
            n.addListener(textareaElement, "keyup", function(e) {
                if (e.keyCode == 27 && textareaElement.value.length < textareaElement.selectionStart) {
                    if (!v) {
                        S = textareaElement.value;
                    }
                    C = k = -1;
                    L();
                }
                H();
            }, target);
            n.addListener(textareaElement, "keydown", H, target);
            n.addListener(textareaElement, "compositionend", j, target);
            this.getElement = function() {
                return textareaElement;
            };
            this.setCommandMode = function(e) {
                y = e;
                textareaElement.readOnly = false;
            };
            this.setReadOnly = function(e) {
                if (!y) {
                    textareaElement.readOnly = e;
                }
            };
            this.setCopyWithEmptySelection = function(e) {};
            this.onContextMenu = function(domEvent) {
                _ = true;
                L();
                target._emit("nativecontextmenu", {
                    target,
                    domEvent
                });
                this.moveToMouse(domEvent, true);
            };
            this.moveToMouse = function(e, r) {
                if (!x) {
                    x = textareaElement.style.cssText;
                }
                textareaElement.style.cssText = `${(r ? "z-index:100000;" : "") + (o.isIE ? "opacity:0.1;" : "")}text-indent: -${(C + k) * target.renderer.characterWidth * 0.5}px;`;
                const a = target.container.getBoundingClientRect();
                const c = s.computedStyle(target.container);
                const l = a.top + (parseInt(c.borderTopWidth) || 0);
                const h = a.left + (parseInt(a.borderLeftWidth) || 0);
                const d = a.bottom - l - textareaElement.clientHeight - 2;
                const u = function(e) {
                    s.translate(textareaElement, e.clientX - h - 2, Math.min(e.clientY - l - 2, d));
                };
                u(e);
                if (e.type == "mousedown") {
                    target.renderer.$isMousePressed = true;
                    clearTimeout(P);
                    if (o.isWin) {
                        n.capture(target.container, u, N);
                    }
                }
            };
            this.onContextMenuClose = N;
            const z = function(e) {
                target.textInput.onContextMenu(e);
                N();
            };
            n.addListener(textareaElement, "mouseup", z, target);
            n.addListener(textareaElement, "mousedown", function(e) {
                e.preventDefault();
                N();
            }, target);
            n.addListener(target.renderer.scroller, "contextmenu", z, target);
            n.addListener(textareaElement, "contextmenu", z, target);
            if (o_isIOS) {
                ((target_1, textareaElement_1)=>{
                    const e = 0;
                    let n = null;
                    let o = false;
                    textareaElement_1.addEventListener("keydown", function(e) {
                        if (n) {
                            clearTimeout(n);
                        }
                        o = true;
                    }, true);
                    textareaElement_1.addEventListener("keyup", function(e) {
                        n = setTimeout(()=>{
                            o = false;
                        }, 100);
                    }, true);
                    const s = function(e) {
                        if (document.activeElement === textareaElement_1 && !(o || v || target_1.$mouseHandler.isMousePressed || m)) {
                            const { selectionStart, selectionEnd } = textareaElement_1;
                            let r = null;
                            let a = 0;
                            if (selectionStart == 0) {
                                r = d.up;
                            } else if (selectionStart == 1) {
                                r = d.home;
                            } else if (selectionEnd > k && S[selectionEnd] == "\n") {
                                r = d.end;
                            } else if (selectionStart < C && S[selectionStart - 1] == " ") {
                                r = d.left;
                                a = d_KEY_MODS.option;
                            } else if (selectionStart < C || selectionStart == C && k != C && selectionStart == selectionEnd) {
                                r = d.left;
                            } else if (selectionEnd > k && S.slice(0, selectionEnd).split("\n").length > 2) {
                                r = d.down;
                            } else if (selectionEnd > k && S[selectionEnd - 1] == " ") {
                                r = d.right;
                                a = d_KEY_MODS.option;
                            } else if (selectionEnd > k || selectionEnd == k && k != C && selectionStart == selectionEnd) {
                                r = d.right;
                            }
                            if (selectionStart !== selectionEnd) {
                                a |= d_KEY_MODS.shift;
                            }
                            if (r) {
                                if (!target_1.onCommandKey({}, a, r) && target_1.commands) {
                                    r = d.keyCodeToString(r);
                                    const c = target_1.commands.findKeyCommand(a, r);
                                    if (c) {
                                        target_1.execCommand(c);
                                    }
                                }
                                C = selectionStart;
                                k = selectionEnd;
                                L("");
                            }
                        }
                    };
                    document.addEventListener("selectionchange", s);
                    target_1.on("destroy", function() {
                        document.removeEventListener("selectionchange", s);
                    });
                })(target, textareaElement);
            }
        };
        t.$setUserAgentForTests = function(e, t) {
            o_isMobile = e;
            o_isIOS = t;
        };
    });
    ace.define("ace/mouse/default_handlers", [
        "require",
        "exports",
        "module",
        "ace/lib/useragent"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/useragent");
        function o(e) {
            e.$clickSelection = null;
            const e_editor = e.editor;
            e_editor.setDefaultHandler("mousedown", this.onMouseDown.bind(e));
            e_editor.setDefaultHandler("dblclick", this.onDoubleClick.bind(e));
            e_editor.setDefaultHandler("tripleclick", this.onTripleClick.bind(e));
            e_editor.setDefaultHandler("quadclick", this.onQuadClick.bind(e));
            e_editor.setDefaultHandler("mousewheel", this.onMouseWheel.bind(e));
            [
                "select",
                "startSelect",
                "selectEnd",
                "selectAllEnd",
                "selectByWordsEnd",
                "selectByLinesEnd",
                "dragWait",
                "dragWaitEnd",
                "focusWait"
            ].forEach(function(t) {
                e[t] = this[t];
            }, this);
            e.selectByLines = this.extendSelectionBy.bind(e, "getLineRange");
            e.selectByWords = this.extendSelectionBy.bind(e, "getWordRange");
        }
        function s($clickSelection, t) {
            if ($clickSelection.start.row == $clickSelection.end.row) var i = 2 * t.column - $clickSelection.start.column - $clickSelection.end.column;
            else if ($clickSelection.start.row != $clickSelection.end.row - 1 || $clickSelection.start.column || $clickSelection.end.column) {
                i = 2 * t.row - $clickSelection.start.row - $clickSelection.end.row;
            } else {
                i = t.column - 4;
            }
            if (i < 0) {
                return {
                    cursor: $clickSelection.start,
                    anchor: $clickSelection.end
                };
            }
            return {
                cursor: $clickSelection.end,
                anchor: $clickSelection.start
            };
        }
        (function() {
            this.onMouseDown = function(e) {
                const t = e.inSelection();
                const i = e.getDocumentPosition();
                this.mousedownEvent = e;
                const editor = this.editor;
                const s = e.getButton();
                if (s !== 0) {
                    if (editor.getSelectionRange().isEmpty() || s == 1) {
                        editor.selection.moveToPosition(i);
                    }
                    return void (s == 2 && (editor.textInput.onContextMenu(e.domEvent), n.isMozilla || e.preventDefault()));
                }
                this.mousedownEvent.time = Date.now();
                if (!t || editor.isFocused() || (editor.focus(), !this.$focusTimeout || this.$clickSelection || editor.inMultiSelectMode)) {
                    return this.captureMouse(e), this.startSelect(i, e.domEvent._clicks > 1), e.preventDefault();
                }
                return this.setState("focusWait"), void this.captureMouse(e);
            };
            this.startSelect = function(e, t) {
                e = e || this.editor.renderer.screenToTextCoordinates(this.x, this.y);
                const editor = this.editor;
                if (this.mousedownEvent) {
                    if (this.mousedownEvent.getShiftKey()) {
                        editor.selection.selectToPosition(e);
                    } else if (!t) {
                        editor.selection.moveToPosition(e);
                    }
                    if (!t) {
                        this.select();
                    }
                    if (editor.renderer.scroller.setCapture) {
                        editor.renderer.scroller.setCapture();
                    }
                    editor.setStyle("ace_selecting");
                    this.setState("select");
                }
            };
            this.select = function() {
                let e;
                const editor = this.editor;
                let i = editor.renderer.screenToTextCoordinates(this.x, this.y);
                if (this.$clickSelection) {
                    const n = this.$clickSelection.comparePoint(i);
                    if (n == -1) {
                        e = this.$clickSelection.end;
                    } else if (n == 1) {
                        e = this.$clickSelection.start;
                    } else {
                        const o = s(this.$clickSelection, i);
                        i = o.cursor;
                        e = o.anchor;
                    }
                    editor.selection.setSelectionAnchor(e.row, e.column);
                }
                editor.selection.selectToPosition(i);
                editor.renderer.scrollCursorIntoView();
            };
            this.extendSelectionBy = function(e) {
                let t;
                const editor = this.editor;
                let n = editor.renderer.screenToTextCoordinates(this.x, this.y);
                const o = editor.selection[e](n.row, n.column);
                if (this.$clickSelection) {
                    const r = this.$clickSelection.comparePoint(o.start);
                    const a = this.$clickSelection.comparePoint(o.end);
                    if (r == -1 && a <= 0) {
                        t = this.$clickSelection.end;
                        if (!(o.end.row == n.row && o.end.column == n.column)) {
                            n = o.start;
                        }
                    } else if (a == 1 && r >= 0) {
                        t = this.$clickSelection.start;
                        if (!(o.start.row == n.row && o.start.column == n.column)) {
                            n = o.end;
                        }
                    } else if (r == -1 && a == 1) {
                        n = o.end;
                        t = o.start;
                    } else {
                        const c = s(this.$clickSelection, n);
                        n = c.cursor;
                        t = c.anchor;
                    }
                    editor.selection.setSelectionAnchor(t.row, t.column);
                }
                editor.selection.selectToPosition(n);
                editor.renderer.scrollCursorIntoView();
            };
            this.selectEnd = this.selectAllEnd = this.selectByWordsEnd = this.selectByLinesEnd = function() {
                this.$clickSelection = null;
                this.editor.unsetStyle("ace_selecting");
                if (this.editor.renderer.scroller.releaseCapture) {
                    this.editor.renderer.scroller.releaseCapture();
                }
            };
            this.focusWait = function() {
                let e;
                let t;
                let i;
                let n;
                e = this.mousedownEvent.x;
                t = this.mousedownEvent.y;
                i = this.x;
                n = this.y;
                const o = Math.sqrt((i - e) ** 2 + (n - t) ** 2);
                const s = Date.now();
                if (o > 0 || s - this.mousedownEvent.time > this.$focusTimeout) {
                    this.startSelect(this.mousedownEvent.getDocumentPosition());
                }
            };
            this.onDoubleClick = function(e) {
                const t = e.getDocumentPosition();
                const editor = this.editor;
                let n = editor.session.getBracketRange(t);
                if (n) {
                    if (n.isEmpty()) {
                        n.start.column--;
                        n.end.column++;
                    }
                    this.setState("select");
                } else {
                    n = editor.selection.getWordRange(t.row, t.column);
                    this.setState("selectByWords");
                }
                this.$clickSelection = n;
                this.select();
            };
            this.onTripleClick = function(e) {
                const t = e.getDocumentPosition();
                const editor = this.editor;
                this.setState("selectByLines");
                const n = editor.getSelectionRange();
                if (n.isMultiLine() && n.contains(t.row, t.column)) {
                    this.$clickSelection = editor.selection.getLineRange(n.start.row);
                    this.$clickSelection.end = editor.selection.getLineRange(n.end.row).end;
                } else {
                    this.$clickSelection = editor.selection.getLineRange(t.row);
                }
                this.select();
            };
            this.onQuadClick = function(e) {
                const editor = this.editor;
                editor.selectAll();
                this.$clickSelection = editor.getSelectionRange();
                this.setState("selectAll");
            };
            this.onMouseWheel = function(e) {
                if (!e.getAccelKey()) {
                    if (e.getShiftKey() && e.wheelY && !e.wheelX) {
                        e.wheelX = e.wheelY;
                        e.wheelY = 0;
                    }
                    const t = this.editor;
                    if (!this.$lastScroll) {
                        this.$lastScroll = {
                            t: 0,
                            vx: 0,
                            vy: 0,
                            allowed: 0
                        };
                    }
                    const i = this.$lastScroll;
                    const n = e.domEvent.timeStamp;
                    const o = n - i.t;
                    let s = o ? e.wheelX / o : i.vx;
                    let r = o ? e.wheelY / o : i.vy;
                    if (o < 550) {
                        s = (s + i.vx) / 2;
                        r = (r + i.vy) / 2;
                    }
                    const a = Math.abs(s / r);
                    let c = false;
                    if (a >= 1 && t.renderer.isScrollableBy(e.wheelX * e.speed, 0)) {
                        c = true;
                    }
                    if (a <= 1 && t.renderer.isScrollableBy(0, e.wheelY * e.speed)) {
                        c = true;
                    }
                    if (c) {
                        i.allowed = n;
                    } else {
                        if (n - i.allowed < 550) {
                            if (Math.abs(s) <= 1.5 * Math.abs(i.vx) && Math.abs(r) <= 1.5 * Math.abs(i.vy)) {
                                c = true;
                                i.allowed = n;
                            } else {
                                i.allowed = 0;
                            }
                        }
                    }
                    i.t = n;
                    i.vx = s;
                    i.vy = r;
                    if (c) {
                        t.renderer.scrollBy(e.wheelX * e.speed, e.wheelY * e.speed);
                        return e.stop();
                    }
                    return undefined;
                }
            };
        }).call(o.prototype);
        t.DefaultHandlers = o;
    });
    ace.define("ace/tooltip", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/lib/dom"
    ], function(e, t, i) {
        "use strict";
        e("./lib/oop");
        const n = e("./lib/dom");
        function o(e) {
            this.isOpen = false;
            this.$element = null;
            this.$parentNode = e;
        }
        (function() {
            this.$init = function() {
                this.$element = n.createElement("div");
                this.$element.className = "ace_tooltip";
                this.$element.style.display = "none";
                this.$parentNode.appendChild(this.$element);
                return this.$element;
            };
            this.getElement = function() {
                return this.$element || this.$init();
            };
            this.setText = function(e) {
                this.getElement().textContent = e;
            };
            this.setHtml = function(e) {
                this.getElement().innerHTML = e;
            };
            this.setPosition = function(e, t) {
                this.getElement().style.left = `${e}px`;
                this.getElement().style.top = `${t}px`;
            };
            this.setClassName = function(e) {
                n.addCssClass(this.getElement(), e);
            };
            this.show = function(e, t, i) {
                if (e != null) {
                    this.setText(e);
                }
                if (t != null && i != null) {
                    this.setPosition(t, i);
                }
                if (!this.isOpen) {
                    this.getElement().style.display = "block";
                    this.isOpen = true;
                }
            };
            this.hide = function() {
                if (this.isOpen) {
                    this.getElement().style.display = "none";
                    this.isOpen = false;
                }
            };
            this.getHeight = function() {
                return this.getElement().offsetHeight;
            };
            this.getWidth = function() {
                return this.getElement().offsetWidth;
            };
            this.destroy = function() {
                this.isOpen = false;
                if (this.$element && this.$element.parentNode) {
                    this.$element.parentNode.removeChild(this.$element);
                }
            };
        }).call(o.prototype);
        t.Tooltip = o;
    });
    ace.define("ace/mouse/default_gutter_handler", [
        "require",
        "exports",
        "module",
        "ace/lib/dom",
        "ace/lib/oop",
        "ace/lib/event",
        "ace/tooltip"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/dom");
        const o = e("../lib/oop");
        const s = e("../lib/event");
        const Tooltip = e("../tooltip").Tooltip;
        function a(e) {
            Tooltip.call(this, e);
        }
        o.inherits(a, Tooltip);
        (function() {
            this.setPosition = function(e, t) {
                const i = window.innerWidth || document.documentElement.clientWidth;
                const n = window.innerHeight || document.documentElement.clientHeight;
                const o = this.getWidth();
                const s = this.getHeight();
                if ((e += 15) + o > i) {
                    e -= e + o - i;
                }
                if ((t += 15) + s > n) {
                    t -= 20 + s;
                }
                Tooltip.prototype.setPosition.call(this, e, t);
            };
        }).call(a.prototype);
        t.GutterHandler = function(e) {
            let t;
            let i;
            let o;
            const e_editor = e.editor;
            const $gutterLayer = e_editor.renderer.$gutterLayer;
            const l = new a(e_editor.container);
            function h() {
                if (t) {
                    t = clearTimeout(t);
                }
                if (o) {
                    l.hide();
                    o = null;
                    e_editor._signal("hideGutterTooltip", l);
                    e_editor.off("mousewheel", h);
                }
            }
            function d(e) {
                l.setPosition(e.x, e.y);
            }
            e.editor.setDefaultHandler("guttermousedown", function(t) {
                if (e_editor.isFocused() && t.getButton() == 0 && $gutterLayer.getRegion(t) != "foldWidgets") {
                    const i = t.getDocumentPosition().row;
                    const n = e_editor.session.selection;
                    if (t.getShiftKey()) {
                        n.selectTo(i, 0);
                    } else {
                        if (t.domEvent.detail == 2) {
                            e_editor.selectAll();
                            return t.preventDefault();
                        }
                        e.$clickSelection = e_editor.selection.getLineRange(i);
                    }
                    e.setState("selectByLines");
                    e.captureMouse(t);
                    return t.preventDefault();
                }
            });
            e.editor.setDefaultHandler("guttermousemove", function(s) {
                const a = s.domEvent.target || s.domEvent.srcElement;
                if (n.hasCssClass(a, "ace_fold-widget")) {
                    return h();
                }
                if (o && e.$tooltipFollowsMouse) {
                    d(s);
                }
                i = s;
                if (!t) {
                    t = setTimeout(()=>{
                        t = null;
                        if (i && !e.isMousePressed) {
                            (()=>{
                                const row = i.getDocumentPosition().row;
                                const n = $gutterLayer.$annotations[row];
                                if (!n) {
                                    return h();
                                }
                                if (row == e_editor.session.getLength()) {
                                    const s = e_editor.renderer.pixelToScreenCoordinates(0, i.y).row;
                                    const a = i.$pos;
                                    if (s > e_editor.session.documentToScreenRow(a.row, a.column)) {
                                        return h();
                                    }
                                }
                                if (o != n) {
                                    o = n.text.join("<br/>");
                                    l.setHtml(o);
                                    l.show();
                                    e_editor._signal("showGutterTooltip", l);
                                    e_editor.on("mousewheel", h);
                                    if (e.$tooltipFollowsMouse) {
                                        d(i);
                                    } else {
                                        const u = i.domEvent.target.getBoundingClientRect();
                                        const f = l.getElement().style;
                                        f.left = `${u.right}px`;
                                        f.top = `${u.bottom}px`;
                                    }
                                }
                            })();
                        } else {
                            h();
                        }
                    }, 50);
                }
            });
            s.addListener(e_editor.renderer.$gutter, "mouseout", function(e) {
                i = null;
                if (o && !t) {
                    t = setTimeout(()=>{
                        t = null;
                        h();
                    }, 50);
                }
            }, e_editor);
            e_editor.on("changeSession", h);
        };
    });
    ace.define("ace/mouse/mouse_event", [
        "require",
        "exports",
        "module",
        "ace/lib/event",
        "ace/lib/useragent"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/event");
        const o = e("../lib/useragent");
        const s = t.MouseEvent = function(e, t) {
            this.domEvent = e;
            this.editor = t;
            this.x = this.clientX = e.clientX;
            this.y = this.clientY = e.clientY;
            this.$pos = null;
            this.$inSelection = null;
            this.propagationStopped = false;
            this.defaultPrevented = false;
        };
        (function() {
            this.stopPropagation = function() {
                n.stopPropagation(this.domEvent);
                this.propagationStopped = true;
            };
            this.preventDefault = function() {
                n.preventDefault(this.domEvent);
                this.defaultPrevented = true;
            };
            this.stop = function() {
                this.stopPropagation();
                this.preventDefault();
            };
            this.getDocumentPosition = function() {
                if (!this.$pos) {
                    this.$pos = this.editor.renderer.screenToTextCoordinates(this.clientX, this.clientY);
                }
                return this.$pos;
            };
            this.inSelection = function() {
                if (this.$inSelection !== null) {
                    return this.$inSelection;
                }
                const e = this.editor.getSelectionRange();
                if (e.isEmpty()) {
                    this.$inSelection = false;
                } else {
                    const t = this.getDocumentPosition();
                    this.$inSelection = e.contains(t.row, t.column);
                }
                return this.$inSelection;
            };
            this.getButton = function() {
                return n.getButton(this.domEvent);
            };
            this.getShiftKey = function() {
                return this.domEvent.shiftKey;
            };
            this.getAccelKey = o.isMac ? function() {
                return this.domEvent.metaKey;
            } : function() {
                return this.domEvent.ctrlKey;
            };
        }).call(s.prototype);
    });
    ace.define("ace/mouse/dragdrop_handler", [
        "require",
        "exports",
        "module",
        "ace/lib/dom",
        "ace/lib/event",
        "ace/lib/useragent"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/dom");
        const o = e("../lib/event");
        const s = e("../lib/useragent");
        function r(e) {
            const e_editor = e.editor;
            const imgElement = n.createElement("img");
            imgElement.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
            if (s.isOpera) {
                imgElement.style.cssText = "width:1px;height:1px;position:fixed;top:0;left:0;z-index:2147483647;opacity:0;";
            }
            [
                "dragWait",
                "dragWaitEnd",
                "startDrag",
                "dragReadyEnd",
                "onMouseDrag"
            ].forEach(function(t) {
                e[t] = this[t];
            }, this);
            e_editor.on("mousedown", this.onMouseDown.bind(e));
            let r;
            let x_1;
            let y_1;
            let h;
            let d;
            let u;
            let f;
            let g;
            let p;
            let m;
            let b;
            const t_container = e_editor.container;
            let w = 0;
            function x() {
                const e = u;
                ((e, i)=>{
                    const n = Date.now();
                    const o = !i || e.row != i.row;
                    const s = !i || e.column != i.column;
                    if (!m || o || s) {
                        e_editor.moveCursorToPosition(e);
                        m = n;
                        b = {
                            x: x_1,
                            y: y_1
                        };
                    } else if (a(b.x, b.y, x_1, y_1) > 5) {
                        m = null;
                    } else if (n - m >= 200) {
                        e_editor.renderer.scrollCursorIntoView();
                        m = null;
                    }
                })(u = e_editor.renderer.screenToTextCoordinates(x_1, y_1), e);
                ((e, i)=>{
                    const n = Date.now();
                    const lineHeight = e_editor.renderer.layerConfig.lineHeight;
                    const characterWidth = e_editor.renderer.layerConfig.characterWidth;
                    const r = e_editor.renderer.scroller.getBoundingClientRect();
                    const a = {
                        x: {
                            left: x_1 - r.left,
                            right: r.right - x_1
                        },
                        y: {
                            top: y_1 - r.top,
                            bottom: r.bottom - y_1
                        }
                    };
                    const h = Math.min(a.x.left, a.x.right);
                    const d = Math.min(a.y.top, a.y.bottom);
                    const u = {
                        row: e.row,
                        column: e.column
                    };
                    if (h / characterWidth <= 2) {
                        u.column += a.x.left < a.x.right ? -3 : 2;
                    }
                    if (d / lineHeight <= 1) {
                        u.row += a.y.top < a.y.bottom ? -1 : 1;
                    }
                    const f = e.row != u.row;
                    const g = e.column != u.column;
                    const m = !i || e.row != i.row;
                    if (f || g && !m) {
                        if (p) {
                            if (n - p >= 200) {
                                e_editor.renderer.scrollCursorIntoView(u);
                            }
                        } else {
                            p = n;
                        }
                    } else {
                        p = null;
                    }
                })(u, e);
            }
            function y() {
                d = e_editor.selection.toOrientedRange();
                r = e_editor.session.addMarker(d, "ace_selection", e_editor.getSelectionStyle());
                e_editor.clearSelection();
                if (e_editor.isFocused()) {
                    e_editor.renderer.$cursorLayer.setBlinking(false);
                }
                clearInterval(h);
                x();
                h = setInterval(x, 20);
                w = 0;
                o.addListener(document, "mousemove", C);
            }
            function $() {
                clearInterval(h);
                e_editor.session.removeMarker(r);
                r = null;
                e_editor.selection.fromOrientedRange(d);
                if (e_editor.isFocused() && !g) {
                    e_editor.$resetCursorStyle();
                }
                d = null;
                u = null;
                w = 0;
                p = null;
                m = null;
                o.removeListener(document, "mousemove", C);
            }
            this.onDragStart = function(e) {
                if (this.cancelDrag || !t_container.draggable) {
                    const n = this;
                    setTimeout(()=>{
                        n.startSelect();
                        n.captureMouse(e);
                    }, 0);
                    return e.preventDefault();
                }
                d = e_editor.getSelectionRange();
                const e_dataTransfer = e.dataTransfer;
                e_dataTransfer.effectAllowed = e_editor.getReadOnly() ? "copy" : "copyMove";
                if (s.isOpera) {
                    e_editor.container.appendChild(imgElement);
                    imgElement.scrollTop = 0;
                }
                if (e_dataTransfer.setDragImage) {
                    e_dataTransfer.setDragImage(imgElement, 0, 0);
                }
                if (s.isOpera) {
                    e_editor.container.removeChild(imgElement);
                }
                e_dataTransfer.clearData();
                e_dataTransfer.setData("Text", e_editor.session.getTextRange());
                g = true;
                this.setState("drag");
            };
            this.onDragEnd = function(e) {
                t_container.draggable = false;
                g = false;
                this.setState(null);
                if (!e_editor.getReadOnly()) {
                    const i = e.dataTransfer.dropEffect;
                    if (!(f || i != "move")) {
                        e_editor.session.remove(e_editor.getSelectionRange());
                    }
                    e_editor.$resetCursorStyle();
                }
                this.editor.unsetStyle("ace_dragging");
                this.editor.renderer.setCursorStyle("");
            };
            this.onDragEnter = function(e) {
                if (!e_editor.getReadOnly() && k(e.dataTransfer)) {
                    x_1 = e.clientX;
                    y_1 = e.clientY;
                    if (!r) {
                        y();
                    }
                    w++;
                    e.dataTransfer.dropEffect = f = M(e);
                    return o.preventDefault(e);
                }
            };
            this.onDragOver = function(e) {
                if (!e_editor.getReadOnly() && k(e.dataTransfer)) {
                    x_1 = e.clientX;
                    y_1 = e.clientY;
                    if (!r) {
                        y();
                        w++;
                    }
                    if (S !== null) {
                        S = null;
                    }
                    e.dataTransfer.dropEffect = f = M(e);
                    return o.preventDefault(e);
                }
            };
            this.onDragLeave = function(e) {
                if (--w <= 0 && r) {
                    $();
                    f = null;
                    return o.preventDefault(e);
                }
            };
            this.onDrop = function(e) {
                if (u) {
                    const i = e.dataTransfer;
                    if (g) {
                        switch(f){
                            case "move":
                                d = d.contains(u.row, u.column) ? {
                                    start: u,
                                    end: u
                                } : e_editor.moveText(d, u);
                                break;
                            case "copy":
                                d = e_editor.moveText(d, u, true);
                        }
                    } else {
                        const n = i.getData("Text");
                        d = {
                            start: u,
                            end: e_editor.session.insert(u, n)
                        };
                        e_editor.focus();
                        f = null;
                    }
                    $();
                    return o.preventDefault(e);
                }
            };
            o.addListener(t_container, "dragstart", this.onDragStart.bind(e), e_editor);
            o.addListener(t_container, "dragend", this.onDragEnd.bind(e), e_editor);
            o.addListener(t_container, "dragenter", this.onDragEnter.bind(e), e_editor);
            o.addListener(t_container, "dragover", this.onDragOver.bind(e), e_editor);
            o.addListener(t_container, "dragleave", this.onDragLeave.bind(e), e_editor);
            o.addListener(t_container, "drop", this.onDrop.bind(e), e_editor);
            var S = null;
            function C() {
                if (S == null) {
                    S = setTimeout(()=>{
                        if (S != null && r) {
                            $();
                        }
                    }, 20);
                }
            }
            function k({ types }) {
                return !types || Array.prototype.some.call(types, function(e) {
                    return e == "text/plain" || e == "Text";
                });
            }
            function M(e) {
                const t = [
                    "copy",
                    "copymove",
                    "all",
                    "uninitialized"
                ];
                const i = s.isMac ? e.altKey : e.ctrlKey;
                let n = "uninitialized";
                try {
                    n = e.dataTransfer.effectAllowed.toLowerCase();
                } catch (e) {}
                let o = "none";
                if (i && t.indexOf(n) >= 0) {
                    o = "copy";
                } else if ([
                    "move",
                    "copymove",
                    "linkmove",
                    "all",
                    "uninitialized"
                ].indexOf(n) >= 0) {
                    o = "move";
                } else if (t.indexOf(n) >= 0) {
                    o = "copy";
                }
                return o;
            }
        }
        function a(e, t, i, n) {
            return Math.sqrt((i - e) ** 2 + (n - t) ** 2);
        }
        (function() {
            this.dragWait = function() {
                if (Date.now() - this.mousedownEvent.time > this.editor.getDragDelay()) {
                    this.startDrag();
                }
            };
            this.dragWaitEnd = function() {
                this.editor.container.draggable = false;
                this.startSelect(this.mousedownEvent.getDocumentPosition());
                this.selectEnd();
            };
            this.dragReadyEnd = function(e) {
                this.editor.$resetCursorStyle();
                this.editor.unsetStyle("ace_dragging");
                this.editor.renderer.setCursorStyle("");
                this.dragWaitEnd();
            };
            this.startDrag = function() {
                this.cancelDrag = false;
                const editor = this.editor;
                editor.container.draggable = true;
                editor.renderer.$cursorLayer.setBlinking(false);
                editor.setStyle("ace_dragging");
                const t = s.isWin ? "default" : "move";
                editor.renderer.setCursorStyle(t);
                this.setState("dragReady");
            };
            this.onMouseDrag = function(e) {
                const container = this.editor.container;
                if (s.isIE && this.state == "dragReady" && a(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y) > 3) {
                    container.dragDrop();
                }
                if (this.state === "dragWait" && a(this.mousedownEvent.x, this.mousedownEvent.y, this.x, this.y) > 0) {
                    container.draggable = false;
                    this.startSelect(this.mousedownEvent.getDocumentPosition());
                }
            };
            this.onMouseDown = function(e) {
                if (this.$dragEnabled) {
                    this.mousedownEvent = e;
                    const t = this.editor;
                    const i = e.inSelection();
                    const n = e.getButton();
                    if ((e.domEvent.detail || 1) === 1 && n === 0 && i) {
                        if (e.editor.inMultiSelectMode && (e.getAccelKey() || e.getShiftKey())) {
                            return;
                        }
                        this.mousedownEvent.time = Date.now();
                        const o = e.domEvent.target || e.domEvent.srcElement;
                        if ("unselectable" in o) {
                            o.unselectable = "on";
                        }
                        if (t.getDragDelay()) {
                            if (s.isWebKit) {
                                this.cancelDrag = true;
                                t.container.draggable = true;
                            }
                            this.setState("dragWait");
                        } else {
                            this.startDrag();
                        }
                        this.captureMouse(e, this.onMouseDrag.bind(this));
                        e.defaultPrevented = true;
                    }
                }
            };
        }).call(r.prototype);
        t.DragdropHandler = r;
    });
    ace.define("ace/mouse/touch_handler", [
        "require",
        "exports",
        "module",
        "ace/mouse/mouse_event",
        "ace/lib/event",
        "ace/lib/dom"
    ], function(e, t, i) {
        "use strict";
        const MouseEvent = e("./mouse_event").MouseEvent;
        const o = e("../lib/event");
        const s = e("../lib/dom");
        t.addTouchListeners = function(e, t) {
            let i;
            let r;
            let a;
            let c;
            let l;
            let h;
            let d;
            let u;
            let f;
            let g = "scroll";
            let p = 0;
            let m = 0;
            let b = 0;
            let v = 0;
            function w() {
                const e = window.navigator && window.navigator.clipboard;
                let i = false;
                const onclick = function(n) {
                    let o;
                    let r;
                    const a = n.target.getAttribute("action");
                    if (a == "more" || !i) {
                        i = !i;
                        o = t.getCopyText();
                        r = t.session.getUndoManager().hasUndo();
                        return void f.replaceChild(s.buildDom(i ? [
                            "span",
                            !o && [
                                "span",
                                {
                                    class: "ace_mobile-button",
                                    action: "selectall"
                                },
                                "Select All"
                            ],
                            o && [
                                "span",
                                {
                                    class: "ace_mobile-button",
                                    action: "copy"
                                },
                                "Copy"
                            ],
                            o && [
                                "span",
                                {
                                    class: "ace_mobile-button",
                                    action: "cut"
                                },
                                "Cut"
                            ],
                            e && [
                                "span",
                                {
                                    class: "ace_mobile-button",
                                    action: "paste"
                                },
                                "Paste"
                            ],
                            r && [
                                "span",
                                {
                                    class: "ace_mobile-button",
                                    action: "undo"
                                },
                                "Undo"
                            ],
                            [
                                "span",
                                {
                                    class: "ace_mobile-button",
                                    action: "find"
                                },
                                "Find"
                            ],
                            [
                                "span",
                                {
                                    class: "ace_mobile-button",
                                    action: "openCommandPallete"
                                },
                                "Pallete"
                            ]
                        ] : [
                            "span"
                        ]), f.firstChild);
                    }
                    if (a == "paste") {
                        e.readText().then((e)=>{
                            t.execCommand(a, e);
                        });
                    } else if (a) {
                        if (!(a != "cut" && a != "copy")) {
                            if (e) {
                                e.writeText(t.getCopyText());
                            } else {
                                document.execCommand("copy");
                            }
                        }
                        t.execCommand(a);
                    }
                    f.firstChild.style.display = "none";
                    i = false;
                    if (a != "openCommandPallete") {
                        t.focus();
                    }
                };
                f = s.buildDom([
                    "div",
                    {
                        class: "ace_mobile-menu",
                        ontouchstart: function(e) {
                            g = "menu";
                            e.stopPropagation();
                            e.preventDefault();
                            t.textInput.focus();
                        },
                        ontouchend: function(e) {
                            e.stopPropagation();
                            e.preventDefault();
                            onclick(e);
                        },
                        onclick
                    },
                    [
                        "span"
                    ],
                    [
                        "span",
                        {
                            class: "ace_mobile-button",
                            action: "more"
                        },
                        "..."
                    ]
                ], t.container);
            }
            function x() {
                if (!f) {
                    w();
                }
                const cursor = t.selection.cursor;
                const i = t.renderer.textToScreenCoordinates(cursor.row, cursor.column);
                const pageX = t.renderer.textToScreenCoordinates(0, 0).pageX;
                const scrollLeft = t.renderer.scrollLeft;
                const s = t.container.getBoundingClientRect();
                f.style.top = `${i.pageY - s.top - 3}px`;
                if (i.pageX - s.left < s.width - 70) {
                    f.style.left = "";
                    f.style.right = "10px";
                } else {
                    f.style.right = "";
                    f.style.left = `${pageX + scrollLeft - s.left}px`;
                }
                f.style.display = "";
                f.firstChild.style.display = "none";
                t.on("input", y);
            }
            function y(e) {
                if (f) {
                    f.style.display = "none";
                }
                t.off("input", y);
            }
            function $() {
                l = null;
                clearTimeout(l);
                const e = t.selection.getRange();
                const i = e.contains(d.row, d.column);
                if (!(!e.isEmpty() && i)) {
                    t.selection.moveToPosition(d);
                    t.selection.selectWord();
                }
                g = "wait";
                x();
            }
            o.addListener(e, "contextmenu", function(e) {
                if (u) {
                    t.textInput.getElement().focus();
                }
            }, t);
            o.addListener(e, "touchstart", function(e) {
                const e_touches = e.touches;
                if (l || e_touches.length > 1) {
                    clearTimeout(l);
                    l = null;
                    a = -1;
                    return void (g = "zoom");
                }
                u = t.$mouseHandler.isMousePressed = true;
                const lineHeight = t.renderer.layerConfig.lineHeight;
                const lineHeight_1 = t.renderer.layerConfig.lineHeight;
                const e_timeStamp = e.timeStamp;
                c = e_timeStamp;
                const w = e_touches[0];
                const { clientX, clientY } = w;
                if (Math.abs(i - clientX) + Math.abs(r - clientY) > lineHeight) {
                    a = -1;
                }
                i = e.clientX = clientX;
                r = e.clientY = clientY;
                v = 0;
                b = 0;
                const S = new MouseEvent(e, t);
                d = S.getDocumentPosition();
                if (e_timeStamp - a < 500 && e_touches.length == 1 && !p) {
                    m++;
                    e.preventDefault();
                    e.button = 0;
                    (()=>{
                        l = null;
                        clearTimeout(l);
                        t.selection.moveToPosition(d);
                        const e = m >= 2 ? t.selection.getLineRange(d.row) : t.session.getBracketRange(d);
                        if (e && !e.isEmpty()) {
                            t.selection.setRange(e);
                        } else {
                            t.selection.selectWord();
                        }
                        g = "wait";
                    })();
                } else {
                    m = 0;
                    const C = t.selection.cursor;
                    const k = t.selection.isEmpty() ? C : t.selection.anchor;
                    const M = t.renderer.$cursorLayer.getPixelPosition(C, true);
                    const A = t.renderer.$cursorLayer.getPixelPosition(k, true);
                    const L = t.renderer.scroller.getBoundingClientRect();
                    const R = t.renderer.layerConfig.offset;
                    const _ = t.renderer.scrollLeft;
                    const E = (e, t)=>(e /= lineHeight_1) * e + (t = t / lineHeight - 0.75) * t;
                    if (e.clientX < L.left) {
                        return void (g = "zoom");
                    }
                    const T = E(e.clientX - L.left - M.left + _, e.clientY - L.top - M.top + R);
                    const O = E(e.clientX - L.left - A.left + _, e.clientY - L.top - A.top + R);
                    if (T < 3.5 && O < 3.5) {
                        g = T > O ? "cursor" : "anchor";
                    }
                    g = O < 3.5 ? "anchor" : T < 3.5 ? "cursor" : "scroll";
                    l = setTimeout($, 450);
                }
                a = e_timeStamp;
            }, t);
            o.addListener(e, "touchend", function(e) {
                u = t.$mouseHandler.isMousePressed = false;
                if (h) {
                    clearInterval(h);
                }
                if (g == "zoom") {
                    g = "";
                    p = 0;
                } else if (l) {
                    t.selection.moveToPosition(d);
                    p = 0;
                    x();
                } else if (g == "scroll") {
                    p += 60;
                    h = setInterval(()=>{
                        if (p-- <= 0) {
                            clearInterval(h);
                            h = null;
                        }
                        if (Math.abs(b) < 0.01) {
                            b = 0;
                        }
                        if (Math.abs(v) < 0.01) {
                            v = 0;
                        }
                        if (p < 20) {
                            b *= 0.9;
                        }
                        if (p < 20) {
                            v *= 0.9;
                        }
                        const e = t.session.getScrollTop();
                        t.renderer.scrollBy(10 * b, 10 * v);
                        if (e == t.session.getScrollTop()) {
                            p = 0;
                        }
                    }, 10);
                    y();
                } else {
                    x();
                }
                clearTimeout(l);
                l = null;
            }, t);
            o.addListener(e, "touchmove", function(e) {
                if (l) {
                    clearTimeout(l);
                    l = null;
                }
                const e_touches = e.touches;
                if (!(e_touches.length > 1 || g == "zoom")) {
                    const s = e_touches[0];
                    let a = i - s.clientX;
                    let h = r - s.clientY;
                    if (g == "wait") {
                        if (!(a * a + h * h > 4)) {
                            return e.preventDefault();
                        }
                        g = "cursor";
                    }
                    i = s.clientX;
                    r = s.clientY;
                    e.clientX = s.clientX;
                    e.clientY = s.clientY;
                    const d = e.timeStamp;
                    const u = d - c;
                    c = d;
                    if (g == "scroll") {
                        const f = new MouseEvent(e, t);
                        f.speed = 1;
                        f.wheelX = a;
                        f.wheelY = h;
                        if (10 * Math.abs(a) < Math.abs(h)) {
                            a = 0;
                        }
                        if (10 * Math.abs(h) < Math.abs(a)) {
                            h = 0;
                        }
                        if (u != 0) {
                            b = a / u;
                            v = h / u;
                        }
                        t._emit("mousewheel", f);
                        if (!f.propagationStopped) {
                            v = 0;
                            b = 0;
                        }
                    } else {
                        const p = new MouseEvent(e, t).getDocumentPosition();
                        if (g == "cursor") {
                            t.selection.moveCursorToPosition(p);
                        } else if (g == "anchor") {
                            t.selection.setSelectionAnchor(p.row, p.column);
                        }
                        t.renderer.scrollCursorIntoView(p);
                        e.preventDefault();
                    }
                }
            }, t);
        };
    });
    ace.define("ace/lib/net", [
        "require",
        "exports",
        "module",
        "ace/lib/dom"
    ], function(e, t, i) {
        "use strict";
        const n = e("./dom");
        t.get = function(e, t) {
            const xmlHttpRequest = new XMLHttpRequest;
            xmlHttpRequest.open("GET", e, true);
            xmlHttpRequest.onreadystatechange = function() {
                if (xmlHttpRequest.readyState === 4) {
                    t(xmlHttpRequest.responseText);
                }
            };
            xmlHttpRequest.send(null);
        };
        t.loadScript = function(e, t) {
            const i = n.getDocumentHead();
            let o = document.createElement("script");
            o.src = e;
            i.appendChild(o);
            o.onload = o.onreadystatechange = function(e, i) {
                if (!(!i && o.readyState && o.readyState != "loaded" && o.readyState != "complete")) {
                    o = o.onload = o.onreadystatechange = null;
                    if (!i) {
                        t();
                    }
                }
            };
        };
        t.qualifyURL = function(e) {
            const aElement = document.createElement("a");
            aElement.href = e;
            return aElement.href;
        };
    });
    ace.define("ace/lib/event_emitter", [
        "require",
        "exports",
        "module"
    ], function(e, t, i) {
        "use strict";
        const n = {};
        const o = function() {
            this.propagationStopped = true;
        };
        const s = function() {
            this.defaultPrevented = true;
        };
        n._emit = n._dispatchEvent = function(e, t) {
            if (!this._eventRegistry) {
                this._eventRegistry = {};
            }
            if (!this._defaultHandlers) {
                this._defaultHandlers = {};
            }
            let i = this._eventRegistry[e] || [];
            const n = this._defaultHandlers[e];
            if (i.length || n) {
                if (!(typeof t === "object" && t)) {
                    t = {};
                }
                if (!t.type) {
                    t.type = e;
                }
                if (!t.stopPropagation) {
                    t.stopPropagation = o;
                }
                if (!t.preventDefault) {
                    t.preventDefault = s;
                }
                i = i.slice();
                for(let r = 0; r < i.length && (i[r](t, this), !t.propagationStopped); r++);
                if (n && !t.defaultPrevented) {
                    return n(t, this);
                }
                return undefined;
            }
        };
        n._signal = function(e, t) {
            let i = (this._eventRegistry || {})[e];
            if (i) {
                i = i.slice();
                for(let n = 0; n < i.length; n++){
                    i[n](t, this);
                }
            }
        };
        n.once = function(e, t) {
            const _this = this;
            this.on(e, function n() {
                _this.off(e, n);
                t.apply(null, arguments);
            });
            if (!t) {
                return new Promise((resolve)=>{
                    t = resolve;
                });
            }
        };
        n.setDefaultHandler = function(e, t) {
            let _defaultHandlers = this._defaultHandlers;
            if (!_defaultHandlers) {
                _defaultHandlers = this._defaultHandlers = {
                    _disabled_: {}
                };
            }
            if (_defaultHandlers[e]) {
                const n = _defaultHandlers[e];
                let o = _defaultHandlers._disabled_[e];
                if (!o) {
                    _defaultHandlers._disabled_[e] = o = [];
                }
                o.push(n);
                const s = o.indexOf(t);
                if (s != -1) {
                    o.splice(s, 1);
                }
            }
            _defaultHandlers[e] = t;
        };
        n.removeDefaultHandler = function(e, t) {
            const _defaultHandlers = this._defaultHandlers;
            if (_defaultHandlers) {
                const n = _defaultHandlers._disabled_[e];
                if (_defaultHandlers[e] == t) {
                    if (n) {
                        this.setDefaultHandler(e, n.pop());
                    }
                } else if (n) {
                    const o = n.indexOf(t);
                    if (o != -1) {
                        n.splice(o, 1);
                    }
                }
            }
        };
        n.on = n.addEventListener = function(e, t, i) {
            this._eventRegistry = this._eventRegistry || {};
            let n = this._eventRegistry[e];
            if (!n) {
                n = this._eventRegistry[e] = [];
            }
            if (n.indexOf(t) == -1) {
                n[i ? "unshift" : "push"](t);
            }
            return t;
        };
        n.off = n.removeListener = n.removeEventListener = function(e, t) {
            this._eventRegistry = this._eventRegistry || {};
            const i = this._eventRegistry[e];
            if (i) {
                const n = i.indexOf(t);
                if (n !== -1) {
                    i.splice(n, 1);
                }
            }
        };
        n.removeAllListeners = function(e) {
            if (!e) {
                this._eventRegistry = this._defaultHandlers = undefined;
            }
            if (this._eventRegistry) {
                this._eventRegistry[e] = undefined;
            }
            if (this._defaultHandlers) {
                this._defaultHandlers[e] = undefined;
            }
        };
        t.EventEmitter = n;
    });
    ace.define("ace/lib/app_config", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/lib/event_emitter"
    ], function(e, t, i) {
        const n = e("./oop");
        const EventEmitter = e("./event_emitter").EventEmitter;
        const s = {
            setOptions: function(e) {
                Object.keys(e).forEach(function(t) {
                    this.setOption(t, e[t]);
                }, this);
            },
            getOptions: function(e) {
                let t = {};
                if (e) {
                    if (!Array.isArray(e)) {
                        t = e;
                        e = Object.keys(t);
                    }
                } else {
                    const i = this.$options;
                    e = Object.keys(i).filter((e)=>!i[e].hidden);
                }
                e.forEach(function(e) {
                    t[e] = this.getOption(e);
                }, this);
                return t;
            },
            setOption: function(e, t) {
                if (this[`\$${e}`] !== t) {
                    const i = this.$options[e];
                    if (!i) {
                        return r(`misspelled option "${e}"`);
                    }
                    if (i.forwardTo) {
                        return this[i.forwardTo] && this[i.forwardTo].setOption(e, t);
                    }
                    if (!i.handlesSet) {
                        this[`\$${e}`] = t;
                    }
                    if (i && i.set) {
                        i.set.call(this, t);
                    }
                }
            },
            getOption: function(e) {
                const t = this.$options[e];
                if (t) {
                    if (t.forwardTo) {
                        return this[t.forwardTo] && this[t.forwardTo].getOption(e);
                    }
                    if (t && t.get) {
                        return t.get.call(this);
                    }
                    return this[`\$${e}`];
                }
                return r(`misspelled option "${e}"`);
            }
        };
        function r(e) {
            if (typeof console !== "undefined" && console.warn) {
                console.warn(...arguments);
            }
        }
        function a(e, t) {
            const i = new Error(e);
            i.data = t;
            if (typeof console === "object" && console.error) {
                console.error(i);
            }
            setTimeout(()=>{
                throw i;
            });
        }
        const c = function() {
            this.$defaultOptions = {};
        };
        (function() {
            n.implement(this, EventEmitter);
            this.defineOptions = function(e, t, i) {
                if (!e.$options) {
                    this.$defaultOptions[t] = e.$options = {};
                }
                Object.keys(i).forEach((t)=>{
                    let forwardTo = i[t];
                    if (typeof forwardTo === "string") {
                        forwardTo = {
                            forwardTo
                        };
                    }
                    if (!forwardTo.name) {
                        forwardTo.name = t;
                    }
                    e.$options[forwardTo.name] = forwardTo;
                    if ("initialValue" in forwardTo) {
                        e[`\$${forwardTo.name}`] = forwardTo.initialValue;
                    }
                });
                n.implement(e, s);
                return this;
            };
            this.resetOptions = function(e) {
                Object.keys(e.$options).forEach((t)=>{
                    const i = e.$options[t];
                    if ("value" in i) {
                        e.setOption(t, i.value);
                    }
                });
            };
            this.setDefaultValue = function(e, t, i) {
                if (!e) {
                    for(e in this.$defaultOptions){
                        if (this.$defaultOptions[e][t]) {
                            break;
                        }
                    }
                    if (!this.$defaultOptions[e][t]) {
                        return false;
                    }
                }
                const n = this.$defaultOptions[e] || (this.$defaultOptions[e] = {});
                if (n[t]) {
                    if (n.forwardTo) {
                        this.setDefaultValue(n.forwardTo, t, i);
                    } else {
                        n[t].value = i;
                    }
                }
            };
            this.setDefaultValues = function(e, t) {
                Object.keys(t).forEach(function(i) {
                    this.setDefaultValue(e, i, t[i]);
                }, this);
            };
            this.warn = r;
            this.reportError = a;
        }).call(c.prototype);
        t.AppConfig = c;
    });
    ace.define("ace/config", [
        "require",
        "exports",
        "module",
        "ace/lib/lang",
        "ace/lib/oop",
        "ace/lib/net",
        "ace/lib/app_config"
    ], function(e, t, n) {
        const o = e("./lib/lang");
        e("./lib/oop");
        const s = e("./lib/net");
        const AppConfig = e("./lib/app_config").AppConfig;
        n.exports = t = new AppConfig;
        const a = function() {
            return this || typeof window !== "undefined" && window;
        }();
        const c = {
            packaged: false,
            workerPath: null,
            modePath: null,
            themePath: null,
            basePath: "",
            suffix: ".js",
            $moduleUrls: {},
            loadWorkerFromBlob: true,
            sharedPopups: false
        };
        t.get = function(e) {
            if (!c.hasOwnProperty(e)) {
                throw new Error(`Unknown config key: ${e}`);
            }
            return c[e];
        };
        t.set = function(e, t) {
            if (c.hasOwnProperty(e)) {
                c[e] = t;
            } else if (this.setDefaultValue("", e, t) == 0) {
                throw new Error(`Unknown config key: ${e}`);
            }
        };
        t.all = function() {
            return o.copyObject(c);
        };
        t.$modes = {};
        t.moduleUrl = function(e, t) {
            if (c.$moduleUrls[e]) {
                return c.$moduleUrls[e];
            }
            const i = e.split("/");
            let n = (t = t || i[i.length - 2] || "") == "snippets" ? "/" : "-";
            let o = i[i.length - 1];
            if (t == "worker" && n == "-") {
                const s = new RegExp(`^${t}[\\-_]|[\\-_]${t}\$`, "g");
                o = o.replace(s, "");
            }
            if ((!o || o == t) && i.length > 1) {
                o = i[i.length - 2];
            }
            let r = c[`${t}Path`];
            if (r == null) {
                r = c.basePath;
            } else if (n == "/") {
                n = "";
                t = "";
            }
            if (r && r.slice(-1) != "/") {
                r += "/";
            }
            return r + t + n + o + this.get("suffix");
        };
        t.setModuleUrl = function(e, t) {
            return c.$moduleUrls[e] = t;
        };
        t.$loading = {};
        t.loadModule = function(i, n) {
            let o;
            let r;
            if (Array.isArray(i)) {
                r = i[0];
                i = i[1];
            }
            try {
                o = e(i);
            } catch (e) {}
            if (o && !t.$loading[i]) {
                return n && n(o);
            }
            if (!t.$loading[i]) {
                t.$loading[i] = [];
            }
            t.$loading[i].push(n);
            if (!(t.$loading[i].length > 1)) {
                const a = function() {
                    e([
                        i
                    ], function(e) {
                        t._emit("load.module", {
                            name: i,
                            module: e
                        });
                        const n = t.$loading[i];
                        t.$loading[i] = null;
                        n.forEach((t)=>{
                            if (t) {
                                t(e);
                            }
                        });
                    });
                };
                if (!t.get("packaged")) {
                    return a();
                }
                s.loadScript(t.moduleUrl(i, r), a);
                l();
            }
        };
        var l = function() {
            if (!(c.basePath || c.workerPath || c.modePath || c.themePath || Object.keys(c.$moduleUrls).length)) {
                console.error("Unable to infer path to ace from script src,", "use ace.config.set('basePath', 'path') to enable dynamic loading of modes and themes", "or with webpack use ace/webpack-resolver");
                l = function() {};
            }
        };
        function h(o) {
            if (a && a.document) {
                c.packaged = o || e.packaged || n.packaged || a.define && require("unpacked/module-1269.js").default.packaged;
                let s;
                const r = {};
                let l = "";
                const h = document.currentScript || document._currentScript;
                for(let d = (h && h.ownerDocument || document).getElementsByTagName("script"), u = 0; u < d.length; u++){
                    const f = d[u];
                    const g = f.src || f.getAttribute("src");
                    if (g) {
                        const p = f.attributes;
                        for(let m = 0, b = p.length; m < b; m++){
                            const v = p[m];
                            if (v.name.indexOf("data-ace-") === 0) {
                                r[s = v.name.replace(/^data-ace-/, ""), s.replace(/-(.)/g, (e, t)=>t.toUpperCase())] = v.value;
                            }
                        }
                        const w = g.match(/^(.*)\/ace(\-\w+)?\.js(\?|$)/);
                        if (w) {
                            l = w[1];
                        }
                    }
                }
                if (l) {
                    r.base = r.base || l;
                    r.packaged = true;
                }
                r.basePath = r.base;
                r.workerPath = r.workerPath || r.base;
                r.modePath = r.modePath || r.base;
                r.themePath = r.themePath || r.base;
                delete r.base;
                for(const x in r){
                    if (r[x] !== undefined) {
                        t.set(x, r[x]);
                    }
                }
            }
        }
        h(true);
        t.init = h;
        t.version = "1.4.12";
    });
    ace.define("ace/mouse/mouse_handler", [
        "require",
        "exports",
        "module",
        "ace/lib/event",
        "ace/lib/useragent",
        "ace/mouse/default_handlers",
        "ace/mouse/default_gutter_handler",
        "ace/mouse/mouse_event",
        "ace/mouse/dragdrop_handler",
        "ace/mouse/touch_handler",
        "ace/config"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/event");
        const o = e("../lib/useragent");
        const DefaultHandlers = e("./default_handlers").DefaultHandlers;
        const GutterHandler = e("./default_gutter_handler").GutterHandler;
        const MouseEvent = e("./mouse_event").MouseEvent;
        const DragdropHandler = e("./dragdrop_handler").DragdropHandler;
        const addTouchListeners = e("./touch_handler").addTouchListeners;
        const h = e("../config");
        const d = function(e) {
            const _this = this;
            this.editor = e;
            new DefaultHandlers(this);
            new GutterHandler(this);
            new DragdropHandler(this);
            const i = function(t) {
                if (!document.hasFocus || !document.hasFocus() || !e.isFocused() && document.activeElement == (e.textInput && e.textInput.getElement())) {
                    window.focus();
                }
                e.focus();
            };
            const a = e.renderer.getMouseEventTarget();
            n.addListener(a, "click", this.onMouseEvent.bind(this, "click"), e);
            n.addListener(a, "mousemove", this.onMouseMove.bind(this, "mousemove"), e);
            n.addMultiMouseDownListener([
                a,
                e.renderer.scrollBarV && e.renderer.scrollBarV.inner,
                e.renderer.scrollBarH && e.renderer.scrollBarH.inner,
                e.textInput && e.textInput.getElement()
            ].filter(Boolean), [
                400,
                300,
                250
            ], this, "onMouseEvent", e);
            n.addMouseWheelListener(e.container, this.onMouseWheel.bind(this, "mousewheel"), e);
            addTouchListeners(e.container, e);
            const $gutter = e.renderer.$gutter;
            n.addListener($gutter, "mousedown", this.onMouseEvent.bind(this, "guttermousedown"), e);
            n.addListener($gutter, "click", this.onMouseEvent.bind(this, "gutterclick"), e);
            n.addListener($gutter, "dblclick", this.onMouseEvent.bind(this, "gutterdblclick"), e);
            n.addListener($gutter, "mousemove", this.onMouseEvent.bind(this, "guttermousemove"), e);
            n.addListener(a, "mousedown", i, e);
            n.addListener($gutter, "mousedown", i, e);
            if (o.isIE && e.renderer.scrollBarV) {
                n.addListener(e.renderer.scrollBarV.element, "mousedown", i, e);
                n.addListener(e.renderer.scrollBarH.element, "mousedown", i, e);
            }
            e.on("mousemove", function(i) {
                if (!_this.state && !_this.$dragDelay && _this.$dragEnabled) {
                    const n = e.renderer.screenToTextCoordinates(i.x, i.y);
                    const o = e.session.selection.getRange();
                    const s = e.renderer;
                    if (!o.isEmpty() && o.insideStart(n.row, n.column)) {
                        s.setCursorStyle("default");
                    } else {
                        s.setCursorStyle("");
                    }
                }
            }, e);
        };
        (function() {
            this.onMouseEvent = function(e, t) {
                this.editor._emit(e, new MouseEvent(t, this.editor));
            };
            this.onMouseMove = function(e, t) {
                const i = this.editor._eventRegistry && this.editor._eventRegistry.mousemove;
                if (i && i.length) {
                    this.editor._emit(e, new MouseEvent(t, this.editor));
                }
            };
            this.onMouseWheel = function(e, t) {
                const i = new MouseEvent(t, this.editor);
                i.speed = 2 * this.$scrollSpeed;
                i.wheelX = t.wheelX;
                i.wheelY = t.wheelY;
                this.editor._emit(e, i);
            };
            this.setState = function(e) {
                this.state = e;
            };
            this.captureMouse = function(e, t) {
                this.x = e.x;
                this.y = e.y;
                this.isMousePressed = true;
                const editor = this.editor;
                const renderer = this.editor.renderer;
                renderer.$isMousePressed = true;
                const _this = this;
                const c = function(e) {
                    if (e) {
                        if (o.isWebKit && !e.which && _this.releaseMouse) {
                            return _this.releaseMouse();
                        }
                        _this.x = e.clientX;
                        _this.y = e.clientY;
                        if (t) {
                            t(e);
                        }
                        _this.mouseEvent = new MouseEvent(e, _this.editor);
                        _this.$mouseMoved = true;
                    }
                };
                const l = function(e) {
                    editor.off("beforeEndOperation", d);
                    clearInterval(u);
                    h();
                    if (_this[`${_this.state}End`]) {
                        _this[`${_this.state}End`](e);
                    }
                    _this.state = "";
                    _this.isMousePressed = renderer.$isMousePressed = false;
                    if (renderer.$keepTextAreaAtCursor) {
                        renderer.$moveTextAreaToCursor();
                    }
                    _this.$onCaptureMouseMove = _this.releaseMouse = null;
                    if (e) {
                        _this.onMouseEvent("mouseup", e);
                    }
                    editor.endOperation();
                };
                var h = function() {
                    if (_this[_this.state]) {
                        _this[_this.state]();
                    }
                    _this.$mouseMoved = false;
                };
                if (o.isOldIE && e.domEvent.type == "dblclick") {
                    return setTimeout(()=>{
                        l(e);
                    });
                }
                var d = function(e) {
                    if (_this.releaseMouse && editor.curOp.command.name && editor.curOp.selectionChanged) {
                        if (_this[`${_this.state}End`]) {
                            _this[`${_this.state}End`]();
                        }
                        _this.state = "";
                        _this.releaseMouse();
                    }
                };
                editor.on("beforeEndOperation", d);
                editor.startOperation({
                    command: {
                        name: "mouse"
                    }
                });
                _this.$onCaptureMouseMove = c;
                _this.releaseMouse = n.capture(this.editor.container, c, l);
                var u = setInterval(h, 20);
            };
            this.releaseMouse = null;
            this.cancelContextMenu = function() {
                var e = (function(t) {
                    if (!(t && t.domEvent && t.domEvent.type != "contextmenu")) {
                        this.editor.off("nativecontextmenu", e);
                        if (t && t.domEvent) {
                            n.stopEvent(t.domEvent);
                        }
                    }
                }).bind(this);
                setTimeout(e, 10);
                this.editor.on("nativecontextmenu", e);
            };
            this.destroy = function() {
                if (this.releaseMouse) {
                    this.releaseMouse();
                }
            };
        }).call(d.prototype);
        h.defineOptions(d.prototype, "mouseHandler", {
            scrollSpeed: {
                initialValue: 2
            },
            dragDelay: {
                initialValue: o.isMac ? 150 : 0
            },
            dragEnabled: {
                initialValue: true
            },
            focusTimeout: {
                initialValue: 0
            },
            tooltipFollowsMouse: {
                initialValue: true
            }
        });
        t.MouseHandler = d;
    });
    ace.define("ace/mouse/fold_handler", [
        "require",
        "exports",
        "module",
        "ace/lib/dom"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/dom");
        t.FoldHandler = function(e) {
            e.on("click", function(t) {
                const i = t.getDocumentPosition();
                const e_session = e.session;
                const s = e_session.getFoldAt(i.row, i.column, 1);
                if (s) {
                    if (t.getAccelKey()) {
                        e_session.removeFold(s);
                    } else {
                        e_session.expandFold(s);
                    }
                    t.stop();
                }
                const r = t.domEvent && t.domEvent.target;
                if (r && n.hasCssClass(r, "ace_inline_button") && n.hasCssClass(r, "ace_toggle_wrap")) {
                    e_session.setOption("wrap", !e_session.getUseWrapMode());
                    e.renderer.scrollCursorIntoView();
                }
            });
            e.on("gutterclick", function(t) {
                if (e.renderer.$gutterLayer.getRegion(t) == "foldWidgets") {
                    const i = t.getDocumentPosition().row;
                    const n = e.session;
                    if (n.foldWidgets && n.foldWidgets[i]) {
                        e.session.onFoldWidgetClick(i, t);
                    }
                    if (!e.isFocused()) {
                        e.focus();
                    }
                    t.stop();
                }
            });
            e.on("gutterdblclick", function(t) {
                if (e.renderer.$gutterLayer.getRegion(t) == "foldWidgets") {
                    let i = t.getDocumentPosition().row;
                    const n = e.session;
                    const o = n.getParentFoldRangeData(i, true);
                    const s = o.range || o.firstRange;
                    if (s) {
                        i = s.start.row;
                        const r = n.getFoldAt(i, n.getLine(i).length, 1);
                        if (r) {
                            n.removeFold(r);
                        } else {
                            n.addFold("...", s);
                            e.renderer.scrollCursorIntoView({
                                row: s.start.row,
                                column: 0
                            });
                        }
                    }
                    t.stop();
                }
            });
        };
    });
    ace.define("ace/keyboard/keybinding", [
        "require",
        "exports",
        "module",
        "ace/lib/keys",
        "ace/lib/event"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/keys");
        const o = e("../lib/event");
        const s = function(e) {
            this.$editor = e;
            this.$data = {
                editor: e
            };
            this.$handlers = [];
            this.setDefaultHandler(e.commands);
        };
        (function() {
            this.setDefaultHandler = function(e) {
                this.removeKeyboardHandler(this.$defaultHandler);
                this.$defaultHandler = e;
                this.addKeyboardHandler(e, 0);
            };
            this.setKeyboardHandler = function(e) {
                const $handlers = this.$handlers;
                if ($handlers[$handlers.length - 1] != e) {
                    while($handlers[$handlers.length - 1] && $handlers[$handlers.length - 1] != this.$defaultHandler){
                        this.removeKeyboardHandler($handlers[$handlers.length - 1]);
                    }
                    this.addKeyboardHandler(e, 1);
                }
            };
            this.addKeyboardHandler = function(e, t) {
                if (e) {
                    if (!(typeof e !== "function" || e.handleKeyboard)) {
                        e.handleKeyboard = e;
                    }
                    const i = this.$handlers.indexOf(e);
                    if (i != -1) {
                        this.$handlers.splice(i, 1);
                    }
                    if (t == null) {
                        this.$handlers.push(e);
                    } else {
                        this.$handlers.splice(t, 0, e);
                    }
                    if (i == -1 && e.attach) {
                        e.attach(this.$editor);
                    }
                }
            };
            this.removeKeyboardHandler = function(e) {
                const t = this.$handlers.indexOf(e);
                return t != -1 && (this.$handlers.splice(t, 1), e.detach && e.detach(this.$editor), true);
            };
            this.getKeyboardHandler = function() {
                return this.$handlers[this.$handlers.length - 1];
            };
            this.getStatusText = function() {
                const $data = this.$data;
                const e_editor = $data.editor;
                return this.$handlers.map((i)=>i.getStatusText && i.getStatusText(e_editor, $data) || "").filter(Boolean).join(" ");
            };
            this.$callKeyboardHandlers = function(e, t, i, n) {
                for(var s, r = false, a = this.$editor.commands, c = this.$handlers.length; c-- && !((s = this.$handlers[c].handleKeyboard(this.$data, e, t, i, n)) && s.command && ((r = s.command == "null" || a.exec(s.command, this.$editor, s.args, n)) && n && e != -1 && s.passEvent != 1 && s.command.passEvent != 1 && o.stopEvent(n), r)););
                if (!(r || e != -1)) {
                    s = {
                        command: "insertstring"
                    };
                    r = a.exec("insertstring", this.$editor, t);
                }
                if (r && this.$editor._signal) {
                    this.$editor._signal("keyboardActivity", s);
                }
                return r;
            };
            this.onCommandKey = function(e, t, i) {
                const o = n.keyCodeToString(i);
                return this.$callKeyboardHandlers(t, o, i, e);
            };
            this.onTextInput = function(e) {
                return this.$callKeyboardHandlers(-1, e);
            };
        }).call(s.prototype);
        t.KeyBinding = s;
    });
    ace.define("ace/lib/bidiutil", [
        "require",
        "exports",
        "module"
    ], function(e, t, i) {
        "use strict";
        let n = 0;
        let o = 0;
        let s = false;
        let r = false;
        let a = false;
        const c = [
            [
                0,
                3,
                0,
                1,
                0,
                0,
                0
            ],
            [
                0,
                3,
                0,
                1,
                2,
                2,
                0
            ],
            [
                0,
                3,
                0,
                17,
                2,
                0,
                1
            ],
            [
                0,
                3,
                5,
                5,
                4,
                1,
                0
            ],
            [
                0,
                3,
                21,
                21,
                4,
                0,
                1
            ],
            [
                0,
                3,
                5,
                5,
                4,
                2,
                0
            ]
        ];
        const l = [
            [
                2,
                0,
                1,
                1,
                0,
                1,
                0
            ],
            [
                2,
                0,
                1,
                1,
                0,
                2,
                0
            ],
            [
                2,
                0,
                2,
                1,
                3,
                2,
                0
            ],
            [
                2,
                0,
                2,
                33,
                3,
                1,
                1
            ]
        ];
        const h = [
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            6,
            5,
            6,
            8,
            5,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            5,
            5,
            5,
            6,
            8,
            4,
            4,
            11,
            11,
            11,
            4,
            4,
            4,
            4,
            4,
            10,
            9,
            10,
            9,
            9,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            9,
            4,
            4,
            4,
            4,
            4,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            4,
            4,
            4,
            4,
            4,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            4,
            4,
            4,
            4,
            18,
            18,
            18,
            18,
            18,
            18,
            5,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            18,
            9,
            4,
            11,
            11,
            11,
            11,
            4,
            4,
            4,
            4,
            0,
            4,
            4,
            18,
            4,
            4,
            11,
            11,
            2,
            2,
            4,
            0,
            4,
            4,
            4,
            2,
            0,
            4,
            4,
            4,
            4,
            4
        ];
        const d = [
            8,
            8,
            8,
            8,
            8,
            8,
            8,
            8,
            8,
            8,
            8,
            18,
            18,
            18,
            0,
            1,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            8,
            5,
            13,
            14,
            15,
            16,
            17,
            9,
            11,
            11,
            11,
            11,
            11,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            9,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            4,
            8
        ];
        function u(e, t, logicalFromVisual) {
            if (!(o < e)) {
                if (e != 1 || n != 1 || r) {
                    let s;
                    let a;
                    let c;
                    let l;
                    for(let h = logicalFromVisual.length, d = 0; d < h;){
                        if (t[d] >= e) {
                            for(s = d + 1; s < h && t[s] >= e;){
                                s++;
                            }
                            a = d;
                            for(c = s - 1; a < c; a++, c--){
                                l = logicalFromVisual[a];
                                logicalFromVisual[a] = logicalFromVisual[c];
                                logicalFromVisual[c] = l;
                            }
                            d = s;
                        }
                        d++;
                    }
                } else {
                    logicalFromVisual.reverse();
                }
            }
        }
        function f(e, t, i, o) {
            let c;
            let l;
            let h;
            let d;
            const u = t[o];
            switch(u){
                case 0:
                case 1:
                    s = false;
                case 4:
                case 3:
                    return u;
                case 2:
                    if (s) {
                        return 3;
                    }
                    return 2;
                case 7:
                    s = true;
                    return 1;
                case 8:
                    return 4;
                case 9:
                    if (o < 1 || o + 1 >= t.length || (c = i[o - 1]) != 2 && c != 3 || (l = t[o + 1]) != 2 && l != 3) {
                        return 4;
                    }
                    if (s) {
                        l = 3;
                    }
                    if (l == c) {
                        return l;
                    }
                    return 4;
                case 10:
                    if ((c = o > 0 ? i[o - 1] : 5) == 2 && o + 1 < t.length && t[o + 1] == 2) {
                        return 2;
                    }
                    return 4;
                case 11:
                    if (o > 0 && i[o - 1] == 2) {
                        return 2;
                    }
                    if (s) {
                        return 4;
                    }
                    d = o + 1;
                    for(h = t.length; d < h && t[d] == 11;){
                        d++;
                    }
                    if (d < h && t[d] == 2) {
                        return 2;
                    }
                    return 4;
                case 12:
                    h = t.length;
                    for(d = o + 1; d < h && t[d] == 12;){
                        d++;
                    }
                    if (d < h) {
                        const f = e[o];
                        const g = f >= 1425 && f <= 2303 || f == 64286;
                        c = t[d];
                        if (g && (c == 1 || c == 7)) {
                            return 1;
                        }
                    }
                    if (o < 1 || (c = t[o - 1]) == 5) {
                        return 4;
                    }
                    return i[o - 1];
                case 5:
                    s = false;
                    r = true;
                    return n;
                case 6:
                    a = true;
                    return 4;
                case 13:
                case 14:
                case 16:
                case 17:
                case 15:
                    s = false;
                case 18:
                    return 4;
            }
        }
        function g(e) {
            const t = e.charCodeAt(0);
            const i = t >> 8;
            if (i == 0) {
                if (t > 191) {
                    return 0;
                }
                return h[t];
            }
            if (i == 5) {
                if (/[\u0591-\u05f4]/.test(e)) {
                    return 1;
                }
                return 0;
            }
            if (i == 6) {
                if (/[\u0610-\u061a\u064b-\u065f\u06d6-\u06e4\u06e7-\u06ed]/.test(e)) {
                    return 12;
                }
                if (/[\u0660-\u0669\u066b-\u066c]/.test(e)) {
                    return 3;
                }
                if (t == 1642) {
                    return 11;
                }
                if (/[\u06f0-\u06f9]/.test(e)) {
                    return 2;
                }
                return 7;
            }
            if (i == 32 && t <= 8287) {
                return d[255 & t];
            }
            if (i == 254 && t >= 65136) {
                return 7;
            }
            return 4;
        }
        t.L = 0;
        t.R = 1;
        t.EN = 2;
        t.ON_R = 3;
        t.AN = 4;
        t.R_H = 5;
        t.B = 6;
        t.RLE = 7;
        t.DOT = "·";
        t.doBidiReorder = function(e, i, h) {
            if (e.length < 2) {
                return {};
            }
            const d = e.split("");
            const logicalFromVisual = new Array(d.length);
            const bidiLevels = new Array(d.length);
            const b = [];
            n = h ? 1 : 0;
            ((e, t, i, h)=>{
                const d = n ? l : c;
                let u = null;
                let p = null;
                let m = null;
                let b = 0;
                let v = null;
                let w = -1;
                let x = null;
                let y = null;
                const $ = [];
                if (!h) {
                    x = 0;
                    for(h = []; x < i; x++){
                        h[x] = g(e[x]);
                    }
                }
                o = n;
                s = false;
                r = false;
                a = false;
                for(y = 0; y < i; y++){
                    u = b;
                    $[y] = p = f(e, h, $, y);
                    v = 240 & (b = d[u][p]);
                    b &= 15;
                    t[y] = m = d[b][5];
                    if (v > 0) {
                        if (v == 16) {
                            for(x = w; x < y; x++){
                                t[x] = 1;
                            }
                            w = -1;
                        } else {
                            w = -1;
                        }
                    }
                    if (d[b][6]) {
                        if (w == -1) {
                            w = y;
                        }
                    } else if (w > -1) {
                        for(x = w; x < y; x++){
                            t[x] = m;
                        }
                        w = -1;
                    }
                    if (h[y] == 5) {
                        t[y] = 0;
                    }
                    o |= m;
                }
                if (a) {
                    for(x = 0; x < i; x++){
                        if (h[x] == 6) {
                            t[x] = n;
                            for(let S = x - 1; S >= 0 && h[S] == 8; S--){
                                t[S] = n;
                            }
                        }
                    }
                }
            })(d, b, d.length, i);
            for(var v = 0; v < logicalFromVisual.length; logicalFromVisual[v] = v, v++);
            u(2, b, logicalFromVisual);
            u(1, b, logicalFromVisual);
            for(v = 0; v < logicalFromVisual.length - 1; v++){
                if (i[v] === 3) {
                    b[v] = t.AN;
                } else if (b[v] === 1 && (i[v] > 7 && i[v] < 13 || i[v] === 4 || i[v] === 18)) {
                    b[v] = t.ON_R;
                } else if (v > 0 && d[v - 1] === "ل" && /\u0622|\u0623|\u0625|\u0627/.test(d[v])) {
                    b[v - 1] = b[v] = t.R_H;
                    v++;
                }
            }
            if (d[d.length - 1] === t.DOT) {
                b[d.length - 1] = t.B;
            }
            if (d[0] === "‫") {
                b[0] = t.RLE;
            }
            for(v = 0; v < logicalFromVisual.length; v++){
                bidiLevels[v] = b[logicalFromVisual[v]];
            }
            return {
                logicalFromVisual,
                bidiLevels
            };
        };
        t.hasBidiCharacters = function(e, t) {
            let i = false;
            for(let n = 0; n < e.length; n++){
                t[n] = g(e.charAt(n));
                if (!(i || t[n] != 1 && t[n] != 7 && t[n] != 3)) {
                    i = true;
                }
            }
            return i;
        };
        t.getVisualFromLogicalIdx = function(e, t) {
            for(let i = 0; i < t.logicalFromVisual.length; i++){
                if (t.logicalFromVisual[i] == e) {
                    return i;
                }
            }
            return 0;
        };
    });
    ace.define("ace/bidihandler", [
        "require",
        "exports",
        "module",
        "ace/lib/bidiutil",
        "ace/lib/lang"
    ], function(e, t, i) {
        "use strict";
        const n = e("./lib/bidiutil");
        const o = e("./lib/lang");
        const s = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\u202B]/;
        const r = function(e) {
            this.session = e;
            this.bidiMap = {};
            this.currentRow = null;
            this.bidiUtil = n;
            this.charWidths = [];
            this.EOL = "¬";
            this.showInvisibles = true;
            this.isRtlDir = false;
            this.$isRtl = false;
            this.line = "";
            this.wrapIndent = 0;
            this.EOF = "¶";
            this.RLE = "‫";
            this.contentWidth = 0;
            this.fontMetrics = null;
            this.rtlLineOffset = 0;
            this.wrapOffset = 0;
            this.isMoveLeftOperation = false;
            this.seenBidi = s.test(e.getValue());
        };
        (function() {
            this.isBidiRow = function(e, t, i) {
                return !!this.seenBidi && (e !== this.currentRow && (this.currentRow = e, this.updateRowLine(t, i), this.updateBidiMap()), this.bidiMap.bidiLevels);
            };
            this.onChange = function(e) {
                if (this.seenBidi) {
                    this.currentRow = null;
                } else if (e.action == "insert" && s.test(e.lines.join("\n"))) {
                    this.seenBidi = true;
                    this.currentRow = null;
                }
            };
            this.getDocumentRow = function() {
                let e = 0;
                const $screenRowCache = this.session.$screenRowCache;
                if ($screenRowCache.length) {
                    const i = this.session.$getRowCacheIndex($screenRowCache, this.currentRow);
                    if (i >= 0) {
                        e = this.session.$docRowCache[i];
                    }
                }
                return e;
            };
            this.getSplitIndex = function() {
                let e = 0;
                const $screenRowCache = this.session.$screenRowCache;
                if ($screenRowCache.length) {
                    let i;
                    for(let n = this.session.$getRowCacheIndex($screenRowCache, this.currentRow); this.currentRow - e > 0 && (i = this.session.$getRowCacheIndex($screenRowCache, this.currentRow - e - 1)) === n;){
                        n = i;
                        e++;
                    }
                } else {
                    e = this.currentRow;
                }
                return e;
            };
            this.updateRowLine = function(e = this.getDocumentRow(), t) {
                const i = e === this.session.getLength() - 1 ? this.EOF : this.EOL;
                this.wrapIndent = 0;
                this.line = this.session.getLine(e);
                this.isRtlDir = this.$isRtl || this.line.charAt(0) === this.RLE;
                if (this.session.$useWrapMode) {
                    const s = this.session.$wrapData[e];
                    if (s) {
                        if (t === undefined) {
                            t = this.getSplitIndex();
                        }
                        if (t > 0 && s.length) {
                            this.wrapIndent = s.indent;
                            this.wrapOffset = this.wrapIndent * this.charWidths[n.L];
                            this.line = t < s.length ? this.line.substring(s[t - 1], s[t]) : this.line.substring(s[s.length - 1]);
                        } else {
                            this.line = this.line.substring(0, s[t]);
                        }
                    }
                    if (t == s.length) {
                        this.line += this.showInvisibles ? i : n.DOT;
                    }
                } else {
                    this.line += this.showInvisibles ? i : n.DOT;
                }
                let r;
                const session = this.session;
                let c = 0;
                this.line = this.line.replace(/\t|[\u1100-\u2029, \u202F-\uFFE6]/g, (e, t)=>{
                    if (e === "\t" || session.isFullWidth(e.charCodeAt(0))) {
                        r = e === "\t" ? session.getScreenTabSize(t + c) : 2;
                        c += r - 1;
                        return o.stringRepeat(n.DOT, r);
                    }
                    return e;
                });
                if (this.isRtlDir) {
                    this.fontMetrics.$main.textContent = this.line.charAt(this.line.length - 1) == n.DOT ? this.line.substr(0, this.line.length - 1) : this.line;
                    this.rtlLineOffset = this.contentWidth - this.fontMetrics.$main.getBoundingClientRect().width;
                }
            };
            this.updateBidiMap = function() {
                const e = [];
                if (n.hasBidiCharacters(this.line, e) || this.isRtlDir) {
                    this.bidiMap = n.doBidiReorder(this.line, e, this.isRtlDir);
                } else {
                    this.bidiMap = {};
                }
            };
            this.markAsDirty = function() {
                this.currentRow = null;
            };
            this.updateCharacterWidths = function(e) {
                if (this.characterWidth !== e.$characterSize.width) {
                    this.fontMetrics = e;
                    const t = this.characterWidth = e.$characterSize.width;
                    const i = e.$measureCharWidth("ה");
                    this.charWidths[n.L] = this.charWidths[n.EN] = this.charWidths[n.ON_R] = t;
                    this.charWidths[n.R] = this.charWidths[n.AN] = i;
                    this.charWidths[n.R_H] = 0.45 * i;
                    this.charWidths[n.B] = this.charWidths[n.RLE] = 0;
                    this.currentRow = null;
                }
            };
            this.setShowInvisibles = function(e) {
                this.showInvisibles = e;
                this.currentRow = null;
            };
            this.setEolChar = function(e) {
                this.EOL = e;
            };
            this.setContentWidth = function(e) {
                this.contentWidth = e;
            };
            this.isRtlLine = function(e) {
                return !!this.$isRtl || (e != null ? this.session.getLine(e).charAt(0) == this.RLE : this.isRtlDir);
            };
            this.setRtlDirection = function(e, t) {
                for(let i = e.getCursorPosition(), n = e.selection.getSelectionAnchor().row; n <= i.row; n++){
                    if (t || e.session.getLine(n).charAt(0) !== e.session.$bidiHandler.RLE) {
                        if (t && e.session.getLine(n).charAt(0) !== e.session.$bidiHandler.RLE) {
                            e.session.doc.insert({
                                column: 0,
                                row: n
                            }, e.session.$bidiHandler.RLE);
                        }
                    } else {
                        e.session.doc.removeInLine(n, 0, 1);
                    }
                }
            };
            this.getPosLeft = function(e) {
                e -= this.wrapIndent;
                const t = this.line.charAt(0) === this.RLE ? 1 : 0;
                const i = e > t ? this.session.getOverwrite() ? e : e - 1 : t;
                let o = n.getVisualFromLogicalIdx(i, this.bidiMap);
                const bidiLevels = this.bidiMap.bidiLevels;
                let r = 0;
                if (!this.session.getOverwrite() && e <= t && bidiLevels[o] % 2 != 0) {
                    o++;
                }
                for(let a = 0; a < o; a++){
                    r += this.charWidths[bidiLevels[a]];
                }
                if (!this.session.getOverwrite() && e > t && bidiLevels[o] % 2 == 0) {
                    r += this.charWidths[bidiLevels[o]];
                }
                if (this.wrapIndent) {
                    r += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset;
                }
                if (this.isRtlDir) {
                    r += this.rtlLineOffset;
                }
                return r;
            };
            this.getSelections = function(e, t) {
                let i;
                const bidiMap = this.bidiMap;
                const n_bidiLevels = bidiMap.bidiLevels;
                const s = [];
                let r = 0;
                const a = Math.min(e, t) - this.wrapIndent;
                const c = Math.max(e, t) - this.wrapIndent;
                let l = false;
                let h = false;
                let left = 0;
                if (this.wrapIndent) {
                    r += this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset;
                }
                let u;
                for(var f = 0; f < n_bidiLevels.length; f++){
                    u = bidiMap.logicalFromVisual[f];
                    i = n_bidiLevels[f];
                    if ((l = u >= a && u < c) && !h) {
                        left = r;
                    } else if (!l && h) {
                        s.push({
                            left,
                            width: r - left
                        });
                    }
                    r += this.charWidths[i];
                    h = l;
                }
                if (l && f === n_bidiLevels.length) {
                    s.push({
                        left,
                        width: r - left
                    });
                }
                if (this.isRtlDir) {
                    for(let g = 0; g < s.length; g++){
                        s[g].left += this.rtlLineOffset;
                    }
                }
                return s;
            };
            this.offsetToCol = function(e) {
                if (this.isRtlDir) {
                    e -= this.rtlLineOffset;
                }
                let t = 0;
                e = Math.max(e, 0);
                let i = 0;
                let n = 0;
                const bidiLevels = this.bidiMap.bidiLevels;
                let s = this.charWidths[bidiLevels[n]];
                for(this.wrapIndent && (e -= this.isRtlDir ? -1 * this.wrapOffset : this.wrapOffset); e > i + s / 2;){
                    i += s;
                    if (n === bidiLevels.length - 1) {
                        s = 0;
                        break;
                    }
                    s = this.charWidths[bidiLevels[++n]];
                }
                if (n > 0 && bidiLevels[n - 1] % 2 != 0 && bidiLevels[n] % 2 == 0) {
                    if (e < i) {
                        n--;
                    }
                    t = this.bidiMap.logicalFromVisual[n];
                } else if (n > 0 && bidiLevels[n - 1] % 2 == 0 && bidiLevels[n] % 2 != 0) {
                    t = 1 + (e > i ? this.bidiMap.logicalFromVisual[n] : this.bidiMap.logicalFromVisual[n - 1]);
                } else if (this.isRtlDir && n === bidiLevels.length - 1 && s === 0 && bidiLevels[n - 1] % 2 == 0 || !this.isRtlDir && n === 0 && bidiLevels[n] % 2 != 0) {
                    t = 1 + this.bidiMap.logicalFromVisual[n];
                } else {
                    if (n > 0 && bidiLevels[n - 1] % 2 != 0 && s !== 0) {
                        n--;
                    }
                    t = this.bidiMap.logicalFromVisual[n];
                }
                if (t === 0 && this.isRtlDir) {
                    t++;
                }
                return t + this.wrapIndent;
            };
        }).call(r.prototype);
        t.BidiHandler = r;
    });
    ace.define("ace/selection", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/lib/lang",
        "ace/lib/event_emitter",
        "ace/range"
    ], function(e, t, i) {
        "use strict";
        const n = e("./lib/oop");
        const o = e("./lib/lang");
        const EventEmitter = e("./lib/event_emitter").EventEmitter;
        const Range = e("./range").Range;
        const a = function(e) {
            this.session = e;
            this.doc = e.getDocument();
            this.clearSelection();
            this.cursor = this.lead = this.doc.createAnchor(0, 0);
            this.anchor = this.doc.createAnchor(0, 0);
            this.$silent = false;
            const _this = this;
            this.cursor.on("change", function(e) {
                _this.$cursorChanged = true;
                if (!_this.$silent) {
                    _this._emit("changeCursor");
                }
                if (!(_this.$isEmpty || _this.$silent)) {
                    _this._emit("changeSelection");
                }
                if (!(_this.$keepDesiredColumnOnChange || e.old.column == e.value.column)) {
                    _this.$desiredColumn = null;
                }
            });
            this.anchor.on("change", function() {
                _this.$anchorChanged = true;
                if (!(_this.$isEmpty || _this.$silent)) {
                    _this._emit("changeSelection");
                }
            });
        };
        (function() {
            n.implement(this, EventEmitter);
            this.isEmpty = function() {
                return this.$isEmpty || this.anchor.row == this.lead.row && this.anchor.column == this.lead.column;
            };
            this.isMultiLine = function() {
                return !this.$isEmpty && this.anchor.row != this.cursor.row;
            };
            this.getCursor = function() {
                return this.lead.getPosition();
            };
            this.setSelectionAnchor = function(e, t) {
                this.$isEmpty = false;
                this.anchor.setPosition(e, t);
            };
            this.getAnchor = this.getSelectionAnchor = function() {
                if (this.$isEmpty) {
                    return this.getSelectionLead();
                }
                return this.anchor.getPosition();
            };
            this.getSelectionLead = function() {
                return this.lead.getPosition();
            };
            this.isBackwards = function() {
                const anchor = this.anchor;
                const lead = this.lead;
                return anchor.row > lead.row || anchor.row == lead.row && anchor.column > lead.column;
            };
            this.getRange = function() {
                const anchor = this.anchor;
                const lead = this.lead;
                if (this.$isEmpty) {
                    return Range.fromPoints(lead, lead);
                }
                if (this.isBackwards()) {
                    return Range.fromPoints(lead, anchor);
                }
                return Range.fromPoints(anchor, lead);
            };
            this.clearSelection = function() {
                if (!this.$isEmpty) {
                    this.$isEmpty = true;
                    this._emit("changeSelection");
                }
            };
            this.selectAll = function() {
                this.$setSelection(0, 0, Number.MAX_VALUE, Number.MAX_VALUE);
            };
            this.setRange = this.setSelectionRange = function(e, t) {
                const i = t ? e.end : e.start;
                const n = t ? e.start : e.end;
                this.$setSelection(i.row, i.column, n.row, n.column);
            };
            this.$setSelection = function(e, t, i, n) {
                if (!this.$silent) {
                    const o = this.$isEmpty;
                    const s = this.inMultiSelectMode;
                    this.$silent = true;
                    this.$cursorChanged = this.$anchorChanged = false;
                    this.anchor.setPosition(e, t);
                    this.cursor.setPosition(i, n);
                    this.$isEmpty = !Range.comparePoints(this.anchor, this.cursor);
                    this.$silent = false;
                    if (this.$cursorChanged) {
                        this._emit("changeCursor");
                    }
                    if (this.$cursorChanged || this.$anchorChanged || o != this.$isEmpty || s) {
                        this._emit("changeSelection");
                    }
                }
            };
            this.$moveSelection = function(e) {
                const lead = this.lead;
                if (this.$isEmpty) {
                    this.setSelectionAnchor(lead.row, lead.column);
                }
                e.call(this);
            };
            this.selectTo = function(e, t) {
                this.$moveSelection(function() {
                    this.moveCursorTo(e, t);
                });
            };
            this.selectToPosition = function(e) {
                this.$moveSelection(function() {
                    this.moveCursorToPosition(e);
                });
            };
            this.moveTo = function(e, t) {
                this.clearSelection();
                this.moveCursorTo(e, t);
            };
            this.moveToPosition = function(e) {
                this.clearSelection();
                this.moveCursorToPosition(e);
            };
            this.selectUp = function() {
                this.$moveSelection(this.moveCursorUp);
            };
            this.selectDown = function() {
                this.$moveSelection(this.moveCursorDown);
            };
            this.selectRight = function() {
                this.$moveSelection(this.moveCursorRight);
            };
            this.selectLeft = function() {
                this.$moveSelection(this.moveCursorLeft);
            };
            this.selectLineStart = function() {
                this.$moveSelection(this.moveCursorLineStart);
            };
            this.selectLineEnd = function() {
                this.$moveSelection(this.moveCursorLineEnd);
            };
            this.selectFileEnd = function() {
                this.$moveSelection(this.moveCursorFileEnd);
            };
            this.selectFileStart = function() {
                this.$moveSelection(this.moveCursorFileStart);
            };
            this.selectWordRight = function() {
                this.$moveSelection(this.moveCursorWordRight);
            };
            this.selectWordLeft = function() {
                this.$moveSelection(this.moveCursorWordLeft);
            };
            this.getWordRange = function(e, t) {
                if (t === undefined) {
                    const i = e || this.lead;
                    e = i.row;
                    t = i.column;
                }
                return this.session.getWordRange(e, t);
            };
            this.selectWord = function() {
                this.setSelectionRange(this.getWordRange());
            };
            this.selectAWord = function() {
                const e = this.getCursor();
                const t = this.session.getAWordRange(e.row, e.column);
                this.setSelectionRange(t);
            };
            this.getLineRange = function(e, t) {
                let i;
                let n = typeof e === "number" ? e : this.lead.row;
                const o = this.session.getFoldLine(n);
                if (o) {
                    n = o.start.row;
                    i = o.end.row;
                } else {
                    i = n;
                }
                if (t === true) {
                    return new Range(n, 0, i, this.session.getLine(i).length);
                }
                return new Range(n, 0, i + 1, 0);
            };
            this.selectLine = function() {
                this.setSelectionRange(this.getLineRange());
            };
            this.moveCursorUp = function() {
                this.moveCursorBy(-1, 0);
            };
            this.moveCursorDown = function() {
                this.moveCursorBy(1, 0);
            };
            this.wouldMoveIntoSoftTab = function(e, t, i) {
                let e_column = e.column;
                let o = e.column + t;
                if (i < 0) {
                    e_column = e.column - t;
                    o = e.column;
                }
                return this.session.isTabStop(e) && this.doc.getLine(e.row).slice(e_column, o).split(" ").length - 1 == t;
            };
            this.moveCursorLeft = function() {
                let e;
                const t = this.lead.getPosition();
                if (e = this.session.getFoldAt(t.row, t.column, -1)) {
                    this.moveCursorTo(e.start.row, e.start.column);
                } else if (t.column === 0) {
                    if (t.row > 0) {
                        this.moveCursorTo(t.row - 1, this.doc.getLine(t.row - 1).length);
                    }
                } else {
                    const i = this.session.getTabSize();
                    if (this.wouldMoveIntoSoftTab(t, i, -1) && !this.session.getNavigateWithinSoftTabs()) {
                        this.moveCursorBy(0, -i);
                    } else {
                        this.moveCursorBy(0, -1);
                    }
                }
            };
            this.moveCursorRight = function() {
                let e;
                let t = this.lead.getPosition();
                if (e = this.session.getFoldAt(t.row, t.column, 1)) {
                    this.moveCursorTo(e.end.row, e.end.column);
                } else if (this.lead.column == this.doc.getLine(this.lead.row).length) {
                    if (this.lead.row < this.doc.getLength() - 1) {
                        this.moveCursorTo(this.lead.row + 1, 0);
                    }
                } else {
                    const i = this.session.getTabSize();
                    t = this.lead;
                    if (this.wouldMoveIntoSoftTab(t, i, 1) && !this.session.getNavigateWithinSoftTabs()) {
                        this.moveCursorBy(0, i);
                    } else {
                        this.moveCursorBy(0, 1);
                    }
                }
            };
            this.moveCursorLineStart = function() {
                const row = this.lead.row;
                const column = this.lead.column;
                const i = this.session.documentToScreenRow(row, column);
                const n = this.session.screenToDocumentPosition(i, 0);
                const o = this.session.getDisplayLine(row, null, n.row, n.column).match(/^\s*/);
                if (!(o[0].length == column || this.session.$useEmacsStyleLineStart)) {
                    n.column += o[0].length;
                }
                this.moveCursorToPosition(n);
            };
            this.moveCursorLineEnd = function() {
                const lead = this.lead;
                const t = this.session.getDocumentLastRowColumnPosition(lead.row, lead.column);
                if (this.lead.column == t.column) {
                    const i = this.session.getLine(t.row);
                    if (t.column == i.length) {
                        const n = i.search(/\s+$/);
                        if (n > 0) {
                            t.column = n;
                        }
                    }
                }
                this.moveCursorTo(t.row, t.column);
            };
            this.moveCursorFileEnd = function() {
                const e = this.doc.getLength() - 1;
                const length = this.doc.getLine(e).length;
                this.moveCursorTo(e, length);
            };
            this.moveCursorFileStart = function() {
                this.moveCursorTo(0, 0);
            };
            this.moveCursorLongWordRight = function() {
                const row = this.lead.row;
                let column = this.lead.column;
                const i = this.doc.getLine(row);
                let n = i.substring(column);
                this.session.nonTokenRe.lastIndex = 0;
                this.session.tokenRe.lastIndex = 0;
                const o = this.session.getFoldAt(row, column, 1);
                if (o) {
                    this.moveCursorTo(o.end.row, o.end.column);
                } else {
                    if (this.session.nonTokenRe.exec(n)) {
                        column += this.session.nonTokenRe.lastIndex;
                        this.session.nonTokenRe.lastIndex = 0;
                        n = i.substring(column);
                    }
                    if (column >= i.length) {
                        this.moveCursorTo(row, i.length);
                        this.moveCursorRight();
                        return void (row < this.doc.getLength() - 1 && this.moveCursorWordRight());
                    }
                    if (this.session.tokenRe.exec(n)) {
                        column += this.session.tokenRe.lastIndex;
                        this.session.tokenRe.lastIndex = 0;
                    }
                    this.moveCursorTo(row, column);
                }
            };
            this.moveCursorLongWordLeft = function() {
                let e;
                const row = this.lead.row;
                let column = this.lead.column;
                if (e = this.session.getFoldAt(row, column, -1)) {
                    this.moveCursorTo(e.start.row, e.start.column);
                } else {
                    let n = this.session.getFoldStringAt(row, column, -1);
                    if (n == null) {
                        n = this.doc.getLine(row).substring(0, column);
                    }
                    let s = o.stringReverse(n);
                    this.session.nonTokenRe.lastIndex = 0;
                    this.session.tokenRe.lastIndex = 0;
                    if (this.session.nonTokenRe.exec(s)) {
                        column -= this.session.nonTokenRe.lastIndex;
                        s = s.slice(this.session.nonTokenRe.lastIndex);
                        this.session.nonTokenRe.lastIndex = 0;
                    }
                    if (column <= 0) {
                        this.moveCursorTo(row, 0);
                        this.moveCursorLeft();
                        return void (row > 0 && this.moveCursorWordLeft());
                    }
                    if (this.session.tokenRe.exec(s)) {
                        column -= this.session.tokenRe.lastIndex;
                        this.session.tokenRe.lastIndex = 0;
                    }
                    this.moveCursorTo(row, column);
                }
            };
            this.$shortWordEndIndex = function(e) {
                let t;
                let i = 0;
                const n = /\s/;
                const tokenRe = this.session.tokenRe;
                tokenRe.lastIndex = 0;
                if (this.session.tokenRe.exec(e)) {
                    i = this.session.tokenRe.lastIndex;
                } else {
                    while((t = e[i]) && n.test(t)){
                        i++;
                    }
                    if (i < 1) {
                        for(tokenRe.lastIndex = 0; (t = e[i]) && !tokenRe.test(t);){
                            tokenRe.lastIndex = 0;
                            i++;
                            if (n.test(t)) {
                                if (i > 2) {
                                    i--;
                                    break;
                                }
                                while((t = e[i]) && n.test(t)){
                                    i++;
                                }
                                if (i > 2) {
                                    break;
                                }
                            }
                        }
                    }
                }
                tokenRe.lastIndex = 0;
                return i;
            };
            this.moveCursorShortWordRight = function() {
                let row = this.lead.row;
                let column = this.lead.column;
                const i = this.doc.getLine(row);
                let n = i.substring(column);
                const o = this.session.getFoldAt(row, column, 1);
                if (o) {
                    return this.moveCursorTo(o.end.row, o.end.column);
                }
                if (column == i.length) {
                    const s = this.doc.getLength();
                    do {
                        row++;
                        n = this.doc.getLine(row);
                    }while (row < s && /^\s*$/.test(n))
                    if (!/^\s+/.test(n)) {
                        n = "";
                    }
                    column = 0;
                }
                const r = this.$shortWordEndIndex(n);
                this.moveCursorTo(row, column + r);
            };
            this.moveCursorShortWordLeft = function() {
                let e;
                let row = this.lead.row;
                let column = this.lead.column;
                if (e = this.session.getFoldAt(row, column, -1)) {
                    return this.moveCursorTo(e.start.row, e.start.column);
                }
                let n = this.session.getLine(row).substring(0, column);
                if (column === 0) {
                    do {
                        row--;
                        n = this.doc.getLine(row);
                    }while (row > 0 && /^\s*$/.test(n))
                    column = n.length;
                    if (!/\s+$/.test(n)) {
                        n = "";
                    }
                }
                const s = o.stringReverse(n);
                const r = this.$shortWordEndIndex(s);
                return this.moveCursorTo(row, column - r);
            };
            this.moveCursorWordRight = function() {
                if (this.session.$selectLongWords) {
                    this.moveCursorLongWordRight();
                } else {
                    this.moveCursorShortWordRight();
                }
            };
            this.moveCursorWordLeft = function() {
                if (this.session.$selectLongWords) {
                    this.moveCursorLongWordLeft();
                } else {
                    this.moveCursorShortWordLeft();
                }
            };
            this.moveCursorBy = function(e, t) {
                let i;
                const n = this.session.documentToScreenPosition(this.lead.row, this.lead.column);
                if (t === 0) {
                    if (e !== 0) {
                        if (this.session.$bidiHandler.isBidiRow(n.row, this.lead.row)) {
                            i = this.session.$bidiHandler.getPosLeft(n.column);
                            n.column = Math.round(i / this.session.$bidiHandler.charWidths[0]);
                        } else {
                            i = n.column * this.session.$bidiHandler.charWidths[0];
                        }
                    }
                    if (this.$desiredColumn) {
                        n.column = this.$desiredColumn;
                    } else {
                        this.$desiredColumn = n.column;
                    }
                }
                if (e != 0 && this.session.lineWidgets && this.session.lineWidgets[this.lead.row]) {
                    const o = this.session.lineWidgets[this.lead.row];
                    if (e < 0) {
                        e -= o.rowsAbove || 0;
                    } else if (e > 0) {
                        e += o.rowCount - (o.rowsAbove || 0);
                    }
                }
                const s = this.session.screenToDocumentPosition(n.row + e, n.column, i);
                e !== 0 && t === 0 && s.row === this.lead.row && (s.column, this.lead.column);
                this.moveCursorTo(s.row, s.column + t, t === 0);
            };
            this.moveCursorToPosition = function(e) {
                this.moveCursorTo(e.row, e.column);
            };
            this.moveCursorTo = function(e, t, i) {
                const n = this.session.getFoldAt(e, t, 1);
                if (n) {
                    e = n.start.row;
                    t = n.start.column;
                }
                this.$keepDesiredColumnOnChange = true;
                const o = this.session.getLine(e);
                if (/[\uDC00-\uDFFF]/.test(o.charAt(t)) && o.charAt(t - 1)) {
                    if (this.lead.row == e && this.lead.column == t + 1) {
                        t -= 1;
                    } else {
                        t += 1;
                    }
                }
                this.lead.setPosition(e, t);
                this.$keepDesiredColumnOnChange = false;
                if (!i) {
                    this.$desiredColumn = null;
                }
            };
            this.moveCursorToScreen = function(e, t, i) {
                const n = this.session.screenToDocumentPosition(e, t);
                this.moveCursorTo(n.row, n.column, i);
            };
            this.detach = function() {
                this.lead.detach();
                this.anchor.detach();
                this.session = this.doc = null;
            };
            this.fromOrientedRange = function(e) {
                this.setSelectionRange(e, e.cursor == e.start);
                this.$desiredColumn = e.desiredColumn || this.$desiredColumn;
            };
            this.toOrientedRange = function(e) {
                const t = this.getRange();
                if (e) {
                    e.start.column = t.start.column;
                    e.start.row = t.start.row;
                    e.end.column = t.end.column;
                    e.end.row = t.end.row;
                } else {
                    e = t;
                }
                e.cursor = this.isBackwards() ? e.start : e.end;
                e.desiredColumn = this.$desiredColumn;
                return e;
            };
            this.getRangeOfMovements = function(e) {
                const t = this.getCursor();
                try {
                    e(this);
                    const i = this.getCursor();
                    return Range.fromPoints(t, i);
                } catch (e) {
                    return Range.fromPoints(t, t);
                } finally{
                    this.moveCursorToPosition(t);
                }
            };
            this.toJSON = function() {
                if (this.rangeCount) var e = this.ranges.map((e)=>{
                    const t = e.clone();
                    t.isBackwards = e.cursor == e.start;
                    return t;
                });
                else {
                    e = this.getRange();
                    e.isBackwards = this.isBackwards();
                }
                return e;
            };
            this.fromJSON = function(e) {
                if (e.start == null) {
                    if (this.rangeList && e.length > 1) {
                        this.toSingleRange(e[0]);
                        for(let t = e.length; t--;){
                            const i = Range.fromPoints(e[t].start, e[t].end);
                            if (e[t].isBackwards) {
                                i.cursor = i.start;
                            }
                            this.addRange(i, true);
                        }
                        return;
                    }
                    e = e[0];
                }
                if (this.rangeList) {
                    this.toSingleRange(e);
                }
                this.setSelectionRange(e, e.isBackwards);
            };
            this.isEqual = function(e) {
                if ((e.length || this.rangeCount) && e.length != this.rangeCount) {
                    return false;
                }
                if (!e.length || !this.ranges) {
                    return this.getRange().isEqual(e);
                }
                for(let t = this.ranges.length; t--;){
                    if (!this.ranges[t].isEqual(e[t])) {
                        return false;
                    }
                }
                return true;
            };
        }).call(a.prototype);
        t.Selection = a;
    });
    ace.define("ace/tokenizer", [
        "require",
        "exports",
        "module",
        "ace/config"
    ], function(e, t, i) {
        "use strict";
        const n = e("./config");
        let o = 2000;
        const s = function(e) {
            this.states = e;
            this.regExps = {};
            this.matchMappings = {};
            for(const t in this.states){
                for(var i = this.states[t], n = [], o = 0, s = this.matchMappings[t] = {
                    defaultToken: "text"
                }, r = "g", a = [], c = 0; c < i.length; c++){
                    const rule = i[c];
                    if (rule.defaultToken) {
                        s.defaultToken = rule.defaultToken;
                    }
                    if (rule.caseInsensitive) {
                        r = "gi";
                    }
                    if (rule.regex != null) {
                        if (rule.regex instanceof RegExp) {
                            rule.regex = rule.regex.toString().slice(1, -1);
                        }
                        let h = rule.regex;
                        let d = new RegExp(`(?:(${h})|(.))`).exec("a").length - 2;
                        if (Array.isArray(rule.token)) {
                            if (rule.token.length == 1 || d == 1) {
                                rule.token = rule.token[0];
                            } else if (d - 1 != rule.token.length) {
                                this.reportError("number of classes and regexp groups doesn't match", {
                                    rule,
                                    groupCount: d - 1
                                });
                                rule.token = rule.token[0];
                            } else {
                                rule.tokenArray = rule.token;
                                rule.token = null;
                                rule.onMatch = this.$arrayTokens;
                            }
                        } else if (!(typeof rule.token !== "function" || rule.onMatch)) {
                            rule.onMatch = d > 1 ? this.$applyToken : rule.token;
                        }
                        if (d > 1) {
                            if (/\\\d/.test(rule.regex)) {
                                h = rule.regex.replace(/\\([0-9]+)/g, (e, t)=>`\\${parseInt(t, 10) + o + 1}`);
                            } else {
                                d = 1;
                                h = this.removeCapturingGroups(rule.regex);
                            }
                            if (!(rule.splitRegex || typeof rule.token === "string")) {
                                a.push(rule);
                            }
                        }
                        s[o] = c;
                        o += d;
                        n.push(h);
                        if (!rule.onMatch) {
                            rule.onMatch = null;
                        }
                    }
                }
                if (!n.length) {
                    s[0] = 0;
                    n.push("$");
                }
                a.forEach(function(e) {
                    e.splitRegex = this.createSplitterRegexp(e.regex, r);
                }, this);
                this.regExps[t] = new RegExp(`(${n.join(")|(")})|(\$)`, r);
            }
        };
        (function() {
            this.$setMaxTokenCount = function(e) {
                o = 0 | e;
            };
            this.$applyToken = function(e) {
                const t = this.splitRegex.exec(e).slice(1);
                const i = this.token.apply(this, t);
                if (typeof i === "string") {
                    return [
                        {
                            type: i,
                            value: e
                        }
                    ];
                }
                const n = [];
                for(let o = 0, s = i.length; o < s; o++){
                    if (t[o]) {
                        n[n.length] = {
                            type: i[o],
                            value: t[o]
                        };
                    }
                }
                return n;
            };
            this.$arrayTokens = function(e) {
                if (!e) {
                    return [];
                }
                const t = this.splitRegex.exec(e);
                if (!t) {
                    return "text";
                }
                const i = [];
                const tokenArray = this.tokenArray;
                for(let o = 0, s = tokenArray.length; o < s; o++){
                    if (t[o + 1]) {
                        i[i.length] = {
                            type: tokenArray[o],
                            value: t[o + 1]
                        };
                    }
                }
                return i;
            };
            this.removeCapturingGroups = function(e) {
                return e.replace(/\\.|\[(?:\\.|[^\\\]])*|\(\?[:=!]|(\()/g, (e, t)=>{
                    if (t) {
                        return "(?:";
                    }
                    return e;
                });
            };
            this.createSplitterRegexp = function(e, t) {
                if (e.indexOf("(?=") != -1) {
                    let i = 0;
                    let n = false;
                    const o = {};
                    e.replace(/(\\.)|(\((?:\?[=!])?)|(\))|([\[\]])/g, (e, t, s, r, a, c)=>{
                        if (n) {
                            n = a != "]";
                        } else if (a) {
                            n = true;
                        } else if (r) {
                            if (i == o.stack) {
                                o.end = c + 1;
                                o.stack = -1;
                            }
                            i--;
                        } else if (s) {
                            i++;
                            if (s.length != 1) {
                                o.stack = i;
                                o.start = c;
                            }
                        }
                        return e;
                    });
                    if (o.end != null && /^\)*$/.test(e.substr(o.end))) {
                        e = e.substring(0, o.start) + e.substr(o.end);
                    }
                }
                if (e.charAt(0) != "^") {
                    e = `^${e}`;
                }
                if (e.charAt(e.length - 1) != "$") {
                    e += "$";
                }
                return new RegExp(e, (t || "").replace("g", ""));
            };
            this.getLineTokens = function(line, startState) {
                if (startState && typeof startState !== "string") {
                    var i = startState.slice(0);
                    if ((startState = i[0]) === "#tmp") {
                        i.shift();
                        startState = i.shift();
                    }
                } else {
                    i = [];
                }
                let n = startState || "start";
                let s = this.states[n];
                if (!s) {
                    n = "start";
                    s = this.states[n];
                }
                let r = this.matchMappings[n];
                let a = this.regExps[n];
                a.lastIndex = 0;
                let c;
                const tokens = [];
                let h = 0;
                let d = 0;
                let u = {
                    type: null,
                    value: ""
                };
                while(c = a.exec(line)){
                    let f = r.defaultToken;
                    let g = null;
                    const p = c[0];
                    const m = a.lastIndex;
                    if (m - p.length > h) {
                        const b = line.substring(h, m - p.length);
                        if (u.type == f) {
                            u.value += b;
                        } else {
                            if (u.type) {
                                tokens.push(u);
                            }
                            u = {
                                type: f,
                                value: b
                            };
                        }
                    }
                    for(var v = 0; v < c.length - 2; v++){
                        if (c[v + 1] !== undefined) {
                            f = (g = s[r[v]]).onMatch ? g.onMatch(p, n, i, line) : g.token;
                            if (g.next) {
                                n = typeof g.next === "string" ? g.next : g.next(n, i);
                                if (!(s = this.states[n])) {
                                    this.reportError("state doesn't exist", n);
                                    n = "start";
                                    s = this.states[n];
                                }
                                r = this.matchMappings[n];
                                h = m;
                                a = this.regExps[n];
                                a.lastIndex = m;
                            }
                            if (g.consumeLineEnd) {
                                h = m;
                            }
                            break;
                        }
                    }
                    if (p) {
                        if (typeof f === "string") {
                            if (g && g.merge === false || u.type !== f) {
                                if (u.type) {
                                    tokens.push(u);
                                }
                                u = {
                                    type: f,
                                    value: p
                                };
                            } else {
                                u.value += p;
                            }
                        } else if (f) {
                            if (u.type) {
                                tokens.push(u);
                            }
                            u = {
                                type: null,
                                value: ""
                            };
                            for(v = 0; v < f.length; v++){
                                tokens.push(f[v]);
                            }
                        }
                    }
                    if (h == line.length) {
                        break;
                    }
                    h = m;
                    if (d++ > o) {
                        for(d > 2 * line.length && this.reportError("infinite loop with in ace tokenizer", {
                            startState,
                            line
                        }); h < line.length;){
                            if (u.type) {
                                tokens.push(u);
                            }
                            u = {
                                value: line.substring(h, h += 500),
                                type: "overflow"
                            };
                        }
                        n = "start";
                        i = [];
                        break;
                    }
                }
                if (u.type) {
                    tokens.push(u);
                }
                if (i.length > 1 && i[0] !== n) {
                    i.unshift("#tmp", n);
                }
                return {
                    tokens,
                    state: i.length ? i : n
                };
            };
            this.reportError = n.reportError;
        }).call(s.prototype);
        t.Tokenizer = s;
    });
    ace.define("ace/mode/text_highlight_rules", [
        "require",
        "exports",
        "module",
        "ace/lib/lang"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/lang");
        const o = function() {
            this.$rules = {
                start: [
                    {
                        token: "empty_line",
                        regex: "^$"
                    },
                    {
                        defaultToken: "text"
                    }
                ]
            };
        };
        (function() {
            this.addRules = function(e, t) {
                if (t) {
                    for(var i in e){
                        for(var n = e[i], o = 0; o < n.length; o++){
                            const s = n[o];
                            if (s.next || s.onMatch) {
                                if (typeof s.next === "string" && s.next.indexOf(t) !== 0) {
                                    s.next = t + s.next;
                                }
                                if (s.nextState && s.nextState.indexOf(t) !== 0) {
                                    s.nextState = t + s.nextState;
                                }
                            }
                        }
                        this.$rules[t + i] = n;
                    }
                } else {
                    for(var i in e){
                        this.$rules[i] = e[i];
                    }
                }
            };
            this.getRules = function() {
                return this.$rules;
            };
            this.embedRules = function(e, t, i, o, s) {
                const r = typeof e === "function" ? (new e).getRules() : e;
                if (o) {
                    for(var a = 0; a < o.length; a++){
                        o[a] = t + o[a];
                    }
                } else {
                    o = [];
                    for(const c in r){
                        o.push(t + c);
                    }
                }
                this.addRules(r, t);
                if (i) {
                    const l = Array.prototype[s ? "push" : "unshift"];
                    for(a = 0; a < o.length; a++){
                        l.apply(this.$rules[o[a]], n.deepCopy(i));
                    }
                }
                if (!this.$embeds) {
                    this.$embeds = [];
                }
                this.$embeds.push(t);
            };
            this.getEmbeds = function() {
                return this.$embeds;
            };
            const e = function(e, t) {
                if (e != "start" || t.length) {
                    t.unshift(this.nextState, e);
                }
                return this.nextState;
            };
            const t = function(e, t) {
                t.shift();
                return t.shift() || "start";
            };
            this.normalizeRules = function() {
                let i = 0;
                const $rules = this.$rules;
                Object.keys($rules).forEach(function o(s) {
                    const r = $rules[s];
                    r.processed = true;
                    for(let a = 0; a < r.length; a++){
                        let c = r[a];
                        let l = null;
                        if (Array.isArray(c)) {
                            l = c;
                            c = {};
                        }
                        if (!c.regex && c.start) {
                            c.regex = c.start;
                            if (!c.next) {
                                c.next = [];
                            }
                            c.next.push({
                                defaultToken: c.token
                            }, {
                                token: `${c.token}.end`,
                                regex: c.end || c.start,
                                next: "pop"
                            });
                            c.token = `${c.token}.start`;
                            c.push = true;
                        }
                        const h = c.next || c.push;
                        if (h && Array.isArray(h)) {
                            let d = c.stateName;
                            if (!d) {
                                if (typeof (d = c.token) !== "string") {
                                    d = d[0] || "";
                                }
                                if ($rules[d]) {
                                    d += i++;
                                }
                            }
                            $rules[d] = h;
                            c.next = d;
                            o(d);
                        } else {
                            if (h == "pop") {
                                c.next = t;
                            }
                        }
                        if (c.push) {
                            c.nextState = c.next || c.push;
                            c.next = e;
                            delete c.push;
                        }
                        if (c.rules) {
                            for(const u in c.rules){
                                if ($rules[u]) {
                                    if ($rules[u].push) {
                                        $rules[u].push.apply($rules[u], c.rules[u]);
                                    }
                                } else {
                                    $rules[u] = c.rules[u];
                                }
                            }
                        }
                        const f = typeof c === "string" ? c : c.include;
                        if (f) {
                            l = Array.isArray(f) ? f.map((e)=>$rules[e]) : $rules[f];
                        }
                        if (l) {
                            let g = [
                                a,
                                1
                            ].concat(l);
                            if (c.noEscape) {
                                g = g.filter((e)=>!e.next);
                            }
                            r.splice.apply(r, g);
                            a--;
                        }
                        if (c.keywordMap) {
                            c.token = this.createKeywordMapper(c.keywordMap, c.defaultToken || "text", c.caseInsensitive);
                            delete c.defaultToken;
                        }
                    }
                }, this);
            };
            this.createKeywordMapper = function(e, t, i, n) {
                const o = Object.create(null);
                this.$keywordList = [];
                Object.keys(e).forEach(function(t) {
                    const s = e[t].split(n || "|");
                    for(let r = s.length; r--;){
                        let a = s[r];
                        this.$keywordList.push(a);
                        if (i) {
                            a = a.toLowerCase();
                        }
                        o[a] = t;
                    }
                }, this);
                e = null;
                if (i) {
                    return function(e) {
                        return o[e.toLowerCase()] || t;
                    };
                }
                return function(e) {
                    return o[e] || t;
                };
            };
            this.getKeywords = function() {
                return this.$keywords;
            };
        }).call(o.prototype);
        t.TextHighlightRules = o;
    });
    ace.define("ace/mode/behaviour", [
        "require",
        "exports",
        "module"
    ], function(e, t, i) {
        "use strict";
        const n = function() {
            this.$behaviours = {};
        };
        (function() {
            this.add = function(e, t, i) {
                switch(undefined){
                    case this.$behaviours:
                        this.$behaviours = {};
                    case this.$behaviours[e]:
                        this.$behaviours[e] = {};
                }
                this.$behaviours[e][t] = i;
            };
            this.addBehaviours = function(e) {
                for(const t in e){
                    for(const i in e[t]){
                        this.add(t, i, e[t][i]);
                    }
                }
            };
            this.remove = function(e) {
                if (this.$behaviours && this.$behaviours[e]) {
                    delete this.$behaviours[e];
                }
            };
            this.inherit = function(e, t) {
                if (typeof e === "function") var i = (new e).getBehaviours(t);
                else {
                    i = e.getBehaviours(t);
                }
                this.addBehaviours(i);
            };
            this.getBehaviours = function(e) {
                if (e) {
                    const t = {};
                    for(let i = 0; i < e.length; i++){
                        if (this.$behaviours[e[i]]) {
                            t[e[i]] = this.$behaviours[e[i]];
                        }
                    }
                    return t;
                }
                return this.$behaviours;
            };
        }).call(n.prototype);
        t.Behaviour = n;
    });
    ace.define("ace/token_iterator", [
        "require",
        "exports",
        "module",
        "ace/range"
    ], function(e, t, i) {
        "use strict";
        const Range = e("./range").Range;
        const o = function(e, t, i) {
            this.$session = e;
            this.$row = t;
            this.$rowTokens = e.getTokens(t);
            const n = e.getTokenAt(t, i);
            this.$tokenIndex = n ? n.index : -1;
        };
        (function() {
            this.stepBackward = function() {
                for(this.$tokenIndex -= 1; this.$tokenIndex < 0;){
                    this.$row -= 1;
                    if (this.$row < 0) {
                        this.$row = 0;
                        return null;
                    }
                    this.$rowTokens = this.$session.getTokens(this.$row);
                    this.$tokenIndex = this.$rowTokens.length - 1;
                }
                return this.$rowTokens[this.$tokenIndex];
            };
            this.stepForward = function() {
                let e;
                for(this.$tokenIndex += 1; this.$tokenIndex >= this.$rowTokens.length;){
                    this.$row += 1;
                    if (!e) {
                        e = this.$session.getLength();
                    }
                    if (this.$row >= e) {
                        this.$row = e - 1;
                        return null;
                    }
                    this.$rowTokens = this.$session.getTokens(this.$row);
                    this.$tokenIndex = 0;
                }
                return this.$rowTokens[this.$tokenIndex];
            };
            this.getCurrentToken = function() {
                return this.$rowTokens[this.$tokenIndex];
            };
            this.getCurrentTokenRow = function() {
                return this.$row;
            };
            this.getCurrentTokenColumn = function() {
                const $rowTokens = this.$rowTokens;
                let $tokenIndex = this.$tokenIndex;
                let start = $rowTokens[$tokenIndex].start;
                if (start !== undefined) {
                    return start;
                }
                for(start = 0; $tokenIndex > 0;){
                    start += $rowTokens[$tokenIndex -= 1].value.length;
                }
                return start;
            };
            this.getCurrentTokenPosition = function() {
                return {
                    row: this.$row,
                    column: this.getCurrentTokenColumn()
                };
            };
            this.getCurrentTokenRange = function() {
                const e = this.$rowTokens[this.$tokenIndex];
                const t = this.getCurrentTokenColumn();
                return new Range(this.$row, t, this.$row, t + e.value.length);
            };
        }).call(o.prototype);
        t.TokenIterator = o;
    });
    ace.define("ace/mode/behaviour/cstyle", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/mode/behaviour",
        "ace/token_iterator",
        "ace/lib/lang"
    ], function(e, t, i) {
        "use strict";
        let n;
        const o = e("../../lib/oop");
        const Behaviour = e("../behaviour").Behaviour;
        const TokenIterator = e("../../token_iterator").TokenIterator;
        const a = e("../../lib/lang");
        const c = [
            "text",
            "paren.rparen",
            "rparen",
            "paren",
            "punctuation.operator"
        ];
        const l = [
            "text",
            "paren.rparen",
            "rparen",
            "paren",
            "punctuation.operator",
            "comment"
        ];
        let h = {};
        const d = {
            '"': '"',
            "'": "'"
        };
        const u = (e)=>{
            let t = -1;
            if (e.multiSelect) {
                t = e.selection.index;
                if (h.rangeCount != e.multiSelect.rangeCount) {
                    h = {
                        rangeCount: e.multiSelect.rangeCount
                    };
                }
            }
            if (h[t]) {
                return n = h[t];
            }
            n = h[t] = {
                autoInsertedBrackets: 0,
                autoInsertedRow: -1,
                autoInsertedLineEnd: "",
                maybeInsertedBrackets: 0,
                maybeInsertedRow: -1,
                maybeInsertedLineStart: "",
                maybeInsertedLineEnd: ""
            };
        };
        const f = (e, t, i, n)=>{
            const o = e.end.row - e.start.row;
            return {
                text: i + t + n,
                selection: [
                    0,
                    e.start.column + 1,
                    o,
                    e.end.column + (o ? 0 : 1)
                ]
            };
        };
        const g = function(e) {
            this.add("braces", "insertion", function(t, i, o, s, r) {
                const c = o.getCursorPosition();
                const l = s.doc.getLine(c.row);
                if (r == "{") {
                    u(o);
                    const h = o.getSelectionRange();
                    const d = s.doc.getTextRange(h);
                    if (d !== "" && d !== "{" && o.getWrapBehavioursEnabled()) {
                        return f(h, d, "{", "}");
                    }
                    if (g.isSaneInsertion(o, s)) {
                        if (/[\]\}\)]/.test(l[c.column]) || o.inMultiSelectMode || e && e.braces) {
                            g.recordAutoInsert(o, s, "}");
                            return {
                                text: "{}",
                                selection: [
                                    1,
                                    1
                                ]
                            };
                        }
                        g.recordMaybeInsert(o, s, "{");
                        return {
                            text: "{",
                            selection: [
                                1,
                                1
                            ]
                        };
                    }
                } else if (r == "}") {
                    u(o);
                    if (l.substring(c.column, c.column + 1) == "}" && s.$findOpeningBracket("}", {
                        column: c.column + 1,
                        row: c.row
                    }) !== null && g.isAutoInsertedClosing(c, l, r)) {
                        g.popAutoInsertedClosing();
                        return {
                            text: "",
                            selection: [
                                1,
                                1
                            ]
                        };
                    }
                } else {
                    if (r == "\n" || r == "\r\n") {
                        u(o);
                        let p = "";
                        if (g.isMaybeInsertedClosing(c, l)) {
                            p = a.stringRepeat("}", n.maybeInsertedBrackets);
                            g.clearMaybeInsertedClosing();
                        }
                        if (l.substring(c.column, c.column + 1) === "}") {
                            const m = s.findMatchingBracket({
                                row: c.row,
                                column: c.column + 1
                            }, "}");
                            if (!m) {
                                return null;
                            }
                            var b = this.$getIndent(s.getLine(m.row));
                        } else {
                            if (!p) {
                                return void g.clearMaybeInsertedClosing();
                            }
                            b = this.$getIndent(l);
                        }
                        const v = b + s.getTabString();
                        return {
                            text: `
${v}
${b}${p}`,
                            selection: [
                                1,
                                v.length,
                                1,
                                v.length
                            ]
                        };
                    }
                    g.clearMaybeInsertedClosing();
                }
            });
            this.add("braces", "deletion", function(e, t, i, o, s) {
                const r = o.doc.getTextRange(s);
                if (!s.isMultiLine() && r == "{") {
                    u(i);
                    if (o.doc.getLine(s.start.row).substring(s.end.column, s.end.column + 1) == "}") {
                        s.end.column++;
                        return s;
                    }
                    n.maybeInsertedBrackets--;
                }
            });
            this.add("parens", "insertion", function(e, t, i, n, o) {
                if (o == "(") {
                    u(i);
                    const s = i.getSelectionRange();
                    const r = n.doc.getTextRange(s);
                    if (r !== "" && i.getWrapBehavioursEnabled()) {
                        return f(s, r, "(", ")");
                    }
                    if (g.isSaneInsertion(i, n)) {
                        g.recordAutoInsert(i, n, ")");
                        return {
                            text: "()",
                            selection: [
                                1,
                                1
                            ]
                        };
                    }
                } else if (o == ")") {
                    u(i);
                    const a = i.getCursorPosition();
                    const c = n.doc.getLine(a.row);
                    if (c.substring(a.column, a.column + 1) == ")" && n.$findOpeningBracket(")", {
                        column: a.column + 1,
                        row: a.row
                    }) !== null && g.isAutoInsertedClosing(a, c, o)) {
                        g.popAutoInsertedClosing();
                        return {
                            text: "",
                            selection: [
                                1,
                                1
                            ]
                        };
                    }
                }
            });
            this.add("parens", "deletion", function(e, t, i, n, o) {
                const s = n.doc.getTextRange(o);
                if (!o.isMultiLine() && s == "(" && (u(i), n.doc.getLine(o.start.row).substring(o.start.column + 1, o.start.column + 2) == ")")) {
                    o.end.column++;
                    return o;
                }
            });
            this.add("brackets", "insertion", function(e, t, i, n, o) {
                if (o == "[") {
                    u(i);
                    const s = i.getSelectionRange();
                    const r = n.doc.getTextRange(s);
                    if (r !== "" && i.getWrapBehavioursEnabled()) {
                        return f(s, r, "[", "]");
                    }
                    if (g.isSaneInsertion(i, n)) {
                        g.recordAutoInsert(i, n, "]");
                        return {
                            text: "[]",
                            selection: [
                                1,
                                1
                            ]
                        };
                    }
                } else if (o == "]") {
                    u(i);
                    const a = i.getCursorPosition();
                    const c = n.doc.getLine(a.row);
                    if (c.substring(a.column, a.column + 1) == "]" && n.$findOpeningBracket("]", {
                        column: a.column + 1,
                        row: a.row
                    }) !== null && g.isAutoInsertedClosing(a, c, o)) {
                        g.popAutoInsertedClosing();
                        return {
                            text: "",
                            selection: [
                                1,
                                1
                            ]
                        };
                    }
                }
            });
            this.add("brackets", "deletion", function(e, t, i, n, o) {
                const s = n.doc.getTextRange(o);
                if (!o.isMultiLine() && s == "[" && (u(i), n.doc.getLine(o.start.row).substring(o.start.column + 1, o.start.column + 2) == "]")) {
                    o.end.column++;
                    return o;
                }
            });
            this.add("string_dquotes", "insertion", function(e, t, i, n, o) {
                const s = n.$mode.$quotes || d;
                if (o.length == 1 && s[o]) {
                    if (this.lineCommentStart && this.lineCommentStart.indexOf(o) != -1) {
                        return;
                    }
                    u(i);
                    const r = o;
                    const a = i.getSelectionRange();
                    const c = n.doc.getTextRange(a);
                    if (!(c === "" || c.length == 1 && s[c]) && i.getWrapBehavioursEnabled()) {
                        return f(a, c, r, r);
                    }
                    if (!c) {
                        const l = i.getCursorPosition();
                        const h = n.doc.getLine(l.row);
                        const g = h.substring(l.column - 1, l.column);
                        const p = h.substring(l.column, l.column + 1);
                        const m = n.getTokenAt(l.row, l.column);
                        const b = n.getTokenAt(l.row, l.column + 1);
                        if (g == "\\" && m && /escape/.test(m.type)) {
                            return null;
                        }
                        let v;
                        const w = m && /string|escape/.test(m.type);
                        const x = !b || /string|escape/.test(b.type);
                        if (p == r) {
                            if ((v = w !== x) && /string\.end/.test(b.type)) {
                                v = false;
                            }
                        } else {
                            if (w && !x) {
                                return null;
                            }
                            if (w && x) {
                                return null;
                            }
                            const y = n.$mode.tokenRe;
                            y.lastIndex = 0;
                            const $ = y.test(g);
                            y.lastIndex = 0;
                            const S = y.test(g);
                            if ($ || S) {
                                return null;
                            }
                            if (p && !/[\s;,.})\]\\]/.test(p)) {
                                return null;
                            }
                            const C = h[l.column - 2];
                            if (g == r && (C == r || y.test(C))) {
                                return null;
                            }
                            v = true;
                        }
                        return {
                            text: v ? r + r : "",
                            selection: [
                                1,
                                1
                            ]
                        };
                    }
                }
            });
            this.add("string_dquotes", "deletion", function(e, t, i, n, o) {
                const s = n.$mode.$quotes || d;
                const r = n.doc.getTextRange(o);
                if (!o.isMultiLine() && s.hasOwnProperty(r) && (u(i), n.doc.getLine(o.start.row).substring(o.start.column + 1, o.start.column + 2) == r)) {
                    o.end.column++;
                    return o;
                }
            });
        };
        g.isSaneInsertion = function(e, t) {
            const i = e.getCursorPosition();
            const n = new TokenIterator(t, i.row, i.column);
            if (!this.$matchTokenType(n.getCurrentToken() || "text", c)) {
                if (/[)}\]]/.test(e.session.getLine(i.row)[i.column])) {
                    return true;
                }
                const o = new TokenIterator(t, i.row, i.column + 1);
                if (!this.$matchTokenType(o.getCurrentToken() || "text", c)) {
                    return false;
                }
            }
            n.stepForward();
            return n.getCurrentTokenRow() !== i.row || this.$matchTokenType(n.getCurrentToken() || "text", l);
        };
        g.$matchTokenType = function(e, t) {
            return t.indexOf(e.type || e) > -1;
        };
        g.recordAutoInsert = function(e, t, i) {
            const o = e.getCursorPosition();
            const s = t.doc.getLine(o.row);
            if (!this.isAutoInsertedClosing(o, s, n.autoInsertedLineEnd[0])) {
                n.autoInsertedBrackets = 0;
            }
            n.autoInsertedRow = o.row;
            n.autoInsertedLineEnd = i + s.substr(o.column);
            n.autoInsertedBrackets++;
        };
        g.recordMaybeInsert = function(e, t, i) {
            const o = e.getCursorPosition();
            const s = t.doc.getLine(o.row);
            if (!this.isMaybeInsertedClosing(o, s)) {
                n.maybeInsertedBrackets = 0;
            }
            n.maybeInsertedRow = o.row;
            n.maybeInsertedLineStart = s.substr(0, o.column) + i;
            n.maybeInsertedLineEnd = s.substr(o.column);
            n.maybeInsertedBrackets++;
        };
        g.isAutoInsertedClosing = function(e, t, i) {
            return n.autoInsertedBrackets > 0 && e.row === n.autoInsertedRow && i === n.autoInsertedLineEnd[0] && t.substr(e.column) === n.autoInsertedLineEnd;
        };
        g.isMaybeInsertedClosing = function(e, t) {
            return n.maybeInsertedBrackets > 0 && e.row === n.maybeInsertedRow && t.substr(e.column) === n.maybeInsertedLineEnd && t.substr(0, e.column) == n.maybeInsertedLineStart;
        };
        g.popAutoInsertedClosing = function() {
            n.autoInsertedLineEnd = n.autoInsertedLineEnd.substr(1);
            n.autoInsertedBrackets--;
        };
        g.clearMaybeInsertedClosing = function() {
            if (n) {
                n.maybeInsertedBrackets = 0;
                n.maybeInsertedRow = -1;
            }
        };
        o.inherits(g, Behaviour);
        t.CstyleBehaviour = g;
    });
    ace.define("ace/unicode", [
        "require",
        "exports",
        "module"
    ], function(e, t, i) {
        "use strict";
        for(var n = [
            48,
            9,
            8,
            25,
            5,
            0,
            2,
            25,
            48,
            0,
            11,
            0,
            5,
            0,
            6,
            22,
            2,
            30,
            2,
            457,
            5,
            11,
            15,
            4,
            8,
            0,
            2,
            0,
            18,
            116,
            2,
            1,
            3,
            3,
            9,
            0,
            2,
            2,
            2,
            0,
            2,
            19,
            2,
            82,
            2,
            138,
            2,
            4,
            3,
            155,
            12,
            37,
            3,
            0,
            8,
            38,
            10,
            44,
            2,
            0,
            2,
            1,
            2,
            1,
            2,
            0,
            9,
            26,
            6,
            2,
            30,
            10,
            7,
            61,
            2,
            9,
            5,
            101,
            2,
            7,
            3,
            9,
            2,
            18,
            3,
            0,
            17,
            58,
            3,
            100,
            15,
            53,
            5,
            0,
            6,
            45,
            211,
            57,
            3,
            18,
            2,
            5,
            3,
            11,
            3,
            9,
            2,
            1,
            7,
            6,
            2,
            2,
            2,
            7,
            3,
            1,
            3,
            21,
            2,
            6,
            2,
            0,
            4,
            3,
            3,
            8,
            3,
            1,
            3,
            3,
            9,
            0,
            5,
            1,
            2,
            4,
            3,
            11,
            16,
            2,
            2,
            5,
            5,
            1,
            3,
            21,
            2,
            6,
            2,
            1,
            2,
            1,
            2,
            1,
            3,
            0,
            2,
            4,
            5,
            1,
            3,
            2,
            4,
            0,
            8,
            3,
            2,
            0,
            8,
            15,
            12,
            2,
            2,
            8,
            2,
            2,
            2,
            21,
            2,
            6,
            2,
            1,
            2,
            4,
            3,
            9,
            2,
            2,
            2,
            2,
            3,
            0,
            16,
            3,
            3,
            9,
            18,
            2,
            2,
            7,
            3,
            1,
            3,
            21,
            2,
            6,
            2,
            1,
            2,
            4,
            3,
            8,
            3,
            1,
            3,
            2,
            9,
            1,
            5,
            1,
            2,
            4,
            3,
            9,
            2,
            0,
            17,
            1,
            2,
            5,
            4,
            2,
            2,
            3,
            4,
            1,
            2,
            0,
            2,
            1,
            4,
            1,
            4,
            2,
            4,
            11,
            5,
            4,
            4,
            2,
            2,
            3,
            3,
            0,
            7,
            0,
            15,
            9,
            18,
            2,
            2,
            7,
            2,
            2,
            2,
            22,
            2,
            9,
            2,
            4,
            4,
            7,
            2,
            2,
            2,
            3,
            8,
            1,
            2,
            1,
            7,
            3,
            3,
            9,
            19,
            1,
            2,
            7,
            2,
            2,
            2,
            22,
            2,
            9,
            2,
            4,
            3,
            8,
            2,
            2,
            2,
            3,
            8,
            1,
            8,
            0,
            2,
            3,
            3,
            9,
            19,
            1,
            2,
            7,
            2,
            2,
            2,
            22,
            2,
            15,
            4,
            7,
            2,
            2,
            2,
            3,
            10,
            0,
            9,
            3,
            3,
            9,
            11,
            5,
            3,
            1,
            2,
            17,
            4,
            23,
            2,
            8,
            2,
            0,
            3,
            6,
            4,
            0,
            5,
            5,
            2,
            0,
            2,
            7,
            19,
            1,
            14,
            57,
            6,
            14,
            2,
            9,
            40,
            1,
            2,
            0,
            3,
            1,
            2,
            0,
            3,
            0,
            7,
            3,
            2,
            6,
            2,
            2,
            2,
            0,
            2,
            0,
            3,
            1,
            2,
            12,
            2,
            2,
            3,
            4,
            2,
            0,
            2,
            5,
            3,
            9,
            3,
            1,
            35,
            0,
            24,
            1,
            7,
            9,
            12,
            0,
            2,
            0,
            2,
            0,
            5,
            9,
            2,
            35,
            5,
            19,
            2,
            5,
            5,
            7,
            2,
            35,
            10,
            0,
            58,
            73,
            7,
            77,
            3,
            37,
            11,
            42,
            2,
            0,
            4,
            328,
            2,
            3,
            3,
            6,
            2,
            0,
            2,
            3,
            3,
            40,
            2,
            3,
            3,
            32,
            2,
            3,
            3,
            6,
            2,
            0,
            2,
            3,
            3,
            14,
            2,
            56,
            2,
            3,
            3,
            66,
            5,
            0,
            33,
            15,
            17,
            84,
            13,
            619,
            3,
            16,
            2,
            25,
            6,
            74,
            22,
            12,
            2,
            6,
            12,
            20,
            12,
            19,
            13,
            12,
            2,
            2,
            2,
            1,
            13,
            51,
            3,
            29,
            4,
            0,
            5,
            1,
            3,
            9,
            34,
            2,
            3,
            9,
            7,
            87,
            9,
            42,
            6,
            69,
            11,
            28,
            4,
            11,
            5,
            11,
            11,
            39,
            3,
            4,
            12,
            43,
            5,
            25,
            7,
            10,
            38,
            27,
            5,
            62,
            2,
            28,
            3,
            10,
            7,
            9,
            14,
            0,
            89,
            75,
            5,
            9,
            18,
            8,
            13,
            42,
            4,
            11,
            71,
            55,
            9,
            9,
            4,
            48,
            83,
            2,
            2,
            30,
            14,
            230,
            23,
            280,
            3,
            5,
            3,
            37,
            3,
            5,
            3,
            7,
            2,
            0,
            2,
            0,
            2,
            0,
            2,
            30,
            3,
            52,
            2,
            6,
            2,
            0,
            4,
            2,
            2,
            6,
            4,
            3,
            3,
            5,
            5,
            12,
            6,
            2,
            2,
            6,
            67,
            1,
            20,
            0,
            29,
            0,
            14,
            0,
            17,
            4,
            60,
            12,
            5,
            0,
            4,
            11,
            18,
            0,
            5,
            0,
            3,
            9,
            2,
            0,
            4,
            4,
            7,
            0,
            2,
            0,
            2,
            0,
            2,
            3,
            2,
            10,
            3,
            3,
            6,
            4,
            5,
            0,
            53,
            1,
            2684,
            46,
            2,
            46,
            2,
            132,
            7,
            6,
            15,
            37,
            11,
            53,
            10,
            0,
            17,
            22,
            10,
            6,
            2,
            6,
            2,
            6,
            2,
            6,
            2,
            6,
            2,
            6,
            2,
            6,
            2,
            6,
            2,
            31,
            48,
            0,
            470,
            1,
            36,
            5,
            2,
            4,
            6,
            1,
            5,
            85,
            3,
            1,
            3,
            2,
            2,
            89,
            2,
            3,
            6,
            40,
            4,
            93,
            18,
            23,
            57,
            15,
            513,
            6581,
            75,
            20939,
            53,
            1164,
            68,
            45,
            3,
            268,
            4,
            27,
            21,
            31,
            3,
            13,
            13,
            1,
            2,
            24,
            9,
            69,
            11,
            1,
            38,
            8,
            3,
            102,
            3,
            1,
            111,
            44,
            25,
            51,
            13,
            68,
            12,
            9,
            7,
            23,
            4,
            0,
            5,
            45,
            3,
            35,
            13,
            28,
            4,
            64,
            15,
            10,
            39,
            54,
            10,
            13,
            3,
            9,
            7,
            22,
            4,
            1,
            5,
            66,
            25,
            2,
            227,
            42,
            2,
            1,
            3,
            9,
            7,
            11171,
            13,
            22,
            5,
            48,
            8453,
            301,
            3,
            61,
            3,
            105,
            39,
            6,
            13,
            4,
            6,
            11,
            2,
            12,
            2,
            4,
            2,
            0,
            2,
            1,
            2,
            1,
            2,
            107,
            34,
            362,
            19,
            63,
            3,
            53,
            41,
            11,
            5,
            15,
            17,
            6,
            13,
            1,
            25,
            2,
            33,
            4,
            2,
            134,
            20,
            9,
            8,
            25,
            5,
            0,
            2,
            25,
            12,
            88,
            4,
            5,
            3,
            5,
            3,
            5,
            3,
            2
        ], o = 0, s = [], r = 0; r < n.length; r += 2){
            s.push(o += n[r]);
            if (n[r + 1]) {
                s.push(45, o += n[r + 1]);
            }
        }
        t.wordChars = String.fromCharCode.apply(null, s);
    });
    ace.define("ace/mode/text", [
        "require",
        "exports",
        "module",
        "ace/config",
        "ace/tokenizer",
        "ace/mode/text_highlight_rules",
        "ace/mode/behaviour/cstyle",
        "ace/unicode",
        "ace/lib/lang",
        "ace/token_iterator",
        "ace/range"
    ], function(e, t, i) {
        "use strict";
        const n = e("../config");
        const Tokenizer = e("../tokenizer").Tokenizer;
        const TextHighlightRules = e("./text_highlight_rules").TextHighlightRules;
        const CstyleBehaviour = e("./behaviour/cstyle").CstyleBehaviour;
        const a = e("../unicode");
        const c = e("../lib/lang");
        const TokenIterator = e("../token_iterator").TokenIterator;
        const Range = e("../range").Range;
        const d = function() {
            this.HighlightRules = TextHighlightRules;
        };
        (function() {
            this.$defaultBehaviour = new CstyleBehaviour;
            this.tokenRe = new RegExp(`^[${a.wordChars}\\\$_]+`, "g");
            this.nonTokenRe = new RegExp(`^(?:[^${a.wordChars}\\\$_]|\\s])+`, "g");
            this.getTokenizer = function() {
                if (!this.$tokenizer) {
                    this.$highlightRules = this.$highlightRules || new this.HighlightRules(this.$highlightRuleConfig);
                    this.$tokenizer = new Tokenizer(this.$highlightRules.getRules());
                }
                return this.$tokenizer;
            };
            this.lineCommentStart = "";
            this.blockComment = "";
            this.toggleCommentLines = function(e, t, i, n) {
                const t_doc = t.doc;
                let s = true;
                let r = true;
                let a = Infinity;
                const l = t.getTabSize();
                let h = false;
                if (this.lineCommentStart) {
                    if (Array.isArray(this.lineCommentStart)) {
                        p = this.lineCommentStart.map(c.escapeRegExp).join("|");
                        f = this.lineCommentStart[0];
                    } else {
                        p = c.escapeRegExp(this.lineCommentStart);
                        f = this.lineCommentStart;
                    }
                    p = new RegExp(`^(\\s*)(?:${p}) ?`);
                    h = t.getUseSoftTabs();
                    v = function(e, t) {
                        const i = e.match(p);
                        if (i) {
                            const n = i[1].length;
                            let s = i[0].length;
                            if (!(u(e, n, s) || i[0][s - 1] != " ")) {
                                s--;
                            }
                            t_doc.removeInLine(t, n, s);
                        }
                    };
                    const d = `${f} `;
                    b = function(e, t) {
                        if (!(s && !/\S/.test(e))) {
                            if (u(e, a, a)) {
                                t_doc.insertInLine({
                                    row: t,
                                    column: a
                                }, d);
                            } else {
                                t_doc.insertInLine({
                                    row: t,
                                    column: a
                                }, f);
                            }
                        }
                    };
                    w = function(e, t) {
                        return p.test(e);
                    };
                    var u = (e, t, i)=>{
                        let n = 0;
                        while(t-- && e.charAt(t) == " "){
                            n++;
                        }
                        if (n % l != 0) {
                            return false;
                        }
                        for(n = 0; e.charAt(i++) == " ";){
                            n++;
                        }
                        if (l > 2) {
                            return n % l != l - 1;
                        }
                        return n % l == 0;
                    };
                } else {
                    if (!this.blockComment) {
                        return false;
                    }
                    var f = this.blockComment.start;
                    const g = this.blockComment.end;
                    var p = new RegExp(`^(\\s*)(?:${c.escapeRegExp(f)})`);
                    const m = new RegExp(`(?:${c.escapeRegExp(g)})\\s*\$`);
                    var b = function(e, t) {
                        if (!(w(e, t) || s && !/\S/.test(e))) {
                            t_doc.insertInLine({
                                row: t,
                                column: e.length
                            }, g);
                            t_doc.insertInLine({
                                row: t,
                                column: a
                            }, f);
                        }
                    };
                    var v = function(e, t) {
                        let i;
                        if (i = e.match(m)) {
                            t_doc.removeInLine(t, e.length - i[0].length, e.length);
                        }
                        if (i = e.match(p)) {
                            t_doc.removeInLine(t, i[1].length, i[0].length);
                        }
                    };
                    var w = function(e, i) {
                        if (p.test(e)) {
                            return true;
                        }
                        for(let n = t.getTokens(i), o = 0; o < n.length; o++){
                            if (n[o].type === "comment") {
                                return true;
                            }
                        }
                    };
                }
                function x(e) {
                    for(let t = i; t <= n; t++){
                        e(t_doc.getLine(t), t);
                    }
                }
                let y = Infinity;
                x((e, t)=>{
                    const i = e.search(/\S/);
                    if (i !== -1) {
                        if (i < a) {
                            a = i;
                        }
                        if (r && !w(e, t)) {
                            r = false;
                        }
                    } else if (y > e.length) {
                        y = e.length;
                    }
                });
                if (a == Infinity) {
                    a = y;
                    s = false;
                    r = false;
                }
                if (h && a % l != 0) {
                    a = Math.floor(a / l) * l;
                }
                x(r ? v : b);
            };
            this.toggleBlockComment = function(e, t, i, n) {
                let blockComment = this.blockComment;
                if (blockComment) {
                    if (!blockComment.start && blockComment[0]) {
                        blockComment = blockComment[0];
                    }
                    let s;
                    let r;
                    let a = (p = new TokenIterator(t, n.row, n.column)).getCurrentToken();
                    t.selection;
                    const c = t.selection.toOrientedRange();
                    if (a && /comment/.test(a.type)) {
                        let d;
                        let u;
                        while(a && /comment/.test(a.type)){
                            if ((m = a.value.indexOf(blockComment.start)) != -1) {
                                var f = p.getCurrentTokenRow();
                                var g = p.getCurrentTokenColumn() + m;
                                d = new Range(f, g, f, g + blockComment.start.length);
                                break;
                            }
                            a = p.stepBackward();
                        }
                        var p;
                        for(a = (p = new TokenIterator(t, n.row, n.column)).getCurrentToken(); a && /comment/.test(a.type);){
                            var m;
                            if ((m = a.value.indexOf(blockComment.end)) != -1) {
                                f = p.getCurrentTokenRow();
                                g = p.getCurrentTokenColumn() + m;
                                u = new Range(f, g, f, g + blockComment.end.length);
                                break;
                            }
                            a = p.stepForward();
                        }
                        if (u) {
                            t.remove(u);
                        }
                        if (d) {
                            t.remove(d);
                            s = d.start.row;
                            r = -blockComment.start.length;
                        }
                    } else {
                        r = blockComment.start.length;
                        s = i.start.row;
                        t.insert(i.end, blockComment.end);
                        t.insert(i.start, blockComment.start);
                    }
                    if (c.start.row == s) {
                        c.start.column += r;
                    }
                    if (c.end.row == s) {
                        c.end.column += r;
                    }
                    t.selection.fromOrientedRange(c);
                }
            };
            this.getNextLineIndent = function(e, t, i) {
                return this.$getIndent(t);
            };
            this.checkOutdent = function(e, t, i) {
                return false;
            };
            this.autoOutdent = function(e, t, i) {};
            this.$getIndent = function(e) {
                return e.match(/^\s*/)[0];
            };
            this.createWorker = function(e) {
                return null;
            };
            this.createModeDelegates = function(e) {
                this.$embeds = [];
                this.$modes = {};
                for(var t in e){
                    if (e[t]) {
                        const i = e[t];
                        const o = i.prototype.$id;
                        let s = n.$modes[o];
                        if (!s) {
                            n.$modes[o] = s = new i;
                        }
                        if (!n.$modes[t]) {
                            n.$modes[t] = s;
                        }
                        this.$embeds.push(t);
                        this.$modes[t] = s;
                    }
                }
                const r = [
                    "toggleBlockComment",
                    "toggleCommentLines",
                    "getNextLineIndent",
                    "checkOutdent",
                    "autoOutdent",
                    "transformAction",
                    "getCompletions"
                ];
                for(t = 0; t < r.length; t++){
                    ((e)=>{
                        const i = r[t];
                        const n = e[i];
                        e[r[t]] = function() {
                            return this.$delegator(i, arguments, n);
                        };
                    })(this);
                }
            };
            this.$delegator = function(e, t, i) {
                let n = t[0] || "start";
                if (typeof n !== "string") {
                    if (Array.isArray(n[2])) {
                        const o = n[2][n[2].length - 1];
                        if (r = this.$modes[o]) {
                            return r[e](...[
                                n[1]
                            ].concat(Array.prototype.slice.call(t, 1)));
                        }
                    }
                    n = n[0] || "start";
                }
                for(let s = 0; s < this.$embeds.length; s++){
                    if (this.$modes[this.$embeds[s]]) {
                        var r;
                        const a = n.split(this.$embeds[s]);
                        if (!a[0] && a[1]) {
                            t[0] = a[1];
                            return (r = this.$modes[this.$embeds[s]])[e].apply(r, t);
                        }
                    }
                }
                const c = i.apply(this, t);
                if (i) {
                    return c;
                }
            };
            this.transformAction = function(e, t, i, n, o) {
                if (this.$behaviour) {
                    const s = this.$behaviour.getBehaviours();
                    for(const r in s){
                        if (s[r][t]) {
                            const a = s[r][t].apply(this, arguments);
                            if (a) {
                                return a;
                            }
                        }
                    }
                }
            };
            this.getKeywords = function(e) {
                if (!this.completionKeywords) {
                    const t = this.$tokenizer.rules;
                    var i = [];
                    for(let n in t){
                        const o = t[n];
                        for(let s = 0, r = o.length; s < r; s++){
                            if (typeof o[s].token === "string") {
                                if (/keyword|support|storage/.test(o[s].token)) {
                                    i.push(o[s].regex);
                                }
                            } else if (typeof o[s].token === "object") {
                                for(let a = 0, c = o[s].token.length; a < c; a++){
                                    if (/keyword|support|storage/.test(o[s].token[a])) {
                                        n = o[s].regex.match(/\(.+?\)/g)[a];
                                        i.push(n.substr(1, n.length - 2));
                                    }
                                }
                            }
                        }
                    }
                    this.completionKeywords = i;
                }
                if (e) {
                    return i.concat(this.$keywordList || []);
                }
                return this.$keywordList;
            };
            this.$createKeywordList = function() {
                if (!this.$highlightRules) {
                    this.getTokenizer();
                }
                return this.$keywordList = this.$highlightRules.$keywordList || [];
            };
            this.getCompletions = function(e, t, i, n) {
                return (this.$keywordList || this.$createKeywordList()).map((e)=>({
                        name: e,
                        value: e,
                        score: 0,
                        meta: "keyword"
                    }));
            };
            this.$id = "ace/mode/text";
        }).call(d.prototype);
        t.Mode = d;
    });
    ace.define("ace/apply_delta", [
        "require",
        "exports",
        "module"
    ], function(e, t, i) {
        "use strict";
        t.applyDelta = function(e, t, i) {
            const row = t.start.row;
            const column = t.start.column;
            const s = e[row] || "";
            switch(t.action){
                case "insert":
                    if (t.lines.length === 1) {
                        e[row] = s.substring(0, column) + t.lines[0] + s.substring(column);
                    } else {
                        const r = [
                            row,
                            1
                        ].concat(t.lines);
                        e.splice.apply(e, r);
                        e[row] = s.substring(0, column) + e[row];
                        e[row + t.lines.length - 1] += s.substring(column);
                    }
                    break;
                case "remove":
                    const a = t.end.column;
                    const c = t.end.row;
                    if (row === c) {
                        e[row] = s.substring(0, column) + s.substring(a);
                    } else {
                        e.splice(row, c - row + 1, s.substring(0, column) + e[c].substring(a));
                    }
            }
        };
    });
    ace.define("ace/anchor", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/lib/event_emitter"
    ], function(e, t, i) {
        "use strict";
        const n = e("./lib/oop");
        const EventEmitter = e("./lib/event_emitter").EventEmitter;
        const s = t.Anchor = function(e, t, i) {
            this.$onChange = this.onChange.bind(this);
            this.attach(e);
            if (i === undefined) {
                this.setPosition(t.row, t.column);
            } else {
                this.setPosition(t, i);
            }
        };
        (function() {
            function e(e, t, i) {
                const n = i ? e.column <= t.column : e.column < t.column;
                return e.row < t.row || e.row == t.row && n;
            }
            n.implement(this, EventEmitter);
            this.getPosition = function() {
                return this.$clipPositionToDocument(this.row, this.column);
            };
            this.getDocument = function() {
                return this.document;
            };
            this.$insertRight = false;
            this.onChange = function(t) {
                if (!(t.start.row == t.end.row && t.start.row != this.row || t.start.row > this.row)) {
                    const i = ((t, i, n)=>{
                        const o = t.action == "insert";
                        const s = (o ? 1 : -1) * (t.end.row - t.start.row);
                        const r = (o ? 1 : -1) * (t.end.column - t.start.column);
                        const t_start = t.start;
                        const c = o ? t_start : t.end;
                        if (e(i, t_start, n)) {
                            return {
                                row: i.row,
                                column: i.column
                            };
                        }
                        if (e(c, i, !n)) {
                            return {
                                row: i.row + s,
                                column: i.column + (i.row == c.row ? r : 0)
                            };
                        }
                        return {
                            row: t_start.row,
                            column: t_start.column
                        };
                    })(t, {
                        row: this.row,
                        column: this.column
                    }, this.$insertRight);
                    this.setPosition(i.row, i.column, true);
                }
            };
            this.setPosition = function(e, t, i) {
                let n;
                n = i ? {
                    row: e,
                    column: t
                } : this.$clipPositionToDocument(e, t);
                if (this.row != n.row || this.column != n.column) {
                    const old = {
                        row: this.row,
                        column: this.column
                    };
                    this.row = n.row;
                    this.column = n.column;
                    this._signal("change", {
                        old,
                        value: n
                    });
                }
            };
            this.detach = function() {
                this.document.off("change", this.$onChange);
            };
            this.attach = function(e) {
                this.document = e || this.document;
                this.document.on("change", this.$onChange);
            };
            this.$clipPositionToDocument = function(e, t) {
                const i = {};
                if (e >= this.document.getLength()) {
                    i.row = Math.max(0, this.document.getLength() - 1);
                    i.column = this.document.getLine(i.row).length;
                } else if (e < 0) {
                    i.row = 0;
                    i.column = 0;
                } else {
                    i.row = e;
                    i.column = Math.min(this.document.getLine(i.row).length, Math.max(0, t));
                }
                if (t < 0) {
                    i.column = 0;
                }
                return i;
            };
        }).call(s.prototype);
    });
    ace.define("ace/document", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/apply_delta",
        "ace/lib/event_emitter",
        "ace/range",
        "ace/anchor"
    ], function(e, t, i) {
        "use strict";
        const n = e("./lib/oop");
        const applyDelta = e("./apply_delta").applyDelta;
        const EventEmitter = e("./lib/event_emitter").EventEmitter;
        const Range = e("./range").Range;
        const Anchor = e("./anchor").Anchor;
        const c = function(e) {
            this.$lines = [
                ""
            ];
            if (e.length === 0) {
                this.$lines = [
                    ""
                ];
            } else if (Array.isArray(e)) {
                this.insertMergedLines({
                    row: 0,
                    column: 0
                }, e);
            } else {
                this.insert({
                    row: 0,
                    column: 0
                }, e);
            }
        };
        (function() {
            n.implement(this, EventEmitter);
            this.setValue = function(e) {
                const t = this.getLength() - 1;
                this.remove(new Range(0, 0, t, this.getLine(t).length));
                this.insert({
                    row: 0,
                    column: 0
                }, e);
            };
            this.getValue = function() {
                return this.getAllLines().join(this.getNewLineCharacter());
            };
            this.createAnchor = function(e, t) {
                return new Anchor(this, e, t);
            };
            if ("aaa".split(/a/).length === 0) {
                this.$split = function(e) {
                    return e.replace(/\r\n|\r/g, "\n").split("\n");
                };
            } else {
                this.$split = function(e) {
                    return e.split(/\r\n|\r|\n/);
                };
            }
            this.$detectNewLine = function(e) {
                const t = e.match(/^.*?(\r\n|\r|\n)/m);
                this.$autoNewLine = t ? t[1] : "\n";
                this._signal("changeNewLineMode");
            };
            this.getNewLineCharacter = function() {
                switch(this.$newLineMode){
                    case "windows":
                        return "\r\n";
                    case "unix":
                        return "\n";
                    default:
                        return this.$autoNewLine || "\n";
                }
            };
            this.$autoNewLine = "";
            this.$newLineMode = "auto";
            this.setNewLineMode = function(e) {
                if (this.$newLineMode !== e) {
                    this.$newLineMode = e;
                    this._signal("changeNewLineMode");
                }
            };
            this.getNewLineMode = function() {
                return this.$newLineMode;
            };
            this.isNewLine = function(e) {
                return e == "\r\n" || e == "\r" || e == "\n";
            };
            this.getLine = function(e) {
                return this.$lines[e] || "";
            };
            this.getLines = function(e, t) {
                return this.$lines.slice(e, t + 1);
            };
            this.getAllLines = function() {
                return this.getLines(0, this.getLength());
            };
            this.getLength = function() {
                return this.$lines.length;
            };
            this.getTextRange = function(e) {
                return this.getLinesForRange(e).join(this.getNewLineCharacter());
            };
            this.getLinesForRange = function(e) {
                let t;
                if (e.start.row === e.end.row) {
                    t = [
                        this.getLine(e.start.row).substring(e.start.column, e.end.column)
                    ];
                } else {
                    t = this.getLines(e.start.row, e.end.row);
                    t[0] = (t[0] || "").substring(e.start.column);
                    const i = t.length - 1;
                    if (e.end.row - e.start.row == i) {
                        t[i] = t[i].substring(0, e.end.column);
                    }
                }
                return t;
            };
            this.insertLines = function(e, t) {
                console.warn("Use of document.insertLines is deprecated. Use the insertFullLines method instead.");
                return this.insertFullLines(e, t);
            };
            this.removeLines = function(e, t) {
                console.warn("Use of document.removeLines is deprecated. Use the removeFullLines method instead.");
                return this.removeFullLines(e, t);
            };
            this.insertNewLine = function(e) {
                console.warn("Use of document.insertNewLine is deprecated. Use insertMergedLines(position, ['', '']) instead.");
                return this.insertMergedLines(e, [
                    "",
                    ""
                ]);
            };
            this.insert = function(e, t) {
                if (this.getLength() <= 1) {
                    this.$detectNewLine(t);
                }
                return this.insertMergedLines(e, this.$split(t));
            };
            this.insertInLine = function(e, t) {
                const start = this.clippedPos(e.row, e.column);
                const n = this.pos(e.row, e.column + t.length);
                this.applyDelta({
                    start,
                    end: n,
                    action: "insert",
                    lines: [
                        t
                    ]
                }, true);
                return this.clonePos(n);
            };
            this.clippedPos = function(e, t) {
                const i = this.getLength();
                if (e === undefined) {
                    e = i;
                } else if (e < 0) {
                    e = 0;
                } else if (e >= i) {
                    e = i - 1;
                    t = undefined;
                }
                const n = this.getLine(e);
                if (t == null) {
                    t = n.length;
                }
                return {
                    row: e,
                    column: t = Math.min(Math.max(t, 0), n.length)
                };
            };
            this.clonePos = function(e) {
                return {
                    row: e.row,
                    column: e.column
                };
            };
            this.pos = function(e, t) {
                return {
                    row: e,
                    column: t
                };
            };
            this.$clipPosition = function(e) {
                const t = this.getLength();
                if (e.row >= t) {
                    e.row = Math.max(0, t - 1);
                    e.column = this.getLine(t - 1).length;
                } else {
                    e.row = Math.max(0, e.row);
                    e.column = Math.min(Math.max(e.column, 0), this.getLine(e.row).length);
                }
                return e;
            };
            this.insertFullLines = function(e, t) {
                let i = 0;
                if ((e = Math.min(Math.max(e, 0), this.getLength())) < this.getLength()) {
                    t = t.concat([
                        ""
                    ]);
                    i = 0;
                } else {
                    t = [
                        ""
                    ].concat(t);
                    e--;
                    i = this.$lines[e].length;
                }
                this.insertMergedLines({
                    row: e,
                    column: i
                }, t);
            };
            this.insertMergedLines = function(e, t) {
                const i = this.clippedPos(e.row, e.column);
                const n = {
                    row: i.row + t.length - 1,
                    column: (t.length == 1 ? i.column : 0) + t[t.length - 1].length
                };
                this.applyDelta({
                    start: i,
                    end: n,
                    action: "insert",
                    lines: t
                });
                return this.clonePos(n);
            };
            this.remove = function(e) {
                const t = this.clippedPos(e.start.row, e.start.column);
                const i = this.clippedPos(e.end.row, e.end.column);
                this.applyDelta({
                    start: t,
                    end: i,
                    action: "remove",
                    lines: this.getLinesForRange({
                        start: t,
                        end: i
                    })
                });
                return this.clonePos(t);
            };
            this.removeInLine = function(e, t, i) {
                const n = this.clippedPos(e, t);
                const o = this.clippedPos(e, i);
                this.applyDelta({
                    start: n,
                    end: o,
                    action: "remove",
                    lines: this.getLinesForRange({
                        start: n,
                        end: o
                    })
                }, true);
                return this.clonePos(n);
            };
            this.removeFullLines = function(e, t) {
                e = Math.min(Math.max(0, e), this.getLength() - 1);
                const i = (t = Math.min(Math.max(0, t), this.getLength() - 1)) == this.getLength() - 1 && e > 0;
                const n = t < this.getLength() - 1;
                const o = i ? e - 1 : e;
                const s = i ? this.getLine(o).length : 0;
                const a = n ? t + 1 : t;
                const c = n ? 0 : this.getLine(a).length;
                const l = new Range(o, s, a, c);
                const h = this.$lines.slice(e, t + 1);
                this.applyDelta({
                    start: l.start,
                    end: l.end,
                    action: "remove",
                    lines: this.getLinesForRange(l)
                });
                return h;
            };
            this.removeNewLine = function(e) {
                if (e < this.getLength() - 1 && e >= 0) {
                    this.applyDelta({
                        start: this.pos(e, this.getLine(e).length),
                        end: this.pos(e + 1, 0),
                        action: "remove",
                        lines: [
                            "",
                            ""
                        ]
                    });
                }
            };
            this.replace = function(e, t) {
                if (!(e instanceof Range)) {
                    e = Range.fromPoints(e.start, e.end);
                }
                if (t.length === 0 && e.isEmpty()) {
                    return e.start;
                }
                if (t == this.getTextRange(e)) {
                    return e.end;
                }
                this.remove(e);
                if (t) {
                    return this.insert(e.start, t);
                }
                return e.start;
            };
            this.applyDeltas = function(e) {
                for(let t = 0; t < e.length; t++){
                    this.applyDelta(e[t]);
                }
            };
            this.revertDeltas = function(e) {
                for(let t = e.length - 1; t >= 0; t--){
                    this.revertDelta(e[t]);
                }
            };
            this.applyDelta = function(e, t) {
                const i = e.action == "insert";
                if (!(i ? e.lines.length <= 1 && !e.lines[0] : !Range.comparePoints(e.start, e.end))) {
                    if (i && e.lines.length > 20000) {
                        this.$splitAndapplyLargeDelta(e, 20000);
                    } else {
                        applyDelta(this.$lines, e, t);
                        this._signal("change", e);
                    }
                }
            };
            this.$safeApplyDelta = function(e) {
                const length = this.$lines.length;
                if (e.action == "remove" && e.start.row < length && e.end.row < length || e.action == "insert" && e.start.row <= length) {
                    this.applyDelta(e);
                }
            };
            this.$splitAndapplyLargeDelta = function(e, t) {
                const e_lines = e.lines;
                for(var n = e_lines.length - t + 1, o = e.start.row, s = e.start.column, r = 0, a = 0; r < n; r = a){
                    a += t - 1;
                    const c = e_lines.slice(r, a);
                    c.push("");
                    this.applyDelta({
                        start: this.pos(o + r, s),
                        end: this.pos(o + a, s = 0),
                        action: e.action,
                        lines: c
                    }, true);
                }
                e.lines = e_lines.slice(r);
                e.start.row = o + r;
                e.start.column = s;
                this.applyDelta(e, true);
            };
            this.revertDelta = function(e) {
                this.$safeApplyDelta({
                    start: this.clonePos(e.start),
                    end: this.clonePos(e.end),
                    action: e.action == "insert" ? "remove" : "insert",
                    lines: e.lines.slice()
                });
            };
            this.indexToPosition = function(e, t) {
                const i = this.$lines || this.getAllLines();
                const length = this.getNewLineCharacter().length;
                for(var o = t || 0, s = i.length; o < s; o++){
                    if ((e -= i[o].length + length) < 0) {
                        return {
                            row: o,
                            column: e + i[o].length + length
                        };
                    }
                }
                return {
                    row: s - 1,
                    column: e + i[s - 1].length + length
                };
            };
            this.positionToIndex = function(e, t) {
                const i = this.$lines || this.getAllLines();
                const length = this.getNewLineCharacter().length;
                let o = 0;
                for(let s = Math.min(e.row, i.length), r = t || 0; r < s; ++r){
                    o += i[r].length + length;
                }
                return o + e.column;
            };
        }).call(c.prototype);
        t.Document = c;
    });
    ace.define("ace/background_tokenizer", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/lib/event_emitter"
    ], function(e, t, i) {
        "use strict";
        const n = e("./lib/oop");
        const EventEmitter = e("./lib/event_emitter").EventEmitter;
        const s = function(e, t) {
            this.running = false;
            this.lines = [];
            this.states = [];
            this.currentLine = 0;
            this.tokenizer = e;
            const _this = this;
            this.$worker = function() {
                if (_this.running) {
                    const e = new Date;
                    for(var t = _this.currentLine, n = -1, o = _this.doc, s = t; _this.lines[t];){
                        t++;
                    }
                    const r = o.getLength();
                    let a = 0;
                    for(_this.running = false; t < r;){
                        _this.$tokenizeRow(t);
                        n = t;
                        do {
                            t++;
                        }while (_this.lines[t])
                        if (++a % 5 == 0 && new Date - e > 20) {
                            _this.running = setTimeout(_this.$worker, 20);
                            break;
                        }
                    }
                    _this.currentLine = t;
                    if (n == -1) {
                        n = t;
                    }
                    if (s <= n) {
                        _this.fireUpdateEvent(s, n);
                    }
                }
            };
        };
        (function() {
            n.implement(this, EventEmitter);
            this.setTokenizer = function(e) {
                this.tokenizer = e;
                this.lines = [];
                this.states = [];
                this.start(0);
            };
            this.setDocument = function(e) {
                this.doc = e;
                this.lines = [];
                this.states = [];
                this.stop();
            };
            this.fireUpdateEvent = function(first, last) {
                const i = {
                    first,
                    last
                };
                this._signal("update", {
                    data: i
                });
            };
            this.start = function(e) {
                this.currentLine = Math.min(e || 0, this.currentLine, this.doc.getLength());
                this.lines.splice(this.currentLine, this.lines.length);
                this.states.splice(this.currentLine, this.states.length);
                this.stop();
                this.running = setTimeout(this.$worker, 700);
            };
            this.scheduleStart = function() {
                if (!this.running) {
                    this.running = setTimeout(this.$worker, 700);
                }
            };
            this.$updateOnChange = function(e) {
                const row = e.start.row;
                const i = e.end.row - row;
                if (i === 0) {
                    this.lines[row] = null;
                } else if (e.action == "remove") {
                    this.lines.splice(row, i + 1, null);
                    this.states.splice(row, i + 1, null);
                } else {
                    const n = Array(i + 1);
                    n.unshift(row, 1);
                    this.lines.splice.apply(this.lines, n);
                    this.states.splice.apply(this.states, n);
                }
                this.currentLine = Math.min(row, this.currentLine, this.doc.getLength());
                this.stop();
            };
            this.stop = function() {
                if (this.running) {
                    clearTimeout(this.running);
                }
                this.running = false;
            };
            this.getTokens = function(e) {
                return this.lines[e] || this.$tokenizeRow(e);
            };
            this.getState = function(e) {
                if (this.currentLine == e) {
                    this.$tokenizeRow(e);
                }
                return this.states[e] || "start";
            };
            this.$tokenizeRow = function(e) {
                const t = this.doc.getLine(e);
                const i = this.states[e - 1];
                const n = this.tokenizer.getLineTokens(t, i, e);
                if (`${this.states[e]}` != `${n.state}`) {
                    this.states[e] = n.state;
                    this.lines[e + 1] = null;
                    if (this.currentLine > e + 1) {
                        this.currentLine = e + 1;
                    }
                } else if (this.currentLine == e) {
                    this.currentLine = e + 1;
                }
                return this.lines[e] = n.tokens;
            };
        }).call(s.prototype);
        t.BackgroundTokenizer = s;
    });
    ace.define("ace/search_highlight", [
        "require",
        "exports",
        "module",
        "ace/lib/lang",
        "ace/lib/oop",
        "ace/range"
    ], function(e, t, i) {
        "use strict";
        const n = e("./lib/lang");
        e("./lib/oop");
        const Range = e("./range").Range;
        const s = function(e, t, i) {
            this.setRegexp(e);
            this.clazz = t;
            this.type = i || "text";
        };
        (function() {
            this.MAX_RANGES = 500;
            this.setRegexp = function(e) {
                if (`${this.regExp}` != `${e}`) {
                    this.regExp = e;
                    this.cache = [];
                }
            };
            this.update = function(e, t, i, s) {
                if (this.regExp) {
                    const r = s.firstRow;
                    for(var a = s.lastRow, c = r; c <= a; c++){
                        let l = this.cache[c];
                        if (l == null) {
                            if ((l = n.getMatchOffsets(i.getLine(c), this.regExp)).length > this.MAX_RANGES) {
                                l = l.slice(0, this.MAX_RANGES);
                            }
                            l = l.map((e)=>new Range(c, e.offset, c, e.offset + e.length));
                            this.cache[c] = l.length ? l : "";
                        }
                        for(let h = l.length; h--;){
                            t.drawSingleLineMarker(e, l[h].toScreenRange(i), this.clazz, s);
                        }
                    }
                }
            };
        }).call(s.prototype);
        t.SearchHighlight = s;
    });
    ace.define("ace/edit_session/fold_line", [
        "require",
        "exports",
        "module",
        "ace/range"
    ], function(e, t, i) {
        "use strict";
        const Range = e("../range").Range;
        function o(e, t) {
            this.foldData = e;
            if (Array.isArray(t)) {
                this.folds = t;
            } else {
                t = this.folds = [
                    t
                ];
            }
            const i = t[t.length - 1];
            this.range = new Range(t[0].start.row, t[0].start.column, i.end.row, i.end.column);
            this.start = this.range.start;
            this.end = this.range.end;
            this.folds.forEach(function(e) {
                e.setFoldLine(this);
            }, this);
        }
        (function() {
            this.shiftRow = function(e) {
                this.start.row += e;
                this.end.row += e;
                this.folds.forEach((t)=>{
                    t.start.row += e;
                    t.end.row += e;
                });
            };
            this.addFold = function(e) {
                if (e.sameRow) {
                    if (e.start.row < this.startRow || e.endRow > this.endRow) {
                        throw new Error("Can't add a fold to this FoldLine as it has no connection");
                    }
                    this.folds.push(e);
                    this.folds.sort((e, t)=>-e.range.compareEnd(t.start.row, t.start.column));
                    if (this.range.compareEnd(e.start.row, e.start.column) > 0) {
                        this.end.row = e.end.row;
                        this.end.column = e.end.column;
                    } else if (this.range.compareStart(e.end.row, e.end.column) < 0) {
                        this.start.row = e.start.row;
                        this.start.column = e.start.column;
                    }
                } else if (e.start.row == this.end.row) {
                    this.folds.push(e);
                    this.end.row = e.end.row;
                    this.end.column = e.end.column;
                } else {
                    if (e.end.row != this.start.row) {
                        throw new Error("Trying to add fold to FoldRow that doesn't have a matching row");
                    }
                    this.folds.unshift(e);
                    this.start.row = e.start.row;
                    this.start.column = e.start.column;
                }
                e.foldLine = this;
            };
            this.containsRow = function(e) {
                return e >= this.start.row && e <= this.end.row;
            };
            this.walk = function(e, t, i) {
                let n;
                let o;
                let s = 0;
                const folds = this.folds;
                let a = true;
                if (t == null) {
                    t = this.end.row;
                    i = this.end.column;
                }
                for(let c = 0; c < folds.length; c++){
                    if ((o = (n = folds[c]).range.compareStart(t, i)) == -1) {
                        return void e(null, t, i, s, a);
                    }
                    if (!e(null, n.start.row, n.start.column, s, a) && e(n.placeholder, n.start.row, n.start.column, s) || o === 0) {
                        return;
                    }
                    a = !n.sameRow;
                    s = n.end.column;
                }
                e(null, t, i, s, a);
            };
            this.getNextFoldTo = function(e, t) {
                let fold;
                let n;
                for(let o = 0; o < this.folds.length; o++){
                    if ((n = (fold = this.folds[o]).range.compareEnd(e, t)) == -1) {
                        return {
                            fold,
                            kind: "after"
                        };
                    }
                    if (n === 0) {
                        return {
                            fold,
                            kind: "inside"
                        };
                    }
                }
                return null;
            };
            this.addRemoveChars = function(e, t, i) {
                let n;
                let o;
                const s = this.getNextFoldTo(e, t);
                if (s) {
                    n = s.fold;
                    if (s.kind == "inside" && n.start.column != t && n.start.row != e) {
                        if (window.console) {
                            window.console.log(e, t, n);
                        }
                    } else if (n.start.row == e) {
                        let r = (o = this.folds).indexOf(n);
                        for(r === 0 && (this.start.column += i); r < o.length; r++){
                            (n = o[r]).start.column += i;
                            if (!n.sameRow) {
                                return;
                            }
                            n.end.column += i;
                        }
                        this.end.column += i;
                    }
                }
            };
            this.split = function(e, t) {
                const i = this.getNextFoldTo(e, t);
                if (!i || i.kind == "inside") {
                    return null;
                }
                const i_fold = i.fold;
                let folds = this.folds;
                const foldData = this.foldData;
                const a = folds.indexOf(i_fold);
                const c = folds[a - 1];
                this.end.row = c.end.row;
                this.end.column = c.end.column;
                const l = new o(foldData, folds = folds.splice(a, folds.length - a));
                foldData.splice(foldData.indexOf(this) + 1, 0, l);
                return l;
            };
            this.merge = function(e) {
                for(let t = e.folds, i = 0; i < t.length; i++){
                    this.addFold(t[i]);
                }
                const foldData = this.foldData;
                foldData.splice(foldData.indexOf(e), 1);
            };
            this.toString = function() {
                const e = [
                    `${this.range.toString()}: [`
                ];
                this.folds.forEach((t)=>{
                    e.push(`  ${t.toString()}`);
                });
                e.push("]");
                return e.join("\n");
            };
            this.idxToPosition = function(e) {
                let t = 0;
                for(let i = 0; i < this.folds.length; i++){
                    const fold = this.folds[i];
                    if ((e -= fold.start.column - t) < 0) {
                        return {
                            row: fold.start.row,
                            column: fold.start.column + e
                        };
                    }
                    if ((e -= fold.placeholder.length) < 0) {
                        return fold.start;
                    }
                    t = fold.end.column;
                }
                return {
                    row: this.end.row,
                    column: this.end.column + e
                };
            };
        }).call(o.prototype);
        t.FoldLine = o;
    });
    ace.define("ace/range_list", [
        "require",
        "exports",
        "module",
        "ace/range"
    ], function(e, t, i) {
        "use strict";
        const comparePoints = e("./range").Range.comparePoints;
        const o = function() {
            this.ranges = [];
            this.$bias = 1;
        };
        (function() {
            this.comparePoints = comparePoints;
            this.pointIndex = function(e, t, i) {
                for(var o = this.ranges, s = i || 0; s < o.length; s++){
                    const r = o[s];
                    const a = comparePoints(e, r.end);
                    if (!(a > 0)) {
                        const c = comparePoints(e, r.start);
                        if (a === 0) {
                            if (t && c !== 0) {
                                return -s - 2;
                            }
                            return s;
                        }
                        if (c > 0 || c === 0 && !t) {
                            return s;
                        }
                        return -s - 1;
                    }
                }
                return -s - 1;
            };
            this.add = function(e) {
                const t = !e.isEmpty();
                let i = this.pointIndex(e.start, t);
                if (i < 0) {
                    i = -i - 1;
                }
                let n = this.pointIndex(e.end, t, i);
                if (n < 0) {
                    n = -n - 1;
                } else {
                    n++;
                }
                return this.ranges.splice(i, n - i, e);
            };
            this.addList = function(e) {
                const t = [];
                for(let i = e.length; i--;){
                    t.push.apply(t, this.add(e[i]));
                }
                return t;
            };
            this.substractPoint = function(e) {
                const t = this.pointIndex(e);
                if (t >= 0) {
                    return this.ranges.splice(t, 1);
                }
            };
            this.merge = function() {
                let e;
                const t = [];
                for(var i = this.ranges, o = (i = i.sort((e, t)=>comparePoints(e.start, t.start)))[0], s = 1; s < i.length; s++){
                    e = o;
                    o = i[s];
                    const r = comparePoints(e.end, o.start);
                    if (!(r < 0)) {
                        if (r != 0 || e.isEmpty() || o.isEmpty()) {
                            if (comparePoints(e.end, o.end) < 0) {
                                e.end.row = o.end.row;
                                e.end.column = o.end.column;
                            }
                            i.splice(s, 1);
                            t.push(o);
                            o = e;
                            s--;
                        }
                    }
                }
                this.ranges = i;
                return t;
            };
            this.contains = function(e, t) {
                return this.pointIndex({
                    row: e,
                    column: t
                }) >= 0;
            };
            this.containsPoint = function(e) {
                return this.pointIndex(e) >= 0;
            };
            this.rangeAtPoint = function(e) {
                const t = this.pointIndex(e);
                if (t >= 0) {
                    return this.ranges[t];
                }
            };
            this.clipRows = function(e, t) {
                const ranges = this.ranges;
                if (ranges[0].start.row > t || ranges[ranges.length - 1].start.row < e) {
                    return [];
                }
                let n = this.pointIndex({
                    row: e,
                    column: 0
                });
                if (n < 0) {
                    n = -n - 1;
                }
                let o = this.pointIndex({
                    row: t,
                    column: 0
                }, n);
                if (o < 0) {
                    o = -o - 1;
                }
                const s = [];
                for(let r = n; r < o; r++){
                    s.push(ranges[r]);
                }
                return s;
            };
            this.removeAll = function() {
                return this.ranges.splice(0, this.ranges.length);
            };
            this.attach = function(e) {
                if (this.session) {
                    this.detach();
                }
                this.session = e;
                this.onChange = this.$onChange.bind(this);
                this.session.on("change", this.onChange);
            };
            this.detach = function() {
                if (this.session) {
                    this.session.removeListener("change", this.onChange);
                    this.session = null;
                }
            };
            this.$onChange = function(e) {
                const { start, end } = e;
                for(var n = start.row, o = end.row, s = this.ranges, r = 0, a = s.length; r < a && !((h = s[r]).end.row >= n); r++);
                if (e.action == "insert") {
                    var c = o - n;
                    var l = -start.column + end.column;
                    for(; r < a && !((h = s[r]).start.row > n); r++){
                        if (h.start.row == n && h.start.column >= start.column) {
                            if (!(h.start.column == start.column && this.$bias <= 0)) {
                                h.start.column += l;
                                h.start.row += c;
                            }
                        }
                        if (h.end.row == n && h.end.column >= start.column) {
                            if (h.end.column == start.column && this.$bias < 0) {
                                continue;
                            }
                            if (h.end.column == start.column && l > 0 && r < a - 1 && h.end.column > h.start.column && h.end.column == s[r + 1].start.column) {
                                h.end.column -= l;
                            }
                            h.end.column += l;
                            h.end.row += c;
                        }
                    }
                } else {
                    c = n - o;
                    for(l = start.column - end.column; r < a && !((h = s[r]).start.row > o); r++){
                        if (h.end.row < o && (n < h.end.row || n == h.end.row && start.column < h.end.column)) {
                            h.end.row = n;
                            h.end.column = start.column;
                        } else if (h.end.row == o) {
                            if (h.end.column <= end.column) {
                                if (c || h.end.column > start.column) {
                                    h.end.column = start.column;
                                    h.end.row = start.row;
                                }
                            } else {
                                h.end.column += l;
                                h.end.row += c;
                            }
                        } else if (h.end.row > o) {
                            h.end.row += c;
                        }
                        if (h.start.row < o && (n < h.start.row || n == h.start.row && start.column < h.start.column)) {
                            h.start.row = n;
                            h.start.column = start.column;
                        } else if (h.start.row == o) {
                            if (h.start.column <= end.column) {
                                if (c || h.start.column > start.column) {
                                    h.start.column = start.column;
                                    h.start.row = start.row;
                                }
                            } else {
                                h.start.column += l;
                                h.start.row += c;
                            }
                        } else if (h.start.row > o) {
                            h.start.row += c;
                        }
                    }
                }
                if (c != 0 && r < a) {
                    for(; r < a; r++){
                        var h;
                        (h = s[r]).start.row += c;
                        h.end.row += c;
                    }
                }
            };
        }).call(o.prototype);
        t.RangeList = o;
    });
    ace.define("ace/edit_session/fold", [
        "require",
        "exports",
        "module",
        "ace/range_list",
        "ace/lib/oop"
    ], function(e, t, i) {
        "use strict";
        const RangeList = e("../range_list").RangeList;
        const o = e("../lib/oop");
        const s = t.Fold = function(e, t) {
            this.foldLine = null;
            this.placeholder = t;
            this.range = e;
            this.start = e.start;
            this.end = e.end;
            this.sameRow = e.start.row == e.end.row;
            this.subFolds = this.ranges = [];
        };
        function r(e, t) {
            e.row -= t.row;
            if (e.row == 0) {
                e.column -= t.column;
            }
        }
        function a(e, t) {
            if (e.row == 0) {
                e.column += t.column;
            }
            e.row += t.row;
        }
        o.inherits(s, RangeList);
        (function() {
            this.toString = function() {
                return `"${this.placeholder}" ${this.range.toString()}`;
            };
            this.setFoldLine = function(e) {
                this.foldLine = e;
                this.subFolds.forEach((t)=>{
                    t.setFoldLine(e);
                });
            };
            this.clone = function() {
                const e = this.range.clone();
                const t = new s(e, this.placeholder);
                this.subFolds.forEach((e)=>{
                    t.subFolds.push(e.clone());
                });
                t.collapseChildren = this.collapseChildren;
                return t;
            };
            this.addSubFold = function(e) {
                if (!this.range.isEqual(e)) {
                    let t;
                    let i;
                    t = e;
                    i = this.start;
                    r(t.start, i);
                    r(t.end, i);
                    for(var n = e.start.row, o = e.start.column, s = 0, a = -1; s < this.subFolds.length && (a = this.subFolds[s].range.compare(n, o)) == 1; s++);
                    const c = this.subFolds[s];
                    let l = 0;
                    if (a == 0) {
                        if (c.range.containsRange(e)) {
                            return c.addSubFold(e);
                        }
                        l = 1;
                    }
                    n = e.range.end.row;
                    o = e.range.end.column;
                    let h = s;
                    for(a = -1; h < this.subFolds.length && (a = this.subFolds[h].range.compare(n, o)) == 1; h++);
                    if (a == 0) {
                        h++;
                    }
                    const d = this.subFolds.splice(s, h - s, e);
                    for(let u = a == 0 ? d.length - 1 : d.length, f = l; f < u; f++){
                        e.addSubFold(d[f]);
                    }
                    e.setFoldLine(this.foldLine);
                    return e;
                }
            };
            this.restoreRange = function(e) {
                return ((e, t)=>{
                    a(e.start, t);
                    a(e.end, t);
                })(e, this.start);
            };
        }).call(s.prototype);
    });
    ace.define("ace/edit_session/folding", [
        "require",
        "exports",
        "module",
        "ace/range",
        "ace/edit_session/fold_line",
        "ace/edit_session/fold",
        "ace/token_iterator"
    ], function(e, t, i) {
        "use strict";
        const Range = e("../range").Range;
        const FoldLine = e("./fold_line").FoldLine;
        const Fold = e("./fold").Fold;
        const TokenIterator = e("../token_iterator").TokenIterator;
        t.Folding = function() {
            this.getFoldAt = function(e, t, i) {
                const n = this.getFoldLine(e);
                if (!n) {
                    return null;
                }
                for(let o = n.folds, s = 0; s < o.length; s++){
                    const r = o[s].range;
                    if (r.contains(e, t)) {
                        if (i == 1 && r.isEnd(e, t) && !r.isEmpty()) {
                            continue;
                        }
                        if (i == -1 && r.isStart(e, t) && !r.isEmpty()) {
                            continue;
                        }
                        return o[s];
                    }
                }
            };
            this.getFoldsInRange = function(e) {
                const { start, end } = e;
                const $foldData = this.$foldData;
                const o = [];
                start.column += 1;
                end.column -= 1;
                for(let s = 0; s < $foldData.length; s++){
                    let r = $foldData[s].range.compareRange(e);
                    if (r != 2) {
                        if (r == -2) {
                            break;
                        }
                        for(let a = $foldData[s].folds, c = 0; c < a.length; c++){
                            const l = a[c];
                            if ((r = l.range.compareRange(e)) == -2) {
                                break;
                            }
                            if (r != 2) {
                                if (r == 42) {
                                    break;
                                }
                                o.push(l);
                            }
                        }
                    }
                }
                start.column -= 1;
                end.column += 1;
                return o;
            };
            this.getFoldsInRangeList = function(e) {
                if (Array.isArray(e)) {
                    var t = [];
                    e.forEach(function(e) {
                        t = t.concat(this.getFoldsInRange(e));
                    }, this);
                } else {
                    t = this.getFoldsInRange(e);
                }
                return t;
            };
            this.getAllFolds = function() {
                const e = [];
                for(let t = this.$foldData, i = 0; i < t.length; i++){
                    for(let n = 0; n < t[i].folds.length; n++){
                        e.push(t[i].folds[n]);
                    }
                }
                return e;
            };
            this.getFoldStringAt = function(e, t, i, n) {
                if (!(n = n || this.getFoldLine(e))) {
                    return null;
                }
                let o;
                let s;
                let r = {
                    end: {
                        column: 0
                    }
                };
                for(let a = 0; a < n.folds.length; a++){
                    const c = (s = n.folds[a]).range.compareEnd(e, t);
                    if (c == -1) {
                        o = this.getLine(s.start.row).substring(r.end.column, s.start.column);
                        break;
                    }
                    if (c === 0) {
                        return null;
                    }
                    r = s;
                }
                if (!o) {
                    o = this.getLine(s.start.row).substring(r.end.column);
                }
                if (i == -1) {
                    return o.substring(0, t - r.end.column);
                }
                if (i == 1) {
                    return o.substring(t - r.end.column);
                }
                return o;
            };
            this.getFoldLine = function(e, t) {
                const $foldData = this.$foldData;
                let n = 0;
                if (t) {
                    n = $foldData.indexOf(t);
                }
                if (n == -1) {
                    n = 0;
                }
                for(; n < $foldData.length; n++){
                    const o = $foldData[n];
                    if (o.start.row <= e && o.end.row >= e) {
                        return o;
                    }
                    if (o.end.row > e) {
                        return null;
                    }
                }
                return null;
            };
            this.getNextFoldLine = function(e, t) {
                const $foldData = this.$foldData;
                let n = 0;
                if (t) {
                    n = $foldData.indexOf(t);
                }
                if (n == -1) {
                    n = 0;
                }
                for(; n < $foldData.length; n++){
                    const o = $foldData[n];
                    if (o.end.row >= e) {
                        return o;
                    }
                }
                return null;
            };
            this.getFoldedRowCount = function(e, t) {
                for(var i = this.$foldData, n = t - e + 1, o = 0; o < i.length; o++){
                    const s = i[o];
                    const r = s.end.row;
                    const a = s.start.row;
                    if (r >= t) {
                        if (a < t) {
                            if (a >= e) {
                                n -= t - a;
                            } else {
                                n = 0;
                            }
                        }
                        break;
                    }
                    if (r >= e) {
                        n -= a >= e ? r - a : r - e + 1;
                    }
                }
                return n;
            };
            this.$addFoldLine = function(e) {
                this.$foldData.push(e);
                this.$foldData.sort((e, t)=>e.start.row - t.start.row);
                return e;
            };
            this.addFold = function(e, t) {
                let i;
                const $foldData = this.$foldData;
                let r = false;
                if (e instanceof Fold) {
                    i = e;
                } else {
                    i = new Fold(t, e);
                    i.collapseChildren = t.collapseChildren;
                }
                this.$clipRangeToDocument(i.range);
                const row = i.start.row;
                const column = i.start.column;
                const row_1 = i.end.row;
                const column_1 = i.end.column;
                const d = this.getFoldAt(row, column, 1);
                const u = this.getFoldAt(row_1, column_1, -1);
                if (d && u == d) {
                    return d.addSubFold(i);
                }
                if (d && !d.range.isStart(row, column)) {
                    this.removeFold(d);
                }
                if (u && !u.range.isEnd(row_1, column_1)) {
                    this.removeFold(u);
                }
                const f = this.getFoldsInRange(i.range);
                if (f.length > 0) {
                    this.removeFolds(f);
                    if (!i.collapseChildren) {
                        f.forEach((e)=>{
                            i.addSubFold(e);
                        });
                    }
                }
                for(let g = 0; g < $foldData.length; g++){
                    var p = $foldData[g];
                    if (row_1 == p.start.row) {
                        p.addFold(i);
                        r = true;
                        break;
                    }
                    if (row == p.end.row) {
                        p.addFold(i);
                        r = true;
                        if (!i.sameRow) {
                            const m = $foldData[g + 1];
                            if (m && m.start.row == row_1) {
                                p.merge(m);
                                break;
                            }
                        }
                        break;
                    }
                    if (row_1 <= p.start.row) {
                        break;
                    }
                }
                if (!r) {
                    p = this.$addFoldLine(new FoldLine(this.$foldData, i));
                }
                if (this.$useWrapMode) {
                    this.$updateWrapData(p.start.row, p.start.row);
                } else {
                    this.$updateRowLengthCache(p.start.row, p.start.row);
                }
                this.$modified = true;
                this._signal("changeFold", {
                    data: i,
                    action: "add"
                });
                return i;
            };
            this.addFolds = function(e) {
                e.forEach(function(e) {
                    this.addFold(e);
                }, this);
            };
            this.removeFold = function(e) {
                const e_foldLine = e.foldLine;
                const row = e_foldLine.start.row;
                const row_1 = e_foldLine.end.row;
                const $foldData = this.$foldData;
                let t_folds = e_foldLine.folds;
                if (t_folds.length == 1) {
                    $foldData.splice($foldData.indexOf(e_foldLine), 1);
                } else if (e_foldLine.range.isEnd(e.end.row, e.end.column)) {
                    t_folds.pop();
                    e_foldLine.end.row = t_folds[t_folds.length - 1].end.row;
                    e_foldLine.end.column = t_folds[t_folds.length - 1].end.column;
                } else if (e_foldLine.range.isStart(e.start.row, e.start.column)) {
                    t_folds.shift();
                    e_foldLine.start.row = t_folds[0].start.row;
                    e_foldLine.start.column = t_folds[0].start.column;
                } else if (e.sameRow) {
                    t_folds.splice(t_folds.indexOf(e), 1);
                } else {
                    const r = e_foldLine.split(e.start.row, e.start.column);
                    (t_folds = r.folds).shift();
                    r.start.row = t_folds[0].start.row;
                    r.start.column = t_folds[0].start.column;
                }
                if (!this.$updating) {
                    if (this.$useWrapMode) {
                        this.$updateWrapData(row, row_1);
                    } else {
                        this.$updateRowLengthCache(row, row_1);
                    }
                }
                this.$modified = true;
                this._signal("changeFold", {
                    data: e,
                    action: "remove"
                });
            };
            this.removeFolds = function(e) {
                const t = [];
                for(let i = 0; i < e.length; i++){
                    t.push(e[i]);
                }
                t.forEach(function(e) {
                    this.removeFold(e);
                }, this);
                this.$modified = true;
            };
            this.expandFold = function(e) {
                this.removeFold(e);
                e.subFolds.forEach(function(t) {
                    e.restoreRange(t);
                    this.addFold(t);
                }, this);
                if (e.collapseChildren > 0) {
                    this.foldAll(e.start.row + 1, e.end.row, e.collapseChildren - 1);
                }
                e.subFolds = [];
            };
            this.expandFolds = function(e) {
                e.forEach(function(e) {
                    this.expandFold(e);
                }, this);
            };
            this.unfold = function(e, t) {
                let i;
                let o;
                if (e == null) {
                    i = new Range(0, 0, this.getLength(), 0);
                    if (t == null) {
                        t = true;
                    }
                } else {
                    i = typeof e === "number" ? new Range(e, 0, e, this.getLine(e).length) : "row" in e ? Range.fromPoints(e, e) : e;
                }
                o = this.getFoldsInRangeList(i);
                if (t != 0) {
                    this.removeFolds(o);
                } else {
                    this.expandFolds(o);
                }
                if (o.length) {
                    return o;
                }
            };
            this.isRowFolded = function(e, t) {
                return !!this.getFoldLine(e, t);
            };
            this.getRowFoldEnd = function(e, t) {
                const i = this.getFoldLine(e, t);
                if (i) {
                    return i.end.row;
                }
                return e;
            };
            this.getRowFoldStart = function(e, t) {
                const i = this.getFoldLine(e, t);
                if (i) {
                    return i.start.row;
                }
                return e;
            };
            this.getFoldDisplayLine = function(e, t, i, n, o) {
                if (n == null) {
                    n = e.start.row;
                }
                if (o == null) {
                    o = 0;
                }
                if (t == null) {
                    t = e.end.row;
                }
                if (i == null) {
                    i = this.getLine(t).length;
                }
                const doc = this.doc;
                let r = "";
                e.walk(function(e, t, i, a) {
                    if (!(t < n)) {
                        if (t == n) {
                            if (i < o) {
                                return;
                            }
                            a = Math.max(o, a);
                        }
                        r += e ?? doc.getLine(t).substring(a, i);
                    }
                }, t, i);
                return r;
            };
            this.getDisplayLine = function(e, t, i, n) {
                let o;
                const s = this.getFoldLine(e);
                if (s) {
                    return this.getFoldDisplayLine(s, e, t, i, n);
                }
                return (o = this.doc.getLine(e)).substring(n || 0, t || o.length);
            };
            this.$cloneFoldData = function() {
                let e = [];
                return e = this.$foldData.map((t)=>{
                    const i = t.folds.map((e)=>e.clone());
                    return new FoldLine(e, i);
                });
            };
            this.toggleFold = function(e) {
                let t;
                let i;
                let n = this.selection.getRange();
                if (n.isEmpty()) {
                    const o = n.start;
                    if (t = this.getFoldAt(o.row, o.column)) {
                        return void this.expandFold(t);
                    }
                    if (i = this.findMatchingBracket(o)) {
                        if (n.comparePoint(i) == 1) {
                            n.end = i;
                        } else {
                            n.start = i;
                            n.start.column++;
                            n.end.column--;
                        }
                    } else if (i = this.findMatchingBracket({
                        row: o.row,
                        column: o.column + 1
                    })) {
                        if (n.comparePoint(i) == 1) {
                            n.end = i;
                        } else {
                            n.start = i;
                        }
                        n.start.column++;
                    } else {
                        n = this.getCommentFoldRange(o.row, o.column) || n;
                    }
                } else {
                    const s = this.getFoldsInRange(n);
                    if (e && s.length) {
                        return void this.expandFolds(s);
                    }
                    if (s.length == 1) {
                        t = s[0];
                    }
                }
                if (!t) {
                    t = this.getFoldAt(n.start.row, n.start.column);
                }
                if (t && t.range.toString() == n.toString()) {
                    this.expandFold(t);
                } else {
                    let r = "...";
                    if (!n.isMultiLine()) {
                        if ((r = this.getTextRange(n)).length < 4) {
                            return;
                        }
                        r = `${r.trim().substring(0, 2)}..`;
                    }
                    this.addFold(r, n);
                }
            };
            this.getCommentFoldRange = function(e, t, i) {
                let o = new TokenIterator(this, e, t);
                let s = o.getCurrentToken();
                let a = s && s.type;
                if (s && /^comment|string/.test(a)) {
                    if ((a = a.match(/comment|string/)[0]) == "comment") {
                        a += "|doc-start";
                    }
                    const c = new RegExp(a);
                    const l = new Range;
                    if (i != 1) {
                        do {
                            s = o.stepBackward();
                        }while (s && c.test(s.type))
                        o.stepForward();
                    }
                    l.start.row = o.getCurrentTokenRow();
                    l.start.column = o.getCurrentTokenColumn() + 2;
                    o = new TokenIterator(this, e, t);
                    if (i != -1) {
                        let h = -1;
                        do {
                            s = o.stepForward();
                            if (h == -1) {
                                const d = this.getState(o.$row);
                                if (!c.test(d)) {
                                    h = o.$row;
                                }
                            } else if (o.$row > h) {
                                break;
                            }
                        }while (s && c.test(s.type))
                        s = o.stepBackward();
                    } else {
                        s = o.getCurrentToken();
                    }
                    l.end.row = o.getCurrentTokenRow();
                    l.end.column = o.getCurrentTokenColumn() + s.value.length - 2;
                    return l;
                }
            };
            this.foldAll = function(e, t, i, n) {
                if (i == null) {
                    i = 100000;
                }
                const foldWidgets = this.foldWidgets;
                if (foldWidgets) {
                    t = t || this.getLength();
                    for(let s = e = e || 0; s < t; s++){
                        if (foldWidgets[s] == null) {
                            foldWidgets[s] = this.getFoldWidget(s);
                        }
                        if (foldWidgets[s] == "start" && (!n || n(s))) {
                            const r = this.getFoldWidgetRange(s);
                            if (r && r.isMultiLine() && r.end.row <= t && r.start.row >= e) {
                                s = r.end.row;
                                r.collapseChildren = i;
                                this.addFold("...", r);
                            }
                        }
                    }
                }
            };
            this.foldToLevel = function(e) {
                for(this.foldAll(); e-- > 0;){
                    this.unfold(null, false);
                }
            };
            this.foldAllComments = function() {
                const _this = this;
                this.foldAll(null, null, null, function(t) {
                    for(let i = _this.getTokens(t), n = 0; n < i.length; n++){
                        const o = i[n];
                        if (o.type != "text" || !/^\s+$/.test(o.value)) {
                            return !!/comment/.test(o.type);
                        }
                    }
                });
            };
            this.$foldStyles = {
                manual: 1,
                markbegin: 1,
                markbeginend: 1
            };
            this.$foldStyle = "markbegin";
            this.setFoldStyle = function(e) {
                if (!this.$foldStyles[e]) {
                    throw new Error(`invalid fold style: ${e}[${Object.keys(this.$foldStyles).join(", ")}]`);
                }
                if (this.$foldStyle != e) {
                    this.$foldStyle = e;
                    if (e == "manual") {
                        this.unfold();
                    }
                    const t = this.$foldMode;
                    this.$setFolding(null);
                    this.$setFolding(t);
                }
            };
            this.$setFolding = function(e) {
                if (this.$foldMode != e) {
                    this.$foldMode = e;
                    this.off("change", this.$updateFoldWidgets);
                    this.off("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets);
                    this._signal("changeAnnotation");
                    if (e && this.$foldStyle != "manual") {
                        this.foldWidgets = [];
                        this.getFoldWidget = e.getFoldWidget.bind(e, this, this.$foldStyle);
                        this.getFoldWidgetRange = e.getFoldWidgetRange.bind(e, this, this.$foldStyle);
                        this.$updateFoldWidgets = this.updateFoldWidgets.bind(this);
                        this.$tokenizerUpdateFoldWidgets = this.tokenizerUpdateFoldWidgets.bind(this);
                        this.on("change", this.$updateFoldWidgets);
                        this.on("tokenizerUpdate", this.$tokenizerUpdateFoldWidgets);
                    } else {
                        this.foldWidgets = null;
                    }
                }
            };
            this.getParentFoldRangeData = function(e, t) {
                const foldWidgets = this.foldWidgets;
                if (!foldWidgets || t && foldWidgets[e]) {
                    return {};
                }
                let firstRange;
                for(var o = e - 1; o >= 0;){
                    let s = foldWidgets[o];
                    if (s == null) {
                        s = foldWidgets[o] = this.getFoldWidget(o);
                    }
                    if (s == "start") {
                        var r = this.getFoldWidgetRange(o);
                        if (!firstRange) {
                            firstRange = r;
                        }
                        if (r && r.end.row >= e) {
                            break;
                        }
                    }
                    o--;
                }
                return {
                    range: o !== -1 && r,
                    firstRange
                };
            };
            this.onFoldWidgetClick = function(e, t) {
                const i = {
                    children: (t = t.domEvent).shiftKey,
                    all: t.ctrlKey || t.metaKey,
                    siblings: t.altKey
                };
                if (!this.$toggleFoldWidget(e, i)) {
                    const n = t.target || t.srcElement;
                    if (n && /ace_fold-widget/.test(n.className)) {
                        n.className += " ace_invalid";
                    }
                }
            };
            this.$toggleFoldWidget = function(e, t) {
                if (this.getFoldWidget) {
                    const i = this.getFoldWidget(e);
                    const n = this.getLine(e);
                    const o = i === "end" ? -1 : 1;
                    let s = this.getFoldAt(e, o === -1 ? 0 : n.length, o);
                    if (s) {
                        if (t.children || t.all) {
                            this.removeFold(s);
                        } else {
                            this.expandFold(s);
                        }
                        return s;
                    }
                    const r = this.getFoldWidgetRange(e, true);
                    if (r && !r.isMultiLine() && (s = this.getFoldAt(r.start.row, r.start.column, 1)) && r.isEqual(s.range)) {
                        this.removeFold(s);
                        return s;
                    }
                    if (t.siblings) {
                        const a = this.getParentFoldRangeData(e);
                        if (a.range) {
                            var c = a.range.start.row + 1;
                            var l = a.range.end.row;
                        }
                        this.foldAll(c, l, t.all ? 10000 : 0);
                    } else {
                        if (t.children) {
                            l = r ? r.end.row : this.getLength();
                            this.foldAll(e + 1, l, t.all ? 10000 : 0);
                        } else if (r) {
                            if (t.all) {
                                r.collapseChildren = 10000;
                            }
                            this.addFold("...", r);
                        }
                    }
                    return r;
                }
            };
            this.toggleFoldWidget = function(e) {
                let row = this.selection.getCursor().row;
                row = this.getRowFoldStart(row);
                let i = this.$toggleFoldWidget(row, {});
                if (!i) {
                    const n = this.getParentFoldRangeData(row, true);
                    if (i = n.range || n.firstRange) {
                        row = i.start.row;
                        const o = this.getFoldAt(row, this.getLine(row).length, 1);
                        if (o) {
                            this.removeFold(o);
                        } else {
                            this.addFold("...", i);
                        }
                    }
                }
            };
            this.updateFoldWidgets = function(e) {
                const row = e.start.row;
                const i = e.end.row - row;
                if (i === 0) {
                    this.foldWidgets[row] = null;
                } else if (e.action == "remove") {
                    this.foldWidgets.splice(row, i + 1, null);
                } else {
                    const n = Array(i + 1);
                    n.unshift(row, 1);
                    this.foldWidgets.splice.apply(this.foldWidgets, n);
                }
            };
            this.tokenizerUpdateFoldWidgets = function({ data }) {
                if (data.first != data.last && this.foldWidgets.length > data.first) {
                    this.foldWidgets.splice(data.first, this.foldWidgets.length);
                }
            };
        };
    });
    ace.define("ace/edit_session/bracket_match", [
        "require",
        "exports",
        "module",
        "ace/token_iterator",
        "ace/range"
    ], function(e, t, i) {
        "use strict";
        const TokenIterator = e("../token_iterator").TokenIterator;
        const Range = e("../range").Range;
        t.BracketMatch = function() {
            this.findMatchingBracket = function(e, t) {
                if (e.column == 0) {
                    return null;
                }
                const i = t || this.getLine(e.row).charAt(e.column - 1);
                if (i == "") {
                    return null;
                }
                const n = i.match(/([\(\[\{])|([\)\]\}])/);
                if (n) {
                    if (n[1]) {
                        return this.$findClosingBracket(n[1], e);
                    }
                    return this.$findOpeningBracket(n[2], e);
                }
                return null;
            };
            this.getBracketRange = function(e) {
                let t;
                const i = this.getLine(e.row);
                let n = true;
                let s = i.charAt(e.column - 1);
                let r = s && s.match(/([\(\[\{])|([\)\]\}])/);
                if (!r) {
                    s = i.charAt(e.column);
                    e = {
                        row: e.row,
                        column: e.column + 1
                    };
                    r = s && s.match(/([\(\[\{])|([\)\]\}])/);
                    n = false;
                }
                if (!r) {
                    return null;
                }
                if (r[1]) {
                    if (!(a = this.$findClosingBracket(r[1], e))) {
                        return null;
                    }
                    t = Range.fromPoints(e, a);
                    if (!n) {
                        t.end.column++;
                        t.start.column--;
                    }
                    t.cursor = t.end;
                } else {
                    var a;
                    if (!(a = this.$findOpeningBracket(r[2], e))) {
                        return null;
                    }
                    t = Range.fromPoints(a, e);
                    if (!n) {
                        t.start.column++;
                        t.end.column--;
                    }
                    t.cursor = t.start;
                }
                return t;
            };
            this.getMatchingBracketRanges = function(e) {
                const t = this.getLine(e.row);
                let i = t.charAt(e.column - 1);
                let n = i && i.match(/([\(\[\{])|([\)\]\}])/);
                if (!n) {
                    i = t.charAt(e.column);
                    e = {
                        row: e.row,
                        column: e.column + 1
                    };
                    n = i && i.match(/([\(\[\{])|([\)\]\}])/);
                }
                if (!n) {
                    return null;
                }
                const s = new Range(e.row, e.column - 1, e.row, e.column);
                const r = n[1] ? this.$findClosingBracket(n[1], e) : this.$findOpeningBracket(n[2], e);
                if (r) {
                    return [
                        s,
                        new Range(r.row, r.column, r.row, r.column + 1)
                    ];
                }
                return [
                    s
                ];
            };
            this.$brackets = {
                ")": "(",
                "(": ")",
                "]": "[",
                "[": "]",
                "{": "}",
                "}": "{",
                "<": ">",
                ">": "<"
            };
            this.$findOpeningBracket = function(e, t, i) {
                const o = this.$brackets[e];
                let s = 1;
                const r = new TokenIterator(this, t.row, t.column);
                let a = r.getCurrentToken();
                if (!a) {
                    a = r.stepForward();
                }
                if (a) {
                    if (!i) {
                        i = new RegExp(`(\\.?${a.type.replace(".", "\\.").replace("rparen", ".paren").replace(/\b(?:end)\b/, "(?:start|begin|end)")})+`);
                    }
                    let c = t.column - r.getCurrentTokenColumn() - 2;
                    let l = a.value;
                    while(true){
                        while(c >= 0){
                            const h = l.charAt(c);
                            if (h == o) {
                                if ((s -= 1) == 0) {
                                    return {
                                        row: r.getCurrentTokenRow(),
                                        column: c + r.getCurrentTokenColumn()
                                    };
                                }
                            } else {
                                if (h == e) {
                                    s += 1;
                                }
                            }
                            c -= 1;
                        }
                        do {
                            a = r.stepBackward();
                        }while (a && !i.test(a.type))
                        if (a == null) {
                            break;
                        }
                        c = (l = a.value).length - 1;
                    }
                    return null;
                }
            };
            this.$findClosingBracket = function(e, t, i) {
                const o = this.$brackets[e];
                let s = 1;
                const r = new TokenIterator(this, t.row, t.column);
                let a = r.getCurrentToken();
                if (!a) {
                    a = r.stepForward();
                }
                if (a) {
                    if (!i) {
                        i = new RegExp(`(\\.?${a.type.replace(".", "\\.").replace("lparen", ".paren").replace(/\b(?:start|begin)\b/, "(?:start|begin|end)")})+`);
                    }
                    let c = t.column - r.getCurrentTokenColumn();
                    while(true){
                        const l = a.value;
                        for(const h = l.length; c < h;){
                            const d = l.charAt(c);
                            if (d == o) {
                                if ((s -= 1) == 0) {
                                    return {
                                        row: r.getCurrentTokenRow(),
                                        column: c + r.getCurrentTokenColumn()
                                    };
                                }
                            } else {
                                if (d == e) {
                                    s += 1;
                                }
                            }
                            c += 1;
                        }
                        do {
                            a = r.stepForward();
                        }while (a && !i.test(a.type))
                        if (a == null) {
                            break;
                        }
                        c = 0;
                    }
                    return null;
                }
            };
        };
    });
    ace.define("ace/edit_session", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/lib/lang",
        "ace/bidihandler",
        "ace/config",
        "ace/lib/event_emitter",
        "ace/selection",
        "ace/mode/text",
        "ace/range",
        "ace/document",
        "ace/background_tokenizer",
        "ace/search_highlight",
        "ace/edit_session/folding",
        "ace/edit_session/bracket_match"
    ], function(e, t, i) {
        "use strict";
        const n = e("./lib/oop");
        const o = e("./lib/lang");
        const BidiHandler = e("./bidihandler").BidiHandler;
        const r = e("./config");
        const EventEmitter = e("./lib/event_emitter").EventEmitter;
        const Selection = e("./selection").Selection;
        const Mode = e("./mode/text").Mode;
        const Range = e("./range").Range;
        const Document = e("./document").Document;
        const BackgroundTokenizer = e("./background_tokenizer").BackgroundTokenizer;
        const SearchHighlight = e("./search_highlight").SearchHighlight;
        const g = function(e, t) {
            this.$breakpoints = [];
            this.$decorations = [];
            this.$frontMarkers = {};
            this.$backMarkers = {};
            this.$markerId = 1;
            this.$undoSelect = true;
            this.$foldData = [];
            this.id = `session${++g.$uid}`;
            this.$foldData.toString = function() {
                return this.join("\n");
            };
            this.on("changeFold", this.onChangeFold.bind(this));
            this.$onChange = this.onChange.bind(this);
            if (!(typeof e === "object" && e.getLine)) {
                e = new Document(e);
            }
            this.setDocument(e);
            this.selection = new Selection(this);
            this.$bidiHandler = new BidiHandler(this);
            r.resetOptions(this);
            this.setMode(t);
            r._signal("session", this);
        };
        g.$uid = 0;
        (function() {
            n.implement(this, EventEmitter);
            this.setDocument = function(e) {
                if (this.doc) {
                    this.doc.removeListener("change", this.$onChange);
                }
                this.doc = e;
                e.on("change", this.$onChange);
                if (this.bgTokenizer) {
                    this.bgTokenizer.setDocument(this.getDocument());
                }
                this.resetCaches();
            };
            this.getDocument = function() {
                return this.doc;
            };
            this.$resetRowCache = function(e) {
                if (!e) {
                    this.$docRowCache = [];
                    return void (this.$screenRowCache = []);
                }
                const length = this.$docRowCache.length;
                const i = this.$getRowCacheIndex(this.$docRowCache, e) + 1;
                if (length > i) {
                    this.$docRowCache.splice(i, length);
                    this.$screenRowCache.splice(i, length);
                }
            };
            this.$getRowCacheIndex = function(e, t) {
                for(var i = 0, n = e.length - 1; i <= n;){
                    const o = i + n >> 1;
                    const s = e[o];
                    if (t > s) {
                        i = o + 1;
                    } else {
                        if (!(t < s)) {
                            return o;
                        }
                        n = o - 1;
                    }
                }
                return i - 1;
            };
            this.resetCaches = function() {
                this.$modified = true;
                this.$wrapData = [];
                this.$rowLengthCache = [];
                this.$resetRowCache(0);
                if (this.bgTokenizer) {
                    this.bgTokenizer.start(0);
                }
            };
            this.onChangeFold = function({ data }) {
                this.$resetRowCache(data.start.row);
            };
            this.onChange = function(e) {
                this.$modified = true;
                this.$bidiHandler.onChange(e);
                this.$resetRowCache(e.start.row);
                const folds = this.$updateInternalDataOnChange(e);
                if (!this.$fromUndo && this.$undoManager) {
                    if (folds && folds.length) {
                        this.$undoManager.add({
                            action: "removeFolds",
                            folds
                        }, this.mergeUndoDeltas);
                        this.mergeUndoDeltas = true;
                    }
                    this.$undoManager.add(e, this.mergeUndoDeltas);
                    this.mergeUndoDeltas = true;
                    this.$informUndoManager.schedule();
                }
                if (this.bgTokenizer) {
                    this.bgTokenizer.$updateOnChange(e);
                }
                this._signal("change", e);
            };
            this.setValue = function(e) {
                this.doc.setValue(e);
                this.selection.moveTo(0, 0);
                this.$resetRowCache(0);
                this.setUndoManager(this.$undoManager);
                this.getUndoManager().reset();
            };
            this.getValue = this.toString = function() {
                return this.doc.getValue();
            };
            this.getSelection = function() {
                return this.selection;
            };
            this.getState = function(e) {
                return this.bgTokenizer.getState(e);
            };
            this.getTokens = function(e) {
                return this.bgTokenizer.getTokens(e);
            };
            this.getTokenAt = function(e, t) {
                let i;
                const n = this.bgTokenizer.getTokens(e);
                let o = 0;
                if (t == null) {
                    var s = n.length - 1;
                    o = this.getLine(e).length;
                } else {
                    for(s = 0; s < n.length && !((o += n[s].value.length) >= t); s++);
                }
                if (i = n[s]) {
                    i.index = s;
                    i.start = o - i.value.length;
                    return i;
                }
                return null;
            };
            this.setUndoManager = function(e) {
                this.$undoManager = e;
                if (this.$informUndoManager) {
                    this.$informUndoManager.cancel();
                }
                if (e) {
                    const t = this;
                    e.addSession(this);
                    this.$syncInformUndoManager = function() {
                        t.$informUndoManager.cancel();
                        t.mergeUndoDeltas = false;
                    };
                    this.$informUndoManager = o.delayedCall(this.$syncInformUndoManager);
                } else {
                    this.$syncInformUndoManager = function() {};
                }
            };
            this.markUndoGroup = function() {
                if (this.$syncInformUndoManager) {
                    this.$syncInformUndoManager();
                }
            };
            this.$defaultUndoManager = {
                undo: function() {},
                redo: function() {},
                hasUndo: function() {},
                hasRedo: function() {},
                reset: function() {},
                add: function() {},
                addSelection: function() {},
                startNewGroup: function() {},
                addSession: function() {}
            };
            this.getUndoManager = function() {
                return this.$undoManager || this.$defaultUndoManager;
            };
            this.getTabString = function() {
                if (this.getUseSoftTabs()) {
                    return o.stringRepeat(" ", this.getTabSize());
                }
                return "\t";
            };
            this.setUseSoftTabs = function(e) {
                this.setOption("useSoftTabs", e);
            };
            this.getUseSoftTabs = function() {
                return this.$useSoftTabs && !this.$mode.$indentWithTabs;
            };
            this.setTabSize = function(e) {
                this.setOption("tabSize", e);
            };
            this.getTabSize = function() {
                return this.$tabSize;
            };
            this.isTabStop = function(e) {
                return this.$useSoftTabs && e.column % this.$tabSize == 0;
            };
            this.setNavigateWithinSoftTabs = function(e) {
                this.setOption("navigateWithinSoftTabs", e);
            };
            this.getNavigateWithinSoftTabs = function() {
                return this.$navigateWithinSoftTabs;
            };
            this.$overwrite = false;
            this.setOverwrite = function(e) {
                this.setOption("overwrite", e);
            };
            this.getOverwrite = function() {
                return this.$overwrite;
            };
            this.toggleOverwrite = function() {
                this.setOverwrite(!this.$overwrite);
            };
            this.addGutterDecoration = function(e, t) {
                if (!this.$decorations[e]) {
                    this.$decorations[e] = "";
                }
                this.$decorations[e] += ` ${t}`;
                this._signal("changeBreakpoint", {});
            };
            this.removeGutterDecoration = function(e, t) {
                this.$decorations[e] = (this.$decorations[e] || "").replace(` ${t}`, "");
                this._signal("changeBreakpoint", {});
            };
            this.getBreakpoints = function() {
                return this.$breakpoints;
            };
            this.setBreakpoints = function(e) {
                this.$breakpoints = [];
                for(let t = 0; t < e.length; t++){
                    this.$breakpoints[e[t]] = "ace_breakpoint";
                }
                this._signal("changeBreakpoint", {});
            };
            this.clearBreakpoints = function() {
                this.$breakpoints = [];
                this._signal("changeBreakpoint", {});
            };
            this.setBreakpoint = function(e, t = "ace_breakpoint") {
                if (t) {
                    this.$breakpoints[e] = t;
                } else {
                    delete this.$breakpoints[e];
                }
                this._signal("changeBreakpoint", {});
            };
            this.clearBreakpoint = function(e) {
                delete this.$breakpoints[e];
                this._signal("changeBreakpoint", {});
            };
            this.addMarker = function(range, clazz, i, n) {
                const o = this.$markerId++;
                const s = {
                    range,
                    type: i || "line",
                    renderer: typeof i === "function" ? i : null,
                    clazz,
                    inFront: !!n,
                    id: o
                };
                if (n) {
                    this.$frontMarkers[o] = s;
                    this._signal("changeFrontMarker");
                } else {
                    this.$backMarkers[o] = s;
                    this._signal("changeBackMarker");
                }
                return o;
            };
            this.addDynamicMarker = function(e, t) {
                if (e.update) {
                    const i = this.$markerId++;
                    e.id = i;
                    e.inFront = !!t;
                    if (t) {
                        this.$frontMarkers[i] = e;
                        this._signal("changeFrontMarker");
                    } else {
                        this.$backMarkers[i] = e;
                        this._signal("changeBackMarker");
                    }
                    return e;
                }
            };
            this.removeMarker = function(e) {
                const t = this.$frontMarkers[e] || this.$backMarkers[e];
                if (t) {
                    delete (t.inFront ? this.$frontMarkers : this.$backMarkers)[e];
                    this._signal(t.inFront ? "changeFrontMarker" : "changeBackMarker");
                }
            };
            this.getMarkers = function(e) {
                if (e) {
                    return this.$frontMarkers;
                }
                return this.$backMarkers;
            };
            this.highlight = function(e) {
                if (!this.$searchHighlight) {
                    const t = new SearchHighlight(null, "ace_selected-word", "text");
                    this.$searchHighlight = this.addDynamicMarker(t);
                }
                this.$searchHighlight.setRegexp(e);
            };
            this.highlightLines = function(e, t, i, n) {
                if (typeof t !== "number") {
                    i = t;
                    t = e;
                }
                if (!i) {
                    i = "ace_step";
                }
                const o = new Range(e, 0, t, Infinity);
                o.id = this.addMarker(o, i, "fullLine", n);
                return o;
            };
            this.setAnnotations = function(e) {
                this.$annotations = e;
                this._signal("changeAnnotation", {});
            };
            this.getAnnotations = function() {
                return this.$annotations || [];
            };
            this.clearAnnotations = function() {
                this.setAnnotations([]);
            };
            this.$detectNewLine = function(e) {
                const t = e.match(/^.*?(\r?\n)/m);
                this.$autoNewLine = t ? t[1] : "\n";
            };
            this.getWordRange = function(e, t) {
                const i = this.getLine(e);
                let n = false;
                if (t > 0) {
                    n = !!i.charAt(t - 1).match(this.tokenRe);
                }
                if (!n) {
                    n = !!i.charAt(t).match(this.tokenRe);
                }
                if (n) var o = this.tokenRe;
                else {
                    o = /^\s+$/.test(i.slice(t - 1, t + 1)) ? /\s/ : this.nonTokenRe;
                }
                let s = t;
                if (s > 0) {
                    do {
                        s--;
                    }while (s >= 0 && i.charAt(s).match(o))
                    s++;
                }
                for(var r = t; r < i.length && i.charAt(r).match(o);){
                    r++;
                }
                return new Range(e, s, e, r);
            };
            this.getAWordRange = function(e, t) {
                for(var i = this.getWordRange(e, t), n = this.getLine(i.end.row); n.charAt(i.end.column).match(/[ \t]/);){
                    i.end.column += 1;
                }
                return i;
            };
            this.setNewLineMode = function(e) {
                this.doc.setNewLineMode(e);
            };
            this.getNewLineMode = function() {
                return this.doc.getNewLineMode();
            };
            this.setUseWorker = function(e) {
                this.setOption("useWorker", e);
            };
            this.getUseWorker = function() {
                return this.$useWorker;
            };
            this.onReloadTokenizer = function(e) {
                const e_data = e.data;
                this.bgTokenizer.start(e_data.first);
                this._signal("tokenizerUpdate", e);
            };
            this.$modes = r.$modes;
            this.$mode = null;
            this.$modeId = null;
            this.setMode = function(e, t) {
                if (e && typeof e === "object") {
                    if (e.getTokenizer) {
                        return this.$onChangeMode(e);
                    }
                    var i = e;
                    var n = i.path;
                } else {
                    n = e || "ace/mode/text";
                }
                if (!this.$modes["ace/mode/text"]) {
                    this.$modes["ace/mode/text"] = new Mode;
                }
                if (this.$modes[n] && !i) {
                    this.$onChangeMode(this.$modes[n]);
                    return void (t && t());
                }
                this.$modeId = n;
                r.loadModule([
                    "mode",
                    n
                ], (function(e) {
                    if (this.$modeId !== n) {
                        return t && t();
                    }
                    if (this.$modes[n] && !i) {
                        this.$onChangeMode(this.$modes[n]);
                    } else if (e && e.Mode) {
                        e = new e.Mode(i);
                        if (!i) {
                            this.$modes[n] = e;
                            e.$id = n;
                        }
                        this.$onChangeMode(e);
                    }
                    if (t) {
                        t();
                    }
                }).bind(this));
                if (!this.$mode) {
                    this.$onChangeMode(this.$modes["ace/mode/text"], true);
                }
            };
            this.$onChangeMode = function(mode, t) {
                if (!t) {
                    this.$modeId = mode.$id;
                }
                if (this.$mode !== mode) {
                    const oldMode = this.$mode;
                    this.$mode = mode;
                    this.$stopWorker();
                    if (this.$useWorker) {
                        this.$startWorker();
                    }
                    const n = mode.getTokenizer();
                    if (n.on !== undefined) {
                        const o = this.onReloadTokenizer.bind(this);
                        n.on("update", o);
                    }
                    if (this.bgTokenizer) {
                        this.bgTokenizer.setTokenizer(n);
                    } else {
                        this.bgTokenizer = new BackgroundTokenizer(n);
                        const s = this;
                        this.bgTokenizer.on("update", function(e) {
                            s._signal("tokenizerUpdate", e);
                        });
                    }
                    this.bgTokenizer.setDocument(this.getDocument());
                    this.tokenRe = mode.tokenRe;
                    this.nonTokenRe = mode.nonTokenRe;
                    if (!t) {
                        if (mode.attachToSession) {
                            mode.attachToSession(this);
                        }
                        this.$options.wrapMethod.set.call(this, this.$wrapMethod);
                        this.$setFolding(mode.foldingRules);
                        this.bgTokenizer.start(0);
                        this._emit("changeMode", {
                            oldMode,
                            mode
                        });
                    }
                }
            };
            this.$stopWorker = function() {
                if (this.$worker) {
                    this.$worker.terminate();
                    this.$worker = null;
                }
            };
            this.$startWorker = function() {
                try {
                    this.$worker = this.$mode.createWorker(this);
                } catch (error) {
                    r.warn("Could not load worker", error);
                    this.$worker = null;
                }
            };
            this.getMode = function() {
                return this.$mode;
            };
            this.$scrollTop = 0;
            this.setScrollTop = function(e) {
                if (!(this.$scrollTop === e || isNaN(e))) {
                    this.$scrollTop = e;
                    this._signal("changeScrollTop", e);
                }
            };
            this.getScrollTop = function() {
                return this.$scrollTop;
            };
            this.$scrollLeft = 0;
            this.setScrollLeft = function(e) {
                if (!(this.$scrollLeft === e || isNaN(e))) {
                    this.$scrollLeft = e;
                    this._signal("changeScrollLeft", e);
                }
            };
            this.getScrollLeft = function() {
                return this.$scrollLeft;
            };
            this.getScreenWidth = function() {
                this.$computeWidth();
                if (this.lineWidgets) {
                    return Math.max(this.getLineWidgetMaxWidth(), this.screenWidth);
                }
                return this.screenWidth;
            };
            this.getLineWidgetMaxWidth = function() {
                if (this.lineWidgetsWidth != null) {
                    return this.lineWidgetsWidth;
                }
                let e = 0;
                this.lineWidgets.forEach((t)=>{
                    if (t && t.screenWidth > e) {
                        e = t.screenWidth;
                    }
                });
                return this.lineWidgetWidth = e;
            };
            this.$computeWidth = function(e) {
                if (this.$modified || e) {
                    this.$modified = false;
                    if (this.$useWrapMode) {
                        return this.screenWidth = this.$wrapLimit;
                    }
                    const t = this.doc.getAllLines();
                    const i = this.$rowLengthCache;
                    let n = 0;
                    let o = 0;
                    let s = this.$foldData[o];
                    let r = s ? s.start.row : Infinity;
                    for(let a = t.length, c = 0; c < a; c++){
                        if (c > r) {
                            if ((c = s.end.row + 1) >= a) {
                                break;
                            }
                            r = (s = this.$foldData[o++]) ? s.start.row : Infinity;
                        }
                        if (i[c] == null) {
                            i[c] = this.$getStringScreenWidth(t[c])[0];
                        }
                        if (i[c] > n) {
                            n = i[c];
                        }
                    }
                    this.screenWidth = n;
                }
            };
            this.getLine = function(e) {
                return this.doc.getLine(e);
            };
            this.getLines = function(e, t) {
                return this.doc.getLines(e, t);
            };
            this.getLength = function() {
                return this.doc.getLength();
            };
            this.getTextRange = function(e) {
                return this.doc.getTextRange(e || this.selection.getRange());
            };
            this.insert = function(e, t) {
                return this.doc.insert(e, t);
            };
            this.remove = function(e) {
                return this.doc.remove(e);
            };
            this.removeFullLines = function(e, t) {
                return this.doc.removeFullLines(e, t);
            };
            this.undoChanges = function(e, t) {
                if (e.length) {
                    this.$fromUndo = true;
                    for(let i = e.length - 1; i != -1; i--){
                        const n = e[i];
                        if (n.action == "insert" || n.action == "remove") {
                            this.doc.revertDelta(n);
                        } else if (n.folds) {
                            this.addFolds(n.folds);
                        }
                    }
                    if (!t && this.$undoSelect) {
                        if (e.selectionBefore) {
                            this.selection.fromJSON(e.selectionBefore);
                        } else {
                            this.selection.setRange(this.$getUndoSelection(e, true));
                        }
                    }
                    this.$fromUndo = false;
                }
            };
            this.redoChanges = function(e, t) {
                if (e.length) {
                    this.$fromUndo = true;
                    for (const n of e){
                        if (!(n.action != "insert" && n.action != "remove")) {
                            this.doc.$safeApplyDelta(n);
                        }
                    }
                    if (!t && this.$undoSelect) {
                        if (e.selectionAfter) {
                            this.selection.fromJSON(e.selectionAfter);
                        } else {
                            this.selection.setRange(this.$getUndoSelection(e, false));
                        }
                    }
                    this.$fromUndo = false;
                }
            };
            this.setUndoSelect = function(e) {
                this.$undoSelect = e;
            };
            this.$getUndoSelection = function(e, t) {
                function i(e) {
                    if (t) {
                        return e.action !== "insert";
                    }
                    return e.action === "insert";
                }
                let n;
                let o;
                for (const r of e){
                    if (r.start) {
                        if (n) {
                            if (i(r)) {
                                o = r.start;
                                if (n.compare(o.row, o.column) == -1) {
                                    n.setStart(o);
                                }
                                o = r.end;
                                if (n.compare(o.row, o.column) == 1) {
                                    n.setEnd(o);
                                }
                            } else {
                                o = r.start;
                                if (n.compare(o.row, o.column) == -1) {
                                    n = Range.fromPoints(r.start, r.start);
                                }
                            }
                        } else {
                            n = i(r) ? Range.fromPoints(r.start, r.end) : Range.fromPoints(r.start, r.start);
                        }
                    }
                }
                return n;
            };
            this.replace = function(e, t) {
                return this.doc.replace(e, t);
            };
            this.moveText = function(e, t, i) {
                const n = this.getTextRange(e);
                const o = this.getFoldsInRange(e);
                const s = Range.fromPoints(t, t);
                if (!i) {
                    this.remove(e);
                    var r = e.start.row - e.end.row;
                    if (l = r ? -e.end.column : e.start.column - e.end.column) {
                        if (s.start.row == e.end.row && s.start.column > e.end.column) {
                            s.start.column += l;
                        }
                        if (s.end.row == e.end.row && s.end.column > e.end.column) {
                            s.end.column += l;
                        }
                    }
                    if (r && s.start.row >= e.end.row) {
                        s.start.row += r;
                        s.end.row += r;
                    }
                }
                s.end = this.insert(s.start, n);
                if (o.length) {
                    const a = e.start;
                    const c = s.start;
                    r = c.row - a.row;
                    var l = c.column - a.column;
                    this.addFolds(o.map((e)=>{
                        if ((e = e.clone()).start.row == a.row) {
                            e.start.column += l;
                        }
                        if (e.end.row == a.row) {
                            e.end.column += l;
                        }
                        e.start.row += r;
                        e.end.row += r;
                        return e;
                    }));
                }
                return s;
            };
            this.indentRows = function(e, t, i) {
                i = i.replace(/\t/g, this.getTabString());
                for(let n = e; n <= t; n++){
                    this.doc.insertInLine({
                        row: n,
                        column: 0
                    }, i);
                }
            };
            this.outdentRows = function(e) {
                for(let t = e.collapseRows(), i = new Range(0, 0, 0, 0), n = this.getTabSize(), o = t.start.row; o <= t.end.row; ++o){
                    const s = this.getLine(o);
                    i.start.row = o;
                    i.end.row = o;
                    for(var r = 0; r < n && s.charAt(r) == " "; ++r);
                    if (r < n && s.charAt(r) == "\t") {
                        i.start.column = r;
                        i.end.column = r + 1;
                    } else {
                        i.start.column = 0;
                        i.end.column = r;
                    }
                    this.remove(i);
                }
            };
            this.$moveLines = function(e, t, i) {
                e = this.getRowFoldStart(e);
                t = this.getRowFoldEnd(t);
                if (i < 0) {
                    if ((o = this.getRowFoldStart(e + i)) < 0) {
                        return 0;
                    }
                    var n = o - e;
                } else if (i > 0) {
                    var o;
                    if ((o = this.getRowFoldEnd(t + i)) > this.doc.getLength() - 1) {
                        return 0;
                    }
                    n = o - t;
                } else {
                    e = this.$clipRowToDocument(e);
                    n = (t = this.$clipRowToDocument(t)) - e + 1;
                }
                const s = new Range(e, 0, t, Number.MAX_VALUE);
                const r = this.getFoldsInRange(s).map((e)=>{
                    (e = e.clone()).start.row += n;
                    e.end.row += n;
                    return e;
                });
                const a = i == 0 ? this.doc.getLines(e, t) : this.doc.removeFullLines(e, t);
                this.doc.insertFullLines(e + n, a);
                if (r.length) {
                    this.addFolds(r);
                }
                return n;
            };
            this.moveLinesUp = function(e, t) {
                return this.$moveLines(e, t, -1);
            };
            this.moveLinesDown = function(e, t) {
                return this.$moveLines(e, t, 1);
            };
            this.duplicateLines = function(e, t) {
                return this.$moveLines(e, t, 0);
            };
            this.$clipRowToDocument = function(e) {
                return Math.max(0, Math.min(e, this.doc.getLength() - 1));
            };
            this.$clipColumnToRow = function(e, t) {
                if (t < 0) {
                    return 0;
                }
                return Math.min(this.doc.getLine(e).length, t);
            };
            this.$clipPositionToDocument = function(e, t) {
                t = Math.max(0, t);
                if (e < 0) {
                    e = 0;
                    t = 0;
                } else {
                    const i = this.doc.getLength();
                    if (e >= i) {
                        e = i - 1;
                        t = this.doc.getLine(i - 1).length;
                    } else {
                        t = Math.min(this.doc.getLine(e).length, t);
                    }
                }
                return {
                    row: e,
                    column: t
                };
            };
            this.$clipRangeToDocument = function(e) {
                if (e.start.row < 0) {
                    e.start.row = 0;
                    e.start.column = 0;
                } else {
                    e.start.column = this.$clipColumnToRow(e.start.row, e.start.column);
                }
                const t = this.doc.getLength() - 1;
                if (e.end.row > t) {
                    e.end.row = t;
                    e.end.column = this.doc.getLine(t).length;
                } else {
                    e.end.column = this.$clipColumnToRow(e.end.row, e.end.column);
                }
                return e;
            };
            this.$wrapLimit = 80;
            this.$useWrapMode = false;
            this.$wrapLimitRange = {
                min: null,
                max: null
            };
            this.setUseWrapMode = function(e) {
                if (e != this.$useWrapMode) {
                    this.$useWrapMode = e;
                    this.$modified = true;
                    this.$resetRowCache(0);
                    if (e) {
                        const t = this.getLength();
                        this.$wrapData = Array(t);
                        this.$updateWrapData(0, t - 1);
                    }
                    this._signal("changeWrapMode");
                }
            };
            this.getUseWrapMode = function() {
                return this.$useWrapMode;
            };
            this.setWrapLimitRange = function(min, max) {
                if (!(this.$wrapLimitRange.min === min && this.$wrapLimitRange.max === max)) {
                    this.$wrapLimitRange = {
                        min,
                        max
                    };
                    this.$modified = true;
                    this.$bidiHandler.markAsDirty();
                    if (this.$useWrapMode) {
                        this._signal("changeWrapMode");
                    }
                }
            };
            this.adjustWrapLimit = function(e, t) {
                let $wrapLimitRange = this.$wrapLimitRange;
                if ($wrapLimitRange.max < 0) {
                    $wrapLimitRange = {
                        min: t,
                        max: t
                    };
                }
                const n = this.$constrainWrapLimit(e, $wrapLimitRange.min, $wrapLimitRange.max);
                return n != this.$wrapLimit && n > 1 && (this.$wrapLimit = n, this.$modified = true, this.$useWrapMode && (this.$updateWrapData(0, this.getLength() - 1), this.$resetRowCache(0), this._signal("changeWrapLimit")), true);
            };
            this.$constrainWrapLimit = function(e, t, i) {
                if (t) {
                    e = Math.max(t, e);
                }
                if (i) {
                    e = Math.min(i, e);
                }
                return e;
            };
            this.getWrapLimit = function() {
                return this.$wrapLimit;
            };
            this.setWrapLimit = function(e) {
                this.setWrapLimitRange(e, e);
            };
            this.getWrapLimitRange = function() {
                return {
                    min: this.$wrapLimitRange.min,
                    max: this.$wrapLimitRange.max
                };
            };
            this.$updateInternalDataOnChange = function(e) {
                const $useWrapMode = this.$useWrapMode;
                const { action, start, end } = e;
                const start_row = start.row;
                let end_row = end.row;
                let a = end_row - start_row;
                let c = null;
                this.$updating = true;
                if (a != 0) {
                    if (action === "remove") {
                        this[$useWrapMode ? "$wrapData" : "$rowLengthCache"].splice(start_row, a);
                        var l = this.$foldData;
                        c = this.getFoldsInRange(e);
                        this.removeFolds(c);
                        var h = 0;
                        if (p = this.getFoldLine(end.row)) {
                            p.addRemoveChars(end.row, end.column, start.column - end.column);
                            p.shiftRow(-a);
                            const d = this.getFoldLine(start_row);
                            if (d && d !== p) {
                                d.merge(p);
                                p = d;
                            }
                            h = l.indexOf(p) + 1;
                        }
                        for(; h < l.length; h++){
                            if ((p = l[h]).start.row >= end.row) {
                                p.shiftRow(-a);
                            }
                        }
                        end_row = start_row;
                    } else {
                        const u = Array(a);
                        u.unshift(start_row, 0);
                        const f = $useWrapMode ? this.$wrapData : this.$rowLengthCache;
                        f.splice.apply(f, u);
                        l = this.$foldData;
                        h = 0;
                        if (p = this.getFoldLine(start_row)) {
                            const g = p.range.compareInside(start.row, start.column);
                            if (g == 0) {
                                if (p = p.split(start.row, start.column)) {
                                    p.shiftRow(a);
                                    p.addRemoveChars(end_row, 0, end.column - start.column);
                                }
                            } else if (g == -1) {
                                p.addRemoveChars(start_row, 0, end.column - start.column);
                                p.shiftRow(a);
                            }
                            h = l.indexOf(p) + 1;
                        }
                        for(; h < l.length; h++){
                            var p;
                            if ((p = l[h]).start.row >= start_row) {
                                p.shiftRow(a);
                            }
                        }
                    }
                } else {
                    a = Math.abs(e.start.column - e.end.column);
                    if (action === "remove") {
                        c = this.getFoldsInRange(e);
                        this.removeFolds(c);
                        a = -a;
                    }
                    if (p = this.getFoldLine(start_row)) {
                        p.addRemoveChars(start_row, start.column, a);
                    }
                }
                if ($useWrapMode && this.$wrapData.length != this.doc.getLength()) {
                    console.error("doc.getLength() and $wrapData.length have to be the same!");
                }
                this.$updating = false;
                if ($useWrapMode) {
                    this.$updateWrapData(start_row, end_row);
                } else {
                    this.$updateRowLengthCache(start_row, end_row);
                }
                return c;
            };
            this.$updateRowLengthCache = function(e, t, i) {
                this.$rowLengthCache[e] = null;
                this.$rowLengthCache[t] = null;
            };
            this.$updateWrapData = function(i, n) {
                let o;
                let s;
                const r = this.doc.getAllLines();
                const a = this.getTabSize();
                const $wrapData = this.$wrapData;
                const $wrapLimit = this.$wrapLimit;
                let h = i;
                for(n = Math.min(n, r.length - 1); h <= n;){
                    if (s = this.getFoldLine(h, s)) {
                        o = [];
                        s.walk((function(i, n, s, a) {
                            let c;
                            if (i != null) {
                                c = this.$getDisplayTokens(i, o.length);
                                c[0] = e;
                                for(let l = 1; l < c.length; l++){
                                    c[l] = t;
                                }
                            } else {
                                c = this.$getDisplayTokens(r[n].substring(a, s), o.length);
                            }
                            o = o.concat(c);
                        }).bind(this), s.end.row, r[s.end.row].length + 1);
                        $wrapData[s.start.row] = this.$computeWrapSplits(o, $wrapLimit, a);
                        h = s.end.row + 1;
                    } else {
                        o = this.$getDisplayTokens(r[h]);
                        $wrapData[h] = this.$computeWrapSplits(o, $wrapLimit, a);
                        h++;
                    }
                }
            };
            var e = 3;
            var t = 4;
            function i(e) {
                return !(e < 4352) && (e >= 4352 && e <= 4447 || e >= 4515 && e <= 4519 || e >= 4602 && e <= 4607 || e >= 9001 && e <= 9002 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12283 || e >= 12288 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12589 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12730 || e >= 12736 && e <= 12771 || e >= 12784 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 13054 || e >= 13056 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 55216 && e <= 55238 || e >= 55243 && e <= 55291 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510);
            }
            this.$computeWrapSplits = function(i, n, o) {
                if (i.length == 0) {
                    return [];
                }
                const s = [];
                const i_length = i.length;
                let a = 0;
                let c = 0;
                const $wrapAsCode = this.$wrapAsCode;
                const $indentedSoftWrap = this.$indentedSoftWrap;
                const d = n <= Math.max(2 * o, 8) || $indentedSoftWrap === false ? 0 : Math.floor(n / 2);
                function u(e) {
                    let t = e - a;
                    for(let n = a; n < e; n++){
                        const r = i[n];
                        if (!(r !== 12 && r !== 2)) {
                            t -= 1;
                        }
                    }
                    if (!s.length) {
                        f = (()=>{
                            let e = 0;
                            if (d === 0) {
                                return e;
                            }
                            if ($indentedSoftWrap) {
                                for (const n of i){
                                    if (n == 10) {
                                        e += 1;
                                    } else {
                                        if (n != 11) {
                                            if (n == 12) {
                                                continue;
                                            }
                                            break;
                                        }
                                        e += o;
                                    }
                                }
                            }
                            if ($wrapAsCode && $indentedSoftWrap !== false) {
                                e += o;
                            }
                            return Math.min(e, d);
                        })();
                        s.indent = f;
                    }
                    c += t;
                    s.push(c);
                    a = e;
                }
                for(var f = 0; i_length - a > n - f;){
                    let g = a + n - f;
                    if (i[g - 1] >= 10 && i[g] >= 10) {
                        u(g);
                    } else if (i[g] != e && i[g] != t) {
                        for(var p = Math.max(g - (n - (n >> 2)), a - 1); g > p && i[g] < e;){
                            g--;
                        }
                        if ($wrapAsCode) {
                            while(g > p && i[g] < e){
                                g--;
                            }
                            while(g > p && i[g] == 9){
                                g--;
                            }
                        } else {
                            while(g > p && i[g] < 10){
                                g--;
                            }
                        }
                        if (g > p) {
                            u(++g);
                        } else {
                            if (i[g = a + n] == 2) {
                                g--;
                            }
                            u(g - f);
                        }
                    } else {
                        for(; g != a - 1 && i[g] != e; g--);
                        if (g > a) {
                            u(g);
                            continue;
                        }
                        for(g = a + n; g < i.length && i[g] == t; g++);
                        if (g == i.length) {
                            break;
                        }
                        u(g);
                    }
                }
                return s;
            };
            this.$getDisplayTokens = function(e, t) {
                let n;
                const o = [];
                t = t || 0;
                for(let s = 0; s < e.length; s++){
                    const r = e.charCodeAt(s);
                    if (r == 9) {
                        n = this.getScreenTabSize(o.length + t);
                        o.push(11);
                        for(let a = 1; a < n; a++){
                            o.push(12);
                        }
                    } else {
                        if (r == 32) {
                            o.push(10);
                        } else if (r > 39 && r < 48 || r > 57 && r < 64) {
                            o.push(9);
                        } else if (r >= 4352 && i(r)) {
                            o.push(1, 2);
                        } else {
                            o.push(1);
                        }
                    }
                }
                return o;
            };
            this.$getStringScreenWidth = function(e, t, n) {
                if (t == 0) {
                    return [
                        0,
                        0
                    ];
                }
                let o;
                let s;
                if (t == null) {
                    t = Infinity;
                }
                n = n || 0;
                for(s = 0; s < e.length && ((o = e.charCodeAt(s)) == 9 ? n += this.getScreenTabSize(n) : o >= 4352 && i(o) ? n += 2 : n += 1, !(n > t)); s++);
                return [
                    n,
                    s
                ];
            };
            this.lineWidgets = null;
            this.getRowLength = function(e) {
                let t = 1;
                if (this.lineWidgets) {
                    t += this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0;
                }
                if (this.$useWrapMode && this.$wrapData[e]) {
                    return this.$wrapData[e].length + t;
                }
                return t;
            };
            this.getRowLineCount = function(e) {
                if (this.$useWrapMode && this.$wrapData[e]) {
                    return this.$wrapData[e].length + 1;
                }
                return 1;
            };
            this.getRowWrapIndent = function(e) {
                if (this.$useWrapMode) {
                    const t = this.screenToDocumentPosition(e, Number.MAX_VALUE);
                    const i = this.$wrapData[t.row];
                    if (i.length && i[0] < t.column) {
                        return i.indent;
                    }
                    return 0;
                }
                return 0;
            };
            this.getScreenLastRowColumn = function(e) {
                const t = this.screenToDocumentPosition(e, Number.MAX_VALUE);
                return this.documentToScreenColumn(t.row, t.column);
            };
            this.getDocumentLastRowColumn = function(e, t) {
                const i = this.documentToScreenRow(e, t);
                return this.getScreenLastRowColumn(i);
            };
            this.getDocumentLastRowColumnPosition = function(e, t) {
                const i = this.documentToScreenRow(e, t);
                return this.screenToDocumentPosition(i, Number.MAX_VALUE / 10);
            };
            this.getRowSplitData = function(e) {
                if (this.$useWrapMode) {
                    return this.$wrapData[e];
                }
            };
            this.getScreenTabSize = function(e) {
                return this.$tabSize - (e % this.$tabSize | 0);
            };
            this.screenToDocumentRow = function(e, t) {
                return this.screenToDocumentPosition(e, t).row;
            };
            this.screenToDocumentColumn = function(e, t) {
                return this.screenToDocumentPosition(e, t).column;
            };
            this.screenToDocumentPosition = function(e, t, i) {
                if (e < 0) {
                    return {
                        row: 0,
                        column: 0
                    };
                }
                let n;
                let o;
                let s = 0;
                let r = 0;
                let a = 0;
                let c = 0;
                const $screenRowCache = this.$screenRowCache;
                const h = this.$getRowCacheIndex($screenRowCache, e);
                const l_length = $screenRowCache.length;
                if (l_length && h >= 0) {
                    a = $screenRowCache[h];
                    s = this.$docRowCache[h];
                    var u = e > $screenRowCache[l_length - 1];
                } else {
                    u = !l_length;
                }
                for(var f = this.getLength() - 1, g = this.getNextFoldLine(s), p = g ? g.start.row : Infinity; a <= e && !(a + (c = this.getRowLength(s)) > e || s >= f);){
                    a += c;
                    if (++s > p) {
                        s = g.end.row + 1;
                        p = (g = this.getNextFoldLine(s, g)) ? g.start.row : Infinity;
                    }
                    if (u) {
                        this.$docRowCache.push(s);
                        this.$screenRowCache.push(a);
                    }
                }
                if (g && g.start.row <= s) {
                    n = this.getFoldDisplayLine(g);
                    s = g.start.row;
                } else {
                    if (a + c <= e || s > f) {
                        return {
                            row: f,
                            column: this.getLine(f).length
                        };
                    }
                    n = this.getLine(s);
                    g = null;
                }
                let m = 0;
                const b = Math.floor(e - a);
                if (this.$useWrapMode) {
                    const v = this.$wrapData[s];
                    if (v) {
                        o = v[b];
                        if (b > 0 && v.length) {
                            m = v.indent;
                            r = v[b - 1] || v[v.length - 1];
                            n = n.substring(r);
                        }
                    }
                }
                if (i !== undefined && this.$bidiHandler.isBidiRow(a + b, s, b)) {
                    t = this.$bidiHandler.offsetToCol(i);
                }
                r += this.$getStringScreenWidth(n, t - m)[1];
                if (this.$useWrapMode && r >= o) {
                    r = o - 1;
                }
                if (g) {
                    return g.idxToPosition(r);
                }
                return {
                    row: s,
                    column: r
                };
            };
            this.documentToScreenPosition = function(e, t) {
                if (t === undefined) var i = this.$clipPositionToDocument(e.row, e.column);
                else {
                    i = this.$clipPositionToDocument(e, t);
                }
                e = i.row;
                t = i.column;
                let n;
                let o = 0;
                let s = null;
                if (n = this.getFoldAt(e, t, 1)) {
                    e = n.start.row;
                    t = n.start.column;
                }
                let r;
                let a = 0;
                const $docRowCache = this.$docRowCache;
                const l = this.$getRowCacheIndex($docRowCache, e);
                const c_length = $docRowCache.length;
                if (c_length && l >= 0) {
                    a = $docRowCache[l];
                    o = this.$screenRowCache[l];
                    var d = e > $docRowCache[c_length - 1];
                } else {
                    d = !c_length;
                }
                let u = this.getNextFoldLine(a);
                let f = u ? u.start.row : Infinity;
                while(a < e){
                    if (a >= f) {
                        if ((r = u.end.row + 1) > e) {
                            break;
                        }
                        f = (u = this.getNextFoldLine(r, u)) ? u.start.row : Infinity;
                    } else {
                        r = a + 1;
                    }
                    o += this.getRowLength(a);
                    a = r;
                    if (d) {
                        this.$docRowCache.push(a);
                        this.$screenRowCache.push(o);
                    }
                }
                let g = "";
                if (u && a >= f) {
                    g = this.getFoldDisplayLine(u, e, t);
                    s = u.start.row;
                } else {
                    g = this.getLine(e).substring(0, t);
                    s = e;
                }
                let p = 0;
                if (this.$useWrapMode) {
                    const m = this.$wrapData[s];
                    if (m) {
                        for(var b = 0; g.length >= m[b];){
                            o++;
                            b++;
                        }
                        g = g.substring(m[b - 1] || 0, g.length);
                        p = b > 0 ? m.indent : 0;
                    }
                }
                if (this.lineWidgets && this.lineWidgets[a] && this.lineWidgets[a].rowsAbove) {
                    o += this.lineWidgets[a].rowsAbove;
                }
                return {
                    row: o,
                    column: p + this.$getStringScreenWidth(g)[0]
                };
            };
            this.documentToScreenColumn = function(e, t) {
                return this.documentToScreenPosition(e, t).column;
            };
            this.documentToScreenRow = function(e, t) {
                return this.documentToScreenPosition(e, t).row;
            };
            this.getScreenLength = function() {
                let e = 0;
                let t = null;
                if (this.$useWrapMode) {
                    const i = this.$wrapData.length;
                    let n = 0;
                    a = 0;
                    let o = (t = this.$foldData[a++]) ? t.start.row : Infinity;
                    while(n < i){
                        const s = this.$wrapData[n];
                        e += s ? s.length + 1 : 1;
                        if (++n > o) {
                            n = t.end.row + 1;
                            o = (t = this.$foldData[a++]) ? t.start.row : Infinity;
                        }
                    }
                } else {
                    e = this.getLength();
                    for(var r = this.$foldData, a = 0; a < r.length; a++){
                        e -= (t = r[a]).end.row - t.start.row;
                    }
                }
                if (this.lineWidgets) {
                    e += this.$getWidgetScreenLength();
                }
                return e;
            };
            this.$setFontMetrics = function(e) {
                if (this.$enableVarChar) {
                    this.$getStringScreenWidth = function(t, i, n) {
                        if (i === 0) {
                            return [
                                0,
                                0
                            ];
                        }
                        let o;
                        let s;
                        if (!i) {
                            i = Infinity;
                        }
                        n = n || 0;
                        for(s = 0; s < t.length && !((n += (o = t.charAt(s)) === "\t" ? this.getScreenTabSize(n) : e.getCharacterWidth(o)) > i); s++);
                        return [
                            n,
                            s
                        ];
                    };
                }
            };
            this.destroy = function() {
                if (this.bgTokenizer) {
                    this.bgTokenizer.setDocument(null);
                    this.bgTokenizer = null;
                }
                this.$stopWorker();
                this.removeAllListeners();
                this.selection.detach();
            };
            this.isFullWidth = i;
        }).call(g.prototype);
        e("./edit_session/folding").Folding.call(g.prototype);
        e("./edit_session/bracket_match").BracketMatch.call(g.prototype);
        r.defineOptions(g.prototype, "session", {
            wrap: {
                set: function(e) {
                    if (e && e != "off") {
                        if (e == "free") {
                            e = true;
                        } else if (e == "printMargin") {
                            e = -1;
                        } else if (typeof e === "string") {
                            e = parseInt(e, 10) || false;
                        }
                    } else {
                        e = false;
                    }
                    if (this.$wrap != e) {
                        this.$wrap = e;
                        if (e) {
                            const t = typeof e === "number" ? e : null;
                            this.setWrapLimitRange(t, t);
                            this.setUseWrapMode(true);
                        } else {
                            this.setUseWrapMode(false);
                        }
                    }
                },
                get: function() {
                    if (this.getUseWrapMode()) {
                        if (this.$wrap == -1) {
                            return "printMargin";
                        }
                        if (this.getWrapLimitRange().min) {
                            return this.$wrap;
                        }
                        return "free";
                    }
                    return "off";
                },
                handlesSet: true
            },
            wrapMethod: {
                set: function(e) {
                    if ((e = e == "auto" ? this.$mode.type != "text" : e != "text") != this.$wrapAsCode) {
                        this.$wrapAsCode = e;
                        if (this.$useWrapMode) {
                            this.$useWrapMode = false;
                            this.setUseWrapMode(true);
                        }
                    }
                },
                initialValue: "auto"
            },
            indentedSoftWrap: {
                set: function() {
                    if (this.$useWrapMode) {
                        this.$useWrapMode = false;
                        this.setUseWrapMode(true);
                    }
                },
                initialValue: true
            },
            firstLineNumber: {
                set: function() {
                    this._signal("changeBreakpoint");
                },
                initialValue: 1
            },
            useWorker: {
                set: function(e) {
                    this.$useWorker = e;
                    this.$stopWorker();
                    if (e) {
                        this.$startWorker();
                    }
                },
                initialValue: true
            },
            useSoftTabs: {
                initialValue: true
            },
            tabSize: {
                set: function(e) {
                    if ((e = parseInt(e)) > 0 && this.$tabSize !== e) {
                        this.$modified = true;
                        this.$rowLengthCache = [];
                        this.$tabSize = e;
                        this._signal("changeTabSize");
                    }
                },
                initialValue: 4,
                handlesSet: true
            },
            navigateWithinSoftTabs: {
                initialValue: false
            },
            foldStyle: {
                set: function(e) {
                    this.setFoldStyle(e);
                },
                handlesSet: true
            },
            overwrite: {
                set: function(e) {
                    this._signal("changeOverwrite");
                },
                initialValue: false
            },
            newLineMode: {
                set: function(e) {
                    this.doc.setNewLineMode(e);
                },
                get: function() {
                    return this.doc.getNewLineMode();
                },
                handlesSet: true
            },
            mode: {
                set: function(e) {
                    this.setMode(e);
                },
                get: function() {
                    return this.$modeId;
                },
                handlesSet: true
            }
        });
        t.EditSession = g;
    });
    ace.define("ace/search", [
        "require",
        "exports",
        "module",
        "ace/lib/lang",
        "ace/lib/oop",
        "ace/range"
    ], function(e, t, i) {
        "use strict";
        const n = e("./lib/lang");
        const o = e("./lib/oop");
        const Range = e("./range").Range;
        const r = function() {
            this.$options = {};
        };
        (function() {
            this.set = function(e) {
                o.mixin(this.$options, e);
                return this;
            };
            this.getOptions = function() {
                return n.copyObject(this.$options);
            };
            this.setOptions = function(e) {
                this.$options = e;
            };
            this.find = function(e) {
                const $options = this.$options;
                const i = this.$matchIterator(e, $options);
                if (!i) {
                    return false;
                }
                let n = null;
                i.forEach((e, i, o, r)=>{
                    n = new Range(e, i, o, r);
                    return !(i == r && $options.start && $options.start.start && $options.skipCurrent != 0 && n.isEqual($options.start) && (n = null, 1));
                });
                return n;
            };
            this.findAll = function(e) {
                const $options = this.$options;
                if (!$options.needle) {
                    return [];
                }
                this.$assembleRegExp($options);
                const t_range = $options.range;
                const o = t_range ? e.getLines(t_range.start.row, t_range.end.row) : e.doc.getAllLines();
                let r = [];
                const $options_re = $options.re;
                if ($options.$isMultiLine) {
                    let c;
                    const l = $options_re.length;
                    const h = o.length - l;
                    e: for(let d = $options_re.offset || 0; d <= h; d++){
                        for(var u = 0; u < l; u++){
                            if (o[d + u].search($options_re[u]) == -1) {
                                continue e;
                            }
                        }
                        const f = o[d];
                        const g = o[d + l - 1];
                        const p = f.length - f.match($options_re[0])[0].length;
                        const m = g.match($options_re[l - 1])[0].length;
                        if (!(c && c.end.row === d && c.end.column > p)) {
                            r.push(c = new Range(d, p, d + l - 1, m));
                            if (l > 2) {
                                d = d + l - 2;
                            }
                        }
                    }
                } else {
                    for(var b = 0; b < o.length; b++){
                        const v = n.getMatchOffsets(o[b], $options_re);
                        for(u = 0; u < v.length; u++){
                            const w = v[u];
                            r.push(new Range(b, w.offset, b, w.offset + w.length));
                        }
                    }
                }
                if (t_range) {
                    const x = t_range.start.column;
                    const y = t_range.start.column;
                    b = 0;
                    for(u = r.length - 1; b < u && r[b].start.column < x && r[b].start.row == t_range.start.row;){
                        b++;
                    }
                    while(b < u && r[u].end.column > y && r[u].end.row == t_range.end.row){
                        u--;
                    }
                    r = r.slice(b, u + 1);
                    b = 0;
                    for(u = r.length; b < u; b++){
                        r[b].start.row += t_range.start.row;
                        r[b].end.row += t_range.start.row;
                    }
                }
                return r;
            };
            this.replace = function(e, t) {
                const $options = this.$options;
                const n = this.$assembleRegExp($options);
                if ($options.$isMultiLine) {
                    return t;
                }
                if (n) {
                    const o = n.exec(e);
                    if (!o || o[0].length != e.length) {
                        return null;
                    }
                    t = e.replace(n, t);
                    if ($options.preserveCase) {
                        t = t.split("");
                        for(let s = Math.min(e.length, e.length); s--;){
                            const r = e[s];
                            if (r && r.toLowerCase() != r) {
                                t[s] = t[s].toUpperCase();
                            } else {
                                t[s] = t[s].toLowerCase();
                            }
                        }
                        t = t.join("");
                    }
                    return t;
                }
            };
            this.$assembleRegExp = function(e, t) {
                if (e.needle instanceof RegExp) {
                    return e.re = e.needle;
                }
                let e_needle = e.needle;
                if (!e.needle) {
                    return e.re = false;
                }
                if (!e.regExp) {
                    e_needle = n.escapeRegExp(e_needle);
                }
                if (e.wholeWord) {
                    e_needle = ((e_needle_1, t)=>{
                        function i(e) {
                            if (/\w/.test(e) || t.regExp) {
                                return "\\b";
                            }
                            return "";
                        }
                        return i(e_needle_1[0]) + e_needle_1 + i(e_needle_1[e_needle_1.length - 1]);
                    })(e_needle, e);
                }
                const o = e.caseSensitive ? "gm" : "gmi";
                e.$isMultiLine = !t && /[\n\r]/.test(e_needle);
                if (e.$isMultiLine) {
                    return e.re = this.$assembleMultilineRegExp(e_needle, o);
                }
                try {
                    var s = new RegExp(e_needle, o);
                } catch (e) {
                    s = false;
                }
                return e.re = s;
            };
            this.$assembleMultilineRegExp = function(e, t) {
                for(var i = e.replace(/\r\n|\r|\n/g, "$\n^").split("\n"), n = [], o = 0; o < i.length; o++){
                    try {
                        n.push(new RegExp(i[o], t));
                    } catch (e) {
                        return false;
                    }
                }
                return n;
            };
            this.$matchIterator = function(e, t) {
                const i = this.$assembleRegExp(t);
                if (!i) {
                    return false;
                }
                const n = t.backwards == 1;
                const o = t.skipCurrent != 0;
                const t_range = t.range;
                let t_start = t.start;
                if (!t_start) {
                    t_start = t_range ? t_range[n ? "end" : "start"] : e.selection.getRange();
                }
                if (t_start.start) {
                    t_start = t_start[o != n ? "end" : "start"];
                }
                let a = t_range ? t_range.start.row : 0;
                let c = t_range ? t_range.end.row : e.getLength() - 1;
                if (n) var forEach = function(e) {
                    let t_start_row = t_start.row;
                    if (!d(t_start_row, t_start.column, e)) {
                        for(t_start_row--; t_start_row >= a; t_start_row--){
                            if (d(t_start_row, Number.MAX_VALUE, e)) {
                                return;
                            }
                        }
                        if (t.wrap != 0) {
                            t_start_row = c;
                            for(a = t_start.row; t_start_row >= a; t_start_row--){
                                if (d(t_start_row, Number.MAX_VALUE, e)) {
                                    return;
                                }
                            }
                        }
                    }
                };
                else {
                    forEach = function(e) {
                        let t_start_row = t_start.row;
                        if (!d(t_start_row, t_start.column, e)) {
                            for(t_start_row += 1; t_start_row <= c; t_start_row++){
                                if (d(t_start_row, 0, e)) {
                                    return;
                                }
                            }
                            if (t.wrap != 0) {
                                t_start_row = a;
                                for(c = t_start.row; t_start_row <= c; t_start_row++){
                                    if (d(t_start_row, 0, e)) {
                                        return;
                                    }
                                }
                            }
                        }
                    };
                }
                if (t.$isMultiLine) {
                    const h = i.length;
                    var d = function(t, o, s) {
                        const r = n ? t - h + 1 : t;
                        if (!(r < 0)) {
                            let a = e.getLine(r);
                            const c = a.search(i[0]);
                            if (!(!n && c < o || c === -1)) {
                                for(let l = 1; l < h; l++){
                                    if ((a = e.getLine(r + l)).search(i[l]) == -1) {
                                        return;
                                    }
                                }
                                const d = a.match(i[h - 1])[0].length;
                                if (!(n && d > o)) {
                                    return !!s(r, c, r + h - 1, d) || undefined;
                                }
                            }
                        }
                    };
                } else {
                    d = n ? function(t, n, o) {
                        let s;
                        const r = e.getLine(t);
                        const a = [];
                        let c = 0;
                        for(i.lastIndex = 0; s = i.exec(r);){
                            var l = s[0].length;
                            c = s.index;
                            if (!l) {
                                if (c >= r.length) {
                                    break;
                                }
                                i.lastIndex = c += 1;
                            }
                            if (s.index + l > n) {
                                break;
                            }
                            a.push(s.index, l);
                        }
                        for(let h = a.length - 1; h >= 0; h -= 2){
                            const d = a[h - 1];
                            if (o(t, d, t, d + (l = a[h]))) {
                                return true;
                            }
                        }
                    } : function(t, n, o) {
                        let s;
                        let r;
                        const a = e.getLine(t);
                        for(i.lastIndex = n; r = i.exec(a);){
                            const c = r[0].length;
                            if (o(t, s = r.index, t, s + c)) {
                                return true;
                            }
                            if (!c && (i.lastIndex = s += 1, s >= a.length)) {
                                return false;
                            }
                        }
                    };
                }
                return {
                    forEach
                };
            };
        }).call(r.prototype);
        t.Search = r;
    });
    ace.define("ace/keyboard/hash_handler", [
        "require",
        "exports",
        "module",
        "ace/lib/keys",
        "ace/lib/useragent"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/keys");
        const o = e("../lib/useragent");
        const n_KEY_MODS = n.KEY_MODS;
        function r(e, t) {
            this.platform = t || (o.isMac ? "mac" : "win");
            this.commands = {};
            this.commandKeyBinding = {};
            this.addCommands(e);
            this.$singleCommand = true;
        }
        function a(e, t) {
            r.call(this, e, t);
            this.$singleCommand = false;
        }
        a.prototype = r.prototype;
        (function() {
            function e(e) {
                return typeof e === "object" && e.bindKey && e.bindKey.position || (e.isDefault ? -100 : 0);
            }
            this.addCommand = function(e) {
                if (this.commands[e.name]) {
                    this.removeCommand(e);
                }
                this.commands[e.name] = e;
                if (e.bindKey) {
                    this._buildKeyHash(e);
                }
            };
            this.removeCommand = function(e, t) {
                const i = e && (typeof e === "string" ? e : e.name);
                e = this.commands[i];
                if (!t) {
                    delete this.commands[i];
                }
                const commandKeyBinding = this.commandKeyBinding;
                for(const o in commandKeyBinding){
                    const s = commandKeyBinding[o];
                    if (s == e) {
                        delete commandKeyBinding[o];
                    } else if (Array.isArray(s)) {
                        const r = s.indexOf(e);
                        if (r != -1) {
                            s.splice(r, 1);
                            if (s.length == 1) {
                                commandKeyBinding[o] = s[0];
                            }
                        }
                    }
                }
            };
            this.bindKey = function(bindKey, t, i) {
                if (typeof bindKey === "object" && bindKey) {
                    if (i == null) {
                        i = bindKey.position;
                    }
                    bindKey = bindKey[this.platform];
                }
                if (bindKey) {
                    if (typeof t === "function") {
                        return this.addCommand({
                            exec: t,
                            bindKey,
                            name: t.name || bindKey
                        });
                    }
                    return void bindKey.split("|").forEach(function(e) {
                        let n = "";
                        if (e.indexOf(" ") != -1) {
                            const o = e.split(/\s+/);
                            e = o.pop();
                            o.forEach(function(e) {
                                const t = this.parseKeys(e);
                                const i = n_KEY_MODS[t.hashId] + t.key;
                                n += (n ? " " : "") + i;
                                this._addCommandToBinding(n, "chainKeys");
                            }, this);
                            n += " ";
                        }
                        const r = this.parseKeys(e);
                        const a = n_KEY_MODS[r.hashId] + r.key;
                        this._addCommandToBinding(n + a, t, i);
                    }, this);
                }
            };
            this._addCommandToBinding = function(t, i, n) {
                let o;
                const commandKeyBinding = this.commandKeyBinding;
                if (i) {
                    if (!commandKeyBinding[t] || this.$singleCommand) {
                        commandKeyBinding[t] = i;
                    } else {
                        if (Array.isArray(commandKeyBinding[t])) {
                            if ((o = commandKeyBinding[t].indexOf(i)) != -1) {
                                commandKeyBinding[t].splice(o, 1);
                            }
                        } else {
                            commandKeyBinding[t] = [
                                commandKeyBinding[t]
                            ];
                        }
                        if (typeof n !== "number") {
                            n = e(i);
                        }
                        const r = commandKeyBinding[t];
                        for(o = 0; o < r.length && !(e(r[o]) > n); o++);
                        r.splice(o, 0, i);
                    }
                } else {
                    delete commandKeyBinding[t];
                }
            };
            this.addCommands = function(e) {
                if (e) {
                    Object.keys(e).forEach(function(t) {
                        let i = e[t];
                        if (i) {
                            if (typeof i === "string") {
                                return this.bindKey(i, t);
                            }
                            if (typeof i === "function") {
                                i = {
                                    exec: i
                                };
                            }
                            if (typeof i === "object") {
                                if (!i.name) {
                                    i.name = t;
                                }
                                this.addCommand(i);
                            }
                        }
                    }, this);
                }
            };
            this.removeCommands = function(e) {
                Object.keys(e).forEach(function(t) {
                    this.removeCommand(e[t]);
                }, this);
            };
            this.bindKeys = function(e) {
                Object.keys(e).forEach(function(t) {
                    this.bindKey(t, e[t]);
                }, this);
            };
            this._buildKeyHash = function(e) {
                this.bindKey(e.bindKey, e);
            };
            this.parseKeys = function(e) {
                const t = e.toLowerCase().split(/[\-\+]([\-\+])?/).filter((e)=>e);
                let i = t.pop();
                const o = n[i];
                if (n.FUNCTION_KEYS[o]) {
                    i = n.FUNCTION_KEYS[o].toLowerCase();
                } else {
                    if (!t.length) {
                        return {
                            key: i,
                            hashId: -1
                        };
                    }
                    if (t.length == 1 && t[0] == "shift") {
                        return {
                            key: i.toUpperCase(),
                            hashId: -1
                        };
                    }
                }
                let hashId = 0;
                for(let r = t.length; r--;){
                    const a = n.KEY_MODS[t[r]];
                    if (a == null) {
                        if (typeof console !== "undefined") {
                            console.error(`invalid modifier ${t[r]} in ${e}`);
                        }
                        return false;
                    }
                    hashId |= a;
                }
                return {
                    key: i,
                    hashId
                };
            };
            this.findKeyCommand = function(e, t) {
                const i = n_KEY_MODS[e] + t;
                return this.commandKeyBinding[i];
            };
            this.handleKeyboard = function(e, t, i, n) {
                if (!(n < 0)) {
                    const o = n_KEY_MODS[t] + i;
                    let r = this.commandKeyBinding[o];
                    if (e.$keyChain) {
                        e.$keyChain += ` ${o}`;
                        r = this.commandKeyBinding[e.$keyChain] || r;
                    }
                    if (!r || r != "chainKeys" && r[r.length - 1] != "chainKeys") {
                        if (e.$keyChain) {
                            if (t && t != 4 || i.length != 1) {
                                if (t == -1 || n > 0) {
                                    e.$keyChain = "";
                                }
                            } else {
                                e.$keyChain = e.$keyChain.slice(0, -o.length - 1);
                            }
                        }
                        return {
                            command: r
                        };
                    }
                    e.$keyChain = e.$keyChain || o;
                    return {
                        command: "null"
                    };
                }
            };
            this.getStatusText = function(e, t) {
                return t.$keyChain || "";
            };
        }).call(r.prototype);
        t.HashHandler = r;
        t.MultiHashHandler = a;
    });
    ace.define("ace/commands/command_manager", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/keyboard/hash_handler",
        "ace/lib/event_emitter"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/oop");
        const MultiHashHandler = e("../keyboard/hash_handler").MultiHashHandler;
        const EventEmitter = e("../lib/event_emitter").EventEmitter;
        const r = function(e, t) {
            MultiHashHandler.call(this, t, e);
            this.byName = this.commands;
            this.setDefaultHandler("exec", function(e) {
                return e.command.exec(e.editor, e.args || {});
            });
        };
        n.inherits(r, MultiHashHandler);
        (function() {
            n.implement(this, EventEmitter);
            this.exec = function(e, t, args) {
                if (Array.isArray(e)) {
                    for(let n = e.length; n--;){
                        if (this.exec(e[n], t, args)) {
                            return true;
                        }
                    }
                    return false;
                }
                if (typeof e === "string") {
                    e = this.commands[e];
                }
                if (!e) {
                    return false;
                }
                if (t && t.$readOnly && !e.readOnly) {
                    return false;
                }
                if (this.$checkCommandState != 0 && e.isAvailable && !e.isAvailable(t)) {
                    return false;
                }
                const o = {
                    editor: t,
                    command: e,
                    args
                };
                o.returnValue = this._emit("exec", o);
                this._signal("afterExec", o);
                return o.returnValue !== false;
            };
            this.toggleRecording = function(e) {
                if (!this.$inReplay) {
                    if (e) {
                        e._emit("changeStatus");
                    }
                    if (this.recording) {
                        this.macro.pop();
                        this.off("exec", this.$addCommandToMacro);
                        if (!this.macro.length) {
                            this.macro = this.oldMacro;
                        }
                        return this.recording = false;
                    }
                    if (!this.$addCommandToMacro) {
                        this.$addCommandToMacro = (function(e) {
                            this.macro.push([
                                e.command,
                                e.args
                            ]);
                        }).bind(this);
                    }
                    this.oldMacro = this.macro;
                    this.macro = [];
                    this.on("exec", this.$addCommandToMacro);
                    return this.recording = true;
                }
            };
            this.replay = function(e) {
                if (!this.$inReplay && this.macro) {
                    if (this.recording) {
                        return this.toggleRecording(e);
                    }
                    try {
                        this.$inReplay = true;
                        this.macro.forEach(function(t) {
                            if (typeof t === "string") {
                                this.exec(t, e);
                            } else {
                                this.exec(t[0], e, t[1]);
                            }
                        }, this);
                    } finally{
                        this.$inReplay = false;
                    }
                }
            };
            this.trimMacro = function(e) {
                return e.map((e)=>{
                    if (typeof e[0] !== "string") {
                        e[0] = e[0].name;
                    }
                    if (!e[1]) {
                        e = e[0];
                    }
                    return e;
                });
            };
        }).call(r.prototype);
        t.CommandManager = r;
    });
    ace.define("ace/commands/default_commands", [
        "require",
        "exports",
        "module",
        "ace/lib/lang",
        "ace/config",
        "ace/range"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/lang");
        const o = e("../config");
        const Range = e("../range").Range;
        function r(win, mac) {
            return {
                win,
                mac
            };
        }
        t.commands = [
            {
                name: "showSettingsMenu",
                bindKey: r("Ctrl-,", "Command-,"),
                exec: function(e) {
                    o.loadModule("ace/ext/settings_menu", function(t) {
                        t.init(e);
                        e.showSettingsMenu();
                    });
                },
                readOnly: true
            },
            {
                name: "goToNextError",
                bindKey: r("Alt-E", "F4"),
                exec: function(e) {
                    o.loadModule("./ext/error_marker", function(t) {
                        t.showErrorMarker(e, 1);
                    });
                },
                scrollIntoView: "animate",
                readOnly: true
            },
            {
                name: "goToPreviousError",
                bindKey: r("Alt-Shift-E", "Shift-F4"),
                exec: function(e) {
                    o.loadModule("./ext/error_marker", function(t) {
                        t.showErrorMarker(e, -1);
                    });
                },
                scrollIntoView: "animate",
                readOnly: true
            },
            {
                name: "selectall",
                description: "Select all",
                bindKey: r("Ctrl-A", "Command-A"),
                exec: function(e) {
                    e.selectAll();
                },
                readOnly: true
            },
            {
                name: "centerselection",
                description: "Center selection",
                bindKey: r(null, "Ctrl-L"),
                exec: function(e) {
                    e.centerSelection();
                },
                readOnly: true
            },
            {
                name: "gotoline",
                description: "Go to line...",
                bindKey: r("Ctrl-L", "Command-L"),
                exec: function(e, t) {
                    if (!(typeof t !== "number" || isNaN(t))) {
                        e.gotoLine(t);
                    }
                    e.prompt({
                        $type: "gotoLine"
                    });
                },
                readOnly: true
            },
            {
                name: "fold",
                bindKey: r("Alt-L|Ctrl-F1", "Command-Alt-L|Command-F1"),
                exec: function(e) {
                    e.session.toggleFold(false);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "center",
                readOnly: true
            },
            {
                name: "unfold",
                bindKey: r("Alt-Shift-L|Ctrl-Shift-F1", "Command-Alt-Shift-L|Command-Shift-F1"),
                exec: function(e) {
                    e.session.toggleFold(true);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "center",
                readOnly: true
            },
            {
                name: "toggleFoldWidget",
                bindKey: r("F2", "F2"),
                exec: function(e) {
                    e.session.toggleFoldWidget();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "center",
                readOnly: true
            },
            {
                name: "toggleParentFoldWidget",
                bindKey: r("Alt-F2", "Alt-F2"),
                exec: function(e) {
                    e.session.toggleFoldWidget(true);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "center",
                readOnly: true
            },
            {
                name: "foldall",
                description: "Fold all",
                bindKey: r(null, "Ctrl-Command-Option-0"),
                exec: function(e) {
                    e.session.foldAll();
                },
                scrollIntoView: "center",
                readOnly: true
            },
            {
                name: "foldAllComments",
                description: "Fold all comments",
                bindKey: r(null, "Ctrl-Command-Option-0"),
                exec: function(e) {
                    e.session.foldAllComments();
                },
                scrollIntoView: "center",
                readOnly: true
            },
            {
                name: "foldOther",
                description: "Fold other",
                bindKey: r("Alt-0", "Command-Option-0"),
                exec: function(e) {
                    e.session.foldAll();
                    e.session.unfold(e.selection.getAllRanges());
                },
                scrollIntoView: "center",
                readOnly: true
            },
            {
                name: "unfoldall",
                description: "Unfold all",
                bindKey: r("Alt-Shift-0", "Command-Option-Shift-0"),
                exec: function(e) {
                    e.session.unfold();
                },
                scrollIntoView: "center",
                readOnly: true
            },
            {
                name: "findnext",
                description: "Find next",
                bindKey: r("Ctrl-K", "Command-G"),
                exec: function(e) {
                    e.findNext();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "center",
                readOnly: true
            },
            {
                name: "findprevious",
                description: "Find previous",
                bindKey: r("Ctrl-Shift-K", "Command-Shift-G"),
                exec: function(e) {
                    e.findPrevious();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "center",
                readOnly: true
            },
            {
                name: "selectOrFindNext",
                description: "Select or find next",
                bindKey: r("Alt-K", "Ctrl-G"),
                exec: function(e) {
                    if (e.selection.isEmpty()) {
                        e.selection.selectWord();
                    } else {
                        e.findNext();
                    }
                },
                readOnly: true
            },
            {
                name: "selectOrFindPrevious",
                description: "Select or find previous",
                bindKey: r("Alt-Shift-K", "Ctrl-Shift-G"),
                exec: function(e) {
                    if (e.selection.isEmpty()) {
                        e.selection.selectWord();
                    } else {
                        e.findPrevious();
                    }
                },
                readOnly: true
            },
            {
                name: "find",
                description: "Find",
                bindKey: r("Ctrl-F", "Command-F"),
                exec: function(e) {
                    o.loadModule("ace/ext/searchbox", function(t) {
                        t.Search(e);
                    });
                },
                readOnly: true
            },
            {
                name: "overwrite",
                description: "Overwrite",
                bindKey: "Insert",
                exec: function(e) {
                    e.toggleOverwrite();
                },
                readOnly: true
            },
            {
                name: "selecttostart",
                description: "Select to start",
                bindKey: r("Ctrl-Shift-Home", "Command-Shift-Home|Command-Shift-Up"),
                exec: function(e) {
                    e.getSelection().selectFileStart();
                },
                multiSelectAction: "forEach",
                readOnly: true,
                scrollIntoView: "animate",
                aceCommandGroup: "fileJump"
            },
            {
                name: "gotostart",
                description: "Go to start",
                bindKey: r("Ctrl-Home", "Command-Home|Command-Up"),
                exec: function(e) {
                    e.navigateFileStart();
                },
                multiSelectAction: "forEach",
                readOnly: true,
                scrollIntoView: "animate",
                aceCommandGroup: "fileJump"
            },
            {
                name: "selectup",
                description: "Select up",
                bindKey: r("Shift-Up", "Shift-Up|Ctrl-Shift-P"),
                exec: function(e) {
                    e.getSelection().selectUp();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "golineup",
                description: "Go line up",
                bindKey: r("Up", "Up|Ctrl-P"),
                exec: function(e, t) {
                    e.navigateUp(t.times);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "selecttoend",
                description: "Select to end",
                bindKey: r("Ctrl-Shift-End", "Command-Shift-End|Command-Shift-Down"),
                exec: function(e) {
                    e.getSelection().selectFileEnd();
                },
                multiSelectAction: "forEach",
                readOnly: true,
                scrollIntoView: "animate",
                aceCommandGroup: "fileJump"
            },
            {
                name: "gotoend",
                description: "Go to end",
                bindKey: r("Ctrl-End", "Command-End|Command-Down"),
                exec: function(e) {
                    e.navigateFileEnd();
                },
                multiSelectAction: "forEach",
                readOnly: true,
                scrollIntoView: "animate",
                aceCommandGroup: "fileJump"
            },
            {
                name: "selectdown",
                description: "Select down",
                bindKey: r("Shift-Down", "Shift-Down|Ctrl-Shift-N"),
                exec: function(e) {
                    e.getSelection().selectDown();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "golinedown",
                description: "Go line down",
                bindKey: r("Down", "Down|Ctrl-N"),
                exec: function(e, t) {
                    e.navigateDown(t.times);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "selectwordleft",
                description: "Select word left",
                bindKey: r("Ctrl-Shift-Left", "Option-Shift-Left"),
                exec: function(e) {
                    e.getSelection().selectWordLeft();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "gotowordleft",
                description: "Go to word left",
                bindKey: r("Ctrl-Left", "Option-Left"),
                exec: function(e) {
                    e.navigateWordLeft();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "selecttolinestart",
                description: "Select to line start",
                bindKey: r("Alt-Shift-Left", "Command-Shift-Left|Ctrl-Shift-A"),
                exec: function(e) {
                    e.getSelection().selectLineStart();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "gotolinestart",
                description: "Go to line start",
                bindKey: r("Alt-Left|Home", "Command-Left|Home|Ctrl-A"),
                exec: function(e) {
                    e.navigateLineStart();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "selectleft",
                description: "Select left",
                bindKey: r("Shift-Left", "Shift-Left|Ctrl-Shift-B"),
                exec: function(e) {
                    e.getSelection().selectLeft();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "gotoleft",
                description: "Go to left",
                bindKey: r("Left", "Left|Ctrl-B"),
                exec: function(e, t) {
                    e.navigateLeft(t.times);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "selectwordright",
                description: "Select word right",
                bindKey: r("Ctrl-Shift-Right", "Option-Shift-Right"),
                exec: function(e) {
                    e.getSelection().selectWordRight();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "gotowordright",
                description: "Go to word right",
                bindKey: r("Ctrl-Right", "Option-Right"),
                exec: function(e) {
                    e.navigateWordRight();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "selecttolineend",
                description: "Select to line end",
                bindKey: r("Alt-Shift-Right", "Command-Shift-Right|Shift-End|Ctrl-Shift-E"),
                exec: function(e) {
                    e.getSelection().selectLineEnd();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "gotolineend",
                description: "Go to line end",
                bindKey: r("Alt-Right|End", "Command-Right|End|Ctrl-E"),
                exec: function(e) {
                    e.navigateLineEnd();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "selectright",
                description: "Select right",
                bindKey: r("Shift-Right", "Shift-Right"),
                exec: function(e) {
                    e.getSelection().selectRight();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "gotoright",
                description: "Go to right",
                bindKey: r("Right", "Right|Ctrl-F"),
                exec: function(e, t) {
                    e.navigateRight(t.times);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "selectpagedown",
                description: "Select page down",
                bindKey: "Shift-PageDown",
                exec: function(e) {
                    e.selectPageDown();
                },
                readOnly: true
            },
            {
                name: "pagedown",
                description: "Page down",
                bindKey: r(null, "Option-PageDown"),
                exec: function(e) {
                    e.scrollPageDown();
                },
                readOnly: true
            },
            {
                name: "gotopagedown",
                description: "Go to page down",
                bindKey: r("PageDown", "PageDown|Ctrl-V"),
                exec: function(e) {
                    e.gotoPageDown();
                },
                readOnly: true
            },
            {
                name: "selectpageup",
                description: "Select page up",
                bindKey: "Shift-PageUp",
                exec: function(e) {
                    e.selectPageUp();
                },
                readOnly: true
            },
            {
                name: "pageup",
                description: "Page up",
                bindKey: r(null, "Option-PageUp"),
                exec: function(e) {
                    e.scrollPageUp();
                },
                readOnly: true
            },
            {
                name: "gotopageup",
                description: "Go to page up",
                bindKey: "PageUp",
                exec: function(e) {
                    e.gotoPageUp();
                },
                readOnly: true
            },
            {
                name: "scrollup",
                description: "Scroll up",
                bindKey: r("Ctrl-Up", null),
                exec: function(e) {
                    e.renderer.scrollBy(0, -2 * e.renderer.layerConfig.lineHeight);
                },
                readOnly: true
            },
            {
                name: "scrolldown",
                description: "Scroll down",
                bindKey: r("Ctrl-Down", null),
                exec: function(e) {
                    e.renderer.scrollBy(0, 2 * e.renderer.layerConfig.lineHeight);
                },
                readOnly: true
            },
            {
                name: "selectlinestart",
                description: "Select line start",
                bindKey: "Shift-Home",
                exec: function(e) {
                    e.getSelection().selectLineStart();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "selectlineend",
                description: "Select line end",
                bindKey: "Shift-End",
                exec: function(e) {
                    e.getSelection().selectLineEnd();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "togglerecording",
                description: "Toggle recording",
                bindKey: r("Ctrl-Alt-E", "Command-Option-E"),
                exec: function(e) {
                    e.commands.toggleRecording(e);
                },
                readOnly: true
            },
            {
                name: "replaymacro",
                description: "Replay macro",
                bindKey: r("Ctrl-Shift-E", "Command-Shift-E"),
                exec: function(e) {
                    e.commands.replay(e);
                },
                readOnly: true
            },
            {
                name: "jumptomatching",
                description: "Jump to matching",
                bindKey: r("Ctrl-\\|Ctrl-P", "Command-\\"),
                exec: function(e) {
                    e.jumpToMatching();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "animate",
                readOnly: true
            },
            {
                name: "selecttomatching",
                description: "Select to matching",
                bindKey: r("Ctrl-Shift-\\|Ctrl-Shift-P", "Command-Shift-\\"),
                exec: function(e) {
                    e.jumpToMatching(true);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "animate",
                readOnly: true
            },
            {
                name: "expandToMatching",
                description: "Expand to matching",
                bindKey: r("Ctrl-Shift-M", "Ctrl-Shift-M"),
                exec: function(e) {
                    e.jumpToMatching(true, true);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "animate",
                readOnly: true
            },
            {
                name: "passKeysToBrowser",
                description: "Pass keys to browser",
                bindKey: r(null, null),
                exec: function() {},
                passEvent: true,
                readOnly: true
            },
            {
                name: "copy",
                description: "Copy",
                exec: function(e) {},
                readOnly: true
            },
            {
                name: "cut",
                description: "Cut",
                exec: function(e) {
                    const t = e.$copyWithEmptySelection && e.selection.isEmpty() ? e.selection.getLineRange() : e.selection.getRange();
                    e._emit("cut", t);
                    if (!t.isEmpty()) {
                        e.session.remove(t);
                    }
                    e.clearSelection();
                },
                scrollIntoView: "cursor",
                multiSelectAction: "forEach"
            },
            {
                name: "paste",
                description: "Paste",
                exec: function(e, t) {
                    e.$handlePaste(t);
                },
                scrollIntoView: "cursor"
            },
            {
                name: "removeline",
                description: "Remove line",
                bindKey: r("Ctrl-D", "Command-D"),
                exec: function(e) {
                    e.removeLines();
                },
                scrollIntoView: "cursor",
                multiSelectAction: "forEachLine"
            },
            {
                name: "duplicateSelection",
                description: "Duplicate selection",
                bindKey: r("Ctrl-Shift-D", "Command-Shift-D"),
                exec: function(e) {
                    e.duplicateSelection();
                },
                scrollIntoView: "cursor",
                multiSelectAction: "forEach"
            },
            {
                name: "sortlines",
                description: "Sort lines",
                bindKey: r("Ctrl-Alt-S", "Command-Alt-S"),
                exec: function(e) {
                    e.sortLines();
                },
                scrollIntoView: "selection",
                multiSelectAction: "forEachLine"
            },
            {
                name: "togglecomment",
                description: "Toggle comment",
                bindKey: r("Ctrl-/", "Command-/"),
                exec: function(e) {
                    e.toggleCommentLines();
                },
                multiSelectAction: "forEachLine",
                scrollIntoView: "selectionPart"
            },
            {
                name: "toggleBlockComment",
                description: "Toggle block comment",
                bindKey: r("Ctrl-Shift-/", "Command-Shift-/"),
                exec: function(e) {
                    e.toggleBlockComment();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "selectionPart"
            },
            {
                name: "modifyNumberUp",
                description: "Modify number up",
                bindKey: r("Ctrl-Shift-Up", "Alt-Shift-Up"),
                exec: function(e) {
                    e.modifyNumber(1);
                },
                scrollIntoView: "cursor",
                multiSelectAction: "forEach"
            },
            {
                name: "modifyNumberDown",
                description: "Modify number down",
                bindKey: r("Ctrl-Shift-Down", "Alt-Shift-Down"),
                exec: function(e) {
                    e.modifyNumber(-1);
                },
                scrollIntoView: "cursor",
                multiSelectAction: "forEach"
            },
            {
                name: "replace",
                description: "Replace",
                bindKey: r("Ctrl-H", "Command-Option-F"),
                exec: function(e) {
                    o.loadModule("ace/ext/searchbox", function(t) {
                        t.Search(e, true);
                    });
                }
            },
            {
                name: "undo",
                description: "Undo",
                bindKey: r("Ctrl-Z", "Command-Z"),
                exec: function(e) {
                    e.undo();
                }
            },
            {
                name: "redo",
                description: "Redo",
                bindKey: r("Ctrl-Shift-Z|Ctrl-Y", "Command-Shift-Z|Command-Y"),
                exec: function(e) {
                    e.redo();
                }
            },
            {
                name: "copylinesup",
                description: "Copy lines up",
                bindKey: r("Alt-Shift-Up", "Command-Option-Up"),
                exec: function(e) {
                    e.copyLinesUp();
                },
                scrollIntoView: "cursor"
            },
            {
                name: "movelinesup",
                description: "Move lines up",
                bindKey: r("Alt-Up", "Option-Up"),
                exec: function(e) {
                    e.moveLinesUp();
                },
                scrollIntoView: "cursor"
            },
            {
                name: "copylinesdown",
                description: "Copy lines down",
                bindKey: r("Alt-Shift-Down", "Command-Option-Down"),
                exec: function(e) {
                    e.copyLinesDown();
                },
                scrollIntoView: "cursor"
            },
            {
                name: "movelinesdown",
                description: "Move lines down",
                bindKey: r("Alt-Down", "Option-Down"),
                exec: function(e) {
                    e.moveLinesDown();
                },
                scrollIntoView: "cursor"
            },
            {
                name: "del",
                description: "Delete",
                bindKey: r("Delete", "Delete|Ctrl-D|Shift-Delete"),
                exec: function(e) {
                    e.remove("right");
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            },
            {
                name: "backspace",
                description: "Backspace",
                bindKey: r("Shift-Backspace|Backspace", "Ctrl-Backspace|Shift-Backspace|Backspace|Ctrl-H"),
                exec: function(e) {
                    e.remove("left");
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            },
            {
                name: "cut_or_delete",
                description: "Cut or delete",
                bindKey: r("Shift-Delete", null),
                exec: function(e) {
                    if (!e.selection.isEmpty()) {
                        return false;
                    }
                    e.remove("left");
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            },
            {
                name: "removetolinestart",
                description: "Remove to line start",
                bindKey: r("Alt-Backspace", "Command-Backspace"),
                exec: function(e) {
                    e.removeToLineStart();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            },
            {
                name: "removetolineend",
                description: "Remove to line end",
                bindKey: r("Alt-Delete", "Ctrl-K|Command-Delete"),
                exec: function(e) {
                    e.removeToLineEnd();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            },
            {
                name: "removetolinestarthard",
                description: "Remove to line start hard",
                bindKey: r("Ctrl-Shift-Backspace", null),
                exec: function(e) {
                    const t = e.selection.getRange();
                    t.start.column = 0;
                    e.session.remove(t);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            },
            {
                name: "removetolineendhard",
                description: "Remove to line end hard",
                bindKey: r("Ctrl-Shift-Delete", null),
                exec: function(e) {
                    const t = e.selection.getRange();
                    t.end.column = Number.MAX_VALUE;
                    e.session.remove(t);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            },
            {
                name: "removewordleft",
                description: "Remove word left",
                bindKey: r("Ctrl-Backspace", "Alt-Backspace|Ctrl-Alt-Backspace"),
                exec: function(e) {
                    e.removeWordLeft();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            },
            {
                name: "removewordright",
                description: "Remove word right",
                bindKey: r("Ctrl-Delete", "Alt-Delete"),
                exec: function(e) {
                    e.removeWordRight();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            },
            {
                name: "outdent",
                description: "Outdent",
                bindKey: r("Shift-Tab", "Shift-Tab"),
                exec: function(e) {
                    e.blockOutdent();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "selectionPart"
            },
            {
                name: "indent",
                description: "Indent",
                bindKey: r("Tab", "Tab"),
                exec: function(e) {
                    e.indent();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "selectionPart"
            },
            {
                name: "blockoutdent",
                description: "Block outdent",
                bindKey: r("Ctrl-[", "Ctrl-["),
                exec: function(e) {
                    e.blockOutdent();
                },
                multiSelectAction: "forEachLine",
                scrollIntoView: "selectionPart"
            },
            {
                name: "blockindent",
                description: "Block indent",
                bindKey: r("Ctrl-]", "Ctrl-]"),
                exec: function(e) {
                    e.blockIndent();
                },
                multiSelectAction: "forEachLine",
                scrollIntoView: "selectionPart"
            },
            {
                name: "insertstring",
                description: "Insert string",
                exec: function(e, t) {
                    e.insert(t);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            },
            {
                name: "inserttext",
                description: "Insert text",
                exec: function(e, t) {
                    e.insert(n.stringRepeat(t.text || "", t.times || 1));
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            },
            {
                name: "splitline",
                description: "Split line",
                bindKey: r(null, "Ctrl-O"),
                exec: function(e) {
                    e.splitLine();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            },
            {
                name: "transposeletters",
                description: "Transpose letters",
                bindKey: r("Alt-Shift-X", "Ctrl-T"),
                exec: function(e) {
                    e.transposeLetters();
                },
                multiSelectAction: function(e) {
                    e.transposeSelections(1);
                },
                scrollIntoView: "cursor"
            },
            {
                name: "touppercase",
                description: "To uppercase",
                bindKey: r("Ctrl-U", "Ctrl-U"),
                exec: function(e) {
                    e.toUpperCase();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            },
            {
                name: "tolowercase",
                description: "To lowercase",
                bindKey: r("Ctrl-Shift-U", "Ctrl-Shift-U"),
                exec: function(e) {
                    e.toLowerCase();
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            },
            {
                name: "autoindent",
                description: "Auto Indent",
                bindKey: r(null, null),
                exec: function(e) {
                    e.autoIndent();
                },
                multiSelectAction: "forEachLine",
                scrollIntoView: "animate"
            },
            {
                name: "expandtoline",
                description: "Expand to line",
                bindKey: r("Ctrl-Shift-L", "Command-Shift-L"),
                exec: function(e) {
                    const t = e.selection.getRange();
                    t.start.column = t.end.column = 0;
                    t.end.row++;
                    e.selection.setRange(t, false);
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "joinlines",
                description: "Join lines",
                bindKey: r(null, null),
                exec: function(e) {
                    const t = e.selection.isBackwards();
                    const i = t ? e.selection.getSelectionLead() : e.selection.getSelectionAnchor();
                    for(var o = t ? e.selection.getSelectionAnchor() : e.selection.getSelectionLead(), r = e.session.doc.getLine(i.row).length, a = e.session.doc.getTextRange(e.selection.getRange()).replace(/\n\s*/, " ").length, c = e.session.doc.getLine(i.row), l = i.row + 1; l <= o.row + 1; l++){
                        let h = n.stringTrimLeft(n.stringTrimRight(e.session.doc.getLine(l)));
                        if (h.length !== 0) {
                            h = ` ${h}`;
                        }
                        c += h;
                    }
                    if (o.row + 1 < e.session.doc.getLength() - 1) {
                        c += e.session.doc.getNewLineCharacter();
                    }
                    e.clearSelection();
                    e.session.doc.replace(new Range(i.row, 0, o.row + 2, 0), c);
                    if (a > 0) {
                        e.selection.moveCursorTo(i.row, i.column);
                        e.selection.selectTo(i.row, i.column + a);
                    } else {
                        r = e.session.doc.getLine(i.row).length > r ? r + 1 : r;
                        e.selection.moveCursorTo(i.row, r);
                    }
                },
                multiSelectAction: "forEach",
                readOnly: true
            },
            {
                name: "invertSelection",
                description: "Invert selection",
                bindKey: r(null, null),
                exec: function(e) {
                    const t = e.session.doc.getLength() - 1;
                    const length = e.session.doc.getLine(t).length;
                    let ranges = e.selection.rangeList.ranges;
                    const o = [];
                    if (ranges.length < 1) {
                        ranges = [
                            e.selection.getRange()
                        ];
                    }
                    for(var r = 0; r < ranges.length; r++){
                        if (r == ranges.length - 1) {
                            if (!(ranges[r].end.row === t && ranges[r].end.column === length)) {
                                o.push(new Range(ranges[r].end.row, ranges[r].end.column, t, length));
                            }
                        }
                        if (r === 0) {
                            if (!(ranges[r].start.row === 0 && ranges[r].start.column === 0)) {
                                o.push(new Range(0, 0, ranges[r].start.row, ranges[r].start.column));
                            }
                        } else {
                            o.push(new Range(ranges[r - 1].end.row, ranges[r - 1].end.column, ranges[r].start.row, ranges[r].start.column));
                        }
                    }
                    e.exitMultiSelectMode();
                    e.clearSelection();
                    for(r = 0; r < o.length; r++){
                        e.selection.addRange(o[r], false);
                    }
                },
                readOnly: true,
                scrollIntoView: "none"
            },
            {
                name: "addLineAfter",
                exec: function(e) {
                    e.selection.clearSelection();
                    e.navigateLineEnd();
                    e.insert("\n");
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            },
            {
                name: "addLineBefore",
                exec: function(e) {
                    e.selection.clearSelection();
                    const t = e.getCursorPosition();
                    e.selection.moveTo(t.row - 1, Number.MAX_VALUE);
                    e.insert("\n");
                    if (t.row === 0) {
                        e.navigateUp();
                    }
                },
                multiSelectAction: "forEach",
                scrollIntoView: "cursor"
            },
            {
                name: "openCommandPallete",
                description: "Open command pallete",
                bindKey: r("F1", "F1"),
                exec: function(e) {
                    e.prompt({
                        $type: "commands"
                    });
                },
                readOnly: true
            },
            {
                name: "modeSelect",
                description: "Change language mode...",
                bindKey: r(null, null),
                exec: function(e) {
                    e.prompt({
                        $type: "modes"
                    });
                },
                readOnly: true
            }
        ];
        for(let level = 1; level < 9; level++){
            t.commands.push({
                name: `foldToLevel${level}`,
                description: `Fold To Level ${level}`,
                level,
                exec: function(e) {
                    e.session.foldToLevel(this.level);
                },
                scrollIntoView: "center",
                readOnly: true
            });
        }
    });
    ace.define("ace/editor", [
        "require",
        "exports",
        "module",
        "ace/lib/fixoldbrowsers",
        "ace/lib/oop",
        "ace/lib/dom",
        "ace/lib/lang",
        "ace/lib/useragent",
        "ace/keyboard/textinput",
        "ace/mouse/mouse_handler",
        "ace/mouse/fold_handler",
        "ace/keyboard/keybinding",
        "ace/edit_session",
        "ace/search",
        "ace/range",
        "ace/lib/event_emitter",
        "ace/commands/command_manager",
        "ace/commands/default_commands",
        "ace/config",
        "ace/token_iterator",
        "ace/clipboard"
    ], function(e, t, i) {
        "use strict";
        e("./lib/fixoldbrowsers");
        const n = e("./lib/oop");
        const o = e("./lib/dom");
        const s = e("./lib/lang");
        const r = e("./lib/useragent");
        const TextInput = e("./keyboard/textinput").TextInput;
        const MouseHandler = e("./mouse/mouse_handler").MouseHandler;
        const FoldHandler = e("./mouse/fold_handler").FoldHandler;
        const KeyBinding = e("./keyboard/keybinding").KeyBinding;
        const EditSession = e("./edit_session").EditSession;
        const Search = e("./search").Search;
        const Range = e("./range").Range;
        const EventEmitter = e("./lib/event_emitter").EventEmitter;
        const CommandManager = e("./commands/command_manager").CommandManager;
        const commands = e("./commands/default_commands").commands;
        const b = e("./config");
        const TokenIterator = e("./token_iterator").TokenIterator;
        const w = e("./clipboard");
        const x = function(e, t, i) {
            this.$toDestroy = [];
            const n = e.getContainerElement();
            this.container = n;
            this.renderer = e;
            this.id = `editor${++x.$uid}`;
            this.commands = new CommandManager(r.isMac ? "mac" : "win", commands);
            if (typeof document === "object") {
                this.textInput = new TextInput(e.getTextAreaContainer(), this);
                this.renderer.textarea = this.textInput.getElement();
                this.$mouseHandler = new MouseHandler(this);
                new FoldHandler(this);
            }
            this.keyBinding = new KeyBinding(this);
            this.$search = (new Search).set({
                wrap: true
            });
            this.$historyTracker = this.$historyTracker.bind(this);
            this.commands.on("exec", this.$historyTracker);
            this.$initOperationListeners();
            this._$emitInputEvent = s.delayedCall((function() {
                this._signal("input", {});
                if (this.session && this.session.bgTokenizer) {
                    this.session.bgTokenizer.scheduleStart();
                }
            }).bind(this));
            this.on("change", function(e, t) {
                t._$emitInputEvent.schedule(31);
            });
            this.setSession(t || i && i.session || new EditSession(""));
            b.resetOptions(this);
            if (i) {
                this.setOptions(i);
            }
            b._signal("editor", this);
        };
        x.$uid = 0;
        (function() {
            n.implement(this, EventEmitter);
            this.$initOperationListeners = function() {
                this.commands.on("exec", this.startOperation.bind(this), true);
                this.commands.on("afterExec", this.endOperation.bind(this), true);
                this.$opResetTimer = s.delayedCall(this.endOperation.bind(this, true));
                this.on("change", (function() {
                    if (!this.curOp) {
                        this.startOperation();
                        this.curOp.selectionBefore = this.$lastSel;
                    }
                    this.curOp.docChanged = true;
                }).bind(this), true);
                this.on("changeSelection", (function() {
                    if (!this.curOp) {
                        this.startOperation();
                        this.curOp.selectionBefore = this.$lastSel;
                    }
                    this.curOp.selectionChanged = true;
                }).bind(this), true);
            };
            this.curOp = null;
            this.prevOp = {};
            this.startOperation = function(e) {
                if (this.curOp) {
                    if (!e || this.curOp.command) {
                        return;
                    }
                    this.prevOp = this.curOp;
                }
                if (!e) {
                    this.previousCommand = null;
                    e = {};
                }
                this.$opResetTimer.schedule();
                this.curOp = this.session.curOp = {
                    command: e.command || {},
                    args: e.args,
                    scrollTop: this.renderer.scrollTop
                };
                this.curOp.selectionBefore = this.selection.toJSON();
            };
            this.endOperation = function(e) {
                if (this.curOp && this.session) {
                    if (e && e.returnValue === false || !this.session) {
                        return this.curOp = null;
                    }
                    if (e == 1 && this.curOp.command && this.curOp.command.name == "mouse") {
                        return;
                    }
                    this._signal("beforeEndOperation");
                    if (!this.curOp) {
                        return;
                    }
                    const t = this.curOp.command;
                    let i = t && t.scrollIntoView;
                    if (i) {
                        switch(i){
                            case "center-animate":
                                i = "animate";
                            case "center":
                                this.renderer.scrollCursorIntoView(null, 0.5);
                                break;
                            case "animate":
                            case "cursor":
                                this.renderer.scrollCursorIntoView();
                                break;
                            case "selectionPart":
                                const n = this.selection.getRange();
                                const o = this.renderer.layerConfig;
                                if (n.start.row >= o.lastRow || n.end.row <= o.firstRow) {
                                    this.renderer.scrollSelectionIntoView(this.selection.anchor, this.selection.lead);
                                }
                        }
                        if (i == "animate") {
                            this.renderer.animateScrolling(this.curOp.scrollTop);
                        }
                    }
                    const s = this.selection.toJSON();
                    this.curOp.selectionAfter = s;
                    this.$lastSel = this.selection.toJSON();
                    this.session.getUndoManager().addSelection(s);
                    this.prevOp = this.curOp;
                    this.curOp = null;
                }
            };
            this.$mergeableCommands = [
                "backspace",
                "del",
                "insertstring"
            ];
            this.$historyTracker = function(e) {
                if (this.$mergeUndoDeltas) {
                    const t = this.prevOp;
                    const i = this.$mergeableCommands;
                    let n = t.command && e.command.name == t.command.name;
                    if (e.command.name == "insertstring") {
                        const o = e.args;
                        if (this.mergeNextCommand === undefined) {
                            this.mergeNextCommand = true;
                        }
                        n = n && this.mergeNextCommand && (!/\s/.test(o) || /\s/.test(t.args));
                        this.mergeNextCommand = true;
                    } else {
                        n = n && i.indexOf(e.command.name) !== -1;
                    }
                    if (this.$mergeUndoDeltas != "always" && Date.now() - this.sequenceStartTime > 2000) {
                        n = false;
                    }
                    if (n) {
                        this.session.mergeUndoDeltas = true;
                    } else if (i.indexOf(e.command.name) !== -1) {
                        this.sequenceStartTime = Date.now();
                    }
                }
            };
            this.setKeyboardHandler = function(e, t) {
                if (e && typeof e === "string" && e != "ace") {
                    this.$keybindingId = e;
                    const i = this;
                    b.loadModule([
                        "keybinding",
                        e
                    ], function(n) {
                        if (i.$keybindingId == e) {
                            i.keyBinding.setKeyboardHandler(n && n.handler);
                        }
                        if (t) {
                            t();
                        }
                    });
                } else {
                    this.$keybindingId = null;
                    this.keyBinding.setKeyboardHandler(e);
                    if (t) {
                        t();
                    }
                }
            };
            this.getKeyboardHandler = function() {
                return this.keyBinding.getKeyboardHandler();
            };
            this.setSession = function(session) {
                if (this.session != session) {
                    if (this.curOp) {
                        this.endOperation();
                    }
                    this.curOp = {};
                    const oldSession = this.session;
                    if (oldSession) {
                        this.session.off("change", this.$onDocumentChange);
                        this.session.off("changeMode", this.$onChangeMode);
                        this.session.off("tokenizerUpdate", this.$onTokenizerUpdate);
                        this.session.off("changeTabSize", this.$onChangeTabSize);
                        this.session.off("changeWrapLimit", this.$onChangeWrapLimit);
                        this.session.off("changeWrapMode", this.$onChangeWrapMode);
                        this.session.off("changeFold", this.$onChangeFold);
                        this.session.off("changeFrontMarker", this.$onChangeFrontMarker);
                        this.session.off("changeBackMarker", this.$onChangeBackMarker);
                        this.session.off("changeBreakpoint", this.$onChangeBreakpoint);
                        this.session.off("changeAnnotation", this.$onChangeAnnotation);
                        this.session.off("changeOverwrite", this.$onCursorChange);
                        this.session.off("changeScrollTop", this.$onScrollTopChange);
                        this.session.off("changeScrollLeft", this.$onScrollLeftChange);
                        const i = this.session.getSelection();
                        i.off("changeCursor", this.$onCursorChange);
                        i.off("changeSelection", this.$onSelectionChange);
                    }
                    this.session = session;
                    if (session) {
                        this.$onDocumentChange = this.onDocumentChange.bind(this);
                        session.on("change", this.$onDocumentChange);
                        this.renderer.setSession(session);
                        this.$onChangeMode = this.onChangeMode.bind(this);
                        session.on("changeMode", this.$onChangeMode);
                        this.$onTokenizerUpdate = this.onTokenizerUpdate.bind(this);
                        session.on("tokenizerUpdate", this.$onTokenizerUpdate);
                        this.$onChangeTabSize = this.renderer.onChangeTabSize.bind(this.renderer);
                        session.on("changeTabSize", this.$onChangeTabSize);
                        this.$onChangeWrapLimit = this.onChangeWrapLimit.bind(this);
                        session.on("changeWrapLimit", this.$onChangeWrapLimit);
                        this.$onChangeWrapMode = this.onChangeWrapMode.bind(this);
                        session.on("changeWrapMode", this.$onChangeWrapMode);
                        this.$onChangeFold = this.onChangeFold.bind(this);
                        session.on("changeFold", this.$onChangeFold);
                        this.$onChangeFrontMarker = this.onChangeFrontMarker.bind(this);
                        this.session.on("changeFrontMarker", this.$onChangeFrontMarker);
                        this.$onChangeBackMarker = this.onChangeBackMarker.bind(this);
                        this.session.on("changeBackMarker", this.$onChangeBackMarker);
                        this.$onChangeBreakpoint = this.onChangeBreakpoint.bind(this);
                        this.session.on("changeBreakpoint", this.$onChangeBreakpoint);
                        this.$onChangeAnnotation = this.onChangeAnnotation.bind(this);
                        this.session.on("changeAnnotation", this.$onChangeAnnotation);
                        this.$onCursorChange = this.onCursorChange.bind(this);
                        this.session.on("changeOverwrite", this.$onCursorChange);
                        this.$onScrollTopChange = this.onScrollTopChange.bind(this);
                        this.session.on("changeScrollTop", this.$onScrollTopChange);
                        this.$onScrollLeftChange = this.onScrollLeftChange.bind(this);
                        this.session.on("changeScrollLeft", this.$onScrollLeftChange);
                        this.selection = session.getSelection();
                        this.selection.on("changeCursor", this.$onCursorChange);
                        this.$onSelectionChange = this.onSelectionChange.bind(this);
                        this.selection.on("changeSelection", this.$onSelectionChange);
                        this.onChangeMode();
                        this.onCursorChange();
                        this.onScrollTopChange();
                        this.onScrollLeftChange();
                        this.onSelectionChange();
                        this.onChangeFrontMarker();
                        this.onChangeBackMarker();
                        this.onChangeBreakpoint();
                        this.onChangeAnnotation();
                        if (this.session.getUseWrapMode()) {
                            this.renderer.adjustWrapLimit();
                        }
                        this.renderer.updateFull();
                    } else {
                        this.selection = null;
                        this.renderer.setSession(session);
                    }
                    this._signal("changeSession", {
                        session,
                        oldSession
                    });
                    this.curOp = null;
                    if (oldSession) {
                        oldSession._signal("changeEditor", {
                            oldEditor: this
                        });
                    }
                    if (session) {
                        session._signal("changeEditor", {
                            editor: this
                        });
                    }
                    if (session && session.bgTokenizer) {
                        session.bgTokenizer.scheduleStart();
                    }
                }
            };
            this.getSession = function() {
                return this.session;
            };
            this.setValue = function(e, t) {
                this.session.doc.setValue(e);
                if (t) {
                    if (t == 1) {
                        this.navigateFileEnd();
                    } else if (t == -1) {
                        this.navigateFileStart();
                    }
                } else {
                    this.selectAll();
                }
                return e;
            };
            this.getValue = function() {
                return this.session.getValue();
            };
            this.getSelection = function() {
                return this.selection;
            };
            this.resize = function(e) {
                this.renderer.onResize(e);
            };
            this.setTheme = function(e, t) {
                this.renderer.setTheme(e, t);
            };
            this.getTheme = function() {
                return this.renderer.getTheme();
            };
            this.setStyle = function(e) {
                this.renderer.setStyle(e);
            };
            this.unsetStyle = function(e) {
                this.renderer.unsetStyle(e);
            };
            this.getFontSize = function() {
                return this.getOption("fontSize") || o.computedStyle(this.container).fontSize;
            };
            this.setFontSize = function(e) {
                this.setOption("fontSize", e);
            };
            this.$highlightBrackets = function() {
                if (!this.$highlightPending) {
                    const e = this;
                    this.$highlightPending = true;
                    setTimeout(()=>{
                        e.$highlightPending = false;
                        const session = e.session;
                        if (session && session.bgTokenizer) {
                            if (session.$bracketHighlight) {
                                session.$bracketHighlight.markerIds.forEach((e)=>{
                                    session.removeMarker(e);
                                });
                                session.$bracketHighlight = null;
                            }
                            let i = session.getMatchingBracketRanges(e.getCursorPosition());
                            if (!i && session.$mode.getMatching) {
                                i = session.$mode.getMatching(e.session);
                            }
                            if (i) {
                                let n = "ace_bracket";
                                if (Array.isArray(i)) {
                                    if (i.length == 1) {
                                        n = "ace_error_bracket";
                                    }
                                } else {
                                    i = [
                                        i
                                    ];
                                }
                                if (i.length == 2) {
                                    if (Range.comparePoints(i[0].end, i[1].start) == 0) {
                                        i = [
                                            Range.fromPoints(i[0].start, i[1].end)
                                        ];
                                    } else if (Range.comparePoints(i[0].start, i[1].end) == 0) {
                                        i = [
                                            Range.fromPoints(i[1].start, i[0].end)
                                        ];
                                    }
                                }
                                session.$bracketHighlight = {
                                    ranges: i,
                                    markerIds: i.map((e)=>session.addMarker(e, n, "text"))
                                };
                            }
                        }
                    }, 50);
                }
            };
            this.$highlightTags = function() {
                if (!this.$highlightTagPending) {
                    const e = this;
                    this.$highlightTagPending = true;
                    setTimeout(()=>{
                        e.$highlightTagPending = false;
                        const session = e.session;
                        if (session && session.bgTokenizer) {
                            const i = e.getCursorPosition();
                            const n = new TokenIterator(e.session, i.row, i.column);
                            let o = n.getCurrentToken();
                            if (!o || !/\b(?:tag-open|tag-name)/.test(o.type)) {
                                session.removeMarker(session.$tagHighlight);
                                return void (session.$tagHighlight = null);
                            }
                            if (o.type.indexOf("tag-open") === -1 || (o = n.stepForward())) {
                                const s = o.value;
                                let r = o.value;
                                let a = 0;
                                let c = n.stepBackward();
                                if (c.value === "<") {
                                    do {
                                        c = o;
                                        if (o = n.stepForward()) {
                                            if (o.type.indexOf("tag-name") !== -1) {
                                                if (s === (r = o.value)) {
                                                    if (c.value === "<") {
                                                        a++;
                                                    } else if (c.value === "</") {
                                                        a--;
                                                    }
                                                }
                                            } else if (s === r && o.value === "/>") {
                                                a--;
                                            }
                                        }
                                    }while (o && a >= 0)
                                } else {
                                    do {
                                        o = c;
                                        c = n.stepBackward();
                                        if (o) {
                                            if (o.type.indexOf("tag-name") !== -1) {
                                                if (s === o.value) {
                                                    if (c.value === "<") {
                                                        a++;
                                                    } else if (c.value === "</") {
                                                        a--;
                                                    }
                                                }
                                            } else if (o.value === "/>") {
                                                let l = 0;
                                                for(let h = c; h;){
                                                    if (h.type.indexOf("tag-name") !== -1 && h.value === s) {
                                                        a--;
                                                        break;
                                                    }
                                                    if (h.value === "<") {
                                                        break;
                                                    }
                                                    h = n.stepBackward();
                                                    l++;
                                                }
                                                for(let d = 0; d < l; d++){
                                                    n.stepForward();
                                                }
                                            }
                                        }
                                    }while (c && a <= 0)
                                    n.stepForward();
                                }
                                if (!o) {
                                    session.removeMarker(session.$tagHighlight);
                                    return void (session.$tagHighlight = null);
                                }
                                const u = n.getCurrentTokenRow();
                                const g = n.getCurrentTokenColumn();
                                const p = new Range(u, g, u, g + o.value.length);
                                const m = session.$backMarkers[session.$tagHighlight];
                                if (session.$tagHighlight && m != null && p.compareRange(m.range) !== 0) {
                                    session.removeMarker(session.$tagHighlight);
                                    session.$tagHighlight = null;
                                }
                                if (!session.$tagHighlight) {
                                    session.$tagHighlight = session.addMarker(p, "ace_bracket", "text");
                                }
                            }
                        }
                    }, 50);
                }
            };
            this.focus = function() {
                const _this = this;
                setTimeout(()=>{
                    if (!_this.isFocused()) {
                        _this.textInput.focus();
                    }
                });
                this.textInput.focus();
            };
            this.isFocused = function() {
                return this.textInput.isFocused();
            };
            this.blur = function() {
                this.textInput.blur();
            };
            this.onFocus = function(e) {
                if (!this.$isFocused) {
                    this.$isFocused = true;
                    this.renderer.showCursor();
                    this.renderer.visualizeFocus();
                    this._emit("focus", e);
                }
            };
            this.onBlur = function(e) {
                if (this.$isFocused) {
                    this.$isFocused = false;
                    this.renderer.hideCursor();
                    this.renderer.visualizeBlur();
                    this._emit("blur", e);
                }
            };
            this.$cursorChange = function() {
                this.renderer.updateCursor();
                this.$highlightBrackets();
                this.$highlightTags();
                this.$updateHighlightActiveLine();
            };
            this.onDocumentChange = function(e) {
                const $useWrapMode = this.session.$useWrapMode;
                const i = e.start.row == e.end.row ? e.end.row : Infinity;
                this.renderer.updateLines(e.start.row, i, $useWrapMode);
                this._signal("change", e);
                this.$cursorChange();
            };
            this.onTokenizerUpdate = function({ data }) {
                this.renderer.updateLines(data.first, data.last);
            };
            this.onScrollTopChange = function() {
                this.renderer.scrollToY(this.session.getScrollTop());
            };
            this.onScrollLeftChange = function() {
                this.renderer.scrollToX(this.session.getScrollLeft());
            };
            this.onCursorChange = function() {
                this.$cursorChange();
                this._signal("changeSelection");
            };
            this.$updateHighlightActiveLine = function() {
                let e;
                const t = this.getSession();
                if (this.$highlightActiveLine) {
                    if (!(this.$selectionStyle == "line" && this.selection.isMultiLine())) {
                        e = this.getCursorPosition();
                    }
                    if (this.renderer.theme && this.renderer.theme.$selectionColorConflict && !this.selection.isEmpty()) {
                        e = false;
                    }
                    if (!(!this.renderer.$maxLines || this.session.getLength() !== 1 || this.renderer.$minLines > 1)) {
                        e = false;
                    }
                }
                if (t.$highlightLineMarker && !e) {
                    t.removeMarker(t.$highlightLineMarker.id);
                    t.$highlightLineMarker = null;
                } else if (!t.$highlightLineMarker && e) {
                    const i = new Range(e.row, e.column, e.row, Infinity);
                    i.id = t.addMarker(i, "ace_active-line", "screenLine");
                    t.$highlightLineMarker = i;
                } else {
                    if (e) {
                        t.$highlightLineMarker.start.row = e.row;
                        t.$highlightLineMarker.end.row = e.row;
                        t.$highlightLineMarker.start.column = e.column;
                        t._signal("changeBackMarker");
                    }
                }
            };
            this.onSelectionChange = function(e) {
                const session = this.session;
                if (session.$selectionMarker) {
                    session.removeMarker(session.$selectionMarker);
                }
                session.$selectionMarker = null;
                if (this.selection.isEmpty()) {
                    this.$updateHighlightActiveLine();
                } else {
                    const i = this.selection.getRange();
                    const n = this.getSelectionStyle();
                    session.$selectionMarker = session.addMarker(i, "ace_selection", n);
                }
                const o = this.$highlightSelectedWord && this.$getSelectionHighLightRegexp();
                this.session.highlight(o);
                this._signal("changeSelection");
            };
            this.$getSelectionHighLightRegexp = function() {
                const session = this.session;
                const t = this.getSelectionRange();
                if (!t.isEmpty() && !t.isMultiLine()) {
                    const i = t.start.column;
                    const n = t.end.column;
                    const o = session.getLine(t.start.row);
                    const s = o.substring(i, n);
                    if (!(s.length > 5000) && /[\w\d]/.test(s)) {
                        const r = this.$search.$assembleRegExp({
                            wholeWord: true,
                            caseSensitive: true,
                            needle: s
                        });
                        const a = o.substring(i - 1, n + 1);
                        if (r.test(a)) {
                            return r;
                        }
                    }
                }
            };
            this.onChangeFrontMarker = function() {
                this.renderer.updateFrontMarkers();
            };
            this.onChangeBackMarker = function() {
                this.renderer.updateBackMarkers();
            };
            this.onChangeBreakpoint = function() {
                this.renderer.updateBreakpoints();
            };
            this.onChangeAnnotation = function() {
                this.renderer.setAnnotations(this.session.getAnnotations());
            };
            this.onChangeMode = function(e) {
                this.renderer.updateText();
                this._emit("changeMode", e);
            };
            this.onChangeWrapLimit = function() {
                this.renderer.updateFull();
            };
            this.onChangeWrapMode = function() {
                this.renderer.onResize(true);
            };
            this.onChangeFold = function() {
                this.$updateHighlightActiveLine();
                this.renderer.updateFull();
            };
            this.getSelectedText = function() {
                return this.session.getTextRange(this.getSelectionRange());
            };
            this.getCopyText = function() {
                let e = this.getSelectedText();
                const t = this.session.doc.getNewLineCharacter();
                let i = false;
                if (!e && this.$copyWithEmptySelection) {
                    i = true;
                    for(let n = this.selection.getAllRanges(), o = 0; o < n.length; o++){
                        const s = n[o];
                        if (!(o && n[o - 1].start.row == s.start.row)) {
                            e += this.session.getLine(s.start.row) + t;
                        }
                    }
                }
                const r = {
                    text: e
                };
                this._signal("copy", r);
                w.lineMode = i ? r.text : "";
                return r.text;
            };
            this.onCopy = function() {
                this.commands.exec("copy", this);
            };
            this.onCut = function() {
                this.commands.exec("cut", this);
            };
            this.onPaste = function(text, t) {
                const i = {
                    text,
                    event: t
                };
                this.commands.exec("paste", this, i);
            };
            this.$handlePaste = function(e) {
                if (typeof e === "string") {
                    e = {
                        text: e
                    };
                }
                this._signal("paste", e);
                const e_text = e.text;
                const i = e_text == w.lineMode;
                const session = this.session;
                if (!this.inMultiSelectMode || this.inVirtualSelectionMode) {
                    if (i) {
                        session.insert({
                            row: this.selection.lead.row,
                            column: 0
                        }, e_text);
                    } else {
                        this.insert(e_text);
                    }
                } else if (i) {
                    this.selection.rangeList.ranges.forEach((e)=>{
                        session.insert({
                            row: e.start.row,
                            column: 0
                        }, e_text);
                    });
                } else {
                    const o = e_text.split(/\r\n|\r|\n/);
                    const s = this.selection.rangeList.ranges;
                    const r = !(o.length != 2 || o[0] && o[1]);
                    if (o.length != s.length || r) {
                        return this.commands.exec("insertstring", this, e_text);
                    }
                    for(let a = s.length; a--;){
                        const c = s[a];
                        if (!c.isEmpty()) {
                            session.remove(c);
                        }
                        session.insert(c.start, o[a]);
                    }
                }
            };
            this.execCommand = function(e, t) {
                return this.commands.exec(e, this, t);
            };
            this.insert = function(e, t) {
                const session = this.session;
                const n = session.getMode();
                let o = this.getCursorPosition();
                if (this.getBehavioursEnabled() && !t) {
                    var s = n.transformAction(session.getState(o.row), "insertion", this, session, e);
                    if (s) {
                        if (e !== s.text) {
                            if (!this.inVirtualSelectionMode) {
                                this.session.mergeUndoDeltas = false;
                                this.mergeNextCommand = false;
                            }
                        }
                        e = s.text;
                    }
                }
                if (e == "\t") {
                    e = this.session.getTabString();
                }
                if (this.selection.isEmpty()) {
                    if (this.session.getOverwrite() && e.indexOf("\n") == -1) {
                        (r = new Range.fromPoints(o, o)).end.column += e.length;
                        this.session.remove(r);
                    }
                } else {
                    var r = this.getSelectionRange();
                    o = this.session.remove(r);
                    this.clearSelection();
                }
                if (e == "\n" || e == "\r\n") {
                    var a = session.getLine(o.row);
                    if (o.column > a.search(/\S|$/)) {
                        const c = a.substr(o.column).search(/\S|$/);
                        session.doc.removeInLine(o.row, o.column, o.column + c);
                    }
                }
                this.clearSelection();
                const o_column = o.column;
                const h = session.getState(o.row);
                a = session.getLine(o.row);
                const d = n.checkOutdent(h, a, e);
                session.insert(o, e);
                if (s && s.selection) {
                    if (s.selection.length == 2) {
                        this.selection.setSelectionRange(new Range(o.row, o_column + s.selection[0], o.row, o_column + s.selection[1]));
                    } else {
                        this.selection.setSelectionRange(new Range(o.row + s.selection[0], s.selection[1], o.row + s.selection[2], s.selection[3]));
                    }
                }
                if (this.$enableAutoIndent) {
                    if (session.getDocument().isNewLine(e)) {
                        const u = n.getNextLineIndent(h, a.slice(0, o.column), session.getTabString());
                        session.insert({
                            row: o.row + 1,
                            column: 0
                        }, u);
                    }
                    if (d) {
                        n.autoOutdent(h, session, o.row);
                    }
                }
            };
            this.autoIndent = function() {
                let e;
                let t;
                const session = this.session;
                const n = session.getMode();
                if (this.selection.isEmpty()) {
                    e = 0;
                    t = session.doc.getLength() - 1;
                } else {
                    const o = this.getSelectionRange();
                    e = o.start.row;
                    t = o.end.row;
                }
                let s;
                let r;
                let a;
                let c = "";
                let l = "";
                let h = "";
                const d = session.getTabString();
                for(let u = e; u <= t; u++){
                    if (u > 0) {
                        c = session.getState(u - 1);
                        l = session.getLine(u - 1);
                        h = n.getNextLineIndent(c, l, d);
                    }
                    s = session.getLine(u);
                    if (h !== (r = n.$getIndent(s))) {
                        if (r.length > 0) {
                            a = new Range(u, 0, u, r.length);
                            session.remove(a);
                        }
                        if (h.length > 0) {
                            session.insert({
                                row: u,
                                column: 0
                            }, h);
                        }
                    }
                    n.autoOutdent(c, session, u);
                }
            };
            this.onTextInput = function(e, t) {
                if (!t) {
                    return this.keyBinding.onTextInput(e);
                }
                this.startOperation({
                    command: {
                        name: "insertstring"
                    }
                });
                const i = this.applyComposition.bind(this, e, t);
                if (this.selection.rangeCount) {
                    this.forEachSelection(i);
                } else {
                    i();
                }
                this.endOperation();
            };
            this.applyComposition = function(e, t) {
                let i;
                if (t.extendLeft || t.extendRight) {
                    (i = this.selection.getRange()).start.column -= t.extendLeft;
                    i.end.column += t.extendRight;
                    if (i.start.column < 0) {
                        i.start.row--;
                        i.start.column += this.session.getLine(i.start.row).length + 1;
                    }
                    this.selection.setRange(i);
                    if (!(e || i.isEmpty())) {
                        this.remove();
                    }
                }
                if (!(!e && this.selection.isEmpty())) {
                    this.insert(e, true);
                }
                if (t.restoreStart || t.restoreEnd) {
                    (i = this.selection.getRange()).start.column -= t.restoreStart;
                    i.end.column -= t.restoreEnd;
                    this.selection.setRange(i);
                }
            };
            this.onCommandKey = function(e, t, i) {
                return this.keyBinding.onCommandKey(e, t, i);
            };
            this.setOverwrite = function(e) {
                this.session.setOverwrite(e);
            };
            this.getOverwrite = function() {
                return this.session.getOverwrite();
            };
            this.toggleOverwrite = function() {
                this.session.toggleOverwrite();
            };
            this.setScrollSpeed = function(e) {
                this.setOption("scrollSpeed", e);
            };
            this.getScrollSpeed = function() {
                return this.getOption("scrollSpeed");
            };
            this.setDragDelay = function(e) {
                this.setOption("dragDelay", e);
            };
            this.getDragDelay = function() {
                return this.getOption("dragDelay");
            };
            this.setSelectionStyle = function(e) {
                this.setOption("selectionStyle", e);
            };
            this.getSelectionStyle = function() {
                return this.getOption("selectionStyle");
            };
            this.setHighlightActiveLine = function(e) {
                this.setOption("highlightActiveLine", e);
            };
            this.getHighlightActiveLine = function() {
                return this.getOption("highlightActiveLine");
            };
            this.setHighlightGutterLine = function(e) {
                this.setOption("highlightGutterLine", e);
            };
            this.getHighlightGutterLine = function() {
                return this.getOption("highlightGutterLine");
            };
            this.setHighlightSelectedWord = function(e) {
                this.setOption("highlightSelectedWord", e);
            };
            this.getHighlightSelectedWord = function() {
                return this.$highlightSelectedWord;
            };
            this.setAnimatedScroll = function(e) {
                this.renderer.setAnimatedScroll(e);
            };
            this.getAnimatedScroll = function() {
                return this.renderer.getAnimatedScroll();
            };
            this.setShowInvisibles = function(e) {
                this.renderer.setShowInvisibles(e);
            };
            this.getShowInvisibles = function() {
                return this.renderer.getShowInvisibles();
            };
            this.setDisplayIndentGuides = function(e) {
                this.renderer.setDisplayIndentGuides(e);
            };
            this.getDisplayIndentGuides = function() {
                return this.renderer.getDisplayIndentGuides();
            };
            this.setShowPrintMargin = function(e) {
                this.renderer.setShowPrintMargin(e);
            };
            this.getShowPrintMargin = function() {
                return this.renderer.getShowPrintMargin();
            };
            this.setPrintMarginColumn = function(e) {
                this.renderer.setPrintMarginColumn(e);
            };
            this.getPrintMarginColumn = function() {
                return this.renderer.getPrintMarginColumn();
            };
            this.setReadOnly = function(e) {
                this.setOption("readOnly", e);
            };
            this.getReadOnly = function() {
                return this.getOption("readOnly");
            };
            this.setBehavioursEnabled = function(e) {
                this.setOption("behavioursEnabled", e);
            };
            this.getBehavioursEnabled = function() {
                return this.getOption("behavioursEnabled");
            };
            this.setWrapBehavioursEnabled = function(e) {
                this.setOption("wrapBehavioursEnabled", e);
            };
            this.getWrapBehavioursEnabled = function() {
                return this.getOption("wrapBehavioursEnabled");
            };
            this.setShowFoldWidgets = function(e) {
                this.setOption("showFoldWidgets", e);
            };
            this.getShowFoldWidgets = function() {
                return this.getOption("showFoldWidgets");
            };
            this.setFadeFoldWidgets = function(e) {
                this.setOption("fadeFoldWidgets", e);
            };
            this.getFadeFoldWidgets = function() {
                return this.getOption("fadeFoldWidgets");
            };
            this.remove = function(e) {
                if (this.selection.isEmpty()) {
                    if (e == "left") {
                        this.selection.selectLeft();
                    } else {
                        this.selection.selectRight();
                    }
                }
                let t = this.getSelectionRange();
                if (this.getBehavioursEnabled()) {
                    const i = this.session;
                    const n = i.getState(t.start.row);
                    const o = i.getMode().transformAction(n, "deletion", this, i, t);
                    if (t.end.column === 0) {
                        const s = i.getTextRange(t);
                        if (s[s.length - 1] == "\n") {
                            const r = i.getLine(t.end.row);
                            if (/^\s+$/.test(r)) {
                                t.end.column = r.length;
                            }
                        }
                    }
                    if (o) {
                        t = o;
                    }
                }
                this.session.remove(t);
                this.clearSelection();
            };
            this.removeWordRight = function() {
                if (this.selection.isEmpty()) {
                    this.selection.selectWordRight();
                }
                this.session.remove(this.getSelectionRange());
                this.clearSelection();
            };
            this.removeWordLeft = function() {
                if (this.selection.isEmpty()) {
                    this.selection.selectWordLeft();
                }
                this.session.remove(this.getSelectionRange());
                this.clearSelection();
            };
            this.removeToLineStart = function() {
                if (this.selection.isEmpty()) {
                    this.selection.selectLineStart();
                }
                if (this.selection.isEmpty()) {
                    this.selection.selectLeft();
                }
                this.session.remove(this.getSelectionRange());
                this.clearSelection();
            };
            this.removeToLineEnd = function() {
                if (this.selection.isEmpty()) {
                    this.selection.selectLineEnd();
                }
                const e = this.getSelectionRange();
                if (e.start.column == e.end.column && e.start.row == e.end.row) {
                    e.end.column = 0;
                    e.end.row++;
                }
                this.session.remove(e);
                this.clearSelection();
            };
            this.splitLine = function() {
                if (!this.selection.isEmpty()) {
                    this.session.remove(this.getSelectionRange());
                    this.clearSelection();
                }
                const e = this.getCursorPosition();
                this.insert("\n");
                this.moveCursorToPosition(e);
            };
            this.transposeLetters = function() {
                if (this.selection.isEmpty()) {
                    const e = this.getCursorPosition();
                    const t = e.column;
                    if (t !== 0) {
                        let i;
                        let n;
                        const o = this.session.getLine(e.row);
                        if (t < o.length) {
                            i = o.charAt(t) + o.charAt(t - 1);
                            n = new Range(e.row, t - 1, e.row, t + 1);
                        } else {
                            i = o.charAt(t - 1) + o.charAt(t - 2);
                            n = new Range(e.row, t - 2, e.row, t);
                        }
                        this.session.replace(n, i);
                        this.session.selection.moveToPosition(n.end);
                    }
                }
            };
            this.toLowerCase = function() {
                const e = this.getSelectionRange();
                if (this.selection.isEmpty()) {
                    this.selection.selectWord();
                }
                const t = this.getSelectionRange();
                const i = this.session.getTextRange(t);
                this.session.replace(t, i.toLowerCase());
                this.selection.setSelectionRange(e);
            };
            this.toUpperCase = function() {
                const e = this.getSelectionRange();
                if (this.selection.isEmpty()) {
                    this.selection.selectWord();
                }
                const t = this.getSelectionRange();
                const i = this.session.getTextRange(t);
                this.session.replace(t, i.toUpperCase());
                this.selection.setSelectionRange(e);
            };
            this.indent = function() {
                const session = this.session;
                const t = this.getSelectionRange();
                if (!(t.start.row < t.end.row)) {
                    if (t.start.column < t.end.column) {
                        const i = session.getTextRange(t);
                        if (!/^\s+$/.test(i)) {
                            h = this.$getSelectedRows();
                            return void session.indentRows(h.first, h.last, "\t");
                        }
                    }
                    const n = session.getLine(t.start.row);
                    const o = t.start;
                    const r = session.getTabSize();
                    const a = session.documentToScreenColumn(o.row, o.column);
                    if (this.session.getUseSoftTabs()) {
                        var c = r - a % r;
                        var l = s.stringRepeat(" ", c);
                    } else {
                        for(c = a % r; n[t.start.column - 1] == " " && c;){
                            t.start.column--;
                            c--;
                        }
                        this.selection.setSelectionRange(t);
                        l = "\t";
                    }
                    return this.insert(l);
                }
                var h = this.$getSelectedRows();
                session.indentRows(h.first, h.last, "\t");
            };
            this.blockIndent = function() {
                const e = this.$getSelectedRows();
                this.session.indentRows(e.first, e.last, "\t");
            };
            this.blockOutdent = function() {
                const e = this.session.getSelection();
                this.session.outdentRows(e.getRange());
            };
            this.sortLines = function() {
                for(var e = this.$getSelectedRows(), t = this.session, i = [], n = e.first; n <= e.last; n++){
                    i.push(t.getLine(n));
                }
                i.sort((e, t)=>{
                    if (e.toLowerCase() < t.toLowerCase()) {
                        return -1;
                    }
                    if (e.toLowerCase() > t.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                });
                const o = new Range(0, 0, 0, 0);
                for(n = e.first; n <= e.last; n++){
                    const s = t.getLine(n);
                    o.start.row = n;
                    o.end.row = n;
                    o.end.column = s.length;
                    t.replace(o, i[n - e.first]);
                }
            };
            this.toggleCommentLines = function() {
                const e = this.session.getState(this.getCursorPosition().row);
                const t = this.$getSelectedRows();
                this.session.getMode().toggleCommentLines(e, this.session, t.first, t.last);
            };
            this.toggleBlockComment = function() {
                const e = this.getCursorPosition();
                const t = this.session.getState(e.row);
                const i = this.getSelectionRange();
                this.session.getMode().toggleBlockComment(t, this.session, i, e);
            };
            this.getNumberAt = function(e, t) {
                const i = /[\-]?[0-9]+(?:\.[0-9]+)?/g;
                i.lastIndex = 0;
                const n = this.session.getLine(e);
                while(i.lastIndex < t){
                    const o = i.exec(n);
                    if (o.index <= t && o.index + o[0].length >= t) {
                        return {
                            value: o[0],
                            start: o.index,
                            end: o.index + o[0].length
                        };
                    }
                }
                return null;
            };
            this.modifyNumber = function(e) {
                const row = this.selection.getCursor().row;
                const column = this.selection.getCursor().column;
                const n = new Range(row, column - 1, row, column);
                const o = this.session.getTextRange(n);
                if (!isNaN(parseFloat(o)) && isFinite(o)) {
                    const s = this.getNumberAt(row, column);
                    if (s) {
                        const r = s.value.indexOf(".") >= 0 ? s.start + s.value.indexOf(".") + 1 : s.end;
                        const a = s.start + s.value.length - r;
                        let c = parseFloat(s.value);
                        c *= 10 ** a;
                        if (r !== s.end && column < r) {
                            e *= 10 ** (s.end - column - 1);
                        } else {
                            e *= 10 ** (s.end - column);
                        }
                        c += e;
                        const l = (c /= 10 ** a).toFixed(a);
                        const h = new Range(row, s.start, row, s.end);
                        this.session.replace(h, l);
                        this.moveCursorTo(row, Math.max(s.start + 1, column + l.length - s.value.length));
                    }
                } else {
                    this.toggleWord();
                }
            };
            this.$toggleWordPairs = [
                [
                    "first",
                    "last"
                ],
                [
                    "true",
                    "false"
                ],
                [
                    "yes",
                    "no"
                ],
                [
                    "width",
                    "height"
                ],
                [
                    "top",
                    "bottom"
                ],
                [
                    "right",
                    "left"
                ],
                [
                    "on",
                    "off"
                ],
                [
                    "x",
                    "y"
                ],
                [
                    "get",
                    "set"
                ],
                [
                    "max",
                    "min"
                ],
                [
                    "horizontal",
                    "vertical"
                ],
                [
                    "show",
                    "hide"
                ],
                [
                    "add",
                    "remove"
                ],
                [
                    "up",
                    "down"
                ],
                [
                    "before",
                    "after"
                ],
                [
                    "even",
                    "odd"
                ],
                [
                    "in",
                    "out"
                ],
                [
                    "inside",
                    "outside"
                ],
                [
                    "next",
                    "previous"
                ],
                [
                    "increase",
                    "decrease"
                ],
                [
                    "attach",
                    "detach"
                ],
                [
                    "&&",
                    "||"
                ],
                [
                    "==",
                    "!="
                ]
            ];
            this.toggleWord = function() {
                const row = this.selection.getCursor().row;
                const column = this.selection.getCursor().column;
                this.selection.selectWord();
                let i = this.getSelectedText();
                const column_1 = this.selection.getWordRange().start.column;
                const o = i.replace(/([a-z]+|[A-Z]+)(?=[A-Z_]|$)/g, "$1 ").split(/\s/);
                let r = column - column_1 - 1;
                if (r < 0) {
                    r = 0;
                }
                let a = 0;
                let c = 0;
                const _this = this;
                if (i.match(/[A-Za-z0-9_]+/)) {
                    o.forEach((t, o)=>{
                        c = a + t.length;
                        if (r >= a && r <= c) {
                            i = t;
                            _this.selection.clearSelection();
                            _this.moveCursorTo(row, a + column_1);
                            _this.selection.selectTo(row, c + column_1);
                        }
                        a = c;
                    });
                }
                let h;
                for(let d = this.$toggleWordPairs, u = 0; u < d.length; u++){
                    var f = d[u];
                    for(let g = 0; g <= 1; g++){
                        var p = +!g;
                        const m = i.match(new RegExp(`^\\s?_?(${s.escapeRegExp(f[g])})\\s?\$`, "i"));
                        if (m && i.match(new RegExp(`([_]|^|\\s)(${s.escapeRegExp(m[1])})(\$|\\s)`, "g"))) {
                            h = i.replace(new RegExp(s.escapeRegExp(f[g]), "i"), (e)=>{
                                let t = f[p];
                                if (e.toUpperCase() == e) {
                                    t = t.toUpperCase();
                                } else if (e.charAt(0).toUpperCase() == e.charAt(0)) {
                                    t = t.substr(0, 0) + f[p].charAt(0).toUpperCase() + t.substr(1);
                                }
                                return t;
                            });
                            this.insert(h);
                            h = "";
                        }
                    }
                }
            };
            this.removeLines = function() {
                const e = this.$getSelectedRows();
                this.session.removeFullLines(e.first, e.last);
                this.clearSelection();
            };
            this.duplicateSelection = function() {
                const selection = this.selection;
                const session = this.session;
                const i = selection.getRange();
                const n = selection.isBackwards();
                if (i.isEmpty()) {
                    const o = i.start.row;
                    session.duplicateLines(o, o);
                } else {
                    const s = n ? i.start : i.end;
                    const r = session.insert(s, session.getTextRange(i), false);
                    i.start = s;
                    i.end = r;
                    selection.setSelectionRange(i, n);
                }
            };
            this.moveLinesDown = function() {
                this.$moveLines(1, false);
            };
            this.moveLinesUp = function() {
                this.$moveLines(-1, false);
            };
            this.moveText = function(e, t, i) {
                return this.session.moveText(e, t, i);
            };
            this.copyLinesUp = function() {
                this.$moveLines(-1, true);
            };
            this.copyLinesDown = function() {
                this.$moveLines(1, true);
            };
            this.$moveLines = function(e, t) {
                let i;
                let n;
                const selection = this.selection;
                if (!selection.inMultiSelectMode || this.inVirtualSelectionMode) {
                    const s = selection.toOrientedRange();
                    i = this.$getSelectedRows(s);
                    n = this.session.$moveLines(i.first, i.last, t ? 0 : e);
                    if (t && e == -1) {
                        n = 0;
                    }
                    s.moveBy(n, 0);
                    selection.fromOrientedRange(s);
                } else {
                    const r = selection.rangeList.ranges;
                    selection.rangeList.detach(this.session);
                    this.inVirtualSelectionMode = true;
                    let a = 0;
                    let c = 0;
                    for(let l = r.length, h = 0; h < l; h++){
                        let d = h;
                        r[h].moveBy(a, 0);
                        const u = (i = this.$getSelectedRows(r[h])).first;
                        let f = i.last;
                        while(++h < l){
                            if (c) {
                                r[h].moveBy(c, 0);
                            }
                            const g = this.$getSelectedRows(r[h]);
                            if (t && g.first != f) {
                                break;
                            }
                            if (!t && g.first > f + 1) {
                                break;
                            }
                            f = g.last;
                        }
                        h--;
                        a = this.session.$moveLines(u, f, t ? 0 : e);
                        if (t && e == -1) {
                            d = h + 1;
                        }
                        while(d <= h){
                            r[d].moveBy(a, 0);
                            d++;
                        }
                        if (!t) {
                            a = 0;
                        }
                        c += a;
                    }
                    selection.fromOrientedRange(selection.ranges[0]);
                    selection.rangeList.attach(this.session);
                    this.inVirtualSelectionMode = false;
                }
            };
            this.$getSelectedRows = function(e) {
                e = (e || this.getSelectionRange()).collapseRows();
                return {
                    first: this.session.getRowFoldStart(e.start.row),
                    last: this.session.getRowFoldEnd(e.end.row)
                };
            };
            this.onCompositionStart = function(e) {
                this.renderer.showComposition(e);
            };
            this.onCompositionUpdate = function(e) {
                this.renderer.setCompositionText(e);
            };
            this.onCompositionEnd = function() {
                this.renderer.hideComposition();
            };
            this.getFirstVisibleRow = function() {
                return this.renderer.getFirstVisibleRow();
            };
            this.getLastVisibleRow = function() {
                return this.renderer.getLastVisibleRow();
            };
            this.isRowVisible = function(e) {
                return e >= this.getFirstVisibleRow() && e <= this.getLastVisibleRow();
            };
            this.isRowFullyVisible = function(e) {
                return e >= this.renderer.getFirstFullyVisibleRow() && e <= this.renderer.getLastFullyVisibleRow();
            };
            this.$getVisibleRowCount = function() {
                return this.renderer.getScrollBottomRow() - this.renderer.getScrollTopRow() + 1;
            };
            this.$moveByPage = function(e, t) {
                const renderer = this.renderer;
                const layerConfig = this.renderer.layerConfig;
                const o = e * Math.floor(layerConfig.height / layerConfig.lineHeight);
                if (t === true) {
                    this.selection.$moveSelection(function() {
                        this.moveCursorBy(o, 0);
                    });
                } else if (t === false) {
                    this.selection.moveCursorBy(o, 0);
                    this.selection.clearSelection();
                }
                const i_scrollTop = renderer.scrollTop;
                renderer.scrollBy(0, o * layerConfig.lineHeight);
                if (t != null) {
                    renderer.scrollCursorIntoView(null, 0.5);
                }
                renderer.animateScrolling(i_scrollTop);
            };
            this.selectPageDown = function() {
                this.$moveByPage(1, true);
            };
            this.selectPageUp = function() {
                this.$moveByPage(-1, true);
            };
            this.gotoPageDown = function() {
                this.$moveByPage(1, false);
            };
            this.gotoPageUp = function() {
                this.$moveByPage(-1, false);
            };
            this.scrollPageDown = function() {
                this.$moveByPage(1);
            };
            this.scrollPageUp = function() {
                this.$moveByPage(-1);
            };
            this.scrollToRow = function(e) {
                this.renderer.scrollToRow(e);
            };
            this.scrollToLine = function(e, t, i, n) {
                this.renderer.scrollToLine(e, t, i, n);
            };
            this.centerSelection = function() {
                const e = this.getSelectionRange();
                const t = {
                    row: Math.floor(e.start.row + (e.end.row - e.start.row) / 2),
                    column: Math.floor(e.start.column + (e.end.column - e.start.column) / 2)
                };
                this.renderer.alignCursor(t, 0.5);
            };
            this.getCursorPosition = function() {
                return this.selection.getCursor();
            };
            this.getCursorPositionScreen = function() {
                return this.session.documentToScreenPosition(this.getCursorPosition());
            };
            this.getSelectionRange = function() {
                return this.selection.getRange();
            };
            this.selectAll = function() {
                this.selection.selectAll();
            };
            this.clearSelection = function() {
                this.selection.clearSelection();
            };
            this.moveCursorTo = function(e, t) {
                this.selection.moveCursorTo(e, t);
            };
            this.moveCursorToPosition = function(e) {
                this.selection.moveCursorToPosition(e);
            };
            this.jumpToMatching = function(e, t) {
                const i = this.getCursorPosition();
                const n = new TokenIterator(this.session, i.row, i.column);
                let o = n.getCurrentToken();
                let s = o || n.stepForward();
                if (s) {
                    let r;
                    let a;
                    let c = false;
                    const l = {};
                    let h = i.column - s.start;
                    const d = {
                        ")": "(",
                        "(": "(",
                        "]": "[",
                        "[": "[",
                        "{": "{",
                        "}": "{"
                    };
                    do {
                        if (s.value.match(/[{}()\[\]]/g)) {
                            for(; h < s.value.length && !c; h++){
                                if (d[s.value[h]]) {
                                    a = `${d[s.value[h]]}.${s.type.replace("rparen", "lparen")}`;
                                    if (isNaN(l[a])) {
                                        l[a] = 0;
                                    }
                                    switch(s.value[h]){
                                        case "(":
                                        case "[":
                                        case "{":
                                            l[a]++;
                                            break;
                                        case ")":
                                        case "]":
                                        case "}":
                                            l[a]--;
                                            if (l[a] === -1) {
                                                r = "bracket";
                                                c = true;
                                            }
                                    }
                                }
                            }
                        } else {
                            if (s.type.indexOf("tag-name") !== -1) {
                                if (isNaN(l[s.value])) {
                                    l[s.value] = 0;
                                }
                                if (o.value === "<") {
                                    l[s.value]++;
                                } else if (o.value === "</") {
                                    l[s.value]--;
                                }
                                if (l[s.value] === -1) {
                                    r = "tag";
                                    c = true;
                                }
                            }
                        }
                        if (!c) {
                            o = s;
                            s = n.stepForward();
                            h = 0;
                        }
                    }while (s && !c)
                    if (r) {
                        let u;
                        let g;
                        if (r === "bracket") {
                            if (!(u = this.session.getBracketRange(i))) {
                                g = (u = new Range(n.getCurrentTokenRow(), n.getCurrentTokenColumn() + h - 1, n.getCurrentTokenRow(), n.getCurrentTokenColumn() + h - 1)).start;
                                if (t || g.row === i.row && Math.abs(g.column - i.column) < 2) {
                                    u = this.session.getBracketRange(g);
                                }
                            }
                        } else if (r === "tag") {
                            if (!s || s.type.indexOf("tag-name") === -1) {
                                return;
                            }
                            const p = s.value;
                            if ((u = new Range(n.getCurrentTokenRow(), n.getCurrentTokenColumn() - 2, n.getCurrentTokenRow(), n.getCurrentTokenColumn() - 2)).compare(i.row, i.column) === 0) {
                                c = false;
                                do {
                                    s = o;
                                    if (o = n.stepBackward()) {
                                        if (o.type.indexOf("tag-close") !== -1) {
                                            u.setEnd(n.getCurrentTokenRow(), n.getCurrentTokenColumn() + 1);
                                        }
                                        if (s.value === p && s.type.indexOf("tag-name") !== -1) {
                                            if (o.value === "<") {
                                                l[p]++;
                                            } else if (o.value === "</") {
                                                l[p]--;
                                            }
                                            if (l[p] === 0) {
                                                c = true;
                                            }
                                        }
                                    }
                                }while (o && !c)
                            }
                            if (s && s.type.indexOf("tag-name") && (g = u.start).row == i.row && Math.abs(g.column - i.column) < 2) {
                                g = u.end;
                            }
                        }
                        if (g = u && u.cursor || g) {
                            if (e) {
                                if (u && t) {
                                    this.selection.setRange(u);
                                } else if (u && u.isEqual(this.getSelectionRange())) {
                                    this.clearSelection();
                                } else {
                                    this.selection.selectTo(g.row, g.column);
                                }
                            } else {
                                this.selection.moveTo(g.row, g.column);
                            }
                        }
                    }
                }
            };
            this.gotoLine = function(e, t, i) {
                this.selection.clearSelection();
                this.session.unfold({
                    row: e - 1,
                    column: t || 0
                });
                if (this.exitMultiSelectMode) {
                    this.exitMultiSelectMode();
                }
                this.moveCursorTo(e - 1, t || 0);
                if (!this.isRowFullyVisible(e - 1)) {
                    this.scrollToLine(e - 1, true, i);
                }
            };
            this.navigateTo = function(e, t) {
                this.selection.moveTo(e, t);
            };
            this.navigateUp = function(e) {
                if (this.selection.isMultiLine() && !this.selection.isBackwards()) {
                    const t = this.selection.anchor.getPosition();
                    return this.moveCursorToPosition(t);
                }
                this.selection.clearSelection();
                this.selection.moveCursorBy(-e || -1, 0);
            };
            this.navigateDown = function(e) {
                if (this.selection.isMultiLine() && this.selection.isBackwards()) {
                    const t = this.selection.anchor.getPosition();
                    return this.moveCursorToPosition(t);
                }
                this.selection.clearSelection();
                this.selection.moveCursorBy(e || 1, 0);
            };
            this.navigateLeft = function(e) {
                if (this.selection.isEmpty()) {
                    for(e = e || 1; e--;){
                        this.selection.moveCursorLeft();
                    }
                } else {
                    const t = this.getSelectionRange().start;
                    this.moveCursorToPosition(t);
                }
                this.clearSelection();
            };
            this.navigateRight = function(e) {
                if (this.selection.isEmpty()) {
                    for(e = e || 1; e--;){
                        this.selection.moveCursorRight();
                    }
                } else {
                    const t = this.getSelectionRange().end;
                    this.moveCursorToPosition(t);
                }
                this.clearSelection();
            };
            this.navigateLineStart = function() {
                this.selection.moveCursorLineStart();
                this.clearSelection();
            };
            this.navigateLineEnd = function() {
                this.selection.moveCursorLineEnd();
                this.clearSelection();
            };
            this.navigateFileEnd = function() {
                this.selection.moveCursorFileEnd();
                this.clearSelection();
            };
            this.navigateFileStart = function() {
                this.selection.moveCursorFileStart();
                this.clearSelection();
            };
            this.navigateWordRight = function() {
                this.selection.moveCursorWordRight();
                this.clearSelection();
            };
            this.navigateWordLeft = function() {
                this.selection.moveCursorWordLeft();
                this.clearSelection();
            };
            this.replace = function(e, t) {
                if (t) {
                    this.$search.set(t);
                }
                const i = this.$search.find(this.session);
                let n = 0;
                if (i) {
                    if (this.$tryReplace(i, e)) {
                        n = 1;
                    }
                    this.selection.setSelectionRange(i);
                    this.renderer.scrollSelectionIntoView(i.start, i.end);
                    return n;
                }
                return n;
            };
            this.replaceAll = function(e, t) {
                if (t) {
                    this.$search.set(t);
                }
                const i = this.$search.findAll(this.session);
                let n = 0;
                if (!i.length) {
                    return n;
                }
                const o = this.getSelectionRange();
                this.selection.moveTo(0, 0);
                for(let s = i.length - 1; s >= 0; --s){
                    if (this.$tryReplace(i[s], e)) {
                        n++;
                    }
                }
                this.selection.setSelectionRange(o);
                return n;
            };
            this.$tryReplace = function(e, t) {
                const i = this.session.getTextRange(e);
                if ((t = this.$search.replace(i, t)) !== null) {
                    e.end = this.session.replace(e, t);
                    return e;
                }
                return null;
            };
            this.getLastSearchOptions = function() {
                return this.$search.getOptions();
            };
            this.find = function(e, t, i) {
                if (!t) {
                    t = {};
                }
                if (typeof e === "string" || e instanceof RegExp) {
                    t.needle = e;
                } else if (typeof e === "object") {
                    n.mixin(t, e);
                }
                let o = this.selection.getRange();
                if (t.needle == null) {
                    if (!(e = this.session.getTextRange(o) || this.$search.$options.needle)) {
                        o = this.session.getWordRange(o.start.row, o.start.column);
                        e = this.session.getTextRange(o);
                    }
                    this.$search.set({
                        needle: e
                    });
                }
                this.$search.set(t);
                if (!t.start) {
                    this.$search.set({
                        start: o
                    });
                }
                const s = this.$search.find(this.session);
                if (t.preventScroll) {
                    return s;
                }
                if (s) {
                    this.revealRange(s, i);
                    return s;
                }
                if (t.backwards) {
                    o.start = o.end;
                } else {
                    o.end = o.start;
                }
                return void this.selection.setRange(o);
            };
            this.findNext = function(e, t) {
                this.find({
                    skipCurrent: true,
                    backwards: false
                }, e, t);
            };
            this.findPrevious = function(e, t) {
                this.find(e, {
                    skipCurrent: true,
                    backwards: true
                }, t);
            };
            this.revealRange = function(e, t) {
                this.session.unfold(e);
                this.selection.setSelectionRange(e);
                const scrollTop = this.renderer.scrollTop;
                this.renderer.scrollSelectionIntoView(e.start, e.end, 0.5);
                if (t !== false) {
                    this.renderer.animateScrolling(scrollTop);
                }
            };
            this.undo = function() {
                this.session.getUndoManager().undo(this.session);
                this.renderer.scrollCursorIntoView(null, 0.5);
            };
            this.redo = function() {
                this.session.getUndoManager().redo(this.session);
                this.renderer.scrollCursorIntoView(null, 0.5);
            };
            this.destroy = function() {
                if (this.$toDestroy) {
                    this.$toDestroy.forEach((e)=>{
                        e.destroy();
                    });
                    this.$toDestroy = null;
                }
                if (this.$mouseHandler) {
                    this.$mouseHandler.destroy();
                }
                this.renderer.destroy();
                this._signal("destroy", this);
                if (this.session) {
                    this.session.destroy();
                }
                if (this._$emitInputEvent) {
                    this._$emitInputEvent.cancel();
                }
                this.removeAllListeners();
            };
            this.setAutoScrollEditorIntoView = function(e) {
                if (e) {
                    let t;
                    const i = this;
                    let n = false;
                    if (!this.$scrollAnchor) {
                        this.$scrollAnchor = document.createElement("div");
                    }
                    const o = this.$scrollAnchor;
                    o.style.cssText = "position:absolute";
                    this.container.insertBefore(o, this.container.firstChild);
                    const s = this.on("changeSelection", function() {
                        n = true;
                    });
                    const r = this.renderer.on("beforeRender", function() {
                        if (n) {
                            t = i.renderer.container.getBoundingClientRect();
                        }
                    });
                    const a = this.renderer.on("afterRender", function() {
                        if (n && t && (i.isFocused() || i.searchBox && i.searchBox.isFocused())) {
                            const e = i.renderer;
                            const s = e.$cursorLayer.$pixelPos;
                            const r = e.layerConfig;
                            const a = s.top - r.offset;
                            if ((n = s.top >= 0 && a + t.top < 0 || !(s.top < r.height && s.top + t.top + r.lineHeight > window.innerHeight) && null) != null) {
                                o.style.top = `${a}px`;
                                o.style.left = `${s.left}px`;
                                o.style.height = `${r.lineHeight}px`;
                                o.scrollIntoView(n);
                            }
                            t = null;
                            n = null;
                        }
                    });
                    this.setAutoScrollEditorIntoView = function(e) {
                        if (!e) {
                            delete this.setAutoScrollEditorIntoView;
                            this.off("changeSelection", s);
                            this.renderer.off("afterRender", a);
                            this.renderer.off("beforeRender", r);
                        }
                    };
                }
            };
            this.$resetCursorStyle = function() {
                const e = this.$cursorStyle || "ace";
                const $cursorLayer = this.renderer.$cursorLayer;
                if ($cursorLayer) {
                    $cursorLayer.setSmoothBlinking(/smooth/.test(e));
                    $cursorLayer.isBlinking = !this.$readOnly && e != "wide";
                    o.setCssClass($cursorLayer.element, "ace_slim-cursors", /slim/.test(e));
                }
            };
            this.prompt = function(e, t, i) {
                const _this = this;
                b.loadModule("./ext/prompt", function(o) {
                    o.prompt(_this, e, t, i);
                });
            };
        }).call(x.prototype);
        b.defineOptions(x.prototype, "editor", {
            selectionStyle: {
                set: function(e) {
                    this.onSelectionChange();
                    this._signal("changeSelectionStyle", {
                        data: e
                    });
                },
                initialValue: "line"
            },
            highlightActiveLine: {
                set: function() {
                    this.$updateHighlightActiveLine();
                },
                initialValue: true
            },
            highlightSelectedWord: {
                set: function(e) {
                    this.$onSelectionChange();
                },
                initialValue: true
            },
            readOnly: {
                set: function(e) {
                    this.textInput.setReadOnly(e);
                    this.$resetCursorStyle();
                },
                initialValue: false
            },
            copyWithEmptySelection: {
                set: function(e) {
                    this.textInput.setCopyWithEmptySelection(e);
                },
                initialValue: false
            },
            cursorStyle: {
                set: function(e) {
                    this.$resetCursorStyle();
                },
                values: [
                    "ace",
                    "slim",
                    "smooth",
                    "wide"
                ],
                initialValue: "ace"
            },
            mergeUndoDeltas: {
                values: [
                    false,
                    true,
                    "always"
                ],
                initialValue: true
            },
            behavioursEnabled: {
                initialValue: true
            },
            wrapBehavioursEnabled: {
                initialValue: true
            },
            enableAutoIndent: {
                initialValue: true
            },
            autoScrollEditorIntoView: {
                set: function(e) {
                    this.setAutoScrollEditorIntoView(e);
                }
            },
            keyboardHandler: {
                set: function(e) {
                    this.setKeyboardHandler(e);
                },
                get: function() {
                    return this.$keybindingId;
                },
                handlesSet: true
            },
            value: {
                set: function(e) {
                    this.session.setValue(e);
                },
                get: function() {
                    return this.getValue();
                },
                handlesSet: true,
                hidden: true
            },
            session: {
                set: function(e) {
                    this.setSession(e);
                },
                get: function() {
                    return this.session;
                },
                handlesSet: true,
                hidden: true
            },
            showLineNumbers: {
                set: function(e) {
                    this.renderer.$gutterLayer.setShowLineNumbers(e);
                    this.renderer.$loop.schedule(this.renderer.CHANGE_GUTTER);
                    if (e && this.$relativeLineNumbers) {
                        y.attach(this);
                    } else {
                        y.detach(this);
                    }
                },
                initialValue: true
            },
            relativeLineNumbers: {
                set: function(e) {
                    if (this.$showLineNumbers && e) {
                        y.attach(this);
                    } else {
                        y.detach(this);
                    }
                }
            },
            placeholder: {
                set: function(e) {
                    if (!this.$updatePlaceholder) {
                        this.$updatePlaceholder = (function() {
                            const e = this.session && (this.renderer.$composition || this.getValue());
                            if (e && this.renderer.placeholderNode) {
                                this.renderer.off("afterRender", this.$updatePlaceholder);
                                o.removeCssClass(this.container, "ace_hasPlaceholder");
                                this.renderer.placeholderNode.remove();
                                this.renderer.placeholderNode = null;
                            } else if (e || this.renderer.placeholderNode) {
                                if (!e && this.renderer.placeholderNode) {
                                    this.renderer.placeholderNode.textContent = this.$placeholder || "";
                                }
                            } else {
                                this.renderer.on("afterRender", this.$updatePlaceholder);
                                o.addCssClass(this.container, "ace_hasPlaceholder");
                                const t = o.createElement("div");
                                t.className = "ace_placeholder";
                                t.textContent = this.$placeholder || "";
                                this.renderer.placeholderNode = t;
                                this.renderer.content.appendChild(this.renderer.placeholderNode);
                            }
                        }).bind(this);
                        this.on("input", this.$updatePlaceholder);
                    }
                    this.$updatePlaceholder();
                }
            },
            hScrollBarAlwaysVisible: "renderer",
            vScrollBarAlwaysVisible: "renderer",
            highlightGutterLine: "renderer",
            animatedScroll: "renderer",
            showInvisibles: "renderer",
            showPrintMargin: "renderer",
            printMarginColumn: "renderer",
            printMargin: "renderer",
            fadeFoldWidgets: "renderer",
            showFoldWidgets: "renderer",
            displayIndentGuides: "renderer",
            showGutter: "renderer",
            fontSize: "renderer",
            fontFamily: "renderer",
            maxLines: "renderer",
            minLines: "renderer",
            scrollPastEnd: "renderer",
            fixedWidthGutter: "renderer",
            theme: "renderer",
            hasCssTransforms: "renderer",
            maxPixelHeight: "renderer",
            useTextareaForIME: "renderer",
            scrollSpeed: "$mouseHandler",
            dragDelay: "$mouseHandler",
            dragEnabled: "$mouseHandler",
            focusTimeout: "$mouseHandler",
            tooltipFollowsMouse: "$mouseHandler",
            firstLineNumber: "session",
            overwrite: "session",
            newLineMode: "session",
            useWorker: "session",
            useSoftTabs: "session",
            navigateWithinSoftTabs: "session",
            tabSize: "session",
            wrap: "session",
            indentedSoftWrap: "session",
            foldStyle: "session",
            mode: "session"
        });
        var y = {
            getText: function(e, t) {
                return `${Math.abs(e.selection.lead.row - t) || t + 1 + (t < 9 ? "·" : "")}`;
            },
            getWidth: function(e, t, i) {
                return Math.max(t.toString().length, (i.lastRow + 1).toString().length, 2) * i.characterWidth;
            },
            update: function(e, t) {
                t.renderer.$loop.schedule(t.renderer.CHANGE_GUTTER);
            },
            attach: function(e) {
                e.renderer.$gutterLayer.$renderer = this;
                e.on("changeSelection", this.update);
                this.update(null, e);
            },
            detach: function(e) {
                if (e.renderer.$gutterLayer.$renderer == this) {
                    e.renderer.$gutterLayer.$renderer = null;
                }
                e.off("changeSelection", this.update);
                this.update(null, e);
            }
        };
        t.Editor = x;
    });
    ace.define("ace/undomanager", [
        "require",
        "exports",
        "module",
        "ace/range"
    ], function(e, t, i) {
        "use strict";
        const n = function() {
            this.$maxRev = 0;
            this.$fromUndo = false;
            this.reset();
        };
        (function() {
            this.addSession = function(e) {
                this.$session = e;
            };
            this.add = function(e, t, i) {
                if (!this.$fromUndo) {
                    if (e != this.$lastDelta) {
                        if (!this.$keepRedoStack) {
                            this.$redoStack.length = 0;
                        }
                        if (!(t !== false && this.lastDeltas)) {
                            this.lastDeltas = [];
                            this.$undoStack.push(this.lastDeltas);
                            e.id = this.$rev = ++this.$maxRev;
                        }
                        if (!(e.action != "remove" && e.action != "insert")) {
                            this.$lastDelta = e;
                        }
                        this.lastDeltas.push(e);
                    }
                }
            };
            this.addSelection = function(e, t) {
                this.selections.push({
                    value: e,
                    rev: t || this.$rev
                });
            };
            this.startNewGroup = function() {
                this.lastDeltas = null;
                return this.$rev;
            };
            this.markIgnored = function(e, t) {
                if (t == null) {
                    t = this.$rev + 1;
                }
                const $undoStack = this.$undoStack;
                for(let n = $undoStack.length; n--;){
                    const o = $undoStack[n][0];
                    if (o.id <= e) {
                        break;
                    }
                    if (o.id < t) {
                        o.ignore = true;
                    }
                }
                this.lastDeltas = null;
            };
            this.getSelection = function(e, t) {
                const selections = this.selections;
                for(let n = selections.length; n--;){
                    let o = selections[n];
                    if (o.rev < e) {
                        if (t) {
                            o = selections[n + 1];
                        }
                        return o;
                    }
                }
            };
            this.getRevision = function() {
                return this.$rev;
            };
            this.getDeltas = function(e, t) {
                if (t == null) {
                    t = this.$rev + 1;
                }
                const $undoStack = this.$undoStack;
                let n = null;
                let o = 0;
                for(let s = $undoStack.length; s--;){
                    const r = $undoStack[s][0];
                    if (r.id < t && !n) {
                        n = s + 1;
                    }
                    if (r.id <= e) {
                        o = s + 1;
                        break;
                    }
                }
                return $undoStack.slice(o, n);
            };
            this.getChangedRanges = function(e, t) {
                if (t == null) {
                    t = this.$rev + 1;
                }
            };
            this.getChangedLines = function(e, t) {
                if (t == null) {
                    t = this.$rev + 1;
                }
            };
            this.undo = function(e, t) {
                this.lastDeltas = null;
                const $undoStack = this.$undoStack;
                if ((($undoStack_1, t)=>{
                    for(let i = t; i--;){
                        const n = $undoStack_1[i];
                        if (n && !n[0].ignore) {
                            while(i < t - 1){
                                const o = h($undoStack_1[i], $undoStack_1[i + 1]);
                                $undoStack_1[i] = o[0];
                                $undoStack_1[i + 1] = o[1];
                                i++;
                            }
                            return true;
                        }
                    }
                })($undoStack, $undoStack.length)) {
                    if (!e) {
                        e = this.$session;
                    }
                    if (this.$redoStackBaseRev !== this.$rev && this.$redoStack.length) {
                        this.$redoStack = [];
                    }
                    this.$fromUndo = true;
                    const n = $undoStack.pop();
                    let o = null;
                    if (n) {
                        o = e.undoChanges(n, t);
                        this.$redoStack.push(n);
                        this.$syncRev();
                    }
                    this.$fromUndo = false;
                    return o;
                }
            };
            this.redo = function(e, t) {
                this.lastDeltas = null;
                if (!e) {
                    e = this.$session;
                }
                this.$fromUndo = true;
                if (this.$redoStackBaseRev != this.$rev) {
                    const i = this.getDeltas(this.$redoStackBaseRev, this.$rev + 1);
                    ((e, t)=>{
                        for(let i = 0; i < t.length; i++){
                            for(let n = t[i], o = 0; o < n.length; o++){
                                p(e, n[o]);
                            }
                        }
                    })(this.$redoStack, i);
                    this.$redoStackBaseRev = this.$rev;
                    this.$redoStack.forEach(function(e) {
                        e[0].id = ++this.$maxRev;
                    }, this);
                }
                const n = this.$redoStack.pop();
                let o = null;
                if (n) {
                    o = e.redoChanges(n, t);
                    this.$undoStack.push(n);
                    this.$syncRev();
                }
                this.$fromUndo = false;
                return o;
            };
            this.$syncRev = function() {
                const $undoStack = this.$undoStack;
                const t = $undoStack[$undoStack.length - 1];
                const i = t && t[0].id || 0;
                this.$redoStackBaseRev = i;
                this.$rev = i;
            };
            this.reset = function() {
                this.lastDeltas = null;
                this.$lastDelta = null;
                this.$undoStack = [];
                this.$redoStack = [];
                this.$rev = 0;
                this.mark = 0;
                this.$redoStackBaseRev = this.$rev;
                this.selections = [];
            };
            this.canUndo = function() {
                return this.$undoStack.length > 0;
            };
            this.canRedo = function() {
                return this.$redoStack.length > 0;
            };
            this.bookmark = function(e) {
                if (e == null) {
                    e = this.$rev;
                }
                this.mark = e;
            };
            this.isAtBookmark = function() {
                return this.$rev === this.mark;
            };
            this.toJSON = function() {};
            this.fromJSON = function() {};
            this.hasUndo = this.canUndo;
            this.hasRedo = this.canRedo;
            this.isClean = this.isAtBookmark;
            this.markClean = this.bookmark;
            this.$prettyPrint = function(e) {
                if (e) {
                    return a(e);
                }
                return `${a(this.$undoStack)}
---
${a(this.$redoStack)}`;
            };
        }).call(n.prototype);
        var Range = e("./range").Range;
        var o_comparePoints = Range.comparePoints;
        function r(e) {
            return {
                row: e.row,
                column: e.column
            };
        }
        function a(e) {
            e = e || this;
            if (Array.isArray(e)) {
                return e.map(a).join("\n");
            }
            let t = "";
            if (e.action) {
                t = e.action == "insert" ? "+" : "-";
                t += `[${e.lines}]`;
            } else if (e.value) {
                t = Array.isArray(e.value) ? e.value.map(c).join("\n") : c(e.value);
            }
            if (e.start) {
                t += c(e);
            }
            if (e.id || e.rev) {
                t += `\t(${e.id || e.rev})`;
            }
            return t;
        }
        function c(e) {
            return `${e.start.row}:${e.start.column}=>${e.end.row}:${e.end.column}`;
        }
        function l(e, t) {
            const i = e.action == "insert";
            const n = t.action == "insert";
            if (i && n) {
                if (o_comparePoints(t.start, e.end) >= 0) {
                    u(t, e, -1);
                } else {
                    if (!(o_comparePoints(t.start, e.start) <= 0)) {
                        return null;
                    }
                    u(e, t, 1);
                }
            } else if (i && !n) {
                if (o_comparePoints(t.start, e.end) >= 0) {
                    u(t, e, -1);
                } else {
                    if (!(o_comparePoints(t.end, e.start) <= 0)) {
                        return null;
                    }
                    u(e, t, -1);
                }
            } else if (!i && n) {
                if (o_comparePoints(t.start, e.start) >= 0) {
                    u(t, e, 1);
                } else {
                    if (!(o_comparePoints(t.start, e.start) <= 0)) {
                        return null;
                    }
                    u(e, t, 1);
                }
            } else if (!i && !n) {
                if (o_comparePoints(t.start, e.start) >= 0) {
                    u(t, e, 1);
                } else {
                    if (!(o_comparePoints(t.end, e.start) <= 0)) {
                        return null;
                    }
                    u(e, t, -1);
                }
            }
            return [
                t,
                e
            ];
        }
        function h(e, t) {
            for(let i = e.length; i--;){
                for(let n = 0; n < t.length; n++){
                    if (!l(e[i], t[n])) {
                        while(i < e.length){
                            while(n--){
                                l(t[n], e[i]);
                            }
                            n = t.length;
                            i++;
                        }
                        return [
                            e,
                            t
                        ];
                    }
                }
            }
            e.selectionBefore = t.selectionBefore = e.selectionAfter = t.selectionAfter = null;
            return [
                t,
                e
            ];
        }
        function d(e, t) {
            const i = e.action == "insert";
            const n = t.action == "insert";
            if (i && n) {
                if (o_comparePoints(e.start, t.start) < 0) {
                    u(t, e, 1);
                } else {
                    u(e, t, 1);
                }
            } else if (i && !n) {
                if (o_comparePoints(e.start, t.end) >= 0) {
                    u(e, t, -1);
                } else {
                    if (!(o_comparePoints(e.start, t.start) <= 0)) {
                        u(e, Range.fromPoints(t.start, e.start), -1);
                    }
                    u(t, e, 1);
                }
            } else if (!i && n) {
                if (o_comparePoints(t.start, e.end) >= 0) {
                    u(t, e, -1);
                } else {
                    if (!(o_comparePoints(t.start, e.start) <= 0)) {
                        u(t, Range.fromPoints(e.start, t.start), -1);
                    }
                    u(e, t, 1);
                }
            } else if (!i && !n) {
                if (o_comparePoints(t.start, e.end) >= 0) {
                    u(t, e, -1);
                } else {
                    let r;
                    let a;
                    if (!(o_comparePoints(t.end, e.start) <= 0)) {
                        if (o_comparePoints(e.start, t.start) < 0) {
                            r = e;
                            e = g(e, t.start);
                        }
                        if (o_comparePoints(e.end, t.end) > 0) {
                            a = g(e, t.end);
                        }
                        f(t.end, e.start, e.end, -1);
                        if (a && !r) {
                            e.lines = a.lines;
                            e.start = a.start;
                            e.end = a.end;
                            a = e;
                        }
                        return [
                            t,
                            r,
                            a
                        ].filter(Boolean);
                    }
                    u(e, t, -1);
                }
            }
            return [
                t,
                e
            ];
        }
        function u(e, t, i) {
            f(e.start, t.start, t.end, i);
            f(e.end, t.start, t.end, i);
        }
        function f(e, start, end, n) {
            if (e.row == (n == 1 ? start : end).row) {
                e.column += n * (end.column - start.column);
            }
            e.row += n * (end.row - start.row);
        }
        function g(e, t) {
            const { lines, end } = e;
            e.end = r(t);
            const o = e.end.row - e.start.row;
            const s = lines.splice(o, lines.length);
            const a = o ? t.column : t.column - e.start.column;
            lines.push(s[0].substring(0, a));
            s[0] = s[0].substr(a);
            return {
                start: r(t),
                end,
                lines: s,
                action: e.action
            };
        }
        function p(e, t) {
            t = ((e)=>({
                    start: r(e.start),
                    end: r(e.end),
                    action: e.action,
                    lines: e.lines.slice()
                }))(t);
            for(let i = e.length; i--;){
                for(var n = e[i], o = 0; o < n.length; o++){
                    const s = d(n[o], t);
                    t = s[0];
                    if (s.length != 2) {
                        if (s[2]) {
                            n.splice(o + 1, 1, s[1], s[2]);
                            o++;
                        } else if (!s[1]) {
                            n.splice(o, 1);
                            o--;
                        }
                    }
                }
                if (!n.length) {
                    e.splice(i, 1);
                }
            }
            return e;
        }
        Range.comparePoints;
        t.UndoManager = n;
    });
    ace.define("ace/layer/lines", [
        "require",
        "exports",
        "module",
        "ace/lib/dom"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/dom");
        const o = function(e, t) {
            this.element = e;
            this.canvasHeight = t || 500000;
            this.element.style.height = `${2 * this.canvasHeight}px`;
            this.cells = [];
            this.cellCache = [];
            this.$offsetCoefficient = 0;
        };
        (function() {
            this.moveContainer = function(e) {
                n.translate(this.element, 0, -e.firstRowScreen * e.lineHeight % this.canvasHeight - e.offset * this.$offsetCoefficient);
            };
            this.pageChanged = function(e, t) {
                return Math.floor(e.firstRowScreen * e.lineHeight / this.canvasHeight) !== Math.floor(t.firstRowScreen * t.lineHeight / this.canvasHeight);
            };
            this.computeLineTop = function(e, t, i) {
                const n = t.firstRowScreen * t.lineHeight;
                const o = Math.floor(n / this.canvasHeight);
                return i.documentToScreenRow(e, 0) * t.lineHeight - o * this.canvasHeight;
            };
            this.computeLineHeight = function(e, t, i) {
                return t.lineHeight * i.getRowLineCount(e);
            };
            this.getLength = function() {
                return this.cells.length;
            };
            this.get = function(e) {
                return this.cells[e];
            };
            this.shift = function() {
                this.$cacheCell(this.cells.shift());
            };
            this.pop = function() {
                this.$cacheCell(this.cells.pop());
            };
            this.push = function(e) {
                if (Array.isArray(e)) {
                    this.cells.push.apply(this.cells, e);
                    const t = n.createFragment(this.element);
                    for(let i = 0; i < e.length; i++){
                        t.appendChild(e[i].element);
                    }
                    this.element.appendChild(t);
                } else {
                    this.cells.push(e);
                    this.element.appendChild(e.element);
                }
            };
            this.unshift = function(e) {
                if (Array.isArray(e)) {
                    this.cells.unshift.apply(this.cells, e);
                    const t = n.createFragment(this.element);
                    for(let i = 0; i < e.length; i++){
                        t.appendChild(e[i].element);
                    }
                    if (this.element.firstChild) {
                        this.element.insertBefore(t, this.element.firstChild);
                    } else {
                        this.element.appendChild(t);
                    }
                } else {
                    this.cells.unshift(e);
                    this.element.insertAdjacentElement("afterbegin", e.element);
                }
            };
            this.last = function() {
                if (this.cells.length) {
                    return this.cells[this.cells.length - 1];
                }
                return null;
            };
            this.$cacheCell = function(e) {
                if (e) {
                    e.element.remove();
                    this.cellCache.push(e);
                }
            };
            this.createCell = function(e, t, i, o) {
                let s = this.cellCache.pop();
                if (!s) {
                    const element = n.createElement("div");
                    if (o) {
                        o(element);
                    }
                    this.element.appendChild(element);
                    s = {
                        element,
                        text: "",
                        row: e
                    };
                }
                s.row = e;
                return s;
            };
        }).call(o.prototype);
        t.Lines = o;
    });
    ace.define("ace/layer/gutter", [
        "require",
        "exports",
        "module",
        "ace/lib/dom",
        "ace/lib/oop",
        "ace/lib/lang",
        "ace/lib/event_emitter",
        "ace/layer/lines"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/dom");
        const o = e("../lib/oop");
        const s = e("../lib/lang");
        const EventEmitter = e("../lib/event_emitter").EventEmitter;
        const Lines = e("./lines").Lines;
        const c = function(e) {
            this.element = n.createElement("div");
            this.element.className = "ace_layer ace_gutter-layer";
            e.appendChild(this.element);
            this.setShowFoldWidgets(this.$showFoldWidgets);
            this.gutterWidth = 0;
            this.$annotations = [];
            this.$updateAnnotations = this.$updateAnnotations.bind(this);
            this.$lines = new Lines(this.element);
            this.$lines.$offsetCoefficient = 1;
        };
        function l(e) {
            const t = document.createTextNode("");
            e.appendChild(t);
            const spanElement = n.createElement("span");
            e.appendChild(spanElement);
            return e;
        }
        (function() {
            o.implement(this, EventEmitter);
            this.setSession = function(e) {
                if (this.session) {
                    this.session.off("change", this.$updateAnnotations);
                }
                this.session = e;
                if (e) {
                    e.on("change", this.$updateAnnotations);
                }
            };
            this.addGutterDecoration = function(e, t) {
                if (window.console && console.warn) {
                    console.warn("deprecated use session.addGutterDecoration");
                }
                this.session.addGutterDecoration(e, t);
            };
            this.removeGutterDecoration = function(e, t) {
                if (window.console && console.warn) {
                    console.warn("deprecated use session.removeGutterDecoration");
                }
                this.session.removeGutterDecoration(e, t);
            };
            this.setAnnotations = function(e) {
                this.$annotations = [];
                for (const i of e){
                    const n = i.row;
                    let o = this.$annotations[n];
                    if (!o) {
                        o = this.$annotations[n] = {
                            text: []
                        };
                    }
                    let r = i.text;
                    r = r ? s.escapeHTML(r) : i.html || "";
                    if (o.text.indexOf(r) === -1) {
                        o.text.push(r);
                    }
                    const a = i.type;
                    if (a == "error") {
                        o.className = " ace_error";
                    } else if (a == "warning" && o.className != " ace_error") {
                        o.className = " ace_warning";
                    } else if (!(a != "info" || o.className)) {
                        o.className = " ace_info";
                    }
                }
            };
            this.$updateAnnotations = function(e) {
                if (this.$annotations.length) {
                    const t = e.start.row;
                    const i = e.end.row - t;
                    if (i === 0) ;
                    else if (e.action == "remove") {
                        this.$annotations.splice(t, i + 1, null);
                    } else {
                        const n = new Array(i + 1);
                        n.unshift(t, 1);
                        this.$annotations.splice.apply(this.$annotations, n);
                    }
                }
            };
            this.update = function(e) {
                this.config = e;
                const session = this.session;
                const e_firstRow = e.firstRow;
                const n = Math.min(e.lastRow + e.gutterOffset, session.getLength() - 1);
                this.oldLastRow = n;
                this.config = e;
                this.$lines.moveContainer(e);
                this.$updateCursorRow();
                let o = session.getNextFoldLine(e_firstRow);
                let s = o ? o.start.row : Infinity;
                let r = null;
                let a = -1;
                let c = e_firstRow;
                while(true){
                    if (c > s) {
                        c = o.end.row + 1;
                        s = (o = session.getNextFoldLine(c, o)) ? o.start.row : Infinity;
                    }
                    if (c > n) {
                        while(this.$lines.getLength() > a + 1){
                            this.$lines.pop();
                        }
                        break;
                    }
                    if (r = this.$lines.get(++a)) {
                        r.row = c;
                    } else {
                        r = this.$lines.createCell(c, e, this.session, l);
                        this.$lines.push(r);
                    }
                    this.$renderCell(r, e, o, c);
                    c++;
                }
                this._signal("afterRender");
                this.$updateGutterWidth(e);
            };
            this.$updateGutterWidth = function(e) {
                const session = this.session;
                const i = session.gutterRenderer || this.$renderer;
                const t_$firstLineNumber = session.$firstLineNumber;
                let o = this.$lines.last() ? this.$lines.last().text : "";
                if (this.$fixedWidth || session.$useWrapMode) {
                    o = session.getLength() + t_$firstLineNumber - 1;
                }
                let s = i ? i.getWidth(session, o, e) : o.toString().length * e.characterWidth;
                const r = this.$padding || this.$computePadding();
                if (!((s += r.left + r.right) === this.gutterWidth || isNaN(s))) {
                    this.gutterWidth = s;
                    this.element.parentNode.style.width = this.element.style.width = `${Math.ceil(this.gutterWidth)}px`;
                    this._signal("changeGutterWidth", s);
                }
            };
            this.$updateCursorRow = function() {
                if (this.$highlightGutterLine) {
                    const e = this.session.selection.getCursor();
                    if (this.$cursorRow !== e.row) {
                        this.$cursorRow = e.row;
                    }
                }
            };
            this.updateLineHighlight = function() {
                if (this.$highlightGutterLine) {
                    const e = this.session.selection.cursor.row;
                    this.$cursorRow = e;
                    if (!this.$cursorCell || this.$cursorCell.row != e) {
                        if (this.$cursorCell) {
                            this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", "");
                        }
                        const t = this.$lines.cells;
                        this.$cursorCell = null;
                        for(let i = 0; i < t.length; i++){
                            let n = t[i];
                            if (n.row >= this.$cursorRow) {
                                if (n.row > this.$cursorRow) {
                                    const o = this.session.getFoldLine(this.$cursorRow);
                                    if (!(i > 0 && o && o.start.row == t[i - 1].row)) {
                                        break;
                                    }
                                    n = t[i - 1];
                                }
                                n.element.className = `ace_gutter-active-line ${n.element.className}`;
                                this.$cursorCell = n;
                                break;
                            }
                        }
                    }
                }
            };
            this.scrollLines = function(e) {
                const config = this.config;
                this.config = e;
                this.$updateCursorRow();
                if (this.$lines.pageChanged(config, e)) {
                    return this.update(e);
                }
                this.$lines.moveContainer(e);
                const i = Math.min(e.lastRow + e.gutterOffset, this.session.getLength() - 1);
                const oldLastRow = this.oldLastRow;
                this.oldLastRow = i;
                if (!config || oldLastRow < e.firstRow) {
                    return this.update(e);
                }
                if (i < config.firstRow) {
                    return this.update(e);
                }
                if (config.firstRow < e.firstRow) {
                    for(var o = this.session.getFoldedRowCount(config.firstRow, e.firstRow - 1); o > 0; o--){
                        this.$lines.shift();
                    }
                }
                if (oldLastRow > i) {
                    for(o = this.session.getFoldedRowCount(i + 1, oldLastRow); o > 0; o--){
                        this.$lines.pop();
                    }
                }
                if (e.firstRow < config.firstRow) {
                    this.$lines.unshift(this.$renderLines(e, e.firstRow, config.firstRow - 1));
                }
                if (i > oldLastRow) {
                    this.$lines.push(this.$renderLines(e, oldLastRow + 1, i));
                }
                this.updateLineHighlight();
                this._signal("afterRender");
                this.$updateGutterWidth(e);
            };
            this.$renderLines = function(e, t, i) {
                const n = [];
                for(let o = t, s = this.session.getNextFoldLine(o), r = s ? s.start.row : Infinity; o > r && (o = s.end.row + 1, r = (s = this.session.getNextFoldLine(o, s)) ? s.start.row : Infinity), !(o > i);){
                    const a = this.$lines.createCell(o, e, this.session, l);
                    this.$renderCell(a, e, s, o);
                    n.push(a);
                    o++;
                }
                return n;
            };
            this.$renderCell = function(e, t, i, o) {
                const e_element = e.element;
                const session = this.session;
                const a = e_element.childNodes[0];
                const c = e_element.childNodes[1];
                const { $firstLineNumber, $breakpoints, $decorations } = session;
                const u = session.gutterRenderer || this.$renderer;
                const f = this.$showFoldWidgets && session.foldWidgets;
                const g = i ? i.start.row : Number.MAX_VALUE;
                let p = "ace_gutter-cell ";
                if (this.$highlightGutterLine && (o == this.$cursorRow || i && o < this.$cursorRow && o >= g && this.$cursorRow <= i.end.row)) {
                    p += "ace_gutter-active-line ";
                    if (this.$cursorCell != e) {
                        if (this.$cursorCell) {
                            this.$cursorCell.element.className = this.$cursorCell.element.className.replace("ace_gutter-active-line ", "");
                        }
                        this.$cursorCell = e;
                    }
                }
                if ($breakpoints[o]) {
                    p += $breakpoints[o];
                }
                if ($decorations[o]) {
                    p += $decorations[o];
                }
                if (this.$annotations[o]) {
                    p += this.$annotations[o].className;
                }
                if (e_element.className != p) {
                    e_element.className = p;
                }
                if (f) {
                    var m = f[o];
                    if (m == null) {
                        m = f[o] = session.getFoldWidget(o);
                    }
                }
                if (m) {
                    p = `ace_fold-widget ace_${m}`;
                    if (m == "start" && o == g && o < i.end.row) {
                        p += " ace_closed";
                    } else {
                        p += " ace_open";
                    }
                    if (c.className != p) {
                        c.className = p;
                    }
                    const b = `${t.lineHeight}px`;
                    n.setStyle(c.style, "height", b);
                    n.setStyle(c.style, "display", "inline-block");
                } else {
                    if (c) {
                        n.setStyle(c.style, "display", "none");
                    }
                }
                const v = (u ? u.getText(session, o) : o + $firstLineNumber).toString();
                if (v !== a.data) {
                    a.data = v;
                }
                n.setStyle(e.element.style, "height", `${this.$lines.computeLineHeight(o, t, session)}px`);
                n.setStyle(e.element.style, "top", `${this.$lines.computeLineTop(o, t, session)}px`);
                e.text = v;
                return e;
            };
            this.$fixedWidth = false;
            this.$highlightGutterLine = true;
            this.$renderer = "";
            this.setHighlightGutterLine = function(e) {
                this.$highlightGutterLine = e;
            };
            this.$showLineNumbers = true;
            this.$renderer = "";
            this.setShowLineNumbers = function(e) {
                this.$renderer = !e && {
                    getWidth: function() {
                        return 0;
                    },
                    getText: function() {
                        return "";
                    }
                };
            };
            this.getShowLineNumbers = function() {
                return this.$showLineNumbers;
            };
            this.$showFoldWidgets = true;
            this.setShowFoldWidgets = function(e) {
                if (e) {
                    n.addCssClass(this.element, "ace_folding-enabled");
                } else {
                    n.removeCssClass(this.element, "ace_folding-enabled");
                }
                this.$showFoldWidgets = e;
                this.$padding = null;
            };
            this.getShowFoldWidgets = function() {
                return this.$showFoldWidgets;
            };
            this.$computePadding = function() {
                if (!this.element.firstChild) {
                    return {
                        left: 0,
                        right: 0
                    };
                }
                const e = n.computedStyle(this.element.firstChild);
                this.$padding = {};
                this.$padding.left = (parseInt(e.borderLeftWidth) || 0) + (parseInt(e.paddingLeft) || 0) + 1;
                this.$padding.right = (parseInt(e.borderRightWidth) || 0) + (parseInt(e.paddingRight) || 0);
                return this.$padding;
            };
            this.getRegion = function(e) {
                const t = this.$padding || this.$computePadding();
                const i = this.element.getBoundingClientRect();
                if (e.x < t.left + i.left) {
                    return "markers";
                }
                if (this.$showFoldWidgets && e.x > i.right - t.right) {
                    return "foldWidgets";
                }
            };
        }).call(c.prototype);
        t.Gutter = c;
    });
    ace.define("ace/layer/marker", [
        "require",
        "exports",
        "module",
        "ace/range",
        "ace/lib/dom"
    ], function(e, t, i) {
        "use strict";
        const Range = e("../range").Range;
        const o = e("../lib/dom");
        const s = function(e) {
            this.element = o.createElement("div");
            this.element.className = "ace_layer ace_marker-layer";
            e.appendChild(this.element);
        };
        (function() {
            this.$padding = 0;
            this.setPadding = function(e) {
                this.$padding = e;
            };
            this.setSession = function(e) {
                this.session = e;
            };
            this.setMarkers = function(e) {
                this.markers = e;
            };
            this.elt = function(e, t) {
                let i = this.i != -1 && this.element.childNodes[this.i];
                if (i) {
                    this.i++;
                } else {
                    i = document.createElement("div");
                    this.element.appendChild(i);
                    this.i = -1;
                }
                i.style.cssText = t;
                i.className = e;
            };
            this.update = function(e) {
                if (e) {
                    let t;
                    this.config = e;
                    this.i = 0;
                    for(const i in this.markers){
                        const n = this.markers[i];
                        if (n.range) {
                            let o = n.range.clipRows(e.firstRow, e.lastRow);
                            if (!o.isEmpty()) {
                                o = o.toScreenRange(this.session);
                                if (n.renderer) {
                                    const s = this.$getTop(o.start.row, e);
                                    const r = this.$padding + o.start.column * e.characterWidth;
                                    n.renderer(t, o, r, s, e);
                                } else {
                                    if (n.type == "fullLine") {
                                        this.drawFullLineMarker(t, o, n.clazz, e);
                                    } else if (n.type == "screenLine") {
                                        this.drawScreenLineMarker(t, o, n.clazz, e);
                                    } else if (o.isMultiLine()) {
                                        if (n.type == "text") {
                                            this.drawTextMarker(t, o, n.clazz, e);
                                        } else {
                                            this.drawMultiLineMarker(t, o, n.clazz, e);
                                        }
                                    } else {
                                        this.drawSingleLineMarker(t, o, `${n.clazz} ace_start ace_br15`, e);
                                    }
                                }
                            }
                        } else {
                            n.update(t, this, this.session, e);
                        }
                    }
                    if (this.i != -1) {
                        while(this.i < this.element.childElementCount){
                            this.element.removeChild(this.element.lastChild);
                        }
                    }
                }
            };
            this.$getTop = function(e, t) {
                return (e - t.firstRowScreen) * t.lineHeight;
            };
            this.drawTextMarker = function(e, t, i, o, s) {
                const session = this.session;
                const row = t.start.row;
                for(let c = t.end.row, l = row, h = 0, d = 0, u = session.getScreenLastRowColumn(l), f = new Range(l, t.start.column, l, d); l <= c; l++){
                    f.start.row = f.end.row = l;
                    f.start.column = l == row ? t.start.column : session.getRowWrapIndent(l);
                    f.end.column = u;
                    h = d;
                    d = u;
                    u = l + 1 < c ? session.getScreenLastRowColumn(l + 1) : l == c ? 0 : t.end.column;
                    this.drawSingleLineMarker(e, f, `${i + (l == row ? " ace_start" : "")} ace_br${(l == row || l == row + 1 && t.start.column ? 1 : 0) | (h < d ? 2 : 0) | (d > u ? 4 : 0) | (l == c ? 8 : 0)}`, o, l == c ? 0 : 1, s);
                }
            };
            this.drawMultiLineMarker = function(e, t, i, n, o) {
                const $padding = this.$padding;
                let n_lineHeight = n.lineHeight;
                let a = this.$getTop(t.start.row, n);
                const c = $padding + t.start.column * n.characterWidth;
                o = o || "";
                if (this.session.$bidiHandler.isBidiRow(t.start.row)) {
                    (l = t.clone()).end.row = l.start.row;
                    l.end.column = this.session.getLine(l.start.row).length;
                    this.drawBidiSingleLineMarker(e, l, `${i} ace_br1 ace_start`, n, null, o);
                } else {
                    this.elt(`${i} ace_br1 ace_start`, `height:${n_lineHeight}px;right:0;top:${a}px;left:${c}px;${o || ""}`);
                }
                if (this.session.$bidiHandler.isBidiRow(t.end.row)) {
                    var l;
                    (l = t.clone()).start.row = l.end.row;
                    l.start.column = 0;
                    this.drawBidiSingleLineMarker(e, l, `${i} ace_br12`, n, null, o);
                } else {
                    a = this.$getTop(t.end.row, n);
                    const h = t.end.column * n.characterWidth;
                    this.elt(`${i} ace_br12`, `height:${n_lineHeight}px;width:${h}px;top:${a}px;left:${$padding}px;${o || ""}`);
                }
                if (!((n_lineHeight = (t.end.row - t.start.row - 1) * n.lineHeight) <= 0)) {
                    a = this.$getTop(t.start.row + 1, n);
                    const d = (t.start.column ? 1 : 0) | (t.end.column ? 0 : 8);
                    this.elt(i + (d ? ` ace_br${d}` : ""), `height:${n_lineHeight}px;right:0;top:${a}px;left:${$padding}px;${o || ""}`);
                }
            };
            this.drawSingleLineMarker = function(e, t, i, n, o, s) {
                if (this.session.$bidiHandler.isBidiRow(t.start.row)) {
                    return this.drawBidiSingleLineMarker(e, t, i, n, o, s);
                }
                const n_lineHeight = n.lineHeight;
                const a = (t.end.column + (o || 0) - t.start.column) * n.characterWidth;
                const c = this.$getTop(t.start.row, n);
                const l = this.$padding + t.start.column * n.characterWidth;
                this.elt(i, `height:${n_lineHeight}px;width:${a}px;top:${c}px;left:${l}px;${s || ""}`);
            };
            this.drawBidiSingleLineMarker = function(e, t, i, n, o, s) {
                const n_lineHeight = n.lineHeight;
                const a = this.$getTop(t.start.row, n);
                const $padding = this.$padding;
                this.session.$bidiHandler.getSelections(t.start.column, t.end.column).forEach(function(e) {
                    this.elt(i, `height:${n_lineHeight}px;width:${e.width}${o || 0}px;top:${a}px;left:${$padding + e.left}px;${s || ""}`);
                }, this);
            };
            this.drawFullLineMarker = function(e, t, i, n, o) {
                const s = this.$getTop(t.start.row, n);
                let n_lineHeight = n.lineHeight;
                if (t.start.row != t.end.row) {
                    n_lineHeight += this.$getTop(t.end.row, n) - s;
                }
                this.elt(i, `height:${n_lineHeight}px;top:${s}px;left:0;right:0;${o || ""}`);
            };
            this.drawScreenLineMarker = function(e, t, i, n, o) {
                const s = this.$getTop(t.start.row, n);
                const n_lineHeight = n.lineHeight;
                this.elt(i, `height:${n_lineHeight}px;top:${s}px;left:0;right:0;${o || ""}`);
            };
        }).call(s.prototype);
        t.Marker = s;
    });
    ace.define("ace/layer/text", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/lib/dom",
        "ace/lib/lang",
        "ace/layer/lines",
        "ace/lib/event_emitter"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/oop");
        const o = e("../lib/dom");
        const s = e("../lib/lang");
        const Lines = e("./lines").Lines;
        const EventEmitter = e("../lib/event_emitter").EventEmitter;
        const c = function(e) {
            this.dom = o;
            this.element = this.dom.createElement("div");
            this.element.className = "ace_layer ace_text-layer";
            e.appendChild(this.element);
            this.$updateEolChar = this.$updateEolChar.bind(this);
            this.$lines = new Lines(this.element);
        };
        (function() {
            n.implement(this, EventEmitter);
            this.EOF_CHAR = "¶";
            this.EOL_CHAR_LF = "¬";
            this.EOL_CHAR_CRLF = "¤";
            this.EOL_CHAR = this.EOL_CHAR_LF;
            this.TAB_CHAR = "—";
            this.SPACE_CHAR = "·";
            this.$padding = 0;
            this.MAX_LINE_LENGTH = 10000;
            this.$updateEolChar = function() {
                const doc = this.session.doc;
                const t = doc.getNewLineCharacter() == "\n" && doc.getNewLineMode() != "windows" ? this.EOL_CHAR_LF : this.EOL_CHAR_CRLF;
                if (this.EOL_CHAR != t) {
                    this.EOL_CHAR = t;
                    return true;
                }
            };
            this.setPadding = function(e) {
                this.$padding = e;
                this.element.style.margin = `0 ${e}px`;
            };
            this.getLineHeight = function() {
                return this.$fontMetrics.$characterSize.height || 0;
            };
            this.getCharacterWidth = function() {
                return this.$fontMetrics.$characterSize.width || 0;
            };
            this.$setFontMetrics = function(e) {
                this.$fontMetrics = e;
                this.$fontMetrics.on("changeCharacterSize", (function(e) {
                    this._signal("changeCharacterSize", e);
                }).bind(this));
                this.$pollSizeChanges();
            };
            this.checkForSizeChanges = function() {
                this.$fontMetrics.checkForSizeChanges();
            };
            this.$pollSizeChanges = function() {
                return this.$pollSizeChangesTimer = this.$fontMetrics.$pollSizeChanges();
            };
            this.setSession = function(e) {
                this.session = e;
                if (e) {
                    this.$computeTabString();
                }
            };
            this.showInvisibles = false;
            this.showSpaces = false;
            this.showTabs = false;
            this.showEOL = false;
            this.setShowInvisibles = function(e) {
                return this.showInvisibles != e && (this.showInvisibles = e, typeof e === "string" ? (this.showSpaces = /tab/i.test(e), this.showTabs = /space/i.test(e), this.showEOL = /eol/i.test(e)) : this.showSpaces = this.showTabs = this.showEOL = e, this.$computeTabString(), true);
            };
            this.displayIndentGuides = true;
            this.setDisplayIndentGuides = function(e) {
                return this.displayIndentGuides != e && (this.displayIndentGuides = e, this.$computeTabString(), true);
            };
            this.$tabStrings = [];
            this.onChangeTabSize = this.$computeTabString = function() {
                const e = this.session.getTabSize();
                this.tabSize = e;
                const t = this.$tabStrings = [
                    0
                ];
                for(let i = 1; i < e + 1; i++){
                    if (this.showTabs) {
                        n = this.dom.createElement("span");
                        n.className = "ace_invisible ace_invisible_tab";
                        n.textContent = s.stringRepeat(this.TAB_CHAR, i);
                        t.push(n);
                    } else {
                        t.push(this.dom.createTextNode(s.stringRepeat(" ", i), this.element));
                    }
                }
                if (this.displayIndentGuides) {
                    this.$indentGuideRe = /\s\S| \t|\t |\s$/;
                    var n;
                    const o = this.showSpaces ? " ace_invisible ace_invisible_space" : "";
                    const r = this.showSpaces ? s.stringRepeat(this.SPACE_CHAR, this.tabSize) : s.stringRepeat(" ", this.tabSize);
                    const a = this.showTabs ? " ace_invisible ace_invisible_tab" : "";
                    const c = this.showTabs ? s.stringRepeat(this.TAB_CHAR, this.tabSize) : r;
                    n = this.dom.createElement("span");
                    n.className = `ace_indent-guide${o}`;
                    n.textContent = r;
                    this.$tabStrings[" "] = n;
                    n = this.dom.createElement("span");
                    n.className = `ace_indent-guide${a}`;
                    n.textContent = c;
                    this.$tabStrings["\t"] = n;
                }
            };
            this.updateLines = function(e, t, i) {
                if (this.config.lastRow != e.lastRow || this.config.firstRow != e.firstRow) {
                    return this.update(e);
                }
                this.config = e;
                for(var n = Math.max(t, e.firstRow), o = Math.min(i, e.lastRow), s = this.element.childNodes, r = 0, a = e.firstRow; a < n; a++){
                    if (c = this.session.getFoldLine(a)) {
                        if (c.containsRow(n)) {
                            n = c.start.row;
                            break;
                        }
                        a = c.end.row;
                    }
                    r++;
                }
                var c;
                let l = false;
                a = n;
                for(let h = (c = this.session.getNextFoldLine(a)) ? c.start.row : Infinity; a > h && (a = c.end.row + 1, h = (c = this.session.getNextFoldLine(a, c)) ? c.start.row : Infinity), !(a > o);){
                    const d = s[r++];
                    if (d) {
                        this.dom.removeChildren(d);
                        this.$renderLine(d, a, a == h && c);
                        if (l) {
                            d.style.top = `${this.$lines.computeLineTop(a, e, this.session)}px`;
                        }
                        const u = `${e.lineHeight * this.session.getRowLength(a)}px`;
                        if (d.style.height != u) {
                            l = true;
                            d.style.height = u;
                        }
                    }
                    a++;
                }
                if (l) {
                    while(r < this.$lines.cells.length){
                        const f = this.$lines.cells[r++];
                        f.element.style.top = `${this.$lines.computeLineTop(f.row, e, this.session)}px`;
                    }
                }
            };
            this.scrollLines = function(e) {
                const config = this.config;
                this.config = e;
                if (this.$lines.pageChanged(config, e)) {
                    return this.update(e);
                }
                this.$lines.moveContainer(e);
                const e_lastRow = e.lastRow;
                const n = config ? config.lastRow : -1;
                if (!config || n < e.firstRow) {
                    return this.update(e);
                }
                if (e_lastRow < config.firstRow) {
                    return this.update(e);
                }
                if (!config || config.lastRow < e.firstRow) {
                    return this.update(e);
                }
                if (e.lastRow < config.firstRow) {
                    return this.update(e);
                }
                if (config.firstRow < e.firstRow) {
                    for(var o = this.session.getFoldedRowCount(config.firstRow, e.firstRow - 1); o > 0; o--){
                        this.$lines.shift();
                    }
                }
                if (config.lastRow > e.lastRow) {
                    for(o = this.session.getFoldedRowCount(e.lastRow + 1, config.lastRow); o > 0; o--){
                        this.$lines.pop();
                    }
                }
                if (e.firstRow < config.firstRow) {
                    this.$lines.unshift(this.$renderLinesFragment(e, e.firstRow, config.firstRow - 1));
                }
                if (e.lastRow > config.lastRow) {
                    this.$lines.push(this.$renderLinesFragment(e, config.lastRow + 1, e.lastRow));
                }
            };
            this.$renderLinesFragment = function(e, t, i) {
                const n = [];
                for(let s = t, r = this.session.getNextFoldLine(s), a = r ? r.start.row : Infinity; s > a && (s = r.end.row + 1, a = (r = this.session.getNextFoldLine(s, r)) ? r.start.row : Infinity), !(s > i);){
                    const c = this.$lines.createCell(s, e, this.session);
                    const l = c.element;
                    this.dom.removeChildren(l);
                    o.setStyle(l.style, "height", `${this.$lines.computeLineHeight(s, e, this.session)}px`);
                    o.setStyle(l.style, "top", `${this.$lines.computeLineTop(s, e, this.session)}px`);
                    this.$renderLine(l, s, s == a && r);
                    if (this.$useLineGroups()) {
                        l.className = "ace_line_group";
                    } else {
                        l.className = "ace_line";
                    }
                    n.push(c);
                    s++;
                }
                return n;
            };
            this.update = function(e) {
                this.$lines.moveContainer(e);
                this.config = e;
                const { firstRow, lastRow } = e;
                for(var n = this.$lines; n.getLength();){
                    n.pop();
                }
                n.push(this.$renderLinesFragment(e, firstRow, lastRow));
            };
            this.$textToken = {
                text: true,
                rparen: true,
                lparen: true
            };
            this.$renderToken = function(e, t, i, n) {
                let o;
                for(var r = /(\t)|( +)|([\x00-\x1f\x80-\xa0\xad\u1680\u180E\u2000-\u200f\u2028\u2029\u202F\u205F\uFEFF\uFFF9-\uFFFC]+)|(\u3000)|([\u1100-\u115F\u11A3-\u11A7\u11FA-\u11FF\u2329-\u232A\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u303E\u3041-\u3096\u3099-\u30FF\u3105-\u312D\u3131-\u318E\u3190-\u31BA\u31C0-\u31E3\u31F0-\u321E\u3220-\u3247\u3250-\u32FE\u3300-\u4DBF\u4E00-\uA48C\uA490-\uA4C6\uA960-\uA97C\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFAFF\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF60\uFFE0-\uFFE6]|[\uD800-\uDBFF][\uDC00-\uDFFF])/g, a = this.dom.createFragment(this.element), c = 0; o = r.exec(n);){
                    const l = o[1];
                    const h = o[2];
                    const d = o[3];
                    const u = o[4];
                    const f = o[5];
                    if (this.showSpaces || !h) {
                        const g = c != o.index ? n.slice(c, o.index) : "";
                        c = o.index + o[0].length;
                        if (g) {
                            a.appendChild(this.dom.createTextNode(g, this.element));
                        }
                        if (l) {
                            const p = this.session.getScreenTabSize(t + o.index);
                            a.appendChild(this.$tabStrings[p].cloneNode(true));
                            t += p - 1;
                        } else {
                            if (h) {
                                if (this.showSpaces) {
                                    (b = this.dom.createElement("span")).className = "ace_invisible ace_invisible_space";
                                    b.textContent = s.stringRepeat(this.SPACE_CHAR, h.length);
                                    a.appendChild(b);
                                } else {
                                    a.appendChild(this.com.createTextNode(h, this.element));
                                }
                            } else if (d) {
                                (b = this.dom.createElement("span")).className = "ace_invisible ace_invisible_space ace_invalid";
                                b.textContent = s.stringRepeat(this.SPACE_CHAR, d.length);
                                a.appendChild(b);
                            } else if (u) {
                                t += 1;
                                (b = this.dom.createElement("span")).style.width = `${2 * this.config.characterWidth}px`;
                                b.className = this.showSpaces ? "ace_cjk ace_invisible ace_invisible_space" : "ace_cjk";
                                b.textContent = this.showSpaces ? this.SPACE_CHAR : u;
                                a.appendChild(b);
                            } else if (f) {
                                t += 1;
                                (b = this.dom.createElement("span")).style.width = `${2 * this.config.characterWidth}px`;
                                b.className = "ace_cjk";
                                b.textContent = f;
                                a.appendChild(b);
                            }
                        }
                    }
                }
                a.appendChild(this.dom.createTextNode(c ? n.slice(c) : n, this.element));
                if (this.$textToken[i.type]) {
                    e.appendChild(a);
                } else {
                    const m = `ace_${i.type.replace(/\./g, " ace_")}`;
                    var b = this.dom.createElement("span");
                    if (i.type == "fold") {
                        b.style.width = `${i.value.length * this.config.characterWidth}px`;
                    }
                    b.className = m;
                    b.appendChild(a);
                    e.appendChild(b);
                }
                return t + n.length;
            };
            this.renderIndentGuide = function(e, t, i) {
                let n = t.search(this.$indentGuideRe);
                if (n <= 0 || n >= i) {
                    return t;
                }
                if (t[0] == " ") {
                    for(var o = (n -= n % this.tabSize) / this.tabSize, s = 0; s < o; s++){
                        e.appendChild(this.$tabStrings[" "].cloneNode(true));
                    }
                    return t.substr(n);
                }
                if (t[0] == "\t") {
                    for(s = 0; s < n; s++){
                        e.appendChild(this.$tabStrings["\t"].cloneNode(true));
                    }
                    return t.substr(n);
                }
                return t;
            };
            this.$createLineElement = function(e) {
                const divElement = this.dom.createElement("div");
                divElement.className = "ace_line";
                divElement.style.height = `${this.config.lineHeight}px`;
                return divElement;
            };
            this.$renderWrappedLine = function(e, t, i) {
                let n = 0;
                let o = 0;
                let r = i[0];
                let a = 0;
                let c = this.$createLineElement();
                e.appendChild(c);
                for(let l = 0; l < t.length; l++){
                    const h = t[l];
                    let d = h.value;
                    if (l == 0 && this.displayIndentGuides) {
                        n = d.length;
                        if (!(d = this.renderIndentGuide(c, d, r))) {
                            continue;
                        }
                        n -= d.length;
                    }
                    if (n + d.length < r) {
                        a = this.$renderToken(c, a, h, d);
                        n += d.length;
                    } else {
                        while(n + d.length >= r){
                            a = this.$renderToken(c, a, h, d.substring(0, r - n));
                            d = d.substring(r - n);
                            n = r;
                            c = this.$createLineElement();
                            e.appendChild(c);
                            c.appendChild(this.dom.createTextNode(s.stringRepeat(" ", i.indent), this.element));
                            a = 0;
                            r = i[++o] || Number.MAX_VALUE;
                        }
                        if (d.length != 0) {
                            n += d.length;
                            a = this.$renderToken(c, a, h, d);
                        }
                    }
                }
                if (i[i.length - 1] > this.MAX_LINE_LENGTH) {
                    this.$renderOverflowMessage(c, a, null, "", true);
                }
            };
            this.$renderSimpleLine = function(e, t) {
                let i = 0;
                let n = t[0];
                let n_value = n.value;
                if (this.displayIndentGuides) {
                    n_value = this.renderIndentGuide(e, n_value);
                }
                if (n_value) {
                    i = this.$renderToken(e, i, n, n_value);
                }
                for(let s = 1; s < t.length; s++){
                    if (i + (n_value = (n = t[s]).value).length > this.MAX_LINE_LENGTH) {
                        return this.$renderOverflowMessage(e, i, n, n_value);
                    }
                    i = this.$renderToken(e, i, n, n_value);
                }
            };
            this.$renderOverflowMessage = function(e, t, i, n, o) {
                if (i) {
                    this.$renderToken(e, t, i, n.slice(0, this.MAX_LINE_LENGTH - t));
                }
                const spanElement = this.dom.createElement("span");
                spanElement.className = "ace_inline_button ace_keyword ace_toggle_wrap";
                spanElement.textContent = o ? "<hide>" : "<click to see more...>";
                e.appendChild(spanElement);
            };
            this.$renderLine = function(e, t, i) {
                if (!(i || i == 0)) {
                    i = this.session.getFoldLine(t);
                }
                if (i) var n = this.$getFoldLineTokens(t, i);
                else {
                    n = this.session.getTokens(t);
                }
                let o = e;
                if (n.length) {
                    const s = this.session.getRowSplitData(t);
                    if (s && s.length) {
                        this.$renderWrappedLine(e, n, s);
                        o = e.lastChild;
                    } else {
                        o = e;
                        if (this.$useLineGroups()) {
                            o = this.$createLineElement();
                            e.appendChild(o);
                        }
                        this.$renderSimpleLine(o, n);
                    }
                } else {
                    if (this.$useLineGroups()) {
                        o = this.$createLineElement();
                        e.appendChild(o);
                    }
                }
                if (this.showEOL && o) {
                    if (i) {
                        t = i.end.row;
                    }
                    const r = this.dom.createElement("span");
                    r.className = "ace_invisible ace_invisible_eol";
                    r.textContent = t == this.session.getLength() - 1 ? this.EOF_CHAR : this.EOL_CHAR;
                    o.appendChild(r);
                }
            };
            this.$getFoldLineTokens = function(e, t) {
                const session = this.session;
                const n = [];
                let o = session.getTokens(e);
                t.walk(function(e, t, s, r, a) {
                    if (e != null) {
                        n.push({
                            type: "fold",
                            value: e
                        });
                    } else {
                        if (a) {
                            o = session.getTokens(t);
                        }
                        if (o.length) {
                            ((e, t, i)=>{
                                for(var o = 0, s = 0; s + e[o].value.length < t;){
                                    s += e[o].value.length;
                                    if (++o == e.length) {
                                        return;
                                    }
                                }
                                for(s != t && ((r = e[o].value.substring(t - s)).length > i - t && (r = r.substring(0, i - t)), n.push({
                                    type: e[o].type,
                                    value: r
                                }), s = t + r.length, o += 1); s < i && o < e.length;){
                                    var r;
                                    if ((r = e[o].value).length + s > i) {
                                        n.push({
                                            type: e[o].type,
                                            value: r.substring(0, i - s)
                                        });
                                    } else {
                                        n.push(e[o]);
                                    }
                                    s += r.length;
                                    o += 1;
                                }
                            })(o, r, s);
                        }
                    }
                }, t.end.row, this.session.getLine(t.end.row).length);
                return n;
            };
            this.$useLineGroups = function() {
                return this.session.getUseWrapMode();
            };
            this.destroy = function() {};
        }).call(c.prototype);
        t.Text = c;
    });
    ace.define("ace/layer/cursor", [
        "require",
        "exports",
        "module",
        "ace/lib/dom"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/dom");
        const o = function(e) {
            this.element = n.createElement("div");
            this.element.className = "ace_layer ace_cursor-layer";
            e.appendChild(this.element);
            this.isVisible = false;
            this.isBlinking = true;
            this.blinkInterval = 1000;
            this.smoothBlinking = false;
            this.cursors = [];
            this.cursor = this.addCursor();
            n.addCssClass(this.element, "ace_hidden-cursors");
            this.$updateCursors = this.$updateOpacity.bind(this);
        };
        (function() {
            this.$updateOpacity = function(e) {
                const cursors = this.cursors;
                for(let i = cursors.length; i--;){
                    n.setStyle(cursors[i].style, "opacity", e ? "" : "0");
                }
            };
            this.$startCssAnimation = function() {
                const cursors = this.cursors;
                for(let t = cursors.length; t--;){
                    cursors[t].style.animationDuration = `${this.blinkInterval}ms`;
                }
                setTimeout((function() {
                    n.addCssClass(this.element, "ace_animate-blinking");
                }).bind(this));
            };
            this.$stopCssAnimation = function() {
                n.removeCssClass(this.element, "ace_animate-blinking");
            };
            this.$padding = 0;
            this.setPadding = function(e) {
                this.$padding = e;
            };
            this.setSession = function(e) {
                this.session = e;
            };
            this.setBlinking = function(e) {
                if (e != this.isBlinking) {
                    this.isBlinking = e;
                    this.restartTimer();
                }
            };
            this.setBlinkInterval = function(e) {
                if (e != this.blinkInterval) {
                    this.blinkInterval = e;
                    this.restartTimer();
                }
            };
            this.setSmoothBlinking = function(e) {
                if (e != this.smoothBlinking) {
                    this.smoothBlinking = e;
                    n.setCssClass(this.element, "ace_smooth-blinking", e);
                    this.$updateCursors(true);
                    this.restartTimer();
                }
            };
            this.addCursor = function() {
                const divElement = n.createElement("div");
                divElement.className = "ace_cursor";
                this.element.appendChild(divElement);
                this.cursors.push(divElement);
                return divElement;
            };
            this.removeCursor = function() {
                if (this.cursors.length > 1) {
                    const e = this.cursors.pop();
                    e.parentNode.removeChild(e);
                    return e;
                }
            };
            this.hideCursor = function() {
                this.isVisible = false;
                n.addCssClass(this.element, "ace_hidden-cursors");
                this.restartTimer();
            };
            this.showCursor = function() {
                this.isVisible = true;
                n.removeCssClass(this.element, "ace_hidden-cursors");
                this.restartTimer();
            };
            this.restartTimer = function() {
                const $updateCursors = this.$updateCursors;
                clearInterval(this.intervalId);
                clearTimeout(this.timeoutId);
                this.$stopCssAnimation();
                if (this.smoothBlinking) {
                    n.removeCssClass(this.element, "ace_smooth-blinking");
                }
                $updateCursors(true);
                if (this.isBlinking && this.blinkInterval && this.isVisible) {
                    if (this.smoothBlinking) {
                        setTimeout((function() {
                            n.addCssClass(this.element, "ace_smooth-blinking");
                        }).bind(this));
                    }
                    if (n.HAS_CSS_ANIMATION) {
                        this.$startCssAnimation();
                    } else {
                        const t = (function() {
                            this.timeoutId = setTimeout(()=>{
                                $updateCursors(false);
                            }, 0.6 * this.blinkInterval);
                        }).bind(this);
                        this.intervalId = setInterval(()=>{
                            $updateCursors(true);
                            t();
                        }, this.blinkInterval);
                        t();
                    }
                } else {
                    this.$stopCssAnimation();
                }
            };
            this.getPixelPosition = function(e, t) {
                if (!this.config || !this.session) {
                    return {
                        left: 0,
                        top: 0
                    };
                }
                if (!e) {
                    e = this.session.selection.getCursor();
                }
                const i = this.session.documentToScreenPosition(e);
                return {
                    left: this.$padding + (this.session.$bidiHandler.isBidiRow(i.row, e.row) ? this.session.$bidiHandler.getPosLeft(i.column) : i.column * this.config.characterWidth),
                    top: (i.row - (t ? this.config.firstRowScreen : 0)) * this.config.lineHeight
                };
            };
            this.isCursorInView = function(e, t) {
                return e.top >= 0 && e.top < t.maxHeight;
            };
            this.update = function(e) {
                this.config = e;
                let $selectionMarkers = this.session.$selectionMarkers;
                let i = 0;
                let o = 0;
                if (!($selectionMarkers !== undefined && $selectionMarkers.length !== 0)) {
                    $selectionMarkers = [
                        {
                            cursor: null
                        }
                    ];
                }
                i = 0;
                for(const s = $selectionMarkers.length; i < s; i++){
                    var r = this.getPixelPosition($selectionMarkers[i].cursor, true);
                    if (!((r.top > e.height + e.offset || r.top < 0) && i > 1)) {
                        const a = this.cursors[o++] || this.addCursor();
                        const c = a.style;
                        if (this.drawCursor) {
                            this.drawCursor(a, r, e, $selectionMarkers[i], this.session);
                        } else if (this.isCursorInView(r, e)) {
                            n.setStyle(c, "display", "block");
                            n.translate(a, r.left, r.top);
                            n.setStyle(c, "width", `${Math.round(e.characterWidth)}px`);
                            n.setStyle(c, "height", `${e.lineHeight}px`);
                        } else {
                            n.setStyle(c, "display", "none");
                        }
                    }
                }
                while(this.cursors.length > o){
                    this.removeCursor();
                }
                const l = this.session.getOverwrite();
                this.$setOverwrite(l);
                this.$pixelPos = r;
                this.restartTimer();
            };
            this.drawCursor = null;
            this.$setOverwrite = function(e) {
                if (e != this.overwrite) {
                    this.overwrite = e;
                    if (e) {
                        n.addCssClass(this.element, "ace_overwrite-cursors");
                    } else {
                        n.removeCssClass(this.element, "ace_overwrite-cursors");
                    }
                }
            };
            this.destroy = function() {
                clearInterval(this.intervalId);
                clearTimeout(this.timeoutId);
            };
        }).call(o.prototype);
        t.Cursor = o;
    });
    ace.define("ace/scrollbar", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/lib/dom",
        "ace/lib/event",
        "ace/lib/event_emitter"
    ], function(e, t, i) {
        "use strict";
        const n = e("./lib/oop");
        const o = e("./lib/dom");
        const s = e("./lib/event");
        const EventEmitter = e("./lib/event_emitter").EventEmitter;
        const a = function(e) {
            this.element = o.createElement("div");
            this.element.className = `ace_scrollbar ace_scrollbar${this.classSuffix}`;
            this.inner = o.createElement("div");
            this.inner.className = "ace_scrollbar-inner";
            this.inner.textContent = " ";
            this.element.appendChild(this.inner);
            e.appendChild(this.element);
            this.setVisible(false);
            this.skipEvent = false;
            s.addListener(this.element, "scroll", this.onScroll.bind(this));
            s.addListener(this.element, "mousedown", s.preventDefault);
        };
        (function() {
            n.implement(this, EventEmitter);
            this.setVisible = function(e) {
                this.element.style.display = e ? "" : "none";
                this.isVisible = e;
                this.coeff = 1;
            };
        }).call(a.prototype);
        const c = function(e, t) {
            a.call(this, e);
            this.scrollTop = 0;
            this.scrollHeight = 0;
            t.$scrollbarWidth = this.width = o.scrollbarWidth(e.ownerDocument);
            this.inner.style.width = this.element.style.width = `${(this.width || 15) + 5}px`;
            this.$minWidth = 0;
        };
        n.inherits(c, a);
        (function() {
            this.classSuffix = "-v";
            this.onScroll = function() {
                if (!this.skipEvent) {
                    this.scrollTop = this.element.scrollTop;
                    if (this.coeff != 1) {
                        const e = this.element.clientHeight / this.scrollHeight;
                        this.scrollTop = this.scrollTop * (1 - e) / (this.coeff - e);
                    }
                    this._emit("scroll", {
                        data: this.scrollTop
                    });
                }
                this.skipEvent = false;
            };
            this.getWidth = function() {
                return Math.max(this.isVisible ? this.width : 0, this.$minWidth || 0);
            };
            this.setHeight = function(e) {
                this.element.style.height = `${e}px`;
            };
            this.setInnerHeight = this.setScrollHeight = function(e) {
                this.scrollHeight = e;
                if (e > 32768) {
                    this.coeff = 32768 / e;
                    e = 32768;
                } else if (this.coeff != 1) {
                    this.coeff = 1;
                }
                this.inner.style.height = `${e}px`;
            };
            this.setScrollTop = function(e) {
                if (this.scrollTop != e) {
                    this.skipEvent = true;
                    this.scrollTop = e;
                    this.element.scrollTop = e * this.coeff;
                }
            };
        }).call(c.prototype);
        const l = function(e, t) {
            a.call(this, e);
            this.scrollLeft = 0;
            this.height = t.$scrollbarWidth;
            this.inner.style.height = this.element.style.height = `${(this.height || 15) + 5}px`;
        };
        n.inherits(l, a);
        (function() {
            this.classSuffix = "-h";
            this.onScroll = function() {
                if (!this.skipEvent) {
                    this.scrollLeft = this.element.scrollLeft;
                    this._emit("scroll", {
                        data: this.scrollLeft
                    });
                }
                this.skipEvent = false;
            };
            this.getHeight = function() {
                if (this.isVisible) {
                    return this.height;
                }
                return 0;
            };
            this.setWidth = function(e) {
                this.element.style.width = `${e}px`;
            };
            this.setInnerWidth = function(e) {
                this.inner.style.width = `${e}px`;
            };
            this.setScrollWidth = function(e) {
                this.inner.style.width = `${e}px`;
            };
            this.setScrollLeft = function(e) {
                if (this.scrollLeft != e) {
                    this.skipEvent = true;
                    this.scrollLeft = this.element.scrollLeft = e;
                }
            };
        }).call(l.prototype);
        t.ScrollBar = c;
        t.ScrollBarV = c;
        t.ScrollBarH = l;
        t.VScrollBar = c;
        t.HScrollBar = l;
    });
    ace.define("ace/renderloop", [
        "require",
        "exports",
        "module",
        "ace/lib/event"
    ], function(e, t, i) {
        "use strict";
        const n = e("./lib/event");
        const o = function(e, t) {
            this.onRender = e;
            this.pending = false;
            this.changes = 0;
            this.$recursionLimit = 2;
            this.window = t || window;
            const _this = this;
            this._flush = function(e) {
                _this.pending = false;
                const changes = _this.changes;
                if (changes) {
                    n.blockIdle(100);
                    _this.changes = 0;
                    _this.onRender(changes);
                }
                if (_this.changes) {
                    if (_this.$recursionLimit-- < 0) {
                        return;
                    }
                    _this.schedule();
                } else {
                    _this.$recursionLimit = 2;
                }
            };
        };
        (function() {
            this.schedule = function(e) {
                this.changes = this.changes | e;
                if (this.changes && !this.pending) {
                    n.nextFrame(this._flush);
                    this.pending = true;
                }
            };
            this.clear = function(e) {
                const changes = this.changes;
                this.changes = 0;
                return changes;
            };
        }).call(o.prototype);
        t.RenderLoop = o;
    });
    ace.define("ace/layer/font_metrics", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/lib/dom",
        "ace/lib/lang",
        "ace/lib/event",
        "ace/lib/useragent",
        "ace/lib/event_emitter"
    ], function(e, t, i) {
        const n = e("../lib/oop");
        const o = e("../lib/dom");
        const s = e("../lib/lang");
        const r = e("../lib/event");
        const a = e("../lib/useragent");
        const EventEmitter = e("../lib/event_emitter").EventEmitter;
        const l = typeof ResizeObserver === "function";
        const h = 200;
        const d = t.FontMetrics = function(e) {
            this.el = o.createElement("div");
            this.$setMeasureNodeStyles(this.el.style, true);
            this.$main = o.createElement("div");
            this.$setMeasureNodeStyles(this.$main.style);
            this.$measureNode = o.createElement("div");
            this.$setMeasureNodeStyles(this.$measureNode.style);
            this.el.appendChild(this.$main);
            this.el.appendChild(this.$measureNode);
            e.appendChild(this.el);
            this.$measureNode.textContent = s.stringRepeat("X", 256);
            this.$characterSize = {
                width: 0,
                height: 0
            };
            if (l) {
                this.$addObserver();
            } else {
                this.checkForSizeChanges();
            }
        };
        (function() {
            n.implement(this, EventEmitter);
            this.$characterSize = {
                width: 0,
                height: 0
            };
            this.$setMeasureNodeStyles = function(e, t) {
                e.width = e.height = "auto";
                e.left = e.top = "0px";
                e.visibility = "hidden";
                e.position = "absolute";
                e.whiteSpace = "pre";
                if (a.isIE < 8) {
                    e["font-family"] = "inherit";
                } else {
                    e.font = "inherit";
                }
                e.overflow = t ? "hidden" : "visible";
            };
            this.checkForSizeChanges = function(e = this.$measureSizes()) {
                if (e && (this.$characterSize.width !== e.width || this.$characterSize.height !== e.height)) {
                    this.$measureNode.style.fontWeight = "bold";
                    const t = this.$measureSizes();
                    this.$measureNode.style.fontWeight = "";
                    this.$characterSize = e;
                    this.charSizes = Object.create(null);
                    this.allowBoldFonts = t && t.width === e.width && t.height === e.height;
                    this._emit("changeCharacterSize", {
                        data: e
                    });
                }
            };
            this.$addObserver = function() {
                const _this = this;
                this.$observer = new window.ResizeObserver(function(t) {
                    _this.checkForSizeChanges();
                });
                this.$observer.observe(this.$measureNode);
            };
            this.$pollSizeChanges = function() {
                if (this.$pollSizeChangesTimer || this.$observer) {
                    return this.$pollSizeChangesTimer;
                }
                const _this = this;
                return this.$pollSizeChangesTimer = r.onIdle(function t() {
                    _this.checkForSizeChanges();
                    r.onIdle(t, 500);
                }, 500);
            };
            this.setPolling = function(e) {
                if (e) {
                    this.$pollSizeChanges();
                } else if (this.$pollSizeChangesTimer) {
                    clearInterval(this.$pollSizeChangesTimer);
                    this.$pollSizeChangesTimer = 0;
                }
            };
            this.$measureSizes = function(e) {
                const t = {
                    height: (e || this.$measureNode).clientHeight,
                    width: (e || this.$measureNode).clientWidth / 256
                };
                if (t.width === 0 || t.height === 0) {
                    return null;
                }
                return t;
            };
            this.$measureCharWidth = function(e) {
                this.$main.textContent = s.stringRepeat(e, 256);
                return this.$main.getBoundingClientRect().width / 256;
            };
            this.getCharacterWidth = function(e) {
                let t = this.charSizes[e];
                if (t === undefined) {
                    t = this.charSizes[e] = this.$measureCharWidth(e) / this.$characterSize.width;
                }
                return t;
            };
            this.destroy = function() {
                clearInterval(this.$pollSizeChangesTimer);
                if (this.$observer) {
                    this.$observer.disconnect();
                }
                if (this.el && this.el.parentNode) {
                    this.el.parentNode.removeChild(this.el);
                }
            };
            this.$getZoom = function e(t) {
                if (t && t.parentElement) {
                    return (window.getComputedStyle(t).zoom || 1) * e(t.parentElement);
                }
                return 1;
            };
            this.$initTransformMeasureNodes = function() {
                const e = (e, t)=>[
                        "div",
                        {
                            style: `position: absolute;top:${e}px;left:${t}px;`
                        }
                    ];
                this.els = o.buildDom([
                    e(0, 0),
                    e(h, 0),
                    e(0, h),
                    e(h, h)
                ], this.el);
            };
            this.transformCoordinates = function(e, t) {
                function i(e, t, i) {
                    const n = e[1] * t[0] - e[0] * t[1];
                    return [
                        (-t[1] * i[0] + t[0] * i[1]) / n,
                        (+e[1] * i[0] - e[0] * i[1]) / n
                    ];
                }
                function n(e, t) {
                    return [
                        e[0] - t[0],
                        e[1] - t[1]
                    ];
                }
                function o(e, t) {
                    return [
                        e[0] + t[0],
                        e[1] + t[1]
                    ];
                }
                function s(e, t) {
                    return [
                        e * t[0],
                        e * t[1]
                    ];
                }
                function r(e) {
                    const t = e.getBoundingClientRect();
                    return [
                        t.left,
                        t.top
                    ];
                }
                if (e) {
                    e = s(1 / this.$getZoom(this.el), e);
                }
                if (!this.els) {
                    this.$initTransformMeasureNodes();
                }
                const a = r(this.els[0]);
                const c = r(this.els[1]);
                const l = r(this.els[2]);
                const d = r(this.els[3]);
                const u = i(n(d, c), n(d, l), n(o(c, l), o(d, a)));
                const f = s(1 + u[0], n(c, a));
                const g = s(1 + u[1], n(l, a));
                if (t) {
                    const p = t;
                    const m = u[0] * p[0] / h + u[1] * p[1] / h + 1;
                    const b = o(s(p[0], f), s(p[1], g));
                    return o(s(1 / m / h, b), a);
                }
                const v = n(e, a);
                const w = i(n(f, s(u[0], v)), n(g, s(u[1], v)), v);
                return s(h, w);
            };
        }).call(d.prototype);
    });
    ace.define("ace/virtual_renderer", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/lib/dom",
        "ace/config",
        "ace/layer/gutter",
        "ace/layer/marker",
        "ace/layer/text",
        "ace/layer/cursor",
        "ace/scrollbar",
        "ace/scrollbar",
        "ace/renderloop",
        "ace/layer/font_metrics",
        "ace/lib/event_emitter",
        "ace/lib/useragent"
    ], function(e, t, i) {
        "use strict";
        const n = e("./lib/oop");
        const o = e("./lib/dom");
        const s = e("./config");
        const Gutter = e("./layer/gutter").Gutter;
        const Marker = e("./layer/marker").Marker;
        const Text = e("./layer/text").Text;
        const Cursor = e("./layer/cursor").Cursor;
        const HScrollBar = e("./scrollbar").HScrollBar;
        const VScrollBar = e("./scrollbar").VScrollBar;
        const RenderLoop = e("./renderloop").RenderLoop;
        const FontMetrics = e("./layer/font_metrics").FontMetrics;
        const EventEmitter = e("./lib/event_emitter").EventEmitter;
        const p = '.ace_br1 {border-top-left-radius    : 3px;}.ace_br2 {border-top-right-radius   : 3px;}.ace_br3 {border-top-left-radius    : 3px; border-top-right-radius:    3px;}.ace_br4 {border-bottom-right-radius: 3px;}.ace_br5 {border-top-left-radius    : 3px; border-bottom-right-radius: 3px;}.ace_br6 {border-top-right-radius   : 3px; border-bottom-right-radius: 3px;}.ace_br7 {border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px;}.ace_br8 {border-bottom-left-radius : 3px;}.ace_br9 {border-top-left-radius    : 3px; border-bottom-left-radius:  3px;}.ace_br10{border-top-right-radius   : 3px; border-bottom-left-radius:  3px;}.ace_br11{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-left-radius:  3px;}.ace_br12{border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br13{border-top-left-radius    : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br14{border-top-right-radius   : 3px; border-bottom-right-radius: 3px; border-bottom-left-radius:  3px;}.ace_br15{border-top-left-radius    : 3px; border-top-right-radius:    3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px;}.ace_editor {position: relative;overflow: hidden;padding: 0;font: 12px/normal \'Monaco\', \'Menlo\', \'Ubuntu Mono\', \'Consolas\', \'source-code-pro\', monospace;direction: ltr;text-align: left;-webkit-tap-highlight-color: rgba(0, 0, 0, 0);}.ace_scroller {position: absolute;overflow: hidden;top: 0;bottom: 0;background-color: inherit;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;cursor: text;}.ace_content {position: absolute;box-sizing: border-box;min-width: 100%;contain: style size layout;font-variant-ligatures: no-common-ligatures;}.ace_dragging .ace_scroller:before{position: absolute;top: 0;left: 0;right: 0;bottom: 0;content: \'\';background: rgba(250, 250, 250, 0.01);z-index: 1000;}.ace_dragging.ace_dark .ace_scroller:before{background: rgba(0, 0, 0, 0.01);}.ace_selecting, .ace_selecting * {cursor: text !important;}.ace_gutter {position: absolute;overflow : hidden;width: auto;top: 0;bottom: 0;left: 0;cursor: default;z-index: 4;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;contain: style size layout;}.ace_gutter-active-line {position: absolute;left: 0;right: 0;}.ace_scroller.ace_scroll-left {box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;}.ace_gutter-cell {position: absolute;top: 0;left: 0;right: 0;padding-left: 19px;padding-right: 6px;background-repeat: no-repeat;}.ace_gutter-cell.ace_error {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: 2px center;}.ace_gutter-cell.ace_warning {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");background-position: 2px center;}.ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");background-position: 2px center;}.ace_dark .ace_gutter-cell.ace_info {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");}.ace_scrollbar {contain: strict;position: absolute;right: 0;bottom: 0;z-index: 6;}.ace_scrollbar-inner {position: absolute;cursor: text;left: 0;top: 0;}.ace_scrollbar-v{overflow-x: hidden;overflow-y: scroll;top: 0;}.ace_scrollbar-h {overflow-x: scroll;overflow-y: hidden;left: 0;}.ace_print-margin {position: absolute;height: 100%;}.ace_text-input {position: absolute;z-index: 0;width: 0.5em;height: 1em;opacity: 0;background: transparent;-moz-appearance: none;appearance: none;border: none;resize: none;outline: none;overflow: hidden;font: inherit;padding: 0 1px;margin: 0 -1px;contain: strict;-ms-user-select: text;-moz-user-select: text;-webkit-user-select: text;user-select: text;white-space: pre!important;}.ace_text-input.ace_composition {background: transparent;color: inherit;z-index: 1000;opacity: 1;}.ace_composition_placeholder { color: transparent }.ace_composition_marker { border-bottom: 1px solid;position: absolute;border-radius: 0;margin-top: 1px;}[ace_nocontext=true] {transform: none!important;filter: none!important;clip-path: none!important;mask : none!important;contain: none!important;perspective: none!important;mix-blend-mode: initial!important;z-index: auto;}.ace_layer {z-index: 1;position: absolute;overflow: hidden;word-wrap: normal;white-space: pre;height: 100%;width: 100%;box-sizing: border-box;pointer-events: none;}.ace_gutter-layer {position: relative;width: auto;text-align: right;pointer-events: auto;height: 1000000px;contain: style size layout;}.ace_text-layer {font: inherit !important;position: absolute;height: 1000000px;width: 1000000px;contain: style size layout;}.ace_text-layer > .ace_line, .ace_text-layer > .ace_line_group {contain: style size layout;position: absolute;top: 0;left: 0;right: 0;}.ace_hidpi .ace_text-layer,.ace_hidpi .ace_gutter-layer,.ace_hidpi .ace_content,.ace_hidpi .ace_gutter {contain: strict;will-change: transform;}.ace_hidpi .ace_text-layer > .ace_line, .ace_hidpi .ace_text-layer > .ace_line_group {contain: strict;}.ace_cjk {display: inline-block;text-align: center;}.ace_cursor-layer {z-index: 4;}.ace_cursor {z-index: 4;position: absolute;box-sizing: border-box;border-left: 2px solid;transform: translatez(0);}.ace_multiselect .ace_cursor {border-left-width: 1px;}.ace_slim-cursors .ace_cursor {border-left-width: 1px;}.ace_overwrite-cursors .ace_cursor {border-left-width: 0;border-bottom: 1px solid;}.ace_hidden-cursors .ace_cursor {opacity: 0.2;}.ace_hasPlaceholder .ace_hidden-cursors .ace_cursor {opacity: 0;}.ace_smooth-blinking .ace_cursor {transition: opacity 0.18s;}.ace_animate-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: step-end;animation-name: blink-ace-animate;animation-iteration-count: infinite;}.ace_animate-blinking.ace_smooth-blinking .ace_cursor {animation-duration: 1000ms;animation-timing-function: ease-in-out;animation-name: blink-ace-animate-smooth;}@keyframes blink-ace-animate {from, to { opacity: 1; }60% { opacity: 0; }}@keyframes blink-ace-animate-smooth {from, to { opacity: 1; }45% { opacity: 1; }60% { opacity: 0; }85% { opacity: 0; }}.ace_marker-layer .ace_step, .ace_marker-layer .ace_stack {position: absolute;z-index: 3;}.ace_marker-layer .ace_selection {position: absolute;z-index: 5;}.ace_marker-layer .ace_bracket {position: absolute;z-index: 6;}.ace_marker-layer .ace_error_bracket {position: absolute;border-bottom: 1px solid #DE5555;border-radius: 0;}.ace_marker-layer .ace_active-line {position: absolute;z-index: 2;}.ace_marker-layer .ace_selected-word {position: absolute;z-index: 4;box-sizing: border-box;}.ace_line .ace_fold {box-sizing: border-box;display: inline-block;height: 11px;margin-top: -2px;vertical-align: middle;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");background-repeat: no-repeat, repeat-x;background-position: center center, top left;color: transparent;border: 1px solid black;border-radius: 2px;cursor: pointer;pointer-events: auto;}.ace_dark .ace_fold {}.ace_fold:hover{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="),url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");}.ace_tooltip {background-color: #FFF;background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));border: 1px solid gray;border-radius: 1px;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);color: black;max-width: 100%;padding: 3px 4px;position: fixed;z-index: 999999;box-sizing: border-box;cursor: default;white-space: pre;word-wrap: break-word;line-height: normal;font-style: normal;font-weight: normal;letter-spacing: normal;pointer-events: none;}.ace_folding-enabled > .ace_gutter-cell {padding-right: 13px;}.ace_fold-widget {box-sizing: border-box;margin: 0 -12px 0 1px;display: none;width: 11px;vertical-align: top;background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");background-repeat: no-repeat;background-position: center;border-radius: 3px;border: 1px solid transparent;cursor: pointer;}.ace_folding-enabled .ace_fold-widget {display: inline-block;   }.ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");}.ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");}.ace_fold-widget:hover {border: 1px solid rgba(0, 0, 0, 0.3);background-color: rgba(255, 255, 255, 0.2);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);}.ace_fold-widget:active {border: 1px solid rgba(0, 0, 0, 0.4);background-color: rgba(0, 0, 0, 0.05);box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);}.ace_dark .ace_fold-widget {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");}.ace_dark .ace_fold-widget.ace_end {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget.ace_closed {background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");}.ace_dark .ace_fold-widget:hover {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);background-color: rgba(255, 255, 255, 0.1);}.ace_dark .ace_fold-widget:active {box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);}.ace_inline_button {border: 1px solid lightgray;display: inline-block;margin: -1px 8px;padding: 0 5px;pointer-events: auto;cursor: pointer;}.ace_inline_button:hover {border-color: gray;background: rgba(200,200,200,0.2);display: inline-block;pointer-events: auto;}.ace_fold-widget.ace_invalid {background-color: #FFB4B4;border-color: #DE5555;}.ace_fade-fold-widgets .ace_fold-widget {transition: opacity 0.4s ease 0.05s;opacity: 0;}.ace_fade-fold-widgets:hover .ace_fold-widget {transition: opacity 0.05s ease 0.05s;opacity:1;}.ace_underline {text-decoration: underline;}.ace_bold {font-weight: bold;}.ace_nobold .ace_bold {font-weight: normal;}.ace_italic {font-style: italic;}.ace_error-marker {background-color: rgba(255, 0, 0,0.2);position: absolute;z-index: 9;}.ace_highlight-marker {background-color: rgba(255, 255, 0,0.2);position: absolute;z-index: 8;}.ace_mobile-menu {position: absolute;line-height: 1.5;border-radius: 4px;-ms-user-select: none;-moz-user-select: none;-webkit-user-select: none;user-select: none;background: white;box-shadow: 1px 3px 2px grey;border: 1px solid #dcdcdc;color: black;}.ace_dark > .ace_mobile-menu {background: #333;color: #ccc;box-shadow: 1px 3px 2px grey;border: 1px solid #444;}.ace_mobile-button {padding: 2px;cursor: pointer;overflow: hidden;}.ace_mobile-button:hover {background-color: #eee;opacity:1;}.ace_mobile-button:active {background-color: #ddd;}.ace_placeholder {font-family: arial;transform: scale(0.9);transform-origin: left;white-space: pre;opacity: 0.7;margin: 0 10px;}';
        const m = e("./lib/useragent");
        const m_isIE = m.isIE;
        o.importCssString(p, "ace_editor.css");
        const v = function(e, t) {
            const _this = this;
            this.container = e || o.createElement("div");
            o.addCssClass(this.container, "ace_editor");
            if (o.HI_DPI) {
                o.addCssClass(this.container, "ace_hidpi");
            }
            this.setTheme(t);
            this.$gutter = o.createElement("div");
            this.$gutter.className = "ace_gutter";
            this.container.appendChild(this.$gutter);
            this.$gutter.setAttribute("aria-hidden", true);
            this.scroller = o.createElement("div");
            this.scroller.className = "ace_scroller";
            this.container.appendChild(this.scroller);
            this.content = o.createElement("div");
            this.content.className = "ace_content";
            this.scroller.appendChild(this.content);
            this.$gutterLayer = new Gutter(this.$gutter);
            this.$gutterLayer.on("changeGutterWidth", this.onGutterResize.bind(this));
            this.$markerBack = new Marker(this.content);
            const n = this.$textLayer = new Text(this.content);
            this.canvas = n.element;
            this.$markerFront = new Marker(this.content);
            this.$cursorLayer = new Cursor(this.content);
            this.$horizScroll = false;
            this.$vScroll = false;
            this.scrollBar = this.scrollBarV = new VScrollBar(this.container, this);
            this.scrollBarH = new HScrollBar(this.container, this);
            this.scrollBarV.on("scroll", function(e) {
                if (!_this.$scrollAnimation) {
                    _this.session.setScrollTop(e.data - _this.scrollMargin.top);
                }
            });
            this.scrollBarH.on("scroll", function(e) {
                if (!_this.$scrollAnimation) {
                    _this.session.setScrollLeft(e.data - _this.scrollMargin.left);
                }
            });
            this.scrollTop = 0;
            this.scrollLeft = 0;
            this.cursorPos = {
                row: 0,
                column: 0
            };
            this.$fontMetrics = new FontMetrics(this.container);
            this.$textLayer.$setFontMetrics(this.$fontMetrics);
            this.$textLayer.on("changeCharacterSize", function(e) {
                _this.updateCharacterSize();
                _this.onResize(true, _this.gutterWidth, _this.$size.width, _this.$size.height);
                _this._signal("changeCharacterSize", e);
            });
            this.$size = {
                width: 0,
                height: 0,
                scrollerHeight: 0,
                scrollerWidth: 0,
                $dirty: true
            };
            this.layerConfig = {
                width: 1,
                padding: 0,
                firstRow: 0,
                firstRowScreen: 0,
                lastRow: 0,
                lineHeight: 0,
                characterWidth: 0,
                minHeight: 1,
                maxHeight: 1,
                offset: 0,
                height: 1,
                gutterOffset: 1
            };
            this.scrollMargin = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                v: 0,
                h: 0
            };
            this.margin = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                v: 0,
                h: 0
            };
            this.$keepTextAreaAtCursor = !m.isIOS;
            this.$loop = new RenderLoop(this.$renderChanges.bind(this), this.container.ownerDocument.defaultView);
            this.$loop.schedule(this.CHANGE_FULL);
            this.updateCharacterSize();
            this.setPadding(4);
            s.resetOptions(this);
            s._signal("renderer", this);
        };
        (function() {
            this.CHANGE_CURSOR = 1;
            this.CHANGE_MARKER = 2;
            this.CHANGE_GUTTER = 4;
            this.CHANGE_SCROLL = 8;
            this.CHANGE_LINES = 16;
            this.CHANGE_TEXT = 32;
            this.CHANGE_SIZE = 64;
            this.CHANGE_MARKER_BACK = 128;
            this.CHANGE_MARKER_FRONT = 256;
            this.CHANGE_FULL = 512;
            this.CHANGE_H_SCROLL = 1024;
            n.implement(this, EventEmitter);
            this.updateCharacterSize = function() {
                if (this.$textLayer.allowBoldFonts != this.$allowBoldFonts) {
                    this.$allowBoldFonts = this.$textLayer.allowBoldFonts;
                    this.setStyle("ace_nobold", !this.$allowBoldFonts);
                }
                this.layerConfig.characterWidth = this.characterWidth = this.$textLayer.getCharacterWidth();
                this.layerConfig.lineHeight = this.lineHeight = this.$textLayer.getLineHeight();
                this.$updatePrintMargin();
                o.setStyle(this.scroller.style, "line-height", `${this.lineHeight}px`);
            };
            this.setSession = function(e) {
                if (this.session) {
                    this.session.doc.off("changeNewLineMode", this.onChangeNewLineMode);
                }
                this.session = e;
                if (e && this.scrollMargin.top && e.getScrollTop() <= 0) {
                    e.setScrollTop(-this.scrollMargin.top);
                }
                this.$cursorLayer.setSession(e);
                this.$markerBack.setSession(e);
                this.$markerFront.setSession(e);
                this.$gutterLayer.setSession(e);
                this.$textLayer.setSession(e);
                if (e) {
                    this.$loop.schedule(this.CHANGE_FULL);
                    this.session.$setFontMetrics(this.$fontMetrics);
                    this.scrollBarH.scrollLeft = this.scrollBarV.scrollTop = null;
                    this.onChangeNewLineMode = this.onChangeNewLineMode.bind(this);
                    this.onChangeNewLineMode();
                    this.session.doc.on("changeNewLineMode", this.onChangeNewLineMode);
                }
            };
            this.updateLines = function(e, t = Infinity, i) {
                if (this.$changedLines) {
                    if (this.$changedLines.firstRow > e) {
                        this.$changedLines.firstRow = e;
                    }
                    if (this.$changedLines.lastRow < t) {
                        this.$changedLines.lastRow = t;
                    }
                } else {
                    this.$changedLines = {
                        firstRow: e,
                        lastRow: t
                    };
                }
                if (this.$changedLines.lastRow < this.layerConfig.firstRow) {
                    if (!i) {
                        return;
                    }
                    this.$changedLines.lastRow = this.layerConfig.lastRow;
                }
                if (!(this.$changedLines.firstRow > this.layerConfig.lastRow)) {
                    this.$loop.schedule(this.CHANGE_LINES);
                }
            };
            this.onChangeNewLineMode = function() {
                this.$loop.schedule(this.CHANGE_TEXT);
                this.$textLayer.$updateEolChar();
                this.session.$bidiHandler.setEolChar(this.$textLayer.EOL_CHAR);
            };
            this.onChangeTabSize = function() {
                this.$loop.schedule(this.CHANGE_TEXT | this.CHANGE_MARKER);
                this.$textLayer.onChangeTabSize();
            };
            this.updateText = function() {
                this.$loop.schedule(this.CHANGE_TEXT);
            };
            this.updateFull = function(e) {
                if (e) {
                    this.$renderChanges(this.CHANGE_FULL, true);
                } else {
                    this.$loop.schedule(this.CHANGE_FULL);
                }
            };
            this.updateFontSize = function() {
                this.$textLayer.checkForSizeChanges();
            };
            this.$changes = 0;
            this.$updateSizeAsync = function() {
                if (this.$loop.pending) {
                    this.$size.$dirty = true;
                } else {
                    this.onResize();
                }
            };
            this.onResize = function(e, t, i, n) {
                if (!(this.resizing > 2)) {
                    if (this.resizing > 0) {
                        this.resizing++;
                    } else {
                        this.resizing = e ? 1 : 0;
                    }
                    const o = this.container;
                    if (!n) {
                        n = o.clientHeight || o.scrollHeight;
                    }
                    if (!i) {
                        i = o.clientWidth || o.scrollWidth;
                    }
                    const s = this.$updateCachedSize(e, t, i, n);
                    if (!this.$size.scrollerHeight || !i && !n) {
                        return this.resizing = 0;
                    }
                    if (e) {
                        this.$gutterLayer.$padding = null;
                    }
                    if (e) {
                        this.$renderChanges(s | this.$changes, true);
                    } else {
                        this.$loop.schedule(s | this.$changes);
                    }
                    if (this.resizing) {
                        this.resizing = 0;
                    }
                    this.scrollBarV.scrollLeft = this.scrollBarV.scrollTop = null;
                }
            };
            this.$updateCachedSize = function(e, t, i, n) {
                n -= this.$extraHeight || 0;
                let s = 0;
                const $size = this.$size;
                const a = {
                    width: $size.width,
                    height: $size.height,
                    scrollerHeight: $size.scrollerHeight,
                    scrollerWidth: $size.scrollerWidth
                };
                if (n && (e || $size.height != n)) {
                    $size.height = n;
                    s |= this.CHANGE_SIZE;
                    $size.scrollerHeight = $size.height;
                    if (this.$horizScroll) {
                        $size.scrollerHeight -= this.scrollBarH.getHeight();
                    }
                    this.scrollBarV.element.style.bottom = `${this.scrollBarH.getHeight()}px`;
                    s |= this.CHANGE_SCROLL;
                }
                if (i && (e || $size.width != i)) {
                    s |= this.CHANGE_SIZE;
                    $size.width = i;
                    if (t == null) {
                        t = this.$showGutter ? this.$gutter.offsetWidth : 0;
                    }
                    this.gutterWidth = t;
                    o.setStyle(this.scrollBarH.element.style, "left", `${t}px`);
                    o.setStyle(this.scroller.style, "left", `${t + this.margin.left}px`);
                    $size.scrollerWidth = Math.max(0, i - t - this.scrollBarV.getWidth() - this.margin.h);
                    o.setStyle(this.$gutter.style, "left", `${this.margin.left}px`);
                    const c = `${this.scrollBarV.getWidth()}px`;
                    o.setStyle(this.scrollBarH.element.style, "right", c);
                    o.setStyle(this.scroller.style, "right", c);
                    o.setStyle(this.scroller.style, "bottom", this.scrollBarH.getHeight());
                    if (this.session && this.session.getUseWrapMode() && this.adjustWrapLimit() || e) {
                        s |= this.CHANGE_FULL;
                    }
                }
                $size.$dirty = !i || !n;
                if (s) {
                    this._signal("resize", a);
                }
                return s;
            };
            this.onGutterResize = function(e) {
                const t = this.$showGutter ? e : 0;
                if (t != this.gutterWidth) {
                    this.$changes |= this.$updateCachedSize(true, t, this.$size.width, this.$size.height);
                }
                if (this.session.getUseWrapMode() && this.adjustWrapLimit() || this.$size.$dirty) {
                    this.$loop.schedule(this.CHANGE_FULL);
                } else {
                    this.$computeLayerConfig();
                }
            };
            this.adjustWrapLimit = function() {
                const e = this.$size.scrollerWidth - 2 * this.$padding;
                const t = Math.floor(e / this.characterWidth);
                return this.session.adjustWrapLimit(t, this.$showPrintMargin && this.$printMarginColumn);
            };
            this.setAnimatedScroll = function(e) {
                this.setOption("animatedScroll", e);
            };
            this.getAnimatedScroll = function() {
                return this.$animatedScroll;
            };
            this.setShowInvisibles = function(e) {
                this.setOption("showInvisibles", e);
                this.session.$bidiHandler.setShowInvisibles(e);
            };
            this.getShowInvisibles = function() {
                return this.getOption("showInvisibles");
            };
            this.getDisplayIndentGuides = function() {
                return this.getOption("displayIndentGuides");
            };
            this.setDisplayIndentGuides = function(e) {
                this.setOption("displayIndentGuides", e);
            };
            this.setShowPrintMargin = function(e) {
                this.setOption("showPrintMargin", e);
            };
            this.getShowPrintMargin = function() {
                return this.getOption("showPrintMargin");
            };
            this.setPrintMarginColumn = function(e) {
                this.setOption("printMarginColumn", e);
            };
            this.getPrintMarginColumn = function() {
                return this.getOption("printMarginColumn");
            };
            this.getShowGutter = function() {
                return this.getOption("showGutter");
            };
            this.setShowGutter = function(e) {
                return this.setOption("showGutter", e);
            };
            this.getFadeFoldWidgets = function() {
                return this.getOption("fadeFoldWidgets");
            };
            this.setFadeFoldWidgets = function(e) {
                this.setOption("fadeFoldWidgets", e);
            };
            this.setHighlightGutterLine = function(e) {
                this.setOption("highlightGutterLine", e);
            };
            this.getHighlightGutterLine = function() {
                return this.getOption("highlightGutterLine");
            };
            this.$updatePrintMargin = function() {
                if (this.$showPrintMargin || this.$printMarginEl) {
                    if (!this.$printMarginEl) {
                        const e = o.createElement("div");
                        e.className = "ace_layer ace_print-margin-layer";
                        this.$printMarginEl = o.createElement("div");
                        this.$printMarginEl.className = "ace_print-margin";
                        e.appendChild(this.$printMarginEl);
                        this.content.insertBefore(e, this.content.firstChild);
                    }
                    const t = this.$printMarginEl.style;
                    t.left = `${Math.round(this.characterWidth * this.$printMarginColumn + this.$padding)}px`;
                    t.visibility = this.$showPrintMargin ? "visible" : "hidden";
                    if (this.session && this.session.$wrap == -1) {
                        this.adjustWrapLimit();
                    }
                }
            };
            this.getContainerElement = function() {
                return this.container;
            };
            this.getMouseEventTarget = function() {
                return this.scroller;
            };
            this.getTextAreaContainer = function() {
                return this.container;
            };
            this.$moveTextAreaToCursor = function() {
                if (!this.$isMousePressed) {
                    const e = this.textarea.style;
                    const t = this.$composition;
                    if (this.$keepTextAreaAtCursor || t) {
                        let i = this.$cursorLayer.$pixelPos;
                        if (i) {
                            if (t && t.markerRange) {
                                i = this.$cursorLayer.getPixelPosition(t.markerRange.start, true);
                            }
                            const n = this.layerConfig;
                            let s = i.top;
                            let r = i.left;
                            s -= n.offset;
                            const a = t && t.useTextareaForIME ? this.lineHeight : m_isIE ? 0 : 1;
                            if (s < 0 || s > n.height - a) {
                                o.translate(this.textarea, 0, 0);
                            } else {
                                let c = 1;
                                const l = this.$size.height - a;
                                if (t) {
                                    if (t.useTextareaForIME) {
                                        const h = this.textarea.value;
                                        c = this.characterWidth * this.session.$getStringScreenWidth(h)[0];
                                    } else {
                                        s += this.lineHeight + 2;
                                    }
                                } else {
                                    s += this.lineHeight;
                                }
                                if ((r -= this.scrollLeft) > this.$size.scrollerWidth - c) {
                                    r = this.$size.scrollerWidth - c;
                                }
                                r += this.gutterWidth + this.margin.left;
                                o.setStyle(e, "height", `${a}px`);
                                o.setStyle(e, "width", `${c}px`);
                                o.translate(this.textarea, Math.min(r, this.$size.scrollerWidth - c), Math.min(s, l));
                            }
                        }
                    } else {
                        o.translate(this.textarea, -100, 0);
                    }
                }
            };
            this.getFirstVisibleRow = function() {
                return this.layerConfig.firstRow;
            };
            this.getFirstFullyVisibleRow = function() {
                return this.layerConfig.firstRow + (this.layerConfig.offset === 0 ? 0 : 1);
            };
            this.getLastFullyVisibleRow = function() {
                const layerConfig = this.layerConfig;
                const e_lastRow = layerConfig.lastRow;
                if (this.session.documentToScreenRow(e_lastRow, 0) * layerConfig.lineHeight - this.session.getScrollTop() > layerConfig.height - layerConfig.lineHeight) {
                    return e_lastRow - 1;
                }
                return e_lastRow;
            };
            this.getLastVisibleRow = function() {
                return this.layerConfig.lastRow;
            };
            this.$padding = null;
            this.setPadding = function(e) {
                this.$padding = e;
                this.$textLayer.setPadding(e);
                this.$cursorLayer.setPadding(e);
                this.$markerFront.setPadding(e);
                this.$markerBack.setPadding(e);
                this.$loop.schedule(this.CHANGE_FULL);
                this.$updatePrintMargin();
            };
            this.setScrollMargin = function(e, t, i, n) {
                const scrollMargin = this.scrollMargin;
                scrollMargin.top = 0 | e;
                scrollMargin.bottom = 0 | t;
                scrollMargin.right = 0 | n;
                scrollMargin.left = 0 | i;
                scrollMargin.v = scrollMargin.top + scrollMargin.bottom;
                scrollMargin.h = scrollMargin.left + scrollMargin.right;
                if (scrollMargin.top && this.scrollTop <= 0 && this.session) {
                    this.session.setScrollTop(-scrollMargin.top);
                }
                this.updateFull();
            };
            this.setMargin = function(e, t, i, n) {
                const margin = this.margin;
                margin.top = 0 | e;
                margin.bottom = 0 | t;
                margin.right = 0 | n;
                margin.left = 0 | i;
                margin.v = margin.top + margin.bottom;
                margin.h = margin.left + margin.right;
                this.$updateCachedSize(true, this.gutterWidth, this.$size.width, this.$size.height);
                this.updateFull();
            };
            this.getHScrollBarAlwaysVisible = function() {
                return this.$hScrollBarAlwaysVisible;
            };
            this.setHScrollBarAlwaysVisible = function(e) {
                this.setOption("hScrollBarAlwaysVisible", e);
            };
            this.getVScrollBarAlwaysVisible = function() {
                return this.$vScrollBarAlwaysVisible;
            };
            this.setVScrollBarAlwaysVisible = function(e) {
                this.setOption("vScrollBarAlwaysVisible", e);
            };
            this.$updateScrollBarV = function() {
                let maxHeight = this.layerConfig.maxHeight;
                const scrollerHeight = this.$size.scrollerHeight;
                if (!this.$maxLines && this.$scrollPastEnd) {
                    maxHeight -= (scrollerHeight - this.lineHeight) * this.$scrollPastEnd;
                    if (this.scrollTop > maxHeight - scrollerHeight) {
                        maxHeight = this.scrollTop + scrollerHeight;
                        this.scrollBarV.scrollTop = null;
                    }
                }
                this.scrollBarV.setScrollHeight(maxHeight + this.scrollMargin.v);
                this.scrollBarV.setScrollTop(this.scrollTop + this.scrollMargin.top);
            };
            this.$updateScrollBarH = function() {
                this.scrollBarH.setScrollWidth(this.layerConfig.width + 2 * this.$padding + this.scrollMargin.h);
                this.scrollBarH.setScrollLeft(this.scrollLeft + this.scrollMargin.left);
            };
            this.$frozen = false;
            this.freeze = function() {
                this.$frozen = true;
            };
            this.unfreeze = function() {
                this.$frozen = false;
            };
            this.$renderChanges = function(e, t) {
                if (this.$changes) {
                    e |= this.$changes;
                    this.$changes = 0;
                }
                if (this.session && this.container.offsetWidth && !this.$frozen && (e || t)) {
                    if (this.$size.$dirty) {
                        this.$changes |= e;
                        return this.onResize(true);
                    }
                    if (!this.lineHeight) {
                        this.$textLayer.checkForSizeChanges();
                    }
                    this._signal("beforeRender", e);
                    if (this.session && this.session.$bidiHandler) {
                        this.session.$bidiHandler.updateCharacterWidths(this.$fontMetrics);
                    }
                    let i = this.layerConfig;
                    if (e & this.CHANGE_FULL || e & this.CHANGE_SIZE || e & this.CHANGE_TEXT || e & this.CHANGE_LINES || e & this.CHANGE_SCROLL || e & this.CHANGE_H_SCROLL) {
                        e |= this.$computeLayerConfig() | this.$loop.clear();
                        if (i.firstRow != this.layerConfig.firstRow && i.firstRowScreen == this.layerConfig.firstRowScreen) {
                            const n = this.scrollTop + (i.firstRow - this.layerConfig.firstRow) * this.lineHeight;
                            if (n > 0) {
                                this.scrollTop = n;
                                e |= this.CHANGE_SCROLL;
                                e |= this.$computeLayerConfig() | this.$loop.clear();
                            }
                        }
                        i = this.layerConfig;
                        this.$updateScrollBarV();
                        if (e & this.CHANGE_H_SCROLL) {
                            this.$updateScrollBarH();
                        }
                        o.translate(this.content, -this.scrollLeft, -i.offset);
                        const s = `${i.width + 2 * this.$padding}px`;
                        const r = `${i.minHeight}px`;
                        o.setStyle(this.content.style, "width", s);
                        o.setStyle(this.content.style, "height", r);
                    }
                    if (e & this.CHANGE_H_SCROLL) {
                        o.translate(this.content, -this.scrollLeft, -i.offset);
                        this.scroller.className = this.scrollLeft <= 0 ? "ace_scroller" : "ace_scroller ace_scroll-left";
                    }
                    if (e & this.CHANGE_FULL) {
                        this.$changedLines = null;
                        this.$textLayer.update(i);
                        if (this.$showGutter) {
                            this.$gutterLayer.update(i);
                        }
                        this.$markerBack.update(i);
                        this.$markerFront.update(i);
                        this.$cursorLayer.update(i);
                        this.$moveTextAreaToCursor();
                        return void this._signal("afterRender", e);
                    }
                    if (e & this.CHANGE_SCROLL) {
                        this.$changedLines = null;
                        if (e & this.CHANGE_TEXT || e & this.CHANGE_LINES) {
                            this.$textLayer.update(i);
                        } else {
                            this.$textLayer.scrollLines(i);
                        }
                        if (this.$showGutter) {
                            if (e & this.CHANGE_GUTTER || e & this.CHANGE_LINES) {
                                this.$gutterLayer.update(i);
                            } else {
                                this.$gutterLayer.scrollLines(i);
                            }
                        }
                        this.$markerBack.update(i);
                        this.$markerFront.update(i);
                        this.$cursorLayer.update(i);
                        this.$moveTextAreaToCursor();
                        return void this._signal("afterRender", e);
                    }
                    if (e & this.CHANGE_TEXT) {
                        this.$changedLines = null;
                        this.$textLayer.update(i);
                        if (this.$showGutter) {
                            this.$gutterLayer.update(i);
                        }
                    } else if (e & this.CHANGE_LINES) {
                        if (this.$updateLines() || e & this.CHANGE_GUTTER && this.$showGutter) {
                            this.$gutterLayer.update(i);
                        }
                    } else if (e & this.CHANGE_TEXT || e & this.CHANGE_GUTTER) {
                        if (this.$showGutter) {
                            this.$gutterLayer.update(i);
                        }
                    } else if (e & this.CHANGE_CURSOR && this.$highlightGutterLine) {
                        this.$gutterLayer.updateLineHighlight(i);
                    }
                    if (e & this.CHANGE_CURSOR) {
                        this.$cursorLayer.update(i);
                        this.$moveTextAreaToCursor();
                    }
                    if (e & (this.CHANGE_MARKER | this.CHANGE_MARKER_FRONT)) {
                        this.$markerFront.update(i);
                    }
                    if (e & (this.CHANGE_MARKER | this.CHANGE_MARKER_BACK)) {
                        this.$markerBack.update(i);
                    }
                    this._signal("afterRender", e);
                } else {
                    this.$changes |= e;
                }
            };
            this.$autosize = function() {
                const e = this.session.getScreenLength() * this.lineHeight;
                const t = this.$maxLines * this.lineHeight;
                let i = Math.min(t, Math.max((this.$minLines || 1) * this.lineHeight, e)) + this.scrollMargin.v + (this.$extraHeight || 0);
                if (this.$horizScroll) {
                    i += this.scrollBarH.getHeight();
                }
                if (this.$maxPixelHeight && i > this.$maxPixelHeight) {
                    i = this.$maxPixelHeight;
                }
                const n = !(i <= 2 * this.lineHeight) && e > t;
                if (i != this.desiredHeight || this.$size.height != this.desiredHeight || n != this.$vScroll) {
                    if (n != this.$vScroll) {
                        this.$vScroll = n;
                        this.scrollBarV.setVisible(n);
                    }
                    const o = this.container.clientWidth;
                    this.container.style.height = `${i}px`;
                    this.$updateCachedSize(true, this.$gutterWidth, o, i);
                    this.desiredHeight = i;
                    this._signal("autosize");
                }
            };
            this.$computeLayerConfig = function() {
                const session = this.session;
                const $size = this.$size;
                const i = $size.height <= 2 * this.lineHeight;
                let maxHeight = this.session.getScreenLength() * this.lineHeight;
                let width = this.$getLongestLine();
                const s = !i && (this.$hScrollBarAlwaysVisible || $size.scrollerWidth - width - 2 * this.$padding < 0);
                const r = this.$horizScroll !== s;
                if (r) {
                    this.$horizScroll = s;
                    this.scrollBarH.setVisible(s);
                }
                const $vScroll = this.$vScroll;
                if (this.$maxLines && this.lineHeight > 1) {
                    this.$autosize();
                }
                let minHeight = $size.scrollerHeight + this.lineHeight;
                const l = !this.$maxLines && this.$scrollPastEnd ? ($size.scrollerHeight - this.lineHeight) * this.$scrollPastEnd : 0;
                maxHeight += l;
                const scrollMargin = this.scrollMargin;
                this.session.setScrollTop(Math.max(-scrollMargin.top, Math.min(this.scrollTop, maxHeight - $size.scrollerHeight + scrollMargin.bottom)));
                this.session.setScrollLeft(Math.max(-scrollMargin.left, Math.min(this.scrollLeft, width + 2 * this.$padding - $size.scrollerWidth + scrollMargin.right)));
                const d = !i && (this.$vScrollBarAlwaysVisible || $size.scrollerHeight - maxHeight + l < 0 || this.scrollTop > scrollMargin.top);
                const u = $vScroll !== d;
                if (u) {
                    this.$vScroll = d;
                    this.scrollBarV.setVisible(d);
                }
                let firstRowScreen;
                let g;
                let offset = this.scrollTop % this.lineHeight;
                const m = Math.ceil(minHeight / this.lineHeight) - 1;
                let b = Math.max(0, Math.round((this.scrollTop - offset) / this.lineHeight));
                let v = b + m;
                const lineHeight = this.lineHeight;
                b = session.screenToDocumentRow(b, 0);
                const x = session.getFoldLine(b);
                if (x) {
                    b = x.start.row;
                }
                firstRowScreen = session.documentToScreenRow(b, 0);
                g = session.getRowLength(b) * lineHeight;
                v = Math.min(session.screenToDocumentRow(v, 0), session.getLength() - 1);
                minHeight = $size.scrollerHeight + session.getRowLength(v) * lineHeight + g;
                offset = this.scrollTop - firstRowScreen * lineHeight;
                let y = 0;
                if (this.layerConfig.width != width || r) {
                    y = this.CHANGE_H_SCROLL;
                }
                if (r || u) {
                    y |= this.$updateCachedSize(true, this.gutterWidth, $size.width, $size.height);
                    this._signal("scrollbarVisibilityChanged");
                    if (u) {
                        width = this.$getLongestLine();
                    }
                }
                this.layerConfig = {
                    width,
                    padding: this.$padding,
                    firstRow: b,
                    firstRowScreen,
                    lastRow: v,
                    lineHeight,
                    characterWidth: this.characterWidth,
                    minHeight,
                    maxHeight,
                    offset,
                    gutterOffset: lineHeight ? Math.max(0, Math.ceil((offset + $size.height - $size.scrollerHeight) / lineHeight)) : 0,
                    height: this.$size.scrollerHeight
                };
                if (this.session.$bidiHandler) {
                    this.session.$bidiHandler.setContentWidth(width - this.$padding);
                }
                return y;
            };
            this.$updateLines = function() {
                if (this.$changedLines) {
                    const e = this.$changedLines.firstRow;
                    const t = this.$changedLines.lastRow;
                    this.$changedLines = null;
                    const i = this.layerConfig;
                    if (!(e > i.lastRow + 1 || t < i.firstRow)) {
                        if (t === Infinity) {
                            if (this.$showGutter) {
                                this.$gutterLayer.update(i);
                            }
                            return void this.$textLayer.update(i);
                        }
                        this.$textLayer.updateLines(i, e, t);
                        return true;
                    }
                }
            };
            this.$getLongestLine = function() {
                let e = this.session.getScreenWidth();
                if (this.showInvisibles && !this.session.$useWrapMode) {
                    e += 1;
                }
                if (this.$textLayer && e > this.$textLayer.MAX_LINE_LENGTH) {
                    e = this.$textLayer.MAX_LINE_LENGTH + 30;
                }
                return Math.max(this.$size.scrollerWidth - 2 * this.$padding, Math.round(e * this.characterWidth));
            };
            this.updateFrontMarkers = function() {
                this.$markerFront.setMarkers(this.session.getMarkers(true));
                this.$loop.schedule(this.CHANGE_MARKER_FRONT);
            };
            this.updateBackMarkers = function() {
                this.$markerBack.setMarkers(this.session.getMarkers());
                this.$loop.schedule(this.CHANGE_MARKER_BACK);
            };
            this.addGutterDecoration = function(e, t) {
                this.$gutterLayer.addGutterDecoration(e, t);
            };
            this.removeGutterDecoration = function(e, t) {
                this.$gutterLayer.removeGutterDecoration(e, t);
            };
            this.updateBreakpoints = function(e) {
                this.$loop.schedule(this.CHANGE_GUTTER);
            };
            this.setAnnotations = function(e) {
                this.$gutterLayer.setAnnotations(e);
                this.$loop.schedule(this.CHANGE_GUTTER);
            };
            this.updateCursor = function() {
                this.$loop.schedule(this.CHANGE_CURSOR);
            };
            this.hideCursor = function() {
                this.$cursorLayer.hideCursor();
            };
            this.showCursor = function() {
                this.$cursorLayer.showCursor();
            };
            this.scrollSelectionIntoView = function(e, t, i) {
                this.scrollCursorIntoView(e, i);
                this.scrollCursorIntoView(t, i);
            };
            this.scrollCursorIntoView = function(e, t, i) {
                if (this.$size.scrollerHeight !== 0) {
                    const n = this.$cursorLayer.getPixelPosition(e);
                    let o = n.left;
                    let s = n.top;
                    const r = i && i.top || 0;
                    const a = i && i.bottom || 0;
                    const c = this.$scrollAnimation ? this.session.getScrollTop() : this.scrollTop;
                    if (c + r > s) {
                        if (t && c + r > s + this.lineHeight) {
                            s -= t * this.$size.scrollerHeight;
                        }
                        if (s === 0) {
                            s = -this.scrollMargin.top;
                        }
                        this.session.setScrollTop(s);
                    } else if (c + this.$size.scrollerHeight - a < s + this.lineHeight) {
                        if (t && c + this.$size.scrollerHeight - a < s - this.lineHeight) {
                            s += t * this.$size.scrollerHeight;
                        }
                        this.session.setScrollTop(s + this.lineHeight + a - this.$size.scrollerHeight);
                    }
                    const l = this.scrollLeft;
                    if (l > o) {
                        if (o < this.$padding + 2 * this.layerConfig.characterWidth) {
                            o = -this.scrollMargin.left;
                        }
                        this.session.setScrollLeft(o);
                    } else if (l + this.$size.scrollerWidth < o + this.characterWidth) {
                        this.session.setScrollLeft(Math.round(o + this.characterWidth - this.$size.scrollerWidth));
                    } else if (l <= this.$padding && o - l < this.characterWidth) {
                        this.session.setScrollLeft(0);
                    }
                }
            };
            this.getScrollTop = function() {
                return this.session.getScrollTop();
            };
            this.getScrollLeft = function() {
                return this.session.getScrollLeft();
            };
            this.getScrollTopRow = function() {
                return this.scrollTop / this.lineHeight;
            };
            this.getScrollBottomRow = function() {
                return Math.max(0, Math.floor((this.scrollTop + this.$size.scrollerHeight) / this.lineHeight) - 1);
            };
            this.scrollToRow = function(e) {
                this.session.setScrollTop(e * this.lineHeight);
            };
            this.alignCursor = function(e, t) {
                if (typeof e === "number") {
                    e = {
                        row: e,
                        column: 0
                    };
                }
                const i = this.$cursorLayer.getPixelPosition(e);
                const n = this.$size.scrollerHeight - this.lineHeight;
                const o = i.top - n * (t || 0);
                this.session.setScrollTop(o);
                return o;
            };
            this.STEPS = 8;
            this.$calcSteps = function(e, t) {
                let i;
                let n;
                let o = 0;
                const STEPS = this.STEPS;
                const r = [];
                for(o = 0; o < STEPS; ++o){
                    r.push((i = o / this.STEPS, n = e, (t - e) * ((i - 1) ** 3 + 1) + n));
                }
                return r;
            };
            this.scrollToLine = function(e, t, i, n) {
                let top = this.$cursorLayer.getPixelPosition({
                    row: e,
                    column: 0
                }).top;
                if (t) {
                    top -= this.$size.scrollerHeight / 2;
                }
                const scrollTop = this.scrollTop;
                this.session.setScrollTop(top);
                if (i !== false) {
                    this.animateScrolling(scrollTop, n);
                }
            };
            this.animateScrolling = function(from, t) {
                let scrollTop = this.scrollTop;
                if (this.$animatedScroll) {
                    const n = this;
                    if (from != scrollTop) {
                        if (this.$scrollAnimation) {
                            const o = this.$scrollAnimation.steps;
                            if (o.length && (from = o[0]) == scrollTop) {
                                return;
                            }
                        }
                        const steps = n.$calcSteps(from, scrollTop);
                        this.$scrollAnimation = {
                            from,
                            to: scrollTop,
                            steps
                        };
                        clearInterval(this.$timer);
                        n.session.setScrollTop(steps.shift());
                        n.session.$scrollTop = scrollTop;
                        this.$timer = setInterval(()=>{
                            if (!n.session) {
                                return clearInterval(n.$timer);
                            }
                            if (steps.length) {
                                n.session.setScrollTop(steps.shift());
                                n.session.$scrollTop = scrollTop;
                            } else if (scrollTop != null) {
                                n.session.$scrollTop = -1;
                                n.session.setScrollTop(scrollTop);
                                scrollTop = null;
                            } else {
                                n.$timer = clearInterval(n.$timer);
                                n.$scrollAnimation = null;
                                if (t) {
                                    t();
                                }
                            }
                        }, 10);
                    }
                }
            };
            this.scrollToY = function(e) {
                if (this.scrollTop !== e) {
                    this.$loop.schedule(this.CHANGE_SCROLL);
                    this.scrollTop = e;
                }
            };
            this.scrollToX = function(e) {
                if (this.scrollLeft !== e) {
                    this.scrollLeft = e;
                }
                this.$loop.schedule(this.CHANGE_H_SCROLL);
            };
            this.scrollTo = function(e, t) {
                this.session.setScrollTop(t);
                this.session.setScrollLeft(t);
            };
            this.scrollBy = function(e, t) {
                if (t) {
                    this.session.setScrollTop(this.session.getScrollTop() + t);
                }
                if (e) {
                    this.session.setScrollLeft(this.session.getScrollLeft() + e);
                }
            };
            this.isScrollableBy = function(e, t) {
                return t < 0 && this.session.getScrollTop() >= 1 - this.scrollMargin.top || t > 0 && this.session.getScrollTop() + this.$size.scrollerHeight - this.layerConfig.maxHeight < -1 + this.scrollMargin.bottom || e < 0 && this.session.getScrollLeft() >= 1 - this.scrollMargin.left || e > 0 && this.session.getScrollLeft() + this.$size.scrollerWidth - this.layerConfig.width < -1 + this.scrollMargin.right || undefined;
            };
            this.pixelToScreenCoordinates = function(e, t) {
                let i;
                if (this.$hasCssTransforms) {
                    i = {
                        top: 0,
                        left: 0
                    };
                    const n = this.$fontMetrics.transformCoordinates([
                        e,
                        t
                    ]);
                    e = n[1] - this.gutterWidth - this.margin.left;
                    t = n[0];
                } else {
                    i = this.scroller.getBoundingClientRect();
                }
                const offsetX = e + this.scrollLeft - i.left - this.$padding;
                const s = offsetX / this.characterWidth;
                const r = Math.floor((t + this.scrollTop - i.top) / this.lineHeight);
                const a = this.$blockCursor ? Math.floor(s) : Math.round(s);
                return {
                    row: r,
                    column: a,
                    side: s - a > 0 ? 1 : -1,
                    offsetX
                };
            };
            this.screenToTextCoordinates = function(e, t) {
                let i;
                if (this.$hasCssTransforms) {
                    i = {
                        top: 0,
                        left: 0
                    };
                    const n = this.$fontMetrics.transformCoordinates([
                        e,
                        t
                    ]);
                    e = n[1] - this.gutterWidth - this.margin.left;
                    t = n[0];
                } else {
                    i = this.scroller.getBoundingClientRect();
                }
                const o = e + this.scrollLeft - i.left - this.$padding;
                const s = o / this.characterWidth;
                const r = this.$blockCursor ? Math.floor(s) : Math.round(s);
                const a = Math.floor((t + this.scrollTop - i.top) / this.lineHeight);
                return this.session.screenToDocumentPosition(a, Math.max(r, 0), o);
            };
            this.textToScreenCoordinates = function(e, t) {
                const i = this.scroller.getBoundingClientRect();
                const n = this.session.documentToScreenPosition(e, t);
                const o = this.$padding + (this.session.$bidiHandler.isBidiRow(n.row, e) ? this.session.$bidiHandler.getPosLeft(n.column) : Math.round(n.column * this.characterWidth));
                const s = n.row * this.lineHeight;
                return {
                    pageX: i.left + o - this.scrollLeft,
                    pageY: i.top + s - this.scrollTop
                };
            };
            this.visualizeFocus = function() {
                o.addCssClass(this.container, "ace_focus");
            };
            this.visualizeBlur = function() {
                o.removeCssClass(this.container, "ace_focus");
            };
            this.showComposition = function(e) {
                this.$composition = e;
                if (!e.cssText) {
                    e.cssText = this.textarea.style.cssText;
                }
                if (e.useTextareaForIME == null) {
                    e.useTextareaForIME = this.$useTextareaForIME;
                }
                if (this.$useTextareaForIME) {
                    o.addCssClass(this.textarea, "ace_composition");
                    this.textarea.style.cssText = "";
                    this.$moveTextAreaToCursor();
                    this.$cursorLayer.element.style.display = "none";
                } else {
                    e.markerId = this.session.addMarker(e.markerRange, "ace_composition_marker", "text");
                }
            };
            this.setCompositionText = function(e) {
                const cursor = this.session.selection.cursor;
                this.addToken(e, "composition_placeholder", cursor.row, cursor.column);
                this.$moveTextAreaToCursor();
            };
            this.hideComposition = function() {
                if (this.$composition) {
                    if (this.$composition.markerId) {
                        this.session.removeMarker(this.$composition.markerId);
                    }
                    o.removeCssClass(this.textarea, "ace_composition");
                    this.textarea.style.cssText = this.$composition.cssText;
                    const e = this.session.selection.cursor;
                    this.removeExtraToken(e.row, e.column);
                    this.$composition = null;
                    this.$cursorLayer.element.style.display = "";
                }
            };
            this.addToken = function(e, type, i, n) {
                const session = this.session;
                session.bgTokenizer.lines[i] = null;
                const s = {
                    type,
                    value: e
                };
                const r = session.getTokens(i);
                if (n == null) {
                    r.push(s);
                } else {
                    let a = 0;
                    for(let c = 0; c < r.length; c++){
                        const l = r[c];
                        if (n <= (a += l.value.length)) {
                            const h = l.value.length - (a - n);
                            const d = l.value.slice(0, h);
                            const u = l.value.slice(h);
                            r.splice(c, 1, {
                                type: l.type,
                                value: d
                            }, s, {
                                type: l.type,
                                value: u
                            });
                            break;
                        }
                    }
                }
                this.updateLines(i, i);
            };
            this.removeExtraToken = function(e, t) {
                this.updateLines(e, e);
            };
            this.setTheme = function(e, t) {
                const _this = this;
                this.$themeId = e;
                _this._dispatchEvent("themeChange", {
                    theme: e
                });
                if (e && typeof e !== "string") {
                    r(e);
                } else {
                    const n = e || this.$options.theme.initialValue;
                    s.loadModule([
                        "theme",
                        n
                    ], r);
                }
                function r(n) {
                    if (_this.$themeId != e) {
                        return t && t();
                    }
                    if (!n || !n.cssClass) {
                        throw new Error(`couldn't load module ${e} or it didn't call define`);
                    }
                    if (n.$id) {
                        _this.$themeId = n.$id;
                    }
                    o.importCssString(n.cssText, n.cssClass, _this.container);
                    if (_this.theme) {
                        o.removeCssClass(_this.container, _this.theme.cssClass);
                    }
                    const s = "padding" in n ? n.padding : "padding" in (_this.theme || {}) ? 4 : _this.$padding;
                    if (_this.$padding && s != _this.$padding) {
                        _this.setPadding(s);
                    }
                    _this.$theme = n.cssClass;
                    _this.theme = n;
                    o.addCssClass(_this.container, n.cssClass);
                    o.setCssClass(_this.container, "ace_dark", n.isDark);
                    if (_this.$size) {
                        _this.$size.width = 0;
                        _this.$updateSizeAsync();
                    }
                    _this._dispatchEvent("themeLoaded", {
                        theme: n
                    });
                    if (t) {
                        t();
                    }
                }
            };
            this.getTheme = function() {
                return this.$themeId;
            };
            this.setStyle = function(e, t) {
                o.setCssClass(this.container, e, t !== false);
            };
            this.unsetStyle = function(e) {
                o.removeCssClass(this.container, e);
            };
            this.setCursorStyle = function(e) {
                o.setStyle(this.scroller.style, "cursor", e);
            };
            this.setMouseCursor = function(e) {
                o.setStyle(this.scroller.style, "cursor", e);
            };
            this.attachToShadowRoot = function() {
                o.importCssString(p, "ace_editor.css", this.container);
            };
            this.destroy = function() {
                this.freeze();
                this.$fontMetrics.destroy();
                this.$cursorLayer.destroy();
                this.removeAllListeners();
                this.container.textContent = "";
            };
        }).call(v.prototype);
        s.defineOptions(v.prototype, "renderer", {
            animatedScroll: {
                initialValue: false
            },
            showInvisibles: {
                set: function(e) {
                    if (this.$textLayer.setShowInvisibles(e)) {
                        this.$loop.schedule(this.CHANGE_TEXT);
                    }
                },
                initialValue: false
            },
            showPrintMargin: {
                set: function() {
                    this.$updatePrintMargin();
                },
                initialValue: true
            },
            printMarginColumn: {
                set: function() {
                    this.$updatePrintMargin();
                },
                initialValue: 80
            },
            printMargin: {
                set: function(e) {
                    if (typeof e === "number") {
                        this.$printMarginColumn = e;
                    }
                    this.$showPrintMargin = !!e;
                    this.$updatePrintMargin();
                },
                get: function() {
                    return this.$showPrintMargin && this.$printMarginColumn;
                }
            },
            showGutter: {
                set: function(e) {
                    this.$gutter.style.display = e ? "block" : "none";
                    this.$loop.schedule(this.CHANGE_FULL);
                    this.onGutterResize();
                },
                initialValue: true
            },
            fadeFoldWidgets: {
                set: function(e) {
                    o.setCssClass(this.$gutter, "ace_fade-fold-widgets", e);
                },
                initialValue: false
            },
            showFoldWidgets: {
                set: function(e) {
                    this.$gutterLayer.setShowFoldWidgets(e);
                    this.$loop.schedule(this.CHANGE_GUTTER);
                },
                initialValue: true
            },
            displayIndentGuides: {
                set: function(e) {
                    if (this.$textLayer.setDisplayIndentGuides(e)) {
                        this.$loop.schedule(this.CHANGE_TEXT);
                    }
                },
                initialValue: true
            },
            highlightGutterLine: {
                set: function(e) {
                    this.$gutterLayer.setHighlightGutterLine(e);
                    this.$loop.schedule(this.CHANGE_GUTTER);
                },
                initialValue: true
            },
            hScrollBarAlwaysVisible: {
                set: function(e) {
                    if (!(this.$hScrollBarAlwaysVisible && this.$horizScroll)) {
                        this.$loop.schedule(this.CHANGE_SCROLL);
                    }
                },
                initialValue: false
            },
            vScrollBarAlwaysVisible: {
                set: function(e) {
                    if (!(this.$vScrollBarAlwaysVisible && this.$vScroll)) {
                        this.$loop.schedule(this.CHANGE_SCROLL);
                    }
                },
                initialValue: false
            },
            fontSize: {
                set: function(e) {
                    if (typeof e === "number") {
                        e += "px";
                    }
                    this.container.style.fontSize = e;
                    this.updateFontSize();
                },
                initialValue: 12
            },
            fontFamily: {
                set: function(e) {
                    this.container.style.fontFamily = e;
                    this.updateFontSize();
                }
            },
            maxLines: {
                set: function(e) {
                    this.updateFull();
                }
            },
            minLines: {
                set: function(e) {
                    if (!(this.$minLines < 562949953421311)) {
                        this.$minLines = 0;
                    }
                    this.updateFull();
                }
            },
            maxPixelHeight: {
                set: function(e) {
                    this.updateFull();
                },
                initialValue: 0
            },
            scrollPastEnd: {
                set: function(e) {
                    e = +e || 0;
                    if (this.$scrollPastEnd != e) {
                        this.$scrollPastEnd = e;
                        this.$loop.schedule(this.CHANGE_SCROLL);
                    }
                },
                initialValue: 0,
                handlesSet: true
            },
            fixedWidthGutter: {
                set: function(e) {
                    this.$gutterLayer.$fixedWidth = !!e;
                    this.$loop.schedule(this.CHANGE_GUTTER);
                }
            },
            theme: {
                set: function(e) {
                    this.setTheme(e);
                },
                get: function() {
                    return this.$themeId || this.theme;
                },
                initialValue: "./theme/textmate",
                handlesSet: true
            },
            hasCssTransforms: {},
            useTextareaForIME: {
                initialValue: !m.isMobile && !m.isIE
            }
        });
        t.VirtualRenderer = v;
    });
    ace.define("ace/worker/worker_client", [
        "require",
        "exports",
        "module",
        "ace/lib/oop",
        "ace/lib/net",
        "ace/lib/event_emitter",
        "ace/config"
    ], function(e, t, i) {
        "use strict";
        const n = e("../lib/oop");
        const o = e("../lib/net");
        const EventEmitter = e("../lib/event_emitter").EventEmitter;
        const r = e("../config");
        function a(e) {
            if (typeof Worker === "undefined") {
                return {
                    postMessage: function() {},
                    terminate: function() {}
                };
            }
            if (r.get("loadWorkerFromBlob")) {
                const t = ((e)=>{
                    const t = `importScripts('${o.qualifyURL(e)}');`;
                    try {
                        return new Blob([
                            t
                        ], {
                            type: "application/javascript"
                        });
                    } catch (e) {
                        const i = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder);
                        i.append(t);
                        return i.getBlob("application/javascript");
                    }
                })(e);
                const i = (window.URL || window.webkitURL).createObjectURL(t);
                return new Worker(i);
            }
            return new Worker(e);
        }
        const c = function(e) {
            if (!e.postMessage) {
                e = this.$createWorkerFromOldConfig(...arguments);
            }
            this.$worker = e;
            this.$sendDeltaQueue = this.$sendDeltaQueue.bind(this);
            this.changeListener = this.changeListener.bind(this);
            this.onMessage = this.onMessage.bind(this);
            this.callbackId = 1;
            this.callbacks = {};
            this.$worker.onmessage = this.onMessage;
        };
        (function() {
            n.implement(this, EventEmitter);
            this.$createWorkerFromOldConfig = function(t, i, classname, o, s) {
                if (e.nameToUrl && !e.toUrl) {
                    e.toUrl = e.nameToUrl;
                }
                if (r.get("packaged") || !e.toUrl) {
                    o = o || r.moduleUrl(i, "worker");
                } else {
                    const c = this.$normalizePath;
                    o = o || c(e.toUrl("ace/worker/worker.js", null, "_"));
                    var tlns = {};
                    t.forEach((t)=>{
                        tlns[t] = c(e.toUrl(t, null, "_").replace(/(\.js)?(\?.*)?$/, ""));
                    });
                }
                this.$worker = a(o);
                if (s) {
                    this.send("importScripts", s);
                }
                this.$worker.postMessage({
                    init: true,
                    tlns,
                    module: i,
                    classname
                });
                return this.$worker;
            };
            this.onMessage = function({ data }) {
                switch(data.type){
                    case "event":
                        this._signal(data.name, {
                            data: data.data
                        });
                        break;
                    case "call":
                        const i = this.callbacks[data.id];
                        if (i) {
                            i(data.data);
                            delete this.callbacks[data.id];
                        }
                        break;
                    case "error":
                        this.reportError(data.data);
                        break;
                    case "log":
                        if (window.console && console.log) {
                            console.log.apply(console, data.data);
                        }
                }
            };
            this.reportError = function(e) {
                if (window.console && console.error) {
                    console.error(e);
                }
            };
            this.$normalizePath = function(e) {
                return o.qualifyURL(e);
            };
            this.terminate = function() {
                this._signal("terminate", {});
                this.deltaQueue = null;
                this.$worker.terminate();
                this.$worker = null;
                if (this.$doc) {
                    this.$doc.off("change", this.changeListener);
                }
                this.$doc = null;
            };
            this.send = function(command, args) {
                this.$worker.postMessage({
                    command,
                    args
                });
            };
            this.call = function(e, t, i) {
                if (i) {
                    const n = this.callbackId++;
                    this.callbacks[n] = i;
                    t.push(n);
                }
                this.send(e, t);
            };
            this.emit = function(e, t) {
                try {
                    if (t.data && t.data.err) {
                        t.data.err = {
                            message: t.data.err.message,
                            stack: t.data.err.stack,
                            code: t.data.err.code
                        };
                    }
                    this.$worker.postMessage({
                        event: e,
                        data: {
                            data: t.data
                        }
                    });
                } catch (error) {
                    console.error(error.stack);
                }
            };
            this.attachToDocument = function(e) {
                if (this.$doc) {
                    this.terminate();
                }
                this.$doc = e;
                this.call("setValue", [
                    e.getValue()
                ]);
                e.on("change", this.changeListener);
            };
            this.changeListener = function(e) {
                if (!this.deltaQueue) {
                    this.deltaQueue = [];
                    setTimeout(this.$sendDeltaQueue, 0);
                }
                if (e.action == "insert") {
                    this.deltaQueue.push(e.start, e.lines);
                } else {
                    this.deltaQueue.push(e.start, e.end);
                }
            };
            this.$sendDeltaQueue = function() {
                const deltaQueue = this.deltaQueue;
                if (deltaQueue) {
                    this.deltaQueue = null;
                    if (deltaQueue.length > 50 && deltaQueue.length > this.$doc.getLength() >> 1) {
                        this.call("setValue", [
                            this.$doc.getValue()
                        ]);
                    } else {
                        this.emit("change", {
                            data: deltaQueue
                        });
                    }
                }
            };
        }).call(c.prototype);
        t.UIWorkerClient = function(e, t, i) {
            let n = null;
            let o = false;
            const a = Object.create(EventEmitter);
            const messageBuffer = [];
            const h = new c({
                messageBuffer,
                terminate: function() {},
                postMessage: function(e) {
                    messageBuffer.push(e);
                    if (n) {
                        if (o) {
                            setTimeout(d);
                        } else {
                            d();
                        }
                    }
                }
            });
            h.setEmitSync = function(e) {
                o = e;
            };
            var d = function() {
                const e = messageBuffer.shift();
                if (e.command) {
                    n[e.command].apply(n, e.args);
                } else if (e.event) {
                    a._signal(e.event, e.data);
                }
            };
            a.postMessage = function(e) {
                h.onMessage({
                    data: e
                });
            };
            a.callback = function(e, id) {
                this.postMessage({
                    type: "call",
                    id,
                    data: e
                });
            };
            a.emit = function(name, t) {
                this.postMessage({
                    type: "event",
                    name,
                    data: t
                });
            };
            r.loadModule([
                "worker",
                t
            ], function(e) {
                for(n = new e[i](a); messageBuffer.length;){
                    d();
                }
            });
            return h;
        };
        t.WorkerClient = c;
        t.createWorker = a;
    });
    ace.define("ace/placeholder", [
        "require",
        "exports",
        "module",
        "ace/range",
        "ace/lib/event_emitter",
        "ace/lib/oop"
    ], function(e, t, i) {
        "use strict";
        const Range = e("./range").Range;
        const EventEmitter = e("./lib/event_emitter").EventEmitter;
        const s = e("./lib/oop");
        const r = function(e, t, i, n, o, s) {
            const _this = this;
            this.length = t;
            this.session = e;
            this.doc = e.getDocument();
            this.mainClass = o;
            this.othersClass = s;
            this.$onUpdate = this.onUpdate.bind(this);
            this.doc.on("change", this.$onUpdate);
            this.$others = n;
            this.$onCursorChange = function() {
                setTimeout(()=>{
                    _this.onCursorChange();
                });
            };
            this.$pos = i;
            const a = e.getUndoManager().$undoStack || e.getUndoManager().$undostack || {
                length: -1
            };
            this.$undoStackDepth = a.length;
            this.setup();
            e.selection.on("changeCursor", this.$onCursorChange);
        };
        (function() {
            s.implement(this, EventEmitter);
            this.setup = function() {
                const _this = this;
                const doc = this.doc;
                const session = this.session;
                this.selectionBefore = session.selection.toJSON();
                if (session.selection.inMultiSelectMode) {
                    session.selection.toSingleRange();
                }
                this.pos = doc.createAnchor(this.$pos.row, this.$pos.column);
                const pos = this.pos;
                pos.$insertRight = true;
                pos.detach();
                pos.markerId = session.addMarker(new Range(pos.row, pos.column, pos.row, pos.column + this.length), this.mainClass, null, false);
                this.others = [];
                this.$others.forEach((i)=>{
                    const n = doc.createAnchor(i.row, i.column);
                    n.$insertRight = true;
                    n.detach();
                    _this.others.push(n);
                });
                session.setUndoSelect(false);
            };
            this.showOtherMarkers = function() {
                if (!this.othersActive) {
                    const e = this.session;
                    const t = this;
                    this.othersActive = true;
                    this.others.forEach((i)=>{
                        i.markerId = e.addMarker(new Range(i.row, i.column, i.row, i.column + t.length), t.othersClass, null, false);
                    });
                }
            };
            this.hideOtherMarkers = function() {
                if (this.othersActive) {
                    this.othersActive = false;
                    for(let e = 0; e < this.others.length; e++){
                        this.session.removeMarker(this.others[e].markerId);
                    }
                }
            };
            this.onUpdate = function(e) {
                if (this.$updating) {
                    return this.updateAnchors(e);
                }
                const t = e;
                if (t.start.row === t.end.row && t.start.row === this.pos.row) {
                    this.$updating = true;
                    const i = e.action === "insert" ? t.end.column - t.start.column : t.start.column - t.end.column;
                    const o = t.start.column >= this.pos.column && t.start.column <= this.pos.column + this.length + 1;
                    const s = t.start.column - this.pos.column;
                    this.updateAnchors(e);
                    if (o) {
                        this.length += i;
                    }
                    if (o && !this.session.$fromUndo) {
                        if (e.action === "insert") {
                            for(var r = this.others.length - 1; r >= 0; r--){
                                var a = {
                                    row: (c = this.others[r]).row,
                                    column: c.column + s
                                };
                                this.doc.insertMergedLines(a, e.lines);
                            }
                        } else if (e.action === "remove") {
                            for(r = this.others.length - 1; r >= 0; r--){
                                var c;
                                a = {
                                    row: (c = this.others[r]).row,
                                    column: c.column + s
                                };
                                this.doc.remove(new Range(a.row, a.column, a.row, a.column - i));
                            }
                        }
                    }
                    this.$updating = false;
                    this.updateMarkers();
                }
            };
            this.updateAnchors = function(e) {
                this.pos.onChange(e);
                for(let t = this.others.length; t--;){
                    this.others[t].onChange(e);
                }
                this.updateMarkers();
            };
            this.updateMarkers = function() {
                if (!this.$updating) {
                    const e = this;
                    const t = this.session;
                    const i = (i, o)=>{
                        t.removeMarker(i.markerId);
                        i.markerId = t.addMarker(new Range(i.row, i.column, i.row, i.column + e.length), o, null, false);
                    };
                    i(this.pos, this.mainClass);
                    for(let o = this.others.length; o--;){
                        i(this.others[o], this.othersClass);
                    }
                }
            };
            this.onCursorChange = function(e) {
                if (!this.$updating && this.session) {
                    const t = this.session.selection.getCursor();
                    if (t.row === this.pos.row && t.column >= this.pos.column && t.column <= this.pos.column + this.length) {
                        this.showOtherMarkers();
                        this._emit("cursorEnter", e);
                    } else {
                        this.hideOtherMarkers();
                        this._emit("cursorLeave", e);
                    }
                }
            };
            this.detach = function() {
                this.session.removeMarker(this.pos && this.pos.markerId);
                this.hideOtherMarkers();
                this.doc.off("change", this.$onUpdate);
                this.session.selection.off("changeCursor", this.$onCursorChange);
                this.session.setUndoSelect(true);
                this.session = null;
            };
            this.cancel = function() {
                if (this.$undoStackDepth !== -1) {
                    const e = this.session.getUndoManager();
                    for(let t = (e.$undoStack || e.$undostack).length - this.$undoStackDepth, i = 0; i < t; i++){
                        e.undo(this.session, true);
                    }
                    if (this.selectionBefore) {
                        this.session.selection.fromJSON(this.selectionBefore);
                    }
                }
            };
        }).call(r.prototype);
        t.PlaceHolder = r;
    });
    ace.define("ace/mouse/multi_select_handler", [
        "require",
        "exports",
        "module",
        "ace/lib/event",
        "ace/lib/useragent"
    ], function(e, t, i) {
        const n = e("../lib/event");
        const o = e("../lib/useragent");
        function s(e, t) {
            return e.row == t.row && e.column == t.column;
        }
        t.onMouseDown = function(e) {
            const e_domEvent = e.domEvent;
            const { altKey, shiftKey, ctrlKey } = e_domEvent;
            const c = e.getAccelKey();
            let l = e.getButton();
            if (ctrlKey && o.isMac) {
                l = e_domEvent.button;
            }
            if (e.editor.inMultiSelectMode && l == 2) {
                e.editor.textInput.onContextMenu(e.domEvent);
            } else if (ctrlKey || altKey || c) {
                if (l === 0) {
                    let h;
                    const d = e.editor;
                    const { selection, inMultiSelectMode } = d;
                    const g = e.getDocumentPosition();
                    const p = selection.getCursor();
                    const m = e.inSelection() || selection.isEmpty() && s(g, p);
                    let b = e.x;
                    let v = e.y;
                    const w = d.session;
                    let x = d.renderer.pixelToScreenCoordinates(b, v);
                    let y = x;
                    if (d.$mouseHandler.$enableJumpToDef) {
                        if (ctrlKey && altKey || c && altKey) {
                            h = shiftKey ? "block" : "add";
                        } else if (altKey && d.$blockSelectEnabled) {
                            h = "block";
                        }
                    } else if (c && !altKey) {
                        h = "add";
                        if (!inMultiSelectMode && shiftKey) {
                            return;
                        }
                    } else {
                        if (altKey && d.$blockSelectEnabled) {
                            h = "block";
                        }
                    }
                    if (h && o.isMac && e_domEvent.ctrlKey) {
                        d.$mouseHandler.cancelContextMenu();
                    }
                    if (h == "add") {
                        if (!inMultiSelectMode && m) {
                            return;
                        }
                        if (!inMultiSelectMode) {
                            var $ = selection.toOrientedRange();
                            d.addSelectionMarker($);
                        }
                        let S = selection.rangeList.rangeAtPoint(g);
                        d.inVirtualSelectionMode = true;
                        if (shiftKey) {
                            S = null;
                            $ = selection.ranges[0] || $;
                            d.removeSelectionMarker($);
                        }
                        d.once("mouseup", function() {
                            const e = selection.toOrientedRange();
                            if (S && e.isEmpty() && s(S.cursor, e.cursor)) {
                                selection.substractPoint(e.cursor);
                            } else {
                                if (shiftKey) {
                                    selection.substractPoint($.cursor);
                                } else if ($) {
                                    d.removeSelectionMarker($);
                                    selection.addRange($);
                                }
                                selection.addRange(e);
                            }
                            d.inVirtualSelectionMode = false;
                        });
                    } else if (h == "block") {
                        let C;
                        e.stop();
                        d.inVirtualSelectionMode = true;
                        let k = [];
                        const M = function() {
                            const e = d.renderer.pixelToScreenCoordinates(b, v);
                            const t = w.screenToDocumentPosition(e.row, e.column, e.offsetX);
                            if (!(s(y, e) && s(t, selection.lead))) {
                                y = e;
                                d.selection.moveToPosition(t);
                                d.renderer.scrollCursorIntoView();
                                d.removeSelectionMarkers(k);
                                k = selection.rectangularRangeBlock(y, x);
                                if (d.$mouseHandler.$clickSelection && k.length == 1 && k[0].isEmpty()) {
                                    k[0] = d.$mouseHandler.$clickSelection.clone();
                                }
                                k.forEach(d.addSelectionMarker, d);
                                d.updateSelectionMarkers();
                            }
                        };
                        if (inMultiSelectMode && !c) {
                            selection.toSingleRange();
                        } else if (!inMultiSelectMode && c) {
                            C = selection.toOrientedRange();
                            d.addSelectionMarker(C);
                        }
                        if (shiftKey) {
                            x = w.documentToScreenPosition(selection.lead);
                        } else {
                            selection.moveToPosition(g);
                        }
                        y = {
                            row: -1,
                            column: -1
                        };
                        const A = M;
                        n.capture(d.container, function(e) {
                            b = e.clientX;
                            v = e.clientY;
                        }, function(e) {
                            M();
                            clearInterval(L);
                            d.removeSelectionMarkers(k);
                            if (!k.length) {
                                k = [
                                    selection.toOrientedRange()
                                ];
                            }
                            if (C) {
                                d.removeSelectionMarker(C);
                                selection.toSingleRange(C);
                            }
                            for(let t = 0; t < k.length; t++){
                                selection.addRange(k[t]);
                            }
                            d.inVirtualSelectionMode = false;
                            d.$mouseHandler.$clickSelection = null;
                        });
                        var L = setInterval(()=>{
                            A();
                        }, 20);
                        return e.preventDefault();
                    }
                }
            } else {
                if (l === 0 && e.editor.inMultiSelectMode) {
                    e.editor.exitMultiSelectMode();
                }
            }
        };
    });
    ace.define("ace/commands/multi_select_commands", [
        "require",
        "exports",
        "module",
        "ace/keyboard/hash_handler"
    ], function(e, t, i) {
        t.defaultCommands = [
            {
                name: "addCursorAbove",
                description: "Add cursor above",
                exec: function(e) {
                    e.selectMoreLines(-1);
                },
                bindKey: {
                    win: "Ctrl-Alt-Up",
                    mac: "Ctrl-Alt-Up"
                },
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "addCursorBelow",
                description: "Add cursor below",
                exec: function(e) {
                    e.selectMoreLines(1);
                },
                bindKey: {
                    win: "Ctrl-Alt-Down",
                    mac: "Ctrl-Alt-Down"
                },
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "addCursorAboveSkipCurrent",
                description: "Add cursor above (skip current)",
                exec: function(e) {
                    e.selectMoreLines(-1, true);
                },
                bindKey: {
                    win: "Ctrl-Alt-Shift-Up",
                    mac: "Ctrl-Alt-Shift-Up"
                },
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "addCursorBelowSkipCurrent",
                description: "Add cursor below (skip current)",
                exec: function(e) {
                    e.selectMoreLines(1, true);
                },
                bindKey: {
                    win: "Ctrl-Alt-Shift-Down",
                    mac: "Ctrl-Alt-Shift-Down"
                },
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "selectMoreBefore",
                description: "Select more before",
                exec: function(e) {
                    e.selectMore(-1);
                },
                bindKey: {
                    win: "Ctrl-Alt-Left",
                    mac: "Ctrl-Alt-Left"
                },
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "selectMoreAfter",
                description: "Select more after",
                exec: function(e) {
                    e.selectMore(1);
                },
                bindKey: {
                    win: "Ctrl-Alt-Right",
                    mac: "Ctrl-Alt-Right"
                },
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "selectNextBefore",
                description: "Select next before",
                exec: function(e) {
                    e.selectMore(-1, true);
                },
                bindKey: {
                    win: "Ctrl-Alt-Shift-Left",
                    mac: "Ctrl-Alt-Shift-Left"
                },
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "selectNextAfter",
                description: "Select next after",
                exec: function(e) {
                    e.selectMore(1, true);
                },
                bindKey: {
                    win: "Ctrl-Alt-Shift-Right",
                    mac: "Ctrl-Alt-Shift-Right"
                },
                scrollIntoView: "cursor",
                readOnly: true
            },
            {
                name: "toggleSplitSelectionIntoLines",
                description: "Split into lines",
                exec: function(e) {
                    if (e.multiSelect.rangeCount > 1) {
                        e.multiSelect.joinSelections();
                    } else {
                        e.multiSelect.splitIntoLines();
                    }
                },
                bindKey: {
                    win: "Ctrl-Alt-L",
                    mac: "Ctrl-Alt-L"
                },
                readOnly: true
            },
            {
                name: "splitSelectionIntoLines",
                description: "Split into lines",
                exec: function(e) {
                    e.multiSelect.splitIntoLines();
                },
                readOnly: true
            },
            {
                name: "alignCursors",
                description: "Align cursors",
                exec: function(e) {
                    e.alignCursors();
                },
                bindKey: {
                    win: "Ctrl-Alt-A",
                    mac: "Ctrl-Alt-A"
                },
                scrollIntoView: "cursor"
            },
            {
                name: "findAll",
                description: "Find all",
                exec: function(e) {
                    e.findAll();
                },
                bindKey: {
                    win: "Ctrl-Alt-K",
                    mac: "Ctrl-Alt-G"
                },
                scrollIntoView: "cursor",
                readOnly: true
            }
        ];
        t.multiSelectCommands = [
            {
                name: "singleSelection",
                description: "Single selection",
                bindKey: "esc",
                exec: function(e) {
                    e.exitMultiSelectMode();
                },
                scrollIntoView: "cursor",
                readOnly: true,
                isAvailable: function(e) {
                    return e && e.inMultiSelectMode;
                }
            }
        ];
        const HashHandler = e("../keyboard/hash_handler").HashHandler;
        t.keyboardHandler = new HashHandler(t.multiSelectCommands);
    });
    ace.define("ace/multi_select", [
        "require",
        "exports",
        "module",
        "ace/range_list",
        "ace/range",
        "ace/selection",
        "ace/mouse/multi_select_handler",
        "ace/lib/event",
        "ace/lib/lang",
        "ace/commands/multi_select_commands",
        "ace/search",
        "ace/edit_session",
        "ace/editor",
        "ace/config"
    ], function(e, t, i) {
        const RangeList = e("./range_list").RangeList;
        const Range = e("./range").Range;
        const Selection = e("./selection").Selection;
        const onMouseDown = e("./mouse/multi_select_handler").onMouseDown;
        const a = e("./lib/event");
        const c = e("./lib/lang");
        const l = e("./commands/multi_select_commands");
        t.commands = l.defaultCommands.concat(l.multiSelectCommands);
        const h = new (0, e("./search").Search);
        const EditSession = e("./edit_session").EditSession;
        (function() {
            this.getSelectionMarkers = function() {
                return this.$selectionMarkers;
            };
        }).call(EditSession.prototype);
        (function() {
            this.ranges = null;
            this.rangeList = null;
            this.addRange = function(e, t) {
                if (e) {
                    if (!this.inMultiSelectMode && this.rangeCount === 0) {
                        const i = this.toOrientedRange();
                        this.rangeList.add(i);
                        this.rangeList.add(e);
                        if (this.rangeList.ranges.length != 2) {
                            this.rangeList.removeAll();
                            return t || this.fromOrientedRange(e);
                        }
                        this.rangeList.removeAll();
                        this.rangeList.add(i);
                        this.$onAddRange(i);
                    }
                    if (!e.cursor) {
                        e.cursor = e.end;
                    }
                    const n = this.rangeList.add(e);
                    this.$onAddRange(e);
                    if (n.length) {
                        this.$onRemoveRange(n);
                    }
                    if (this.rangeCount > 1 && !this.inMultiSelectMode) {
                        this._signal("multiSelect");
                        this.inMultiSelectMode = true;
                        this.session.$undoSelect = false;
                        this.rangeList.attach(this.session);
                    }
                    return t || this.fromOrientedRange(e);
                }
            };
            this.toSingleRange = function(e) {
                e = e || this.ranges[0];
                const t = this.rangeList.removeAll();
                if (t.length) {
                    this.$onRemoveRange(t);
                }
                if (e) {
                    this.fromOrientedRange(e);
                }
            };
            this.substractPoint = function(e) {
                const t = this.rangeList.substractPoint(e);
                if (t) {
                    this.$onRemoveRange(t);
                    return t[0];
                }
            };
            this.mergeOverlappingRanges = function() {
                const e = this.rangeList.merge();
                if (e.length) {
                    this.$onRemoveRange(e);
                }
            };
            this.$onAddRange = function(range) {
                this.rangeCount = this.rangeList.ranges.length;
                this.ranges.unshift(range);
                this._signal("addRange", {
                    range
                });
            };
            this.$onRemoveRange = function(e) {
                this.rangeCount = this.rangeList.ranges.length;
                if (this.rangeCount == 1 && this.inMultiSelectMode) {
                    var t = this.rangeList.ranges.pop();
                    e.push(t);
                    this.rangeCount = 0;
                }
                for(let i = e.length; i--;){
                    const n = this.ranges.indexOf(e[i]);
                    this.ranges.splice(n, 1);
                }
                this._signal("removeRange", {
                    ranges: e
                });
                if (this.rangeCount === 0 && this.inMultiSelectMode) {
                    this.inMultiSelectMode = false;
                    this._signal("singleSelect");
                    this.session.$undoSelect = true;
                    this.rangeList.detach(this.session);
                }
                if ((t = t || this.ranges[0]) && !t.isEqual(this.getRange())) {
                    this.fromOrientedRange(t);
                }
            };
            this.$initRangeList = function() {
                if (!this.rangeList) {
                    this.rangeList = new RangeList;
                    this.ranges = [];
                    this.rangeCount = 0;
                }
            };
            this.getAllRanges = function() {
                if (this.rangeCount) {
                    return this.rangeList.ranges.concat();
                }
                return [
                    this.getRange()
                ];
            };
            this.splitIntoLines = function() {
                for(var e = this.ranges.length ? this.ranges : [
                    this.getRange()
                ], t = [], i = 0; i < e.length; i++){
                    const n = e[i];
                    let s = n.start.row;
                    const r = n.end.row;
                    if (s === r) {
                        t.push(n.clone());
                    } else {
                        for(t.push(new Range(s, n.start.column, s, this.session.getLine(s).length)); ++s < r;){
                            t.push(this.getLineRange(s, true));
                        }
                        t.push(new Range(r, 0, r, n.end.column));
                    }
                    if (!(i != 0 || this.isBackwards())) {
                        t = t.reverse();
                    }
                }
                this.toSingleRange();
                for(i = t.length; i--;){
                    this.addRange(t[i]);
                }
            };
            this.joinSelections = function() {
                const ranges = this.rangeList.ranges;
                const t = ranges[ranges.length - 1];
                const i = Range.fromPoints(ranges[0].start, t.end);
                this.toSingleRange();
                this.setSelectionRange(i, t.cursor == t.start);
            };
            this.toggleBlockSelection = function() {
                if (this.rangeCount > 1) {
                    const e = this.rangeList.ranges;
                    const t = e[e.length - 1];
                    const i = Range.fromPoints(e[0].start, t.end);
                    this.toSingleRange();
                    this.setSelectionRange(i, t.cursor == t.start);
                } else {
                    const n = this.session.documentToScreenPosition(this.cursor);
                    const s = this.session.documentToScreenPosition(this.anchor);
                    this.rectangularRangeBlock(n, s).forEach(this.addRange, this);
                }
            };
            this.rectangularRangeBlock = function(e, t, i) {
                const n = [];
                const s = e.column < t.column;
                if (s) {
                    var r = e.column;
                    var a = t.column;
                    var c = e.offsetX;
                    var l = t.offsetX;
                } else {
                    r = t.column;
                    a = e.column;
                    c = t.offsetX;
                    l = e.offsetX;
                }
                let h;
                let d;
                let u;
                const f = e.row < t.row;
                if (f) {
                    var g = e.row;
                    var p = t.row;
                } else {
                    g = t.row;
                    p = e.row;
                }
                if (r < 0) {
                    r = 0;
                }
                if (g < 0) {
                    g = 0;
                }
                if (g == p) {
                    i = true;
                }
                for(let m = g; m <= p; m++){
                    const b = Range.fromPoints(this.session.screenToDocumentPosition(m, r, c), this.session.screenToDocumentPosition(m, a, l));
                    if (b.isEmpty()) {
                        if (h && (u = h, (d = b.end).row == u.row && d.column == u.column)) {
                            break;
                        }
                        h = b.end;
                    }
                    b.cursor = s ? b.start : b.end;
                    n.push(b);
                }
                if (f) {
                    n.reverse();
                }
                if (!i) {
                    for(var v = n.length - 1; n[v].isEmpty() && v > 0;){
                        v--;
                    }
                    if (v > 0) {
                        for(var w = 0; n[w].isEmpty();){
                            w++;
                        }
                    }
                    for(let x = v; x >= w; x--){
                        if (n[x].isEmpty()) {
                            n.splice(x, 1);
                        }
                    }
                }
                return n;
            };
        }).call(Selection.prototype);
        const Editor = e("./editor").Editor;
        function f(e) {
            if (!e.$multiselectOnSessionChange) {
                e.$onAddRange = e.$onAddRange.bind(e);
                e.$onRemoveRange = e.$onRemoveRange.bind(e);
                e.$onMultiSelect = e.$onMultiSelect.bind(e);
                e.$onSingleSelect = e.$onSingleSelect.bind(e);
                e.$multiselectOnSessionChange = t.onSessionChange.bind(e);
                e.$checkMultiselectChange = e.$checkMultiselectChange.bind(e);
                e.$multiselectOnSessionChange(e);
                e.on("changeSession", e.$multiselectOnSessionChange);
                e.on("mousedown", onMouseDown);
                e.commands.addCommands(l.defaultCommands);
                ((e)=>{
                    if (e.textInput) {
                        const t = e.textInput.getElement();
                        var i = false;
                        a.addListener(t, "keydown", function(t) {
                            const o = t.keyCode == 18 && !(t.ctrlKey || t.shiftKey || t.metaKey);
                            if (e.$blockSelectEnabled && o) {
                                if (!i) {
                                    e.renderer.setMouseCursor("crosshair");
                                    i = true;
                                }
                            } else if (i) {
                                n();
                            }
                        }, e);
                        a.addListener(t, "keyup", n, e);
                        a.addListener(t, "blur", n, e);
                    }
                    function n(t) {
                        if (i) {
                            e.renderer.setMouseCursor("");
                            i = false;
                        }
                    }
                })(e);
            }
        }
        (function() {
            this.updateSelectionMarkers = function() {
                this.renderer.updateCursor();
                this.renderer.updateBackMarkers();
            };
            this.addSelectionMarker = function(e) {
                if (!e.cursor) {
                    e.cursor = e.end;
                }
                const t = this.getSelectionStyle();
                e.marker = this.session.addMarker(e, "ace_selection", t);
                this.session.$selectionMarkers.push(e);
                this.session.selectionMarkerCount = this.session.$selectionMarkers.length;
                return e;
            };
            this.removeSelectionMarker = function(e) {
                if (e.marker) {
                    this.session.removeMarker(e.marker);
                    const t = this.session.$selectionMarkers.indexOf(e);
                    if (t != -1) {
                        this.session.$selectionMarkers.splice(t, 1);
                    }
                    this.session.selectionMarkerCount = this.session.$selectionMarkers.length;
                }
            };
            this.removeSelectionMarkers = function(e) {
                const $selectionMarkers = this.session.$selectionMarkers;
                for(let i = e.length; i--;){
                    const n = e[i];
                    if (n.marker) {
                        this.session.removeMarker(n.marker);
                        const o = $selectionMarkers.indexOf(n);
                        if (o != -1) {
                            $selectionMarkers.splice(o, 1);
                        }
                    }
                }
                this.session.selectionMarkerCount = $selectionMarkers.length;
            };
            this.$onAddRange = function(e) {
                this.addSelectionMarker(e.range);
                this.renderer.updateCursor();
                this.renderer.updateBackMarkers();
            };
            this.$onRemoveRange = function(e) {
                this.removeSelectionMarkers(e.ranges);
                this.renderer.updateCursor();
                this.renderer.updateBackMarkers();
            };
            this.$onMultiSelect = function(e) {
                if (!this.inMultiSelectMode) {
                    this.inMultiSelectMode = true;
                    this.setStyle("ace_multiselect");
                    this.keyBinding.addKeyboardHandler(l.keyboardHandler);
                    this.commands.setDefaultHandler("exec", this.$onMultiSelectExec);
                    this.renderer.updateCursor();
                    this.renderer.updateBackMarkers();
                }
            };
            this.$onSingleSelect = function(e) {
                if (!this.session.multiSelect.inVirtualMode) {
                    this.inMultiSelectMode = false;
                    this.unsetStyle("ace_multiselect");
                    this.keyBinding.removeKeyboardHandler(l.keyboardHandler);
                    this.commands.removeDefaultHandler("exec", this.$onMultiSelectExec);
                    this.renderer.updateCursor();
                    this.renderer.updateBackMarkers();
                    this._emit("changeSelection");
                }
            };
            this.$onMultiSelectExec = function(e) {
                const { command, editor } = e;
                if (editor.multiSelect) {
                    if (command.multiSelectAction) {
                        if (command.multiSelectAction == "forEach") {
                            n = editor.forEachSelection(command, e.args);
                        } else if (command.multiSelectAction == "forEachLine") {
                            n = editor.forEachSelection(command, e.args, true);
                        } else if (command.multiSelectAction == "single") {
                            editor.exitMultiSelectMode();
                            n = command.exec(editor, e.args || {});
                        } else {
                            n = command.multiSelectAction(editor, e.args || {});
                        }
                    } else {
                        var n = command.exec(editor, e.args || {});
                        editor.multiSelect.addRange(editor.multiSelect.toOrientedRange());
                        editor.multiSelect.mergeOverlappingRanges();
                    }
                    return n;
                }
            };
            this.forEachSelection = function(e, t, i) {
                if (!this.inVirtualSelectionMode) {
                    let n;
                    const o = i && i.keepOrder;
                    const r = i == 1 || i && i.$byLines;
                    const a = this.session;
                    const c = this.selection;
                    const l = c.rangeList;
                    const h = (o ? c : l).ranges;
                    if (!h.length) {
                        if (e.exec) {
                            return e.exec(this, t || {});
                        }
                        return e(this, t || {});
                    }
                    const d = c._eventRegistry;
                    c._eventRegistry = {};
                    const u = new Selection(a);
                    this.inVirtualSelectionMode = true;
                    for(let f = h.length; f--;){
                        if (r) {
                            while(f > 0 && h[f].start.row == h[f - 1].end.row){
                                f--;
                            }
                        }
                        u.fromOrientedRange(h[f]);
                        u.index = f;
                        this.selection = a.selection = u;
                        const g = e.exec ? e.exec(this, t || {}) : e(this, t || {});
                        if (!(n || g === undefined)) {
                            n = g;
                        }
                        u.toOrientedRange(h[f]);
                    }
                    u.detach();
                    this.selection = a.selection = c;
                    this.inVirtualSelectionMode = false;
                    c._eventRegistry = d;
                    c.mergeOverlappingRanges();
                    if (c.ranges[0]) {
                        c.fromOrientedRange(c.ranges[0]);
                    }
                    const p = this.renderer.$scrollAnimation;
                    this.onCursorChange();
                    this.onSelectionChange();
                    if (p && p.from == p.to) {
                        this.renderer.animateScrolling(p.from);
                    }
                    return n;
                }
            };
            this.exitMultiSelectMode = function() {
                if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                    this.multiSelect.toSingleRange();
                }
            };
            this.getSelectedText = function() {
                let e = "";
                if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                    for(var t = this.multiSelect.rangeList.ranges, i = [], n = 0; n < t.length; n++){
                        i.push(this.session.getTextRange(t[n]));
                    }
                    const o = this.session.getDocument().getNewLineCharacter();
                    if ((e = i.join(o)).length == (i.length - 1) * o.length) {
                        e = "";
                    }
                } else {
                    if (!this.selection.isEmpty()) {
                        e = this.session.getTextRange(this.getSelectionRange());
                    }
                }
                return e;
            };
            this.$checkMultiselectChange = function(e, t) {
                if (this.inMultiSelectMode && !this.inVirtualSelectionMode) {
                    const i = this.multiSelect.ranges[0];
                    if (this.multiSelect.isEmpty() && t == this.multiSelect.anchor) {
                        return;
                    }
                    const n = t == this.multiSelect.anchor ? i.cursor == i.start ? i.end : i.start : i.cursor;
                    if (n.row != t.row || this.session.$clipPositionToDocument(n.row, n.column).column != t.column) {
                        this.multiSelect.toSingleRange(this.multiSelect.toOrientedRange());
                    } else {
                        this.multiSelect.mergeOverlappingRanges();
                    }
                }
            };
            this.findAll = function(e, t, i) {
                t = t || {};
                t.needle = e || t.needle;
                if (t.needle == null) {
                    var n = this.selection.isEmpty() ? this.selection.getWordRange() : this.selection.getRange();
                    t.needle = this.session.getTextRange(n);
                }
                this.$search.set(t);
                const o = this.$search.findAll(this.session);
                if (!o.length) {
                    return 0;
                }
                const multiSelect = this.multiSelect;
                if (!i) {
                    multiSelect.toSingleRange(o[0]);
                }
                for(let r = o.length; r--;){
                    multiSelect.addRange(o[r], true);
                }
                if (n && multiSelect.rangeList.rangeAtPoint(n.start)) {
                    multiSelect.addRange(n, true);
                }
                return o.length;
            };
            this.selectMoreLines = function(e, t) {
                const i = this.selection.toOrientedRange();
                const n = i.cursor == i.end;
                const s = this.session.documentToScreenPosition(i.cursor);
                if (this.selection.$desiredColumn) {
                    s.column = this.selection.$desiredColumn;
                }
                let r;
                const a = this.session.screenToDocumentPosition(s.row + e, s.column);
                if (i.isEmpty()) {
                    l = a;
                } else {
                    const c = this.session.documentToScreenPosition(n ? i.end : i.start);
                    var l = this.session.screenToDocumentPosition(c.row + e, c.column);
                }
                if (n) {
                    r = Range.fromPoints(a, l);
                    r.cursor = r.start;
                } else {
                    r = Range.fromPoints(l, a);
                    r.cursor = r.end;
                }
                r.desiredColumn = s.column;
                if (this.selection.inMultiSelectMode) {
                    if (t) var h = i.cursor;
                } else {
                    this.selection.addRange(i);
                }
                this.selection.addRange(r);
                if (h) {
                    this.selection.substractPoint(h);
                }
            };
            this.transposeSelections = function(e) {
                const session = this.session;
                const t_multiSelect = session.multiSelect;
                const i_ranges = t_multiSelect.ranges;
                for(var o = i_ranges.length; o--;){
                    if ((a = i_ranges[o]).isEmpty()) {
                        var s = session.getWordRange(a.start.row, a.start.column);
                        a.start.row = s.start.row;
                        a.start.column = s.start.column;
                        a.end.row = s.end.row;
                        a.end.column = s.end.column;
                    }
                }
                t_multiSelect.mergeOverlappingRanges();
                const r = [];
                for(o = i_ranges.length; o--;){
                    var a = i_ranges[o];
                    r.unshift(session.getTextRange(a));
                }
                if (e < 0) {
                    r.unshift(r.pop());
                } else {
                    r.push(r.shift());
                }
                for(o = i_ranges.length; o--;){
                    s = (a = i_ranges[o]).clone();
                    session.replace(a, r[o]);
                    a.start.row = s.start.row;
                    a.start.column = s.start.column;
                }
                t_multiSelect.fromOrientedRange(t_multiSelect.ranges[0]);
            };
            this.selectMore = function(e, t, i) {
                const session = this.session;
                let o = session.multiSelect.toOrientedRange();
                if (!o.isEmpty() || ((o = session.getWordRange(o.start.row, o.start.column)).cursor = e == -1 ? o.start : o.end, this.multiSelect.addRange(o), !i)) {
                    const s = session.getTextRange(o);
                    const r = ((session_1, t, i)=>{
                        h.$options.wrap = true;
                        h.$options.needle = t;
                        h.$options.backwards = i == -1;
                        return h.find(session_1);
                    })(session, s, e);
                    if (r) {
                        r.cursor = e == -1 ? r.start : r.end;
                        this.session.unfold(r);
                        this.multiSelect.addRange(r);
                        this.renderer.scrollCursorIntoView(null, 0.5);
                    }
                    if (t) {
                        this.multiSelect.substractPoint(o.cursor);
                    }
                }
            };
            this.alignCursors = function() {
                const session = this.session;
                const e_multiSelect = session.multiSelect;
                const t_ranges = e_multiSelect.ranges;
                let n = -1;
                const s = t_ranges.filter((e)=>{
                    if (e.cursor.row == n) {
                        return true;
                    }
                    n = e.cursor.row;
                });
                if (t_ranges.length && s.length != t_ranges.length - 1) {
                    s.forEach((e)=>{
                        e_multiSelect.substractPoint(e.cursor);
                    });
                    let r = 0;
                    let a = Infinity;
                    const l = t_ranges.map(({ cursor })=>{
                        let n = session.getLine(cursor.row).substr(cursor.column).search(/\S/g);
                        if (n == -1) {
                            n = 0;
                        }
                        if (cursor.column > r) {
                            r = cursor.column;
                        }
                        if (n < a) {
                            a = n;
                        }
                        return n;
                    });
                    t_ranges.forEach((t, i)=>{
                        const t_cursor = t.cursor;
                        const s = r - t_cursor.column;
                        const h = l[i] - a;
                        if (s > h) {
                            session.insert(t_cursor, c.stringRepeat(" ", s - h));
                        } else {
                            session.remove(new Range(t_cursor.row, t_cursor.column, t_cursor.row, t_cursor.column - s + h));
                        }
                        t.start.column = t.end.column = r;
                        t.start.row = t.end.row = t_cursor.row;
                        t.cursor = t.end;
                    });
                    e_multiSelect.fromOrientedRange(t_ranges[0]);
                    this.renderer.updateCursor();
                    this.renderer.updateBackMarkers();
                } else {
                    const h = this.selection.getRange();
                    let d = h.start.row;
                    let u = h.end.row;
                    const f = d == u;
                    if (f) {
                        let g;
                        const p = this.session.getLength();
                        do {
                            g = this.session.getLine(u);
                        }while (/[=:]/.test(g) && ++u < p)
                        do {
                            g = this.session.getLine(d);
                        }while (/[=:]/.test(g) && --d > 0)
                        if (d < 0) {
                            d = 0;
                        }
                        if (u >= p) {
                            u = p - 1;
                        }
                    }
                    let m = this.session.removeFullLines(d, u);
                    m = this.$reAlignText(m, f);
                    this.session.insert({
                        row: d,
                        column: 0
                    }, `${m.join("\n")}
`);
                    if (!f) {
                        h.start.column = 0;
                        h.end.column = m[m.length - 1].length;
                    }
                    this.selection.setRange(h);
                }
            };
            this.$reAlignText = function(e, t) {
                let i;
                let n;
                let o;
                let s = true;
                let r = true;
                return e.map((e)=>{
                    const t = e.match(/(\s*)(.*?)(\s*)([=:].*)/);
                    if (t) {
                        if (i == null) {
                            i = t[1].length;
                            n = t[2].length;
                            o = t[3].length;
                            return t;
                        }
                        if (i + n + o != t[1].length + t[2].length + t[3].length) {
                            r = false;
                        }
                        if (i != t[1].length) {
                            s = false;
                        }
                        if (i > t[1].length) {
                            i = t[1].length;
                        }
                        if (n < t[2].length) {
                            n = t[2].length;
                        }
                        if (o > t[3].length) {
                            o = t[3].length;
                        }
                        return t;
                    }
                    return [
                        e
                    ];
                }).map(t ? l : s ? r ? (e)=>{
                    if (e[2]) {
                        return a(i + n - e[2].length) + e[2] + a(o) + e[4].replace(/^([=:])\s+/, "$1 ");
                    }
                    return e[0];
                } : l : (e)=>{
                    if (e[2]) {
                        return a(i) + e[2] + a(o) + e[4].replace(/^([=:])\s+/, "$1 ");
                    }
                    return e[0];
                });
                function a(e) {
                    return c.stringRepeat(" ", e);
                }
                function l(e) {
                    if (e[2]) {
                        return a(i) + e[2] + a(n - e[2].length + o) + e[4].replace(/^([=:])\s+/, "$1 ");
                    }
                    return e[0];
                }
            };
        }).call(Editor.prototype);
        t.onSessionChange = function(e) {
            const e_session = e.session;
            if (e_session && !e_session.multiSelect) {
                e_session.$selectionMarkers = [];
                e_session.selection.$initRangeList();
                e_session.multiSelect = e_session.selection;
            }
            this.multiSelect = e_session && e_session.multiSelect;
            const e_oldSession = e.oldSession;
            if (e_oldSession) {
                e_oldSession.multiSelect.off("addRange", this.$onAddRange);
                e_oldSession.multiSelect.off("removeRange", this.$onRemoveRange);
                e_oldSession.multiSelect.off("multiSelect", this.$onMultiSelect);
                e_oldSession.multiSelect.off("singleSelect", this.$onSingleSelect);
                e_oldSession.multiSelect.lead.off("change", this.$checkMultiselectChange);
                e_oldSession.multiSelect.anchor.off("change", this.$checkMultiselectChange);
            }
            if (e_session) {
                e_session.multiSelect.on("addRange", this.$onAddRange);
                e_session.multiSelect.on("removeRange", this.$onRemoveRange);
                e_session.multiSelect.on("multiSelect", this.$onMultiSelect);
                e_session.multiSelect.on("singleSelect", this.$onSingleSelect);
                e_session.multiSelect.lead.on("change", this.$checkMultiselectChange);
                e_session.multiSelect.anchor.on("change", this.$checkMultiselectChange);
            }
            if (e_session && this.inMultiSelectMode != e_session.selection.inMultiSelectMode) {
                if (e_session.selection.inMultiSelectMode) {
                    this.$onMultiSelect();
                } else {
                    this.$onSingleSelect();
                }
            }
        };
        t.MultiSelect = f;
        e("./config").defineOptions(Editor.prototype, "editor", {
            enableMultiselect: {
                set: function(e) {
                    f(this);
                    if (e) {
                        this.on("changeSession", this.$multiselectOnSessionChange);
                        this.on("mousedown", onMouseDown);
                    } else {
                        this.off("changeSession", this.$multiselectOnSessionChange);
                        this.off("mousedown", onMouseDown);
                    }
                },
                value: true
            },
            enableBlockSelect: {
                set: function(e) {
                    this.$blockSelectEnabled = e;
                },
                value: true
            }
        });
    });
    ace.define("ace/mode/folding/fold_mode", [
        "require",
        "exports",
        "module",
        "ace/range"
    ], function(e, t, i) {
        "use strict";
        const Range = e("../../range").Range;
        const o = t.FoldMode = function() {};
        (function() {
            this.foldingStartMarker = null;
            this.foldingStopMarker = null;
            this.getFoldWidget = function(e, t, i) {
                const n = e.getLine(i);
                if (this.foldingStartMarker.test(n)) {
                    return "start";
                }
                if (t == "markbeginend" && this.foldingStopMarker && this.foldingStopMarker.test(n)) {
                    return "end";
                }
                return "";
            };
            this.getFoldWidgetRange = function(e, t, i) {
                return null;
            };
            this.indentationBlock = function(e, t, i) {
                const o = /\S/;
                const s = e.getLine(t);
                const r = s.search(o);
                if (r != -1) {
                    const a = i || s.length;
                    for(var c = e.getLength(), l = t, h = t; ++t < c;){
                        const d = e.getLine(t).search(o);
                        if (d != -1) {
                            if (d <= r) {
                                const u = e.getTokenAt(t, 0);
                                if (!u || u.type !== "string") {
                                    break;
                                }
                            }
                            h = t;
                        }
                    }
                    if (h > l) {
                        const f = e.getLine(h).length;
                        return new Range(l, a, h, f);
                    }
                }
            };
            this.openingBracketBlock = function(e, t, i, o, s) {
                const r = {
                    row: i,
                    column: o + 1
                };
                const a = e.$findClosingBracket(t, r, s);
                if (a) {
                    let c = e.foldWidgets[a.row];
                    if (c == null) {
                        c = e.getFoldWidget(a.row);
                    }
                    if (c == "start" && a.row > r.row) {
                        a.row--;
                        a.column = e.getLine(a.row).length;
                    }
                    return Range.fromPoints(r, a);
                }
            };
            this.closingBracketBlock = function(e, t, i, o, s) {
                const r = {
                    row: i,
                    column: o
                };
                const a = e.$findOpeningBracket(t, r);
                if (a) {
                    a.column++;
                    r.column--;
                    return Range.fromPoints(a, r);
                }
            };
        }).call(o.prototype);
    });
    ace.define("ace/theme/textmate", [
        "require",
        "exports",
        "module",
        "ace/lib/dom"
    ], function(e, t, i) {
        "use strict";
        t.isDark = false;
        t.cssClass = "ace-tm";
        t.cssText = '.ace-tm .ace_gutter {background: #f0f0f0;color: #333;}.ace-tm .ace_print-margin {width: 1px;background: #e8e8e8;}.ace-tm .ace_fold {background-color: #6B72E6;}.ace-tm {background-color: #FFFFFF;color: black;}.ace-tm .ace_cursor {color: black;}.ace-tm .ace_invisible {color: rgb(191, 191, 191);}.ace-tm .ace_storage,.ace-tm .ace_keyword {color: blue;}.ace-tm .ace_constant {color: rgb(197, 6, 11);}.ace-tm .ace_constant.ace_buildin {color: rgb(88, 72, 246);}.ace-tm .ace_constant.ace_language {color: rgb(88, 92, 246);}.ace-tm .ace_constant.ace_library {color: rgb(6, 150, 14);}.ace-tm .ace_invalid {background-color: rgba(255, 0, 0, 0.1);color: red;}.ace-tm .ace_support.ace_function {color: rgb(60, 76, 114);}.ace-tm .ace_support.ace_constant {color: rgb(6, 150, 14);}.ace-tm .ace_support.ace_type,.ace-tm .ace_support.ace_class {color: rgb(109, 121, 222);}.ace-tm .ace_keyword.ace_operator {color: rgb(104, 118, 135);}.ace-tm .ace_string {color: rgb(3, 106, 7);}.ace-tm .ace_comment {color: rgb(76, 136, 107);}.ace-tm .ace_comment.ace_doc {color: rgb(0, 102, 255);}.ace-tm .ace_comment.ace_doc.ace_tag {color: rgb(128, 159, 191);}.ace-tm .ace_constant.ace_numeric {color: rgb(0, 0, 205);}.ace-tm .ace_variable {color: rgb(49, 132, 149);}.ace-tm .ace_xml-pe {color: rgb(104, 104, 91);}.ace-tm .ace_entity.ace_name.ace_function {color: #0000A2;}.ace-tm .ace_heading {color: rgb(12, 7, 255);}.ace-tm .ace_list {color:rgb(185, 6, 144);}.ace-tm .ace_meta.ace_tag {color:rgb(0, 22, 142);}.ace-tm .ace_string.ace_regex {color: rgb(255, 0, 0)}.ace-tm .ace_marker-layer .ace_selection {background: rgb(181, 213, 255);}.ace-tm.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px white;}.ace-tm .ace_marker-layer .ace_step {background: rgb(252, 255, 0);}.ace-tm .ace_marker-layer .ace_stack {background: rgb(164, 229, 101);}.ace-tm .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgb(192, 192, 192);}.ace-tm .ace_marker-layer .ace_active-line {background: rgba(0, 0, 0, 0.07);}.ace-tm .ace_gutter-active-line {background-color : #dcdcdc;}.ace-tm .ace_marker-layer .ace_selected-word {background: rgb(250, 250, 255);border: 1px solid rgb(200, 200, 250);}.ace-tm .ace_indent-guide {background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;}';
        t.$id = "ace/theme/textmate";
        e("../lib/dom").importCssString(t.cssText, t.cssClass);
    });
    ace.define("ace/line_widgets", [
        "require",
        "exports",
        "module",
        "ace/lib/dom"
    ], function(e, t, i) {
        "use strict";
        const n = e("./lib/dom");
        function o(e) {
            this.session = e;
            this.session.widgetManager = this;
            this.session.getRowLength = this.getRowLength;
            this.session.$getWidgetScreenLength = this.$getWidgetScreenLength;
            this.updateOnChange = this.updateOnChange.bind(this);
            this.renderWidgets = this.renderWidgets.bind(this);
            this.measureWidgets = this.measureWidgets.bind(this);
            this.session._changedWidgets = [];
            this.$onChangeEditor = this.$onChangeEditor.bind(this);
            this.session.on("change", this.updateOnChange);
            this.session.on("changeFold", this.updateOnFold);
            this.session.on("changeEditor", this.$onChangeEditor);
        }
        (function() {
            this.getRowLength = function(e) {
                let t;
                t = this.lineWidgets && this.lineWidgets[e] && this.lineWidgets[e].rowCount || 0;
                if (this.$useWrapMode && this.$wrapData[e]) {
                    return this.$wrapData[e].length + 1 + t;
                }
                return 1 + t;
            };
            this.$getWidgetScreenLength = function() {
                let e = 0;
                this.lineWidgets.forEach((t)=>{
                    if (t && t.rowCount && !t.hidden) {
                        e += t.rowCount;
                    }
                });
                return e;
            };
            this.$onChangeEditor = function(e) {
                this.attach(e.editor);
            };
            this.attach = function(e) {
                if (e && e.widgetManager && e.widgetManager != this) {
                    e.widgetManager.detach();
                }
                if (this.editor != e) {
                    this.detach();
                    this.editor = e;
                    if (e) {
                        e.widgetManager = this;
                        e.renderer.on("beforeRender", this.measureWidgets);
                        e.renderer.on("afterRender", this.renderWidgets);
                    }
                }
            };
            this.detach = function(e) {
                const editor = this.editor;
                if (editor) {
                    this.editor = null;
                    editor.widgetManager = null;
                    editor.renderer.off("beforeRender", this.measureWidgets);
                    editor.renderer.off("afterRender", this.renderWidgets);
                    const i = this.session.lineWidgets;
                    if (i) {
                        i.forEach((e)=>{
                            if (e && e.el && e.el.parentNode) {
                                e._inDocument = false;
                                e.el.parentNode.removeChild(e.el);
                            }
                        });
                    }
                }
            };
            this.updateOnFold = function(e, { lineWidgets }) {
                if (lineWidgets && e.action) {
                    const n = e.data;
                    const o = n.start.row;
                    for(var s = n.end.row, r = e.action == "add", a = o + 1; a < s; a++){
                        if (lineWidgets[a]) {
                            lineWidgets[a].hidden = r;
                        }
                    }
                    if (lineWidgets[s]) {
                        if (r) {
                            if (lineWidgets[o]) {
                                lineWidgets[s].hidden = r;
                            } else {
                                lineWidgets[o] = lineWidgets[s];
                            }
                        } else {
                            if (lineWidgets[o] == lineWidgets[s]) {
                                lineWidgets[o] = undefined;
                            }
                            lineWidgets[s].hidden = r;
                        }
                    }
                }
            };
            this.updateOnChange = function(e) {
                const lineWidgets = this.session.lineWidgets;
                if (lineWidgets) {
                    let i = e.start.row;
                    const n = e.end.row - i;
                    if (n === 0) ;
                    else if (e.action == "remove") {
                        const o = lineWidgets.splice(i + 1, n);
                        if (!lineWidgets[i] && o[o.length - 1]) {
                            lineWidgets[i] = o.pop();
                        }
                        o.forEach(function(e) {
                            if (e) {
                                this.removeLineWidget(e);
                            }
                        }, this);
                        this.$updateRows();
                    } else {
                        const s = new Array(n);
                        if (lineWidgets[i] && lineWidgets[i].column != null && e.start.column > lineWidgets[i].column) {
                            i++;
                        }
                        s.unshift(i, 0);
                        lineWidgets.splice.apply(lineWidgets, s);
                        this.$updateRows();
                    }
                }
            };
            this.$updateRows = function() {
                const lineWidgets = this.session.lineWidgets;
                if (lineWidgets) {
                    let t = true;
                    lineWidgets.forEach((e, i)=>{
                        if (e) {
                            t = false;
                            for(e.row = i; e.$oldWidget;){
                                e.$oldWidget.row = i;
                                e = e.$oldWidget;
                            }
                        }
                    });
                    if (t) {
                        this.session.lineWidgets = null;
                    }
                }
            };
            this.$registerLineWidget = function(e) {
                if (!this.session.lineWidgets) {
                    this.session.lineWidgets = new Array(this.session.getLength());
                }
                const t = this.session.lineWidgets[e.row];
                if (t) {
                    e.$oldWidget = t;
                    if (t.el && t.el.parentNode) {
                        t.el.parentNode.removeChild(t.el);
                        t._inDocument = false;
                    }
                }
                this.session.lineWidgets[e.row] = e;
                return e;
            };
            this.addLineWidget = function(e) {
                this.$registerLineWidget(e);
                e.session = this.session;
                if (!this.editor) {
                    return e;
                }
                const renderer = this.editor.renderer;
                if (e.html && !e.el) {
                    e.el = n.createElement("div");
                    e.el.innerHTML = e.html;
                }
                if (e.el) {
                    n.addCssClass(e.el, "ace_lineWidgetContainer");
                    e.el.style.position = "absolute";
                    e.el.style.zIndex = 5;
                    renderer.container.appendChild(e.el);
                    e._inDocument = true;
                    if (!e.coverGutter) {
                        e.el.style.zIndex = 3;
                    }
                    if (e.pixelHeight == null) {
                        e.pixelHeight = e.el.offsetHeight;
                    }
                }
                if (e.rowCount == null) {
                    e.rowCount = e.pixelHeight / renderer.layerConfig.lineHeight;
                }
                const i = this.session.getFoldAt(e.row, 0);
                e.$fold = i;
                if (i) {
                    const o = this.session.lineWidgets;
                    if (e.row != i.end.row || o[i.start.row]) {
                        e.hidden = true;
                    } else {
                        o[i.start.row] = e;
                    }
                }
                this.session._emit("changeFold", {
                    data: {
                        start: {
                            row: e.row
                        }
                    }
                });
                this.$updateRows();
                this.renderWidgets(null, renderer);
                this.onWidgetChanged(e);
                return e;
            };
            this.removeLineWidget = function(e) {
                e._inDocument = false;
                e.session = null;
                if (e.el && e.el.parentNode) {
                    e.el.parentNode.removeChild(e.el);
                }
                if (e.editor && e.editor.destroy) {
                    try {
                        e.editor.destroy();
                    } catch (e) {}
                }
                if (this.session.lineWidgets) {
                    let t = this.session.lineWidgets[e.row];
                    if (t == e) {
                        this.session.lineWidgets[e.row] = e.$oldWidget;
                        if (e.$oldWidget) {
                            this.onWidgetChanged(e.$oldWidget);
                        }
                    } else {
                        while(t){
                            if (t.$oldWidget == e) {
                                t.$oldWidget = e.$oldWidget;
                                break;
                            }
                            t = t.$oldWidget;
                        }
                    }
                }
                this.session._emit("changeFold", {
                    data: {
                        start: {
                            row: e.row
                        }
                    }
                });
                this.$updateRows();
            };
            this.getWidgetsAtRow = function(e) {
                const lineWidgets = this.session.lineWidgets;
                for(var i = lineWidgets && lineWidgets[e], n = []; i;){
                    n.push(i);
                    i = i.$oldWidget;
                }
                return n;
            };
            this.onWidgetChanged = function(e) {
                this.session._changedWidgets.push(e);
                if (this.editor) {
                    this.editor.renderer.updateFull();
                }
            };
            this.measureWidgets = function(e, t) {
                const _changedWidgets = this.session._changedWidgets;
                const t_layerConfig = t.layerConfig;
                if (_changedWidgets && _changedWidgets.length) {
                    let o = Infinity;
                    for (const r of _changedWidgets){
                        if (r && r.el && r.session == this.session) {
                            if (!r._inDocument) {
                                if (this.session.lineWidgets[r.row] != r) {
                                    continue;
                                }
                                r._inDocument = true;
                                t.container.appendChild(r.el);
                            }
                            r.h = r.el.offsetHeight;
                            if (!r.fixedWidth) {
                                r.w = r.el.offsetWidth;
                                r.screenWidth = Math.ceil(r.w / t_layerConfig.characterWidth);
                            }
                            let a = r.h / t_layerConfig.lineHeight;
                            if (r.coverLine && (a -= this.session.getRowLineCount(r.row)) < 0) {
                                a = 0;
                            }
                            if (r.rowCount != a) {
                                r.rowCount = a;
                                if (r.row < o) {
                                    o = r.row;
                                }
                            }
                        }
                    }
                    if (o != Infinity) {
                        this.session._emit("changeFold", {
                            data: {
                                start: {
                                    row: o
                                }
                            }
                        });
                        this.session.lineWidgetWidth = null;
                    }
                    this.session._changedWidgets = [];
                }
            };
            this.renderWidgets = function(e, t) {
                const t_layerConfig = t.layerConfig;
                const lineWidgets = this.session.lineWidgets;
                if (lineWidgets) {
                    for(var o = Math.min(this.firstRow, t_layerConfig.firstRow), s = Math.max(this.lastRow, t_layerConfig.lastRow, lineWidgets.length); o > 0 && !lineWidgets[o];){
                        o--;
                    }
                    this.firstRow = t_layerConfig.firstRow;
                    this.lastRow = t_layerConfig.lastRow;
                    t.$cursorLayer.config = t_layerConfig;
                    for(let r = o; r <= s; r++){
                        const a = lineWidgets[r];
                        if (a && a.el) {
                            if (a.hidden) {
                                a.el.style.top = `${-100 - (a.pixelHeight || 0)}px`;
                            } else {
                                if (!a._inDocument) {
                                    a._inDocument = true;
                                    t.container.appendChild(a.el);
                                }
                                let c = t.$cursorLayer.getPixelPosition({
                                    row: r,
                                    column: 0
                                }, true).top;
                                if (!a.coverLine) {
                                    c += t_layerConfig.lineHeight * this.session.getRowLineCount(a.row);
                                }
                                a.el.style.top = `${c - t_layerConfig.offset}px`;
                                let l = a.coverGutter ? 0 : t.gutterWidth;
                                if (!a.fixedWidth) {
                                    l -= t.scrollLeft;
                                }
                                a.el.style.left = `${l}px`;
                                if (a.fullWidth && a.screenWidth) {
                                    a.el.style.minWidth = `${t_layerConfig.width + 2 * t_layerConfig.padding}px`;
                                }
                                if (a.fixedWidth) {
                                    a.el.style.right = `${t.scrollBar.getWidth()}px`;
                                } else {
                                    a.el.style.right = "";
                                }
                            }
                        }
                    }
                }
            };
        }).call(o.prototype);
        t.LineWidgets = o;
    });
    ace.define("ace/ext/error_marker", [
        "require",
        "exports",
        "module",
        "ace/line_widgets",
        "ace/lib/dom",
        "ace/range"
    ], function(e, t, i) {
        "use strict";
        const LineWidgets = e("../line_widgets").LineWidgets;
        const o = e("../lib/dom");
        const Range = e("../range").Range;
        t.showErrorMarker = function(e, t) {
            const e_session = e.session;
            if (!e_session.widgetManager) {
                e_session.widgetManager = new LineWidgets(e_session);
                e_session.widgetManager.attach(e);
            }
            const r = e.getCursorPosition();
            let r_row = r.row;
            const c = e_session.widgetManager.getWidgetsAtRow(r_row).filter((e)=>e.type == "errorMarker")[0];
            if (c) {
                c.destroy();
            } else {
                r_row -= t;
            }
            let l;
            const h = ((e_session_1, r_row_1, i)=>{
                const n = e_session_1.getAnnotations().sort(Range.comparePoints);
                if (n.length) {
                    let o = ((e, t, i)=>{
                        for(var n = 0, o = e.length - 1; n <= o;){
                            const s = n + o >> 1;
                            const r = i(t, e[s]);
                            if (r > 0) {
                                n = s + 1;
                            } else {
                                if (!(r < 0)) {
                                    return s;
                                }
                                o = s - 1;
                            }
                        }
                        return -(n + 1);
                    })(n, {
                        row: r_row_1,
                        column: -1
                    }, Range.comparePoints);
                    if (o < 0) {
                        o = -o - 1;
                    }
                    if (o >= n.length) {
                        o = i > 0 ? 0 : n.length - 1;
                    } else if (o === 0 && i < 0) {
                        o = n.length - 1;
                    }
                    let r = n[o];
                    if (r && i) {
                        if (r.row === r_row_1) {
                            do {
                                r = n[o += i];
                            }while (r && r.row === r_row_1)
                            if (!r) {
                                return n.slice();
                            }
                        }
                        const a = [];
                        r_row_1 = r.row;
                        do {
                            a[i < 0 ? "unshift" : "push"](r);
                            r = n[o += i];
                        }while (r && r.row == r_row_1)
                        return a.length && a;
                    }
                }
            })(e_session, r_row, t);
            if (h) {
                const d = h[0];
                r.column = (d.pos && typeof d.column !== "number" ? d.pos.sc : d.column) || 0;
                r.row = d.row;
                l = e.renderer.$gutterLayer.$annotations[r.row];
            } else {
                if (c) {
                    return;
                }
                l = {
                    text: [
                        "Looks good!"
                    ],
                    className: "ace_ok"
                };
            }
            e.session.unfold(r.row);
            e.selection.moveToPosition(r);
            const u = {
                row: r.row,
                fixedWidth: true,
                coverGutter: true,
                el: o.createElement("div"),
                type: "errorMarker"
            };
            const f = u.el.appendChild(o.createElement("div"));
            const g = u.el.appendChild(o.createElement("div"));
            g.className = `error_widget_arrow ${l.className}`;
            const left = e.renderer.$cursorLayer.getPixelPosition(r).left;
            g.style.left = `${left + e.renderer.gutterWidth - 5}px`;
            u.el.className = "error_widget_wrapper";
            f.className = `error_widget ${l.className}`;
            f.innerHTML = l.text.join("<br>");
            f.appendChild(o.createElement("div"));
            const m = function(e, t, i) {
                if (t === 0 && (i === "esc" || i === "return")) {
                    u.destroy();
                    return {
                        command: "null"
                    };
                }
            };
            u.destroy = function() {
                if (!e.$mouseHandler.isMousePressed) {
                    e.keyBinding.removeKeyboardHandler(m);
                    e_session.widgetManager.removeLineWidget(u);
                    e.off("changeSelection", u.destroy);
                    e.off("changeSession", u.destroy);
                    e.off("mouseup", u.destroy);
                    e.off("change", u.destroy);
                }
            };
            e.keyBinding.addKeyboardHandler(m);
            e.on("changeSelection", u.destroy);
            e.on("changeSession", u.destroy);
            e.on("mouseup", u.destroy);
            e.on("change", u.destroy);
            e.session.widgetManager.addLineWidget(u);
            u.el.onmousedown = e.focus.bind(e);
            e.renderer.scrollCursorIntoView(null, 0.5, {
                bottom: u.el.offsetHeight
            });
        };
        o.importCssString("    .error_widget_wrapper {        background: inherit;        color: inherit;        border:none    }    .error_widget {        border-top: solid 2px;        border-bottom: solid 2px;        margin: 5px 0;        padding: 10px 40px;        white-space: pre-wrap;    }    .error_widget.ace_error, .error_widget_arrow.ace_error{        border-color: #ff5a5a    }    .error_widget.ace_warning, .error_widget_arrow.ace_warning{        border-color: #F1D817    }    .error_widget.ace_info, .error_widget_arrow.ace_info{        border-color: #5a5a5a    }    .error_widget.ace_ok, .error_widget_arrow.ace_ok{        border-color: #5aaa5a    }    .error_widget_arrow {        position: absolute;        border: solid 5px;        border-top-color: transparent!important;        border-right-color: transparent!important;        border-left-color: transparent!important;        top: -5px;    }", "");
    });
    ace.define("ace/ace", [
        "require",
        "exports",
        "module",
        "ace/lib/fixoldbrowsers",
        "ace/lib/dom",
        "ace/lib/event",
        "ace/range",
        "ace/editor",
        "ace/edit_session",
        "ace/undomanager",
        "ace/virtual_renderer",
        "ace/worker/worker_client",
        "ace/keyboard/hash_handler",
        "ace/placeholder",
        "ace/multi_select",
        "ace/mode/folding/fold_mode",
        "ace/theme/textmate",
        "ace/ext/error_marker",
        "ace/config"
    ], function(e, t, n) {
        "use strict";
        e("./lib/fixoldbrowsers");
        const o = e("./lib/dom");
        const s = e("./lib/event");
        const Range = e("./range").Range;
        const Editor = e("./editor").Editor;
        const EditSession = e("./edit_session").EditSession;
        const UndoManager = e("./undomanager").UndoManager;
        const VirtualRenderer = e("./virtual_renderer").VirtualRenderer;
        e("./worker/worker_client");
        e("./keyboard/hash_handler");
        e("./placeholder");
        e("./multi_select");
        e("./mode/folding/fold_mode");
        e("./theme/textmate");
        e("./ext/error_marker");
        t.config = e("./config");
        t.require = e;
        t.define = require("unpacked/module-1269.js").default;
        t.edit = function(e, i) {
            if (typeof e === "string") {
                const n = e;
                if (!(e = document.getElementById(n))) {
                    throw new Error(`ace.edit can't find div #${n}`);
                }
            }
            if (e && e.env && e.env.editor instanceof Editor) {
                return e.env.editor;
            }
            let r = "";
            if (e && /input|textarea/i.test(e.tagName)) {
                var c = e;
                r = c.value;
                e = o.createElement("pre");
                c.parentNode.replaceChild(e, c);
            } else {
                if (e) {
                    r = e.textContent;
                    e.innerHTML = "";
                }
            }
            const document_1 = t.createEditSession(r);
            const d = new Editor(new VirtualRenderer(e), document_1, i);
            const u = {
                document: document_1,
                editor: d,
                onResize: d.resize.bind(d, null)
            };
            if (c) {
                u.textarea = c;
            }
            s.addListener(window, "resize", u.onResize);
            d.on("destroy", function() {
                s.removeListener(window, "resize", u.onResize);
                u.editor.container.env = null;
            });
            d.container.env = d.env = u;
            return d;
        };
        t.createEditSession = function(e, t) {
            const i = new EditSession(e, t);
            i.setUndoManager(new UndoManager);
            return i;
        };
        t.Range = Range;
        t.Editor = Editor;
        t.EditSession = EditSession;
        t.UndoManager = UndoManager;
        t.VirtualRenderer = VirtualRenderer;
        t.version = t.config.version;
    });
    ace.require([
        "ace/ace"
    ], function(t) {
        if (t) {
            t.config.init(true);
            t.define = ace.define;
        }
        if (!window.ace) {
            window.ace = t;
        }
        for(const i in t){
            if (t.hasOwnProperty(i)) {
                window.ace[i] = t[i];
            }
        }
        window.ace.default = window.ace;
        if (e) {
            e.exports = window.ace;
        }
    });
})(require("unpacked/module-139.js").default(module));
