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
import { cantDeleteSnapshotContent } from "utils/volume";
import module3934 from "pages/clusters/containers/Storage/VolumeSnapshots/SnapshotContent/Detail/routes";
let i;
const C = inject("rootStore")(i = observer(i = trigger(i = ((Component_1)=>{
    module55(n, Component_1);
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...o_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...o_1);
        e.store = new module1212;
        e.fetchData = async function t() {
            await e.store.fetchDetail(e.props.match.params);
        };
        e.getOperations = function() {
            const params = e.props.match.params;
            const { cluster, namespace } = params;
            return [
                {
                    key: "view",
                    icon: "eye",
                    text: t("VIEW_YAML"),
                    action: "view",
                    onClick: async ()=>{
                        e.trigger("resource.yaml.edit", {
                            readOnly: true,
                            detail: e.store.detail,
                            yaml: e.store.detail._originData
                        });
                    }
                },
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    onClick: function() {
                        e.trigger("volume.snapshotContent.baseInfo.edit", {
                            store: e.store,
                            cluster,
                            namespace,
                            detail: e.store.detail,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "delete",
                    disabled: cantDeleteSnapshotContent(e.store.detail),
                    onClick: function() {
                        return e.trigger("resource.delete", {
                            type: e.name,
                            detail: e.store.detail,
                            success: e.returnTolist
                        });
                    }
                }
            ];
        };
        e.getAttrs = function() {
            const detail = e.store.detail;
            const n = detail === undefined ? {} : detail;
            const { createTime, creator, status, restoreSize, snapshotClassName, snapshotHandle, driver, deletionPolicy } = n;
            if (module63(n)) {
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
    module37(n, [
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
                const r = {
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
                return <Module806 stores={stores} {...r} routes={module3934(this.props.match.path)}/>;
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
                return `/clusters/${cluster}/volume-snapshots/${this.module}`;
            }
        }
    ]);
    return n;
})(Component)) || i) || i) || i;
export default C;
