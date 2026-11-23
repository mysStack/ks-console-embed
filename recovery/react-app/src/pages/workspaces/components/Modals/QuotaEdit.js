import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-30.js";
import "unpacked/module-16.js";
import "unpacked/module-27.js";
import "unpacked/module-190.js";
import "unpacked/module-98.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
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
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-460.js";
import "unpacked/module-461.js";
import "unpacked/module-462.js";
import "unpacked/module-463.js";
import "unpacked/module-464.js";
import "unpacked/module-465.js";
import "unpacked/module-466.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
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
import module1726 from "unpacked/module-1726.js";
import module457 from "unpacked/module-457.js";
import module189 from "unpacked/module-189.js";
import module844 from "unpacked/module-844.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import Module873 from "components/Inputs/ResourceLimit";
import { memoryFormat } from "utils/index";
import module914 from "stores/workspace.quota";
import module867 from "stores/storageClass";
import Module1379, { STORAGE_CLASS_STORAGE, STORAGE_CLASS_VOLUME_CLAIMS } from "unpacked/module-1379.js";
import module3625 from "unpacked/module-3625.js";
const L = ((Component_1)=>{
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
    function n(e) {
        let t;
        module36(this, n);
        t = r.call(this, e);
        t.getWorkspaceSpec = function() {
            const spec = t.state.spec;
            const { "requests.storage": requests_storage, persistentvolumeclaims } = spec;
            const n = memoryFormat(requests_storage, "Gi");
            return {
                storage: isNaN(n) ? Infinity : n,
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
                    if (!isNaN(t)) {
                        r.totalStorage += t;
                    }
                }
                if (e.includes("persistentvolumeclaims")) {
                    set.add(e.split(".storageclass.storage.k8s.io/persistentvolumeclaims")[0]);
                    const l = a[e];
                    const o = Number(l);
                    if (!(l === "" || isNaN(o))) {
                        r.totalVolumeClaims += o;
                    }
                }
            });
            r.addedItems = module61(set.values());
            return r;
        };
        t.validInputStorage = function() {
            const e = t.getWorkspaceSpec();
            const { storage, persistentvolumeclaims } = e;
            const n = t.countTotalRelatedResource();
            const { totalStorage, totalVolumeClaims } = n;
            let disableSave = false;
            if (storage < totalStorage) {
                disableSave = true;
            }
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
                        t.validInputStorage();
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
                        t.validInputStorage();
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
                ...module26(t.state.formTemplate, "spec.quota.hard", {})
            };
            const n = [
                "persistentvolumeclaims",
                "requests.storage"
            ];
            const l = module457(r, function(e, t) {
                return t.includes(n[0]) || t.includes(n[1]);
            });
            onOk({
                name: t.state.formTemplate.name,
                spec: {
                    ...l
                },
                storageLimit: {
                    ...a
                }
            });
        };
        t.form = createRef();
        t.store = new module914;
        t.state = {
            formTemplate: {},
            error: "",
            allStorageClass: [],
            spec: {},
            availableQuota: {
                storage: undefined,
                persistentvolumeclaims: undefined
            },
            disableSave: false,
            currentRelatedStorageTotal: 0,
            currentRelatedVolumeClaimsTotal: 0,
            totalStorageError: false,
            totalVolumeClaimsError: false,
            addedItems: []
        };
        t.storageStore = new module867;
        return t;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.props.detail && this.props.detail.name) {
                    this.fetchData(this.props.detail);
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
            key: "fetchData",
            value: async function() {
                let t;
                let a;
                let r;
                let n;
                let l;
                let u;
                let c;
                let i;
                let f;
                let d;
                let spec;
                const _this = this;
                const v = arguments;
                t = v.length > 0 && v[0] !== undefined ? v[0] : {};
                a = {
                    storage: Infinity,
                    persistentvolumeclaims: Infinity
                };
                r = await this.storageStore.fetchList({
                    cluster: t.cluster
                });
                await this.store.fetchDetail({
                    name: t.name,
                    workspace: t.name,
                    cluster: t.cluster
                });
                n = module14.toJS(this.store.detail);
                l = module26(n, "status.total.used", {});
                u = module26(n, "spec.quota.hard", {});
                c = module26(u, [
                    "requests.storage"
                ], null);
                i = module26(u, "persistentvolumeclaims", null);
                f = module26(l, "persistentvolumeclaims", "0");
                d = module26(l, [
                    "requests.storage"
                ], "0Gi");
                if (c) {
                    c = memoryFormat(c, "Gi");
                    d = memoryFormat(d, "Gi");
                    a.storage = module1726(c, d);
                }
                if (i) {
                    a.persistentvolumeclaims = module1726(Number(i), Number(f));
                }
                spec = {
                    "requests.storage": module844(c) || c === "" || isNaN(c) ? "InfinityGi" : `${c}Gi`,
                    persistentvolumeclaims: i || ""
                };
                Object.keys(u).forEach((e)=>{
                    if (e.includes(STORAGE_CLASS_STORAGE) || e.includes(STORAGE_CLASS_VOLUME_CLAIMS)) {
                        spec[e] = u[e];
                    }
                });
                this.setState({
                    formTemplate: module14.toJS(this.store.detail),
                    spec,
                    allStorageClass: module61(r),
                    availableQuota: {
                        ...a
                    }
                }, function() {
                    _this.setRelateSourceResult();
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel, isSubmitting } = props;
                const state = this.state;
                const { error, spec, allStorageClass, availableQuota, disableSave, currentRelatedStorageTotal, currentRelatedVolumeClaimsTotal, totalStorageError, totalVolumeClaimsError, addedItems } = state;
                return <module788.Form width={960} title={t("EDIT_WORKSPACE_QUOTAS")} icon="pen" data={this.state.formTemplate} onOk={this.handleOk} onCancel={onCancel} visible={visible} isSubmitting={isSubmitting} disableOk={!!error || disableSave}><div className={module3625.body} id="viewBox"><module186.Form.Item><Module873 {...this.resourceLimitProps}/></module186.Form.Item><module186.Form.Item><Module1379 quota={spec} isWorkspace availableQuota={availableQuota} allStorageClass={allStorageClass} onChange={this.handleOnChange} renderOutOfLimitTip={totalStorageError || totalVolumeClaimsError} totalStorageError={totalStorageError} totalVolumeClaimsError={totalVolumeClaimsError} currentRelatedStorageTotal={currentRelatedStorageTotal} currentRelatedVolumeClaimsTotal={currentRelatedVolumeClaimsTotal} addedItems={addedItems}/></module186.Form.Item></div></module788.Form>;
            }
        },
        {
            key: "resourceLimitProps",
            get: function() {
                const _this = this;
                const formTemplate = this.state.formTemplate;
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
                            cpu: module26(formTemplate, 'spec.quota.hard["limits.cpu"]'),
                            memory: module26(formTemplate, 'spec.quota.hard["limits.memory"]')
                        },
                        requests: {
                            cpu: module26(formTemplate, 'spec.quota.hard["requests.cpu"]'),
                            memory: module26(formTemplate, 'spec.quota.hard["requests.memory"]')
                        }
                    },
                    onChange: function(e) {
                        module74(formTemplate, 'spec.quota.hard["limits.cpu"]', module26(e, "limits.cpu", null));
                        module74(formTemplate, 'spec.quota.hard["limits.memory"]', module26(e, "limits.memory", null));
                        module74(formTemplate, 'spec.quota.hard["requests.cpu"]', module26(e, "requests.cpu", null));
                        module74(formTemplate, 'spec.quota.hard["requests.memory"]', module26(e, "requests.memory", null));
                    },
                    onError: function(error) {
                        _this.setState({
                            error
                        });
                    }
                };
            }
        }
    ]);
    return n;
})(Component);
export default L;
L.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
L.defaultProps = {
    visible: false,
    isSubmitting: false,
    detail: {},
    onOk: function() {},
    onCancel: function() {}
};
