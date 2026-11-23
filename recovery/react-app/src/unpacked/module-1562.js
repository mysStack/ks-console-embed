export const tokenize = function(e, t) {
    let jump;
    let r;
    let o;
    let i;
    const e_pos = e.pos;
    const marker = e.src.charCodeAt(e_pos);
    if (t) {
        return false;
    }
    if (marker !== 126) {
        return false;
    }
    o = (r = e.scanDelims(e.pos, true)).length;
    i = String.fromCharCode(marker);
    if (o < 2) {
        return false;
    }
    if (o % 2) {
        e.push("text", "", 0).content = i;
        o--;
    }
    for(jump = 0; jump < o; jump += 2){
        e.push("text", "", 0).content = i + i;
        e.delimiters.push({
            marker,
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
    const a = [];
    const e_delimiters = e.delimiters;
    const length = e.delimiters.length;
    for(t = 0; t < length; t++){
        if ((r = e_delimiters[t]).marker === 126 && r.end !== -1) {
            o = e_delimiters[r.end];
            i = e.tokens[r.token];
            i.type = "s_open";
            i.tag = "s";
            i.nesting = 1;
            i.markup = "~~";
            i.content = "";
            i = e.tokens[o.token];
            i.type = "s_close";
            i.tag = "s";
            i.nesting = -1;
            i.markup = "~~";
            i.content = "";
            if (e.tokens[o.token - 1].type === "text" && e.tokens[o.token - 1].content === "~") {
                a.push(o.token - 1);
            }
        }
    }
    while(a.length){
        for(n = (t = a.pop()) + 1; n < e.tokens.length && e.tokens[n].type === "s_close";){
            n++;
        }
        if (t !== --n) {
            i = e.tokens[n];
            e.tokens[n] = e.tokens[t];
            e.tokens[t] = i;
        }
    }
};
