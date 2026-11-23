import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
import "./module-553.js";
import module1 from "./module-1.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import module814 from "./module-814.js";
import { cpuFormat, memoryFormat } from "./module-52.js";
import module4433 from "./module-4433.js";
const PComponent = function(e) {
    let extras;
    const e_type = e.type;
    const n = e_type === undefined ? "worker" : e_type;
    const e_container = e.container;
    const p = module26(e_container, "resources.limits", {});
    const m = module26(e_container, "resources.requests", {});
    if (e_container.name === "istio-proxy") {
        return <module814.Item icon="istio" title={e_container.name} description={t("IMAGE_VALUE", {
            value: e_container.image
        })}/>;
    }
    extras = module63(p) && module63(m) ? <div className={module4433.limits}><module186.Icon name="exclamation"/><span> {t("NO_RESOURCE_LIMIT")}</span></div> : <div className={module4433.limits}>{(p.cpu || m.cpu) && <span className={module4433.limit}><module186.Icon name="cpu" size={20}/><span>{`${m.cpu ? cpuFormat(m.cpu) : 0} – ${p.cpu ? cpuFormat(p.cpu) : "∞"}`}</span></span>}{(p.memory || m.memory) && <span className={module4433.limit}><module186.Icon name="memory" size={20}/>{`${m.memory ? `${memoryFormat(m.memory)} MiB` : 0} – ${p.memory ? `${memoryFormat(p.memory)} MiB` : "∞"}`}</span>}</div>;
    const title = n === "init" ? <span>{e_container.name}<module186.Tag className="margin-l8" type="warning">{t("INIT_CONTAINER")}</module186.Tag></span> : e_container.name;
    return <module814.Item icon="docker" title={title} description={t("IMAGE_VALUE", {
        value: e_container.image
    })} extras={extras}/>;
};
PComponent.propTypes = {
    container: module1.object
};
export default PComponent;
