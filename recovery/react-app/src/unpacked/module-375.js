import module25 from "unpacked/module-25.js";
import module145 from "unpacked/module-145.js";
import module142 from "unpacked/module-142.js";
import module35 from "unpacked/module-35.js";
import module53 from "unpacked/module-53.js";
import module19 from "unpacked/module-19.js";
import module376 from "unpacked/module-376.js";
import module124 from "unpacked/module-124.js";
import module219 from "unpacked/module-219.js";
import module328 from "unpacked/module-328.js";
import module377 from "unpacked/module-377.js";
import module162 from "unpacked/module-162.js";
let r;
let o;
let a;
let i;
let module25_setImmediate = module25.setImmediate;
let module25_clearImmediate = module25.clearImmediate;
const { process, Dispatch, Function, MessageChannel, String } = module25;
let k = 0;
const O = {};
module19(function() {
    r = module25.location;
});
const S = (e)=>{
    if (module53(O, e)) {
        const t = O[e];
        delete O[e];
        t();
    }
};
const L = (e)=>function() {
        S(e);
    };
const z = function(e) {
    S(e.data);
};
const D = function(e) {
    module25.postMessage(String(e), `${r.protocol}//${r.host}`);
};
if (!(module25_setImmediate && module25_clearImmediate)) {
    module25_setImmediate = function(e) {
        module328(arguments.length, 1);
        const t = module35(e) ? e : Function(e);
        const n = module124(arguments, 1);
        O[++k] = function() {
            module145(t, undefined, n);
        };
        o(k);
        return k;
    };
    module25_clearImmediate = function(e) {
        delete O[e];
    };
    if (module162) {
        o = function(e) {
            process.nextTick(L(e));
        };
    } else if (Dispatch && Dispatch.now) {
        o = function(e) {
            Dispatch.now(L(e));
        };
    } else if (MessageChannel && !module377) {
        i = (a = new MessageChannel).port2;
        a.port1.onmessage = z;
        o = module142(i.postMessage, i);
    } else if (module25.addEventListener && module35(module25.postMessage) && !module25.importScripts && r && r.protocol !== "file:" && !module19(D)) {
        o = D;
        module25.addEventListener("message", z, false);
    } else {
        o = "onreadystatechange" in module219("script") ? function(e) {
            module376.appendChild(module219("script")).onreadystatechange = function() {
                module376.removeChild(this);
                S(e);
            };
        } : function(e) {
            setTimeout(L(e), 0);
        };
    }
}
export default {
    set: module25_setImmediate,
    clear: module25_clearImmediate
};
