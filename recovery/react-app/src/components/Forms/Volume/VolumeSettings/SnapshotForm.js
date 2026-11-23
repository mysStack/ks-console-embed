import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module31 from "unpacked/module-31.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import * as module553 from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module864 from "components/Base/ScrollLoad";
import module14 from "unpacked/module-14.js";
import { observer } from "unpacked/module-239.js";
import module1354 from "components/Inputs/AccessModes";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import module1 from "unpacked/module-1.js";
import module915 from "stores/volumeSnapshot";
import module911 from "stores/volumeSnapshotClasses";
import module839 from "stores/volume";
import { safeParseJSON } from "utils/index";
import { ACCESS_MODES } from "utils/constants";
import module3566 from "unpacked/module-3566.js";
let m;
let v;
let h;
const L = observer((h = v = ((e)=>{
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
        e.snapshotStore = new module915;
        e.snapshotClassStore = new module911;
        e.volumeStore = new module839;
        e.fetchSnapshots = function(t = {
            limit: 10
        }) {
            const e_props = e.props;
            const { namespace, cluster } = e_props;
            e.snapshotStore.fetchList({
                ...t,
                namespace,
                cluster,
                status: "ready"
            }).then(()=>{
                const data = e.snapshotStore.list.data;
                const a = module26(data, "[0].name");
                if (a) {
                    module74(e.context.formData, "spec.dataSource.name", a);
                    e.handeSnapshotChange(a);
                }
            });
        };
        e.fetchStorageClassDetail = function() {
            if (e.storageClassName && e.storageClassName !== e.snapshotClassStore.detail.name) {
                e.snapshotClassStore.fetchDetail({
                    cluster: e.props.cluster,
                    name: e.storageClassName
                });
            }
        };
        e.getSnapshotSourceVolumeInfo = function(name) {
            const e_props = e.props;
            const { namespace, cluster } = e_props;
            return e.volumeStore.fetchDetail({
                name,
                namespace,
                cluster
            });
        };
        e.handeSnapshotChange = async (a)=>{
            let r;
            let n;
            r = e.snapshotStore.list.data;
            n = module14.toJS(r).find((e)=>e.name === a) || {};
            await e.getSnapshotSourceVolumeInfo(n.snapshotSourceName);
            module74(e.context.formData, "spec.resources.requests.storage", n.restoreSize);
            module74(e.context.formData, "spec.storageClassName", e.volumeStore.detail.storageClassName);
            module74(e.context.formData, "spec.dataSource.kind", "VolumeSnapshot");
            module74(e.context.formData, "spec.dataSource.apiGroup", "snapshot.storage.k8s.io");
            e.fetchStorageClassDetail();
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.storageClassName) {
                    this.fetchStorageClassDetail();
                }
            }
        },
        {
            key: "render",
            value: function() {
                const list = this.snapshotStore.list;
                const { data, total, page, isLoading } = list;
                const isLoading_1 = this.snapshotClassStore.isLoading;
                const supportedAccessModes = this.supportedAccessModes;
                return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module186.Form.Item, {
                    label: t("VOLUME_SNAPSHOT"),
                    rules: [
                        {
                            required: true,
                            message: t("PARAM_REQUIRED")
                        }
                    ],
                    className: module3566.snapshotContainer
                }, module553.default.createElement(j, {
                    className: module3566.snapshots,
                    name: "spec.dataSource.name",
                    snapshots: module14.toJS(data),
                    total,
                    page,
                    loading: isLoading,
                    onChange: this.handeSnapshotChange,
                    onFetch: this.fetchSnapshots
                })), this.storageClassName && module553.default.createElement(module186.Loading, {
                    spinning: isLoading_1
                }, module553.default.createElement(module186.Form.Item, {
                    className: "margin-t12",
                    label: t("ACCESS_MODE"),
                    rules: [
                        {
                            required: true,
                            message: t("PARAM_REQUIRED")
                        }
                    ]
                }, module553.default.createElement(module1354, {
                    name: "spec.accessModes[0]",
                    defaultValue: module26(supportedAccessModes, "[0]") || Object.keys(ACCESS_MODES)[0],
                    supportedAccessModes
                }))));
            }
        },
        {
            key: "storageClassName",
            get: function() {
                return module26(this.context.formData, "spec.storageClassName");
            }
        },
        {
            key: "supportedAccessModes",
            get: function() {
                return safeParseJSON(module26(this.snapshotClassStore.detail, 'annotations["storageclass.kubesphere.io/supported-access-modes"]', ""));
            }
        }
    ]);
    return r;
})(module553.Component), v.contextTypes = {
    formData: module1.object
}, m = h)) || m;
function j({ onChange, snapshots, total, page, loading, onFetch, value, className }) {
    return module553.default.createElement(module864, {
        className,
        data: snapshots,
        total,
        page,
        loading,
        onFetch
    }, snapshots.map((e)=>module553.default.createElement("div", {
            className: module3(module31({}, module3566.selected, e.name === value), module3566.snapshot),
            key: e.uid,
            onClick: function() {
                return onChange(e.name);
            }
        }, module553.default.createElement(module186.Icon, {
            name: "snapshot",
            type: e.name === value ? "light" : "dark",
            size: 40
        }), module553.default.createElement("div", null, module553.default.createElement("h3", null, e.name), module553.default.createElement("p", null, e.snapshotClassName)), module553.default.createElement("div", null, module553.default.createElement("h3", null, e.restoreSize || 0), module553.default.createElement("p", null, t("CAPACITY"))), module553.default.createElement("div", null, module553.default.createElement("h3", null, e.createTime), module553.default.createElement("p", null, t("CREATION_TIME_TCAP"))))));
}
export default L;
