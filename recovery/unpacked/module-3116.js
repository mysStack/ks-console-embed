import { format } from "./module-850.js";
export default function(e, t, n, o, i) {
    e.enum = Array.isArray(e.enum) ? e.enum : [];
    if (e.enum.indexOf(t) === -1) {
        o.push(format(i.messages.enum, e.fullField, e.enum.join(", ")));
    }
};
