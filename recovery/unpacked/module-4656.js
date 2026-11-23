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
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import { trigger } from "./module-792.js";
import module1408 from "./module-1408.js";
import module1445 from "./module-1445.js";
let o;
const R = inject("rootStore")(o = trigger(o = observer(o = ((Component_1)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.fetchInside = function() {
            const t_props = t.props;
            const { cluster, namespace, workspace } = t_props;
            t.store.fetchList({
                cluster,
                namespace,
                workspace,
                limit: -1,
                labelSelector: "kubesphere.io/policy-traffic=inside"
            });
        };
        t.addAllowList = function() {
            t.trigger("network.policies.add", {
                ...t.props,
                store: t.store,
                success: t.fetchInside
            });
        };
        t.handleDelete = function(e) {
            t.trigger("network.policies.delete", {
                ...t.props,
                ruleName: e,
                resource: e,
                store: t.store,
                type: "ALLOWLIST_ENTRY",
                success: t.fetchInside
            });
        };
        t.getDiscription = function(e, a) {
            let r = "";
            const n = module26(e ? t.projectStore : t.serviceStore, "list.data");
            if (n) {
                const o = n.find((e)=>e.name === a);
                if (o) {
                    r = module26(o, "description");
                }
            }
            return r;
        };
        t.getInnerData = function() {
            const list = t.store.list;
            const innerEgressData = [];
            const innerIngressData = [];
            const n = [];
            const o = [];
            list.data.forEach((e)=>{
                const t = module26(module14.toJS(e), "_originData");
                if (module63(module26(t, "spec.egress[0].ports"))) {
                    if (!module63(module26(t, "spec.egress[0].to"))) {
                        if (module63(module26(t, "spec.egress[0].to[0].ipBlock"))) {
                            innerEgressData.push(t);
                        } else {
                            n.push(t);
                        }
                    }
                } else {
                    n.push(t);
                }
                if (module63(module26(t, "spec.ingress[0].ports"))) {
                    if (!module63(module26(t, "spec.ingress[0].from"))) {
                        if (module63(module26(t, "spec.ingress[0].from[0].ipBlock"))) {
                            innerIngressData.push(t);
                        } else {
                            o.push(t);
                        }
                    }
                } else {
                    o.push(t);
                }
            });
            return {
                innerEgressData,
                innerIngressData
            };
        };
        t.renderRules = function(e, a) {
            return <>{e.map((e)=><div key={module26(e, "metadata.name")} className={module1445.row}><div className={module1445.prow}>{module26(e, `spec.${a}[0].${a === "egress" ? "to" : "from"}`, []).map((a, r, n)=>{
                    const o = !!module26(a, "namespace.name");
                    const name = o ? "project" : "appcenter";
                    const s = o ? module26(a, "namespace.name") : module26(a, "service.name");
                    const l = t.getDiscription(o, s);
                    let i = "";
                    if (!o && r + 1 === n.length) {
                        const u = module26(a, "service.namespace");
                        const d = t.getDiscription(true, u);
                        i = <span className={module1445.pcell}><module186.Icon name="project"/><b>{u}<span>({module26(e, "metadata.name")})</span></b><label>{!module63(d) && `(${d})`}</label></span>;
                    }
                    return <span className={module1445.cell} key={s}><module186.Icon name={name}/><b>{s} (<span>{module26(e, "metadata.name")}</span>)</b><label>{!module63(l) && `(${l})`}</label>{i}</span>;
                })}</div>{t.props.canEdit && <module186.Icon name="trash" changeable onClick={function() {
                    t.handleDelete(module26(e, "metadata.name"));
                }}/>}</div>)}</>;
        };
        t.store = new module1408(e.module);
        t.projectStore = e.projectStore;
        t.serviceStore = e.serviceStore;
        return t;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchInside();
            }
        },
        {
            key: "render",
            value: function() {
                const canEdit = this.props.canEdit;
                const a = this.getInnerData();
                const { innerEgressData, innerIngressData } = a;
                return <><div className={module1445.rulemenu}><div>{t("INTERNAL_ALLOWLIST_TIP")}</div>{canEdit && <module186.Button type="control" onClick={this.addAllowList}>{t("ADD_ALLOWLIST_ENTRY")}</module186.Button>}</div><div className={module1445.rulebody}><div className={module3(module1445.rulegroup, {
                    hide: innerEgressData.length === 0
                })}><div className={module1445.subtitle}>{t("EGRESS")}</div><div className={module1445.disp}>{t("INTERNAL_EGRESS_DESC")}</div>{this.renderRules(innerEgressData, "egress")}</div><div className={module3(module1445.rulegroup, {
                    hide: innerIngressData.length === 0
                })}><div className={module1445.subtitle}>{t("INGRESS")}</div><div className={module1445.disp}>{t("INTERNAL_INGRESS_DESC")}</div>{this.renderRules(innerIngressData, "ingress")}</div></div></>;
            }
        }
    ]);
    return r;
})(Component)) || o) || o) || o;
export default R;
