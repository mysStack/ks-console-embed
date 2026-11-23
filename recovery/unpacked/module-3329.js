import "./module-15.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-84.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-7.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module14 from "./module-14.js";
import module26 from "./module-26.js";
import module136 from "./module-136.js";
import module63 from "./module-63.js";
import Module788 from "./module-788.js";
import Module1320 from "./module-1320.js";
import module3330 from "./module-3330.js";
const g = ((Component_1)=>{
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
        t.registerSubRoute = function(onSave, onCancel) {
            t.setState({
                subRoute: {
                    onSave,
                    onCancel
                }
            });
        };
        t.resetSubRoute = function() {
            t.setState({
                subRoute: {}
            });
        };
        t.handleOk = function() {
            const subRoute = t.state.subRoute;
            if (subRoute.onSave) {
                return subRoute.onSave(function() {
                    t.setState({
                        subRoute: {}
                    });
                });
            }
            const t_props = t.props;
            const { onOk, store, detail } = t_props;
            const Ingress = t.state.formTemplate.Ingress;
            const store_list = store.list;
            const c = module14.toJS(store_list.selectedRowKeys).filter((e)=>e !== detail.uid);
            onOk(Ingress);
            store_list.setSelectRowKeys(c);
        };
        t.handleCancel = function() {
            const subRoute = t.state.subRoute;
            if (subRoute.onCancel) {
                subRoute.onCancel();
                return void t.setState({
                    subRoute: {}
                });
            }
            t.props.onCancel();
        };
        t.form = createRef();
        t.state = {
            subRoute: {},
            formTemplate: t.getFormTemplate(module14.toJS(e.detail._originData))
        };
        return t;
    }
    module37(r, [
        {
            key: "getChildContext",
            value: function() {
                return {
                    registerSubRoute: this.registerSubRoute,
                    resetSubRoute: this.resetSubRoute
                };
            }
        }
    ]);
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (module14.toJS(this.props.detail._originData) !== e.detail._originData) {
                    this.setState({
                        formTemplate: this.getFormTemplate(module14.toJS(this.props.detail._originData))
                    });
                }
            }
        },
        {
            key: "getFormTemplate",
            value: function(e) {
                const Ingress = module136(e);
                const a = module26(Ingress, "spec.tls", []);
                const r = module26(Ingress, "spec.rules", []);
                if (a.length > 0 && r.length > 0) {
                    r.forEach((e)=>{
                        const t = a.find((t)=>t.hosts && t.hosts.includes(e.host));
                        if (t) {
                            e.protocol = "https";
                            e.secretName = t.secretName;
                        } else {
                            e.protocol = "http";
                        }
                    });
                }
                return {
                    Ingress
                };
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, cluster, isSubmitting, namespace } = props;
                const state = this.state;
                const { subRoute, formTemplate } = state;
                return <Module788 width={960} title={t("EDIT_ROUTING_RULES")} icon="firewall" onOk={this.handleOk} okText={t("OK")} cancelText={module63(subRoute) ? null : t("PREVIOUS")} onCancel={this.handleCancel} visible={visible} isSubmitting={isSubmitting}><div className={module3330.wrapper}><Module1320 module="ingresses" formRef={this.form} formTemplate={formTemplate} cluster={cluster} namespace={namespace}/></div></Module788>;
            }
        }
    ]);
    return r;
})(Component);
g.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
g.defaultProps = {
    detail: {},
    visible: false,
    onOk: function() {},
    onCancel: function() {},
    isSubmitting: false
};
g.childContextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
};
export default g;
