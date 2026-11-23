import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-98.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module96 from "./module-96.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import { ReactComponent } from "./module-1805.js";
import module186 from "./module-186.js";
import Module790 from "./module-790.js";
import { getLocalTime } from "./module-52.js";
import module3 from "./module-3.js";
import module63 from "./module-63.js";
import module60 from "./module-60.js";
import { trigger } from "./module-792.js";
import { CLUSTER_PROVIDERS } from "./module-72.js";
import module240 from "./module-240.js";
import Module4283 from "./module-4283.js";
import module4285 from "./module-4285.js";
let u;
let l;
let o;
const D = inject("rootStore")(u = observer(u = trigger((o = l = ((Component_1)=>{
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
        e.handleMoreMenuClick = function(t, a) {
            const type = e.props.type;
            if (a === "view") {
                e.props.rootStore.routing.push({
                    pathname: e.linkUrl,
                    state: {
                        isCluster: type === "cluster"
                    }
                });
            }
        };
        e.title = function() {
            return <><span>{e.props.type === "project" ? t("PROJECT_GATEWAY") : e.props.type === "workspace" ? t("WORKSPACE_GATEWAY") : t("CLUSTER_GATEWAY")}</span></>;
        };
        e.handleCreateGateway = function() {
            const params = e.props.match.params;
            const { namespace, workspace } = params;
            const e_props = e.props;
            const { type, getData } = e_props;
            if (globals.app.hasKSModule("gateway")) {
                e.trigger("gateways.create", {
                    name: type === "cluster" ? "kubesphere-router-cluster" : type === "workspace" ? `kubesphere-router-workspace-${workspace}` : "",
                    namespace: type === "cluster" ? "kubesphere-controls-system" : namespace,
                    workspace,
                    cluster: e.cluster,
                    store: e.store,
                    success: getData
                });
            } else {
                module240.warning({
                    content: t("PLEASE_INSTALL_GATEWAY")
                });
            }
        };
        e.renderInternetAccess = function() {
            const e_props = e.props;
            const { isFederated, title } = e_props;
            return <>{title}<Module790 className={module3("margin-t12", module31({}, module4285.federatedContainer, isFederated))}>{e.gatewayConfig.map((e, key)=><div className={module4285.container} key={key}>{e.map((e)=>{
                    if (e.icon) {
                        return <div className={module4285.header} key={e.key}>{typeof e.icon === "string" ? <module186.Icon name={e.icon} size={40}/> : <span className={module4285.customIcon}>{e.icon}</span>}<div className={module4285.item}><div>{e.title}</div><p>{e.desc}</p></div></div>;
                    }
                    if (e.component) {
                        return <div className={module3(module4285.item, "text-right")} key={e.key}>{e.component}</div>;
                    }
                    return <div className={module4285.item} key={e.key}><div>{e.title}</div><p>{t(e.desc)}</p></div>;
                })}</div>)}{e.gateway.type !== "NodePort" && <div className={module3(module4285.annotations, module31({}, module4285.bgWhite, isFederated))}><p>{t("ANNOTATION_PL")}</p><ul>{module63(e.gateway.annotations) ? <li>{t("NO_DATA")}</li> : Object.entries(e.gateway.annotations).map((e)=>{
                const t = module96(e, 2);
                const a = t[0];
                const r = t[1];
                return <li key={a}><span className={module4285.key}>{a}</span><span>{r}</span></li>;
            })}</ul></div>}</Module790></>;
        };
        return e;
    }
    module37(r, [
        {
            key: "getNodePorts",
            value: function(e) {
                if (e.ports) {
                    return e.ports.map((e)=>`${e.name}:${e.nodePort}`).join("; ");
                }
                return "-";
            }
        },
        {
            key: "getExternalIP",
            value: function(e) {
                let t = "-";
                if (module63(e.loadBalancerIngress)) {
                    if (!module63(e.externalIPs)) {
                        t = e.externalIPs.join("; ");
                    }
                } else {
                    t = e.loadBalancerIngress.join("; ");
                }
                return t;
            }
        },
        {
            key: "renderMoreMenu",
            value: function() {
                return <module186.Menu onClick={this.handleMoreMenuClick}>{this.itemActions.map((e)=><module186.Menu.MenuItem key={e.key} disabled={e.disabled}><module186.Icon name={e.icon} type="light"/> {e.text}</module186.Menu.MenuItem>)}</module186.Menu>;
            }
        },
        {
            key: "render",
            value: function() {
                const params = this.props.match.params;
                const { component, namespace, workspace } = params;
                const props = this.props;
                const { type, title, gatewayList } = props;
                const c = module60(gatewayList) && gatewayList[0];
                const i = module60(gatewayList) && gatewayList[1];
                return <div>{this.isEmptyData ? namespace && type === "cluster" || namespace && type === "workspace" || workspace && type === "cluster" || c && workspace && type === "workspace" || i && namespace && type === "project" || c && namespace && type === "project" ? null : <>{title}<Module4283 component={component} type={type} cluster={this.cluster}/></> : this.renderInternetAccess()}</div>;
            }
        },
        {
            key: "gateway",
            get: function() {
                return this.props.detail;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.store;
            }
        },
        {
            key: "isEmptyData",
            get: function() {
                return module63(module14.toJS(this.gateway));
            }
        },
        {
            key: "cluster",
            get: function() {
                const cluster = this.props.match.params.cluster;
                if (this.props.isFederated) {
                    return this.props.cluster.name;
                }
                return cluster;
            }
        },
        {
            key: "itemActions",
            get: function() {
                return [
                    {
                        key: "view",
                        icon: "eye",
                        text: t("VIEW_DETAILS"),
                        disabled: this.gateway.createTime == null
                    }
                ];
            }
        },
        {
            key: "linkUrl",
            get: function() {
                const prefix = this.props.prefix;
                if (prefix) {
                    return `${prefix}/${this.gateway.name}`;
                }
                return `/whizard-telemetry/${this.cluster}/gateways/cluster/${this.gateway.name}`;
            }
        },
        {
            key: "gatewayConfig",
            get: function() {
                const gateway = this.gateway;
                const { creator, createTime, replicas, type, ports, loadBalancerIngress, serviceMeshEnable, lb } = gateway;
                const d = module63(ports) ? "-" : ports.map((e)=>`${e.name.toUpperCase()}: ${type === "NodePort" ? e.nodePort : e.port}`).join("/");
                const f = module63(loadBalancerIngress) ? "-" : loadBalancerIngress.join(";");
                const p = [].concat(module61(CLUSTER_PROVIDERS), [
                    {
                        label: "OpenELB",
                        value: "OpenELB",
                        icon: "kubernetes"
                    }
                ]);
                const icon = lb && p.find((e)=>e.value === lb).icon;
                return [
                    [
                        {
                            key: "clusterType",
                            icon: "loadbalancer",
                            title: this.title(),
                            desc: t("TYPE")
                        },
                        {
                            key: "author",
                            title: creator || "-",
                            desc: t("CREATOR")
                        },
                        {
                            key: "createTime",
                            title: createTime ? getLocalTime(createTime).format("YYYY-MM-DD HH:mm:ss") : "-",
                            desc: t("CREATION_TIME")
                        },
                        {
                            key: "edit",
                            component: <module186.Dropdown theme="dark" content={this.renderMoreMenu()} trigger="click" placement="bottomRight"><module186.Button>{t("MANAGE")}</module186.Button></module186.Dropdown>
                        }
                    ],
                    [
                        {
                            key: "method",
                            icon: "eip-group",
                            title: type,
                            desc: t("ACCESS_MODE_SCAP")
                        },
                        lb ? {
                            key: "lb",
                            icon,
                            title: lb,
                            desc: t("LOAD_BALANCER_PROVIDER_SCAP")
                        } : {
                            key: "ip",
                            icon: "ip",
                            title: f,
                            desc: t("GATEWAY_ADDRESS_SCAP")
                        },
                        {
                            key: "earth",
                            icon: "earth",
                            title: d,
                            desc: t("NODE_PORTS_SCAP")
                        },
                        {
                            key: "pod",
                            icon: "pod",
                            title: replicas,
                            desc: replicas === 1 ? t("REPLICA") : t("REPLICA_PL")
                        },
                        {
                            key: "appGover",
                            icon: <ReactComponent/>,
                            title: serviceMeshEnable ? t("ON") : t("OFF"),
                            desc: t("TRACING")
                        }
                    ]
                ];
            }
        }
    ]);
    return r;
})(Component), l.defaultProps = {
    type: "cluster"
}, u = o)) || u) || u) || u;
export default D;
