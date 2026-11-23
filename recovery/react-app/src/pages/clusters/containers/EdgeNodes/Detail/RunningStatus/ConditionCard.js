import "unpacked/module-15.js";
import "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import { getLocalTime } from "utils/index";
import { NODE_CONDITION_ICONS, getConditionsStatus } from "utils/node";
import Module791 from "components/Base/Text";
import module3963 from "unpacked/module-3963.js";
export default function({ data }) {
    if (!NODE_CONDITION_ICONS[data.type]) {
        return null;
    }
    const n = getConditionsStatus(data);
    const content = <div><div className="tooltip-title">{data.reason}</div><p className="tooltip-desc">{data.message}</p><p className="tooltip-desc">{t("LATEST_UPDATE_VALUE", {
        value: getLocalTime(data.lastHeartbeatTime).format("YYYY-MM-DD HH:mm:ss")
    })}</p></div>;
    return <div className={module3963.card}><div className={module3963.icon}><module186.Icon name={NODE_CONDITION_ICONS[data.type]} size={40}/><module186.Tooltip content={content}>{n === "Running" ? <module186.Icon className={module3963.check} name="check" type="light" size={12}/> : <module186.Icon className={module3963.substract} name="substract" type="light" size={12}/>}</module186.Tooltip></div><Module791 title={t(`NODE_${data.type.toUpperCase()}`)} description={t(`NODE_${data.type.toUpperCase()}_DESC`)}/></div>;
};
