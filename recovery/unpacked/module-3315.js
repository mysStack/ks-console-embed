import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-137.js";
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
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import module3316 from "./module-3316.js";
const v = ((Component_1)=>{
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
            confirm: ""
        };
        e.handleInputChange = function(t) {
            e.setState({
                confirm: t.target.value
            });
        };
        e.handleOk = function() {
            e.props.onOk();
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.visible && this.props.visible !== e.visible) {
                    this.setState({
                        confirm: ""
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { app, type, resource, visible, onCancel, title, desc, isSubmitting } = props;
                const f = type || undefined;
                const v = type ? `${type}_LOW` : undefined;
                const h = type ? `${type}_PL` : undefined;
                let E = desc || (resource && type ? resource.split(", ").length === 1 ? t.html("DELETE_RESOURCE_TYPE_DESC_SI", {
                    type: t(v),
                    resource
                }) : t.html("DELETE_RESOURCE_TYPE_DESC_PL", {
                    type: t(v),
                    resource
                }) : t.html("STOP_DESC", {
                    resource,
                    type: ""
                }));
                if (app) {
                    E = t.html("STOP_APP_RESOURCE_TIP", {
                        type,
                        resource,
                        app
                    });
                }
                return <Module788 width={504} bodyClassName={module3316.modalBody} visible={visible} isSubmitting={isSubmitting} onCancel={onCancel} hideHeader hideFooter><div className={module3316.body}><div className="h5"><module186.Icon name="close" type="light" className={module3316.closeIcon}/>{title || (resource && type ? resource.split(", ").length === 1 ? t("STOP_TITLE_SI", {
                    type: t(f)
                }) : t("STOP_TITLE_PL", {
                    type: t(h)
                }) : t("STOP"))}</div><div className={module3316.content}><p>{E}</p>{resource && <module186.Input name="confirm" value={this.state.confirm} onChange={this.handleInputChange} placeholder={resource} autoFocus/>}</div></div><div className={module3316.footer}><module186.Button onClick={onCancel} data-test="modal-cancel">{t("CANCEL")}</module186.Button><module186.Button type="danger" loading={isSubmitting} disabled={isSubmitting || !!resource && this.state.confirm !== resource} onClick={this.handleOk} data-test="modal-ok">{t("OK")}</module186.Button></div></Module788>;
            }
        }
    ]);
    return r;
})(Component);
export default v;
v.propTypes = {
    type: module1.string,
    resource: module1.string,
    visible: module1.bool,
    title: module1.oneOfType([
        module1.string,
        module1.node
    ]),
    desc: module1.oneOfType([
        module1.string,
        module1.node
    ]),
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
v.defaultProps = {
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
};
