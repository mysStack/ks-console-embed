import module267 from "./module-267.js";
export default function(e) {
    const t = module267(e, "number");
    if (typeof t === "number") {
        throw new TypeError("Can't convert number to bigint");
    }
    return BigInt(t);
};
