import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-197.js";
import "unpacked/module-6.js";
import "unpacked/module-192.js";
import "unpacked/module-16.js";
import "unpacked/module-7.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module96 from "utils/babel-helpers/slicedToArray";
import "unpacked/module-28.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import module26 from "unpacked/module-26.js";
import module198 from "unpacked/module-198.js";
import module74 from "unpacked/module-74.js";
import { useEffect, useState } from "unpacked/module-553.js";
import module438 from "stores/cluster";
import module323 from "stores/devops";
import module439 from "stores/project";
import module494 from "stores/project.federated";
import module445 from "stores/workspace";
import { eventBus } from "utils/EventBus";
import { capitalizeSimple, removeV4DashboardHistory } from "utils/index";
const y = function() {};
export const initEvents = function(...t_1) {
    t_1.forEach((e)=>{
        const t = module96(e, 2);
        const n = t[0];
        const r = t[1];
        eventBus.on(n, r);
    });
    return function() {
        t_1.forEach((e)=>{
            const t = module96(e, 2);
            const n = t[0];
            const r = t[1];
            eventBus.off(n, r);
        });
    };
};
export const useEventValue = function(e, t, n = function(e) {
    return e;
}) {
    const r = useState(t);
    const o = module96(r, 2);
    const a = o[0];
    const l = o[1];
    useEffect(function() {
        l(t);
    }, [
        t
    ]);
    useEffect(function() {
        const t = function(e) {
            l(n(e));
        };
        eventBus.on(e, t);
        return function() {
            eventBus.off(e, t);
        };
    }, [
        e
    ]);
    return [
        a,
        l
    ];
};
export const eventKeys = {
    CLUSTER_CHANGE: "cluster.change",
    CLUSTER_ITEM_CHANGE: function(e) {
        return `cluster.${e}.change`;
    },
    WORKSPACE_CHANGE: "workspace.change",
    WORKSPACE_ITEM_CHANGE: function(e) {
        return `workspace.${e}.change`;
    },
    PROJECT_CHANGE: "project.change",
    PROJECT_ITEM_CHANGE: function(e, t) {
        return `${t}.project.${e}.change`;
    },
    DEVOPS_CHANGE: "devops.change",
    DEVOPS_ITEM_CHANGE: function(e, t, n) {
        return `${t}.${n}.devops.${e}.change`;
    },
    HOST_CLUSTER_CHANGE: "host.cluster.change",
    requestCluster: "request.cluster",
    requestClusterItem: function({ cluster }) {
        return `request.cluster.${cluster}.change`;
    },
    requestWorkspace: "request.workspace",
    requestWorkspaceItem: function({ workspace }) {
        return `request.workspace.${workspace}.change`;
    },
    requestProject: "request.project",
    requestProjectItem: function({ project, cluster }) {
        return `${cluster}.request.project.${project}.change`;
    },
    requestDevops: "request.devops",
    requestDevopsItem: function({ devops, cluster, namespace }) {
        return `${cluster}.request.devops.${namespace}.${devops}.change`;
    },
    requestAlias: "request.alias",
    initRequestAlias: "init.request.alias",
    cancelEvents: "cancel.event",
    DELETE_CLUSTER: "delete.cluster",
    DELETE_WORKSPACE: "delete.workspace",
    DELETE_PROJECT: "delete.project",
    DELETE_DEVOPS: "delete.devops",
    FEDERATED_PROJECT_CHANGE: "federated.project.change",
    FEDERATED_PROJECT_ITEM_CHANGE: function(e) {
        return `federated.project.${e}.change`;
    },
    requestFederatedProject: "request.federated.project",
    requestFederatedProjectItem: function({ federatedProject }) {
        return `request.federated.project.${federatedProject}.change`;
    },
    DELETE_FEDERATED_PROJECT: "delete.federated.project"
};
export const setDefaultHost = [
    eventKeys.CLUSTER_CHANGE,
    function(e) {
        if (e && module198(e, 'labels["cluster-role.kubesphere.io/host"]')) {
            const n = module26(e, "name") ?? "default";
            if (n !== globals.hostClusterName) {
                globals.hostClusterName = n;
                eventBus.emit(eventKeys.HOST_CLUSTER_CHANGE, n);
            }
        }
    }
];
export const requestAlias = [
    eventKeys.requestAlias,
    function({ type, params }) {
        const o = `request${capitalizeSimple(type)}Item`;
        const a = eventKeys[o]?.(params);
        if (a && !eventBus.hasListener(a, y)) {
            eventBus.on(a, y);
            eventBus.emit(eventKeys[`request${capitalizeSimple(type)}`], params);
        }
    }
];
export const requestCluster = [
    eventKeys.requestCluster,
    async (t)=>{
        let n;
        let r;
        n = new module438;
        r = await n.fetchDetail({
            name: t.cluster,
            redirect: false
        });
        eventBus.emit(eventKeys.CLUSTER_CHANGE, r);
    }
];
export const clusterChange = [
    eventKeys.CLUSTER_CHANGE,
    function(e) {
        const t = module26(globals, "clusterArray", []);
        const n = t.findIndex((t)=>t.name === e.name);
        if (n > -1) {
            t[n] = e;
        } else {
            t.push(e);
        }
        globals.clusterArray = t;
        eventBus.emit(eventKeys.CLUSTER_ITEM_CHANGE(e.name), e);
        eventBus.off(eventKeys.requestClusterItem({
            cluster: e.name
        }), y);
    }
];
export const requestWorkspace = [
    eventKeys.requestWorkspace,
    async (t)=>{
        let n;
        let r;
        n = new module445;
        r = await n.fetchDetail({
            workspace: t.workspace,
            redirect: false
        });
        eventBus.emit(eventKeys.WORKSPACE_CHANGE, r);
    }
];
export const workspaceChange = [
    eventKeys.WORKSPACE_CHANGE,
    function(e) {
        const t = module26(globals, "workspaceArray", []);
        const n = t.findIndex((t)=>t.name === e.name);
        if (n > -1) {
            t[n] = e;
        } else {
            t.push(e);
        }
        globals.workspaceArray = t;
        eventBus.emit(eventKeys.WORKSPACE_ITEM_CHANGE(e.name), e);
        eventBus.off(eventKeys.requestWorkspaceItem({
            workspace: e.name
        }), y);
    }
];
export const requestProject = [
    eventKeys.requestProject,
    async (t)=>{
        let n;
        let r;
        n = new module439;
        r = await n.fetchDetail({
            cluster: t.cluster,
            namespace: t.project
        }, function() {});
        eventBus.emit(eventKeys.PROJECT_CHANGE, r);
    }
];
export const projectChange = [
    eventKeys.PROJECT_CHANGE,
    function(e) {
        const t = module26(globals, `clusterProjectArray.${e.cluster}`, []);
        const n = t.findIndex((t)=>t.name === e.name && t.cluster === e.cluster);
        if (n > -1) {
            t[n] = e;
        } else {
            t.push(e);
        }
        module74(globals, `clusterProjectArray.${e.cluster}`, t);
        eventBus.emit(eventKeys.PROJECT_ITEM_CHANGE(e.name, e.cluster), e);
        eventBus.off(eventKeys.requestProjectItem({
            project: e.name,
            cluster: e.cluster
        }), y);
    }
];
export const requestDevops = [
    eventKeys.requestDevops,
    async (t)=>{
        let n;
        let r;
        n = new module323;
        r = await n.fetchDetail({
            cluster: t.cluster,
            namespace: t.namespace,
            devops: t.devops
        });
        eventBus.emit(eventKeys.DEVOPS_CHANGE, r);
    }
];
export const devopsChange = [
    eventKeys.DEVOPS_CHANGE,
    function(e) {
        const t = module26(globals, `clusterDevopsArray.${e.cluster}`, []);
        const n = t.findIndex((t)=>t.name === e.name && t.workspace === e.workspace);
        if (n > -1) {
            t[n] = e;
        } else {
            t.push(e);
        }
        module74(globals, `clusterDevopsArray.${e.cluster}`, t);
        eventBus.emit(eventKeys.DEVOPS_ITEM_CHANGE(e.name, e.cluster, e.workspace), e);
        eventBus.off(eventKeys.requestDevopsItem({
            cluster: e.cluster,
            workspace: e.workspace,
            devops: e.name
        }), y);
    }
];
export const deleteCluster = [
    eventKeys.DELETE_CLUSTER,
    function(e) {
        const t = module26(globals, "clusterArray", []);
        const n = t.findIndex((t)=>t.name === e.name);
        if (n > -1) {
            t.splice(n, 1);
        }
        globals.clusterArray = t;
        eventBus.emit(eventKeys.CLUSTER_ITEM_CHANGE(e.name), null);
    }
];
export const deleteClusterFavorite = [
    eventKeys.DELETE_CLUSTER,
    function(e) {
        removeV4DashboardHistory(globals.user.username, e.uid);
    }
];
export const deleteWorkspace = [
    eventKeys.DELETE_WORKSPACE,
    function(e) {
        const t = module26(globals, "workspaceArray", []);
        const n = t.findIndex((t)=>t.name === e.name);
        if (n > -1) {
            t.splice(n, 1);
        }
        globals.workspaceArray = t;
        eventBus.emit(eventKeys.WORKSPACE_ITEM_CHANGE(e.name), null);
    }
];
export const deleteProject = [
    eventKeys.DELETE_PROJECT,
    function(e) {
        const t = module26(globals, `clusterProjectArray.${e.cluster}`, []);
        const n = t.findIndex((t)=>t.name === e.name && t.cluster === e.cluster);
        if (n > -1) {
            t.splice(n, 1);
        }
        module74(globals, `clusterProjectArray.${e.cluster}`, t);
        eventBus.emit(eventKeys.PROJECT_ITEM_CHANGE(e.name, e.cluster), null);
    }
];
export const deleteDevops = [
    eventKeys.DELETE_DEVOPS,
    function(e) {
        const t = module26(globals, `clusterDevopsArray.${e.cluster}`, []);
        const n = t.findIndex((t)=>t.namespace === e.namespace && t.workspace === e.workspace);
        if (n > -1) {
            t.splice(n, 1);
        }
        module74(globals, `clusterDevopsArray.${e.cluster}`, t);
        eventBus.emit(eventKeys.DEVOPS_ITEM_CHANGE(e.name, e.cluster, e.workspace), null);
    }
];
export const requestFederatedProject = [
    eventKeys.requestFederatedProject,
    async (t)=>{
        let n;
        let r;
        n = new module494(new module439);
        r = await n.fetchDetail({
            namespace: t.federatedProject,
            name: t.federatedProject,
            workspace: t.workspace
        });
        eventBus.emit(eventKeys.FEDERATED_PROJECT_CHANGE, r);
    }
];
export const federatedProjectChange = [
    eventKeys.FEDERATED_PROJECT_CHANGE,
    function(e) {
        const t = module26(globals, "federatedProjectArray", []);
        const n = t.findIndex((t)=>t.name === e.name);
        if (n > -1) {
            t[n] = e;
        } else {
            t.push(e);
        }
        globals.federatedProjectArray = t;
        eventBus.emit(eventKeys.FEDERATED_PROJECT_ITEM_CHANGE(e.name), e);
        eventBus.off(eventKeys.requestFederatedProjectItem({
            federatedProject: e.name
        }), y);
    }
];
export const initAlias = [
    setDefaultHost,
    requestAlias,
    requestCluster,
    clusterChange,
    requestWorkspace,
    workspaceChange,
    requestProject,
    projectChange,
    requestDevops,
    devopsChange,
    deleteCluster,
    deleteWorkspace,
    deleteProject,
    deleteDevops,
    requestFederatedProject,
    federatedProjectChange,
    deleteClusterFavorite
];
