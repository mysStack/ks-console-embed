import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-84.js";
import "./module-16.js";
import "./module-85.js";
import "./module-191.js";
import "./module-160.js";
import "./module-10.js";
import "./module-315.js";
import module31 from "./module-31.js";
import "./module-58.js";
import module3 from "./module-3.js";
import Module1550 from "./module-1550.js";
import Module791 from "./module-791.js";
import module26 from "./module-26.js";
import module1 from "./module-1.js";
import "./module-553.js";
import { getDisplayName } from "./module-52.js";
import { getOverlayStatus } from "./module-434.js";
import module2408 from "./module-2408.js";
const YComponent = function(e) {
    const { list, name, icon, type, isOutdated, hideColumns = [], ...rest } = e;
    let e_value = e.value;
    let e_onChange = e.onChange;
    if (type === "array") {
        e_value = JSON.parse(e_value ?? "[]")[0];
        e_onChange = function(t) {
            e.onChange(JSON.stringify([
                t
            ]));
        };
    }
    return <Module1550 name={name} options={list} renderOption={function(e) {
        const e___empty = e.__empty;
        const n = getOverlayStatus(e);
        if (e___empty) {
            return <div key="empty" className={module3(module2408.option, module2408.empty)}><Module791 title={t("SELECT_POD_IP_POOL")} icon={icon} description={t("MIGRATE_POD_IP_POOL_TIP")}/></div>;
        }
        return <div key={e.name} className={module3(module2408.option, module31({}, module2408.isOutdated, isOutdated))}><Module791 title={getDisplayName(e)} icon={icon} description={e.description || "-"} ellipsis/><Module791 ellipsis title={module26(e, "status.unallocated")} description={t("AVAILABLE_ADDRESSES")}/><Module791 ellipsis title={e.cidr} description={t("NETWORK_SEGMENT")}/>{!hideColumns.includes("blockSize") && <Module791 title={e.blockSize ?? "-"} description={t("IPPOOL_BLOCK_SIZE")}/>}{!isOutdated && <Module791 ellipsis title=<div><span className="font-bold">{n.type}</span>{n.value && <span style={{
            marginLeft: "4px"
        }}>({n.value})</span>}</div> description={t("IPPOOL_OVERLAY_MODE")}/>}</div>;
    }} {...rest} value={e_value} onChange={e_onChange}/>;
};
export default YComponent;
YComponent.propTypes = {
    list: module1.array.isRequired,
    icon: module1.string,
    name: module1.string,
    value: module1.string,
    onChange: module1.func,
    type: module1.string
};
