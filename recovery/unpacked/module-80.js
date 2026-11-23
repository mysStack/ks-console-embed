import module103 from "./module-103.js";
export default function(e) {
    if (module103(e)) {
        throw new TypeError(`Can't call method on ${e}`);
    }
    return e;
};
