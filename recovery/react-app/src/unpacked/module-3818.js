import "unpacked/module-15.js";
import "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module451 from "unpacked/module-451.js";
import module26 from "unpacked/module-26.js";
import Module790 from "components/Base/Panel";
import { compareVersion } from "utils/index";
import module3819 from "unpacked/module-3819.js";
export default function({ component, type, handleCreateGateway, cluster, canEdit, inCluster }) {
    const h = component || type;
    const v = globals.app.isMultiCluster ? module26(globals, `clusterConfig.${cluster}.ksVersion`) : module26(globals, "ksConfig.ksVersion");
    const disabled = type === "workspace" && compareVersion(v, "v3.4.0") < 0;
    return <Module790 className="margin-t12 margin-b12"><div className={module3819.empty}><div className={module3819.icon}><module186.Icon name="loadbalancer" size={48}/></div><div className={module3819.text}><div>{t(`${module451(h).toUpperCase()}_GATEWAY_NOT_ENABLED`)}</div>{disabled ? <p>{t("CLUSTER_UPGRADE_REQUIRED", {
        version: "3.4"
    })}</p> : inCluster ? <p>{t(`ENT_${h.toUpperCase()}_ENABLE_GATEWAY_DESC`)}</p> : null}</div>{(component === "cluster" || type) && !canEdit && <module186.Button type="control" onClick={handleCreateGateway} disabled={disabled}>{t("ENABLE_GATEWAY")}</module186.Button>}</div></Module790>;
};
