import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import { markForFocusLater, popWithoutFocus, returnFocus, setupScopedFocus, teardownScopedFocus } from "./module-2036.js";
import module2037 from "./module-2037.js";
import { hide, show } from "./module-1477.js";
import { add, remove } from "./module-2040.js";
import module1267 from "./module-1267.js";
import module1478 from "./module-1478.js";
import "./module-2041.js";
const l = module553;
const y = {
    overlay: "ReactModal__Overlay",
    content: "ReactModal__Content"
};
let m = 0;
class b extends module553.Component {
    constructor(e){
        var n = ((e, t)=>{
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            if (!t || typeof t !== "object" && typeof t !== "function") {
                return e;
            }
            return t;
        })(this, super(e));
        n.setOverlayRef = function(e) {
            n.overlay = e;
            if (n.props.overlayRef) {
                n.props.overlayRef(e);
            }
        };
        n.setContentRef = function(e) {
            n.content = e;
            if (n.props.contentRef) {
                n.props.contentRef(e);
            }
        };
        n.afterClose = function() {
            const n_props = n.props;
            const { appElement, ariaHideApp, htmlOpenClassName, bodyOpenClassName } = n_props;
            if (bodyOpenClassName) {
                remove(document.body, bodyOpenClassName);
            }
            if (htmlOpenClassName) {
                remove(document.getElementsByTagName("html")[0], htmlOpenClassName);
            }
            if (ariaHideApp && m > 0 && (m -= 1) == 0) {
                show(appElement);
            }
            if (n.props.shouldFocusAfterRender) {
                if (n.props.shouldReturnFocusAfterClose) {
                    returnFocus();
                    teardownScopedFocus();
                } else {
                    popWithoutFocus();
                }
            }
            if (n.props.onAfterClose) {
                n.props.onAfterClose();
            }
            module1478.deregister(n);
        };
        n.open = function() {
            n.beforeOpen();
            if (n.state.afterOpen && n.state.beforeClose) {
                clearTimeout(n.closeTimer);
                n.setState({
                    beforeClose: false
                });
            } else {
                if (n.props.shouldFocusAfterRender) {
                    setupScopedFocus(n.node);
                    markForFocusLater();
                }
                n.setState({
                    isOpen: true
                }, function() {
                    n.setState({
                        afterOpen: true
                    });
                    if (n.props.isOpen && n.props.onAfterOpen) {
                        n.props.onAfterOpen({
                            overlayEl: n.overlay,
                            contentEl: n.content
                        });
                    }
                });
            }
        };
        n.close = function() {
            if (n.props.closeTimeoutMS > 0) {
                n.closeWithTimeout();
            } else {
                n.closeWithoutTimeout();
            }
        };
        n.focusContent = function() {
            return n.content && !n.contentHasFocus() && n.content.focus();
        };
        n.closeWithTimeout = function() {
            const closesAt = Date.now() + n.props.closeTimeoutMS;
            n.setState({
                beforeClose: true,
                closesAt
            }, function() {
                n.closeTimer = setTimeout(n.closeWithoutTimeout, n.state.closesAt - Date.now());
            });
        };
        n.closeWithoutTimeout = function() {
            n.setState({
                beforeClose: false,
                isOpen: false,
                afterOpen: false,
                closesAt: null
            }, n.afterClose);
        };
        n.handleKeyDown = function(e) {
            if (e.keyCode === 9) {
                module2037(n.content, e);
            }
            if (n.props.shouldCloseOnEsc && e.keyCode === 27) {
                e.stopPropagation();
                n.requestClose(e);
            }
        };
        n.handleOverlayOnClick = function(e) {
            if (n.shouldClose === null) {
                n.shouldClose = true;
            }
            if (n.shouldClose && n.props.shouldCloseOnOverlayClick) {
                if (n.ownerHandlesClose()) {
                    n.requestClose(e);
                } else {
                    n.focusContent();
                }
            }
            n.shouldClose = null;
        };
        n.handleContentOnMouseUp = function() {
            n.shouldClose = false;
        };
        n.handleOverlayOnMouseDown = function(e) {
            if (!(n.props.shouldCloseOnOverlayClick || e.target != n.overlay)) {
                e.preventDefault();
            }
        };
        n.handleContentOnClick = function() {
            n.shouldClose = false;
        };
        n.handleContentOnMouseDown = function() {
            n.shouldClose = false;
        };
        n.requestClose = function(e) {
            return n.ownerHandlesClose() && n.props.onRequestClose(e);
        };
        n.ownerHandlesClose = function() {
            return n.props.onRequestClose;
        };
        n.shouldBeClosed = function() {
            return !n.state.isOpen && !n.state.beforeClose;
        };
        n.contentHasFocus = function() {
            return document.activeElement === n.content || n.content.contains(document.activeElement);
        };
        n.buildClassName = function(e, t) {
            const r = (t === undefined ? "undefined" : typeof t) === "object" ? t : {
                base: y[e],
                afterOpen: `${y[e]}--after-open`,
                beforeClose: `${y[e]}--before-close`
            };
            let r_base = r.base;
            if (n.state.afterOpen) {
                r_base = `${r_base} ${r.afterOpen}`;
            }
            if (n.state.beforeClose) {
                r_base = `${r_base} ${r.beforeClose}`;
            }
            if (typeof t === "string" && t) {
                return `${r_base} ${t}`;
            }
            return r_base;
        };
        n.attributesFromObject = function(e, t) {
            return Object.keys(t).reduce((acc, key)=>{
                acc[`${e}-${key}`] = t[key];
                return acc;
            }, {});
        };
        n.state = {
            afterOpen: false,
            beforeClose: false
        };
        n.shouldClose = null;
        n.moveFromContentToOverlay = null;
        return n;
    }
    componentDidMount() {
        if (this.props.isOpen) {
            this.open();
        }
    }
    componentDidUpdate(e, t) {
        if (this.props.isOpen && !e.isOpen) {
            this.open();
        } else if (!this.props.isOpen && e.isOpen) {
            this.close();
        }
        if (this.props.shouldFocusAfterRender && this.state.isOpen && !t.isOpen) {
            this.focusContent();
        }
    }
    componentWillUnmount() {
        if (this.state.isOpen) {
            this.afterClose();
        }
        clearTimeout(this.closeTimer);
    }
    beforeOpen() {
        const props = this.props;
        const { appElement, ariaHideApp, htmlOpenClassName, bodyOpenClassName } = props;
        if (bodyOpenClassName) {
            add(document.body, bodyOpenClassName);
        }
        if (htmlOpenClassName) {
            add(document.getElementsByTagName("html")[0], htmlOpenClassName);
        }
        if (ariaHideApp) {
            m += 1;
            hide(appElement);
        }
        module1478.register(this);
    }
    render() {
        const props = this.props;
        const { id, className, overlayClassName, defaultStyles } = props;
        const a = className ? {} : defaultStyles.content;
        const u = overlayClassName ? {} : defaultStyles.overlay;
        if (this.shouldBeClosed()) {
            return null;
        }
        return <div ref={this.setOverlayRef} className={this.buildClassName("overlay", overlayClassName)} style={{
            ...u,
            ...this.props.style.overlay
        }} onClick={this.handleOverlayOnClick} onMouseDown={this.handleOverlayOnMouseDown}><div id={id} ref={this.setContentRef} style={{
            ...a,
            ...this.props.style.content
        }} className={this.buildClassName("content", className)} tabIndex="-1" onKeyDown={this.handleKeyDown} onMouseDown={this.handleContentOnMouseDown} onMouseUp={this.handleContentOnMouseUp} onClick={this.handleContentOnClick} role={this.props.role} aria-label={this.props.contentLabel} {...this.attributesFromObject("aria", this.props.aria || {})} {...this.attributesFromObject("data", this.props.data || {})} data-testid={this.props.testId}>{this.props.children}</div></div>;
    }
}
b.defaultProps = {
    style: {
        overlay: {},
        content: {}
    },
    defaultStyles: {}
};
b.propTypes = {
    isOpen: module1.bool.isRequired,
    defaultStyles: module1.shape({
        content: module1.object,
        overlay: module1.object
    }),
    style: module1.shape({
        content: module1.object,
        overlay: module1.object
    }),
    className: module1.oneOfType([
        module1.string,
        module1.object
    ]),
    overlayClassName: module1.oneOfType([
        module1.string,
        module1.object
    ]),
    bodyOpenClassName: module1.string,
    htmlOpenClassName: module1.string,
    ariaHideApp: module1.bool,
    appElement: module1.instanceOf(module1267),
    onAfterOpen: module1.func,
    onAfterClose: module1.func,
    onRequestClose: module1.func,
    closeTimeoutMS: module1.number,
    shouldFocusAfterRender: module1.bool,
    shouldCloseOnOverlayClick: module1.bool,
    shouldReturnFocusAfterClose: module1.bool,
    role: module1.string,
    contentLabel: module1.string,
    aria: module1.object,
    data: module1.object,
    children: module1.node,
    shouldCloseOnEsc: module1.bool,
    overlayRef: module1.func,
    contentRef: module1.func,
    id: module1.string,
    testId: module1.string
};
export default b;
