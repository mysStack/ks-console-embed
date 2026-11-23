import module25 from "./module-25.js";
export default function(e, t) {
    try {
        Object.defineProperty(module25, e, {
            value: t,
            configurable: true,
            writable: true
        });
    } catch (n) {
        module25[e] = t;
    }
    return t;
};
