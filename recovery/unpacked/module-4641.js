import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-84.js";
import "./module-18.js";
import "./module-97.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-109.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import Module793 from "./module-793.js";
import Module4642 from "./module-4642.js";
import { ICON_TYPES } from "./module-72.js";
import { trigger } from "./module-792.js";
import module1444 from "./module-1444.js";
import module14 from "./module-14.js";
import module4644 from "./module-4644.js";
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
        e.module = "microservicegateways";
        e.store = new module1444;
        e.fetchData = function() {
            const params = e.props.match.params;
            const { cluster, namespace } = params;
            e.store.fetchList({
                cluster,
                namespace,
                labelSelector: "springcloud.kubesphere.io/is-default-gateway=true"
            });
        };
        e.handleTabChange = function(t) {
            e.props.rootStore.routing.push(`${e.prefix}/${t}`);
        };
        e.handleMoreMenuClick = function(t, a, r) {
            const n = e.enabledItemActions.find((e)=>e.key === a);
            if (n && n.onClick) {
                n.onClick(r);
            }
        };
        e.handleCreate = function() {
            const e_props = e.props;
            const params = e_props.match.params;
            const { cluster, namespace, workspace } = params;
            const a_rootStore = e_props.rootStore;
            return e.trigger("microservicegateway.create", {
                title: t("CREATE_MICROSERVICE_GATEWAY"),
                module: e.module,
                namespace,
                cluster,
                workspace,
                store: e.store,
                rootStore: a_rootStore,
                success: e.fetchData
            });
        };
        e.renderGatewayCard = function() {
            const data = e.store.list.data;
            if (module63(data)) {
                return e.renderEmpty();
            }
            return data.map((t)=><Module4642 module={e.module} actions={e.enabledItemActions} onMenuClick={e.handleMoreMenuClick} detail={t} key={t.uid}/>);
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                this.fetchData();
                this.dispather = module14.reaction(function() {
                    return _this.store.list.data;
                }, function(t) {
                    if (module63(t) || t.some((e)=>e.status.toUpperCase() === "UPDATING")) {
                        setTimeout(()=>{
                            _this.fetchData();
                        }, 20000);
                    }
                }, {
                    delay: 10000
                });
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.dispather) {
                    this.dispather();
                }
            }
        },
        {
            key: "renderEmpty",
            value: function() {
                return <div className={module4644.empty}><div className={module4644.image}><module186.Icon name={ICON_TYPES[this.module]} size={48}/></div><div className={module4644.title}>{t("MICROSERVICE_GATEWAY_EMPTY_DESC")}</div><p className={module4644.desc}>{t("MICROSERVICE_GATEWAY_EMPTY_TIP")}</p>{this.enabledActions.includes("create") && <module186.Button type="control" className={module4644.create} onClick={this.handleCreate}>{t("CREATE")}</module186.Button>}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <><Module793 icon="springcloudgateway" title={t("MICROSERVICE_GATEWAY_PL")} description={t("MICROSERVICE_GATEWAY_DESC")} tabs={this.tabs}/>{this.renderGatewayCard()}</>;
            }
        },
        {
            key: "tabs",
            get: function() {
                return {
                    value: this.module,
                    onChange: this.handleTabChange,
                    options: [
                        {
                            value: "microservicegateways",
                            label: t("MICROSERVICE_GATEWAY_PL")
                        },
                        {
                            value: "servicerouting",
                            label: t("MICROSERVICE_ROUTE_PL")
                        }
                    ]
                };
            }
        },
        {
            key: "prefix",
            get: function() {
                const params = this.props.match.params;
                const { workspace, namespace, cluster } = params;
                return `/${workspace}/clusters/${cluster}/projects/${namespace}`;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                const params = this.props.match.params;
                const { namespace, cluster } = params;
                return globals.app.getActions({
                    module: "springcloud-microservices",
                    project: namespace,
                    cluster
                });
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const params = props.match.params;
                const { cluster, namespace, workspace } = params;
                const a_rootStore = props.rootStore;
                return [
                    {
                        key: "view",
                        icon: "eye",
                        action: "view",
                        text: t("VIEW_DETAILS"),
                        onClick: function(t) {
                            return a_rootStore.routing.push(`${_this.prefix}/${_this.module}/${t.name}`);
                        }
                    },
                    {
                        key: "edit",
                        icon: "pen",
                        action: "edit",
                        text: t("EDIT"),
                        onClick: function(t) {
                            return _this.trigger("microservicegateway.edit", {
                                module: _this.module,
                                detail: t,
                                namespace,
                                cluster,
                                workspace,
                                store: _this.store,
                                rootStore: a_rootStore,
                                success: _this.fetchData
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        action: "delete",
                        text: t("DELETE"),
                        onClick: function(t) {
                            return _this.trigger("resource.delete", {
                                detail: t,
                                type: "MICROSERVICE_GATEWAY",
                                success: _this.fetchData
                            });
                        }
                    }
                ];
            }
        },
        {
            key: "enabledItemActions",
            get: function() {
                const _this = this;
                return this.itemActions.filter((t)=>!t.action || _this.enabledActions.includes(t.action));
            }
        }
    ]);
    return r;
})(Component)) || o) || o) || o;
export default S;
