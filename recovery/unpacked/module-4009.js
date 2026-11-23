import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
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
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module26 from "./module-26.js";
import Module790 from "./module-790.js";
import Module1217 from "./module-1217.js";
import module4010 from "./module-4010.js";
let o;
const y = inject("detailStore")(o = observer(o = ((Component_1)=>{
    module55(n, Component_1);
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n() {
        module36(this, n);
        return r.apply(this, arguments);
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const e = module26(this.props.detailStore, "detail", {});
                const r = e.name.split("-").pop();
                const n = `${r}_${this.component}`.replace("-", "_");
                const a = module26(e, `config.sinks.${n}`, {});
                let o = "";
                let u = "";
                let i = "logs";
                if (r === "kafka") {
                    o = module26(a, "bootstrap_servers", "-");
                    u = module26(a, "topic", "");
                } else {
                    o = module26(a, "endpoints[0]", "-");
                    i = module26(a, "bulk.index", "-").replace("{{ .cluster }}-", "").replace("-%Y.%m.%d", "");
                }
                return <Module790><Module1217 className={module4010.attributes}>{r === "kafka" && <Module1217.Item className={module4010.item} name={t("TOPIC")} value={u}/>}<Module1217.Item className={module4010.item} name={t("ADDRESS")} value={o}/>{r === "elasticsearch" && <Module1217.Item className={module4010.item} name={t("INDEX_PREFIX")} value={i}/>}</Module1217></Module790>;
            }
        },
        {
            key: "component",
            get: function() {
                return this.props.match.params.component;
            }
        }
    ]);
    return n;
})(Component)) || o) || o;
export default y;
