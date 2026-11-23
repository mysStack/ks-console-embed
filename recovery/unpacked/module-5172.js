import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-30.js";
import "./module-73.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-32.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { inject } from "./module-239.js";
import module26 from "./module-26.js";
import module60 from "./module-60.js";
import Module848 from "./module-848.js";
import module14 from "./module-14.js";
import module5173 from "./module-5173.js";
let o;
const E = inject("detailStore")(o = ((Component_1)=>{
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
        e.arrayValues2String = function(t) {
            if (t.key === "severity") {
                return t.values.map((t)=>e.severityOptions.find((e)=>e.value === t)?.label).join(",");
            }
            if (module60(t.values)) {
                return t.values.join(",");
            }
            if ("regexValue" in t) {
                return t.regexValue;
            }
        };
        e.renderItem = function(a, key) {
            const l = e.arrayValues2String(a);
            return <div className={module5173.item} key={key}><div><span className={module5173.label}>{t("TAG")}:</span><span className={module5173.value}>{e.keys.find((e)=>e.value === a.key)?.label ?? a.key}</span></div><div><span className={module5173.label}>{t("CONDITION_OPERATOR")}:</span><span>{e.operators.find((e)=>e.value === a.operator)?.label}</span></div><div><span className={module5173.label}>{t("VALUE")}:</span><span>{l}</span></div></div>;
        };
        return e;
    }
    module37(r, [
        {
            key: "renderEmpty",
            value: function() {
                return <Module848 desc={t("ALL_SILENT_NOTIFICATIONS")}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const e = module26(this.props.detailStore, "detail.matchExpressions", []);
                const a = module14.toJS(e);
                return <div className={module5173.wrapper}><div className={module5173.title}>{t("SILENCE_CONDITIONS")}</div><div className={module5173.content}>{a.map(this.renderItem)}{!this.props.detailStore.isLoading && a.length === 0 && this.renderEmpty()}</div></div>;
            }
        },
        {
            key: "keys",
            get: function() {
                return [
                    {
                        label: t("ALERTING_NAME"),
                        value: "alertname"
                    },
                    {
                        label: t("CLUSTER"),
                        value: "cluster"
                    },
                    {
                        label: t("ALERTING_SEVERITY"),
                        value: "severity"
                    },
                    {
                        label: t("PROJECT"),
                        value: "namespace"
                    },
                    {
                        label: t("POD"),
                        value: "pod"
                    },
                    {
                        label: t("CONTAINER"),
                        value: "container"
                    }
                ];
            }
        },
        {
            key: "severityOptions",
            get: function() {
                return [
                    {
                        label: t("CRITICAL_ALERT"),
                        value: "critical"
                    },
                    {
                        label: t("ERROR_ALERT"),
                        value: "error"
                    },
                    {
                        label: t("WARNING_ALERT"),
                        value: "warning"
                    },
                    {
                        label: t("INFO_ALERT"),
                        value: "info"
                    }
                ];
            }
        },
        {
            key: "operators",
            get: function() {
                return [
                    {
                        label: t("CONTAIN"),
                        value: "In"
                    },
                    {
                        label: t("NOT_CONTAIN"),
                        value: "NotIn"
                    },
                    {
                        label: t("EXIST"),
                        value: "Exists"
                    },
                    {
                        label: t("REGEX_MATCH"),
                        value: "Match"
                    },
                    {
                        label: t("NOT_EXIST"),
                        value: "DoesNotExist"
                    }
                ];
            }
        }
    ]);
    return r;
})(Component)) || o;
export default E;
