import "./module-12.js";
import "./module-11.js";
import "./module-6.js";
import "./module-30.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-17.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module41 from "./module-41.js";
import module44 from "./module-44.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module189 from "./module-189.js";
import module14 from "./module-14.js";
import { generateId, gpuLimitsArr, resourceLimitKey } from "./module-52.js";
import { getLeftQuota } from "./module-248.js";
import { PATTERN_NAME } from "./module-72.js";
import module186 from "./module-186.js";
import Module873 from "./module-873.js";
import Module951 from "./module-951.js";
import module886 from "./module-886.js";
import module914 from "./module-914.js";
import module439 from "./module-439.js";
import module853 from "./module-853.js";
import module1094 from "./module-1094.js";
import module970 from "./module-970.js";
import module934 from "./module-934.js";
const P = ((Component_1)=>{
    module55(n, Component_1);
    let a;
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
    })(n);
    function n(e) {
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.workspaceLimitProps = function() {
            const leftQuota = t.state.leftQuota;
            const r = leftQuota?.workspace ?? {};
            if (module63(r)) {
                return {};
            }
            return {
                limits: {
                    cpu: module26(r, "limits.cpu"),
                    memory: module26(r, "limits.memory")
                },
                requests: {
                    cpu: module26(r, "requests.cpu"),
                    memory: module26(r, "requests.memory")
                },
                gpuLimit: t.getGpuLimit()
            };
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
                    const t = module26(e[0], "data.hard");
                    const a = getLeftQuota(e[1], module26(e[0], "data"));
                    const { namespace, workspace } = a;
                    resolve({
                        workspaceQuota: workspace,
                        namespaceQuota: {
                            ...namespace,
                            ...module189(t, resourceLimitKey)
                        }
                    });
                });
            });
        };
        t.state = {
            limitRange: {},
            imageRegistries: [],
            leftQuota: {}
        };
        const e_isEdgeWize = e.isEdgeWize;
        t.quotaStore = e_isEdgeWize ? new module1094 : new module886;
        t.projectStore = e_isEdgeWize ? new module970 : new module439;
        t.secretStore = e_isEdgeWize ? new module934 : new module853;
        t.workspaceQuotaStore = new module914;
        return t;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "getGpuLimit",
            value: function() {
                return gpuLimitsArr(this.workspaceQuota);
            }
        },
        {
            key: "fetchData",
            value: (a = module44(module41.mark(function e() {
                let t;
                let a;
                let cluster;
                let n;
                let u;
                let o;
                let workspace;
                let c;
                let s;
                const _this = this;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                a = this.props;
                                cluster = a.cluster;
                                n = a.namespace;
                                u = a.projectDetail;
                                if (!(t = u ? u.workspace : this.props.workspace) || !n) {
                                    e.next = 10;
                                    break;
                                }
                                e.next = 5;
                                return this.singleClusterQuota(t, n, cluster);
                            case 5:
                                o = e.sent;
                                workspace = o.workspaceQuota;
                                c = o.namespaceQuota;
                                s = {
                                    workspace,
                                    namespace: c
                                };
                                this.setState({
                                    leftQuota: s,
                                    availableQuota: s
                                });
                            case 10:
                                Promise.all([
                                    this.projectStore.fetchLimitRanges({
                                        cluster,
                                        namespace: n
                                    }),
                                    this.secretStore.fetchListByK8s({
                                        cluster,
                                        namespace: n,
                                        fieldSelector: "type=kubernetes.io/dockerconfigjson"
                                    })
                                ]).then(()=>{
                                    _this.setState({
                                        limitRange: module26(module14.toJS(_this.projectStore.limitRanges), "data[0].limit"),
                                        imageRegistries: _this.secretStore.list.data
                                    });
                                });
                            case 11:
                            case "end":
                                return e.stop();
                        }
                    }
                }, e, this);
            })), function() {
                return a.apply(this, arguments);
            })
        },
        {
            key: "renderAdvancedSettings",
            value: function() {
                let e;
                const defaultResourceLimit = this.defaultResourceLimit;
                return <Module951 defaultShow={module63(defaultResourceLimit)}><><module186.Alert className="margin-b12" type="info" message={t("CONTAINER_RESOURCE_LIMIT_TIP")}/><module186.Form.Item><Module873 name={`${this.prefix}resources`} defaultValue={defaultResourceLimit} supportGpuSelect={(e = this.props?.supportGpuSelect) !== null && e !== undefined && e} workspaceLimitProps={this.workspaceLimitProps()}/></module186.Form.Item></></Module951>;
            }
        },
        {
            key: "render",
            value: function() {
                return <module186.Form.Group label={t("CONTAINER_SETTINGS")} desc={t("CONTAINER_SETTINGS_DESC")} noWrapper><module186.Form.Item className="margin-t12" label={t("CONTAINER_NAME")} desc={t("NAME_DESC")} rules={[
                    {
                        required: true,
                        message: t("NAME_EMPTY_DESC")
                    },
                    {
                        pattern: PATTERN_NAME,
                        message: t("INVALID_NAME_DESC")
                    }
                ]}><module186.Input name={`${this.prefix}name`} defaultValue={`container-${generateId()}`} maxLength={63}/></module186.Form.Item>{this.renderAdvancedSettings()}</module186.Form.Group>;
            }
        },
        {
            key: "prefix",
            get: function() {
                const prefix = this.props.prefix;
                if (prefix) {
                    return `${prefix}.`;
                }
                return "";
            }
        },
        {
            key: "defaultResourceLimit",
            get: function() {
                const limitRange = this.state.limitRange;
                const t = limitRange === undefined ? {} : limitRange;
                if (t.defaultRequest || t.default) {
                    return {
                        requests: t.defaultRequest || {},
                        limits: t.default || {}
                    };
                }
            }
        },
        {
            key: "imageRegistries",
            get: function() {
                return this.state.imageRegistries.map((e)=>{
                    const t = module26(e, 'data[".dockerconfigjson"].auths', {});
                    const url = Object.keys(t)[0] || "";
                    return {
                        url,
                        username: module26(t[url], "username"),
                        label: e.name,
                        value: e.name
                    };
                });
            }
        }
    ]);
    return n;
})(Component);
export default P;
P.defaultProps = {
    prefix: ""
};
