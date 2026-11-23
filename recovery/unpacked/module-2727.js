import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import Module829 from "./module-829.js";
import Module2728 from "./module-2728.js";
import Module1627 from "./module-1627.js";
import module1 from "./module-1.js";
import { Component, createRef } from "./module-553.js";
import { PATTERN_ALIAS_NAME, PATTERN_NAME } from "./module-72.js";
import module2739 from "./module-2739.js";
function _(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const O = ((Component_1)=>{
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
        t.resetSubRoute = function() {
            t.setState({
                subRoute: {}
            });
        };
        t.registerSubRoute = function(onSave, onCancel) {
            t.setState({
                subRoute: {
                    onSave,
                    onCancel
                }
            });
        };
        t.showSelectRepo = function() {
            t.setState({
                showSelectRepo: true
            });
        };
        t.hideSelectRepo = function() {
            t.setState({
                showSelectRepo: false
            });
        };
        t.handleSubFormSave = function() {
            const subRoute = t.state.subRoute;
            if (subRoute && subRoute.onSave) {
                subRoute.onSave(function() {
                    t.setState({
                        subRoute: {}
                    });
                });
            }
        };
        t.handleSubFormCancel = function() {
            const subRoute = t.state.subRoute;
            if (subRoute && subRoute.onCancel) {
                subRoute.onCancel();
                t.setState({
                    subRoute: {}
                });
            }
        };
        t.handleRepoChange = function(source_type, a) {
            t.setState({
                showSelectRepo: false
            }, function() {
                t.scmRef.current.onChange({
                    source_type,
                    ...a
                });
            });
        };
        t.handleDeleteSource = function() {
            t.scmRef.current.onChange();
        };
        t.submit = function() {
            const t_props = t.props;
            const { formTemplate, onOk } = t_props;
            t.formRef.current.validate(function() {
                onOk(formTemplate);
            });
        };
        t.state = {
            showSelectRepo: false
        };
        t.scmRef = createRef();
        t.formRef = createRef();
        return t;
    }
    module37(r, [
        {
            key: "getChildContext",
            value: function() {
                return {
                    registerSubRoute: this.registerSubRoute,
                    resetSubRoute: this.resetSubRoute
                };
            }
        },
        {
            key: "renderRepoSelectForm",
            value: function() {
                const props = this.props;
                const { formTemplate, devops, cluster, ...rest } = props;
                const showSelectRepo = this.state.showSelectRepo;
                return <Module788 width={970} {...rest} disableSubmit={showSelectRepo}><div className={module2739.wrapper}><Module1627 sourceData={formTemplate.sources} devops={devops} name={formTemplate.name} cluster={cluster} onSave={this.handleRepoChange} onCancel={this.hideSelectRepo} noSVN noJenkins/><Module829 className={module2739.confirm} onOk={this.handleSubFormSave} onCancel={this.handleSubFormCancel}/></div></Module788>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formTemplate, isEdit, ...rest } = props;
                if (this.state.showSelectRepo) {
                    return this.renderRepoSelectForm();
                }
                return <Module788 width={970} {...rest} onOk={this.submit}><module186.Form ref={this.formRef} data={formTemplate}><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} desc={t("NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC")
                    }
                ]}><module186.Input name="metadata.name" maxLength={63} disabled={isEdit}/></module186.Form.Item><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
                    {
                        pattern: PATTERN_ALIAS_NAME,
                        message: t("INVALID_ALIAS_NAME_DESC")
                    }
                ]}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63}/></module186.Form.Item></module186.Column></module186.Columns><module186.Form.Item label={t("CODE_REPOSITORY")} rules={[
                    {
                        required: true,
                        message: t("REPO_EMPTY_DESC")
                    }
                ]}><Module2728 name="sources" ref={this.scmRef} onClick={this.showSelectRepo} handleDeleteSource={this.handleDeleteSource} devops={this.props.devops} type="cd"/></module186.Form.Item></module186.Form></Module788>;
            }
        }
    ]);
    return r;
})(Component);
export default O;
O.childContextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
};
