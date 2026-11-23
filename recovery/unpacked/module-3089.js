import "./module-15.js";
import "./module-5.js";
import "./module-187.js";
import "./module-29.js";
import "./module-6.js";
import "./module-30.js";
import "./module-16.js";
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
import module96 from "./module-96.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import module60 from "./module-60.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module242 from "./module-242.js";
import module136 from "./module-136.js";
import module240 from "./module-240.js";
import Module790 from "./module-790.js";
import Module1707 from "./module-1707.js";
import module889 from "./module-889.js";
import module920 from "./module-920.js";
import { safeBtoa } from "./module-440.js";
import module435 from "./module-435.js";
import module1014 from "./module-1014.js";
let u;
let c;
let s;
const M = observer((s = c = ((Component_1)=>{
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.receiverStore = new module889;
        e.secretStore = new module920;
        e.state = {
            formData: {},
            noConfig: true
        };
        e.formTemplate = {
            receiver: module435.notificationreceivers({
                name: e.receiverName,
                type: e.type
            }),
            secret: e.secretFormTemplate
        };
        e.fetchData = async function t() {
            e.setState({
                isLoading: true
            });
            await Promise.all([
                e.receiverStore.fetchList({
                    name: e.receiverName,
                    user: globals.user.username,
                    type: e.type
                }),
                e.secretStore.fetchList({
                    name: e.secretName,
                    user: globals.user.username
                })
            ]).then(()=>{
                const t = module14.toJS(e.receiverStore.list.data).find((t)=>module26(t, "name") === e.receiverName);
                const a = module14.toJS(e.secretStore.list.data).find((t)=>module26(t, "name") === e.secretName);
                if (!module63(t)) {
                    module74(e.formTemplate, "receiver", module26(t, "_originData", {}));
                    e.setState({
                        isExitReceiver: true
                    });
                }
                if (!module63(a)) {
                    module74(e.formTemplate, "secret", a);
                    e.setState({
                        isExitSecret: true
                    });
                }
                e.setState({
                    formData: module136(e.formTemplate),
                    isLoading: false,
                    noConfig: module63(t)
                });
            });
        };
        e.resetData = function() {
            e.setState({
                formData: module136(e.formTemplate)
            });
        };
        e.handleFormChange = function(name, value) {
            e.context.registerUpdate(e.name, {
                name,
                value
            });
        };
        e.getVerifyFormTemplate = function(e) {
            const t = {};
            const a = module136(e);
            const { receiver, secret } = a;
            const l = module26(receiver, "spec.feishu.chatbot.keywords");
            const o = module26(receiver, "spec.feishu.department");
            const u = module26(receiver, "spec.feishu.user");
            const c = module26(secret, "data", {});
            const { webhook, chatbotsecret } = c;
            if (webhook) {
                module74(t, "receiver.spec.feishu.chatbot.webhook.value", webhook);
            }
            if (chatbotsecret) {
                module74(t, "receiver.spec.feishu.chatbot.secret.value", chatbotsecret);
            }
            if (!module63(l)) {
                module74(t, "receiver.spec.feishu.chatbot.keywords", l);
            }
            if (!module63(o)) {
                module74(t, "receiver.spec.feishu.department", o);
            }
            if (!module63(u)) {
                module74(t, "receiver.spec.feishu.user", u);
            }
            return t;
        };
        e.handleVerify = function({ receiver, secret }) {
            const n = module26(receiver, "spec.feishu.chatbot.keywords");
            const l = module26(receiver, "spec.feishu.department", []);
            const o = module26(receiver, "spec.feishu.user", []);
            const u = module26(secret, "data", {});
            const { webhook, chatbotsecret } = u;
            if ([
                webhook,
                chatbotsecret,
                n
            ].every((e)=>{
                if (module60(e)) {
                    return module63(e);
                }
                return !e;
            }) && l.length < 1 && o.length < 1) {
                module240.error({
                    content: t("DINGTALK_SETTING_TIP")
                });
                return false;
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
            let isExitReceiver;
            let isExitSecret;
            a = await Promise.all([
                e.receiverStore.getResource({
                    name: e.receiverName,
                    user: globals.user.username
                }),
                e.secretStore.getResource({
                    name: e.secretName,
                    user: globals.user.username
                })
            ]);
            r = module96(a, 2);
            isExitReceiver = r[0];
            isExitSecret = r[1];
            return {
                isExitReceiver,
                isExitSecret
            };
        };
        e.handleSubmit = (()=>{
            const a = module44(module41.mark(function a(r) {
                let n;
                let l;
                let u;
                let c;
                let s;
                let i;
                let f;
                return module41.wrap(function(a) {
                    while(true){
                        switch(a.prev = a.next){
                            case 0:
                                n = module136(r);
                                l = n.receiver;
                                u = n.secret;
                                if (e.handleVerify(r)) {
                                    a.next = 3;
                                    break;
                                }
                                return a.abrupt("return", false);
                            case 3:
                                c = module26(u, "data", {});
                                Object.keys(c).forEach((e)=>{
                                    c[e] = safeBtoa(c[e]);
                                });
                                module74(l, "spec.feishu.chatbot.webhook.valueFrom.secretKeyRef.key", "webhook");
                                module74(l, "spec.feishu.chatbot.webhook.valueFrom.secretKeyRef.name", e.secretName);
                                module74(l, "spec.feishu.chatbot.secret.valueFrom.secretKeyRef.key", "chatbotsecret");
                                module74(l, "spec.feishu.chatbot.secret.valueFrom.secretKeyRef.name", e.secretName);
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
                                a.next = 15;
                                return e.getResource();
                            case 15:
                                s = a.sent;
                                i = s.isExitReceiver;
                                f = s.isExitSecret;
                                if (!i) {
                                    a.next = 23;
                                    break;
                                }
                                a.next = 21;
                                return e.receiverStore.update({
                                    name: e.receiverName,
                                    user: globals.user.username
                                }, l);
                            case 21:
                                a.next = 26;
                                break;
                            case 23:
                                module74(l, "spec.feishu.enabled", true);
                                a.next = 26;
                                return e.receiverStore.create(l, {
                                    name: e.receiverName,
                                    user: globals.user.username
                                });
                            case 26:
                                if (!f) {
                                    a.next = 31;
                                    break;
                                }
                                a.next = 29;
                                return e.secretStore.update({
                                    name: e.secretName,
                                    user: globals.user.username
                                }, module74(e.secretTemplate, "data", c));
                            case 29:
                                a.next = 33;
                                break;
                            case 31:
                                a.next = 33;
                                return e.secretStore.create(module74(e.secretTemplate, "data", c), {
                                    name: e.secretName,
                                    user: globals.user.username
                                });
                            case 33:
                                module240.success({
                                    content: t("UPDATE_SUCCESSFUL"),
                                    duration: 1000
                                });
                            case 34:
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
                const formRef = this.props.formRef;
                const state = this.state;
                const { formData, isLoading, noConfig } = state;
                return <Module790 loading={isLoading} className={module1014.panel}><Module1707 formRef={formRef} noConfig={noConfig} wrapperClassName={module1014.wrapper} data={formData} onChange={this.handleFormChange} onVerify={this.handleVerify} getVerifyFormTemplate={this.getVerifyFormTemplate} hideFooter user={globals.user.username}/></Module790>;
            }
        },
        {
            key: "receiverName",
            get: function() {
                return `${globals.user.username}-feishu-receiver`;
            }
        },
        {
            key: "secretName",
            get: function() {
                return `${globals.user.username}-feishu-config-secret`;
            }
        },
        {
            key: "name",
            get: function() {
                return "feishu";
            }
        },
        {
            key: "type",
            get: function() {
                return "feishu";
            }
        },
        {
            key: "secretTemplate",
            get: function() {
                return module435.globalsecret({
                    name: this.secretName
                });
            }
        }
    ]);
    return r;
})(Component), c.contextTypes = {
    registerUpdate: module1.func
}, u = s)) || u;
export default M;
