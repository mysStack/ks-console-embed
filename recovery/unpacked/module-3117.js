import { format } from "./module-850.js";
export default function(e, t, n, o, i) {
    if (e.pattern) {
        if (e.pattern instanceof RegExp) {
            e.pattern.lastIndex = 0;
            if (!e.pattern.test(t)) {
                o.push(format(i.messages.pattern.mismatch, e.fullField, t, e.pattern));
            }
        } else if (typeof e.pattern === "string") {
            if (!new RegExp(e.pattern).test(t)) {
                o.push(format(i.messages.pattern.mismatch, e.fullField, t, e.pattern));
            }
        }
    }
};
