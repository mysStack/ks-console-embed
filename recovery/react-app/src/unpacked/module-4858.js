const n = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
export default function(e, t) {
    const t_length = t.length;
    if (!t_length) {
        return e;
    }
    const o = t_length - 1;
    t[o] = (t_length > 1 ? "& " : "") + t[o];
    t = t.join(t_length > 2 ? ", " : " ");
    return e.replace(n, `{
/* [wrapped with ${t}] */
`);
};
