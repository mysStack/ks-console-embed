import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-42.js";
import "./module-22.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module41 from "./module-41.js";
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
import * as module553 from "./module-553.js";
import module790 from "./module-790.js";
import module789 from "./module-789.js";
import module791 from "./module-791.js";
import module796 from "./module-796.js";
import module793 from "./module-793.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import { getLocalTime } from "./module-52.js";
import { trigger } from "./module-792.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module1844 from "./module-1844.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module495 from "./module-495.js";
import { LICENSE_AUTHORIZED_SERVICE_MAP, LICENSE_TYPE_MAP } from "./module-72.js";
import module5135 from "./module-5135.js";
let i;
let c;
let s;
let f;
const U = inject("rootStore")(i = observer(i = trigger((c = ((e)=>{
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
        e.store = new module1844;
        module65(e, "licenseInfo", s, module88(e));
        e.renderLicense = function() {
            const e_licenseInfo = e.licenseInfo;
            const { owner, startTime, licenseType } = e_licenseInfo;
            const o = licenseType ? licenseType !== "subscription" ? "PERMANENT_AUTHORIZATION" : `${LICENSE_TYPE_MAP[licenseType]}` : "";
            return module553.default.createElement("div", {
                className: module5135.content
            }, module553.default.createElement("div", {
                className: module5135.licenseInfo
            }, module553.default.createElement(module789, {
                icon: "enterprise",
                iconSize: 40,
                title: module26(owner, "co") || "-",
                desc: t("AUTHORIZED_ORGANIZATION")
            }), module553.default.createElement(module789, {
                icon: "key",
                iconSize: 40,
                title: t(o) || "-",
                desc: t("ACTIVATION_TYPE")
            }), module553.default.createElement(module789, {
                icon: "safe-notice",
                iconSize: 40,
                title: module553.default.createElement(module796, {
                    type: e.isExpired ? "warning" : "healthy",
                    name: e.getAuthorizedStatus(licenseType),
                    className: module5135.authorizedStatus
                }),
                desc: t("AUTHORIZED_STATUS")
            }), module553.default.createElement(module789, {
                icon: "clock",
                iconSize: 40,
                title: startTime ? getLocalTime(startTime).format("YYYY-MM-DD") : "-",
                desc: t("ACTIVATION_TIME")
            })));
        };
        module65(e, "getData", f, module88(e));
        e.handleLicenseModal = function() {
            e.trigger("license.update", {
                store: e.store,
                title: e.operationText,
                isOverLimit: e.isOverLimit,
                success: async ()=>await e.getData()
            });
        };
        e.renderTip = function() {
            if (e.isUnAuthorized || e.isExpired) {
                return module553.default.createElement(module186.Icon, {
                    name: "information",
                    size: 16,
                    color: {
                        secondary: "#F5A623",
                        primary: "#fff"
                    }
                });
            }
            return module553.default.createElement(module186.Icon, {
                name: "success",
                size: 16,
                color: {
                    secondary: "#55BC8A",
                    primary: "#fff"
                }
            });
        };
        e.isShowComponents = function(e, t) {
            return module495(e, t.map((e)=>LICENSE_AUTHORIZED_SERVICE_MAP[e.name] || "")).length > 0;
        };
        e.renderCard = function(a, r) {
            return module553.default.createElement("div", {
                className: module5135.wrapper
            }, r.map((r)=>{
                let n = false;
                a.forEach((e)=>{
                    if (e.name === LICENSE_AUTHORIZED_SERVICE_MAP[r.name]) {
                        n = true;
                    }
                });
                if (!n && e.isHideUnauthorizedComponents) {
                    return "";
                }
                return module553.default.createElement("div", {
                    key: r.title,
                    className: module3(module5135.wrapperItem, module31({}, module5135.unAuthored, e.isUnAuthorized || e.isExpired || !n))
                }, module553.default.createElement(module789, {
                    icon: r.avatar,
                    iconSize: 40,
                    title: t(r.title),
                    desc: t("FEATURE")
                }), module553.default.createElement("div", {
                    className: module5135.authorizedInfo
                }, module553.default.createElement("p", null, t(n ? "AUTHORIZED" : "UNAUTHORIZED")), module553.default.createElement("p", null, t("STATUS"))));
            }));
        };
        e.renderServiceInfo = function() {
            const componentConstraints = e.licenseInfo.componentConstraints;
            const r = module14.toJS(componentConstraints) || [];
            const n = e.isUnAuthorized || e.isExpired ? 0 : r.length;
            const u = r.map((e)=>e.name) || [];
            return module553.default.createElement("div", {
                className: module5135.panel
            }, module553.default.createElement("div", {
                className: module5135.panelTitle
            }, t("AUTHORIZED_FEATURES"), module553.default.createElement("span", {
                className: module3(module31({}, module5135.noService, n === 0))
            }, n)), module553.default.createElement("div", {
                className: module5135.CardContainer
            }, (!e.isHideUnauthorizedComponents || e.isShowComponents(u, e.PlateformComponent)) && module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                className: module5135.cardTitle
            }, t("PLATFORM_FEATURES")), e.renderCard(r, e.PlateformComponent)), (!e.isHideUnauthorizedComponents || e.isShowComponents(u, e.RandonDBComponent)) && module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                className: module5135.cardTitle
            }, t("RADON_DB_FEATURES")), e.renderCard(r, e.RandonDBComponent))));
        };
        e.handleLicenseStatus = function() {
            if (e.isUnAuthorized) {
                return "INACTIVATED";
            }
            return "ACTIVATED";
        };
        return e;
    }
    module37(r, [
        {
            key: "getAuthorizedStatus",
            value: function(e) {
                if (e === "subscription") {
                    if (this.isExpired) {
                        return `${t("SUBSCRIPTION_EXPIRES")}`;
                    }
                    return `${t("SUBSCRIPTION_IN_PROGRESS")}`;
                }
                if (this.isExpired) {
                    return `${t("WARRANTY_EXPIRES")}`;
                }
                return `${t("WARRANTY_PERIOD")}`;
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                if (module63(module14.toJS(this.licenseInfo))) {
                    this.getData();
                }
            }
        },
        {
            key: "render",
            value: function() {
                const e = this.handleLicenseStatus();
                return module553.default.createElement("div", null, module553.default.createElement(module793, {
                    icon: "certification",
                    title: t("LICENSE"),
                    description: t("LICENSE_DESC")
                }), module553.default.createElement(module790, {
                    title: t("BASIC_INFORMATION")
                }, module553.default.createElement("div", {
                    className: module5135.horizonBox
                }, module553.default.createElement("div", {
                    className: module3(module5135.horizonBox, module5135.item)
                }, module553.default.createElement("div", {
                    className: module3(module5135.horizonBox, module5135.item)
                }, module553.default.createElement("div", {
                    className: module5135.avatarIcon
                }, module553.default.createElement(module186.Icon, {
                    name: "human",
                    size: 40
                }), module553.default.createElement(module186.Icon, {
                    className: module5135.badge,
                    name: "certification",
                    size: 20,
                    color: {
                        primary: "#fff",
                        secondary: "#36435C"
                    }
                })), module553.default.createElement("div", {
                    className: module5135.avatarText
                }, module553.default.createElement("div", {
                    className: module5135.title
                }, t("PRODUCT_SERVICE_AUTHORIZATION")), module553.default.createElement("div", {
                    className: module5135.description
                }, module553.default.createElement("span", null, t(e)), this.renderTip()))), module553.default.createElement(module791, {
                    className: module5135.item,
                    title: this.licenseInfo.clusterId,
                    description: t("CLUSTER_ID")
                }), module553.default.createElement("div", {
                    className: module5135.item
                }, this.isAdmin && module553.default.createElement(module791, {
                    title: this.licenseInfo.id,
                    description: t("LICENSE_ID")
                }))), this.isAdmin && module553.default.createElement(module186.Button, {
                    onClick: this.handleLicenseModal
                }, t(this.operationText))), !this.isUnAuthorized && this.renderLicense()), this.renderServiceInfo());
            }
        },
        {
            key: "isHideUnauthorizedComponents",
            get: function() {
                return globals.config.isHideUnauthorizedComponents;
            }
        },
        {
            key: "isAdmin",
            get: function() {
                return globals.app.isPlatformAdmin;
            }
        },
        {
            key: "isUnAuthorized",
            get: function() {
                return this.licenseInfo.isUnAuthorized || false;
            }
        },
        {
            key: "operationText",
            get: function() {
                if (this.isOverLimit) {
                    return "ACTIVATE";
                }
                return "UPDATE_LICENSE";
            }
        },
        {
            key: "dueDate",
            get: function() {
                return this.licenseInfo.dueDate || -1;
            }
        },
        {
            key: "isExpired",
            get: function() {
                return !!this.licenseInfo.isExpired || !!this.licenseInfo.unExpired && !(this.dueDate <= 30 && this.dueDate > 0);
            }
        },
        {
            key: "isOverLimit",
            get: function() {
                return this.isUnAuthorized || this.isExpired;
            }
        },
        {
            key: "PlateformComponent",
            get: function() {
                return [
                    {
                        avatar: "edge",
                        title: "EDGE_NODE",
                        name: "Edge"
                    },
                    {
                        avatar: "observability",
                        title: "OBSERVABILITY_CENTER",
                        name: "Observability"
                    },
                    {
                        avatar: "springcloud",
                        title: "Spring Cloud",
                        name: "SpringCloud"
                    }
                ];
            }
        },
        {
            key: "RandonDBComponent",
            get: function() {
                return [
                    {
                        avatar: "mysql",
                        title: "MySQL",
                        name: "MySQL"
                    },
                    {
                        avatar: "postgre-sql",
                        title: "PostgreSQL",
                        name: "PostgreSQL"
                    },
                    {
                        avatar: "click-house",
                        title: "ClickHouse",
                        name: "ClickHouse"
                    },
                    {
                        avatar: "redis",
                        title: "Redis Cluster",
                        name: "Redis Cluster"
                    },
                    {
                        avatar: "redis",
                        title: "Redis Sentinel",
                        name: "Redis Sentinel"
                    },
                    {
                        avatar: "mongo-db",
                        title: "MongoDB",
                        name: "MongoDB"
                    },
                    {
                        avatar: "eck",
                        title: "ECK",
                        name: "ECK"
                    },
                    {
                        avatar: "opensearch",
                        title: "OpenSearch",
                        name: "OpenSearch"
                    },
                    {
                        avatar: "kafka",
                        title: "Kafka",
                        name: "Kafka"
                    }
                ];
            }
        }
    ]);
    return r;
})(module553.Component), s = module49(c.prototype, "licenseInfo", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return this.props.rootStore.licenseInfo || {};
    }
}), f = module49(c.prototype, "getData", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return module44(module41.mark(function* t() {
            let a;
            a = yield _this.store.fetchLicense();
            _this.licenseInfo = a;
            _this.props.rootStore.setLicense(a);
        }));
    }
}), i = c)) || i) || i) || i;
export default U;
