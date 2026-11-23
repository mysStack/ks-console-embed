import module230 from "./module-230.js";
const splice = Array.prototype.splice;
export default function(e) {
    const __data__ = this.__data__;
    const n = module230(__data__, e);
    return !(n < 0 || (n == __data__.length - 1 ? __data__.pop() : splice.call(__data__, n, 1), --this.size, 0));
};
