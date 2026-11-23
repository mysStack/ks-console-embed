import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
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
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module834 from "stores/gateway";
import module794, { ListPage } from "components/HOCs/withList";
import Module797 from "components/Tables/List";
import Module1395 from "unpacked/module-1395.js";
import module186 from "unpacked/module-186.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import { compareVersion, getHostClusterName } from "utils/index";
let s;
const T = module794({
    store: new module834,
    module: "gateways"
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this);
        n.getData = async function e() {
            let t;
            let a;
            let r;
            let l;
            let u;
            const i = arguments;
            t = i.length > 0 && i[0] !== undefined ? i[0] : {};
            ({ silent: a, ...r } = t);
            l = n.props.store;
            if (a) {
                l.list.silent = true;
            }
            u = {
                ...n.props.match.params,
                ...r,
                cluster: r?.cluster || n.state.cluster,
                labelSelector: n.labelSelector
            };
            await l.fetchList(u);
            l.list.silent = false;
        };
        n.getGatewayResource = function(e) {
            const e_cluster = e.cluster;
            if (n.isProjectGateway) {
                return {
                    cluster: e_cluster,
                    namespace: e.name.split("kubesphere-router-")[1],
                    type: "project"
                };
            }
            if (n.isProjectGateway) {
                return undefined;
            }
            return {
                cluster: e_cluster,
                workspace: e.name.split("kubesphere-router-workspace-")[1],
                type: "workspace"
            };
        };
        n.handleFetch = function(e, t) {
            n.routing.query({
                ...e,
                type: n.type
            }, t);
        };
        n.getColumns = function() {
            const getSortOrder = n.props.getSortOrder;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    render: function(e, t) {
                        return <><span style={{
                            fontWeight: 700,
                            cursor: "auto",
                            marginRight: "4px"
                        }}>{e}</span>{n.renderDisabledTip(t)}</>;
                    }
                },
                {
                    title: t("ACCESS_MODE"),
                    dataIndex: "type"
                },
                {
                    title: t("IP_ADDRESS"),
                    dataIndex: "defaultIngress"
                },
                {
                    title: t("NODE_PORTS"),
                    dataIndex: "ports",
                    render: function(e) {
                        if (module63(e)) {
                            return "-";
                        }
                        return e.map((e)=>`${e.name.toUpperCase()}: ${e.nodePort}`).join("/");
                    }
                },
                {
                    title: t("REPLICA_COUNT"),
                    dataIndex: "replicas"
                },
                {
                    title: t("TRACING"),
                    dataIndex: "serviceMeshEnable",
                    render: function(e) {
                        if (e) {
                            return t("ON");
                        }
                        return t("OFF");
                    }
                }
            ];
        };
        n.renderDesc = function() {
            const type = n.props.type;
            const cluster = n.props.match.params.cluster;
            const r = globals.app.isMultiCluster ? module26(globals, `clusterConfig.${cluster}.ksVersion`) : module26(globals, "ksConfig.ksVersion");
            if (type === "workspace" && compareVersion(r, "v3.4.0") < 0) {
                return t("CLUSTER_NOT_SUPPORT_WORKSPACE_GATEWAY");
            }
            return t(`ENT_${type.toUpperCase()}_ENABLE_GATEWAY_DESC`);
        };
        n.handleClusterChange = function(cluster) {
            n.setState({
                cluster
            });
            n.getData({
                cluster
            });
        };
        const l = getHostClusterName();
        n.state = {
            cluster: e?.cluster || module26(e, "workspaceStore.cluster", l)
        };
        return n;
    }
    module37(r, [
        {
            key: "renderDisabledTip",
            value: function(e) {
                if (e.createTime) {
                    return null;
                }
                return <module186.Tooltip content={t("UPDATE_GATEWAY_DESC")} placement="top"><module186.Icon size={20} name="update" color={{
                    primary: "#f5a623 ",
                    secondary: "#ffe1be"
                }}/></module186.Tooltip>;
            }
        },
        {
            key: "renderCustomFilter",
            value: function() {
                const cluster = this.state.cluster;
                if (this.props.showClusterSelect) {
                    return <Module1395 cluster={cluster} clusters={this.clusters} onChange={this.handleClusterChange}/>;
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { tableProps, type, inCluster } = props;
                return <ListPage {...this.props} getData={this.getData} noWatch><Module797 {...tableProps} {...this.tableOtherProps} name={`${type.toUpperCase()}_GATEWAY`} emptyProps={{
                    desc: inCluster ? this.renderDesc() : t("PROJECT_ENABLE_GATEWAY_DESC_WS")
                }} itemActions={this.itemActions} tableActions={this.tableActions} columns={this.getColumns()} onCreate={null} customFilter={this.renderCustomFilter()} searchType="name" isLoading={tableProps.isLoading}/></ListPage>;
            }
        },
        {
            key: "labelSelector",
            get: function() {
                return `kubesphere.io/gateway-type=${this.props.type}`;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "isProjectGateway",
            get: function() {
                const type = this.props.type;
                return !type || type === "project";
            }
        },
        {
            key: "workspaceStore",
            get: function() {
                return this.props.workspaceStore;
            }
        },
        {
            key: "clusters",
            get: function() {
                if (this.workspaceStore) {
                    return this.workspaceStore.clusters.data.map((cluster)=>({
                            label: cluster.name,
                            value: cluster.name,
                            cluster
                        })).filter((e)=>module26(globals, `ksConfig.enabledExtensionModulesStatus.gateway.clusterSchedulingStatuses.${e.value}`, false));
                }
                return [];
            }
        },
        {
            key: "cluster",
            get: function() {
                if (this.workspaceStore) {
                    return this.workspaceStore.cluster;
                }
                return null;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const trigger = this.props.trigger;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT"),
                        action: "edit",
                        show: function(e) {
                            return e.createTime;
                        },
                        onClick: function(t) {
                            trigger("gateways.edit", {
                                detail: t._originData,
                                type: "",
                                name: t.name,
                                ..._this.getGatewayResource(t),
                                success: _this.routing.query
                            });
                        }
                    },
                    {
                        key: "update",
                        icon: "update",
                        text: t("UPDATE"),
                        action: "manage",
                        show: function(e) {
                            return !e.createTime;
                        },
                        onClick: function(t) {
                            return trigger("gateways.update", {
                                detail: t._originData,
                                ..._this.getGatewayResource(t),
                                success: _this.routing.query
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DISABLE"),
                        action: "delete",
                        onClick: function(detail) {
                            return trigger("gateways.delete", {
                                type: _this.props.name,
                                detail,
                                name: detail.name,
                                ..._this.getGatewayResource(detail),
                                resource: detail.name,
                                success: _this.routing.query
                            });
                        }
                    }
                ];
            }
        },
        {
            key: "tableActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { tableProps, trigger } = props;
                return {
                    ...tableProps.tableActions,
                    selectActions: [
                        {
                            key: "delete",
                            type: "danger",
                            text: t("DISABLE"),
                            action: "delete",
                            onClick: function() {
                                return trigger("gateways.batch.delete", {
                                    type: _this.props.name,
                                    rowKey: "name",
                                    success: _this.routing.query
                                });
                            }
                        }
                    ],
                    onFetch: this.handleFetch
                };
            }
        },
        {
            key: "tableOtherProps",
            get: function() {
                if (this.props.showClusterSelect) {
                    return {
                        showEmpty: false,
                        emptyText: t("PROJECT_ENABLE_GATEWAY_DESC_WS")
                    };
                }
                return {};
            }
        }
    ]);
    return r;
})(Component)) || s;
export default T;
