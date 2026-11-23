import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-48.js";
import "./module-27.js";
import "./module-190.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-315.js";
import module31 from "./module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import "./module-58.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module1295 from "./module-1295.js";
import module26 from "./module-26.js";
import module447 from "./module-447.js";
import module1039 from "./module-1039.js";
import module195 from "./module-195.js";
import { memoryFormat } from "utils/index";
import module3 from "./module-3.js";
import module1727 from "./module-1727.js";
import module3299 from "./module-3299.js";
import module1728 from "./module-1728.js";
import module3301 from "./module-3301.js";
const TabPanel = module186.Tabs.TabPanel;
const marks = [
    {
        value: 0,
        label: t("NO_REQUEST"),
        weight: 2
    },
    {
        value: 512,
        label: 512,
        weight: 2
    },
    {
        value: 1024,
        label: 1024,
        weight: 2
    },
    {
        value: 1536,
        label: 1536,
        weight: 2
    },
    {
        value: 2048,
        label: 2048
    },
    {
        value: Infinity,
        label: t("NO_LIMIT")
    }
];
const valueFormatter = function(e) {
    if (e > 0 && e < 1) {
        return e.toFixed(2);
    }
    if (e > 1 && e !== Infinity) {
        return e.toFixed(1);
    }
    return e;
};
export default function({ storageLimitSpec, renderOutOfLimitTip = false, totalStorageError = false, totalVolumeClaimsError = false, ...rest }) {
    const P = module553.useState(false);
    const A = module96(P, 2);
    const w = A[0];
    const M = A[1];
    const L = module553.useState({
        "requests.storage": "InfinityGi",
        persistentvolumeclaims: ""
    });
    const j = module96(L, 2);
    const wsQuotaSpec = j[0];
    const U = j[1];
    const F = module553.useState("workspace");
    const V = module96(F, 2);
    const activeName = V[0];
    const B = V[1];
    module553.useEffect(function() {
        const e = module26(storageLimitSpec, [
            "requests.storage"
        ], "InfinityGi");
        const t = {
            "requests.storage": e,
            persistentvolumeclaims: module26(storageLimitSpec, [
                "persistentvolumeclaims"
            ], "")
        };
        M(e === "InfinityGi");
        U({
            ...t
        });
    }, [
        storageLimitSpec
    ]);
    let Y;
    let z;
    let H;
    let W;
    let message;
    let K;
    let Q;
    let J;
    const X = module553.default.createElement("div", {
        className: module3299.tipContent
    }, module553.default.createElement("div", {
        className: module3299.warning
    }, t("TOTAL_STORAGE_LIMIT_LESS_THAN_RELATE_RESOURCE")));
    return module553.default.createElement("div", {
        className: module3299.storageClassBox
    }, module553.default.createElement("div", {
        className: module3299.titleLine
    }, module553.default.createElement("div", {
        className: module3299.icon
    }, module553.default.createElement(module186.Icon, {
        name: "storage",
        size: 40
    })), module553.default.createElement("div", null, module553.default.createElement("span", {
        className: module3299.title
    }, t("STORAGE_QUOTA")), module553.default.createElement("span", {
        className: module3299.desc
    }, rest.isWorkspace ? t("WS_STORAGE_QUOTA_DESC") : t("NS_STORAGE_QUOTA_DESC")))), module553.default.createElement("div", {
        className: module3299.setting
    }, module553.default.createElement(module186.Tabs, {
        type: "button",
        activeName,
        onChange: function(e) {
            return B(e);
        }
    }, module553.default.createElement(TabPanel, {
        label: t("TOTAL_STORAGE_RESOURCE"),
        name: "workspace"
    }, (K = wsQuotaSpec["requests.storage"], Q = module195(K) ? K === "InfinityGi" ? Infinity : memoryFormat(K, "Gi") : K, J = wsQuotaSpec.persistentvolumeclaims, module553.default.createElement("div", {
        className: module3299.storageClassBox
    }, module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, null, module553.default.createElement("div", {
        className: module3299.slider
    }, module553.default.createElement("span", {
        className: module3299.text
    }, t("VOLUME_TOTAL_CAPACITY", {
        unit: "Gi"
    })), module553.default.createElement(module1728, {
        value: w ? Infinity : Q,
        marks,
        unit: "Gi",
        valueFormatter,
        onChange: function(e) {
            return ((e)=>{
                if (module1039(e)) {
                    M(false);
                } else {
                    M(true);
                }
                const t = {
                    "requests.storage": isNaN(e) ? "InfinityGi" : `${e}Gi`,
                    persistentvolumeclaims: module26(wsQuotaSpec, [
                        "persistentvolumeclaims"
                    ], "")
                };
                rest.handleWsLimitChange({
                    ...t
                });
            })(e);
        }
    })))), module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, null, module553.default.createElement("span", {
        className: module3299.text
    }, t("RESOURCE_LIMITS")), module553.default.createElement("div", {
        className: module3(module3299.wrapper, module31({}, module3299.error, totalStorageError))
    }, module553.default.createElement(module1727, {
        className: module3299.input,
        min: 0,
        value: w ? "" : Q,
        placeholder: w ? t("NO_LIMIT") : "",
        onChange: function(e) {
            t = e;
            a = e;
            if (module447(t, ".")) {
                a = Number(t.slice(0, t.length - 1));
            }
            if (!(t !== "" && t !== "-")) {
                a = Infinity;
            }
            return void rest.handleWsLimitChange({
                "requests.storage": `${a}Gi`,
                persistentvolumeclaims: module26(wsQuotaSpec, [
                    "persistentvolumeclaims"
                ], "")
            });
            var t;
            var a;
        }
    }), module553.default.createElement("span", {
        className: module3299.unit
    }, "Gi"))), module553.default.createElement(module186.Column, null, module553.default.createElement("span", {
        className: module3299.text
    }, t("VOLUME_MAX_NUM")), module553.default.createElement("div", {
        className: module3(module3299.wrapper, module31({}, module3299.error, totalVolumeClaimsError))
    }, module553.default.createElement(module1295, {
        className: module3299.input,
        min: 0,
        value: J,
        placeholder: t("NO_LIMIT"),
        onChange: function(e) {
            t = e;
            persistentvolumeclaims = e;
            if (module447(t, ".")) {
                persistentvolumeclaims = Number(t.slice(0, t.length - 1));
            }
            if (!(t !== "" && t !== "-")) {
                persistentvolumeclaims = "";
            }
            return void rest.handleWsLimitChange({
                "requests.storage": module26(storageLimitSpec, [
                    "requests.storage"
                ]),
                persistentvolumeclaims
            });
            var t;
            var persistentvolumeclaims;
        }
    })))), !rest.isWorkspace && (Y = module26(rest.wsAvailableRequest, "storage", Infinity), z = module26(rest.wsAvailableRequest, "persistentvolumeclaims", Infinity), H = module1039(Y) ? t("STORAGE_VOLUME_LIMIT_HAS_A_LIMIT", {
        num: Y
    }) : t("STORAGE_VOLUME_LIMIT_NO_LIMIT"), W = module1039(z) ? t("STORAGE_PERSISTENT_VOLUME_HAS_A_LIMIT", {
        num: z
    }) : t("STORAGE_PERSISTENT_VOLUME_NO_LIMIT"), message = `${H}, ${W}`, module553.default.createElement("div", {
        className: module3299.tipContent
    }, module553.default.createElement(module186.Alert, {
        type: "info",
        title: t("AVAILABLE_QUOTAS"),
        message
    }))), renderOutOfLimitTip && X))), module553.default.createElement(TabPanel, {
        label: t("STORAGE_RELATED_RESOURCE"),
        name: "related"
    }, module553.default.createElement(module3301, {
        wsQuotaSpec,
        namespaceStorageClass: rest.namespaceStorageClass,
        onChange: rest.handleRelateVolumeChange,
        ...rest
    })))));
};
