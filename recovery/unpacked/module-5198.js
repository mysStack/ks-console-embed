import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { Link } from "./module-433.js";
import module186 from "./module-186.js";
import Module789 from "./module-789.js";
import Module791 from "./module-791.js";
import Module793 from "./module-793.js";
import { ListPage, withClusterList } from "./module-794.js";
import Module811 from "./module-811.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import { ICON_TYPES, SERVICE_TYPES } from "./module-72.js";
import module1091 from "./module-1091.js";
let o;
const O = withClusterList({
    store: new module1091,
    module: "services",
    name: "SERVICE",
    rowKey: "uid"
})(o = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(n);
    function n(...o_1) {
        let e;
        module36(this, n);
        e = a.call(this, ...o_1);
        e.showAction = function(e) {
            return !e.isFedManaged;
        };
        e.getCheckboxProps = function(e) {
            return {
                disabled: e.isFedManaged,
                name: e.name
            };
        };
        e.renderExternalService = function(e) {
            const a = {
                des: "-",
                title: "-"
            };
            if (e.specType === "NodePort") {
                a.des = t("PORT_PL");
                a.title = e.ports.filter((e)=>e.nodePort).map((e)=>`${e.nodePort}/${e.protocol}`).join("; ");
            }
            if (e.specType === "LoadBalancer") {
                a.des = e.loadBalancerIngress.length > 1 ? t("LOAD_BALANCERS_SCAP") : t("LOAD_BALANCER_SCAP");
                a.title = e.loadBalancerIngress.join("; ");
            }
            if (e.externalName) {
                return <Module791 description={a.des} title={function() {
                    return <module186.Tooltip content={e.externalName}><span>{a.title}</span></module186.Tooltip>;
                }}/>;
            }
            return <Module791 description={t(`${a.des}`)} title={a.title}/>;
        };
        e.getColumns = function() {
            const e_props = e.props;
            const { getSortOrder, module } = e_props;
            const cluster = e.props.match.params.cluster;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    width: "20%",
                    render: function(e, t) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(t)} desc={t.description || "-"} isMultiCluster={t.isFedManaged} to={`/v2/edgewize/clusters/${cluster}/projects/${t.namespace}/${module}/${e}`}/>;
                    }
                },
                {
                    title: t("PROJECT"),
                    dataIndex: "namespace",
                    isHideable: true,
                    width: "15%",
                    render: function(e) {
                        return <Link to={`/v2/edgewize/clusters/${cluster}/projects/${e}`}>{e}</Link>;
                    }
                },
                {
                    title: t("INTERNAL_ACCESS"),
                    dataIndex: 'annotations["kubesphere.io/serviceType"]',
                    isHideable: true,
                    width: "15%",
                    render: function(e, a) {
                        return <Module791 title={a.clusterIP || ""} description={t(`${a.type}`)}/>;
                    }
                },
                {
                    title: t("EXTERNAL_ACCESS"),
                    dataIndex: "specType",
                    isHideable: true,
                    width: "20%",
                    render: function(t, a) {
                        return e.renderExternalService(a);
                    }
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    sorter: true,
                    sortOrder: getSortOrder("createTime"),
                    isHideable: true,
                    width: "10%",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { query, match, module, getData } = e_props;
            return e.props.trigger("service.simple.create", {
                module,
                isEdgeWize: true,
                namespace: query.namespace,
                cluster: match.params.cluster,
                success: getData
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { match, bannerProps, tableProps } = props;
                return <ListPage {...this.props}><Module793 {...bannerProps}/><Module811 {...tableProps} itemActions={this.itemActions} columns={this.getColumns()} cluster={match.params.cluster} getCheckboxProps={this.getCheckboxProps}/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, name } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        show: this.showAction,
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
                        show: this.showAction,
                        onClick: function(e) {
                            return trigger("resource.yaml.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "editService",
                        icon: "network-router",
                        text: t("EDIT_SERVICE"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(e) {
                            return trigger("service.edit", {
                                detail: e,
                                isEdgeWize: true
                            });
                        }
                    },
                    {
                        key: "editGateway",
                        icon: "ip",
                        text: t("EDIT_EXTERNAL_ACCESS"),
                        action: "edit",
                        show: function(t) {
                            return _this.showAction(t) && t.type === SERVICE_TYPES.VirtualIP;
                        },
                        onClick: function(e) {
                            return trigger("service.gateway.edit", {
                                detail: e,
                                isEdgeWize: true
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        show: this.showAction,
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
    return n;
})(Component)) || o;
export default O;
