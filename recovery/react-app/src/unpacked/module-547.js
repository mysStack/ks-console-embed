import module8 from "unpacked/module-8.js";
import module39 from "unpacked/module-39.js";
import module89 from "unpacked/module-89.js";
import module168 from "unpacked/module-168.js";
import module270 from "unpacked/module-270.js";
import module213 from "unpacked/module-213.js";
import forced from "unpacked/module-348.js";
module8({
    target: "Promise",
    stat: true,
    forced
}, {
    all: function(e) {
        const _this = this;
        const n = module168.f(_this);
        const { resolve, reject } = n;
        const c = module270(function() {
            const n = module89(_this.resolve);
            const i = [];
            let l = 0;
            let c = 1;
            module213(e, function(e) {
                const a = l++;
                let s = false;
                c++;
                module39(n, _this, e).then((e)=>{
                    if (!s) {
                        s = true;
                        i[a] = e;
                        if (!--c) {
                            resolve(i);
                        }
                    }
                }, reject);
            });
            if (!--c) {
                resolve(i);
            }
        });
        if (c.error) {
            reject(c.value);
        }
        return n.promise;
    }
});
