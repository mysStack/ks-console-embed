import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module14 from "unpacked/module-14.js";
import module63 from "unpacked/module-63.js";
import Module788 from "components/Base/Modal";
import Module829 from "components/Forms/Base/Confirm";
import Module1734 from "components/Forms/Secret/SecretSettings";
import module3342 from "unpacked/module-3342.js";
const S = ((Component_1)=>{
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
        t.handleSubFormSave = function() {
            const subRoute = t.state.subRoute;
            if (subRoute && subRoute.onSave) {
                subRoute.onSave(function() {
                    t.setState({
                        subRoute: {}
                    });
                });
            }
        };
        t.handleSubFormCancel = function() {
            const subRoute = t.state.subRoute;
            if (subRoute && subRoute.onCancel) {
                subRoute.onCancel();
                t.setState({
                    subRoute: {}
                });
            }
        };
        t.handleOk = function() {
            t.props.onOk(t.state.formTemplate);
        };
        t.state = {
            formTemplate: t.getFormTemplate(e.detail),
            subRoute: {}
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
            key: "getFormTemplate",
            value: function(e = {}) {
                const t = module14.toJS(e._originData);
                return {
                    ...t
                };
            }
        },
        {
            key: "renderSaveBar",
            value: function() {
                const subRoute = this.state.subRoute;
                if (module63(subRoute)) {
                    return null;
                }
                return <Module829 className={module3342.confirm} onOk={this.handleSubFormSave} onCancel={this.handleSubFormCancel}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { subRoute, formTemplate } = state;
                const props = this.props;
                const { visible, isSubmitting, onCancel, isFederated, disableSelect, detail, isEdgeWize } = props;
                return <Module788 width={960} title={t("EDIT_SETTINGS")} icon="pen" bodyClassName={module3342.body} onOk={this.handleOk} okText={t("OK")} onCancel={onCancel} visible={visible} disableSubmit={!module63(subRoute)} isSubmitting={isSubmitting}><Module1734 formTemplate={formTemplate} isFederated={isFederated} cluster={detail.cluster} mode="edit" isEdgeWize={isEdgeWize} disableSelect={disableSelect}/>{this.renderSaveBar()}</Module788>;
            }
        }
    ]);
    return r;
})(Component);
export default S;
S.propTypes = {
    isEdgeWize: module1.bool,
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool,
    disableSelect: module1.bool
};
S.defaultProps = {
    detail: {},
    visible: false,
    onOk: function() {},
    onCancel: function() {},
    isSubmitting: false,
    disableSelect: false,
    isEdgeWize: false
};
S.childContextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
};
