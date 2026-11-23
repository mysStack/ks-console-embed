import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-138.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject, observer } from "./module-239.js";
import module3 from "./module-3.js";
import { getLocalTime } from "utils/index";
import module105 from "utils/object.mapper";
import { trigger } from "utils/action";
import module63 from "./module-63.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import Module1691 from "./module-1691.js";
import module1169 from "./module-1169.js";
import module3003 from "./module-3003.js";
let l;
const D = inject("rootStore")(l = inject("projectStore")(l = trigger(l = observer(l = ((Component_1)=>{
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
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.editIpBlock = function() {
            const name = n.detailInfo.name;
            n.trigger("network.policies.editIpBlock", {
                ...n.props,
                formTemplate: n.formTemplate,
                edit: true,
                name,
                success: n.props.fetchOutside
            });
        };
        n.handleDelete = function() {
            const name = n.detailInfo.name;
            n.trigger("network.policies.delete", {
                ...n.props,
                ruleName: name,
                resource: n.detailInfo.name,
                type: "ALLOWLIST_ENTRY",
                success: function() {
                    n.props.fetchOutside();
                    n.props.onCancel();
                }
            });
        };
        n.getAttrs = function() {
            return [
                {
                    name: t("CLUSTER"),
                    value: n.clusters
                },
                {
                    name: t("PROJECT"),
                    value: n.detailInfo.namespace
                },
                {
                    name: t("CREATION_TIME_TCAP"),
                    value: getLocalTime(n.detailInfo.createTime).format("YYYY-MM-DD HH:mm:ss")
                },
                {
                    name: t("CREATOR"),
                    value: n.detailInfo.creator
                }
            ];
        };
        n.getOperations = function() {
            return [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT"),
                    action: "edit",
                    show: n.enableActions.includes("edit"),
                    onClick: function() {
                        return n.editIpBlock();
                    }
                },
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "edit",
                    show: n.enableActions.includes("delete"),
                    onClick: function() {
                        return n.handleDelete();
                    }
                }
            ];
        };
        n.renderIpRules = function(e, t) {
            if (module26(e, `spec.${t}[0].${t === "egress" ? "to" : "from"}`, []).length === 0) {
                return <div key={module26(e, "metadata.name")} className={module3003.row}><div className={module3003.prow}><span className={module3003.cell}><module186.Icon name="eip"/></span>{module26(e, `spec.${t}[0].ports`, []).map((e, t)=>{
                    const a = e.endPort ? `${e.port}-${e.endPort}/${e.protocol}` : `${e.port}/${e.protocol}`;
                    return <label key={a}>{t === 0 && <module186.Icon name="port"/>}<span className={module3003.port}><b>{a}</b></span></label>;
                })}</div></div>;
            }
            return <>{module26(e, `spec.${t}[0].${t === "egress" ? "to" : "from"}`, []).map((a, r)=><><div key={module26(e, "metadata.name") + r} className={module3003.row}><div className={module3003.prow}><span className={module3003.cell}><module186.Icon name="eip"/><b key={r}>{a?.ipBlock?.cidr}</b></span>{module26(e, `spec.${t}[0].ports`, []).map((e, t)=>{
                    const a = e.endPort ? `${e.port}-${e.endPort}/${e.protocol}` : `${e.port}/${e.protocol}`;
                    return <label key={a}>{t === 0 && <module186.Icon name="port"/>}<span className={module3003.port}><b>{a}</b></span></label>;
                })}</div></div></>)}</>;
        };
        n.formTemplate = e.formTemplate;
        n.clusters = module26(e.projectStore, "detail.cluster", []);
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { formTemplate, formRef } = props;
                const n = {
                    ...this.props
                };
                const l = [];
                const u = [];
                const c = formTemplate;
                if (module63(module26(c, "spec.egress[0].ports"))) {
                    if (!module63(module26(c, "spec.egress[0].to"))) {
                        if (module63(module26(c, "spec.egress[0].to[0].ipBlock"))) {
                            [].push(c);
                        } else {
                            l.push(c);
                        }
                    }
                } else {
                    l.push(c);
                }
                if (module63(module26(c, "spec.ingress[0].ports"))) {
                    if (!module63(module26(c, "spec.ingress[0].from"))) {
                        if (module63(module26(c, "spec.ingress[0].from[0].ipBlock"))) {
                            [].push(c);
                        } else {
                            u.push(c);
                        }
                    }
                } else {
                    u.push(c);
                }
                return <module1169.Form width={900} title={t("ALLOWLIST_ENTRY_DETAIL")} closable {...n} onOk={false} data={formTemplate} ref={formRef}><div className={module3003.rulebody}><div className={module3003.rulemenu}><div><div className={module3003.rulename}>{this.detailInfo.aliasName ? `${this.detailInfo.name}(${this.detailInfo.aliasName})` : this.detailInfo.name}</div><div>{this.detailInfo.description}</div></div><Module1691 className={module3003.more} options={this.getOperations(formTemplate)}/></div><div className={module3003.collapseWrapper}><module186.Collapse><module186.Collapse.CollapseItem label={t("ATTRIBUTES")} key="p1">{this.getAttrs().map(({ name, value })=><div><div className={module3003.name}><span>{name}: </span></div><div className={module3003.value}>{value}</div></div>)}</module186.Collapse.CollapseItem></module186.Collapse></div><div className={module3(module3003.rulegroup, {
                    hide: l.length === 0
                })}><div className={module3003.ruletitle}><module186.Icon name="upload" size={32}/><div><div className={module3003.subtitle}>{t("EGRESS")}</div><div className={module3003.disp}>{t("EXTERNAL_EGRESS_DESC")}</div></div></div>{this.renderIpRules(l[0], "egress")}</div><div className={module3(module3003.rulegroup, {
                    hide: u.length === 0
                })}><div className={module3003.ruletitle}><module186.Icon name="download" size={32}/><div><div className={module3003.subtitle}>{t("INGRESS")}</div><div className={module3003.disp}>{t("EXTERNAL_INGRESS_DESC")}</div></div></div>{this.renderIpRules(u[0], "ingress")}</div></div></module1169.Form>;
            }
        },
        {
            key: "detailInfo",
            get: function() {
                return module105.default(this.formTemplate);
            }
        },
        {
            key: "namespace",
            get: function() {
                return this.props.match.params.namespace;
            }
        },
        {
            key: "enableActions",
            get: function() {
                return globals.app.getActions({
                    module: "networkpolicies",
                    ...this.props.match.params,
                    project: this.namespace
                });
            }
        }
    ]);
    return r;
})(Component)) || l) || l) || l) || l;
export default D;
