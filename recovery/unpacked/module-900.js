import "./module-12.js";
import "./module-187.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-86.js";
import "./module-18.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import "./module-315.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module198 from "./module-198.js";
import module195 from "./module-195.js";
import module26 from "./module-26.js";
import { Component } from "./module-553.js";
import { NavLink, withRouter } from "./module-433.js";
import { Provider, inject } from "./module-239.js";
import { compile } from "./module-1553.js";
import module3 from "./module-3.js";
import { ICON_TYPES } from "./module-72.js";
import { renderRoutes } from "./module-317.js";
import Module3825 from "./module-3825.js";
import module3833 from "./module-3833.js";
const N = ((Component_1)=>{
    module55(r, Component_1);
    var a = ((e)=>{
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
            let a;
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(r);
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.getEnabledOperations = function() {
            const operations = t.props.operations;
            return (operations === undefined ? [] : operations).filter((e)=>!(module198(e, "show") && !e.show) && (!e.action || t.enabledActions.includes(e.action)));
        };
        t.stores = {};
        t.state = {
            routes: t.getEnabledRoutes()
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (e.routes !== this.props.routes) {
                    this.setState({
                        routes: this.getEnabledRoutes()
                    });
                }
            }
        },
        {
            key: "getEnabledRoutes",
            value: function() {
                const routes = this.props.routes;
                const cluster = this.props.match.params.cluster;
                return routes.filter((e)=>{
                    if (e.ksModule) {
                        return (module195(e.ksModule) ? [
                            e.ksModule
                        ] : e.ksModule).every((e)=>globals.app.hasKSModule(e));
                    }
                    return !e.clusterModule || (module195(e.clusterModule) ? [
                        e.clusterModule
                    ] : e.clusterModule).every((e)=>globals.app.hasClusterModule(cluster, e));
                });
            }
        },
        {
            key: "renderNav",
            value: function(e) {
                const params = this.props.match.params;
                return <div className={module3(module3833.nav, "detail-page-nav")}>{e.map((e)=>{
                    if (e.title) {
                        return <NavLink key={e.path} className={module3833.navItem} activeClassName={module3833.active} to={compile(e.path)(params)}>{t(e.title)}</NavLink>;
                    }
                    return null;
                })}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { stores, nav, ...rest } = props;
                const routes = this.state.routes;
                return <Provider {...this.stores} {...stores}><><div className={module3(module3833.sider, "detail-page-sider")}><Module3825 {...rest} icon={rest.icon || ICON_TYPES[rest.module]} operations={this.getEnabledOperations()}/></div><div className={module3(module3833.content, "detail-page-content")}>{nav || this.renderNav(routes)}{renderRoutes(routes)}</div></></Provider>;
            }
        },
        {
            key: "authKey",
            get: function() {
                return this.props.authKey || this.props.module;
            }
        },
        {
            key: "enabledActions",
            get: function() {
                const params = this.props.match.params;
                const { namespace, ...rest } = params;
                const isDevops = this.props.isDevops;
                const n = isDevops !== undefined && isDevops;
                return globals.app.getActions({
                    module: this.authKey,
                    ...rest,
                    ...n && {
                        devops: namespace
                    },
                    project: namespace,
                    fedproject: module26(this.props, "match.url", "").indexOf("federatedprojects") > -1
                });
            }
        }
    ]);
    return r;
})(Component);
const T = inject("rootStore")(withRouter(N));
export default T;
const R = N;
export { R as Component };
