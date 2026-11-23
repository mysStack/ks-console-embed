import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-87.js";
import "./module-9.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-196.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-118.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import "./module-41.js";
import "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import { Component } from "./module-553.js";
import { compareVersion } from "./module-52.js";
import Module1376 from "./module-1376.js";
import { getStepsEditor } from "./module-3228.js";
import module1017 from "./module-1017.js";
let u;
let o;
let i;
let c;
let s;
let f;
let d;
let p;
let m;
let h;
const options = [
    {
        label: "Any",
        value: "any"
    },
    {
        label: "node",
        value: "node"
    },
    {
        label: "kubernetes",
        value: "kubernetes"
    }
];
const L = observer((o = ((Component_1)=>{
    module55(r, Component_1);
    var a = ((e)=>{
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
    })(r);
    function r(...u) {
        let e;
        module36(this, r);
        e = a.call(this, ...u);
        module65(e, "stageName", i, module88(e));
        module65(e, "formData", c, module88(e));
        module65(e, "showYaml", s, module88(e));
        module65(e, "loading", f, module88(e));
        module65(e, "handleSetYaml", d, module88(e));
        module65(e, "hideYamlEditor", p, module88(e));
        module65(e, "showEditor", m, module88(e));
        e.handleDelete = function() {
            e.props.store.deleteStage();
        };
        e.handleCancel = function() {
            e.props.onCancel();
        };
        module65(e, "handleAgentTypeChange", h, module88(e));
        e.handleConfirm = async function t() {
            let a;
            e.getAgentArguments();
            e.loading = true;
            if (a = await e.props.store.saveJenkinsFile(e.props.store.params)) {
                e.props.onOk(a);
            }
        };
        e.handleConfirmOld = async function t() {
            let a;
            e.getAgentArguments();
            e.loading = true;
            if ((a = await e.props.store.convertJsonToJenkinsFile(e.props.store.params).finally(()=>{
                e.loading = false;
            })) && module26(a, "data.result") === "success") {
                e.props.onOk(module26(a, "data.jenkinsfile", ""));
            }
        };
        e.renderAgentForms = function() {
            const options_1 = module14.toJS(e.labelDataList);
            const defaultValue = module26(options_1, "0.value", "");
            switch(e.agentType){
                case "node":
                    return <module186.Form data={e.formData} ref={e.formRef}><module186.Form.Item label={t("label")} desc={t("The label on which to run the Pipeline or individual stage")}><module186.Select name="label" options={options_1} defaultValue={defaultValue}/></module186.Form.Item></module186.Form>;
                case "kubernetes":
                    return <module186.Form data={e.formData} ref={e.formRef}><module186.Form.Item label={t("label")} desc={t("")}><module186.Input name="label"/></module186.Form.Item><module186.Form.Item label={t("yaml")} desc=<span className={module1017.clickable} onClick={e.showEditor}>{t("show yaml editor")}</span>><module186.Input name="yaml"/></module186.Form.Item><module186.Form.Item label={t("defaultContainer")} desc={t("")}><module186.Input name="defaultContainer"/></module186.Form.Item></module186.Form>;
                default:
                    return null;
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const e = module14.toJS(module26(this.props.store.jsonData, "json.pipeline.agent.arguments", []));
                this.formData = e.reduce((acc, item)=>{
                    if (Array.isArray(item.value)) {
                        const a = item.value.reduce((acc_1, item_1)=>{
                            const a = {};
                            a[item_1.key] = item_1.value.value;
                            acc_1.push(a);
                            return acc_1;
                        }, []);
                        acc[item.key] = a;
                    } else {
                        acc[item.key] = item.value.value;
                    }
                    return acc;
                }, {});
            }
        },
        {
            key: "getAgentArguments",
            value: function() {
                const _this = this;
                const t = Object.keys(this.formData).map((t)=>{
                    const a = module14.toJS(_this.formData[t]);
                    if (Array.isArray(a)) {
                        return {
                            key: t,
                            value: a.map((e)=>Object.keys(e).map((t)=>({
                                        key: t,
                                        value: {
                                            isLiteral: true,
                                            value: e[t]
                                        }
                                    }))[0])
                        };
                    }
                    return {
                        key: t,
                        value: {
                            isLiteral: true,
                            value: a
                        }
                    };
                });
                module74(this.props.store.jsonData, "json.pipeline.agent.arguments", t);
            }
        },
        {
            key: "render",
            value: function() {
                const store = this.props.store;
                const e_activeStage = store.activeStage;
                const pipeline = store.jsonData.json.pipeline;
                const n = pipeline === undefined ? {} : pipeline;
                const isSubmitting = this.props.isSubmitting;
                const StepsEditor = this.StepsEditor;
                return <div className={module1017.sider}><div className={module1017.sheet}><div className={module1017.title}>{t("AGENT")}</div><module186.Form.Item desc={t("AGENT_TYPE_DESC")} label={t("TYPE")}><module186.Select options={options} value={n.agent.type} onChange={this.handleAgentTypeChange}/></module186.Form.Item>{this.renderAgentForms()}<div className={module1017.footer}><module186.Button onClick={this.handleCancel}>{t("CANCEL")}</module186.Button><module186.Button disabled={!n || !n.stages.length} loading={isSubmitting || this.loading} type="control" onClick={this.isOld ? this.handleConfirmOld : this.handleConfirm}>{t("OK")}</module186.Button></div></div>{e_activeStage ? <div className={module1017.content}>{<StepsEditor activeStage={e_activeStage} store={this.props.store} trigger={this.props.trigger}/>}</div> : null}<Module1376 value={this.formData.yaml || ""} visible={this.showYaml} onCancel={this.hideYamlEditor} onOk={this.handleSetYaml}/></div>;
            }
        },
        {
            key: "agentType",
            get: function() {
                return module26(this.props.store.jsonData, "json.pipeline.agent.type", "");
            }
        },
        {
            key: "ksVersion",
            get: function() {
                const cluster = this.props.cluster;
                if (window.parent?.globals?.app.isMultiCluster) {
                    return module26(window, `parent.globals.clusterConfig.${cluster}.ksVersion`);
                }
                return module26(window, "parent.globals.ksConfig.ksVersion");
            }
        },
        {
            key: "isOld",
            get: function() {
                return compareVersion(this.ksVersion, "3.4.0") < 0;
            }
        },
        {
            key: "labelDataList",
            get: function() {
                return module26(this.props.store, "labelDataList", []);
            }
        },
        {
            key: "StepsEditor",
            get: function() {
                return getStepsEditor(this.ksVersion);
            }
        }
    ]);
    return r;
})(Component), i = module49(o.prototype, "stageName", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
}), c = module49(o.prototype, "formData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
}), s = module49(o.prototype, "showYaml", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), f = module49(o.prototype, "loading", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), d = module49(o.prototype, "handleSetYaml", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.formData.yaml = t;
            _this.showYaml = false;
        };
    }
}), p = module49(o.prototype, "hideYamlEditor", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.showYaml = false;
        };
    }
}), m = module49(o.prototype, "showEditor", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.showYaml = true;
        };
    }
}), module49(o.prototype, "agentType", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "agentType"), o.prototype), module49(o.prototype, "labelDataList", [
    module14.computed
], Object.getOwnPropertyDescriptor(o.prototype, "labelDataList"), o.prototype), h = module49(o.prototype, "handleAgentTypeChange", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.formData = {};
            module74(_this.props.store.jsonData, "json.pipeline.agent.type", t);
        };
    }
}), u = o)) || u;
export default L;
