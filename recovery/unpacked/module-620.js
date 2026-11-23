export default function(e) {
    const t = typeof e;
    if (t == "string" || t == "number" || t == "symbol" || t == "boolean") {
        return e !== "__proto__";
    }
    return e === null;
};
