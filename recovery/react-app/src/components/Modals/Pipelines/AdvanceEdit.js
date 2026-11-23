import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-6.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import Module788 from "components/Base/Modal";
import module26 from "unpacked/module-26.js";
import Module1717 from "components/Forms/Pipelines/AdvanceSettings";
const v = [
    "discarder",
    "timer_trigger",
    "remote_trigger",
    "regex_filter",
    "multibranch_job_trigger"
];
const h = ((Component_1)=>{
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
        t.setEnableFlag = function(formTemplate) {
            const a = formTemplate || {};
            const { pipeline, multi_branch_pipeline } = a;
            const l = pipeline || multi_branch_pipeline;
            if (l) {
                v.forEach((t)=>{
                    const a = l[t] || module26(l, `svn_source.${t}`) || module26(l, `git_source.${t}`) || module26(l, `github_source.${t}`) || module26(l, `gitlab_source.${t}`) || module26(l, `bitbucket_server_source.${t}`) || module26(l, "multibranch_job_trigger");
                    if (l[t] || a) {
                        formTemplate[`enable_${t}`] = true;
                    }
                });
                formTemplate.description = l.description;
                t.setState({
                    formTemplate
                });
            }
        };
        t.handleOk = function() {
            const e = t.formRef && t.formRef.current;
            if (e) {
                e.validate(function() {
                    t.props.onOk(t.formRef.current.getData());
                });
            }
        };
        t.formRef = createRef();
        t.state = {
            formTemplate: {}
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.setEnableFlag(this.props.formTemplate);
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel } = props;
                return <Module788 width={1162} onCancel={onCancel} onOk={this.handleOk} visible={visible} closable={false} title={t("EDIT_PIPELINE")}><Module1717 type="edit" formRef={this.formRef} formTemplate={this.state.formTemplate} devops={this.props.devops} cluster={this.props.cluster}/></Module788>;
            }
        }
    ]);
    return r;
})(Component);
export default h;
h.propTypes = {
    name: module1.string,
    branches: module1.array
};
h.defaultProps = {
    branches: [],
    visible: false,
    onOk: function() {},
    onCancel: function() {}
};
