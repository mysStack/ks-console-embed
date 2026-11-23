import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-315.js";
import module26 from "./module-26.js";
import "./module-553.js";
import module1 from "./module-1.js";
import { Link } from "./module-433.js";
import Module791 from "./module-791.js";
import module1913 from "./module-1913.js";
const FComponent = function({ volume, prefix }) {
    const description = t("STORAGE_CLASS_VALUE", {
        value: module26(volume, "storageClassName", "-")
    });
    const l = [
        {
            title: module26(volume, "capacity", "-"),
            description: t("CAPACITY")
        },
        {
            title: module26(volume, "accessMode", "-"),
            description: t("ACCESS_MODE_TCAP")
        }
    ];
    return <div className={module1913.item}><Module791 icon="storage" title=<Link to={`${prefix}/volumes/${volume.name}`}>{volume.name}</Link> description={description}/>{l.map((e, key)=><Module791 key={key} {...e}/>)}</div>;
};
FComponent.propTypes = {
    container: module1.object
};
export default FComponent;
