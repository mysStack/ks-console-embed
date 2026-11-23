import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-64.js";
import "unpacked/module-137.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import Module868 from "components/Inputs/ObjectInput";
import Module830 from "components/Inputs/ArrayInput";
import Module800 from "components/Inputs/NumberInput";
import module186 from "unpacked/module-186.js";
import module2968 from "unpacked/module-2968.js";
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
