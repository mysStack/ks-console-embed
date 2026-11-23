import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-30.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-22.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-38.js";
import "./module-62.js";
import "./module-7.js";
import "./module-32.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import module41 from "./module-41.js";
import module96 from "./module-96.js";
import "./module-31.js";
import module44 from "./module-44.js";
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
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import { compareVersion, getDisplayName } from "./module-52.js";
import { trigger } from "./module-792.js";
import module14 from "./module-14.js";
import module867 from "./module-867.js";
import module1211 from "./module-1211.js";
import module1838 from "./module-1838.js";
import module1069 from "./module-1069.js";
import module435 from "./module-435.js";
import Module825 from "./module-825.js";
import routes from "./module-3992.js";
import { storageClasses } from "./module-1793.js";
let l;
let s;
l = ((Component_1)=>{
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
        e.store = new module867;
        e.accessorStore = new module1211;
        e.validateWebhookCFStore = new module1838;
        e.CrdStore = new module1069;
        e.state = {
            shouldAddCrd: false
        };
        module65(e, "ksVersion", s, module88(e));
        e.fetchData = async function t() {
            let r;
            r = e.props.match.params;
            e.ksVersion = await e.accessorStore.getKsVersion(r);
            await e.store.fetchDetail(r);
            if (compareVersion(`${e.ksVersion}`, "v3.3") < 0) {
                Promise.all([
                    e.validateWebhookCFStore.fetchDetailWithoutWarning({
                        ...r,
                        name: "storageclass-accessor.storage.kubesphere.io"
                    }),
                    e.CrdStore.fetchDetailWithoutWarning({
                        ...r,
                        name: "accessors.storage.kubesphere.io"
                    })
                ]).then((t)=>{
                    const r = module96(t, 2);
                    const n = r[0];
                    const a = r[1];
                    const n_urlNotSupport = n.urlNotSupport;
                    const a_urlNotSupport = a.urlNotSupport;
                    if (n_urlNotSupport || a_urlNotSupport) {
                        e.setState({
                            shouldAddCrd: true
                        });
                    } else if (!(module63(n) || module63(a))) {
                        e.checkHasAccessor();
                    }
                });
            } else {
                e.checkHasAccessor();
            }
        };
        e.checkAccessorExist = async function t() {
            let r;
            r = e.props.match.params;
            if (compareVersion(`${e.ksVersion}`, "v3.3") < 0) {
                Promise.all([
                    e.validateWebhookCFStore.fetchDetailWithoutWarning({
                        ...r,
                        name: "storageclass-accessor.storage.kubesphere.io"
                    }),
                    e.CrdStore.fetchDetailWithoutWarning({
                        ...r,
                        name: "accessors.storage.kubesphere.io"
                    })
                ]).then((()=>{
                    const t = module44(module41.mark(function t(r) {
                        let n;
                        let a;
                        let o;
                        let c;
                        let l;
                        return module41.wrap(function(t) {
                            while(true){
                                switch(t.prev = t.next){
                                    case 0:
                                        n = module96(r, 2);
                                        a = n[0];
                                        o = n[1];
                                        c = a.urlNotSupport;
                                        l = o.urlNotSupport;
                                        if (!c && !l) {
                                            t.next = 7;
                                            break;
                                        }
                                        e.setState({
                                            shouldAddCrd: true
                                        });
                                        t.next = 10;
                                        break;
                                    case 7:
                                        if (module63(a) || module63(o)) {
                                            t.next = 10;
                                            break;
                                        }
                                        t.next = 10;
                                        return e.checkHasAccessor();
                                    case 10:
                                    case "end":
                                        return t.stop();
                                }
                            }
                        }, t);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                })());
            } else {
                await e.checkHasAccessor();
            }
        };
        e.checkHasAccessor = async function t() {
            let r;
            let n;
            let a;
            let o;
            for(; !globals.app.hasKSModule("storage-utils"); e.setState({
                shouldAddCrd: true
            })){
                return;
                r = e.props.match.params;
                n = module26(e.store.detail, "name");
                if (!(a = await e.accessorStore.fetchDetailWithoutWarning({
                    ...r,
                    name: `${n}-accessor`
                })).urlNotSupport) {
                    continue;
                }
            }
            if (module63(a)) {
                o = module435.accessors(n);
                await e.accessorStore.create(o, {
                    ...r
                });
                await e.accessorStore.fetchDetail({
                    cluster: r.cluster,
                    name: `${r.name}-accessor`
                });
            }
        };
        e.getOperations = function() {
            const cluster = e.props.match.params.cluster;
            const a = compareVersion(`${e.ksVersion}`, "v3.3") >= 0;
            return [
                {
                    key: "editYaml",
                    type: "default",
                    text: t("EDIT_YAML"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("resource.yaml.edit", {
                            detail: module14.toJS(e.store.detail),
                            readOnly: false,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "setDefault",
                    icon: "pen",
                    text: t("SET_AS_DEFAULT_STORAGE_CLASS"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("storageclass.set.default", {
                            detail: module14.toJS(e.store.detail),
                            cluster,
                            defaultStorageClass: e.defaultStorageClass.name,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "accessor",
                    icon: function() {
                        return <><img src="/assets/storageclass-tree.svg" style={{
                            width: "16px",
                            marginRight: "12px"
                        }}/></>;
                    },
                    text: t("SET_AUTHORIZATION_RULES"),
                    action: "edit",
                    show: a && globals.app.hasKSModule("storage-utils"),
                    onClick: async ()=>{
                        await e.checkAccessorExist();
                        e.trigger("storageclass.accessor", {
                            storageClassName: module26(e.store.detail, "name"),
                            shouldAddCrd: e.state.shouldAddCrd,
                            store: e.accessorStore,
                            detail: module14.toJS(e.accessorStore.detail),
                            cluster,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "funcManage",
                    icon: "slider",
                    text: t("SET_VOLUME_OPERATIONS"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("storageclass.volume.function.update", {
                            detail: module14.toJS(e.store.detail),
                            StorageClassStore: e.store,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "autoResizer",
                    icon: function() {
                        return <><img src="/assets/storageclass_autoresizer.svg" style={{
                            width: "16px",
                            marginRight: "12px"
                        }}/></>;
                    },
                    text: t("SET_AUTO_EXPANSION"),
                    action: "edit",
                    disabled: !a || !module26(module14.toJS(e.store.detail), "allowVolumeExpansion", false),
                    show: globals.app.hasKSModule("storage-utils"),
                    onClick: function() {
                        return e.trigger("storageclass.pvc.autoresizer", {
                            detail: module14.toJS(e.store.detail),
                            StorageClassStore: e.store,
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
                    onClick: function() {
                        return e.trigger("storageclass.delete", {
                            type: e.name,
                            detail: module14.toJS(e.store.detail),
                            accessorStore: e.accessorStore,
                            cluster,
                            success: e.returnTolist
                        });
                    }
                }
            ];
        };
        e.getAttrs = function() {
            const detail = e.store.detail;
            const o = detail === undefined ? {} : detail;
            if (module63(o)) {
                return null;
            }
            return [
                {
                    name: t("storageclasses"),
                    value: t(storageClasses.find((e)=>e.value === o.storagetype)?.label ?? storageClasses[3].label)
                },
                {
                    name: t("PROVISIONER"),
                    value: o.provisioner
                },
                {
                    name: t("DEFAULT_STORAGE_CLASS"),
                    value: o.default ? t("YES") : "-"
                },
                {
                    name: t("ALLOW_VOLUME_EXPANSION"),
                    value: o.allowVolumeExpansion ? t("TRUE") : t("FALSE")
                },
                {
                    name: t("RECLAIM_POLICY"),
                    value: o.reclaimPolicy
                },
                {
                    name: t("ALLOW_VOLUME_SNAPSHOT"),
                    value: o.supportSnapshot ? t("TRUE") : t("FALSE")
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
                const cluster = this.props.match.params.cluster;
                this.store.fetchList({
                    limit: -1,
                    cluster
                });
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
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("STORAGE_CLASS_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module825 stores={stores} routes={routes} {...r}/>;
            }
        },
        {
            key: "defaultStorageClass",
            get: function() {
                return module14.toJS(this.store.list).data.find((e)=>e.default) || {};
            }
        },
        {
            key: "name",
            get: function() {
                return "STORAGE_CLASS";
            }
        },
        {
            key: "module",
            get: function() {
                return "storageclasses";
            }
        },
        {
            key: "listUrl",
            get: function() {
                const cluster = this.props.match.params.cluster;
                return `/clusters/${cluster}/storageclasses`;
            }
        }
    ]);
    return n;
})(Component);
s = module49(l.prototype, "ksVersion", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
});
const U = l;
const z = inject("rootStore")(observer(trigger(U)));
export default z;
const Y = U;
export { Y as Component };
