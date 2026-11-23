import "./module-15.js";
import "./module-84.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module800 from "./module-800.js";
const c = module553.memo(function({ probType }) {
    return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, {
        label: t("INITIAL_DELAY_S"),
        desc: t("INITIAL_DELAY_DESC")
    }, module553.default.createElement(module800, {
        name: "initialDelaySeconds",
        defaultValue: 0,
        min: 0,
        integer: true
    }))), module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, {
        label: t("TIMEOUT_PERIOD_S"),
        desc: t("TIMEOUT_PERIOD_DESC")
    }, module553.default.createElement(module800, {
        name: "timeoutSeconds",
        defaultValue: 1,
        min: 1,
        integer: true
    })))), module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, {
        label: t("CHECK_INTERVAL_S"),
        desc: t("CHECK_INTERVAL_DESC")
    }, module553.default.createElement(module800, {
        name: "periodSeconds",
        defaultValue: 10,
        min: 1,
        integer: true
    }))), module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, {
        label: t("SUCCESS_THRESHOLD"),
        desc: t("SUCCESS_THRESHOLD_DESC")
    }, module553.default.createElement(module800, {
        name: "successThreshold",
        defaultValue: 1,
        min: 1,
        readOnly: [
            "livenessProbe",
            "startupProbe"
        ].includes(probType),
        integer: true
    })))), module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, {
        label: t("FAILURE_THRESHOLD"),
        desc: t("FAILURE_THRESHOLD_DESC")
    }, module553.default.createElement(module800, {
        name: "failureThreshold",
        defaultValue: 3,
        min: 1,
        integer: true
    }))), module553.default.createElement(module186.Column, null)));
});
export default c;
