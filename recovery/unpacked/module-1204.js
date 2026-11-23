import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-197.js";
import "./module-6.js";
import "./module-84.js";
import "./module-86.js";
import "./module-73.js";
import "./module-18.js";
import "./module-48.js";
import "./module-16.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-24.js";
import "./module-64.js";
import "./module-7.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module58 from "./module-58.js";
import module61 from "./module-61.js";
import module31 from "./module-31.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-436.js";
import "./module-22.js";
import module26 from "./module-26.js";
import module60 from "./module-60.js";
import module63 from "./module-63.js";
import module136 from "./module-136.js";
import module159 from "./module-159.js";
import module525 from "./module-525.js";
import module1113 from "./module-1113.js";
import { MERTER_TYPE, METER_RESOURCE_USAGE, RESOURCES_METER_TYPE, RESOURCE_TITLE, UNIT_CONFIG } from "./module-944.js";
import { getNodeStatus } from "./module-444.js";
import { getWorkloadStatus } from "./module-434.js";
import { getLocalTime } from "./module-52.js";
import { getValueByUnit } from "./module-795.js";
import { getMinuteValue } from "./module-847.js";
import module243 from "./module-243.js";
export const getMeterFilter = function(e) {
    const t = RESOURCES_METER_TYPE[e];
    const a = {
        cpu: `meter_${t}_cpu_usage`,
        memory: `meter_${t}${t === "cluster" || t === "workspace" ? "_memory_usage" : "_memory_usage_wo_cache"}`,
        net_transmitted: `meter_${t}_net_bytes_transmitted`,
        net_received: `meter_${t}_net_bytes_received`
    };
    switch(t){
        case "cluster":
        case "node":
        case "workspace":
        case "application":
        case "namespace":
            a.disk = `meter_${t}_pvc_bytes_total`;
    }
    return function(e) {
        if (e === "all") {
            return a;
        }
        const t = {};
        e.forEach((e)=>{
            t[e] = a[e];
        });
        return t;
    };
};
export const getMeterFilterByDic = function(e) {
    let t;
    const a = RESOURCES_METER_TYPE[e];
    t = {};
    module31(t, `meter_${a}_cpu_usage`, "cpu");
    module31(t, `meter_${a}_memory_usage`, "memory");
    module31(t, `meter_${a}_memory_usage_wo_cache`, "memory");
    module31(t, `meter_${a}_pvc_bytes_total`, "disk");
    module31(t, `meter_${a}_net_bytes_transmitted`, "net_transmitted");
    module31(t, `meter_${a}_net_bytes_received`, "net_received");
    return t;
};
export const getFormatTime = function(e, t) {
    return getLocalTime(Number(e)).format(t ? "YYYY-MM-DD HH:mm" : "HH:mm:ss").replace(/:00$/g, "");
};
export const handleSortBySourceType = function(e) {
    if (module63(e)) {
        return [];
    }
    let t = module136(e);
    if (t.length < 2) {
        return t;
    }
    MERTER_TYPE.forEach((e, a)=>{
        const r = t.findIndex((t)=>!module63(t) && t.type === e);
        if (a !== r && r >= 0) {
            const n = t[r];
            t[r] = t[a];
            t[a] = n;
        }
    });
    return t = t.filter((e)=>!!e);
};
export const handleLevelParams = function({ module }) {
    const a = RESOURCES_METER_TYPE[module];
    return {
        level: `Level${module525(a)}`
    };
};
export const getRetentionDay = function(e = "7d") {
    return module243().endOf("day").add(1, "second").subtract(1, "day").subtract(e.slice(0, -1), "day");
};
export const getTimeRange = function({ step = "600s", times = 20 } = {}) {
    const l = parseFloat(step) * times;
    const end = Math.floor(module243().endOf("day").add(1, "second").subtract(1, "day") / 1000);
    const start = Math.floor(end - l);
    return {
        start,
        end
    };
};
export const getTimeParams = function({ isTime, start, end, step = "1h" }) {
    const u = {};
    if (isTime) {
        let o = step;
        if (!end || !start) {
            const i = getTimeRange({
                step: getMinuteValue(step)
            });
            u.start = i.start;
            u.end = i.end;
        }
        if (start) {
            u.start = Math.floor(start / 1000);
        }
        if (end) {
            u.end = Math.floor(end / 1000);
        }
        if (Math.floor((u.end - u.start) / 3600 / 24) >= 30) {
            o = "1d";
        }
        u.step = getMinuteValue(o);
    }
    return u;
};
export const getMetricsFilters = function({ meters, module }) {
    const r = [];
    if (!module63(meters)) {
        module1113(getMeterFilter(module)(meters), function(e) {
            r.push(e);
        });
    }
    if (!module63(r)) {
        return {
            metrics_filter: r.join("|")
        };
    }
};
export const getResourceFilters = function({ resources, module }) {
    if (!module63(resources)) {
        const r = resources.join("|");
        let n = {};
        switch(module){
            case "applications":
                n = {
                    applications: r
                };
                break;
            case "openpitrixs":
                n = {
                    openpitrixs_ids: r
                };
                break;
            case "services":
                n = {
                    services: r
                };
                break;
            default:
                n = {
                    resources_filter: resources.join("|")
                };
        }
        return n;
    }
};
export const fillEmptyMeterValue = function(e, t) {
    if (!e.step || !e.start || !e.end) {
        return t;
    }
    let a;
    const e_step = e.step;
    const n = Math.floor((e.end - e.start) / e_step) + 1;
    if ((module159(t) || !module60(t) ? 0 : t.length) < n) {
        const l = [];
        for(let u = 0; u < n - t.length; u++){
            a = e.start + u * e_step;
            const i = String(a).replace(/\..*$/, "");
            l.push([
                i,
                "0"
            ]);
        }
        return [].concat(l, module61(t));
    }
    return t;
};
export const handleValueByUnit = function(e, t) {
    const a = module136(e);
    a.type = getMeterFilterByDic(t)[a.type];
    const r = a.type === "net_received" || a.type === "net_transmitted" ? "number" : a.type;
    const n = UNIT_CONFIG[r];
    Object.keys(a).forEach((e)=>{
        if (e.indexOf("_value") > -1) {
            a[e] = getValueByUnit(a[e], n.value, 3);
            a.unit = n;
        }
    });
    return a;
};
export const handleWorkloadToKind = function({ deployments, statefulsets, daemonsets }) {
    const n = {};
    if (deployments) {
        n.kind = "deployments";
    }
    if (statefulsets) {
        n.kind = "statefulsets";
    }
    if (daemonsets) {
        n.kind = "daemonsets";
    }
    return n;
};
export const handleNodeParams = function({ nodes, pods, resources }) {
    if (nodes && pods && resources.length > 1) {
        return {
            resources_filter: undefined
        };
    }
};
export const handleLabelSelector = function(e) {
    let t = "";
    if (!e || module63(e)) {
        return t;
    }
    Object.keys(e).forEach((a)=>{
        t += `${a}=${e[a]},`;
    });
    return t = t.slice(0, -1);
};
export const hasNameSpacesType = function(e) {
    return [
        "services",
        "deployments",
        "statefulsets",
        "daemonsets",
        "pods"
    ].indexOf(e) > -1;
};
export const filterListByType = function({ type, ...rest }) {
    if ((rest.services || rest.deployments || rest.statefulsets || rest.daemonsets) && type === "pods" && module63(rest.labelSelector)) {
        return function() {
            return false;
        };
    }
    return function() {
        return true;
    };
};
export var filterResourceLevel = (()=>{
    const e = module44(module41.mark(function e(t) {
        let levelMeterData;
        let r;
        let l;
        let o;
        let i;
        let levelKey;
        let m;
        let h;
        let v;
        let g;
        let y;
        let E;
        let b;
        return module41.wrap(function(e) {
            while(true){
                switch(e.prev = e.next){
                    case 0:
                        levelMeterData = t.levelMeterData;
                        r = t.type;
                        l = t.data;
                        o = t.levelKey;
                        i = module58(t, [
                            "levelMeterData",
                            "type",
                            "data",
                            "levelKey"
                        ]);
                        levelKey = o || i.namespaces;
                        m = module26(levelMeterData, levelKey);
                        h = [];
                        v = [];
                        g = r === "applications" ? "apps" : r;
                        if (![
                            "services",
                            "deployments",
                            "statefulsets",
                            "daemonsets"
                        ].includes(r)) {
                            e.next = 23;
                            break;
                        }
                        if (!i.applications && !i.openpitrixs) {
                            e.next = 19;
                            break;
                        }
                        y = module136(i);
                        E = i.applications || i.openpitrixs;
                        b = i.applications ? "apps" : "openpitrixs";
                        levelKey = `${levelKey}.${b}.${E}`;
                        delete y.openpitrixs;
                        delete y.applications;
                        e.next = 16;
                        return filterResourceLevel({
                            levelMeterData,
                            type: r,
                            data: l,
                            levelKey,
                            ...y
                        });
                    case 16:
                        v = e.sent;
                        e.next = 21;
                        break;
                    case 19:
                        h = m && m[g] ? Object.keys(m[g]) : [];
                        v = l.map((e)=>{
                            const t = h.find((t)=>t === e.name);
                            if (module159(t) || module63(t)) {
                                return undefined;
                            }
                            return e;
                        });
                    case 21:
                        e.next = 29;
                        break;
                    case 23:
                        if (r !== "applications" && r !== "openpitrixs") {
                            e.next = 28;
                            break;
                        }
                        h = m[g] ? Object.keys(m[g]) : [];
                        v = l.map((e)=>{
                            const t = h.find((t)=>t === e.name || t === e.cluster_id);
                            if (module159(t) || module63(t)) {
                                return undefined;
                            }
                            return e;
                        });
                        e.next = 29;
                        break;
                    case 28:
                        return e.abrupt("return", l);
                    case 29:
                        v = v.filter((e)=>!module159(e));
                        return e.abrupt("return", v);
                    case 31:
                    case "end":
                        return e.stop();
                }
            }
        }, e);
    }));
    return function(t) {
        return e.apply(this, arguments);
    };
})();
export const handleWSChartData = function({ levelMeterData, meters, type, params }) {
    let t;
    switch(type){
        case "applications":
        case "openpitrixs":
            t = ((levelMeterData_1, params_1, meters_1, type_1)=>{
                const n = [];
                const l = type_1 === "applications" ? "apps" : "openpitrixs";
                const u = levelMeterData_1[params_1.namespaces][`${l}`];
                if (!module63(u)) {
                    Object.keys(u).forEach((e)=>{
                        if (u[e]) {
                            const t = u[e][METER_RESOURCE_USAGE[meters_1]] || 0;
                            const l = UNIT_CONFIG[meters_1];
                            n.push({
                                name: e,
                                value: getValueByUnit(t, l.value, 3),
                                unit: l.label,
                                type: type_1
                            });
                        }
                    });
                }
                return n;
            })(levelMeterData, params, meters, type);
            break;
        case "services":
        case "deployments":
        case "statefulsets":
        case "daemonsets":
            t = ((levelMeterData_1, type_1, params_1, meters_1)=>{
                const n = [];
                let l = "";
                if (params_1.applications || params_1.openpitrixs) {
                    const u = params_1.applications ? "apps" : "openpitrixs";
                    l = levelMeterData_1[params_1.namespaces][u];
                    const o = params_1.applications || params_1.openpitrixs;
                    const i = Object.keys(l).find((e)=>e.indexOf(o) > -1);
                    l = l[i][type_1];
                } else {
                    l = levelMeterData_1[params_1.namespaces][type_1];
                }
                if (!module63(l)) {
                    Object.keys(l).forEach((e)=>{
                        const a = module26(l, `${e}.${METER_RESOURCE_USAGE[meters_1]}`, 0);
                        const u = UNIT_CONFIG[meters_1];
                        n.push({
                            name: e,
                            value: getValueByUnit(a, u.value, 3),
                            unit: u.label,
                            type: type_1
                        });
                    });
                }
                return n;
            })(levelMeterData, type, params, meters);
            break;
        default:
            t = ((levelMeterData_1, type_1, params_1, meters_1)=>{
                const n = [];
                let l = "";
                if (params_1.applications || params_1.openpitrixs) {
                    const u = params_1.applications ? "apps" : "openpitrixs";
                    l = levelMeterData_1[params_1.namespaces][u];
                    const o = params_1.applications || params_1.openpitrixs;
                    const i = Object.keys(l).find((e)=>e.indexOf(o) > -1);
                    l = l[i];
                } else {
                    l = levelMeterData_1[params_1.namespaces];
                }
                if (params_1.deployments) {
                    l = l.deployments[params_1.deployments][type_1];
                }
                if (params_1.services) {
                    l = l.services[params_1.services][type_1];
                }
                if (params_1.statefulsets) {
                    l = l.statefulsets[params_1.statefulsets][type_1];
                }
                if (params_1.daemonsets) {
                    l = l.daemonsets[params_1.daemonsets][type_1];
                }
                if (!module63(l)) {
                    Object.keys(l).forEach((e)=>{
                        const a = module26(l, `${e}.${METER_RESOURCE_USAGE[meters_1]}`, 0);
                        const u = UNIT_CONFIG[meters_1];
                        n.push({
                            name: e,
                            value: getValueByUnit(a, u.value, 3),
                            unit: u.label,
                            type: type_1
                        });
                    });
                }
                return n;
            })(levelMeterData, type, params, meters);
    }
    return t;
};
export const getFetchParams = function({ isMultiCluster, type, cluster, namespaces, workspaces, applications, openpitrixs, ...rest }) {
    const s = globals.app.hasPermission({
        module: "clusters",
        action: "view"
    });
    return ({
        cluster: isMultiCluster || !s ? [
            {
                page: 1,
                limit: -1
            }
        ] : [
            {
                page: 1,
                limit: -1,
                labelSelector: "cluster-role.kubesphere.io/host"
            },
            {
                page: 1,
                limit: -1,
                labelSelector: "!cluster-role.kubesphere.io/host"
            }
        ],
        nodes: [
            {
                limit: -1,
                page: 1,
                cluster
            }
        ],
        workspaces: [
            {
                limit: -1,
                page: 1,
                namespace: namespaces,
                workspace: workspaces
            }
        ],
        namespaces: [
            {
                page: 1,
                limit: -1,
                cluster,
                namespace: namespaces,
                workspace: workspaces,
                labelSelector: "!kubesphere.io/devopsproject"
            }
        ],
        openpitrixs: [
            {
                page: 1,
                limit: -1,
                workspace: workspaces,
                cluster,
                namespace: namespaces,
                openpitrix: openpitrixs
            }
        ],
        applications: [
            {
                page: 1,
                limit: -1,
                workspace: workspaces,
                cluster,
                namespace: namespaces,
                application: applications
            }
        ],
        services: [
            {
                page: 1,
                limit: -1,
                cluster,
                namespace: namespaces,
                labelSelector: handleLabelSelector(rest.labelSelector)
            }
        ],
        deployments: [
            {
                page: 1,
                limit: -1,
                cluster,
                namespace: namespaces,
                labelSelector: handleLabelSelector(rest.labelSelector)
            }
        ],
        statefulsets: [
            {
                page: 1,
                limit: -1,
                cluster,
                namespace: namespaces,
                labelSelector: handleLabelSelector(rest.labelSelector)
            }
        ],
        daemonsets: [
            {
                page: 1,
                limit: -1,
                cluster,
                namespace: namespaces,
                labelSelector: handleLabelSelector(rest.labelSelector)
            }
        ],
        pods: [
            {
                page: 1,
                limit: -1,
                cluster,
                namespace: namespaces,
                labelSelector: handleLabelSelector(rest.labelSelector),
                nodeName: rest.nodes,
                ownerKind: rest.statefulsets ? "StatefulSet" : rest.deployments ? "Deployment" : undefined
            }
        ]
    })[type];
};
export const getListConfig = function(e) {
    const e_type = e.type;
    return ({
        cluster: e.isMultiCluster ? [
            {
                status: function(e) {
                    if (e.isReady) {
                        return "ready";
                    }
                    return "stop";
                },
                desc: ""
            }
        ] : [
            {
                status: function(e) {
                    if (e.isReady) {
                        return "ready";
                    }
                    return "stop";
                },
                desc: "HOST_CLUSTER"
            },
            {
                status: function(e) {
                    if (e.isReady) {
                        return "ready";
                    }
                    return "stop";
                },
                desc: "MEMBER_CLUSTER"
            }
        ],
        nodes: [
            {
                status: function(e) {
                    return getNodeStatus(e);
                },
                desc: RESOURCE_TITLE[e_type]
            }
        ],
        workspaces: [
            {
                desc: RESOURCE_TITLE[e_type]
            }
        ],
        namespaces: [
            {
                status: function(e) {
                    return e.status;
                },
                desc: RESOURCE_TITLE[e_type]
            }
        ],
        applications: [
            {
                status: function(e) {
                    return e.status || "";
                },
                desc: RESOURCE_TITLE[e_type]
            }
        ],
        openpitrixs: [
            {
                status: function(e) {
                    return e.status || "";
                },
                desc: RESOURCE_TITLE[e_type]
            }
        ],
        services: [
            {
                desc: RESOURCE_TITLE[e_type]
            }
        ],
        daemonsets: [
            {
                status: function(e) {
                    return getWorkloadStatus(e, e_type).status;
                },
                desc: RESOURCE_TITLE[e_type]
            }
        ],
        deployments: [
            {
                status: function(e) {
                    return getWorkloadStatus(e, e_type).status;
                },
                desc: RESOURCE_TITLE[e_type]
            }
        ],
        statefulsets: [
            {
                status: function(e) {
                    return getWorkloadStatus(e, e_type).status;
                },
                desc: RESOURCE_TITLE[e_type]
            }
        ],
        pods: [
            {
                status: function(e) {
                    return module26(e, "podStatus.status", "");
                },
                desc: RESOURCE_TITLE[e_type]
            }
        ]
    })[e_type];
};
export const handleStrTimeToX = function(e) {
    return 1000 * module243(e).format("X");
};
