import { isWhiteSpace, isPunctChar, isMdAsciiPunct } from "./module-819.js";
const a = /['"]/;
const l = /['"]/g;
function u(content, t, n) {
    return content.substr(0, t) + n + content.substr(t + 1);
}
function s(children, t) {
    let token;
    let a;
    let s;
    let c;
    let f;
    let d;
    let level;
    let h;
    let v;
    let g;
    let y;
    let m;
    let b;
    let x;
    let w;
    let _;
    let C;
    let single;
    let M;
    let S;
    const E = [];
    for(token = 0; token < children.length; token++){
        a = children[token];
        level = children[token].level;
        for(C = E.length - 1; C >= 0 && !(E[C].level <= level); C--);
        E.length = C + 1;
        if (a.type === "text") {
            f = 0;
            d = (s = a.content).length;
            e: while(f < d && (l.lastIndex = f, c = l.exec(s))){
                _ = true;
                w = true;
                f = c.index + 1;
                single = c[0] === "'";
                v = 32;
                if (c.index - 1 >= 0) {
                    v = s.charCodeAt(c.index - 1);
                } else {
                    for(C = token - 1; C >= 0 && children[C].type !== "softbreak" && children[C].type !== "hardbreak"; C--){
                        if (children[C].type === "text") {
                            v = children[C].content.charCodeAt(children[C].content.length - 1);
                            break;
                        }
                    }
                }
                g = 32;
                if (f < d) {
                    g = s.charCodeAt(f);
                } else {
                    for(C = token + 1; C < children.length && children[C].type !== "softbreak" && children[C].type !== "hardbreak"; C++){
                        if (children[C].type === "text") {
                            g = children[C].content.charCodeAt(0);
                            break;
                        }
                    }
                }
                y = isMdAsciiPunct(v) || isPunctChar(String.fromCharCode(v));
                m = isMdAsciiPunct(g) || isPunctChar(String.fromCharCode(g));
                b = isWhiteSpace(v);
                if (x = isWhiteSpace(g)) {
                    w = false;
                } else {
                    if (m) {
                        if (!(b || y)) {
                            w = false;
                        }
                    }
                }
                if (b) {
                    _ = false;
                } else {
                    if (y) {
                        if (!(x || m)) {
                            _ = false;
                        }
                    }
                }
                if (g === 34 && c[0] === '"' && v >= 48 && v <= 57) {
                    w = false;
                    _ = false;
                }
                if (w && _) {
                    w = false;
                    _ = m;
                }
                if (w || _) {
                    if (_) {
                        for(C = E.length - 1; C >= 0 && (h = E[C], !(E[C].level < level)); C--){
                            if (h.single === single && E[C].level === level) {
                                h = E[C];
                                if (single) {
                                    M = t.md.options.quotes[2];
                                    S = t.md.options.quotes[3];
                                } else {
                                    M = t.md.options.quotes[0];
                                    S = t.md.options.quotes[1];
                                }
                                a.content = u(a.content, c.index, S);
                                children[h.token].content = u(children[h.token].content, h.pos, M);
                                f += S.length - 1;
                                if (h.token === token) {
                                    f += M.length - 1;
                                }
                                d = (s = a.content).length;
                                E.length = C;
                                continue e;
                            }
                        }
                    }
                    if (w) {
                        E.push({
                            token,
                            pos: c.index,
                            single,
                            level
                        });
                    } else if (_ && single) {
                        a.content = u(a.content, c.index, "’");
                    }
                } else {
                    if (single) {
                        a.content = u(a.content, c.index, "’");
                    }
                }
            }
        }
    }
}
export default function(e) {
    let t;
    if (e.md.options.typographer) {
        for(t = e.tokens.length - 1; t >= 0; t--){
            if (e.tokens[t].type === "inline" && a.test(e.tokens[t].content)) {
                s(e.tokens[t].children, e);
            }
        }
    }
};
