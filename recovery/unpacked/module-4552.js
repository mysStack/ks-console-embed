import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject } from "./module-239.js";
import module26 from "./module-26.js";
import Module789 from "./module-789.js";
import Module791 from "./module-791.js";
import Module793 from "./module-793.js";
import { ListPage, withProjectList } from "./module-794.js";
import Module797 from "./module-797.js";
import module186 from "./module-186.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import { ICON_TYPES, SERVICE_TYPES } from "./module-72.js";
import module443 from "./module-443.js";
import Module4553 from "./module-4553.js";
let o;
const D = withProjectList({
    store: new module443,
    module: "services",
    name: "SERVICE",
    searchByApp: true
})(o = inject("workspaceStore")(o = ((Component_1)=>{
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
    function r(...o) {
        let e;
        module36(this, r);
        e = a.call(this, ...o);
        e.state = {
            type: "list"
        };
        e.handleTabChange = function(type) {
            e.setState({
                type
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
                    width: "20%",
                    render: function(t, a) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(a)} desc={a.description || "-"} to={`${e.props.match.url}/${t}`} isMultiCluster={a.isFedManaged}/>;
                    }
                },
                {
                    title: t("SERVICE_TYPE_TCAP"),
                    dataIndex: 'annotations["kubesphere.io/serviceType"]',
                    isHideable: true,
                    width: "15%",
                    render: function(e, a) {
                        return <Module791 title={e ? t(`SERVICE_TYPE_${e.toUpperCase()}`) : t("CUSTOM_SERVICE")} description={t(a.type) || "-"}/>;
                    }
                },
                {
                    title: t("APP"),
                    dataIndex: "app",
                    isHideable: true,
                    search: true,
                    width: "15%",
                    render: function(e, t) {
                        const a = module26(t, 'labels["application.kubesphere.io/instance"]');
                        const r = module26(t, 'labels["app.kubernetes.io/name"]');
                        return a || r || e || "-";
                    }
                },
                {
                    title: t("INTERNAL_ACCESS"),
                    dataIndex: "clusterIP",
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
                    width: "15%",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.renderExternalService = function(e) {
            const a = {
                des: "-",
                title: "-"
            };
            if (e.specType === "NodePort") {
                a.des = t("NODE_PORTS_SCAP");
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
        e.showCreate = function() {
            const e_props = e.props;
            const { match, module, projectStore } = e_props;
            return e.props.trigger("service.create", {
                module,
                projectDetail: projectStore.detail,
                namespace: match.params.namespace,
                cluster: match.params.cluster
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const type = this.state.type;
                const props = this.props;
                const { bannerProps, tableProps, match } = props;
                const o = props.workspaceStore.isEdge ? {} : {
                    onCreate: this.showCreate
                };
                return <ListPage {...this.props}><Module793 {...bannerProps} tabs={this.tabs} tips={this.tips}/>{type === "topology" ? <Module4553 match={match}/> : <Module797 {...tableProps} itemActions={this.itemActions} tableActions={this.tableActions} columns={this.getColumns()} {...o}/>}</ListPage>;
            }
        },
        {
            key: "tabs",
            get: function() {
                const cluster = this.props.match.params.cluster;
                if (globals.app.hasClusterModule(cluster, "network.topology")) {
                    return {
                        value: this.state.type,
                        onChange: this.handleTabChange,
                        options: [
                            {
                                value: "list",
                                label: t("SERVICE_LIST")
                            },
                            {
                                value: "topology",
                                label: t("SERVICE_TOPOLOGY")
                            }
                        ]
                    };
                }
                return {};
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("SERVICE_TYPES_Q"),
                        description: t("SERVICE_TYPES_A")
                    },
                    {
                        title: t("SCENARIOS_FOR_SERVICES_Q"),
                        description: t("SCENARIOS_FOR_SERVICES_A")
                    }
                ];
            }
        },
        {
            key: "itemActions",
            get: function() {
                const props = this.props;
                const { trigger, name } = props;
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
                        key: "editService",
                        icon: "network-router",
                        text: t("EDIT_SERVICE"),
                        action: "edit",
                        onClick: function(e) {
                            return trigger("service.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "editGateway",
                        icon: "ip",
                        text: t("EDIT_EXTERNAL_ACCESS"),
                        action: "edit",
                        show: function(e) {
                            return e.type === SERVICE_TYPES.VirtualIP;
                        },
                        onClick: function(e) {
                            return trigger("service.gateway.edit", {
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
                            return trigger("service.delete", {
                                type: name,
                                detail: e
                            });
                        }
                    }
                ];
            }
        },
        {
            key: "tableActions",
            get: function() {
                const props = this.props;
                const { tableProps, name, rowKey, trigger } = props;
                return {
                    ...tableProps.tableActions,
                    selectActions: [
                        {
                            key: "delete",
                            type: "danger",
                            text: t("DELETE"),
                            action: "delete",
                            onClick: function() {
                                return trigger("service.batch.delete", {
                                    type: name,
                                    rowKey
                                });
                            }
                        }
                    ]
                };
            }
        }
    ]);
    return r;
})(Component)) || o) || o;
export default D;
