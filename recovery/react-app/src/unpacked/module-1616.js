import "./module-15.js";
import "./module-553.js";
import module186 from "./module-186.js";
import { isAppIsRadonDBAndAuthorized } from "utils/index";
import module2640 from "./module-2640.js";
export default function({ app, iconSize = 20, isShowTip }) {
    const i = isShowTip === undefined || isShowTip;
    const f = isAppIsRadonDBAndAuthorized(app);
    const { isRadondb, isSupport } = f;
    if (isRadondb) {
        const color = isSupport ? {
            primary: "#fff",
            secondary: "#55BC8A"
        } : {
            primary: "#fff",
            secondary: "#CCD3DB"
        };
        return <div className={module2640.content}><module186.Tooltip content={i ? isSupport ? <div className={module2640.authorizedTip}><div className={module2640.authorizedTipTitle}><module186.Icon name="success" color={{
            primary: "#fff",
            secondary: "#55BC8A"
        }}/><span>{t("APP_AUTHORIZED")}</span></div></div> : <div className={module2640.authorizedTip}><div className={module2640.authorizedTipTitle}><module186.Icon name="information" color={{
            primary: "#fff",
            secondary: "#F5A623"
        }}/><span>{t("APP_UNAUTHORIZED")}</span></div></div> : ""}><module186.Icon name="certification" size={iconSize} color={color}/></module186.Tooltip></div>;
    }
    return null;
};
