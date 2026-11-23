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
import module186 from "unpacked/module-186.js";
import module2281 from "unpacked/module-2281.js";
const p = ((Component_1)=>{
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
                return <div className="margin-b12"><div className={module2281.title}>{t("SELINUX_CONTEXT")}</div><div className={module2281.content}><module186.Columns><module186.Column><module186.Form.Item label={t("LEVEL")}><module186.Input name={`${this.prefix}.seLinuxOptions.level`}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("ROLE")}><module186.Input name={`${this.prefix}.seLinuxOptions.role`}/></module186.Form.Item></module186.Column></module186.Columns><module186.Columns><module186.Column><module186.Form.Item label={t("TYPE")}><module186.Input name={`${this.prefix}.seLinuxOptions.type`}/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("USER")}><module186.Input name={`${this.prefix}.seLinuxOptions.user`}/></module186.Form.Item></module186.Column></module186.Columns></div></div>;
            }
        },
        {
            key: "prefix",
            get: function() {
                return this.props.prefix || "securityContext";
            }
        }
    ]);
    return r;
})(Component);
export default p;
