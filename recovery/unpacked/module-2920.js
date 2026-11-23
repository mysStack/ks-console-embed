import "./module-15.js";
import module240 from "./module-240.js";
import module788 from "./module-788.js";
import modal from "./module-823.js";
const c = {
    "edgeNode.unbound.nodeGroup": {
        on: function({ resource, params, store, success }) {
            var s = module788.open({
                onOk: function() {
                    store.removeNodeGroupEdgeNode(params).then(()=>{
                        module240.success({
                            content: t("UNBOUND_NODE_GROUP_SUCCESSFULLY")
                        });
                        module788.close(s);
                        if (success) {
                            success();
                        }
                    });
                },
                store,
                modal,
                resource,
                title: t("UNBOUND_NODE_GROUP"),
                desc: t.html("UNBOUND_NODE_GROUP_TIP", {
                    resource,
                    nodegroup: params.nodegroup
                })
            });
        }
    }
};
export default c;
