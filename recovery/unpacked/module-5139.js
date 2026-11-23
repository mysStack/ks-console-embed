import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-30.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-38.js";
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
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module242 from "./module-242.js";
import module136 from "./module-136.js";
import module240 from "./module-240.js";
import Module790 from "./module-790.js";
import Module1705 from "./module-1705.js";
import Module1078 from "./module-1078.js";
import module1079 from "./module-1079.js";
import module889 from "./module-889.js";
import module920 from "./module-920.js";
import { safeBtoa } from "./module-440.js";
import module435 from "./module-435.js";
let l;
const name = "global-slack-receiver";
const R = "global-slack-config-token";
const M = observer(l = ((Component_1)=>{
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
            formStatus: "create",
            isLoading: false,
            noConfig: true
        };
        e.formData = {
            config: e.configFormTemplate,
            receiver: e.receiverFormTemplate,
            secret: e.secretTemplate
        };
        e.fetchData = module44(module41.mark(function t() {
            let a;
            let config;
            let n;
            let l;
            let i;
            let c;
            return module41.wrap(function(t) {
                while(true){
                    switch(t.prev = t.next){
                        case 0:
                            e.setState({
                                isLoading: true
                            });
                            t.next = 3;
                            return e.configStore.fetchList({
                                type: "slack"
                            });
                        case 3:
                            a = t.sent;
                            config = a.find((e)=>module26(e, "metadata.name") === "default-slack-config");
                            if (module63(config)) {
                                t.next = 14;
                                break;
                            }
                            t.next = 8;
                            return Promise.all([
                                e.receiverStore.fetchList({
                                    name,
                                    type: "slack"
                                }),
                                e.secretStore.fetchList({
                                    name: R,
                                    type: "slack"
                                })
                            ]);
                        case 8:
                            n = t.sent;
                            l = module96(n, 2);
                            i = l[0];
                            c = l[1];
                            e.formData = {
                                config,
                                receiver: module74(e.receiverFormTemplate, "spec", module26(i, "[0].spec", {})),
                                secret: module74(e.secretTemplate, "data", module26(c, "[0].data", {}))
                            };
                            e.setState({
                                formData: module136(e.formData),
                                formStatus: "update",
                                noConfig: module63(i)
                            });
                        case 14:
                            e.setState({
                                isLoading: false
                            });
                        case 15:
                        case "end":
                            return t.stop();
                    }
                }
            }, t);
        }));
        e.getVerifyFormTemplate = function(e) {
            const t = module136(e);
            const { config, receiver, secret } = t;
            module74(config, "spec.slack.slackTokenSecret.value", module26(secret, "data.token"));
            module242(receiver, "spec.slack.alertSelector");
            module242(config, "spec.slack.slackTokenSecret.valueFrom");
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
            let c;
            let s;
            let content;
            n = module136(r);
            o = n.config;
            l = n.receiver;
            i = n.secret;
            c = e.state.formStatus;
            s = safeBtoa(module26(i, "data.token"));
            module74(o, "spec.slack.slackTokenSecret.valueFrom.secretKeyRef.key", "token");
            module74(o, "spec.slack.slackTokenSecret.valueFrom.secretKeyRef.name", R);
            module74(i, "data.token", s);
            if (!(c !== "create")) {
                module74(l, "spec.slack.enabled", true);
                await e.configStore.create(o);
                await e.secretStore.create(i);
                await e.receiverStore.create(l);
                content = t("CREATE_SUCCESSFUL");
            } else {
                module242(i, "metadata.resourceVersion");
                await e.secretStore.update({
                    name: R
                }, i);
                await e.receiverStore.update({
                    name
                }, l);
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
                return <div><Module1078 type="slack"/><Module790 loading={isLoading}><Module1705 data={formData} noConfig={noConfig} onCancel={this.onFormClose} onSubmit={this.handleSubmit} getVerifyFormTemplate={this.getVerifyFormTemplate} isSubmitting={this.receiverStore.isSubmitting}/></Module790></div>;
            }
        },
        {
            key: "configFormTemplate",
            get: function() {
                return module435.notificationconfigs({
                    name: "default-slack-config"
                });
            }
        },
        {
            key: "receiverFormTemplate",
            get: function() {
                return module435.notificationreceivers({
                    name,
                    type: "slack"
                });
            }
        },
        {
            key: "secretTemplate",
            get: function() {
                return module435.globalsecret({
                    name: R
                });
            }
        }
    ]);
    return r;
})(Component)) || l;
export default M;
