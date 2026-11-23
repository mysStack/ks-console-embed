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
import "./module-22.js";
import "./module-41.js";
import "./module-31.js";
import "./module-44.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module953 from "./module-953.js";
import module1309 from "./module-1309.js";
import module2436 from "./module-2436.js";
const v = new module953;
export function NodeTreeSelect({ cluster, onSelect }) {
    const r = module553.useState([]);
    const n = module96(r, 2);
    const treeData = n[0];
    const f = n[1];
    const m = module553.useState(false);
    const g = module96(m, 2);
    const y = g[0];
    const E = g[1];
    const b = module553.useState("");
    const _ = module96(b, 2);
    const O = _[0];
    const S = _[1];
    const C = module553.useState({
        page: 1,
        limit: 10,
        expandIndex: "",
        searchValue: ""
    });
    const D = module96(C, 2);
    const k = D[0];
    const N = D[1];
    function T() {
        return (T = async function e() {
            let a;
            a = await v.getAllNodeTree(cluster);
            f(a);
        }).apply(this, arguments);
    }
    module553.useEffect(function() {
        (function() {
            T.apply(this, arguments);
        })();
    }, [
        cluster
    ]);
    return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
        className: module2436["tree-select"]
    }, module553.default.createElement("div", {
        className: module2436["tree-select-input"],
        onClick: function() {
            return E(!y);
        }
    }, module553.default.createElement(module186.Input, {
        name: "test",
        value: O,
        placeholder: O,
        onChange: function(e, t) {
            S(t);
        },
        onClick: function() {
            E(false);
        }
    })), y && !!treeData.length && module553.default.createElement("div", {
        className: module2436["tree-select-tree"]
    }, module553.default.createElement(module1309, {
        treeData,
        filterName: O,
        onSelect: function(e) {
            E(false);
            S(e.aliasName);
            if (onSelect) {
                onSelect(e);
            }
            N({
                ...k,
                searchValue: e.metadata.name
            });
        }
    }))));
}
export default NodeTreeSelect;
