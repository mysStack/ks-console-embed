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
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import { trigger } from "./module-792.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import module485 from "./module-485.js";
import Module900 from "./module-900.js";
import module4925 from "./module-4925.js";
let s;
const T = inject("rootStore")(s = observer(s = trigger(s = ((Component_1)=>{
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
        n.fetchData = function() {
            n.store.fetchDetail(n.props.match.params);
        };
        n.getOperations = function() {
            return [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    action: "edit",
                    onClick: function() {
                        return n.trigger("resource.baseinfo.edit", {
                            detail: n.store.detail,
                            hideAlias: true,
                            success: n.fetchData
                        });
                    }
                },
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "delete",
                    onClick: function() {
                        return n.trigger("resource.delete", {
                            type: "EDGE_APPLICATION",
                            detail: n.store.detail,
                            success: function() {
                                return n.routing.push(n.listUrl);
                            },
                            onOk: n.handleDelete,
                            renderExtra: function() {
                                return <module186.Checkbox className="margin-t12" onChange={function(delete_workloads) {
                                    return n.setState({
                                        delete_workloads
                                    });
                                }}>{t("DEL_ALL_WORKLOAD_IN_EDGE_APP")}</module186.Checkbox>;
                            }
                        });
                    }
                }
            ];
        };
        n.getAttrs = function() {
            const e = module14.toJS(n.store.detail);
            if (!module63(e)) {
                const { namespace, createTime, updateTime, creator } = e;
                return [
                    {
                        name: t("EDGE_CLUSTER"),
                        value: "-"
                    },
                    {
                        name: t("PROJECT"),
                        value: namespace || "-"
                    },
                    {
                        name: t("CREATION_TIME"),
                        value: createTime ? getLocalTime(createTime).format("YYYY-MM-DD HH:mm:ss") : "-"
                    },
                    {
                        name: t("UPDATE_TIME_SCAP"),
                        value: updateTime ? getLocalTime(updateTime).format("YYYY-MM-DD HH:mm:ss") : "-"
                    },
                    {
                        name: t("CREATOR"),
                        value: creator || "-"
                    }
                ];
            }
        };
        n.handleDelete = async function e() {
            let a;
            let r;
            a = n.store.detail;
            r = module26(n.state, "delete_workloads", false);
            await n.store.delete(a, r);
            module240.success({
                content: t("DELETED_SUCCESSFULLY")
            });
        };
        n.store = new module485;
        n.state = {
            delete_workloads: false
        };
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
                    detailStore: this.store
                };
                if (this.store.isLoading && !this.store.detail.name) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const a = {
                    module: this.module,
                    authKey: this.authKey,
                    icon: "application",
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("BATCH_APP_DEPLOY_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module900 stores={stores} routes={module4925(this.props.match.path)} {...a}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return this.store.module;
            }
        },
        {
            key: "authKey",
            get: function() {
                return "roles";
            }
        },
        {
            key: "listUrl",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                return `/${workspace}/clusters/${cluster}/projects/${namespace}/${this.module}`;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        }
    ]);
    return r;
})(Component)) || s) || s) || s;
export default T;
