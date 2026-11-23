import module1203 from "unpacked/module-1203.js";
const o = {
    object: true,
    symbol: true
};
export default function() {
    let e;
    const module1203_Symbol = module1203.Symbol;
    if (typeof module1203_Symbol !== "function") {
        return false;
    }
    e = module1203_Symbol("test symbol");
    try {
        String(e);
    } catch (e) {
        return false;
    }
    return !!o[typeof module1203_Symbol.iterator] && !!o[typeof module1203_Symbol.toPrimitive] && !!o[typeof module1203_Symbol.toStringTag];
};
