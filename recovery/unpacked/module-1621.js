import "./module-15.js";
import "./module-73.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import { PATTERN_IP, PATTERN_NAME } from "./module-72.js";
import module2699 from "./module-2699.js";
let l;
const E = observer(l = ((Component_1)=>{
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
        n.nameValidator = function(e, a, r) {
            if (!a || n.props.isEdit) {
                return r();
            }
            n.props.store.checkName({
                name: a
            }).then((a)=>{
                if (a.exist) {
                    return r({
                        message: t("NAME_EXIST_DESC"),
                        field: e.field
                    });
                }
                r();
            });
        };
        n.nodesValidator = function(e, a, r) {
            if (!a) {
                return r();
            }
            const l = module26(n.props.formTemplate, "spec.roleGroups.master.length", 0);
            const u = module26(n.props.formTemplate, "spec.roleGroups.worker.length", 0);
            const o = [];
            if (l !== 1 && l !== 3) {
                o.push(t("MASTER_NODE_COUNT_TIP"));
            }
            if (u === 0) {
                o.push(t("WORKER_NODE_COUNT_TIP"));
            }
            if (o.length > 0) {
                return r({
                    message: o.join("; "),
                    field: e.field
                });
            }
            r();
        };
        n.state = {
            formTemplate: n.props.formTemplate
        };
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { formRef, formTemplate, isEdit, className } = props;
                if (!isEdit) {
                    module74(formTemplate, "metadata.labels['infra.edgewize.io/hosted']", this.options[0]?.value ?? this.options[0]?.options[0]?.value);
                }
                return <module186.Form ref={formRef} data={formTemplate} className={module3(module2699.wrapper, className)} onChange={function(e, t) {
                    if (e === "metadata.name") {
                        _this.setState(function({ formTemplate }) {
                            formTemplate.spec.name = t;
                            formTemplate.spec.namespace = t;
                            return {
                                formTemplate
                            };
                        });
                    }
                }}><module186.Form.Item label={t("CLUSTER_NAME")} desc={t("NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("CLUSTER_NAME_EMPTY")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC")
                    },
                    {
                        validator: this.nameValidator
                    }
                ]}><module186.Input name="metadata.name" maxLength={63} disabled={isEdit}/></module186.Form.Item><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_DESC")}><module186.Input name={[
                    "metadata",
                    "annotations",
                    "kubesphere.io/alias-name"
                ]} maxLength={63}/></module186.Form.Item>{isEdit && <><module186.Form.Item label={t("HOSTED_IN")} desc={t("HOSTED_IN_DESC")} rules={[
                    {
                        required: true,
                        message: t("HOSTED_IN_EMPTY")
                    }
                ]}><module186.Select searchable placeholder=" " name={[
                    "metadata",
                    "labels",
                    "infra.edgewize.io/hosted"
                ]} options={this.options} disabled/></module186.Form.Item><module186.Form.Item label={t("ADVERTISE_ADDRESS")} desc={t("ADVERTISE_ADDRESS_DESC")} rules={[
                    {
                        required: true,
                        message: t("HOSTED_IN_EMPTY")
                    },
                    {
                        pattern: PATTERN_IP,
                        message: t("INVALID_IP_DESC")
                    }
                ]}><module186.Input name={[
                    "metadata",
                    "labels",
                    "infra.edgewize.io/advertise-address"
                ]} disabled/></module186.Form.Item></>}<module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name={[
                    "metadata",
                    "annotations",
                    "kubesphere.io/description"
                ]} maxLength={256}/></module186.Form.Item></module186.Form>;
            }
        },
        {
            key: "options",
            get: function() {
                const hostedInOptions = this.props.hostedInOptions;
                const t = hostedInOptions === undefined ? [] : hostedInOptions;
                const a = module26(this.state.formTemplate, "metadata.name");
                if (!globals.app.isMultiCluster && a) {
                    return [
                        {
                            label: a,
                            value: a
                        }
                    ];
                }
                return t;
            }
        }
    ]);
    return r;
})(Component)) || l;
export default E;
