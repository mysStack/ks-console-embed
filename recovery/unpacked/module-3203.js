import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-18.js";
import "./module-16.js";
import "./module-138.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module788 from "./module-788.js";
import module1 from "./module-1.js";
import * as module553 from "./module-553.js";
import { RadonDBAppId } from "./module-817.js";
import { backupNameRegx } from "./module-1286.js";
import module984 from "./module-984.js";
const S = ((e)=>{
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.formRef = module553.default.createRef();
        n.onOk = async function e() {
            n.formRef.current.validate(module44(module41.mark(function* e() {
                n.props.onOk(n.state.backup);
            })));
        };
        n.onCancel = function() {
            n.props.onCancel();
        };
        n.state = {
            backup: {
                name: "",
                alias: ""
            }
        };
        n.formItems = e.app_id === RadonDBAppId.PostgreSQL ? null : [
            {
                name: "name",
                label: "NAME",
                type: "text",
                description: "BACKUP_NAME_DESC",
                rules: [
                    {
                        pattern: backupNameRegx,
                        message: t("INVALID_BACKUP_NAME_DESC")
                    },
                    {
                        required: true,
                        message: t("BACKUP_NAME_EMPTY_DESC")
                    }
                ],
                range: {
                    max: 24
                }
            },
            {
                name: "alias",
                label: "ALIAS",
                type: "text",
                description: "ALIAS_NAME_DESC",
                range: {
                    max: 63
                }
            }
        ];
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const e = {
                    ...this.props
                };
                return module553.default.createElement(module788, {
                    width: 600,
                    footerClassName: module984.footer,
                    ...e,
                    onOk: this.onOk,
                    onCancel: this.onCancel,
                    okText: t("BACK_UP")
                }, module553.default.createElement("div", {
                    className: module984.tips
                }, t("BACKUP_WARNING")), this.props.app_id === RadonDBAppId.PostgreSQL && module553.default.createElement("div", {
                    className: module984.tips
                }, t("BACKUP_POSTGRE_SQL_TIP")), module553.default.createElement(module186.Form, {
                    className: module984.form,
                    data: this.state.backup,
                    ref: this.formRef
                }, this.formItems ? this.formItems.map(({ name, label, description, rules, range })=>module553.default.createElement(module186.Form.Item, {
                        key: name,
                        label: t(label),
                        desc: t(description),
                        rules: rules || []
                    }, module553.default.createElement(module186.Input, {
                        name,
                        maxLength: range && range.max ? range.max : -1
                    }))) : module553.default.createElement("div", null, t("BACKUP_COMFIRM_TIP"))));
            }
        }
    ]);
    return r;
})(module553.Component);
export default S;
S.propTypes = {
    onOk: module1.func,
    onCancel: module1.func,
    app_id: module1.string
};
S.defaultProps = {
    onOk: function() {},
    onCancel: function() {}
};
