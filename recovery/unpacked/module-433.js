import { Router, __RouterContext, matchPath } from "./module-47.js";
import { a } from "./module-82.js";
import { Component, createElement, forwardRef } from "./module-553.js";
import { createBrowserHistory, createHashHistory, createLocation } from "./module-83.js";
import "./module-1.js";
import "./module-59.js";
import "./module-134.js";
import module81 from "./module-81.js";
export { MemoryRouter } from "./module-47.js";
export { Prompt } from "./module-47.js";
export { Redirect } from "./module-47.js";
export { Route } from "./module-47.js";
export { Router } from "./module-47.js";
export { StaticRouter } from "./module-47.js";
export { Switch } from "./module-47.js";
export { generatePath } from "./module-47.js";
export { matchPath } from "./module-47.js";
export { useHistory } from "./module-47.js";
export { useLocation } from "./module-47.js";
export { useParams } from "./module-47.js";
export { useRouteMatch } from "./module-47.js";
export { withRouter } from "./module-47.js";
export const BrowserRouter = ((Component_1)=>{
    function t(...r) {
        let t;
        t = Component_1.call(this, ...r) || this;
        t.history = createBrowserHistory(t.props);
        return t;
    }
    a(t, Component_1);
    t.prototype.render = function() {
        return <Router history={this.history} children={this.props.children}/>;
    };
    return t;
})(Component);
export const HashRouter = ((Component_1)=>{
    function t(...r) {
        let t;
        t = Component_1.call(this, ...r) || this;
        t.history = createHashHistory(t.props);
        return t;
    }
    a(t, Component_1);
    t.prototype.render = function() {
        return <Router history={this.history} children={this.props.children}/>;
    };
    return t;
})(Component);
const p = (e, t)=>{
    if (typeof e === "function") {
        return e(t);
    }
    return e;
};
const h = (e, t)=>{
    if (typeof e === "string") {
        return createLocation(e, null, null, t);
    }
    return e;
};
const v = function(e) {
    return e;
};
let m = forwardRef;
if (m === undefined) {
    m = v;
}
const g = m(function({ innerRef, navigate, onClick, ...rest }, t) {
    const rest_target = rest.target;
    const c = {
        ...rest,
        onClick: function(e) {
            try {
                if (onClick) {
                    onClick(e);
                }
            } catch (error) {
                e.preventDefault();
                throw error;
            }
            if (!(e.defaultPrevented || e.button !== 0 || rest_target && rest_target !== "_self" || ((e)=>!!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey))(e))) {
                e.preventDefault();
                navigate();
            }
        }
    };
    c.ref = v !== m && t || innerRef;
    return <a {...c}/>;
});
export const Link = m(function({ component = g, replace, to, innerRef, ...rest }, t) {
    return <__RouterContext.Consumer>{function(e) {
        if (!e) {
            module81(false);
        }
        const e_history = e.history;
        const r = h(p(to, e.location), e.location);
        const href = r ? e_history.createHref(r) : "";
        const g = {
            ...rest,
            href,
            navigate: function() {
                const t = p(to, e.location);
                (replace ? e_history.replace : e_history.push)(t);
            }
        };
        if (v !== m) {
            g.ref = t || innerRef;
        } else {
            g.innerRef = innerRef;
        }
        return createElement(component, g);
    }}</__RouterContext.Consumer>;
});
const b = function(e) {
    return e;
};
let C = forwardRef;
if (C === undefined) {
    C = b;
}
export const NavLink = C(function({ "aria-current": aria_current = "page", activeClassName = "active", activeStyle, className, exact, isActive, location, sensitive, strict, style, to, innerRef, ...rest }, t) {
    return <__RouterContext.Consumer>{function(e) {
        if (!e) {
            module81(false);
        }
        const n = location || e.location;
        const to_1 = h(p(to, n), n);
        const a_pathname = to_1.pathname;
        const path = a_pathname && a_pathname.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
        const S = path ? matchPath(n.pathname, {
            path,
            exact,
            sensitive,
            strict
        }) : null;
        const L = !!(isActive ? isActive(S, n) : S);
        const className_1 = L ? ((...t)=>t.filter((e)=>e).join(" "))(className, activeClassName) : className;
        const style_1 = L ? {
            ...style,
            ...activeStyle
        } : style;
        const T = {
            "aria-current": L && aria_current || null,
            className: className_1,
            style: style_1,
            to: to_1,
            ...rest
        };
        if (b !== C) {
            T.ref = t || innerRef;
        } else {
            T.innerRef = innerRef;
        }
        return <Link {...T}/>;
    }}</__RouterContext.Consumer>;
});
