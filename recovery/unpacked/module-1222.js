import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-16.js";
import "./module-4.js";
import "./module-22.js";
import "./module-196.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import { getDisplayName, getLocalTime, isEdgeWizePage, showNameAndAlias } from "./module-52.js";
import { getJobStatus } from "./module-434.js";
import { trigger } from "./module-792.js";
import module318 from "./module-318.js";
import module1403 from "./module-1403.js";
import module1223 from "./module-1223.js";
import module859 from "./module-859.js";
import module1819 from "./module-1819.js";
import module3866 from "./module-3866.js";
import module240 from "./module-240.js";
import Module806 from "./module-806.js";
import module3867 from "./module-3867.js";
const N = isEdgeWizePage();
const T = ((Component_1)=>{
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
        e.store = N ? new module859(e.module) : new module318(e.module);
        e.resourceStore = N ? new module3866(e.module) : new module1223(e.module);
        e.recordStore = N ? new module1819 : new module1403;
        e.fetchData = function() {
            e.store.fetchDetail(e.props.match.params);
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
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "rerun",
                    icon: "refresh",
                    text: t("RERUN"),
                    action: "edit",
                    onClick: e.handleRerun
                },
                {
                    key: "viewYaml",
                    icon: "eye",
                    text: t("VIEW_YAML"),
                    action: "view",
                    onClick: function() {
                        return e.trigger("resource.yaml.edit", {
                            detail: e.store.detail,
                            readOnly: true
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
                            }
                        });
                    }
                }
            ];
        };
        e.handleRerun = function() {
            const detail = e.store.detail;
            e.store.rerun(detail).then(()=>{
                module240.success(t("OPERATION_SUCCESS"));
            }).catch((e)=>{
                console.error(e);
                module240.error(t("OPERATION_FAILED"), e.message);
            }).finally(()=>{
                e.fetchData();
            });
        };
        e.getAttrs = function() {
            const params = e.props.match.params;
            const { cluster, namespace } = params;
            const l = module14.toJS(e.store.detail);
            const l_spec = l.spec;
            const o = l_spec === undefined ? {} : l_spec;
            const i = getJobStatus(l);
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
                    value: t(i)
                },
                {
                    name: t("MAXIMUM_RETRIES"),
                    value: o.backoffLimit
                },
                {
                    name: t("COMPLETE_PODS"),
                    value: o.completions
                },
                {
                    name: t("PARALLEL_PODS"),
                    value: o.parallelism
                },
                {
                    name: t("MAXIMUM_DURATION"),
                    value: o.activeDeadlineSeconds
                },
                {
                    name: t("CREATION_TIME_TCAP"),
                    value: getLocalTime(l.createTime).format("YYYY-MM-DD HH:mm:ss")
                },
                {
                    name: t("CREATOR"),
                    value: l.creator
                }
            ];
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
                    detailStore: this.store,
                    resourceStore: this.resourceStore,
                    recordStore: this.recordStore
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
                return <Module806 stores={stores} {...a} routes={module3867(this.props.match.path)}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "jobs";
            }
        },
        {
            key: "name",
            get: function() {
                return "JOB";
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
                if (N) {
                    return `/v2/edgewize/clusters/${cluster}/${this.module}`;
                }
                return `/clusters/${cluster}/${this.module}`;
            }
        }
    ]);
    return r;
})(Component);
const R = inject("rootStore")(observer(trigger(T)));
export default R;
const I = T;
export { I as Component };
