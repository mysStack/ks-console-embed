import "./module-15.js";
import "./module-84.js";
import "./module-30.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-38.js";
import "./module-32.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module788 from "./module-788.js";
import module852 from "./module-852.js";
import module791 from "./module-791.js";
import module136 from "./module-136.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module1 from "./module-1.js";
import * as module553 from "./module-553.js";
import module439 from "./module-439.js";
import module445 from "./module-445.js";
import { htmlLinkControl, showNameAndAlias } from "./module-52.js";
import module3391 from "./module-3391.js";
const T = ((e)=>{
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
        t.workspaceStore = new module445;
        t.namespaceStore = new module439;
        t.fetchData = function() {
            const cluster = t.props.cluster;
            Promise.all([
                t.workspaceStore.fetchList({
                    cluster,
                    limit: -1
                }),
                t.namespaceStore.fetchList({
                    cluster,
                    limit: -1
                })
            ]).then((e)=>{
                const a = module96(e, 2);
                const r = a[0];
                const n = a[1];
                const workspace = r.map((e)=>e.name);
                const namespace = n.map((e)=>e.name);
                t.setState({
                    workspace,
                    namespace
                });
            });
        };
        t.handleNsChange = function(nsValues) {
            t.setState({
                nsValues
            });
        };
        t.handleWsChange = function(wsValues) {
            t.setState({
                wsValues
            });
        };
        t.handleEnable = function() {
            t.setState({
                enabled: !t.state.enabled
            });
        };
        t.expression = function(values) {
            return {
                fieldExpressions: [
                    {
                        field: "Name",
                        operator: "In",
                        values
                    }
                ]
            };
        };
        t.handleOk = function() {
            const t_props = t.props;
            const { onOk, storageClassName } = t_props;
            const t_state = t.state;
            const { enabled, nsValues, wsValues, newObject, nsOpt, wsOpt } = t_state;
            const f = module26(newObject.spec, "namespaceSelector.fieldSelector", [
                t.expression([])
            ]);
            const d = module26(newObject.spec, "workspaceSelector.fieldSelector", [
                t.expression([])
            ]);
            const p = enabled ? storageClassName : `${storageClassName}-disabled`;
            module74(newObject.spec, "storageClassName", p);
            module74(f[0], "fieldExpressions[0].values", nsValues);
            module74(f[0], "fieldExpressions[0].operator", nsOpt);
            module74(d[0], "fieldExpressions[0].values", wsValues);
            module74(d[0], "fieldExpressions[0].operator", wsOpt);
            module74(newObject.spec, "namespaceSelector.fieldSelector", f);
            module74(newObject.spec, "workspaceSelector.fieldSelector", d);
            if (nsValues.length === 0) {
                delete newObject.spec.namespaceSelector;
            }
            if (wsValues.length === 0) {
                delete newObject.spec.workspaceSelector;
            }
            onOk(newObject);
        };
        t.handleNsOptChange = function(nsOpt) {
            t.setState({
                nsOpt
            });
        };
        t.handleWsOptChange = function(wsOpt) {
            t.setState({
                wsOpt
            });
        };
        t.state = {
            newObject: module136(e.detail),
            enabled: !module26(e.detail.spec, "storageClassName", "").includes("disabled"),
            workspace: [],
            namespace: [],
            nsOpt: module26(e.detail, "spec.namespaceSelector.fieldSelector[0].fieldExpressions[0].operator", "In"),
            wsOpt: module26(e.detail, "spec.workspaceSelector.fieldSelector[0].fieldExpressions[0].operator", "In"),
            nsValues: module26(e.detail, "spec.namespaceSelector.fieldSelector[0].fieldExpressions[0].values", []),
            wsValues: module26(e.detail, "spec.workspaceSelector.fieldSelector[0].fieldExpressions[0].values", [])
        };
        return t;
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
                const props = this.props;
                const { visible, onCancel, isSubmitting, shouldAddCrd } = props;
                const state = this.state;
                const { enabled, nsValues, wsValues, nsOpt, wsOpt } = state;
                return module553.default.createElement(module788, {
                    width: 960,
                    onOk: this.handleOk,
                    onCancel,
                    visible,
                    title: t("SET_AUTHORIZATION_RULES"),
                    okText: t("OK"),
                    cancelText: t("CANCEL"),
                    isSubmitting,
                    hideFooter: shouldAddCrd
                }, shouldAddCrd && module553.default.createElement(module186.Alert, {
                    type: "warning",
                    message: htmlLinkControl(t.html("AUTHORIZATION_NOT_SUPPORT"))
                }), module553.default.createElement("div", {
                    className: module3391.wrapper
                }, module553.default.createElement(module791, {
                    className: module3391.text,
                    icon: function() {
                        return module553.default.createElement("img", {
                            src: "/assets/storageclass-tree.svg",
                            style: {
                                width: "40px",
                                marginRight: "16px"
                            }
                        });
                    },
                    title: t("AUTHORIZATION_RULES"),
                    description: t("AUTHORIZATION_RULES_DESC")
                }), module553.default.createElement(module852, {
                    className: module3391.switch,
                    text: enabled ? t("ENABLED") : t("DISABLED"),
                    checked: enabled,
                    onChange: this.handleEnable
                })), module553.default.createElement("div", {
                    className: module3391.selectBox
                }, module553.default.createElement("div", {
                    className: module3391.line
                }, module553.default.createElement(module186.Select, {
                    className: module3391.labelSelect,
                    options: [
                        {
                            label: t("PROJECT"),
                            value: "namespace"
                        }
                    ],
                    defaultValue: "namespace",
                    disabled: true
                }), module553.default.createElement(module186.Select, {
                    className: module3391.operator,
                    options: this.operatorOptions,
                    onChange: this.handleNsOptChange,
                    value: nsOpt
                }), module553.default.createElement(module186.Select, {
                    multi: true,
                    className: module3391.labelSelect,
                    options: this.namespaceOptions,
                    onChange: this.handleNsChange,
                    value: nsValues
                })), module553.default.createElement("div", {
                    className: module3391.line
                }, module553.default.createElement(module186.Select, {
                    className: module3391.labelSelect,
                    options: [
                        {
                            label: t("WORKSPACE"),
                            value: "workspace"
                        }
                    ],
                    defaultValue: "workspace",
                    disabled: true
                }), module553.default.createElement(module186.Select, {
                    className: module3391.operator,
                    options: this.operatorOptions,
                    onChange: this.handleWsOptChange,
                    value: wsOpt
                }), module553.default.createElement(module186.Select, {
                    multi: true,
                    className: module3391.labelSelect,
                    options: this.workspaceOptions,
                    onChange: this.handleWsChange,
                    value: wsValues
                }))));
            }
        },
        {
            key: "namespaceOptions",
            get: function() {
                const namespace = this.state.namespace;
                const cluster = this.props.cluster;
                return namespace.map((e)=>({
                        label: showNameAndAlias(e, "project", cluster),
                        value: e
                    }));
            }
        },
        {
            key: "workspaceOptions",
            get: function() {
                return this.state.workspace.map((e)=>({
                        label: showNameAndAlias(e, "workspace"),
                        value: e
                    }));
            }
        },
        {
            key: "operatorOptions",
            get: function() {
                return [
                    {
                        label: t("OPERATOR_IN"),
                        value: "In"
                    },
                    {
                        label: t("OPERATOR_NOT_IN"),
                        value: "NotIn"
                    }
                ];
            }
        }
    ]);
    return r;
})(module553.Component);
export default T;
T.propTypes = {
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
T.defaultProps = {
    visible: false,
    isSubmitting: false,
    onOk: function() {},
    onCancel: function() {}
};
