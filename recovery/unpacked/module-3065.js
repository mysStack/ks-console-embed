import "./module-15.js";
import "./module-16.js";
import module31 from "./module-31.js";
import "./module-553.js";
import module3 from "./module-3.js";
import module1 from "./module-1.js";
import { getSoftIconName } from "./module-983.js";
import module814 from "./module-814.js";
import module3066 from "./module-3066.js";
const DComponent = function({ software, readOnly }) {
    const software_name = software.name;
    return <module814.Item className={module3(module3066.card, module31({}, module3066.unAllowable, readOnly))} icon={getSoftIconName(software_name)} title={software_name} description={t("CONTAINER_ENGINE")}/>;
};
DComponent.propTypes = {
    container: module1.object
};
export default DComponent;
