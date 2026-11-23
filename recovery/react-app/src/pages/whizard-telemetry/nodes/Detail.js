import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-86.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import { getDisplayName, getLocalTime } from "utils/index";
import { getNodeRoles, getNodeStatus } from "utils/node";
import { trigger } from "utils/action";
import module858 from "stores/node";
import Module825 from "unpacked/module-825.js";
import Module796 from "components/Base/Status";
import routes from "unpacked/module-4219.js";
let u;
const T = inject("rootStore")(u = observer(u = trigger(u = ((Component_1)=>{
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.store = new module858;
        e.fetchData = function() {
            const params = e.props.match.params;
            const { cluster, node } = params;
            e.store.fetchDetail({
                name: node,
                cluster
            });
        };
        e.getOperations = function() {
            return [];
        };
        e.getAttrs = function() {
            const a = module14.toJS(e.store.detail);
            if (!module63(a)) {
                const r = getNodeStatus(a);
                const n = <Module796 type={r} name={t(`NODE_STATUS_${r.toUpperCase()}`)}/>;
                const u = module26(a, "status.addresses[0].address", "-");
                const l = a.nodeInfo || {};
                return [
                    {
                        name: t("STATUS"),
                        value: n
                    },
                    {
                        name: t("IP_ADDRESS"),
                        value: u
                    },
                    {
                        name: t("ROLE"),
                        value: getNodeRoles(a.labels).indexOf("master") === -1 ? t("WORKER") : t("CONTROL_PLANE")
                    },
                    {
                        name: t("OS_VERSION"),
                        value: l.osImage
                    },
                    {
                        name: t("OS_TYPE"),
                        value: t(l.operatingSystem.toUpperCase())
                    },
                    {
                        name: t("KERNEL_VERSION"),
                        value: l.kernelVersion
                    },
                    {
                        name: t("CONTAINER_RUNTIME"),
                        value: l.containerRuntimeVersion
                    },
                    {
                        name: t("KUBELET_VERSION"),
                        value: l.kubeletVersion
                    },
                    {
                        name: t("KUBE_PROXY_VERSION"),
                        value: l.kubeProxyVersion
                    },
                    {
                        name: t("ARCHITECTURE"),
                        value: l.architecture.toUpperCase()
                    },
                    {
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(a.createTime).format("YYYY-MM-DD HH:mm:ss")
                    }
                ];
            }
        };
        e.handleCordon = function() {
            const t = module14.toJS(e.store.detail);
            if (t.unschedulable) {
                e.store.uncordon(t).then(e.fetchData);
            } else {
                e.store.cordon(t).then(e.fetchData);
            }
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
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("CLUSTER_NODE_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module825 stores={stores} routes={routes} {...a}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "nodes";
            }
        },
        {
            key: "name",
            get: function() {
                return "CLUSTER_NODE";
            }
        },
        {
            key: "listUrl",
            get: function() {
                const cluster = this.props.match.params.cluster;
                return `/whizard-telemetry/${cluster}/nodes`;
            }
        }
    ]);
    return r;
})(Component)) || u) || u) || u;
export default T;
