import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-30.js";
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
import "./module-315.js";
import "./module-31.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module26 from "./module-26.js";
import module189 from "./module-189.js";
import module1166 from "./module-1166.js";
import module159 from "./module-159.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import module914 from "./module-914.js";
import { resourceLimitKey } from "./module-52.js";
import { getLeftQuota } from "./module-248.js";
import module853 from "./module-853.js";
import module886 from "./module-886.js";
import module1095 from "./module-1095.js";
import module1050 from "./module-1050.js";
import module1294 from "./module-1294.js";
let u;
const M = observer(u = ((e)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.state = {
            quota: {},
            limitRange: {},
            imageRegistries: [],
            availableQuota: {}
        };
        e.quotaStore = new module886;
        e.workspaceQuotaStore = new module914;
        e.limitRangeStore = new module1095;
        e.imageRegistryStore = new module853;
        e.handleSubmit = function(t) {
            const e_props = e.props;
            const { index, containerType } = e_props;
            e_props.onEdit({
                index,
                containerType,
                data: module189(t, "type")
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
                this.fetchQuota();
            }
        },
        {
            key: "fetchData",
            value: function() {
                const _this = this;
                const props = this.props;
                const { cluster, namespace } = props;
                Promise.all([
                    this.quotaStore.fetch({
                        cluster,
                        namespace
                    }),
                    this.limitRangeStore.fetchListByK8s({
                        cluster,
                        namespace
                    }),
                    this.imageRegistryStore.fetchListByK8s({
                        cluster,
                        namespace,
                        fieldSelector: "type=kubernetes.io/dockerconfigjson"
                    })
                ]).then((t)=>{
                    const a = module96(t, 3);
                    const quota = a[0];
                    const n = a[1];
                    const imageRegistries = a[2];
                    _this.setState({
                        quota,
                        limitRange: module26(n, "[0].limit"),
                        imageRegistries
                    });
                });
            }
        },
        {
            key: "fetchQuota",
            value: function() {
                const _this = this;
                const props = this.props;
                const { cluster, workspace, namespace } = props;
                if (workspace && namespace) {
                    Promise.all([
                        this.quotaStore.fetch({
                            cluster,
                            namespace
                        }),
                        this.workspaceQuotaStore.fetchDetail({
                            name: workspace,
                            workspace,
                            cluster
                        })
                    ]).then(()=>{
                        const t = module14.toJS(_this.quotaStore.data.hard);
                        const a = getLeftQuota(module26(_this.workspaceQuotaStore.detail, "status.total"), _this.quotaStore.data);
                        const { namespace, workspace } = a;
                        _this.setState({
                            availableQuota: {
                                workspace,
                                namespace: {
                                    ...namespace,
                                    ...module189(t, resourceLimitKey)
                                }
                            }
                        });
                    });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { cluster, namespace, formData, containerType, supportGpuSelect } = props;
                const state = this.state;
                const { quota, limitRanges, imageRegistries } = state;
                return module553.default.createElement(module1050, {
                    ...this.props,
                    title: module553.default.createElement("span", null, `${t("IMAGE")}: ${formData.image}`),
                    onOk: this.handleSubmit
                }, module553.default.createElement(module1294, {
                    data: formData,
                    cluster,
                    namespace,
                    quota,
                    limitRanges,
                    imageRegistries,
                    defaultContainerType: containerType,
                    supportGpuSelect,
                    workspaceQuota: this.workspaceQuota
                }));
            }
        },
        {
            key: "workspaceQuota",
            get: function() {
                const e = module26(this.state.availableQuota, "namespace", {});
                const t = module26(this.state.availableQuota, "workspace", {});
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
        }
    ]);
    return r;
})(module553.Component)) || u;
export default M;
