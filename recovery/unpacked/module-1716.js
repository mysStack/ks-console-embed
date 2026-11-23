import "./module-12.js";
import "./module-135.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-320.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-137.js";
import "./module-7.js";
import "./module-45.js";
import "./module-118.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import "./module-31.js";
import "./module-58.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import { observer } from "./module-239.js";
import Module788 from "./module-788.js";
import module195 from "./module-195.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module960 from "./module-960.js";
import module3212 from "./module-3212.js";
let i;
let c;
let s;
const R = observer((s = c = ((Component_1)=>{
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.init = async function e() {
            let a;
            let t0;
            if (t.branch) {
                t0 = await t.getParametersFromBranch(t.branch);
            } else {
                t0 = t.props.parameters;
            }
            a = t0;
            t.setState({
                currentBranch: t.branch,
                parameters: a
            });
        };
        t.handleOk = function() {
            const e = t.formRef.current.getData();
            const { branch, ...rest } = e;
            const t_state = t.state;
            const { parameters, currentBranch } = t_state;
            t.formRef.current.validate(function() {
                if (!module63(rest) && rest.__branch) {
                    rest.branch = rest.__branch;
                    delete rest.__branch;
                }
                const e = module63(rest) ? !module63(parameters) && Array.isArray(parameters) ? parameters.map((e)=>({
                        name: e.name,
                        value: ""
                    })) : null : Object.keys(rest).map((e)=>({
                        name: e,
                        value: rest[e]
                    }));
                t.props.onOk(e, branch || currentBranch);
            });
        };
        t.handleBranchChange = async (currentBranch)=>{
            let r;
            r = await t.getParametersFromBranch(currentBranch);
            t.setState({
                currentBranch,
                parameters: r
            });
        };
        t.getParametersFromBranch = async (branch)=>{
            let r;
            let n;
            r = t.props.params;
            n = await t.store.getBranchDetail({
                branch,
                ...r
            });
            return module26(n, "parameters", null);
        };
        t.formRef = createRef();
        t.store = new module960;
        t.state = {
            parameters: null,
            currentBranch: t.branch
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.init();
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                const visible = this.props.visible;
                if (!e.visible && visible) {
                    this.init();
                }
            }
        },
        {
            key: "renderParamsItem",
            value: function(e) {
                const a = (e?.type ?? "").toLowerCase().split("parameterdefinition")[0];
                const r = module26(e, "defaultParameterValue.value");
                switch(a){
                    case "string":
                        return <module186.Form.Item key={e.name} label={e.name} desc={e.description}><module186.Input defaultValue={r} name={e.name === "branch" ? "__branch" : e.name}/></module186.Form.Item>;
                    case "text":
                        return <module186.Form.Item key={e.name} label={e.name} desc={e.description}><module186.TextArea defaultValue={r} name={e.name}/></module186.Form.Item>;
                    case "boolean":
                        return <module186.Form.Item key={e.name} label={e.name} desc={e.description}><module186.RadioGroup name={e.name} defaultValue={String(r)}><module186.Radio name={e.name} value="true">True</module186.Radio><module186.Radio name={e.name} value="false">False</module186.Radio></module186.RadioGroup></module186.Form.Item>;
                    case "choice":
                        const n = module26(e, "choices", []);
                        const l = module26(e, "defaultParameterValue.value", "");
                        return <module186.Form.Item key={e.name} label={e.name} desc={e.description}>{module63(n) ? <module186.Input name={e.name} defaultValue={l}/> : <module186.Select name={e.name} options={n.map((e)=>({
                                label: e,
                                value: e
                            }))} defaultValue={l || n[0]}/>}</module186.Form.Item>;
                    case "password":
                        return <module186.Form.Item key={e.name} label={e.name} desc={e.description}><module186.Input defaultValue={r} type="password" name={e.name}/></module186.Form.Item>;
                    default:
                        return <module186.Form.Item key={e.name} label={e.name} desc={e.description}><module186.Input defaultValue={r} name={e.name}/></module186.Form.Item>;
                }
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { visible, onCancel, branches } = props;
                const state = this.state;
                const { parameters, currentBranch } = state;
                return <Module788 width={680} onCancel={onCancel} onOk={this.handleOk} visible={visible} closable={false} title={t("SET_PARAMETERS")}><module186.Form ref={this.formRef}>{module63(branches) ? null : <module186.Form.Item label={t("BRANCH_SI")} rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]}><module186.Select name="branch" options={this.branchOptions} defaultValue={currentBranch} onChange={this.handleBranchChange}/></module186.Form.Item>}{module63(parameters) ? null : <div className={module3212.desc}>{t("PARAMS_DESC")}</div>}{Array.isArray(parameters) && parameters.map((t)=>_this.renderParamsItem(t))}</module186.Form></Module788>;
            }
        },
        {
            key: "branch",
            get: function() {
                const props = this.props;
                const { branches, params } = props;
                let r = params ? params.branch : "";
                if (!module63(branches)) {
                    r = module26(this.branchOptions, "[0].value");
                }
                return r;
            }
        },
        {
            key: "branchOptions",
            get: function() {
                const { branches, params, disabledBrancheNames = [] } = this.props;
                let l = Array.isArray(branches) ? branches.filter((e)=>!disabledBrancheNames.includes(e)).map((e)=>({
                        label: decodeURIComponent(e),
                        value: e
                    })) : [];
                if (params && params.branch) {
                    l = [
                        {
                            label: decodeURIComponent(params.branch),
                            value: params.branch
                        }
                    ];
                }
                return l.sort((e, t)=>{
                    if (module195(e.value) && [
                        "master",
                        "main"
                    ].includes(e.value.toLowerCase())) {
                        return -1;
                    }
                    if (module195(t.value) && [
                        "master",
                        "main"
                    ].includes(t.value.toLowerCase())) {
                        return 1;
                    }
                    if (e.value < t.value) {
                        return -1;
                    }
                    if (e.value > t.value) {
                        return 1;
                    }
                    return 0;
                });
            }
        }
    ]);
    return r;
})(Component), c.propTypes = {
    name: module1.string,
    branches: module1.array
}, c.defaultProps = {
    branches: [],
    visible: false,
    name: "",
    onOk: function() {},
    onCancel: function() {}
}, i = s)) || i;
export default R;
