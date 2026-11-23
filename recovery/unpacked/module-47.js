import { a } from "./module-82.js";
import { Children, Component, cloneElement, createElement, isValidElement, useContext } from "./module-553.js";
import "./module-1.js";
import { createLocation, createMemoryHistory, createPath, locationsAreEqual } from "./module-83.js";
import module313 from "./module-313.js";
import module81 from "./module-81.js";
import "./module-59.js";
import module314 from "./module-314.js";
import "./module-761.js";
import "./module-134.js";
import module432 from "./module-432.js";
export const __HistoryContext = ((e)=>{
    const RouterHistory = module313.a();
    RouterHistory.displayName = "Router-History";
    return RouterHistory;
})();
export const __RouterContext = ((e)=>{
    const Router = module313.a();
    Router.displayName = "Router";
    return Router;
})();
export const Router = ((Component_1)=>{
    function t(t) {
        let n;
        n = Component_1.call(this, t) || this;
        n.state = {
            location: t.history.location
        };
        n._isMounted = false;
        n._pendingLocation = null;
        if (!t.staticContext) {
            n.unlisten = t.history.listen(function(e) {
                if (n._isMounted) {
                    n.setState({
                        location: e
                    });
                } else {
                    n._pendingLocation = e;
                }
            });
        }
        return n;
    }
    a(t, Component_1);
    t.computeRootMatch = function(e) {
        return {
            path: "/",
            url: "/",
            params: {},
            isExact: e === "/"
        };
    };
    const t_prototype = t.prototype;
    t_prototype.componentDidMount = function() {
        this._isMounted = true;
        if (this._pendingLocation) {
            this.setState({
                location: this._pendingLocation
            });
        }
    };
    t_prototype.componentWillUnmount = function() {
        if (this.unlisten) {
            this.unlisten();
        }
    };
    t_prototype.render = function() {
        return <__RouterContext.Provider value={{
            history: this.props.history,
            location: this.state.location,
            match: t.computeRootMatch(this.state.location.pathname),
            staticContext: this.props.staticContext
        }}><__HistoryContext.Provider children={this.props.children || null} value={this.props.history}/></__RouterContext.Provider>;
    };
    return t;
})(Component);
export const MemoryRouter = ((Component_1)=>{
    function t(...r) {
        let t;
        t = Component_1.call(this, ...r) || this;
        t.history = createMemoryHistory(t.props);
        return t;
    }
    a(t, Component_1);
    t.prototype.render = function() {
        return <Router history={this.history} children={this.props.children}/>;
    };
    return t;
})(Component);
const B = ((Component_1)=>{
    function t() {
        return Component_1.apply(this, arguments) || this;
    }
    a(t, Component_1);
    const t_prototype = t.prototype;
    t_prototype.componentDidMount = function() {
        if (this.props.onMount) {
            this.props.onMount.call(this, this);
        }
    };
    t_prototype.componentDidUpdate = function(e) {
        if (this.props.onUpdate) {
            this.props.onUpdate.call(this, this, e);
        }
    };
    t_prototype.componentWillUnmount = function() {
        if (this.props.onUnmount) {
            this.props.onUnmount.call(this, this);
        }
    };
    t_prototype.render = function() {
        return null;
    };
    return t;
})(Component);
export function Prompt({ message, when }) {
    const r = when === undefined || when;
    return <__RouterContext.Consumer>{function(e) {
        if (!e) {
            module81(false);
        }
        if (!r || e.staticContext) {
            return null;
        }
        const block = e.history.block;
        return <B onMount={function(e) {
            e.release = block(message);
        }} onUpdate={function(e, r) {
            if (r.message !== message) {
                e.release();
                e.release = block(message);
            }
        }} onUnmount={function(e) {
            e.release();
        }} message={message}/>;
    }}</__RouterContext.Consumer>;
}
const w = {};
let _ = 0;
export function generatePath(e = "/", t = {}) {
    if (e === "/") {
        return e;
    }
    return ((e)=>{
        if (w[e]) {
            return w[e];
        }
        const t = module314.compile(e);
        if (_ < 10000) {
            w[e] = t;
            _++;
        }
        return t;
    })(e)(t, {
        pretty: true
    });
}
export function Redirect({ computedMatch, to, push }) {
    const o = push !== undefined && push;
    return <__RouterContext.Consumer>{function(e) {
        if (!e) {
            module81(false);
        }
        const { history, staticContext } = e;
        const c = o ? history.push : history.replace;
        const f = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : {
            ...to,
            pathname: generatePath(to.pathname, computedMatch.params)
        } : to);
        if (staticContext) {
            c(f);
            return null;
        }
        return <B onMount={function() {
            c(f);
        }} onUpdate={function(e, t) {
            const n = createLocation(t.to);
            if (!locationsAreEqual(n, {
                ...f,
                key: n.key
            })) {
                c(f);
            }
        }} to={to}/>;
    }}</__RouterContext.Consumer>;
}
const E = {};
let k = 0;
export function matchPath(e, t = {}) {
    if (typeof t === "string" || Array.isArray(t)) {
        t = {
            path: t
        };
    }
    const { path, exact = false, strict = false, sensitive = false } = t;
    return [].concat(path).reduce((acc, item)=>{
        if (!item && item !== "") {
            return null;
        }
        if (acc) {
            return acc;
        }
        const r = ((item_1, t)=>{
            const n = `${t.end}${t.strict}${t.sensitive}`;
            const r = E[n] || (E[n] = {});
            if (r[item_1]) {
                return r[item_1];
            }
            const keys_1 = [];
            const a = {
                regexp: module314(item_1, keys_1, t),
                keys: keys_1
            };
            if (k < 10000) {
                r[item_1] = a;
                k++;
            }
            return a;
        })(item, {
            end: exact,
            strict,
            sensitive
        });
        const { regexp, keys } = r;
        const s = regexp.exec(e);
        if (!s) {
            return null;
        }
        const c = s[0];
        const d = s.slice(1);
        const isExact = e === c;
        if (exact && !isExact) {
            return null;
        }
        return {
            path: item,
            url: item === "/" && c === "" ? "/" : c,
            isExact,
            params: keys.reduce((acc_1, key, index)=>{
                acc_1[key.name] = d[index];
                return acc_1;
            }, {})
        };
    }, null);
}
export const Route = ((Component_1)=>{
    function t() {
        return Component_1.apply(this, arguments) || this;
    }
    a(t, Component_1);
    t.prototype.render = function() {
        const _this = this;
        return <__RouterContext.Consumer>{function(t) {
            if (!t) {
                module81(false);
            }
            const n = _this.props.location || t.location;
            const match = _this.props.computedMatch ? _this.props.computedMatch : _this.props.path ? matchPath(n.pathname, _this.props) : t.match;
            const o = {
                ...t,
                location: n,
                match
            };
            const props = _this.props;
            let i_children = props.children;
            const { component: Component, render } = props;
            if (Array.isArray(i_children) && i_children.length === 0) {
                i_children = null;
            }
            return <__RouterContext.Provider value={o}>{o.match ? i_children ? typeof i_children === "function" ? i_children(o) : i_children : Component ? <Component {...o}/> : render ? render(o) : null : typeof i_children === "function" ? i_children(o) : null}</__RouterContext.Provider>;
        }}</__RouterContext.Consumer>;
    };
    return t;
})(Component);
function L(e) {
    if (e.charAt(0) === "/") {
        return e;
    }
    return `/${e}`;
}
function z(basename, t) {
    if (!basename) {
        return t;
    }
    const n = L(basename);
    if (t.pathname.indexOf(n) !== 0) {
        return t;
    }
    return {
        ...t,
        pathname: t.pathname.substr(n.length)
    };
}
function D(e) {
    if (typeof e === "string") {
        return e;
    }
    return createPath(e);
}
function T(e) {
    return function() {
        module81(false);
    };
}
function V() {}
export const StaticRouter = ((Component_1)=>{
    function t(...r) {
        let t;
        t = Component_1.call(this, ...r) || this;
        t.handlePush = function(e) {
            return t.navigateTo(e, "PUSH");
        };
        t.handleReplace = function(e) {
            return t.navigateTo(e, "REPLACE");
        };
        t.handleListen = function() {
            return V;
        };
        t.handleBlock = function() {
            return V;
        };
        return t;
    }
    a(t, Component_1);
    const t_prototype = t.prototype;
    t_prototype.navigateTo = function(e, t) {
        const { basename = "", context = {} } = this.props;
        context.action = t;
        context.location = ((basename_1, t)=>{
            if (basename_1) {
                return {
                    ...t,
                    pathname: L(basename_1) + t.pathname
                };
            }
            return t;
        })(basename, createLocation(e));
        context.url = D(context.location);
    };
    t_prototype.render = function() {
        const props = this.props;
        const { basename = "", context = {}, location = "/", ...rest } = props;
        const history = {
            createHref: function(e) {
                return L(basename + D(e));
            },
            action: "POP",
            location: z(basename, createLocation(location)),
            push: this.handlePush,
            replace: this.handleReplace,
            go: T(),
            goBack: T(),
            goForward: T(),
            listen: this.handleListen,
            block: this.handleBlock
        };
        return <Router {...rest} history={history} staticContext={context}/>;
    };
    return t;
})(Component);
export const Switch = ((Component_1)=>{
    function t() {
        return Component_1.apply(this, arguments) || this;
    }
    a(t, Component_1);
    t.prototype.render = function() {
        const _this = this;
        return <__RouterContext.Consumer>{function(t) {
            if (!t) {
                module81(false);
            }
            let n;
            let computedMatch;
            const o = _this.props.location || t.location;
            Children.forEach(_this.props.children, function(e) {
                if (computedMatch == null && isValidElement(e)) {
                    n = e;
                    const i = e.props.path || e.props.from;
                    computedMatch = i ? matchPath(o.pathname, {
                        ...e.props,
                        path: i
                    }) : t.match;
                }
            });
            if (computedMatch) {
                return cloneElement(n, {
                    location: o,
                    computedMatch
                });
            }
            return null;
        }}</__RouterContext.Consumer>;
    };
    return t;
})(Component);
export function withRouter(e) {
    const t = `withRouter(${e.displayName || e.name})`;
    const NComponent = function({ wrappedComponentRef, ...rest }) {
        return <__RouterContext.Consumer>{function(t) {
            if (!t) {
                module81(false);
            }
            return createElement(e, {
                ...rest,
                ...t,
                ref: wrappedComponentRef
            });
        }}</__RouterContext.Consumer>;
    };
    NComponent.displayName = t;
    NComponent.WrappedComponent = e;
    return module432(NComponent, e);
}
const useContext_1 = useContext;
export function useHistory() {
    return useContext_1(__HistoryContext);
}
export function useLocation() {
    return useContext_1(__RouterContext).location;
}
export function useParams() {
    const match = useContext_1(__RouterContext).match;
    if (match) {
        return match.params;
    }
    return {};
}
export function useRouteMatch(e) {
    const t = useLocation();
    const match = useContext_1(__RouterContext).match;
    if (e) {
        return matchPath(t.pathname, e);
    }
    return match;
}
