const toString = Object.prototype.toString;
const o = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
export default function(e) {
    return typeof e === "function" && o(toString.call(e));
};
