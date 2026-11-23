import "./module-15.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import module788 from "./module-788.js";
import Module843 from "./module-843.js";
import module3035 from "./module-3035.js";
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
        t.handleOk = function() {
            t.props.onOk(t.state.value);
        };
        t.handleChange = function(value) {
            t.setState({
                value
            });
        };
        t.handleError = function(e) {
            t.setState({
                enableSave: module63(e)
            });
        };
        t.state = {
            value: e.value,
            enableSave: true
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const props = this.props;
                const { visible, value } = props;
                if (visible && visible !== e.visible && value !== e.value) {
                    this.setState({
                        value
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { title, onOk: _onOk, ...rest } = props;
                const state = this.state;
                const { value, enableSave } = state;
                return <module788.Form width={1162} bodyClassName={module3035.body} title={t("EDIT_TITLE", {
                    title
                })} icon="pen" okText={t("OK")} onOk={this.handleOk} disableOk={!enableSave} {...rest}><div className={module3035.wrapper}><div className={module3(module3035.title, "h5")}>{t(title)}</div><div className={module3035.content}><module186.Form.Item><Module843 className={module3035.inputs} addText={t("ADD")} value={value} onChange={this.handleChange} onError={this.handleError}/></module186.Form.Item></div></div></module788.Form>;
            }
        }
    ]);
    return r;
})(Component);
export default b;
b.propTypes = {
    value: module1.object,
    title: module1.string,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
};
b.defaultProps = {
    visible: false,
    title: "",
    onOk: function() {},
    onCancel: function() {}
};
