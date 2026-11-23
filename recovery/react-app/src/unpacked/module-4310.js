import "unpacked/module-15.js";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "unpacked/module-553.js";
import module1791 from "unpacked/module-1791.js";
import module186 from "unpacked/module-186.js";
import module4311 from "unpacked/module-4311.js";
export default function({ metric, merticType, unit }) {
    const u = module553.useState("pod");
    const d = module96(u, 2);
    const f = d[0];
    const p = d[1];
    const m = module553.useState({});
    const h = module96(m, 2);
    const mertic = h[0];
    const y = h[1];
    module553.useEffect(function() {
        y({
            limits: metric[`${f}_limit`],
            requests: metric[`${f}_request`],
            total: metric.total,
            used: metric.used
        });
    }, [
        metric
    ]);
    const onChange = module553.useCallback(function(e) {
        p(e);
        y({
            limits: metric[`${e}_limit`],
            requests: metric[`${e}_request`],
            total: metric.total,
            used: metric.used
        });
    }, [
        metric
    ]);
    return module553.default.createElement("div", {
        className: module4311.container
    }, module553.default.createElement("div", {
        className: module4311.header
    }, module553.default.createElement("div", {
        className: module4311.title
    }, merticType === "cpu" ? t("CPU_QUOTA_USAGE") : t("MEMORY_QUOTA_USAGE")), module553.default.createElement(module186.RadioGroup, {
        mode: "button",
        buttonWidth: 96,
        value: f,
        onChange
    }, module553.default.createElement(module186.RadioButton, {
        value: "pod",
        key: "pod"
    }, t("CONTAINER")), module553.default.createElement(module186.RadioButton, {
        value: "namespace",
        key: "namespace"
    }, t("PROJECT")))), module553.default.createElement(module1791, {
        mertic,
        resourceType: f,
        unit
    }));
};
