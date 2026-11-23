import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-24.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-31.js";
import module58 from "unpacked/module-58.js";
import "unpacked/module-315.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-4.js";
import module26 from "unpacked/module-26.js";
import module76 from "unpacked/module-76.js";
import module195 from "unpacked/module-195.js";
import module74 from "unpacked/module-74.js";
import "unpacked/module-553.js";
import { Route, Switch } from "unpacked/module-47.js";
import { Redirect } from "unpacked/module-433.js";
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
