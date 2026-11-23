import "unpacked/module-15.js";
import "unpacked/module-6.js";
import "unpacked/module-86.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-48.js";
import "unpacked/module-320.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module801 from "unpacked/module-801.js";
import module247 from "unpacked/module-247.js";
import module63 from "unpacked/module-63.js";
import module60 from "unpacked/module-60.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import { Mention, MentionsInput } from "unpacked/module-5774.js";
import module186 from "unpacked/module-186.js";
import Module788 from "components/Base/Modal";
import module322 from "stores/user";
import module855 from "unpacked/module-855.js";
let l;
let u;
let o;
let i;
let c;
const w = observer((c = i = ((Component_1)=>{
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
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleMessageChange = function(e) {
            t.setState({
                value: e.target.value
            });
        };
        t.handleMessageSubmitter = function() {
            const submitter_1 = module247((t.state.value.match(/@([\w-.]*)?/g) || []).map((e)=>e.slice(1)));
            t.setState({
                submitter: submitter_1
            });
        };
        t.getDefaultData = function() {
            const edittingData = t.props.edittingData;
            let a = "";
            let submitter_1 = [];
            const n = module14.toJS(edittingData);
            if (!(module63(n) || module63(n.data) || !module60(n.data))) {
                n.data.forEach((e)=>{
                    if (e.key === "message") {
                        a = e.value.value;
                    }
                    if (e.key === "submitter") {
                        submitter_1 = e.value.value.split(", ");
                    }
                });
            }
            return {
                value: a,
                submitter: submitter_1
            };
        };
        module65(t, "fetchUsers", o, module88(t));
        t.getUsers = function() {
            const t_props = t.props;
            const { devops, cluster } = t_props;
            t.setState({
                loading: true
            });
            t.memberStore.fetchList({
                devops,
                cluster
            }).then((e)=>{
                t.setState({
                    loading: false
                });
                if (module63(e)) {
                    return [];
                }
                return e.map((e)=>({
                        id: e.username,
                        display: e.username,
                        sort: e.username.indexOf(module14.toJS(t.query))
                    })).sort((e, t)=>{
                    if (e.sort >= 0 && t.sort >= 0) {
                        return e.sort - t.sort;
                    }
                    return t.sort - e.sort;
                });
            }).then(t.callback);
        };
        t.handleOk = function() {
            t.props.onAddStep({
                name: "input",
                arguments: [
                    {
                        key: "message",
                        value: {
                            isLiteral: true,
                            value: t.state.value
                        }
                    },
                    {
                        key: "submitter",
                        value: {
                            isLiteral: true,
                            value: t.state.submitter.join(", ")
                        }
                    }
                ]
            });
        };
        t.memberStore = new module322;
        const n = t.getDefaultData();
        const { value, submitter } = n;
        t.state = {
            loading: false,
            value,
            submitter
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel } = props;
                return <Module788 width={680} bodyClassName={module855.body} onCancel={onCancel} onOk={this.handleOk} visible={visible} closable={false} title={t("input")}><module186.Alert type="info" icon="information" className={module855.info} message={t("INPUT_DESC")}/><module186.Form data={this.formData} ref={this.formRef}><module186.Form.Item label={t("MESSAGE")} desc={t("INPUT_MESSAGE_DESC")} rules={[
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]}><MentionsInput className="mention-input" value={this.state.value} onChange={this.handleMessageChange} onBlur={this.handleMessageSubmitter} placeholder={t("@somebody to help review")}><Mention data={this.fetchUsers} loading={this.state.loading} type="user" appendSpaceOnAdd displayTransform={function(e) {
                    return `@${e}`;
                }} markup="@__id__ "/></MentionsInput></module186.Form.Item></module186.Form></Module788>;
            }
        }
    ]);
    return r;
})(Component), i.propTypes = {
    name: module1.string
}, i.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {}
}, u = c, o = module49(u.prototype, "fetchUsers", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t, a) {
            if (t) {
                if (!_this.debounced) {
                    _this.debounced = module801(_this.getUsers, 300);
                }
                _this.query = t;
                _this.callback = a;
                _this.debounced();
            }
        };
    }
}), l = u)) || l;
export default w;
