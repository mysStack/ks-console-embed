import module304 from "unpacked/module-304.js";
import _safeRe from "unpacked/module-184.js";
import module427 from "unpacked/module-427.js";
import module234 from "unpacked/module-234.js";
import module71 from "unpacked/module-71.js";
const r = Symbol("SemVer ANY");
function getRange() {
    const range = require("unpacked/module-94.js");
    return range.default || range;
}
class o {
    static get ANY() {
        return r;
    }
    constructor(e, t){
        t = module304(t);
        if (e instanceof o) {
            if (e.loose === !!t.loose) {
                return e;
            }
            e = e.value;
        }
        e = e.trim().split(/\s+/).join(" ");
        module234("comparator", e, t);
        this.options = t;
        this.loose = !!t.loose;
        this.parse(e);
        if (this.semver === r) {
            this.value = "";
        } else {
            this.value = this.operator + this.semver.version;
        }
        module234("comp", this);
    }
    parse(e) {
        const t = this.options.loose ? safeRe[t_1.COMPARATORLOOSE] : safeRe[t_1.COMPARATOR];
        const n = e.match(t);
        if (!n) {
            throw new TypeError(`Invalid comparator: ${e}`);
        }
        this.operator = n[1] !== undefined ? n[1] : "";
        if (this.operator === "=") {
            this.operator = "";
        }
        if (n[2]) {
            this.semver = new module71(n[2], this.options.loose);
        } else {
            this.semver = r;
        }
    }
    toString() {
        return this.value;
    }
    test(e) {
        module234("Comparator.test", e, this.options.loose);
        if (this.semver === r || e === r) {
            return true;
        }
        if (typeof e === "string") {
            try {
                e = new module71(e, this.options);
            } catch (e) {
                return false;
            }
        }
        return module427(e, this.operator, this.semver, this.options);
    }
    intersects(e, t) {
        if (!(e instanceof o)) {
            throw new TypeError("a Comparator is required");
        }
        if (this.operator === "") {
            return this.value === "" || new (getRange())(e.value, t).test(this.value);
        }
        if (e.operator === "") {
            return e.value === "" || new (getRange())(this.value, t).test(e.semver);
        }
        return !((t = module304(t)).includePrerelease && (this.value === "<0.0.0-0" || e.value === "<0.0.0-0") || !t.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0")) || (!this.operator.startsWith(">") || !e.operator.startsWith(">")) && (!this.operator.startsWith("<") || !e.operator.startsWith("<")) && (this.semver.version !== e.semver.version || !this.operator.includes("=") || !e.operator.includes("=")) && !(module427(this.semver, "<", e.semver, t) && this.operator.startsWith(">") && e.operator.startsWith("<")) && !(module427(this.semver, ">", e.semver, t) && this.operator.startsWith("<") && e.operator.startsWith(">")));
    }
}
export default o;
const { safeRe, t: t_1 } = _safeRe;
