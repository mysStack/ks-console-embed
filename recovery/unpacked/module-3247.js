import "./module-15.js";
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
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module26 from "./module-26.js";
import { observer } from "./module-239.js";
import Module788 from "./module-788.js";
import Module842 from "./module-842.js";
import module855 from "./module-855.js";
let l;
let u;
let o;
const b = observer((o = u = ((Component_1)=>{
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
        t.handleChange = function(e) {
            t.isInputed = true;
            t.newValue = e;
        };
        t.handleOk = function() {
            const initValue = t.state.initValue;
            t.props.onAddStep({
                name: "script",
                arguments: [
                    {
                        key: "scriptBlock",
                        value: {
                            isLiteral: true,
                            value: t.isInputed ? t.newValue : initValue
                        }
                    }
                ]
            });
        };
        t.state = {
            value: ""
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel } = props;
                const value = this.state.value;
                return <Module788 width={680} bodyClassName={module855.body} onCancel={onCancel} onOk={this.handleOk} visible={visible} closable={false} title={t("script")}><Module842 className={module855.CodeEditor} name="script" mode="yaml" value={value} onChange={this.handleChange}/></Module788>;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e) {
                if (e.edittingData.type === "script") {
                    const t = module26(e.edittingData.data, "[0].value.value", "");
                    return {
                        value: t,
                        initValue: t
                    };
                }
                return null;
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    name: module1.string
}, u.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {}
}, l = o)) || l;
export default b;
