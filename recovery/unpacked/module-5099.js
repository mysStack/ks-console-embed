import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-109.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import Module922 from "./module-922.js";
import { getPipelineStatus } from "./module-434.js";
import module5100 from "./module-5100.js";
import { formatUsedTime } from "./module-52.js";
import module1989 from "./module-1989.js";
let a;
let o;
const O = observer((o = ((Component_1)=>{
    module55(r, Component_1);
    var t = ((e)=>{
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
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(r);
    function r(e) {
        let n;
        module36(this, r);
        n = t.call(this, e);
        n.handleExpandByFail = function() {
            const step = n.props.step;
            if (step && step.result !== "SUCCESS") {
                n.toggleExpand();
            }
        };
        n.handleRefresh = function() {
            const step = n.props.step;
            const hasMore = n.store.stepLogData.hasMore;
            if (n.state.isExpand && (hasMore || step.state !== "FINISHED")) {
                n.getLog();
            }
        };
        n.toggleExpand = function() {
            const log = n.store.stepLogData.log;
            const isExpand = n.state.isExpand;
            if (!(isExpand || log)) {
                n.getLog();
            }
            n.setState({
                isExpand: !isExpand
            });
        };
        n.state = {
            isExpand: false
        };
        n.store = new module5100;
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.timer = setInterval(this.handleRefresh, 4000);
                this.handleExpandByFail();
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.state.isExpand && e.refreshFlag !== this.props.refreshFlag) {
                    this.store.handleResetStepLog();
                    this.getLog();
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                clearInterval(this.timer);
            }
        },
        {
            key: "getLog",
            value: function() {
                const props = this.props;
                const { step, params, nodeId } = props;
                this.store.getStepLog({
                    ...params,
                    nodeId,
                    stepId: step.id
                });
            }
        },
        {
            key: "render",
            value: function() {
                const step = this.props.step;
                const log = this.store.stepLogData.log;
                return <div className={module1989.LogItem}><div className={module3(module1989.LogItem__title)} onClick={this.toggleExpand}><module186.Icon name={this.state.isExpand ? "caret-down" : "caret-right"} size={16}/>{step.displayName}<span className={module1989.logitem_status}><span>{step.durationInMillis ? formatUsedTime(step.durationInMillis) : "-"}</span><Module922 {...getPipelineStatus(step)}/></span></div><div>{this.state.isExpand ? <pre className={module1989.LogItem_content}>{log}</pre> : null}</div></div>;
            }
        }
    ]);
    return r;
})(Component), module49(o.prototype, "getLog", [
    module14.action
], Object.getOwnPropertyDescriptor(o.prototype, "getLog"), o.prototype), a = o)) || a;
export default O;
