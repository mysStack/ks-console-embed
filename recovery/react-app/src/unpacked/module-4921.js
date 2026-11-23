import "unpacked/module-15.js";
import "unpacked/module-29.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import * as module553 from "unpacked/module-553.js";
import module790 from "components/Base/Panel";
import module789 from "components/Base/Avatar";
import module186 from "unpacked/module-186.js";
import { ICON_TYPES, STATUS_TITLE } from "unpacked/module-1979.js";
import module4923 from "unpacked/module-4923.js";
const f = module553.memo(function({ detail }) {
    const o = detail?.status?.conditions ?? [];
    const f = [
        {
            icon: "front-sight",
            title: t("STRETCH_OBJECT_READY"),
            type: "Ready"
        },
        {
            icon: "stretch",
            title: t("TRIGGER_ACTIVE"),
            type: "Active"
        },
        {
            icon: "time-backup",
            title: t("RETRACTOR_FALLBACK"),
            type: "Fallback"
        }
    ];
    return module553.default.createElement(module790, {
        title: t("STATUS_INFORMATION")
    }, module553.default.createElement("div", {
        className: module4923.scalingObject
    }, module553.default.createElement("div", {
        className: module4923.scalingObjectBody
    }, module553.default.createElement("div", {
        className: module4923.itemBoxBody
    }, f.map((e, key)=>module553.default.createElement("div", {
            className: module4923.itemBoxBodyItem,
            key
        }, module553.default.createElement(module789, {
            iconSize: 40,
            icon: e.icon,
            title: e.title,
            noLink: true
        }), module553.default.createElement("span", {
            className: module4923.itemMoreMessage
        }, ((e)=>{
            let n;
            const s = o.find((t)=>t.type === e.type);
            const l = ICON_TYPES[s.status]?.name ?? "success";
            return module553.default.createElement(module186.Tooltip, {
                content: (n = s, module553.default.createElement("div", null, module553.default.createElement("p", null, STATUS_TITLE[n.type]), module553.default.createElement("ul", null, module553.default.createElement("li", null, t("STATUS_VALUE", {
                    value: n.status
                })), module553.default.createElement("li", null, n.reason && t("REASON_VALUE", {
                    value: n.reason
                })), module553.default.createElement("li", null, n.message && t("MESSAGE_VALUE", {
                    value: n.message
                })))))
            }, module553.default.createElement(module186.Icon, {
                size: 15,
                name: l,
                className: l === "close" ? module4923.closeIcon : "",
                color: {
                    primary: "#fff",
                    secondary: ICON_TYPES[s.status].color
                }
            }));
        })(e))))))));
});
export default f;
