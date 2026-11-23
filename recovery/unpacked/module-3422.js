import module3423 from "./module-3423.js";
const o = /^\s*class[\s{/}]/;
const toString = Function.prototype.toString;
export default function(e) {
    return !!module3423(e) && !o.test(toString.call(e));
};
