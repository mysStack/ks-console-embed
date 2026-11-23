export default function(e, t, n, r) {
    if (n) {
        Object.defineProperty(e, t, {
            enumerable: n.enumerable,
            configurable: n.configurable,
            writable: n.writable,
            value: n.initializer ? n.initializer.call(r) : undefined
        });
    }
};
