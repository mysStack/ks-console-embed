window;
export default ((e)=>{
    const t = {};
    function n(i) {
        if (t[i]) {
            return t[i].exports;
        }
        const o = t[i] = {
            i,
            l: false,
            exports: {}
        };
        e[i].call(o.exports, o, o.exports, n);
        o.l = true;
        return o.exports;
    }
    n.m = e;
    n.c = t;
    n.d = function(e, t, get) {
        if (!n.o(e, t)) {
            Object.defineProperty(e, t, {
                enumerable: true,
                get
            });
        }
    };
    n.r = function(e) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            });
        }
        Object.defineProperty(e, "__esModule", {
            value: true
        });
    };
    n.t = function(e, t) {
        if (1 & t) {
            e = n(e);
        }
        if (8 & t) {
            return e;
        }
        if (4 & t && typeof e === "object" && e && e.__esModule) {
            return e;
        }
        const r = Object.create(null);
        n.r(r);
        Object.defineProperty(r, "default", {
            enumerable: true,
            value: e
        });
        if (2 & t && typeof e !== "string") {
            for(const o in e){
                n.d(r, o, (function(t) {
                    return e[t];
                }).bind(null, o));
            }
        }
        return r;
    };
    n.n = function(e) {
        const t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        n.d(t, "a", t);
        return t;
    };
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    };
    n.p = "/";
    return n(n.s = 5);
})([
    function(e, t, n) {
        "use strict";
        e.exports = n(6);
    },
    function(e, t, n) {
        "use strict";
        e.exports = function(e) {
            const t = [];
            t.toString = function() {
                return this.map((t)=>{
                    const n = ((e, t)=>{
                        let n;
                        const r = e[1] || "";
                        const o = e[3];
                        if (!o) {
                            return r;
                        }
                        if (t && typeof btoa === "function") {
                            n = o;
                            const i = `/*# sourceMappingURL=data:application/json;charset=utf-8;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(n))))} */`;
                            const a = o.sources.map((e)=>`/*# sourceURL=${o.sourceRoot}${e} */`);
                            return [
                                r
                            ].concat(a).concat([
                                i
                            ]).join("\n");
                        }
                        return [
                            r
                        ].join("\n");
                    })(t, e);
                    if (t[2]) {
                        return `@media ${t[2]}{${n}}`;
                    }
                    return n;
                }).join("");
            };
            t.i = function(e, n) {
                if (typeof e === "string") {
                    e = [
                        [
                            null,
                            e,
                            ""
                        ]
                    ];
                }
                const r = {};
                for(var o = 0; o < this.length; o++){
                    const i = this[o][0];
                    if (i != null) {
                        r[i] = true;
                    }
                }
                for(o = 0; o < e.length; o++){
                    const a = e[o];
                    if (!(a[0] != null && r[a[0]])) {
                        if (n && !a[2]) {
                            a[2] = n;
                        } else if (n) {
                            a[2] = `(${a[2]}) and (${n})`;
                        }
                        t.push(a);
                    }
                }
            };
            return t;
        };
    },
    function(e, t, n) {
        let r;
        let o;
        const i = {};
        r = function() {
            return window && document && document.all && !window.atob;
        };
        const a = function() {
            if (o === undefined) {
                o = r.apply(this, arguments);
            }
            return o;
        };
        const l = ((e)=>{
            const t = {};
            return function(e, n) {
                if (typeof e === "function") {
                    return e();
                }
                if (t[e] === undefined) {
                    let r = ((e, t)=>{
                        if (t) {
                            return t.querySelector(e);
                        }
                        return document.querySelector(e);
                    })(e, n);
                    if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) {
                        try {
                            r = r.contentDocument.head;
                        } catch (e) {
                            r = null;
                        }
                    }
                    t[e] = r;
                }
                return t[e];
            };
        })();
        let u = null;
        let s = 0;
        const c = [];
        const f = n(25);
        function d(e, t) {
            for (const r of e){
                const o = i[r.id];
                if (o) {
                    o.refs++;
                    for(var a = 0; a < o.parts.length; a++){
                        o.parts[a](r.parts[a]);
                    }
                    for(; a < r.parts.length; a++){
                        o.parts.push(m(r.parts[a], t));
                    }
                } else {
                    const parts = [];
                    for(a = 0; a < r.parts.length; a++){
                        parts.push(m(r.parts[a], t));
                    }
                    i[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts
                    };
                }
            }
        }
        function p(e, t) {
            const n = [];
            const r = {};
            for (const i of e){
                const id = t.base ? i[0] + t.base : i[0];
                const l = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
                if (r[id]) {
                    r[id].parts.push(l);
                } else {
                    n.push(r[id] = {
                        id,
                        parts: [
                            l
                        ]
                    });
                }
            }
            return n;
        }
        function h(e, t) {
            const n = l(e.insertInto);
            if (!n) {
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            }
            const r = c[c.length - 1];
            if (e.insertAt === "top") {
                if (r) {
                    if (r.nextSibling) {
                        n.insertBefore(t, r.nextSibling);
                    } else {
                        n.appendChild(t);
                    }
                } else {
                    n.insertBefore(t, n.firstChild);
                }
                c.push(t);
            } else if (e.insertAt === "bottom") {
                n.appendChild(t);
            } else {
                if (typeof e.insertAt !== "object" || !e.insertAt.before) {
                    throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                }
                const o = l(e.insertAt.before, n);
                n.insertBefore(t, o);
            }
        }
        function v(e) {
            if (e.parentNode === null) {
                return false;
            }
            e.parentNode.removeChild(e);
            const t = c.indexOf(e);
            if (t >= 0) {
                c.splice(t, 1);
            }
        }
        function g(e) {
            const styleElement = document.createElement("style");
            if (e.attrs.type === undefined) {
                e.attrs.type = "text/css";
            }
            if (e.attrs.nonce === undefined) {
                const r = n.nc;
                if (r) {
                    e.attrs.nonce = r;
                }
            }
            y(styleElement, e.attrs);
            h(e, styleElement);
            return styleElement;
        }
        function y(e, attrs) {
            Object.keys(attrs).forEach((n)=>{
                e.setAttribute(n, attrs[n]);
            });
        }
        function m(e, t) {
            let n;
            let r;
            let o;
            let i;
            if (t.transform && e.css) {
                if (!(i = typeof t.transform === "function" ? t.transform(e.css) : t.transform.default(e.css))) {
                    return function() {};
                }
                e.css = i;
            }
            if (t.singleton) {
                const a = s++;
                n = u || (u = g(t));
                r = w.bind(null, n, a, false);
                o = w.bind(null, n, a, true);
            } else {
                if (e.sourceMap && typeof URL === "function" && typeof URL.createObjectURL === "function" && typeof URL.revokeObjectURL === "function" && typeof Blob === "function" && typeof btoa === "function") {
                    n = ((e)=>{
                        const linkElement = document.createElement("link");
                        if (e.attrs.type === undefined) {
                            e.attrs.type = "text/css";
                        }
                        e.attrs.rel = "stylesheet";
                        y(linkElement, e.attrs);
                        h(e, linkElement);
                        return linkElement;
                    })(t);
                    r = (function(e, t, { css, sourceMap }) {
                        const i = t.convertToAbsoluteUrls === undefined && sourceMap;
                        if (t.convertToAbsoluteUrls || i) {
                            css = f(css);
                        }
                        if (sourceMap) {
                            css += `
/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))} */`;
                        }
                        const a = new Blob([
                            css
                        ], {
                            type: "text/css"
                        });
                        const e_href = e.href;
                        e.href = URL.createObjectURL(a);
                        if (e_href) {
                            URL.revokeObjectURL(e_href);
                        }
                    }).bind(null, n, t);
                    o = function() {
                        v(n);
                        if (n.href) {
                            URL.revokeObjectURL(n.href);
                        }
                    };
                } else {
                    n = g(t);
                    r = (function(e, { css, media }) {
                        if (media) {
                            e.setAttribute("media", media);
                        }
                        if (e.styleSheet) {
                            e.styleSheet.cssText = css;
                        } else {
                            while(e.firstChild){
                                e.removeChild(e.firstChild);
                            }
                            e.appendChild(document.createTextNode(css));
                        }
                    }).bind(null, n);
                    o = function() {
                        v(n);
                    };
                }
            }
            r(e);
            return function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) {
                        return;
                    }
                    r(e = t);
                } else {
                    o();
                }
            };
        }
        e.exports = function(e, t) {
            if (typeof DEBUG !== "undefined" && DEBUG && typeof document !== "object") {
                throw new Error("The style-loader cannot be used in a non-browser environment");
            }
            t = t || {};
            t.attrs = typeof t.attrs === "object" ? t.attrs : {};
            if (!(t.singleton || typeof t.singleton === "boolean")) {
                t.singleton = a();
            }
            if (!t.insertInto) {
                t.insertInto = "head";
            }
            if (!t.insertAt) {
                t.insertAt = "bottom";
            }
            const n = p(e, t);
            d(n, t);
            return function(e) {
                const r = [];
                for(var o = 0; o < n.length; o++){
                    const a = n[o];
                    (l = i[a.id]).refs--;
                    r.push(l);
                }
                if (e) {
                    d(p(e, t), t);
                }
                for(o = 0; o < r.length; o++){
                    var l;
                    if ((l = r[o]).refs === 0) {
                        for(let u = 0; u < l.parts.length; u++){
                            l.parts[u]();
                        }
                        delete i[l.id];
                    }
                }
            };
        };
        const b = [];
        var x = (e, t)=>{
            b[e] = t;
            return b.filter(Boolean).join("\n");
        };
        function w(e, t, n, r) {
            const o = n ? "" : r.css;
            if (e.styleSheet) {
                e.styleSheet.cssText = x(t, o);
            } else {
                const i = document.createTextNode(o);
                const a = e.childNodes;
                if (a[t]) {
                    e.removeChild(a[t]);
                }
                if (a.length) {
                    e.insertBefore(i, a[t]);
                } else {
                    e.appendChild(i);
                }
            }
        }
    },
    function(e, t, n) {
        let r;
        (()=>{
            "use strict";
            const hasOwnProperty = {}.hasOwnProperty;
            function o(...args) {
                const e = [];
                for (const r of args){
                    if (r) {
                        const i = typeof r;
                        if (i === "string" || i === "number") {
                            e.push(r);
                        } else if (Array.isArray(r) && r.length) {
                            const a = o.apply(null, r);
                            if (a) {
                                e.push(a);
                            }
                        } else if (i === "object") {
                            for(const l in r){
                                if (hasOwnProperty.call(r, l) && r[l]) {
                                    e.push(l);
                                }
                            }
                        }
                    }
                }
                return e.join(" ");
            }
            if (e.exports) {
                o.default = o;
                e.exports = o;
            } else if ((r = (()=>o).apply(t, [])) !== undefined) {
                e.exports = r;
            }
        })();
    },
    function(e, t, n) {
        e.exports = `${n.p}static/fonts/iconfont.0f693eba.eot`;
    },
    function(e, t, n) {
        "use strict";
        let r;
        const o = this && this.__extends || (r = function(e, t) {
            return (r = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for(const n in t){
                    if (t.hasOwnProperty(n)) {
                        e[n] = t[n];
                    }
                }
            })(e, t);
        }, (e, t)=>{
            function n() {
                this.constructor = e;
            }
            r(e, t);
            e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n);
        });
        var i = this && this.__assign || function() {
            return (i = Object.assign || function(e) {
                let t;
                for(let n = 1, r = arguments.length; n < r; n++){
                    for(const o in t = arguments[n]){
                        if (Object.prototype.hasOwnProperty.call(t, o)) {
                            e[o] = t[o];
                        }
                    }
                }
                return e;
            }).apply(this, arguments);
        };
        const a = this && this.__importStar || ((e)=>{
            if (e && e.__esModule) {
                return e;
            }
            const t = {};
            if (e != null) {
                for(const n in e){
                    if (Object.hasOwnProperty.call(e, n)) {
                        t[n] = e[n];
                    }
                }
            }
            t.default = e;
            return t;
        });
        const l = this && this.__importDefault || ((e)=>{
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        });
        t.__esModule = true;
        const u = a(n(0));
        const s = l(n(3));
        const c = l(n(8));
        const f = l(n(19));
        const d = l(n(20));
        const p = l(n(21));
        const h = n(22);
        n(23);
        n(26);
        n(32);
        const v = n(34);
        const g = ((e)=>{
            function t(t) {
                const n = e.call(this, t) || this;
                n.$vm = u.createRef();
                n.$scrollEdit = u.createRef();
                n.$scrollPreview = u.createRef();
                n.$blockEdit = u.createRef();
                n.$blockPreview = u.createRef();
                n.initLanguage = function() {
                    const language = n.props.language;
                    const t = v.CONFIG.langList.indexOf(language) >= 0 ? language : "zh-CN";
                    n.setState({
                        words: v.CONFIG.language[t]
                    });
                };
                n.handleChange = function(e) {
                    const value = e.target.value;
                    n.props.onChange(value);
                };
                n.saveHistory = function(e) {
                    const n_state = n.state;
                    const t_history = n_state.history;
                    let t_historyIndex = n_state.historyIndex;
                    t_history.splice(t_historyIndex + 1, t_history.length);
                    if (t_history.length >= 20) {
                        t_history.shift();
                    }
                    t_historyIndex = t_history.length;
                    t_history.push(e);
                    n.setState({
                        history: t_history,
                        historyIndex: t_historyIndex
                    });
                };
                n.save = function() {
                    n.props.onSave(n.$vm.current.value);
                };
                n.undo = function() {
                    const n_state = n.state;
                    const e_history = n_state.history;
                    let e_historyIndex = n_state.historyIndex;
                    if (!((e_historyIndex -= 1) < 0)) {
                        n.props.onChange(e_history[e_historyIndex]);
                        n.setState({
                            historyIndex: e_historyIndex
                        });
                    }
                };
                n.redo = function() {
                    const n_state = n.state;
                    const e_history = n_state.history;
                    let e_historyIndex = n_state.historyIndex;
                    if (!((e_historyIndex += 1) >= e_history.length)) {
                        n.props.onChange(e_history[e_historyIndex]);
                        n.setState({
                            historyIndex: e_historyIndex
                        });
                    }
                };
                n.toolBarLeftClick = function(e) {
                    const words = n.state.words;
                    const r = {
                        h1: {
                            prefix: "# ",
                            subfix: "",
                            str: words.h1
                        },
                        h2: {
                            prefix: "## ",
                            subfix: "",
                            str: words.h2
                        },
                        h3: {
                            prefix: "### ",
                            subfix: "",
                            str: words.h3
                        },
                        h4: {
                            prefix: "#### ",
                            subfix: "",
                            str: words.h4
                        },
                        img: {
                            prefix: "![alt](",
                            subfix: ")",
                            str: "url"
                        },
                        link: {
                            prefix: "[title](",
                            subfix: ")",
                            str: "url"
                        },
                        code: {
                            prefix: "```",
                            subfix: "\n\n```",
                            str: "language"
                        },
                        tab: {
                            prefix: "  ",
                            subfix: "",
                            str: ""
                        }
                    };
                    if (r.hasOwnProperty(e) && n.$vm.current) {
                        const o = h.insertText(n.$vm.current, r[e]);
                        n.props.onChange(o);
                    }
                    const i = {
                        undo: n.undo,
                        redo: n.redo,
                        save: n.save
                    };
                    if (i.hasOwnProperty(e)) {
                        i[e]();
                    }
                };
                n.addImg = function(e, t) {
                    n.props.addImg(e, t);
                };
                n.$img2Url = function(e, t) {
                    const r = h.insertText(n.$vm.current, {
                        prefix: `![${e}](${t})`,
                        subfix: "",
                        str: ""
                    });
                    n.props.onChange(r);
                };
                n.toolBarRightClick = function(e) {
                    const t = {
                        preview: function() {
                            n.setState({
                                preview: !n.state.preview
                            });
                        },
                        expand: function() {
                            n.setState({
                                expand: !n.state.expand
                            });
                        },
                        subfield: function() {
                            const n_state = n.state;
                            const { preview, subfield } = n_state;
                            if (preview) {
                                if (subfield) {
                                    n.setState({
                                        subfield: false,
                                        preview: false
                                    });
                                } else {
                                    n.setState({
                                        subfield: true
                                    });
                                }
                            } else if (subfield) {
                                n.setState({
                                    subfield: false
                                });
                            } else {
                                n.setState({
                                    preview: true,
                                    subfield: true
                                });
                            }
                        }
                    };
                    if (t.hasOwnProperty(e)) {
                        t[e]();
                    }
                };
                n.focusText = function() {
                    n.$vm.current.focus();
                };
                n.handleScoll = function(e) {
                    const t = n.$blockEdit.current.scrollTop / (n.$scrollEdit.current.scrollHeight - e.currentTarget.offsetHeight);
                    n.$blockPreview.current.scrollTop = (n.$scrollPreview.current.scrollHeight - n.$blockPreview.current.offsetHeight) * t;
                };
                n.state = {
                    preview: t.preview,
                    expand: t.expand,
                    subfield: t.subfield,
                    history: [],
                    historyIndex: 0,
                    lineIndex: 1,
                    value: t.value,
                    words: {}
                };
                return n;
            }
            o(t, e);
            t.prototype.componentDidMount = function() {
                const _this = this;
                const value = this.props.value;
                f.default(this.$vm.current, function(t) {
                    _this.toolBarLeftClick(t);
                });
                this.reLineNum(value);
                this.initLanguage();
            };
            t.prototype.componentDidUpdate = function(e) {
                const _this = this;
                const props = this.props;
                const { value, preview, expand, subfield } = props;
                const state = this.state;
                const { history, historyIndex } = state;
                if (e.value !== value) {
                    this.reLineNum(value);
                }
                if (value !== history[historyIndex]) {
                    window.clearTimeout(this.currentTimeout);
                    this.currentTimeout = window.setTimeout(function() {
                        _this.saveHistory(value);
                    }, 500);
                }
                if (subfield !== e.subfield && this.state.subfield !== subfield) {
                    this.setState({
                        subfield
                    });
                }
                if (preview !== e.preview && this.state.preview !== preview) {
                    this.setState({
                        preview
                    });
                }
                if (expand !== e.expand && this.state.expand !== expand) {
                    this.setState({
                        expand
                    });
                }
            };
            t.prototype.reLineNum = function(e) {
                const lineIndex = e ? e.split("\n").length : 1;
                this.setState({
                    lineIndex
                });
            };
            t.prototype.render = function() {
                const state = this.state;
                const { preview, expand, subfield, lineIndex, words } = state;
                const props = this.props;
                const { value, placeholder, fontSize, disabled, height, style, toolbar } = props;
                const x = s.default({
                    "for-editor-edit": true,
                    "for-panel": true,
                    "for-active": preview && subfield,
                    "for-edit-preview": preview && !subfield
                });
                const w = s.default({
                    "for-panel": true,
                    "for-editor-preview": true,
                    "for-active": preview && subfield
                });
                const _ = s.default({
                    "for-container": true,
                    "for-fullscreen": expand
                });
                const C = s.default({
                    "for-line-num": true,
                    hidden: !this.props.lineNum
                });
                return <div className={_} style={i({
                    height
                }, style)}>{Boolean(Object.keys(toolbar).length) && <div className="for-toolbar"><d.default {...i({
                    toolbar,
                    words,
                    onClick: this.toolBarLeftClick,
                    addImg: this.addImg
                }, this.props)}/><p.default toolbar={toolbar} words={words} preview={preview} expand={expand} subfield={subfield} onClick={this.toolBarRightClick}/></div>}<div className="for-editor" style={{
                    fontSize
                }}><div className={x} ref={this.$blockEdit} onScroll={this.handleScoll} onClick={this.focusText}><div className="for-editor-block" ref={this.$scrollEdit}>{(()=>{
                    const e = [];
                    for(let t = 0; t < lineIndex; t++){
                        e.push(<li key={t + 1}>{t + 1}</li>);
                    }
                    return <ul className={C}>{e}</ul>;
                })()}<div className="for-editor-content"><pre>{value} </pre><textarea ref={this.$vm} value={value} disabled={disabled} onChange={this.handleChange} placeholder={placeholder || words.placeholder}/></div></div></div><div className={w} ref={this.$blockPreview}><div ref={this.$scrollPreview} className="for-preview for-markdown-preview" dangerouslySetInnerHTML={{
                    __html: c.default(value)
                }}/></div></div></div>;
            };
            t.defaultProps = {
                lineNum: true,
                onChange: function() {},
                onSave: function() {},
                addImg: function() {},
                fontSize: "14px",
                disabled: false,
                preview: false,
                expand: false,
                subfield: false,
                style: {},
                toolbar: v.CONFIG.toolbar,
                language: "zh-CN"
            };
            return t;
        })(u.Component);
        t.default = g;
    },
    function(e, t, n) {
        "use strict";
        const assign = n(7);
        const o = typeof Symbol === "function" && Symbol.for;
        const i = o ? Symbol.for("react.element") : 60103;
        const a = o ? Symbol.for("react.portal") : 60106;
        const Fragment = o ? Symbol.for("react.fragment") : 60107;
        const StrictMode = o ? Symbol.for("react.strict_mode") : 60108;
        const unstable_Profiler = o ? Symbol.for("react.profiler") : 60114;
        const c = o ? Symbol.for("react.provider") : 60109;
        const f = o ? Symbol.for("react.context") : 60110;
        const unstable_ConcurrentMode = o ? Symbol.for("react.concurrent_mode") : 60111;
        const p = o ? Symbol.for("react.forward_ref") : 60112;
        const Suspense = o ? Symbol.for("react.suspense") : 60113;
        const v = o ? Symbol.for("react.memo") : 60115;
        const g = o ? Symbol.for("react.lazy") : 60116;
        const y = typeof Symbol === "function" && Symbol.iterator;
        function m(e) {
            for(var t = arguments.length - 1, n = `https://reactjs.org/docs/error-decoder.html?invariant=${e}`, r = 0; r < t; r++){
                n += `&args[]=${encodeURIComponent(arguments[r + 1])}`;
            }
            ((t, n, r, o, i, a, l)=>{
                let e = false;
                if (!e) {
                    e = undefined;
                    if (t === undefined) {
                        e = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    } else {
                        const u = [
                            n,
                            undefined,
                            undefined,
                            undefined,
                            undefined,
                            undefined
                        ];
                        let s = 0;
                        e = Error(t.replace(/%s/g, ()=>u[s++]));
                        e.name = "Invariant Violation";
                    }
                    e.framesToPop = 1;
                    throw e;
                }
            })(`Minified React error #${e}; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. `, n);
        }
        const b = {
            isMounted: function() {
                return false;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        };
        const x = {};
        function Component(e, t, n) {
            this.props = e;
            this.context = t;
            this.refs = x;
            this.updater = n || b;
        }
        function _() {}
        function PureComponent(e, t, n) {
            this.props = e;
            this.context = t;
            this.refs = x;
            this.updater = n || b;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(e, t) {
            if (typeof e !== "object" && typeof e !== "function" && e != null) {
                m("85");
            }
            this.updater.enqueueSetState(this, e, t, "setState");
        };
        Component.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        };
        _.prototype = Component.prototype;
        const O = PureComponent.prototype = new _;
        O.constructor = PureComponent;
        assign(O, Component.prototype);
        O.isPureReactComponent = true;
        const ReactCurrentDispatcher = {
            current: null
        };
        const ReactCurrentOwner = {
            current: null
        };
        const hasOwnProperty = Object.prototype.hasOwnProperty;
        const A = {
            key: true,
            ref: true,
            __self: true,
            __source: true
        };
        function createElement(e, t, n) {
            let r;
            const o = {};
            let a = null;
            let ref = null;
            if (t != null) {
                if (t.ref !== undefined) {
                    ref = t.ref;
                }
                if (t.key !== undefined) {
                    a = `${t.key}`;
                }
                for(r in t){
                    if (hasOwnProperty.call(t, r) && !A.hasOwnProperty(r)) {
                        o[r] = t[r];
                    }
                }
            }
            let u = arguments.length - 2;
            if (u === 1) {
                o.children = n;
            } else if (u > 1) {
                const s = Array(u);
                for(let c = 0; c < u; c++){
                    s[c] = arguments[c + 2];
                }
                o.children = s;
            }
            if (e && e.defaultProps) {
                for(r in u = e.defaultProps){
                    if (o[r] === undefined) {
                        o[r] = u[r];
                    }
                }
            }
            return {
                $$typeof: i,
                type: e,
                key: a,
                ref,
                props: o,
                _owner: ReactCurrentOwner.current
            };
        }
        function isValidElement(e) {
            return typeof e === "object" && e !== null && e.$$typeof === i;
        }
        const T = /\/+/g;
        const P = [];
        function L(result, keyPrefix, func, context) {
            if (P.length) {
                const o = P.pop();
                o.result = result;
                o.keyPrefix = keyPrefix;
                o.func = func;
                o.context = context;
                o.count = 0;
                return o;
            }
            return {
                result,
                keyPrefix,
                func,
                context,
                count: 0
            };
        }
        function z(e) {
            e.result = null;
            e.keyPrefix = null;
            e.func = null;
            e.context = null;
            e.count = 0;
            if (P.length < 10) {
                P.push(e);
            }
        }
        function N(e, t, n) {
            if (e == null) {
                return 0;
            }
            return function e(t, n, r, o) {
                let l = typeof t;
                if (!(l !== "undefined" && l !== "boolean")) {
                    t = null;
                }
                let u = false;
                if (t === null) {
                    u = true;
                } else {
                    switch(l){
                        case "string":
                        case "number":
                            u = true;
                            break;
                        case "object":
                            switch(t.$$typeof){
                                case i:
                                case a:
                                    u = true;
                            }
                    }
                }
                if (u) {
                    r(o, t, n === "" ? `.${D(t, 0)}` : n);
                    return 1;
                }
                u = 0;
                n = n === "" ? "." : `${n}:`;
                if (Array.isArray(t)) {
                    for(var s = 0; s < t.length; s++){
                        var c = n + D(l = t[s], s);
                        u += e(l, c, r, o);
                    }
                } else if (typeof (c = t === null || typeof t !== "object" ? null : typeof (c = y && t[y] || t["@@iterator"]) === "function" ? c : null) === "function") {
                    t = c.call(t);
                    for(s = 0; !(l = t.next()).done;){
                        u += e(l = l.value, c = n + D(l, s++), r, o);
                    }
                } else {
                    if (l === "object") {
                        m("31", (r = `${t}`) == "[object Object]" ? `object with keys {${Object.keys(t).join(", ")}}` : r, "");
                    }
                }
                return u;
            }(e, "", t, n);
        }
        function D(e, t) {
            if (typeof e === "object" && e !== null && e.key != null) {
                return ((e)=>{
                    const t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return `\$${`${e}`.replace(/[=:]/g, (e)=>t[e])}`;
                })(e.key);
            }
            return t.toString(36);
        }
        function I(e, t) {
            e.func.call(e.context, t, e.count++);
        }
        function R(e, t, n) {
            const { result, keyPrefix } = e;
            e = e.func.call(e.context, t, e.count++);
            if (Array.isArray(e)) {
                H(e, result, n, function(e) {
                    return e;
                });
            } else if (e != null) {
                if (isValidElement(e)) {
                    e = ((e, key)=>({
                            $$typeof: i,
                            type: e.type,
                            key,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }))(e, keyPrefix + (!e.key || t && t.key === e.key ? "" : `${`${e.key}`.replace(T, "$&/")}/`) + n);
                }
                result.push(e);
            }
        }
        function H(e, t, n, r, o) {
            let i = "";
            if (n != null) {
                i = `${`${n}`.replace(T, "$&/")}/`;
            }
            N(e, R, t = L(t, i, r, o));
            z(t);
        }
        function B() {
            const E_current = ReactCurrentDispatcher.current;
            if (E_current === null) {
                m("321");
            }
            return E_current;
        }
        const F = {
            Children: {
                map: function(e, t, n) {
                    if (e == null) {
                        return e;
                    }
                    const r = [];
                    H(e, r, null, t, n);
                    return r;
                },
                forEach: function(e, t, n) {
                    if (e == null) {
                        return e;
                    }
                    N(e, I, t = L(null, null, t, n));
                    z(t);
                },
                count: function(e) {
                    return N(e, function() {
                        return null;
                    }, null);
                },
                toArray: function(e) {
                    const t = [];
                    H(e, t, null, function(e) {
                        return e;
                    });
                    return t;
                },
                only: function(e) {
                    if (!isValidElement(e)) {
                        m("143");
                    }
                    return e;
                }
            },
            createRef: function() {
                return {
                    current: null
                };
            },
            Component,
            PureComponent,
            createContext: function(e, _calculateChangedBits = null) {
                e = {
                    $$typeof: f,
                    _calculateChangedBits,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                };
                e.Provider = {
                    $$typeof: c,
                    _context: e
                };
                return e.Consumer = e;
            },
            forwardRef: function(render) {
                return {
                    $$typeof: p,
                    render
                };
            },
            lazy: function(_ctor) {
                return {
                    $$typeof: g,
                    _ctor,
                    _status: -1,
                    _result: null
                };
            },
            memo: function(type, t) {
                return {
                    $$typeof: v,
                    type,
                    compare: t === undefined ? null : t
                };
            },
            useCallback: function(e, t) {
                return B().useCallback(e, t);
            },
            useContext: function(e, t) {
                return B().useContext(e, t);
            },
            useEffect: function(e, t) {
                return B().useEffect(e, t);
            },
            useImperativeHandle: function(e, t, n) {
                return B().useImperativeHandle(e, t, n);
            },
            useDebugValue: function() {},
            useLayoutEffect: function(e, t) {
                return B().useLayoutEffect(e, t);
            },
            useMemo: function(e, t) {
                return B().useMemo(e, t);
            },
            useReducer: function(e, t, n) {
                return B().useReducer(e, t, n);
            },
            useRef: function(e) {
                return B().useRef(e);
            },
            useState: function(e) {
                return B().useState(e);
            },
            Fragment,
            StrictMode,
            Suspense,
            createElement,
            cloneElement: function(e, t, n) {
                if (e == null) {
                    m("267", e);
                }
                let o;
                const a = assign({}, e.props);
                let e_key = e.key;
                let e_ref = e.ref;
                let e__owner = e._owner;
                if (t != null) {
                    if (t.ref !== undefined) {
                        e_ref = t.ref;
                        e__owner = ReactCurrentOwner.current;
                    }
                    if (t.key !== undefined) {
                        e_key = `${t.key}`;
                    }
                    var c;
                    if (e.type && e.type.defaultProps) {
                        c = e.type.defaultProps;
                    }
                    for(o in t){
                        if (hasOwnProperty.call(t, o) && !A.hasOwnProperty(o)) {
                            a[o] = t[o] === undefined && c !== undefined ? c[o] : t[o];
                        }
                    }
                }
                if ((o = arguments.length - 2) == 1) {
                    a.children = n;
                } else if (o > 1) {
                    c = Array(o);
                    for(let f = 0; f < o; f++){
                        c[f] = arguments[f + 2];
                    }
                    a.children = c;
                }
                return {
                    $$typeof: i,
                    type: e.type,
                    key: e_key,
                    ref: e_ref,
                    props: a,
                    _owner: e__owner
                };
            },
            createFactory: function(e) {
                const t = createElement.bind(null, e);
                t.type = e;
                return t;
            },
            isValidElement,
            version: "16.8.6",
            unstable_ConcurrentMode,
            unstable_Profiler,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                ReactCurrentDispatcher,
                ReactCurrentOwner,
                assign
            }
        };
        const V = {
            default: F
        };
        const $ = V && F || V;
        e.exports = $.default || $;
    },
    function(e, t, n) {
        "use strict";
        const hasOwnProperty = Object.prototype.hasOwnProperty;
        const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
        function a(e) {
            if (e == null) {
                throw new TypeError("Object.assign cannot be called with null or undefined");
            }
            return Object(e);
        }
        e.exports = (()=>{
            try {
                if (!Object.assign) {
                    return false;
                }
                const e = new String("abc");
                e[5] = "de";
                if (Object.getOwnPropertyNames(e)[0] === "5") {
                    return false;
                }
                const t = {};
                for(let n = 0; n < 10; n++){
                    t[`_${String.fromCharCode(n)}`] = n;
                }
                if (Object.getOwnPropertyNames(t).map((e)=>t[e]).join("") !== "0123456789") {
                    return false;
                }
                const r = {};
                "abcdefghijklmnopqrst".split("").forEach((e)=>{
                    r[e] = e;
                });
                return Object.keys({
                    ...r
                }).join("") === "abcdefghijklmnopqrst";
            } catch (e) {
                return false;
            }
        })() ? Object.assign : function(e, t) {
            let n;
            let l;
            const u = a(e);
            for(let s = 1; s < arguments.length; s++){
                for(const c in n = Object(arguments[s])){
                    if (hasOwnProperty.call(n, c)) {
                        u[c] = n[c];
                    }
                }
                if (Object.getOwnPropertySymbols) {
                    l = Object.getOwnPropertySymbols(n);
                    for(let f = 0; f < l.length; f++){
                        if (propertyIsEnumerable.call(n, l[f])) {
                            u[l[f]] = n[l[f]];
                        }
                    }
                }
            }
            return u;
        };
    },
    function(e, t, n) {
        "use strict";
        const r = this && this.__importDefault || ((e)=>{
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        });
        t.__esModule = true;
        const o = r(n(9));
        const i = r(n(11));
        o.default.setOptions({
            renderer: new o.default.Renderer,
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            highlight: function(e) {
                return i.default.highlightAuto(e).value;
            }
        });
        const renderer = new o.default.Renderer;
        renderer.paragraph = function(e) {
            return `<p>${e}</p>`;
        };
        renderer.link = function(e, t, n) {
            return `<a href=${e}
      title=${t || e}
      target='_blank'
      }>${n}</a>`;
        };
        t.default = function(e) {
            if (typeof e !== "string") {
                return "";
            }
            return o.default(e, {
                renderer
            });
        };
    },
    function(e, t, n) {
        (function(t) {
            (function(t) {
                "use strict";
                const n = {
                    newline: /^\n+/,
                    code: /^( {4}[^\n]+\n*)+/,
                    fences: g,
                    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
                    heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
                    nptable: g,
                    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
                    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
                    html: "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",
                    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
                    table: g,
                    lheading: /^([^\n]+)\n {0,3}(=|-){2,} *(?:\n+|$)/,
                    paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
                    text: /^[^\n]+/
                };
                class r {
                    constructor(e){
                        this.tokens = [];
                        this.tokens.links = Object.create(null);
                        this.options = e || w.defaults;
                        this.rules = n.normal;
                        if (this.options.pedantic) {
                            this.rules = n.pedantic;
                        } else {
                            if (this.options.gfm) {
                                if (this.options.tables) {
                                    this.rules = n.tables;
                                } else {
                                    this.rules = n.gfm;
                                }
                            }
                        }
                    }
                    static lex(e, t) {
                        return new r(t).lex(e);
                    }
                    lex(e) {
                        e = e.replace(/\r\n|\r/g, "\n").replace(/\t/g, "    ").replace(/\u00a0/g, " ").replace(/\u2424/g, "\n");
                        return this.token(e, true);
                    }
                    token(e, t) {
                        let r;
                        let loose;
                        let i;
                        let a;
                        let l;
                        let u;
                        let s;
                        let c;
                        let f;
                        let d;
                        let p;
                        let h;
                        let v;
                        let g;
                        let task;
                        let checked;
                        for(e = e.replace(/^ +$/gm, ""); e;){
                            if (i = this.rules.newline.exec(e)) {
                                e = e.substring(i[0].length);
                                if (i[0].length > 1) {
                                    this.tokens.push({
                                        type: "space"
                                    });
                                }
                            }
                            if (i = this.rules.code.exec(e)) {
                                const w = this.tokens[this.tokens.length - 1];
                                e = e.substring(i[0].length);
                                if (w && w.type === "paragraph") {
                                    w.text += `
${i[0].trimRight()}`;
                                } else {
                                    i = i[0].replace(/^ {4}/gm, "");
                                    this.tokens.push({
                                        type: "code",
                                        codeBlockStyle: "indented",
                                        text: this.options.pedantic ? i : b(i, "\n")
                                    });
                                }
                            } else if (i = this.rules.fences.exec(e)) {
                                e = e.substring(i[0].length);
                                this.tokens.push({
                                    type: "code",
                                    lang: i[2] ? i[2].trim() : i[2],
                                    text: i[3] || ""
                                });
                            } else if (i = this.rules.heading.exec(e)) {
                                e = e.substring(i[0].length);
                                this.tokens.push({
                                    type: "heading",
                                    depth: i[1].length,
                                    text: i[2]
                                });
                            } else if ((i = this.rules.nptable.exec(e)) && (u = {
                                type: "table",
                                header: m(i[1].replace(/^ *| *\| *$/g, "")),
                                align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                cells: i[3] ? i[3].replace(/\n$/, "").split("\n") : []
                            }).header.length === u.align.length) {
                                e = e.substring(i[0].length);
                                for(p = 0; p < u.align.length; p++){
                                    if (/^ *-+: *$/.test(u.align[p])) {
                                        u.align[p] = "right";
                                    } else if (/^ *:-+: *$/.test(u.align[p])) {
                                        u.align[p] = "center";
                                    } else if (/^ *:-+ *$/.test(u.align[p])) {
                                        u.align[p] = "left";
                                    } else {
                                        u.align[p] = null;
                                    }
                                }
                                for(p = 0; p < u.cells.length; p++){
                                    u.cells[p] = m(u.cells[p], u.header.length);
                                }
                                this.tokens.push(u);
                            } else if (i = this.rules.hr.exec(e)) {
                                e = e.substring(i[0].length);
                                this.tokens.push({
                                    type: "hr"
                                });
                            } else if (i = this.rules.blockquote.exec(e)) {
                                e = e.substring(i[0].length);
                                this.tokens.push({
                                    type: "blockquote_start"
                                });
                                i = i[0].replace(/^ *> ?/gm, "");
                                this.token(i, t);
                                this.tokens.push({
                                    type: "blockquote_end"
                                });
                            } else if (i = this.rules.list.exec(e)) {
                                e = e.substring(i[0].length);
                                s = {
                                    type: "list_start",
                                    ordered: g = (a = i[2]).length > 1,
                                    start: g ? +a : "",
                                    loose: false
                                };
                                this.tokens.push(s);
                                c = [];
                                r = false;
                                v = (i = i[0].match(this.rules.item)).length;
                                for(p = 0; p < v; p++){
                                    d = (u = i[p]).length;
                                    if (~(u = u.replace(/^ *([*+-]|\d+\.) */, "")).indexOf("\n ")) {
                                        d -= u.length;
                                        u = this.options.pedantic ? u.replace(/^ {1,4}/gm, "") : u.replace(new RegExp(`^ {1,${d}}`, "gm"), "");
                                    }
                                    if (p !== v - 1) {
                                        l = n.bullet.exec(i[p + 1])[0];
                                        if (a.length > 1 ? l.length === 1 : l.length > 1 || this.options.smartLists && l !== a) {
                                            e = i.slice(p + 1).join("\n") + e;
                                            p = v - 1;
                                        }
                                    }
                                    loose = r || /\n\n(?!\s*$)/.test(u);
                                    if (p !== v - 1) {
                                        r = u.charAt(u.length - 1) === "\n";
                                        if (!loose) {
                                            loose = r;
                                        }
                                    }
                                    if (loose) {
                                        s.loose = true;
                                    }
                                    checked = undefined;
                                    if (task = /^\[[ xX]\] /.test(u)) {
                                        checked = u[1] !== " ";
                                        u = u.replace(/^\[[ xX]\] +/, "");
                                    }
                                    f = {
                                        type: "list_item_start",
                                        task,
                                        checked,
                                        loose
                                    };
                                    c.push(f);
                                    this.tokens.push(f);
                                    this.token(u, false);
                                    this.tokens.push({
                                        type: "list_item_end"
                                    });
                                }
                                if (s.loose) {
                                    v = c.length;
                                    for(p = 0; p < v; p++){
                                        c[p].loose = true;
                                    }
                                }
                                this.tokens.push({
                                    type: "list_end"
                                });
                            } else if (i = this.rules.html.exec(e)) {
                                e = e.substring(i[0].length);
                                this.tokens.push({
                                    type: this.options.sanitize ? "paragraph" : "html",
                                    pre: !this.options.sanitizer && (i[1] === "pre" || i[1] === "script" || i[1] === "style"),
                                    text: i[0]
                                });
                            } else if (t && (i = this.rules.def.exec(e))) {
                                e = e.substring(i[0].length);
                                if (i[3]) {
                                    i[3] = i[3].substring(1, i[3].length - 1);
                                }
                                h = i[1].toLowerCase().replace(/\s+/g, " ");
                                if (!this.tokens.links[h]) {
                                    this.tokens.links[h] = {
                                        href: i[2],
                                        title: i[3]
                                    };
                                }
                            } else if ((i = this.rules.table.exec(e)) && (u = {
                                type: "table",
                                header: m(i[1].replace(/^ *| *\| *$/g, "")),
                                align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                                cells: i[3] ? i[3].replace(/\n$/, "").split("\n") : []
                            }).header.length === u.align.length) {
                                e = e.substring(i[0].length);
                                for(p = 0; p < u.align.length; p++){
                                    if (/^ *-+: *$/.test(u.align[p])) {
                                        u.align[p] = "right";
                                    } else if (/^ *:-+: *$/.test(u.align[p])) {
                                        u.align[p] = "center";
                                    } else if (/^ *:-+ *$/.test(u.align[p])) {
                                        u.align[p] = "left";
                                    } else {
                                        u.align[p] = null;
                                    }
                                }
                                for(p = 0; p < u.cells.length; p++){
                                    u.cells[p] = m(u.cells[p].replace(/^ *\| *| *\| *$/g, ""), u.header.length);
                                }
                                this.tokens.push(u);
                            } else if (i = this.rules.lheading.exec(e)) {
                                e = e.substring(i[0].length);
                                this.tokens.push({
                                    type: "heading",
                                    depth: i[2] === "=" ? 1 : 2,
                                    text: i[1]
                                });
                            } else if (t && (i = this.rules.paragraph.exec(e))) {
                                e = e.substring(i[0].length);
                                this.tokens.push({
                                    type: "paragraph",
                                    text: i[1].charAt(i[1].length - 1) === "\n" ? i[1].slice(0, -1) : i[1]
                                });
                            } else if (i = this.rules.text.exec(e)) {
                                e = e.substring(i[0].length);
                                this.tokens.push({
                                    type: "text",
                                    text: i[0]
                                });
                            } else if (e) {
                                throw new Error(`Infinite loop on byte: ${e.charCodeAt(0)}`);
                            }
                        }
                        return this.tokens;
                    }
                }
                n._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
                n._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
                n.def = d(n.def).replace("label", n._label).replace("title", n._title).getRegex();
                n.bullet = /(?:[*+-]|\d{1,9}\.)/;
                n.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
                n.item = d(n.item, "gm").replace(/bull/g, n.bullet).getRegex();
                n.list = d(n.list).replace(/bull/g, n.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", `\\n+(?=${n.def.source})`).getRegex();
                n._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
                n._comment = /<!--(?!-?>)[\s\S]*?-->/;
                n.html = d(n.html, "i").replace("comment", n._comment).replace("tag", n._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
                n.paragraph = d(n.paragraph).replace("hr", n.hr).replace("heading", n.heading).replace("lheading", n.lheading).replace("tag", n._tag).getRegex();
                n.blockquote = d(n.blockquote).replace("paragraph", n.paragraph).getRegex();
                n.normal = y({}, n);
                n.gfm = y({}, n.normal, {
                    fences: /^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
                    paragraph: /^/,
                    heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
                });
                n.gfm.paragraph = d(n.paragraph).replace("(?!", `(?!${n.gfm.fences.source.replace("\\1", "\\2")}|${n.list.source.replace("\\1", "\\3")}|`).getRegex();
                n.tables = y({}, n.gfm, {
                    nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
                    table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
                });
                n.pedantic = y({}, n.normal, {
                    html: d("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", n._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
                    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
                });
                r.rules = n;
                const o = {
                    escape: /^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,
                    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
                    url: g,
                    tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
                    link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
                    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
                    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
                    strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
                    em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
                    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
                    br: /^( {2,}|\\)\n(?!\s*$)/,
                    del: g,
                    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
                };
                class i {
                    constructor(e, t){
                        this.options = t || w.defaults;
                        this.links = e;
                        this.rules = o.normal;
                        this.renderer = this.options.renderer || new a;
                        this.renderer.options = this.options;
                        if (!this.links) {
                            throw new Error("Tokens array requires a `links` property.");
                        }
                        if (this.options.pedantic) {
                            this.rules = o.pedantic;
                        } else {
                            if (this.options.gfm) {
                                if (this.options.breaks) {
                                    this.rules = o.breaks;
                                } else {
                                    this.rules = o.gfm;
                                }
                            }
                        }
                    }
                    static output(e, t, n) {
                        return new i(t, n).output(e);
                    }
                    output(e) {
                        let t;
                        let n;
                        let r;
                        let o;
                        let a;
                        let l;
                        let u = "";
                        while(e){
                            if (a = this.rules.escape.exec(e)) {
                                e = e.substring(a[0].length);
                                u += c(a[1]);
                            } else if (a = this.rules.tag.exec(e)) {
                                if (!this.inLink && /^<a /i.test(a[0])) {
                                    this.inLink = true;
                                } else if (this.inLink && /^<\/a>/i.test(a[0])) {
                                    this.inLink = false;
                                }
                                if (!this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(a[0])) {
                                    this.inRawBlock = true;
                                } else if (this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(a[0])) {
                                    this.inRawBlock = false;
                                }
                                e = e.substring(a[0].length);
                                u += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(a[0]) : c(a[0]) : a[0];
                            } else if (a = this.rules.link.exec(e)) {
                                const s = x(a[2], "()");
                                if (s > -1) {
                                    const f = a[0].length - (a[2].length - s) - (a[3] || "").length;
                                    a[2] = a[2].substring(0, s);
                                    a[0] = a[0].substring(0, f).trim();
                                    a[3] = "";
                                }
                                e = e.substring(a[0].length);
                                this.inLink = true;
                                r = a[2];
                                if (this.options.pedantic) {
                                    if (t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r)) {
                                        r = t[1];
                                        o = t[3];
                                    } else {
                                        o = "";
                                    }
                                } else {
                                    o = a[3] ? a[3].slice(1, -1) : "";
                                }
                                r = r.trim().replace(/^<([\s\S]*)>$/, "$1");
                                u += this.outputLink(a, {
                                    href: i.escapes(r),
                                    title: i.escapes(o)
                                });
                                this.inLink = false;
                            } else if ((a = this.rules.reflink.exec(e)) || (a = this.rules.nolink.exec(e))) {
                                e = e.substring(a[0].length);
                                t = (a[2] || a[1]).replace(/\s+/g, " ");
                                if (!(t = this.links[t.toLowerCase()]) || !t.href) {
                                    u += a[0].charAt(0);
                                    e = a[0].substring(1) + e;
                                    continue;
                                }
                                this.inLink = true;
                                u += this.outputLink(a, t);
                                this.inLink = false;
                            } else if (a = this.rules.strong.exec(e)) {
                                e = e.substring(a[0].length);
                                u += this.renderer.strong(this.output(a[4] || a[3] || a[2] || a[1]));
                            } else if (a = this.rules.em.exec(e)) {
                                e = e.substring(a[0].length);
                                u += this.renderer.em(this.output(a[6] || a[5] || a[4] || a[3] || a[2] || a[1]));
                            } else if (a = this.rules.code.exec(e)) {
                                e = e.substring(a[0].length);
                                u += this.renderer.codespan(c(a[2].trim(), true));
                            } else if (a = this.rules.br.exec(e)) {
                                e = e.substring(a[0].length);
                                u += this.renderer.br();
                            } else if (a = this.rules.del.exec(e)) {
                                e = e.substring(a[0].length);
                                u += this.renderer.del(this.output(a[1]));
                            } else if (a = this.rules.autolink.exec(e)) {
                                e = e.substring(a[0].length);
                                r = a[2] === "@" ? `mailto:${n = c(this.mangle(a[1]))}` : n = c(a[1]);
                                u += this.renderer.link(r, null, n);
                            } else if (this.inLink || !(a = this.rules.url.exec(e))) {
                                if (a = this.rules.text.exec(e)) {
                                    e = e.substring(a[0].length);
                                    if (this.inRawBlock) {
                                        u += this.renderer.text(a[0]);
                                    } else {
                                        u += this.renderer.text(c(this.smartypants(a[0])));
                                    }
                                } else if (e) {
                                    throw new Error(`Infinite loop on byte: ${e.charCodeAt(0)}`);
                                }
                            } else {
                                if (a[2] === "@") {
                                    r = `mailto:${n = c(a[0])}`;
                                } else {
                                    do {
                                        l = a[0];
                                        a[0] = this.rules._backpedal.exec(a[0])[0];
                                    }while (l !== a[0])
                                    n = c(a[0]);
                                    r = a[1] === "www." ? `http://${n}` : n;
                                }
                                e = e.substring(a[0].length);
                                u += this.renderer.link(r, null, n);
                            }
                        }
                        return u;
                    }
                    static escapes(e) {
                        if (e) {
                            return e.replace(i.rules._escapes, "$1");
                        }
                        return e;
                    }
                    outputLink(e, t) {
                        const t_href = t.href;
                        const r = t.title ? c(t.title) : null;
                        if (e[0].charAt(0) !== "!") {
                            return this.renderer.link(t_href, r, this.output(e[1]));
                        }
                        return this.renderer.image(t_href, r, c(e[1]));
                    }
                    smartypants(e) {
                        if (this.options.smartypants) {
                            return e.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
                        }
                        return e;
                    }
                    mangle(e) {
                        if (!this.options.mangle) {
                            return e;
                        }
                        let t;
                        let n = "";
                        for(let r = e.length, o = 0; o < r; o++){
                            t = e.charCodeAt(o);
                            if (Math.random() > 0.5) {
                                t = `x${t.toString(16)}`;
                            }
                            n += `&#${t};`;
                        }
                        return n;
                    }
                }
                class a {
                    constructor(e){
                        this.options = e || w.defaults;
                    }
                    code(e, t, n) {
                        const r = (t || "").match(/\S*/)[0];
                        if (this.options.highlight) {
                            const o = this.options.highlight(e, r);
                            if (o != null && o !== e) {
                                n = true;
                                e = o;
                            }
                        }
                        if (r) {
                            return `<pre><code class="${this.options.langPrefix}${c(r, true)}">${n ? e : c(e, true)}</code></pre>
`;
                        }
                        return `<pre><code>${n ? e : c(e, true)}</code></pre>`;
                    }
                    blockquote(e) {
                        return `<blockquote>
${e}</blockquote>
`;
                    }
                    html(e) {
                        return e;
                    }
                    heading(e, t, n, r) {
                        if (this.options.headerIds) {
                            return `<h${t} id="${this.options.headerPrefix}${r.slug(n)}">${e}</h${t}>
`;
                        }
                        return `<h${t}>${e}</h${t}>
`;
                    }
                    hr() {
                        if (this.options.xhtml) {
                            return "<hr/>\n";
                        }
                        return "<hr>\n";
                    }
                    list(e, t, n) {
                        const r = t ? "ol" : "ul";
                        return `<${r}${t && n !== 1 ? ` start="${n}"` : ""}>
${e}</${r}>
`;
                    }
                    listitem(e) {
                        return `<li>${e}</li>
`;
                    }
                    checkbox(e) {
                        return `<input ${e ? 'checked="" ' : ""}disabled="" type="checkbox"${this.options.xhtml ? " /" : ""}> `;
                    }
                    paragraph(e) {
                        return `<p>${e}</p>
`;
                    }
                    table(e, t) {
                        if (t) {
                            t = `<tbody>${t}</tbody>`;
                        }
                        return `<table>
<thead>
${e}</thead>
${t}</table>
`;
                    }
                    tablerow(e) {
                        return `<tr>
${e}</tr>
`;
                    }
                    tablecell(e, t) {
                        const n = t.header ? "th" : "td";
                        return `${(t.align ? `<${n} align="${t.align}">` : `<${n}>`) + e}</${n}>
`;
                    }
                    strong(e) {
                        return `<strong>${e}</strong>`;
                    }
                    em(e) {
                        return `<em>${e}</em>`;
                    }
                    codespan(e) {
                        return `<code>${e}</code>`;
                    }
                    br() {
                        if (this.options.xhtml) {
                            return "<br/>";
                        }
                        return "<br>";
                    }
                    del(e) {
                        return `<del>${e}</del>`;
                    }
                    link(e, t, n) {
                        if ((e = p(this.options.sanitize, this.options.baseUrl, e)) === null) {
                            return n;
                        }
                        let r = `<a href="${c(e)}"`;
                        if (t) {
                            r += ` title="${t}"`;
                        }
                        return `${r}>${n}</a>`;
                    }
                    image(e, t, n) {
                        if ((e = p(this.options.sanitize, this.options.baseUrl, e)) === null) {
                            return n;
                        }
                        let r = `<img src="${e}" alt="${n}"`;
                        if (t) {
                            r += ` title="${t}"`;
                        }
                        return r + (this.options.xhtml ? "/>" : ">");
                    }
                    text(e) {
                        return e;
                    }
                }
                class l {
                    br() {
                        return "";
                    }
                }
                class u {
                    constructor(e){
                        this.tokens = [];
                        this.token = null;
                        this.options = e || w.defaults;
                        this.options.renderer = this.options.renderer || new a;
                        this.renderer = this.options.renderer;
                        this.renderer.options = this.options;
                        this.slugger = new s;
                    }
                    static parse(e, t) {
                        return new u(t).parse(e);
                    }
                    parse(e) {
                        this.inline = new i(e.links, this.options);
                        this.inlineText = new i(e.links, y({}, this.options, {
                            renderer: new l
                        }));
                        this.tokens = e.reverse();
                        let t = "";
                        while(this.next()){
                            t += this.tok();
                        }
                        return t;
                    }
                    next() {
                        this.token = this.tokens.pop();
                        return this.token;
                    }
                    peek() {
                        return this.tokens[this.tokens.length - 1] || 0;
                    }
                    parseText() {
                        let text = this.token.text;
                        while(this.peek().type === "text"){
                            text += `
${this.next().text}`;
                        }
                        return this.inline.output(text);
                    }
                    tok() {
                        switch(this.token.type){
                            case "space":
                                return "";
                            case "hr":
                                return this.renderer.hr();
                            case "heading":
                                return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, f(this.inlineText.output(this.token.text)), this.slugger);
                            case "code":
                                return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
                            case "table":
                                let e;
                                let t;
                                let n;
                                let r;
                                let o = "";
                                var i = "";
                                n = "";
                                for(e = 0; e < this.token.header.length; e++){
                                    n += this.renderer.tablecell(this.inline.output(this.token.header[e]), {
                                        header: true,
                                        align: this.token.align[e]
                                    });
                                }
                                o += this.renderer.tablerow(n);
                                for(e = 0; e < this.token.cells.length; e++){
                                    t = this.token.cells[e];
                                    n = "";
                                    for(r = 0; r < t.length; r++){
                                        n += this.renderer.tablecell(this.inline.output(t[r]), {
                                            header: false,
                                            align: this.token.align[r]
                                        });
                                    }
                                    i += this.renderer.tablerow(n);
                                }
                                return this.renderer.table(o, i);
                            case "blockquote_start":
                                for(i = ""; this.next().type !== "blockquote_end";){
                                    i += this.tok();
                                }
                                return this.renderer.blockquote(i);
                            case "list_start":
                                i = "";
                                const a = this.token.ordered;
                                const l = this.token.start;
                                while(this.next().type !== "list_end"){
                                    i += this.tok();
                                }
                                return this.renderer.list(i, a, l);
                            case "list_item_start":
                                i = "";
                                const u = this.token.loose;
                                const s = this.token.checked;
                                const c = this.token.task;
                                for(this.token.task && (i += this.renderer.checkbox(s)); this.next().type !== "list_item_end";){
                                    i += u || this.token.type !== "text" ? this.tok() : this.parseText();
                                }
                                return this.renderer.listitem(i, c, s);
                            case "html":
                                return this.renderer.html(this.token.text);
                            case "paragraph":
                                return this.renderer.paragraph(this.inline.output(this.token.text));
                            case "text":
                                return this.renderer.paragraph(this.parseText());
                            default:
                                const d = `Token with "${this.token.type}" type was not found.`;
                                if (!this.options.silent) {
                                    throw new Error(d);
                                }
                                console.log(d);
                        }
                    }
                }
                class s {
                    constructor(){
                        this.seen = {};
                    }
                    slug(e) {
                        let t = e.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
                        if (this.seen.hasOwnProperty(t)) {
                            const n = t;
                            do {
                                this.seen[n]++;
                                t = `${n}-${this.seen[n]}`;
                            }while (this.seen.hasOwnProperty(t))
                        }
                        this.seen[t] = 0;
                        return t;
                    }
                }
                function c(e, t) {
                    if (t) {
                        if (c.escapeTest.test(e)) {
                            return e.replace(c.escapeReplace, (e)=>c.replacements[e]);
                        }
                    } else if (c.escapeTestNoEncode.test(e)) {
                        return e.replace(c.escapeReplaceNoEncode, (e)=>c.replacements[e]);
                    }
                    return e;
                }
                function f(e) {
                    return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi, (e, t)=>{
                        if ((t = t.toLowerCase()) === "colon") {
                            return ":";
                        }
                        if (t.charAt(0) === "#") {
                            if (t.charAt(1) === "x") {
                                return String.fromCharCode(parseInt(t.substring(2), 16));
                            }
                            return String.fromCharCode(+t.substring(1));
                        }
                        return "";
                    });
                }
                function d(e, t) {
                    e = e.source || e;
                    t = t || "";
                    return {
                        replace: function(t, n) {
                            n = (n = n.source || n).replace(/(^|[^\[])\^/g, "$1");
                            e = e.replace(t, n);
                            return this;
                        },
                        getRegex: function() {
                            return new RegExp(e, t);
                        }
                    };
                }
                function p(sanitize, baseUrl, n) {
                    if (sanitize) {
                        try {
                            var r = decodeURIComponent(f(n)).replace(/[^\w:]/g, "").toLowerCase();
                        } catch (e) {
                            return null;
                        }
                        if (r.indexOf("javascript:") === 0 || r.indexOf("vbscript:") === 0 || r.indexOf("data:") === 0) {
                            return null;
                        }
                    }
                    if (baseUrl && !v.test(n)) {
                        n = ((baseUrl_1, t)=>{
                            if (!h[` ${baseUrl_1}`]) {
                                if (/^[^:]+:\/*[^\/]*$/.test(baseUrl_1)) {
                                    h[` ${baseUrl_1}`] = `${baseUrl_1}/`;
                                } else {
                                    h[` ${baseUrl_1}`] = b(baseUrl_1, "/", true);
                                }
                            }
                            baseUrl_1 = h[` ${baseUrl_1}`];
                            if (t.slice(0, 2) === "//") {
                                return baseUrl_1.replace(/:[\s\S]*/, ":") + t;
                            }
                            if (t.charAt(0) === "/") {
                                return baseUrl_1.replace(/(:\/*[^\/]*)[\s\S]*/, "$1") + t;
                            }
                            return baseUrl_1 + t;
                        })(baseUrl, n);
                    }
                    try {
                        n = encodeURI(n).replace(/%25/g, "%");
                    } catch (e) {
                        return null;
                    }
                    return n;
                }
                o._punctuation = "!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~";
                o.em = d(o.em).replace(/punctuation/g, o._punctuation).getRegex();
                o._escapes = /\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g;
                o._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
                o._email = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
                o.autolink = d(o.autolink).replace("scheme", o._scheme).replace("email", o._email).getRegex();
                o._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
                o.tag = d(o.tag).replace("comment", n._comment).replace("attribute", o._attribute).getRegex();
                o._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|`(?!`)|[^\[\]\\`])*?/;
                o._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/;
                o._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
                o.link = d(o.link).replace("label", o._label).replace("href", o._href).replace("title", o._title).getRegex();
                o.reflink = d(o.reflink).replace("label", o._label).getRegex();
                o.normal = y({}, o);
                o.pedantic = y({}, o.normal, {
                    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
                    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
                    link: d(/^!?\[(label)\]\((.*?)\)/).replace("label", o._label).getRegex(),
                    reflink: d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", o._label).getRegex()
                });
                o.gfm = y({}, o.normal, {
                    escape: d(o.escape).replace("])", "~|])").getRegex(),
                    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
                    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
                    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
                    del: /^~+(?=\S)([\s\S]*?\S)~+/,
                    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
                });
                o.gfm.url = d(o.gfm.url, "i").replace("email", o.gfm._extended_email).getRegex();
                o.breaks = y({}, o.gfm, {
                    br: d(o.br).replace("{2,}", "*").getRegex(),
                    text: d(o.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
                });
                i.rules = o;
                l.prototype.strong = l.prototype.em = l.prototype.codespan = l.prototype.del = l.prototype.text = function(e) {
                    return e;
                };
                l.prototype.link = l.prototype.image = function(e, t, n) {
                    return `${n}`;
                };
                c.escapeTest = /[&<>"']/;
                c.escapeReplace = /[&<>"']/g;
                c.replacements = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;"
                };
                c.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
                c.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
                var h = {};
                var v = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
                function g() {}
                function y(e) {
                    let t;
                    let n;
                    for(let r = 1; r < arguments.length; r++){
                        for(n in t = arguments[r]){
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                e[n] = t[n];
                            }
                        }
                    }
                    return e;
                }
                function m(e, t) {
                    const n = e.replace(/\|/g, (e, t, n)=>{
                        let r = false;
                        for(let o = t; --o >= 0 && n[o] === "\\";){
                            r = !r;
                        }
                        if (r) {
                            return "|";
                        }
                        return " |";
                    }).split(/ \|/);
                    let r = 0;
                    if (n.length > t) {
                        n.splice(t);
                    } else {
                        while(n.length < t){
                            n.push("");
                        }
                    }
                    for(; r < n.length; r++){
                        n[r] = n[r].trim().replace(/\\\|/g, "|");
                    }
                    return n;
                }
                function b(e, t, n) {
                    if (e.length === 0) {
                        return "";
                    }
                    for(var r = 0; r < e.length;){
                        const o = e.charAt(e.length - r - 1);
                        if (o !== t || n) {
                            if (o === t || !n) {
                                break;
                            }
                            r++;
                        } else {
                            r++;
                        }
                    }
                    return e.substr(0, e.length - r);
                }
                function x(e, t) {
                    if (e.indexOf(t[1]) === -1) {
                        return -1;
                    }
                    let n = 0;
                    for(let r = 0; r < e.length; r++){
                        if (e[r] === "\\") {
                            r++;
                        } else if (e[r] === t[0]) {
                            n++;
                        } else if (e[r] === t[1] && --n < 0) {
                            return r;
                        }
                    }
                    return -1;
                }
                function w(e, t, n) {
                    if (e == null) {
                        throw new Error("marked(): input parameter is undefined or null");
                    }
                    if (typeof e !== "string") {
                        throw new Error(`marked(): input parameter is of type ${Object.prototype.toString.call(e)}, string expected`);
                    }
                    if (n || typeof t === "function") {
                        if (!n) {
                            n = t;
                            t = null;
                        }
                        let o;
                        let i;
                        const a = (t = y({}, w.defaults, t || {})).highlight;
                        let l = 0;
                        try {
                            o = r.lex(e, t);
                        } catch (error) {
                            return n(error);
                        }
                        i = o.length;
                        const s = (e)=>{
                            if (e) {
                                t.highlight = a;
                                return n(e);
                            }
                            let r;
                            try {
                                r = u.parse(o, t);
                            } catch (error) {
                                e = error;
                            }
                            t.highlight = a;
                            if (e) {
                                return n(e);
                            }
                            return n(null, r);
                        };
                        if (!a || a.length < 3) {
                            return s();
                        }
                        delete t.highlight;
                        if (!i) {
                            return s();
                        }
                        for(; l < o.length; l++){
                            ((e)=>{
                                if (e.type !== "code") {
                                    if (!--i) {
                                        s();
                                    }
                                } else {
                                    a(e.text, e.lang, function(t, n) {
                                        if (t) {
                                            return s(t);
                                        }
                                        if (n == null || n === e.text) {
                                            return --i || s();
                                        }
                                        e.text = n;
                                        e.escaped = true;
                                        return void (--i || s());
                                    });
                                }
                            })(o[l]);
                        }
                    } else {
                        try {
                            if (t) {
                                t = y({}, w.defaults, t);
                            }
                            return u.parse(r.lex(e, t), t);
                        } catch (error) {
                            error.message += "\nPlease report this to https://github.com/markedjs/marked.";
                            if ((t || w.defaults).silent) {
                                return `<p>An error occurred:</p><pre>${c(`${error.message}`, true)}</pre>`;
                            }
                            throw error;
                        }
                    }
                }
                g.exec = g;
                w.options = w.setOptions = function(e) {
                    y(w.defaults, e);
                    return w;
                };
                w.getDefaults = function() {
                    return {
                        baseUrl: null,
                        breaks: false,
                        gfm: true,
                        headerIds: true,
                        headerPrefix: "",
                        highlight: null,
                        langPrefix: "language-",
                        mangle: true,
                        pedantic: false,
                        renderer: new a,
                        sanitize: false,
                        sanitizer: null,
                        silent: false,
                        smartLists: false,
                        smartypants: false,
                        tables: true,
                        xhtml: false
                    };
                };
                w.defaults = w.getDefaults();
                w.Parser = u;
                w.parser = u.parse;
                w.Renderer = a;
                w.TextRenderer = l;
                w.Lexer = r;
                w.lexer = r.lex;
                w.InlineLexer = i;
                w.inlineLexer = i.output;
                w.Slugger = s;
                w.parse = w;
                e.exports = w;
            })(this || typeof window !== "undefined" && window);
        }).call(this, n(10));
    },
    function(e, t) {
        let n;
        n = function() {
            return this;
        }();
        try {
            n = n || new Function("return this")();
        } catch (e) {
            if (typeof window === "object") {
                n = window;
            }
        }
        e.exports = n;
    },
    function(e, t, n) {
        "use strict";
        t.__esModule = true;
        const r = n(12);
        r.registerLanguage("css", n(13));
        r.registerLanguage("json", n(14));
        r.registerLanguage("less", n(15));
        r.registerLanguage("scss", n(16));
        r.registerLanguage("javascript", n(17));
        r.registerLanguage("typescript", n(18));
        t.default = r;
    },
    function(e, t, n) {
        typeof window === "object" && window || typeof self === "object" && self;
        ((e)=>{
            const t = [];
            const r = {};
            const o = {};
            const i = /^(no-?highlight|plain|text)$/i;
            const a = /\blang(?:uage)?-([\w-]+)\b/i;
            const l = /((^(<[^>]+>|\t|)+|(?:\n)))/gm;
            const u = "</span>";
            let s = {
                classPrefix: "hljs-",
                tabReplace: null,
                useBR: false,
                languages: undefined
            };
            function c(e) {
                return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
            }
            function f(e) {
                return e.nodeName.toLowerCase();
            }
            function d(e, t) {
                const n = e && e.exec(t);
                return n && n.index === 0;
            }
            function p(e) {
                return i.test(e);
            }
            function h(e) {
                let t;
                const n = {};
                const r = Array.prototype.slice.call(arguments, 1);
                for(t in e){
                    n[t] = e[t];
                }
                r.forEach((e)=>{
                    for(t in e){
                        n[t] = e[t];
                    }
                });
                return n;
            }
            function v(e) {
                const t = [];
                (function e(n, offset) {
                    for(let node = n.firstChild; node; node = node.nextSibling){
                        if (node.nodeType === 3) {
                            offset += node.nodeValue.length;
                        } else if (node.nodeType === 1) {
                            t.push({
                                event: "start",
                                offset,
                                node
                            });
                            offset = e(node, offset);
                            if (!f(node).match(/br|hr|img|input/)) {
                                t.push({
                                    event: "stop",
                                    offset,
                                    node
                                });
                            }
                        }
                    }
                    return offset;
                })(e, 0);
                return t;
            }
            function g(e) {
                function t(e) {
                    return e && e.source || e;
                }
                function r(n, r) {
                    return new RegExp(t(n), `m${e.case_insensitive ? "i" : ""}${r ? "g" : ""}`);
                }
                (function o(i, a) {
                    if (!i.compiled) {
                        i.compiled = true;
                        i.keywords = i.keywords || i.beginKeywords;
                        if (i.keywords) {
                            const l = {};
                            const u = (t, n)=>{
                                if (e.case_insensitive) {
                                    n = n.toLowerCase();
                                }
                                n.split(" ").forEach((e)=>{
                                    const n = e.split("|");
                                    l[n[0]] = [
                                        t,
                                        n[1] ? Number(n[1]) : 1
                                    ];
                                });
                            };
                            if (typeof i.keywords === "string") {
                                u("keyword", i.keywords);
                            } else {
                                Object.keys(i.keywords).forEach((e)=>{
                                    u(e, i.keywords[e]);
                                });
                            }
                            i.keywords = l;
                        }
                        i.lexemesRe = r(i.lexemes || /\w+/, true);
                        if (a) {
                            if (i.beginKeywords) {
                                i.begin = `\\b(${i.beginKeywords.split(" ").join("|")})\\b`;
                            }
                            if (!i.begin) {
                                i.begin = /\B|\b/;
                            }
                            i.beginRe = r(i.begin);
                            if (i.endSameAsBegin) {
                                i.end = i.begin;
                            }
                            if (!(i.end || i.endsWithParent)) {
                                i.end = /\B|\b/;
                            }
                            if (i.end) {
                                i.endRe = r(i.end);
                            }
                            i.terminator_end = t(i.end) || "";
                            if (i.endsWithParent && a.terminator_end) {
                                i.terminator_end += (i.end ? "|" : "") + a.terminator_end;
                            }
                        }
                        if (i.illegal) {
                            i.illegalRe = r(i.illegal);
                        }
                        if (i.relevance == null) {
                            i.relevance = 1;
                        }
                        if (!i.contains) {
                            i.contains = [];
                        }
                        i.contains = Array.prototype.concat.apply([], i.contains.map((e)=>((e)=>{
                                if (e.variants && !e.cached_variants) {
                                    e.cached_variants = e.variants.map((t)=>h(e, {
                                            variants: null
                                        }, t));
                                }
                                return e.cached_variants || e.endsWithParent && [
                                    h(e)
                                ] || [
                                    e
                                ];
                            })(e === "self" ? i : e)));
                        i.contains.forEach((e)=>{
                            o(e, i);
                        });
                        if (i.starts) {
                            o(i.starts, a);
                        }
                        const s = i.contains.map((e)=>{
                            if (e.beginKeywords) {
                                return `\\.?(?:${e.begin})\\.?`;
                            }
                            return e.begin;
                        }).concat([
                            i.terminator_end,
                            i.illegal
                        ]).map(t).filter(Boolean);
                        i.terminators = s.length ? r(((e, n)=>{
                            const r = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
                            let o = 0;
                            let i = "";
                            for(let a = 0; a < e.length; a++){
                                const l = o;
                                let u = t(e[a]);
                                for(a > 0 && (i += "|"); u.length > 0;){
                                    const s = r.exec(u);
                                    if (s == null) {
                                        i += u;
                                        break;
                                    }
                                    i += u.substring(0, s.index);
                                    u = u.substring(s.index + s[0].length);
                                    if (s[0][0] == "\\" && s[1]) {
                                        i += `\\${String(Number(s[1]) + l)}`;
                                    } else {
                                        i += s[0];
                                        if (s[0] == "(") {
                                            o++;
                                        }
                                    }
                                }
                            }
                            return i;
                        })(s), true) : {
                            exec: function() {
                                return null;
                            }
                        };
                    }
                })(e);
            }
            function y(language, t, n, o) {
                function i(e) {
                    return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "m");
                }
                function a(e, t) {
                    const n = v.case_insensitive ? t[0].toLowerCase() : t[0];
                    return e.keywords.hasOwnProperty(n) && e.keywords[n];
                }
                function l(e, t, n, r) {
                    let o = `<span class="${r ? "" : s.classPrefix}`;
                    if (e) {
                        return (o += `${e}">`) + t + (n ? "" : u);
                    }
                    return t;
                }
                function f() {
                    C += x.subLanguage != null ? (()=>{
                        const e = typeof x.subLanguage === "string";
                        if (e && !r[x.subLanguage]) {
                            return c(O);
                        }
                        const t = e ? y(x.subLanguage, O, true, w[x.subLanguage]) : m(O, x.subLanguage.length ? x.subLanguage : undefined);
                        if (x.relevance > 0) {
                            relevance += t.relevance;
                        }
                        if (e) {
                            w[x.subLanguage] = t.top;
                        }
                        return l(t.language, t.value, false, true);
                    })() : (()=>{
                        let e;
                        let t;
                        let n;
                        let r;
                        if (!x.keywords) {
                            return c(O);
                        }
                        r = "";
                        t = 0;
                        x.lexemesRe.lastIndex = 0;
                        for(n = x.lexemesRe.exec(O); n;){
                            r += c(O.substring(t, n.index));
                            if (e = a(x, n)) {
                                relevance += e[1];
                                r += l(e[0], c(n[0]));
                            } else {
                                r += c(n[0]);
                            }
                            t = x.lexemesRe.lastIndex;
                            n = x.lexemesRe.exec(O);
                        }
                        return r + c(O.substr(t));
                    })();
                    O = "";
                }
                function p(e) {
                    C += e.className ? l(e.className, "", true) : "";
                    x = Object.create(e, {
                        parent: {
                            value: x
                        }
                    });
                }
                function h(e, t) {
                    O += e;
                    if (t == null) {
                        f();
                        return 0;
                    }
                    const r = ((e, t)=>{
                        let r;
                        let n = 0;
                        for(r = t.contains.length; n < r; n++){
                            if (d(t.contains[n].beginRe, e)) {
                                if (t.contains[n].endSameAsBegin) {
                                    t.contains[n].endRe = i(t.contains[n].beginRe.exec(e)[0]);
                                }
                                return t.contains[n];
                            }
                        }
                    })(t, x);
                    if (r) {
                        if (r.skip) {
                            O += t;
                        } else {
                            if (r.excludeBegin) {
                                O += t;
                            }
                            f();
                            if (!(r.returnBegin || r.excludeBegin)) {
                                O = t;
                            }
                        }
                        p(r);
                        if (r.returnBegin) {
                            return 0;
                        }
                        return t.length;
                    }
                    const o = function e(t, n) {
                        if (d(t.endRe, n)) {
                            while(t.endsParent && t.parent){
                                t = t.parent;
                            }
                            return t;
                        }
                        if (t.endsWithParent) {
                            return e(t.parent, n);
                        }
                    }(x, t);
                    if (o) {
                        const a = x;
                        if (a.skip) {
                            O += t;
                        } else {
                            if (!(a.returnEnd || a.excludeEnd)) {
                                O += t;
                            }
                            f();
                            if (a.excludeEnd) {
                                O = t;
                            }
                        }
                        do {
                            if (x.className) {
                                C += u;
                            }
                            if (!(x.skip || x.subLanguage)) {
                                relevance += x.relevance;
                            }
                            x = x.parent;
                        }while (x !== o.parent)
                        if (o.starts) {
                            if (o.endSameAsBegin) {
                                o.starts.endRe = o.endRe;
                            }
                            p(o.starts);
                        }
                        if (a.returnEnd) {
                            return 0;
                        }
                        return t.length;
                    }
                    if (((e, t)=>!n && d(t.illegalRe, e))(t, x)) {
                        throw new Error(`Illegal lexeme "${t}" for mode "${x.className || "<unnamed>"}"`);
                    }
                    O += t;
                    return t.length || 1;
                }
                var v = _(language);
                if (!v) {
                    throw new Error(`Unknown language: "${language}"`);
                }
                g(v);
                let b;
                var x = o || v;
                var w = {};
                var C = "";
                for(b = x; b !== v; b = b.parent){
                    if (b.className) {
                        C = l(b.className, "", true) + C;
                    }
                }
                var O = "";
                var relevance = 0;
                try {
                    let M;
                    let S;
                    for(var A = 0; x.terminators.lastIndex = A, M = x.terminators.exec(t);){
                        S = h(t.substring(A, M.index), M[0]);
                        A = M.index + S;
                    }
                    h(t.substr(A));
                    for(b = x; b.parent; b = b.parent){
                        if (b.className) {
                            C += u;
                        }
                    }
                    return {
                        relevance,
                        value: C,
                        language,
                        top: x
                    };
                } catch (error) {
                    if (error.message && error.message.indexOf("Illegal") !== -1) {
                        return {
                            relevance: 0,
                            value: c(t)
                        };
                    }
                    throw error;
                }
            }
            function m(e, t) {
                t = t || s.languages || Object.keys(r);
                let o = {
                    relevance: 0,
                    value: c(e)
                };
                let i = o;
                t.filter(_).filter(C).forEach((t)=>{
                    const n = y(t, e, false);
                    n.language = t;
                    if (n.relevance > i.relevance) {
                        i = n;
                    }
                    if (n.relevance > o.relevance) {
                        i = o;
                        o = n;
                    }
                });
                if (i.language) {
                    o.second_best = i;
                }
                return o;
            }
            function b(e) {
                if (s.tabReplace || s.useBR) {
                    return e.replace(l, (e, t)=>{
                        if (s.useBR && e === "\n") {
                            return "<br>";
                        }
                        if (s.tabReplace) {
                            return t.replace(/\t/g, s.tabReplace);
                        }
                        return "";
                    });
                }
                return e;
            }
            function x(e) {
                let n;
                let r;
                let i;
                let l;
                let u;
                const d = ((e)=>{
                    let t;
                    let n;
                    let r;
                    let o;
                    let i = `${e.className} `;
                    i += e.parentNode ? e.parentNode.className : "";
                    if (n = a.exec(i)) {
                        if (_(n[1])) {
                            return n[1];
                        }
                        return "no-highlight";
                    }
                    t = 0;
                    for(r = (i = i.split(/\s+/)).length; t < r; t++){
                        if (p(o = i[t]) || _(o)) {
                            return o;
                        }
                    }
                })(e);
                if (!p(d)) {
                    if (s.useBR) {
                        n = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
                        n.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n");
                    } else {
                        n = e;
                    }
                    u = n.textContent;
                    i = d ? y(d, u, true) : m(u);
                    if ((r = v(n)).length) {
                        l = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
                        l.innerHTML = i.value;
                        i.value = ((e, n, r)=>{
                            let o = 0;
                            let i = "";
                            const a = [];
                            function l() {
                                if (e.length && n.length) {
                                    if (e[0].offset !== n[0].offset) {
                                        if (e[0].offset < n[0].offset) {
                                            return e;
                                        }
                                        return n;
                                    }
                                    if (n[0].event === "start") {
                                        return e;
                                    }
                                    return n;
                                }
                                if (e.length) {
                                    return e;
                                }
                                return n;
                            }
                            function u(e) {
                                i += `<${f(e)}${t.map.call(e.attributes, function(e) {
                                    return ` ${e.nodeName}="${c(e.value).replace('"', "&quot;")}"`;
                                }).join("")}>`;
                            }
                            function s(e) {
                                i += `</${f(e)}>`;
                            }
                            function d(e) {
                                (e.event === "start" ? u : s)(e.node);
                            }
                            while(e.length || n.length){
                                let p = l();
                                i += c(r.substring(o, p[0].offset));
                                o = p[0].offset;
                                if (p === e) {
                                    a.reverse().forEach(s);
                                    do {
                                        d(p.splice(0, 1)[0]);
                                        p = l();
                                    }while (p === e && p.length && p[0].offset === o)
                                    a.reverse().forEach(u);
                                } else {
                                    if (p[0].event === "start") {
                                        a.push(p[0].node);
                                    } else {
                                        a.pop();
                                    }
                                    d(p.splice(0, 1)[0]);
                                }
                            }
                            return i + c(r.substr(o));
                        })(r, v(l), u);
                    }
                    i.value = b(i.value);
                    e.innerHTML = i.value;
                    e.className = ((e, t, n)=>{
                        const r = t ? o[t] : n;
                        const i = [
                            e.trim()
                        ];
                        if (!e.match(/\bhljs\b/)) {
                            i.push("hljs");
                        }
                        if (e.indexOf(r) === -1) {
                            i.push(r);
                        }
                        return i.join(" ").trim();
                    })(e.className, d, i.language);
                    e.result = {
                        language: i.language,
                        re: i.relevance
                    };
                    if (i.second_best) {
                        e.second_best = {
                            language: i.second_best.language,
                            re: i.second_best.relevance
                        };
                    }
                }
            }
            function w() {
                if (!w.called) {
                    w.called = true;
                    const e = document.querySelectorAll("pre code");
                    t.forEach.call(e, x);
                }
            }
            function _(e) {
                e = (e || "").toLowerCase();
                return r[e] || r[o[e]];
            }
            function C(e) {
                const t = _(e);
                return t && !t.disableAutodetect;
            }
            e.highlight = y;
            e.highlightAuto = m;
            e.fixMarkup = b;
            e.highlightBlock = x;
            e.configure = function(e) {
                s = h(s, e);
            };
            e.initHighlighting = w;
            e.initHighlightingOnLoad = function() {
                addEventListener("DOMContentLoaded", w, false);
                addEventListener("load", w, false);
            };
            e.registerLanguage = function(t, n) {
                const i = r[t] = n(e);
                if (i.aliases) {
                    i.aliases.forEach((e)=>{
                        o[e] = t;
                    });
                }
            };
            e.listLanguages = function() {
                return Object.keys(r);
            };
            e.getLanguage = _;
            e.autoDetection = C;
            e.inherit = h;
            e.IDENT_RE = "[a-zA-Z]\\w*";
            e.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
            e.NUMBER_RE = "\\b\\d+(\\.\\d+)?";
            e.C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
            e.BINARY_NUMBER_RE = "\\b(0b[01]+)";
            e.RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
            e.BACKSLASH_ESCAPE = {
                begin: "\\\\[\\s\\S]",
                relevance: 0
            };
            e.APOS_STRING_MODE = {
                className: "string",
                begin: "'",
                end: "'",
                illegal: "\\n",
                contains: [
                    e.BACKSLASH_ESCAPE
                ]
            };
            e.QUOTE_STRING_MODE = {
                className: "string",
                begin: '"',
                end: '"',
                illegal: "\\n",
                contains: [
                    e.BACKSLASH_ESCAPE
                ]
            };
            e.PHRASAL_WORDS_MODE = {
                begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
            };
            e.COMMENT = function(t, end, r) {
                const o = e.inherit({
                    className: "comment",
                    begin: t,
                    end,
                    contains: []
                }, r || {});
                o.contains.push(e.PHRASAL_WORDS_MODE);
                o.contains.push({
                    className: "doctag",
                    begin: "(?:TODO|FIXME|NOTE|BUG|XXX):",
                    relevance: 0
                });
                return o;
            };
            e.C_LINE_COMMENT_MODE = e.COMMENT("//", "$");
            e.C_BLOCK_COMMENT_MODE = e.COMMENT("/\\*", "\\*/");
            e.HASH_COMMENT_MODE = e.COMMENT("#", "$");
            e.NUMBER_MODE = {
                className: "number",
                begin: e.NUMBER_RE,
                relevance: 0
            };
            e.C_NUMBER_MODE = {
                className: "number",
                begin: e.C_NUMBER_RE,
                relevance: 0
            };
            e.BINARY_NUMBER_MODE = {
                className: "number",
                begin: e.BINARY_NUMBER_RE,
                relevance: 0
            };
            e.CSS_NUMBER_MODE = {
                className: "number",
                begin: `${e.NUMBER_RE}(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?`,
                relevance: 0
            };
            e.REGEXP_MODE = {
                className: "regexp",
                begin: /\//,
                end: /\/[gimuy]*/,
                illegal: /\n/,
                contains: [
                    e.BACKSLASH_ESCAPE,
                    {
                        begin: /\[/,
                        end: /\]/,
                        relevance: 0,
                        contains: [
                            e.BACKSLASH_ESCAPE
                        ]
                    }
                ]
            };
            e.TITLE_MODE = {
                className: "title",
                begin: e.IDENT_RE,
                relevance: 0
            };
            e.UNDERSCORE_TITLE_MODE = {
                className: "title",
                begin: e.UNDERSCORE_IDENT_RE,
                relevance: 0
            };
            e.METHOD_GUARD = {
                begin: `\\.\\s*${e.UNDERSCORE_IDENT_RE}`,
                relevance: 0
            };
        })(t);
    },
    function(e, t) {
        e.exports = function(e) {
            const t = {
                begin: /[A-Z\_\.\-]+\s*:/,
                returnBegin: true,
                end: ";",
                endsWithParent: true,
                contains: [
                    {
                        className: "attribute",
                        begin: /\S/,
                        end: ":",
                        excludeEnd: true,
                        starts: {
                            endsWithParent: true,
                            excludeEnd: true,
                            contains: [
                                {
                                    begin: /[\w-]+\(/,
                                    returnBegin: true,
                                    contains: [
                                        {
                                            className: "built_in",
                                            begin: /[\w-]+/
                                        },
                                        {
                                            begin: /\(/,
                                            end: /\)/,
                                            contains: [
                                                e.APOS_STRING_MODE,
                                                e.QUOTE_STRING_MODE
                                            ]
                                        }
                                    ]
                                },
                                e.CSS_NUMBER_MODE,
                                e.QUOTE_STRING_MODE,
                                e.APOS_STRING_MODE,
                                e.C_BLOCK_COMMENT_MODE,
                                {
                                    className: "number",
                                    begin: "#[0-9A-Fa-f]+"
                                },
                                {
                                    className: "meta",
                                    begin: "!important"
                                }
                            ]
                        }
                    }
                ]
            };
            return {
                case_insensitive: true,
                illegal: /[=\/|'\$]/,
                contains: [
                    e.C_BLOCK_COMMENT_MODE,
                    {
                        className: "selector-id",
                        begin: /#[A-Za-z0-9_-]+/
                    },
                    {
                        className: "selector-class",
                        begin: /\.[A-Za-z0-9_-]+/
                    },
                    {
                        className: "selector-attr",
                        begin: /\[/,
                        end: /\]/,
                        illegal: "$"
                    },
                    {
                        className: "selector-pseudo",
                        begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
                    },
                    {
                        begin: "@(font-face|page)",
                        lexemes: "[a-z-]+",
                        keywords: "font-face page"
                    },
                    {
                        begin: "@",
                        end: "[{;]",
                        illegal: /:/,
                        contains: [
                            {
                                className: "keyword",
                                begin: /\w+/
                            },
                            {
                                begin: /\s/,
                                endsWithParent: true,
                                excludeEnd: true,
                                relevance: 0,
                                contains: [
                                    e.APOS_STRING_MODE,
                                    e.QUOTE_STRING_MODE,
                                    e.CSS_NUMBER_MODE
                                ]
                            }
                        ]
                    },
                    {
                        className: "selector-tag",
                        begin: "[a-zA-Z-][a-zA-Z0-9_-]*",
                        relevance: 0
                    },
                    {
                        begin: "{",
                        end: "}",
                        illegal: /\S/,
                        contains: [
                            e.C_BLOCK_COMMENT_MODE,
                            t
                        ]
                    }
                ]
            };
        };
    },
    function(e, t) {
        e.exports = function(e) {
            const t = {
                literal: "true false null"
            };
            const n = [
                e.QUOTE_STRING_MODE,
                e.C_NUMBER_MODE
            ];
            const r = {
                end: ",",
                endsWithParent: true,
                excludeEnd: true,
                contains: n,
                keywords: t
            };
            const o = {
                begin: "{",
                end: "}",
                contains: [
                    {
                        className: "attr",
                        begin: /"/,
                        end: /"/,
                        contains: [
                            e.BACKSLASH_ESCAPE
                        ],
                        illegal: "\\n"
                    },
                    e.inherit(r, {
                        begin: /:/
                    })
                ],
                illegal: "\\S"
            };
            const i = {
                begin: "\\[",
                end: "\\]",
                contains: [
                    e.inherit(r)
                ],
                illegal: "\\S"
            };
            n.splice(n.length, 0, o, i);
            return {
                contains: n,
                keywords: t,
                illegal: "\\S"
            };
        };
    },
    function(e, t) {
        e.exports = function(e) {
            const t = "([\\w-]+|@{[\\w-]+})";
            const n = [];
            const r = [];
            const o = (e)=>({
                    className: "string",
                    begin: `~?${e}.*?${e}`
                });
            const i = (e, t, relevance)=>({
                    className: e,
                    begin: t,
                    relevance
                });
            const a = {
                begin: "\\(",
                end: "\\)",
                contains: r,
                relevance: 0
            };
            r.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, o("'"), o('"'), e.CSS_NUMBER_MODE, {
                begin: "(url|data-uri)\\(",
                starts: {
                    className: "string",
                    end: "[\\)\\n]",
                    excludeEnd: true
                }
            }, i("number", "#[0-9A-Fa-f]+\\b"), a, i("variable", "@@?[\\w-]+", 10), i("variable", "@{[\\w-]+}"), i("built_in", "~?`[^`]*?`"), {
                className: "attribute",
                begin: "[\\w-]+\\s*:",
                end: ":",
                returnBegin: true,
                excludeEnd: true
            }, {
                className: "meta",
                begin: "!important"
            });
            const l = r.concat({
                begin: "{",
                end: "}",
                contains: n
            });
            const u = {
                beginKeywords: "when",
                endsWithParent: true,
                contains: [
                    {
                        beginKeywords: "and not"
                    }
                ].concat(r)
            };
            const s = {
                begin: `${t}\\s*:`,
                returnBegin: true,
                end: "[;}]",
                relevance: 0,
                contains: [
                    {
                        className: "attribute",
                        begin: t,
                        end: ":",
                        excludeEnd: true,
                        starts: {
                            endsWithParent: true,
                            illegal: "[<=$]",
                            relevance: 0,
                            contains: r
                        }
                    }
                ]
            };
            const c = {
                className: "keyword",
                begin: "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b",
                starts: {
                    end: "[;{}]",
                    returnEnd: true,
                    contains: r,
                    relevance: 0
                }
            };
            const f = {
                className: "variable",
                variants: [
                    {
                        begin: "@[\\w-]+\\s*:",
                        relevance: 15
                    },
                    {
                        begin: "@[\\w-]+"
                    }
                ],
                starts: {
                    end: "[;}]",
                    returnEnd: true,
                    contains: l
                }
            };
            const d = {
                variants: [
                    {
                        begin: "[\\.#:&\\[>]",
                        end: "[;{}]"
                    },
                    {
                        begin: t,
                        end: "{"
                    }
                ],
                returnBegin: true,
                returnEnd: true,
                illegal: "[<='$\"]",
                relevance: 0,
                contains: [
                    e.C_LINE_COMMENT_MODE,
                    e.C_BLOCK_COMMENT_MODE,
                    u,
                    i("keyword", "all\\b"),
                    i("variable", "@{[\\w-]+}"),
                    i("selector-tag", `${t}%?`, 0),
                    i("selector-id", `#${t}`),
                    i("selector-class", `\\.${t}`, 0),
                    i("selector-tag", "&", 0),
                    {
                        className: "selector-attr",
                        begin: "\\[",
                        end: "\\]"
                    },
                    {
                        className: "selector-pseudo",
                        begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
                    },
                    {
                        begin: "\\(",
                        end: "\\)",
                        contains: l
                    },
                    {
                        begin: "!important"
                    }
                ]
            };
            n.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, c, f, s, d);
            return {
                case_insensitive: true,
                illegal: "[=>'/<($\"]",
                contains: n
            };
        };
    },
    function(e, t) {
        e.exports = function(e) {
            const t = {
                className: "variable",
                begin: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"
            };
            const n = {
                className: "number",
                begin: "#[0-9A-Fa-f]+"
            };
            e.CSS_NUMBER_MODE;
            e.QUOTE_STRING_MODE;
            e.APOS_STRING_MODE;
            e.C_BLOCK_COMMENT_MODE;
            return {
                case_insensitive: true,
                illegal: "[=/|']",
                contains: [
                    e.C_LINE_COMMENT_MODE,
                    e.C_BLOCK_COMMENT_MODE,
                    {
                        className: "selector-id",
                        begin: "\\#[A-Za-z0-9_-]+",
                        relevance: 0
                    },
                    {
                        className: "selector-class",
                        begin: "\\.[A-Za-z0-9_-]+",
                        relevance: 0
                    },
                    {
                        className: "selector-attr",
                        begin: "\\[",
                        end: "\\]",
                        illegal: "$"
                    },
                    {
                        className: "selector-tag",
                        begin: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
                        relevance: 0
                    },
                    {
                        begin: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
                    },
                    {
                        begin: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
                    },
                    t,
                    {
                        className: "attribute",
                        begin: "\\b(z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
                        illegal: "[^\\s]"
                    },
                    {
                        begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
                    },
                    {
                        begin: ":",
                        end: ";",
                        contains: [
                            t,
                            n,
                            e.CSS_NUMBER_MODE,
                            e.QUOTE_STRING_MODE,
                            e.APOS_STRING_MODE,
                            {
                                className: "meta",
                                begin: "!important"
                            }
                        ]
                    },
                    {
                        begin: "@",
                        end: "[{;]",
                        keywords: "mixin include extend for if else each while charset import debug media page content font-face namespace warn",
                        contains: [
                            t,
                            e.QUOTE_STRING_MODE,
                            e.APOS_STRING_MODE,
                            n,
                            e.CSS_NUMBER_MODE,
                            {
                                begin: "\\s[A-Za-z0-9_.-]+",
                                relevance: 0
                            }
                        ]
                    }
                ]
            };
        };
    },
    function(e, t) {
        e.exports = function(e) {
            const t = "[A-Za-z$_][0-9A-Za-z$_]*";
            const n = {
                keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
                literal: "true false null undefined NaN Infinity",
                built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
            };
            const r = {
                className: "number",
                variants: [
                    {
                        begin: "\\b(0[bB][01]+)"
                    },
                    {
                        begin: "\\b(0[oO][0-7]+)"
                    },
                    {
                        begin: e.C_NUMBER_RE
                    }
                ],
                relevance: 0
            };
            const o = {
                className: "subst",
                begin: "\\$\\{",
                end: "\\}",
                keywords: n,
                contains: []
            };
            const i = {
                className: "string",
                begin: "`",
                end: "`",
                contains: [
                    e.BACKSLASH_ESCAPE,
                    o
                ]
            };
            o.contains = [
                e.APOS_STRING_MODE,
                e.QUOTE_STRING_MODE,
                i,
                r,
                e.REGEXP_MODE
            ];
            const a = o.contains.concat([
                e.C_BLOCK_COMMENT_MODE,
                e.C_LINE_COMMENT_MODE
            ]);
            return {
                aliases: [
                    "js",
                    "jsx"
                ],
                keywords: n,
                contains: [
                    {
                        className: "meta",
                        relevance: 10,
                        begin: /^\s*['"]use (strict|asm)['"]/
                    },
                    {
                        className: "meta",
                        begin: /^#!/,
                        end: /$/
                    },
                    e.APOS_STRING_MODE,
                    e.QUOTE_STRING_MODE,
                    i,
                    e.C_LINE_COMMENT_MODE,
                    e.C_BLOCK_COMMENT_MODE,
                    r,
                    {
                        begin: /[{,]\s*/,
                        relevance: 0,
                        contains: [
                            {
                                begin: `${t}\\s*:`,
                                returnBegin: true,
                                relevance: 0,
                                contains: [
                                    {
                                        className: "attr",
                                        begin: t,
                                        relevance: 0
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        begin: `(${e.RE_STARTERS_RE}|\\b(case|return|throw)\\b)\\s*`,
                        keywords: "return throw case",
                        contains: [
                            e.C_LINE_COMMENT_MODE,
                            e.C_BLOCK_COMMENT_MODE,
                            e.REGEXP_MODE,
                            {
                                className: "function",
                                begin: `(\\(.*?\\)|${t})\\s*=>`,
                                returnBegin: true,
                                end: "\\s*=>",
                                contains: [
                                    {
                                        className: "params",
                                        variants: [
                                            {
                                                begin: t
                                            },
                                            {
                                                begin: /\(\s*\)/
                                            },
                                            {
                                                begin: /\(/,
                                                end: /\)/,
                                                excludeBegin: true,
                                                excludeEnd: true,
                                                keywords: n,
                                                contains: a
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                className: "",
                                begin: /\s/,
                                end: /\s*/,
                                skip: true
                            },
                            {
                                begin: /</,
                                end: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
                                subLanguage: "xml",
                                contains: [
                                    {
                                        begin: /<[A-Za-z0-9\\._:-]+\s*\/>/,
                                        skip: true
                                    },
                                    {
                                        begin: /<[A-Za-z0-9\\._:-]+/,
                                        end: /(\/[A-Za-z0-9\\._:-]+|[A-Za-z0-9\\._:-]+\/)>/,
                                        skip: true,
                                        contains: [
                                            {
                                                begin: /<[A-Za-z0-9\\._:-]+\s*\/>/,
                                                skip: true
                                            },
                                            "self"
                                        ]
                                    }
                                ]
                            }
                        ],
                        relevance: 0
                    },
                    {
                        className: "function",
                        beginKeywords: "function",
                        end: /\{/,
                        excludeEnd: true,
                        contains: [
                            e.inherit(e.TITLE_MODE, {
                                begin: t
                            }),
                            {
                                className: "params",
                                begin: /\(/,
                                end: /\)/,
                                excludeBegin: true,
                                excludeEnd: true,
                                contains: a
                            }
                        ],
                        illegal: /\[|%/
                    },
                    {
                        begin: /\$[(.]/
                    },
                    e.METHOD_GUARD,
                    {
                        className: "class",
                        beginKeywords: "class",
                        end: /[{;=]/,
                        excludeEnd: true,
                        illegal: /[:"\[\]]/,
                        contains: [
                            {
                                beginKeywords: "extends"
                            },
                            e.UNDERSCORE_TITLE_MODE
                        ]
                    },
                    {
                        beginKeywords: "constructor get set",
                        end: /\{/,
                        excludeEnd: true
                    }
                ],
                illegal: /#(?!!)/
            };
        };
    },
    function(e, t) {
        e.exports = function(e) {
            const t = {
                keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class public private protected get set super static implements enum export import declare type namespace abstract as from extends async await",
                literal: "true false null undefined NaN Infinity",
                built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document any number boolean string void Promise"
            };
            const n = {
                className: "meta",
                begin: "@[A-Za-z$_][0-9A-Za-z$_]*"
            };
            const r = {
                begin: "\\(",
                end: /\)/,
                keywords: t,
                contains: [
                    "self",
                    e.QUOTE_STRING_MODE,
                    e.APOS_STRING_MODE,
                    e.NUMBER_MODE
                ]
            };
            const o = {
                className: "params",
                begin: /\(/,
                end: /\)/,
                excludeBegin: true,
                excludeEnd: true,
                keywords: t,
                contains: [
                    e.C_LINE_COMMENT_MODE,
                    e.C_BLOCK_COMMENT_MODE,
                    n,
                    r
                ]
            };
            return {
                aliases: [
                    "ts"
                ],
                keywords: t,
                contains: [
                    {
                        className: "meta",
                        begin: /^\s*['"]use strict['"]/
                    },
                    e.APOS_STRING_MODE,
                    e.QUOTE_STRING_MODE,
                    {
                        className: "string",
                        begin: "`",
                        end: "`",
                        contains: [
                            e.BACKSLASH_ESCAPE,
                            {
                                className: "subst",
                                begin: "\\$\\{",
                                end: "\\}"
                            }
                        ]
                    },
                    e.C_LINE_COMMENT_MODE,
                    e.C_BLOCK_COMMENT_MODE,
                    {
                        className: "number",
                        variants: [
                            {
                                begin: "\\b(0[bB][01]+)"
                            },
                            {
                                begin: "\\b(0[oO][0-7]+)"
                            },
                            {
                                begin: e.C_NUMBER_RE
                            }
                        ],
                        relevance: 0
                    },
                    {
                        begin: `(${e.RE_STARTERS_RE}|\\b(case|return|throw)\\b)\\s*`,
                        keywords: "return throw case",
                        contains: [
                            e.C_LINE_COMMENT_MODE,
                            e.C_BLOCK_COMMENT_MODE,
                            e.REGEXP_MODE,
                            {
                                className: "function",
                                begin: `(\\(.*?\\)|${e.IDENT_RE})\\s*=>`,
                                returnBegin: true,
                                end: "\\s*=>",
                                contains: [
                                    {
                                        className: "params",
                                        variants: [
                                            {
                                                begin: e.IDENT_RE
                                            },
                                            {
                                                begin: /\(\s*\)/
                                            },
                                            {
                                                begin: /\(/,
                                                end: /\)/,
                                                excludeBegin: true,
                                                excludeEnd: true,
                                                keywords: t,
                                                contains: [
                                                    "self",
                                                    e.C_LINE_COMMENT_MODE,
                                                    e.C_BLOCK_COMMENT_MODE
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ],
                        relevance: 0
                    },
                    {
                        className: "function",
                        begin: "function",
                        end: /[\{;]/,
                        excludeEnd: true,
                        keywords: t,
                        contains: [
                            "self",
                            e.inherit(e.TITLE_MODE, {
                                begin: "[A-Za-z$_][0-9A-Za-z$_]*"
                            }),
                            o
                        ],
                        illegal: /%/,
                        relevance: 0
                    },
                    {
                        beginKeywords: "constructor",
                        end: /\{/,
                        excludeEnd: true,
                        contains: [
                            "self",
                            o
                        ]
                    },
                    {
                        begin: /module\./,
                        keywords: {
                            built_in: "module"
                        },
                        relevance: 0
                    },
                    {
                        beginKeywords: "module",
                        end: /\{/,
                        excludeEnd: true
                    },
                    {
                        beginKeywords: "interface",
                        end: /\{/,
                        excludeEnd: true,
                        keywords: "interface extends"
                    },
                    {
                        begin: /\$[(.]/
                    },
                    {
                        begin: `\\.${e.IDENT_RE}`,
                        relevance: 0
                    },
                    n,
                    r
                ]
            };
        };
    },
    function(e, t, n) {
        "use strict";
        t.__esModule = true;
        t.default = function(e, t) {
            e.addEventListener("keydown", function(e) {
                if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) {
                    if ((e.ctrlKey || e.metaKey) && !e.altKey && !e.shiftKey) {
                        switch(e.keyCode){
                            case 90:
                                e.preventDefault();
                                t("undo");
                                break;
                            case 89:
                                e.preventDefault();
                                t("redo");
                                break;
                            case 83:
                                e.preventDefault();
                                t("save");
                        }
                    }
                } else if (e.keyCode === 9) {
                    e.preventDefault();
                    t("tab");
                }
            });
        };
    },
    function(e, t, n) {
        "use strict";
        let r;
        const o = this && this.__extends || (r = function(e, t) {
            return (r = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for(const n in t){
                    if (t.hasOwnProperty(n)) {
                        e[n] = t[n];
                    }
                }
            })(e, t);
        }, (e, t)=>{
            function n() {
                this.constructor = e;
            }
            r(e, t);
            e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n);
        });
        const i = this && this.__importStar || ((e)=>{
            if (e && e.__esModule) {
                return e;
            }
            const t = {};
            if (e != null) {
                for(const n in e){
                    if (Object.hasOwnProperty.call(e, n)) {
                        t[n] = e[n];
                    }
                }
            }
            t.default = e;
            return t;
        });
        t.__esModule = true;
        const a = i(n(0));
        const l = ((e)=>{
            function t(t) {
                const n = e.call(this, t) || this;
                n.state = {
                    imgHidden: true,
                    imgList: []
                };
                return n;
            }
            o(t, e);
            t.prototype.onClick = function(e) {
                this.props.onClick(e);
            };
            t.prototype.imgClick = function() {
                this.setState({
                    imgHidden: !this.state.imgHidden
                });
            };
            t.prototype.imgMouseOver = function() {
                window.clearTimeout(this.timer);
                this.setState({
                    imgHidden: false
                });
            };
            t.prototype.imgMouseOut = function() {
                const _this = this;
                this.timer = window.setTimeout(function() {
                    _this.setState({
                        imgHidden: true
                    });
                }, 150);
            };
            t.prototype.addImgUrl = function() {
                this.props.onClick("img");
            };
            t.prototype.addImgFile = function(e) {
                const imgList = this.state.imgList;
                const t_length = imgList.length;
                imgList.push(e.target.files[0]);
                this.setState({
                    imgList
                });
                this.props.addImg(e.target.files[0], t_length);
                e.target.value = "";
            };
            t.prototype.render = function() {
                const _this = this;
                const props = this.props;
                const { toolbar, words } = props;
                const imgHidden = this.state.imgHidden;
                return <ul>{toolbar.undo && <li onClick={function() {
                    return _this.onClick("undo");
                }} title={`${words.undo} (ctrl+z)`}><i className="foricon for-undo"/></li>}{toolbar.redo && <li onClick={function() {
                    return _this.onClick("redo");
                }} title={`${words.redo} (ctrl+y)`}><i className="foricon for-redo"/></li>}{toolbar.h1 && <li onClick={function() {
                    return _this.onClick("h1");
                }} title={words.h1}>H1</li>}{toolbar.h2 && <li onClick={function() {
                    return _this.onClick("h2");
                }} title={words.h2}>H2</li>}{toolbar.h3 && <li onClick={function() {
                    return _this.onClick("h3");
                }} title={words.h3}>H3</li>}{toolbar.h4 && <li onClick={function() {
                    return _this.onClick("h4");
                }} title={words.h4}>H4</li>}{toolbar.img && <li className="for-toolbar-img" onMouseOver={function() {
                    return _this.imgMouseOver();
                }} onMouseOut={function() {
                    return _this.imgMouseOut();
                }}><i className="foricon for-image"/><ul style={imgHidden ? {
                    display: "none"
                } : {}}><li onClick={function() {
                    return _this.addImgUrl();
                }}>{words.addImgLink}</li><li>{words.addImg}<input type="file" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg" onChange={function(t) {
                    return _this.addImgFile(t);
                }}/></li></ul></li>}{toolbar.link && <li onClick={function() {
                    return _this.onClick("link");
                }} title={words.link}><i className="foricon for-link"/></li>}{toolbar.code && <li onClick={function() {
                    return _this.onClick("code");
                }} title={words.code}><i className="foricon for-code"/></li>}{toolbar.save && <li onClick={function() {
                    return _this.onClick("save");
                }} title={`${words.save} (ctrl+s)`}><i className="foricon for-save"/></li>}</ul>;
            };
            t.defaultProps = {
                onClick: function() {},
                toolbar: {},
                words: {}
            };
            return t;
        })(a.Component);
        t.default = l;
    },
    function(e, t, n) {
        "use strict";
        let r;
        const o = this && this.__extends || (r = function(e, t) {
            return (r = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(e, t) {
                e.__proto__ = t;
            } || function(e, t) {
                for(const n in t){
                    if (t.hasOwnProperty(n)) {
                        e[n] = t[n];
                    }
                }
            })(e, t);
        }, (e, t)=>{
            function n() {
                this.constructor = e;
            }
            r(e, t);
            e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n);
        });
        const i = this && this.__importStar || ((e)=>{
            if (e && e.__esModule) {
                return e;
            }
            const t = {};
            if (e != null) {
                for(const n in e){
                    if (Object.hasOwnProperty.call(e, n)) {
                        t[n] = e[n];
                    }
                }
            }
            t.default = e;
            return t;
        });
        const a = this && this.__importDefault || ((e)=>{
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        });
        t.__esModule = true;
        const l = i(n(0));
        const u = a(n(3));
        const s = ((e)=>{
            function t() {
                return e !== null && e.apply(this, arguments) || this;
            }
            o(t, e);
            t.prototype.onClick = function(e) {
                this.props.onClick(e);
            };
            t.prototype.render = function() {
                const _this = this;
                const props = this.props;
                const { preview, expand, subfield, toolbar, words } = props;
                const s = u.default({
                    "for-active": preview
                });
                const c = u.default({
                    "for-active": expand
                });
                const f = u.default({
                    "for-active": subfield
                });
                return <ul>{toolbar.expand && <li className={c} onClick={function() {
                    return _this.onClick("expand");
                }} title={c ? words.fullscreenOff : words.fullscreenOn}>{c ? <i className="foricon for-contract"/> : <i className="foricon for-expand"/>}</li>}{toolbar.preview && <li className={s} onClick={function() {
                    return _this.onClick("preview");
                }} title={words.preview}>{s ? <i className="foricon for-eye-off"/> : <i className="foricon for-eye"/>}</li>}{toolbar.subfield && <li className={f} onClick={function() {
                    return _this.onClick("subfield");
                }} title={f ? words.singleColumn : words.doubleColumn}><i className="foricon for-subfield"/></li>}</ul>;
            };
            t.defaultProps = {
                onClick: function() {},
                toolbars: {},
                words: {}
            };
            return t;
        })(l.Component);
        t.default = s;
    },
    function(e, t, n) {
        "use strict";
        t.__esModule = true;
        t.insertText = function(e, { prefix, str = "", subfix = "" }) {
            const e_value = e.value;
            if (e.selectionStart || e.selectionStart === 0) {
                const { selectionStart, selectionEnd, scrollTop } = e;
                if (selectionStart === selectionEnd) {
                    e.value = e_value.substring(0, selectionStart) + prefix + str + subfix + e_value.substring(selectionEnd, e_value.length);
                    e.selectionStart = selectionStart + prefix.length;
                    e.selectionEnd = selectionEnd + prefix.length + str.length;
                } else {
                    e.value = e_value.substring(0, selectionStart) + prefix + e_value.substring(selectionStart, selectionEnd) + subfix + e_value.substring(selectionEnd, e_value.length);
                    e.selectionStart = selectionStart + prefix.length;
                    e.selectionEnd = selectionEnd + prefix.length;
                }
                e.focus();
                if (scrollTop >= 0) {
                    e.scrollTop = scrollTop;
                }
            }
            return e.value;
        };
    },
    function(e, t, n) {
        let r = n(24);
        if (typeof r === "string") {
            r = [
                [
                    e.i,
                    r,
                    ""
                ]
            ];
        }
        n(2)(r, {
            hmr: true,
            transform: undefined,
            insertInto: undefined
        });
        if (r.locals) {
            e.exports = r.locals;
        }
    },
    function(e, t, n) {
        (e.exports = n(1)(false)).push([
            e.i,
            "/* http://jmblog.github.com/color-themes-for-google-code-highlightjs */\n\n/* Tomorrow Comment */\n.hljs-comment,\n.hljs-quote {\n  color: #8e908c;\n}\n\n/* Tomorrow Red */\n.hljs-variable,\n.hljs-template-variable,\n.hljs-tag,\n.hljs-name,\n.hljs-selector-id,\n.hljs-selector-class,\n.hljs-regexp,\n.hljs-deletion {\n  color: #c82829;\n}\n\n/* Tomorrow Orange */\n.hljs-number,\n.hljs-built_in,\n.hljs-builtin-name,\n.hljs-literal,\n.hljs-type,\n.hljs-params,\n.hljs-meta,\n.hljs-link {\n  color: #f5871f;\n}\n\n/* Tomorrow Yellow */\n.hljs-attribute {\n  color: #eab700;\n}\n\n/* Tomorrow Green */\n.hljs-string,\n.hljs-symbol,\n.hljs-bullet,\n.hljs-addition {\n  color: #718c00;\n}\n\n/* Tomorrow Blue */\n.hljs-title,\n.hljs-section {\n  color: #4271ae;\n}\n\n/* Tomorrow Purple */\n.hljs-keyword,\n.hljs-selector-tag {\n  color: #8959a8;\n}\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  background: white;\n  color: #4d4d4c;\n  padding: 0.5em;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n",
            ""
        ]);
    },
    function(e, t) {
        e.exports = function(e) {
            const t = typeof window !== "undefined" && window.location;
            if (!t) {
                throw new Error("fixUrls requires window.location");
            }
            if (!e || typeof e !== "string") {
                return e;
            }
            const n = `${t.protocol}//${t.host}`;
            const r = n + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (e, t)=>{
                let o;
                const i = t.trim().replace(/^"(.*)"$/, (e, t)=>t).replace(/^'(.*)'$/, (e, t)=>t);
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)) {
                    return e;
                }
                o = i.indexOf("//") === 0 ? i : i.indexOf("/") === 0 ? n + i : r + i.replace(/^\.\//, "");
                return `url(${JSON.stringify(o)})`;
            });
        };
    },
    function(e, t, n) {
        let r = n(27);
        if (typeof r === "string") {
            r = [
                [
                    e.i,
                    r,
                    ""
                ]
            ];
        }
        n(2)(r, {
            hmr: true,
            transform: undefined,
            insertInto: undefined
        });
        if (r.locals) {
            e.exports = r.locals;
        }
    },
    function(e, t, n) {
        t = e.exports = n(1)(false);
        const r = n(28);
        const o = r(n(4));
        const i = r(`${n(4)}#iefix`);
        const a = r(n(29));
        const l = r(n(30));
        const u = r(`${n(31)}#foricon`);
        t.push([
            e.i,
            `@font-face {font-family: "foricon";
  src: url(${o}); /* IE9 */
  src: url(${i}) format('embedded-opentype'), 
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAiYAAsAAAAAEKwAAAhKAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCECgqTEI8pATYCJAM0CxwABCAFhGEHgQgb4Q2jopRu9sj+IsE2lvbwQSEYAzUIDVc+fN1ilSTZf3ZUbnJocJqIh//2+98+M3NF/0fUmunqJEIRD43EIpEgxN8JiYiHpKF4KJDe5VxtAY3K+PZI3iMqVJhLNy2nn24PFGj5yvD846b94P0JUAkJVZkYzCTMlO2FZE47N3oeTjm480jroXU6c2FiGrchXq82lhAo7AS5xIq3b779XN2Nd6hHnWV6+XfTs203xPQjYiERNSQ8ingVbYRMKpRCKQl4vjE1L2vqzkLL0a+QscB230ygt13EuH5++wC+IqJBm8d5ysFXUhRDWGidtebEIl4CR5ueqw4DL8qfj78m4ZNUWXTgjbtnCRz+YHeaqDcK5znXAIu7LIw3I+MoUMbiodZ9GyyWEZY+x3baTAtdfkhRwA/k5qvFqJOsqFb/8hqtTm8wErWIjUxYUVJ/IJViyYmU4IaU4Y5U4IFUwROphhdSA2+kFj5IHXyRevghDXBhvTKvqdNmYC/I49z8ThR4W05S+ZeFpy0ThYMzZAuBmbDIyGgsOiEhMSEjI6+mOkWmRx5dxoTjBoMeajQe0Y/n8JzFRWcdGwkBkpW8xLiENNZpaVQFTRwMJqOMkkSMjB3OC+Mlih4D5umdPFvbEF+8NaOqzlqwhTVVbbZqCrdkmmu3xWuLto7meWjyi4RakkizIIASXFaf0XWu86jObvjpsYenOyd9mpFeEu4mtfRMmz2lI1Vw7Uk3GpAQxCtC6OcBcAKKqOiSimu9xOQ6MAhqD1+33ZTlFSdcO24CEbuNGlYqrsnToAvHd2e3YDFeagAaIKVlTXY1YNM5NgBAEMjJ1+iZJLoohKdxJkaJ35SfZU5SUSrxCRbkRKHdZhJ5xg4HdNQvsTi6ynS4+niCqvREGzQg4PLpHL7Q4nRZz7Hqoq3j9d9zNuRxum6//2+93lVNWKmhlpRQtHpDo/pYoZpEpWKirGvoYFtChH6cx/GqjKocuu4054kzgZqwxUunh876yaH50kyBZBsOBd6Wwy1Xn6WuCuchUbOxcShOrKkqsJR2QerPtBFQsnZddm0TtuGcd57n6xIeQ2UeI66FdK4DwNdBzB+qTw9B6NtyddlwTtukgTQK9eB1VOFAECwdAzfPIiCvoqesKRAT6/j5e7xFvmGiCcMneA43EeRbDL8K5NW8wvGovzXFhDkMMm7lFv11nGWhQEpkp0XdKL88ngmvZoFznZiq8TMV46ddte2GqhKr61izpqrqbKYgz0sR7FLMdLkKf4ZDu7iD9iIzjBrMjGmN0jhbRNpGG7RvWxvfyA5tG9Ng2s0Ldmi/uVZrC9kibEfkwo6EBKFb127dEIRN3+f2z9xqa41mZJ3bjPTP6zWrtXZ61ffrpVu1HpI5qtq2MSbeJue72Tc/3y7b4XZol0tVcnOdTyemjS5pfU4xl98FlPJF4Hhg9nf51vyxs/YX/K36W3sxNHBkPjll8PiLwV+POsH06cCp6e1299YcHjkYi3brvH0HxQ6hqFf/DuprNehxZ2sQ3leMKRjowzBmn+L7dz2kmfAVpdbWv3s/n1DI+f170tkblmCe+SRsXqE1V7S3lKkQy+pQogcBRaezZLfvgkwYNWXecCuFGAyVmvmtliWkRqRmF3PM11Yb9NO05dQmJjdpYyvQGUxrVSqHP4RN5dQ0ba6+WjvfsTShlcG2NL77fG2VLpdSDbfOyx8/CunSLidTqwPBbT9yLgMwuLhB+kJd68z+9ilz5CGGXkcbjUEGczCqJzB9FGhxRhX8lfP2aNOpl4/uRNt9v9f/c+n5PzAi+Do1XTpgwC5k1ZomR+yeJZqgjBrmPHvpPLM+8UUXupI0gEkeEBqY7BqQfNn7Y1gTj10+8qUHvv33P1zb1T1c9MP3PXp17FXQs1OPnj5f6J+Lz/+FnPw67XFxx/7i3i77o0AhlWQLos9SV66OciUPBMlKiufT/6N7p7eWSnqRzj9Nnny5eUx7U7RRNkYZgSnKRFa0iQoaDSdlji95p/vwxeQwU2aHabvREabCDiOYc7sEewoR9Mny6/IX7Dr2RUaWP0FL7t/zkM+IxY40zWYIqqAl9x54iGekd0mJTIv0RpWKpajnwb2SBvS6BVSWIvAp9t6UDR2a8QeWlKr9NFh4M6iA5W9/IwHp2bvv4M08Op/0zC4Oz37406nThlFsXkD3bjoUdzLMF3/prOovDTsws+J0SJtOm6aj6ZhWoXwox5SXuYBJo9Hjup5Df5jTydvFWHoCt/IZylTWVES2pyXRYP0P2+anqkkAi7Alq1PUsDdJ1inWRg3YjRJ+yLlsfkph0CxBZG3VyMDxGQwifUX993Anz6TaH93m3dc++i9yxvc/eXZQsgjbwE1xK4loOMR//SzCCWVli1Knshi71OwgcfKEW5XQx+UsQFSw2td5xDoxzkmjWMYgwa0gwz2gwMO6yuCUrtY4r+sdcbL5YI2GJUpHK7FFF2avQIKvQYafQIGfdZX1/km9gv91vZvhXXCwP17CE42cMGGzFcuFamTipjCjetD6DtO+4npiLeKeUHd5GRsPRrX6C2xQtz+gm6cTIsmkVjU7792SsKoUa7UqUNAgI2qnw6HUHToQqobQNRriKDdNMDOr5DlBacgcEu5cur/ZHZTqVfh4CP0QStgTJN0EszhmbGBkBheskQx5DZ07c6kJirMklhLdr6sx51elQKpxjcK0elIMmgtkIGtR1ZoaxlNJKRucV9ShvQB60QdOkSJHiSrqaKKNLvoYYowpZuWWStDJa56ihSt0cdnyJrE1Jsrum+xw56NXhHaVN6Xd8Tn6L0tFmgvyhEfESkpPqKqvmw4AAA==') format('woff2'),
  url(${a}) format('woff'),
  url(${l}) format('truetype'), 
  url(${u}) format('svg'); /* iOS 4.1- */
}

.foricon {
  font-family: "foricon" !important;
  font-size: inherit;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.for-code:before {
  content: "\\e620";
}

.for-image:before {
  content: "\\e621";
}

.for-eye:before {
  content: "\\e622";
}

.for-expand:before {
  content: "\\e623";
}

.for-redo:before {
  content: "\\e624";
}

.for-undo:before {
  content: "\\e625";
}

.for-quote:before {
  content: "\\e626";
}

.for-link:before {
  content: "\\e627";
}

.for-save:before {
  content: "\\e628";
}

.for-contract:before {
  content: "\\e629";
}

.for-eye-off:before {
  content: "\\e62a";
}

.for-subfield:before {
  content: "\\e62b";
}

`,
            ""
        ]);
    },
    function(e, t, n) {
        "use strict";
        e.exports = function(e, t) {
            if (typeof e !== "string") {
                return e;
            }
            if (/^['"].*['"]$/.test(e)) {
                e = e.slice(1, -1);
            }
            if (/["'() \t\n]/.test(e) || t) {
                return `"${e.replace(/"/g, '\\"').replace(/\n/g, "\\n")}"`;
            }
            return e;
        };
    },
    function(e, t, n) {
        e.exports = `${n.p}static/fonts/iconfont.fe07082d.woff`;
    },
    function(e, t, n) {
        e.exports = `${n.p}static/fonts/iconfont.a614fc0f.ttf`;
    },
    function(e, t, n) {
        e.exports = `${n.p}static/fonts/iconfont.35e220a6.svg`;
    },
    function(e, t, n) {
        let r = n(33);
        if (typeof r === "string") {
            r = [
                [
                    e.i,
                    r,
                    ""
                ]
            ];
        }
        n(2)(r, {
            hmr: true,
            transform: undefined,
            insertInto: undefined
        });
        if (r.locals) {
            e.exports = r.locals;
        }
    },
    function(e, t, n) {
        (e.exports = n(1)(false)).push([
            e.i,
            ".for-container {\n  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;\n  display: flex;\n  flex-direction: column;\n  height: 600px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 12px;\n  background: #fff;\n  font-size: 14px; }\n  .for-container ul,\n  .for-container ol,\n  .for-container li {\n    margin: 0;\n    padding: 0; }\n  .for-container.for-fullscreen {\n    position: fixed;\n    z-index: 99999;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    height: 100% !important; }\n  .for-container > div:first-child {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px; }\n  .for-container .for-hidden {\n    display: none; }\n  .for-container .for-toolbar {\n    font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;\n    display: flex;\n    justify-content: space-between;\n    padding: 0 6px;\n    border-bottom: 1px solid #ddd;\n    color: #555;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n    .for-container .for-toolbar > ul {\n      display: flex; }\n      .for-container .for-toolbar > ul > li {\n        display: flex;\n        align-items: center;\n        padding: 4px 6px;\n        margin: 8px 4px;\n        border-radius: 4px;\n        line-height: normal; }\n        .for-container .for-toolbar > ul > li.for-toolbar-img {\n          position: relative; }\n          .for-container .for-toolbar > ul > li.for-toolbar-img > ul {\n            position: absolute;\n            top: 100%;\n            left: -50px;\n            width: 140px;\n            margin-top: 4px;\n            background: #fff;\n            border-radius: 4px;\n            box-shadow: rgba(0, 0, 0, 0.1) 0 2px 8px 0;\n            z-index: 99;\n            line-height: 2.8;\n            text-align: center; }\n            .for-container .for-toolbar > ul > li.for-toolbar-img > ul li {\n              position: relative; }\n              .for-container .for-toolbar > ul > li.for-toolbar-img > ul li:hover {\n                background: #e9e9e9; }\n              .for-container .for-toolbar > ul > li.for-toolbar-img > ul li:first-child {\n                border-radius: 4px 4px 0 0; }\n              .for-container .for-toolbar > ul > li.for-toolbar-img > ul li:last-child {\n                border-radius: 0 0 4px 4px; }\n              .for-container .for-toolbar > ul > li.for-toolbar-img > ul li input {\n                position: absolute;\n                width: 100%;\n                opacity: 0;\n                left: 0;\n                top: 0;\n                bottom: 0;\n                cursor: pointer; }\n        .for-container .for-toolbar > ul > li.for-active {\n          background: #ddd; }\n        .for-container .for-toolbar > ul > li:hover {\n          cursor: pointer;\n          background: #e9e9e9; }\n        .for-container .for-toolbar > ul > li i {\n          font-size: 1.2em; }\n  .for-container .for-editor {\n    display: flex;\n    justify-content: space-between;\n    height: 100%;\n    color: #2c3e50;\n    border-radius: 0 0 8px 8px;\n    overflow: hidden; }\n    .for-container .for-editor .for-panel {\n      height: 100%;\n      flex: 0 0 100%;\n      overflow: auto;\n      transition: all 0.2s linear 0s; }\n      .for-container .for-editor .for-panel.for-active {\n        flex: 0 0 50%; }\n      .for-container .for-editor .for-panel .for-preview {\n        min-height: 100%;\n        box-sizing: border-box;\n        padding: 10px 14px;\n        background: #fcfcfc; }\n    .for-container .for-editor .for-editor-edit {\n      line-height: 1.6;\n      height: 100%; }\n      .for-container .for-editor .for-editor-edit.for-edit-preview {\n        width: 0;\n        flex: 0 0 0; }\n      .for-container .for-editor .for-editor-edit .for-editor-block {\n        display: flex;\n        min-height: 100%; }\n      .for-container .for-editor .for-editor-edit .for-line-num {\n        list-style: none;\n        background: #eee;\n        padding: 8px 0 120px;\n        min-width: 30px;\n        text-align: center; }\n        .for-container .for-editor .for-editor-edit .for-line-num.hidden {\n          display: none; }\n        .for-container .for-editor .for-editor-edit .for-line-num li {\n          list-style: none; }\n      .for-container .for-editor .for-editor-edit .for-editor-content {\n        flex: 1;\n        position: relative;\n        height: 100%;\n        margin-left: 10px; }\n        .for-container .for-editor .for-editor-edit .for-editor-content pre {\n          padding: 8px 0;\n          display: block;\n          white-space: pre-wrap;\n          word-wrap: break-word;\n          visibility: hidden;\n          margin: 0;\n          font-family: inherit; }\n  .for-container textarea {\n    font-family: 'Consolas', 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;\n    box-sizing: border-box;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    padding: 8px 0;\n    display: block;\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    resize: none;\n    border: none;\n    outline: none;\n    font-size: inherit;\n    color: inherit;\n    background: none;\n    line-height: inherit; }\n  .for-container .for-markdown-preview {\n    line-height: 2; }\n    .for-container .for-markdown-preview p,\n    .for-container .for-markdown-preview blockquote,\n    .for-container .for-markdown-preview ul,\n    .for-container .for-markdown-preview ol,\n    .for-container .for-markdown-preview dl,\n    .for-container .for-markdown-preview pre {\n      margin-top: 0;\n      margin-bottom: 0.6em; }\n    .for-container .for-markdown-preview h1,\n    .for-container .for-markdown-preview h2 {\n      border-bottom: 1px solid #e2e2e2; }\n    .for-container .for-markdown-preview h1,\n    .for-container .for-markdown-preview h2,\n    .for-container .for-markdown-preview h3,\n    .for-container .for-markdown-preview h4,\n    .for-container .for-markdown-preview h5,\n    .for-container .for-markdown-preview h6 {\n      padding: 0;\n      margin: 0 0 0.6em;\n      font-weight: 600;\n      text-indent: 0; }\n      .for-container .for-markdown-preview h1:target,\n      .for-container .for-markdown-preview h2:target,\n      .for-container .for-markdown-preview h3:target,\n      .for-container .for-markdown-preview h4:target,\n      .for-container .for-markdown-preview h5:target,\n      .for-container .for-markdown-preview h6:target {\n        padding-top: 4.5rem; }\n    .for-container .for-markdown-preview a {\n      color: #0366d6;\n      text-decoration: none; }\n      .for-container .for-markdown-preview a:hover {\n        text-decoration: underline; }\n    .for-container .for-markdown-preview ul,\n    .for-container .for-markdown-preview ol {\n      padding: 0.2em 0.8em; }\n      .for-container .for-markdown-preview ul > li,\n      .for-container .for-markdown-preview ol > li {\n        line-height: 2;\n        padding-left: 0.2em;\n        margin-left: 0.2em;\n        list-style-type: disc; }\n        .for-container .for-markdown-preview ul > li > p,\n        .for-container .for-markdown-preview ol > li > p {\n          text-indent: 0; }\n        .for-container .for-markdown-preview ul > li > ul:last-child,\n        .for-container .for-markdown-preview ol > li > ul:last-child {\n          margin-bottom: 0; }\n        .for-container .for-markdown-preview ul > li > ul li,\n        .for-container .for-markdown-preview ol > li > ul li {\n          list-style-type: circle; }\n          .for-container .for-markdown-preview ul > li > ul li > ul li,\n          .for-container .for-markdown-preview ol > li > ul li > ul li {\n            list-style-type: square; }\n    .for-container .for-markdown-preview > ul,\n    .for-container .for-markdown-preview ol {\n      padding: 0 20px; }\n    .for-container .for-markdown-preview ol > li {\n      list-style-type: decimal; }\n    .for-container .for-markdown-preview blockquote {\n      margin: 0;\n      margin-bottom: 0.6em;\n      padding: 0 1em;\n      color: #6a737d;\n      border-left: 0.25em solid #dfe2e5; }\n      .for-container .for-markdown-preview blockquote p {\n        text-indent: 0; }\n        .for-container .for-markdown-preview blockquote p:first-child {\n          margin-top: 0; }\n        .for-container .for-markdown-preview blockquote p:last-child {\n          margin-bottom: 0; }\n    .for-container .for-markdown-preview pre {\n      padding: 0.6em;\n      overflow: auto;\n      line-height: 1.6;\n      background-color: #f0f0f0;\n      border-radius: 3px; }\n      .for-container .for-markdown-preview pre code {\n        padding: 0;\n        margin: 0;\n        font-size: 100%;\n        background: transparent; }\n    .for-container .for-markdown-preview code {\n      padding: 0.2em 0.4em;\n      margin: 0;\n      background-color: #f0f0f0;\n      border-radius: 3px; }\n    .for-container .for-markdown-preview hr {\n      margin-bottom: 0.6em;\n      height: 1px;\n      background: #dadada;\n      border: none; }\n    .for-container .for-markdown-preview table {\n      width: 100%;\n      border: 1px solid #ddd;\n      margin-bottom: 0.6em;\n      border-collapse: collapse;\n      text-align: left; }\n      .for-container .for-markdown-preview table thead {\n        background: #eee; }\n      .for-container .for-markdown-preview table th,\n      .for-container .for-markdown-preview table td {\n        padding: 0.1em 0.4em;\n        border: 1px solid #ddd; }\n    .for-container .for-markdown-preview img {\n      display: block;\n      margin: 0 auto;\n      max-width: 100%;\n      margin-bottom: 0.6em; }\n",
            ""
        ]);
    },
    function(e, t, n) {
        "use strict";
        const r = this && this.__importDefault || ((e)=>{
            if (e && e.__esModule) {
                return e;
            }
            return {
                default: e
            };
        });
        t.__esModule = true;
        const o = r(n(35));
        const i = r(n(36));
        t.CONFIG = {
            language: {
                "zh-CN": o.default,
                en: i.default
            },
            langList: [
                "zh-CN",
                "en"
            ],
            toolbar: {
                h1: true,
                h2: true,
                h3: true,
                h4: true,
                img: true,
                link: true,
                code: true,
                preview: true,
                expand: true,
                undo: true,
                redo: true,
                save: true,
                subfield: true
            }
        };
    },
    function(e) {
        e.exports = JSON.parse('{"placeholder":"开始编辑...","undo":"上一步","redo":"下一步","h1":"一级标题","h2":"二级标题","h3":"三级标题","h4":"四级标题","img":"添加图片链接","link":"链接","code":"代码块","save":"保存","preview":"预览","singleColumn":"单栏","doubleColumn":"双栏","fullscreenOn":"全屏编辑","fullscreenOff":"退出全屏","addImgLink":"添加图片链接","addImg":"上传图片"}');
    },
    function(e) {
        e.exports = JSON.parse('{"placeholder":"Begin editing...","undo":"Undo","redo":"Redo","h1":"Header 1","h2":"Header 2","h3":"Header 3","h4":"Header 4","img":"Image Link","link":"Link","code":"Code","save":"Save","preview":"Preview","singleColumn":"Single Column","doubleColumn":"Double Columns","fullscreenOn":"FullScreen ON","fullscreenOff":"FullScreen OFF","addImgLink":"Add Image Link","addImg":"Upload Image"}');
    }
]);
