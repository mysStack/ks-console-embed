const n = [];
for(let r = 0; r < 256; ++r){
    n[r] = (r + 256).toString(16).substr(1);
}
export default function(e, t) {
    let r = t || 0;
    const o = n;
    return [
        o[e[r++]],
        o[e[r++]],
        o[e[r++]],
        o[e[r++]],
        "-",
        o[e[r++]],
        o[e[r++]],
        "-",
        o[e[r++]],
        o[e[r++]],
        "-",
        o[e[r++]],
        o[e[r++]],
        "-",
        o[e[r++]],
        o[e[r++]],
        o[e[r++]],
        o[e[r++]],
        o[e[r++]],
        o[e[r++]]
    ].join("");
};
