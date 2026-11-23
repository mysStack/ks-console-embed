import "./module-15.js";
import "./module-29.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module1 from "./module-1.js";
import module74 from "./module-74.js";
import module199 from "./module-199.js";
import module186 from "./module-186.js";
import Module788 from "./module-788.js";
import Module800 from "./module-800.js";
import module3600 from "./module-3600.js";
let l;
let o;
let u;
const O = observer((u = o = ((Component_1)=>{
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
        t.fetchData = function(e) {
            const e_detail = e.detail;
            const { namespace, cluster, annotations } = e_detail;
            const c = {
                name: (annotations === undefined ? {} : annotations)["kubesphere.io/relatedHPA"] || e.detail.name,
                cluster,
                namespace
            };
            const s = globals.clusterConfig?.[cluster]?.k8sVersion;
            t.setState({
                loading: true
            }, function() {
                t.store.checkName(c, "", s).then((e)=>{
                    t.isEdit = e.exist;
                    if (e.exist) {
                        t.store.fetchDetail(c, s).then(()=>{
                            t.setState({
                                loading: false,
                                formData: t.getFormData()
                            });
                        });
                    } else {
                        t.setState({
                            loading: false,
                            formData: t.getFormData()
                        });
                    }
                });
            });
        };
        t.getFormData = function() {
            const detail = t.props.detail;
            const { name, namespace, uid, kind } = detail;
            const I = module14.toJS(t.store.detail);
            const cpuTargetUtilization = I?._originData?.spec?.metrics?.find(function(e) {
                return e.type === "Resource" && e.resource.name === "cpu";
            })?.resource?.target?.averageUtilization || "";
            const memoryTargetValue = I?._originData?.spec?.metrics?.find(function(e) {
                return e.type === "Resource" && e.resource.name === "memory";
            })?.resource?.target?.averageValue || "";
            const cpuCurrentUtilization = I?.status?.currentMetrics?.find(function(e) {
                return e.type === "Resource" && e.resource.name === "cpu";
            })?.resource?.current?.averageUtilization || "";
            const memoryCurrentValue = I?.status?.currentMetrics?.find(function(e) {
                return e.type === "Resource" && e.resource.name === "memory";
            })?.resource?.current?.averageValue || "";
            return module199({}, I._originData, {
                metadata: {
                    name,
                    namespace,
                    annotations: {
                        cpuCurrentUtilization,
                        cpuTargetUtilization,
                        memoryCurrentValue,
                        memoryTargetValue
                    },
                    ownerReferences: [
                        {
                            apiVersion: "apps/v1",
                            blockOwnerDeletion: true,
                            controller: true,
                            kind,
                            name,
                            uid
                        }
                    ]
                },
                spec: {
                    scaleTargetRef: {
                        apiVersion: "apps/v1",
                        kind,
                        name
                    }
                }
            });
        };
        t.handleOk = function() {
            const current = t.form.current;
            if (current) {
                current.validate(function() {
                    const a = current.getData();
                    if (t.isEdit) {
                        module74(a, "metadata.resourceVersion", null);
                    }
                    t.props.onOk(a, t.isEdit);
                });
            }
        };
        t.form = createRef();
        t.state = {
            loading: true,
            formData: undefined
        };
        t.store = e.store;
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData(this.props);
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel } = props;
                const isSubmitting = this.store.isSubmitting;
                const state = this.state;
                const { formData, loading } = state;
                return <Module788 width={691} title={t("AUTOSCALING")} icon="firewall" onOk={this.handleOk} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting}><module186.Loading spinning={loading}><module186.Form data={formData} ref={this.form}><module186.Alert className={module3600.alert} type="info" message={t("CONFIGURE_AUTOSCALING_DESC")}/><module186.Form.Item label={t("RESOURCE_NAME")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    }
                ]}><module186.Input name="metadata.name" disabled/></module186.Form.Item><module186.Form.Item label={t("TARGET_CPU_USAGE_UNIT")} desc={t("TARGET_CPU_USAGE_DESC")}><Module800 name="metadata.annotations.cpuTargetUtilization" integer min={0} defaultValue="" onChange={this.handleCPUChange}/></module186.Form.Item><module186.Form.Item label={t("TARGET_MEMORY_USAGE_UNIT")} desc={t("TARGET_MEMORY_USAGE_DESC")}><Module800 name="metadata.annotations.memoryTargetValue" integer unit="Mi" min={0} defaultValue="" onChange={this.handleMemoryChange}/></module186.Form.Item><module186.Form.Item label={t("MINIMUM_REPLICAS")} desc={t("MINIMUM_REPLICAS_DESC")}><Module800 name="spec.minReplicas" min={1} integer defaultValue={1}/></module186.Form.Item><module186.Form.Item label={t("MAXIMUM_REPLICAS")} desc={t("MAXIMUM_REPLICAS_DESC")}><Module800 name="spec.maxReplicas" min={1} integer defaultValue={1}/></module186.Form.Item></module186.Form></module186.Loading></Module788>;
            }
        }
    ]);
    return r;
})(Component), o.propTypes = {
    visible: module1.bool,
    store: module1.object,
    detail: module1.object,
    onOk: module1.func,
    onCancel: module1.func
}, o.defaultProps = {
    visible: false,
    store: {},
    detail: {},
    onOk: function() {},
    onCancel: function() {}
}, l = u)) || l;
export default O;
