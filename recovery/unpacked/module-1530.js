import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-97.js";
import "./module-16.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import { observer } from "./module-239.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import module74 from "./module-74.js";
import module63 from "./module-63.js";
import module807 from "./module-807.js";
import { isEdgeWizePage } from "./module-52.js";
import Module818 from "./module-818.js";
import Module830 from "./module-830.js";
import Module868 from "./module-868.js";
import module318 from "./module-318.js";
import module859 from "./module-859.js";
let l;
let u;
let o;
const N = observer((o = u = ((Component_1)=>{
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.handleAffinityChange = function(mode) {
            const t = n.replicasPolicyOptions.find((t)=>t.value === mode);
            module74(n.props.data, "spec.template.spec.affinity", t.affinity);
            if (mode === "custom") {
                module74(n.props.data, "spec.template.spec.customMode", [
                    {}
                ]);
            } else {
                delete n.props.data.spec.template.spec.customMode;
            }
            n.setState({
                mode
            }, function() {
                if (n.props.formProps) {
                    n.props.formProps.onChange();
                }
            });
        };
        n.handleChange = function(e) {
            const t = {};
            e.forEach((e)=>{
                if (e.type === "preferredDuringSchedulingIgnoredDuringExecution") {
                    t[e.policy] = {
                        preferredDuringSchedulingIgnoredDuringExecution: [
                            {
                                weight: 100,
                                podAffinityTerm: {
                                    labelSelector: {
                                        matchExpressions: [
                                            {
                                                key: "app",
                                                operator: "In",
                                                values: [
                                                    e.target
                                                ]
                                            }
                                        ]
                                    },
                                    topologyKey: "kubernetes.io/hostname"
                                }
                            }
                        ]
                    };
                } else if (e.type === "requiredDuringSchedulingIgnoredDuringExecution") {
                    t[e.policy] = {
                        requiredDuringSchedulingIgnoredDuringExecution: [
                            {
                                labelSelector: {
                                    matchExpressions: [
                                        {
                                            key: "app",
                                            operator: "In",
                                            values: [
                                                e.target
                                            ]
                                        }
                                    ]
                                },
                                topologyKey: "kubernetes.io/hostname"
                            }
                        ]
                    };
                }
            });
            module74(n.props.data, "spec.template.spec.affinity", t);
        };
        n.checkItemValid = function(e) {
            return e.policy && e.type && e.target;
        };
        n.modeValidator = function(e, a, r) {
            if (a) {
                if (a.some((e)=>!n.checkItemValid(e))) {
                    r({
                        message: t("RULE_NOT_COMPLETE"),
                        field: e.field
                    });
                    return void n.forceUpdate();
                }
                return void r();
            }
            return r();
        };
        n.state = {
            mode: "default"
        };
        n.store = isEdgeWizePage() ? new module859(e.module) : new module318(e.module);
        return n;
    }
    module37(r, [
        {
            key: "replicasPolicyOptions",
            get: function() {
                const e = {
                    preferredDuringSchedulingIgnoredDuringExecution: [
                        {
                            weight: 100,
                            podAffinityTerm: {
                                labelSelector: {
                                    matchLabels: module26(this.props.data, "spec.template.metadata.labels", {})
                                },
                                topologyKey: "kubernetes.io/hostname"
                            }
                        }
                    ]
                };
                return [
                    {
                        value: "default",
                        label: t("DEFAULT_RULES"),
                        affinity: {},
                        description: t("DEFAULT_RULES_DESC")
                    },
                    {
                        value: "decentralized",
                        label: t("DECENTRALIZED_SCHEDULING"),
                        affinity: {
                            podAntiAffinity: e
                        },
                        description: t("DECENTRALIZED_SCHEDULING_DESC")
                    },
                    {
                        value: "aggregation",
                        label: t("CENTRALIZED_SCHEDULING"),
                        affinity: {
                            podAffinity: e
                        },
                        description: t("CENTRALIZED_SCHEDULING_DESC")
                    },
                    {
                        value: "custom",
                        label: t("CUSTOM_RULES"),
                        affinity: {},
                        description: t("CUSTOM_RULES_DESC")
                    }
                ];
            }
        },
        {
            key: "policys",
            get: function() {
                return [
                    {
                        label: t("SCHEDULE_WITH_TARGET"),
                        value: "podAffinity"
                    },
                    {
                        label: t("SCHEDULE_AWAY_FROM_TARGET"),
                        value: "podAntiAffinity"
                    }
                ];
            }
        },
        {
            key: "types",
            get: function() {
                return [
                    {
                        label: t("MATCH_IF_POSSIBLE"),
                        value: "preferredDuringSchedulingIgnoredDuringExecution"
                    },
                    {
                        label: t("MUST_MATCH"),
                        value: "requiredDuringSchedulingIgnoredDuringExecution"
                    }
                ];
            }
        }
    ]);
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                const t = module26(this.props.data, "spec.template.spec.affinity", {});
                if (module63(t)) {
                    this.setState({
                        mode: "default"
                    });
                } else {
                    const a = this.replicasPolicyOptions.find((e)=>module807(e.affinity, t));
                    if (a) {
                        this.setState({
                            mode: a.value
                        });
                        delete this.props.data.spec.template.spec.customMode;
                    } else {
                        this.setState({
                            mode: "custom"
                        }, function() {
                            const a = Object.keys(t).map((policy)=>{
                                const a = Object.keys(t[policy])[0];
                                return {
                                    policy,
                                    type: a,
                                    target: module26(t, a === "requiredDuringSchedulingIgnoredDuringExecution" ? `[${policy}][${a}][0]["labelSelector"]["matchExpressions"][0]["values"][0]` : `[${policy}][${a}][0]["podAffinityTerm"]["labelSelector"]["matchExpressions"][0]["values"][0]`, "")
                                };
                            });
                            module74(_this.props.data, "spec.template.spec.customMode", a);
                        });
                    }
                }
                const props = this.props;
                const { cluster, namespace } = props;
                this.store.fetchList({
                    cluster,
                    namespace,
                    limit: Infinity
                });
            }
        },
        {
            key: "renderAffinityParams",
            value: function() {
                const mode = this.state.mode;
                const replicasPolicyOptions = this.replicasPolicyOptions;
                const options = module26(this.store, "list.data", []).map((e)=>({
                        label: e.name,
                        value: e.name
                    }));
                return <><module186.Form.Item><Module818 value={mode} options={replicasPolicyOptions} onChange={this.handleAffinityChange} defaultValue={replicasPolicyOptions[0].value}/></module186.Form.Item>{mode === "custom" && <module186.Form.Item label={t("CUSTOM_RULES")} rules={[
                    {
                        validator: this.modeValidator,
                        checkOnSubmit: true
                    }
                ]}><Module830 name="spec.template.spec.customMode" itemType="object" addText={t("ADD")} checkItemValid={this.checkItemValid} onChange={this.handleChange}><Module868><module186.Select name="policy" placeholder={t("TYPE")} options={this.policys}/><module186.Select name="type" placeholder={t("STRATEGY")} options={this.types}/><module186.Select name="target" placeholder={t("TARGET")} options={options} style={{
                    marginLeft: 20
                }}/></Module868></Module830></module186.Form.Item>}</>;
            }
        },
        {
            key: "render",
            value: function() {
                const checkable = this.props.checkable;
                return <module186.Form.Group label={t("POD_SCHEDULING_RULES")} desc={t("POD_SCHEDULING_RULES_DESC")} keepDataWhenUnCheck checkable={checkable}>{this.renderAffinityParams()}</module186.Form.Group>;
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    data: module1.object,
    checkable: module1.bool,
    initial: module1.bool
}, u.defaultProps = {
    data: {},
    checkable: false,
    initial: false
}, l = o)) || l;
export default N;
