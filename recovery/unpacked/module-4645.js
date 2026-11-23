import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
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
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-41.js";
import "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import { observer } from "./module-239.js";
import Module789 from "./module-789.js";
import Module793 from "./module-793.js";
import { ListPage, withProjectList } from "./module-794.js";
import Module797 from "./module-797.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import { ICON_TYPES } from "./module-72.js";
import module1444 from "./module-1444.js";
import module1902 from "./module-1902.js";
let l;
const C = withProjectList({
    store: new module1902,
    module: "gatewayrouteconfigs",
    name: "MICROSERVICE_ROUTE",
    authKey: "springcloud-microservices"
})(l = observer(l = ((Component_1)=>{
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
        n = a.call(this, e);
        n.fetchGatewayData = async function e() {
            let t;
            t = n.props.match.params;
            await n.gatewayStore.fetchList({
                labelSelector: "springcloud.kubesphere.io/is-default-gateway=true",
                ...t
            });
            n.setState({
                disableCreate: module63(n.gatewayStore.list.data)
            });
        };
        n.handleTabChange = function(e) {
            n.props.routing.push(`${n.prefix}/${e}`);
        };
        n.getColumns = function() {
            const n_props = n.props;
            const { getSortOrder, module } = n_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    render: function(e, t) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(t)} to={`${n.prefix}/servicerouting/${e}`}/>;
                    }
                },
                {
                    title: t("MICROSERVICE_ORDER"),
                    dataIndex: "order",
                    isHideable: true,
                    width: "22%"
                },
                {
                    title: t("URL"),
                    dataIndex: "uri",
                    isHideable: true,
                    width: "22%"
                },
                {
                    title: t("CREATION_TIME"),
                    dataIndex: "createTime",
                    sorter: true,
                    isHideable: true,
                    width: "18%",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        n.getActions = function() {
            return [
                {
                    type: "control",
                    key: "create",
                    text: t("CREATE"),
                    action: "create",
                    forbidden: n.state.disableCreate,
                    onClick: n.handleCreate
                }
            ];
        };
        n.handleCreate = function() {
            const n_props = n.props;
            const { match, projectStore, routing } = n_props;
            const data = n.gatewayStore.list.data;
            const gateway = module26(data, "[0].name");
            return n.props.trigger("servicerouting.create", {
                title: t("CREATE_MICROSERVICE_ROUTE"),
                module: "servicerouting",
                gateway,
                projectDetail: projectStore.detail,
                namespace: match.params.namespace,
                cluster: match.params.cluster,
                success: routing.query
            });
        };
        n.gatewayStore = new module1444;
        n.state = {
            disableCreate: false
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchGatewayData();
            }
        },
        {
            key: "render",
            value: function() {
                const tableProps = this.props.tableProps;
                return <ListPage {...this.props} noWatch><Module793 icon="springcloudgateway" title={t("MICROSERVICE_GATEWAY_PL")} description={t("MICROSERVICE_GATEWAY_DESC")} tabs={this.tabs}/><Module797 {...tableProps} itemActions={this.itemActions} columns={this.getColumns()} actions={this.getActions()}/></ListPage>;
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
            key: "tabs",
            get: function() {
                return {
                    value: "servicerouting",
                    onChange: this.handleTabChange,
                    options: [
                        {
                            value: "microservicegateways",
                            label: t("MICROSERVICE_GATEWAY")
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
            key: "itemActions",
            get: function() {
                const _this = this;
                const params = this.props.match.params;
                const { cluster, namespace } = params;
                const props = this.props;
                const { trigger, name, routing } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT"),
                        action: "edit",
                        onClick: function(t) {
                            return trigger("servicerouting.edit", {
                                detail: t,
                                cluster,
                                namespace,
                                store: _this.props.store,
                                success: routing.query
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
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(e) {
                            return trigger("resource.delete", {
                                type: name,
                                detail: e,
                                success: routing.query
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default C;
