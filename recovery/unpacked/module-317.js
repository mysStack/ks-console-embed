import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-24.js";
import "./module-62.js";
import "./module-7.js";
import "./module-31.js";
import module58 from "./module-58.js";
import "./module-315.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import module26 from "./module-26.js";
import module76 from "./module-76.js";
import module195 from "./module-195.js";
import module74 from "./module-74.js";
import "./module-553.js";
import { Route, Switch } from "./module-47.js";
import { Redirect } from "./module-433.js";
export const renderRoutes = function(e, t = {}, n = {}) {
    if (e) {
        return <Switch {...n}>{e.map((route, n)=>{
            const key = route.key || n;
            if (route.redirect) {
                const to = route.redirect;
                if (module195(to)) {
                    return <Redirect key={key} to={to}/>;
                }
                if (module76(to)) {
                    return <Redirect key={key} {...to}/>;
                }
            }
            return <Route key={key} exact={route.exact} path={route.path} render={function(n) {
                module74(globals, "currentCluster", n.match.params.cluster);
                module74(globals, "currentWorkspace", n.match.params.workspace);
                if (route.render) {
                    return route.render(n);
                }
                return <route.component {...n} {...t} route={route}/>;
            }} strict={route.strict}/>;
        })}</Switch>;
    }
    return null;
};
export const getIndexRoute = function(e) {
    const e_path = e.path;
    return {
        path: e_path,
        redirect: {
            from: e_path,
            to: e.to,
            ...module58(e, [
                "path",
                "to"
            ])
        }
    };
};
export const getChildRoutes = function(e, path) {
    const n = e.map((e)=>({
            ...e,
            path: `${path}/${e.name}`
        }));
    n.push(getIndexRoute({
        path,
        to: module26(n[0], "path"),
        exact: true
    }), getIndexRoute({
        path: "*",
        to: "/404",
        exact: true
    }));
    return n;
};
