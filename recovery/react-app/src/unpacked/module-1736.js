import "./module-15.js";
import "./module-5.js";
import "./module-97.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module186 from "./module-186.js";
import Module800 from "components/Inputs/NumberInput";
import Module830 from "components/Inputs/ArrayInput";
import { PATTERN_NAME, SERVICE_ROUTING_FILTERS, SERVICE_ROUTING_PREDICATES } from "utils/constants";
import Module3366 from "./module-3366.js";
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
    function r(...o) {
        let e;
        module36(this, r);
        e = a.call(this, ...o);
        e.itemValidator = function(e, a, r) {
            if (a) {
                if (a.some((e)=>!e)) {
                    return r({
                        message: t("EMPTY_KEY")
                    });
                }
                return void r();
            }
            return r();
        };
        e.handleOk = function() {
            const e_props = e.props;
            const { onOk, formTemplate } = e_props;
            e.form.current.validator(function() {
                const e = module26(formTemplate, "metadata.name");
                module74(formTemplate, "spec.routes[0].id", e);
                onOk(formTemplate);
            });
        };
        e.nameValidator = function(a, r, n) {
            if (!r || e.props.isEditMode) {
                return n();
            }
            e.props.store.checkName({
                name: r,
                namespace: e.props.namespace,
                cluster: e.props.cluster
            }).then((e)=>{
                if (e.exist) {
                    return n({
                        message: t("NAME_EXIST_DESC"),
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
                const props = this.props;
                const { formRef, formTemplate, detail } = props;
                return <module186.Form ref={formRef} data={formTemplate}><module186.Columns><module186.Column><module186.Form.Item label={t("NAME")} desc={t("NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("PATTERN_NAME_INVALID_TIP")
                    },
                    {
                        validator: this.nameValidator
                    }
                ]}><module186.Input name="metadata.name" autoFocus maxLength={63} disabled={!!detail}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("GATEWAY")}><module186.Input disabled name="spec.gateway"/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("MICROSERVICE_ORDER")} desc={t("MICROSERVICE_ORDER_DESC")}><Module800 name="spec.routes[0].order" integer min={0}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("URL")} desc={t("MICROSERVICE_ROUTE_URL_DESC")}><module186.Input name="spec.routes[0].uri"/></module186.Form.Item></module186.Column></module186.Columns><module186.Form.Item label={t("PREDICATE")} rules={[
                    {
                        validator: this.itemValidator,
                        checkOnSubmit: true
                    }
                ]}><Module830 name="spec.routes[0].predicates" addText={t("ADD")}><Module3366 options={SERVICE_ROUTING_PREDICATES}/></Module830></module186.Form.Item><module186.Form.Item label={t("MICROSERVICE_ROUTE_FILTER")} rules={[
                    {
                        validator: this.itemValidator,
                        checkOnSubmit: true
                    }
                ]}><Module830 name="spec.routes[0].filters" addText={t("ADD")}><Module3366 options={SERVICE_ROUTING_FILTERS}/></Module830></module186.Form.Item></module186.Form>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
