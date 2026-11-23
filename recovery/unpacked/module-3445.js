const toString = Object.prototype.toString;
const o = toString.call("");
export default function(e) {
    return typeof e === "string" || e && typeof e === "object" && (e instanceof String || toString.call(e) === o) || false;
};
