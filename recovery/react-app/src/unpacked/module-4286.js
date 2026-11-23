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
import module186 from "unpacked/module-186.js";
import module63 from "unpacked/module-63.js";
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.getData = async function t() {
            let a;
            let r;
            let n;
            let u;
            let l;
            let c;
            let labelSelector;
            const d = arguments;
            a = d.length > 0 && d[0] !== undefined ? d[0] : {};
            ({ silent: r, ...n } = a);
            u = e.props;
            l = u.store;
            c = u.inCluster;
            if (r) {
                l.list.silent = true;
            }
            labelSelector = c ? `kubesphere.io/gateway-type=${e.props.type}` : `kubesphere.io/workspace=${e.props.match.params.workspace}`;
            await l.fetchList({
                ...e.props.match.params,
                ...n,
                labelSelector
            });
            l.list.silent = false;
        };
        e.getGatewayResource = function(t) {
            const t_cluster = t.cluster;
            if (e.isProjectGateway) {
                return {
                    cluster: t_cluster,
                    namespace: t.name.split("kubesphere-router-")[1]
                };
            }
            if (e.isProjectGateway) {
                return undefined;
            }
            return {
                cluster: t_cluster,
                workspace: t.name.split("kubesphere-router-workspace-")[1]
            };
        };
        e.handleFetch = function(t, a) {
            e.routing.query({
                ...t,
                type: e.type
            }, a);
        };
        e.getColumns = function() {
            const getSortOrder = e.props.getSortOrder;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    render: function(t, a) {
                        return <><span style={{
                            fontWeight: 700,
                            cursor: "auto",
                            marginRight: "4px"
                        }}>{t}</span>{e.renderDisabledTip(a)}</>;
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
        return e;
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
            key: "render",
            value: function() {
                const props = this.props;
                const { tableProps, type, inCluster } = props;
                return <ListPage {...this.props} getData={this.getData} noWatch><Module797 {...tableProps} name={`${type.toUpperCase()}_GATEWAY`} emptyProps={{
                    desc: inCluster ? t(`ENT_${type.toUpperCase()}_ENABLE_GATEWAY_DESC`) : t("PROJECT_ENABLE_GATEWAY_DESC_WS")
                }} itemActions={this.itemActions} tableActions={this.tableActions} columns={this.getColumns()} onCreate={null} searchType="name"/></ListPage>;
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
            key: "itemActions",
            get: function() {
                return [];
            }
        },
        {
            key: "tableActions",
            get: function() {
                return {
                    ...this.props.tableProps.tableActions,
                    selectActions: [],
                    onFetch: this.handleFetch
                };
            }
        }
    ]);
    return r;
})(Component)) || s;
export default T;
