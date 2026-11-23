import module883 from "./module-883.js";
import module798 from "./module-798.js";
export default function(e, t) {
    module798(e);
    return ((e)=>{
        let t = `\\d{${e.digits_after_decimal[0]}}`;
        e.digits_after_decimal.forEach((e, n)=>{
            if (n !== 0) {
                t = `${t}|\\d{${e}}`;
            }
        });
        const n = `(${e.symbol.replace(/\W/, (e)=>`\\${e}`)})${e.require_symbol ? "" : "?"}`;
        const r = `[1-9]\\d{0,2}(\\${e.thousands_separator}\\d{3})*`;
        const o = `(${[
            "0",
            "[1-9]\\d*",
            r
        ].join("|")})?`;
        const i = `(\\${e.decimal_separator}(${t}))${e.require_decimal ? "" : "?"}`;
        let a = o + (e.allow_decimal || e.require_decimal ? i : "");
        if (e.allow_negatives && !e.parens_for_negatives) {
            if (e.negative_sign_after_digits) {
                a += "-?";
            } else if (e.negative_sign_before_digits) {
                a = `-?${a}`;
            }
        }
        if (e.allow_negative_sign_placeholder) {
            a = `( (?!\\-))?${a}`;
        } else if (e.allow_space_after_symbol) {
            a = ` ?${a}`;
        } else if (e.allow_space_after_digits) {
            a += "( (?!$))?";
        }
        if (e.symbol_after_digits) {
            a += n;
        } else {
            a = n + a;
        }
        if (e.allow_negatives) {
            if (e.parens_for_negatives) {
                a = `(\\(${a}\\)|${a})`;
            } else if (!(e.negative_sign_before_digits || e.negative_sign_after_digits)) {
                a = `-?${a}`;
            }
        }
        return new RegExp(`^(?!-? )(?=.*\\d)${a}\$`);
    })(t = module883(t, a)).test(e);
};
var a = {
    symbol: "$",
    require_symbol: false,
    allow_space_after_symbol: false,
    symbol_after_digits: false,
    allow_negatives: true,
    parens_for_negatives: false,
    negative_sign_before_digits: false,
    negative_sign_after_digits: false,
    allow_negative_sign_placeholder: false,
    thousands_separator: ",",
    decimal_separator: ".",
    allow_decimal: true,
    require_decimal: false,
    digits_after_decimal: [
        2
    ],
    allow_space_after_digits: false
};

