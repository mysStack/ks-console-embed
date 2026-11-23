import module1 from "unpacked/module-1.js";
import { Children, Component, cloneElement } from "unpacked/module-553.js";
import module106 from "unpacked/module-106.js";
import { polyfill } from "unpacked/module-1151.js";
import "unpacked/module-1503.js";
export const UNMOUNTED = "unmounted";
export const EXITED = "exited";
export const ENTERING = "entering";
export const ENTERED = "entered";
export const EXITING = "exiting";
const u = ((Component_1)=>{
    let t;
    let n;
    function r(t, n) {
        let r;
        r = Component_1.call(this, t, n) || this;
        let status;
        const n_transitionGroup = n.transitionGroup;
        const a = n_transitionGroup && !n_transitionGroup.isMounting ? t.enter : t.appear;
        r.appearStatus = null;
        if (t.in) {
            if (a) {
                status = "exited";
                r.appearStatus = "entering";
            } else {
                status = "entered";
            }
        } else {
            status = t.unmountOnExit || t.mountOnEnter ? "unmounted" : "exited";
        }
        r.state = {
            status
        };
        r.nextCallback = null;
        return r;
    }
    n = Component_1;
    t = r;
    t.prototype = Object.create(n.prototype);
    t.prototype.constructor = t;
    t.__proto__ = n;
    const r_prototype = r.prototype;
    r_prototype.getChildContext = function() {
        return {
            transitionGroup: null
        };
    };
    r.getDerivedStateFromProps = function(e, t) {
        if (e.in && t.status === "unmounted") {
            return {
                status: "exited"
            };
        }
        return null;
    };
    r_prototype.componentDidMount = function() {
        this.updateStatus(true, this.appearStatus);
    };
    r_prototype.componentDidUpdate = function(e) {
        let t = null;
        if (e !== this.props) {
            const n = this.state.status;
            if (this.props.in) {
                if (n !== "entering" && n !== "entered") {
                    t = "entering";
                }
            } else if (!(n !== "entering" && n !== "entered")) {
                t = "exiting";
            }
        }
        this.updateStatus(false, t);
    };
    r_prototype.componentWillUnmount = function() {
        this.cancelNextCallback();
    };
    r_prototype.getTimeouts = function() {
        let exit;
        let enter;
        let appear;
        const timeout = this.props.timeout;
        appear = timeout;
        enter = timeout;
        exit = timeout;
        if (timeout != null && typeof timeout !== "number") {
            exit = timeout.exit;
            enter = timeout.enter;
            appear = timeout.appear !== undefined ? timeout.appear : enter;
        }
        return {
            exit,
            enter,
            appear
        };
    };
    r_prototype.updateStatus = function(e = false, t) {
        if (t !== null) {
            this.cancelNextCallback();
            const n = module106.findDOMNode(this);
            if (t === "entering") {
                this.performEnter(n, e);
            } else {
                this.performExit(n);
            }
        } else {
            if (this.props.unmountOnExit && this.state.status === "exited") {
                this.setState({
                    status: "unmounted"
                });
            }
        }
    };
    r_prototype.performEnter = function(e, t) {
        const _this = this;
        const enter = this.props.enter;
        const o = this.context.transitionGroup ? this.context.transitionGroup.isMounting : t;
        const i = this.getTimeouts();
        const a = o ? i.appear : i.enter;
        if (t || enter) {
            this.props.onEnter(e, o);
            this.safeSetState({
                status: "entering"
            }, function() {
                _this.props.onEntering(e, o);
                _this.onTransitionEnd(e, a, function() {
                    _this.safeSetState({
                        status: "entered"
                    }, function() {
                        _this.props.onEntered(e, o);
                    });
                });
            });
        } else {
            this.safeSetState({
                status: "entered"
            }, function() {
                _this.props.onEntered(e);
            });
        }
    };
    r_prototype.performExit = function(e) {
        const _this = this;
        const exit = this.props.exit;
        const r = this.getTimeouts();
        if (exit) {
            this.props.onExit(e);
            this.safeSetState({
                status: "exiting"
            }, function() {
                _this.props.onExiting(e);
                _this.onTransitionEnd(e, r.exit, function() {
                    _this.safeSetState({
                        status: "exited"
                    }, function() {
                        _this.props.onExited(e);
                    });
                });
            });
        } else {
            this.safeSetState({
                status: "exited"
            }, function() {
                _this.props.onExited(e);
            });
        }
    };
    r_prototype.cancelNextCallback = function() {
        if (this.nextCallback !== null) {
            this.nextCallback.cancel();
            this.nextCallback = null;
        }
    };
    r_prototype.safeSetState = function(e, t) {
        t = this.setNextCallback(t);
        this.setState(e, t);
    };
    r_prototype.setNextCallback = function(e) {
        const _this = this;
        let n = true;
        this.nextCallback = function(r) {
            if (n) {
                n = false;
                _this.nextCallback = null;
                e(r);
            }
        };
        this.nextCallback.cancel = function() {
            n = false;
        };
        return this.nextCallback;
    };
    r_prototype.onTransitionEnd = function(e, t, n) {
        this.setNextCallback(n);
        const r = t == null && !this.props.addEndListener;
        if (e && !r) {
            if (this.props.addEndListener) {
                this.props.addEndListener(e, this.nextCallback);
            }
            if (t != null) {
                setTimeout(this.nextCallback, t);
            }
        } else {
            setTimeout(this.nextCallback, 0);
        }
    };
    r_prototype.render = function() {
        const status = this.state.status;
        if (status === "unmounted") {
            return null;
        }
        const props = this.props;
        const t_children = props.children;
        const r = ((props_1, t)=>{
            if (props_1 == null) {
                return {};
            }
            let n;
            let r;
            const o = {};
            const i = Object.keys(props_1);
            for(r = 0; r < i.length; r++){
                n = i[r];
                if (!(t.indexOf(n) >= 0)) {
                    o[n] = props_1[n];
                }
            }
            return o;
        })(props, [
            "children"
        ]);
        delete r.in;
        delete r.mountOnEnter;
        delete r.unmountOnExit;
        delete r.appear;
        delete r.enter;
        delete r.exit;
        delete r.timeout;
        delete r.addEndListener;
        delete r.onEnter;
        delete r.onEntering;
        delete r.onEntered;
        delete r.onExit;
        delete r.onExiting;
        delete r.onExited;
        if (typeof t_children === "function") {
            return t_children(status, r);
        }
        const i = Children.only(t_children);
        return cloneElement(i, r);
    };
    return r;
})(Component);
function s() {}
u.contextTypes = {
    transitionGroup: module1.object
};
u.childContextTypes = {
    transitionGroup: function() {}
};
u.propTypes = {};
u.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: s,
    onEntering: s,
    onEntered: s,
    onExit: s,
    onExiting: s,
    onExited: s
};
u.UNMOUNTED = 0;
u.EXITED = 1;
u.ENTERING = 2;
u.ENTERED = 3;
u.EXITING = 4;
const c = polyfill(u);
export default c;
