import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
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
import module26 from "unpacked/module-26.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import { Link } from "unpacked/module-433.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import Module791 from "components/Base/Text";
import Module4746 from "unpacked/module-4746.js";
import { getDisplayName } from "utils/index";
import module1912 from "unpacked/module-1912.js";
const E = ((Component_1)=>{
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
                const props = this.props;
                const { className, detail, prefix } = props;
                if (!detail) {
                    return null;
                }
                const o = module26(detail, "monitor.name");
                const c = getDisplayName(detail);
                return <div className={module3(module1912.item, className)}><Module791 icon="network-router" title=<><Link to={`${prefix}/services/${detail.name}`}>{c}</Link>{o && <module186.Tooltip content={t("MONITORING_EXPORTER_VALUE", {
                    value: o
                })}><module186.Icon className="margin-l8" name="monitor" size={20}/></module186.Tooltip>}</> description={t(detail.type)}/><Module4746 data={detail}/></div>;
            }
        }
    ]);
    return r;
})(Component);
export default E;
E.propTypes = {
    className: module1.string,
    prefix: module1.string,
    detail: module1.object
};
E.defaultProps = {
    prefix: "",
    detail: {}
};
