import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
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
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import { isEdgeWizePage } from "./module-52.js";
import Module1568 from "./module-1568.js";
import { EdgeNodeTableSelector } from "./module-2450.js";
import module2456 from "./module-2456.js";
let l;
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
const O = observer(l = ((Component_1)=>{
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
        t.handleNodeSelectorsChange = function(e) {
            const formData = {
                ...t.state.formData
            };
            module74(formData, "spec.nodeSelectors", e);
            t.setState({
                formData
            });
        };
        t.state = {
            formData: e.formTemplate,
            showConfirm: false
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, cluster, namespace, isEdgeTable } = props;
                const formData = this.state.formData;
                return <><module186.Form data={formData} ref={formRef} className={module2456.wrapper}><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} desc={t("CLUSTER_NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    }
                ]}><module186.Input name="metadata.name" maxLength={32}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_DESC")}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256}/></module186.Form.Item></module186.Column></module186.Columns></module186.Form>{isEdgeTable ? <EdgeNodeTableSelector cluster={cluster} namespace={namespace} value={module26(formData, "spec.nodeSelectors", [])} onChange={this.handleNodeSelectorsChange}/> : <Module1568 cluster={cluster} namespace={namespace} isEdgeTable={isEdgeTable} isEdgeWize={isEdgeWizePage()} value={module26(formData, "spec.nodeSelectors", [])} onChange={this.handleNodeSelectorsChange}/>}</>;
            }
        }
    ]);
    return r;
})(Component)) || l;
export default O;
