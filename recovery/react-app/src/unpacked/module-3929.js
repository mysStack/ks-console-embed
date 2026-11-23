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
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import { SEVERITY_LEVEL } from "configs/alerting/metrics/rule.config";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import { RESOURCE_METRICS_CONFIG } from "unpacked/module-924.js";
import { getLocalTime } from "utils/index";
import { inject, observer } from "unpacked/module-239.js";
import { trigger } from "utils/action";
import { ReactComponent } from "unpacked/module-1231.js";
import module1834 from "unpacked/module-1834.js";
let l;
const C = {
    cpu: "cpu",
    pod: "pod",
    memory: "memory",
    disk: "storage",
    network: "network"
};
const D = {
    s: t("SECONDS"),
    m: t("MINUTES"),
    h: t("HOURS")
};
const k = {
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
const T = inject("rootStore")(l = observer(l = trigger(l = ((Component_1)=>{
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.handleExpandClick = function() {
            const e_props = e.props;
            const t_index = e_props.index;
            e_props.onExpandClick(t_index);
        };
        e.renderIcon = function() {
            const e_props = e.props;
            const { status, isExpand } = e_props;
            const status_state = status.state;
            const u = e.disabled ? module1834.status_disabled : module1834[`status_${status_state}`];
            if (e.ruleType === "Custom") {
                return <div className={module3(module1834.headIcon, u)}>{isExpand ? <ReactComponent width={40} height={40}/> : <module186.Icon name="computing-setting" size={40}/>}</div>;
            }
            const o = Object.keys(e.metricThreshold)[0];
            const name = C[o] ?? "pod";
            return <div className={module3(module1834.headIcon, [
                module1834[`status_${status_state}`]
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
            const i = e.severityConfig.filter((e)=>e.value === rule.severity)[0]?.label ?? "WARNING_ALERT";
            const c = e.disabled ? module1834.info_disabled : module1834[`info_${status_state}`];
            return <div className={module1834.head}>{e.renderIcon()}<div><div className={module1834.headLine}><div className={module1834.title}>{rule.alert}</div>{e.hasMonitoring && <module186.Tooltip content={t("VIEW_METRIC_DATA")}><img src="/assets/monitor.svg" onClick={e.handleMonitor}/></module186.Tooltip>}<div className={module3(module1834.severity, module1834[rule.severity])}>{t(i)}</div></div><div className={module3(module1834.statusLine, c)}>{(status_state !== "inactive" || e.disabled) && <module186.Icon name="information" size={16}/>}<div className={module1834.desc}>{e.disabled ? t("DISABLED") : k[status_state]}</div></div></div></div>;
        };
        e.renderMonitorTarget = function() {
            const rule = e.props.rule;
            if (e.ruleType === "Custom") {
                return <div className={module1834.target}/>;
            }
            const r = module26(rule, `exprBuilder.${e.monitorType}.names`, []);
            const n = module26(rule, `exprBuilder.${e.monitorType}.kind`);
            return <div className={module1834.target}><div className={module1834.title}>{e.monitorType === "node" ? t("NODES_VALUES", {
                values: r.join(",")
            }) : t(N[n], {
                values: r.join(",")
            })}</div><div className={module1834.desc}>{t("MONITORING_TARGETS")}</div></div>;
        };
        e.renderAlertRule = function() {
            const a = e.ruleType === "Custom";
            return <p><span className={module1834.label}>{a ? t("DURATION") : t("TRIGGER_CONDITION")}：</span><span>{e.ruleExpr}</span></p>;
        };
        e.renderExtraContent = function() {
            const e_props = e.props;
            const { rule, isExpand } = e_props;
            const l = module26(rule, "annotations.message", "");
            const o = module26(rule, "annotations.description", "-");
            const i = l !== "" ? l : o;
            return <div className={module3(module1834.itemExtra, module31({}, module1834.itemExtraShow, isExpand))}><div className={module1834.ms_content}>{e.renderAlertRule()}<p><span className={module1834.label}>{t("RULE_EXPRESSION")}:</span><span className={module1834.ruleExpr}>{rule.expr}</span></p></div><div className={module1834.ms_content}><p><span className={module1834.label}>{t("MESSAGE_SUMMARY")}:</span><span>{module26(rule, "annotations.summary", "")}</span></p><p><span className={module1834.label}>{t("MESSAGE_DETAILS")}:</span><span>{i}</span></p></div></div>;
        };
        e.renderTime = function() {
            const status = e.props.status;
            const r = module26(status, "lastEvaluation", false);
            return <div className={module1834.timeLabel}><span className={module3(module1834.time, module31({}, module1834.time_white, e.props.isExpand))}>{r ? getLocalTime(r).format("YYYY-MM-DD HH:mm:ss") : "-"}</span><div className={module1834.desc}>{t("RECENT_DETECT_TIME")}</div></div>;
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const isExpand = this.props.isExpand;
                return <div className={module1834.item}><div className={module3(module1834.content, module31({}, module1834.expanded, isExpand))} onClick={this.handleExpandClick}>{this.renderHead()}{this.renderMonitorTarget()}{this.renderTime()}<module186.Icon name="chevron-down" type={isExpand ? "light" : ""} size={20}/></div>{this.renderExtraContent()}</div>;
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
                if (a) {
                    return `${n}${D[r.slice(-1)]}`;
                }
                const l = Object.keys(this.metricThreshold)[0];
                const u = Object.keys(this.metricThreshold[l])[0];
                const o = `${l}:${u}`;
                const i = RESOURCE_METRICS_CONFIG[this.monitorType][o];
                const alterTypeText = t(`${i.label}`).replace(/[(（]%[)）]/g, "").replace(/\s$/, "");
                const reverser = i.ruleConfig.filter((e)=>e.name === "thresholds")[0].reverser;
                const comparator = module26(rule, `exprBuilder.${this.monitorType}.comparator`);
                const d = module26(rule, `exprBuilder.${this.monitorType}.metricThreshold.${l}.${u}`);
                const thresholds = reverser(Number(d));
                const unit = i.ruleConfig[1].unit === "core" ? thresholds === 1 ? t("CORE") : t("CORE_PL") : i.ruleConfig[1].unit;
                const durationValue = rule.for.slice(0, -1);
                const v = rule.for.slice(-1);
                if (unit === "%") {
                    return t({
                        s: "ALERT_RULE_TEXT_PERCENT_SECOND",
                        m: "ALERT_RULE_TEXT_PERCENT_MINUTE",
                        h: "ALERT_RULE_TEXT_PERCENT_HOUR"
                    }[v], {
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
                }[v], {
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
    return r;
})(Component)) || l) || l) || l;
export default T;
