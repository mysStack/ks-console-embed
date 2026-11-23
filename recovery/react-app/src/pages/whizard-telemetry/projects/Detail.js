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
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import { getDisplayName, getLocalTime, showNameAndAlias } from "utils/index";
import { trigger } from "utils/action";
import module439 from "stores/project";
import module886 from "stores/quota";
import module1095 from "unpacked/module-1095.js";
import Module825 from "unpacked/module-825.js";
import Module796 from "components/Base/Status";
import routes from "unpacked/module-4240.js";
let u;
const C = inject("rootStore")(u = observer(u = trigger(u = ((Component_1)=>{
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
    function r(...u) {
        let e;
        module36(this, r);
        e = a.call(this, ...u);
        e.store = new module439;
        e.quotaStore = new module886;
        e.limitRangeStore = new module1095;
        e.fetchData = function() {
            e.store.fetchDetail(e.props.match.params);
        };
        e.getAttrs = function() {
            const a = module14.toJS(e.store.detail);
            if (!module63(a)) {
                return [
                    {
                        name: t("STATUS"),
                        value: <Module796 type={a.status} name={t(a.status)}/>
                    },
                    {
                        name: t("CLUSTER"),
                        value: showNameAndAlias(e.props.match.params.cluster, "cluster")
                    },
                    {
                        name: t("WORKSPACE"),
                        value: showNameAndAlias(a.workspace, "workspace")
                    },
                    {
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(a.createTime).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("CREATOR"),
                        value: a.creator || "-"
                    }
                ];
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
                this.quotaStore.fetch(this.params);
                this.limitRangeStore.fetchListByK8s(this.params);
            }
        },
        {
            key: "render",
            value: function() {
                const stores = {
                    detailStore: this.store,
                    quotaStore: this.quotaStore,
                    limitRangeStore: this.limitRangeStore
                };
                if (this.store.isLoading && !this.store.detail.name) {
                    return <module186.Loading className="ks-page-loading"/>;
                }
                const a = {
                    module: this.module,
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    operations: [],
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("PROJECT_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module825 stores={stores} routes={routes} {...a}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "projects";
            }
        },
        {
            key: "name",
            get: function() {
                return "PROJECT";
            }
        },
        {
            key: "listUrl",
            get: function() {
                const cluster = this.props.match.params.cluster;
                return `/whizard-telemetry/${cluster}/projects`;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "isFedManaged",
            get: function() {
                return this.store.detail.isFedManaged;
            }
        },
        {
            key: "params",
            get: function() {
                return module26(this.props.match, "params", {});
            }
        }
    ]);
    return r;
})(Component)) || u) || u) || u;
export default C;
