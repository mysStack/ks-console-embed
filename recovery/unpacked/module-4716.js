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
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module63 from "./module-63.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module806 from "./module-806.js";
import { getDisplayName, showNameAndAlias } from "./module-52.js";
import { trigger } from "./module-792.js";
import module1443 from "./module-1443.js";
import module4717 from "./module-4717.js";
let o;
const b = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
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
    function r(...o_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...o_1);
        e.store = new module1443;
        e.fetchData = function() {
            const params = e.props.match.params;
            const { cluster, namespace, name } = params;
            e.store.fetchDetail({
                cluster,
                namespace,
                name
            });
        };
        e.getAttrs = function() {
            const params = e.props.match.params;
            const { cluster, namespace } = params;
            const detail = e.store.detail;
            const c = detail === undefined ? {} : detail;
            if (module63(c)) {
                return null;
            }
            return [
                {
                    name: t("CLUSTER"),
                    value: showNameAndAlias(cluster, "cluster")
                },
                {
                    name: t("PROJECT"),
                    value: showNameAndAlias(namespace, "project")
                }
            ];
        };
        e.handleLine = function() {
            const detail = e.store.detail;
            const { status, name, cluster, namespace } = detail;
            if (status === "Running") {
                e.store.offLine({
                    name,
                    cluster,
                    namespace
                }).then(e.fetchData);
            } else {
                e.store.onLine({
                    name,
                    cluster,
                    namespace
                }).then(e.fetchData);
            }
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
                    icon: this.icon,
                    module: this.module,
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("MICROSERVICE_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module806 stores={stores} {...a} routes={module4717(this.props.match.path)}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "microservices";
            }
        },
        {
            key: "icon",
            get: function() {
                return "java";
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "listUrl",
            get: function() {
                const params = this.props.match.params;
                const { workspace, cluster, namespace } = params;
                if (workspace) {
                    return `/${workspace}/clusters/${cluster}/projects/${namespace}/${this.module}`;
                }
                return `/clusters/${cluster}/${this.module}`;
            }
        }
    ]);
    return r;
})(Component)) || o) || o) || o;
export default b;
