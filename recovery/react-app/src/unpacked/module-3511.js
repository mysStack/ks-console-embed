export default function(e) {
    let t;
    if (typeof Symbol !== "undefined") {
        if (Symbol.asyncIterator && (t = e[Symbol.asyncIterator]) != null) {
            return t.call(e);
        }
        if (Symbol.iterator && (t = e[Symbol.iterator]) != null) {
            return t.call(e);
        }
    }
    throw new TypeError("Object is not async iterable");
};
