import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-86.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-98.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import * as module553 from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module195 from "unpacked/module-195.js";
import { memoryFormat } from "utils/index";
import { QUOTAS_MAP } from "utils/constants";
import module790 from "components/Base/Panel";
import module1412 from "unpacked/module-1412.js";
import module1413 from "unpacked/module-1413.js";
import module3988 from "unpacked/module-3988.js";
import module3990 from "unpacked/module-3990.js";
export default function({ detail, relateStorageClass = [], allStorageClass = [], storageClassResource = [] }) {
    const D = module553.useState([]);
    const k = module96(D, 2);
    const N = k[0];
    const T = k[1];
    module553.useEffect(function() {
        if (detail.used) {
            const e = Object.entries(QUOTAS_MAP).map((e)=>{
                const t = module96(e, 2);
                return {
                    label: t[0],
                    ...t[1]
                };
            });
            Object.entries(detail.used).forEach((t)=>{
                const a = module96(t, 1)[0];
                const r = e.find((e)=>e.name === a);
                if (module63(r)) {
                    e.push({
                        label: a,
                        name: a
                    });
                }
            });
            const t = e.filter((e)=>!e.name.includes(_[0]) && !e.name.includes(_[1]));
            T(t);
        }
    }, [
        detail
    ]);
    return module553.default.createElement(module790, {
        className: module3990.wrapper,
        title: t("PROJECT_QUOTA_PL")
    }, N.map(({ label, name })=>module553.default.createElement(module3988, {
            key: label,
            name: label,
            total: module26(detail, `hard["${name}"]`),
            used: module26(detail, `used["${name}"]`, 0),
            left: module26(detail, `left["${name}"]`)
        })), storageClassResource.map((e)=>{
        const t = e.name.indexOf("requests.storage") !== -1;
        let e_used = e.used;
        let e_total = e.total;
        if (t && module195(e.used)) {
            e_used = memoryFormat(e.used, "Gi");
        }
        if (t && module195(e.total)) {
            e_total = memoryFormat(e.total, "Gi");
        }
        return module553.default.createElement(module1413, {
            iconName: "storage",
            ...e,
            used: e_used,
            total: e_total
        });
    }), !module63(relateStorageClass) && Object.entries(relateStorageClass).map((e)=>{
        const t = module96(e, 2);
        const a = t[0];
        const data = t[1];
        return module553.default.createElement(module1412, {
            key: a,
            name: a,
            data,
            allStorageClass
        });
    }));
};
function b(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
var _ = [
    "requests.storage",
    "persistentvolumeclaims"
];
