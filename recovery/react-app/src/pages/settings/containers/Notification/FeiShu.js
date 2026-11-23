import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-187.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-30.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-38.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module41 from "unpacked/module-41.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module60 from "unpacked/module-60.js";
import module63 from "unpacked/module-63.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module242 from "unpacked/module-242.js";
import module136 from "unpacked/module-136.js";
import { observer } from "unpacked/module-239.js";
import module1078 from "pages/settings/components/Cards/Banner";
import module1707 from "components/Forms/Notification/FeiShuForm";
import module790 from "components/Base/Panel";
import module240 from "unpacked/module-240.js";
import module889 from "stores/notification/receiver";
import module920 from "stores/notification/secret";
import module1079 from "stores/notification/config";
import module435 from "utils/form.templates";
import { safeBtoa } from "utils/base64";
let i;
const M = "default-feishu-config";
const name = "global-feishu-receiver";
const L = "global-feishu-config-secret";
const x = observer(i = ((e)=>{
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.receiverStore = new module889;
        e.configStore = new module1079;
        e.secretStore = new module920;
        e.state = {
            formData: {
                config: e.configFormTemplate,
                receiver: e.receiverFormTemplate,
                secret: e.secretTemplate
            },
            isLoading: false,
            noConfig: true
        };
        e.formData = {
            config: e.configFormTemplate,
            receiver: e.receiverFormTemplate,
            secret: e.secretTemplate
        };
        e.fetchData = async function t() {
            let a;
            let r;
            let n;
            let u;
            let i;
            let c;
            let t0;
            let t1;
            let t2;
            let t3;
            let t4;
            e.setState({
                isLoading: true
            });
            t0 = Promise;
            t1 = await e.configStore.fetchList({
                type: "feishu"
            });
            t2 = e.receiverStore.fetchList({
                name,
                type: "feishu"
            });
            t3 = e.secretStore.fetchList({
                name: L,
                type: "feishu"
            });
            t4 = [
                t1,
                t2,
                t3
            ];
            a = await t0.all.call(t0, t4);
            r = module96(a, 3);
            n = r[0];
            u = r[1];
            i = r[2];
            c = n.find((e)=>module26(e, "metadata.name") === M);
            e.formData = {
                config: c || e.configFormTemplate,
                receiver: module74(e.receiverFormTemplate, "spec", module26(u, "[0].spec", {})),
                secret: module74(e.secretTemplate, "data", module26(i, "[0].data", {}))
            };
            e.setState({
                formData: module136(e.formData),
                noConfig: module63(u)
            });
            e.setState({
                isLoading: false
            });
        };
        e.getVerifyFormTemplate = function(e) {
            const t = {};
            const a = module136(e);
            const { receiver, secret } = a;
            const u = module26(receiver, "spec.feishu.chatbot.keywords");
            const o = module26(receiver, "spec.feishu.department");
            const l = module26(receiver, "spec.feishu.user");
            const i = module26(secret, "data", {});
            const { appkey, appsecret, webhook, chatbotsecret } = i;
            if (appkey) {
                module74(t, "config.spec.feishu.appID.value", appkey);
            }
            if (appsecret) {
                module74(t, "config.spec.feishu.appSecret.value", appsecret);
            }
            if (webhook) {
                module74(t, "receiver.spec.feishu.chatbot.webhook.value", webhook);
            }
            if (chatbotsecret) {
                module74(t, "receiver.spec.feishu.chatbot.secret.value", chatbotsecret);
            }
            if (!module63(u)) {
                module74(t, "receiver.spec.feishu.chatbot.keywords", u);
            }
            if (!module63(o)) {
                module74(t, "receiver.spec.feishu.department", o);
            }
            if (!module63(l)) {
                module74(t, "receiver.spec.feishu.user", l);
            }
            return t;
        };
        e.handleVerify = function({ receiver, secret }) {
            const n = module26(receiver, "spec.feishu.chatbot.keywords");
            const u = module26(receiver, "spec.feishu.department", []);
            const o = module26(receiver, "spec.feishu.user", []);
            const l = module26(secret, "data", {});
            const { appkey, appsecret, webhook, chatbotsecret } = l;
            if ([
                appkey,
                appsecret,
                webhook,
                chatbotsecret,
                n
            ].every((e)=>{
                if (module60(e)) {
                    return module63(e);
                }
                return !e;
            })) {
                module240.error({
                    content: t("DINGTALK_SETTING_TIP")
                });
                return false;
            }
            if (u.length > 0 || o.length > 0) {
                if (!appkey) {
                    module240.error({
                        content: t("PLEASE_ENTER_VALUE_CUSTOM", {
                            value: "AppKey"
                        })
                    });
                    return false;
                }
                if (!appsecret) {
                    module240.error({
                        content: t("PLEASE_ENTER_VALUE_CUSTOM", {
                            value: "AppSecret"
                        })
                    });
                    return false;
                }
            }
            if (webhook || chatbotsecret || !module63(n)) {
                if (!webhook) {
                    module240.error({
                        content: t("PLEASE_ENTER_VALUE_CUSTOM", {
                            value: "Webhook URL"
                        })
                    });
                    return false;
                }
                if (!chatbotsecret && module63(n)) {
                    module240.error({
                        content: t("DINGTALK_CHATBOT_SECURITY_TIP")
                    });
                    return false;
                }
            }
            return true;
        };
        e.getResource = async function t() {
            let a;
            let r;
            let isExitConfig;
            let isExitReceiver;
            let isExitSecret;
            a = await Promise.all([
                e.configStore.getResource({
                    name: M
                }),
                e.receiverStore.getResource({
                    name
                }),
                e.secretStore.getResource({
                    name: L
                })
            ]);
            r = module96(a, 3);
            isExitConfig = r[0];
            isExitReceiver = r[1];
            isExitSecret = r[2];
            return {
                isExitConfig,
                isExitReceiver,
                isExitSecret
            };
        };
        e.handleSubmit = (()=>{
            const a = module44(module41.mark(function a(r) {
                let n;
                let u;
                let l;
                let i;
                let c;
                let s;
                let f;
                let d;
                let p;
                let m;
                return module41.wrap(function(a) {
                    while(true){
                        switch(a.prev = a.next){
                            case 0:
                                n = module136(r);
                                u = n.config;
                                l = n.receiver;
                                i = n.secret;
                                if (e.handleVerify(r)) {
                                    a.next = 3;
                                    break;
                                }
                                return a.abrupt("return");
                            case 3:
                                c = module26(i, "data", {});
                                Object.keys(c).forEach((e)=>{
                                    c[e] = safeBtoa(c[e]);
                                });
                                module74(u, "spec.feishu.appID.valueFrom.secretKeyRef.key", "appkey");
                                module74(u, "spec.feishu.appID.valueFrom.secretKeyRef.name", L);
                                module74(u, "spec.feishu.appSecret.valueFrom.secretKeyRef.name", L);
                                module74(u, "spec.feishu.appSecret.valueFrom.secretKeyRef.key", "appsecret");
                                module74(l, "spec.feishu.chatbot.webhook.valueFrom.secretKeyRef.key", "webhook");
                                module74(l, "spec.feishu.chatbot.webhook.valueFrom.secretKeyRef.name", L);
                                module74(l, "spec.feishu.chatbot.secret.valueFrom.secretKeyRef.key", "chatbotsecret");
                                module74(l, "spec.feishu.chatbot.secret.valueFrom.secretKeyRef.name", L);
                                if (!c.appkey) {
                                    module242(u, "spec.feishu.appID");
                                }
                                if (!c.appsecret) {
                                    module242(u, "spec.feishu.appSecret");
                                }
                                s = module26(u, "spec.feishu");
                                if (module63(s)) {
                                    module242(u, "spec.feishu");
                                }
                                if (!c.webhook) {
                                    module242(l, "spec.feishu.chatbot.webhook");
                                }
                                if (!c.chatbotsecret) {
                                    module242(l, "spec.feishu.chatbot.secret");
                                }
                                if (module63(module26(l, "spec.feishu.chatbot.keywords"))) {
                                    module242(l, "spec.feishu.chatbot.keywords");
                                }
                                if (module63(module26(l, "spec.feishu.chatbot"))) {
                                    module242(l, "spec.feishu.chatbot");
                                }
                                a.next = 23;
                                return e.getResource();
                            case 23:
                                f = a.sent;
                                d = f.isExitConfig;
                                p = f.isExitReceiver;
                                m = f.isExitSecret;
                                if (!d) {
                                    a.next = 32;
                                    break;
                                }
                                a.next = 30;
                                return e.configStore.update({
                                    name: M
                                }, u);
                            case 30:
                                a.next = 35;
                                break;
                            case 32:
                                module242(u, "metadata.resourceVersion");
                                a.next = 35;
                                return e.configStore.create(u);
                            case 35:
                                if (!p) {
                                    a.next = 40;
                                    break;
                                }
                                a.next = 38;
                                return e.receiverStore.update({
                                    name
                                }, l);
                            case 38:
                                a.next = 43;
                                break;
                            case 40:
                                module74(l, "spec.feishu.enabled", true);
                                a.next = 43;
                                return e.receiverStore.create(l);
                            case 43:
                                if (!m) {
                                    a.next = 48;
                                    break;
                                }
                                a.next = 46;
                                return e.secretStore.update({
                                    name: L
                                }, module74(e.secretTemplate, "data", c));
                            case 46:
                                a.next = 50;
                                break;
                            case 48:
                                a.next = 50;
                                return e.secretStore.create(module74(e.secretTemplate, "data", c));
                            case 50:
                                a.next = 52;
                                return e.fetchData();
                            case 52:
                                module240.success({
                                    content: t("UPDATE_SUCCESSFUL"),
                                    duration: 1000
                                });
                            case 53:
                            case "end":
                                return a.stop();
                        }
                    }
                }, a);
            }));
            return function(e) {
                return a.apply(this, arguments);
            };
        })();
        e.onFormClose = function() {
            e.setState({
                formData: module136(e.formData)
            });
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
                const { isLoading, formData, noConfig } = state;
                return module553.default.createElement("div", null, module553.default.createElement(module1078, {
                    type: "feishu"
                }), module553.default.createElement(module790, {
                    loading: isLoading
                }, module553.default.createElement(module1707, {
                    data: formData,
                    noConfig,
                    onCancel: this.onFormClose,
                    onSubmit: this.handleSubmit,
                    onVerify: this.handleVerify,
                    getVerifyFormTemplate: this.getVerifyFormTemplate,
                    isSubmitting: this.receiverStore.isSubmitting
                })));
            }
        },
        {
            key: "configFormTemplate",
            get: function() {
                return module435.notificationconfigs({
                    name: M
                });
            }
        },
        {
            key: "receiverFormTemplate",
            get: function() {
                return module435.notificationreceivers({
                    name,
                    type: "feishu"
                });
            }
        },
        {
            key: "secretTemplate",
            get: function() {
                return module435.globalsecret({
                    name: L
                });
            }
        }
    ]);
    return r;
})(module553.Component)) || i;
export default x;
