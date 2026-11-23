import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-84.js";
import "./module-73.js";
import "./module-18.js";
import "./module-192.js";
import "./module-16.js";
import "./module-98.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
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
import module26 from "./module-26.js";
import { trigger } from "./module-792.js";
import { CLUSTER_PROVIDERS } from "./module-72.js";
import module240 from "./module-240.js";
import Module3818 from "./module-3818.js";
import module3820 from "./module-3820.js";
let l;
let u;
let o;
const M = inject("rootStore")(l = observer(l = trigger((o = u = ((Component_1)=>{
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
        e.handleMoreMenuClick = function(t, a) {
            const params = e.props.match.params;
            const { namespace, workspace } = params;
            const e_props = e.props;
            const u_type = e_props.type;
            if (e_props.isFederated) {
                localStorage.setItem("federated-cluster", e.cluster);
            }
            const namespace_1 = u_type === "cluster" ? "" : namespace;
            switch(a){
                case "view":
                    e.props.rootStore.routing.push({
                        pathname: e.linkUrl,
                        state: {
                            isCluster: u_type === "cluster"
                        }
                    });
                    break;
                case "edit":
                    e.trigger("gateways.edit", {
                        cluster: e.cluster,
                        namespace: namespace_1,
                        workspace,
                        name: e.gateway.name,
                        type: u_type,
                        detail: module14.toJS(e.gateway._originData),
                        store: e.store,
                        success: e.props.getData
                    });
                    break;
                case "update":
                    e.trigger("gateways.update", {
                        cluster: e.cluster,
                        namespace: namespace_1,
                        workspace,
                        detail: module14.toJS(e.gateway._originData),
                        store: e.store,
                        success: e.props.getData,
                        type: u_type,
                        updateToLatest: !!e.gateway.createTime
                    });
                    break;
                case "delete":
                    e.trigger("gateways.delete", {
                        cluster: e.cluster,
                        type: e.props.type === "cluster" ? "CLUSTER_GATEWAY" : e.props.type === "workspace" ? "WORKSPACE_GATEWAY" : "PROJECT_GATEWAY",
                        namespace: namespace_1,
                        name: e.gateway.name,
                        workspace,
                        detail: module14.toJS(e.gateway),
                        store: e.store,
                        success: e.props.getData
                    });
            }
        };
        e.title = function() {
            return <><span>{e.props.type === "project" ? t("PROJECT_GATEWAY") : e.props.type === "workspace" ? t("WORKSPACE_GATEWAY") : t("CLUSTER_GATEWAY")}</span>{e.needUpdate ? <module186.Tooltip content={t("UPDATE_GATEWAY_DESC")} placement="top"><module186.Icon name="update" color={{
                primary: "#f5a623 ",
                secondary: "#ffe1be"
            }}/></module186.Tooltip> : null}</>;
        };
        e.handleCreateGateway = function() {
            const params = e.props.match.params;
            const { namespace, workspace } = params;
            const e_props = e.props;
            const { type, getData } = e_props;
            if (globals.app.hasKSModule("gateway") && e.isClusterInstallGatway) {
                let i = "";
                switch(type){
                    case "cluster":
                        i = "kubesphere-router-cluster";
                        break;
                    case "workspace":
                        i = `kubesphere-router-workspace-${workspace}`;
                        break;
                    case "project":
                        i = `kubesphere-router-namespace-${namespace}`;
                }
                e.trigger("gateways.create", {
                    name: i,
                    namespace: type === "cluster" ? "" : namespace,
                    type,
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
            return <>{title}<Module790 className={module3("margin-t12", module31({}, module3820.federatedContainer, isFederated))}>{e.gatewayConfig.map((e, key)=><div className={module3820.container} key={key}>{e.map((e)=>{
                    if (e.icon) {
                        return <div className={module3820.header} key={e.key}>{typeof e.icon === "string" ? <module186.Icon name={e.icon} size={40}/> : <span className={module3820.customIcon}>{e.icon}</span>}<div className={module3820.item}><div>{e.title}</div><p>{e.desc}</p></div></div>;
                    }
                    if (e.component) {
                        return <div className={module3(module3820.item, "text-right")} key={e.key}>{e.component}</div>;
                    }
                    return <div className={module3820.item} key={e.key}><div>{e.title}</div><p>{t(e.desc)}</p></div>;
                })}</div>)}{e.gateway.type !== "NodePort" && <div className={module3(module3820.annotations, module31({}, module3820.bgWhite, isFederated))}><p>{t("ANNOTATION_PL")}</p><ul>{module63(e.gateway.annotations) ? <li>{t("NO_DATA")}</li> : Object.entries(e.gateway.annotations).map((e)=>{
                const t = module96(e, 2);
                const a = t[0];
                const r = t[1];
                return <li key={a}><span className={module3820.key}>{a}</span><span>{r}</span></li>;
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
                const { type, title, gatewayList, inCluster } = props;
                const c = module60(gatewayList) && gatewayList[0];
                const s = module60(gatewayList) && gatewayList[1];
                return <div>{this.isEmptyData ? namespace && type === "cluster" || namespace && type === "workspace" || workspace && type === "cluster" || c && workspace && type === "workspace" || s && namespace && type === "project" || c && namespace && type === "project" ? null : <>{title}<Module3818 component={component} type={type} handleCreateGateway={this.handleCreateGateway} cluster={this.cluster} canEdit={this.canEdit} inCluster={inCluster}/></> : this.renderInternetAccess()}</div>;
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
            key: "canEdit",
            get: function() {
                return this.props.actions && !this.props.actions.includes("manage");
            }
        },
        {
            key: "hasGatewayTypeLabel",
            get: function() {
                return !!module26(this.gateway, [
                    "_originData",
                    "metadata",
                    "labels",
                    "kubesphere.io/gateway-type"
                ], false);
            }
        },
        {
            key: "hasWorkspaceLabel",
            get: function() {
                return !!module26(this.gateway, [
                    "_originData",
                    "metadata",
                    "labels",
                    "kubesphere.io/workspace"
                ], false);
            }
        },
        {
            key: "needUpdate",
            get: function() {
                const type = this.props.type;
                return !this.gateway.createTime || type === "cluster" && !this.hasGatewayTypeLabel || type === "project" && (!this.hasGatewayTypeLabel || !this.hasWorkspaceLabel);
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
                const disabled = this.canEdit || !this.needUpdate;
                const a = [
                    {
                        key: "view",
                        icon: "eye",
                        text: t("VIEW_DETAILS")
                    },
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT"),
                        disabled: this.canEdit || this.needUpdate
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DISABLE"),
                        disabled: this.canEdit
                    }
                ];
                const r = {
                    key: "update",
                    icon: "update",
                    text: t("UPDATE"),
                    disabled
                };
                if (!disabled) {
                    a.splice(2, 0, r);
                }
                return a;
            }
        },
        {
            key: "linkUrl",
            get: function() {
                const prefix = this.props.prefix;
                if (prefix) {
                    return `${prefix}/${this.gateway.name}/gateway-configs`;
                }
                return `/clusters/${this.cluster}/gateways/cluster/${this.gateway.name}/gateway-configs`;
            }
        },
        {
            key: "gatewayConfig",
            get: function() {
                const gateway = this.gateway;
                const { creator, createTime, replicas, type, ports, loadBalancerIngress, serviceMeshEnable, lb } = gateway;
                const props = this.props;
                const { renderOperations, manageDisable } = props;
                const m = module63(ports) ? "-" : ports.map((e)=>`${e.name.toUpperCase()}: ${type === "NodePort" ? e.nodePort : e.port}`).join("/");
                const h = module63(loadBalancerIngress) ? "-" : loadBalancerIngress.join(";");
                const g = [].concat(module61(CLUSTER_PROVIDERS), [
                    {
                        label: "OpenELB",
                        value: "OpenELB",
                        icon: "kubernetes"
                    }
                ]);
                const icon = lb && g.find((e)=>e.value === lb).icon;
                const _ = globals.app.hasPermission({
                    module: "clusters",
                    action: "view"
                }) && this.props.type === "cluster";
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
                            component: renderOperations ? renderOperations({
                                url: this.linkUrl,
                                disabled: !_ || module63(createTime)
                            }) : manageDisable ? null : <module186.Dropdown theme="dark" content={this.renderMoreMenu()} trigger="click" placement="bottomRight"><module186.Button>{t("MANAGE")}</module186.Button></module186.Dropdown>
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
                            title: h,
                            desc: t("GATEWAY_ADDRESS_SCAP")
                        },
                        {
                            key: "earth",
                            icon: "earth",
                            title: m,
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
        },
        {
            key: "isClusterInstallGatway",
            get: function() {
                const cluster = this.props.match.params.cluster;
                return module26(globals, `ksConfig.enabledExtensionModulesStatus.gateway.clusterSchedulingStatuses.${cluster}`, false);
            }
        }
    ]);
    return r;
})(Component), u.defaultProps = {
    type: "cluster"
}, l = o)) || l) || l) || l;
export default M;
