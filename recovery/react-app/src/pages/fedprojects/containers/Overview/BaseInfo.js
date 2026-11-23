import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
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
import module3 from "unpacked/module-3.js";
import { Link } from "unpacked/module-433.js";
import module186 from "unpacked/module-186.js";
import Module791 from "components/Base/Text";
import { getDisplayName } from "utils/index";
import module4937 from "unpacked/module-4937.js";
const y = ((Component_1)=>{
    module55(a, Component_1);
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a() {
        module36(this, a);
        return r.apply(this, arguments);
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const { className, detail = {}, workspace } = this.props;
                return <div className={module3(module4937.wrapper, className)}><div className={module4937.header}><module186.Icon name="project" size={40}/><Module791 title={getDisplayName(detail)} description={detail.description || "-"}/></div><div className={module4937.content}><Module791 title=<Link to={`/workspaces/${workspace}`}>{workspace}</Link> description={t("WORKSPACE")}/><Module791 title={detail.creator || "-"} description={t("CREATOR")}/></div><img className={module4937.background} src="/assets/project-overview.svg"/></div>;
            }
        }
    ]);
    return a;
})(Component);
export default y;
