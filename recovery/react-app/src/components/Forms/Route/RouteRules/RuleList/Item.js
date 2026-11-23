import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-29.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-85.js";
import "unpacked/module-4.js";
import module26 from "unpacked/module-26.js";
import module60 from "unpacked/module-60.js";
import "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import Module791 from "components/Base/Text";
import Module1107 from "components/Clusters/ClusterWrapper";
import module1596 from "unpacked/module-1596.js";
const PComponent = function({ index, rule, tls = [], projectDetail, onDelete, onEdit }) {
    const v = tls.find((e)=>e.hosts && e.hosts.includes(rule.host));
    const g = v ? "https" : "http";
    const clusters = module60(rule.clusters) && rule.clusters.map((name)=>({
            name
        }));
    return <div className={module1596.item}><div className={module1596.texts}><Module791 icon="earth" title={rule.host} description=<div className={module1596.description}><span>{t("PROTOCOL_VALUE", {
        value: g.toUpperCase()
    })}</span>{g === "https" && <span>{t("CERTIFICATE_VALUE", {
        value: v.secretName
    })}</span>}</div>/>{module60(clusters) && <Module791 title=<Module1107 clusters={clusters} clustersDetail={projectDetail.clusters}/> description={t("CLUSTER")}/>}</div><div className={module1596.paths}>{rule.http.paths.map((e, a)=><div key={`${e.path}-${a}`} className={module1596.path}><module186.Columns><module186.Column><span>{t("PATH_VALUE", {
            value: e.path
        })}</span></module186.Column><module186.Column><span>{t("SERVICE_VALUE", {
            value: module26(e, "backend.service.name")
        })}</span></module186.Column><module186.Column><span>{t("PORT_VALUE", {
            value: module26(e, "backend.service.port.number")
        })}</span></module186.Column></module186.Columns></div>)}</div><div className="buttons"><module186.Button type="flat" icon="trash" onClick={function() {
        return onDelete(index);
    }}/><module186.Button type="flat" icon="pen" onClick={function() {
        return onEdit(index);
    }}/></div></div>;
};
PComponent.propTypes = {
    rule: module1.object
};
export default PComponent;
