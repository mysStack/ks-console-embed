import "unpacked/module-15.js";
import "unpacked/module-11.js";
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
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module14 from "unpacked/module-14.js";
import module63 from "unpacked/module-63.js";
import Module788 from "components/Base/Modal";
import Module829 from "components/Forms/Base/Confirm";
import Module1630 from "components/Forms/ConfigMap/ConfigMapSettings";
import module2746 from "unpacked/module-2746.js";
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
            const t_props = t.props;
            const { onOk, store, detail } = t_props;
            const store_list = store.list;
            const o = module14.toJS(store_list.selectedRowKeys).filter((e)=>e !== detail.uid);
            onOk(t.state.formTemplate);
            store_list.setSelectRowKeys(o);
        };
        t.state = {
            formTemplate: module14.toJS(e.detail._originData),
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
            key: "componentDidUpdate",
            value: function(e) {
                const props = this.props;
                const { detail, visible } = props;
                if (detail._originData !== e.detail._originData) {
                    this.setState({
                        formTemplate: module14.toJS(detail._originData)
                    });
                }
                if (visible && visible !== e.visible) {
                    this.setState({
                        subRoute: {}
                    });
                }
            }
        },
        {
            key: "renderSaveBar",
            value: function() {
                const subRoute = this.state.subRoute;
                if (module63(subRoute)) {
                    return null;
                }
                return <Module829 className={module2746.confirm} onOk={this.handleSubFormSave} onCancel={this.handleSubFormCancel}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { subRoute, formTemplate } = state;
                const props = this.props;
                const { visible, isSubmitting, onCancel, isFederated } = props;
                return <Module788 width={960} title={t("EDIT_SETTINGS")} icon="pen" bodyClassName={module2746.body} onOk={this.handleOk} okText={t("OK")} onCancel={onCancel} visible={visible} disableSubmit={!module63(subRoute)} isSubmitting={isSubmitting}><Module1630 formTemplate={formTemplate} isFederated={isFederated}/>{this.renderSaveBar()}</Module788>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
y.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
y.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {},
    isSubmitting: false
};
y.childContextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
};
