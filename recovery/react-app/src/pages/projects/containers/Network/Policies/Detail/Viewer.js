import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import Module790 from "components/Base/Panel";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module3912 from "unpacked/module-3912.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import { Component } from "unpacked/module-553.js";
import { showNameAndAlias } from "utils/index";
import module3916 from "unpacked/module-3916.js";
let l;
function O(e, t) {
    const a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        let r = Object.getOwnPropertySymbols(e);
        if (t) {
            r = r.filter((t)=>Object.getOwnPropertyDescriptor(e, t).enumerable);
        }
        a.push.apply(a, r);
    }
    return a;
}
const S = inject("detailStore")(l = observer(l = ((Component_1)=>{
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
        t.renderLabels = function(e) {
            if (e) {
                return module3912(module26(e, "matchLabels", [])).map((e)=><div><label className={module3916.label}><span>{e[0]}</span>{e[1]}</label></div>);
            }
            return "";
        };
        t.renderDetailLabels = function(e, t) {
            const a = module26(e, t);
            return module3912(module26(a, "matchLabels", [])).map((e)=><label className={module3916.label}><span>{e[0]}</span>{e[1]}</label>).reduce((acc, item)=>{
                if (acc === null) {
                    return item;
                }
                return <>{acc} and {item}</>;
            }, null);
        };
        t.renderIpBlock = function(e) {
            if (e) {
                return <label>{module3912(e).map((e)=>{
                    if (e[0] === "cidr") {
                        return `${e[1]}`;
                    }
                    return e.join(": ");
                }).reduce((acc, item)=>{
                    if (acc === null) {
                        return item;
                    }
                    return <>{acc} {item}</>;
                }, null)}</label>;
            }
            return "";
        };
        t.renderPolicyDetail = function(e) {
            const a = module26(e, "namespace", "");
            const r = module26(e, "ipBlock");
            const n = module26(r, "except");
            const e_direction = e.direction;
            const u = t.renderIpBlock(r);
            const o = t.renderDetailLabels(e, "specPodSelector");
            const i = t.renderDetailLabels(e, "namespaceSelector");
            const c = t.renderDetailLabels(e, "podSelector");
            const s = module26(e, "ports", []).map((e)=>`${e.protocol}: ${e.port}`).reduce((acc, item)=>{
                if (acc === null) {
                    return item;
                }
                return <>{acc} and {item}</>;
            }, null);
            return <div><span>This rule allows pods in the namespace '{a}' </span>{!module63(o) && <span> with the label {o} </span>}<span>{e_direction === "egress" ? "to connect to " : "to receive traffic from "}</span>{module63(r) ? module63(c) && module63(i) ? "all pods in the same namespace " : <label>{!module63(c) && <span>{module63(i) ? "pods in the same namespace " : "pods "} with labels {c} </span>}{!module63(i) && <span>{module63(c) ? "all pods in the namespace " : "in namespaces "}with the labels {i} </span>}</label> : <label>{n && "all IPs in "} subnet '{u}' </label>}{module63(s) ? "on all ports" : <span>on port{s.length > 1 ? "s" : ""} {s}</span>}</div>;
        };
        t.store = e.detailStore;
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const tableData = this.tableData;
                return <Module790 title={this.direction === "egress" ? t("EGRESS_RULES") : t("INGRESS_RULES")}><module186.Table dataSource={tableData} className={module3916.table} columns={this.columns} expandedRowRender={function(t) {
                    return <div className={module3916.detail}>{_this.renderPolicyDetail(t)}</div>;
                }}/></Module790>;
            }
        },
        {
            key: "direction",
            get: function() {
                const e = this.props.match.path.match(/:name\/([a-z]*)/);
                if (e) {
                    return e[1];
                }
                return "egress";
            }
        },
        {
            key: "columns",
            get: function() {
                const _this = this;
                return [
                    {
                        title: t("TARGET"),
                        children: [
                            {
                                title: t("PROJECT"),
                                dataIndex: "namespace",
                                render: function(e) {
                                    return showNameAndAlias(e, "project");
                                }
                            },
                            {
                                title: t("LABEL"),
                                dataIndex: "specPodSelector",
                                render: function(t) {
                                    return _this.renderLabels(t);
                                }
                            }
                        ]
                    },
                    {
                        title: t("DESTINATION"),
                        children: [
                            {
                                title: t("PROJECT"),
                                dataIndex: "namespaceSelector",
                                render: function(t, a) {
                                    if (module63(module26(a, "ipBlock"))) {
                                        if (module26(t, "matchLabels")) {
                                            return _this.renderLabels(t);
                                        }
                                        return module26(a, "namespace");
                                    }
                                }
                            },
                            {
                                title: t("LABEL"),
                                dataIndex: "podSelector",
                                render: function(t, a) {
                                    if (module63(module26(a, "ipBlock"))) {
                                        if (module26(t, "matchLabels")) {
                                            return _this.renderLabels(t);
                                        }
                                        return "Any";
                                    }
                                }
                            },
                            {
                                title: "CIDR",
                                dataIndex: "ipBlock",
                                className: module3916.cidr,
                                render: function(t) {
                                    return _this.renderIpBlock(t);
                                }
                            },
                            {
                                title: t("PORT"),
                                dataIndex: "ports",
                                render: function(e) {
                                    if (module63(e)) {
                                        return "Any";
                                    }
                                    return e.map((e)=><div>{e.protocol}: {e.port}{e.endPort ? `-${e.endPort}` : ""}</div>);
                                }
                            }
                        ]
                    }
                ];
            }
        },
        {
            key: "tableData",
            get: function() {
                const _this = this;
                const detail = this.store.detail;
                const a = module14.toJS(module26(detail, "_originData"));
                const namespace = module26(a, "metadata.namespace");
                const specPodSelector = module26(a, "spec.podSelector");
                const l = module26(a, `spec.${this.direction}`, []);
                const o = this.direction === "ingress" ? "from" : "to";
                const i = [];
                l.forEach((t)=>{
                    const ports = module26(t, "ports", []);
                    module26(t, `${o}`, []).forEach((t)=>{
                        i.push({
                            namespace,
                            specPodSelector,
                            ports,
                            direction: _this.direction,
                            ...t
                        });
                    });
                });
                return i;
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default S;
