import module230 from "./module-230.js";
export default function(e) {
    const __data__ = this.__data__;
    const n = module230(__data__, e);
    if (n < 0) {
        return undefined;
    }
    return __data__[n][1];
};
