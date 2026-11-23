import "./module-12.js";
import "./module-135.js";
import "./module-11.js";
import "./module-6.js";
import "./module-73.js";
import "./module-18.js";
import "./module-16.js";
import "./module-27.js";
import "./module-932.js";
import "./module-138.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-319.js";
import "./module-22.js";
import "./module-57.js";
import "./module-31.js";
import "./module-315.js";
import "./module-58.js";
import module41 from "./module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module159 from "./module-159.js";
import module788 from "components/Base/Modal";
import module967 from "components/Inputs/UnitSlider";
import module1198 from "./module-1198.js";
import module984 from "./module-984.js";
const N = ((e)=>{
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.formRef = module553.default.createRef();
        n.onOk = module44(module41.mark(function e() {
            return module41.wrap(function(e) {
                while(true){
                    switch(e.prev = e.next){
                        case 0:
                            if (Object.values(n.state.error).join("") === "") {
                                e.next = 2;
                                break;
                            }
                            return e.abrupt("return");
                        case 2:
                            n.formRef.current.validate(module44(module41.mark(function* e() {
                                n.props.onOk(n.state.detail);
                            })));
                        case 3:
                        case "end":
                            return e.stop();
                    }
                }
            }, e);
        }));
        n.onCancel = function() {
            n.props.onCancel();
        };
        n.generateMarks = function(e, t, a = "") {
            for(var r = 4, n = parseInt((t - e) / r, 10), l = {}, o = 0; o < r; o++){
                const u = e + o * n;
                l[u] = u === 0 ? u : u + a;
            }
            l[t] = t + a;
            return l;
        };
        n.toggleAdvanced = function() {
            n.setState({
                showAdvanced: !n.state.showAdvanced
            });
        };
        n.getFormItems = function(e) {
            const n_state = n.state;
            const { error, detail } = n_state;
            return e.map(({ name, type, label, description, rules = [], range, unit, showFunc, options, validator, ...rest })=>{
                const message = module26(error, `["${name}"]`);
                const T = module26(detail, `["${name}"]`);
                switch(type){
                    case "text":
                        return module553.default.createElement(module186.Form.Item, {
                            key: name,
                            label,
                            desc: description,
                            rules
                        }, module553.default.createElement(module186.Input, {
                            name,
                            maxLength: range && range.max ? range.max : -1,
                            ...rest
                        }));
                    case "textArea":
                        return module553.default.createElement(module186.Form.Item, {
                            key: name,
                            label,
                            desc: description,
                            rules,
                            ...rest
                        }, module553.default.createElement(TextArea, {
                            maxLength: 256,
                            name
                        }));
                    case "number":
                        return module553.default.createElement(module186.Form.Item, {
                            key: name,
                            label,
                            desc: description,
                            rules
                        }, module553.default.createElement(module1198, {
                            name,
                            integer: true,
                            min: range.min,
                            max: range.max,
                            showFunc,
                            unit,
                            showUnit: !!unit,
                            value: module26(n.state, `detail["${name}"]`, T),
                            onChange: function(e) {
                                module74(n.state, `detail["${name}"]`, e === "" ? e : parseInt(e, 10));
                                n.forceUpdate();
                            },
                            ...rest
                        }));
                    case "select":
                        return module553.default.createElement(module186.Form.Item, {
                            key: name,
                            label,
                            desc: description,
                            rules
                        }, module553.default.createElement(module186.Select, {
                            name,
                            options
                        }));
                    case "slider":
                        return module553.default.createElement(module186.Form.Item, {
                            key: name,
                            label,
                            desc: description,
                            rules,
                            error: message ? {
                                message
                            } : null
                        }, rest.disabled ? module553.default.createElement(module1198, {
                            integer: true,
                            unit,
                            showUnit: !!unit,
                            name,
                            value: module26(n.state, `detail["${name}"]`, T),
                            ...rest
                        }) : module553.default.createElement(module967, {
                            name,
                            max: range.max,
                            min: range.min,
                            unit,
                            marks: n.generateMarks(range.min, range.max, unit),
                            value: T,
                            onChange: function(e) {
                                if (validator) {
                                    const r = validator(e, {
                                        ...range,
                                        unit
                                    });
                                    const { error: error_1, message } = r;
                                    if (error_1) {
                                        module74(error, `["${name}"]`, message);
                                    } else {
                                        module74(error, `["${name}"]`, "");
                                    }
                                }
                                module74(n.state, `detail["${name}"]`, e);
                                n.forceUpdate();
                            },
                            withInput: true
                        }));
                    default:
                        return null;
                }
            });
        };
        const l = {
            name: "",
            partitions: 3,
            replicas: Math.min(3, e.kafkaReplicas),
            "cleanup.policy": "delete",
            "min.insync.replicas": 1,
            "unclean.leader.election.enable": "true",
            "segment.ms": 604800000,
            "retention.ms": 604800000,
            "retention.bytes": -1,
            "max.message.bytes": 1048588
        };
        n.state = {
            detail: e.detail ? {
                ...l,
                ...e.detail
            } : l,
            error: {},
            showAdvanced: false
        };
        n.formItems = [
            {
                name: "name",
                label: t("NAME"),
                type: "text",
                description: t("TOPIC_NAME_DESC"),
                range: {
                    max: 100
                },
                rules: [
                    {
                        pattern: /^[a-z][a-z0-9-.]{0,100}$/,
                        message: t("INVALID_TOPIC_NAME_DESC")
                    },
                    {
                        required: true,
                        message: t("TOPIC_NAME_EMPTY_DESC")
                    }
                ],
                disabled: !!e.detail
            },
            {
                name: "partitions",
                label: t("PARTITION_COUNT"),
                type: "slider",
                unit: "",
                description: e.detail ? "" : " ",
                range: {
                    min: 1,
                    max: 1000
                },
                validator: function(a, { min, max }) {
                    const o = parseInt(a, 10);
                    const min_1 = module26(e, "detail.partitions");
                    if (!module159(min_1) && o < min_1) {
                        return {
                            error: true,
                            message: t("INVALID_PARTITION_COUNT_DESC", {
                                min: min_1,
                                max
                            })
                        };
                    }
                    if (Number.isNaN(o) || o < min || o > max) {
                        return {
                            error: true,
                            message: t("INVALID_PARTITION_COUNT_DESC", {
                                min,
                                max
                            })
                        };
                    }
                    return {
                        error: false
                    };
                },
                rules: [
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]
            },
            {
                name: "replicas",
                label: t("REPLICA_COUNT"),
                type: "number",
                range: {
                    min: 1,
                    max: e.kafkaReplicas
                },
                showFunc: true,
                description: t("TOPIC_REPLICA_COUNT_DESC"),
                disabled: !!e.detail,
                rules: [
                    {
                        required: true,
                        message: t("PARAM_REQUIRED")
                    }
                ]
            }
        ];
        n.advancedItems = [
            {
                name: "cleanup.policy",
                label: "cleanup.policy",
                type: "select",
                description: t("CLEANUP_POLICY_DESC"),
                options: [
                    {
                        label: t("CLEANUP_POLICY_DELETE"),
                        value: "delete"
                    },
                    {
                        label: t("CLEANUP_POLICY_COMPACT"),
                        value: "compact"
                    }
                ]
            },
            {
                name: "min.insync.replicas",
                label: "min.insync.replicas",
                type: "number",
                description: t("MIN_INSYNC_REPLICAS_DESC"),
                range: {
                    min: 1,
                    max: module26(n.state.detail, "replicas", 1)
                },
                showFunc: true
            },
            {
                name: "unclean.leader.election.enable",
                label: "unclean.leader.election.enable",
                type: "select",
                description: t("UNCLEAN_LEADER_ELECTION_ENABLE_DESC"),
                options: [
                    {
                        label: t("TRUE"),
                        value: "true"
                    },
                    {
                        label: t("FALSE"),
                        value: "false"
                    }
                ]
            },
            {
                name: "segment.ms",
                label: "segment.ms",
                type: "number",
                description: t("SEGMENT_MS_DESC"),
                range: {
                    min: 86400000
                },
                unit: "ms"
            },
            {
                name: "retention.ms",
                label: "retention.ms",
                type: "number",
                description: t("RETENTION_MS_DESC"),
                range: {
                    min: -1
                },
                unit: "ms"
            },
            {
                name: "retention.bytes",
                label: "retention.bytes",
                type: "number",
                description: t("RETENTION_BYTES_DESC"),
                range: {
                    min: -1
                },
                unit: "byte"
            },
            {
                name: "max.message.bytes",
                label: "max.message.bytes",
                type: "number",
                description: t("MAX_MESSAGE_BYTES_DESC"),
                range: {
                    min: 0
                },
                unit: "byte"
            }
        ];
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const e = {
                    ...this.props
                };
                return module553.default.createElement(module788, {
                    width: 600,
                    footerClassName: module984.footer,
                    ...e,
                    onOk: this.onOk,
                    onCancel: this.onCancel
                }, module553.default.createElement(module186.Form, {
                    className: module984.form,
                    data: this.state.detail,
                    ref: this.formRef
                }, this.getFormItems(this.formItems), module553.default.createElement("div", {
                    className: module984.advanced,
                    onClick: this.toggleAdvanced
                }, module553.default.createElement("span", null, t("ADVANCED_SETTINGS")), module553.default.createElement(module186.Icon, {
                    name: this.state.showAdvanced ? "chevron-up" : "chevron-down",
                    size: "20"
                })), this.state.showAdvanced && this.getFormItems(this.advancedItems)));
            }
        }
    ]);
    return r;
})(module553.Component);
export default N;
N.propTypes = {
    onOk: module1.func,
    onCancel: module1.func,
    app_id: module1.string
};
N.defaultProps = {
    onOk: function() {},
    onCancel: function() {}
};
