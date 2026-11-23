import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-64.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-45.js";
import "unpacked/module-442.js";
import "unpacked/module-2766.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module243 from "unpacked/module-243.js";
import { getMsFromTimeAlias, translateTimeAlias } from "utils/time";
import Module2769 from "components/Modals/CustomMonitoring/components/TimeRangeSelect";
import { recentTimeRange } from "unpacked/module-1634.js";
let i;
const E = (e)=>new Date(e).toISOString();
const y = inject("monitoringStore")(i = observer(i = ((Component_1)=>{
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
        e.handleQuickSelect = function(t) {
            e.props.monitoringStore.changeTimeRange(t);
        };
        e.handeCustomSelect = function({ startTime, endTime }) {
            e.props.monitoringStore.changeTimeRange({
                from: E(startTime),
                to: E(endTime)
            });
        };
        e.options = recentTimeRange.map((e)=>({
                label: `${t("LAST")} ${translateTimeAlias(e)}`,
                value: {
                    from: `now-${e}`,
                    to: "now"
                }
            }));
        e.format = function() {
            const time = e.props.monitoringStore.time;
            const { to, from } = time;
            if (to === "now") {
                return `${t("LAST")} ${translateTimeAlias(from.replace("now-", ""))}`;
            }
            return `${module243(from).format("YYYY-MM-DD HH:mm:ss")} ~ ${module243(to).format("YYYY-MM-DD HH:mm:ss")}`;
        };
        return e;
    }
    module37(r, [
        {
            key: "generateTimeRange",
            value: function() {
                const time = this.props.monitoringStore.time;
                const { from, to } = time;
                if (to === "now") {
                    return {
                        startTime: Date.now() - getMsFromTimeAlias(from.replace("now-", "")),
                        endTime: Date.now()
                    };
                }
                return {
                    startTime: new Date(from).valueOf(),
                    endTime: new Date(to).valueOf()
                };
            }
        },
        {
            key: "render",
            value: function() {
                const time = this.props.monitoringStore.time;
                const { from, to } = time;
                return <Module2769 key={from + to} recentOpts={this.options} timeRange={this.generateTimeRange()} onRecentSelect={this.handleQuickSelect} onCustomSubmit={this.handeCustomSelect} format={this.format}/>;
            }
        }
    ]);
    return r;
})(Component)) || i) || i;
export default y;
