import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
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
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import Module788 from "components/Base/Modal";
import module3152 from "unpacked/module-3152.js";
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
        e.handleOk = function() {
            e.props.onOk();
        };
        return e;
    }
    module37(r, [
        {
            key: "renderTitle",
            value: function() {
                const props = this.props;
                const { icon, title, description } = props;
                return <div className={module3152.title}><module186.Icon name={icon || "question"} size={description ? 40 : 32}/>{description ? <div className={module3152.description}><h3>{title || t("APP_NOTE")}</h3><small>{description}</small></div> : <div className={module3152.name}>{title || t("APP_NOTE")}</div>}</div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel, content, isSubmitting } = props;
                return <Module788 width={504} bodyClassName={module3152.modalBody} visible={visible} isSubmitting={isSubmitting} hideHeader hideFooter><div className={module3152.body}>{this.renderTitle()}<div className={module3152.content}>{content}</div></div><div className={module3152.footer}><module186.Button onClick={onCancel}>{t("CANCEL")}</module186.Button><module186.Button type="control" disabled={isSubmitting} loading={isSubmitting} onClick={this.handleOk}>{t("OK")}</module186.Button></div></Module788>;
            }
        }
    ]);
    return r;
})(Component);
export default h;
h.propTypes = {
    icon: module1.string,
    title: module1.string,
    description: module1.string,
    desc: module1.oneOfType([
        module1.string,
        module1.node
    ]),
    visible: module1.bool,
    isSubmitting: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
};
h.defaultProps = {
    icon: "",
    title: "",
    description: "",
    content: "",
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
};
