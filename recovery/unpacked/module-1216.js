import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import { getDisplayName, getLocalTime, isEdgeWizePage, showNameAndAlias } from "./module-52.js";
import { trigger } from "./module-792.js";
import module318 from "./module-318.js";
import module469 from "./module-469.js";
import module1047 from "./module-1047.js";
import module859 from "./module-859.js";
import module1090 from "./module-1090.js";
import Module806 from "./module-806.js";
import module3834 from "./module-3834.js";
const I = ((Component_1)=>{
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.fetchData = async function e() {
            let t;
            t = n.props.match.params;
            await n.store.fetchDetail(t);
            await n.fetchHPA();
        };
        n.fetchHPA = function() {
            const detail = n.store.detail;
            const { cluster, namespace, name } = detail;
            const annotations = n.store.detail.annotations;
            const i = {
                cluster,
                namespace,
                name: (annotations === undefined ? {} : annotations)["kubesphere.io/relatedHPA"] || name
            };
            const c = globals.clusterConfig?.[cluster]?.k8sVersion;
            n.hpaStore.checkName(i, "", c).then((e)=>{
                if (e.exist) {
                    n.hpaStore.fetchDetail(i, c);
                }
            });
        };
        n.getOperations = function() {
            const labels = n.store.detail.labels;
            const disabled = Object.keys(labels).includes("autoscaling.kubeshpere.io/name");
            const cluster = n.props.match.params.cluster;
            const o = globals.app.hasClusterModule(cluster, "metrics-server");
            const i = globals.app.isLicenseAuthorized("metrics-server");
            const k8sVersion = globals.clusterConfig?.[cluster]?.k8sVersion;
            return [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    action: "edit",
                    onClick: function() {
                        return n.trigger("resource.baseinfo.edit", {
                            type: n.name,
                            detail: module14.toJS(n.store.detail),
                            success: n.fetchData
                        });
                    }
                },
                {
                    key: "rollBack",
                    icon: "timed-task",
                    text: t("ROLL_BACK"),
                    action: "edit",
                    onClick: function() {
                        return n.trigger("workload.revision.rollback", {
                            isEdgeWize: isEdgeWizePage(),
                            detail: n.store.detail,
                            success: n.fetchData
                        });
                    }
                },
                {
                    key: "editHpa",
                    icon: "firewall",
                    text: t("EDIT_AUTOSCALING"),
                    show: Boolean(o && i),
                    disabled,
                    action: "edit",
                    onClick: function() {
                        return n.trigger("workload.hpa.edit", {
                            isEdgeWize: isEdgeWizePage(),
                            detail: n.store.detail,
                            success: function() {
                                n.fetchHPA();
                                n.fetchData();
                            },
                            k8sVersion
                        });
                    }
                },
                {
                    key: "editConfigTemplate",
                    icon: "storage",
                    text: t("EDIT_SETTINGS"),
                    action: "edit",
                    onClick: function() {
                        return n.trigger("workload.template.edit", {
                            isEdgeWize: isEdgeWizePage(),
                            detail: n.store.detail,
                            ...n.props.match.params,
                            success: n.fetchData,
                            supportGpuSelect: true,
                            rootStore: n.props.rootStore
                        });
                    }
                },
                {
                    key: "editYaml",
                    icon: "pen",
                    text: t("EDIT_YAML"),
                    action: "edit",
                    onClick: function() {
                        return n.trigger("resource.yaml.edit", {
                            detail: n.store.detail,
                            success: n.fetchData
                        });
                    }
                },
                {
                    key: "redeploy",
                    icon: "restart",
                    text: t("RECREATE"),
                    action: "edit",
                    onClick: function() {
                        return n.trigger("workload.redeploy", {
                            module: n.module,
                            detail: n.store.detail
                        });
                    }
                },
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "delete",
                    onClick: function() {
                        return n.trigger("workload.delete", {
                            type: n.name,
                            detail: n.store.detail,
                            success: function() {
                                return n.routing.push(n.listUrl);
                            },
                            k8sVersion
                        });
                    }
                }
            ];
        };
        n.getAttrs = function() {
            const e = module14.toJS(n.store.detail);
            const params = n.props.match.params;
            const { cluster, namespace } = params;
            if (!module63(e)) {
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
                        value: e.app
                    },
                    {
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(e.createTime).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("UPDATE_TIME_TCAP"),
                        value: getLocalTime(e.updateTime).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("CREATOR"),
                        value: e.creator
                    }
                ];
            }
        };
        n.store = isEdgeWizePage() ? new module859(n.module) : new module318(n.module);
        n.hpaStore = isEdgeWizePage() ? new module1090 : new module469;
        n.customScalingStore = new module1047;
        return n;
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
                    detailStore: this.store,
                    hpaStore: this.hpaStore,
                    customScalingStore: this.customScalingStore
                };
                if (this.store.isLoading && !this.store.detail.name) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const a = {
                    module: this.module,
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    operations: this.isFedManaged ? [] : this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("DEPLOYMENT_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module806 stores={stores} {...a} routes={this.routes} watch/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "deployments";
            }
        },
        {
            key: "name",
            get: function() {
                return "DEPLOYMENT";
            }
        },
        {
            key: "listUrl",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                if (workspace) {
                    return `/${workspace}/clusters/${cluster}/projects/${namespace}/${this.module}`;
                }
                if (isEdgeWizePage()) {
                    return `/v2/edgewize/clusters/${cluster}/${this.module}`;
                }
                return `/clusters/${cluster}/${this.module}`;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "isFedManaged",
            get: function() {
                return this.store.detail.isFedManaged;
            }
        },
        {
            key: "routes",
            get: function() {
                return module3834(this.props.match.path);
            }
        }
    ]);
    return r;
})(Component);
const w = inject("rootStore")(observer(trigger(I)));
export default w;
const M = I;
export { M as Component };
