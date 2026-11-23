import module798 from "./module-798.js";
export default function(e, t) {
    module798(e);
    if (t in s) {
        return s[t].test(e);
    }
    if (t === "any") {
        for(const n in s){
            if (s.hasOwnProperty(n) && s[n].test(e)) {
                return true;
            }
        }
        return false;
    }
    throw new Error(`Invalid locale '${t}'`);
};
const i = /^\d{3}$/;
const a = /^\d{4}$/;
const l = /^\d{5}$/;
const u = /^\d{6}$/;
var s = {
    AD: /^AD\d{3}$/,
    AT: a,
    AU: a,
    AZ: /^AZ\d{4}$/,
    BA: /^([7-8]\d{4}$)/,
    BE: a,
    BG: a,
    BR: /^\d{5}-\d{3}$/,
    BY: /^2[1-4]\d{4}$/,
    CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
    CH: a,
    CN: /^(0[1-7]|1[012356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[1-5]|8[1345]|9[09])\d{4}$/,
    CZ: /^\d{3}\s?\d{2}$/,
    DE: l,
    DK: a,
    DO: l,
    DZ: l,
    EE: l,
    ES: /^(5[0-2]{1}|[0-4]{1}\d{1})\d{3}$/,
    FI: l,
    FR: /^\d{2}\s?\d{3}$/,
    GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
    GR: /^\d{3}\s?\d{2}$/,
    HR: /^([1-5]\d{4}$)/,
    HT: /^HT\d{4}$/,
    HU: a,
    ID: l,
    IE: /^(?!.*(?:o))[A-Za-z]\d[\dw]\s\w{4}$/i,
    IL: /^(\d{5}|\d{7})$/,
    IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
    IR: /^(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}$/,
    IS: i,
    IT: l,
    JP: /^\d{3}\-\d{4}$/,
    KE: l,
    KR: /^(\d{5}|\d{6})$/,
    LI: /^(948[5-9]|949[0-7])$/,
    LT: /^LT\-\d{5}$/,
    LU: a,
    LV: /^LV\-\d{4}$/,
    LK: l,
    MG: i,
    MX: l,
    MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
    MY: l,
    NL: /^\d{4}\s?[a-z]{2}$/i,
    NO: a,
    NP: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
    NZ: a,
    PL: /^\d{2}\-\d{3}$/,
    PR: /^00[679]\d{2}([ -]\d{4})?$/,
    PT: /^\d{4}\-\d{3}?$/,
    RO: u,
    RU: u,
    SA: l,
    SE: /^[1-9]\d{2}\s?\d{2}$/,
    SG: u,
    SI: a,
    SK: /^\d{3}\s?\d{2}$/,
    TH: l,
    TN: a,
    TW: /^\d{3}(\d{2})?$/,
    UA: l,
    US: /^\d{5}(-\d{4})?$/,
    ZA: a,
    ZM: l
};
export const locales = Object.keys(s);
