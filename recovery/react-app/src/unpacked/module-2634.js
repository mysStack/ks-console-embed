import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-22.js";
import "./module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import "./module-31.js";
import "./module-58.js";
import module26 from "./module-26.js";
import module189 from "./module-189.js";
import module74 from "./module-74.js";
import module240 from "./module-240.js";
import module788 from "components/Base/Modal";
import modal from "components/Modals/Create";
import replicasExtraControl from "./module-2635.js";
import module435 from "utils/form.templates";
import module1333 from "./module-1333.js";
import { APP_TEMPLATES_FORM, APP_TEMPLATE_VERSION_FORM } from "./module-1576.js";
const S = {
    "app.template.create": {
        on: function({ store, cluster, workspace, success, ...rest }) {
            const g = module435.apptemplates({
                workspace
            });
            const S = new module1333;
            var _ = module788.open({
                onOk: async (a)=>{
                    let o;
                    let u;
                    let c;
                    let m;
                    let v;
                    let E;
                    let y;
                    o = module26(a, "metadata.name");
                    u = module189(a, [
                        "spec",
                        "totalReplicas"
                    ]);
                    c = module26(a, "spec");
                    m = a?.version;
                    v = module435.apptemplateversions({
                        name: o,
                        version: m
                    });
                    E = {
                        version: m,
                        deploymentSpec: c
                    };
                    y = {
                        ...v,
                        spec: E
                    };
                    await S.create({
                        cluster
                    }, y);
                    await store.create({
                        cluster
                    }, u);
                    module240.success({
                        content: t("CREATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                    module788.close(_);
                },
                store,
                module: "apptemplates",
                cluster,
                workspace,
                title: t("CREATE_EDGE_APP_TEMPLATE"),
                formTemplate: g,
                onlyDockerHub: true,
                modal,
                steps: APP_TEMPLATES_FORM,
                ...rest
            });
        }
    },
    "app.template.version.create": {
        on: function({ isEdit, cluster, formTemplate, templateName, workspace: _workspace, success, ...rest }) {
            const module = "apptemplateversions";
            const store = new module1333;
            const T = formTemplate || module435[module]({
                name: templateName
            });
            var R = module788.open({
                onOk: async (a)=>{
                    let u;
                    let c;
                    let m;
                    let v;
                    let h;
                    let E;
                    u = module26(a, "spec");
                    c = module26(a, "spec.version");
                    m = `${templateName}-${c}`;
                    v = module189(u, [
                        "version",
                        "deploymentSpec"
                    ]);
                    h = {
                        version: c,
                        deploymentSpec: v
                    };
                    module74(a, "metadata.name", m);
                    module74(a, [
                        "metadata",
                        "labels",
                        "apps.edgewize.io/apptemplateversion"
                    ], c);
                    E = {
                        ...a,
                        spec: h
                    };
                    await store[isEdit ? "patch" : "create"]?.({
                        cluster
                    }, E);
                    module240.success({
                        content: isEdit ? t("UPDATE_SUCCESSFUL") : t("CREATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                    module788.close(R);
                },
                store,
                module,
                cluster,
                title: t("CREATE_APP_TEMPLATE_VERSION"),
                formTemplate: T,
                onlyDockerHub: true,
                modal,
                replicasExtraControl,
                steps: APP_TEMPLATE_VERSION_FORM,
                isEdit,
                ...rest
            });
        }
    }
};
export default S;
