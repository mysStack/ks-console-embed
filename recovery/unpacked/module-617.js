import module231 from "./module-231.js";
const hasOwnProperty = Object.prototype.hasOwnProperty;
export default function(e) {
    const __data__ = this.__data__;
    if (module231) {
        return __data__[e] !== undefined;
    }
    return hasOwnProperty.call(__data__, e);
};
