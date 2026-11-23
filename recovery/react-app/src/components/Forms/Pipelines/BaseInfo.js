import "unpacked/module-15.js";
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
import module186 from "unpacked/module-186.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import { Component } from "unpacked/module-553.js";
import { showNameAndAlias } from "utils/index";
import { PATTERN_NAME } from "utils/constants";
import { compareVersion } from "utils/app";
import { TypeSelect } from "components/Base/index";
import Module1199 from "components/CodeRepoSelector";
import module3280 from "unpacked/module-3280.js";
const b = ((Component_1)=>{
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
        n.validator = function(e, a, r) {
            if (!a) {
                return r();
            }
            n.props.store.checkPipelineName({
                name: a,
                cluster: n.props.cluster,
                devops: n.props.devops
            }, compareVersion(n.ksVersion, "3.4.0") < 0).then((a)=>{
                if (a.exist) {
                    return r({
                        field: e.field,
                        message: t("NAME_EXIST_DESC")
                    });
                }
                r();
            });
        };
        const e_formTemplate = e.formTemplate;
        n.state = {
            type: module26(e_formTemplate, "multi_branch_pipeline", null) ? 1 : 0
        };
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { formRef, formTemplate, devops, cluster } = props;
                return <module186.Form ref={formRef} data={formTemplate} className={module3280.from}><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} desc={t("NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC")
                    },
                    {
                        validator: this.validator
                    }
                ]}><module186.Input name="name" maxLength={63}/></module186.Form.Item><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="description" maxLength={256}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("DEVOPS_PROJECT")} desc={t("PIPELINE_CREATE_DEVOPS_PROJECT_DESC")}><div name="devopsName" className="disabled-input">{showNameAndAlias(formTemplate?.devopsName, "devops")}</div></module186.Form.Item></module186.Column></module186.Columns><div className="form-item"><label className="form-item-label">{t("PIPELINE_TYPE")}</label><TypeSelect value={this.state.type} onChange={function(type) {
                    _this.setState({
                        type
                    });
                    module74(formTemplate, "multi_branch_pipeline", undefined);
                }} name="pipeline-type" options={[
                    {
                        label: t("PIPELINE_PL"),
                        value: 0,
                        icon: "branch",
                        description: t("BRANCH_PIPELINE_DESC")
                    },
                    {
                        label: t("MULTI_BRANCH_PIPELINE"),
                        value: 1,
                        icon: "branch",
                        description: t("MULTI_BRANCH_PIPELINE_DESC")
                    }
                ]}/></div>{this.state.type === 1 && <module186.Form.Item label={t("CODE_REPOSITORY_OPTIONAL")} rules={[
                    {
                        required: true,
                        message: t("CODE_REPOSITORY_REQUIRED_DESC")
                    }
                ]}><Module1199 name="multi_branch_pipeline" devops={devops} cluster={cluster} isCreatePipeline trigger={this.props.trigger}/></module186.Form.Item>}</module186.Form>;
            }
        },
        {
            key: "ksVersion",
            get: function() {
                const cluster = this.props.cluster;
                if (globals.app.isMultiCluster) {
                    return module26(globals, `clusterConfig.${cluster}.ksVersion`);
                }
                return module26(globals, "ksConfig.ksVersion");
            }
        }
    ]);
    return r;
})(Component);
export default b;
