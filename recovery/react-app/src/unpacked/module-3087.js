import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-30.js";
import "./module-16.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-38.js";
import "./module-32.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "./module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module242 from "./module-242.js";
import module136 from "./module-136.js";
import module240 from "./module-240.js";
import Module790 from "components/Base/Panel";
import Module1706 from "components/Forms/Notification/WebhookForm";
import module889 from "stores/notification/receiver";
import module920 from "stores/notification/secret";
import { safeBtoa } from "utils/base64";
import module435 from "utils/form.templates";
import module1014 from "./module-1014.js";
let u;
let c;
let s;
const w = observer((s = c = ((Component_1)=>{
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
            isLoading: false,
            noConfig: true
        };
        e.formTemplate = {
            receiver: e.receiverFormTemplate,
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
                }
                if (!module63(a)) {
                    module74(e.formTemplate, "secret", a);
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
        e.getVerifyFormTemplate = function(e) {
            const t = module136(e);
            const { receiver, secret } = t;
            const n = module26(receiver, 'metadata.annotations["kubesphere.io/verify-type"]');
            const l = module26(receiver, "spec.webhook.httpConfig.basicAuth.username");
            const o = module26(secret, "data", {});
            const { password, token } = o;
            module242(receiver, "spec.webhook.httpConfig.bearerToken");
            module242(receiver, "spec.webhook.httpConfig.basicAuth");
            if (n === "basic" && password) {
                module74(receiver, "spec.webhook.httpConfig.basicAuth.password.value", password);
                module74(receiver, "spec.webhook.httpConfig.basicAuth.username", l);
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
            let l;
            let u;
            let c;
            let s;
            let i;
            let content;
            let d;
            let p;
            let m;
            n = module136(r);
            l = n.receiver;
            u = n.secret;
            c = e.secretTemplate;
            s = module26(l, 'metadata.annotations["kubesphere.io/verify-type"]');
            i = module26(l, "spec.webhook.httpConfig.basicAuth.username");
            module242(l, "spec.webhook.httpConfig.bearerToken");
            module242(l, "spec.webhook.httpConfig.basicAuth");
            if (s === "basic") {
                module74(c, "data.password", safeBtoa(module26(u, "data.password")));
                module74(l, "spec.webhook.httpConfig.basicAuth.username", i);
                module74(l, "spec.webhook.httpConfig.basicAuth.password.valueFrom.secretKeyRef.key", "password");
                module74(l, "spec.webhook.httpConfig.basicAuth.password.valueFrom.secretKeyRef.name", e.secretName);
            }
            if (s === "token") {
                module74(c, "data.token", safeBtoa(module26(u, "data.token")));
                module74(l, "spec.webhook.httpConfig.bearerToken.valueFrom.secretKeyRef.key", "token");
                module74(l, "spec.webhook.httpConfig.bearerToken.valueFrom.secretKeyRef.name", e.secretName);
            }
            d = await e.getResource();
            p = d.isExitReceiver;
            m = d.isExitSecret;
            if (p) {
                await e.receiverStore.update({
                    name: e.receiverName,
                    user: globals.user.username
                }, l);
                content = t("UPDATE_SUCCESSFUL");
            } else {
                module74(l, "spec.webhook.enabled", true);
                e.receiverStore.create(l, {
                    name: e.receiverName,
                    user: globals.user.username
                });
                content = t("CREATE_SUCCESSFUL");
            }
            if (m) {
                await e.secretStore.update({
                    name: e.secretName,
                    user: globals.user.username
                }, c);
            } else {
                await e.secretStore.create(c, {
                    name: e.secretName,
                    user: globals.user.username
                });
            }
            module240.success({
                content,
                duration: 1000
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
                const formRef = this.props.formRef;
                const state = this.state;
                const { formData, isValidating, isLoading, noConfig } = state;
                return <Module790 loading={isLoading} className={module1014.panel}><Module1706 noConfig={noConfig} formRef={formRef} user={globals.user.username} wrapperClassName={module1014.wrapper} data={formData} onChange={this.handleFormChange} getVerifyFormTemplate={this.getVerifyFormTemplate} isValidating={isValidating} hideFooter/></Module790>;
            }
        },
        {
            key: "receiverName",
            get: function() {
                return `${globals.user.username}-webhook-receiver`;
            }
        },
        {
            key: "secretName",
            get: function() {
                return `${globals.user.username}-webhook-secret`;
            }
        },
        {
            key: "name",
            get: function() {
                return "webhook";
            }
        },
        {
            key: "type",
            get: function() {
                return "webhook";
            }
        },
        {
            key: "receiverFormTemplate",
            get: function() {
                return module435.notificationreceivers({
                    name: this.receiverName,
                    type: this.type
                });
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
export default w;
