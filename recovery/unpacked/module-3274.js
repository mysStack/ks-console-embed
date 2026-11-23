import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-86.js";
import "./module-73.js";
import "./module-18.js";
import "./module-192.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-137.js";
import "./module-7.js";
import "./module-41.js";
import "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import "./module-66.js";
import module49 from "./module-49.js";
import "./module-31.js";
import "./module-45.js";
import "./module-28.js";
import "./module-191.js";
import "./module-42.js";
import "./module-160.js";
import "./module-34.js";
import "./module-15.js";
import "./module-319.js";
import "./module-22.js";
import "./module-57.js";
import module240 from "./module-240.js";
import module136 from "./module-136.js";
import module26 from "./module-26.js";
import module60 from "./module-60.js";
import module63 from "./module-63.js";
import module76 from "./module-76.js";
import module74 from "./module-74.js";
import module242 from "./module-242.js";
import module14 from "./module-14.js";
import module244 from "./module-244.js";
import module1193 from "./module-1193.js";
import module323 from "./module-323.js";
import module1110 from "./module-1110.js";
import module960 from "./module-960.js";
import { generateId, safeParseJSON } from "./module-52.js";
import { CREDENTIAL_DISPLAY_KEY } from "./module-72.js";
import module201 from "./module-201.js";
let v;
let g;
let y;
let E;
let b;
let _;
let O;
let S;
let C;
let D;
let k;
let N;
let T;
let R;
let I;
let w;
function K(e) {
    const t = (()=>{
        if (typeof Reflect === "undefined" || !Reflect.construct) {
            return false;
        }
        if (Reflect.construct.sham) {
            return false;
        }
        if (typeof Proxy === "function") {
            return true;
        }
        try {
            Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
            return true;
        } catch (e) {
            return false;
        }
    })();
    return function() {
        let a;
        const r = module51(e);
        if (t) {
            const n = module51(this).constructor;
            a = Reflect.construct(r, arguments, n);
        } else {
            a = r.apply(this, arguments);
        }
        return module56(this, a);
    };
}
const X = (e)=>{
    if (module26(e, "pipeline.stages")) {
        e.pipeline.stages = e.pipeline.stages.map((e)=>{
            if (e.parallel) {
                e.parallel = e.parallel.map((e)=>{
                    module242(e, "branches[0].id");
                    delete e.error;
                    delete e.conditionError;
                    delete e.isActive;
                    return e;
                });
                return e;
            }
            module242(e, "branches[0].id");
            delete e.error;
            delete e.conditionError;
            delete e.isActive;
            return e;
        });
        if (module76(e.pipeline.parameters) && module63(e.pipeline.parameters)) {
            delete e.pipeline.parameters;
        } else {
            const t = module26(e, "pipeline.parameters.parameters", []);
            if (!module63(t) && module60(t)) {
                t.forEach((e)=>{
                    const a = module26(e, "arguments", []);
                    if (!module63(t) && module60(a)) {
                        a.forEach((e)=>{
                            if (!module26(e, "value.value") && e.key) {
                                module74(e, "value.value", "");
                            }
                        });
                    }
                });
            }
        }
        return e;
    }
};
const $ = function(e) {
    const a = module201("lang") === "zh" ? "ZH" : "EN";
    const r = {};
    const n = module26(e, "metadata.annotations", {});
    r.icon = n["step.devops.kubesphere.io/icon"];
    r.category = module26(e, [
        "metadata",
        "labels",
        "step.devops.kubesphere.io/category"
    ]);
    r.name = e.metadata.name;
    r.desc = n[`devops.kubesphere.io/description${a}`] || n["devops.kubesphere.io/descriptionEN"];
    r.title = n[`devops.kubesphere.io/displayName${a}`] || n["devops.kubesphere.io/displayNameEN"] || n.displayNameEN;
    r.parameters = module26(e, "spec.parameters", []).map((e)=>({
            ...e,
            ...e.options ? {
                options: safeParseJSON(e.options, []).map((e)=>({
                        label: t(e.label),
                        value: e.value
                    }))
            } : {}
        }));
    if (!module63(module26(e, "spec.secret", {}))) {
        const secretType = CREDENTIAL_DISPLAY_KEY[e.spec.secret.type?.split("/")[1]];
        r.parameters.push({
            name: "secret",
            type: "secret",
            display: "Secret",
            postByQuery: true,
            required: true,
            secretType
        });
    }
    return r;
};
v = ((e)=>{
    module55(z, e);
    var x = K(z);
    function z(...a) {
        let e;
        module36(this, z);
        e = x.call(this, ...a);
        e.credentialStore = new module1110;
        e.cdStore = new module1193;
        e.pipelineStore = new module960;
        module65(e, "jsonData", g, module88(e));
        module65(e, "activeLineIndex", y, module88(e));
        module65(e, "activeColumnIndex", E, module88(e));
        module65(e, "isAddingStep", b, module88(e));
        module65(e, "edittingData", _, module88(e));
        module65(e, "params", O, module88(e));
        module65(e, "labelDataList", S, module88(e));
        module65(e, "credentialsList", C, module88(e));
        module65(e, "cdList", D, module88(e));
        module65(e, "pipelineList", k, module88(e));
        module65(e, "pipelineSteps", N, module88(e));
        module65(e, "getCredentials", T, module88(e));
        module65(e, "getPipelines", R, module88(e));
        module65(e, "getCDListData", I, module88(e));
        module65(e, "createCredential", w, module88(e));
        return e;
    }
    module37(z, [
        {
            key: "handleAddBranch",
            value: function(e) {
                if (this.jsonData.json.pipeline.stages[e].parallel) {
                    this.jsonData.json.pipeline.stages[e].parallel.push(this.newStage);
                } else {
                    this.jsonData.json.pipeline.stages[e] = {
                        name: `default-${e}`,
                        parallel: [
                            this.jsonData.json.pipeline.stages[e],
                            this.newStage
                        ]
                    };
                }
                this.handleSetInLocalStorage();
            }
        },
        {
            key: "handleSetInLocalStorage",
            value: function() {
                const params = this.params;
                const { devops, name } = params;
                this.prevData = localStorage.setItem(`${globals.user.username}-${devops}-${name}`, JSON.stringify(module14.toJS(this.jsonData)));
            }
        },
        {
            key: "setData",
            value: function(e) {
                this.jsonData = e;
                X(this.jsonData.json);
            }
        },
        {
            key: "insertColumn",
            value: function(e) {
                this.jsonData.json.pipeline.stages.splice(e, 0, this.newStage);
            }
        },
        {
            key: "setFocus",
            value: function(e, t) {
                if (this.activeLineIndex !== "") {
                    this.setActive(this.activeLineIndex, this.activeColumnIndex, undefined);
                }
                this.activeLineIndex = e;
                this.activeColumnIndex = t;
                this.setActive(e, t, true);
            }
        },
        {
            key: "setActive",
            value: function(e, t, isActive) {
                if (this.jsonData.json.pipeline.stages[e] && this.jsonData.json.pipeline.stages[e].parallel) {
                    this.jsonData.json.pipeline.stages[e].parallel[t] = {
                        ...this.jsonData.json.pipeline.stages[e].parallel[t],
                        isActive
                    };
                } else {
                    this.jsonData.json.pipeline.stages[e] = {
                        ...this.jsonData.json.pipeline.stages[e],
                        isActive
                    };
                }
            }
        },
        {
            key: "setEdittingData",
            value: function(e) {
                this.edittingData = module136(e);
            }
        },
        {
            key: "isPassWordCredentials",
            value: function(e) {
                return e === "username_password";
            }
        },
        {
            key: "isKubeconfigCredentials",
            value: function(e) {
                return e === "kubeconfig";
            }
        },
        {
            key: "clearFocus",
            value: function() {
                if (this.activeLineIndex !== "") {
                    this.setActive(this.activeLineIndex, this.activeColumnIndex, undefined);
                }
                this.activeLineIndex = "";
                this.activeColumnIndex = "";
                this.edittingData = {};
                this.isAddingStep = false;
            }
        },
        {
            key: "deleteStage",
            value: function() {
                if (this.jsonData.json.pipeline.stages[this.activeLineIndex].parallel) {
                    if (this.jsonData.json.pipeline.stages[this.activeLineIndex].parallel.length === 1) {
                        this.jsonData.json.pipeline.stages.splice(this.activeLineIndex, 1);
                    } else if (this.jsonData.json.pipeline.stages[this.activeLineIndex].parallel.length === 2) {
                        this.jsonData.json.pipeline.stages[this.activeLineIndex].parallel.splice(this.activeColumnIndex, 1);
                        this.jsonData.json.pipeline.stages[this.activeLineIndex] = this.jsonData.json.pipeline.stages[this.activeLineIndex].parallel[0];
                    } else {
                        this.jsonData.json.pipeline.stages[this.activeLineIndex].parallel.splice(this.activeColumnIndex, 1);
                    }
                } else {
                    this.jsonData.json.pipeline.stages.splice(this.activeLineIndex, 1);
                }
                this.activeLineIndex = "";
                this.activeColumnIndex = "";
                this.handleSetInLocalStorage();
            }
        },
        {
            key: "setValue",
            value: function(e) {
                if (this.jsonData.json.pipeline.stages[this.activeLineIndex].parallel) {
                    this.jsonData.json.pipeline.stages[this.activeLineIndex].parallel.splice(this.activeColumnIndex, 1, e);
                } else {
                    this.jsonData.json.pipeline.stages.splice(this.activeLineIndex, 1, e);
                }
                this.handleSetInLocalStorage();
            }
        },
        {
            key: "convertJsonToJenkinsFile",
            value: async function(a) {
                let r;
                const _this = this;
                r = a.cluster;
                return request.post(`${this.getDevopsUrlV2({
                    cluster: r
                })}/tojenkinsfile`, {
                    json: JSON.stringify(X(module14.toJS(this.jsonData.json)))
                }, {
                    headers: {
                        "content-type": "application/x-www-form-urlencoded"
                    }
                }).then((e)=>{
                    if (e && module26(e, "data.result") === "success") {
                        _this.jenkinsFile = e.data.jenkinsfile;
                        return e;
                    }
                    if (e && module26(e, "data.result") === "failure") {
                        e.data.errors.forEach((e)=>{
                            if (e.location) {
                                const a = e.location.join(".").split(".branches");
                                const r = module26(_this.jsonData.json, a[0]);
                                if (r && !module63(r)) {
                                    const l = e.location.indexOf("steps") !== -1 ? parseInt(e.location[e.location.indexOf("steps") + 1], 10) : undefined;
                                    if (l !== undefined) {
                                        return void module74(_this.jsonData.json, a[0], {
                                            ...module14.toJS(module26(_this.jsonData.json, a[0])),
                                            error: {
                                                error: e.error,
                                                index: l
                                            }
                                        });
                                    }
                                    return void module240.error({
                                        title: t("pipeline syntax error"),
                                        content: t(e.error),
                                        duration: 6000
                                    });
                                }
                                if (e.location.indexOf("conditions") === -1) {
                                    const u = e.location.indexOf("steps") !== -1 ? parseInt(e.location[e.location.indexOf("steps") + 1], 10) : undefined;
                                    module74(_this.jsonData.json, a[0], {
                                        ...module14.toJS(module26(_this.jsonData.json, a[0])),
                                        error: {
                                            error: e.error,
                                            index: u
                                        }
                                    });
                                } else {
                                    const o = e.location.join(".").split(".when");
                                    const i = e.location.indexOf("conditions") !== -1 ? parseInt(e.location[e.location.indexOf("conditions") + 1], 10) : undefined;
                                    module74(_this.jsonData.json, o[0], {
                                        ...module14.toJS(module26(_this.jsonData.json, o[0])),
                                        conditionError: {
                                            error: e.error,
                                            index: i
                                        }
                                    });
                                }
                            } else {
                                window.onunhandledrejection({
                                    status: "Failure",
                                    reason: t("pipeline syntax error"),
                                    message: e.error || JSON.stringify(e)
                                });
                            }
                        });
                    }
                });
            }
        },
        {
            key: "saveJenkinsFile",
            value: async function(t) {
                let devops;
                let r;
                let n;
                const _this = this;
                devops = t.devops;
                r = t.name;
                n = t.cluster;
                return request.put(`${this.getDevopsUrlV3({
                    cluster: n,
                    devops
                })}/pipelines/${r}/jenkinsfile?mode=json`, {
                    data: JSON.stringify(X(module14.toJS(this.jsonData.json)))
                }, {
                    headers: {
                        "content-type": "application/json"
                    }
                }).then((e)=>{
                    if (e.result === "success") {
                        _this.jenkinsFile = JSON.stringify(X(module14.toJS(_this.jsonData.json)));
                        return _this.jenkinsFile;
                    }
                });
            }
        },
        {
            key: "handleConfirm",
            value: async function() {
                await this.saveJenkinsFile();
            }
        },
        {
            key: "handleConfirmOld",
            value: async function() {
                await this.convertJsonToJenkinsFile();
            }
        },
        {
            key: "fetchLabel",
            value: async function() {
                let t;
                let a;
                let r;
                let n;
                const u = arguments;
                t = u.length > 0 && u[0] !== undefined ? u[0] : {};
                a = t.cluster;
                r = `${this.getDevopsUrlV3({
                    cluster: a
                })}ci/nodelabels`;
                this.labelDataList = [];
                if ((n = await request.get(r, {}, {}, function() {
                    return null;
                })) && n.status === "success" && module60(n.data)) {
                    this.labelDataList = n.data.map((e)=>({
                            label: e,
                            value: e
                        }));
                }
            }
        },
        {
            key: "fetchPipelineStepTemplates",
            value: async function() {
                let t;
                let a;
                let r;
                let n;
                const u = arguments;
                t = u.length > 0 && u[0] !== undefined ? u[0] : {};
                a = await request.get(`${this.getBaseUrl(t)}clustersteptemplates?limit=100`);
                r = a.items;
                n = (r === undefined ? [] : r).map($);
                this.pipelineSteps = n;
                return n;
            }
        },
        {
            key: "fetchStepTemplate",
            value: async function(t) {
                let a;
                let r;
                const n = arguments;
                a = n.length > 1 && n[1] !== undefined ? n[1] : {};
                r = await request.get(`${this.getBaseUrl(a)}clustersteptemplates/${t}`);
                return $(r);
            }
        },
        {
            key: "getPipelineStepTempleJenkins",
            value: async function(t, a, r) {
                let n;
                let u;
                let o;
                const i = arguments;
                n = i.length > 3 && i[3] !== undefined ? i[3] : {};
                u = await request.post(`${this.getBaseUrl(t)}clustersteptemplates/${a}/render?${module244.stringify(n)}`, r);
                o = module26(u, "data", "");
                return o;
            }
        },
        {
            key: "newStage",
            get: function() {
                return {
                    branches: [
                        {
                            id: String(Math.random()),
                            name: "",
                            steps: []
                        }
                    ],
                    agent: {
                        type: "none"
                    },
                    name: `stage-${generateId(5)}`
                };
            }
        },
        {
            key: "stages",
            get: function() {
                return module26(this.jsonData, "json.pipeline.stages", []);
            }
        },
        {
            key: "activeStage",
            get: function() {
                if (this.activeLineIndex === "") {
                    return "";
                }
                if (this.stages[this.activeLineIndex]) {
                    if (this.stages[this.activeLineIndex].parallel) {
                        return this.stages[this.activeLineIndex].parallel[this.activeColumnIndex];
                    }
                    return this.stages[this.activeLineIndex];
                }
                return "";
            }
        }
    ]);
    return z;
})(module323);
module49(v.prototype, "stages", [
    module14.computed
], Object.getOwnPropertyDescriptor(v.prototype, "stages"), v.prototype);
module49(v.prototype, "activeStage", [
    module14.computed
], Object.getOwnPropertyDescriptor(v.prototype, "activeStage"), v.prototype);
g = module49(v.prototype, "jsonData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
y = module49(v.prototype, "activeLineIndex", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
});
E = module49(v.prototype, "activeColumnIndex", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
});
b = module49(v.prototype, "isAddingStep", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
});
_ = module49(v.prototype, "edittingData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
O = module49(v.prototype, "params", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
});
S = module49(v.prototype, "labelDataList", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
C = module49(v.prototype, "credentialsList", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: []
        };
    }
});
D = module49(v.prototype, "cdList", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: []
        };
    }
});
k = module49(v.prototype, "pipelineList", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {
            data: []
        };
    }
});
N = module49(v.prototype, "pipelineSteps", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return [];
    }
});
module49(v.prototype, "setData", [
    module14.action
], Object.getOwnPropertyDescriptor(v.prototype, "setData"), v.prototype);
module49(v.prototype, "insertColumn", [
    module14.action
], Object.getOwnPropertyDescriptor(v.prototype, "insertColumn"), v.prototype);
module49(v.prototype, "setFocus", [
    module14.action
], Object.getOwnPropertyDescriptor(v.prototype, "setFocus"), v.prototype);
module49(v.prototype, "setActive", [
    module14.action
], Object.getOwnPropertyDescriptor(v.prototype, "setActive"), v.prototype);
module49(v.prototype, "setEdittingData", [
    module14.action
], Object.getOwnPropertyDescriptor(v.prototype, "setEdittingData"), v.prototype);
module49(v.prototype, "clearFocus", [
    module14.action
], Object.getOwnPropertyDescriptor(v.prototype, "clearFocus"), v.prototype);
module49(v.prototype, "deleteStage", [
    module14.action
], Object.getOwnPropertyDescriptor(v.prototype, "deleteStage"), v.prototype);
module49(v.prototype, "setValue", [
    module14.action
], Object.getOwnPropertyDescriptor(v.prototype, "setValue"), v.prototype);
module49(v.prototype, "convertJsonToJenkinsFile", [
    module14.action
], Object.getOwnPropertyDescriptor(v.prototype, "convertJsonToJenkinsFile"), v.prototype);
module49(v.prototype, "saveJenkinsFile", [
    module14.action
], Object.getOwnPropertyDescriptor(v.prototype, "saveJenkinsFile"), v.prototype);
T = module49(v.prototype, "getCredentials", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            await _this.credentialStore.fetchList({
                devops: _this.params.devops,
                cluster: _this.params.cluster,
                ...a
            });
            _this.credentialsList = _this.credentialStore.list;
        };
    }
});
R = module49(v.prototype, "getPipelines", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            await _this.pipelineStore.fetchList({
                devops: _this.params.devops,
                cluster: _this.params.cluster,
                filter: "no-folders",
                ...a
            });
            _this.pipelineList = _this.pipelineStore.list;
        };
    }
});
I = module49(v.prototype, "getCDListData", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            await _this.cdStore.fetchList({
                devops: _this.params.devops,
                cluster: _this.params.cluster,
                ...a
            });
            _this.cdList = _this.cdStore.list;
        };
    }
});
w = module49(v.prototype, "createCredential", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a, r)=>{
            await _this.credentialStore.handleCreate(a, r);
        };
    }
});
module49(v.prototype, "handleConfirm", [
    module14.action
], Object.getOwnPropertyDescriptor(v.prototype, "handleConfirm"), v.prototype);
module49(v.prototype, "handleConfirmOld", [
    module14.action
], Object.getOwnPropertyDescriptor(v.prototype, "handleConfirmOld"), v.prototype);
module49(v.prototype, "fetchPipelineStepTemplates", [
    module14.action
], Object.getOwnPropertyDescriptor(v.prototype, "fetchPipelineStepTemplates"), v.prototype);
module49(v.prototype, "fetchStepTemplate", [
    module14.action
], Object.getOwnPropertyDescriptor(v.prototype, "fetchStepTemplate"), v.prototype);
export default v;
