import { format } from "unpacked/module-850.js";
export default function(e, t, n, o, i) {
    if (/^\s+$/.test(t) || t === "") {
        o.push(format(i.messages.whitespace, e.fullField));
    }
};
