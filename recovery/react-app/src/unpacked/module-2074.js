import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-73.js";
import "./module-18.js";
import "./module-87.js";
import "./module-48.js";
import "./module-16.js";
import "./module-27.js";
import "./module-98.js";
import "./module-10.js";
import "./module-316.js";
import "./module-24.js";
import "./module-64.js";
import "./module-7.js";
import module61 from "./module-61.js";
import module31 from "./module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "./module-4.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import { RESOURCE_METRICS_CONFIG } from "./module-924.js";
import module136 from "./module-136.js";
import module26 from "./module-26.js";
import module995 from "./module-995.js";
import module881 from "./module-881.js";
import * as module553 from "./module-553.js";
import { showNameAndAlias } from "utils/index";
import module1482 from "./module-1482.js";
const E = {
    cpu: "cpu",
    pod: "pod",
    memory: "memory",
    disk: "storage",
    network: "network"
};
export default function(e) {
    let a;
    let r;
    let n;
    let l;
    let b;
    let alterTypeText;
    let comparator;
    let thresholds;
    let unit;
    let durationValue;
    let k;
    let N;
    let T;
    const { rule, handleEdit, allClusters } = e;
    const allClusters_1 = allClusters === undefined ? [] : allClusters;
    const P = Object.keys(rule.exprBuilder)[0];
    const A = module26(rule, "exprBuilder.workload.kind", "Deployment");
    const j = module553.useState(module26(rule, "disable", false));
    const L = module96(j, 2);
    const x = L[0];
    const U = L[1];
    const z = module553.useReducer(function(e) {
        return e + 1;
    }, 0);
    const F = module96(z, 2)[1];
    const G = (e)=>showNameAndAlias(e, "cluster", {}, true, function() {
            F();
        });
    const V = (e)=>module553.default.createElement("div", {
            className: module1482.tipContentBox,
            style: {
                minWidth: "200px"
            }
        }, e.map((e, a)=>module553.default.createElement("div", {
                className: module1482.tipLineItem,
                style: {
                    alignItems: "flex-start"
                },
                key: a
            }, module553.default.createElement("div", {
                className: module1482.tipText_title
            }, module553.default.createElement("img", {
                src: "/assets/alarmProject.svg"
            }), module553.default.createElement("span", null, e.namespace)), module553.default.createElement("div", {
                className: module1482.tipText_deploy
            }, module553.default.createElement("span", null, t(`${A.toUpperCase()}S_VALUES`, {
                values: e.names.join(", ")
            }))))));
    const B = module136(RESOURCE_METRICS_CONFIG[P || "node"]) || {};
    return module553.default.createElement("div", {
        className: module1482.container
    }, module553.default.createElement("div", {
        className: module1482.head
    }, module553.default.createElement("div", {
        className: module1482.title
    }, (T = Object.keys(module26(rule.exprBuilder, `${P}.metricThreshold.`, {}))[0] || "pod", module553.default.createElement("div", {
        className: module3(module1482.icon, (N = {}, module31(N, module1482.iconDisabled, x), module31(N, module1482.iconOn, !x), N))
    }, module553.default.createElement(module186.Icon, {
        size: 40,
        name: E[T]
    }))), module553.default.createElement("div", {
        className: module1482.text
    }, module553.default.createElement("p", null, module553.default.createElement("span", {
        className: module1482.ruleName
    }, rule.alert), module553.default.createElement(module881, {
        data: module26(rule, "severity")
    })), module553.default.createElement("p", null, x ? t("DISABLED") : t("ENABLED")))), module553.default.createElement("div", {
        className: module1482.opt
    }, !e.builtInRule && module553.default.createElement("div", {
        className: module1482.iconBg
    }, module553.default.createElement(module186.Icon, {
        name: "trash",
        size: 16,
        onClick: function() {
            e.handleDelete();
        }
    })), module553.default.createElement("div", {
        className: module1482.iconBg
    }, module553.default.createElement(module186.Icon, {
        name: "pen",
        size: 16,
        onClick: function() {
            return handleEdit();
        }
    })), module553.default.createElement("div", {
        className: module1482.sToggle
    }, module553.default.createElement("div", {
        className: module1482.tooltip
    }, module553.default.createElement("span", null, x ? t("ENABLE_RULE") : t("DISABLE_RULE"))), module553.default.createElement("div", {
        className: module1482.triangle
    }), module553.default.createElement(module186.Toggle, {
        checked: !x,
        onChange: function() {
            U(!x);
            e.handleDisable(!x);
        }
    })))), module553.default.createElement("div", {
        className: module1482.desc
    }, (a = module26(rule, `exprBuilder.${P}.metricThreshold`), r = Object.keys(a)[0], n = Object.keys(a[r])[0], b = (l = B[`${r}:${n}`]).ruleConfig.filter((e)=>e.name === "thresholds")[0].reverser, alterTypeText = t(`${l.label}`).replace(/[(（]%[)）]/g, ""), comparator = module26(rule, `exprBuilder.${P}.comparator`), thresholds = b(Number(Object.values(a[r])[0])), unit = l.ruleConfig[1].unit === "core" ? thresholds === 1 ? t("CORE") : t("CORE_PL") : l.ruleConfig[1].unit, durationValue = rule.for.slice(0, -1), k = rule.for.slice(-1), module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
        className: module1482.exprLine
    }, module553.default.createElement("span", {
        className: module1482.title
    }, `${t("MONITORING_TARGET")}:`), module553.default.createElement("span", {
        className: module1482.descTextCL
    }, (()=>{
        const e = module26(rule, `exprBuilder.${P}.names`, []);
        const a = {};
        e.forEach((e)=>{
            if (a[e.cluster]) {
                a[e.cluster] = [].concat(module61(a[e.cluster]), [
                    {
                        cluster: e.cluster,
                        namespace: module26(e, "namespace", ""),
                        names: module26(e, "names", [])
                    }
                ]);
            } else {
                a[e.cluster] = [
                    {
                        cluster: e.cluster,
                        namespace: module26(e, "namespace", ""),
                        names: module26(e, "names", [])
                    }
                ];
            }
        });
        const r = Object.entries(a).map((e)=>{
            const t = module96(e, 2);
            return [
                t[0],
                t[1]
            ];
        });
        const n = r.slice(0, 3);
        const l = r.slice(3).map((e)=>module96(e, 2)[1]);
        return module553.default.createElement(module553.default.Fragment, null, n.map((e, a)=>{
            const title = `${G(e[0])} | ${e[1].reduce((acc, item)=>acc + item.names.length, 0)}`;
            return module553.default.createElement(module186.Tooltip, {
                content: P === "node" ? module553.default.createElement("div", {
                    className: module1482.tipContentBox_cluster
                }, module553.default.createElement("span", null, t("NODES_VALUES", {
                    values: e[1][0].names.join(", ")
                }))) : V(e[1]),
                key: e
            }, module553.default.createElement("div", {
                key: a
            }, module553.default.createElement(module995, {
                cluster: e[0],
                allClusters: allClusters_1,
                title
            })));
        }), l.length > 0 && ((e)=>{
            const content = module553.default.createElement("div", {
                className: module1482.tipContentBox,
                style: {
                    minWidth: "200px"
                }
            }, e.map((e, a)=>{
                const r = e.reduce((acc, item)=>acc + item.names.length, 0);
                return module553.default.createElement("div", {
                    className: module1482.tipLineItem,
                    style: {
                        alignItems: "flex-start"
                    },
                    key: a
                }, module553.default.createElement("div", {
                    style: {
                        marginBottom: "8px"
                    }
                }, module553.default.createElement(module995, {
                    cluster: e.cluster,
                    allClusters: allClusters_1,
                    title: `${G(e[0].cluster)} | ${r}`
                })), P === "node" ? module553.default.createElement(module553.default.Fragment, null, e.map((e, a)=>module553.default.createElement("div", {
                        className: module1482.tipText_nodes,
                        key: a
                    }, t("NODES_VALUES", {
                        values: e.names.join(", ")
                    })))) : module553.default.createElement(module553.default.Fragment, null, e.map((e, a)=>module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                        className: module1482.tipText_title,
                        key: `${a}_0`
                    }, module553.default.createElement("img", {
                        src: "/assets/alarmProject.svg"
                    }), module553.default.createElement("span", null, e.namespace)), module553.default.createElement("div", {
                        className: module1482.tipText_deploy,
                        key: `${a}_1`
                    }, module553.default.createElement("span", null, t(`${A.toUpperCase()}S_VALUES`, {
                        values: e.names.join(",")
                    })))))));
            }));
            return module553.default.createElement(module186.Tooltip, {
                content,
                placement: "right"
            }, module553.default.createElement("div", {
                className: module1482.targetTipRest
            }, e.length));
        })(l));
    })())), module553.default.createElement("div", {
        className: module1482.exprLine
    }, module553.default.createElement("span", {
        className: module1482.pr_title
    }, `${t("ALERTING_RULE")}:`), module553.default.createElement("span", {
        className: module1482.exprText
    }, unit === "%" ? t({
        s: "ALERT_RULE_TEXT_PERCENT_SECOND",
        m: "ALERT_RULE_TEXT_PERCENT_MINUTE",
        h: "ALERT_RULE_TEXT_PERCENT_HOUR"
    }[k], {
        alterTypeText,
        comparator,
        thresholds,
        durationValue
    }) : t({
        s: "ALERT_RULE_TEXT_SECOND",
        m: "ALERT_RULE_TEXT_MINUTE",
        h: "ALERT_RULE_TEXT_HOUR"
    }[k], {
        alterTypeText,
        comparator,
        thresholds,
        unit,
        durationValue
    })))))));
};
