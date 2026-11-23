import module610 from "./module-610.js";
let r;
const a = (r = /[^.]+$/.exec(module610 && module610.keys && module610.keys.IE_PROTO || "")) ? `Symbol(src)_1.${r}` : "";
export default function(e) {
    return !!a && a in e;
};
