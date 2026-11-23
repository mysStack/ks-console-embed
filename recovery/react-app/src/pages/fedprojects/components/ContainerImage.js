import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-30.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-38.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module189 from "unpacked/module-189.js";
import module1166 from "unpacked/module-1166.js";
import module159 from "unpacked/module-159.js";
import module1 from "unpacked/module-1.js";
import { observer } from "unpacked/module-239.js";
import module14 from "unpacked/module-14.js";
import module886 from "stores/quota";
import module914 from "stores/workspace.quota";
import { resourceLimitKey } from "utils/index";
import { getLeftQuota } from "utils/workload";
import module1050 from "components/Forms/Workload/ClusterDiffSettings/EditForm";
import module853 from "stores/secret";
import module2935 from "pages/fedprojects/components/ContainerSetting";
let o;
let u;
let c;
const w = observer((c = u = ((e)=>{
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
        t.handleSubmit = function(e) {
            const t_props = t.props;
            const { index, containerType } = t_props;
            t_props.onEdit({
                index,
                containerType,
                data: module189(e, "type")
            });
        };
        t.quotaStore = new module886;
        t.workspaceQuotaStore = new module914;
        t.imageRegistryStore = new module853;
        t.state = {
            availableQuota: {},
            imageRegistries: [],
            imageDetail: {}
        };
        return t;
    }
    module37(r, [
        {
            key: "getChildContext",
            value: function() {
                const _this = this;
                return {
                    imageDetail: this.state.imageDetail,
                    setImageDetail: function(imageDetail) {
                        _this.setState({
                            imageDetail
                        });
                    }
                };
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                this.fetchQuota();
                this.fetchImageSecret();
            }
        },
        {
            key: "fetchImageSecret",
            value: function() {
                const _this = this;
                const props = this.props;
                const { cluster, namespace } = props;
                this.imageRegistryStore.fetchListByK8s({
                    cluster,
                    namespace,
                    fieldSelector: "type=kubernetes.io/dockerconfigjson"
                }).then((imageRegistries)=>{
                    _this.setState({
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
                const { cluster, namespace, formData, containerType, isEdit } = props;
                const limitRanges = module26(formData, "resources");
                const imageRegistries = this.state.imageRegistries;
                return module553.default.createElement(module1050, {
                    ...this.props,
                    title: module553.default.createElement("span", null, `${t("IMAGE")}: ${formData.image}`),
                    onOk: this.handleSubmit
                }, module553.default.createElement(module2935, {
                    data: formData,
                    cluster,
                    namespace,
                    limitRanges,
                    defaultContainerType: containerType,
                    workspaceQuota: this.workspaceQuota,
                    isEdit,
                    imageRegistries
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
})(module553.Component), u.childContextTypes = {
    imageDetail: module1.object,
    setImageDetail: module1.func
}, o = c)) || o;
export default w;
