import "./module-15.js";
import "./module-16.js";
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
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module14 from "./module-14.js";
import module74 from "./module-74.js";
import { SERVICE_TYPES } from "./module-72.js";
import module443 from "./module-443.js";
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import Module3605 from "./module-3605.js";
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
        t.handleOk = function() {
            const onOk = t.props.onOk;
            const current = t.formRef.current;
            if (current) {
                current.validate(function() {
                    const r = current.getData();
                    module74(r, "metadata.resourceVersion", t.store.detail.resourceVersion);
                    onOk(r);
                });
            }
        };
        t.handleCancel = function() {
            t.props.onCancel();
        };
        t.formRef = createRef();
        t.state = {
            formTemplate: {}
        };
        t.store = e.store || new module443;
        t.fetchData(e.detail);
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const props = this.props;
                const { visible, detail } = props;
                if (visible && visible !== e.visible) {
                    this.fetchData(detail);
                }
            }
        },
        {
            key: "fetchData",
            value: function(t = {}) {
                const _this = this;
                if (t.name && t.namespace) {
                    this.store.fetchDetail(t).then(()=>{
                        _this.setState({
                            formTemplate: module14.toJS(_this.store.detail._originData)
                        });
                    });
                }
            }
        },
        {
            key: "renderForm",
            value: function() {
                return <Module3605 formRef={this.formRef} formTemplate={this.state.formTemplate}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, isSubmitting, detail } = props;
                return <Module788 width={1162} title={t("EDIT_SERVICE")} onOk={detail.type !== SERVICE_TYPES.Unknown ? this.handleOk : null} onCancel={this.handleCancel} okText={t("OK")} visible={visible} isSubmitting={isSubmitting}><module186.Loading spinning={this.store.isLoading}>{this.renderForm()}</module186.Loading></Module788>;
            }
        }
    ]);
    return r;
})(Component);
export default g;
g.propTypes = {
    visible: module1.bool,
    detail: module1.object,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
g.defaultProps = {
    visible: false,
    detail: {},
    onOk: function() {},
    onCancel: function() {},
    isSubmitting: false
};
