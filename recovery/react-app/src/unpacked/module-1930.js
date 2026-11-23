import module100 from "unpacked/module-100.js";
import module255 from "unpacked/module-255.js";
import module492 from "unpacked/module-492.js";
import module125 from "unpacked/module-125.js";
const module100_isFinite = module100.isFinite;
export default function(e) {
    const t = Math[e];
    return function(e, n) {
        e = module492(e);
        if ((n = n == null ? 0 : Math.min(module255(n), 292)) && module100_isFinite(e)) {
            let r = `${module125(e)}e`.split("e");
            const s = t(`${r[0]}e${+r[1] + n}`);
            return +`${(r = `${module125(s)}e`.split("e"))[0]}e${+r[1] - n}`;
        }
        return t(e);
    };
};
