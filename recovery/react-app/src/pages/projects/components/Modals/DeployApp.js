import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-58.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module31 from "unpacked/module-31.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import Module788 from "components/Base/Modal";
import module2565 from "unpacked/module-2565.js";
const BComponent = function({ icon, image, title, desc, disabled, onEnter }) {
    return <div className={module3(module2565.item, module31({}, module2565.disable, disabled))} onClick={onEnter}>{image ? <img src={image} alt=""/> : <module186.Icon name={icon} size={40}/>}<div className={module2565.text}><div>{title}</div><p>{desc}</p></div></div>;
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
        e.handleAppTemplate = function() {
            const e_props = e.props;
            const { namespace, cluster, workspace, routing } = e_props;
            e_props.onOk();
            routing.push(`/apps?workspace=${workspace}&cluster=${cluster}&namespace=${namespace}`);
        };
        e.handleAppRepo = function() {
            const e_props = e.props;
            const { onOk, trigger, ...rest } = e_props;
            onOk();
            trigger("openpitrix.app.create", {
                trigger,
                ...rest
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel } = props;
                return <Module788 width={600} style={{
                    borderRadius: "8px"
                }} onOk={this.handleOk} onCancel={onCancel} visible={visible} bodyClassName={module2565.body} hideHeader><div className={module2565.header}><div className={module2565.logo}><img src="/assets/application.svg" alt=""/></div><div className={module2565.text}><h2>{t("CREATE_APP")}</h2><p>{t("CREATE_APP_DESC")}</p></div></div><div className={module2565.footer}>{globals.app.enableAppStore && <BComponent icon="templet" title={t("FROM_APP_STORE")} desc={t("FROM_APP_STORE_DESC")} onEnter={this.handleAppTemplate}/>}{<BComponent icon="catalog" title={t("FROM_APP_TEMPLATE")} desc={t("FROM_APP_TEMPLATE_DESC")} onEnter={this.handleAppRepo}/>}</div></Module788>;
            }
        }
    ]);
    return r;
})(Component);
export default S;
S.propTypes = {
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
};
S.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {}
};
