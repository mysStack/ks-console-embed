import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-86.js";
import "./module-48.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
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
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import Module796 from "./module-796.js";
import { trigger } from "./module-792.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import Module825 from "./module-825.js";
import module1999 from "./module-1999.js";
import module5250 from "./module-5250.js";
import module5256 from "./module-5256.js";
let o;
const A = inject("rootStore")(o = observer(o = trigger(o = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(n);
    function n(...o_1) {
        let e;
        module36(this, n);
        e = a.call(this, ...o_1);
        e.store = new module1999;
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
        e.getOperations = function() {
            const params = e.props.match.params;
            const { cluster, namespace } = params;
            const detail = module14.toJS(e.store.detail);
            const enabled = JSON.parse(detail.enabled);
            const u = [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("alerting.baseinfo.edit", {
                            type: e.type,
                            cluster,
                            namespace,
                            detail: module14.toJS(e.store.detail),
                            module: e.store.module,
                            title: t("EDIT_ALERTING_POLICY"),
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "disablePolicy",
                    icon: enabled ? "stop" : "start",
                    text: enabled ? t("DISABLE") : t("ENABLE"),
                    action: "edit",
                    onClick: function() {
                        e.trigger(enabled ? "alerting.rule.update" : "enable.alerting.rule", {
                            type: e.type,
                            resourceName: e.name,
                            cluster,
                            namespace,
                            detail,
                            success: e.fetchData,
                            enabled,
                            title: enabled ? t("DISABLE_ALERTING_POLICY") : t("ENABLE_ALERTING_POLICY")
                        });
                    }
                },
                {
                    key: "editRule",
                    icon: "wrench",
                    text: t("EDIT_ALERT_RULES"),
                    action: "edit",
                    onClick: function() {
                        e.trigger("alerting.rule.edit", {
                            type: e.type,
                            isEdgeWize: true,
                            cluster,
                            namespace,
                            detail,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "editYaml",
                    icon: "pen",
                    text: t("EDIT_YAML"),
                    action: "edit",
                    onClick: function() {
                        return e.trigger("alerting.yaml.edit", {
                            type: e.type,
                            detail,
                            cluster,
                            namespace,
                            title: t("EDIT_ALERTING_POLICY"),
                            success: e.fetchData
                        });
                    }
                }
            ];
            if (e.type === "builtin") {
                u.push(e.resetPolicy);
            } else {
                u.push({
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "delete",
                    type: "danger",
                    onClick: function() {
                        return e.trigger("alerting.rule.delete", {
                            type: e.name,
                            cluster,
                            namespace,
                            detail: e.store.detail,
                            success: function() {
                                return e.routing.push(e.listUrl);
                            }
                        });
                    }
                });
            }
            return u;
        };
        e.getAttrs = function() {
            const a = module14.toJS(e.store.detail);
            if (!module63(a)) {
                const n = module26(a, "enabled");
                const r = module26(a, "createTime");
                const o = module26(a, "interval", "");
                const i = module26(a, "creator");
                const num = module26(a, "evaluationTime");
                return [
                    {
                        name: t("POLICY_STATUS"),
                        value: <Module796 className={module5256.icon} type={JSON.parse(n) ? "active" : "disabled"} name={JSON.parse(n) ? t("ENABLED") : t("DISABLED")}/>
                    },
                    {
                        name: t("CHECK_INTERVAL"),
                        value: o !== "" ? t({
                            s: "TIME_S",
                            m: "TIME_M",
                            h: "TIME_H"
                        }[o.slice(-1)], {
                            num: o.slice(0, -1)
                        }) : "-"
                    },
                    {
                        name: t("TIME_SPENT"),
                        value: num !== "-" ? t("TIME_S", {
                            num
                        }) : "-"
                    },
                    {
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(r).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("CREATOR"),
                        value: i !== "" ? i : "-"
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
                const a = {
                    module: this.module,
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    icon: <img src="/assets/bell_gear_duotone.svg"/>,
                    breadcrumbs: [
                        {
                            label: t("ALERTING_POLICY_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module825 stores={stores} routes={module5250(this.props.match.path)} {...a}/>;
            }
        },
        {
            key: "module",
            get: function() {
                return "alert-rules";
            }
        },
        {
            key: "name",
            get: function() {
                return "ALERTING_POLICY";
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
            key: "listUrl",
            get: function() {
                const e = localStorage.getItem("alert-policy-detail-referrer");
                if (e) {
                    return e;
                }
                const params = this.props.match.params;
                const { cluster, namespace, workspace } = params;
                const type = this.type;
                return `/v2/edgewize${workspace ? `/${workspace}` : ""}/clusters/${cluster}${namespace ? `/projects/${namespace}` : ""}/rule-group${type ? `?type=${type}` : ""}`;
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        },
        {
            key: "resetPolicy",
            get: function() {
                const _this = this;
                const match = this.props.match;
                const detail = module14.toJS(this.store.detail);
                return {
                    key: "reset",
                    icon: "restart",
                    text: t("RESET"),
                    action: "edit",
                    onClick: function() {
                        return _this.trigger("alerting.rule.reset", {
                            type: _this.type,
                            cluster: match.params.cluster,
                            detail,
                            success: _this.fetchData
                        });
                    }
                };
            }
        }
    ]);
    return n;
})(Component)) || o) || o) || o;
export default A;
