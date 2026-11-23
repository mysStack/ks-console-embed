import "unpacked/module-1.js";
import { Children, Component, cloneElement } from "unpacked/module-553.js";
import module106 from "unpacked/module-106.js";
import Module1504 from "unpacked/module-1504.js";
const l = ((Component_1)=>{
    let t;
    let n;
    function a(...r) {
        let t;
        t = Component_1.call(this, ...r) || this;
        t.handleEnter = function(...n) {
            return t.handleLifecycle("onEnter", 0, n);
        };
        t.handleEntering = function(...n) {
            return t.handleLifecycle("onEntering", 0, n);
        };
        t.handleEntered = function(...n) {
            return t.handleLifecycle("onEntered", 0, n);
        };
        t.handleExit = function(...n) {
            return t.handleLifecycle("onExit", 1, n);
        };
        t.handleExiting = function(...n) {
            return t.handleLifecycle("onExiting", 1, n);
        };
        t.handleExited = function(...n) {
            return t.handleLifecycle("onExited", 1, n);
        };
        return t;
    }
    n = Component_1;
    t = a;
    t.prototype = Object.create(n.prototype);
    t.prototype.constructor = t;
    t.__proto__ = n;
    const a_prototype = a.prototype;
    a_prototype.handleLifecycle = function(e, t, n) {
        let i;
        const children = this.props.children;
        const l = Children.toArray(children)[t];
        if (l.props[e]) {
            (i = l.props)[e].apply(i, n);
        }
        if (this.props[e]) {
            this.props[e](module106.findDOMNode(this));
        }
    };
    a_prototype.render = function() {
        const props = this.props;
        const { children, in: _in } = props;
        const o = ((props_1, t)=>{
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
            "children",
            "in"
        ]);
        const a = Children.toArray(children);
        const l = a[0];
        const u = a[1];
        delete o.onEnter;
        delete o.onEntering;
        delete o.onEntered;
        delete o.onExit;
        delete o.onExiting;
        delete o.onExited;
        return <Module1504 {...o}>{_in ? cloneElement(l, {
            key: "first",
            onEnter: this.handleEnter,
            onEntering: this.handleEntering,
            onEntered: this.handleEntered
        }) : cloneElement(u, {
            key: "second",
            onEnter: this.handleExit,
            onEntering: this.handleExiting,
            onEntered: this.handleExited
        })}</Module1504>;
    };
    return a;
})(Component);
l.propTypes = {};
export default l;
