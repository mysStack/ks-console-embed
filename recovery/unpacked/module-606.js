import module194 from "./module-194.js";
import module609 from "./module-609.js";
import module76 from "./module-76.js";
import module392 from "./module-392.js";
const l = /^\[object .+?Constructor\]$/;
const toString = Function.prototype.toString;
const hasOwnProperty = Object.prototype.hasOwnProperty;
const d = RegExp(`^${toString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?")}\$`);
export default function(e) {
    return !(!module76(e) || module609(e)) && (module194(e) ? d : l).test(module392(e));
};
