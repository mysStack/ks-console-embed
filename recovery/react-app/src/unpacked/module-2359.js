export default function(e) {
    let t;
    let n;
    let r;
    const e_tokens = e.tokens;
    n = 0;
    for(r = e_tokens.length; n < r; n++){
        if ((t = e_tokens[n]).type === "inline") {
            e.md.inline.parse(t.content, e.md, e.env, t.children);
        }
    }
};
