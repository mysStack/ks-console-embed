import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import Module790 from "components/Base/Panel";
import Module1217 from "unpacked/module-1217.js";
import module4258 from "unpacked/module-4258.js";
let u;
const y = inject("detailStore")(u = observer(u = ((Component_1)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const { address, config = {}, type } = module26(this.props.detailStore, "detail", {});
                return <Module790><Module1217 className={module4258.attributes}>{type === "kafka" && <Module1217.Item className={module4258.item} name={t("TOPIC")} value={config.topics}/>}<Module1217.Item className={module4258.item} name={t("ADDRESS")} value={address}/>{type === "es" && <Module1217.Item className={module4258.item} name={t("INDEX_PREFIX")} value={config.logstashPrefix}/>}</Module1217></Module790>;
            }
        }
    ]);
    return r;
})(Component)) || u) || u;
export default y;
