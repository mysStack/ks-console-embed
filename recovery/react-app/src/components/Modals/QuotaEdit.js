import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-30.js";
import "unpacked/module-73.js";
import "unpacked/module-48.js";
import "unpacked/module-97.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-190.js";
import "unpacked/module-98.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-324.js";
import "unpacked/module-85.js";
import "unpacked/module-38.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-460.js";
import "unpacked/module-461.js";
import "unpacked/module-462.js";
import "unpacked/module-463.js";
import "unpacked/module-464.js";
import "unpacked/module-465.js";
import "unpacked/module-466.js";
import module41 from "unpacked/module-41.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module96 from "utils/babel-helpers/slicedToArray";
import module61 from "unpacked/module-61.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, createRef } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module14 from "unpacked/module-14.js";
import module26 from "unpacked/module-26.js";
import module74 from "unpacked/module-74.js";
import module242 from "unpacked/module-242.js";
import module63 from "unpacked/module-63.js";
import module457 from "unpacked/module-457.js";
import module447 from "unpacked/module-447.js";
import module334 from "unpacked/module-334.js";
import module1726 from "unpacked/module-1726.js";
import module857 from "unpacked/module-857.js";
import module189 from "unpacked/module-189.js";
import module926 from "unpacked/module-926.js";
import module844 from "unpacked/module-844.js";
import { getLeftQuota } from "utils/workload";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import Module873 from "components/Inputs/ResourceLimit";
import Module1379, { STORAGE_CLASS_STORAGE, STORAGE_CLASS_VOLUME_CLAIMS } from "unpacked/module-1379.js";
import module886 from "stores/quota";
import module914 from "stores/workspace.quota";
import module867 from "stores/storageClass";
import { memoryFormat } from "utils/index";
import Module3305 from "components/Modals/QuotaEdit/Quotas";
import module3308 from "unpacked/module-3308.js";
const z = ((Component_1)=>{
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
        t.getStorageSpec = function(e, t) {
            const a = {
                storage: undefined,
                persistentvolumeclaims: undefined
            };
            const r = module26(e, "status.used", {});
            const n = module26(e, "spec.hard", {});
            let l = module26(n, [
                "requests.storage"
            ], null);
            const o = module26(n, "persistentvolumeclaims", null);
            let u = Number(module26(r, [
                "requests.storage"
            ], "0"));
            const c = module26(r, "persistentvolumeclaims", "0");
            const s = module26(t, "storage");
            const i = module26(t, "persistentvolumeclaims");
            if (module844(l) || l === "") {
                a.storage = s;
            } else {
                l = memoryFormat(l, "Gi");
                u = memoryFormat(u, "Gi");
                const f = module1726(l, u);
                a.storage = isFinite(s) ? Math.min(s, f) : f;
            }
            if (module844(o) || o === "") {
                a.persistentvolumeclaims = i;
            } else {
                const d = module1726(Number(o), Number(c));
                a.persistentvolumeclaims = isFinite(i) ? Math.min(i, d) : d;
            }
            const p = {
                "requests.storage": module844(l) || l === "" || module926(l) ? "InfinityGi" : `${l}Gi`,
                persistentvolumeclaims: o || ""
            };
            Object.keys(n).forEach((e)=>{
                if (e.includes(STORAGE_CLASS_STORAGE) || e.includes(STORAGE_CLASS_VOLUME_CLAIMS)) {
                    p[e] = n[e];
                }
            });
            return {
                spec: {
                    ...p
                },
                nsAvailableStorage: {
                    ...a
                }
            };
        };
        t.cancelGpuSetting = function(e) {
            const t = module26(e, "spec.hard", {});
            const supportGpuType = globals.config.supportGpuType;
            const r = module457(t, function(e, t) {
                return supportGpuType.some((e)=>module447(t, e));
            });
            module74(e, "spec.hard", r);
            if (module63(t)) {
                module74(e, "spec.gpu", {
                    type: "",
                    value: ""
                });
            } else {
                const n = module334(t, function(e, t) {
                    return supportGpuType.some((e)=>module447(t, e));
                });
                if (!module63(n)) {
                    const l = Object.keys(n)[0].split(".");
                    module74(e, "spec.gpu", {
                        type: l.slice(1).join("."),
                        value: Object.values(n)[0]
                    });
                }
            }
            return e;
        };
        t.getProjectSpec = function() {
            const spec = t.state.spec;
            const { "requests.storage": requests_storage, persistentvolumeclaims } = spec;
            const n = memoryFormat(requests_storage, "Gi");
            return {
                storage: module926(n) ? Infinity : n,
                persistentvolumeclaims: persistentvolumeclaims === "" ? Infinity : Number(persistentvolumeclaims)
            };
        };
        t.omitKey = [
            "requests.storage",
            "persistentvolumeclaims"
        ];
        t.countTotalRelatedResource = function() {
            const spec = t.state.spec;
            const a = {
                ...module189(spec, t.omitKey)
            };
            const r = {
                totalStorage: 0,
                totalVolumeClaims: 0,
                addedItems: []
            };
            const set = new Set;
            Object.keys(a).forEach((e)=>{
                if (e.includes("requests.storage")) {
                    set.add(e.split(".storageclass.storage.k8s.io/requests.storage")[0]);
                    const t = memoryFormat(a[e], "Gi");
                    if (!module926(t)) {
                        r.totalStorage += t;
                    }
                }
                if (e.includes("persistentvolumeclaims")) {
                    set.add(e.split(".storageclass.storage.k8s.io/persistentvolumeclaims")[0]);
                    const l = a[e];
                    const o = Number(l);
                    if (!(l === "" || module926(o))) {
                        r.totalVolumeClaims += o;
                    }
                }
            });
            r.addedItems = module61(set.values());
            return r;
        };
        t.validStorage = function() {
            const e = t.getProjectSpec();
            const { storage, persistentvolumeclaims } = e;
            const n = t.countTotalRelatedResource();
            const { totalStorage, totalVolumeClaims } = n;
            let disableSave = false;
            if (persistentvolumeclaims < totalVolumeClaims) {
                disableSave = true;
            }
            t.setState({
                disableSave,
                totalStorageError: storage < totalStorage,
                totalVolumeClaimsError: persistentvolumeclaims < totalVolumeClaims
            });
        };
        t.setRelateSourceResult = function() {
            const e = t.countTotalRelatedResource();
            const { totalStorage, totalVolumeClaims, addedItems } = e;
            t.setState({
                currentRelatedStorageTotal: totalStorage,
                currentRelatedVolumeClaimsTotal: totalVolumeClaims,
                addedItems
            });
        };
        t.handleOnChange = function({ actionType, data, originName }) {
            const l = {
                ...t.state.spec
            };
            switch(actionType){
                case "delete":
                    Object.keys(data).forEach((e)=>{
                        delete l[e];
                    });
                    t.setState({
                        spec: {
                            ...l
                        }
                    }, function() {
                        t.setRelateSourceResult();
                    });
                    break;
                case "edit":
                    delete l[`${originName}.storageclass.storage.k8s.io/persistentvolumeclaims`];
                    delete l[`${originName}.storageclass.storage.k8s.io/requests.storage`];
                    t.setState({
                        spec: {
                            ...l,
                            ...data
                        }
                    }, function() {
                        t.validStorage();
                        t.setRelateSourceResult();
                    });
                    break;
                default:
                    t.setState({
                        spec: {
                            ...t.state.spec,
                            ...data
                        }
                    }, function() {
                        t.validStorage();
                        t.setRelateSourceResult();
                    });
            }
        };
        t.handleOk = function() {
            const onOk = t.props.onOk;
            const a = {
                ...t.state.spec
            };
            Object.entries(a).forEach((e)=>{
                const t = module96(e, 2);
                const r = t[0];
                const n = t[1];
                if (!(n !== "InfinityGi" && n !== "")) {
                    delete a[r];
                }
            });
            const r = {
                ...module26(t.state.formTemplate, "spec.hard", {})
            };
            const n = module457(r, function(e, t) {
                return t.includes("requests.storage") || t.includes("persistentvolumeclaims");
            });
            onOk({
                name: t.state.formTemplate.name,
                spec: {
                    hard: {
                        ...n
                    },
                    gpu: module26(t.state.formTemplate, "spec.gpu", {})
                },
                storageLimit: {
                    ...a
                }
            });
        };
        t.form = createRef();
        t.store = new module886;
        t.workspaceQuotaStore = new module914;
        t.state = {
            formTemplate: {},
            error: "",
            leftQuota: {},
            allStorageClass: [],
            spec: {},
            nsAvailableStorage: {},
            wsAvailableRequest: {},
            wsRelatedStoragesLimit: [],
            disableSave: false,
            totalStorageError: false,
            totalVolumeClaimsError: false,
            currentRelatedStorageTotal: 0,
            currentRelatedVolumeClaimsTotal: 0,
            addedItems: []
        };
        t.storageStore = new module867;
        return t;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                const t = this.props.detail || {};
                const { workspace, cluster } = t;
                if (this.props.detail && this.props.detail.name) {
                    Promise.all([
                        this.workspaceQuotaStore.fetchDetail({
                            workspace,
                            name: workspace,
                            cluster
                        })
                    ]).then(()=>{
                        _this.fetchQuota();
                        _this.fetchData(_this.props.detail);
                    });
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                const props = this.props;
                const { visible, detail } = props;
                if (visible && visible !== e.visible && detail && detail.name) {
                    this.fetchData(detail);
                }
            }
        },
        {
            key: "fetchQuota",
            value: function() {
                const _this = this;
                const t = this.props.detail || {};
                const { workspace, name, cluster } = t;
                if (workspace && name) {
                    Promise.all([
                        this.store.fetch({
                            cluster,
                            namespace: name
                        })
                    ]).then((t)=>{
                        const a = module26(_this.workspaceQuotaStore.detail, "status.total", {});
                        const r = module26(_this.workspaceQuotaStore.detail, "spec.quota", {});
                        const workspace = getLeftQuota(module63(a) ? r : a, module26(t[0], "data"), true).workspace;
                        _this.setState({
                            leftQuota: workspace
                        });
                    });
                }
            }
        },
        {
            key: "fetchData",
            value: (a = module44(module41.mark(function e() {
                let t;
                let a;
                let r;
                let n;
                let l;
                let wsAvailableRequest;
                let wsRelatedStoragesLimit;
                let i;
                let spec;
                let nsAvailableStorage;
                const _this = this;
                const m = arguments;
                return module41.wrap(function(e) {
                    while(true){
                        switch(e.prev = e.next){
                            case 0:
                                t = m.length > 0 && m[0] !== undefined ? m[0] : {};
                                e.next = 3;
                                return this.store.checkName({
                                    name: t.name,
                                    namespace: t.name,
                                    cluster: t.cluster
                                });
                            case 3:
                                if (!e.sent.exist) {
                                    e.next = 7;
                                    break;
                                }
                                e.next = 7;
                                return this.store.fetchDetail({
                                    name: t.name,
                                    namespace: t.name,
                                    cluster: t.cluster
                                });
                            case 7:
                                a = module14.toJS(this.store.detail);
                                e.next = 10;
                                return this.storageStore.fetchList({
                                    cluster: t.cluster
                                });
                            case 10:
                                r = e.sent;
                                n = {
                                    ...module26(this.workspaceQuotaStore.detail, "spec.quota.hard", {})
                                };
                                l = this.getWorkspaceAvailableStorageConfig(n);
                                wsAvailableRequest = l.wsAvailableRequest;
                                wsRelatedStoragesLimit = l.wsRelatedStoragesLimit;
                                i = this.getStorageSpec(a, wsAvailableRequest);
                                spec = i.spec;
                                nsAvailableStorage = i.nsAvailableStorage;
                                this.setState({
                                    formTemplate: this.cancelGpuSetting(a),
                                    allStorageClass: module61(r),
                                    spec,
                                    nsAvailableStorage,
                                    wsAvailableRequest,
                                    wsRelatedStoragesLimit
                                }, function() {
                                    _this.setRelateSourceResult();
                                });
                            case 15:
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
            key: "getWorkspaceAvailableStorageConfig",
            value: function() {
                let storage = Infinity;
                let persistentvolumeclaims = Infinity;
                const a = module14.toJS(this.workspaceQuotaStore.detail);
                const r = module26(a, "spec.quota.hard", {});
                const n = module457(r, function(e, t) {
                    return !t.includes(STORAGE_CLASS_STORAGE) && !t.includes(STORAGE_CLASS_VOLUME_CLAIMS);
                });
                let l = module26(r, [
                    "requests.storage"
                ], undefined);
                const o = module26(r, [
                    "persistentvolumeclaims"
                ], undefined);
                if (l) {
                    storage = l = memoryFormat(l, "Gi");
                }
                if (o) {
                    persistentvolumeclaims = Number(o);
                }
                return {
                    wsAvailableRequest: {
                        storage,
                        persistentvolumeclaims
                    },
                    wsRelatedStoragesLimit: module857(Object.entries(n), function(e) {
                        return module96(e, 1)[0].split(".")[0];
                    })
                };
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { detail, visible, onCancel, isFederated, isSubmitting } = props;
                const state = this.state;
                const { error, spec, allStorageClass, nsAvailableStorage, wsAvailableRequest, wsRelatedStoragesLimit, disableSave, totalStorageError, totalVolumeClaimsError, currentRelatedStorageTotal, currentRelatedVolumeClaimsTotal, addedItems } = state;
                return <module788.Form width={960} title={t("EDIT_PROJECT_QUOTAS")} icon="pen" data={this.state.formTemplate} onOk={this.handleOk} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting} disableOk={!!error || disableSave}><div className={module3308.body}><module186.Form.Item label={t("NAME")}><module186.Input name="name" defaultValue={detail.name} disabled/></module186.Form.Item><module186.Form.Item><Module873 {...this.resourceLimitProps}/></module186.Form.Item><div className={module3308.storageLimit}><Module1379 namespace={detail.name} quota={spec} isWorkspace={false} availableQuota={nsAvailableStorage} wsAvailableRequest={wsAvailableRequest} relatedStoragesLimit={wsRelatedStoragesLimit} allStorageClass={allStorageClass} onChange={this.handleOnChange} renderOutOfLimitTip={totalStorageError || totalVolumeClaimsError} totalStorageError={totalStorageError} totalVolumeClaimsError={totalVolumeClaimsError} currentRelatedStorageTotal={currentRelatedStorageTotal} currentRelatedVolumeClaimsTotal={currentRelatedVolumeClaimsTotal} addedItems={addedItems}/></div><div className={module3308.label}>{t("APPLICATION_RESOURCE_QUOTAS")}</div><Module3305 data={this.state.formTemplate} isFederated={isFederated}/></div></module788.Form>;
            }
        },
        {
            key: "resourceLimitProps",
            get: function() {
                const _this = this;
                const formTemplate = this.state.formTemplate;
                const leftQuota = this.state.leftQuota;
                const workspaceLimitProps = module63(leftQuota) ? {} : {
                    limits: {
                        cpu: module26(leftQuota, "limits.cpu"),
                        memory: module26(leftQuota, "limits.memory")
                    },
                    requests: {
                        cpu: module26(leftQuota, "requests.cpu"),
                        memory: module26(leftQuota, "requests.memory")
                    }
                };
                const l = module26(formTemplate, "spec.gpu.type", "");
                const o = module26(formTemplate, "spec.gpu.value", "");
                const u = {};
                module74(u, `["${l}"]`, o);
                return {
                    cpuProps: {
                        marks: [
                            {
                                value: 0,
                                label: t("NO_REQUEST"),
                                weight: 4
                            },
                            {
                                value: 1,
                                label: 1,
                                weight: 4
                            },
                            {
                                value: 2,
                                label: 2,
                                weight: 2
                            },
                            {
                                value: 3,
                                label: 3,
                                weight: 2
                            },
                            {
                                value: 4,
                                label: 4
                            },
                            {
                                value: 5,
                                label: 5
                            },
                            {
                                value: 6,
                                label: 6
                            },
                            {
                                value: 7,
                                label: 7
                            },
                            {
                                value: 8,
                                label: 8
                            },
                            {
                                value: Infinity,
                                label: t("NO_LIMIT")
                            }
                        ]
                    },
                    memoryProps: {
                        marks: [
                            {
                                value: 0,
                                label: t("NO_REQUEST"),
                                weight: 4
                            },
                            {
                                value: 2,
                                label: 2,
                                weight: 4
                            },
                            {
                                value: 4,
                                label: 4,
                                weight: 2
                            },
                            {
                                value: 6,
                                label: 6,
                                weight: 2
                            },
                            {
                                value: 8,
                                label: 8
                            },
                            {
                                value: 10,
                                label: 10
                            },
                            {
                                value: 12,
                                label: 12
                            },
                            {
                                value: 14,
                                label: 14
                            },
                            {
                                value: 16,
                                label: 16
                            },
                            {
                                value: Infinity,
                                label: t("NO_LIMIT")
                            }
                        ],
                        unit: "Gi",
                        valueFormatter: function(e) {
                            if (e > 0 && e < 1) {
                                return e.toFixed(2);
                            }
                            if (e > 1 && e !== Infinity) {
                                return e.toFixed(1);
                            }
                            return e;
                        }
                    },
                    defaultValue: {
                        limits: {
                            cpu: module26(formTemplate, 'spec.hard["limits.cpu"]'),
                            memory: module26(formTemplate, 'spec.hard["limits.memory"]'),
                            ...u
                        },
                        requests: {
                            cpu: module26(formTemplate, 'spec.hard["requests.cpu"]'),
                            memory: module26(formTemplate, 'spec.hard["requests.memory"]'),
                            ...u
                        }
                    },
                    workspaceLimitProps,
                    onChange: function(e) {
                        module242(formTemplate, "spec.hard");
                        module74(formTemplate, 'spec.hard["limits.cpu"]', module26(e, "limits.cpu", null));
                        module74(formTemplate, 'spec.hard["limits.memory"]', module26(e, "limits.memory", null));
                        module74(formTemplate, 'spec.hard["requests.cpu"]', module26(e, "requests.cpu", null));
                        module74(formTemplate, 'spec.hard["requests.memory"]', module26(e, "requests.memory", null));
                        const r = module26(e, "requests", {});
                        const n = Object.keys(r)?.filter(function(e) {
                            return e.includes("gpu");
                        });
                        const l = module26(n, "0", "");
                        if (l) {
                            module74(formTemplate, `spec.hard["requests.${l}"]`, module26(r, l));
                        }
                    },
                    onError: function(error) {
                        _this.setState({
                            error
                        });
                    },
                    supportGpuSelect: this.props.supportGpuSelect,
                    omitQuotaCheck: false
                };
            }
        }
    ]);
    return n;
})(Component);
export default z;
z.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
z.defaultProps = {
    visible: false,
    isSubmitting: false,
    detail: {},
    onOk: function() {},
    onCancel: function() {}
};
