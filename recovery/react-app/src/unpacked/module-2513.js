import module1317 from "./module-1317.js";
export default function(e, t) {
    const n = t?.comparisonDate || t || Date().toString();
    const r = module1317(n);
    const i = module1317(e);
    return !!(i && r && i > r);
};

