import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-190.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-64.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import Module790 from "components/Base/Panel";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import { Component } from "unpacked/module-553.js";
import module837 from "unpacked/module-837.js";
import { Link } from "unpacked/module-433.js";
import module1436 from "unpacked/module-1436.js";
import { coreUnitTS, showNameAndAlias } from "utils/index";
import { getSuitableUnit, getValueByUnit } from "utils/monitoring";
import module4949 from "unpacked/module-4949.js";
let o;
const b = {
    workload_cpu_usage: "cpu",
    workload_memory_usage_wo_cache: "memory",
    workload_net_bytes_transmitted: "bandwidth",
    workload_net_bytes_received: "bandwidth"
};
const C = inject("rootStore")(o = observer(o = ((Component_1)=>{
    module55(a, Component_1);
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
            let r;
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(e) {
        let n;
        module36(this, a);
        n = r.call(this, e);
        n.clusterRenderer = function(e) {
            return <span>{t("CLUSTER_VALUE", {
                value: showNameAndAlias(e.value, "cluster", {}, true)
            })}</span>;
        };
        n.store = new module1436({
            cluster: e.cluster,
            namespaces: module26(e.match, "params.namespace")
        });
        return n;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.store.fetchAll();
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!(module837(e.match.params, this.props.match.params) && this.props.cluster === e.cluster)) {
                    this.store.cluster = this.props.cluster;
                    this.store.namespaces = module26(this.props.match, "params.namespace");
                    this.store.fetchAll();
                }
            }
        },
        {
            key: "getWorkloadLink",
            value: function(e) {
                const e_workload_type = e.workload_type;
                if (e_workload_type !== "Pod") {
                    const r = e.workload;
                    const a = (r === undefined ? "" : r).replace(/\w+:/, "");
                    const n = this.props.match.params;
                    const { workspace, namespace } = n;
                    return ({
                        deployment: `/${workspace}/federatedprojects/${namespace}/deployments/${a}`,
                        statefulset: `/${workspace}/federatedprojects/${namespace}/statefulsets/${a}`,
                        daemonset: `/${workspace}/federatedprojects/${namespace}/daemonsets/${a}`
                    })[e_workload_type];
                }
            }
        },
        {
            key: "renderHeader",
            value: function() {
                const props = this.props;
                const { cluster, clusters, onClusterChange } = props;
                return <div className={module4949.header}><module186.Select className={module4949.select} value={cluster} options={clusters} onChange={onClusterChange} valueRenderer={this.clusterRenderer} showTip/><module186.Select className={module4949.select} value={this.store.sort_metric} onChange={this.store.changeSortMetric} options={this.options}/></div>;
            }
        },
        {
            key: "renderEmpty",
            value: function() {
                return <div className={module4949.empty}><module186.Icon name="backup" size={32}/><div>{t("NO_DATA")}</div></div>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                const _this = this;
                const r = module14.toJS(this.store.data);
                if (!this.store.isLoading && module63(r)) {
                    return this.renderEmpty();
                }
                return <div className={module4949.content}>{r.slice(0, 5).map((a)=>{
                    const o = {
                        deployment: "backup",
                        dtatefulset: "stateful-set",
                        dataaemonset: "deamon-set",
                        pod: "pod",
                        default: "backup"
                    };
                    const to = _this.getWorkloadLink(a);
                    const u = a.workload.replace(/\w+:/, "");
                    const l = 100 * a[_this.store.sort_metric] / r[0][_this.store.sort_metric];
                    const i = getSuitableUnit(a[_this.store.sort_metric], b[_this.store.sort_metric]);
                    const s = getValueByUnit(a[_this.store.sort_metric], i) || 0;
                    const d = coreUnitTS(s, i);
                    return <div className={module4949.app} key={`${a.workload_type}-${u}`}><div className={module4949.appContent}><module186.Icon name={o[a.workload_type] || o.Default} type="dark" size={40}/><div className={module4949.text}><div className="relative" data-tooltip={u}><div>{to ? <Link to={to}>{u}</Link> : u}</div></div><p>{t(a.workload_type?.toUpperCase())}</p></div><div className={module4949.value}>{s}<span style={{
                        fontSize: 12
                    }}> {t(d)}</span></div></div><div className={module4949.background} style={{
                        width: `${l.toFixed(2)}%`
                    }}/></div>;
                })}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <Module790 className={module4949.wrapper} title={t("TOP_5_FOR_RESOURCE_USAGE")}>{this.renderHeader()}{this.renderContent()}</Module790>;
            }
        },
        {
            key: "options",
            get: function() {
                return this.store.sort_metric_options.map((e)=>({
                        value: e,
                        label: t(`SORT_BY_${e.toUpperCase()}`)
                    }));
            }
        }
    ]);
    return a;
})(Component)) || o) || o;
export default C;
