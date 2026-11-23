import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-30.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-24.js";
import "unpacked/module-85.js";
import "unpacked/module-38.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import module61 from "unpacked/module-61.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import "unpacked/module-58.js";
import "unpacked/module-28.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import module240 from "unpacked/module-240.js";
import module788 from "components/Base/Modal";
import module1716 from "components/Forms/Pipelines/ParamsFormModal";
import module826 from "components/Modals/Create";
import module823 from "components/Modals/Delete";
import module3213 from "components/Modals/Pipelines/AdvanceEdit";
import module3219 from "components/Modals/Pipelines/Base";
import module3221 from "components/Modals/Pipelines/Copy";
import module3222 from "components/Modals/Pipelines/PipelineEdit";
import module3276 from "components/Modals/Pipelines/ScanRepositoryLogs";
import { PIPELINE_CREATE_STEPS, PIPELINE_CREATE_STEPS_OLD, PIPELINE_PROJECT_CREATE_STEPS } from "configs/steps/pipelines";
import module3289 from "pages/devops/components/Modals/JenkinsEdit";
import module136 from "unpacked/module-136.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module189 from "unpacked/module-189.js";
import module74 from "unpacked/module-74.js";
import module14 from "unpacked/module-14.js";
import { omitRepoKeys } from "utils/devOpsRepos";
import { resetPipelineMultiBranch, updatePipelineParams, updatePipelineParamsInSpec } from "utils/devops";
function A(e) {
    const t = e.type.toLowerCase().split("parameterdefinition")[0];
    const a = module26(e, "defaultParameterValue.value");
    const e_name = e.name;
    const n = module26(e, "choices", []);
    let l = {};
    if (t === "choice") {
        l = {
            name: e_name,
            value: a || n[0]
        };
    } else {
        l = {
            name: e_name,
            value: a
        };
    }
    return l;
}
const w = {
    "pipeline.create": {
        on: function({ store, cluster, devops, workspace: _workspace, module, success, formTemplate, ...rest }) {
            var h = module788.open({
                onOk: async (a)=>{
                    updatePipelineParams(a);
                    updatePipelineParamsInSpec(a, devops);
                    await store.createPipeline({
                        data: a,
                        devops,
                        cluster
                    });
                    module788.close(h);
                    module240.success({
                        content: t("CREATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                module,
                cluster,
                devops,
                formTemplate,
                modal: module826,
                steps: PIPELINE_PROJECT_CREATE_STEPS,
                noCodeEdit: true,
                ...rest
            });
        }
    },
    "pipeline.batch.delete": {
        on: function({ store, success, rowKey, devops, cluster, ...rest }) {
            const v = module14.toJS(store.list);
            const { data, selectedRowKeys } = v;
            const y = data.filter((e)=>selectedRowKeys.includes(e[rowKey])).map((e)=>e.name);
            var g = module788.open({
                onOk: async ()=>{
                    const a = [];
                    data.forEach((e)=>{
                        if (y.includes(e.name)) {
                            a.push(store.delete({
                                name: e.name,
                                devops,
                                cluster
                            }));
                        }
                    });
                    await Promise.all(a);
                    module788.close(g);
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                    store.setSelectRowKeys([]);
                    if (success) {
                        success();
                    }
                },
                resource: y.join(", "),
                modal: module823,
                store,
                ...rest
            });
        }
    },
    "pipeline.batch.run": {
        on: async function(e) {
            let r;
            let n;
            let l;
            let c;
            let s;
            let f;
            let d;
            let p;
            let m;
            let v;
            r = e.store;
            n = e.success;
            l = e.rowKey;
            c = e.devops;
            s = e.cluster;
            f = module14.toJS(r.list);
            d = f.data;
            p = f.selectedRowKeys;
            module240.success({
                content: d.length === 1 ? t("PIPELINE_RUN_START_SI") : t("PIPELINE_RUN_START_PL")
            });
            m = d.filter((e)=>p.includes(e[l])).map((e)=>e.name);
            v = [];
            d.forEach((()=>{
                const e = module44(module41.mark(function e(t) {
                    let a;
                    let n;
                    let l;
                    let u;
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    if (!m.includes(t.name)) {
                                        e.next = 11;
                                        break;
                                    }
                                    a = t.parameters;
                                    n = t.branchNames;
                                    l = module26(n, "[0]", "");
                                    if (!n || module63(n)) {
                                        e.next = 9;
                                        break;
                                    }
                                    e.next = 7;
                                    return r.getBranchDetail({
                                        branch: l,
                                        name: t.name,
                                        devops: c,
                                        cluster: s
                                    });
                                case 7:
                                    u = e.sent;
                                    a = u.parameters || undefined;
                                case 9:
                                    if (!module63(a)) {
                                        a = a.map((e)=>A(e));
                                    }
                                    v.push(r.runBranch({
                                        name: t.name,
                                        devops: c,
                                        cluster: s,
                                        branch: l,
                                        parameters: a
                                    }));
                                case 11:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                }));
                return function(t) {
                    return e.apply(this, arguments);
                };
            })());
            await Promise.all(v);
            module240.success({
                content: d.length === 1 ? t("BATCH_RUN_SUCCESS_SI") : t("BATCH_RUN_SUCCESS_PL")
            });
            r.setSelectRowKeys([]);
            if (n) {
                n();
            }
        }
    },
    "pipeline.edit": {
        on: function({ store, cluster, devops, success, formTemplate, ...rest }) {
            let provider = null;
            if (module26(formTemplate, "multi_branch_pipeline")) {
                const v = module26(formTemplate, "multi_branch_pipeline");
                const E = module26(v, "source_type");
                const y = module26(v, `${E}_source.scm_id`);
                module74(formTemplate, "multi_branch_pipeline.key", y);
                provider = E;
                const g = omitRepoKeys[E].map((e)=>`${E}_source.${e}`);
                module74(formTemplate, "__multi_branch_pipeline", module189(v, [
                    "source_type"
                ].concat(module61(g), [
                    "key"
                ])));
            }
            var S = module788.open({
                onOk: async (l)=>{
                    resetPipelineMultiBranch(l);
                    updatePipelineParams(l, true);
                    updatePipelineParamsInSpec(l, devops);
                    await store.updatePipeline({
                        data: l,
                        devops,
                        cluster
                    });
                    module788.close(S);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                cluster,
                devops,
                provider,
                formTemplate: module136(formTemplate),
                modal: module3219,
                ...rest
            });
        }
    },
    "pipeline.advance.edit": {
        on: function({ store, cluster, devops, success, formTemplate, ...rest }) {
            var m = module788.open({
                onOk: async (a)=>{
                    updatePipelineParams(a, true);
                    updatePipelineParamsInSpec(a, devops);
                    await store.updatePipeline({
                        data: a,
                        devops,
                        cluster
                    });
                    module788.close(m);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                cluster,
                devops,
                formTemplate: module136(formTemplate),
                modal: module3213,
                ...rest
            });
        }
    },
    "pipeline.params": {
        on: function({ store, success, devops, cluster, ...rest }) {
            var m = module788.open({
                onOk: async (parameters, u)=>{
                    module240.success({
                        content: `${t("PIPELINE_RUN_START_SI")}`
                    });
                    await store.runBranch({
                        devops,
                        name: rest.params.name,
                        branch: u,
                        parameters,
                        cluster
                    });
                    module788.close(m);
                    if (success) {
                        success(u);
                    }
                },
                store,
                devops,
                cluster,
                modal: module1716,
                ...rest
            });
        }
    },
    "pipeline.scanRepositoryLogs": {
        on: function({ store, success: _success, ...rest }) {
            var n = module788.open({
                onOk: async ()=>{
                    module788.close(n);
                },
                modal: module3276,
                store,
                ...rest
            });
        }
    },
    "pipeline.jenkins": {
        on: function({ store, params, defaultValue, success, ...rest }) {
            var p = module788.open({
                onOk: async (a)=>{
                    await store.updateJenkinsFile(a, params);
                    module788.close(p);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                modal: module3289,
                defaultValue,
                params,
                ...rest
            });
        }
    },
    "pipeline.pipelineCreate": {
        on: function({ store, rootStore: _rootStore, success, jsonData, params, ...rest }) {
            var p = module788.open({
                onOk: async (a)=>{
                    await store.updateJenkinsFile(a, params);
                    module788.close(p);
                    module240.success({
                        content: t("UPDATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                modal: module3222,
                jsonData,
                params,
                store,
                ...rest
            });
        }
    },
    "pipeline.pipelineTemplateOld": {
        on: function({ store, rootStore: _rootStore, success, jsonData, params, ...rest }) {
            let t;
            var i = module788.open({
                onOk: (t = module44(module41.mark(function e(t) {
                    let n;
                    let c;
                    let s;
                    let d;
                    let p;
                    let m;
                    let v;
                    return module41.wrap(function(e) {
                        while(true){
                            switch(e.prev = e.next){
                                case 0:
                                    n = t.jenkinsFile;
                                    if (t.template === "custom") {
                                        e.next = 13;
                                        break;
                                    }
                                    ({ paramsForm: c = {} } = t);
                                    s = Object.keys(c).reduce((acc, key)=>{
                                        acc.push({
                                            name: key,
                                            value: c[key]
                                        });
                                        return acc;
                                    }, []);
                                    e.next = 6;
                                    return store.getTempleJenkins(t.template, {
                                        parameters: s
                                    }, {
                                        cluster: params.cluster
                                    });
                                case 6:
                                    d = e.sent;
                                    p = params.devops;
                                    m = params.name;
                                    v = params.cluster;
                                    e.next = 10;
                                    return store.checkScriptCompile({
                                        devops: p,
                                        pipeline: m,
                                        value: d,
                                        cluster: v
                                    });
                                case 10:
                                    e.next = 12;
                                    return store.convertJenkinsFileToJson(d, v);
                                case 12:
                                    n = e.sent;
                                case 13:
                                    module788.close(i);
                                    if (success) {
                                        success(n);
                                    }
                                case 15:
                                case "end":
                                    return e.stop();
                            }
                        }
                    }, e);
                })), function(e) {
                    return t.apply(this, arguments);
                }),
                modal: module826,
                steps: PIPELINE_CREATE_STEPS_OLD,
                jsonData,
                params,
                store,
                ...rest
            });
        }
    },
    "pipeline.pipelineTemplate": {
        on: function({ store, rootStore: _rootStore, success, jsonData, params, pipelineDetailStore: _pipelineDetailStore, ...rest }) {
            store.isSubmitting = false;
            var i = module788.open({
                onOk: async (r)=>{
                    let l;
                    let c;
                    let s;
                    let d;
                    let p;
                    let m;
                    let v;
                    let h;
                    let mode;
                    let jsonData_1;
                    if (!(r.template === "custom")) {
                        ({ paramsForm: c = {} } = r);
                        s = Object.keys(c).reduce((acc, key)=>{
                            acc.push({
                                name: key,
                                value: c[key]
                            });
                            return acc;
                        }, []);
                        d = await store.getTempleJenkins(r.template, {
                            parameters: s
                        }, {
                            cluster: params.cluster
                        });
                        p = params.devops;
                        m = params.name;
                        v = params.cluster;
                        await store.checkScriptCompile({
                            devops: p,
                            pipeline: m,
                            value: d,
                            cluster: v
                        });
                        h = await store.convertJenkinsFileToJson(d, v, p, m, true);
                        mode = h.mode;
                        jsonData_1 = h.jsonData;
                        l = {
                            jenkinsFile: d,
                            jsonData: jsonData_1,
                            mode,
                            template: r.template
                        };
                    } else {
                        l = {
                            jenkinsFile: "",
                            json: {},
                            mode: "raw",
                            template: "custom"
                        };
                    }
                    module788.close(i);
                    if (success) {
                        success(l);
                    }
                },
                modal: module826,
                steps: PIPELINE_CREATE_STEPS,
                jsonData,
                params,
                store,
                ...rest
            });
        }
    },
    "pipeline.copy": {
        on: function({ store, cluster, devops, success, formTemplate, ...rest }) {
            var m = module788.open({
                onOk: async (a)=>{
                    updatePipelineParams(a, true);
                    updatePipelineParamsInSpec(a, devops);
                    Object.keys(a).forEach((e)=>{
                        if (e === "metadata" && a[e]) {
                            Object.keys(a[e]).forEach((t)=>{
                                if (t !== "name" && t !== "namespace") {
                                    delete a[e][t];
                                }
                            });
                        }
                    });
                    await store.createPipeline({
                        data: a,
                        devops,
                        cluster
                    });
                    module788.close(m);
                    module240.success({
                        content: t("CREATE_SUCCESSFUL")
                    });
                    if (success) {
                        success();
                    }
                },
                store,
                cluster,
                devops,
                success,
                formTemplate,
                modal: module3221,
                ...rest
            });
        }
    }
};
export default w;
