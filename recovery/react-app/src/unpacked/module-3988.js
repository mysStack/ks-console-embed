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
import module3989 from "unpacked/module-3989.js";
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
    let y = "";
    const E = (e)=>((e, t)=>{
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
        const b = E(used);
        const _ = module96(b, 2);
        const O = _[0];
        const S = _[1];
        const C = E(total);
        const D = module96(C, 2);
        const k = D[0];
        const N = D[1];
        g = O;
        y = k;
        v = S / N;
    }
    v = Math.min(Math.max(v, 0), 1);
    const T = name.indexOf("gpu") > -1 ? "gpu" : name;
    const R = T === "gpu" ? `${T}.limit` : T;
    return <div className={module3989.quota}><module186.Icon name={ICON_TYPES[T] || "resource"} size={40}/><div className={module3989.item}><div>{((e = "")=>{
        if (ICON_TYPES[T]) {
            return t(e.replace(/[. ]/g, "_").toUpperCase());
        }
        return e;
    })(R)}</div><p>{t("RESOURCE_TYPE_SCAP")}</p></div><div className={module3989.item}><div>{((used_1)=>{
        if (y && !g) {
            const t = ICON_TYPES[name] || !h[y] ? 1 : h[y];
            return `${used_1 / t}${used_1 > 0 ? y : ""}`;
        }
        return used_1;
    })(used)}</div><p>{t("USED")}</p></div><div className={module3989.item}><div>{module159(total) ? t("NO_LIMIT_TCAP") : total}</div><p>{t("QUOTA")}</p></div><div className={module3989.item} style={{
        flex: 3
    }}><div>{t("USAGE")}</div><Module1043 value={Math.min(v, 1)} className={module3989.bar} rightText={total ? "" : t("NO_LIMIT")} text={t("USED_PERCENT", {
        percent: Number((100 * v).toFixed(2))
    })}/></div></div>;
};
