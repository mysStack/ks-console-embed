const hasOwnProperty = Object.prototype.hasOwnProperty;
export default function(e) {
    const e_length = e.length;
    const r = new e.constructor(e_length);
    if (e_length && typeof e[0] === "string" && hasOwnProperty.call(e, "index")) {
        r.index = e.index;
        r.input = e.input;
    }
    return r;
};
