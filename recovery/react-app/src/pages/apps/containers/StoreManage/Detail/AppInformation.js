import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
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
import module14 from "unpacked/module-14.js";
import module26 from "unpacked/module-26.js";
import Module790 from "components/Base/Panel";
import Module1715 from "pages/apps/components/AppInfo";
let o;
const y = inject("detailStore", "versionStore")(o = observer(o = ((Component_1)=>{
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
            key: "componentDidMount",
            value: function() {
                const app_id = module26(this.props.match, "params.appId", "");
                if (module26(this.props.versionStore, "list.data", []).length === 0) {
                    this.props.versionStore.fetchList({
                        app_id
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const app = module26(this.props.detailStore, "detail", {});
                const r = module26(this.props.versionStore, "list.data", []);
                return <Module790 title={t("APP_INFORMATION")}><Module1715 app={app} versions={module14.toJS(r)}/></Module790>;
            }
        }
    ]);
    return a;
})(Component)) || o) || o;
export default y;
