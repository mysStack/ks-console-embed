import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-16.js";
import "./module-4.js";
import module96 from "./module-96.js";
import module31 from "./module-31.js";
import module246 from "./module-246.js";
import module26 from "./module-26.js";
import * as module553 from "./module-553.js";
import { eventBus } from "./module-148.js";
import { eventKeys } from "./module-144.js";
import { truncateString } from "./module-52.js";
export const showNameAndAlias = function(e, t, { cluster, workspace } = {}, _param_3, v = function() {}, withTitle = true) {
    let object;
    let event;
    const p = arguments.length > 3 && arguments[3] !== undefined && arguments[3];
    if (module246(e) === "object" && e !== null) {
        if (e.display_name) {
            return e.display_name;
        }
        if (e.aliasName) {
            return `${e.aliasName}(${e.name})`;
        }
        return e.name;
    }
    if (!e) {
        return "";
    }
    if (!t) {
        return e;
    }
    const cluster_1 = cluster ?? globals.currentCluster;
    const workspace_1 = workspace ?? globals.currentWorkspace;
    let b = [];
    switch(t){
        case "project":
            b = module26(globals, `clusterProjectArray.${cluster_1}`, []);
            event = eventKeys.PROJECT_ITEM_CHANGE(e, cluster_1);
            break;
        case "cluster":
            b = module26(globals, "clusterArray", []);
            event = eventKeys.CLUSTER_ITEM_CHANGE(e);
            break;
        case "workspace":
            b = module26(globals, "workspaceArray", []);
            event = eventKeys.WORKSPACE_ITEM_CHANGE(e);
            break;
        default:
            if (t === "federatedProject") {
                b = module26(globals, "federatedProjectArray", []);
                event = eventKeys.FEDERATED_PROJECT_ITEM_CHANGE(e);
            }
    }
    object = b.find((t)=>t.name === e);
    if (t === "devops") {
        b = module26(globals, `clusterDevopsArray.${cluster_1}`, []);
        event = eventKeys.DEVOPS_ITEM_CHANGE(e, cluster_1, workspace_1);
        object = b.find((t)=>t.name === e && t.workspace === workspace_1);
    }
    if (!object && t !== "devops") {
        const params = module31({
            cluster: cluster_1,
            workspace: workspace_1
        }, t, e);
        eventBus.emit(eventKeys.requestAlias, {
            type: t,
            params
        });
    }
    if (p) {
        if (!object) {
            const w = function e() {
                if (v) {
                    v();
                }
                eventBus.off(event, e);
            };
            eventBus.on(event, w);
        }
        if (object) {
            if (object.aliasName) {
                return `${object.aliasName}(${object.name})`;
            }
            return object.name;
        }
        return e;
    }
    return module553.default.createElement(HComponent, {
        name: e,
        event,
        object,
        withTitle
    });
};
var p = (e)=>{
    if (e) {
        if (e.aliasName) {
            return `${truncateString(e.aliasName)}(${truncateString(e.name, 30)})`;
        }
        return e.name;
    }
    return name;
};
function HComponent({ event, name, object, withTitle }) {
    const i = module553.useState(p(object));
    const l = module96(i, 2)[1];
    const s = module553.useState(object ? object.aliasName ? `${object.aliasName}(${truncateString(object.name, 30)})` : object.name : name);
    const f = module96(s, 2);
    const h = f[0];
    const v = f[1];
    module553.useEffect(function() {
        v(object ? object.aliasName ? `${object.aliasName}(${truncateString(object.name, 30)})` : object.name : name);
    }, [
        object,
        name
    ]);
    const m = function(e) {
        l(p(e));
        v(e ? e.aliasName ? `${e.aliasName}(${e.name})` : e.name : name);
    };
    module553.useEffect(function() {
        if (event) {
            eventBus.on(event, m);
            return function() {
                eventBus.off(event, m);
            };
        }
    }, [
        event
    ]);
    if (withTitle) {
        return module553.default.createElement("span", {
            style: {
                cursor: "pointer"
            },
            title: h || name
        }, h || name);
    }
    return h || name;
}
export default HComponent;
