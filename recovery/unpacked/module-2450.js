import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-22.js";
import "./module-41.js";
import "./module-315.js";
import module61 from "./module-61.js";
import "./module-44.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module791 from "./module-791.js";
import module829 from "./module-829.js";
import module953 from "./module-953.js";
import { Trees } from "./module-2451.js";
import { NodeGroup } from "./module-2452.js";
import module1312 from "./module-1312.js";
const b = new module953;
export function EdgeNodeTableSelector(e) {
    const { cluster, namespace, value, onChange } = e;
    const v = module553.useState(false);
    const _ = module96(v, 2);
    const O = _[0];
    const S = _[1];
    const C = module553.useState([]);
    const D = module96(C, 2);
    const treeData = D[0];
    const N = D[1];
    const T = module553.useState();
    const R = module96(T, 2);
    const detail = R[0];
    const w = R[1];
    function M() {
        return (M = async function e() {
            let t;
            t = await b.getAllNodeTree(cluster);
            N(t);
        }).apply(this, arguments);
    }
    function onOk() {
        w();
    }
    module553.useEffect(function() {
        if (value.length) {
            S(true);
        }
    }, []);
    module553.useEffect(function() {
        (function() {
            M.apply(this, arguments);
        })();
    }, []);
    return module553.default.createElement("div", {
        className: module1312.nodeSelectorsWrapper
    }, module553.default.createElement(module791, {
        className: "margin-b12",
        title: t("SELECT_EDGE_NODE"),
        description: t("SELECT_EDGE_NODE_DESC")
    }), O ? module553.default.createElement("div", {
        className: module1312.nodeSelectors
    }, module553.default.createElement("div", {
        className: module1312["edge-table-selector-box"]
    }, module553.default.createElement(module186.Columns, {
        className: module1312.columns
    }, module553.default.createElement(module186.Column, {
        className: module3(module1312.column, "is-4")
    }, module553.default.createElement(Trees, {
        treeData,
        formData: value,
        selectKeys: value?.map(function(e) {
            return e.nodeGroup;
        }),
        onSelect: function(e) {
            w(e);
        }
    })), module553.default.createElement(module186.Column, {
        className: module1312.column
    }, module553.default.createElement(NodeGroup, {
        ...e,
        cluster,
        detail,
        formData: value,
        onSelect: function(e, nodeName) {
            let a;
            const nodeGroup = e?.metadata.name;
            const o = value.filter((e)=>e.nodeGroup !== nodeGroup);
            a = [].concat(module61(o), [
                {
                    project: namespace,
                    nodeGroup,
                    nodeName
                }
            ]);
            onChange(a);
        }
    })))), detail && module553.default.createElement(module829, {
        className: module1312.confirm,
        onOk,
        onCancel: function() {
            S(false);
            onOk();
        }
    })) : module553.default.createElement(module791, {
        className: module1312.add,
        onClick: function() {
            S(true);
        },
        title: t("ADD_EDGE_NODE"),
        description: t("ADD_EDGE_NODE_DESC")
    }));
}
export default EdgeNodeTableSelector;
