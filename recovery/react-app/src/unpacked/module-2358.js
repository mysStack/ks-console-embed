export default function(e) {
    let t;
    if (e.inlineMode) {
        t = new e.Token("inline", "", 0);
        t.content = e.src;
        t.map = [
            0,
            1
        ];
        t.children = [];
        e.tokens.push(t);
    } else {
        e.md.block.parse(e.src, e.md, e.env, e.tokens);
    }
};
