import module542 from "./module-542.js";
export default function(e) {
    if (module542(e)) {
        return e;
    }
    throw new TypeError(`Can't set ${String(e)} as a prototype`);
};
