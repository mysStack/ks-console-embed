import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-86.js";
import "unpacked/module-18.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-315.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-58.js";
import "unpacked/module-45.js";
import "unpacked/module-118.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module3 from "unpacked/module-3.js";
import module1 from "unpacked/module-1.js";
import * as module553 from "unpacked/module-553.js";
import module1862 from "components/Tree/contextTypes";
import module1863 from "unpacked/module-1863.js";
import module1864 from "components/Tree/TreeNode";
import { arrAdd, arrDel, calcSelectedKeys, conductExpandParent, convertTreeToEntities, getDataAndAria, getPosition, mapChildren, toArray } from "components/Tree/treeUtils";
const _ = ((e)=>{
    module55(r, e);
    var t = ((e)=>{
        const t = (()=>{
            if (typeof Reflect === "undefined" || !Reflect.construct) {
                return false;
            }
            if (Reflect.construct.sham) {
                return false;
            }
            if (typeof Proxy === "function") {
                return true;
            }
            try {
                Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
                return true;
            } catch (e) {
                return false;
            }
        })();
        return function() {
            let r;
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(r);
    function r(...n_1) {
        let e;
        module36(this, r);
        e = t.call(this, ...n_1);
        e.state = {
            keyEntities: {},
            treeNode: [],
            selectedKeys: []
        };
        e.setUncontrolledState = function(t, r) {
            let a = false;
            const n = {};
            Object.keys(t).forEach((r)=>{
                if (!(r in e.props)) {
                    a = true;
                    n[r] = t[r];
                }
            });
            if (a) {
                e.setState(n, r);
            }
        };
        e.onNodeClick = function(t, r) {
            const onClick = e.props.onClick;
            if (onClick) {
                onClick(t, r);
            }
        };
        e.onNodeSelect = function(t, r) {
            let selectedKeys = e.state.selectedKeys;
            const keyEntities = e.state.keyEntities;
            const e_props = e.props;
            const { toggleNodeSelect, onSelect } = e_props;
            const r_props = r.props;
            const { selected, eventKey } = r_props;
            const selected_1 = !selected;
            const selectedNodes = (selectedKeys = !selected_1 && toggleNodeSelect ? arrDel(selectedKeys, eventKey) : [
                eventKey
            ]).map((e)=>{
                const t = keyEntities[e];
                if (t) {
                    return t.node;
                }
                return null;
            }).filter((e)=>e);
            e.setUncontrolledState({
                selectedKeys
            });
            if (onSelect) {
                onSelect(selectedKeys, {
                    event: "select",
                    selected: selected_1,
                    node: r,
                    selectedNodes,
                    nativeEvent: t.nativeEvent
                });
            }
        };
        e.getTreeNodes = function(t) {
            return e.state.keyEntities[t].node;
        };
        e.onNodeExpand = function(t, r) {
            let expandedKeys = e.state.expandedKeys;
            const onExpand = e.props.onExpand;
            const r_props = r.props;
            const o_eventKey = r_props.eventKey;
            const l = !r_props.expanded;
            expandedKeys = l ? arrAdd(expandedKeys, o_eventKey) : arrDel(expandedKeys, o_eventKey);
            e.setUncontrolledState({
                expandedKeys
            });
            if (onExpand) {
                onExpand(expandedKeys, {
                    node: r,
                    expanded: l,
                    nativeEvent: t.nativeEvent
                });
            }
            return null;
        };
        e.renderTreeNode = function(t, r, a = 0) {
            const { keyEntities, expandedKeys = [], selectedKeys = [] } = e.state;
            const pos = getPosition(a, r);
            const f = t.key || pos;
            if (keyEntities[f]) {
                return module553.default.cloneElement(t, {
                    key: f,
                    eventKey: f,
                    pos,
                    expanded: expandedKeys.indexOf(f) !== -1,
                    selected: selectedKeys.indexOf(f) !== -1
                });
            }
            return null;
        };
        return e;
    }
    module37(r, [
        {
            key: "getChildContext",
            value: function() {
                return {
                    tree: {
                        disabled: this.props.disabled,
                        renderTreeNode: this.renderTreeNode,
                        onNodeClick: this.onNodeClick,
                        onNodeExpand: this.onNodeExpand,
                        onNodeSelect: this.onNodeSelect
                    }
                };
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { className, showLine } = props;
                const treeNode = this.state.treeNode;
                const l = getDataAndAria(this.props);
                return module553.default.createElement("ul", {
                    ...l,
                    className: module3(module1863.tree, className, module31({}, module1863.showLine, showLine)),
                    role: "tree",
                    unselectable: "on"
                }, mapChildren(treeNode, function(t, r) {
                    return _this.renderTreeNode(t, r);
                }));
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(prevProps, t) {
                const t_prevProps = t.prevProps;
                const { expandedKeys, defaultExpandedKeys } = prevProps;
                const o = {
                    prevProps
                };
                const u = (t)=>!t_prevProps && t in prevProps || !(!t_prevProps || t_prevProps[t] === prevProps[t]);
                let l = null;
                if (u("treeData")) {
                    l = function e(t, r) {
                        if (!t) {
                            return [];
                        }
                        const processProps = (r || {}).processProps;
                        const n = processProps === undefined ? (e)=>e : processProps;
                        return (Array.isArray(t) ? t : [
                            t
                        ]).map(({ children, ...rest })=>{
                            const u = e(children, r);
                            return module553.default.createElement(module1864, n(rest), u);
                        });
                    }(prevProps.treeData, prevProps.processor);
                } else if (u("children")) {
                    l = toArray(prevProps.children);
                }
                if (l) {
                    o.treeNode = l;
                    const c = convertTreeToEntities(l);
                    o.posEntities = c.posEntities;
                    o.keyEntities = c.keyEntities;
                }
                const s = o.keyEntities || t.keyEntities;
                if (u("expandedKeys")) {
                    o.expandedKeys = t_prevProps ? expandedKeys : conductExpandParent(expandedKeys, s);
                } else if (!t_prevProps) {
                    o.expandedKeys = conductExpandParent(defaultExpandedKeys, s);
                }
                if (u("selectedKeys")) {
                    o.selectedKeys = calcSelectedKeys(prevProps.selectedKeys, prevProps);
                } else if (!t_prevProps && prevProps.defaultSelectedKeys) {
                    o.selectedKeys = calcSelectedKeys(prevProps.defaultSelectedKeys, prevProps);
                }
                return o;
            }
        }
    ]);
    return r;
})(module553.Component);
export default _;
_.popTypes = {
    className: module1.className,
    treeData: module1.array,
    showLine: module1.bool,
    children: module1.any,
    defaultExpandedKeys: module1.arrayOf(module1.string),
    defaultSelectedKeys: module1.arrayOf(module1.string),
    toggleNodeSelect: module1.bool,
    onSelect: module1.func,
    onClick: module1.func,
    onExpand: module1.func,
    disabled: module1.bool
};
_.DefaultProps = {
    showLine: false,
    disabled: false,
    toggleNodeSelect: false,
    defaultExpandedKeys: [],
    defaultSelectedKeys: []
};
_.contextTypes = module1862;
_.childContextTypes = module1862;
