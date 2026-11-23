import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-29.js";
import "./module-315.js";
import "./module-4.js";
import "./module-553.js";
import module1 from "./module-1.js";
import module451 from "./module-451.js";
import module814 from "./module-814.js";
import { CREATE_TRIGGER_TYPE_OPTIONS } from "./module-72.js";
const IComponent = function({ trigger, onDelete, onEdit, index }) {
    const i = {};
    if (onDelete) {
        i.onDelete = function() {
            return onDelete(index);
        };
    }
    if (onEdit) {
        i.onEdit = function() {
            return onEdit(trigger, index);
        };
    }
    const f = CREATE_TRIGGER_TYPE_OPTIONS.find((e)=>e.value === trigger.type) || CREATE_TRIGGER_TYPE_OPTIONS[2];
    return <module814.Item icon={f.icon} title={module451(trigger.type)} description={f.description} {...i}/>;
};
IComponent.propTypes = {
    container: module1.object
};
export default IComponent;
