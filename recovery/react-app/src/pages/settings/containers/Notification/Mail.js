import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module242 from "unpacked/module-242.js";
import module136 from "unpacked/module-136.js";
import module240 from "unpacked/module-240.js";
import Module790 from "components/Base/Panel";
import Module1699 from "components/Forms/Notification/MailForm";
import Module1078 from "pages/settings/components/Cards/Banner";
import module1079 from "stores/notification/config";
import module920 from "stores/notification/secret";
import { safeBtoa } from "utils/base64";
import module435 from "utils/form.templates";
import "unpacked/module-186.js";
import { trigger } from "utils/action";
let o;
const _ = "default-email-config";
const A = "global-email-config-secret";
const R = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
    function r(...o_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...o_1);
        e.configStore = new module1079;
        e.secretStore = new module920;
        e.state = {
            formData: {
                config: e.configFormTemplate,
                secret: e.secretTemplate
            },
            formStatus: "create",
            isLoading: false,
            noConfig: true
        };
        e.formData = {
            config: e.configFormTemplate,
            secret: e.secretTemplate
        };
        e.fetchData = module44(module41.mark(function t() {
            let a;
            let r;
            let n;
            return module41.wrap(function(t) {
                while(true){
                    switch(t.prev = t.next){
                        case 0:
                            e.setState({
                                isLoading: true
                            });
                            t.next = 3;
                            return e.configStore.fetchList({
                                type: "email"
                            });
                        case 3:
                            a = t.sent;
                            r = a.find((e)=>module26(e, "metadata.name") === _);
                            if (module63(r)) {
                                t.next = 11;
                                break;
                            }
                            t.next = 8;
                            return e.secretStore.fetchList({
                                name: A,
                                type: "email"
                            });
                        case 8:
                            n = t.sent;
                            e.formData = {
                                config: module74(e.configFormTemplate, "spec", r.spec),
                                secret: module74(e.secretTemplate, "data", module26(n, "[0].data", {}))
                            };
                            e.setState({
                                formData: module136(e.formData),
                                formStatus: "update",
                                noConfig: true
                            });
                        case 11:
                            e.setState({
                                isLoading: false
                            });
                        case 12:
                        case "end":
                            return t.stop();
                    }
                }
            }, t);
        }));
        e.getVerifyFormTemplate = function(e) {
            const t = module136(e);
            const { config, receiver, secret } = t;
            module74(config, "spec.email.authPassword.value", module26(secret, "data.authPassword"));
            module242(config, "spec.email.authPassword.valueFrom");
            module242(receiver, "spec.email.alertSelector");
            return {
                config,
                receiver,
                secret
            };
        };
        e.handleSubmit = async (r)=>{
            let n;
            let o;
            let l;
            let i;
            let content;
            let s;
            n = module136(r);
            o = n.config;
            l = n.secret;
            i = e.state.formStatus;
            s = module26(l, "data");
            Object.keys(s).forEach((e)=>{
                s[e] = safeBtoa(s[e]);
            });
            module74(o, "spec.email.authPassword.valueFrom.secretKeyRef.key", "authPassword");
            module74(o, "spec.email.authPassword.valueFrom.secretKeyRef.name", A);
            if (!(i !== "create")) {
                await e.configStore.create(o);
                await e.secretStore.create(module74(e.secretTemplate, "data", s));
                content = t("CREATE_SUCCESSFUL");
            } else {
                await e.configStore.update({
                    name: _
                }, o);
                await e.secretStore.update({
                    name: A
                }, module74(e.secretTemplate, "data", s));
                content = t("UPDATE_SUCCESSFUL");
            }
            e.fetchData();
            module240.success({
                content,
                duration: 1000
            });
        };
        e.onFormClose = function() {
            e.setState({
                formData: module136(e.formData)
            });
        };
        e.onOpenNotificationSetting = function() {
            e.trigger("notification.user.setting", {});
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { formData, isLoading, noConfig } = state;
                return <div><Module1078 type="mail"/><Module790 loading={isLoading}><Module1699 data={formData} noConfig={noConfig} onCancel={this.onFormClose} onSubmit={this.handleSubmit} getVerifyFormTemplate={this.getVerifyFormTemplate} isSubmitting={this.secretStore.isSubmitting}/></Module790></div>;
            }
        },
        {
            key: "configFormTemplate",
            get: function() {
                return module435.notificationconfigs({
                    name: _
                });
            }
        },
        {
            key: "secretTemplate",
            get: function() {
                return module435.globalsecret({
                    name: A
                });
            }
        }
    ]);
    return r;
})(Component)) || o) || o) || o;
export default R;
