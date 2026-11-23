import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
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
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import { getDisplayName, getLocalTime, isEdgeWizePage, showNameAndAlias } from "./module-52.js";
import { getCronJobStatus } from "./module-434.js";
import { trigger } from "./module-792.js";
import module318 from "./module-318.js";
import module859 from "./module-859.js";
import Module806 from "./module-806.js";
import module3871 from "./module-3871.js";
function k(e) {
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
}
const N = ((Component_1)=>{
    module55(f, Component_1);
    var n = k(f);
    function f(...r_1) {
        let e;
        module36(this, f);
        e = n.call(this, ...r_1);
        e.state = {
            k8sVersion: ""
        };
        e.store = isEdgeWizePage() ? new module859(e.module) : new module318(e.module);
        e.fetchData = function() {
            e.store.fetchDetail(e.props.match.params, e.state.k8sVersion);
        };
        e.getOperations = function() {
            return [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("resource.baseinfo.edit", {
                            type: e.name,
                            detail: module14.toJS(e.store.detail),
                            success: e.fetchData,
                            k8sVersion: e.state.k8sVersion
                        });
                    }
                },
                {
                    key: "start",
                    icon: "start",
                    text: t("START"),
                    action: "edit",
                    onClick: function() {
                        return e.handleSwitch(true);
                    },
                    show: e.store.detail.suspend
                },
                {
                    key: "pause",
                    icon: "stop",
                    text: t("PAUSE"),
                    action: "edit",
                    onClick: function() {
                        return e.handleSwitch(false);
                    },
                    show: !e.store.detail.suspend
                },
                {
                    key: "editYaml",
                    icon: "pen",
                    text: t("EDIT_YAML"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("resource.yaml.edit", {
                            detail: e.store.detail,
                            success: e.fetchData,
                            k8sVersion: e.state.k8sVersion
                        });
                    }
                },
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "delete",
                    type: "danger",
                    onClick: function() {
                        return e.trigger("resource.delete", {
                            type: e.name,
                            detail: e.store.detail,
                            success: function() {
                                return e.routing.push(e.listUrl);
                            },
                            k8sVersion: e.state.k8sVersion
                        });
                    }
                }
            ];
        };
        e.handleSwitch = function(t) {
            e.store.switch(e.store.detail, t, e.state.k8sVersion).then(()=>{
                e.fetchData();
            });
        };
        e.getAttrs = function() {
            const detail = e.store.detail;
            const a_spec = detail.spec;
            const n = a_spec === undefined ? {} : a_spec;
            const l = getCronJobStatus(detail);
            const params = e.props.match.params;
            const { cluster, namespace } = params;
            if (!module63(detail)) {
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
                        name: t("STATUS"),
                        value: t(l)
                    },
                    {
                        name: t("SCHEDULE"),
                        value: n.schedule
                    },
                    {
                        name: t("MAXIMUM_DELAY"),
                        value: n.startingDeadlineSeconds
                    },
                    {
                        name: t("SUCCESSFUL_JOBS_RETAINED"),
                        value: n.successfulJobsHistoryLimit
                    },
                    {
                        name: t("FAILED_JOBS_RETAINED"),
                        value: n.failedJobsHistoryLimit
                    },
                    {
                        name: t("CONCURRENCY_POLICY"),
                        value: n.concurrencyPolicy === "Allow" ? t("RUN_JOBS_CONCURRENTLY") : n.concurrencyPolicy === "Forbid" ? t("SKIP_NEW_JOB") : t("SKIP_OLD_JOB")
                    },
                    {
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(detail.createTime).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("CREATOR"),
                        value: detail.creator
                    }
                ];
            }
        };
        return e;
    }
    module37(f, [
        {
            key: "fetchK8sVersion",
            value: async function(t) {
                let r;
                let k8sVersion;
                let a = "kapis/version";
                if (globals.ksConfig.multicluster) {
                    a = `kapis/clusters/${t}/version`;
                }
                r = await request.get(a);
                k8sVersion = module26(r, "kubernetes.gitVersion");
                this.setState({
                    k8sVersion
                });
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.init();
            }
        },
        {
            key: "init",
            value: async function() {
                await this.fetchK8sVersion(globals?.currentCluster);
                await this.fetchData();
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
                            label: t(`${this.name}_PL`),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module806 stores={stores} {...a} routes={module3871(this.props.match.path)}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "cronjobs";
            }
        },
        {
            key: "name",
            get: function() {
                return "CRONJOB";
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
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
        }
    ]);
    return f;
})(Component);
const T = inject("rootStore")(observer(trigger(N)));
export default T;
const R = N;
export { R as Component };
