import "unpacked/module-15.js";
import "unpacked/module-5.js";
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
import module26 from "unpacked/module-26.js";
import module801 from "unpacked/module-801.js";
import module63 from "unpacked/module-63.js";
import module159 from "unpacked/module-159.js";
import module74 from "unpacked/module-74.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import Module843 from "components/Inputs/PropertiesInput";
import { isValidLabel, updateLabels } from "utils/index";
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
            const { module, kind, isFederated, formTemplate, onLabelsChange } = e_props;
            const i = isFederated ? module26(formTemplate[kind], "spec.template") : formTemplate[kind];
            updateLabels(i, module, t);
            if (isFederated) {
                module74(formTemplate[kind], "metadata.labels", t);
            }
            if (onLabelsChange) {
                onLabelsChange(t);
            }
        }, 200);
        e.labelsValidator = function(a, labels, n) {
            if (module159(labels)) {
                return n();
            }
            if (module63(labels)) {
                return n({
                    message: t("EMPTY_LABEL_DESC")
                });
            }
            if (isValidLabel(labels)) {
                return void e.props.store.checkLabels({
                    labels,
                    namespace: e.props.namespace,
                    cluster: e.props.cluster
                }).then((e)=>{
                    if (e.exist) {
                        return n({
                            message: t("DUPLICATE_LABELS"),
                            field: a.field
                        });
                    }
                    n();
                });
            }
            return n({
                message: t("LABEL_FORMAT_DESC")
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { kind, noWorkload } = props;
                return <><module186.Form.Item label={t("LABEL_PL")} rules={[
                    {
                        required: true,
                        message: t("EMPTY_LABEL_DESC")
                    },
                    {
                        validator: this.labelsValidator
                    }
                ]}><Module843 name={`${kind}.${this.fedPrefix}metadata.labels`} addText={t("ADD")} onChange={this.handleLabelsChange}/></module186.Form.Item>{!noWorkload && <module186.Form.Item label={t("WORKLOAD_ANNOTATIONS")}><Module843 name={`${kind}.metadata.annotations`} addText={t("ADD")} hiddenKeys={globals.config.preservedAnnotations}/></module186.Form.Item>}</>;
            }
        },
        {
            key: "fedPrefix",
            get: function() {
                if (this.props.isFederated) {
                    return "spec.template.";
                }
                return "";
            }
        }
    ]);
    return r;
})(Component);
export default E;
