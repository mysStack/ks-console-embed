import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-316.js";
import "./module-553.js";
import module26 from "./module-26.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module2112 from "./module-2112.js";
export default function({ data, noTip, placement = "right", tooltipModifiers }) {
    const content = <div><div className="tooltip-title">{t("CLUSTER_STATUS")}</div><div>{Object.values(module26(data, "conditions", {})).map((e)=><div key={e.type} className={module2112.condition}><div className={module2112.title}>{e.status === "True" ? <module186.Icon name="success" type="coloured"/> : <module186.Icon name="error" color={{
            primary: "#ffffff",
            secondary: "#ea4641"
        }}/>}<span>{t(`CLUSTER_CONDITION_${e.type.toUpperCase()}`, {
            defaultValue: e.type
        })}</span></div>{e.status && <p>{`${t("STATUS")}: ${e.status}`}</p>}{e.reason && <p>{`${t("REASON")}: ${t(`CLUSTER_REASON_${e.reason.toUpperCase()}`, {
            defaultValue: e.reason
        })}`}</p>}{e.message && <p>{`${t("MESSAGE")}: ${e.message}`}</p>}</div>)}</div></div>;
    const p = <module186.Icon name="information" color={{
        primary: "#ffffff",
        secondary: status === "error" ? "#ab2f29" : "#f5a623"
    }}/>;
    const m = module26(data, "isReady");
    const h = module26(data, "isSchedulable");
    const v = m ? h ? "" : t("UNSCHEDULABLE") : t("UNREADY");
    return <>{noTip ? <span className={module3(module2112.reason, status === "error" ? module2112.error : module2112.warning)}>{p}{v}</span> : <module186.Tooltip placement={placement} content={content} modifiers={tooltipModifiers} positionFixed><span className={module3(module2112.reason, status === "error" ? module2112.error : module2112.warning)}>{p}{v}</span></module186.Tooltip>}</>;
};
