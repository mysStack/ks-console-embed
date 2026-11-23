import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-97.js";
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
import module61 from "./module-61.js";
import "./module-41.js";
import "./module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module875 from "components/Tables/Base/Empty";
import Module788 from "components/Base/Modal";
import Module864 from "components/Base/ScrollLoad";
import { hideGPUByLicense } from "utils/index";
import { getSuitableValue } from "utils/monitoring";
import { MetricTypes } from "pages/clusters/projects";
import module854 from "./module-854.js";
import module970 from "./module-970.js";
import module1196 from "./module-1196.js";
import Module3021 from "./module-3021.js";
import module3023 from "./module-3023.js";
let c;
const w = observer(c = ((Component_1)=>{
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
        n.fetchData = async (t)=>{
            await n.store.fetchList({
                ...t,
                cluster: n.cluster,
                type: "user"
            });
            await n.monitoringStore.fetchMetrics({
                cluster: n.cluster,
                resources: n.store.list.data.map((e)=>e.name),
                metrics: Object.values(hideGPUByLicense(MetricTypes, n.cluster)),
                last: true
            });
        };
        n.fetchGroupData = async function e() {
            let t;
            let group;
            let cluster;
            t = n.props;
            group = t.group;
            cluster = t.cluster;
            await n.groupStore.fetchChildResource({
                kind: "namespaces",
                cluster,
                group,
                limit: 9999
            });
            n.setState({
                alreadyBound: n.groupStore.list.data.map((e)=>({
                        name: e.name
                    }))
            });
        };
        n.handleSearch = function(name) {
            n.fetchData({
                name
            });
        };
        n.handleRefresh = function() {
            n.fetchData();
        };
        n.handleOnEnter = function(e) {
            const onChange = n.props.onChange;
            localStorage.setItem(`${globals.user.username}-cluster`, e);
            if (onChange) {
                onChange(e);
            }
        };
        n.handleOk = function() {
            const checkedList = n.state.checkedList;
            n.props.onOk(checkedList);
        };
        n.renderEmpty = function() {
            return <Module875 icon="project" title={t("NODE_GROUP_PROJECT_EMPTY")} desc={t("BOUND_A_PROJECT_FOR_NODE_GROUP")}/>;
        };
        n.handleOnCheck = function(e, t) {
            if (t) {
                n.setState(function(t) {
                    return {
                        checkedList: [].concat(module61(t.checkedList), [
                            e
                        ])
                    };
                });
            } else {
                n.setState(function(t) {
                    return {
                        checkedList: t.checkedList.filter((t)=>t.uid !== e.uid)
                    };
                });
            }
        };
        n.getLastValue = function(e, t) {
            const data = n.monitoringStore.data;
            const r = (module26(data, `${t}.data.result`) || []).find((t)=>module26(t, "metric.namespace") === e.name);
            return module26(r, "value[1]", 0);
        };
        n.store = new module970;
        n.monitoringStore = new module1196;
        n.groupStore = new module854;
        n.state = {
            alreadyBound: [],
            checkedList: []
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchGroupData();
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { visible, onCancel } = props;
                const list = this.store.list;
                const { data, total, page, isLoading } = list;
                const state = this.state;
                const { checkedList, alreadyBound } = state;
                const value = module26(this.store.list, "filters.name");
                const isLoading_1 = this.monitoringStore.isLoading;
                return <Module788 bodyClassName={module3023.body} visible={visible} onCancel={onCancel} onOk={this.handleOk} width={960} title={t("BOUND_PROJECT_PL")}><div className={module3023.content}><div className={module3023.bar}><module186.Columns><module186.Column><module186.InputSearch value={value} placeholder={t("SEARCH_BY_NAME")} onSearch={this.handleSearch}/></module186.Column><module186.Column className="is-narrow"><module186.Button icon="refresh" type="flat" onClick={this.handleRefresh}/></module186.Column></module186.Columns></div><div className={module3023.list}><Module864 wrapperClassName={module3023.listWrapper} data={module14.toJS(data)} total={total} page={page} loading={isLoading || isLoading_1} onFetch={this.fetchData} empty={this.renderEmpty()}>{data.map((t)=><Module3021 key={t.uid} data={t} metricData={{
                        cpuUsage: getSuitableValue(_this.getLastValue(t, MetricTypes.cpu), "cpu", "-"),
                        memoryUsage: getSuitableValue(_this.getLastValue(t, MetricTypes.memory), "memory", "-"),
                        podCount: _this.getLastValue(t, MetricTypes.pod)
                    }} disabled={alreadyBound.some((e)=>e.name === t.name)} checked={[].concat(module61(checkedList), module61(alreadyBound)).some((e)=>e.name === t.name)} onCheck={_this.handleOnCheck}/>)}</Module864></div></div></Module788>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.cluster;
            }
        }
    ]);
    return r;
})(Component)) || c;
export default w;
