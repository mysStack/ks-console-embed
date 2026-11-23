import * as module553 from "unpacked/module-553.js";
import module106 from "unpacked/module-106.js";
import module1 from "unpacked/module-1.js";
import Module2035 from "unpacked/module-2035.js";
import { setElement } from "unpacked/module-1477.js";
import module1267 from "unpacked/module-1267.js";
import { polyfill } from "unpacked/module-1151.js";
const o = (()=>{
    function e(e, t) {
        for (const r of t){
            r.enumerable = r.enumerable || false;
            r.configurable = true;
            if ("value" in r) {
                r.writable = true;
            }
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        if (n) {
            e(t.prototype, n);
        }
        if (r) {
            e(t, r);
        }
        return t;
    };
})();
const a = module553;
const d = module1267;
function v(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
export const portalClassName = "ReactModalPortal";
export const bodyOpenClassName = "ReactModal__Body--open";
const b = module106.createPortal !== undefined;
const x = ()=>{
    if (b) {
        return module106.createPortal;
    }
    return module106.unstable_renderSubtreeIntoContainer;
};
function w(parentSelector) {
    return parentSelector();
}
const _ = ((e)=>{
    function t(...u) {
        let n;
        let o;
        v(this, t);
        n = o = (t.__proto__ || Object.getPrototypeOf(t)).call(this, ...u);
        o.removePortal = function() {
            if (!b) {
                module106.unmountComponentAtNode(o.node);
            }
            const e = w(o.props.parentSelector);
            if (e) {
                e.removeChild(o.node);
            } else {
                console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
            }
        };
        o.portalRef = function(e) {
            o.portal = e;
        };
        o.renderPortal = function(e) {
            const n = x()(o, <Module2035 defaultStyles={t.defaultStyles} {...e}/>, o.node);
            o.portalRef(n);
        };
        return n;
    }
    ((e, t)=>{
        if (typeof t !== "function" && t !== null) {
            throw new TypeError(`Super expression must either be null or a function, not ${typeof t}`);
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (t) {
            if (Object.setPrototypeOf) {
                Object.setPrototypeOf(e, t);
            } else {
                e.__proto__ = t;
            }
        }
    })(t, e);
    o(t, [
        {
            key: "componentDidMount",
            value: function() {
                if (module1267.canUseDOM) {
                    if (!b) {
                        this.node = document.createElement("div");
                    }
                    this.node.className = this.props.portalClassName;
                    w(this.props.parentSelector).appendChild(this.node);
                    if (!b) {
                        this.renderPortal(this.props);
                    }
                }
            }
        },
        {
            key: "getSnapshotBeforeUpdate",
            value: function(e) {
                return {
                    prevParent: w(e.parentSelector),
                    nextParent: w(this.props.parentSelector)
                };
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e, t, n) {
                if (module1267.canUseDOM) {
                    const r = this.props;
                    const { isOpen, portalClassName } = r;
                    if (e.portalClassName !== portalClassName) {
                        this.node.className = portalClassName;
                    }
                    const { prevParent, nextParent } = n;
                    if (nextParent !== prevParent) {
                        prevParent.removeChild(this.node);
                        nextParent.appendChild(this.node);
                    }
                    if ((e.isOpen || isOpen) && !b) {
                        this.renderPortal(this.props);
                    }
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (module1267.canUseDOM && this.node && this.portal) {
                    const e = this.portal.state;
                    const t = Date.now();
                    const n = e.isOpen && this.props.closeTimeoutMS && (e.closesAt || t + this.props.closeTimeoutMS);
                    if (n) {
                        if (!e.beforeClose) {
                            this.portal.closeWithTimeout();
                        }
                        setTimeout(this.removePortal, n - t);
                    } else {
                        this.removePortal();
                    }
                }
            }
        },
        {
            key: "render",
            value: function() {
                if (module1267.canUseDOM && b) {
                    if (!this.node && b) {
                        this.node = document.createElement("div");
                    }
                    return x()(<Module2035 ref={this.portalRef} defaultStyles={t.defaultStyles} {...this.props}/>, this.node);
                }
                return null;
            }
        }
    ], [
        {
            key: "setAppElement",
            value: function(e) {
                setElement(e);
            }
        }
    ]);
    return t;
})(module553.Component);
_.propTypes = {
    isOpen: module1.bool.isRequired,
    style: module1.shape({
        content: module1.object,
        overlay: module1.object
    }),
    portalClassName: module1.string,
    bodyOpenClassName: module1.string,
    htmlOpenClassName: module1.string,
    className: module1.oneOfType([
        module1.string,
        module1.shape({
            base: module1.string.isRequired,
            afterOpen: module1.string.isRequired,
            beforeClose: module1.string.isRequired
        })
    ]),
    overlayClassName: module1.oneOfType([
        module1.string,
        module1.shape({
            base: module1.string.isRequired,
            afterOpen: module1.string.isRequired,
            beforeClose: module1.string.isRequired
        })
    ]),
    appElement: module1.instanceOf(d),
    onAfterOpen: module1.func,
    onRequestClose: module1.func,
    closeTimeoutMS: module1.number,
    ariaHideApp: module1.bool,
    shouldFocusAfterRender: module1.bool,
    shouldCloseOnOverlayClick: module1.bool,
    shouldReturnFocusAfterClose: module1.bool,
    parentSelector: module1.func,
    aria: module1.object,
    data: module1.object,
    role: module1.string,
    contentLabel: module1.string,
    shouldCloseOnEsc: module1.bool,
    overlayRef: module1.func,
    contentRef: module1.func
};
_.defaultProps = {
    isOpen: false,
    portalClassName,
    bodyOpenClassName,
    role: "dialog",
    ariaHideApp: true,
    closeTimeoutMS: 0,
    shouldFocusAfterRender: true,
    shouldCloseOnEsc: true,
    shouldCloseOnOverlayClick: true,
    shouldReturnFocusAfterClose: true,
    parentSelector: function() {
        return document.body;
    }
};
_.defaultStyles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.75)"
    },
    content: {
        position: "absolute",
        top: "40px",
        left: "40px",
        right: "40px",
        bottom: "40px",
        border: "1px solid #ccc",
        background: "#fff",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        borderRadius: "4px",
        outline: "none",
        padding: "20px"
    }
};
polyfill(_);
export default _;
