import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-73.js";
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
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import Module789 from "./module-789.js";
import Module791 from "./module-791.js";
import Module790 from "./module-790.js";
import Module793 from "./module-793.js";
import Module797 from "./module-797.js";
import { ListPage, withProjectList } from "./module-794.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import { ICON_TYPES } from "./module-72.js";
import module918 from "./module-918.js";
import module834 from "./module-834.js";
import module4622 from "./module-4622.js";
let s;
const C = withProjectList({
    store: new module918,
    module: "ingresses",
    name: "ROUTE"
})(s = ((Component_1)=>{
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
        e.gatewayStore = new module834;
        e.state = {
            ingressClassScopes: []
        };
        e.getGateway = async function t() {
            let a;
            let cluster;
            let namespace;
            let ingressClassScopes;
            a = e.props.match.params;
            cluster = a.cluster;
            namespace = a.namespace;
            ingressClassScopes = await e.gatewayStore.getNewGatewayByProject({
                cluster,
                namespace
            });
            e.setState({
                ingressClassScopes
            });
        };
        e.getColumns = function() {
            const e_props = e.props;
            const { getSortOrder, module } = e_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    render: function(t, a) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(a)} desc={a.description || "-"} to={`${e.props.match.url}/${t}`}/>;
                    }
                },
                {
                    title: t("GATEWAY_ADDRESS_TCAP"),
                    dataIndex: "loadBalancerIngress",
                    isHideable: true,
                    width: "22%",
                    render: function(e) {
                        if (module63(e)) {
                            return "-";
                        }
                        return e.join("; ");
                    }
                },
                {
                    title: t("Ingress Class"),
                    dataIndex: "ingressClassName",
                    isHideable: true,
                    width: "18%",
                    render: function(e) {
                        return e || "-";
                    }
                },
                {
                    title: t("APP"),
                    dataIndex: "app",
                    isHideable: true,
                    search: true,
                    width: "22%",
                    render: function(e) {
                        return e || "-";
                    }
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    sorter: true,
                    sortOrder: getSortOrder("createTime"),
                    isHideable: true,
                    width: 150,
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { match, module, projectStore } = e_props;
            return e.props.trigger("router.create", {
                module,
                projectDetail: projectStore.detail,
                namespace: match.params.namespace,
                cluster: match.params.cluster,
                gatewayStore: e.gatewayStore
            });
        };
        e.showAddGateway = function() {
            const rootStore = e.props.rootStore;
            const params = e.props.match.params;
            const { cluster, workspace, namespace } = params;
            if (globals.app.hasKSModule("gateway")) {
                rootStore.routing.push(`/${workspace}/clusters/${cluster}/projects/${namespace}/gateways`);
            } else {
                module240.warning({
                    content: t("PLEASE_INSTALL_GATEWAY")
                });
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.getGateway();
            }
        },
        {
            key: "renderCreateGateway",
            value: function() {
                return <Module790 className="margin-t12 margin-b12"><div className="flexbox"><module186.Icon className="margin-r12" name="loadbalancer" size={40}/><Module791 className={module4622.text} title={t("GATEWAY_NOT_ENABLED")} description={t("ENT_ENABLE_GATEWAY_TIP")}/>{this.canSetGateway && <module186.Button className={module4622.button} type="control" onClick={this.showAddGateway}>{t("ENABLE_GATEWAY")}</module186.Button>}</div></Module790>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                const ingressClassScopes = this.state.ingressClassScopes;
                return <ListPage {...this.props}><Module793 {...bannerProps} tips={this.tips}/>{module63(ingressClassScopes) && this.renderCreateGateway()}<Module797 {...tableProps} itemActions={this.itemActions} columns={this.getColumns()} onCreate={this.showCreate}/></ListPage>;
            }
        },
        {
            key: "workspace",
            get: function() {
                return this.props.match.params.workspace;
            }
        },
        {
            key: "canSetGateway",
            get: function() {
                return globals.app.hasPermission({
                    module: "project-settings",
                    action: "manage",
                    cluster: this.props.match.params.cluster,
                    project: this.props.match.params.namespace
                });
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("PREREQUESTS_FOR_USE_ROUTE_Q"),
                        description: t("PREREQUESTS_FOR_USE_ROUTE_A")
                    },
                    {
                        title: t("ACCESS_TYPES_OF_ROUTE_Q"),
                        description: t("ACCESS_TYPES_OF_ROUTE_A")
                    }
                ];
            }
        },
        {
            key: "itemActions",
            get: function() {
                const props = this.props;
                const { trigger, name } = props;
                const namespace = this.props.match.params.namespace;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("resource.baseinfo.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "editYaml",
                        icon: "pen",
                        text: t("EDIT_YAML"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("resource.yaml.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "editRules",
                        icon: "firewall",
                        text: t("EDIT_ROUTING_RULES"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("router.rules.edit", {
                                detail: e,
                                namespace
                            });
                        }
                    },
                    {
                        key: "editAnnotations",
                        icon: "firewall",
                        text: t("EDIT_ANNOTATIONS"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("router.annotations.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(e) {
                            return trigger("resource.delete", {
                                type: name,
                                detail: e
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || s;
export default C;
