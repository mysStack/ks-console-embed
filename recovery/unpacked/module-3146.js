import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-187.js";
import "./module-27.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-319.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module246 from "./module-246.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module896 from "./module-896.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module1159 from "./module-1159.js";
import module198 from "./module-198.js";
import module801 from "./module-801.js";
import module63 from "./module-63.js";
import module926 from "./module-926.js";
import module186 from "./module-186.js";
import Module791 from "./module-791.js";
import Module800 from "./module-800.js";
import module3147 from "./module-3147.js";
const R = ((Component_1)=>{
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
    function a(...c_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...c_1);
        e.state = {
            value: e.props.value
        };
        e.triggerChange = module801(function(t) {
            e.props.onChange(t);
        }, 300);
        e.generateMarks = function(e, t) {
            const a = parseInt((t - e) / 5, 10);
            const r = {};
            for(let n = 0; n < 5; n++){
                const l = e + n * a;
                r[l] = l;
            }
            r[t] = t;
            return r;
        };
        e.renderFormItem = function(t, key, r) {
            let n;
            const value = e.state.value;
            const u = {
                defaultValue: module26(value, r, ""),
                onChange: function(t) {
                    return e.handleFormChange(module74(value, r, t));
                }
            };
            switch(t.type){
                case "string":
                    if (t.render === "slider") {
                        const min = t.sliderMin ?? 0;
                        const i = Number(t.sliderMax);
                        const max = module926(i) ? 100 : i < min ? min + 100 : i;
                        n = <module186.Slider max={max} min={min} unit={t.sliderUnit} marks={e.generateMarks(min, max)} {...u} withInput/>;
                    } else {
                        n = t.render === "textArea" ? <module186.TextArea {...u}/> : <module186.Input {...u}/>;
                    }
                    break;
                case "integer":
                    n = <Module800 {...u} min={0} integer/>;
                    break;
                case "boolean":
                    n = <div className={module3147.boolean}><module186.Toggle {...u} defaultChecked={module26(value, r, false)}/><Module791 title={t.title} description={t.description}/></div>;
                    break;
                case "array":
                    n = <>todo</>;
                    break;
                default:
                    n = <></>;
            }
            return <module186.Form.Item key={key} label={t.type === "boolean" ? "" : t.title} desc={t.type === "boolean" ? "" : t.description}>{n}</module186.Form.Item>;
        };
        e.renderSchemaForm = function(t, a = "", r = []) {
            const { type, form } = t;
            const value = e.state.value;
            const s = module246(t.hidden) === "object" ? module26(value, t.hidden.value, null) === t.hidden.condition : module26(value, t.hidden, false);
            if (s) {
                return null;
            }
            if (type === "object") {
                const i = module896(t.properties, function(t, a) {
                    return e.renderSchemaForm(t, a, [].concat(module61(r), [
                        a
                    ]));
                });
                if (module63(i) || i.every((e)=>!e)) {
                    return null;
                }
                const f = t.properties && module1159(t.properties, function(e) {
                    return module198(e, "properties");
                });
                return <div key={a} className={f ? module3147.parentGroup : module3147.group}>{t.title && <div className={module3147.title}>{t.title}</div>}{t.description && <p className={module3147.description}>{t.description}</p>}{i}</div>;
            }
            if (form) {
                return e.renderFormItem(t, a, r);
            }
            return null;
        };
        return e;
    }
    module37(a, [
        {
            key: "handleFormChange",
            value: function(e) {
                this.setState({
                    value: e
                });
                this.triggerChange(e);
            }
        },
        {
            key: "render",
            value: function() {
                const schema = this.props.schema;
                return this.renderSchemaForm(schema);
            }
        }
    ]);
    return a;
})(Component);
export default R;
R.propTypes = {
    schema: module1.object,
    value: module1.object,
    onChange: module1.func
};
R.defaultProps = {
    onChange: function() {}
};
