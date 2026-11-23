const n = /\{\n\/\* \[wrapped with (.+)\] \*/;
const r = /,? & /;
export default function(e) {
    const t = e.match(n);
    if (t) {
        return t[1].split(r);
    }
    return [];
};
