import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-187.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-87.js";
import "./module-16.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-137.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module96 from "./module-96.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1180 from "./module-1180.js";
const E = ((e)=>{
    module55(a, e);
    var t = ((e)=>{
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
    })(a);
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        r.handleInputChange = function(e, t) {
            const onChange = r.props.onChange;
            r.setState(function({ value }) {
                value[t] = e;
                return {
                    ...value
                };
            }, function() {
                onChange(Object.entries(r.state.value).map((e)=>{
                    const t = module96(e, 2);
                    const a = t[0];
                    const r = t[1];
                    return `${a}=${r}`;
                }));
            });
        };
        const params = e.components.filter((e)=>e.parameters && e.parameters.every((e)=>e.name !== "enabled")).reduce((acc, item)=>[].concat(module61(acc), module61(item.parameters.map((e)=>({
                    ...e,
                    name: `${item.name}.${e.name}`
                })))), []);
        const value = e.value.reduce((acc, item)=>{
            const a = item.split("=");
            const r = module96(a, 2);
            const n = r[0];
            const l = r[1];
            return {
                ...acc,
                ...module31({}, n, l)
            };
        }, {});
        r.state = {
            params,
            value
        };
        return r;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const state = this.state;
                const { params, value } = state;
                return params.map((param)=>module553.default.createElement("div", {
                        key: param.name,
                        className: "form-item"
                    }, module553.default.createElement("label", {
                        className: "form-label",
                        htmlFor: name
                    }, param.title), module553.default.createElement("div", {
                        className: "form-control"
                    }, module553.default.createElement(module1180, {
                        name: param.name,
                        value: value[param.name],
                        param,
                        onChange: _this.handleInputChange
                    }), module553.default.createElement("div", {
                        className: "form-desc"
                    }, param.description))));
            }
        }
    ]);
    return a;
})(module553.Component);
export default E;
