import module798 from "./module-798.js";
export default function(e, t, n) {
    module798(e);
    if (Object.prototype.toString.call(t) !== "[object RegExp]") {
        t = new RegExp(t, n);
    }
    return !!e.match(t);
};

