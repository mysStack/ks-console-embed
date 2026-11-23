import { Children, PureComponent, cloneElement } from "./module-553.js";
import module3043 from "./module-3043.js";
function a(e) {
    return (a = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function l(e, t) {
    const n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function s(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function c(e, t) {
    if (!t || a(t) !== "object" && typeof t !== "function") {
        return d(e);
    }
    return t;
}
function f(e) {
    return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function d(e) {
    if (e === undefined) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return e;
}
function p(e, t) {
    return (p = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
export const CopyToClipboard = ((PureComponent_1)=>{
    function t(...a_1) {
        let n;
        u(this, t);
        d(n = c(this, f(t).call(this, ...a_1))).onClick = function(e) {
            const n_props = n.props;
            const { text, onCopy, children, options } = n_props;
            const s = Children.only(children);
            const c = module3043(text, options);
            if (onCopy) {
                onCopy(text, c);
            }
            if (s && s.props && typeof s.props.onClick === "function") {
                s.props.onClick(e);
            }
        };
        return n;
    }
    let n;
    let i;
    ((e, t)=>{
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: true,
                configurable: true
            }
        });
        if (t) {
            p(e, t);
        }
    })(t, PureComponent_1);
    n = t;
    if (i = [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { text: _text, onCopy: _onCopy, options: _options, children, ...rest } = props;
                const o = Children.only(children);
                return cloneElement(o, {
                    ...rest,
                    onClick: this.onClick
                });
            }
        }
    ]) {
        s(n.prototype, i);
    }
    return t;
})(PureComponent);
CopyToClipboard.defaultProps = {
    onCopy: undefined,
    options: undefined
};
