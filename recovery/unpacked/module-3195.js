import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-187.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-73.js";
import "./module-18.js";
import "./module-97.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-64.js";
import "./module-75.js";
import "./module-813.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-436.js";
import "./module-319.js";
import "./module-57.js";
import "./module-193.js";
import module61 from "./module-61.js";
import module246 from "./module-246.js";
import "./module-315.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module1197 from "./module-1197.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module1159 from "./module-1159.js";
import module198 from "./module-198.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import Module791 from "./module-791.js";
import module3 from "./module-3.js";
import Module967 from "./module-967.js";
import module14 from "./module-14.js";
import Module1198 from "./module-1198.js";
import Module3196 from "./module-3196.js";
import module3197 from "./module-3197.js";
const A = ((Component_1)=>{
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
    function r(...i_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...i_1);
        e.state = {
            value: e.props.value,
            showAdvanced: module26(e.props.schema, "unfoldAdvanced", false),
            error: {}
        };
        e.toggleAdvanced = function() {
            e.setState({
                showAdvanced: !e.state.showAdvanced
            });
        };
        e.generateMarks = function(e, t, a = "") {
            for(var r = 4, n = parseInt((t - e) / r, 10), l = {}, o = 0; o < r; o++){
                const u = e + o * n;
                l[u] = u === 0 ? u : u + a;
            }
            l[t] = t + a;
            return l;
        };
        e.renderFormItem = function(a, r, n) {
            let l;
            const e_state = e.state;
            const { value, error } = e_state;
            const f = {
                defaultValue: module26(value, n, ""),
                onChange: function(r) {
                    if (a.rules) {
                        a.rules.some((e)=>{
                            if (e.pattern && !e.pattern.test(r)) {
                                module74(error, `["${n.join(".")}"]`, t(e.message));
                                return true;
                            }
                            module74(error, `["${n.join(".")}"]`, "");
                            return false;
                        });
                    }
                    const length = Object.values(error).filter((e)=>e).length;
                    module74(e.props.validatorResult, "errorCount", length);
                    e.handleFormChange(module74(value, n, r));
                }
            };
            switch(a.type){
                case "string":
                    l = a.render === "slider" ? <Module967 className={module3(module31({}, module3197.disabled, a.disabled))} withInput={!a.disabled} max={a.sliderMax} min={a.sliderMin} unit={a.sliderUnit} marks={e.generateMarks(a.sliderMin, a.sliderMax, a.sliderUnit)} {...f} onChange={function(t) {
                        if (a.validator) {
                            const r = a.validator(t, {
                                app_id: e.props.formData.app_id,
                                max: a.sliderMax,
                                nodeRole: module26(n, "[0]")
                            });
                            const { error: error_1, message } = r;
                            if (error_1) {
                                module74(error, `["${n.join(".")}"]`, message);
                            } else {
                                module74(error, `["${n.join(".")}"]`, "");
                            }
                        }
                        if (t && parseFloat(t) > 0 && t.trim().startsWith("0")) {
                            f.onChange(t.replace(/^0*/, ""));
                        } else {
                            f.onChange(t);
                        }
                    }}/> : a.render === "textArea" ? <module186.TextArea {...f}/> : a.render === "select" ? r === "volumeType" ? <Module3196 disabled={a.disabled} {...f} cluster={e.props.formData.cluster}/> : <module186.Select {...f} options={module14.toJS(a.options).map((e)=>({
                            ...e,
                            label: typeof e.label === "number" ? e.label : t(e.label)
                        }))} disabled={a.disabled}/> : a.render === "password" ? <module186.InputPassword name={a.name} disabled={a.disabled} autoComplete="new-password" placeholder={a.placeholder ? t(a.placeholder) : ""} {...f}/> : <module186.Input {...f} disabled={a.disabled}/>;
                    break;
                case "integer":
                    l = <Module1198 {...f} integer min={a.min} max={a.max} showFunc={a.showFunc} disabled={a.disabled} style={{
                        maxWidth: "455px"
                    }}/>;
                    break;
                case "boolean":
                    l = <div className={module3197.boolean}><module186.Toggle {...f} defaultChecked={module26(value, n, false)}/><Module791 title={a.title} description={a.description}/></div>;
                    break;
                case "alert":
                    l = <module186.Alert className={module3197.alert} icon="information" message={t(a.content)}/>;
                    break;
                case "array":
                    l = <>todo</>;
                    break;
                default:
                    l = <></>;
            }
            let label = "";
            if (a.type !== "boolean") {
                label = a.tooltipContent ? <div><span style={{
                    verticalAlign: "bottom"
                }}>{t(a.title)}</span><module186.Tooltip content={t(a.tooltipContent)}><module186.Icon size={20} name="question"/></module186.Tooltip></div> : t(a.title);
            }
            const desc = a.type === "integer" && typeof a.min === "number" && typeof a.max === "number" ? `${t(a.description || "")}${t("VALUE_RANGE_DESC", {
                min: a.min,
                max: a.max
            })}` : t(a.description);
            const message = module26(error, `["${n.join(".")}"]`);
            const h = module26(e.state.value, `[${n.join(".").replace(r, "version")}]`);
            if (a.forVersion && a.forVersion instanceof Array && !a.forVersion.includes(h)) {
                return null;
            }
            return <module186.Form.Item key={r} className={a.rowExclusive && !a.halfRow ? "row" : ""} label={label} desc={desc} error={message ? {
                message
            } : null}>{l}</module186.Form.Item>;
        };
        e.renderSchemaForm = function(a, r = "", n = []) {
            const a_type = a.type;
            const value = e.state.value;
            const s = module246(a.hidden) === "object" ? module26(value, a.hidden.value, null) === a.hidden.condition : module26(value, a.hidden, false);
            if (s) {
                return null;
            }
            if (a_type === "object") {
                const i = [];
                const f = [];
                module1197(a.properties, function(t, a) {
                    if (t.advanced) {
                        f.push(e.renderSchemaForm(t, a, [].concat(module61(n), [
                            a
                        ])));
                    } else {
                        i.push(e.renderSchemaForm(t, a, [].concat(module61(n), [
                            a
                        ])));
                    }
                });
                if (module63(i) || i.every((e)=>!e)) {
                    return null;
                }
                const d = a.properties && module1159(a.properties, function(e) {
                    return module198(e, "properties");
                });
                return <div key={r} className={d ? module3197.parentGroup : module3197.group}>{a.title && <div className={module3197.titleContainer}>{a.icon && <module186.Icon name={a.icon} size={20}/>}<div className={module3197.title}>{t(a.title)}</div></div>}{a.description && <p className={module3197.description}>{t(a.description)}</p>}{i}{f.length > 0 && <><div className={module3197.advanced} onClick={e.toggleAdvanced}><span>{t("ADVANCED_SETTINGS")}</span><module186.Icon name={e.state.showAdvanced ? "chevron-up" : "chevron-down"} size="20"/></div><div/></>}{e.state.showAdvanced && f}{f.length % 2 == 1 && <div className="form-item"/>}</div>;
            }
            return <>{e.renderFormItem(a, r, n)}{a.halfRow && <div className="form-item"/>}</>;
        };
        return e;
    }
    module37(r, [
        {
            key: "handleFormChange",
            value: function(value) {
                this.setState({
                    value
                });
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
    return r;
})(Component);
export default A;
A.propTypes = {
    schema: module1.object,
    value: module1.object,
    onChange: module1.func,
    validatorResult: module1.object,
    formData: module1.object
};
A.defaultProps = {
    onChange: function() {}
};
