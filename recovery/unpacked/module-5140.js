import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { observer } from "./module-239.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module242 from "./module-242.js";
import module136 from "./module-136.js";
import module240 from "./module-240.js";
import Module790 from "./module-790.js";
import Module1706 from "./module-1706.js";
import Module1078 from "./module-1078.js";
import module889 from "./module-889.js";
import module920 from "./module-920.js";
import { safeBtoa } from "./module-440.js";
import module435 from "./module-435.js";
let o;
const O = "global-webhook-receiver";
const _ = "global-webhook-config-secret";
const A = observer(o = ((Component_1)=>{
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
        e.receiverStore = new module889;
        e.secretStore = new module920;
        e.state = {
            formData: {
                receiver: e.receiverFormTemplate,
                secret: e.secretTemplate
            },
            formStatus: "create",
            isLoading: false,
            noConfig: true
        };
        e.formData = {
            receiver: e.receiverFormTemplate,
            secret: e.secretTemplate
        };
        e.fetchData = module44(module41.mark(function t() {
            let a;
            let r;
            let n;
            let o;
            return module41.wrap(function(t) {
                while(true){
                    switch(t.prev = t.next){
                        case 0:
                            e.setState({
                                isLoading: true
                            });
                            t.next = 3;
                            return e.receiverStore.fetchList({
                                type: "webhook"
                            });
                        case 3:
                            a = t.sent;
                            r = a.find((e)=>module26(e, "name") === O);
                            if (module63(r)) {
                                t.next = 12;
                                break;
                            }
                            t.next = 8;
                            return e.secretStore.fetchList({
                                name: _,
                                type: "webhook"
                            });
                        case 8:
                            n = t.sent;
                            o = module26(n, "[0].data", {});
                            e.formData = {
                                receiver: module26(r, "_originData", e.receiverFormTemplate),
                                secret: module74(e.secretTemplate, "data", o)
                            };
                            e.setState({
                                formData: module136(e.formData),
                                formStatus: "update",
                                noConfig: module63(r)
                            });
                        case 12:
                            e.setState({
                                isLoading: false
                            });
                        case 13:
                        case "end":
                            return t.stop();
                    }
                }
            }, t);
        }));
        e.getVerifyFormTemplate = function(e) {
            const t = module136(e);
            const { receiver, secret } = t;
            const n = module26(receiver, 'metadata.annotations["kubesphere.io/verify-type"]');
            const u = module26(receiver, "spec.webhook.httpConfig.basicAuth.username");
            const o = module26(secret, "data", {});
            const { password, token } = o;
            module242(receiver, "spec.webhook.httpConfig.bearerToken");
            module242(receiver, "spec.webhook.httpConfig.basicAuth");
            if (n === "basic" && password) {
                module74(receiver, "spec.webhook.httpConfig.basicAuth.password.value", password);
                module74(receiver, "spec.webhook.httpConfig.basicAuth.username", u);
            }
            if (n === "token" && token) {
                module74(receiver, "spec.webhook.httpConfig.bearerToken.value", token);
            }
            module242(receiver, "spec.webhook.alertSelector");
            return {
                receiver
            };
        };
        e.handleSubmit = async (r)=>{
            let n;
            let o;
            let l;
            let i;
            let c;
            let s;
            let f;
            let d;
            let p;
            let content;
            n = module136(r);
            o = n.receiver;
            l = n.secret;
            i = e.state.formStatus;
            c = module26(o, 'metadata.annotations["kubesphere.io/verify-type"]');
            s = module26(o, "spec.webhook.httpConfig.basicAuth.username");
            f = safeBtoa(module26(l, "data.password"));
            d = safeBtoa(module26(l, "data.token"));
            p = {};
            module242(o, "spec.webhook.httpConfig.bearerToken");
            module242(o, "spec.webhook.httpConfig.basicAuth");
            if (c === "basic") {
                module74(p, "password", f);
                module74(o, "spec.webhook.httpConfig.basicAuth.username", s);
                module74(o, "spec.webhook.httpConfig.basicAuth.password.valueFrom.secretKeyRef.key", "password");
                module74(o, "spec.webhook.httpConfig.basicAuth.password.valueFrom.secretKeyRef.name", _);
            }
            if (c === "token") {
                module74(p, "token", d);
                module74(o, "spec.webhook.httpConfig.bearerToken.valueFrom.secretKeyRef.key", "token");
                module74(o, "spec.webhook.httpConfig.bearerToken.valueFrom.secretKeyRef.name", _);
            }
            if (!(i !== "create")) {
                module74(o, "spec.webhook.enabled", true);
                await e.secretStore.create(module74(e.secretTemplate, "data", p));
                await e.receiverStore.create(o);
                content = t("CREATE_SUCCESSFUL");
            } else {
                await e.secretStore.update({
                    name: _
                }, module74(e.secretTemplate, "data", p));
                await e.receiverStore.update({
                    name: O
                }, o);
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
                return <div><Module1078 type="webhook"/><Module790 loading={isLoading}><Module1706 data={formData} noConfig={noConfig} onCancel={this.onFormClose} onSubmit={this.handleSubmit} getVerifyFormTemplate={this.getVerifyFormTemplate} isSubmitting={this.receiverStore.isSubmitting}/></Module790></div>;
            }
        },
        {
            key: "receiverFormTemplate",
            get: function() {
                return module435.notificationreceivers({
                    name: O,
                    type: "webhook"
                });
            }
        },
        {
            key: "secretTemplate",
            get: function() {
                return module435.globalsecret({
                    name: _
                });
            }
        }
    ]);
    return r;
})(Component)) || o;
export default A;
