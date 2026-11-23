const n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]";
const r = "\\ud83c[\\udffb-\\udfff]";
const o = "[^\\ud800-\\udfff]";
const i = "(?:\\ud83c[\\udde6-\\uddff]){2}";
const a = "[\\ud800-\\udbff][\\udc00-\\udfff]";
const l = `(?:${n}|${r})?`;
const u = `[\\ufe0e\\ufe0f]?${l}(?:\\u200d(?:${[
    o,
    i,
    a
].join("|")})[\\ufe0e\\ufe0f]?${l})*`;
const s = `(?:${[
    `${o + n}?`,
    n,
    i,
    a,
    "[\\ud800-\\udfff]"
].join("|")})`;
const c = RegExp(`${r}(?=${r})|${s}${u}`, "g");
export default function(e) {
    let t = c.lastIndex = 0;
    while(c.test(e)){
        ++t;
    }
    return t;
};
