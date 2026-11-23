import "unpacked/module-15.js";
import "unpacked/module-18.js";
import "unpacked/module-10.js";
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
import "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module1329 from "components/Forms/Service/ServiceSettings";
import module186 from "unpacked/module-186.js";
import Module1044 from "components/Base/Label";
import Module818 from "components/Base/TypeSelect";
import module3606 from "unpacked/module-3606.js";
const E = ((e)=>{
    module55(r, e);
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
            key: "renderName",
            value: function() {
                return <module186.Form.Item label={t("NAME")}><module186.Input name="metadata.name" disabled/></module186.Form.Item>;
            }
        },
        {
            key: "renderSelectorLabels",
            value: function() {
                const e = module26(this.props.formTemplate, "spec.selector", {});
                return <module186.Form.Item label={t("SELECTOR")}><div className={module3606.selectors}>{Object.keys(e).map((t)=><Module1044 key={t} name={t} value={e[t]}/>)}</div></module186.Form.Item>;
            }
        },
        {
            key: "renderTypeSelect",
            value: function() {
                return <module186.Form.Item label={t("INTERNAL_ACCESS_MODE")}><Module818 className="margin-b12" value={this.state.serviceType} onChange={this.handleTypeChange} options={this.types} disabled/></module186.Form.Item>;
            }
        },
        {
            key: "render",
            value: function() {
                const formRef = this.props.formRef;
                return <div className={module3606.wrapper}><module186.Form data={this.formTemplate} ref={formRef}>{this.renderName()}{this.renderTypeSelect()}{this.renderSelectorLabels()}{this.renderPorts()}</module186.Form></div>;
            }
        }
    ]);
    return r;
})(module1329);
export default E;
