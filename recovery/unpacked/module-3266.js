import "./module-12.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-30.js";
import "./module-18.js";
import "./module-87.js";
import "./module-16.js";
import "./module-326.js";
import "./module-138.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-38.js";
import "./module-62.js";
import "./module-7.js";
import "./module-32.js";
import "./module-315.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module31 from "./module-31.js";
import "./module-45.js";
import "./module-118.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import { Component, createRef } from "./module-553.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import Module800 from "./module-800.js";
import module14 from "./module-14.js";
import module74 from "./module-74.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import Module788 from "./module-788.js";
import Module842 from "./module-842.js";
import Module1199 from "./module-1199.js";
import { getRepoUrl, groovyToJS, parseCondition } from "./module-982.js";
import { observer } from "./module-239.js";
import { CREDENTIAL_KEY } from "./module-72.js";
import Module3267 from "./module-3267.js";
import Module3268 from "./module-3268.js";
import Module3269 from "./module-3269.js";
import { Reaction } from "./module-3270.js";
import module1125 from "./module-1125.js";
import Module3271 from "./module-3271.js";
let h;
let v;
let g;
const F = new Map([
    [
        true,
        "true"
    ],
    [
        false,
        "false"
    ]
]);
const G = {
    secret_text: "string",
    username_password: "usernamePassword",
    ssh: "sshUserPrivateKey",
    kubeconfig: "kubeconfigContent"
};
const V = observer((g = v = ((Component_1)=>{
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.handleCodeEditorChange = function(e) {
            return function(t) {
                const formData = n.state.formData;
                module74(formData, e, t);
            };
        };
        n.handleCheckboxChange = function(e) {
            return function(t) {
                const formData = n.state.formData;
                module74(formData, e, t);
                n.setState({
                    formData
                });
            };
        };
        n.handleSecretChange = function(e) {
            return function(t) {
                const n_state = n.state;
                const { formData, reactionForm } = n_state;
                const u = n.props.store.credentialsList.data.filter((e)=>e.name === t);
                if (u.length) {
                    if (e.postByQuery) {
                        n.query = {
                            secret: u[0].name,
                            secretNamespace: u[0].namespace
                        };
                    } else {
                        module74(formData, e.name, {
                            name: u[0].name,
                            type: `credential.devops.kubesphere.io/${CREDENTIAL_KEY[u[0].type]}`
                        });
                    }
                } else {
                    n.query = {};
                    module74(formData, e.name, {
                        name: "",
                        type: ""
                    });
                }
                reactionForm.handleFieldValueChange(e.name, module26(formData, e.name));
                n.setState({
                    formData
                });
            };
        };
        n.handleOk = function() {
            const n_props = n.props;
            const { activeTask, store, onAddStep, onCancel, cluster } = n_props;
            const n_state = n.state;
            const { typeMap, initData, reactionForm } = n_state;
            const v = Object.entries(reactionForm.getValues()).reduce((acc, entry)=>{
                const a = module96(entry, 2);
                const r = a[0];
                const n = a[1];
                const l = typeMap[r] === "bool";
                const u = typeof n === "number" ? n.toString() : n;
                return {
                    ...acc,
                    ...module31({}, r, l ? F.get(u) : u)
                };
            }, {});
            n.formRef.current.validate(module44(module41.mark(function* e() {
                let o;
                o = yield store.getPipelineStepTempleJenkins({
                    cluster
                }, activeTask.name, {
                    ...initData,
                    ...v
                }, n.query);
                try {
                    onAddStep(JSON.parse(o));
                } catch (e) {
                    module240.error({
                        content: t("ERROR")
                    });
                    onCancel();
                }
            })));
        };
        n.formRef = createRef();
        n.query = {};
        n.state = {
            formData: {},
            value: "",
            typeMap: {},
            initData: {},
            name: "",
            reactionForm: new Reaction(function() {
                n.forceUpdate();
            }, {
                getRepoUrl
            })
        };
        return n;
    }
    module37(r, [
        {
            key: "renderFormItem",
            value: function(option) {
                let a;
                if (option.condition && !parseCondition(option.condition, this.state.formData)) {
                    return null;
                }
                const store = this.props.store;
                const n = {
                    key: option.name,
                    label: t(option.display),
                    rules: [
                        {
                            required: (a = option.required) !== null && a !== undefined && a,
                            message: t("PARAM_REQUIRED")
                        }
                    ]
                };
                switch(option.type){
                    case "pipeline":
                        return <Module3267 key={option.name} option={option} store={store}/>;
                    case "application":
                        return <Module3268 key={option.name} option={option} store={store}/>;
                    case "secret":
                        return <Module3269 key={option.name} option={option} store={store} formData={this.state.formData} onChange={this.handleSecretChange(option)} showCredential={this.props.showCredential}/>;
                    case "number":
                        return <module186.Form.Item {...n}><Module800 name={option.name}/></module186.Form.Item>;
                    case "text":
                        return <module186.Form.Item {...n}><module186.TextArea name={option.name} rows={8}/></module186.Form.Item>;
                    case "enum":
                        return <module186.Form.Item {...n}><module186.Select name={option.name} options={option.options || []}/></module186.Form.Item>;
                    case "code":
                        return <module186.Form.Item {...n} label={null}><Module842 key={option.name} className={module1125.CodeEditor} name={option.name} mode="yaml"/></module186.Form.Item>;
                    case "bool":
                        return <module186.Form.Item {...n} label="" desc=""><module186.Checkbox name={option.name} checked={module26(this.state.formData, option.name, false)} onChange={this.handleCheckboxChange(option.name)}>{t(option.display)}</module186.Checkbox></module186.Form.Item>;
                    case "hidden":
                        return null;
                    case "radioGroup":
                        return <module186.Form.Item {...n}><module186.RadioGroup name={option.name} options={option.options.map((e)=>({
                                value: e.value,
                                label: t(e.label)
                            })) || []}/></module186.Form.Item>;
                    case "codeRepository":
                        return <module186.Form.Item {...n}><Module1199 name={option.name} cluster={this.props.cluster} devops={this.props.devops} isCreatePipeline trigger={this.props.trigger}/></module186.Form.Item>;
                    case "importCodeRepo":
                        return <module186.Form.Item {...n}><Module3271 name={option.name} cluster={this.props.cluster} devops={this.props.devops} isCreatePipeline trigger={this.props.trigger}/></module186.Form.Item>;
                    default:
                        return <module186.Form.Item {...n}><module186.Input name={option.name}/></module186.Form.Item>;
                }
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { visible, onCancel, activeTask } = props;
                const l = [
                    "secret"
                ];
                const reactionForm = this.state.reactionForm;
                return <Module788 width={680} bodyClassName={module1125.body} onCancel={onCancel} onOk={this.handleOk} visible={visible} closable={false} title={activeTask.title}><module186.Form data={reactionForm.getValues()} ref={this.formRef} onChange={function(t, a) {
                    if (!l.includes(activeTask.parameters.find((e)=>e.name === t)?.type)) {
                        _this.state.reactionForm.handleFieldValueChange(t, a);
                    }
                }}>{reactionForm.getFields().map((t)=>_this.renderFormItem(t))}</module186.Form></Module788>;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function({ activeTask, edittingData }, t) {
                const { name: name_1, parameters } = activeTask;
                if (name_1 === t.name) {
                    return null;
                }
                const t_reactionForm = t.reactionForm;
                const c = ((e)=>e?.reduce(function(e, { name, type, defaultValue }) {
                        return {
                            initData: {
                                ...e.initData,
                                ...module31({}, name, type === "bool" ? defaultValue === "true" : defaultValue || "")
                            },
                            typeMap: {
                                ...e.typeMap,
                                ...module31({}, name, type)
                            },
                            codeKey: type === "code" ? name : e.codeKey
                        };
                    }, {
                        initData: {},
                        typeMap: {},
                        codeKey: ""
                    }))(parameters);
                const { initData, typeMap, codeKey } = c;
                if (module63(edittingData)) {
                    t_reactionForm.init(activeTask.parameters ?? [], codeKey ? initData[codeKey] : initData);
                    if (codeKey) {
                        return {
                            value: initData[codeKey],
                            initData,
                            typeMap,
                            name: name_1,
                            reactionForm: t_reactionForm
                        };
                    }
                    return {
                        formData: initData,
                        initData,
                        typeMap,
                        name: name_1,
                        reactionForm: t_reactionForm
                    };
                }
                let formData = {};
                let h = "";
                const v = module14.toJS(edittingData);
                const { data, type: type_1 } = v;
                if (type_1 === "checkout") {
                    formData = ((e)=>e.data.reduce((acc, item)=>{
                            if (item.key === "scm") {
                                const a = item.value.value;
                                if (a) {
                                    Object.assign(acc, groovyToJS(a));
                                }
                            }
                            acc[item.key] = item.value.value;
                            return acc;
                        }, {}))(edittingData);
                } else if (type_1 === "withcredentials") {
                    formData = ((edittingData_1)=>{
                        const t = module26(edittingData_1, "data.value", "");
                        if (t) {
                            const a = ((e)=>{
                                const a = /\$\{\[([\w-]*)\(/;
                                const r = e.match(a) && e.match(a)[1];
                                if (r) {
                                    return Object.entries(G).find((e)=>e[1] === r)?.[0];
                                }
                                return null;
                            })(t);
                            return {
                                ...groovyToJS(t),
                                type: `credential.devops.kubesphere.io/${CREDENTIAL_KEY[a]}`
                            };
                        }
                        return {};
                    })(edittingData);
                } else if (codeKey) {
                    h = (Array.isArray(data) ? data[0]?.value?.value : data.value) || "";
                    formData = module31({}, codeKey, h);
                } else {
                    formData = Array.isArray(data) ? data.reduce((acc, item)=>{
                        const value = item.value.value;
                        acc[item.key] = value;
                        if (typeMap[item.key] === "bool") {
                            acc[item.key] = typeof value === "boolean" ? value : value === "true";
                        }
                        return acc;
                    }, {}) : Object.keys(initData).reduce((acc, key)=>({
                            ...acc,
                            ...module31({}, key, data.value || "")
                        }), {});
                }
                t_reactionForm.init(activeTask.parameters ?? [], formData);
                return {
                    formData,
                    value: h,
                    initData,
                    typeMap,
                    name: name_1,
                    reactionForm: t_reactionForm
                };
            }
        }
    ]);
    return r;
})(Component), v.formProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {}
}, h = g)) || h;
export default V;
