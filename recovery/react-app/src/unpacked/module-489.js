import module21 from "unpacked/module-21.js";
const a = module21("".replace);
const i = String(new Error("zxcasd").stack);
const l = /\n\s*at [^:]*:[^\n]*/;
const s = l.test(i);
export default function(e, t) {
    if (s && typeof e === "string" && !Error.prepareStackTrace) {
        while(t--){
            e = a(e, l, "");
        }
    }
    return e;
};
