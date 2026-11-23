import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-73.js";
import "./module-16.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import Module791 from "./module-791.js";
import { silentPolicyTypes } from "./module-72.js";
import { formatTimeToHourMinuteSecond, getDateStr, getWeekLabelList } from "./module-467.js";
import { getLocalTime } from "./module-52.js";
import module5171 from "./module-5171.js";
let o;
const E = inject("detailStore")(o = observer(o = ((Component_1)=>{
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
    function r(...u) {
        let e;
        module36(this, r);
        e = a.call(this, ...u);
        e.renderItem = function(a) {
            return <div className={module5171.itemWrapper}><div><div className={module5171.item}><Module791 icon="volume-off-duotone" title={t(Object.values(silentPolicyTypes).find((e)=>e.value === a?.type)?.name ?? "-")} description={t("TYPE")}/>{a.type !== 1 && <Module791 title={e.getTime(a)} description={e.getTimeLabel(a)}/>}</div></div></div>;
        };
        return e;
    }
    module37(r, [
        {
            key: "getTime",
            value: function(e) {
                if (e.isCron) {
                    return e.cron;
                }
                if (e.type === 1) {
                    return null;
                }
                if (e.type === 2) {
                    return `${getDateStr(getLocalTime(e.dateRange[0]))} – ${getDateStr(getLocalTime(e.dateRange[1]))}`;
                }
                const a = formatTimeToHourMinuteSecond(e.timeRange[0]);
                const r = formatTimeToHourMinuteSecond(e.timeRange[1]);
                if (e.timeType === 1) {
                    return t.html("EVERY_DAY_TIMERANGE", {
                        timeRange: `${a} – ${r}`
                    });
                }
                if (e.timeType === 2) {
                    return t.html("EVERY_WEEK_DAYS_TIMERANGE", {
                        days: getWeekLabelList(e.week).join(", "),
                        timeRange: `${a} – ${r}`
                    });
                }
                if (e.timeType === 3) {
                    return t.html("EVERY_MONTH_DAYS_TIMERANGE", {
                        days: e.month.toJS().join(", "),
                        timeRange: `${a} – ${r}`
                    });
                }
            }
        },
        {
            key: "getTimeLabel",
            value: function(e) {
                if (e.isCron) {
                    return t("CRON_EXPRESSION");
                }
                e.type === 3 && e.timeType;
                return t("TIME_RANGE_SCAP");
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module5171.wrapper}><div className={module5171.title}>{t("SILENCE_TIME")}</div><div className={module5171.content}>{this.renderItem(this.props.detailStore.detail)}</div></div>;
            }
        }
    ]);
    return r;
})(Component)) || o) || o;
export default E;
