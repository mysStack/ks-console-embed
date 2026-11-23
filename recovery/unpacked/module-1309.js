import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-85.js";
import "./module-7.js";
import "./module-31.js";
import module61 from "./module-61.js";
import module96 from "./module-96.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import * as module553 from "./module-553.js";
import module3 from "./module-3.js";
import module450 from "./module-450.js";
import module247 from "./module-247.js";
import module5770 from "./module-5770.js";
import module186 from "./module-186.js";
import module2435 from "./module-2435.js";
function switcherIcon(e) {
    if (e.data.children && e.data.children.length) {
        if (e.expanded) {
            return module553.default.createElement(module186.Icon, {
                name: "triangle-down",
                size: 16
            });
        }
        return module553.default.createElement(module186.Icon, {
            name: "triangle-right",
            size: 16
        });
    }
    return null;
}
export function TreeDemo({ treeData, autoExpandParent, renderMenu, filterName, expandedKeys, onSelect, renderIcon, showNumber }) {
    const E = showNumber === undefined || showNumber;
    const bRef = module553.useRef();
    const _ = module553.useState([]);
    const O = module96(_, 2);
    const treeData_1 = O[0];
    const C = O[1];
    const D = module553.useState(false);
    const k = module96(D, 2);
    const autoExpandParent_1 = k[0];
    const T = k[1];
    const R = module553.useState([]);
    const I = module96(R, 2);
    const expandedKeys_1 = I[0];
    const M = I[1];
    const P = module553.useState("");
    const A = module96(P, 2);
    const j = A[0];
    const L = A[1];
    const x = module553.useMemo(function() {
        return function e(treeData_1_1, a = []) {
            treeData_1_1?.map(function(t) {
                a.push(t.parentKey);
                if (t.children) {
                    return e(t.children, a);
                }
            });
            return a;
        }(treeData_1);
    }, [
        treeData_1
    ]);
    function U(e) {
        const e_metadata = e.metadata;
        const l_name = e_metadata.name;
        const o = e_metadata.annotations["kubesphere.io/alias-name"];
        const s = (bRef?.current?.offsetWidth || 290) - e.parentKey?.length / 2 * 22 - 80;
        const f = E ? ` (${e.spec.nodes?.length || 0})` : "";
        return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("span", {
            className: module2435["tree-node-title"],
            title: (o || l_name) + f,
            style: {
                minWidth: s,
                maxWidth: s
            }
        }, module553.default.createElement("span", {
            className: module2435["tree-node-title-text"]
        }, o || l_name), l_name && o && module553.default.createElement("span", {
            className: module2435["tree-node-des"]
        }, "（", l_name, "）"), f), module553.default.createElement("span", {
            className: module3("rc-tree-node-right", j === e.key && "rc-tree-node-select")
        }, renderMenu?.(e)));
    }
    module553.useEffect(function() {
        T(autoExpandParent);
    }, [
        autoExpandParent
    ]);
    module553.useEffect(function() {
        if (filterName) {
            const e = x?.filter(function(e) {
                return e.find((e)=>e?.includes(filterName));
            });
            M(module450(module247(e)));
        } else {
            if (expandedKeys) {
                M(expandedKeys);
            }
        }
    }, [
        filterName,
        expandedKeys
    ]);
    module553.useEffect(function() {
        C(function e(treeData_1, a = []) {
            return treeData_1.map((t)=>{
                t.key = t.metadata.name;
                const n = [
                    t.key,
                    t.metadata.annotations?.["kubesphere.io/alias-name"]
                ];
                t.aliasName = n[1] ? `${n[1]}（${n[0]}）` : n[0];
                t.parentKey = [].concat(module61(a), n);
                t.title = U(t);
                if (t.spec.children) {
                    t.children = e(t.spec.children, t.parentKey);
                }
                return t;
            });
        }(treeData));
    }, [
        treeData,
        autoExpandParent,
        j
    ]);
    return module553.default.createElement("div", {
        ref: bRef
    }, module553.default.createElement(module5770, {
        treeData: treeData_1,
        icon: function(e) {
            return renderIcon?.(e) || module553.default.createElement("img", {
                width: 16,
                src: "/assets/disk_group.svg",
                alt: ""
            });
        },
        switcherIcon,
        itemHeight: 36,
        autoExpandParent: autoExpandParent_1,
        expandedKeys: expandedKeys_1,
        onExpand: function(e) {
            M(e);
            T(false);
        },
        onClick: function(e, t) {
            if (!j.includes(t.key)) {
                L(t.key);
            }
            if (!t.selected && onSelect) {
                const r = !t.spec.children?.length;
                onSelect?.({
                    ...t,
                    selected: !t.selected
                }, r);
            }
        },
        filterTreeNode: filterName && function(e) {
            return !!filterName && (e.key.includes(filterName) || e.metadata?.annotations?.["kubesphere.io/alias-name"]?.includes(filterName));
        }
    }));
}
export default TreeDemo;
