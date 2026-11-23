import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
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
import "./module-448.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module61 from "./module-61.js";
import "./module-31.js";
import module58 from "./module-58.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import Module2315 from "./module-2315.js";
const g = ((Component_1)=>{
    module55(a, Component_1);
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
    function a(...l_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...l_1);
        e.getReadOny = function(e) {
            if (e === "true" || e === "null") {
                return e;
            }
            return "false";
        };
        e.getFormatValue = function() {
            const e_props = e.props;
            const t_value = e_props.value;
            return e_props.containers.map((t)=>{
                const r = t_value.find((e)=>e.containerName === t.name);
                if (!r) {
                    return {
                        readOnly: "null",
                        mountPath: ""
                    };
                }
                r.containerName;
                const r_readOnly = r.readOnly;
                return {
                    ...module58(r, [
                        "containerName",
                        "readOnly"
                    ]),
                    readOnly: e.getReadOny(String(r_readOnly))
                };
            });
        };
        e.handleItemChange = function(t, a) {
            const e_props = e.props;
            const { value, onChange } = e_props;
            const o = value.find((e)=>e.containerName === t);
            onChange(o ? value.map((e)=>{
                if (e.containerName === t) {
                    return {
                        ...o,
                        ...a
                    };
                }
                return e;
            }) : [].concat(module61(value), [
                a
            ]));
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { containers, collectSavedLog, supportedAccessModes } = props;
                const l = this.getFormatValue();
                return <div>{containers.map((t, a)=><Module2315 key={t.name} value={l[a]} container={t.name} onChange={_this.handleItemChange.bind(_this, t.name)} supportedAccessModes={supportedAccessModes} collectSavedLog={collectSavedLog}/>)}</div>;
            }
        }
    ]);
    return a;
})(Component);
export default g;
g.propTypes = {
    name: module1.string,
    containers: module1.array,
    value: module1.array,
    onChange: module1.func
};
g.defaultProps = {
    name: "",
    value: [],
    containers: [],
    onChange: function() {}
};
