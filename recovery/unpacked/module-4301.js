import "./module-15.js";
import "./module-18.js";
import "./module-28.js";
import module31 from "./module-31.js";
import "./module-553.js";
import module63 from "./module-63.js";
import { inject } from "./module-239.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import Module1102 from "./module-1102.js";
import Module4302 from "./module-4302.js";
import module4304 from "./module-4304.js";
const m = inject("rootStore")(function({ rootStore, alerts, originClusterList }) {
    return <><div className={module4304.alertListWrapper}><div className={module3(module4304.alertLists, module31({}, `${module4304.alertEmpty}`, module63(alerts)))}>{module63(alerts) ? <Module1102 text=<><div className={module4304.title}>{t("NONE_ALERT")}</div><div className={module4304.desc}>{t("ALERT_EMPTY_DESC")}</div></> icon=<div className={module4304.icon}><module186.Icon name="loudspeaker" size={48}/></div>/> : <>{alerts.map((alert, key)=><Module4302 alert={alert} allClusters={originClusterList} key={key}/>)}</>}</div></div><div className={module4304.more}><div className={module4304.moreButton} onClick={function() {
        return rootStore.routing.push("/whizard-telemetry/metrics/alerting/builtin-rules");
    }}>{t("VIEW_MORE")}</div></div></>;
});
export default m;
