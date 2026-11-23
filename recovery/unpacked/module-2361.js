const r = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/;
const o = /\((c|tm|r|p)\)/i;
const i = /\((c|tm|r|p)\)/gi;
const a = {
    c: "©",
    r: "®",
    p: "§",
    tm: "™"
};
function l(e, t) {
    return a[t.toLowerCase()];
}
function u(children) {
    let t;
    let n;
    let r = 0;
    for(t = children.length - 1; t >= 0; t--){
        if (!((n = children[t]).type !== "text" || r)) {
            n.content = n.content.replace(i, l);
        }
        if (n.type === "link_open" && n.info === "auto") {
            r--;
        }
        if (n.type === "link_close" && n.info === "auto") {
            r++;
        }
    }
}
function s(children) {
    let t;
    let n;
    let o = 0;
    for(t = children.length - 1; t >= 0; t--){
        if (!((n = children[t]).type !== "text" || o)) {
            if (r.test(n.content)) {
                n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/gm, "$1—$2").replace(/(^|\s)--(\s|$)/gm, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/gm, "$1–$2");
            }
        }
        if (n.type === "link_open" && n.info === "auto") {
            o--;
        }
        if (n.type === "link_close" && n.info === "auto") {
            o++;
        }
    }
}
export default function(e) {
    let t;
    if (e.md.options.typographer) {
        for(t = e.tokens.length - 1; t >= 0; t--){
            if (e.tokens[t].type === "inline") {
                if (o.test(e.tokens[t].content)) {
                    u(e.tokens[t].children);
                }
                if (r.test(e.tokens[t].content)) {
                    s(e.tokens[t].children);
                }
            }
        }
    }
};
