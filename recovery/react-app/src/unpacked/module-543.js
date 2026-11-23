import module25 from "unpacked/module-25.js";
import module500 from "unpacked/module-500.js";
import module142 from "unpacked/module-142.js";
import module375 from "unpacked/module-375.js";
import module378 from "unpacked/module-378.js";
import module377 from "unpacked/module-377.js";
import module544 from "unpacked/module-544.js";
import module545 from "unpacked/module-545.js";
import module162 from "unpacked/module-162.js";
let r;
let o;
let a;
let i;
let l;
let module375_set = module375.set;
const g = module25.MutationObserver || module25.WebKitMutationObserver;
const { document, process, Promise } = module25;
let w = module500("queueMicrotask");
if (!w) {
    const _ = new module378;
    const x = function() {
        let e;
        let t;
        for(module162 && (e = process.domain) && e.exit(); t = _.get();){
            try {
                t();
            } catch (error) {
                if (_.head) {
                    r();
                }
                throw error;
            }
        }
        if (e) {
            e.enter();
        }
    };
    if (module377 || module162 || module545 || !g || !document) {
        if (!module544 && Promise && Promise.resolve) {
            i = Promise.resolve(undefined);
            i.constructor = Promise;
            l = module142(i.then, i);
            r = function() {
                l(x);
            };
        } else if (module162) {
            r = function() {
                process.nextTick(x);
            };
        } else {
            module375_set = module142(module375_set, module25);
            r = function() {
                module375_set(x);
            };
        }
    } else {
        o = true;
        a = document.createTextNode("");
        new g(x).observe(a, {
            characterData: true
        });
        r = function() {
            a.data = o = !o;
        };
    }
    w = function(e) {
        if (!_.head) {
            r();
        }
        _.add(e);
    };
}
export default w;
