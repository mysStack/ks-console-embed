import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-7.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-31.js";
import "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import module814 from "components/Base/List";
import { cpuFormat, memoryFormat } from "utils/index";
import module1298 from "unpacked/module-1298.js";
const VComponent = function(e) {
    let extras;
    const e_type = e.type;
    const n = e_type === undefined ? "worker" : e_type;
    const { container, onDelete, onEdit, readOnly } = e;
    const g = module26(container, "resources.limits", {});
    const y = module26(container, "resources.requests", {});
    if (container.name === "istio-proxy") {
        return <module814.Item icon="istio" title={container.name} description={t("IMAGE_VALUE", {
            value: container.image
        })}/>;
    }
    extras = module63(g) && module63(y) ? <div className={module1298.limits}><module186.Icon name="exclamation"/><span> {t("NO_RESOURCE_LIMIT")}</span></div> : <div className={module1298.limits}>{(g.cpu || y.cpu) && <span className={module1298.limit}><module186.Icon name="cpu" size={20}/><span>{`${y.cpu ? cpuFormat(y.cpu) : 0} – ${g.cpu ? cpuFormat(g.cpu) : "∞"}`}</span></span>}{(g.memory || y.memory) && <span className={module1298.limit}><module186.Icon name="memory" size={20}/>{`${y.memory ? `${memoryFormat(y.memory)} MiB` : 0} – ${g.memory ? `${memoryFormat(g.memory)} MiB` : "∞"}`}</span>}</div>;
    const title = n === "init" ? <span>{container.name}<module186.Tag className="margin-l8" type="warning">{t("INIT_CONTAINER")}</module186.Tag></span> : container.name;
    return <module814.Item icon="docker" title={title} description={t("IMAGE_VALUE", {
        value: container.image
    })} extras={extras} onDelete={!readOnly && function() {
        return onDelete({
            type: n,
            ...container
        });
    }} onEdit={!readOnly && function() {
        return onEdit({
            type: n,
            ...container
        });
    }}/>;
};
VComponent.propTypes = {
    container: module1.object
};
export default VComponent;
