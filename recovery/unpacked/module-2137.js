import module2138 from "./module-2138.js";
export default (function e(t, n, o) {
    const i = t;
    return ((e, t)=>{
        const n = [];
        const o = typeof t === "string" ? new RegExp(`\\b(${t})\\(`) : t;
        do {
            const i = o.exec(e);
            if (!i) {
                return n;
            }
            if (i[1] === undefined) {
                throw new Error(`Missing the first couple of parenthesis to get the function identifier in ${t}`);
            }
            const functionIdentifier = i[1];
            const l = i.index;
            const matches = module2138("(", ")", e.substring(l));
            if (!matches || matches.start !== i[0].length - 1) {
                throw new SyntaxError(`${functionIdentifier}(): missing closing ')' in the value '${e}'`);
            }
            n.push({
                matches,
                functionIdentifier
            });
            e = matches.post;
        }while (o.test(e))
        return n;
    })(t, n).reduce((acc, item)=>acc.replace(`${item.functionIdentifier}(${item.matches.body})`, ((t, n, r, o, i)=>r(e(t, i, r), n, o))(item.matches.body, item.functionIdentifier, o, i, n)), t);
});
