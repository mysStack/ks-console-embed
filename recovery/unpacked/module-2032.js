const r = {
    "./PV.js": 2033,
    "./alarm.center.js": 2067,
    "./alerting.js": 2195,
    "./appedgetemplate.js": 1287,
    "./application.js": 2551,
    "./apptemplates.js": 2634,
    "./batchappdeploy.js": 2636,
    "./cd.js": 2648,
    "./cluster.js": 2660,
    "./clusterPod.js": 2711,
    "./clusterTags.js": 2714,
    "./codeRepo.js": 2726,
    "./configmap.js": 2740,
    "./configuration.js": 2748,
    "./custom.monitoring.js": 2754,
    "./customScaling.js": 2867,
    "./devops.credential.js": 2912,
    "./devops.js": 2913,
    "./edgeNode.js": 2920,
    "./federated.js": 2921,
    "./gateways.js": 2945,
    "./gray-release.js": 2952,
    "./group.js": 2953,
    "./imagebuilder.js": 2954,
    "./index.js": 776,
    "./license.js": 2960,
    "./log.collection.js": 2963,
    "./member.js": 2970,
    "./microservice.js": 2974,
    "./microservicegateway.js": 2976,
    "./network.js": 2985,
    "./node.group.js": 3009,
    "./node.js": 3028,
    "./notification.js": 3074,
    "./openpitrix.js": 3091,
    "./pipeline.js": 3211,
    "./platform.js": 3291,
    "./project.js": 3296,
    "./resource.delete.js": 3314,
    "./resource.edit.js": 3317,
    "./role.js": 3319,
    "./router.js": 3325,
    "./secret.js": 3333,
    "./service.js": 3346,
    "./serviceaccount.js": 3359,
    "./servicerouting.js": 3364,
    "./silentPolicy.js": 3369,
    "./storageclass.js": 3380,
    "./toolbox.js": 3399,
    "./user.js": 3541,
    "./volume.js": 3553,
    "./whizard.js": 3575,
    "./workload.js": 3595,
    "./workspace.js": 3612
};
function n(e) {
    const t = l(e);
    return require(t);
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
