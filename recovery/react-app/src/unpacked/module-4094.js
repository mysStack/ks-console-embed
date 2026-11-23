import "unpacked/module-15.js";
import "unpacked/module-11.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import module31 from "unpacked/module-31.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module96 from "utils/babel-helpers/slicedToArray";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import * as module553 from "unpacked/module-553.js";
import module789 from "components/Base/Avatar";
import module802 from "components/Base/Card";
import module26 from "unpacked/module-26.js";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import module891 from "unpacked/module-891.js";
import module4095 from "unpacked/module-4095.js";
const g = {
    namespace_count: "cluster_namespace_count",
    deployment_count: "cluster_deployment_count",
    statefulset_count: "cluster_statefulset_count",
    daemonset_count: "cluster_daemonset_count",
    job_count: "cluster_job_count",
    cronjob_count: "cluster_cronjob_count",
    cluster_persistentvolumeclaim_count: "cluster_persistentvolumeclaim_count",
    service_count: "cluster_service_count",
    route_count: "cluster_ingress_count",
    clusters_pod_count: "cluster_pod_count",
    role_count: "cluster_clusterrole_count",
    member_count: "cluster_clusterrolebinding_count"
};
const _ = module553.memo(function({ cluster }) {
    const r = [
        {
            title: "PROJECT",
            metricType: g.namespace_count,
            icon: "project"
        },
        {
            metricType: g.clusters_pod_count,
            icon: "pod",
            title: "POD"
        },
        {
            metricType: g.deployment_count,
            icon: "backup",
            title: "DEPLOYMENT"
        },
        {
            metricType: g.statefulset_count,
            icon: "stateful-set",
            title: "STATEFULSET"
        },
        {
            metricType: g.daemonset_count,
            icon: "deamon-set",
            title: "DAEMONSET"
        },
        {
            metricType: g.job_count,
            icon: "backup",
            title: "JOB"
        },
        {
            metricType: g.cronjob_count,
            icon: "backup",
            title: "CRONJOB"
        },
        {
            metricType: g.cluster_persistentvolumeclaim_count,
            icon: "storage",
            title: "PERSISTENT_VOLUME_CLAIM"
        },
        {
            metricType: g.service_count,
            icon: "appcenter",
            title: "SERVICE"
        },
        {
            metricType: g.route_count,
            icon: "loadbalancer",
            title: "ROUTE"
        },
        {
            title: "CLUSTER_MEMBER",
            metricType: g.member_count,
            icon: "human"
        },
        {
            title: "CLUSTER_ROLE",
            metricType: g.role_count,
            icon: "role"
        }
    ].filter((e)=>!e.isHidden);
    const n = module553.useState({});
    const u = module96(n, 2);
    const _ = u[0];
    const E = u[1];
    const b = module553.useState(false);
    const S = module96(b, 2);
    const spinning = S[0];
    const R = S[1];
    const T = module553.useCallback(async (t)=>{
        let r;
        R(true);
        r = await t.fetchStatisticsQuery({
            cluster
        });
        E(r);
        R(false);
    }, []);
    module553.useEffect(function() {
        const e = new module891({
            cluster
        });
        T(e);
    }, []);
    return module553.default.createElement(module802, {
        className: module4095.resourceSummary
    }, module553.default.createElement(module186.Loading, {
        spinning
    }, module553.default.createElement("div", {
        className: module4095.wrapper
    }, r.map((e)=>{
        const title = module26(_, `${e.metricType}.data.result[0].value[1]`, "0");
        return module553.default.createElement("div", {
            className: module3(module4095.wrapperItem, module31({}, module4095.wrapperItemHover, e.more)),
            key: e.name
        }, module553.default.createElement(module789, {
            noLink: true,
            className: module4095.avatar,
            icon: e.icon,
            title,
            desc: t(title === "1" ? e.title : `${e.title}_PL`),
            iconSize: 40
        }));
    }))));
});
export default _;
