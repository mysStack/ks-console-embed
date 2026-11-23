import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-31.js";
import "./module-58.js";
import module14 from "./module-14.js";
import module74 from "./module-74.js";
import module26 from "./module-26.js";
import module240 from "./module-240.js";
import module788 from "components/Base/Modal";
import module826 from "components/Modals/Create";
import module823 from "components/Modals/Delete";
import module435 from "utils/form.templates";
import steps from "./module-2977.js";
const y = {
    "microservicegateway.create": {
        on: function({ store, namespace, cluster, success, ...rest }) {
            var p = module788.open({
                onOk: function(e) {
                    const o = [];
                    module26(e, "spec.deployment.template.spec.containers[0].ports", []).forEach((e)=>{
                        o.push({
                            name: e.name,
                            protocol: e.protocol,
                            port: e.servicePort,
                            targetPort: e.containerPort
                        });
                    });
                    module74(e, "spec.service.ports", o);
                    if (module26(e, "spec.service.type", "") === "") {
                        module74(e, "spec.service.type", "ClusterIP");
                    }
                    store.create(e, {
                        cluster,
                        namespace
                    }).then(()=>{
                        module788.close(p);
                        module240.success({
                            content: t("CREATE_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                formTemplate: module435.microservicegateways({
                    namespace
                }),
                modal: module826,
                steps,
                namespace,
                cluster,
                store,
                ...rest
            });
        }
    },
    "microservicegateway.edit": {
        on: function({ store, namespace, cluster, detail, isEdit = true, title = t("EDIT_MICROSERVICE_GATEWAY"), okBtnText = t("OK"), success, ...rest }) {
            const formTemplate = module14.toJS(detail._originData);
            if (module26(formTemplate, "spec.service.type", "") === "ClusterIP") {
                module74(formTemplate, "spec.service.type", "");
            }
            var C = module788.open({
                onOk: function(e) {
                    const r = [];
                    module26(e, "spec.deployment.template.spec.containers[0].ports", []).forEach((e)=>{
                        r.push({
                            name: e.name,
                            protocol: e.protocol,
                            port: e.servicePort,
                            targetPort: e.containerPort
                        });
                    });
                    module74(e, "spec.service.ports", r);
                    if (module26(e, "spec.service.type", "") === "") {
                        module74(e, "spec.service.type", "ClusterIP");
                    }
                    store.update(detail, e).then(()=>{
                        module788.close(C);
                        module240.success({
                            content: t("MODIFY_SUCCESSFUL")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                isEdit,
                title,
                okBtnText,
                formTemplate,
                modal: module826,
                steps,
                namespace,
                cluster,
                store,
                ...rest
            });
        }
    },
    "microservicegateway.delete": {
        on: function({ store, resource: _resource, detail, cluster, namespace, success, ...rest }) {
            var s = module788.open({
                onOk: function() {
                    store.delete({
                        cluster,
                        namespace,
                        name: detail.name
                    }).then(()=>{
                        module788.close(s);
                        module240.success({
                            content: t("DELETED_SUCCESSFULLY")
                        });
                        if (success) {
                            success();
                        }
                    });
                },
                store,
                modal: module823,
                type: "MICROSERVICE_GATEWAY",
                resource: detail.name,
                cluster,
                namespace,
                ...rest
            });
        }
    }
};
export default y;
