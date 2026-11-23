import "unpacked/module-12.js";
import "unpacked/module-187.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-860.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module241 from "unpacked/module-241.js";
import { observer } from "unpacked/module-239.js";
import { Component } from "unpacked/module-553.js";
import module322 from "stores/user";
import { PATTERN_ALIAS_NAME, PATTERN_NAME } from "utils/constants";
import module3617 from "unpacked/module-3617.js";
let l;
function g(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const b = observer(l = ((Component_1)=>{
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.fetchUsers = function(e) {
            return n.userStore.fetchList({
                ...e
            });
        };
        n.nameValidator = function(e, a, r) {
            if (a) {
                if (a === "workspaces") {
                    return r({
                        message: t("INVALID_WORKSPACE_NAME"),
                        field: e.field
                    });
                }
                return void n.props.store.checkName({
                    name: a
                }).then((a)=>{
                    if (a.exist) {
                        return r({
                            message: t("WORKSPACE_NAME_EXISTS_DESC"),
                            field: e.field
                        });
                    }
                    r();
                });
            }
            return r();
        };
        n.userStore = new module322;
        n.fetchUsers();
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formRef, formTemplate, defaultClusterType } = props;
                return <div className={module3617.wrapper}><div className={module3617.step}><div>{t("BASIC_INFORMATION")}</div><p>{t("WORKSPACE_CREATE_DESC")}</p></div><module186.Form data={formTemplate} ref={formRef}><module186.Form.Item className={module3617.hide} label={t("CLUSTER")} desc={t("WORKSPACE_CLUSTER_DESC")}><module186.Select name="clusterType" defaultValue={defaultClusterType} options={this.clusterTypeOptions} disabled/></module186.Form.Item><module186.Form.Item label={t("NAME")} desc={t("NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("WORKSPACE_NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC")
                    },
                    {
                        validator: this.nameValidator
                    }
                ]}><module186.Input name="metadata.name" autoFocus maxLength={63}/></module186.Form.Item><module186.Form.Item label={t("ALIAS")} desc={t("ALIAS_NAME_DESC")} rules={[
                    {
                        pattern: PATTERN_ALIAS_NAME,
                        message: t("INVALID_ALIAS_NAME_DESC")
                    }
                ]}><module186.Input name="metadata.annotations['kubesphere.io/alias-name']" maxLength={63}/></module186.Form.Item><module186.Form.Item label={t("ADMINISTRATOR")}><module186.Select name="spec.template.spec.manager" options={this.users} pagination={module241(this.userStore.list, [
                    "page",
                    "limit",
                    "total"
                ])} isLoading={this.userStore.list.isLoading} onFetch={this.fetchUsers} defaultValue={globals.user.username} onChange={this.handleChange} searchable/></module186.Form.Item><module186.Form.Item label={t("DESCRIPTION")} desc={t("DESCRIPTION_DESC")}><module186.TextArea name="metadata.annotations['kubesphere.io/description']" maxLength={256} rows="3"/></module186.Form.Item></module186.Form></div>;
            }
        },
        {
            key: "users",
            get: function() {
                const username = globals.user.username;
                const t = this.userStore.list.data.map((e)=>({
                        label: e.username,
                        value: e.username
                    }));
                if (t.every((t)=>t.value !== username)) {
                    t.unshift({
                        label: username,
                        value: username
                    });
                }
                return t;
            }
        },
        {
            key: "clusterTypeOptions",
            get: function() {
                return [
                    {
                        label: t("KS_CLUSTER"),
                        value: "ks"
                    },
                    {
                        label: t("EDGE_CLUSTER"),
                        value: "edge"
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || l;
export default b;
