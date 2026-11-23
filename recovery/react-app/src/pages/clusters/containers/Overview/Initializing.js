import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import * as module553 from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import module790 from "components/Base/Panel";
import module791 from "components/Base/Text";
import module842 from "components/Base/CodeEditor";
import module240 from "unpacked/module-240.js";
import { copyToClipboard } from "utils/dom";
import { trigger } from "utils/action";
import module1051 from "stores/cluster/kubekey";
import module3705 from "pages/clusters/containers/Overview/Initializing/KubeKeyCluster";
import module3710 from "unpacked/module-3710.js";
let u;
const T = inject("rootStore")(u = observer(u = trigger(u = ((e)=>{
    module55(n, e);
    var r = ((e)=>{
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...o) {
        let e;
        module36(this, n);
        e = r.call(this, ...o);
        e.kubekeyClusterStore = new module1051;
        e.websocket = e.props.rootStore.websocket;
        e.initWebsocket = function() {
            const e_props = e.props;
            const { store, match } = e_props;
            const a = store.getWatchUrl({
                name: match.params.cluster
            });
            if (a) {
                e.websocket.watch(a);
                e.disposer = module14.reaction(function() {
                    return e.websocket.message;
                }, function(e) {
                    if (e.type === "MODIFIED") {
                        store.fetchDetail(store.detail);
                    }
                });
            }
        };
        e.handleCopy = function() {
            copyToClipboard(module14.toJS(e.props.store.agent));
            module240.success({
                content: t("COPY_SUCCESSFUL")
            });
        };
        e.showEditYAML = function() {
            const e_kubekeyClusterStore = e.kubekeyClusterStore;
            e.trigger("resource.yaml.edit", {
                store: e_kubekeyClusterStore,
                detail: module14.toJS(e_kubekeyClusterStore.detail)
            });
        };
        e.rerun = function() {
            e.kubekeyClusterStore.patch(e.kubekeyClusterStore.detail, {
                spec: {
                    rerunTrigger: (new Date).getTime()
                }
            });
        };
        e.handleMenuClick = function(t, r) {
            switch(r){
                case "edit-yaml":
                    e.showEditYAML();
                    break;
                case "rerun":
                    e.rerun();
            }
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                const detail = this.props.store.detail;
                const { name, conditions } = detail;
                if (module26(conditions, "Initialized.status") === "True") {
                    this.props.store.fetchAgent({
                        cluster: name
                    });
                }
                this.initWebsocket();
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.websocket.close();
                if (this.disposer) {
                    this.disposer();
                }
            }
        },
        {
            key: "renderMenu",
            value: function() {
                return module553.default.createElement(module186.Menu, {
                    onClick: this.handleMenuClick
                }, module553.default.createElement(module186.Menu.MenuItem, {
                    key: "edit-yaml"
                }, module553.default.createElement(module186.Icon, {
                    name: "pen"
                }), " ", t("EDIT_YAML")), module553.default.createElement(module186.Menu.MenuItem, {
                    key: "rerun"
                }, module553.default.createElement(module186.Icon, {
                    name: "refresh"
                }), " ", t("RERUN")));
            }
        },
        {
            key: "render",
            value: function() {
                const store = this.props.store;
                const { detail, isAgentLoading, agent } = store;
                const { kkName, conditions, connectionType } = detail;
                if (module26(conditions, "Initialized.status") === "False") {
                    return module553.default.createElement(module790, null, module553.default.createElement("div", {
                        className: module3710.title
                    }, module553.default.createElement(module186.Loading, {
                        size: 28
                    }), module553.default.createElement(module791, {
                        title: t("CLUSTER_INIT_FAILED"),
                        description: module26(conditions, "Initialized.reason")
                    })));
                }
                if (kkName) {
                    return module553.default.createElement(module790, {
                        className: module3710.wrapper
                    }, module553.default.createElement("div", {
                        className: module3710.title
                    }, module553.default.createElement(module791, {
                        icon: "cluster",
                        title: t("CREATING_CLUSTER"),
                        description: t.html("CREATING_CLUSTER_DESC")
                    }), module553.default.createElement("div", {
                        className: module3710.action
                    }, module553.default.createElement(module186.Dropdown, {
                        theme: "dark",
                        content: this.renderMenu(),
                        placement: "bottomRight"
                    }, module553.default.createElement(module186.Button, {
                        type: "flat",
                        icon: "more"
                    })))), module553.default.createElement(module3705, {
                        name: kkName,
                        store: this.kubekeyClusterStore
                    }));
                }
                return module553.default.createElement(module790, {
                    className: module3710.wrapper
                }, module553.default.createElement("div", {
                    className: module3710.title
                }, module553.default.createElement(module186.Loading, {
                    size: 28
                }), module553.default.createElement(module791, {
                    title: t("WAIT_FOR_CLUSTER"),
                    description: t("WAIT_FOR_CLUSTER_DESC")
                })), connectionType === "proxy" && module553.default.createElement("div", {
                    className: module3710.content
                }, module553.default.createElement("div", {
                    className: module3710.card
                }, module553.default.createElement(module791, {
                    title: t.html("CLUSTER_AGENT_TIP_1")
                })), module553.default.createElement("div", {
                    className: module3710.card
                }, module553.default.createElement(module791, {
                    className: "margin-b12",
                    title: t.html("CLUSTER_AGENT_TIP_2")
                }), module553.default.createElement(module186.Button, {
                    className: module3710.copy,
                    onClick: this.handleCopy
                }, t("COPY")), module553.default.createElement(module186.Loading, {
                    spinning: isAgentLoading
                }, agent ? module553.default.createElement(module842, {
                    mode: "yaml",
                    className: module3710.editor,
                    options: this.editOptions,
                    value: agent
                }) : null)), module553.default.createElement("div", {
                    className: module3710.card
                }, module553.default.createElement(module791, {
                    title: t.html("CLUSTER_AGENT_TIP_3"),
                    description: t.html("CLUSTER_AGENT_TIP_3_DESC")
                }))), kkName && module553.default.createElement(module3705, {
                    name: kkName
                }));
            }
        },
        {
            key: "editOptions",
            get: function() {
                return {
                    width: "100%",
                    height: "100%",
                    readOnly: true
                };
            }
        }
    ]);
    return n;
})(module553.Component)) || u) || u) || u;
export default T;
