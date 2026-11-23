import "unpacked/module-15.js";
import "unpacked/module-29.js";
import "unpacked/module-16.js";
import "unpacked/module-315.js";
import "unpacked/module-4.js";
import module186 from "unpacked/module-186.js";
import Module796 from "components/Base/Status";
import Module881 from "unpacked/module-881.js";
import module26 from "unpacked/module-26.js";
import module159 from "unpacked/module-159.js";
import "unpacked/module-553.js";
import { getLocalTime, showNameAndAlias } from "utils/index";
import { CLUSTER_GROUP_TAG_TYPE, CLUSTER_PROVIDER_ICON } from "utils/constants";
import module4303 from "unpacked/module-4303.js";
export default function(e) {
    const e_alert = e.alert;
    const v = e.allClusters.find((e)=>e.name === e_alert.cluster);
    return <div className={module4303.alertList}><div className={module4303.time}>{getLocalTime(module26(e_alert, "_originData.activeAt")).format("YYYY-MM-DD HH:mm:ss")}</div><Module881 data={module26(e_alert, "severity")}/><div className={module4303.message} title={module26(e_alert, "_originData.annotations.summary", "-")}>{module26(e_alert, "_originData.annotations.summary", "-")}</div><div className={module4303.message}><Module796 className={module4303.status} type={e_alert.state === "pending" ? "warning" : e_alert.state === "firing" ? "critical" : e_alert.state} name={t(`ALERT_RULE_${e_alert.state.toUpperCase()}`, {
        defaultValue: e_alert.state
    })}/></div>{showNameAndAlias(v) && <div className={module4303.tagWrapper}><module186.Tag type={CLUSTER_GROUP_TAG_TYPE[v?.group ?? "production"]}><span title={showNameAndAlias(v) ?? ""}><module186.Icon name={v && !module159(v.provider) ? CLUSTER_PROVIDER_ICON[v.provider] : "kubernetes"} size={16} {...CLUSTER_GROUP_TAG_TYPE[v?.group ?? "production"] === "default" ? {
        type: "light"
    } : {}}/>{showNameAndAlias(v)}</span></module186.Tag></div>}</div>;
};
