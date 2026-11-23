import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { trigger } from "utils/action";
import module26 from "unpacked/module-26.js";
import { inject, observer } from "unpacked/module-239.js";
import module853 from "stores/secret";
import Module825 from "unpacked/module-825.js";
import module186 from "unpacked/module-186.js";
import module1394 from "pages/clusters/containers/LogCollections/config";
import routes from "pages/clusters/containers/LogCollections/Detail/routes";
import module4011 from "unpacked/module-4011.js";
let o;
const C = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
    module55(n, Component_1);
    var r = ((e)=>{
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...o) {
        let e;
        module36(this, n);
        e = r.call(this, ...o);
        e.store = new module853;
        e.fetchData = function() {
            e.store.fetchDetail({
                ...e.props.match.params,
                namespace: "kubesphere-logging-system"
            });
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
                            success: e.fetchData,
                            component: e.component
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
                                enabled: Number(module26(e.store.detail, 'labels["logging.whizard.io/enable"]', "false") === "true" ? 1 : 0)
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
                            type: "LOG_RECEIVER",
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
    module37(n, [
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
                        value: module26(this.store, 'detail.labels["logging.whizard.io/enable"]') === "true" ? t("ENABLED") : t("DISABLED")
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
                const a = detail?.name?.split("-").pop() || "";
                const O = module26(module1394, `${a}.ICON`);
                const name = module26(module1394, `${a}.title`, t("LOADING"));
                const icon = O ? <O className={module4011.icon} width={32} height={32}/> : "Loading";
                if (this.store.isLoading) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const l = {
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
                return <Module825 stores={stores} routes={routes} {...l}/>;
            }
        },
        {
            key: "listUrl",
            get: function() {
                const cluster = this.props.match.params.cluster;
                return `/clusters/${cluster}/log-collections/${this.component}`;
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
    return n;
})(Component)) || o) || o) || o;
export default C;
