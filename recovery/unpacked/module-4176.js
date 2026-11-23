import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-86.js";
import "./module-30.js";
import "./module-18.js";
import "./module-48.js";
import "./module-192.js";
import "./module-16.js";
import "./module-326.js";
import "./module-27.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
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
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import Module790 from "./module-790.js";
import Module4177 from "./module-4177.js";
import Module4178 from "./module-4178.js";
import Module4179 from "./module-4179.js";
import Module4180 from "./module-4180.js";
import Module4181 from "./module-4181.js";
let u;
const T = {
    s: 1,
    m: 2,
    h: 3
};
const C = {
    critical: 100,
    error: 10,
    warning: 1
};
const A = inject("detailStore")(u = observer(u = ((Component_1)=>{
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.fetchData = function(t) {
            const params = e.props.match.params;
            const { cluster, namespace, name } = params;
            if (e.store.fetchDetail) {
                e.store.fetchDetail({
                    cluster,
                    namespace,
                    name,
                    type: e.type,
                    ...t
                });
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
            key: "renderOld",
            value: function() {
                const detail = this.store.detail;
                const summary = module26(detail, "annotations.summary");
                const message = module26(detail, "annotations.message");
                const n = module26(detail, "annotations.kind");
                const resources = module14.toJS(detail.resources);
                return <>{!module63(detail.rules) && <Module790 title={t("ALERTING_RULE")}>{detail.rules.map((data, key)=><Module4179 key={key} data={data} resources={resources} kind={n || "Node"}/>)}</Module790>}{detail.query && <Module790 title={t("RULE_EXPRESSION")}><Module4180 query={detail.query}/></Module790>}<Module790 title={t("METRIC_MONITORING")}><Module4178 detail={detail} store={this.store}/></Module790><Module790 title={t("ALERTING_MESSAGE")}><Module4177 summary={summary} message={message}/></Module790></>;
            }
        },
        {
            key: "render",
            value: function() {
                const params = this.props.match.params;
                const { cluster, namespace } = params;
                return <Module4181 store={this.store} cluster={cluster} namespace={namespace} rules={this.rules} handleRefresh={this.fetchData}/>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "module",
            get: function() {
                return this.store.module;
            }
        },
        {
            key: "params",
            get: function() {
                return this.props.match.params;
            }
        },
        {
            key: "type",
            get: function() {
                if (this.props.match.url.indexOf("alert-rules/builtin") > 0) {
                    return "builtin";
                }
                return "";
            }
        },
        {
            key: "rules",
            get: function() {
                const e = [];
                const t = module14.toJS(module26(this.store, "detail._originDataWithStatus.spec.rules", []));
                if (this.type === "builtin") {
                    const a = new Map;
                    t.forEach((r, n)=>{
                        if (a.has(r.alert)) {
                            const u = a.get(r.alert);
                            const l = {
                                for: module26(e[u], "for", ""),
                                value: t[u]
                            };
                            const o = {
                                for: module26(r, "for", ""),
                                value: r
                            };
                            if (l.for !== "" || o.for !== "") {
                                const c = T[l.for.slice(-1)];
                                const i = T[o.for.slice(-1)];
                                if (c === i) {
                                    if (Number(l.for.slice(0, -1)) < Number(l.for.slice(0, -1))) {
                                        e.splice(u, 1, r);
                                    }
                                } else if (c < i) {
                                    e.splice(u, 1, r);
                                }
                            }
                            const s = module26(e[u], "severity");
                            const d = module26(r, "severity");
                            if (s && d && C[s] < C[d]) {
                                e[u].severity = d;
                            }
                        } else {
                            a.set(r.alert, n);
                            e.push(r);
                        }
                    });
                    return e;
                }
                return t;
            }
        }
    ]);
    return r;
})(Component)) || u) || u;
export default A;
