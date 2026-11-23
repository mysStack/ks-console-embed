import "unpacked/module-15.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module14 from "unpacked/module-14.js";
import module26 from "unpacked/module-26.js";
import module136 from "unpacked/module-136.js";
import module63 from "unpacked/module-63.js";
import module807 from "unpacked/module-807.js";
import Module788 from "components/Base/Modal";
import Module1320 from "components/Forms/Route/RouteRules";
import module3332 from "unpacked/module-3332.js";
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
            t.props.onOk(t.state.formTemplate.Ingress);
        };
        t.handleCancel = function() {
            const subRoute = t.state.subRoute;
            if (subRoute.onCancel) {
                const a = subRoute.onCancel();
                if (!a) {
                    return;
                }
                a();
                return void t.setState({
                    subRoute: {}
                });
            }
            t.props.onCancel();
        };
        t.formRef = createRef();
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
                if (!module807(module14.toJS(this.props.detail._originData), module14.toJS(e.detail._originData))) {
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
                const { visible, cluster, isSubmitting, isFederated, projectDetail, detail } = props;
                const state = this.state;
                const { subRoute, formTemplate } = state;
                return <Module788 width={960} title={t("EDIT_ROUTING_RULES")} icon="firewall" onOk={this.handleOk} okText={t("OK")} cancelText={module63(subRoute) ? null : t("PREVIOUS")} onCancel={this.handleCancel} visible={visible} isSubmitting={isSubmitting}><div className={module3332.wrapper}><Module1320 module="ingresses" formRef={this.formRef} formTemplate={formTemplate} cluster={cluster} detail={detail} isFederated={isFederated} projectDetail={projectDetail}/></div></Module788>;
            }
        }
    ]);
    return r;
})(Component);
b.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
b.defaultProps = {
    detail: {},
    visible: false,
    onOk: function() {},
    onCancel: function() {},
    isSubmitting: false
};
b.childContextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
};
export default b;
