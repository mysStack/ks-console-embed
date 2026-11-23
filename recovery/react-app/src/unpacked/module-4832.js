import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
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
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module63 from "unpacked/module-63.js";
import module60 from "unpacked/module-60.js";
import module450 from "unpacked/module-450.js";
import { startAutoRefresh, stopAutoRefresh } from "utils/monitoring";
import module186 from "unpacked/module-186.js";
import Module802 from "components/Base/Card";
import Module949 from "components/Cards/Monitoring/Controller/TimeSelector";
import module4833 from "unpacked/module-4833.js";
const A = ((Component_1)=>{
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
            const c = {
                times,
                step
            };
            if (createTime) {
                const s = new Date(createTime).valueOf() / 1000;
                const l = Date.now() / 1000;
                const i = l - s;
                switch(true){
                    case i <= 1800:
                        c.times = 30;
                        c.step = "1m";
                        break;
                    case i <= 3600:
                        c.times = 60;
                        c.step = "1m";
                        break;
                    case i <= 18000:
                        c.times = 60;
                        c.step = "5m";
                }
            }
            t.params = c;
        };
        t.fetchData = function(e = {}) {
            const a = {
                ...t.params,
                ...e
            };
            t.props.onFetch(a);
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
            autoRefresh: false
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
                    return <module186.Button className={module4833.button} type="control" icon={autoRefresh ? "pause" : "start"} iconType="light" onClick={this.handleAutoRefresh}/>;
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
                return <div className={module3(module4833.operations, module31({}, module4833.active, active))}>{this.props.customSelect || null}<Module949 step={step} times={times} onChange={this.handleChange} onToggle={this.handleToggle}/>{this.renderAutoRefresh()}<module186.Button className={module4833.button} type="control" icon="refresh" iconType="light" onClick={this.handleRefresh}/>{this.renderCustomActions()}{closeBtn}</div>;
            }
        },
        {
            key: "renderTitle",
            value: function() {
                const e = this.props.title || t("MONITORING");
                return <div className={module4833.title}><span>{e}</span>{this.renderOperations()}</div>;
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
                return <module186.Loading style={{
                    zIndex: 0
                }} spinning={loading}><Module802 className={module3(module4833.card, module31({}, module4833.showDropDown, active))} title={this.renderTitle()} empty={loading ? " " : t("NO_MONITORING_DATA")} isEmpty={this.props.isEmpty}><div className={module4833.content}>{this.renderContent()}</div></Module802></module186.Loading>;
            }
        }
    ]);
    return r;
})(Component);
export default A;
A.propTypes = {
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
    ]),
    customSelect: module1.oneOfType([
        module1.node,
        module1.element
    ])
};
A.defaultProps = {
    step: "10m",
    times: 30,
    createTime: "",
    onFetch: function() {},
    loading: false,
    refreshing: false,
    isEmpty: false,
    enableAutoRefresh: true,
    customAction: ""
};
