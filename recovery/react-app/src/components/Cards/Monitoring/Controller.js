import "unpacked/module-12.js";
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
import "unpacked/module-442.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import Module802 from "components/Base/Card";
import module450 from "unpacked/module-450.js";
import module26 from "unpacked/module-26.js";
import module60 from "unpacked/module-60.js";
import module63 from "unpacked/module-63.js";
import module1 from "unpacked/module-1.js";
import { Component } from "unpacked/module-553.js";
import { showNameAndAlias } from "utils/index";
import { startAutoRefresh, stopAutoRefresh } from "utils/monitoring";
import module3755 from "unpacked/module-3755.js";
import Module949 from "components/Cards/Monitoring/Controller/TimeSelector";
const N = ((Component_1)=>{
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.initParams = function(e = {}) {
            const a = e || {};
            const { times, step, createTime } = a;
            const u = {
                times,
                step
            };
            if (createTime) {
                const o = new Date(createTime).valueOf() / 1000;
                const i = Date.now() / 1000;
                const c = i - o;
                switch(true){
                    case c <= 1800:
                        u.times = 30;
                        u.step = "1m";
                        break;
                    case c <= 3600:
                        u.times = 60;
                        u.step = "1m";
                        break;
                    case c <= 18000:
                        u.times = 60;
                        u.step = "5m";
                }
            }
            t.params = u;
        };
        t.fetchData = function(e = {}) {
            const cluster = t.state.cluster;
            const r = {
                ...t.params,
                ...e
            };
            if (cluster) {
                r.cluster = cluster;
            }
            t.props.onFetch(r);
        };
        t.handleChange = function(e) {
            t.params = e;
            const enableAutoRefresh = !e.start && !e.end && t.props.enableAutoRefresh;
            t.setState({
                enableAutoRefresh,
                autoRefresh: false
            }, function() {
                stopAutoRefresh(module88(t));
                t.fetchData();
            });
        };
        t.handleClusterChange = function(cluster) {
            t.setState({
                cluster
            }, function() {
                t.fetchData();
            });
        };
        t.handleRefresh = function() {
            t.fetchData();
        };
        t.handleAutoRefresh = function() {
            t.setState({
                autoRefresh: !t.state.autoRefresh
            }, function() {
                if (t.state.autoRefresh) {
                    startAutoRefresh(module88(t));
                } else {
                    stopAutoRefresh(module88(t));
                }
            });
        };
        t.handleToggle = function(active) {
            t.setState({
                active
            });
        };
        t.state = {
            active: false,
            enableAutoRefresh: e.enableAutoRefresh,
            autoRefresh: false,
            cluster: module26(e, "clusters[0].name", "")
        };
        t.init();
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!(e.step === this.props.step && e.times === this.props.times && e.createTime === this.props.createTime)) {
                    this.initParams(this.props);
                    this.fetchData();
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                stopAutoRefresh(this);
            }
        },
        {
            key: "init",
            value: function() {
                this.initParams(this.props);
                this.fetchData();
            }
        },
        {
            key: "renderAutoRefresh",
            value: function() {
                const state = this.state;
                const { enableAutoRefresh, autoRefresh } = state;
                if (enableAutoRefresh) {
                    return <module186.Button className={module3755.button} type="control" icon={autoRefresh ? "pause" : "start"} iconType="light" onClick={this.handleAutoRefresh}/>;
                }
                return null;
            }
        },
        {
            key: "renderCustomActions",
            value: function() {
                return this.props.customAction || null;
            }
        },
        {
            key: "renderOperations",
            value: function() {
                const active = this.state.active;
                const params = this.params;
                const { step, times } = params;
                const closeBtn = this.props.closeBtn;
                return <div className={module3(module3755.operations, module31({}, module3755.active, active))}>{this.props.isFederated && <module186.Select key={this.state.cluster} prefixIcon=<module186.Icon name="cluster"/> className={module3755.clusters} value={this.state.cluster} options={this.clusters} onChange={this.handleClusterChange} showTip/>}<Module949 step={step} times={times} onChange={this.handleChange} onToggle={this.handleToggle}/>{this.renderAutoRefresh()}<module186.Button className={module3755.button} type="control" icon="refresh" iconType="light" onClick={this.handleRefresh}/>{this.renderCustomActions()}{closeBtn}</div>;
            }
        },
        {
            key: "renderTitle",
            value: function() {
                const e = this.props.title || t("MONITORING");
                return <div className={module3755.title}><span>{e}</span>{this.renderOperations()}</div>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                const children = this.props.children;
                if (module63(children) || module60(children) && module63(module450(children).filter((e)=>e))) {
                    return null;
                }
                return children;
            }
        },
        {
            key: "render",
            value: function() {
                const loading = this.props.loading;
                const active = this.state.active;
                return <module186.Loading spinning={loading}><Module802 className={module3(module3755.card, module31({}, module3755.showDropDown, active))} title={this.renderTitle()} empty={t("NO_MONITORING_DATA")} isEmpty={this.props.isEmpty}><div className={module3755.content}>{this.renderContent()}</div></Module802></module186.Loading>;
            }
        },
        {
            key: "clusters",
            get: function() {
                return this.props.clusters.map((e)=>({
                        label: showNameAndAlias(e.name || e, "cluster"),
                        value: e.name || e
                    }));
            }
        }
    ]);
    return r;
})(Component);
export default N;
N.propTypes = {
    title: module1.string,
    step: module1.string,
    times: module1.number,
    createTime: module1.string,
    onFetch: module1.func,
    loading: module1.bool,
    refreshing: module1.bool,
    isEmpty: module1.bool,
    enableAutoRefresh: module1.bool,
    customAction: module1.oneOfType([
        module1.node,
        module1.element
    ])
};
N.defaultProps = {
    step: "10m",
    times: 50,
    createTime: "",
    onFetch: function() {},
    loading: false,
    refreshing: false,
    isEmpty: false,
    enableAutoRefresh: true,
    customAction: ""
};
