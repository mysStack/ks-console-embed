import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-30.js";
import "./module-18.js";
import "./module-97.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-110.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-41.js";
import "./module-44.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import module1166 from "./module-1166.js";
import module159 from "./module-159.js";
import module189 from "./module-189.js";
import module968 from "./module-968.js";
import module1167 from "./module-1167.js";
import module334 from "./module-334.js";
import module447 from "./module-447.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import Module788 from "./module-788.js";
import Module873 from "./module-873.js";
import module886 from "./module-886.js";
import module914 from "./module-914.js";
import module1094 from "./module-1094.js";
import module1532 from "./module-1532.js";
import { cpuFormat, gpuLimitsArr, memoryFormat, resourceLimitKey } from "./module-52.js";
const A = ((Component_1)=>{
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
        t.handleChange = function(e) {
            t.setState({
                data: {
                    default: e.limits,
                    defaultRequest: e.requests
                }
            });
        };
        t.handleOk = function() {
            t.props.onOk(t.state.data);
        };
        t.handleError = function(e) {
            return t.setState({
                error: e
            });
        };
        t.availableQuota_memory = function(e = {}) {
            const t = {
                ...e
            };
            Object.keys(e).forEach((a)=>{
                if (a.endsWith("memory")) {
                    t[a] = memoryFormat(e[a]);
                }
                if (a.endsWith("cpu")) {
                    t[a] = cpuFormat(e[a]);
                }
            });
            return t;
        };
        t.singleClusterQuota = function(e, namespace, cluster) {
            return new Promise((resolve)=>{
                Promise.all([
                    t.quotaStore.fetch({
                        cluster,
                        namespace
                    }),
                    t.workspaceQuotaStore.fetchDetail({
                        name: e,
                        workspace: e,
                        cluster
                    })
                ]).then((e)=>{
                    const a = module26(e[1], "hard");
                    const r = module26(e[0], "data.hard");
                    resolve({
                        workspaceQuota: t.availableQuota_memory(a),
                        namespaceQuota: t.availableQuota_memory(r)
                    });
                });
            });
        };
        t.multiClusterQuota = function(e, a) {
            const r = [];
            const n = {
                "limits.cpu": undefined,
                "limits.memory": undefined
            };
            t.props.clusters.forEach((n)=>r.push(t.singleClusterQuota(e, a, n)));
            Promise.all(r).then((e)=>{
                const a = e.map((e)=>module26(e, "workspaceQuota", n));
                const r = e.map((e)=>module26(e, "namespaceQuota", n));
                const l = e.map((e)=>module189(module26(e, "namespaceQuota", {}), resourceLimitKey));
                t.setState({
                    availableQuota: {
                        workspace: t.transformQuota(a),
                        namespace: {
                            ...t.transformQuota(r),
                            ...t.transformGpu(l)
                        }
                    }
                });
            });
        };
        t.transformQuota = function(e) {
            return {
                "limits.cpu": t.findCpuOrMemoryMin(e, "limits.cpu"),
                "limits.memory": t.findCpuOrMemoryMin(e, "limits.memory"),
                "requests.cpu": t.findCpuOrMemoryMin(e, "requests.cpu"),
                "requests.memory": t.findCpuOrMemoryMin(e, "requests.memory")
            };
        };
        t.findCpuOrMemoryMin = function(e, t) {
            const a = e.map((e)=>e[t]);
            return module968(a);
        };
        t.transformGpu = function(e) {
            const supportGpuType = globals.config.supportGpuType;
            const a = e.map((e)=>module334(e, function(e, a) {
                    return supportGpuType.some((e)=>module447(a, e));
                }));
            return module1167(a, function(e, t) {
                const a = module26(e, `${Object.keys(t)[0]}`);
                if (a) {
                    if (Number(a) > Number(Object.values(t)[0])) {
                        return {
                            ...e,
                            ...t
                        };
                    }
                    return {
                        ...e
                    };
                }
                return {
                    ...e,
                    ...t
                };
            }, {});
        };
        t.fetchQuota = async function e() {
            let a;
            let r;
            let n;
            let o;
            let u;
            a = t.props;
            r = a.workspace;
            n = a.cluster;
            o = a.namespace;
            if (!a.isFederated) {
                u = await t.singleClusterQuota(r, o, n);
                t.setState({
                    availableQuota: {
                        workspace: module26(u, "workspaceQuota"),
                        namespace: module26(u, "namespaceQuota")
                    }
                });
            } else {
                t.multiClusterQuota(r, o);
            }
        };
        t.getQuotaInfo = function(e) {
            return module26(t.workspaceQuota, e, undefined);
        };
        t.handleOk = function() {
            t.props.onOk(t.state.data);
        };
        t.handleError = function(e) {
            return t.setState({
                error: e
            });
        };
        t.getQuotaInfo = function(e) {
            return module26(t.workspaceQuota, e, undefined);
        };
        t.quotaStore = e.isEdgeWize ? new module1094 : new module886;
        t.workspaceQuotaStore = e.isEdgeWize ? new module1532 : new module914;
        t.state = {
            data: module26(e.detail, "limit", {}),
            error: "",
            availableQuota: {}
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchQuota();
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                const detail = this.props.detail;
                if (detail.limit && detail.limit !== e.detail.limit) {
                    this.setState({
                        data: detail.limit
                    });
                }
            }
        },
        {
            key: "getGpuLimit",
            value: function() {
                return gpuLimitsArr(this.workspaceQuota);
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel, isSubmitting } = props;
                const error = this.state.error;
                return <Module788 width={960} title={t("EDIT_DEFAULT_CONTAINER_QUOTAS")} icon="firewall" onOk={this.handleOk} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting} disableSubmit={!!error}><Module873 defaultValue={this.resourceLimit} onChange={this.handleChange} onError={this.handleError} supportGpuSelect={this.props.supportGpuSelect || false} workspaceLimitProps={this.workspaceLimitProps}/></Module788>;
            }
        },
        {
            key: "resourceLimit",
            get: function() {
                return {
                    requests: module26(this.props.detail, "limit.defaultRequest", {}),
                    limits: module26(this.props.detail, "limit.default", {})
                };
            }
        },
        {
            key: "workspaceQuota",
            get: function() {
                const e = module26(this.state, "availableQuota.namespace", {});
                const t = module26(this.state, "availableQuota.workspace", {});
                return module1166(e, t, function(e, t) {
                    if (e || t) {
                        if (module159(e)) {
                            return t;
                        }
                        if (e < t) {
                            return e;
                        }
                        return t;
                    }
                });
            }
        },
        {
            key: "workspaceLimitProps",
            get: function() {
                return {
                    limits: {
                        cpu: this.getQuotaInfo("limits.cpu"),
                        memory: this.getQuotaInfo("limits.memory")
                    },
                    requests: {
                        cpu: this.getQuotaInfo("requests.cpu"),
                        memory: this.getQuotaInfo("requests.memory")
                    },
                    gpuLimit: this.getGpuLimit()
                };
            }
        }
    ]);
    return r;
})(Component);
export default A;
A.propTypes = {
    isEdgeWize: module1.bool,
    detail: module1.object,
    namespace: module1.string,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
A.defaultProps = {
    isEdgeWize: false,
    visible: false,
    isSubmitting: false,
    namespace: "",
    detail: {},
    onOk: function() {},
    onCancel: function() {}
};
