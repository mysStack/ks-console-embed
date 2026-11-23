import { assign, unescapeAll, escapeHtml } from "unpacked/module-819.js";
const a = {};
class l {
    constructor(){
        this.rules = assign({}, a);
    }
    renderAttrs(e) {
        let t;
        let n;
        let r;
        if (!e.attrs) {
            return "";
        }
        r = "";
        t = 0;
        for(n = e.attrs.length; t < n; t++){
            r += ` ${escapeHtml(e.attrs[t][0])}="${escapeHtml(e.attrs[t][1])}"`;
        }
        return r;
    }
    renderToken(e, t, n) {
        let r;
        let o = "";
        let i = false;
        const a = e[t];
        if (a.hidden) {
            return "";
        }
        if (a.block && a.nesting !== -1 && t && e[t - 1].hidden) {
            o += "\n";
        }
        o += (a.nesting === -1 ? "</" : "<") + a.tag;
        o += this.renderAttrs(a);
        if (a.nesting === 0 && n.xhtmlOut) {
            o += " /";
        }
        if (a.block) {
            i = true;
            if (a.nesting === 1 && t + 1 < e.length && ((r = e[t + 1]).type === "inline" || r.hidden || r.nesting === -1 && r.tag === a.tag)) {
                i = false;
            }
        }
        return o += i ? ">\n" : ">";
    }
    renderInline(e, t, n) {
        let r;
        let o = "";
        const rules = this.rules;
        for(let a = 0, l = e.length; a < l; a++){
            if (rules[r = e[a].type] !== undefined) {
                o += rules[r](e, a, t, n, this);
            } else {
                o += this.renderToken(e, a, t);
            }
        }
        return o;
    }
    renderInlineAsText(e, t, n) {
        let r = "";
        for(let o = 0, i = e.length; o < i; o++){
            if (e[o].type === "text") {
                r += e[o].content;
            } else if (e[o].type === "image") {
                r += this.renderInlineAsText(e[o].children, t, n);
            }
        }
        return r;
    }
    render(e, t, n) {
        let r;
        let o;
        let i;
        let a = "";
        const rules = this.rules;
        r = 0;
        for(o = e.length; r < o; r++){
            if ((i = e[r].type) === "inline") {
                a += this.renderInline(e[r].children, t, n);
            } else if (rules[i] !== undefined) {
                a += rules[e[r].type](e, r, t, n, this);
            } else {
                a += this.renderToken(e, r, t, n);
            }
        }
        return a;
    }
}
a.code_inline = function(e, t, n, r, o) {
    const a = e[t];
    return `<code${o.renderAttrs(a)}>${escapeHtml(e[t].content)}</code>`;
};
a.code_block = function(e, t, n, r, o) {
    const a = e[t];
    return `<pre${o.renderAttrs(a)}><code>${escapeHtml(e[t].content)}</code></pre>
`;
};
a.fence = function(e, t, n, r, a) {
    let l;
    let u;
    let attrs;
    let c;
    const f = e[t];
    const d = f.info ? unescapeAll(f.info).trim() : "";
    let p = "";
    if (d) {
        p = d.split(/\s+/g)[0];
    }
    if ((l = n.highlight && n.highlight(f.content, p) || escapeHtml(f.content)).indexOf("<pre") === 0) {
        return `${l}
`;
    }
    if (d) {
        u = f.attrIndex("class");
        attrs = f.attrs ? f.attrs.slice() : [];
        if (u < 0) {
            attrs.push([
                "class",
                n.langPrefix + p
            ]);
        } else {
            attrs[u][1] += ` ${n.langPrefix}${p}`;
        }
        c = {
            attrs
        };
        return `<pre><code${a.renderAttrs(c)}>${l}</code></pre>
`;
    }
    return `<pre><code${a.renderAttrs(f)}>${l}</code></pre>
`;
};
a.image = function(e, t, n, r, o) {
    const i = e[t];
    i.attrs[i.attrIndex("alt")][1] = o.renderInlineAsText(i.children, n, r);
    return o.renderToken(e, t, n);
};
a.hardbreak = function(e, t, n) {
    if (n.xhtmlOut) {
        return "<br />\n";
    }
    return "<br>\n";
};
a.softbreak = function(e, t, n) {
    if (n.breaks) {
        if (n.xhtmlOut) {
            return "<br />\n";
        }
        return "<br>\n";
    }
    return "\n";
};
a.text = function(e, t) {
    return escapeHtml(e[t].content);
};
a.html_block = function(e, t) {
    return e[t].content;
};
a.html_inline = function(e, t) {
    return e[t].content;
};
export default l;
