import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-316.js";
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
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import "./module-41.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { inject, observer } from "./module-239.js";
import { Component } from "./module-553.js";
import Module900 from "./module-900.js";
import module1995 from "./module-1995.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import { trigger } from "./module-792.js";
import module14 from "./module-14.js";
import module937 from "./module-937.js";
import module186 from "./module-186.js";
import { getValue } from "./module-895.js";
import { silentPolicyConditions, silentPolicyTypes } from "./module-72.js";
import module5169 from "./module-5169.js";
let i;
let c;
let s;
i = inject("rootStore");
c = module937([
    "volume-off-duotone",
    "switch-button-duotone"
]);
const R = i(s = observer(s = c(s = trigger(s = ((Component_1)=>{
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
        e.store = new module1995;
        e.fetchData = async function t() {
            await e.store.fetchDetail(e.props.match.params);
            e.forceUpdate();
        };
        e.getOperations = function() {
            return [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_INFORMATION"),
                    onClick: function() {
                        e.trigger("silent-policy.edit", {
                            detail: module14.toJS(e.store.detail),
                            module: e.store.module,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "editYaml",
                    icon: "pen",
                    text: t("EDIT_YAML"),
                    onClick: function() {
                        const detail = e.store.detail;
                        e.trigger("silent-policy.yaml.update", {
                            yaml: getValue(detail.__data),
                            detail: {
                                ...detail.__data,
                                name: detail.name
                            },
                            module: e.store.module,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "editCondition",
                    icon: "volume-off-duotone",
                    text: t("EDIT_SILENCE_CONDITIONS"),
                    onClick: function() {
                        e.trigger("silent-policy.editCondition", {
                            detail: module14.toJS(e.store.detail),
                            module: e.store.module,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "editTime",
                    icon: "volume-off-duotone",
                    text: t("EDIT_SILENCE_TIME"),
                    onClick: function() {
                        e.trigger("silent-policy.editTime", {
                            detail: module14.toJS(e.store.detail),
                            module: e.store.module,
                            success: e.fetchData
                        });
                    }
                },
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    onClick: function() {
                        return e.trigger("resource.delete", {
                            type: "SILENCE_POLICY",
                            detail: module14.toJS(e.store.detail),
                            success: function() {
                                return e.props.rootStore.routing.push("/settings/silent-policy");
                            }
                        });
                    }
                }
            ];
        };
        e.getAttrs = function() {
            return [
                {
                    name: t("SILENCE_TIME"),
                    value: t(Object.values(silentPolicyTypes).find((t)=>t.value === e.store.detail?.type)?.name ?? "-")
                },
                {
                    name: t("SILENCE_CONDITIONS"),
                    value: t(Object.values(silentPolicyConditions).find((t)=>t.value === e.store.detail?.condition)?.name ?? "-")
                },
                {
                    name: t("CREATION_TIME_TCAP"),
                    value: getLocalTime(e.store.detail?.createTime).format("YYYY-MM-DD HH:mm:ss") ?? "-"
                },
                {
                    name: t("CREATOR"),
                    value: e.store.detail?.creator ?? "-"
                }
            ];
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
                    module: this.store.module,
                    icon: "volume-off-duotone",
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    operations: this.getOperations(),
                    attrs: this.getAttrs(),
                    breadcrumbs: [
                        {
                            label: t("SILENCE_POLICY_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <><Module900 stores={stores} {...a} routes={module5169(this.props.match.path)} watch/></>;
            }
        },
        {
            key: "name",
            get: function() {
                return "DAEMONSET";
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
                return "/settings/silent-policy";
            }
        }
    ]);
    return r;
})(Component)) || s) || s) || s) || s;
export default R;
