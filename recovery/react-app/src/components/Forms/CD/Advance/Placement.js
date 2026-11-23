import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-138.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import module31 from "unpacked/module-31.js";
import "utils/babel-helpers/asyncToGenerator";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import module186 from "unpacked/module-186.js";
import module3 from "unpacked/module-3.js";
import module791 from "components/Base/Text";
import module829 from "components/Forms/Base/Confirm";
import module136 from "unpacked/module-136.js";
import module26 from "unpacked/module-26.js";
import module241 from "unpacked/module-241.js";
import module74 from "unpacked/module-74.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import * as module553 from "unpacked/module-553.js";
import module439 from "stores/project";
import { inCluster2Default, showNameAndAlias } from "utils/index";
import module2652 from "unpacked/module-2652.js";
let c;
let s;
let i;
let f;
const x = observer((s = ((e)=>{
    module55(l, e);
    var n = ((e)=>{
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
    })(l);
    function l(...r_1) {
        let e;
        module36(this, l);
        e = n.call(this, ...r_1);
        e.state = {
            showForm: false,
            initializing: true,
            oldFormDate: {},
            name: ""
        };
        module65(e, "formData", i, module88(e));
        e.formRef = module553.default.createRef();
        e.cdStore = e.props.store;
        e.projectStore = new module439;
        e.fetchNamespaces = async function t() {
            let a;
            let r;
            let n;
            const l = arguments;
            a = l.length > 0 && l[0] !== undefined ? l[0] : {};
            r = module26(e.formData, `${e.prefix}.name`, "");
            n = inCluster2Default(r);
            await e.projectStore.fetchList({
                ...a,
                cluster: n,
                type: "user"
            });
        };
        e.handleClusterChange = function(t) {
            e.fetchNamespaces();
            e.setState({
                name: t
            });
            const server = e.clusters.find((e)=>e.value === t).server;
            module74(e.formData, `${e.prefix}.server`, server);
            module74(e.formData, `${e.prefix}.namespace`, "");
        };
        e.handleSubmit = function() {
            const current = e.formRef.current;
            if (current) {
                current.validate(function() {
                    Object.assign(e.props.formData, {
                        ...e.formData
                    });
                    e.setState({
                        showForm: false,
                        oldFormDate: module14.toJS(e.formData)
                    });
                });
            }
        };
        e.showForm = function() {
            e.setState({
                showForm: true
            });
        };
        module65(e, "hideForm", f, module88(e));
        e.projectOptionRenderer = function(e) {
            return module553.default.createElement("span", {
                className: module2652.option
            }, e.isFedManaged ? module553.default.createElement("img", {
                className: module2652.indicator,
                src: "/assets/cluster.svg"
            }) : module553.default.createElement(module186.Icon, {
                name: "project"
            }), e.label, e.isFedManaged && module553.default.createElement(module186.Tooltip, {
                content: t("FEDPROJECT_CANNOT_DEPLOY_APP_TIP")
            }, module553.default.createElement(module186.Icon, {
                className: module2652.tip,
                name: "question"
            })));
        };
        return e;
    }
    module37(l, [
        {
            key: "componentDidMount",
            value: function() {
                this.init();
            }
        },
        {
            key: "init",
            value: async function() {
                let t;
                let a;
                let r;
                let n;
                let l;
                let u;
                this.setState({
                    initializing: true
                });
                t = this.formData[`${this.prefix}`] || {};
                a = t.cluster;
                r = t.server;
                n = t.namespace;
                await this.fetchClusters();
                if (a) {
                    if (!r && a) {
                        l = this.clusters.find((e)=>e.value === a);
                        module74(this.formData, `${this.prefix}.name`, module26(this.clusters, l.value));
                        module74(this.formData, `${this.prefix}.server`, module26(this.clusters, l.server));
                    }
                } else {
                    module74(this.formData, `${this.prefix}.name`, module26(this.clusters, "[0].value"));
                    module74(this.formData, `${this.prefix}.server`, module26(this.clusters, "[0].server"));
                }
                await this.fetchNamespaces();
                if (!n) {
                    u = this.namespaces.find((e)=>!e.disabled) || {};
                    module74(this.formData, `${this.prefix}.namespace`, u.value || "");
                }
                Object.assign(this.props.formData, this.formData);
                this.setState({
                    initializing: false,
                    oldFormDate: module136(module14.toJS(this.formData))
                });
            }
        },
        {
            key: "fetchClusters",
            value: async function() {
                let t;
                t = this.props.cluster;
                await this.cdStore.getClustersList(t);
            }
        },
        {
            key: "renderPlacement",
            value: function() {
                const e = this.props.formData[`${this.prefix}`] || {};
                const a = inCluster2Default(e.name);
                return module553.default.createElement("div", {
                    className: module2652.placement
                }, module553.default.createElement(module791, {
                    icon: "cluster",
                    title: showNameAndAlias(a, "cluster"),
                    description: t("CLUSTER")
                }), module553.default.createElement(module791, {
                    icon: "project",
                    title: showNameAndAlias(e.namespace, "project", {
                        cluster: a
                    }),
                    description: t("PROJECT")
                }), module553.default.createElement(module186.Icon, {
                    className: module2652.icon,
                    name: "chevron-down",
                    size: 20
                }));
            }
        },
        {
            key: "renderForm",
            value: function() {
                return module553.default.createElement("div", {
                    className: module2652.form
                }, module553.default.createElement(module186.Form, {
                    ref: this.formRef,
                    type: "inner",
                    data: this.formData
                }, module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, {
                    label: t("CLUSTER")
                }, module553.default.createElement(module186.Select, {
                    name: `${this.prefix}.name`,
                    key: this.state.name,
                    placeholder: " ",
                    options: this.clusters,
                    onChange: this.handleClusterChange,
                    prefixIcon: module553.default.createElement(module186.Icon, {
                        name: "cluster",
                        size: 16
                    }),
                    disabled: !globals.app.isMultiCluster,
                    showTip: true
                }))), module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, {
                    label: t("PROJECT"),
                    rules: [
                        {
                            required: true,
                            message: t("PROJECT_NOT_SELECT_DESC")
                        }
                    ]
                }, module553.default.createElement(module186.Select, {
                    name: `${this.prefix}.namespace`,
                    placeholder: " ",
                    options: this.namespaces,
                    pagination: module241(this.projectStore.list, [
                        "page",
                        "limit",
                        "total"
                    ]),
                    isLoading: this.projectStore.list.isLoading,
                    onFetch: this.fetchNamespaces,
                    valueRenderer: this.projectOptionRenderer,
                    optionRenderer: this.projectOptionRenderer,
                    searchable: true,
                    clearable: true
                }))))), module553.default.createElement(module829, {
                    className: module2652.confirm,
                    onOk: this.handleSubmit,
                    onCancel: this.hideForm
                }));
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { showForm, initializing } = state;
                if (showForm) {
                    return this.renderForm();
                }
                const n = module26(this.formData, `${this.prefix}.namespace`, "");
                return module553.default.createElement("div", {
                    className: module3(module2652.wrapper, module31({}, module2652.expand, showForm)),
                    onClick: this.showForm
                }, n ? this.renderPlacement() : module553.default.createElement("div", {
                    className: module2652.placeholder
                }, initializing ? module553.default.createElement(module186.Loading, {
                    className: "text-center"
                }) : t("PROJECT_NOT_SELECT_DESC")));
            }
        },
        {
            key: "prefix",
            get: function() {
                return `${this.props.prefix}`;
            }
        },
        {
            key: "clusters",
            get: function() {
                return this.cdStore.clustersList.map((e)=>({
                        label: showNameAndAlias(inCluster2Default(e.name), "cluster"),
                        value: e.name,
                        server: e.server
                    }));
            }
        },
        {
            key: "namespaces",
            get: function() {
                return this.projectStore.list.data.filter((e)=>e.status !== "Terminating").map((e)=>({
                        label: showNameAndAlias(e),
                        value: e.name,
                        disabled: e.isFedManaged || e.isFedHostNamespace,
                        isFedManaged: e.isFedManaged || e.isFedHostNamespace
                    }));
            }
        }
    ]);
    return l;
})(module553.Component), i = module49(s.prototype, "formData", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return {};
    }
}), module49(s.prototype, "clusters", [
    module14.computed
], Object.getOwnPropertyDescriptor(s.prototype, "clusters"), s.prototype), module49(s.prototype, "namespaces", [
    module14.computed
], Object.getOwnPropertyDescriptor(s.prototype, "namespaces"), s.prototype), f = module49(s.prototype, "hideForm", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.setState({
                showForm: false
            }, function() {
                _this.formData = _this.state.oldFormDate;
                Object.assign(_this.props.formData, {
                    ..._this.formData
                });
            });
        };
    }
}), c = s)) || c;
export default x;
