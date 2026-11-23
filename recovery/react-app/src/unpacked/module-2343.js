import module819 from "unpacked/module-819.js";
import * as module2351 from "unpacked/module-2351.js";
import module2355 from "unpacked/module-2355.js";
import module2356 from "unpacked/module-2356.js";
import module2364 from "unpacked/module-2364.js";
import module2378 from "unpacked/module-2378.js";
import module2391 from "unpacked/module-2391.js";
import { decode, encode, format, parse } from "unpacked/module-1557.js";
import module2393 from "unpacked/module-2393.js";
import _default from "unpacked/module-2394.js";
import zero from "unpacked/module-2395.js";
import commonmark from "unpacked/module-2396.js";
const d = {
    default: _default,
    zero,
    commonmark
};
const p = /^(vbscript|javascript|file|data):/;
const h = /^data:image\/(gif|png|jpeg|webp);/;
function v(e) {
    const t = e.trim().toLowerCase();
    return !p.test(t) || !!h.test(t);
}
const g = [
    "http:",
    "https:",
    "mailto:"
];
function y(e) {
    const t = parse(e, true);
    if (t.hostname && (!t.protocol || g.indexOf(t.protocol) >= 0)) {
        try {
            t.hostname = module2393.toASCII(t.hostname);
        } catch (e) {}
    }
    return encode(format(t));
}
function m(e) {
    const t = parse(e, true);
    if (t.hostname && (!t.protocol || g.indexOf(t.protocol) >= 0)) {
        try {
            t.hostname = module2393.toUnicode(t.hostname);
        } catch (e) {}
    }
    return decode(format(t));
}
class b {
    constructor(e, t){
        if (!(this instanceof b)) {
            return new b(e, t);
        }
        if (!(t || module819.isString(e))) {
            t = e || {};
            e = "default";
        }
        this.inline = new module2378;
        this.block = new module2364;
        this.core = new module2356;
        this.renderer = new module2355;
        this.linkify = new module2391;
        this.validateLink = v;
        this.normalizeLink = y;
        this.normalizeLinkText = m;
        this.utils = module819;
        this.helpers = module819.assign({}, module2351);
        this.options = {};
        this.configure(e);
        if (t) {
            this.set(t);
        }
    }
    set(e) {
        module819.assign(this.options, e);
        return this;
    }
    configure(e) {
        let t;
        const _this = this;
        if (module819.isString(e) && !(e = d[t = e])) {
            throw new Error(`Wrong \`markdown-it\` preset "${t}", check name`);
        }
        if (!e) {
            throw new Error("Wrong `markdown-it` preset, can't be empty");
        }
        if (e.options) {
            _this.set(e.options);
        }
        if (e.components) {
            Object.keys(e.components).forEach((t)=>{
                if (e.components[t].rules) {
                    _this[t].ruler.enableOnly(e.components[t].rules);
                }
                if (e.components[t].rules2) {
                    _this[t].ruler2.enableOnly(e.components[t].rules2);
                }
            });
        }
        return this;
    }
    enable(e, t) {
        let n = [];
        if (!Array.isArray(e)) {
            e = [
                e
            ];
        }
        [
            "core",
            "block",
            "inline"
        ].forEach(function(t) {
            n = n.concat(this[t].ruler.enable(e, true));
        }, this);
        n = n.concat(this.inline.ruler2.enable(e, true));
        const r = e.filter((e)=>n.indexOf(e) < 0);
        if (r.length && !t) {
            throw new Error(`MarkdownIt. Failed to enable unknown rule(s): ${r}`);
        }
        return this;
    }
    disable(e, t) {
        let n = [];
        if (!Array.isArray(e)) {
            e = [
                e
            ];
        }
        [
            "core",
            "block",
            "inline"
        ].forEach(function(t) {
            n = n.concat(this[t].ruler.disable(e, true));
        }, this);
        n = n.concat(this.inline.ruler2.disable(e, true));
        const r = e.filter((e)=>n.indexOf(e) < 0);
        if (r.length && !t) {
            throw new Error(`MarkdownIt. Failed to disable unknown rule(s): ${r}`);
        }
        return this;
    }
    use(e) {
        const t = [
            this
        ].concat(Array.prototype.slice.call(arguments, 1));
        e.apply(e, t);
        return this;
    }
    parse(e, t) {
        if (typeof e !== "string") {
            throw new Error("Input data should be a String");
        }
        const n = new this.core.State(e, this, t);
        this.core.process(n);
        return n.tokens;
    }
    render(e, t) {
        t = t || {};
        return this.renderer.render(this.parse(e, t), this.options, t);
    }
    parseInline(e, t) {
        const n = new this.core.State(e, this, t);
        n.inlineMode = true;
        this.core.process(n);
        return n.tokens;
    }
    renderInline(e, t) {
        t = t || {};
        return this.renderer.render(this.parseInline(e, t), this.options, t);
    }
}
export default b;
