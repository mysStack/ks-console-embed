import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-48.js";
import module31 from "./module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module881 from "./module-881.js";
import module26 from "./module-26.js";
import module3 from "./module-3.js";
import module995 from "./module-995.js";
import module1482 from "./module-1482.js";
export default function(e) {
    let a;
    let r;
    let n;
    const l = module553.useState(function() {
        const e_rule = e.rule;
        return module26(e_rule, "disable", false);
    });
    const h = module96(l, 2);
    const v = h[0];
    const g = h[1];
    const y = module553.useCallback(function() {
        let e;
        return module553.default.createElement("div", {
            className: module3(module1482.icon, (e = {}, module31(e, module1482.iconDisabled, v), module31(e, module1482.iconOn, !v), e))
        }, module553.default.createElement(module186.Icon, {
            name: "computing-setting",
            size: 40
        }));
    }, [
        v
    ]);
    const E = module553.useCallback(function() {
        const e_rule = e.rule;
        return module553.default.createElement("span", {
            className: module1482.ruleName
        }, e_rule.alert);
    });
    return module553.default.createElement("div", {
        className: module1482.container
    }, module553.default.createElement("div", {
        className: module1482.head
    }, module553.default.createElement("div", {
        className: module1482.title
    }, y(), module553.default.createElement("div", {
        className: module1482.text
    }, module553.default.createElement("p", null, E(), module553.default.createElement(module881, {
        data: module26(e.rule, "severity")
    })), module553.default.createElement("p", null, v ? t("DISABLED") : t("ENABLED")))), module553.default.createElement("div", {
        className: module1482.opt
    }, !e.builtInRule && module553.default.createElement("div", {
        className: module1482.iconBg
    }, module553.default.createElement(module186.Icon, {
        name: "trash",
        size: 16,
        onClick: function() {
            return e.handleDelete();
        }
    })), module553.default.createElement("div", {
        className: module1482.iconBg
    }, module553.default.createElement(module186.Icon, {
        name: "pen",
        size: 16,
        onClick: function() {
            return e.handleEdit();
        }
    })), module553.default.createElement("div", {
        className: module1482.sToggle
    }, module553.default.createElement("div", {
        className: module1482.tooltip
    }, module553.default.createElement("span", null, v ? t("ENABLE_RULE") : t("DISABLE_RULE"))), module553.default.createElement("div", {
        className: module1482.triangle
    }), module553.default.createElement(module186.Toggle, {
        checked: !v,
        onChange: function() {
            g(!v);
            e.handleDisable(!v);
        }
    })))), module553.default.createElement("div", {
        className: module1482.desc
    }, (r = (a = module26(e.rule, "clusterSelector.inValues", []).map((cluster)=>({
            cluster
        }))).slice(0, 3), n = a.slice(3), module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
        className: module1482.exprLine
    }, module553.default.createElement("span", {
        className: module1482.title
    }, t("CLUSTER"), ":"), module553.default.createElement("span", {
        className: module1482.descTextCL
    }, r.length > 0 ? r.map(({ cluster }, a)=>module553.default.createElement("div", {
            key: `${cluster}-${a}`
        }, module553.default.createElement(module995, {
            cluster,
            allClusters: e.allClusters
        }))) : t("ALL_CLUSTERS"), n.length > 0 && ((t)=>{
        const content = module553.default.createElement("div", {
            className: module1482.tipContentBox,
            style: {
                minWidth: "0px"
            }
        }, t.map((t, a)=>module553.default.createElement("div", {
                className: module3(module1482.tipLineItem, module1482.custom_line),
                key: `${t.cluster}-${a}`
            }, module553.default.createElement(module995, {
                cluster: t.cluster,
                allClusters: e.allClusters
            }))));
        return module553.default.createElement(module186.Tooltip, {
            content,
            placement: "top"
        }, module553.default.createElement("div", {
            className: module1482.targetTipRest
        }, t.length));
    })(n))), module553.default.createElement("div", {
        className: module1482.cus_text
    }, module553.default.createElement("span", {
        className: module1482.pr_title
    }, t("RULE_EXPRESSION"), ":"), module553.default.createElement("span", {
        className: module1482.exprText
    }, e.rule.expr))))));
};
