import module690 from "./module-690.js";
export default function(e, t) {
    if (typeof t !== "function" && t !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            writable: true,
            configurable: true
        }
    });
    if (t) {
        module690(e, t);
    }
};
