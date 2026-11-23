import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-98.js";
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
import module96 from "utils/babel-helpers/slicedToArray";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import { ReactComponent } from "unpacked/module-1231.js";
import module3 from "unpacked/module-3.js";
import Module881 from "unpacked/module-881.js";
import { SEVERITY_LEVEL } from "configs/alerting/metrics/rule.config";
import { RESOURCE_METRICS_CONFIG } from "unpacked/module-924.js";
import module26 from "unpacked/module-26.js";
import module857 from "unpacked/module-857.js";
import module63 from "unpacked/module-63.js";
import { inject, observer } from "unpacked/module-239.js";
import Module995 from "unpacked/module-995.js";
import { Component } from "unpacked/module-553.js";
import { getLocalTime, showNameAndAlias } from "utils/index";
import { trigger } from "utils/action";
import module1860 from "unpacked/module-1860.js";
let u;
const P = {
    cpu: "cpu",
    pod: "pod",
    memory: "memory",
    disk: "storage",
    network: "network",
    replica: "backup"
};
const k = {
    s: "TIME_S",
    m: "TIME_M",
    h: "TIME_H"
};
const N = {
    disabled: t("DISABLED"),
    firing: t("ALERT_RULE_FIRING"),
    inactive: t("ALERT_RULE_INACTIVE"),
    pending: t("ALERT_RULE_PENDING")
};
const D = {
    Deployment: "DEPLOYMENTS_VALUES",
    StatefulSet: "STATEFULSETS_VALUES",
    DaemonSet: "DAEMONSETS_VALUES"
};
const w = inject("rootStore")(u = observer(u = trigger(u = ((Component_1)=>{
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
            const u = e.disabled ? module1860.status_disabled : module1860[`status_${status_state}`];
            if (e.ruleType === "Custom") {
                return <div className={module3(module1860.headIcon, u)}>{isExpand ? <ReactComponent width={40} height={40}/> : <module186.Icon name="computing-setting" size={40}/>}</div>;
            }
            let l;
            const o = Object.keys(e.metricThreshold)[0];
            l = P[o];
            return <div className={module3(module1860.headIcon, [
                module1860[`status_${status_state}`]
            ])}><module186.Icon type={isExpand ? "light" : "dark"} name={l} size={40}/></div>;
        };
        e.handleMonitor = function(t) {
            const e_props = e.props;
            const { rule, store, cluster, namespace, status } = e_props;
            e.trigger("multi.alerting.rule.monitor", {
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
            const l = e.disabled ? module1860.info_disabled : module1860[`info_${status_state}`];
            return <div className={module1860.head}>{e.renderIcon()}<div><div className={module1860.headLine}><div className={module1860.title}>{rule.alert}</div>{e.hasMonitoring && <module186.Tooltip content={t("VIEW_METRIC_DATA")}><img src="/assets/monitor.svg" onClick={e.handleMonitor}/></module186.Tooltip>}<Module881 data={rule.severity}/></div><div className={module3(module1860.statusLine, l)}>{(status_state !== "inactive" || e.disabled) && <module186.Icon name="information" size={16}/>}<div className={module1860.desc}>{e.disabled ? t("DISABLED") : N[status_state]}</div></div></div></div>;
        };
        e.renderClusterAliasName = function(t) {
            return showNameAndAlias(t, "cluster", {}, true, function() {
                e.forceUpdate();
            });
        };
        e.renderTemplateRuleTarget = function() {
            const e_props = e.props;
            const { rule, allClusters } = e_props;
            const u = module26(rule, `exprBuilder.${e.monitorType}.names`, []);
            const l = module26(rule, `exprBuilder.${e.monitorType}.kind`, "");
            const c = u.slice(0, 3);
            let i = u.slice(3);
            if (e.monitorType === "node") {
                let s = null;
                if (i.length > 0) {
                    s = <>{i.map((a, r, u)=>{
                        const l = `${e.renderClusterAliasName(a.cluster)} | ${a.names.length}`;
                        return <div className={module1860.template_deploy} key={`${a.namespace}_${r}`} style={{
                            maxWidth: "276px"
                        }}><div><span key={r} style={{
                            marginBottom: "4px"
                        }}><Module995 key={`${a.cluster}-${r}`} cluster={a.cluster} allClusters={allClusters} title={l}/></span></div><span className={module1860.deploy_des} style={{
                            marginBottom: r !== u.length - 1 ? "12px" : "0px"
                        }}>{t("NODES_VALUES", {
                            values: a.names.join(",")
                        })}</span></div>;
                    })}</>;
                }
                return <div className={module1860.nodeList}>{c.map((a, r)=>{
                    const u = <div className={module1860.template_deploy} index={r}><span className={module1860.deploy_des}>{t("NODES_VALUES", {
                        values: a.names.join(",")
                    })}</span></div>;
                    const l = `${e.renderClusterAliasName(a.cluster)} | ${a.names.length}`;
                    return <module186.Tooltip content={u} placement="right" key={r}><div key={`${a.cluster}-${r}`}><Module995 cluster={a.cluster} allClusters={allClusters} title={l}/></div></module186.Tooltip>;
                })}{i.length > 0 && <module186.Tooltip content={s} placement="right"><div className={module1860.restItem}>{i.length}</div></module186.Tooltip>}</div>;
            }
            const d = module857(c, "cluster");
            let f = null;
            if ((i = Object.entries(d).slice(3)).length > 0) {
                f = <>{i.map((a, r)=>{
                    const u = module96(a, 2);
                    const c = u[0];
                    const i = u[1];
                    const s = `${e.renderClusterAliasName(c)} | ${i.reduce((acc, item)=>acc + item.names.length, 0)}`;
                    return <div className={module1860.template_deploy} key={r} style={{
                        width: "276px"
                    }}><div><span style={{
                        marginBottom: "4px"
                    }} key={`${c}-${r}`}><Module995 cluster={c} allClusters={allClusters} title={s}/></span></div>{i.map((e, index, r)=><div className={module1860.template_deploy} key={`${e.cluster}_${index}`} style={{
                            marginBottom: index !== r.length - 1 ? "8px" : "0px"
                        }} index={index}><div className={module1860.title}><img src="/assets/alarmProject.svg"/><span>{e.namespace}</span></div><span className={module1860.deploy_des}>{t(D[l], {
                            values: e.names.join(",")
                        })}</span></div>)}</div>;
                })}</>;
            }
            return <div className={module1860.nodeList}>{Object.entries(d).map((a, r)=>{
                const u = module96(a, 2);
                const c = u[0];
                const i = u[1];
                if (r > 2) {
                    return null;
                }
                const s = i.map((e, key)=><div className={module1860.template_deploy} key={key}><div className={module1860.title}><img src="/assets/alarmProject.svg"/><span>{e.namespace}</span></div><span className={module1860.deploy_des}>{t(D[l], {
                        values: e.names.join(",")
                    })}</span></div>);
                const d = `${e.renderClusterAliasName(c)} | ${i.reduce((acc, item)=>acc + item.names.length, 0)}`;
                return <module186.Tooltip content={s} placement="right"><span key={`${c}-${r}`}><Module995 cluster={c} allClusters={allClusters} title={d}/></span></module186.Tooltip>;
            })}{i.length > 0 && <module186.Tooltip content={f} placement="right"><div className={module1860.restItem}>{i.length}</div></module186.Tooltip>}</div>;
        };
        e.targetContent = function() {
            return <>{e.renderTemplateRuleTarget()}<div className={module1860.desc}>{t("MONITORING_TARGETS")}</div></>;
        };
        e.renderMonitorTarget = function() {
            return <div className={module1860.target}>{e.ruleType === "Template" && e.targetContent()}</div>;
        };
        e.renderTime = function() {
            const status = e.props.status;
            const r = module26(status, "lastEvaluation", false);
            return <div className={module1860.timeLabel}><span className={module3(module1860.time, module31({}, module1860.time_white, e.props.isExpand))}>{r ? getLocalTime(r).format("YYYY-MM-DD HH:mm:ss") : "-"}</span><div className={module1860.desc}>{t("RECENT_DETECT_TIME")}</div></div>;
        };
        e.renderAlertRule = function() {
            const a = e.ruleType === "Custom";
            return <p><span className={module1860.label}>{a ? t("DURATION") : t("TRIGGER_CONDITION")}:</span><span>{e.ruleExpr}</span></p>;
        };
        e.renderExtraContent = function() {
            const e_props = e.props;
            const { rule, isExpand } = e_props;
            const u = module26(rule, "annotations.message", "");
            const o = module26(rule, "annotations.description", "-");
            const c = u !== "" ? u : o;
            return <div className={module3(module1860.itemExtra, module31({}, module1860.itemExtraShow, isExpand))}><div className={module1860.ms_content}>{e.renderAlertRule()}<p><span className={module1860.label}>{t("RULE_EXPRESSION")}:</span><span className={module1860.ruleExpr}>{rule.expr}</span></p></div><div className={module1860.ms_content}><p><span className={module1860.label}>{t("MESSAGE_SUMMARY")}:</span><span>{module26(rule, "annotations.summary", "")}</span></p><p><span className={module1860.label}>{t("MESSAGE_DETAILS")}:</span><span>{c}</span></p></div></div>;
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const isExpand = this.props.isExpand;
                return <div className={module1860.item}><div className={module3(module1860.content, module31({}, module1860.expanded, isExpand))} onClick={this.handleExpandClick}>{this.renderHead()}{this.renderMonitorTarget()}{this.renderTime()}<module186.Icon name="chevron-down" type={isExpand ? "light" : ""} size={20}/></div>{this.renderExtraContent()}</div>;
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
                const num = r.slice(0, -1);
                if (a) {
                    return t(k[r.slice(-1)], {
                        num
                    });
                }
                const u = Object.keys(this.metricThreshold)[0];
                const l = Object.keys(this.metricThreshold[u])[0];
                const o = `${u}:${l}`;
                const c = RESOURCE_METRICS_CONFIG[this.monitorType][o];
                const alterTypeText = t(`${c.label}`).replace(/[(（]%[)）]/g, "").replace(/\s$/, "");
                const reverser = c.ruleConfig.filter((e)=>e.name === "thresholds")[0].reverser;
                const comparator = module26(rule, `exprBuilder.${this.monitorType}.comparator`);
                const f = module26(rule, `exprBuilder.${this.monitorType}.metricThreshold.${u}.${l}`);
                const thresholds = reverser(Number(f));
                const unit = c.ruleConfig[1].unit === "core" ? thresholds === 1 ? t("CORE") : t("CORE_PL") : c.ruleConfig[1].unit;
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
})(Component)) || u) || u) || u;
export default w;
