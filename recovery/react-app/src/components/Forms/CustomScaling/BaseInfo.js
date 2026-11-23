import "unpacked/module-15.js";
import "unpacked/module-16.js";
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
import { PATTERN_ALIAS_NAME, PATTERN_NAME } from "utils/constants";
import Module2904 from "components/Forms/CustomScaling/BaseInfo/WorkloadAddCard";
import Module2909 from "components/Forms/CustomScaling/BaseInfo/WorkloadTableForm";
const E = ((Component_1)=>{
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
        t.onShowAdd = function() {
            t.setState({
                visible: true,
                workloadData: {}
            });
        };
        t.onShowEdit = function(workloadData) {
            t.setState({
                visible: true,
                workloadData
            });
        };
        t.resetState = function() {
            t.setState({
                visible: false,
                workloadData: {}
            });
        };
        t.onSave = function(e) {
            module74(t.props.formTemplate, "spec.scaleTargetRef.name", e.name);
            module74(t.props.formTemplate, "spec.scaleTargetRef.apiVersion", "apps/v1");
            module74(t.props.formTemplate, "metadata.name", e.name);
            t.setState({
                visible: false,
                workloadData: {}
            });
        };
        t.selectContainer = function(e) {
            module74(t.props.formTemplate, "spec.scaleTargetRef.envSourceContainerName", e);
        };
        t.state = {
            visible: false,
            workloadData: {}
        };
        return t;
    }
    module37(r, [
        {
            key: "renderWorkloadTableForm",
            value: function() {
                const props = this.props;
                const { formTemplate, cluster, namespace } = props;
                return <Module2909 formTemplate={formTemplate} cluster={cluster} namespace={namespace} onSave={this.onSave} onCancel={this.resetState}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const { formRef, formTemplate, maxNameLength = 253, cluster, namespace } = this.props;
                if (this.state.visible) {
                    return this.renderWorkloadTableForm();
                }
                const message = maxNameLength === 253 ? t("LONG_NAME_DESC") : t("NAME_DESC");
                return <module186.Form ref={formRef} data={formTemplate}><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC", {
                            message
                        })
                    }
                ]}><module186.Input name="metadata.name" maxLength={maxNameLength} disabled/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
                    {
                        pattern: PATTERN_ALIAS_NAME,
                        message: t("INVALID_ALIAS_NAME_DESC")
                    }
                ]}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item></module186.Column></module186.Columns><module186.Form.Item label={t("SCALING_OBJECT")} rules={[
                    {
                        required: true,
                        message: t("EMPTY_SCALING_OBJECT_MESSAGE")
                    }
                ]}><Module2904 name="spec.scaleTargetRef.name" scaleTargetRef={module26(this.props.formTemplate, "spec.scaleTargetRef")} onShowAdd={this.onShowAdd} onShowEdit={this.onShowEdit} onCancel={this.resetState} cluster={cluster} selectContainer={this.selectContainer} namespace={namespace}/></module186.Form.Item></module186.Form>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.cluster;
            }
        },
        {
            key: "namespace",
            get: function() {
                return module26(this.props.formTemplate, "metadata.namespace");
            }
        }
    ]);
    return r;
})(Component);
export default E;
