const r = {
    "./PV.js": () => require("actions/PV"),
    "./alarm.center.js": () => require("./module-2067.js"),
    "./alerting.js": () => require("actions/alerting"),
    "./appedgetemplate.js": () => require("./module-1287.js"),
    "./application.js": () => require("actions/application"),
    "./apptemplates.js": () => require("./module-2634.js"),
    "./batchappdeploy.js": () => require("./module-2636.js"),
    "./cd.js": () => require("actions/cd"),
    "./cluster.js": () => require("actions/cluster"),
    "./clusterPod.js": () => require("./module-2711.js"),
    "./clusterTags.js": () => require("./module-2714.js"),
    "./codeRepo.js": () => require("actions/codeRepo"),
    "./configmap.js": () => require("actions/configmap"),
    "./configuration.js": () => require("./module-2748.js"),
    "./custom.monitoring.js": () => require("actions/custom.monitoring"),
    "./customScaling.js": () => require("./module-2867.js"),
    "./devops.credential.js": () => require("actions/devops.credential"),
    "./devops.js": () => require("actions/devops"),
    "./edgeNode.js": () => require("./module-2920.js"),
    "./federated.js": () => require("actions/federated"),
    "./gateways.js": () => require("actions/gateways"),
    "./gray-release.js": () => require("./module-2952.js"),
    "./group.js": () => require("actions/group"),
    "./imagebuilder.js": () => require("actions/imagebuilder"),
    "./index.js": () => require("./module-776.js"),
    "./license.js": () => require("./module-2960.js"),
    "./log.collection.js": () => require("actions/log.collection"),
    "./member.js": () => require("actions/member"),
    "./microservice.js": () => require("./module-2974.js"),
    "./microservicegateway.js": () => require("./module-2976.js"),
    "./network.js": () => require("actions/network"),
    "./node.group.js": () => require("./module-3009.js"),
    "./node.js": () => require("actions/node"),
    "./notification.js": () => require("./module-3074.js"),
    "./openpitrix.js": () => require("actions/openpitrix"),
    "./pipeline.js": () => require("actions/pipeline"),
    "./platform.js": () => require("./module-3291.js"),
    "./project.js": () => require("actions/project"),
    "./resource.delete.js": () => require("actions/resource.delete"),
    "./resource.edit.js": () => require("actions/resource.edit"),
    "./role.js": () => require("actions/role"),
    "./router.js": () => require("actions/router"),
    "./secret.js": () => require("actions/secret"),
    "./service.js": () => require("actions/service"),
    "./serviceaccount.js": () => require("actions/serviceaccount"),
    "./servicerouting.js": () => require("./module-3364.js"),
    "./silentPolicy.js": () => require("./module-3369.js"),
    "./storageclass.js": () => require("actions/storageclass"),
    "./toolbox.js": () => require("actions/toolbox"),
    "./user.js": () => require("actions/user"),
    "./volume.js": () => require("actions/volume"),
    "./whizard.js": () => require("./module-3575.js"),
    "./workload.js": () => require("actions/workload"),
    "./workspace.js": () => require("actions/workspace")
};
function n(e) {
    const t = l(e);
    return t();
}
function l(e) {
    if (!Object.prototype.hasOwnProperty.call(r, e)) {
        const t = new Error(`Cannot find module '${e}'`);
        t.code = "MODULE_NOT_FOUND";
        throw t;
    }
    return r[e];
}
n.keys = function() {
    return Object.keys(r);
};
n.resolve = l;
module.exports = n;
n.id = 2032;
