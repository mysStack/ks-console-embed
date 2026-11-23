import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import { getLocalTime, showNameAndAlias } from "./module-52.js";
import { trigger } from "./module-792.js";
import module1069 from "./module-1069.js";
import Module825 from "./module-825.js";
import routes from "./module-3999.js";
let o;
const b = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
    function n(...o) {
        let e;
        module36(this, n);
        e = r.call(this, ...o);
        e.store = new module1069;
        e.fetchData = function() {
            e.store.fetchDetail(e.props.match.params);
        };
        e.getOperations = function() {
            return [];
        };
        e.getAttrs = function() {
            const r = module14.toJS(e.store.detail);
            if (!module63(r)) {
                return [
                    {
                        name: t("CLUSTER"),
                        value: showNameAndAlias(e.props.match.params.cluster, "cluster")
                    },
                    {
                        name: t("SCOPE_TCAP"),
                        value: r.scope
                    },
                    {
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(r.createTime).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("CREATOR"),
                        value: r.creator || "-"
                    }
                ];
            }
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
                    name: this.store.detail.kind,
                    desc: this.store.detail.name,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t(`${this.name}_PL`),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module825 stores={stores} routes={routes} {...r}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "customresourcedefinitions";
            }
        },
        {
            key: "name",
            get: function() {
                return "CRD";
            }
        },
        {
            key: "listUrl",
            get: function() {
                const cluster = this.props.match.params.cluster;
                return `/clusters/${cluster}/customresources`;
            }
        }
    ]);
    return n;
})(Component)) || o) || o) || o;
export default b;
