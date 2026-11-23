import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module63 from "unpacked/module-63.js";
import { inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import Module796 from "components/Base/Status";
import { getDisplayName, getLocalTime, memoryFormat } from "utils/index";
import { trigger } from "utils/action";
import module1212 from "stores/volumeSnapshotContent";
import Module806 from "pages/projects/containers/Base/Detail";
import module4209 from "unpacked/module-4209.js";
let o;
const R = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.store = new module1212;
        e.fetchData = async function t() {
            await e.store.fetchDetail(e.props.match.params);
        };
        e.getOperations = function() {
            return [];
        };
        e.getAttrs = function() {
            const detail = e.store.detail;
            const r = detail === undefined ? {} : detail;
            const { createTime, creator, status, restoreSize, snapshotClassName, snapshotHandle, driver, deletionPolicy } = r;
            if (module63(r)) {
                return null;
            }
            return [
                {
                    name: t("STATUS"),
                    value: <div><Module796 type={status} name={t(status.toUpperCase())}/></div>
                },
                {
                    name: t("CAPACITY"),
                    value: `${memoryFormat(restoreSize, "Gi")}Gi`
                },
                {
                    name: t("VOLUME_SNAPSHOT_CLASS"),
                    value: snapshotClassName
                },
                {
                    name: t("SNAPSHOT_HANDLE"),
                    value: snapshotHandle
                },
                {
                    name: t("PROVISIONER"),
                    value: driver
                },
                {
                    name: t("DELETION_POLICY"),
                    value: deletionPolicy
                },
                {
                    name: t("CREATION_TIME_TCAP"),
                    value: getLocalTime(createTime).format("YYYY-MM-DD HH:mm:ss")
                },
                {
                    name: t("CREATOR"),
                    value: creator === "" ? "-" : creator
                }
            ];
        };
        e.returnTolist = function() {
            e.props.rootStore.routing.push(e.listUrl);
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "render",
            value: function() {
                const stores = {
                    detailStore: this.store
                };
                if (this.store.isLoading && !this.store.detail.name) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const a = {
                    module: this.module,
                    authKey: this.authKey,
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    attrs: this.getAttrs(),
                    operations: this.getOperations(),
                    icon: "storage",
                    breadcrumbs: [
                        {
                            label: t("VOLUME_SNAPSHOT_CONTENT_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module806 stores={stores} {...a} routes={module4209(this.props.match.path)}/>;
            }
        },
        {
            key: "name",
            get: function() {
                return "VOLUME_SNAPSHOT_CONTENT";
            }
        },
        {
            key: "module",
            get: function() {
                return "snapshot-content";
            }
        },
        {
            key: "authKey",
            get: function() {
                return "volumesnapshots";
            }
        },
        {
            key: "listUrl",
            get: function() {
                const cluster = this.props.match.params.cluster;
                return `/whizard-telemetry/${cluster}/volume-snapshots/${this.module}`;
            }
        }
    ]);
    return r;
})(Component)) || o) || o) || o;
export default R;
