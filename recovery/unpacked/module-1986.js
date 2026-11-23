import "./module-15.js";
import "./module-16.js";
import module186 from "./module-186.js";
import module321 from "./module-321.js";
import "./module-553.js";
import { inCluster2Default, showNameAndAlias } from "./module-52.js";
import { CLUSTER_GROUP_TAG_TYPE, CLUSTER_PROVIDER_ICON } from "./module-72.js";
import { eventKeys, useEventValue } from "./module-144.js";
import module5058 from "./module-5058.js";
export default function(e) {
    const t = module321(e.clustersDetail, "name");
    const e_destination = e.destination;
    const n = e_destination === undefined ? {} : e_destination;
    useEventValue(eventKeys.HOST_CLUSTER_CHANGE, "");
    const d = t[inCluster2Default(n.name)] || {};
    const f = n.namespace || "";
    return <div className={module5058.wrapper}><div className={module5058.tags}><module186.Tag key={d.name} type={CLUSTER_GROUP_TAG_TYPE[d.group]}><module186.Icon name={CLUSTER_PROVIDER_ICON[d.provider] || "kubernetes"} size={16} type="light"/>{d.name ? showNameAndAlias(inCluster2Default(d.name), "cluster") : "default"}</module186.Tag><span><module186.Icon name="project" size={16} type="dark"/>{showNameAndAlias(f, "project")}</span></div></div>;
};
