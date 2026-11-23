import "unpacked/module-15.js";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module1306 from "unpacked/module-1306.js";
import module63 from "unpacked/module-63.js";
import module3695 from "unpacked/module-3695.js";
export default function({ mertic = {}, unit, resourceType }) {
    const d = module553.useState("requests");
    const p = module96(d, 2);
    const m = p[0];
    const h = p[1];
    const v = module553.useState(0);
    const g = module96(v, 2);
    const percent = g[0];
    const E = g[1];
    module553.useEffect(function() {
        let e = 0;
        if (!(mertic.total === 0 || module63(mertic))) {
            e = (m === "requests" ? mertic.requests : mertic.limits) / mertic.total * 100;
        }
        E(e);
    }, [
        m,
        mertic
    ]);
    module553.useEffect(function() {
        h("requests");
    }, [
        resourceType
    ]);
    const onChange = module553.useCallback(function(e) {
        h(e);
    }, []);
    return module553.default.createElement("div", {
        className: module3695.resourceRatio
    }, module553.default.createElement("div", {
        className: module3695.subTitle
    }, module553.default.createElement(module186.RadioGroup, {
        mode: "button",
        value: m,
        onChange
    }, module553.default.createElement(module186.RadioButton, {
        value: "requests"
    }, t("QUOTA_REQUEST")), module553.default.createElement(module186.RadioButton, {
        value: "limit"
    }, t("QUOTA_LIMIT")))), module553.default.createElement("div", {
        className: module3695.radio
    }, module553.default.createElement("div", {
        className: module3695.radioWrapper
    }, module553.default.createElement("p", null, t("QUOTA_ALLOCATED")), module553.default.createElement("p", null, unit === "core" ? t("VALUE_CORES", {
        value: m === "requests" ? mertic.requests : mertic.limits
    }) : t("VALUE_UNIT", {
        value: m === "requests" ? mertic.requests : mertic.limits,
        unit
    }))), module553.default.createElement("div", {
        className: module3695.middleStyle
    }, "VS"), module553.default.createElement("div", {
        className: module3695.radioWrapper
    }, module553.default.createElement("p", null, t("QUOTA_TOTAL")), module553.default.createElement("p", null, unit === "core" ? t("VALUE_CORES", {
        value: mertic.total
    }) : t("VALUE_UNIT", {
        value: mertic.total,
        unit
    })))), module553.default.createElement(module1306, {
        bgColor: "#eff4f9",
        maskBgColor: "#E3E9EF",
        percent
    }));
};
