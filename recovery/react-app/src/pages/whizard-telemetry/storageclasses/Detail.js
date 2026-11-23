import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-29.js";
import "unpacked/module-6.js";
import "unpacked/module-30.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-22.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-38.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module41 from "unpacked/module-41.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "unpacked/module-31.js";
import module44 from "utils/babel-helpers/asyncToGenerator";
import module65 from "unpacked/module-65.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module88 from "unpacked/module-88.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module49 from "unpacked/module-49.js";
import "utils/babel-helpers/initializerWarningHelper";
import { Component } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import { inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import { compareVersion, getDisplayName } from "utils/index";
import module14 from "unpacked/module-14.js";
import module867 from "stores/storageClass";
import module1211 from "stores/accessor";
import module1838 from "stores/validateWebhookCF";
import module1069 from "stores/crd";
import module435 from "utils/form.templates";
import Module825 from "unpacked/module-825.js";
import routes from "unpacked/module-4248.js";
let i;
let s;
let d;
const x = inject("rootStore")(i = observer((s = ((Component_1)=>{
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
        e.store = new module867;
        e.accessorStore = new module1211;
        e.validateWebhookCFStore = new module1838;
        e.CrdStore = new module1069;
        e.state = {
            shouldAddCrd: false
        };
        module65(e, "ksVersion", d, module88(e));
        e.fetchData = async function t() {
            let a;
            a = e.props.match.params;
            e.ksVersion = await e.accessorStore.getKsVersion(a);
            await e.store.fetchDetail(a);
            if (compareVersion(`${e.ksVersion}`, "v3.3") < 0) {
                Promise.all([
                    e.validateWebhookCFStore.fetchDetailWithoutWarning({
                        ...a,
                        name: "storageclass-accessor.storage.kubesphere.io"
                    }),
                    e.CrdStore.fetchDetailWithoutWarning({
                        ...a,
                        name: "accessors.storage.kubesphere.io"
                    })
                ]).then((t)=>{
                    const a = module96(t, 2);
                    const r = a[0];
                    const n = a[1];
                    const r_urlNotSupport = r.urlNotSupport;
                    const n_urlNotSupport = n.urlNotSupport;
                    if (r_urlNotSupport || n_urlNotSupport) {
                        e.setState({
                            shouldAddCrd: true
                        });
                    } else if (!(module63(r) || module63(n))) {
                        e.checkHasAccessor();
                    }
                });
            } else {
                e.checkHasAccessor();
            }
        };
        e.checkHasAccessor = module44(module41.mark(function t() {
            let a;
            let r;
            let n;
            let u;
            return module41.wrap(function(t) {
                while(true){
                    switch(t.prev = t.next){
                        case 0:
                            a = e.props.match.params;
                            r = module26(e.store.detail, "name");
                            t.next = 4;
                            return e.accessorStore.fetchDetailWithoutWarning({
                                ...a,
                                name: `${r}-accessor`
                            });
                        case 4:
                            if (!(n = t.sent).urlNotSupport) {
                                t.next = 9;
                                break;
                            }
                            e.setState({
                                shouldAddCrd: true
                            });
                            t.next = 15;
                            break;
                        case 9:
                            if (!module63(n)) {
                                t.next = 15;
                                break;
                            }
                            u = module435.accessors(r);
                            t.next = 13;
                            return e.accessorStore.create(u, {
                                ...a
                            });
                        case 13:
                            t.next = 15;
                            return e.accessorStore.fetchDetail({
                                cluster: a.cluster,
                                name: `${a.name}-accessor`
                            });
                        case 15:
                        case "end":
                            return t.stop();
                    }
                }
            }, t);
        }));
        e.getOperations = function() {
            return [];
        };
        e.getAttrs = function() {
            const detail = e.store.detail;
            const r = detail === undefined ? {} : detail;
            if (module63(r)) {
                return null;
            }
            return [
                {
                    name: t("PROVISIONER"),
                    value: r.provisioner
                },
                {
                    name: t("DEFAULT_STORAGE_CLASS"),
                    value: r.default ? t("YES") : "-"
                },
                {
                    name: t("ALLOW_VOLUME_EXPANSION"),
                    value: r.allowVolumeExpansion ? t("TRUE") : t("FALSE")
                },
                {
                    name: t("RECLAIM_POLICY"),
                    value: r.reclaimPolicy
                },
                {
                    name: t("ALLOW_VOLUME_SNAPSHOT"),
                    value: r.supportSnapshot ? t("TRUE") : t("FALSE")
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
                this.store.fetchList({
                    limit: -1
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
                const a = {
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
                return <Module825 stores={stores} routes={routes} {...a}/>;
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
                return `/whizard-telemetry/${cluster}/storageclasses`;
            }
        }
    ]);
    return r;
})(Component), d = module49(s.prototype, "ksVersion", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
}), i = s)) || i) || i;
export default x;
