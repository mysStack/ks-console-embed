import "unpacked/module-15.js";
import "unpacked/module-5.js";
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
import module26 from "unpacked/module-26.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module3502 from "unpacked/module-3502.js";
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.state = {
            visible: localStorage.getItem(e.localStorageKey) !== "false"
        };
        e.toggleHelpDoc = function(visible) {
            localStorage.setItem(e.localStorageKey, String(visible));
            e.setState({
                visible
            }, function() {
                if (e.props.onToggle) {
                    e.props.onToggle(visible);
                }
            });
        };
        e.showHelpDoc = function() {
            e.toggleHelpDoc(true);
        };
        e.hideHelpDoc = function() {
            e.toggleHelpDoc(false);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { wrapperClassName, article, tips } = props;
                const visible = this.state.visible;
                return <div className={module3(module3502.wrapper, wrapperClassName)}>{article}{visible ? <div className={module3502.helpDoc}><div className={module3502.doc}>{tips}</div><div className={module3502.hiddenBtn} onClick={this.hideHelpDoc}>{t("HIDE_HELP_INFORMATION")}</div></div> : <div className={module3502.openHelpButton} onClick={this.showHelpDoc}><module186.Icon name="question" size={24}/></div>}</div>;
            }
        },
        {
            key: "localStorageKey",
            get: function() {
                return `${module26(globals, "user.username")}-${this.props.localStorageKey}`;
            }
        }
    ]);
    return r;
})(Component);
export default h;
