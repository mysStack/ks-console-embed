import module_257 from "unpacked/module-257.js";
import { setImmediate } from "unpacked/module-3456.js";
((t, n)=>{
    const r = (e)=>{
        if (typeof e !== "function") {
            throw new TypeError(`${e} is not a function`);
        }
        return e;
    };
    const o = (e)=>{
        let t;
        let n;
        const o = document.createTextNode("");
        let i = 0;
        new e(function() {
            let e;
            if (t) {
                if (n) {
                    t = n.concat(t);
                }
            } else {
                if (!n) {
                    return;
                }
                t = n;
            }
            n = t;
            t = null;
            if (typeof n === "function") {
                e = n;
                n = null;
                return void e();
            }
            for(o.data = i = ++i % 2; n;){
                e = n.shift();
                if (!n.length) {
                    n = null;
                }
                e();
            }
        }).observe(o, {
            characterData: true
        });
        return function(e) {
            r(e);
            if (t) {
                if (typeof t === "function") {
                    t = [
                        t,
                        e
                    ];
                } else {
                    t.push(e);
                }
            } else {
                t = e;
                o.data = i = ++i % 2;
            }
        };
    };
    module.exports = (()=>{
        if (typeof t === "object" && t && typeof t.nextTick === "function") {
            return t.nextTick;
        }
        if (typeof queueMicrotask === "function") {
            return function(e) {
                queueMicrotask(r(e));
            };
        }
        if (typeof document === "object" && document) {
            if (typeof MutationObserver === "function") {
                return o(MutationObserver);
            }
            if (typeof WebKitMutationObserver === "function") {
                return o(WebKitMutationObserver);
            }
        }
        if (typeof n === "function") {
            return function(e) {
                n(r(e));
            };
        }
        if (typeof setTimeout === "function" || typeof setTimeout === "object") {
            return function(e) {
                setTimeout(r(e), 0);
            };
        }
        return null;
    })();
})(module_257, setImmediate);
