import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module4922 from "unpacked/module-4922.js";
export default function({ status, toEvent }) {
    const u = status?.conditions ?? [];
    const DComponent = (status)=><module186.Icon className={ICON_TYPES[status].name === "close" ? module4922.closeIcon : ""} name={ICON_TYPES[status].name} size={15} color={{
            primary: "#fff",
            secondary: ICON_TYPES[status].color
        }}/>;
    return <module186.Tooltip content=<div><div>{t("STATUS_INFORMATION")}</div>{u.map((e, a)=><div className={module4922.textItem} key={a}><div className={module4922.textItemTitle}>{DComponent(e.status)}<span>{STATUS_TITLE[e.type]}</span></div><ul><li>{t("STATUS_VALUE", {
            value: e.status
        })}</li><li>{e.reason && t("REASON_VALUE", {
            value: e.reason
        })}</li><li>{e.message && t("MESSAGE_VALUE", {
            value: e.message
        })}</li></ul></div>)}<module186.Button type="primary" onClick={toEvent} className="width-full">{t("VIEW_EVENTS")}</module186.Button></div> placement="right"><div className={module4922.container}>{u.map((e, t)=><div className={module4922.item} key={t}>{DComponent(e.status)}</div>)}</div></module186.Tooltip>;
};
export var ICON_TYPES = {
    False: {
        name: "close",
        color: "#AB2F29"
    },
    True: {
        name: "success",
        color: "#55BC8A"
    },
    Unknown: {
        name: "question",
        color: "#E0992C"
    }
};
export var STATUS_TITLE = {
    Ready: t("STRETCH_OBJECT_READY"),
    Active: t("TRIGGER_ACTIVE"),
    Fallback: t("RETRACTOR_FALLBACK")
};
