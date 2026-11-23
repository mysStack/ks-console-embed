import module798 from "./module-798.js";
import { reverseMultiplyAndSum } from "./module-1589.js";
function r(e) {
    return (r = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
export default function(e, t) {
    module798(e);
    module798(t);
    if (t in vatMatchers) {
        return vatMatchers[t](e);
    }
    throw new Error(`Invalid country code: '${t}'`);
};
function l() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    l = function() {
        return weakMap;
    };
    return weakMap;
}
export var vatMatchers = {
    AT: function(e) {
        return /^(AT)?U\d{8}$/.test(e);
    },
    BE: function(e) {
        return /^(BE)?\d{10}$/.test(e);
    },
    BG: function(e) {
        return /^(BG)?\d{9,10}$/.test(e);
    },
    HR: function(e) {
        return /^(HR)?\d{11}$/.test(e);
    },
    CY: function(e) {
        return /^(CY)?\w{9}$/.test(e);
    },
    CZ: function(e) {
        return /^(CZ)?\d{8,10}$/.test(e);
    },
    DK: function(e) {
        return /^(DK)?\d{8}$/.test(e);
    },
    EE: function(e) {
        return /^(EE)?\d{9}$/.test(e);
    },
    FI: function(e) {
        return /^(FI)?\d{8}$/.test(e);
    },
    FR: function(e) {
        return /^(FR)?\w{2}\d{9}$/.test(e);
    },
    DE: function(e) {
        return /^(DE)?\d{9}$/.test(e);
    },
    EL: function(e) {
        return /^(EL)?\d{9}$/.test(e);
    },
    HU: function(e) {
        return /^(HU)?\d{8}$/.test(e);
    },
    IE: function(e) {
        return /^(IE)?\d{7}\w{1}(W)?$/.test(e);
    },
    IT: function(e) {
        return /^(IT)?\d{11}$/.test(e);
    },
    LV: function(e) {
        return /^(LV)?\d{11}$/.test(e);
    },
    LT: function(e) {
        return /^(LT)?\d{9,12}$/.test(e);
    },
    LU: function(e) {
        return /^(LU)?\d{8}$/.test(e);
    },
    MT: function(e) {
        return /^(MT)?\d{8}$/.test(e);
    },
    NL: function(e) {
        return /^(NL)?\d{9}B\d{2}$/.test(e);
    },
    PL: function(e) {
        return /^(PL)?(\d{10}|(\d{3}-\d{3}-\d{2}-\d{2})|(\d{3}-\d{2}-\d{2}-\d{3}))$/.test(e);
    },
    PT: function(e) {
        const t = e.match(/^(PT)?(\d{9})$/);
        if (!t) {
            return false;
        }
        const n = t[2];
        const r = 11 - reverseMultiplyAndSum(n.split("").slice(0, 8).map((e)=>parseInt(e, 10)), 9) % 11;
        if (r > 9) {
            return parseInt(n[8], 10) === 0;
        }
        return r === parseInt(n[8], 10);
    },
    RO: function(e) {
        return /^(RO)?\d{2,10}$/.test(e);
    },
    SK: function(e) {
        return /^(SK)?\d{10}$/.test(e);
    },
    SI: function(e) {
        return /^(SI)?\d{8}$/.test(e);
    },
    ES: function(e) {
        return /^(ES)?\w\d{7}[A-Z]$/.test(e);
    },
    SE: function(e) {
        return /^(SE)?\d{12}$/.test(e);
    },
    AL: function(e) {
        return /^(AL)?\w{9}[A-Z]$/.test(e);
    },
    MK: function(e) {
        return /^(MK)?\d{13}$/.test(e);
    },
    AU: function(e) {
        return /^(AU)?\d{11}$/.test(e);
    },
    BY: function(e) {
        return /^(УНП )?\d{9}$/.test(e);
    },
    CA: function(e) {
        return /^(CA)?\d{9}$/.test(e);
    },
    IS: function(e) {
        return /^(IS)?\d{5,6}$/.test(e);
    },
    IN: function(e) {
        return /^(IN)?\d{15}$/.test(e);
    },
    ID: function(e) {
        return /^(ID)?(\d{15}|(\d{2}.\d{3}.\d{3}.\d{1}-\d{3}.\d{3}))$/.test(e);
    },
    IL: function(e) {
        return /^(IL)?\d{9}$/.test(e);
    },
    KZ: function(e) {
        return /^(KZ)?\d{9}$/.test(e);
    },
    NZ: function(e) {
        return /^(NZ)?\d{9}$/.test(e);
    },
    NG: function(e) {
        return /^(NG)?(\d{12}|(\d{8}-\d{4}))$/.test(e);
    },
    NO: function(e) {
        return /^(NO)?\d{9}MVA$/.test(e);
    },
    PH: function(e) {
        return /^(PH)?(\d{12}|\d{3} \d{3} \d{3} \d{3})$/.test(e);
    },
    RU: function(e) {
        return /^(RU)?(\d{10}|\d{12})$/.test(e);
    },
    SM: function(e) {
        return /^(SM)?\d{5}$/.test(e);
    },
    SA: function(e) {
        return /^(SA)?\d{15}$/.test(e);
    },
    RS: function(e) {
        return /^(RS)?\d{9}$/.test(e);
    },
    CH: function(e) {
        let t;
        let n;
        let r;
        return /^(CHE[- ]?)?(\d{9}|(\d{3}\.\d{3}\.\d{3})|(\d{3} \d{3} \d{3})) ?(TVA|MWST|IVA)?$/.test(e) && (n = (t = e.match(/\d/g).map((e)=>+e)).pop(), r = [
            5,
            4,
            3,
            2,
            7,
            6,
            5,
            4
        ], n === (11 - t.reduce((acc, item, index)=>acc + item * r[index], 0) % 11) % 11);
    },
    TR: function(e) {
        return /^(TR)?\d{10}$/.test(e);
    },
    UA: function(e) {
        return /^(UA)?\d{12}$/.test(e);
    },
    GB: function(e) {
        return /^GB((\d{3} \d{4} ([0-8][0-9]|9[0-6]))|(\d{9} \d{3})|(((GD[0-4])|(HA[5-9]))[0-9]{2}))$/.test(e);
    },
    UZ: function(e) {
        return /^(UZ)?\d{9}$/.test(e);
    },
    AR: function(e) {
        return /^(AR)?\d{11}$/.test(e);
    },
    BO: function(e) {
        return /^(BO)?\d{7}$/.test(e);
    },
    BR: function(e) {
        return /^(BR)?((\d{2}.\d{3}.\d{3}\/\d{4}-\d{2})|(\d{3}.\d{3}.\d{3}-\d{2}))$/.test(e);
    },
    CL: function(e) {
        return /^(CL)?\d{8}-\d{1}$/.test(e);
    },
    CO: function(e) {
        return /^(CO)?\d{10}$/.test(e);
    },
    CR: function(e) {
        return /^(CR)?\d{9,12}$/.test(e);
    },
    EC: function(e) {
        return /^(EC)?\d{13}$/.test(e);
    },
    SV: function(e) {
        return /^(SV)?\d{4}-\d{6}-\d{3}-\d{1}$/.test(e);
    },
    GT: function(e) {
        return /^(GT)?\d{7}-\d{1}$/.test(e);
    },
    HN: function(e) {
        return /^(HN)?$/.test(e);
    },
    MX: function(e) {
        return /^(MX)?\w{3,4}\d{6}\w{3}$/.test(e);
    },
    NI: function(e) {
        return /^(NI)?\d{3}-\d{6}-\d{4}\w{1}$/.test(e);
    },
    PA: function(e) {
        return /^(PA)?$/.test(e);
    },
    PY: function(e) {
        return /^(PY)?\d{6,8}-\d{1}$/.test(e);
    },
    PE: function(e) {
        return /^(PE)?\d{11}$/.test(e);
    },
    DO: function(e) {
        return /^(DO)?(\d{11}|(\d{3}-\d{7}-\d{1})|[1,4,5]{1}\d{8}|([1,4,5]{1})-\d{2}-\d{5}-\d{1})$/.test(e);
    },
    UY: function(e) {
        return /^(UY)?\d{12}$/.test(e);
    },
    VE: function(e) {
        return /^(VE)?[J,G,V,E]{1}-(\d{9}|(\d{8}-\d{1}))$/.test(e);
    }
};
