import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-98.js";
import "unpacked/module-75.js";
import "unpacked/module-191.js";
import "unpacked/module-160.js";
import module26 from "unpacked/module-26.js";
import module195 from "unpacked/module-195.js";
import module241 from "unpacked/module-241.js";
import module74 from "unpacked/module-74.js";
import "unpacked/module-553.js";
import { groovyToJS } from "utils/devops";
import module1061 from "unpacked/module-1061.js";
const d = (e)=>{
    if (module26(e, "value.value") !== undefined) {
        if (typeof e.value.value === "string") {
            return e.value.value;
        }
        return JSON.stringify(e.value.value);
    }
    if (typeof e.value === "string") {
        return e.value;
    }
    return JSON.stringify(e.value);
};
const PComponent = function(e) {
    return <div key={e.key} className={module1061.content__detail}>{t(e.key)}   {d(e)}</div>;
};
const m = (e)=>Object.entries(e).map((e)=><div key={e[0]} className={module1061.content__detail}>{t(e[0])}   {e[1]}</div>);
const h = {
    git: function(e) {
        if (e.key === "changelog" || e.key === "poll") {
            return null;
        }
        return PComponent(e);
    },
    withCredentials: function(e) {
        const t = d(e);
        if (module195(t) && t.startsWith("${")) {
            const a = groovyToJS(t);
            return m(a);
        }
        return PComponent(e);
    },
    checkout: function(e) {
        if (e.key === "scm") {
            const t = d(e);
            if (module195(t) && t.startsWith("[")) {
                let a = groovyToJS(t);
                if (a.url && !a.remote) {
                    module74(a, "remote", a.url);
                }
                a = module241(a, [
                    "remote",
                    "credentialsId"
                ]);
                return m(a);
            }
            return PComponent(e);
        }
        return null;
    },
    default: PComponent
};
export const renderStepArgs = function(e) {
    if (e.arguments) {
        if (e.arguments.length !== undefined) {
            return e.arguments.map((t)=>{
                if (h[e.name]) {
                    return h[e.name](t);
                }
                return h.default(t);
            });
        }
        if (h[e.name]) {
            return h[e.name](e.arguments);
        }
        return h.default(e.arguments);
    }
    return null;
};
