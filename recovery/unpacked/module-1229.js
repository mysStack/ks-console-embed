import "./module-15.js";
import "./module-5.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-110.js";
import "./module-62.js";
import "./module-64.js";
import "./module-45.js";
import "./module-42.js";
import "./module-319.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module63 from "./module-63.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import { getDisplayName, isEdgeWizePage, showNameAndAlias } from "./module-52.js";
import { trigger } from "./module-792.js";
import { createCenterWindowOpt } from "./module-453.js";
import module1040 from "./module-1040.js";
import module1296 from "./module-1296.js";
import Module806 from "./module-806.js";
import module3900 from "./module-3900.js";
const O = ((Component_1)=>{
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.isEdgeWize = isEdgeWizePage();
        e.store = e.isEdgeWize ? new module1296 : new module1040;
        e.fetchData = function() {
            e.store.fetchDetail(e.props.match.params);
        };
        e.getOperations = function() {
            return [
                {
                    key: "terminal",
                    type: "control",
                    text: t("TERMINAL"),
                    action: "edit",
                    onClick: e.handleOpenTerminal
                }
            ];
        };
        e.getResourceInfo = function(a) {
            const resources = e.store.detail.resources;
            const n = (resources === undefined ? {} : resources)[a];
            return n && Object.keys(n).map((e)=>{
                const value = e === "cpu" && n[e].endsWith("m") ? parseInt(n[e], 10) / 1000 : n[e];
                return t(`${e.toUpperCase().replace(/[^A-Z]/g, "_")}_VALUE`, {
                    value
                });
            }).join("/");
        };
        e.getAttrs = function() {
            const params = e.props.match.params;
            const { cluster, namespace } = params;
            const detail = e.store.detail;
            const u = detail === undefined ? {} : detail;
            if (module63(u)) {
                return null;
            }
            let o;
            const i = u.state ? Object.keys(u.state)[0] : "";
            o = u.imagePullPolicy === "Always" ? t("IMAGE_PULL_POLICY_ALWAYS") : u.imagePullPolicy === "IfNotPresent" ? t("IMAGE_PULL_POLICY_IFNOTPRESENT") : u.imagePullPolicy === "Never" ? t("IMAGE_PULL_POLICY_NEVER") : u.imagePullPolicy;
            return [
                {
                    name: t("CLUSTER"),
                    value: showNameAndAlias(cluster, "cluster")
                },
                {
                    name: t("PROJECT"),
                    value: showNameAndAlias(namespace, "project")
                },
                {
                    name: t("APP"),
                    value: u.app
                },
                {
                    name: t("STATUS"),
                    value: t(i)
                },
                {
                    name: t("IMAGE"),
                    value: u.image
                },
                {
                    name: t("IMAGE_ID"),
                    value: u.imageID
                },
                {
                    name: t("PORT"),
                    value: e.ports
                },
                {
                    name: t("COMMAND"),
                    value: e.command
                },
                {
                    name: t("RESOURCE_REQUESTS"),
                    value: e.getResourceInfo("requests")
                },
                {
                    name: t("RESOURCE_LIMITS"),
                    value: e.getResourceInfo("limits")
                },
                {
                    name: t("IMAGE_PULL_POLICY"),
                    value: o
                },
                {
                    name: t("RESTART_PL"),
                    value: u.restartCount
                }
            ];
        };
        e.handleOpenTerminal = function() {
            const params = e.props.match.params;
            const { cluster, namespace, podName, containerName } = params;
            const u = `/terminal${e.isEdgeWize ? "/v2/edgewize" : "/cluster"}/${cluster}/projects/${namespace}/pods/${podName}/containers/${containerName}`;
            window.open(u, `Connecting ${containerName}`, createCenterWindowOpt({
                width: 1200,
                height: 800,
                scrollbars: 1,
                resizable: 1
            }));
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "render",
            value: function() {
                const stores = {
                    detailStore: this.store
                };
                if (this.store.isLoading && !this.store.detail.name) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const a = {
                    module: this.module,
                    authKey: this.authKey,
                    name: getDisplayName(this.store.detail),
                    desc: t("CONTAINER_DETAILS_PAGE_SCAP"),
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("CONTAINER_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module806 stores={stores} {...a} routes={module3900(this.props.match.path)}/>;
            }
        },
        {
            key: "name",
            get: function() {
                return "CONTAINER";
            }
        },
        {
            key: "authKey",
            get: function() {
                return "pods";
            }
        },
        {
            key: "listUrl",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster, namespace, podName } = params;
                let l = `${workspace ? `/${workspace}` : ""}/clusters/${cluster}/projects/${namespace}/pods/${podName}`;
                if (this.isEdgeWize) {
                    l = `/v2/edgewize${l}`;
                }
                return l;
            }
        },
        {
            key: "ports",
            get: function() {
                const ports = this.store.detail.ports;
                const t = ports === undefined ? [] : ports;
                if (module63(t)) {
                    return "-";
                }
                return t.map((e)=>`${e.name ? `${e.name}:` : ""}${e.containerPort || "None"}/${e.protocol}`).join(" ");
            }
        },
        {
            key: "command",
            get: function() {
                const command = this.store.detail.command;
                const t = command === undefined ? [] : command;
                if (module63(t)) {
                    return "-";
                }
                return t.join(" ");
            }
        }
    ]);
    return r;
})(Component);
const S = observer(trigger(O));
export default S;
const C = O;
export { C as Component };
