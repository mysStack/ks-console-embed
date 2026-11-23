import "./module-15.js";
import "./module-84.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-64.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module791 from "./module-791.js";
import * as module553 from "./module-553.js";
import { Link } from "./module-433.js";
import { getDisplayNameNew } from "./module-52.js";
import { CLUSTER_GROUP_TAG_TYPE, CLUSTER_PROVIDER_ICON } from "./module-72.js";
import module1778 from "./module-1778.js";
const o = ((M)=>{
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
    function u() {
        module36(this, u);
        return e.apply(this, arguments);
    }
    module37(u, [
        {
            key: "getIcon",
            value: function() {
                let M;
                switch(this.props.data.type){
                    case "Cluster":
                        M = "cluster";
                        break;
                    case "Workspace":
                        M = "enterprise";
                        break;
                    case "Multi-cluster Project":
                    case "Project":
                        M = "project";
                        break;
                    case "DevOps":
                        M = "strategy-group";
                }
                return M;
            }
        },
        {
            key: "renderTags",
            value: function() {
                const data = this.props.data;
                if (data.type === "Cluster") {
                    return module553.default.createElement("span", {
                        className: module1778.tagWrapper
                    }, module553.default.createElement("span", null, module553.default.createElement(module553.default.Fragment, null, data.group && module553.default.createElement(module186.Tag, {
                        type: CLUSTER_GROUP_TAG_TYPE[data.group],
                        className: module1778.tag
                    }, t(`ENV_${data.group.toUpperCase()}`, {
                        defaultValue: data.group
                    })), data.isHost && module553.default.createElement(module186.Tag, {
                        type: "warning"
                    }, t("HOST_CLUSTER")))));
                }
                if (globals.app.isMultiCluster && [
                    "Project",
                    "DevOps"
                ].includes(data.type) && data.cluster && data.cluster.name) {
                    return module553.default.createElement("span", {
                        className: module1778.tagWrapper
                    }, module553.default.createElement("span", {
                        title: getDisplayNameNew(data.cluster)
                    }, module553.default.createElement(module186.Tag, {
                        type: CLUSTER_GROUP_TAG_TYPE[data.cluster.group],
                        className: module1778.tag
                    }, module553.default.createElement(module186.Icon, {
                        name: CLUSTER_PROVIDER_ICON[data.cluster.provider] || "kubernetes",
                        size: 16,
                        ...CLUSTER_GROUP_TAG_TYPE[data.cluster.group] === "default" ? {
                            type: "light"
                        } : {},
                        className: "margin-r4"
                    }), getDisplayNameNew(data.cluster))));
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                const data = this.props.data;
                return module553.default.createElement(Link, {
                    to: data.url
                }, module553.default.createElement(module791, {
                    className: module1778.text,
                    icon: this.getIcon(),
                    title: module553.default.createElement("div", {
                        className: module1778.textTitle
                    }, module553.default.createElement("span", {
                        title: getDisplayNameNew(data)
                    }, getDisplayNameNew(data)), module553.default.createElement("span", null, this.renderTags())),
                    description: t(`WORKBENCH_${data.type.replace(/[-\s+]/g, "_").toUpperCase()}`),
                    ellipsis: true
                }), data.isFedManaged && module553.default.createElement(module186.Tooltip, {
                    content: module553.default.createElement("div", null, module553.default.createElement("div", {
                        className: "tooltip-title"
                    }, t("MULTI_CLUSTER_DEPLOYMENT")), module553.default.createElement("p", null, t("MULTI_CLUSTER_PROJECT_TIP")))
                }, module553.default.createElement("img", {
                    className: module1778.indicator,
                    src: "/assets/cluster.svg"
                })));
            }
        }
    ]);
    return u;
})(module553.Component);
export default o;
