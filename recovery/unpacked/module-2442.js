import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-31.js";
import "./module-58.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { PureComponent } from "./module-553.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import Module864 from "./module-864.js";
import module858 from "./module-858.js";
import module1174 from "./module-1174.js";
import module1038 from "./module-1038.js";
import module1009 from "./module-1009.js";
import module973 from "./module-973.js";
import module954 from "./module-954.js";
import { getHostClusterName } from "./module-52.js";
import Module2443 from "./module-2443.js";
import module1570 from "./module-1570.js";
let i;
const P = {
    cpu_used: "node_cpu_usage",
    cpu_total: "node_cpu_total",
    cpu_utilisation: "node_cpu_utilisation",
    memory_used: "node_memory_usage_wo_cache",
    memory_total: "node_memory_total",
    memory_utilisation: "node_memory_utilisation",
    pod_used: "node_pod_running_count",
    pod_total: "node_pod_quota"
};
const A = observer(i = ((PureComponent_1)=>{
    module55(n, PureComponent_1);
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
    function n(e) {
        let a;
        module36(this, n);
        a = r.call(this, e);
        a.handleTypeChange = async (type)=>{
            await a.fetchData({
                type
            });
            a.setState({
                type
            });
        };
        a.fetchData = async (t)=>{
            let r;
            let n;
            let l;
            let cluster_1;
            let namespace;
            ({ type: r, ...n } = t);
            l = a.props;
            cluster_1 = l.cluster;
            namespace = l.namespace;
            await a.store[r].fetchList({
                cluster: cluster_1,
                type: r,
                namespace,
                ...n
            });
            if (a.hasMonitoring) {
                await a.monitoringStore.fetchMetrics({
                    cluster: cluster_1,
                    resources: a.store[r].list.data.map((e)=>e.name),
                    metrics: Object.values(P),
                    last: true
                });
            }
        };
        a.handleSelect = function(selectItem) {
            a.setState({
                selectItem
            });
        };
        a.handleCancel = function() {
            a.setState({
                selectItem: {}
            }, function() {
                a.props.onCancel();
            });
        };
        a.handleOK = function() {
            const onSelect = a.props.onSelect;
            const selectItem = a.state.selectItem;
            onSelect({
                "kubernetes.io/hostname": module26(selectItem, 'labels["kubernetes.io/hostname"]')
            });
        };
        a.renderRadio = function() {
            const type = a.state.type;
            if (a.edgeDisabled) {
                return <module186.RadioGroup mode="button" buttonWidth={120} value={type} onChange={a.handleTypeChange} size="small"><module186.RadioButton value="node">{t("CLUSTER_NODE_PL")}</module186.RadioButton><module186.RadioButton value="edgenode">{t("EDGE_NODE_PL")}</module186.RadioButton></module186.RadioGroup>;
            }
            return null;
        };
        a.state = {
            type: "node",
            selectItem: {}
        };
        const a_props = a.props;
        const { cluster, isEdgeWize } = a_props;
        a.nodeStore = isEdgeWize ? new module1038 : new module858;
        a.edgeNodeStore = isEdgeWize ? new module1009 : new module1174;
        a.monitoringStore = isEdgeWize ? new module954({
            cluster
        }) : new module973({
            cluster
        });
        a.store = {
            node: a.nodeStore,
            edgenode: a.edgeNodeStore
        };
        return a;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: async function() {
                await this.fetchData({
                    type: this.state.type
                });
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const state = this.state;
                const { type, selectItem } = state;
                const l = module14.toJS(this.store[type].list);
                const { data, total, page, isLoading } = l;
                const data_1 = module14.toJS(this.monitoringStore).data;
                if (this.hasMonitoring && module63(data_1)) {
                    return null;
                }
                return <div className={module1570.container}><div className={module1570.body}><module186.Alert className="margin-b8" message={t("WORKLOAD_SPECIFY_NODE_DESC")} hideIcon/>{this.renderRadio()}<div className={module1570.nodes}><Module864 data={data} total={total} page={page} loading={isLoading} onFetch={function(t) {
                    return _this.fetchData({
                        type,
                        ...t
                    });
                }}>{data.map((detail, a)=><Module2443 isEdgeWize={_this.props.isEdgeWize} key={`${detail.uid}${a}`} module={type} detail={detail} metricsData={data_1} onClick={_this.handleSelect} hasMonitoring={_this.hasMonitoring} selected={selectItem.uid === detail.uid}/>)}</Module864></div></div><div className={module1570.footer}><module186.Button onClick={this.handleCancel}>{t("CANCEL")}</module186.Button><module186.Button type="control" onClick={this.handleOK}>{t("OK")}</module186.Button></div></div>;
            }
        },
        {
            key: "edgeDisabled",
            get: function() {
                const cluster = this.props.cluster;
                const t = getHostClusterName();
                return globals.app.hasKSModule("kubeedge") && cluster === t;
            }
        },
        {
            key: "hasMonitoring",
            get: function() {
                const cluster = this.props.cluster;
                return globals.app.hasClusterModule(cluster, "whizard-monitoring");
            }
        }
    ]);
    return n;
})(PureComponent)) || i;
export default A;
