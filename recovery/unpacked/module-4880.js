import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module61 from "./module-61.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import { withRouter } from "./module-47.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module875 from "./module-875.js";
import module1435 from "./module-1435.js";
import Module1963 from "./module-1963.js";
import { RadonDBAppId } from "./module-817.js";
import module4881 from "./module-4881.js";
let o;
let c;
o = inject("detailStore");
const T = withRouter(c = o(c = observer(c = ((Component_1)=>{
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
        e.store = new module1435;
        e.state = {
            currentMonitorDbNode: null,
            nodeRole: "kafka"
        };
        e.MainLable = {
            label: t("ALL_NODES"),
            value: "whole"
        };
        e.fetchData = function() {
            const e_props = e.props;
            const t_match = e_props.match;
            const app_id = e_props.detailStore.detail.app_id;
            e.store.fetchList({
                namespace: t_match.params.namespace,
                cluster: t_match.params.cluster,
                chi: t_match.params.id,
                app_id
            }).then(()=>{
                e.setState({
                    currentMonitorDbNode: e.store.data.find((t)=>t.name === module26(e.nodesOptions, "[0].value"))
                });
            });
        };
        e.switchItemShowMonitor = function(nodeRole) {
            const currentMonitorDbNode = e.store.data.find((e)=>e.name === nodeRole);
            if (currentMonitorDbNode) {
                e.setState({
                    currentMonitorDbNode,
                    nodeRole: module26(currentMonitorDbNode, "nodeRole", "")
                });
            } else {
                e.setState({
                    currentMonitorDbNode,
                    nodeRole
                });
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "switchShowMonitor",
            value: function(isShowMonitor) {
                this.setState({
                    ...this.state,
                    isShowMonitor
                });
            }
        },
        {
            key: "render",
            value: function() {
                const currentMonitorDbNode = this.state.currentMonitorDbNode;
                const length = this.store.data.filter((e)=>!e.noMonitoring).length;
                const r = module26(this.nodesOptions, "[0].value");
                const value = module26(currentMonitorDbNode, "name") || (r === "whole" ? r : this.state.nodeRole);
                return <div>{this.store.isLoading ? <module186.Loading className={module4881.loading}/> : currentMonitorDbNode || !currentMonitorDbNode && length !== this.nodesOptions.length ? <Module1963 monitorDbNode={currentMonitorDbNode} nodeRole={this.state.nodeRole} customSelect=<module186.Select className={module4881.pods} prefixIcon=<module186.Icon name="pod"/> options={this.nodesOptions} value={value} onChange={this.switchItemShowMonitor}/>/> : <Module875 title={t("NO_MONITORING_DATA")} module="monitor" desc=""/>}</div>;
            }
        },
        {
            key: "needMainAppId",
            get: function() {
                return [
                    RadonDBAppId.Elasticsearch,
                    RadonDBAppId.OpenSearch
                ];
            }
        },
        {
            key: "nodesOptions",
            get: function() {
                const app_id = this.props.detailStore.detail.app_id;
                const a = this.store.data.filter((e)=>!e.noMonitoring).map((e)=>({
                        label: e.name,
                        value: e.name
                    }));
                if (a.length > 0) {
                    if (this.needMainAppId.includes(app_id)) {
                        return [
                            this.MainLable
                        ].concat(module61(a.map((e)=>({
                                ...e,
                                label: e.label
                            }))));
                    }
                    if (app_id === RadonDBAppId.Kafka) {
                        return [
                            {
                                label: t("ALL_KAFKA_NODES"),
                                value: "kafka"
                            },
                            {
                                label: t("ALL_ZOOKEEPER_NODES"),
                                value: "zookeeper"
                            }
                        ].concat(module61(a.map((e)=>({
                                ...e,
                                label: e.label
                            }))));
                    }
                }
                return a;
            }
        }
    ]);
    return r;
})(Component)) || c) || c) || c;
export default T;
