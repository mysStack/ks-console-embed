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
import { Component } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import { Link } from "unpacked/module-433.js";
import { getDisplayName, getLocalTime } from "utils/index";
import Module866 from "unpacked/module-866.js";
import Module791 from "components/Base/Text";
import module4928 from "unpacked/module-4928.js";
const g = ((Component_1)=>{
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
                const { detail, prefix } = props;
                const { updateTime, kind, spec, name } = detail;
                module26(spec, "nodeName", "-");
                return <div className={module4928.item}><Module791 icon="backup" title=<Link to={`${prefix}/${kind}/${name}`}>{getDisplayName(detail)}</Link> description={t("UPDATED_TIME", {
                    value: updateTime ? getLocalTime(updateTime).format("YYYY-MM-DD HH:mm:ss") : "-"
                })}/><Module791 title={t(kind?.toUpperCase() || "-")} description={t("TYPE")}/><Module791 title=<Module866 data={detail} module={kind}/> description={t("STATUS")}/><Module791 title={module26(detail, [
                    "labels",
                    "apps.edgewize.io/nodegroup"
                ], "-")} description={t("NODE_GROUP")}/><Module791 title={module26(detail, [
                    "labels",
                    "apps.edgewize.io/node"
                ], "-")} description={t("EDGE_NODE")}/></div>;
            }
        }
    ]);
    return r;
})(Component);
export default g;
