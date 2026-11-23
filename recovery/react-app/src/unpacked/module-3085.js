import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import "./module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module74 from "./module-74.js";
import module26 from "./module-26.js";
import module242 from "./module-242.js";
import module136 from "./module-136.js";
import module63 from "./module-63.js";
import module240 from "./module-240.js";
import Module790 from "components/Base/Panel";
import Module1705 from "components/Forms/Notification/SlackForm";
import module435 from "utils/form.templates";
import module889 from "stores/notification/receiver";
import module1014 from "./module-1014.js";
let o;
let u;
let c;
const I = observer((c = u = ((Component_1)=>{
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
        e.state = {
            formData: {},
            isLoading: false,
            noConfig: true
        };
        e.formTemplate = {
            receiver: module435.notificationreceivers({
                name: e.receiverName,
                type: e.type
            })
        };
        e.fetchData = function() {
            e.setState({
                isLoading: true
            });
            e.receiverStore.fetchList({
                name: e.receiverName,
                user: globals.user.username,
                type: e.type
            }).then(()=>{
                const t = module14.toJS(e.receiverStore.list.data).find((t)=>module26(t, "name") === e.receiverName);
                if (!module63(t)) {
                    module74(e.formTemplate, "receiver", module26(t, "_originData", {}));
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
        e.getResource = async function t() {
            let isExitReceiver;
            isExitReceiver = await e.receiverStore.getResource({
                name: e.receiverName,
                user: globals.user.username
            });
            return {
                isExitReceiver
            };
        };
        e.handleSubmit = async (r)=>{
            let n;
            let o;
            let content;
            n = module136(r);
            o = n.receiver;
            if ((await e.getResource()).isExitReceiver) {
                await e.receiverStore.update({
                    name: e.receiverName,
                    user: globals.user.username
                }, o);
                content = t("UPDATE_SUCCESSFUL");
            } else {
                module74(o, "spec.slack.enabled", true);
                await e.receiverStore.create(o, {
                    name: e.receiverName,
                    user: globals.user.username
                });
                content = t("CREATE_SUCCESSFUL");
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
                const { formData, isLoading, noConfig } = state;
                return <Module790 loading={isLoading} className={module1014.panel}><Module1705 noConfig={noConfig} wrapperClassName={module1014.wrapper} formRef={formRef} data={formData} hideFooter user={globals.user.username} onChange={this.handleFormChange} getVerifyFormTemplate={this.getVerifyFormTemplate}/></Module790>;
            }
        },
        {
            key: "receiverName",
            get: function() {
                return `${globals.user.username}-slack-receiver`;
            }
        },
        {
            key: "name",
            get: function() {
                return "slack";
            }
        },
        {
            key: "type",
            get: function() {
                return "slack";
            }
        }
    ]);
    return r;
})(Component), u.contextTypes = {
    registerUpdate: module1.func
}, o = c)) || o;
export default I;
