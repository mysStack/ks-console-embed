import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-137.js";
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
import module3627 from "unpacked/module-3627.js";
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
            confirm: "",
            checked: false
        };
        e.handleInputChange = function(t) {
            e.setState({
                confirm: t.target.value
            });
        };
        e.handleDeleteCheckboxChange = function(checked) {
            e.setState({
                checked
            });
        };
        e.handleOk = function() {
            if (e.state.checked) {
                e.props.onOk();
            } else {
                e.props.onOk({
                    kind: "DeleteOptions",
                    apiVersion: "v1",
                    propagationPolicy: "Orphan"
                });
            }
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
                const { type, resource, visible, onCancel, title, desc, isSubmitting } = props;
                const s = type || undefined;
                const f = type ? `${type}_LOW` : undefined;
                const v = type ? `${type}_PL` : undefined;
                const h = desc || (resource && type ? resource.split(", ").length === 1 ? t.html("DELETE_RESOURCE_TYPE_DESC_SI", {
                    type: t(f),
                    resource
                }) : t.html("DELETE_RESOURCE_TYPE_DESC_PL", {
                    type: t(f),
                    resource
                }) : t.html("DELETE_DESC"));
                return <Module788 width={504} bodyClassName={module3627.modalBody} visible={visible} isSubmitting={isSubmitting} onCancel={onCancel} hideHeader hideFooter><div className={module3627.body}><div className="h5"><module186.Icon name="close" type="light" className={module3627.closeIcon}/>{title || (resource && type ? resource.split(", ").length === 1 ? t("DELETE_TITLE_SI", {
                    type: t(s)
                }) : t("DELETE_TITLE_PL", {
                    type: t(v)
                }) : t("DELETE"))}</div><div className={module3627.content}><p>{h}</p>{resource && <module186.Input name="confirm" value={this.state.confirm} onChange={this.handleInputChange} placeholder={resource} autoFocus/>}<module186.Checkbox onChange={this.handleDeleteCheckboxChange} checked={this.state.checked}>{t("DELETE_WORKSPACE_PROJECTS_DESC")}</module186.Checkbox></div></div><div className={module3627.footer}><module186.Button onClick={onCancel} data-test="modal-cancel">{t("CANCEL")}</module186.Button><module186.Button type="danger" loading={isSubmitting} disabled={isSubmitting || !!resource && this.state.confirm !== resource} onClick={this.handleOk} data-test="modal-ok">{t("OK")}</module186.Button></div></Module788>;
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
