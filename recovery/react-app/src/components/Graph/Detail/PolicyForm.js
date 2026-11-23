import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module242 from "unpacked/module-242.js";
import module63 from "unpacked/module-63.js";
import module195 from "unpacked/module-195.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module831 from "unpacked/module-831.js";
import module186 from "unpacked/module-186.js";
import module240 from "unpacked/module-240.js";
import Module800 from "components/Inputs/NumberInput";
import { joinSelector } from "utils/index";
import module435 from "utils/form.templates";
import module4766 from "stores/application/servicePolicy";
import Module4767 from "components/Graph/Detail/PolicyForm/Session";
import module4768 from "unpacked/module-4768.js";
let l;
let u;
let o;
const A = observer((o = u = ((Component_1)=>{
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
        n.handleModeChange = function(mode) {
            n.setState({
                mode
            }, function() {
                if (n.state.mode === "lb") {
                    module242(n.state.formData, "spec.template.spec.trafficPolicy.loadBalancer.consistentHash");
                } else {
                    module242(n.state.formData, "spec.template.spec.trafficPolicy.loadBalancer.simple");
                }
            });
        };
        n.handlePoolToggle = function(showPoolForm) {
            n.setState({
                showPoolForm
            });
        };
        n.handleCircuitToggle = function(showCircuitForm) {
            n.setState({
                showCircuitForm
            });
        };
        n.handleSubmit = function(e) {
            const n_state = n.state;
            const { showCircuitForm, showPoolForm } = n_state;
            if (!showCircuitForm) {
                module242(e, "spec.template.spec.trafficPolicy.outlierDetection");
            }
            if (!showPoolForm) {
                module242(e, "spec.template.spec.trafficPolicy.connectionPool");
            }
            const u = function() {
                n.getData(n.props);
                module240.success({
                    content: t("UPDATE_SUCCESSFUL")
                });
            };
            if (module63(n.detail)) {
                const o = module14.toJS(n.props.store.detail);
                const { cluster, namespace } = o;
                n.store.create(e, {
                    cluster,
                    namespace
                }).then(u);
            } else {
                module74(e, "metadata.resourceVersion", n.detail.resourceVersion);
                n.store.update(n.detail, e).then(u);
            }
        };
        n.sessionValidator = function(e, a, r) {
            if (module63(a) || Object.values(a).some((e)=>module195(e) && !e)) {
                return r({
                    message: t("PARAM_REQUIRED"),
                    field: e.field
                });
            }
            r();
        };
        n.state = {
            mode: "lb",
            showPoolForm: false,
            showCircuitForm: false,
            formData: {}
        };
        n.store = new module4766;
        n.getData(e);
        return n;
    }
    module37(r, [
        {
            key: "getData",
            value: function(e) {
                const _this = this;
                const name = e.detail.name;
                const r = module14.toJS(e.store.detail);
                const { cluster, namespace } = r;
                this.store.fetchListByK8s({
                    cluster,
                    namespace,
                    labelSelector: joinSelector({
                        app: name
                    }),
                    limit: 1
                }).then(()=>{
                    _this.setState({
                        showPoolForm: _this.detail.connectPoolEnable,
                        showCircuitForm: _this.detail.outlierDetectionEnable,
                        formData: _this.formTemplate
                    });
                });
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (e.detail.name !== this.props.detail.name) {
                    this.getData(this.props);
                }
            }
        },
        {
            key: "getLBOptions",
            value: function() {
                return [
                    {
                        label: t("LB_UNSPECIFIED"),
                        value: "UNSPECIFIED"
                    },
                    {
                        label: t("LB_RANDOM"),
                        value: "RANDOM"
                    },
                    {
                        label: t("LB_PASSTHROUGH"),
                        value: "PASSTHROUGH"
                    },
                    {
                        label: t("LB_ROUND_ROBIN"),
                        value: "ROUND_ROBIN"
                    },
                    {
                        label: t("LB_LEAST_REQUEST"),
                        value: "LEAST_REQUEST"
                    }
                ];
            }
        },
        {
            key: "renderLB",
            value: function() {
                const mode = this.state.mode;
                return <><div className={module4768.title}>{t("TRAFFIC_POLICIES")}</div><module186.RadioGroup wrapClassName="radio-group-button margin-t12" buttonWidth={165} value={mode} onChange={this.handleModeChange} size="small"><module186.RadioButton value="lb">{t("LOAD_BALANCING")}</module186.RadioButton><module186.RadioButton value="session">{t("SESSION_PERSISTENCE")}</module186.RadioButton></module186.RadioGroup>{mode === "lb" && this.renderLBOptions()}{mode === "session" && this.renderSessionOptions()}</>;
            }
        },
        {
            key: "renderPool",
            value: function() {
                const showPoolForm = this.state.showPoolForm;
                const a = <div className={module4768.title}>{t("CONNECTION_POOL")}<module186.Toggle checked={showPoolForm} onChange={this.handlePoolToggle} onText={t("ON")} offText={t("OFF")}/></div>;
                const r = <div className={module4768.tip}>{t("CONNECTION_POOL_TIP")}</div>;
                if (this.isHTTP) {
                    return <>{a}{showPoolForm ? <><module186.Form.Item className="margin-t12" label={t("MAXIMUM_CONNECTIONS")} desc={t("MAXIMUM_CONNECTIONS_DESC")}><Module800 name="spec.template.spec.trafficPolicy.connectionPool.tcp.maxConnections" min={0}/></module186.Form.Item><module186.Form.Item label={t("MAXIMUM_REQUESTS_PER_CONNECTION")} desc={t("MAXIMUM_REQUESTS_PER_CONNECTION_DESC")}><Module800 name="spec.template.spec.trafficPolicy.connectionPool.http.maxRequestsPerConnection" defaultValue={1} min={0}/></module186.Form.Item><module186.Form.Item label={t("TRAFFIC_MONITORING_MAXIMUM_RETRIES")} desc={t("TRAFFIC_MONITORING_MAXIMUM_RETRIES_DESC")}><Module800 name="spec.template.spec.trafficPolicy.connectionPool.http.maxRetries" defaultValue={3} min={0}/></module186.Form.Item><module186.Form.Item label={t("CONNECTION_TIMEOUT")} desc={t("CONNECTION_TIMEOUT_DESC")}><Module800 name="spec.template.spec.trafficPolicy.connectionPool.tcp.connectTimeout" min={0} unit="ms" showUnit/></module186.Form.Item><module186.Form.Item label={t("MAXIMUM_REQUESTS")}><Module800 name="spec.template.spec.trafficPolicy.connectionPool.http.http2MaxRequests" defaultValue={1024} min={0}/></module186.Form.Item><module186.Form.Item label={t("MAXIMUM_PENDING_REQUESTS")}><Module800 name="spec.template.spec.trafficPolicy.connectionPool.http.http1MaxPendingRequests" defaultValue={1024} min={0}/></module186.Form.Item></> : r}</>;
                }
                return <>{a}{showPoolForm ? <><module186.Form.Item className="margin-t12" label={t("MAXIMUM_CONNECTIONS")} desc={t("MAXIMUM_CONNECTIONS_DESC")}><Module800 name="spec.template.spec.trafficPolicy.connectionPool.tcp.maxConnections" min={0}/></module186.Form.Item><module186.Form.Item label={t("CONNECTION_TIMEOUT")} desc={t("CONNECTION_TIMEOUT_DESC")}><Module800 name="spec.template.spec.trafficPolicy.connectionPool.tcp.connectTimeout" min={0} unit="ms" showUnit/></module186.Form.Item></> : r}</>;
            }
        },
        {
            key: "renderCircuit",
            value: function() {
                const showCircuitForm = this.state.showCircuitForm;
                if (this.isHTTP) {
                    return <><div className={module4768.title}>{t("CIRCUIT_BREAKER")}<module186.Toggle checked={showCircuitForm} onChange={this.handleCircuitToggle} onText={t("ON")} offText={t("OFF")}/></div>{showCircuitForm ? <><module186.Form.Item className="margin-t12" label={t("CONSECUTIVE_FIVEXX_ERRORS")} desc={t("CONSECUTIVE_FIVEXX_ERRORS_DESC")}><Module800 name="spec.template.spec.trafficPolicy.outlierDetection.consecutiveErrors" defaultValue={5} min={0}/></module186.Form.Item><module186.Form.Item label={t("INSPECTION_INTERVAL_S")} desc={t("INSPECTION_INTERVAL_S_DESC")}><Module800 name="spec.template.spec.trafficPolicy.outlierDetection.interval" defaultValue="10s" min={0.001} unit="s" showUnit/></module186.Form.Item><module186.Form.Item label={t("MAXIUM_EJECTION_RATIO")} desc={t("MAXIUM_EJECTION_RATIO_DESC")}><Module800 name="spec.template.spec.trafficPolicy.outlierDetection.maxEjectionPercent" defaultValue={10} min={0}/></module186.Form.Item><module186.Form.Item label={t("BASE_EJECTION_TIME_S")} desc={t("BASE_EJECTION_TIME_S_DESC")}><Module800 name="spec.template.spec.trafficPolicy.outlierDetection.baseEjectionTime" defaultValue="30s" min={0} unit="s" showUnit/></module186.Form.Item></> : <div className={module4768.tip}>{t("CIRCUIT_BREAKER_DESC")}</div>}</>;
                }
                return null;
            }
        },
        {
            key: "renderLBOptions",
            value: function() {
                return <div className="margin-t12"><module186.Form.Item label={t("LOAD_BALANCING_ALGORITHM")}><module186.Select name="spec.template.spec.trafficPolicy.loadBalancer.simple" options={this.getLBOptions()} defaultValue="ROUND_ROBIN"/></module186.Form.Item><module186.Alert className={module4768.alert} message={t.html("LB_ALG_DESC")} type="info"/></div>;
            }
        },
        {
            key: "renderSessionOptions",
            value: function() {
                return <div className="margin-t12"><module186.Form.Item label={t("METHOD")} rules={[
                    {
                        validator: this.sessionValidator
                    }
                ]}><Module4767 name="spec.template.spec.trafficPolicy.loadBalancer.consistentHash" protocol={this.props.protocol}/></module186.Form.Item></div>;
            }
        },
        {
            key: "render",
            value: function() {
                return <module186.Form onSubmit={this.handleSubmit} data={this.state.formData}>{this.renderLB()}{this.renderPool()}{this.renderCircuit()}<div className="text-right margin-t12"><module186.Button onClick={this.handleCancel}>{t("CANCEL")}</module186.Button><module186.Button type="primary" htmlType="submit" loading={this.store.isSubmitting} disabled={this.store.isSubmitting}>{t("OK")}</module186.Button></div></module186.Form>;
            }
        },
        {
            key: "detail",
            get: function() {
                const e = module14.toJS(this.store.list);
                return module26(e, "data.[0]", {});
            }
        },
        {
            key: "isHTTP",
            get: function() {
                return this.props.protocol === "http";
            }
        },
        {
            key: "formTemplate",
            get: function() {
                if (this.detail._originData) {
                    return module831(this.detail._originData);
                }
                const name = this.props.detail.name;
                const t = module14.toJS(this.props.store.detail);
                const { namespace, selector } = t;
                return module435.strategyPolicy({
                    name,
                    namespace,
                    selector: {
                        ...selector,
                        app: name
                    }
                });
            }
        }
    ]);
    return r;
})(Component), u.propTypes = {
    detail: module1.object,
    store: module1.object
}, u.defaultProps = {
    detail: {}
}, l = o)) || l;
export default A;
