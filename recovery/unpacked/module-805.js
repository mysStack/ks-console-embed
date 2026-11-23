import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import "./module-553.js";
import module2906 from "./module-2906.js";
export default function({ data, status, reason, type: type_1 = "workload", onShowEvents }) {
    const content = <div><div className="tooltip-title">{t("STATUS_INFORMATION")}</div><div>{module26(data, "status.conditions", []).map((e)=><div key={e.type} className={module2906.condition}><div className={module2906.title}>{((type_1_1, { type, status })=>{
            if (type_1_1 === "volume") {
                return status === "True";
            }
            if (type === "ReplicaFailure") {
                return status === "False";
            }
            return status === "True";
        })(type_1, e) ? <module186.Icon name="success" type="coloured"/> : <module186.Icon name="error" color={{
            primary: "#ffffff",
            secondary: "#ea4641"
        }}/>}<span>{t(`${type_1.toUpperCase()}_CONDITION_${e.type.toUpperCase()}`, {
            defaultValue: e.type
        })}</span></div>{e.status && <p>{t("STATUS_VALUE", {
            value: e.status === "True" ? "True" : "False"
        })}</p>}{e.reason && <p>{t("REASON_VALUE", {
            value: t(`${type_1.toUpperCase()}_REASON_${e.reason.toUpperCase()}`, {
                defaultValue: e.reason
            })
        })}</p>}{e.message && <p>{t("MESSAGE_VALUE", {
            value: e.message
        })}</p>}</div>)}</div>{onShowEvents && <module186.Button type="primary" onClick={onShowEvents} className="margin-t8 width-full">{t("VIEW_EVENTS")}</module186.Button>}</div>;
    return <span className={module2906.reason}><module186.Tooltip placement="right" content={content} positionFixed><span className={module2906.reasonDesc}><module186.Icon name="information" color={{
        primary: "#ffffff",
        secondary: status === "error" ? "#ab2f29" : "#f5a623"
    }}/>{reason && <span className={status === "error" ? module2906.error : module2906.warning}>{t(reason)}</span>}</span></module186.Tooltip></span>;
};
