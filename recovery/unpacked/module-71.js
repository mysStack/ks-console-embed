import module234 from "./module-234.js";
import _MAX_LENGTH from "./module-233.js";
import _safeRe from "./module-184.js";
import module304 from "./module-304.js";
import _compareIdentifiers from "./module-424.js";
const { MAX_LENGTH, MAX_SAFE_INTEGER } = _MAX_LENGTH;
const { safeRe, t: t_1 } = _safeRe;
const { compareIdentifiers } = _compareIdentifiers;
class c {
    constructor(e, t){
        t = module304(t);
        if (e instanceof c) {
            if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) {
                return e;
            }
            e = e.version;
        } else if (typeof e !== "string") {
            throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
        }
        if (e.length > MAX_LENGTH) {
            throw new TypeError(`version is longer than ${MAX_LENGTH} characters`);
        }
        module234("SemVer", e, t);
        this.options = t;
        this.loose = !!t.loose;
        this.includePrerelease = !!t.includePrerelease;
        const n = e.trim().match(t.loose ? safeRe[t_1.LOOSE] : safeRe[t_1.FULL]);
        if (!n) {
            throw new TypeError(`Invalid Version: ${e}`);
        }
        this.raw = e;
        this.major = +n[1];
        this.minor = +n[2];
        this.patch = +n[3];
        if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
            throw new TypeError("Invalid major version");
        }
        if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
            throw new TypeError("Invalid minor version");
        }
        if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
            throw new TypeError("Invalid patch version");
        }
        if (n[4]) {
            this.prerelease = n[4].split(".").map((e)=>{
                if (/^[0-9]+$/.test(e)) {
                    const t = +e;
                    if (t >= 0 && t < MAX_SAFE_INTEGER) {
                        return t;
                    }
                }
                return e;
            });
        } else {
            this.prerelease = [];
        }
        this.build = n[5] ? n[5].split(".") : [];
        this.format();
    }
    format() {
        this.version = `${this.major}.${this.minor}.${this.patch}`;
        if (this.prerelease.length) {
            this.version += `-${this.prerelease.join(".")}`;
        }
        return this.version;
    }
    toString() {
        return this.version;
    }
    compare(e) {
        module234("SemVer.compare", this.version, this.options, e);
        if (!(e instanceof c)) {
            if (typeof e === "string" && e === this.version) {
                return 0;
            }
            e = new c(e, this.options);
        }
        if (e.version === this.version) {
            return 0;
        }
        return this.compareMain(e) || this.comparePre(e);
    }
    compareMain(e) {
        if (!(e instanceof c)) {
            e = new c(e, this.options);
        }
        return compareIdentifiers(this.major, e.major) || compareIdentifiers(this.minor, e.minor) || compareIdentifiers(this.patch, e.patch);
    }
    comparePre(e) {
        if (!(e instanceof c)) {
            e = new c(e, this.options);
        }
        if (this.prerelease.length && !e.prerelease.length) {
            return -1;
        }
        if (!this.prerelease.length && e.prerelease.length) {
            return 1;
        }
        if (!this.prerelease.length && !e.prerelease.length) {
            return 0;
        }
        let t = 0;
        do {
            const n = this.prerelease[t];
            const o = e.prerelease[t];
            module234("prerelease compare", t, n, o);
            if (n === undefined && o === undefined) {
                return 0;
            }
            if (o === undefined) {
                return 1;
            }
            if (n === undefined) {
                return -1;
            }
            if (n !== o) {
                return compareIdentifiers(n, o);
            }
        }while (++t)
    }
    compareBuild(e) {
        if (!(e instanceof c)) {
            e = new c(e, this.options);
        }
        let t = 0;
        do {
            const n = this.build[t];
            const o = e.build[t];
            module234("prerelease compare", t, n, o);
            if (n === undefined && o === undefined) {
                return 0;
            }
            if (o === undefined) {
                return 1;
            }
            if (n === undefined) {
                return -1;
            }
            if (n !== o) {
                return compareIdentifiers(n, o);
            }
        }while (++t)
    }
    inc(e, t, n) {
        switch(e){
            case "premajor":
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor = 0;
                this.major++;
                this.inc("pre", t, n);
                break;
            case "preminor":
                this.prerelease.length = 0;
                this.patch = 0;
                this.minor++;
                this.inc("pre", t, n);
                break;
            case "prepatch":
                this.prerelease.length = 0;
                this.inc("patch", t, n);
                this.inc("pre", t, n);
                break;
            case "prerelease":
                if (this.prerelease.length === 0) {
                    this.inc("patch", t, n);
                }
                this.inc("pre", t, n);
                break;
            case "major":
                if (!(this.minor === 0 && this.patch === 0 && this.prerelease.length !== 0)) {
                    this.major++;
                }
                this.minor = 0;
                this.patch = 0;
                this.prerelease = [];
                break;
            case "minor":
                if (!(this.patch === 0 && this.prerelease.length !== 0)) {
                    this.minor++;
                }
                this.patch = 0;
                this.prerelease = [];
                break;
            case "patch":
                if (this.prerelease.length === 0) {
                    this.patch++;
                }
                this.prerelease = [];
                break;
            case "pre":
                {
                    const e = Number(n) ? 1 : 0;
                    if (!t && n === false) {
                        throw new Error("invalid increment argument: identifier is empty");
                    }
                    if (this.prerelease.length === 0) {
                        this.prerelease = [
                            e
                        ];
                    } else {
                        let r = this.prerelease.length;
                        while(--r >= 0){
                            if (typeof this.prerelease[r] === "number") {
                                this.prerelease[r]++;
                                r = -2;
                            }
                        }
                        if (r === -1) {
                            if (t === this.prerelease.join(".") && n === false) {
                                throw new Error("invalid increment argument: identifier already exists");
                            }
                            this.prerelease.push(e);
                        }
                    }
                    if (t) {
                        let r = [
                            t,
                            e
                        ];
                        if (n === false) {
                            r = [
                                t
                            ];
                        }
                        if (compareIdentifiers(this.prerelease[0], t) === 0) {
                            if (isNaN(this.prerelease[1])) {
                                this.prerelease = r;
                            }
                        } else {
                            this.prerelease = r;
                        }
                    }
                    break;
                }
            default:
                throw new Error(`invalid increment argument: ${e}`);
        }
        this.raw = this.format();
        if (this.build.length) {
            this.raw += `+${this.build.join(".")}`;
        }
        return this;
    }
}
export default c;
