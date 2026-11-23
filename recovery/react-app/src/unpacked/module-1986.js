import "unpacked/module-15.js";
import "unpacked/module-16.js";
import module186 from "unpacked/module-186.js";
import module321 from "unpacked/module-321.js";
import "unpacked/module-553.js";
import { inCluster2Default, showNameAndAlias } from "utils/index";
import { CLUSTER_GROUP_TAG_TYPE, CLUSTER_PROVIDER_ICON } from "utils/constants";
import { eventKeys, useEventValue } from "utils/events";
import module5058 from "unpacked/module-5058.js";
export default function(e) {
    const t = module321(e.clustersDetail, "name");
    const e_destination = e.destination;
    const n = e_destination === undefined ? {} : e_destination;
    useEventValue(eventKeys.HOST_CLUSTER_CHANGE, "");
    const d = t[inCluster2Default(n.name)] || {};
    const f = n.namespace || "";
    return <div className={module5058.wrapper}><div className={module5058.tags}><module186.Tag key={d.name} type={CLUSTER_GROUP_TAG_TYPE[d.group]}><module186.Icon name={CLUSTER_PROVIDER_ICON[d.provider] || "kubernetes"} size={16} type="light"/>{d.name ? showNameAndAlias(inCluster2Default(d.name), "cluster") : "default"}</module186.Tag><span><module186.Icon name="project" size={16} type="dark"/>{showNameAndAlias(f, "project")}</span></div></div>;
};
