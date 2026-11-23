import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import { MODULE_KIND_MAP } from "./module-72.js";
import module186 from "./module-186.js";
import Module2742 from "./module-2742.js";
import Module2744 from "./module-2744.js";
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.state = {
            state: "",
            selectDataKey: ""
        };
        e.handleData = function(t) {
            const selectDataKey = e.state.selectDataKey;
            const r = module26(e.fedFormTemplate, "data", {});
            if (selectDataKey) {
                delete r[selectDataKey];
            }
            module74(e.fedFormTemplate, "data", {
                ...r,
                ...t
            });
            e.hideDataForm();
        };
        e.showDataForm = function() {
            e.setState({
                state: "data",
                selectDataKey: ""
            });
        };
        e.hideDataForm = function() {
            e.setState({
                state: "",
                selectDataKey: ""
            });
        };
        e.handleDataItemEdit = function(selectDataKey) {
            e.setState({
                state: "data",
                selectDataKey
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "renderDataForm",
            value: function() {
                const selectDataKey = this.state.selectDataKey;
                const detail = module26(this.fedFormTemplate, "data", {});
                return <Module2744 detail={detail} selectKey={selectDataKey} onOk={this.handleData} onCancel={this.hideDataForm}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const formRef = this.props.formRef;
                if (this.state.state === "data") {
                    return this.renderDataForm();
                }
                return <module186.Form data={this.fedFormTemplate} ref={formRef}><module186.Form.Item label={t("DATA")}><Module2742 name="data" onEdit={this.handleDataItemEdit} onAdd={this.showDataForm}/></module186.Form.Item></module186.Form>;
            }
        },
        {
            key: "formTemplate",
            get: function() {
                const props = this.props;
                const { formTemplate, module } = props;
                return module26(formTemplate, MODULE_KIND_MAP[module], formTemplate);
            }
        },
        {
            key: "fedFormTemplate",
            get: function() {
                if (this.props.isFederated) {
                    return module26(this.formTemplate, "spec.template");
                }
                return this.formTemplate;
            }
        }
    ]);
    return r;
})(Component);
export default b;
