import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-22.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module41 from "./module-41.js";
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
import module186 from "./module-186.js";
import Module868 from "./module-868.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module241 from "./module-241.js";
import module74 from "./module-74.js";
import module14 from "./module-14.js";
import { observer } from "./module-239.js";
import { Component } from "./module-553.js";
import module439 from "./module-439.js";
import { inCluster2Default, showNameAndAlias } from "./module-52.js";
import module1677 from "./module-1677.js";
let c;
let s;
let i;
let f;
const L = {
    label: t("ALL"),
    value: "*",
    icon: "allowlist"
};
const j = observer((s = ((Component_1)=>{
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
    function n(...l) {
        let e;
        module36(this, n);
        e = r.call(this, ...l);
        e.projectStore = new module439;
        e.state = {
            formData: {}
        };
        module65(e, "cluster", i, module88(e));
        e.fetchNamespaces = module44(module41.mark(function t() {
            let a;
            let cluster;
            const n = arguments;
            return module41.wrap(function(t) {
                while(true){
                    switch(t.prev = t.next){
                        case 0:
                            a = n.length > 0 && n[0] !== undefined ? n[0] : {};
                            if ((cluster = inCluster2Default(e.cluster)) !== "*") {
                                t.next = 6;
                                break;
                            }
                            e.projectStore.list.update({
                                data: [],
                                isLoading: false
                            });
                            t.next = 9;
                            break;
                        case 6:
                            if (!cluster || cluster === "*") {
                                t.next = 9;
                                break;
                            }
                            t.next = 9;
                            return e.projectStore.fetchList({
                                cluster,
                                ...a,
                                type: "user"
                            });
                        case 9:
                        case "end":
                            return t.stop();
                    }
                }
            }, t);
        }));
        e.projectOptionRenderer = function(e) {
            return <span className={module1677.option}>{e.isFedManaged ? <img className={module1677.indicator} src="/assets/cluster.svg"/> : <module186.Icon name="project"/>}{e.label}{e.isFedManaged && <module186.Tooltip content={t("MULTI_CLUSTER_PROJECT_NOT_FOR_CD")}><module186.Icon className={module1677.tip} name="question"/></module186.Tooltip>}</span>;
        };
        module65(e, "handleClusterChange", f, module88(e));
        e.handleChange = function(t) {
            e.props.onChange({
                ...t
            });
        };
        e.checkDestinationsValid = function(e) {
            return !module63(e) && e.name && e.namespace && e.server;
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.init();
            }
        },
        {
            key: "init",
            value: async function() {
                let t;
                let a;
                let r;
                let l;
                let u;
                t = this.destinations[this.props.index] || {};
                a = t.name;
                r = t.namespace;
                if (a) {
                    l = this.clusters.find((e)=>e.value === a) || {};
                    this.cluster = l.value;
                    module74(this.state.formData, "name", module26(this.clusters, l.value));
                    module74(this.state.formData, "server", module26(this.clusters, l.server));
                    await this.fetchNamespaces();
                    u = this.namespaces.find((e)=>e.value === r);
                    module74(this.state.formData, "namespace", u?.value ?? "");
                }
            }
        },
        {
            key: "render",
            value: function() {
                const value = this.props.value;
                return <Module868 value={value} onChange={this.handleChange}><module186.Select name="name" key={this.props.value?.name} placeholder={t("CLUSTER")} options={this.clusters} onChange={this.handleClusterChange} prefixIcon=<module186.Icon name="cluster" size={16}/> showTip/><module186.Select name="namespace" placeholder={t("PROJECT")} options={this.namespaces} pagination={module241(this.projectStore.list, [
                    "page",
                    "limit",
                    "total"
                ])} isLoading={this.projectStore.list.isLoading} onFetch={this.fetchNamespaces} valueRenderer={this.projectOptionRenderer} optionRenderer={this.projectOptionRenderer} searchable/></Module868>;
            }
        },
        {
            key: "clusters",
            get: function() {
                return this.props.clusters.map((e)=>({
                        ...e,
                        label: <span>{showNameAndAlias(e.label, "cluster")}</span>
                    }));
            }
        },
        {
            key: "destinations",
            get: function() {
                return module26(this.props.formtemplate, "spec.argo.destinations", []);
            }
        },
        {
            key: "namespaces",
            get: function() {
                const e = this.projectStore.list.data.filter((e)=>e.status !== "Terminating").map((e)=>({
                        label: showNameAndAlias(e),
                        value: e.name,
                        disabled: e.isFedManaged,
                        isFedManaged: e.isFedManaged
                    }));
                if (this.cluster) {
                    return [
                        L
                    ].concat(module61(e));
                }
                return e;
            }
        }
    ]);
    return n;
})(Component), i = module49(s.prototype, "cluster", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return "";
    }
}), module49(s.prototype, "clusters", [
    module14.computed
], Object.getOwnPropertyDescriptor(s.prototype, "clusters"), s.prototype), f = module49(s.prototype, "handleClusterChange", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return async (a)=>{
            let server;
            let namespace;
            _this.cluster = a;
            await _this.fetchNamespaces();
            server = _this.clusters.find((e)=>e.value === a).server;
            namespace = _this.namespaces[0].value;
            _this.props.onChange({
                name: a,
                server,
                namespace
            });
        };
    }
}), c = s)) || c;
export default j;
