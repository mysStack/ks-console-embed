import "unpacked/module-15.js";
import "unpacked/module-86.js";
import "unpacked/module-18.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-190.js";
import "unpacked/module-24.js";
import "unpacked/module-137.js";
import "unpacked/module-4.js";
import module31 from "unpacked/module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import module1043 from "components/Base/Bar";
import { memoryFormat } from "utils/index";
import module3986 from "unpacked/module-3986.js";
export default function(e) {
    const a = module553.useState(false);
    const r = module96(a, 2);
    const n = r[0];
    const l = r[1];
    return module553.default.createElement("div", {
        className: module3986.card,
        onClick: function() {
            return l(!n);
        }
    }, module553.default.createElement("div", {
        className: module3986.Head
    }, module553.default.createElement(module186.Icon, {
        name: "database",
        size: 40
    }), module553.default.createElement("div", {
        className: module3986.item
    }, module553.default.createElement("p", {
        className: module3986.title
    }, e.name === "storageclass.storage.k8s.io/requests.storage" ? t("STORAGE_RELATED_RESOURCE_LIMIT") : t("STORAGE_RELATED_RESOURCE")), module553.default.createElement("p", {
        className: module3986.desc
    }, t("RESOURCE_TYPE"))), module553.default.createElement("div", {
        className: module3986.item
    }, module553.default.createElement("p", {
        className: module3986.title
    }, e.allStorageClass.length), module553.default.createElement("p", {
        className: module3986.desc
    }, t("TOTAL_STORAGE_CLASS"))), module553.default.createElement("div", {
        className: module3986.item
    }, module553.default.createElement("p", {
        className: module3986.title
    }, e.data.length), module553.default.createElement("p", {
        className: module3986.desc
    }, t("LIMITED_STORAGE_CLASS"))), module553.default.createElement("div", {
        className: module3(module3986.icon, module31({}, module3986.open, n))
    }, e.data.length > 0 && module553.default.createElement(module186.Icon, {
        name: "chevron-down",
        size: 20
    }))), n && e.data.length > 0 && module553.default.createElement("ul", {
        className: module3986.List
    }, e.data.map((a)=>{
        const r = e.name.indexOf("requests.storage") !== -1;
        const n = a.name.split(".")[0];
        let l = 0;
        l = r ? Number(memoryFormat(a.used, "Gi")) / Number(memoryFormat(a.total, "Gi")) : Number(a.used, "Gi") / Number(a.total, "Gi");
        l = Math.min(Math.max(l, 0), 1);
        const u = e.allStorageClass.some((e)=>e.name === n && e.default);
        let o = memoryFormat(a.used, "Gi");
        o = isNaN(o) ? 0 : o;
        return module553.default.createElement("div", {
            className: module3986.inline,
            key: n
        }, module553.default.createElement(module186.Icon, {
            name: "database",
            size: 40
        }), module553.default.createElement("div", {
            className: module3986.item
        }, module553.default.createElement("p", {
            className: module3986.title
        }, n, u && module553.default.createElement("span", {
            className: module3986.default
        }, t("DEFAULT"))), module553.default.createElement("p", {
            className: module3986.desc
        }, t("NAME"))), module553.default.createElement("div", {
            className: module3986.item
        }, module553.default.createElement("p", {
            className: module3986.title
        }, r ? `${o} Gi` : a.used), module553.default.createElement("p", {
            className: module3986.desc
        }, t("USED"))), module553.default.createElement("div", {
            className: module3986.item
        }, module553.default.createElement("p", {
            className: module3986.title
        }, r ? `${memoryFormat(a.total, "Gi")} Gi` : a.total), module553.default.createElement("p", {
            className: module3986.desc
        }, t("RELATED_RESOURCE_QUOTA"))), module553.default.createElement("div", {
            className: module3986.barItem
        }, module553.default.createElement("div", {
            className: module3986.title
        }, t("USAGE")), module553.default.createElement(module1043, {
            value: Math.min(l, 1),
            className: module3986.bar,
            rightText: a.total ? "" : t("NO_LIMIT"),
            text: t("USED_PERCENT", {
                percent: Number((100 * l).toFixed(2))
            })
        })));
    })));
};
