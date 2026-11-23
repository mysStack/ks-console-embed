import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-442.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module791 from "components/Base/Text";
import { getLocalTime } from "utils/index";
import module3633 from "pages/console/containers/Dashboard/Admin/PlatformStatus/Resource";
import module1777 from "unpacked/module-1777.js";
let a;
const o = inject("rootStore")(a = observer(a = ((M)=>{
    module55(u, M);
    var e = ((M)=>{
        const e = (()=>{
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
            } catch (M) {
                return false;
            }
        })();
        return function() {
            let t;
            const u = module51(M);
            if (e) {
                const N = module51(this).constructor;
                t = Reflect.construct(u, arguments, N);
            } else {
                t = u.apply(this, arguments);
            }
            return module56(this, t);
        };
    })(u);
    function u(...N) {
        let M;
        module36(this, u);
        M = e.call(this, ...N);
        M.handleClick = function(e) {
            M.props.rootStore.routing.push(e);
        };
        return M;
    }
    module37(u, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const metrics = this.props.metrics;
                return module553.default.createElement("div", {
                    className: module1777.wrapper
                }, module553.default.createElement("div", {
                    className: module1777.title
                }, module553.default.createElement(module791, {
                    icon: "blockchain",
                    title: getLocalTime(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                    description: t("LAST_UPDATE_TIME")
                })), this.resources.map((t)=>{
                    if (t.hide) {
                        return null;
                    }
                    return module553.default.createElement(module3633, {
                        key: t.name,
                        data: t,
                        count: module26(metrics, `${t.metric}.data.result[0].value[1]`),
                        onClick: _this.handleClick
                    });
                }));
            }
        },
        {
            key: "resources",
            get: function() {
                return [
                    {
                        icon: "enterprise",
                        name: "WORKSPACE",
                        link: "/access/workspaces",
                        metric: "kubesphere_workspace_count"
                    },
                    {
                        icon: "human",
                        name: "USER",
                        link: "/access/accounts",
                        metric: "kubesphere_user_count"
                    },
                    {
                        icon: "appcenter",
                        name: "APP_TEMPLATE_SCAP",
                        link: "/apps",
                        hide: !globals.app.enableAppStore,
                        metric: "kubesphere_app_template_count"
                    }
                ];
            }
        }
    ]);
    return u;
})(module553.Component)) || a) || a;
export default o;
