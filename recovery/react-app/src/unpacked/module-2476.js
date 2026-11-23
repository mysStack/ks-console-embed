import module798 from "./module-798.js";
export default function e(t, n) {
    module798(t);
    if (n != null && n.eui) {
        n.eui = String(n.eui);
    }
    if (n != null && n.no_colons || n != null && n.no_separators) {
        if (n.eui === "48") {
            return a.test(t);
        }
        if (n.eui === "64") {
            return s.test(t);
        }
        return a.test(t) || s.test(t);
    }
    if (n?.eui === "48") {
        return i.test(t) || l.test(t);
    }
    if (n?.eui === "64") {
        return u.test(t) || c.test(t);
    }
    return e(t, {
        eui: "48"
    }) || e(t, {
        eui: "64"
    });
};
var i = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){4}([0-9a-fA-F]{2})$/;
var a = /^([0-9a-fA-F]){12}$/;
var l = /^([0-9a-fA-F]{4}\.){2}([0-9a-fA-F]{4})$/;
var u = /^(?:[0-9a-fA-F]{2}([-:\s]))([0-9a-fA-F]{2}\1){6}([0-9a-fA-F]{2})$/;
var s = /^([0-9a-fA-F]){16}$/;
var c = /^([0-9a-fA-F]{4}\.){3}([0-9a-fA-F]{4})$/;

