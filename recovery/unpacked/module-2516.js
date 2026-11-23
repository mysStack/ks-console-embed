import module798 from "./module-798.js";
import module1588 from "./module-1588.js";
(function(e, t = {}) {
    module798(e);
    const t_provider = t.provider;
    const i = e.replace(/[- ]+/g, "");
    if (t_provider && t_provider.toLowerCase() in a) {
        if (!a[t_provider.toLowerCase()].test(i)) {
            return false;
        }
    } else {
        if (t_provider && !(t_provider.toLowerCase() in a)) {
            throw new Error(`${t_provider} is not a valid credit card provider.`);
        }
        if (!l.some((e)=>e.test(i))) {
            return false;
        }
    }
    return module1588(e);
});
var a = {
    amex: /^3[47][0-9]{13}$/,
    dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    discover: /^6(?:011|5[0-9][0-9])[0-9]{12,15}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
    mastercard: /^5[1-5][0-9]{2}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
    unionpay: /^(6[27][0-9]{14}|^(81[0-9]{14,17}))$/,
    visa: /^(?:4[0-9]{12})(?:[0-9]{3,6})?$/
};
var l = (()=>{
    const e = [];
    for(const t in a){
        if (a.hasOwnProperty(t)) {
            e.push(a[t]);
        }
    }
    return e;
})();
exports.default;
export default exports.default;
