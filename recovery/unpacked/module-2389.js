export default function(e) {
    let t;
    let n;
    let r = 0;
    const e_tokens = e.tokens;
    const length = e.tokens.length;
    for(t = n = 0; t < length; t++){
        r += e_tokens[t].nesting;
        e_tokens[t].level = r;
        if (e_tokens[t].type === "text" && t + 1 < length && e_tokens[t + 1].type === "text") {
            e_tokens[t + 1].content = e_tokens[t].content + e_tokens[t + 1].content;
        } else {
            if (t !== n) {
                e_tokens[n] = e_tokens[t];
            }
            n++;
        }
    }
    if (t !== n) {
        e_tokens.length = n;
    }
};
