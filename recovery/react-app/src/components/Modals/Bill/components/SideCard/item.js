import "unpacked/module-15.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-24.js";
import "unpacked/module-64.js";
import module31 from "unpacked/module-31.js";
import "unpacked/module-4.js";
import "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import Module791 from "components/Base/Text";
import Module838 from "components/Base/Indicator";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import { CLUSTER_GROUP_TAG_TYPE } from "utils/constants";
import module3525 from "unpacked/module-3525.js";
import Module1389 from "unpacked/module-1389.js";
export default function({ data, active, getCurrentMeterData, getChildrenData, getCheckData, noIcon, style, loading, isCheck, clusterList }) {
    let a;
    const { icon, status, desc, name, type, labelSelector, disabled } = data;
    const M = disabled !== undefined && disabled;
    const isActive = !module63(active) && active.name === name && active.type === type;
    const A = type === "pods";
    const j = module26(module14.toJS(data), "_origin.clusters", []);
    const L = !(name === "system-workspace" || j.length !== 0);
    return <div className={module3(module3525.billCard, (a = {}, module31(a, module3525.selected, isActive), module31(a, module3525.noHover, noIcon), module31(a, module3525.disabled, M), a))} style={style} onClick={M ? null : function() {
        if (noIcon !== true) {
            getCurrentMeterData({
                name,
                type,
                labelSelector
            });
        }
    }}>{noIcon ? null : <div className={module3525.checkContainer} onClick={function(e) {
        return e.stopPropagation();
    }}><module186.Checkbox checked={isCheck} onClick={function() {
        return getCheckData({
            name,
            type
        });
    }}/></div>}<div className={module3525.info}><div className={module3525.title}><Module838 type={status} className={module3525.indicator}/><Module1389 name={name} isActive={isActive} icon={icon} type={type}/></div><div className={module3525.desc}><Module791 title={name} description={desc ? t(`${desc.toUpperCase().replace(/\s+/g, "_")}_SCAP`) : type !== "cluster" || desc ? "" : t("CLUSTER_SCAP")}/></div>{((name_1)=>{
        if (type !== "workspaces" || clusterList.length < 1) {
            return null;
        }
        const t = (globals.app.isMultiCluster && name_1 === "system-workspace" ? clusterList : module26(data, "_origin.clusters", [])).map((e)=>clusterList.find((t)=>t.name === e.name) || null).filter((e)=>!!e);
        if (t.length < 1) {
            return null;
        }
        return <div className={module3525.tagContainer}>{t.map((e)=><module186.Tag key={e.name} type={CLUSTER_GROUP_TAG_TYPE[e._origin.group]}><module186.Icon name={e.icon || "kubernetes"} size={16} type="light"/>{e.name}</module186.Tag>)}</div>;
    })(name)}</div>{M ? <div className={module3525.unMeter}>{L ? <module186.Tooltip content={t("ADD_CLUSTER_FOR_WORKSPACE")} placement="topRight"><module186.Icon name="information" color={{
        primary: "#ffc781",
        secondary: "#f5a623"
    }}/></module186.Tooltip> : <module186.Tooltip content={t("CLUSTER_UPGRADE_REQUIRED", {
        version: " v3.1.0"
    })} placement="topRight"><module186.Icon name="update" color={{
        primary: "#ffc781",
        secondary: "#f5a623"
    }}/></module186.Tooltip>}</div> : A || noIcon ? null : <div className={module3525.symbol} onClick={function(e) {
        return ((e, t)=>{
            e.stopPropagation();
            if (noIcon !== true || loading) {
                getChildrenData(t);
            }
        })(e, {
            name,
            type,
            labelSelector
        });
    }}><module186.Icon name="chevron-right" type={isActive ? "light" : "dark"} size={20}/></div>}</div>;
};
