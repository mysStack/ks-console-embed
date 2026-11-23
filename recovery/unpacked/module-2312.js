import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-315.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module814 from "./module-814.js";
import module1546 from "./module-1546.js";
const PComponent = function({ volume, onDelete, onEdit }) {
    const c = {};
    if (onDelete) {
        c.onDelete = function() {
            return onDelete(volume.name);
        };
    }
    if (onEdit) {
        c.onEdit = function() {
            return onEdit(volume);
        };
    }
    let description;
    let details;
    let icon = "storage";
    if (volume.hostPath) {
        description = `${t("TYPE_HOSTPATH")}`;
        details = [
            {
                title: module26(volume, "hostPath.path", "-"),
                description: "HostPath"
            }
        ];
    } else if (volume.emptyDir) {
        description = `${t("TYPE_EMPTYDIR")}`;
        details = [];
    } else if (volume.configMap) {
        icon = "hammer";
        description = `${t("TYPE_CONFIGMAP")}`;
        details = [
            {
                title: module26(volume, "configMap.name", "-"),
                description: t("CONFIGMAP")
            }
        ];
    } else if (volume.secret) {
        icon = "key";
        description = `${t("TYPE_SECRET")}`;
        details = [
            {
                title: module26(volume, "secret.secretName", "-"),
                description: t("SECRET")
            }
        ];
    } else {
        description = `${t("STORAGE_CLASS")}: ${module26(volume, "volume.storageClassName", "-")}`;
        details = [
            {
                title: module26(volume, "volume.name", "-"),
                description: t("PERSISTENT_VOLUME_CLAIM")
            },
            {
                title: module26(volume, "volume.capacity", "-"),
                description: t("CAPACITY")
            },
            {
                title: module26(volume, "volume.accessMode", "-"),
                description: t("ACCESS_MODE_TCAP")
            }
        ];
    }
    const extras = !module63(volume.volumeMounts) && <div className={module1546.mount}><ul>{volume.volumeMounts.map(({ containerName, mountPath, subPath, logPath, readOnly })=><li key={mountPath}><div><module186.Icon name="docker" size={20}/><span>{containerName}</span></div><div><module186.Icon name="mgmt-node" size={20}/><span>{mountPath}</span><span className="text-secondary"> ({readOnly ? t("READ_ONLY_LOW") : t("READ_AND_WRITE_LOW")})</span></div>{subPath && <div><module186.Icon name="textfield" size={20}/> <span>{subPath}</span></div>}{logPath && <div><module186.Icon name="log" size={20}/> <span>{logPath}</span></div>}</li>)}</ul></div>;
    return <module814.Item icon={icon} title={volume.name} description={description} extras={extras} details={details} {...c}/>;
};
PComponent.propTypes = {
    container: module1.object
};
export default PComponent;
