import module3439 from "./module-3439.js";
export default function(e) {
    if (!module3439(e)) {
        throw new TypeError(`${e} is not a symbol`);
    }
    return e;
};
