import "./module-12.js";
import "./module-187.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-860.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module788 from "./module-788.js";
import module831 from "./module-831.js";
import module801 from "./module-801.js";
import module26 from "./module-26.js";
import module241 from "./module-241.js";
import module242 from "./module-242.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import { Component } from "./module-553.js";
import module322 from "./module-322.js";
import { PATTERN_ALIAS_NAME } from "./module-72.js";
let o;
let u;
let l;
function P(e, t) {
    const r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let a = Object.getOwnPropertySymbols(e);
        if (t) {
            a = a.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        r.push.apply(r, a);
    }
    return r;
}
const C = observer((l = u = ((Component_1)=>{
    module55(a, Component_1);
    var r = ((e)=>{
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
            let r;
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(e) {
        let t;
        module36(this, a);
        t = r.call(this, e);
        t.fetchUsers = function(e) {
            return t.userStore.fetchList({
                ...e
            });
        };
        t.handleOk = function(e) {
            const onOk = t.props.onOk;
            module242(e, "spec.clusters");
            onOk(e);
        };
        t.handleScrollToBottom = function() {
            if (!t.scrolling && t.userStore.list.total > t.userStore.list.data.length) {
                t.scrolling = true;
                t.userStore.fetchList({
                    more: true,
                    page: t.userStore.list.page + 1
                }).then(()=>{
                    t.scrolling = false;
                });
            }
        };
        t.handleInputChange = module801(function(e) {
            if (e || !t._select) {
                t._search = true;
                t.userStore.fetchList({
                    name: e
                });
            } else {
                t._select = false;
            }
        }, 300);
        t.handleChange = function(e) {
            t._select = true;
            if (!e && t._search) {
                t.userStore.fetchList();
                t._search = false;
            }
        };
        t.state = {
            formData: module831(e.detail._originData)
        };
        t.userStore = new module322;
        t.fetchUsers();
        return t;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, isSubmitting, onCancel } = props;
                const formData = this.state.formData;
                return <module788.Form data={formData} width={691} title={t("EDIT_INFORMATION")} icon="enterprise" onOk={this.handleOk} okText={t("OK")} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting}><module186.Form.Item label={t("NAME")} desc={t("NAME_DESC")}><module186.Input name="metadata.name" disabled/></module186.Form.Item><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
                    {
                        pattern: PATTERN_ALIAS_NAME,
                        message: t("INVALID_ALIAS_NAME_DESC")
                    }
                ]}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63}/></module186.Form.Item><module186.Form.Item label={t("ADMINISTRATOR")}><module186.Select name="spec.template.spec.manager" options={this.users} pagination={module241(this.userStore.list, [
                    "page",
                    "limit",
                    "total"
                ])} isLoading={this.userStore.list.isLoading} onFetch={this.fetchUsers} defaultValue={globals.user.username} onChange={this.handleChange} searchable/></module186.Form.Item><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256} rows="3"/></module186.Form.Item></module788.Form>;
            }
        },
        {
            key: "users",
            get: function() {
                const e = module26(this.props.detail, "spec.template.spec.manager");
                const t = this.userStore.list.data.map((e)=>({
                        label: e.username,
                        value: e.username
                    }));
                if (t.every((t)=>t.value !== e)) {
                    t.unshift({
                        label: e,
                        value: e
                    });
                }
                return t;
            }
        }
    ]);
    return a;
})(Component), u.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
}, u.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {},
    isSubmitting: false
}, o = l)) || o;
export default C;
