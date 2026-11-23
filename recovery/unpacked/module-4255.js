import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
import "./module-27.js";
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
import { trigger } from "./module-792.js";
import module26 from "./module-26.js";
import { inject, observer } from "./module-239.js";
import module1848 from "./module-1848.js";
import Module825 from "./module-825.js";
import module186 from "./module-186.js";
import module1849 from "./module-1849.js";
import routes from "./module-4256.js";
import module4259 from "./module-4259.js";
let u;
const S = inject("rootStore")(u = observer(u = trigger(u = ((Component_1)=>{
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
    function r(...u) {
        let e;
        module36(this, r);
        e = a.call(this, ...u);
        e.store = new module1848;
        e.fetchData = function() {
            e.store.fetchDetail(e.props.match.params);
        };
        e.getOperations = function() {
            return [
                {
                    key: "edit",
                    type: "control",
                    text: t("EDIT"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("log.collection.edit", {
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "changeStatus",
                    text: t("CHANGE_STATUS"),
                    icon: "pin",
                    action: "edit",
                    onClick: function() {
                        return e.trigger("log.collection.active.switch", {
                            data: {
                                enabled: Number(e.store.detail.enabled)
                            },
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "delete",
                    text: t("DELETE"),
                    icon: "trash",
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
                },
                {
                    key: "editYaml",
                    text: t("EDIT_YAML"),
                    icon: "pen",
                    action: "edit",
                    onClick: function() {
                        e.trigger("resource.yaml.edit", {
                            detail: e.store.detail,
                            success: e.fetchData
                        });
                    }
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
            key: "getAttrs",
            value: function() {
                return [
                    {
                        name: t("STATUS"),
                        value: module26(this.store, "detail.enabled") ? t("ENABLED") : t("DISABLED")
                    }
                ];
            }
        },
        {
            key: "render",
            value: function() {
                const stores = {
                    detailStore: this.store
                };
                const detail = this.store.detail;
                const r = module26(detail, "type", "");
                const N = module26(module1849, `${r}.ICON`);
                const name = module26(module1849, `${r}.title`, t("LOADING"));
                const icon = N ? <N className={module4259.icon} width={32} height={32}/> : "Loading";
                if (this.store.isLoading) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const c = {
                    module: this.module,
                    name,
                    icon,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("LOG_RECEIVER_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module825 stores={stores} routes={routes} {...c}/>;
            }
        },
        {
            key: "listUrl",
            get: function() {
                const cluster = this.props.match.params.cluster;
                return `/whizard-telemetry/${cluster}/log-collections/${this.component}`;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "component",
            get: function() {
                return this.props.match.params.component;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        }
    ]);
    return r;
})(Component)) || u) || u) || u;
export default S;
