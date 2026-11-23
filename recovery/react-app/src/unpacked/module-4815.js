import module25 from "unpacked/module-25.js";
import module1887 from "unpacked/module-1887.js";
import module1961 from "unpacked/module-1961.js";
let r;
let o;
let i;
let a;
const { structuredClone, ArrayBuffer } = module25;
let module25_MessageChannel = module25.MessageChannel;
let p = false;
if (module1961) {
    p = function(e) {
        structuredClone(e, {
            transfer: [
                e
            ]
        });
    };
} else if (ArrayBuffer) {
    try {
        if (!module25_MessageChannel) {
            if (r = module1887("worker_threads")) {
                module25_MessageChannel = r.MessageChannel;
            }
        }
        if (module25_MessageChannel) {
            o = new module25_MessageChannel;
            i = new ArrayBuffer(2);
            a = function(e) {
                o.port1.postMessage(null, [
                    e
                ]);
            };
            if (i.byteLength === 2) {
                a(i);
                if (i.byteLength === 0) {
                    p = a;
                }
            }
        }
    } catch (e) {}
}
export default p;
