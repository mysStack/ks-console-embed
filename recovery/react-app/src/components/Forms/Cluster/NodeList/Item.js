import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import { NODE_ROLE_TAG_TYPE } from "utils/constants";
import module814 from "components/Base/List";
const SComponent = function({ index, node, onDelete, onEdit }) {
    const title = <span>{node.name}{node.roles.map((e)=><module186.Tag key={e} className="margin-l8" type={NODE_ROLE_TAG_TYPE[e]}>{e}</module186.Tag>)}</span>;
    return <module814.Item icon="nodes" title={title} description={node.address} onDelete={function() {
        return onDelete(node);
    }} onEdit={function() {
        return onEdit(index);
    }}/>;
};
SComponent.propTypes = {
    node: module1.object
};
export default SComponent;
