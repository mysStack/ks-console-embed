import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-10.js";
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-41.js";
import "./module-44.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module88 from "./module-88.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module49 from "./module-49.js";
import "./module-66.js";
import { Component } from "./module-553.js";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module159 from "./module-159.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module796 from "./module-796.js";
import { compareVersion, getDisplayName, getLocalTime, isEdgeWizePage, memoryFormat, showNameAndAlias } from "./module-52.js";
import { trigger } from "./module-792.js";
import module839 from "./module-839.js";
import module867 from "./module-867.js";
import module1300 from "./module-1300.js";
import module1548 from "./module-1548.js";
import Module806 from "./module-806.js";
import module3917 from "./module-3917.js";
let o;
let i;
o = ((Component_1)=>{
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.isEdgeWize = isEdgeWizePage();
        e.store = e.isEdgeWize ? new module1300 : new module839;
        e.storageclass = e.isEdgeWize ? new module1548 : new module867;
        module65(e, "ksVersion", i, module88(e));
        e.getDisAllowToDo = function(t) {
            try {
                const a = module14.toJS(e.storageclass).detail.annotations[t];
                const r = e.store.detail.phase === "Pending";
                return !(!module159(a) && !r && JSON.parse(a));
            } catch (e) {
                return true;
            }
        };
        e.fetchData = async function t() {
            let a;
            let cluster;
            let n;
            a = e.props.match.params;
            cluster = a.cluster;
            await e.store.fetchDetail(e.props.match.params);
            n = e.store.detail.storageClassName;
            await e.storageclass.fetchDetail({
                cluster,
                name: n
            });
            e.ksVersion = await e.store.getKsVersion(a);
        };
        e.getOperations = function() {
            return [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("resource.baseinfo.edit", {
                            type: e.name,
                            detail: module14.toJS(e.store.detail),
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "editYaml",
                    icon: "pen",
                    text: t("EDIT_YAML"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("resource.yaml.edit", {
                            detail: e.store.detail,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "clone",
                    type: "control",
                    text: t("CLONE"),
                    icon: "copy",
                    action: "create",
                    disabled: e.disableClone,
                    onClick: function() {
                        e.trigger("volume.clone", {});
                    }
                },
                {
                    key: "snapshot",
                    type: "control",
                    text: t("CREATE_SNAPSHOT"),
                    icon: "copy",
                    action: "create",
                    disabled: e.disableSnapshot,
                    show: !e.disableSnapshot,
                    onClick: function() {
                        const cluster = e.props.match.params.cluster;
                        e.trigger("volume.create.snapshot", {
                            detail: e.store.detail,
                            cluster,
                            provisioner: e.storageclass.detail?.provisioner
                        });
                    }
                },
                {
                    key: "expand",
                    text: t("EXPAND"),
                    icon: "scaling",
                    action: "edit",
                    disabled: e.allowExpand,
                    onClick: function() {
                        const e_store = e.store;
                        const { detail, isSubmitting } = e_store;
                        const detail_1 = module14.toJS(detail._originData);
                        const l = e.storageclass.getStorageSizeConfig();
                        e.trigger("volume.expand", {
                            isExpanding: isSubmitting,
                            detail: detail_1,
                            max: l.max,
                            min: l.min,
                            step: l.step
                        });
                    }
                },
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "delete",
                    type: "danger",
                    onClick: function() {
                        return e.trigger("resource.delete", {
                            type: e.name,
                            detail: module14.toJS(e.store.detail),
                            success: e.returnTolist
                        });
                    }
                }
            ];
        };
        e.getAttrs = function() {
            const detail = e.store.detail;
            const r = detail === undefined ? {} : detail;
            const { createTime, creator, phase, capacity, namespace, accessMode } = r;
            const s = accessMode === undefined ? "-" : accessMode;
            if (module63(r)) {
                return null;
            }
            const f = r.storageClassName || module26(r, "annotations['volume.beta.kubernetes.io/storage-class']");
            return [
                {
                    name: t("PROJECT"),
                    value: showNameAndAlias(namespace, "project")
                },
                {
                    name: t("STATUS"),
                    value: <div><Module796 type={phase} name={t(`VOLUME_STATUS_${phase.toUpperCase()}`)}/></div>
                },
                {
                    name: t("CAPACITY"),
                    value: `${memoryFormat(capacity, "Gi")}Gi`
                },
                {
                    name: t("ACCESS_MODE_TCAP"),
                    value: s
                },
                {
                    name: t("STORAGE_CLASS"),
                    value: f
                },
                {
                    name: t("PROVISIONER"),
                    value: module26(r, "annotations['volume.beta.kubernetes.io/storage-provisioner']", "-")
                },
                {
                    name: t("PERSISTENT_VOLUME"),
                    value: module26(r, "_originData.spec.volumeName", "")
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
                            label: t("PERSISTENT_VOLUME_CLAIM_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module806 isEdgeWizePage={this.isEdgeWize} stores={stores} {...a} routes={module3917(this.props.match.path)}/>;
            }
        },
        {
            key: "name",
            get: function() {
                return "PERSISTENT_VOLUME_CLAIM";
            }
        },
        {
            key: "module",
            get: function() {
                return "volumes";
            }
        },
        {
            key: "authKey",
            get: function() {
                return "persistentvolumeclaims";
            }
        },
        {
            key: "listUrl",
            get: function() {
                const isFedManaged = module14.toJS(this.store.detail).isFedManaged;
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                if (workspace) {
                    if (isFedManaged) {
                        return `/${workspace}/federatedprojects/${namespace}/${this.module}`;
                    }
                    return `/${workspace}/clusters/${cluster}/projects/${namespace}/${this.module}`;
                }
                return `/clusters/${cluster}/${this.module}`;
            }
        },
        {
            key: "isFedManaged",
            get: function() {
                return this.store.detail.isFedManaged;
            }
        },
        {
            key: "disableClone",
            get: function() {
                return this.getDisAllowToDo("storageclass.kubesphere.io/allow-clone");
            }
        },
        {
            key: "disableSnapshot",
            get: function() {
                return compareVersion(`${this.ksVersion}`, "v3.3") < 0 || this.getDisAllowToDo("storageclass.kubesphere.io/allow-snapshot") || !globals.app.hasKSModule("storage-utils");
            }
        },
        {
            key: "allowExpand",
            get: function() {
                const e = module26(this.storageclass.detail, "allowVolumeExpansion", false);
                return !(this.store.detail.phase !== "Pending" && e);
            }
        }
    ]);
    return r;
})(Component);
i = module49(o.prototype, "ksVersion", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
});
const A = o;
const j = inject("rootStore")(observer(trigger(A)));
export default j;
const L = A;
export { L as Component };
