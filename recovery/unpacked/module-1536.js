import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
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
import module3 from "./module-3.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import Module2257 from "./module-2257.js";
import module2260 from "./module-2260.js";
const y = ((Component_1)=>{
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
            showForm: false
        };
        e.getProbeTypeText = function(e) {
            if ("httpGet" in e) {
                return "HTTP_REQUEST";
            }
            if ("tcpSocket" in e) {
                return "TCP_PORT";
            }
            return "COMMAND";
        };
        e.showForm = function() {
            e.setState({
                showForm: true
            });
        };
        e.hideForm = function() {
            e.setState({
                showForm: false
            });
        };
        e.handleForm = function(t) {
            e.props.onChange(t);
            e.hideForm();
        };
        e.handleDelete = function() {
            const e_props = e.props;
            const t_onChange = e_props.onChange;
            if (e_props.deleteNoObject) {
                t_onChange();
            } else {
                t_onChange({});
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "renderProbeInfo",
            value: function() {
                const value = this.props.value;
                if ("httpGet" in value) {
                    return <><div><strong>{module26(value, "httpGet.scheme", "")}</strong><p>{t("TYPE")}</p></div><div><strong>{module26(value, "httpGet.path", "")}</strong><p>{t("PATH")}</p></div><div><strong>{module26(value, "httpGet.port", "")}</strong><p>{t("PORT")}</p></div></>;
                }
                if ("tcpSocket" in value) {
                    return <div><strong>{module26(value, "tcpSocket.port", "")}</strong><p>{t("PORT")}</p></div>;
                }
                if ("exec" in value) {
                    const a = module26(value, "exec.command", []);
                    return <div><strong>{a[0]}{a.length > 1 && " ..."}</strong><p>{t("COMMANDS")}</p></div>;
                }
                return null;
            }
        },
        {
            key: "renderProbeForm",
            value: function() {
                const props = this.props;
                const { probType, value, componentType } = props;
                return <Module2257 className={module2260.form} data={value} probType={probType} onSave={this.handleForm} onCancel={this.hideForm} componentType={componentType}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { description, value, componentType, label } = props;
                if (this.state.showForm) {
                    return <div className={module2260.probe}>{this.renderProbeForm()}</div>;
                }
                if (module63(value)) {
                    return <div className={module3(module2260.empty)} onClick={this.showForm}><div>{label || t("ADD_PROBE")}</div><p className="text-secondary">{description}</p></div>;
                }
                return <div className={module2260.probe}><div className={module2260.content}><module186.Icon name="monitor" size={40}/><div><strong>{t(this.getProbeTypeText(value))}</strong>{componentType === "heal" && <p><span>{t("INITIAL_DELAY_TIMEOUT_VALUE", {
                    delay: value.initialDelaySeconds || 0,
                    timeout: value.timeoutSeconds || 0
                })}</span></p>}</div>{this.renderProbeInfo()}</div><div className="buttons"><module186.Button type="flat" icon="trash" onClick={this.handleDelete}/><module186.Button type="flat" icon="pen" onClick={this.showForm}/></div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
y.propTypes = {
    name: module1.string,
    label: module1.string,
    value: module1.object,
    onChange: module1.func,
    onShowForm: module1.func,
    deleteNoObject: module1.bool
};
y.defaultProps = {
    name: "",
    label: "",
    value: {},
    onChange: function() {},
    onShowForm: function() {},
    componentType: "heal",
    deleteNoObject: false
};
