import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-31.js";
import "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module814 from "./module-814.js";
import module1905 from "./module-1905.js";
const PComponent = function({ type = "worker", container, onEdit, onDelete, disabled }) {
    const extras = <div className={module1905.inputs}><module186.Input defaultValue={container.image} onChange={function(e, t) {
        container.image = t;
    }} disabled={disabled}/></div>;
    const title = type === "init" ? <span>{container.name}<module186.Tag className="margin-l8" type="warning">{t("INIT_CONTAINER")}</module186.Tag></span> : container.name;
    return <module814.Item icon="docker" title={title} className={module1905.card} description={t("GRAYSCALE_IMAGE", {
        image: container.image
    })} extras={extras} onDelete={!disabled && function() {
        return onDelete({
            type,
            ...container
        });
    }} onEdit={!disabled && function() {
        return onEdit({
            type,
            ...container
        });
    }}/>;
};
PComponent.propTypes = {
    container: module1.object
};
export default PComponent;
