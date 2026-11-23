import "./module-15.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module788 from "./module-788.js";
import module186 from "./module-186.js";
import module1776 from "./module-1776.js";
import module14 from "./module-14.js";
import module4297 from "./module-4297.js";
export default function({ visible, onCancel, onOk, clusters = [] }) {
    const m = module553.useState(module14.toJS(clusters));
    const h = module96(m, 2);
    const v = h[0];
    const y = h[1];
    const g = module553.useState(false);
    const _ = module96(g, 2);
    const E = _[0];
    const b = _[1];
    module553.useEffect(function() {
        if (visible) {
            y(module14.toJS(clusters));
        }
    }, [
        visible,
        clusters
    ]);
    const onChange = module553.useCallback(function(e) {
        y(e);
        if (e.length >= 1) {
            b(false);
        } else {
            b(true);
        }
    }, []);
    const onCancel_1 = module553.useCallback(function() {
        if (onCancel) {
            onCancel();
        }
        b(false);
    }, []);
    const onOk_1 = module553.useCallback(function() {
        if (v.length > 0) {
            b(false);
            if (onOk) {
                onOk(v);
            }
        } else {
            b(true);
        }
        if (onCancel) {
            onCancel();
        }
    }, [
        v
    ]);
    return module553.default.createElement(module788, {
        bodyClassName: module4297.body,
        width: 960,
        title: t("SELECT_CLUSTER"),
        visible,
        onCancel: onCancel_1,
        onOk: onOk_1,
        icon: "layout"
    }, module553.default.createElement("div", {
        className: module4297.content
    }, module553.default.createElement(module186.Alert, {
        className: "margin-b12",
        type: "info",
        message: t("CUSTOM_PANEL_DESC")
    }), module553.default.createElement("div", {
        className: "margin-b12 font-bold"
    }, t("AVAILABLE_CLUSTERS")), module553.default.createElement(module1776, {
        onChange,
        value: v,
        noTip: true
    }), E && module553.default.createElement("div", {
        className: "form-item-error"
    }, t("CLUSTER_SETTINGS_LIMIT_DESC"))));
};
