import module534 from "unpacked/module-534.js";
import module25 from "unpacked/module-25.js";
import module54 from "unpacked/module-54.js";
import module102 from "unpacked/module-102.js";
import module53 from "unpacked/module-53.js";
import module280 from "unpacked/module-280.js";
import module220 from "unpacked/module-220.js";
import module173 from "unpacked/module-173.js";
let set;
let get;
let has;
const { TypeError, WeakMap } = module25;
if (module534 || module280.state) {
    const m = module280.state || (module280.state = new WeakMap);
    m.get = m.get;
    m.has = m.has;
    m.set = m.set;
    set = function(e, t) {
        if (m.has(e)) {
            throw new TypeError("Object already initialized");
        }
        t.facade = e;
        m.set(e, t);
        return t;
    };
    get = function(e) {
        return m.get(e) || {};
    };
    has = function(e) {
        return m.has(e);
    };
} else {
    const g = module220("state");
    module173[g] = true;
    set = function(e, t) {
        if (module53(e, g)) {
            throw new TypeError("Object already initialized");
        }
        t.facade = e;
        module102(e, g, t);
        return t;
    };
    get = function(e) {
        if (module53(e, g)) {
            return e[g];
        }
        return {};
    };
    has = function(e) {
        return module53(e, g);
    };
}
export default {
    set,
    get,
    has,
    enforce: function(e) {
        if (has(e)) {
            return get(e);
        }
        return set(e, {});
    },
    getterFor: function(e) {
        return function(t) {
            let n;
            if (!module54(t) || (n = get(t)).type !== e) {
                throw new TypeError(`Incompatible receiver, ${e} required`);
            }
            return n;
        };
    }
};
