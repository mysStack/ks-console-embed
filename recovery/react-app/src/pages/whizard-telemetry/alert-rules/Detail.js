import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-86.js";
import "unpacked/module-48.js";
import "unpacked/module-16.js";
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
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import Module796 from "components/Base/Status";
import { getDisplayName, getLocalTime } from "utils/index";
import { trigger } from "utils/action";
import module1015 from "stores/alerting/policy";
import Module825 from "unpacked/module-825.js";
import module4175 from "unpacked/module-4175.js";
import module4185 from "unpacked/module-4185.js";
let u;
const P = inject("rootStore")(u = observer(u = trigger(u = ((Component_1)=>{
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.store = new module1015;
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
        e.getAttrs = function() {
            const a = module14.toJS(e.store.detail);
            if (!module63(a)) {
                const r = module26(a, "enabled");
                const n = module26(a, "createTime");
                const u = module26(a, "interval", "");
                const l = module26(a, "creator");
                const num = module26(a, "evaluationTime");
                const c = [
                    {
                        name: t("POLICY_STATUS"),
                        value: <Module796 className={module4185.icon} type={JSON.parse(r) ? "active" : "disabled"} name={JSON.parse(r) ? t("ENABLED") : t("DISABLED")}/>
                    },
                    {
                        name: t("CHECK_INTERVAL"),
                        value: u !== "" ? t({
                            s: "TIME_S",
                            m: "TIME_M",
                            h: "TIME_H"
                        }[u.slice(-1)], {
                            num: u.slice(0, -1)
                        }) : "-"
                    },
                    {
                        name: t("TIME_SPENT"),
                        value: num !== "-" ? t("TIME_S", {
                            num
                        }) : "-"
                    },
                    {
                        name: t("CREATION_TIME"),
                        value: getLocalTime(n).format("YYYY-MM-DD HH:mm:ss")
                    },
                    {
                        name: t("CREATOR"),
                        value: l !== "" ? l : "-"
                    }
                ];
                if (e.type === "builtin") {
                    const i = module26(a, "_originDataWithStatus.spec.rules");
                    const value = module26(i[0], "annotations.runbook_url", "-");
                    c.push({
                        name: t("REFERENCE"),
                        value
                    });
                }
                return c;
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
                    module: this.module,
                    name: getDisplayName(this.store.detail),
                    desc: this.store.detail.description,
                    attrs: this.getAttrs(),
                    icon: <img src="/assets/bell_gear_duotone.svg"/>,
                    breadcrumbs: [
                        {
                            label: t("ALERTING_POLICY_PL"),
                            url: this.listUrl
                        }
                    ]
                };
                return <Module825 stores={stores} routes={module4175(this.props.match.path)} {...a}/>;
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
                const cluster = this.props.match.params.cluster;
                const type = this.type;
                return `/whizard-telemetry/${cluster}/alert-rules${type ? `?type=${type}` : ""}`;
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
})(Component)) || u) || u) || u;
export default P;
