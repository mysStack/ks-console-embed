import "./module-15.js";
import "./module-553.js";
import module186 from "./module-186.js";
import { getLocalTime } from "./module-52.js";
import { NODE_CONDITION_ICONS, getConditionsStatus } from "./module-444.js";
import Module791 from "./module-791.js";
import module4233 from "./module-4233.js";
export default function({ data }) {
    if (!NODE_CONDITION_ICONS[data.type]) {
        return null;
    }
    const r = getConditionsStatus(data);
    const content = <div><div className="tooltip-title">{data.reason}</div><p className="tooltip-desc">{data.message}</p><p className="tooltip-desc">{t("LATEST_UPDATE_VALUE", {
        value: getLocalTime(data.lastHeartbeatTime).format("YYYY-MM-DD HH:mm:ss")
    })}</p></div>;
    return <div className={module4233.card}><div className={module4233.icon}><module186.Icon name={NODE_CONDITION_ICONS[data.type]} size={40}/><module186.Tooltip content={content}>{r === "Running" ? <module186.Icon className={module4233.check} name="check" type="light" size={12}/> : <module186.Icon className={module4233.substract} name="substract" type="light" size={12}/>}</module186.Tooltip></div><Module791 title={t(`NODE_${data.type.toUpperCase()}`)} description={t(`NODE_${data.type.toUpperCase()}_DESC`)}/></div>;
};
