import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-27.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-24.js";
import "unpacked/module-193.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module1 from "unpacked/module-1.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module242 from "unpacked/module-242.js";
import module63 from "unpacked/module-63.js";
import { STRATEGIES, STRATEGIES_PREFIX } from "utils/constants";
import module186 from "unpacked/module-186.js";
import Module818 from "components/Base/TypeSelect";
import Module800 from "components/Inputs/NumberInput";
import module2305 from "unpacked/module-2305.js";
let l;
let u;
let o;
const D = observer((o = u = ((Component_1)=>{
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
        n.getStrategy = function(e) {
            return module26(e.data, `${n.prefix}.type`);
        };
        n.handleStrategyChange = function(e) {
            const n_props = n.props;
            const { data, module } = n_props;
            n.setState({
                strategy: e
            }, function() {
                if (e !== "RollingUpdate") {
                    module242(data, n.rollingUpdatePrefix);
                } else {
                    const t = module26(data, n.rollingUpdatePrefix);
                    if (module63(t)) {
                        switch(module){
                            case "deployments":
                                module74(data, n.rollingUpdatePrefix, {
                                    maxUnavailable: "25%",
                                    maxSurge: "25%"
                                });
                                break;
                            case "statfulsets":
                                module74(data, n.rollingUpdatePrefix, {
                                    partition: 0
                                });
                                break;
                            case "daemonsets":
                                module74(data, n.rollingUpdatePrefix, {
                                    maxUnavailable: "25%"
                                });
                        }
                    }
                }
            });
        };
        n.valueValidator = function(e, a, r) {
            if (a) {
                if (/^[0-9]*$/.test(a) || /^[0-9]+%$/.test(a)) {
                    return void r();
                }
                return r({
                    message: t("ENTER_INTEGER_OR_PERCENTAGE")
                });
            }
            return r();
        };
        n.valueValidatorNumber = function(e, a, r) {
            if (a) {
                if (/^[0-9]*$/.test(a)) {
                    return void r();
                }
                return r({
                    message: t("PARTITION_ORDINAL_EMPTY")
                });
            }
            return r();
        };
        n.state = {
            strategy: n.getStrategy(e)
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e, t) {
                const a = this.getStrategy(this.props);
                if (a !== t.strategy) {
                    this.setState({
                        strategy: a
                    });
                }
            }
        },
        {
            key: "renderRollingUpdateParams",
            value: function() {
                const module = this.props.module;
                switch(module){
                    case "statefulsets":
                        return <module186.Columns className={module2305.wrapper}><module186.Column><module186.Form.Item label={t("PARTITION_ORDINAL")} desc={t("PARTITION_ORDINAL_DESC")} rules={[
                            {
                                required: true,
                                message: t("PARTITION_ORDINAL_EMPTY")
                            },
                            {
                                validator: this.valueValidatorNumber
                            }
                        ]}><Module800 name={`${this.rollingUpdatePrefix}.partition`} defaultValue={0} min={0} integer/></module186.Form.Item></module186.Column></module186.Columns>;
                    case "daemonsets":
                        return <module186.Columns className={module2305.wrapper}><module186.Column><module186.Form.Item label={t("MAX_UNAVAILABLE_PODS")} desc={t("MAX_UNAVAILABLE_PODS_DESC")} rules={[
                            {
                                required: true,
                                message: t("MAX_UNAVAILABLE_EMPTY")
                            }
                        ]}><module186.Input name={`${this.rollingUpdatePrefix}.maxUnavailable`} defaultValue="20%"/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("MIN_READY_SECONDS")} desc={t("MIN_READY_SECONDS_DESC")} rules={[
                            {
                                required: true,
                                message: t("MIN_READY_SECONDS_EMPTY")
                            }
                        ]}><Module800 name="spec.minReadySeconds" defaultValue={0} min={0} integer/></module186.Form.Item></module186.Column></module186.Columns>;
                    default:
                        return <module186.Columns className={module2305.wrapper}><module186.Column><module186.Form.Item label={t("MAX_UNAVAILABLE_PODS")} desc={t("MAX_UNAVAILABLE_PODS_DESC")} rules={[
                            {
                                required: true,
                                message: t("MAX_UNAVAILABLE_EMPTY")
                            },
                            {
                                validator: this.valueValidator
                            }
                        ]}><module186.Input name={`${this.rollingUpdatePrefix}.maxUnavailable`} defaultValue="25%"/></module186.Form.Item></module186.Column><module186.Column><module186.Form.Item label={t("MAX_EXTRA_PODS")} desc={t("MAX_EXTRA_PODS_DESC")} rules={[
                            {
                                required: true,
                                message: t("MAX_EXTRA_EMPTY")
                            },
                            {
                                validator: this.valueValidator
                            }
                        ]}><module186.Input name={`${this.rollingUpdatePrefix}.maxSurge`} defaultValue="25%"/></module186.Form.Item></module186.Column></module186.Columns>;
                }
            }
        },
        {
            key: "render",
            value: function() {
                return <><module186.Form.Item label={t("UPDATE_STRATEGY")}><Module818 name={`${this.prefix}.type`} onChange={this.handleStrategyChange} defaultValue="RollingUpdate" options={this.strategyOptions}/></module186.Form.Item><module186.Form.Group label={t("ROLLING_UPDATE_SETTINGS")} checkable keepDataWhenUnCheck>{this.isRollingUpdate && this.renderRollingUpdateParams()}</module186.Form.Group></>;
            }
        },
        {
            key: "isRollingUpdate",
            get: function() {
                return this.state.strategy === "RollingUpdate";
            }
        },
        {
            key: "prefix",
            get: function() {
                const props = this.props;
                const { isFederated, module, isEdit } = props;
                return `${isFederated && isEdit ? "spec.template." : ""}${STRATEGIES_PREFIX[module]}`;
            }
        },
        {
            key: "rollingUpdatePrefix",
            get: function() {
                return `${this.prefix}.rollingUpdate`;
            }
        },
        {
            key: "strategyOptions",
            get: function() {
                const module = this.props.module;
                return STRATEGIES[module]?.map(function({ label, value, description }) {
                    return {
                        label: t(label),
                        description: t(description),
                        icon: "update",
                        value
                    };
                });
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function({ data }, t) {
                const r = /^[0-9]*$/;
                const n = "spec.strategy.rollingUpdate";
                if (t.strategy === "RollingUpdate") {
                    if (r.test(module26(data, `${n}.maxSurge`))) {
                        module74(data, `${n}.maxSurge`, Number(module26(data, `${n}.maxSurge`)));
                    }
                    if (r.test(module26(data, `${n}.maxUnavailable`))) {
                        module74(data, `${n}.maxUnavailable`, Number(module26(data, `${n}.maxUnavailable`)));
                    }
                }
                return null;
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    module: module1.string,
    data: module1.object,
    onChange: module1.func,
    isFederated: module1.bool,
    isEdit: module1.bool
}, u.defaultProps = {
    module: "",
    data: {},
    isFederated: false,
    isEdit: false,
    onChange: function() {}
}, l = o)) || l;
export default D;
