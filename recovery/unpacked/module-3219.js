import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
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
import Module788 from "./module-788.js";
import module26 from "./module-26.js";
import Module1627 from "./module-1627.js";
import Module1199 from "./module-1199.js";
const g = ((Component_1)=>{
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
        t.registerSubRoute = function(onSave, onCancel) {
            t.setState({
                subRoute: {
                    onSave,
                    onCancel
                }
            });
        };
        t.resetSubRoute = function() {
            t.setState({
                subRoute: {}
            });
        };
        t.hideSelectRepo = function() {
            t.setState({
                showSelectRepo: false
            });
        };
        t.showSelectRepo = function() {
            t.setState({
                showSelectRepo: true
            });
        };
        t.handleOk = async function e() {
            let a;
            let r;
            a = t.props.onOk;
            r = t.form.current.getData();
            await a(r);
            if (t.state.subRoute) {
                t.props.handleScanRepository();
            }
        };
        t.form = createRef();
        t.scmRef = createRef();
        t.state = {
            showSelectRepo: false,
            repo: {}
        };
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
            key: "render",
            value: function() {
                const { visible, onCancel, formTemplate = {} } = this.props;
                const o = module26(formTemplate, "pipeline.name", "") || module26(formTemplate, "multi_branch_pipeline.name", "");
                const defaultValue = module26(formTemplate, "pipeline.description", "") || module26(formTemplate, "multi_branch_pipeline.description", "");
                if (this.state.showSelectRepo) {
                    return <Module788 width={1000} hideHeader onOk={this.handleSaveRepo} visible={visible}><Module1627 sourceData={formTemplate.multi_branch_pipeline} devops={formTemplate.devops} cluster={formTemplate.cluster} name={o} onSave={this.handleRepoChange} onCancel={this.hideSelectRepo} enableTypeChange={false}/></Module788>;
                }
                return <Module788 width={691} title={t("EDIT_INFORMATION")} icon="pen" onOk={this.handleOk} onCancel={onCancel} visible={visible}><module186.Form ref={this.form} data={formTemplate}><module186.Form.Item label={t("NAME")} desc={t("")}><module186.Input name="name" defaultValue={o} disabled/></module186.Form.Item><module186.Form.Item label={t("DESCRIPTION")} desc={t("")}><module186.TextArea name="description" defaultValue={defaultValue}/></module186.Form.Item>{formTemplate.multi_branch_pipeline ? <module186.Form.Item label={t("CODE_REPOSITORY")}><Module1199 name="multi_branch_pipeline" cluster={formTemplate.cluster} devops={formTemplate.devops} isCreatePipeline trigger={this.props.trigger}/></module186.Form.Item> : null}</module186.Form></Module788>;
            }
        }
    ]);
    return r;
})(Component);
export default g;
g.propTypes = {
    formTemplate: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
};
g.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {}
};
g.childContextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
};
