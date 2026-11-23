import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
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
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import Module838 from "components/Base/Indicator";
import Module793 from "unpacked/module-793.js";
import module14 from "unpacked/module-14.js";
import module794, { ListPage } from "components/HOCs/withList";
import Module797 from "components/Tables/List";
import { ICON_TYPES, PODS_STATUS_NEW } from "utils/constants";
import module186 from "unpacked/module-186.js";
import Module4328 from "unpacked/module-4328.js";
import { Component } from "unpacked/module-553.js";
import { Link } from "unpacked/module-433.js";
import module4330 from "unpacked/module-4330.js";
import module438 from "stores/cluster";
import { getLocalTime } from "utils/index";
import module937 from "unpacked/module-937.js";
import module4331 from "unpacked/module-4331.js";
let c;
let i;
const M = module794({
    store: new module4330,
    module: "pods",
    name: "POD"
})(c = module937([
    "event"
])((i = ((Component_1)=>{
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
    })(n);
    function n(...u_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...u_1);
        e.clusterStore = new module438;
        e.state = {
            cluster: ""
        };
        e.getData = function(t) {
            e.props.store.fetchList({
                metrics_filter: "pod_status_info",
                ...t
            });
        };
        e.getColumns = function() {
            return [
                {
                    title: t("NAME"),
                    dataIndex: "pod",
                    search: true,
                    width: "20%",
                    render: e.renderAvatar
                },
                {
                    title: t("STATUS"),
                    dataIndex: "phase",
                    filters: e.getPodsStatus(),
                    isHideable: true,
                    search: true,
                    width: "8%",
                    minWidth: 80,
                    render: function(e) {
                        return <span>{t(e === "Succeeded" ? "WHIZARD_MONITORING.SUCCEEDED" : e.toUpperCase())}</span>;
                    }
                },
                {
                    title: t("NODE_SI"),
                    dataIndex: "node",
                    isHideable: true,
                    search: true,
                    width: "18%",
                    render: e.renderNode
                },
                {
                    title: t("POD_IP_ADDRESS"),
                    dataIndex: "pod_ip",
                    search: true,
                    isHideable: true,
                    width: 120
                },
                {
                    title: t("PROJECT"),
                    dataIndex: "namespace",
                    search: true,
                    isHideable: true,
                    width: "15%"
                },
                {
                    title: t("CLUSTER"),
                    dataIndex: "cluster",
                    isHideable: true,
                    width: "10%"
                },
                {
                    title: t("UPDATE_TIME_TCAP"),
                    dataIndex: "pod_status_info",
                    sorter: true,
                    isHideable: true,
                    width: 150,
                    render: function(e) {
                        return getLocalTime(new Date(1000 * e)).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.renderAvatar = function(a, r) {
            const module = e.props.module;
            const { phase, cluster, namespace } = r;
            return <div className={module4331.avatar}><div className={module4331.icon}><module186.Icon name={ICON_TYPES[module]} size={40}/><Module838 className={module4331.indicator} type={phase} flicker/></div><div><Link className={module4331.title} to={`/whizard-telemetry/${cluster}/projects/${namespace}/${module}/${a}/resource-status`}>{a}</Link><div className={module4331.desc}>{t(phase === "Succeeded" ? "WHIZARD_MONITORING.SUCCEEDED" : phase.toUpperCase())}</div></div></div>;
        };
        e.renderNode = function(e, { node, host_ip, cluster }) {
            if (!node) {
                return "-";
            }
            const l = t("NODE_IP", {
                node,
                ip: host_ip
            });
            return <Link to={`/whizard-telemetry/${cluster}/nodes/${node}/status`}>{l}</Link>;
        };
        e.handleClusterChange = function(cluster) {
            e.setState({
                cluster
            });
            const tableProps = e.props.tableProps;
            tableProps?.tableActions?.onFetch({
                cluster,
                page: 1,
                limit: 10
            });
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
            key: "fetchData",
            value: async function() {
                this.clusterStore.fetchList();
            }
        },
        {
            key: "getPodsStatus",
            value: function() {
                return PODS_STATUS_NEW.map((e)=>({
                        text: t(e.text),
                        value: e.value
                    }));
            }
        },
        {
            key: "renderCustomFilter",
            value: function() {
                const cluster = this.state.cluster;
                return <Module4328 clusters={this.clusters} cluster={cluster} onChange={this.handleClusterChange}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} getData={this.getData} noWatch><Module793 {...bannerProps}/><Module797 {...tableProps} itemActions={[]} columns={this.getColumns()} customFilter={this.renderCustomFilter()} onRefresh={function() {
                    _this.handleClusterChange("");
                }}/></ListPage>;
            }
        },
        {
            key: "clusters",
            get: function() {
                return this.clusterStore.list.data.map((cluster)=>({
                        label: cluster.name,
                        value: cluster.name,
                        disabled: !cluster.isReady,
                        cluster
                    }));
            }
        }
    ]);
    return n;
})(Component), module49(i.prototype, "clusters", [
    module14.computed
], Object.getOwnPropertyDescriptor(i.prototype, "clusters"), i.prototype), c = i)) || c) || c;
export default M;
