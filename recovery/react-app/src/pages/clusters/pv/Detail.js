import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-86.js";
import "unpacked/module-73.js";
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
import module26 from "unpacked/module-26.js";
import { inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import Module796 from "components/Base/Status";
import { getDisplayName, getLocalTime, memoryFormat } from "utils/index";
import { trigger } from "utils/action";
import module14 from "unpacked/module-14.js";
import module908 from "stores/pv";
import Module806 from "pages/projects/containers/Base/Detail";
import module3941 from "unpacked/module-3941.js";
const D = ((Component_1)=>{
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
        e.store = new module908;
        e.fetchData = async function t() {
            await e.store.fetchDetail(e.props.match.params);
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
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "delete",
                    type: "danger",
                    disabled: [
                        "Bound"
                    ].indexOf(module26(e.store.detail, "phase")) > -1,
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
            const { createTime, phase, storageClassName, volumeHandle, persistentVolumeReclaimPolicy, accessModes } = r;
            const s = accessModes === undefined ? [
                "-"
            ] : accessModes;
            const { capacity, volumeMode } = r;
            if (module63(module14.toJS(r))) {
                return null;
            }
            return [
                {
                    name: t("STATUS"),
                    value: <div><Module796 type={phase} name={t(`PV_STATUS_${phase.toUpperCase()}`)}/></div>
                },
                {
                    name: t("CAPACITY"),
                    value: `${memoryFormat(capacity, "Gi")}Gi`
                },
                {
                    name: t("ACCESS_MODE_TCAP"),
                    value: s.join(",")
                },
                {
                    name: t("STORAGE_CLASS"),
                    value: storageClassName
                },
                {
                    name: t("VOLUME_HANDLE"),
                    value: volumeHandle
                },
                {
                    name: t("RECLAIM_POLICY"),
                    value: persistentVolumeReclaimPolicy
                },
                {
                    name: t("VOLUME_MODE"),
                    value: t(`VOLUME_MODE_${volumeMode.toUpperCase()}`)
                },
                {
                    name: t("CREATION_TIME_TCAP"),
                    value: getLocalTime(createTime).format("YYYY-MM-DD HH:mm:ss")
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
                    operations: this.isFedManaged ? [] : this.getOperations(),
                    icon: "storage",
                    breadcrumbs: [
                        {
                            label: t("PERSISTENT_VOLUME_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module806 stores={stores} {...a} routes={module3941(this.props.match.path)}/>;
            }
        },
        {
            key: "name",
            get: function() {
                return "PERSISTENT_VOLUME";
            }
        },
        {
            key: "module",
            get: function() {
                return "persistentvolumes";
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
                const cluster = this.props.match.params.cluster;
                return `/clusters/${cluster}/volumes/PV`;
            }
        },
        {
            key: "isFedManaged",
            get: function() {
                return this.store.detail.isFedManaged;
            }
        }
    ]);
    return r;
})(Component);
const k = inject("rootStore")(observer(trigger(D)));
export default k;
const N = D;
export { N as Component };
