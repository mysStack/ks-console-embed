import module2413 from "./module-2413.js";
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
        module2413(e, t);
    }
};
