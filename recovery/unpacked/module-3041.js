import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-86.js";
import "./module-18.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-935.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module74 from "./module-74.js";
import module1366 from "./module-1366.js";
import module186 from "./module-186.js";
import module1367 from "./module-1367.js";
import module240 from "./module-240.js";
import { generateId, learnMoreTip } from "./module-52.js";
import { PATTERN_NAME } from "./module-72.js";
import module788 from "./module-788.js";
import module3045 from "./module-3045.js";
const R = {
    name: function(name) {
        return t("IN_USE_Node_NAME", {
            name
        });
    },
    IP: function(ip) {
        return t("IN_USE_Node_IP", {
            ip
        });
    }
};
const D = ((e)=>{
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.state = {
            link: "",
            loading: false,
            showLink: false,
            isCheck: true,
            formData: module1366(e.props.formTemplate || {})
        };
        e.formRef = module553.default.createRef();
        e.store = e.props.store;
        e.validator = function(t) {
            return function(a, r, n) {
                const l = t.toLocaleLowerCase();
                if (!r) {
                    return n();
                }
                const e_props = e.props;
                const { cluster, nodegroup } = e_props;
                if (a.field === l) {
                    const s = {
                        cluster,
                        ...e.state.formData
                    };
                    if (nodegroup) {
                        module74(s, "nodegroup", nodegroup);
                    }
                    e.store.createEdgeNode(s).then((e)=>{
                        if (e.status === "Failure" && e.message.indexOf(`${t}`) > -1) {
                            n({
                                field: a.field,
                                message: R[t](r)
                            });
                        } else {
                            n();
                        }
                    });
                }
            };
        };
        e.handleLink = function() {
            const e_props = e.props;
            const { cluster, nodegroup } = e_props;
            const isCheck = e.state.isCheck;
            const current = e.formRef.current;
            if (current) {
                current.validate(module44(module41.mark(function* t() {
                    let l;
                    let u;
                    let link;
                    e.setState({
                        loading: true
                    });
                    l = {
                        cluster,
                        defaultTaint: isCheck,
                        ...e.state.formData
                    };
                    if (nodegroup) {
                        module74(l, "nodegroup", nodegroup);
                    }
                    if ((u = yield e.store.createEdgeNode(l)).status !== "Failure") {
                        link = u.data;
                        e.setState({
                            link,
                            showLink: true
                        });
                    }
                    e.setState({
                        loading: false
                    });
                })));
            }
        };
        e.handleCopy = function() {
            module240.success({
                content: t("COPY_SUCCESSFUL")
            });
        };
        e.emptyLink = function() {
            if (e.state.link) {
                e.setState({
                    link: "",
                    showLink: false
                });
            }
        };
        e.renderLink = function() {
            const e_state = e.state;
            const { showLink, link } = e_state;
            const l = t.html("EDGENODE_CONFIG_COMMAND_TIP");
            if (showLink) {
                return module553.default.createElement("div", {
                    className: module3045.column
                }, module553.default.createElement(module186.Form.Item, {
                    label: module553.default.createElement(module553.default.Fragment, null, t("EDGENODE_CONFIG_COMMAND"), module553.default.createElement(module186.Tooltip, {
                        content: module553.default.createElement("span", {
                            className: module3045.installInfo
                        }, learnMoreTip(l))
                    }, module553.default.createElement(module186.Icon, {
                        className: module3045.infoIcon,
                        name: "information",
                        size: 18
                    }))),
                    desc: t("ADD_EDGE_COMMAND")
                }, module553.default.createElement("div", {
                    className: module3045.linkContainer
                }, module553.default.createElement("pre", {
                    className: module3045.link
                }, link))), module553.default.createElement(module1367.CopyToClipboard, {
                    text: link,
                    onCopy: e.handleCopy
                }, module553.default.createElement(module186.Button, null, t("COPY"))));
            }
            return null;
        };
        e.handleChangeCheck = function(isCheck) {
            e.setState({
                isCheck
            });
        };
        e.runtimeOptions = [
            {
                label: "Docker",
                value: "docker"
            },
            {
                label: "Containerd",
                value: "containerd"
            }
        ];
        e.renderEdgeWizeNodeFormItems = function() {
            return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module186.Form.Item, {
                className: module3045.runtime,
                label: t("CONTAINER_RUNTIME"),
                rules: [
                    {
                        required: true,
                        message: t("CONTAINER_RUNTIME_EMPTY_DESC")
                    }
                ]
            }, module553.default.createElement(module186.RadioGroup, {
                name: "runtime",
                defaultValue: "docker",
                wrapClassName: "radio-group-button"
            }, e.runtimeOptions.map(({ value, label })=>module553.default.createElement(module186.RadioButton, {
                    key: value,
                    value
                }, label)))), module553.default.createElement(module186.Form.Item, {
                label: t("IMAGE_REPOSITORY_ADDRESS")
            }, module553.default.createElement(module186.Input, {
                name: "imageRepository"
            })), module553.default.createElement("div", {
                className: module3045.column
            }, module553.default.createElement(module186.Form.Item, {
                label: t("NAME"),
                rules: [
                    {
                        required: true,
                        message: t("EDGENODE_NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC")
                    },
                    {
                        validator: e.validator("name")
                    }
                ],
                desc: t("NAME_DESC")
            }, module553.default.createElement(module186.Input, {
                name: "name",
                defaultValue: `edgenode-${generateId(4)}`,
                onChange: e.emptyLink
            })), module553.default.createElement(module186.Button, {
                className: module3045.edgeValidate,
                onClick: e.handleLink,
                loading: e.state.loading
            }, t("VALIDATE"))));
        };
        e.renderEdgeNodeFormItems = function() {
            return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module186.Form.Item, {
                label: t("NAME"),
                rules: [
                    {
                        required: true,
                        message: t("EDGENODE_NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC")
                    },
                    {
                        validator: e.validator("name")
                    }
                ],
                desc: t("NAME_DESC")
            }, module553.default.createElement(module186.Input, {
                name: "name",
                maxLength: 63,
                defaultValue: `edgenode-${generateId(4)}`,
                onChange: e.emptyLink
            })), module553.default.createElement("div", {
                className: module3045.column
            }, module553.default.createElement(module186.Button, {
                className: module3045.edgeValidate,
                onClick: e.handleLink,
                loading: e.state.loading
            }, t("VALIDATE"))));
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onOk, onCancel, isEdgeWize } = props;
                return module553.default.createElement(module788, {
                    title: t("ADD_EDGE_NODE"),
                    width: 600,
                    visible,
                    onOk,
                    onCancel,
                    hideFooter: true
                }, module553.default.createElement(module186.Form, {
                    data: this.state.formData,
                    ref: this.formRef
                }, isEdgeWize ? this.renderEdgeWizeNodeFormItems() : this.renderEdgeNodeFormItems(), module553.default.createElement("div", {
                    className: module3045.column
                }, module553.default.createElement(module186.Checkbox, {
                    defaultValue: true,
                    checked: this.state.isCheck,
                    onChange: this.handleChangeCheck
                }, t("ADD_DEFAULT_TAINT", {
                    params: 'node-role.kubernetes.io/edge="":NoSchedule'
                }))), this.renderLink()));
            }
        }
    ]);
    return r;
})(module553.Component);
export default D;
