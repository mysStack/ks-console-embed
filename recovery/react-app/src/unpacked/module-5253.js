import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-64.js";
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
import module3 from "unpacked/module-3.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import { inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import { getLocalTime } from "utils/index";
import { trigger } from "utils/action";
import { SEVERITY_LEVEL } from "configs/alerting/metrics/rule.config";
import { RESOURCE_METRICS_CONFIG } from "unpacked/module-924.js";
import { ReactComponent } from "unpacked/module-1231.js";
import module2001 from "unpacked/module-2001.js";
let o;
const k = {
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
const N = {
    Deployment: "DEPLOYMENTS_VALUES",
    StatefulSet: "STATEFULSETS_VALUES",
    DaemonSet: "DAEMONSETS_VALUES"
};
const A = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(n);
    function n(...o_1) {
        let e;
        module36(this, n);
        e = a.call(this, ...o_1);
        e.handleExpandClick = function() {
            const e_props = e.props;
            const t_index = e_props.index;
            e_props.onExpandClick(t_index);
        };
        e.renderIcon = function() {
            const e_props = e.props;
            const { status, isExpand } = e_props;
            const status_state = status.state;
            const i = e.disabled ? module2001.status_disabled : module2001[`status_${status_state}`];
            if (e.ruleType === "Custom") {
                return <div className={module3(module2001.headIcon, i)}>{isExpand ? <ReactComponent width={40} height={40}/> : <module186.Icon name="computing-setting" size={40}/>}</div>;
            }
            const u = Object.keys(e.metricThreshold)[0];
            const name = k[u] ?? "pod";
            return <div className={module3(module2001.headIcon, [
                module2001[`status_${status_state}`]
            ])}><module186.Icon type={isExpand ? "light" : "dark"} name={name} size={40}/></div>;
        };
        e.handleMonitor = function(t) {
            const e_props = e.props;
            const { rule, store, cluster, namespace, status } = e_props;
            e.trigger("alerting.rule.monitor", {
                rule,
                store,
                cluster,
                namespace,
                ruleStatus: status,
                expr: rule.expr
            });
            t.stopPropagation();
        };
        e.renderHead = function() {
            const e_props = e.props;
            const { status, rule } = e_props;
            const status_state = status.state;
            const l = e.severityConfig.filter((e)=>e.value === rule.severity)[0]?.label ?? "WARNING_ALERT";
            const c = e.disabled ? module2001.info_disabled : module2001[`info_${status_state}`];
            return <div className={module2001.head}>{e.renderIcon()}<div><div className={module2001.headLine}><div className={module2001.title}>{rule.alert}</div>{e.hasMonitoring && <module186.Tooltip content={t("VIEW_METRIC_DATA")}><img src="/assets/monitor.svg" onClick={e.handleMonitor}/></module186.Tooltip>}<div className={module3(module2001.severity, module2001[rule.severity])}>{t(l)}</div></div><div className={module3(module2001.statusLine, c)}>{(status_state !== "inactive" || e.disabled) && <module186.Icon name="information" size={16}/>}<div className={module2001.desc}>{e.disabled ? t("DISABLED") : C[status_state]}</div></div></div></div>;
        };
        e.renderMonitorTarget = function() {
            const rule = e.props.rule;
            if (e.ruleType === "Custom") {
                return <div className={module2001.target}/>;
            }
            const n = module26(rule, `exprBuilder.${e.monitorType}.names`, []);
            const r = module26(rule, `exprBuilder.${e.monitorType}.kind`);
            return <div className={module2001.target}><div className={module2001.title}>{e.monitorType === "node" ? t("NODES_VALUES", {
                values: n.join(",")
            }) : t(N[r], {
                values: n.join(",")
            })}</div><div className={module2001.desc}>{t("MONITORING_TARGETS")}</div></div>;
        };
        e.renderAlertRule = function() {
            const a = e.ruleType === "Custom";
            return <p><span className={module2001.label}>{a ? t("DURATION") : t("TRIGGER_CONDITION")}：</span><span>{e.ruleExpr}</span></p>;
        };
        e.renderExtraContent = function() {
            const e_props = e.props;
            const { rule, isExpand } = e_props;
            const o = module26(rule, "annotations.message", "");
            const u = module26(rule, "annotations.description", "-");
            const l = o !== "" ? o : u;
            return <div className={module3(module2001.itemExtra, module31({}, module2001.itemExtraShow, isExpand))}><div className={module2001.ms_content}>{e.renderAlertRule()}<p><span className={module2001.label}>{t("RULE_EXPRESSION")}:</span><span className={module2001.ruleExpr}>{rule.expr}</span></p></div><div className={module2001.ms_content}><p><span className={module2001.label}>{t("MESSAGE_SUMMARY")}:</span><span>{module26(rule, "annotations.summary", "")}</span></p><p><span className={module2001.label}>{t("MESSAGE_DETAILS")}:</span><span>{l}</span></p></div></div>;
        };
        e.renderTime = function() {
            const status = e.props.status;
            const n = module26(status, "lastEvaluation", false);
            return <div className={module2001.timeLabel}><span className={module3(module2001.time, module31({}, module2001.time_white, e.props.isExpand))}>{n ? getLocalTime(n).format("YYYY-MM-DD HH:mm:ss") : "-"}</span><div className={module2001.desc}>{t("RECENT_DETECT_TIME")}</div></div>;
        };
        return e;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const isExpand = this.props.isExpand;
                return <div className={module2001.item}><div className={module3(module2001.content, module31({}, module2001.expanded, isExpand))} onClick={this.handleExpandClick}>{this.renderHead()}{this.renderMonitorTarget()}{this.renderTime()}<module186.Icon name="chevron-down" type={isExpand ? "light" : ""} size={20}/></div>{this.renderExtraContent()}</div>;
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
                const n = module26(rule, "for", "");
                const r = n.slice(0, -1);
                if (a) {
                    return `${r}${T[n.slice(-1)]}`;
                }
                const o = Object.keys(this.metricThreshold)[0];
                const i = Object.keys(this.metricThreshold[o])[0];
                const u = `${o}:${i}`;
                const l = RESOURCE_METRICS_CONFIG[this.monitorType][u];
                const alterTypeText = t(`${l.label}`).replace(/[(（]%[)）]/g, "").replace(/\s$/, "");
                const reverser = l.ruleConfig.filter((e)=>e.name === "thresholds")[0].reverser;
                const comparator = module26(rule, `exprBuilder.${this.monitorType}.comparator`);
                const f = module26(rule, `exprBuilder.${this.monitorType}.metricThreshold.${o}.${i}`);
                const thresholds = reverser(Number(f));
                const unit = l.ruleConfig[1].unit === "core" ? thresholds === 1 ? t("CORE") : t("CORE_PL") : l.ruleConfig[1].unit;
                const durationValue = rule.for.slice(0, -1);
                const y = rule.for.slice(-1);
                if (unit === "%") {
                    return t({
                        s: "ALERT_RULE_TEXT_PERCENT_SECOND",
                        m: "ALERT_RULE_TEXT_PERCENT_MINUTE",
                        h: "ALERT_RULE_TEXT_PERCENT_HOUR"
                    }[y], {
                        alterTypeText,
                        comparator,
                        thresholds,
                        durationValue
                    });
                }
                return t({
                    s: "ALERT_RULE_TEXT_SECOND",
                    m: "ALERT_RULE_TEXT_MINUTE",
                    h: "ALERT_RULE_TEXT_HOUR"
                }[y], {
                    alterTypeText,
                    comparator,
                    thresholds,
                    unit,
                    durationValue
                });
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
    return n;
})(Component)) || o) || o) || o;
export default A;
