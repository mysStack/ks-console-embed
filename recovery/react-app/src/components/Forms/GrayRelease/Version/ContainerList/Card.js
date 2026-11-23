import "unpacked/module-12.js";
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
import module186 from "unpacked/module-186.js";
import module814 from "components/Base/List";
import module1905 from "unpacked/module-1905.js";
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
