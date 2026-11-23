import "unpacked/module-22.js";
import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module455 from "unpacked/module-455.js";
import module186 from "unpacked/module-186.js";
import module1862 from "components/Tree/contextTypes";
import module1863 from "unpacked/module-1863.js";
import { getNodeChildren, mapChildren, toArray } from "components/Tree/treeUtils";
function _(e, t) {
    const r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let a = Object.getOwnPropertySymbols(e);
        if (t) {
            a = a.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        r.push.apply(r, a);
    }
    return r;
}
const S = ((e)=>{
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
        e.getNodeChildren = function() {
            const children = e.props.children;
            const r = toArray(children).filter((e)=>e);
            return getNodeChildren(r);
        };
        e.isLeaf = function() {
            const isLeaf = e.props.isLeaf;
            const r = e.getNodeChildren().length !== 0;
            return isLeaf !== false && (isLeaf || !r);
        };
        e.isDisabled = function() {
            const disabled = e.props.disabled;
            const disabled_1 = e.context.tree.disabled;
            return disabled !== false && !(!disabled_1 && !disabled);
        };
        e.onExpand = function(t) {
            e.context.tree.onNodeExpand(t, module88(e));
        };
        e.onSelect = function(t) {
            if (!e.isDisabled()) {
                const r = e.context.tree.onNodeSelect;
                t.preventDefault();
                r(t, module88(e));
            }
        };
        e.onSelectorClick = function(t) {
            e.context.tree.onNodeClick(t, module88(e));
            e.onSelect(t);
        };
        e.renderSelector = function() {
            const e_props = e.props;
            const { title, selected } = e_props;
            return module553.default.createElement("div", {
                className: module3(module1863.treeContent, selected && module1863.selected),
                onClick: e.onSelectorClick
            }, title);
        };
        e.renderSwitcher = function() {
            const expanded = e.props.expanded;
            const r = e.isLeaf();
            return module553.default.createElement("span", {
                className: module3(module1863.treeSwitch, expanded ? module1863.open : module1863.close, r && module1863.noop)
            }, module553.default.createElement(module186.Icon, {
                onClick: r ? module455 : e.onExpand,
                name: "triangle-right",
                size: 16,
                type: "dark"
            }));
        };
        e.renderChildren = function() {
            const e_props = e.props;
            const { expanded, pos } = e_props;
            const renderTreeNode = e.context.tree.renderTreeNode;
            const o = e.getNodeChildren();
            return expanded && module553.default.createElement("ul", {
                className: module3(module1863.treeChildren, expanded && module1863.open)
            }, mapChildren(o, function(e, t) {
                return renderTreeNode(e, t, pos);
            }));
        };
        return e;
    }
    module37(r, [
        {
            key: "getChildContext",
            value: function() {
                return {
                    ...this.context
                };
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, selected } = props;
                const a = this.isDisabled();
                return module553.default.createElement("li", {
                    className: module3(module1863.treeNode, className)
                }, module553.default.createElement("div", {
                    className: module3(module1863.treeNodeWrap, !a && selected && module1863.selected, a && module1863.disabled)
                }, this.renderSwitcher(), this.renderSelector()), this.renderChildren());
            }
        }
    ]);
    return r;
})(module553.Component);
export default S;
S.isTreeNode = true;
S.propTypes = {
    eventKey: module1.string,
    className: module1.string,
    style: module1.object,
    root: module1.object,
    isLeaf: module1.bool,
    onSelect: module1.func,
    expanded: module1.bool,
    selected: module1.bool,
    children: module1.node,
    title: module1.node,
    pos: module1.string,
    disabled: module1.bool
};
S.contextTypes = module1862;
S.childContextTypes = module1862;
S.defaultProps = {
    title: "---"
};
