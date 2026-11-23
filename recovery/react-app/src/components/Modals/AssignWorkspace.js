import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import module241 from "unpacked/module-241.js";
import module74 from "unpacked/module-74.js";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import * as module553 from "unpacked/module-553.js";
import module322 from "stores/user";
import module445 from "stores/workspace";
import { showNameAndAlias } from "utils/index";
let s;
let i;
let f;
const I = observer((f = i = ((e)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleWorkspaceChange = function(workspace) {
            module74(t.formTemplate, "metadata.annotations['kubesphere.io/creator']", "");
            t.setState({
                workspace
            }, function() {
                t.fetchMembers();
            });
        };
        t.fetchWorkspaces = async (a)=>t.workspaceStore.fetchList(a);
        t.fetchMembers = (()=>{
            const e = module44(module41.mark(function e(a) {
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                if (!t.state.workspace) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return", t.memberStore.fetchList({
                                    workspace: t.state.workspace,
                                    ...a
                                }));
                            case 2:
                                return e.abrupt("return", Promise.resolve({}));
                            case 3:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e);
            }));
            return function(t) {
                return e.apply(this, arguments);
            };
        })();
        t.state = {
            workspace: ""
        };
        t.formTemplate = {};
        t.workspaceStore = new module445;
        t.memberStore = new module322;
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchList();
            }
        },
        {
            key: "fetchList",
            value: function() {
                const props = this.props;
                const { isEdge, detail } = props;
                let r = {
                    labelSelector: "!cluster-role.kubesphere.io/edge"
                };
                if (isEdge) {
                    r = {
                        labelSelector: `cluster-role.kubesphere.io/edge=${detail.cluster}`
                    };
                }
                this.workspaceStore.fetchList(r);
            }
        },
        {
            key: "getWorkspaces",
            value: function() {
                return this.workspaceStore.list.data.map((e)=>({
                        label: showNameAndAlias(e),
                        value: e.name
                    }));
            }
        },
        {
            key: "getUsers",
            value: function() {
                return this.memberStore.list.data.map((e)=>({
                        label: e.username,
                        value: e.username
                    }));
            }
        },
        {
            key: "render",
            value: function() {
                return module553.default.createElement(module788.Form, {
                    title: t("ASSIGN_WORKSPACE"),
                    icon: "firewall",
                    width: 691,
                    data: this.formTemplate,
                    ...this.props
                }, module553.default.createElement(module186.Alert, {
                    className: "margin-b12",
                    type: "info",
                    message: t("PROJECT_ASSIGN_DESC")
                }), module553.default.createElement(module186.Form.Item, {
                    label: t("WORKSPACE"),
                    desc: t("SELECT_WORKSPACE_DESC"),
                    rules: [
                        {
                            required: true,
                            message: t("SELECT_WORKSPACE_DESC")
                        }
                    ]
                }, module553.default.createElement(module186.Select, {
                    name: "metadata.labels['kubesphere.io/workspace']",
                    onChange: this.handleWorkspaceChange,
                    options: this.getWorkspaces(),
                    pagination: module241(this.workspaceStore.list, [
                        "page",
                        "total",
                        "limit"
                    ]),
                    isLoading: this.workspaceStore.list.isLoading,
                    onFetch: this.fetchWorkspaces,
                    placeholder: " ",
                    searchable: true,
                    clearable: true
                })), module553.default.createElement(module186.Form.Item, {
                    label: t("PROJECT_ADMINISTRATOR"),
                    desc: t("PROJECT_ADMINISTRATOR_DESC")
                }, module553.default.createElement(module186.Select, {
                    name: "metadata.annotations['kubesphere.io/creator']",
                    options: this.getUsers(),
                    pagination: module241(this.memberStore.list, [
                        "page",
                        "total",
                        "limit"
                    ]),
                    isLoading: this.memberStore.list.isLoading,
                    onFetch: this.fetchMembers,
                    placeholder: " ",
                    searchable: true,
                    clearable: true
                })));
            }
        }
    ]);
    return r;
})(module553.Component), i.propTypes = {
    visible: module1.bool,
    isEdge: module1.bool,
    onOk: module1.func,
    onCancel: module1.func
}, i.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {}
}, s = f)) || s;
export default I;
