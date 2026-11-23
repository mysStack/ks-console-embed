import module403 from "./module-403.js";
const o = /^\s+/;
export default function(e) {
    if (e) {
        return e.slice(0, module403(e) + 1).replace(o, "");
    }
    return e;
};
