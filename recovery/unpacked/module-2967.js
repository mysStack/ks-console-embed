import "./module-15.js";
import "./module-5.js";
import "./module-73.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-64.js";
import "./module-137.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import Module868 from "./module-868.js";
import Module830 from "./module-830.js";
import Module800 from "./module-800.js";
import module186 from "./module-186.js";
import module2968 from "./module-2968.js";
const y = ((Component_1)=>{
    module55(r, Component_1);
    var a = ((e)=>{
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
            let a;
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(r);
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.onChange = function(t = {}) {
            const a = t.map(({ host = "", port = "" })=>`${host.replace(/,/g, "")}:${port}`).join(",");
            e.props.onChange(a);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const value = module26(this.props, "value", "").split(",").map((e)=>{
                    const t = e.match(/(.*):(.*)$/) || [];
                    const [, host = "", u] = module96(t, 3);
                    return {
                        port: u === undefined ? "" : u,
                        host
                    };
                });
                return <Module830 addText={t("ADD_SERVICE_ADDRESS")} itemType="object" value={value} onChange={this.onChange}><Module868 className={module2968.address}><module186.Input name="host" className={module2968.host} placeholder={t("EXAMPLE_VALUE", {
                    value: "192.168.1.10"
                })}/><Module800 className={module2968.port} name="port" min={0} max={65535} placeholder={t("EXAMPLE_VALUE", {
                    value: 9200
                })} integer/></Module868></Module830>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
