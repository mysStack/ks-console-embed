import "./module-15.js";
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
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import module321 from "./module-321.js";
import { MODULE_KIND_MAP } from "./module-72.js";
import module186 from "./module-186.js";
import Module1324 from "./module-1324.js";
import Module3559 from "./module-3559.js";
const y = ((Component_1)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { formRef, projectDetail, editModalTitle, title, formProps } = props;
                const clustersDetail = module321(projectDetail.clusters, "name");
                return <module186.Form data={this.formTemplate.spec} ref={formRef} {...formProps}><module186.Form.Group label={t("STORAGE_SETTINGS")} desc={t("CLUSTER_VOLUME_DIFF_DESC")} checkable><Module1324 clusters={this.clusters} clustersDetail={clustersDetail} namespace={this.namespace}>{function(t) {
                    return <Module3559 {...t} formTemplate={_this.formTemplate} editModalTitle={editModalTitle} title={title} {...formProps}/>;
                }}</Module1324></module186.Form.Group></module186.Form>;
            }
        },
        {
            key: "namespace",
            get: function() {
                return module26(this.formTemplate, "metadata.namespace");
            }
        },
        {
            key: "formTemplate",
            get: function() {
                const props = this.props;
                const { formTemplate, module } = props;
                return module26(formTemplate, MODULE_KIND_MAP[module], formTemplate);
            }
        },
        {
            key: "clusters",
            get: function() {
                return module26(this.formTemplate, "spec.placement.clusters", []);
            }
        }
    ]);
    return r;
})(Component);
export default y;
