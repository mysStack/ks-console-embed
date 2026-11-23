export const tokenize = function(e, t) {
    let jump;
    let r;
    const e_pos = e.pos;
    const marker = e.src.charCodeAt(e_pos);
    if (t) {
        return false;
    }
    if (marker !== 95 && marker !== 42) {
        return false;
    }
    r = e.scanDelims(e.pos, marker === 42);
    for(jump = 0; jump < r.length; jump++){
        e.push("text", "", 0).content = String.fromCharCode(marker);
        e.delimiters.push({
            marker,
            length: r.length,
            jump,
            token: e.tokens.length - 1,
            level: e.level,
            end: -1,
            open: r.can_open,
            close: r.can_close
        });
    }
    e.pos += r.length;
    return true;
};
export const postProcess = function(e) {
    let t;
    let n;
    let r;
    let o;
    let i;
    let a;
    const e_delimiters = e.delimiters;
    for(t = e.delimiters.length - 1; t >= 0; t--){
        if (!((n = e_delimiters[t]).marker !== 95 && n.marker !== 42)) {
            if (n.end !== -1) {
                r = e_delimiters[n.end];
                a = t > 0 && e_delimiters[t - 1].end === n.end + 1 && e_delimiters[t - 1].token === n.token - 1 && e_delimiters[n.end + 1].token === r.token + 1 && e_delimiters[t - 1].marker === n.marker;
                i = String.fromCharCode(n.marker);
                (o = e.tokens[n.token]).type = a ? "strong_open" : "em_open";
                o.tag = a ? "strong" : "em";
                o.nesting = 1;
                o.markup = a ? i + i : i;
                o.content = "";
                (o = e.tokens[r.token]).type = a ? "strong_close" : "em_close";
                o.tag = a ? "strong" : "em";
                o.nesting = -1;
                o.markup = a ? i + i : i;
                o.content = "";
                if (a) {
                    e.tokens[e_delimiters[t - 1].token].content = "";
                    e.tokens[e_delimiters[n.end + 1].token].content = "";
                    t--;
                }
            }
        }
    }
};
