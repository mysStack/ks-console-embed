import module21 from "unpacked/module-21.js";
import module19 from "unpacked/module-19.js";
import module2768 from "unpacked/module-2768.js";
const module2768_start = module2768.start;
const _isFinite = isFinite;
const toISOString = Date.prototype.toISOString;
const f = module21(Date.prototype.getTime);
const d = module21(Date.prototype.getUTCDate);
const p = module21(Date.prototype.getUTCFullYear);
const h = module21(Date.prototype.getUTCHours);
const v = module21(Date.prototype.getUTCMilliseconds);
const g = module21(Date.prototype.getUTCMinutes);
const y = module21(Date.prototype.getUTCMonth);
const m = module21(Date.prototype.getUTCSeconds);
export default module19(function() {
    return toISOString.call(new Date(-50000000000001)) !== "0385-07-25T07:06:39.999Z";
}) || !module19(function() {
    toISOString.call(new Date(NaN));
}) ? function() {
    if (!_isFinite(f(this))) {
        throw new RangeError("Invalid time value");
    }
    const e = p(this);
    const t = v(this);
    const n = e < 0 ? "-" : e > 9999 ? "+" : "";
    return `${n + module2768_start(Math.abs(e), n ? 6 : 4, 0)}-${module2768_start(y(this) + 1, 2, 0)}-${module2768_start(d(this), 2, 0)}T${module2768_start(h(this), 2, 0)}:${module2768_start(g(this), 2, 0)}:${module2768_start(m(this), 2, 0)}.${module2768_start(t, 3, 0)}Z`;
} : toISOString;
