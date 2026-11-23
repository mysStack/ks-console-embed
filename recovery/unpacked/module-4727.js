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
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module63 from "./module-63.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import { getDisplayName, getLocalTime, showNameAndAlias } from "./module-52.js";
import { trigger } from "./module-792.js";
import module1901 from "./module-1901.js";
import module1631 from "./module-1631.js";
import Module806 from "./module-806.js";
import module4728 from "./module-4728.js";
let o;
const S = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
    function r(...o_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...o_1);
        e.name = "SQ_CONFIGURATION";
        e.store = new module1901;
        e.historyStore = new module1631;
        e.fetchData = function() {
            const params = e.props.match.params;
            const { cluster, namespace, name } = params;
            e.store.fetchDetail({
                cluster,
                namespace,
                name
            });
        };
        e.fetchHistory = function() {
            const params = e.props.match.params;
            const { cluster, namespace, name } = params;
            e.historyStore.fetchList({
                cluster,
                namespace,
                labelSelector: `springcloud.kubesphere.io/configuration.name=${name}`
            });
        };
        e.getOperations = function() {
            return [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("configuration.edit", {
                            detail: e.store.detail,
                            success: function() {
                                e.fetchData();
                                e.fetchHistory();
                            }
                        });
                    }
                },
                {
                    key: "rollBack",
                    icon: "timed-task",
                    text: t("ROLL_BACK"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("configuration.rollback", {
                            title: t("ROLL_BACK_MICROSERVICE_CONFIGURATION"),
                            detail: e.store.detail,
                            success: function() {
                                e.fetchData();
                                e.fetchHistory();
                            }
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
        e.getAttrs = function() {
            const params = e.props.match.params;
            const { cluster, namespace } = params;
            const detail = e.store.detail;
            const c = detail === undefined ? {} : detail;
            if (module63(c)) {
                return null;
            }
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
                    name: t("CREATION_TIME_TCAP"),
                    value: getLocalTime(c.createTime).format("YYYY-MM-DD HH:mm:ss")
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
                    historyStore: this.historyStore
                };
                if (this.store.isLoading && !this.store.detail.name) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const a = {
                    icon: this.icon,
                    module: this.module,
                    authKey: "springcloud-microservices",
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("SQ_CONFIGURATION_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module806 stores={stores} {...a} routes={module4728(this.props.match.path)}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "configurations";
            }
        },
        {
            key: "icon",
            get: function() {
                return "hammer";
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
                return `/clusters/${cluster}/${this.module}`;
            }
        }
    ]);
    return r;
})(Component)) || o) || o) || o;
export default S;
