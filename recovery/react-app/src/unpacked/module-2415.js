import module1004 from "./module-1004.js";
import module1005 from "./module-1005.js";
import module1566 from "./module-1566.js";
import module1006 from "./module-1006.js";
import module1007 from "./module-1007.js";
import module1008 from "./module-1008.js";
import module1045 from "./module-1045.js";
import * as module553 from "./module-553.js";
import module106 from "./module-106.js";
import module1 from "./module-1.js";
import module2 from "./module-2.js";
import module380 from "./module-380.js";
import module3 from "./module-3.js";
import { fireEvent } from "./module-2416.js";
const b = {
    top: "top",
    left: "left",
    right: "right",
    bottom: "bottom",
    topLeft: "top-start",
    topRight: "top-end",
    leftTop: "left-start",
    leftBottom: "left-end",
    bottomLeft: "bottom-start",
    bottomRight: "bottom-end",
    rightTop: "right-start",
    rightBottom: "right-end"
};
const x = ((e)=>{
    module1006(n, e);
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
            let n;
            const r = module1008(e);
            if (t) {
                const o = module1008(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else {
                n = r.apply(this, arguments);
            }
            return module1007(this, n);
        };
    })(n);
    function n(e) {
        let r;
        module1004(this, n);
        r = t.call(this, e);
        module1045(module1566(r), "showPopper", function(e) {
            const onOpen = r.props.onOpen;
            const visible = r.state.visible;
            if (e) {
                e.stopPropagation();
            }
            if (r.timer) {
                clearTimeout(r.timer);
            }
            if (r.isPopperMounted) {
                if (r.popperInstance) {
                    r.popperInstance.update();
                    r.popperInstance.enableEventListeners();
                }
                if (!visible) {
                    r.setState({
                        visible: true
                    }, function() {
                        if (onOpen && onOpen !== module2.noop) {
                            onOpen();
                        }
                    });
                }
            }
        });
        module1045(module1566(r), "hidePopper", function(e) {
            const hideInterval = r.props.hideInterval;
            const visible = r.state.visible;
            if (e) {
                e.stopPropagation();
            }
            if (r.isPopperMounted && visible) {
                const o = r.props;
                const { trigger, closeAfterMouseLeave, onClose } = o;
                if (trigger === "hover" || closeAfterMouseLeave) {
                    r.timer = setTimeout(()=>{
                        r.setState({
                            visible: false
                        }, function() {
                            if (onClose && onClose !== module2.noop) {
                                onClose(e);
                            }
                            if (r.popperInstance) {
                                r.popperInstance.disableEventListeners();
                            }
                        });
                    }, hideInterval);
                } else {
                    r.setState({
                        visible: false
                    }, function() {
                        if (onClose && onClose !== module2.noop) {
                            onClose(e);
                        }
                        if (r.popperInstance) {
                            r.popperInstance.disableEventListeners();
                        }
                    });
                }
            }
        });
        module1045(module1566(r), "createPopper", function(e) {
            if (r.arrow) {
                r.arrow.setAttribute("x-arrow", "");
            }
            const t = {
                placement: b[e] ? b[e] : "bottom",
                positionFixed: false,
                modifiers: r.props.modifiers
            };
            r.popperInstance = new module380(r.reference, r.popper, t);
        });
        module1045(module1566(r), "runPopper", function(e) {
            const placement = r.props.placement;
            if (e) {
                e.stopPropagation();
            }
            if (!r.popperInstance) {
                r.createPopper(placement);
            }
            r.showPopper();
        });
        module1045(module1566(r), "destroyPopper", function() {
            if (r.popperInstance) {
                r.popperInstance.destroy();
                r.popperInstance = null;
            }
        });
        module1045(module1566(r), "handleTogglePopper", function(e) {
            const onClick = r.props.onClick;
            if (e && module2.isFunction(onClick) && onClick !== module2.noop) {
                onClick(e);
            }
            if (r.state.visible) {
                r.hidePopper(e);
            } else {
                fireEvent(e?.target?.parentNode ?? document, "click");
                r.runPopper(e);
            }
        });
        module1045(module1566(r), "handlePopperClick", function(e) {
            const closeAfterClick = r.props.closeAfterClick;
            if (r.state.visible) {
                if (e) {
                    e.stopPropagation();
                    e.nativeEvent.stopImmediatePropagation();
                }
                if (closeAfterClick) {
                    r.hidePopper(e);
                }
            }
        });
        module1045(module1566(r), "handleDocumentClick", function(e) {
            const visible = r.state.visible;
            if (module106.findDOMNode(module1566(r)) && r.reference && r.popper && visible) {
                r.hidePopper(e);
            }
        });
        module1045(module1566(r), "bindEvent", function() {
            const r_props = r.props;
            const { trigger, closeAfterMouseLeave, closeAfterMouseUp } = r_props;
            if (r.reference && r.popper) {
                if (trigger === "hover" || closeAfterMouseLeave) {
                    r.reference.addEventListener("mouseleave", r.hidePopper);
                    r.popper.addEventListener("mouseenter", r.showPopper);
                    r.popper.addEventListener("mouseleave", r.hidePopper);
                }
                if (trigger === "hover") {
                    r.reference.addEventListener("mouseenter", r.runPopper);
                    if (closeAfterMouseUp) {
                        document.addEventListener("mouseup", r.hidePopper);
                    }
                }
                if (trigger === "click") {
                    r.reference.addEventListener("click", r.handleTogglePopper);
                }
            }
        });
        module1045(module1566(r), "removeEvent", function() {
            const r_props = r.props;
            const { trigger, closeAfterMouseLeave, closeAfterMouseUp } = r_props;
            if (trigger === "click") {
                document.removeEventListener("click", r.handleDocumentClick);
            }
            if (trigger === "hover" && closeAfterMouseUp) {
                document.addEventListener("mouseup", r.hidePopper);
            }
            if (r.reference) {
                if (trigger === "hover" || closeAfterMouseLeave) {
                    r.reference.removeEventListener("mouseleave", r.hidePopper);
                }
                if (trigger === "hover") {
                    r.reference.removeEventListener("mouseenter", r.runPopper);
                }
                if (trigger === "click") {
                    r.reference.removeEventListener("click", r.handleTogglePopper);
                }
            }
        });
        r.state = {
            visible: e.visible || false
        };
        r.timer = null;
        r.popperInstance = null;
        r.reference = null;
        r.popper = null;
        return r;
    }
    module1005(n, [
        {
            key: "componentDidMount",
            value: function() {
                const props = this.props;
                const { always, visible } = props;
                this.reference = module106.findDOMNode(this.referenceNode);
                if (always || visible) {
                    this.runPopper();
                }
                if (!always) {
                    this.bindEvent();
                }
                this.isPopperMounted = true;
            }
        },
        {
            key: "componentDidUpdate",
            value: function({ placement }, { visible }) {
                const visible_2 = this.state.visible;
                const props = this.props;
                const { visible: visible_1, placement: placement_1, trigger } = props;
                if (placement !== placement_1) {
                    this.destroyPopper();
                    this.createPopper(placement_1);
                }
                if ("visible" in this.props && visible_1 && !visible) {
                    this.runPopper();
                } else if (this.popperInstance) {
                    this.popperInstance.update();
                }
                if ("visible" in this.props && !visible_1 && visible) {
                    this.hidePopper();
                }
                if (visible_2 && trigger === "click") {
                    document.addEventListener("click", this.handleDocumentClick);
                } else {
                    document.removeEventListener("click", this.handleDocumentClick);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                const always = this.props.always;
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                if (!always) {
                    this.removeEvent();
                }
                this.destroyPopper();
                this.isPopperMounted = false;
            }
        },
        {
            key: "renderContent",
            value: function() {
                const _this = this;
                const props = this.props;
                const { className, type, always, style, content, showArrow } = props;
                const visible = this.state.visible;
                return module553.default.createElement("div", {
                    className: module3("popper", className, {
                        "is-active": visible || always
                    }),
                    ref: function(t) {
                        _this.popper = t;
                    },
                    style,
                    onClick: this.handlePopperClick
                }, module553.default.createElement("div", {
                    className: `${type}-content`
                }, module2.isFunction(content) ? content() : content), showArrow ? module553.default.createElement("div", {
                    className: "popper-arrow",
                    ref: function(t) {
                        _this.arrow = t;
                    }
                }) : null);
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const children = this.props.children;
                const n = module553.cloneElement(module553.default.Children.only(children), {
                    ref: function(t) {
                        _this.referenceNode = t;
                    }
                });
                return module553.default.createElement(module553.Fragment, null, n, this.renderContent());
            }
        }
    ]);
    return n;
})(module553.Component);
module1045(x, "propTypes", {
    type: module1.string,
    always: module1.bool,
    trigger: module1.string,
    placement: module1.string,
    visible: module1.bool,
    content: module1.oneOfType([
        module1.node,
        module1.element,
        module1.func
    ]),
    hideInterval: module1.number,
    showArrow: module1.bool,
    className: module1.string,
    closeAfterClick: module1.bool,
    closeAfterMouseLeave: module1.bool,
    closeAfterMouseUp: module1.bool,
    style: module1.object,
    modifiers: module1.object,
    children: module1.node,
    onOpen: module1.func,
    onClose: module1.func,
    onClick: module1.func,
    positionFixed: module1.bool
});
module1045(x, "defaultProps", {
    type: "popper",
    always: false,
    hideInterval: 200,
    trigger: "hover",
    placement: "top",
    showArrow: true,
    closeAfterClick: true,
    closeAfterMouseLeave: false,
    closeAfterMouseUp: false,
    modifiers: {},
    onOpen: module2.noop,
    onClose: module2.noop,
    onClick: module2.noop,
    positionFixed: false
});
export default x;
