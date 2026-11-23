import "./module-15.js";
import "./module-29.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-315.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module852 from "./module-852.js";
import module791 from "./module-791.js";
import module1313 from "./module-1313.js";
import module1572 from "./module-1572.js";
import { EdgewizeNodeTable } from "./module-2455.js";
import module1312 from "./module-1312.js";
export const NodeGroup = function(e) {
    const { detail, cluster, formData, onSelect } = e;
    const ref = module553.createRef();
    const y = module553.useState(false);
    const E = module96(y, 2);
    const b = E[0];
    const _ = E[1];
    const O = module553.useState(false);
    const S = module96(O, 2);
    const C = S[0];
    const setEdgeNodeStatus = S[1];
    const selectKeys = formData?.map(function(e) {
        return e.nodeName;
    });
    module553.useEffect(function() {
        if (detail) {
            const e = formData.find((e)=>e.nodeGroup === detail.metadata.name);
            _(!!e && !e?.nodeName);
        }
    }, [
        detail
    ]);
    return module553.default.createElement(module553.default.Fragment, null, detail ? module553.default.createElement("div", null, module553.default.createElement(module1572, {
        cluster,
        detail,
        renderBtn: C && module553.default.createElement(module852, {
            className: module1312.switch,
            text: t("IPPOOL_AUTO_ASSIGN"),
            checked: b,
            onChange: function(e) {
                _(e);
                onSelect(detail, "");
            }
        })
    }), module553.default.createElement(EdgewizeNodeTable, {
        ref,
        ...e,
        node: detail,
        enabled: b,
        cluster,
        selectKeys,
        onSelect: function(e) {
            onSelect(detail, e.metadata?.name);
        },
        setEdgeNodeStatus
    })) : module553.default.createElement("div", null, module553.default.createElement("div", {
        className: module3(module1312["select-nodes"], module1312["select-nodes-normal"])
    }, module553.default.createElement(module186.Icon, {
        className: module1312["select-nodes-icon"],
        name: "listview",
        size: 20
    }), t("已选择节点")), module553.default.createElement("div", {
        className: module1313.container
    }, formData?.map(function(e) {
        return module553.default.createElement("div", {
            className: module3(module1313.listItem, module1313.card)
        }, module553.default.createElement(module791, {
            title: e.nodeGroup,
            icon: function() {
                return module553.default.createElement("img", {
                    width: 40,
                    src: "/assets/disk_group.svg",
                    alt: ""
                });
            },
            description: t("NODE_GROUP")
        }), module553.default.createElement(module791, {
            title: e.nodeName,
            icon: "nodes",
            description: t("EDGE_NODE_PL")
        }));
    }))));
};
