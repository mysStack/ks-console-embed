import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
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
import module839 from "stores/volume";
import Module796 from "components/Base/Status";
import { getDisplayName, getLocalTime, memoryFormat, showNameAndAlias } from "utils/index";
import { trigger } from "utils/action";
import module14 from "unpacked/module-14.js";
import module915 from "stores/volumeSnapshot";
import module911 from "stores/volumeSnapshotClasses";
import Module806 from "pages/projects/containers/Base/Detail";
import module4187 from "unpacked/module-4187.js";
let c;
const N = inject("rootStore")(c = observer(c = trigger(c = ((Component_1)=>{
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
    function n(...u_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...u_1);
        e.store = new module915;
        e.snapshotClass = new module911;
        e.volumeStore = new module839;
        e.fetchData = async function t() {
            let a;
            a = e.props.match.params;
            await e.store.fetchDetail(e.props.match.params);
            await e.snapshotClass.fetchDetail({
                cluster: a.cluster,
                name: e.store.detail.snapshotClassName
            });
        };
        e.getVolumeInfo = function() {
            const params = e.props.match.params;
            const snapshotSourceName = e.store.detail.snapshotSourceName;
            e.volumeStore.fetchDetail({
                ...params,
                name: snapshotSourceName
            });
        };
        e.showApply = function() {
            const params = e.props.match.params;
            const { cluster, namespace } = params;
            const detail = module14.toJS(e.snapshotClass).detail;
            return !module63(detail) && globals.app.hasPermission({
                module: "volumes",
                action: "create",
                project: namespace,
                cluster
            });
        };
        e.getOperations = function() {
            return [];
        };
        e.getAttrs = function() {
            const detail = e.store.detail;
            const r = detail === undefined ? {} : detail;
            const { createTime, restoreSize, backupStatus } = r;
            const o = backupStatus === undefined ? "" : backupStatus;
            const { creator, errorMessage, namespace, snapshotClassName } = r;
            if (module63(r)) {
                return null;
            }
            return [
                {
                    name: t("PROJECT"),
                    value: showNameAndAlias(namespace, "project")
                },
                {
                    name: t("STATUS"),
                    value: <div><Module796 type={o} name={t(`CREATE_STATUS_${o.toUpperCase()}`)}/> {!module63(errorMessage) && <module186.Tooltip content={errorMessage}><module186.Icon name="question"/></module186.Tooltip>}</div>
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
                    name: t("CREATION_TIME_TCAP"),
                    value: getLocalTime(createTime).format("YYYY-MM-DD HH:mm:ss")
                },
                {
                    name: t("CREATOR"),
                    value: creator
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
            value: async function() {
                await this.fetchData();
                this.getVolumeInfo();
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
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    icon: "snapshot",
                    breadcrumbs: [
                        {
                            label: t("VOLUME_SNAPSHOT_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module806 stores={stores} {...a} routes={module4187(this.props.match.path)}/>;
            }
        },
        {
            key: "name",
            get: function() {
                return "VOLUME_SNAPSHOT";
            }
        },
        {
            key: "module",
            get: function() {
                return "volume-snapshots";
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
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                if (workspace) {
                    return `/${workspace}/whizard-telemetry/${cluster}/projects/${namespace}/${this.module}`;
                }
                return `/whizard-telemetry/${cluster}/${this.module}`;
            }
        }
    ]);
    return n;
})(Component)) || c) || c) || c;
export default N;
