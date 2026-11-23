import "./module-15.js";
import "./module-29.js";
import "./module-16.js";
import "./module-315.js";
import "./module-4.js";
import module186 from "./module-186.js";
import Module796 from "./module-796.js";
import Module881 from "./module-881.js";
import module26 from "./module-26.js";
import module159 from "./module-159.js";
import "./module-553.js";
import { getLocalTime, showNameAndAlias } from "./module-52.js";
import { CLUSTER_GROUP_TAG_TYPE, CLUSTER_PROVIDER_ICON } from "./module-72.js";
import module4303 from "./module-4303.js";
export default function(e) {
    const e_alert = e.alert;
    const v = e.allClusters.find((e)=>e.name === e_alert.cluster);
    return <div className={module4303.alertList}><div className={module4303.time}>{getLocalTime(module26(e_alert, "_originData.activeAt")).format("YYYY-MM-DD HH:mm:ss")}</div><Module881 data={module26(e_alert, "severity")}/><div className={module4303.message} title={module26(e_alert, "_originData.annotations.summary", "-")}>{module26(e_alert, "_originData.annotations.summary", "-")}</div><div className={module4303.message}><Module796 className={module4303.status} type={e_alert.state === "pending" ? "warning" : e_alert.state === "firing" ? "critical" : e_alert.state} name={t(`ALERT_RULE_${e_alert.state.toUpperCase()}`, {
        defaultValue: e_alert.state
    })}/></div>{showNameAndAlias(v) && <div className={module4303.tagWrapper}><module186.Tag type={CLUSTER_GROUP_TAG_TYPE[v?.group ?? "production"]}><span title={showNameAndAlias(v) ?? ""}><module186.Icon name={v && !module159(v.provider) ? CLUSTER_PROVIDER_ICON[v.provider] : "kubernetes"} size={16} {...CLUSTER_GROUP_TAG_TYPE[v?.group ?? "production"] === "default" ? {
        type: "light"
    } : {}}/>{showNameAndAlias(v)}</span></module186.Tag></div>}</div>;
};
