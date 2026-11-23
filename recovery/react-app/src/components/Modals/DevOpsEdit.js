import "unpacked/module-15.js";
import "unpacked/module-18.js";
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
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import module26 from "unpacked/module-26.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import { Component, createRef } from "unpacked/module-553.js";
import module322 from "stores/user";
import { PATTERN_ALIAS_NAME, PATTERN_NAME } from "utils/constants";
let l;
let o;
let u;
const _ = observer((u = o = ((Component_1)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleOk = function(e) {
            t.props.onOk(e);
        };
        t.form = createRef();
        t.store = new module322;
        if (e.detail.workspace) {
            t.store.fetchList({
                limit: Infinity,
                workspace: e.detail.workspace
            });
        }
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const workspace = module26(this.props, "detail.workspace");
                if (workspace && workspace !== module26(e, "detail.workspace")) {
                    this.store.fetchMembers({
                        limit: Infinity,
                        workspace
                    });
                }
            }
        },
        {
            key: "getMembersOptions",
            value: function() {
                return module14.toJS(this.store.list).data.map((e)=>({
                        label: e.username,
                        value: e.username
                    }));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { detail, visible, onCancel, isSubmitting } = props;
                return <module788.Form width={691} title={t("EDIT_INFORMATION")} icon="pen" data={detail} onOk={this.handleOk} onCancel={onCancel} isSubmitting={isSubmitting} visible={visible}><module186.Form.Item label={t("NAME")} desc={t("NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("PATTERN_NAME_INVALID_TIP")
                    }
                ]}><module186.Input name="name" disabled/></module186.Form.Item><module186.Form.Item label={t("CREATOR")} desc={t("DEVOPS_ADMIN_DESC")}><module186.Select name="creator" options={this.getMembersOptions()} disabled/></module186.Form.Item><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
                    {
                        pattern: PATTERN_ALIAS_NAME,
                        message: t("INVALID_ALIAS_NAME_DESC")
                    }
                ]}><module186.Input name="aliasName" maxLength={63}/></module186.Form.Item><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea maxLength={256} name="description"/></module186.Form.Item></module788.Form>;
            }
        }
    ]);
    return r;
})(Component), o.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
}, o.defaultProps = {
    visible: false,
    isSubmitting: false,
    detail: {},
    onOk: function() {},
    onCancel: function() {}
}, l = u)) || l;
export default _;
