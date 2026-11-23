import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-6.js";
import "unpacked/module-30.js";
import "unpacked/module-73.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-32.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module14 from "unpacked/module-14.js";
import module26 from "unpacked/module-26.js";
import module60 from "unpacked/module-60.js";
import module63 from "unpacked/module-63.js";
import module889 from "stores/notification/receiver";
import module796 from "components/Base/Status";
import { getDisplayName, getLocalTime } from "utils/index";
import { SEVERITY_LEVEL } from "configs/alerting/metrics/rule.config";
import { trigger } from "utils/action";
import module5161 from "unpacked/module-5161.js";
import module5165 from "unpacked/module-5165.js";
let o;
const k = {
    alertname: t("ALERTING_NAME"),
    severity: t("ALERTING_SEVERITY"),
    cluster: t("CLUSTER"),
    namespace: t("PROJECT"),
    pod: t("POD"),
    container: t("CONTAINER")
};
const C = {
    In: t("CONTAIN"),
    NotIn: t("NOT_CONTAIN"),
    Exists: t("EXIST"),
    DoesNotExist: t("NOT_EXIST"),
    Match: t("REGEX_MATCH")
};
const O = inject("rootStore")(o = observer(o = trigger(o = ((e)=>{
    module55(r, e);
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.store = new module889;
        e.getOperations = function() {
            return [
                {
                    key: "edit",
                    icon: "pen",
                    text: t("EDIT_NOTIFICATION_SUBSCRIPTION"),
                    action: "edit",
                    onClick: function() {
                        return e.routing.push(`/settings/notification-subscription/${e.module}/detail/${e.store.detail.name}/edit`);
                    }
                },
                {
                    key: "delete",
                    icon: "trash",
                    text: t("DELETE"),
                    action: "delete",
                    type: "danger",
                    onClick: function() {
                        return e.trigger("resource.delete", {
                            type: e.name,
                            detail: module14.toJS(e.store.detail),
                            success: function() {
                                return e.routing.push(e.listUrl);
                            }
                        });
                    }
                }
            ];
        };
        e.getAttrs = function() {
            const a = module14.toJS(e.store.detail);
            if (!module63(a)) {
                const r = module26(a, "_originData.spec.email.enabled", true);
                const type = r ? "success" : "disabled";
                const u = r ? "ENABLED" : "DISABLED";
                return [
                    {
                        name: t("NOTIFICATION_RECEIVER_STATUS"),
                        value: module553.default.createElement(module796, {
                            type,
                            name: t(u)
                        })
                    },
                    {
                        name: t("CREATION_TIME_TCAP"),
                        value: getLocalTime(a.createTime).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("CREATOR"),
                        value: a.creator
                    }
                ];
            }
        };
        e.arrayValues2String = function(t) {
            if (t.key === "severity") {
                return t.values.map((t)=>e.severities[t]).join(",");
            }
            if (module60(t.values)) {
                return t.values.join(",");
            }
            if ("regexValue" in t) {
                return t.regexValue;
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const name = this.props.match.params.name;
                this.store.fetchDetail({
                    name
                });
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const a = module14.toJS(this.store.detail);
                const r = {
                    module: this.module,
                    name: getDisplayName(a),
                    desc: a.description,
                    operations: this.getOperations(),
                    authKey: "platform-settings",
                    attrs: this.getAttrs(),
                    avatar: "/assets/receiver.svg",
                    breadcrumbs: [
                        {
                            label: t("NOTIFICATION_SUBSCRIPTION_DETAIL"),
                            url: this.listUrl
                        }
                    ]
                };
                const { to = [], alertSelector = {
                    matchExpressions: []
                } } = module26(a, "_originData.spec.email", {});
                return module553.default.createElement(module5161, {
                    stores: {
                        detailStore: this.store
                    },
                    ...r
                }, module553.default.createElement("div", {
                    className: module5165.panels
                }, module553.default.createElement("div", {
                    className: module5165.title
                }, t("NOTIFICATION_SUBSCRIPTION_ACCOUNT")), module553.default.createElement("ul", {
                    className: module5165.accountsList
                }, to.map((e, t)=>module553.default.createElement("li", {
                        key: t
                    }, e)))), module553.default.createElement("div", {
                    className: module5165.panels
                }, module553.default.createElement("div", {
                    className: module5165.title
                }, t("FILTER_CONDITIONS")), module553.default.createElement("ul", {
                    className: module5165.matchExpressionsList
                }, module60(alertSelector.matchExpressions) && alertSelector.matchExpressions.length > 0 ? alertSelector.matchExpressions.map((a, r)=>{
                    const n = _this.arrayValues2String(a);
                    return module553.default.createElement("li", {
                        key: r
                    }, module553.default.createElement("div", null, module553.default.createElement("span", {
                        className: module5165.label
                    }, t("LABEL"), ":"), module553.default.createElement("span", {
                        className: module5165.value
                    }, k[a.key] || a.key)), module553.default.createElement("div", null, module553.default.createElement("span", {
                        className: module5165.label
                    }, t("CONDITION_OPERATOR"), ":"), module553.default.createElement("span", {
                        className: module5165.value
                    }, C[a.operator])), module553.default.createElement("div", null, module553.default.createElement("span", {
                        className: module5165.label
                    }, t("VALUE"), ":"), module553.default.createElement("span", {
                        className: module5165.value
                    }, n)));
                }) : module553.default.createElement("li", null, t("NO_DATA")))));
            }
        },
        {
            key: "severities",
            get: function() {
                const e = {};
                SEVERITY_LEVEL.forEach((a)=>{
                    e[a.value] = t(a.label);
                });
                return e;
            }
        },
        {
            key: "listUrl",
            get: function() {
                return `/settings/notification-subscription/${this.module}`;
            }
        },
        {
            key: "module",
            get: function() {
                return "subscription-mail";
            }
        },
        {
            key: "name",
            get: function() {
                return "NOTIFICATION_SUBSCRIPTION";
            }
        },
        {
            key: "routing",
            get: function() {
                return this.props.rootStore.routing;
            }
        }
    ]);
    return r;
})(module553.Component)) || o) || o) || o;
export default O;
