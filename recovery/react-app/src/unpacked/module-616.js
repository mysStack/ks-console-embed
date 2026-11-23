import module231 from "./module-231.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
export default function(e) {
    const __data__ = this.__data__;
    if (module231) {
        const n = __data__[e];
        if (n === "__lodash_hash_undefined__") {
            return undefined;
        }
        return n;
    }
    if (hasOwnProperty.call(__data__, e)) {
        return __data__[e];
    }
};
