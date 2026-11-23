import "./module-24.js";
import module39 from "./module-39.js";
import module67 from "./module-67.js";
import module291 from "./module-291.js";
import module19 from "./module-19.js";
import module40 from "./module-40.js";
import module102 from "./module-102.js";
const u = module40("species");
export default function(e, t, n, f) {
    const d = module40(e);
    const p = !module19(function() {
        const t = {};
        t[d] = function() {
            return 7;
        };
        return ""[e](t) !== 7;
    });
    const h = p && !module19(function() {
        let t = false;
        let n = /a/;
        if (e === "split") {
            n = {};
            n.constructor = {};
            n.constructor[u] = function() {
                return n;
            };
            n.flags = "";
            n[d] = /./[d];
        }
        n.exec = function() {
            t = true;
            return null;
        };
        n[d]("");
        return !t;
    });
    if (!p || !h || n) {
        const v = /./[d];
        const m = t(d, ""[e], function(e, t, n, o, i) {
            const t_exec = t.exec;
            if (t_exec === module291 || t_exec === RegExp.prototype.exec) {
                if (p && !i) {
                    return {
                        done: true,
                        value: module39(v, t, n, o)
                    };
                }
                return {
                    done: true,
                    value: module39(e, n, t, o)
                };
            }
            return {
                done: false
            };
        });
        module67(String.prototype, e, m[0]);
        module67(RegExp.prototype, d, m[1]);
    }
    if (f) {
        module102(RegExp.prototype[d], "sham", true);
    }
};
