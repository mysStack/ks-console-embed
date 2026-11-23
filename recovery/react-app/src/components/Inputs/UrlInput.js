import "unpacked/module-15.js";
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
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import Module800 from "components/Inputs/NumberInput";
import module2876 from "unpacked/module-2876.js";
const h = ((Component_1)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, readOnly, renderHostInput, exampleValue } = props;
                return <module186.Columns className={module3(module2876.columns, className)}><module186.Column className="is-7"><module186.Form.Item rules={this.props.hostRules}>{renderHostInput || <module186.Input name={this.props.hostName} placeholder={t("EXAMPLE_VALUE", {
                    value: exampleValue || "192.168.1.10"
                })} readOnly={readOnly}/>}</module186.Form.Item></module186.Column><module186.Column><module186.Form.Item rules={this.props.portRules}><Module800 min={0} max={65535} name={this.props.portName} onChange={this.onPortChange} defaultValue={this.props.defaultPort} placeholder={t("EXAMPLE_VALUE", {
                    value: 9200
                })} readOnly={readOnly} integer/></module186.Form.Item></module186.Column></module186.Columns>;
            }
        }
    ]);
    return r;
})(Component);
export default h;
h.defaultProps = {
    hostName: "Host",
    portName: "Port",
    defaultPort: 9200,
    hostRules: [
        {
            required: true,
            message: t("ENTER_SERVICE_ADDRESS")
        }
    ],
    portRules: [
        {
            required: true,
            message: t("PORT_NUMBER_EMPTY")
        }
    ]
};
