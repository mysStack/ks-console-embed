import "./module-1104.js";
import module1004 from "./module-1004.js";
import module1005 from "./module-1005.js";
import module1006 from "./module-1006.js";
import module1007 from "./module-1007.js";
import module1008 from "./module-1008.js";
import * as module553 from "./module-553.js";
export default function(e) {
    return function(t) {
        return ((n)=>{
            module1006(o, n);
            var r = ((e)=>{
                const t = (()=>{
                    if (typeof Reflect === "undefined" || !Reflect.construct) {
                        return false;
                    }
                    if (Reflect.construct.sham) {
                        return false;
                    }
                    if (typeof Proxy === "function") {
                        return true;
                    }
                    try {
                        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                        return true;
                    } catch (e) {
                        return false;
                    }
                })();
                return function() {
                    let n;
                    const r = module1008(e);
                    if (t) {
                        const o = module1008(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else {
                        n = r.apply(this, arguments);
                    }
                    return module1007(this, n);
                };
            })(o);
            function o() {
                module1004(this, o);
                return r.apply(this, arguments);
            }
            module1005(o, [
                {
                    key: "render",
                    value: function() {
                        return module553.default.createElement(t, {
                            ...e,
                            ...this.props
                        });
                    }
                }
            ]);
            return o;
        })(module553.Component);
    };
};
