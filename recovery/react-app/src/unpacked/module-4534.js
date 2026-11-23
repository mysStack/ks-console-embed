import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-6.js";
import "unpacked/module-86.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-190.js";
import "unpacked/module-10.js";
import "unpacked/module-24.js";
import "unpacked/module-62.js";
import "unpacked/module-64.js";
import "unpacked/module-7.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "unpacked/module-4.js";
import "unpacked/module-436.js";
import "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module159 from "unpacked/module-159.js";
import module186 from "unpacked/module-186.js";
import Module1043 from "components/Base/Bar";
import { cpuFormat, memoryFormat } from "utils/index";
import { ICON_TYPES } from "utils/constants";
import module4535 from "unpacked/module-4535.js";
const m = [
    "limits.cpu",
    "limits.memory",
    "pods"
];
const h = {
    Ti: 1024 ** 4,
    Gi: 1024 ** 3,
    Mi: 1024 ** 2,
    Ki: 1024,
    TB: 1000 ** 4,
    GB: 1000 ** 3,
    MB: 1000 ** 2,
    KB: 1000,
    T: 1000 ** 4,
    G: 1000 ** 3,
    M: 1000 ** 2,
    K: 1000,
    Bytes: 1,
    B: 1
};
export default function({ name, total, used }) {
    if (!total && !Number(used) && m.indexOf(name) === -1) {
        return null;
    }
    let v = 0;
    let g = "";
    let _ = "";
    const y = (e)=>((e, t)=>{
            if (e) {
                return [
                    e,
                    parseFloat(t) * (ICON_TYPES[name] || !h[e] ? 1 : h[e])
                ];
            }
            return [
                "",
                parseFloat(t)
            ];
        })(((e)=>{
            const t = Object.keys(h);
            let a = module26(e.match(/[0-9]+([a-zA-Z]+)/), "1", "");
            t.forEach((e)=>{
                if (a.indexOf(e) > -1) {
                    a = e;
                    return false;
                }
            });
            return a;
        })(e), e);
    if (name === "limits.cpu" || name === "requests.cpu") {
        if (total) {
            v = Number(cpuFormat(used)) / Number(cpuFormat(total));
            used = `${cpuFormat(used)} Core`;
            total = `${cpuFormat(total)} Core`;
        }
    } else if (name === "limits.memory" || name === "requests.memory") {
        if (total) {
            v = Number(memoryFormat(used)) / Number(memoryFormat(total));
            used = `${memoryFormat(used, "Gi")} Gi`;
            total = `${memoryFormat(total, "Gi")} Gi`;
        }
    } else if (total) {
        const E = y(used);
        const b = module96(E, 2);
        const S = b[0];
        const O = b[1];
        const R = y(total);
        const A = module96(R, 2);
        const T = A[0];
        const k = A[1];
        g = S;
        _ = T;
        v = O / k;
    }
    v = Math.min(Math.max(v, 0), 1);
    const D = name.indexOf("gpu") > -1 ? "gpu" : name;
    const C = D === "gpu" ? `${D}.limit` : D;
    return <div className={module4535.quota}><div className={module4535.quotaItem}><module186.Icon name={ICON_TYPES[D] || "resource"} size={40}/><div className={module4535.item}><div>{((e = "")=>{
        if (ICON_TYPES[D]) {
            return t(e.replace(/[. ]/g, "_").toUpperCase());
        }
        return e;
    })(C)}</div><p>{t("RESOURCE_TYPE_SCAP")}</p></div><div className={module4535.item}><div>{((used_1)=>{
        if (_ && !g) {
            const t = ICON_TYPES[name] || !h[_] ? 1 : h[_];
            return `${used_1 / t}${used_1 > 0 ? _ : ""}`;
        }
        return used_1;
    })(used)}</div><p>{t("USED")}</p></div><div className={module4535.item}><div>{module159(total) ? t("NO_LIMIT_TCAP") : total}</div><p>{t("QUOTA")}</p></div></div><Module1043 value={Math.min(v, 1)} className={module4535.bar} rightText={total ? "" : t("NO_LIMIT")} text={t("USED_PERCENT", {
        percent: Number((100 * v).toFixed(2))
    })}/></div>;
};
