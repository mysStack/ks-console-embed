import "./module-15.js";
import "./module-18.js";
import "./module-16.js";
import module26 from "./module-26.js";
import "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module814 from "./module-814.js";
import module1547 from "./module-1547.js";
const FComponent = function({ volume, onDelete, onEdit, banEdit }) {
    const f = banEdit !== undefined && banEdit;
    const details = [
        {
            title: module26(volume, "spec.resources.requests.storage", "-"),
            description: t("CAPACITY")
        },
        {
            title: module26(volume, "spec.accessModes[0]", "-"),
            description: t("ACCESS_MODE_TCAP")
        }
    ];
    const extras = <div className={module1547.mount}><ul>{volume.volumeMounts && volume.volumeMounts.map(({ containerName, mountPath, subPath, readOnly })=><li key={mountPath}><div><module186.Icon name="docker" size={20}/><span>{containerName}</span></div><div><module186.Icon name="mgmt-node" size={20}/> <span>{mountPath}</span><span className="text-secondary"> ({readOnly ? t("READ_ONLY_LOW") : t("READ_AND_WRITE_LOW")})</span></div>{subPath && <div><module186.Icon name="textfield" size={20}/> <span>{subPath}</span></div>}</li>)}</ul></div>;
    if (f) {
        return <module814.Item icon="storage" title={module26(volume, "metadata.name", "-")} description={t("STORAGE_CLASS_VALUE", {
            value: module26(volume, "spec.storageClassName", "-")
        })} extras={extras} details={details}/>;
    }
    return <module814.Item icon="storage" title={module26(volume, "metadata.name", "-")} description={t("STORAGE_CLASS_VALUE", {
        value: module26(volume, "spec.storageClassName", "-")
    })} extras={extras} details={details} onDelete={function() {
        return onDelete(volume.metadata.name);
    }} onEdit={function() {
        return onEdit(volume);
    }}/>;
};
FComponent.propTypes = {
    container: module1.object
};
export default FComponent;
