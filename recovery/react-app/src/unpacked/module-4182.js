import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import { SEVERITY_LEVEL } from "configs/alerting/metrics/rule.config";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import { ALL_METRICS_CONFIG } from "unpacked/module-924.js";
import { inject, observer } from "unpacked/module-239.js";
import { trigger } from "utils/action";
import { getLocalTime } from "utils/index";
import { ReactComponent } from "unpacked/module-1231.js";
import module1850 from "unpacked/module-1850.js";
let u;
const R = {
    cpu: "cpu",
    pod: "pod",
    memory: "memory",
    disk: "storage",
    network: "network"
};
const T = {
    s: t("SECONDS"),
    m: t("MINUTES"),
    h: t("HOURS")
};
const C = {
    disabled: t("DISABLED"),
    firing: t("ALERT_RULE_FIRING"),
    inactive: t("ALERT_RULE_INACTIVE"),
    pending: t("ALERT_RULE_PENDING")
};
const A = inject("rootStore")(u = observer(u = trigger(u = ((Component_1)=>{
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.handleExpandClick = function() {
            const e_props = e.props;
            const t_index = e_props.index;
            e_props.onExpandClick(t_index);
        };
        e.renderIcon = function() {
            const e_props = e.props;
            const { status, isExpand } = e_props;
            const status_state = status.state;
            const l = e.disabled ? module1850.status_disabled : module1850[`status_${status_state}`];
            if (e.ruleType === "Custom") {
                return <div className={module3(module1850.headIcon, l)}>{isExpand ? <ReactComponent width={40} height={40}/> : <module186.Icon name="computing-setting" size={40}/>}</div>;
            }
            const o = Object.keys(e.metricThreshold)[0];
            const name = R[o] ?? "pod";
            return <div className={module3(module1850.headIcon, [
                module1850[`status_${status_state}`]
            ])}><module186.Icon type={isExpand ? "light" : "dark"} name={name} size={40}/></div>;
        };
        e.handleMonitor = function(t) {
            const e_props = e.props;
            const { rule, store, cluster, namespace } = e_props;
            e.trigger("alerting.rule.monitor", {
                rule,
                store,
                cluster,
                namespace,
                expr: rule.expr
            });
            t.stopPropagation();
        };
        e.renderHead = function() {
            const e_props = e.props;
            const { status, rule } = e_props;
            const status_state = status.state;
            const c = e.severityConfig.filter((e)=>e.value === rule.severity)[0]?.label ?? "WARNING_ALERT";
            const i = e.disabled ? module1850.info_disabled : module1850[`info_${status_state}`];
            return <div className={module1850.head}>{e.renderIcon()}<div><div className={module1850.headLine}><div className={module1850.title}>{rule.alert}</div>{e.hasMonitoring && <module186.Tooltip content={t("VIEW_METRIC_DATA")}><img src="/assets/monitor.svg" onClick={e.handleMonitor}/></module186.Tooltip>}<div className={module3(module1850.severity, module1850[rule.severity])}>{t(c)}</div></div><div className={module3(module1850.statusLine, i)}>{(status_state !== "inactive" || e.disabled) && <module186.Icon name="information" size={16}/>}<div className={module1850.desc}>{e.disabled ? t("DISABLED") : C[status_state]}</div></div></div></div>;
        };
        e.renderMonitorTarget = function() {
            const rule = e.props.rule;
            if (e.ruleType === "Custom") {
                return <div className={module1850.target}/>;
            }
            const r = module26(rule, `exprBuilder.${e.monitorType}.names`, []);
            return <div className={module1850.target}><div className={module1850.title}>{t(`${e.monitorType.toUpperCase()}`)}: {r.join(",")}</div><div className={module1850.desc}>{t("MONITORING_TARGETS")}</div></div>;
        };
        e.renderAlertRule = function() {
            const a = e.ruleType === "Custom";
            return <p><span className={module1850.label}>{a ? t("DURATION") : t("ALERTING_RULE")}：</span><span>{e.ruleExpr}</span></p>;
        };
        e.renderTime = function() {
            const status = e.props.status;
            const r = module26(status, "lastEvaluation", false);
            return <div className={module1850.timeLabel}><span className={module3(module1850.time, module31({}, module1850.time_white, e.props.isExpand))}>{r ? getLocalTime(r).format("YYYY-MM-DD HH:mm:ss") : "-"}</span><div className={module1850.desc}>{t("RECENT_DETECT_TIME")}</div></div>;
        };
        e.renderExtraContent = function() {
            const e_props = e.props;
            const { rule, isExpand } = e_props;
            return <div className={module3(module1850.itemExtra, module31({}, module1850.itemExtraShow, isExpand))}><div className={module1850.ms_content}>{e.renderAlertRule()}<p><span className={module1850.label}>{t("RULE_EXPRESSION")}:</span><span className={module1850.ruleExpr}>{rule.expr}</span></p></div><div className={module1850.ms_content}><p><span className={module1850.label}>{t("MESSAGE_SUMMARY")}:</span><span>{module26(rule, "annotations.summary", "")}</span></p><p><span className={module1850.label}>{t("MESSAGE_DETAILS")}:</span><span>{module26(rule, "annotations.message", "-")}</span></p></div></div>;
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const isExpand = this.props.isExpand;
                return <div className={module1850.item}><div className={module3(module1850.content, module31({}, module1850.expanded, isExpand))} onClick={this.handleExpandClick}>{this.renderHead()}{this.renderMonitorTarget()}{this.renderTime()}<module186.Icon name="chevron-down" type={isExpand ? "light" : ""} size={20}/></div>{this.renderExtraContent()}</div>;
            }
        },
        {
            key: "ruleType",
            get: function() {
                const rule = this.props.rule;
                const t = module26(rule, "exprBuilder", {});
                if (module63(t)) {
                    return "Custom";
                }
                return "Template";
            }
        },
        {
            key: "monitorType",
            get: function() {
                const rule = this.props.rule;
                return Object.keys(module26(rule, "exprBuilder", {}))[0];
            }
        },
        {
            key: "severityConfig",
            get: function() {
                return SEVERITY_LEVEL.map((e)=>({
                        value: e.value,
                        label: e.label
                    }));
            }
        },
        {
            key: "resourceType",
            get: function() {
                const rule = this.props.rule;
                return Object.keys(rule.exprBuilder)[0];
            }
        },
        {
            key: "metricThreshold",
            get: function() {
                const rule = this.props.rule;
                return module26(rule.exprBuilder[this.resourceType], "metricThreshold", {});
            }
        },
        {
            key: "disabled",
            get: function() {
                const rule = this.props.rule;
                return JSON.parse(module26(rule, "disable", "false"));
            }
        },
        {
            key: "ruleExpr",
            get: function() {
                const rule = this.props.rule;
                const a = this.ruleType === "Custom";
                if (!rule.for) {
                    return "-";
                }
                const r = module26(rule, "for", "");
                const n = r.slice(0, -1);
                const u = r.slice(-1);
                if (a) {
                    return `${n}${T[u]}`;
                }
                const l = Object.keys(this.metricThreshold)[0];
                const o = Object.keys(this.metricThreshold[l])[0];
                const label = ALL_METRICS_CONFIG[`${l}:${o}`].label;
                const i = module26(rule, `exprBuilder.${this.monitorType}.comparator`);
                return `${t(label)} ${i} ${n}${T[u]}`;
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
    return r;
})(Component)) || u) || u) || u;
export default A;
