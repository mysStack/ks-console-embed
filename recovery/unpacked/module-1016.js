import "./module-15.js";
import "./module-5.js";
import module26 from "./module-26.js";
export const getManifestApi = function({ workspace, namespace, cluster, cluster_id }) {
    let l = "/kapis/application.kubesphere.io/v2";
    if (workspace) {
        l += `/workspaces/${workspace}`;
    }
    if (globals.app.isMultiCluster && cluster) {
        l += `/clusters/${cluster}`;
    }
    if (namespace) {
        l += `/namespaces/${namespace}`;
    }
    l += "/manifests";
    if (cluster_id) {
        l += `/${cluster_id}`;
    }
    return l;
};
export const getDmpSecrets = function({ namespace, cluster_id }) {
    let r = "/api/v1";
    if (namespace) {
        r += `/namespaces/${namespace}`;
    }
    r += "/secrets";
    if (cluster_id) {
        r += `/${cluster_id}`;
    }
    return r;
};
export const getStatusFromYaml = function(e) {
    const t = module26(e, "status.conditions[0]");
    if (t) {
        return `${t.status}-${t.type}`;
    }
    return "";
};
