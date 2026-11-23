const n = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]";
const r = "\\ud83c[\\udffb-\\udfff]";
const o = "[^\\ud800-\\udfff]";
const a = "(?:\\ud83c[\\udde6-\\uddff]){2}";
const i = "[\\ud800-\\udbff][\\udc00-\\udfff]";
const l = `(?:${n}|${r})?`;
const s = `[\\ufe0e\\ufe0f]?${l}(?:\\u200d(?:${[
    o,
    a,
    i
].join("|")})[\\ufe0e\\ufe0f]?${l})*`;
const u = `(?:${[
    `${o + n}?`,
    n,
    a,
    i,
    "[\\ud800-\\udfff]"
].join("|")})`;
const c = RegExp(`${r}(?=${r})|${u}${s}`, "g");
export default function(e) {
    return e.match(c) || [];
};
