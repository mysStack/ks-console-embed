import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-315.js";
import "./module-58.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-24.js";
import "./module-193.js";
import { Component, createRef } from "./module-553.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import { PATTERN_PASSWORD } from "./module-72.js";
import module2874 from "./module-2874.js";
const E = /(?=.*?[A-Z])(?=.*?[a-z])/;
const b = /(?=.*?[~!@#$%^&*()\-_=+\\|\[\{\}\];:'",<.>/? ])/;
const _ = /(?=.*?[0-9])/;
const O = (e)=>{
    if (module63(e)) {
        return -1;
    }
    let t = 0;
    if (E.test(e)) {
        t += 4;
    }
    if (_.test(e)) {
        t += 2;
    }
    if (b.test(e)) {
        t += 2;
    }
    if (e.length >= 6 && e < 12) {
        t += 2;
    } else if (e.length >= 12) {
        t += 4;
    }
    if (PATTERN_PASSWORD.test(e)) {
        return t;
    }
    return 0;
};
const S = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.state = {
            strength: -1,
            showTip: false
        };
        e.ref = createRef();
        e.handleChange = function(t, a) {
            const e_props = e.props;
            const { withStrength, onChange } = e_props;
            if (onChange) {
                onChange(t, a);
            }
            if (withStrength) {
                const strength = O(a);
                e.setState({
                    strength,
                    showTip: strength > -1
                });
            }
        };
        e.handleDropdownClose = function(t) {
            if (t && t.target && e.ref && e.ref.current && e.ref.current.contains(t.target)) {
                e.setState({
                    showTip: true
                });
            } else {
                e.setState({
                    showTip: false
                });
            }
        };
        e.handleInputClick = function() {
            const strength = e.state.strength;
            e.setState({
                showTip: strength > -1
            });
        };
        e.handleInputBlur = function() {
            e.setState({
                showTip: false
            });
        };
        e.getColor = function() {
            const strength = e.state.strength;
            if (strength === -1) {
                return {
                    width: 0,
                    backgroundColor: "#fff"
                };
            }
            if (strength >= 0 && strength < 6) {
                return {
                    width: "33%",
                    backgroundColor: "#ca2621"
                };
            }
            if (strength >= 6 && strength < 8) {
                return {
                    width: "66%",
                    backgroundColor: "#f5a623"
                };
            }
            if (strength >= 8) {
                return {
                    width: "100%",
                    backgroundColor: "#55bc8a"
                };
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "renderStrengthContent",
            value: function() {
                const value = this.props.value;
                const a = value === undefined ? "" : value;
                return <div className={module2874.content}><p>{t("PASSWORD_MUST")}</p><ul className={module2874.rules}><li><module186.Icon className={module3(module2874.icon, module31({}, module2874.selected, E.test(a)))} name="check" size={12} type="light"/>{t("PASSWORD_LETTER")}</li><li><module186.Icon className={module3(module2874.icon, module31({}, module2874.selected, _.test(a)))} name="check" size={12} type="light"/>{t("PASSWORD_NUMBER")}</li><li><module186.Icon className={module3(module2874.icon, module31({}, module2874.selected, b.test(a)))} name="check" size={12} type="light"/>{t("PASSWORD_CHARACTERS")}</li><li><module186.Icon className={module3(module2874.icon, module31({}, module2874.selected, a.length >= 8))} name="check" size={12} type="light"/>{t("PASSWORD_LENGTH")}</li></ul><p>{t("PASSWORD_STRENGTH")}:</p><div className={module2874.barWrapper}><div className={module2874.bar} style={this.getColor()}/></div><p className={module2874.tip}>{t("PASSWORD_STRENGTH_DESC")}</p></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { withStrength, tipClassName, ...rest } = props;
                const state = this.state;
                const { showTip, strength } = state;
                if (withStrength) {
                    return <div className={module2874.wrapper} ref={this.ref}><module186.Dropdown className={tipClassName} visible={showTip && strength > -1} content={this.renderStrengthContent()} placement="bottomRight" closeAfterClick={false} onClose={this.handleDropdownClose}><div className={module2874.trigger}/></module186.Dropdown><module186.InputPassword {...rest} onChange={this.handleChange} onBlur={this.handleInputBlur} onClick={this.handleInputClick}/></div>;
                }
                return <module186.InputPassword {...rest}/>;
            }
        }
    ]);
    return r;
})(Component);
export default S;
