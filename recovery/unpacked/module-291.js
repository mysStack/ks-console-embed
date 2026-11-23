import module39 from "./module-39.js";
import module21 from "./module-21.js";
import module46 from "./module-46.js";
import module388 from "./module-388.js";
import module225 from "./module-225.js";
import module152 from "./module-152.js";
import module114 from "./module-114.js";
import module101 from "./module-101.js";
import module290 from "./module-290.js";
import module390 from "./module-390.js";
let r;
let o;
const module101_get = module101.get;
const v = module152("native-string-replace", String.prototype.replace);
const exec = RegExp.prototype.exec;
let g = exec;
const y = module21("".charAt);
const b = module21("".indexOf);
const C = module21("".replace);
const w = module21("".slice);
o = /b*/g;
module39(exec, r = /a/, "a");
module39(exec, o, "a");
const _ = r.lastIndex !== 0 || o.lastIndex !== 0;
const module225_BROKEN_CARET = module225.BROKEN_CARET;
const M = /()??/.exec("")[1] !== undefined;
if (_ || M || module225_BROKEN_CARET || module290 || module390) {
    g = function(e) {
        let t;
        let n;
        let r;
        let o;
        let i;
        let u;
        let c;
        const _this = this;
        const h = module101_get(_this);
        const E = module46(e);
        const h_raw = h.raw;
        if (h_raw) {
            h_raw.lastIndex = _this.lastIndex;
            t = module39(g, h_raw, E);
            _this.lastIndex = h_raw.lastIndex;
            return t;
        }
        const h_groups = h.groups;
        const S = module225_BROKEN_CARET && _this.sticky;
        let L = module39(module388, _this);
        let source = _this.source;
        let D = 0;
        let T = E;
        if (S) {
            L = C(L, "y", "");
            if (b(L, "g") === -1) {
                L += "g";
            }
            T = w(E, _this.lastIndex);
            if (_this.lastIndex > 0 && (!_this.multiline || _this.multiline && y(E, _this.lastIndex - 1) !== "\n")) {
                source = `(?: ${source})`;
                T = ` ${T}`;
                D++;
            }
            n = new RegExp(`^(?:${source})`, L);
        }
        if (M) {
            n = new RegExp(`^${source}\$(?!\\s)`, L);
        }
        if (_) {
            r = _this.lastIndex;
        }
        o = module39(exec, S ? n : _this, T);
        if (S) {
            if (o) {
                o.input = w(o.input, D);
                o[0] = w(o[0], D);
                o.index = _this.lastIndex;
                _this.lastIndex += o[0].length;
            } else {
                _this.lastIndex = 0;
            }
        } else if (_ && o) {
            _this.lastIndex = _this.global ? o.index + o[0].length : r;
        }
        if (M && o && o.length > 1) {
            module39(v, o[0], n, function() {
                for(i = 1; i < arguments.length - 2; i++){
                    if (arguments[i] === undefined) {
                        o[i] = undefined;
                    }
                }
            });
        }
        if (o && h_groups) {
            o.groups = u = module114(null);
            for(i = 0; i < h_groups.length; i++){
                u[(c = h_groups[i])[0]] = o[c[1]];
            }
        }
        return o;
    };
}
export default g;
