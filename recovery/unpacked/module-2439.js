import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module801 from "./module-801.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module159 from "./module-159.js";
import module74 from "./module-74.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import Module843 from "./module-843.js";
import { isValidLabel, updateFederatedAnnotations, updateLabels } from "./module-52.js";
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.handleLabelsChange = module801(function(t) {
            const e_props = e.props;
            const { module, isFederated } = e_props;
            updateLabels(e.fedFormTemplate, module, t);
            if (isFederated) {
                module74(e.formTemplate, "metadata.labels", t);
            }
        }, 200);
        e.handleAnnotationsChange = module801(function(t) {
            if (e.props.isFederated) {
                module74(e.formTemplate, "metadata.annotations", t);
                updateFederatedAnnotations(e.formTemplate);
            }
        }, 200);
        e.labelsValidator = function(a, labels, n) {
            if (module159(labels) || module63(labels)) {
                return n();
            }
            if (!isValidLabel(labels)) {
                return n({
                    message: t("LABEL_FORMAT_DESC")
                });
            }
            const e_props = e.props;
            const { namespace, cluster } = e_props;
            e.props.store.checkLabels({
                labels,
                namespace,
                cluster
            }, e.k8sVersion).then((r)=>{
                if (r.exist) {
                    e.props.formGroupRef.current.state.isCheck = true;
                    return n({
                        message: t("DUPLICATE_LABELS"),
                        field: a.field
                    });
                }
                n();
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                return <><module186.Form.Item label={t("LABEL_PL")} rules={[
                    {
                        validator: this.labelsValidator
                    }
                ]}><Module843 name="metadata.labels" addText={t("ADD")} onChange={this.handleLabelsChange}/></module186.Form.Item><module186.Form.Item label={t("ANNOTATION_PL")}><Module843 name="metadata.annotations" addText={t("ADD")} hiddenKeys={globals.config.preservedAnnotations} onChange={this.handleAnnotationsChange}/></module186.Form.Item></>;
            }
        },
        {
            key: "formTemplate",
            get: function() {
                return this.props.formTemplate;
            }
        },
        {
            key: "k8sVersion",
            get: function() {
                return globals.clusterConfig?.[this.props.cluster]?.k8sVersion;
            }
        },
        {
            key: "fedFormTemplate",
            get: function() {
                if (this.props.isFederated) {
                    return module26(this.formTemplate, "spec.template");
                }
                return this.formTemplate;
            }
        }
    ]);
    return r;
})(Component);
export default E;
