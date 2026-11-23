import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module801 from "./module-801.js";
import "./module-553.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module1672 from "./module-1672.js";
import module933 from "./module-933.js";
import module318 from "./module-318.js";
import { mergeLabels } from "./module-52.js";
import { PATTERN_COMPONENT_VERSION } from "./module-72.js";
import Module4678 from "./module-4678.js";
import module4680 from "./module-4680.js";
let o;
const A = observer(o = ((e)=>{
    module55(r, e);
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
        n.versionValidator = function(e, a, r) {
            if (!a) {
                return r();
            }
            const o = module26(n.formTemplate, "metadata.labels.app", "");
            const name = `${o}-${a}`;
            n.workloadStore.checkName({
                name,
                namespace: n.namespace,
                cluster: n.props.cluster
            }).then((a)=>{
                if (a.exist) {
                    return r({
                        message: t("NEW_VERSION_NUMBER_EXIST_DESC", {
                            name
                        }),
                        field: e.field
                    });
                }
                r();
            });
        };
        n.handleVersionChange = module801(function(version) {
            const t = module26(n.formTemplate, "metadata.labels.app", "");
            const a = `${t}-${version}`;
            module74(n.formTemplate, "metadata.name", a);
            mergeLabels(n.formTemplate, {
                version
            });
            module74(n.props.formTemplate, 'strategy.metadata.annotations["servicemesh.kubesphere.io/newWorkloadName"]', a);
        }, 200);
        n.module = module26(e.formTemplate, 'strategy.metadata.annotations["servicemesh.kubesphere.io/workloadType"]', "deployments");
        n.workloadStore = new module318(n.module);
        return n;
    }
    module37(r, [
        {
            key: "renderReplicasControl",
            value: function() {
                return <module186.Column className="is-narrow"><module186.Form.Item className={module4680.narrow} label={t("NEW_VERSION_NUMBER")} desc={t("NEW_VERSION_NUMBER_DESC")} rules={[
                    {
                        required: true,
                        message: t("NEW_VERSION_NUMBER_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_COMPONENT_VERSION,
                        message: t("NEW_VERSION_NUMBER_INVALID_DESC")
                    },
                    {
                        validator: this.versionValidator
                    }
                ]}><module186.Input name="metadata.labels.version" onChange={this.handleVersionChange} disabled={this.isEdit} maxLength={16}/></module186.Form.Item><div className={module4680.specify}><module186.Form.Item><Module1672 name="spec.replicas"/></module186.Form.Item></div></module186.Column>;
            }
        },
        {
            key: "renderContainerList",
            value: function() {
                const specTemplate = module26(this.formTemplate, `${this.prefix}spec`);
                return <module186.Column><module186.Form.Item rules={[
                    {
                        validator: this.containersValidator
                    }
                ]}><Module4678 className={module4680.containers} name={`${this.prefix}spec.containers`} onShow={this.showContainer} onDelete={this.handleDelete} specTemplate={specTemplate} disabled={this.isEdit}/></module186.Form.Item></module186.Column>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, formProps } = props;
                const state = this.state;
                const { showContainer, selectContainer } = state;
                if (showContainer) {
                    return this.renderContainerForm(selectContainer);
                }
                return <module186.Form data={this.formTemplate} ref={formRef} {...formProps}><module186.Columns>{this.renderReplicasControl()}{this.renderContainerList()}</module186.Columns></module186.Form>;
            }
        },
        {
            key: "formTemplate",
            get: function() {
                return this.props.formTemplate.workload || {};
            }
        },
        {
            key: "namespace",
            get: function() {
                return module26(this.formTemplate, "metadata.namespace");
            }
        }
    ]);
    return r;
})(module933)) || o;
export default A;
