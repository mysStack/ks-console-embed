import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-24.js";
import "unpacked/module-62.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import { Link } from "unpacked/module-433.js";
import module186 from "unpacked/module-186.js";
import module814 from "components/Base/List";
import module1826 from "unpacked/module-1826.js";
const PComponent = function({ volume, match, isMultiProject, isEdgeWize }) {
    let description;
    let details;
    const match_params = match.params;
    const { workspace, cluster, namespace } = match_params;
    const E = `${isEdgeWize ? "/v2/edgewize" : ""}${workspace ? `/${workspace}` : ""}/clusters/${cluster}/projects/${namespace}`;
    let icon = "storage";
    if (volume.hostPath) {
        description = t("TYPE_HOSTPATH");
        details = [
            {
                title: module26(volume, "hostPath.path", "-"),
                description: "HostPath"
            }
        ];
    } else if (volume.emptyDir) {
        description = t("TYPE_EMPTYDIR");
        details = [];
    } else if (volume.configMap) {
        icon = "hammer";
        description = t("TYPE_CONFIGMAP");
        const _ = module26(volume, "configMap.name", "-");
        details = [
            {
                title: isMultiProject ? _ : <Link to={`${E}/configmaps/${_}`}>{_}</Link>,
                description: t("CONFIGMAP")
            }
        ];
    } else if (volume.secret) {
        icon = "key";
        description = t("TYPE_SECRET");
        const O = module26(volume, "secret.secretName", "-");
        details = [
            {
                title: isMultiProject ? O : <Link to={`${E}/secrets/${O}`}>{O}</Link>,
                description: t("SECRET")
            }
        ];
    } else {
        description = t("STORAGE_CLASS_VALUE", {
            value: module26(volume, "storageClassName", "-")
        });
        const S = module26(volume, "persistentVolumeClaim.claimName", "-");
        details = [
            {
                title: isMultiProject ? S : <Link to={`${E}/volumes/${S}`}>{S}</Link>,
                description: t("PERSISTENT_VOLUME_CLAIM")
            },
            {
                title: module26(volume, "capacity", "-"),
                description: t("CAPACITY")
            },
            {
                title: module26(volume, "accessMode", "-"),
                description: t("ACCESS_MODE_SCAP")
            }
        ];
    }
    const extras = !module63(volume.volumeMounts) && <div className={module1826.mount}><ul>{volume.volumeMounts.map(({ containerName, mountPath, subPath, logPath, readOnly })=><li key={`${containerName}-${mountPath}`}><div><module186.Icon name="docker" size={20}/><span>{containerName}</span></div><div><module186.Icon name="mgmt-node" size={20}/><span>{mountPath}</span><span className="text-secondary"> ({readOnly ? t("READ_ONLY_LOW") : t("READ_AND_WRITE_LOW")})</span></div>{subPath && <div><module186.Icon name="textfield" size={20}/> <span>{subPath}</span></div>}{logPath && <div><module186.Icon name="log" size={20}/> <span>{logPath}</span></div>}</li>)}</ul></div>;
    const title = module26(volume, "mountName", volume.name);
    return <module814.Item icon={icon} title={title} titleClass={module1826.title} description={description} extras={extras} details={details}/>;
};
PComponent.propTypes = {
    container: module1.object
};
export default PComponent;
