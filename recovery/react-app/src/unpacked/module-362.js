import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-31.js";
import { API_VERSIONS } from "utils/constants";
import module717 from "./module-717.js";
export function isK8sVersionAbove(e, t) {
    return module717.gte(t, e);
}
export const getApiVersion = function(e, t) {
    if (e) {
        if (t) {
            return ({
                ...API_VERSIONS,
                horizontalpodautoscalers: isK8sVersionAbove("v1.23.0", t) ? "apis/autoscaling/v2" : "apis/autoscaling/v2beta2",
                cronjobs: isK8sVersionAbove("v1.21.0", t) ? "apis/batch/v1" : "apis/batch/v1beta1"
            })[e];
        }
        return API_VERSIONS[e];
    }
    return "";
};
