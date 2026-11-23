import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module31 from "./module-31.js";
import { Component } from "./module-553.js";
import module3473 from "./module-3473.js";
import "./module-1.js";
let r;
let o;
o = r = ((Component_1)=>{
    function t(...o_1) {
        let n;
        module36(this, t);
        n = module56(this, module51(t).call(this, ...o_1));
        module31(module88(n), "state", {
            height: n.props.defaultHeight || 0,
            width: n.props.defaultWidth || 0
        });
        module31(module88(n), "_parentNode", undefined);
        module31(module88(n), "_autoSizer", undefined);
        module31(module88(n), "_window", undefined);
        module31(module88(n), "_detectElementResize", undefined);
        module31(module88(n), "_onResize", function() {
            const n_props = n.props;
            const { disableHeight, disableWidth, onResize } = n_props;
            if (n._parentNode) {
                const height = n._parentNode.offsetHeight || 0;
                const width = n._parentNode.offsetWidth || 0;
                const l = (n._window || window).getComputedStyle(n._parentNode) || {};
                const u = parseInt(l.paddingLeft, 10) || 0;
                const s = parseInt(l.paddingRight, 10) || 0;
                const c = parseInt(l.paddingTop, 10) || 0;
                const f = parseInt(l.paddingBottom, 10) || 0;
                const d = height - c - f;
                const p = width - u - s;
                if (!disableHeight && n.state.height !== d || !disableWidth && n.state.width !== p) {
                    n.setState({
                        height: height - c - f,
                        width: width - u - s
                    });
                    onResize({
                        height,
                        width
                    });
                }
            }
        });
        module31(module88(n), "_setRef", function(e) {
            n._autoSizer = e;
        });
        return n;
    }
    module55(t, Component_1);
    module37(t, [
        {
            key: "componentDidMount",
            value: function() {
                const nonce = this.props.nonce;
                if (this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement) {
                    this._parentNode = this._autoSizer.parentNode;
                    this._window = this._autoSizer.parentNode.ownerDocument.defaultView;
                    this._detectElementResize = module3473.a(nonce, this._window);
                    this._detectElementResize.addResizeListener(this._parentNode, this._onResize);
                    this._onResize();
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this._detectElementResize && this._parentNode) {
                    this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { children, className, disableHeight, disableWidth, style } = props;
                const state = this.state;
                const { height, width } = state;
                const s = {
                    overflow: "visible"
                };
                const c = {};
                if (!disableHeight) {
                    s.height = 0;
                    c.height = height;
                }
                if (!disableWidth) {
                    s.width = 0;
                    c.width = width;
                }
                return <div className={className} ref={this._setRef} style={{
                    ...s,
                    ...style
                }}>{children(c)}</div>;
            }
        }
    ]);
    return t;
})(Component);
module31(r, "propTypes", null);
const C = o;
export { C as default };
module31(C, "defaultProps", {
    onResize: function() {},
    disableHeight: false,
    disableWidth: false,
    style: {}
});
