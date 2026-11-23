import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-27.js";
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
import module61 from "./module-61.js";
import "./module-31.js";
import "./module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { PureComponent } from "./module-553.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import Module864 from "components/Base/ScrollLoad";
import module854 from "./module-854.js";
import module954 from "./module-954.js";
import module858 from "stores/node";
import Module2445 from "./module-2445.js";
import module1571 from "./module-1571.js";
let i;
const R = {
    cpu_used: "node_cpu_usage",
    cpu_total: "node_cpu_total",
    cpu_utilisation: "node_cpu_utilisation",
    memory_used: "node_memory_usage_wo_cache",
    memory_total: "node_memory_total",
    memory_utilisation: "node_memory_utilisation",
    pod_used: "node_pod_running_count",
    pod_total: "node_pod_quota"
};
const I = observer(i = ((PureComponent_1)=>{
    module55(r, PureComponent_1);
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.init = async function e() {
            await t.fetchNodeGroupData();
            await t.fetchData();
        };
        t.fetchNodeGroupData = async function e() {
            await t.nodeGroupStore.fetchList({
                cluster: t.props.cluster,
                limit: "-1",
                page: 1,
                labelSelector: `apps.edgewize.io/namespace-${t.props.namespace}`
            });
        };
        t.fetchData = async function e() {
            let cluster_1;
            let r;
            let n;
            let l;
            let u;
            const i = arguments;
            cluster_1 = t.props.cluster;
            r = t.state.nodeGroup;
            n = i.length;
            l = new Array(n);
            for(u = 0; u < n; u++){
                l[u] = i[u];
            }
            await t.nodeStore.fetchList({
                cluster: cluster_1,
                nodeGroup: r,
                type: "edgenode",
                ...l
            });
            await t.monitoringStore.fetchMetrics({
                cluster: cluster_1,
                name: r,
                resources: t.nodeGroupStore.list.data.map((e)=>e.name),
                metrics: Object.values(R),
                last: true
            });
        };
        t.handleSelect = function(selectItem) {
            t.setState({
                selectItem
            });
        };
        t.handleCancel = function() {
            t.setState({
                selectItem: {}
            }, function() {
                t.props.onCancel();
            });
        };
        t.handleOK = function() {
            const onSelect = t.props.onSelect;
            const selectItem = t.state.selectItem;
            onSelect({
                "kubernetes.io/hostname": module26(selectItem, 'labels["kubernetes.io/hostname"]')
            });
        };
        t.handleNodeGroupSelect = function(nodeGroup) {
            t.setState({
                nodeGroup
            }, function() {
                t.fetchData();
            });
        };
        t.renderSelect = function() {
            const nodeGroup = t.state.nodeGroup;
            return <module186.Select options={t.options} onChange={t.handleNodeGroupSelect} value={nodeGroup} defaultValue="" style={{
                maxWidth: "none"
            }}/>;
        };
        t.state = {
            selectItem: {},
            nodeGroup: ""
        };
        const cluster = t.props.cluster;
        t.monitoringStore = new module954({
            cluster
        });
        t.nodeGroupStore = new module854;
        t.nodeStore = new module858;
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.init();
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const selectItem = this.state.selectItem;
                const r = module14.toJS(this.nodeStore.list);
                const { data, total, page, isLoading } = r;
                const data_1 = module14.toJS(this.monitoringStore).data;
                if (module63(data_1)) {
                    return null;
                }
                return <div className={module1571.container}><div className={module1571.body}><module186.Alert className="margin-b8" message={t("WORKLOAD_SPECIFY_NODE_GROUP_NODE_DESC")} hideIcon/>{this.renderSelect()}<div className={module1571.nodes}><Module864 data={data} total={total} page={page} loading={isLoading} onFetch={function(t) {
                    return _this.fetchData({
                        ...t
                    });
                }}>{data.map((detail, r)=><Module2445 key={`${detail.uid}${r}`} detail={detail} metricsData={data_1} onClick={_this.handleSelect} selected={selectItem.uid === detail.uid}/>)}</Module864></div></div><div className={module1571.footer}><module186.Button onClick={this.handleCancel}>{t("CANCEL")}</module186.Button><module186.Button type="control" onClick={this.handleOK}>{t("OK")}</module186.Button></div></div>;
            }
        },
        {
            key: "options",
            get: function() {
                const r = this.nodeGroupStore.list.data?.map(function(e) {
                    const t = module26(e._originData, 'metadata.labels["apps.edgewize.io/nodes-count"]');
                    return {
                        label: e.description ? `${e.name}(${e.description})` : e.name,
                        value: e.name,
                        disabled: Number(t) === 0
                    };
                }) ?? [];
                return [
                    {
                        label: t("ALL_NODES"),
                        value: ""
                    }
                ].concat(module61(r));
            }
        }
    ]);
    return r;
})(PureComponent)) || i;
export default I;
