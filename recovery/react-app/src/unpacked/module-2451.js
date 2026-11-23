import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-87.js";
import "./module-16.js";
import "./module-24.js";
import "./module-85.js";
import "./module-188.js";
import "./module-7.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "./module-28.js";
import "./module-4.js";
import * as module553 from "./module-553.js";
import module3 from "./module-3.js";
import module450 from "./module-450.js";
import module186 from "./module-186.js";
import module796 from "components/Base/Status";
import module1311 from "./module-1311.js";
import module1309 from "./module-1309.js";
import module1312 from "./module-1312.js";
export const Trees = function({ fetch, treeData = [], formData, selectKeys, onSelect }) {
    const y = module553.useState("");
    const E = module96(y, 2);
    const b = E[0];
    const _ = E[1];
    const O = module553.useState(false);
    const S = module96(O, 2);
    const autoExpandParent = S[0];
    const D = S[1];
    const k = module553.useState([]);
    const N = module96(k, 2);
    const expandedKeys = N[0];
    const R = N[1];
    module553.useEffect(function() {
        if (autoExpandParent) {
            const e = function e(treeData_1, a = []) {
                treeData_1?.forEach(function(t) {
                    a.push(t.metadata.name);
                    if (t.spec?.children) {
                        e(t.spec?.children, a);
                    }
                });
                return a;
            }(treeData);
            R(e);
        } else {
            R([]);
        }
    }, [
        autoExpandParent
    ]);
    return module553.default.createElement("div", {
        className: module1311["node-tree-bg"]
    }, module553.default.createElement(module186.InputSearch, {
        className: module1311.search,
        name: "search",
        value: b,
        placeholder: t("SEARCH_BY_NAME"),
        onChange: function(e) {
            _(e);
        },
        autoComplete: "off"
    }), module553.default.createElement("div", {
        className: module1312["select-nodes"]
    }, module553.default.createElement(module186.Icon, {
        className: module1312["select-nodes-icon"],
        name: "listview",
        size: 20,
        type: "coloured"
    }), t("已选择节点")), module553.default.createElement("div", {
        className: module1312.trees
    }, module553.default.createElement("div", {
        className: module3(module1311["node-group__tree-item"], module1311["node-group__tree-item-margin"])
    }, module553.default.createElement("img", {
        className: module1311.icon,
        width: 20,
        src: "/assets/disk_group.svg",
        alt: ""
    }), module553.default.createElement("span", {
        className: module1311["node-group__tree-item-title"],
        onClick: fetch
    }, "全部节点组"), module553.default.createElement(module186.Tooltip, {
        content: t(autoExpandParent ? "全部关闭" : "全部展开")
    }, module553.default.createElement("img", {
        className: module1311["node-group__tree-item-icon-hover"],
        name: autoExpandParent ? "sort-ascending" : "sort-descending",
        width: 20,
        src: `/assets/${autoExpandParent ? "close_all" : "expand_all"}.svg`,
        onClick: function() {
            return D(!autoExpandParent);
        },
        alt: ""
    }))), module553.default.createElement(module1309, {
        treeData,
        expandedKeys,
        onSelect,
        autoExpandParent,
        renderMenu: function(e) {
            const a = formData.find((t)=>t.nodeGroup === e?.metadata?.name) || {};
            if (a.nodeName === undefined) {
                return null;
            }
            const r = a.nodeName ? "手动指定" : "自动分配";
            const n = a.nodeName ? "step_1" : "refresh_fill";
            return module553.default.createElement(module186.Tooltip, {
                content: t(r)
            }, module553.default.createElement("img", {
                width: 16,
                src: `/assets/${n}.svg`,
                alt: ""
            }));
        },
        renderIcon: function(e) {
            const t = flattenTree(treeData).filter((e)=>selectKeys?.includes(e.metadata.name));
            const a = module450(t?.map(function(e) {
                return e.parentKey;
            }));
            return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module796, {
                type: a?.includes(e.metadata.name) ? "Running" : "paused"
            }), module553.default.createElement("img", {
                width: 16,
                src: "/assets/disk_group.svg",
                alt: ""
            }));
        },
        filterName: b.searchValue,
        showNumber: true
    })));
};
export function flattenTree(e) {
    return e.reduce((acc, item)=>acc.concat([
            item
        ], flattenTree(item.spec.children || [])), []);
}
