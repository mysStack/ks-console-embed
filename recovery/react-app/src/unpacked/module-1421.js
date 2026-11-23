import module1076 from "unpacked/module-1076.js";
export default function(e, t) {
    if (!module1076(e)) {
        return e;
    }
    let n;
    let o;
    if (t && typeof (n = e.toString) === "function" && !module1076(o = n.call(e))) {
        return o;
    }
    if (typeof (n = e.valueOf) === "function" && !module1076(o = n.call(e))) {
        return o;
    }
    if (!t && typeof (n = e.toString) === "function" && !module1076(o = n.call(e))) {
        return o;
    }
    throw TypeError("Can't convert object to primitive value");
};
