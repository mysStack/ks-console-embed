import "./module-15.js";
import "./module-5.js";
import "./module-187.js";
import "./module-29.js";
import "./module-6.js";
import "./module-30.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module96 from "./module-96.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { observer } from "./module-239.js";
import module60 from "./module-60.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module242 from "./module-242.js";
import module136 from "./module-136.js";
import module240 from "./module-240.js";
import Module790 from "./module-790.js";
import Module1702 from "./module-1702.js";
import Module1078 from "./module-1078.js";
import module1079 from "./module-1079.js";
import module889 from "./module-889.js";
import module920 from "./module-920.js";
import { safeBtoa } from "./module-440.js";
import module435 from "./module-435.js";
let l;
const R = "default-dingtalk-config";
const name = "global-dingtalk-receiver";
const w = "global-dingtalk-config-secret";
const L = observer(l = ((Component_1)=>{
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.configStore = new module1079;
        e.receiverStore = new module889;
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
            let l;
            let i;
            let c;
            e.setState({
                isLoading: true
            });
            a = await Promise.all([
                e.configStore.fetchList({
                    type: "dingtalk"
                }),
                e.receiverStore.fetchList({
                    name,
                    type: "dingtalk"
                }),
                e.secretStore.fetchList({
                    name: w,
                    type: "dingtalk"
                })
            ]);
            r = module96(a, 3);
            n = r[0];
            l = r[1];
            i = r[2];
            c = n.find((e)=>module26(e, "metadata.name") === R);
            e.formData = {
                config: c || e.configFormTemplate,
                receiver: module74(e.receiverFormTemplate, "spec", module26(l, "[0].spec", {})),
                secret: module74(e.secretTemplate, "data", module26(i, "[0].data", {}))
            };
            e.setState({
                formData: module136(e.formData),
                noConfig: module63(l)
            });
            e.setState({
                isLoading: false
            });
        };
        e.getVerifyFormTemplate = function(e) {
            const t = {};
            const a = module136(e);
            const { receiver, secret } = a;
            const u = module26(receiver, "spec.dingtalk.conversation.chatids");
            const o = module26(receiver, "spec.dingtalk.chatbot.keywords");
            const l = module26(secret, "data", {});
            const { appkey, appsecret, webhook, chatbotsecret } = l;
            if (appkey) {
                module74(t, "config.spec.dingtalk.conversation.appkey.value", appkey);
            }
            if (appsecret) {
                module74(t, "config.spec.dingtalk.conversation.appsecret.value", appsecret);
            }
            if (!module63(u)) {
                module74(t, "receiver.spec.dingtalk.conversation.chatids", u);
            }
            if (webhook) {
                module74(t, "receiver.spec.dingtalk.chatbot.webhook.value", webhook);
            }
            if (chatbotsecret) {
                module74(t, "receiver.spec.dingtalk.chatbot.secret.value", chatbotsecret);
            }
            if (!module63(o)) {
                module74(t, "receiver.spec.dingtalk.chatbot.keywords", o);
            }
            return t;
        };
        e.handleVerify = function({ receiver, secret }) {
            const n = module26(receiver, "spec.dingtalk.chatbot.keywords");
            const u = module26(receiver, "spec.dingtalk.conversation.chatids");
            const o = module26(secret, "data", {});
            const { appkey, appsecret, webhook, chatbotsecret } = o;
            if ([
                appkey,
                appsecret,
                u,
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
            if (appkey || appsecret || !module63(u)) {
                if (!appkey) {
                    module240.error({
                        content: t("PLEASE_ENTER_APP_KEY")
                    });
                    return false;
                }
                if (!appsecret) {
                    module240.error({
                        content: t("PLEASE_ENTER_APP_SECRET")
                    });
                    return false;
                }
                if (module63(u)) {
                    module240.error({
                        content: t("PLEASE_ENTER_CHAT_ID")
                    });
                    return false;
                }
            }
            if (webhook || chatbotsecret || !module63(n)) {
                if (!webhook) {
                    module240.error({
                        content: t("PLEASE_ENTER_WEBHOOK_URL")
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
                    name: R
                }),
                e.receiverStore.getResource({
                    name
                }),
                e.secretStore.getResource({
                    name: w
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
                let o;
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
                                o = n.config;
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
                                module74(o, "spec.dingtalk.conversation.appkey.valueFrom.secretKeyRef.key", "appkey");
                                module74(o, "spec.dingtalk.conversation.appkey.valueFrom.secretKeyRef.name", w);
                                module74(o, "spec.dingtalk.conversation.appsecret.valueFrom.secretKeyRef.key", "appsecret");
                                module74(o, "spec.dingtalk.conversation.appsecret.valueFrom.secretKeyRef.name", w);
                                module74(l, "spec.dingtalk.chatbot.webhook.valueFrom.secretKeyRef.key", "webhook");
                                module74(l, "spec.dingtalk.chatbot.webhook.valueFrom.secretKeyRef.name", w);
                                module74(l, "spec.dingtalk.chatbot.secret.valueFrom.secretKeyRef.key", "chatbotsecret");
                                module74(l, "spec.dingtalk.chatbot.secret.valueFrom.secretKeyRef.name", w);
                                if (!c.appkey) {
                                    module242(o, "spec.dingtalk.conversation.appkey");
                                }
                                if (!c.appsecret) {
                                    module242(o, "spec.dingtalk.conversation.appsecret");
                                }
                                s = module26(o, "spec.dingtalk.conversation");
                                if (module63(s)) {
                                    module242(o, "spec.dingtalk.conversation");
                                }
                                if (!c.webhook) {
                                    module242(l, "spec.dingtalk.chatbot.webhook");
                                }
                                if (!c.chatbotsecret) {
                                    module242(l, "spec.dingtalk.chatbot.secret");
                                }
                                if (module63(module26(l, "spec.dingtalk.conversation.chatids"))) {
                                    module242(l, "spec.dingtalk.conversation");
                                }
                                if (module63(module26(l, "spec.dingtalk.chatbot.keywords"))) {
                                    module242(l, "spec.dingtalk.chatbot.keywords");
                                }
                                if (module63(module26(l, "spec.dingtalk.chatbot"))) {
                                    module242(l, "spec.dingtalk.chatbot");
                                }
                                a.next = 24;
                                return e.getResource();
                            case 24:
                                f = a.sent;
                                d = f.isExitConfig;
                                p = f.isExitReceiver;
                                m = f.isExitSecret;
                                if (!d) {
                                    a.next = 38;
                                    break;
                                }
                                if (!module63(module26(l, "spec.dingtalk.conversation.chatids"))) {
                                    a.next = 34;
                                    break;
                                }
                                a.next = 32;
                                return e.configStore.delete({
                                    name: R
                                });
                            case 32:
                                a.next = 36;
                                break;
                            case 34:
                                a.next = 36;
                                return e.configStore.update({
                                    name: R
                                }, o);
                            case 36:
                                a.next = 41;
                                break;
                            case 38:
                                module242(o, "metadata.resourceVersion");
                                a.next = 41;
                                return e.configStore.create(o);
                            case 41:
                                if (!p) {
                                    a.next = 46;
                                    break;
                                }
                                a.next = 44;
                                return e.receiverStore.update({
                                    name
                                }, l);
                            case 44:
                                a.next = 49;
                                break;
                            case 46:
                                module74(l, "spec.dingtalk.enabled", true);
                                a.next = 49;
                                return e.receiverStore.create(l);
                            case 49:
                                if (!m) {
                                    a.next = 54;
                                    break;
                                }
                                a.next = 52;
                                return e.secretStore.update({
                                    name: w
                                }, module74(e.secretTemplate, "data", c));
                            case 52:
                                a.next = 56;
                                break;
                            case 54:
                                a.next = 56;
                                return e.secretStore.create(module74(e.secretTemplate, "data", c));
                            case 56:
                                a.next = 58;
                                return e.fetchData();
                            case 58:
                                module240.success({
                                    content: t("UPDATE_SUCCESSFUL"),
                                    duration: 1000
                                });
                            case 59:
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
                const { formData, isLoading, noConfig } = state;
                return <div><Module1078 type="dingtalk"/><Module790 loading={isLoading}><Module1702 data={formData} noConfig={noConfig} onCancel={this.onFormClose} onSubmit={this.handleSubmit} onVerify={this.handleVerify} getVerifyFormTemplate={this.getVerifyFormTemplate} isSubmitting={this.receiverStore.isSubmitting}/></Module790></div>;
            }
        },
        {
            key: "configFormTemplate",
            get: function() {
                return module435.notificationconfigs({
                    name: R
                });
            }
        },
        {
            key: "receiverFormTemplate",
            get: function() {
                return module435.notificationreceivers({
                    name,
                    type: "dingtalk"
                });
            }
        },
        {
            key: "secretTemplate",
            get: function() {
                return module435.globalsecret({
                    name: w
                });
            }
        }
    ]);
    return r;
})(Component)) || l;
export default L;
