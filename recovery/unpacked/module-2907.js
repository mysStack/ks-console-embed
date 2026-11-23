import "./module-15.js";
import "./module-84.js";
import "./module-10.js";
import "./module-85.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
export default function({ data }) {
    const r = module553.useMemo(function() {
        return data?.annotations?.["kubesphere.io/relatedHPA"];
    }, [
        data
    ]);
    const n = module553.useMemo(function() {
        return Object.keys(data.labels).includes("autoscaling.kubeshpere.io/name");
    }, [
        data
    ]);
    const content = module553.useMemo(function() {
        if (n) {
            return t("WORKLOAD_SCALING_TOOL_TIP");
        }
        return t("HPA_SET_TIP");
    });
    const name = module553.useMemo(function() {
        if (n) {
            return "stretch";
        }
        return "timed-task";
    });
    if (r || n) {
        return module553.default.createElement(module186.Tooltip, {
            content
        }, module553.default.createElement(module186.Icon, {
            name,
            size: 18
        }));
    }
    return null;
};
