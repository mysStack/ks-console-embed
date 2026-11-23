import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-86.js";
import "./module-18.js";
import "./module-48.js";
import "./module-16.js";
import "./module-27.js";
import "./module-190.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-24.js";
import "./module-62.js";
import "./module-64.js";
import "./module-7.js";
import module31 from "./module-31.js";
import module96 from "./module-96.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import module800 from "./module-800.js";
import module447 from "./module-447.js";
import module26 from "./module-26.js";
import module1039 from "./module-1039.js";
import * as module553 from "./module-553.js";
import { memoryFormat } from "./module-52.js";
import { STORAGE_CLASS_STORAGE, STORAGE_CLASS_VOLUME_CLAIMS } from "./module-1379.js";
import module1728 from "./module-1728.js";
import module1727 from "./module-1727.js";
import module3302 from "./module-3302.js";
import module3303 from "./module-3303.js";
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
const C = {
    name: "",
    "requests.storage": "InfinityGi",
    persistentvolumeclaims: ""
};
function valueFormatter(e) {
    if (e > 0 && e < 1) {
        return e.toFixed(2);
    }
    if (e > 1 && e !== Infinity) {
        return e.toFixed(1);
    }
    return e;
}
export default function(e) {
    const a = module553.useState(false);
    const r = module96(a, 2);
    const n = r[0];
    const l = r[1];
    const S = module553.useState({
        ...C
    });
    const R = module96(S, 2);
    const D = R[0];
    const N = R[1];
    const kRef = module553.useRef();
    const I = module553.useState({
        editItemName: "",
        isEditMode: false,
        storage: 0,
        claims: 0
    });
    const P = module96(I, 2);
    const A = P[0];
    const w = P[1];
    const M = module553.useState({
        limit: "",
        count: ""
    });
    const L = module96(M, 2);
    const j = L[0];
    const x = L[1];
    const U = module553.useState(false);
    const F = module96(U, 2);
    const V = F[0];
    const G = F[1];
    const B = module553.useState(false);
    const Y = module96(B, 2);
    const z = Y[0];
    const H = Y[1];
    const W = module553.useCallback(function() {
        if (n) {
            kRef.current.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [
        kRef,
        n
    ]);
    module553.useEffect(function() {
        W();
    }, [
        n,
        V,
        z
    ]);
    module553.useEffect(function() {
        let t = module26(e.availableQuota, [
            "storage"
        ], Infinity);
        let a = module26(e.availableQuota, [
            "persistentvolumeclaims"
        ], Infinity);
        let r = module26(e.wsQuotaSpec, [
            "persistentvolumeclaims"
        ]);
        let n = module26(e.wsQuotaSpec, [
            "requests.storage"
        ]);
        r = r === "" ? Infinity : r;
        if (typeof (n = n === "" ? Infinity : n) === "string") {
            n = memoryFormat(n, "Gi") || Infinity;
        }
        if (!e.isWorkspace) {
            const l = D.name;
            const o = module26(e.relatedStoragesLimit, [
                `${l}`
            ], null);
            if (o) {
                const c = o.filter((e)=>module96(e, 1)[0].match("storageclass.storage.k8s.io/requests.storage"));
                const s = o.filter((e)=>module96(e, 1)[0].match("storageclass.storage.k8s.io/persistentvolumeclaims"));
                let i = Infinity;
                let f = Infinity;
                if (c.length > 0) {
                    i = memoryFormat(c[0][1], "Gi");
                }
                if (s.length > 0) {
                    f = Number(s[0][1]);
                }
                if ((t -= e.currentRelatedStorageTotal) < i) {
                    if (A.isEditMode) {
                        let m = memoryFormat(A.storage, "Gi");
                        t += m = isNaN(m) ? 0 : Number(m);
                    }
                } else {
                    t = i;
                }
                if ((a -= e.currentRelatedVolumeClaimsTotal) < f) {
                    if (A.isEditMode) {
                        a += Number(A.claims);
                    }
                } else {
                    a = f;
                }
            } else {
                let h = Math.min(t, n);
                let E = Math.min(a, r);
                h -= e.currentRelatedStorageTotal;
                E -= e.currentRelatedVolumeClaimsTotal;
                if (A.isEditMode) {
                    let y = memoryFormat(A.storage, "Gi");
                    h += y = isNaN(y) ? 0 : Number(y);
                    E += Number(A.claims);
                }
                t = h;
                a = E;
            }
        }
        const limit = t >= 0 ? Math.min(t, n) : module1039(n) ? n : Infinity;
        const count = Math.min(a, r);
        x({
            limit,
            count
        });
    }, [
        e.availableQuota,
        D,
        n
    ]);
    module553.useEffect(function() {
        X(D.persistentvolumeclaims);
        let e = memoryFormat(D["requests.storage"], "Gi");
        J(e = e !== "" ? e : "Infinity");
    }, [
        j
    ]);
    let q;
    let K;
    const onChange = module553.useCallback(function(e) {
        N({
            ...D,
            name: e.name
        });
    }, [
        D
    ]);
    var J = (t)=>{
        const j_limit = j.limit;
        const e_currentRelatedStorageTotal = e.currentRelatedStorageTotal;
        const { isEditMode, storage } = A;
        const o = memoryFormat(storage, "Gi");
        if (j_limit !== "InfinityGi" && j_limit !== "" && module1039(t)) {
            let u = Number(j_limit);
            if (e.isWorkspace) {
                u -= e_currentRelatedStorageTotal;
                if (!isNaN(o) && isEditMode) {
                    u += o;
                }
            }
            if (typeof j_limit === "string") {
                u = Number(j_limit.replace(/[a-zA-Z]/g, ""));
            }
            G(t > u);
        } else {
            if (V) {
                G(false);
            }
        }
    };
    var X = (persistentvolumeclaims)=>{
        const j_count = j.count;
        const e_currentRelatedVolumeClaimsTotal = e.currentRelatedVolumeClaimsTotal;
        const { isEditMode, claims } = A;
        if (j_count !== "" && persistentvolumeclaims !== "") {
            let o = j_count;
            if (e.isWorkspace) {
                o -= e_currentRelatedVolumeClaimsTotal;
                if (claims !== "" && isEditMode) {
                    o += Number(claims);
                }
            }
            if (typeof j_count === "string") {
                o = j_count.replace(/[a-zA-Z]/g, "");
            }
            if (Number(persistentvolumeclaims) > o) {
                H(true);
            } else {
                H(false);
            }
        } else {
            H(false);
        }
    };
    const Z = module553.useCallback(function() {
        l(false);
        N({
            ...C
        });
        H(false);
        G(false);
        w({
            editItemName: "",
            isEditMode: false,
            storage: 0,
            claims: 0
        });
    }, []);
    const $ = module553.useCallback(function() {
        let t;
        l(false);
        const { name, "requests.storage": requests_storage, persistentvolumeclaims } = D;
        t = {};
        module31(t, `${name}.${STORAGE_CLASS_STORAGE}`, requests_storage);
        module31(t, `${name}.${STORAGE_CLASS_VOLUME_CLAIMS}`, persistentvolumeclaims);
        const u = t;
        const c = A.isEditMode ? {
            actionType: "edit",
            originName: A.editItemName,
            data: {
                ...u
            }
        } : {
            actionType: "add",
            data: {
                ...u
            }
        };
        e.onChange(c);
        N(C);
        w({
            editItemName: "",
            isEditMode: false,
            limit: 0,
            claims: 0
        });
    }, [
        D
    ]);
    const ee = module553.useCallback(function(t) {
        let a;
        const t_name = t.name;
        e.onChange({
            actionType: "delete",
            data: (a = {}, module31(a, `${t_name}.${STORAGE_CLASS_STORAGE}`, ""), module31(a, `${t_name}.${STORAGE_CLASS_VOLUME_CLAIMS}`, ""), a)
        });
    }, []);
    const te = module553.useCallback(function(e, t) {
        N({
            name: e.name,
            "requests.storage": t.storage,
            persistentvolumeclaims: t.claims
        });
        w({
            editItemName: e.name,
            isEditMode: true,
            storage: t.storage,
            claims: t.claims
        });
        l(true);
    }, []);
    const ae = module553.useCallback(function() {
        return module553.default.createElement("div", {
            className: module3302.relatedBox
        }, module553.default.createElement("div", {
            className: module3302.list
        }, Object.entries(e.namespaceStorageClass).map((a, key)=>{
            const n = module96(a, 2);
            const l = n[0];
            const o = n[1];
            const s = e.allStorageClass.find((e)=>e.name === l);
            let i = "InfinityGi";
            let claims = "";
            const p = o.filter((e)=>e.key.indexOf("requests.storage") !== -1);
            if (p.length > 0) {
                i = p[0].value;
            }
            let h;
            let E;
            let y;
            const b = o.filter((e)=>e.key.indexOf("persistentvolumeclaims") !== -1);
            if (b.length > 0) {
                claims = b[0].value;
            }
            return s && module553.default.createElement("div", {
                className: module3302.card,
                key
            }, (h = s, E = {
                storage: i === "InfinityGi" ? "InfinityGi" : `${memoryFormat(i, "Gi")}Gi`,
                claims
            }, y = memoryFormat(E.storage, "Gi"), module553.default.createElement(module553.default.Fragment, null, module553.default.createElement("div", {
                className: module3302.baseInfo
            }, module553.default.createElement("div", {
                className: module3302.Icon
            }, module553.default.createElement(module186.Icon, {
                name: "database",
                size: 40
            })), module553.default.createElement("div", {
                className: module3302.text
            }, module553.default.createElement("p", {
                className: module3302.label
            }, h.name, h.default && module553.default.createElement("span", {
                className: module3302.default
            }, t("DEFAULT"))), module553.default.createElement("p", {
                className: module3302.value
            }, t("NAME"))), module553.default.createElement("div", {
                className: module3302.text
            }, module553.default.createElement("p", {
                className: module3302.label
            }, module26(e.relatedCount, h.name, 0)), module553.default.createElement("p", {
                className: module3302.value
            }, t("VOLUME_COUNT"))), module553.default.createElement("div", {
                className: module3302.iconText
            }, module553.default.createElement("div", null, module553.default.createElement("p", {
                className: module3302.label
            }, h.provisioner), module553.default.createElement("p", {
                className: module3302.value
            }, t("PROVISIONER"))), module553.default.createElement("div", {
                className: module3302.opt
            }, module553.default.createElement(module186.Icon, {
                name: "trash",
                size: 16,
                onClick: function() {
                    return ee(h);
                }
            }), module553.default.createElement(module186.Icon, {
                name: "pen",
                size: 16,
                onClick: function() {
                    return te(h, E);
                }
            })))), module553.default.createElement("div", {
                className: module3302.config
            }, module553.default.createElement("span", {
                className: module3302.config_text
            }, module553.default.createElement("span", {
                className: module3302.value
            }, t("STORAGE_LIMIT"), ": "), module553.default.createElement("span", {
                className: module3302.label
            }, E.storage === "InfinityGi" || isNaN(y) ? t("NO_LIMIT") : `${y}Gi`)), module553.default.createElement("span", {
                className: module3302.config_text
            }, module553.default.createElement("span", {
                className: module3302.value
            }, t("STORAGE_CLASS_VOLUME"), ": "), module553.default.createElement("span", {
                className: module3302.label
            }, E.claims !== "" ? E.claims : t("NO_LIMIT")))))));
        })), module553.default.createElement("div", {
            className: module3302.addQuota,
            onClick: function() {
                return l(true);
            }
        }, module553.default.createElement("p", {
            className: module3302.label
        }, t("SELECT_A_STORAGECLASS")), module553.default.createElement("p", {
            className: module3302.value
        }, t("SET_RELATED_STORAGE_CLASS_QUOTA"))));
    }, [
        e.namespaceStorageClass
    ]);
    if (n) {
        q = memoryFormat(D["requests.storage"], "Gi");
        K = D.persistentvolumeclaims;
        return module553.default.createElement("div", {
            className: module3302.addBox
        }, module553.default.createElement("div", {
            className: module3302.addContent,
            ref: kRef
        }, module553.default.createElement(module3303, {
            addedItems: e.addedItems,
            allStorageClass: e.allStorageClass,
            editName: D.name,
            editMode: A.isEditMode,
            onChange
        }), module553.default.createElement("div", null, module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, null, module553.default.createElement("div", {
            className: module3302.slider
        }, module553.default.createElement("span", {
            className: module3302.text
        }, t("VOLUME_TOTAL_CAPACITY", {
            unit: "Gi"
        })), module553.default.createElement(module1728, {
            value: module1039(q) ? Number(q) : Infinity,
            marks,
            unit: "Gi",
            valueFormatter,
            onChange: function(e) {
                return ((e)=>{
                    const t = isNaN(e) ? "InfinityGi" : `${e}Gi`;
                    J(t);
                    N({
                        ...D,
                        "requests.storage": t
                    });
                })(e);
            }
        })))), module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, null, module553.default.createElement("span", {
            className: module3302.text
        }, t("RESOURCE_LIMITS")), module553.default.createElement("div", {
            className: module3(module3302.wrapper, module31({}, module3302.error, V))
        }, module553.default.createElement(module1727, {
            className: module3302.input,
            min: 0,
            value: module1039(q) ? q : "",
            placeholder: module1039(q) ? "" : t("NO_LIMIT"),
            onChange: function(e) {
                t = e;
                a = e;
                if (module447(t, ".")) {
                    a = Number(t.slice(0, t.length - 1));
                }
                if (!(t !== "" && t !== "-")) {
                    a = Infinity;
                }
                J(a);
                return void N({
                    ...D,
                    "requests.storage": `${a}Gi`
                });
                var t;
                var a;
            }
        }), module553.default.createElement("span", {
            className: module3302.unit
        }, "Gi"))), module553.default.createElement(module186.Column, null, module553.default.createElement("span", {
            className: module3302.text
        }, t("VOLUME_MAX_NUM")), module553.default.createElement("div", {
            className: module3(module3302.wrapper, module31({}, module3302.error, z))
        }, module553.default.createElement(module800, {
            className: module3302.input,
            min: 0,
            value: K,
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
                X(persistentvolumeclaims);
                return void N({
                    ...D,
                    persistentvolumeclaims
                });
                var t;
                var persistentvolumeclaims;
            }
        }))))), (()=>{
            const { limit, count } = j;
            const { currentRelatedStorageTotal, currentRelatedVolumeClaimsTotal } = e;
            let o = limit;
            let u = count;
            if (e.isWorkspace) {
                if (module1039(limit)) {
                    o -= currentRelatedStorageTotal;
                }
                if (module1039(count)) {
                    u -= currentRelatedVolumeClaimsTotal;
                }
                const { isEditMode, storage, claims } = A;
                const d = memoryFormat(storage, "Gi");
                if (module1039(limit) && isEditMode && !isNaN(d)) {
                    o += d;
                }
                if (claims !== "" && module1039(count) && isEditMode) {
                    u += Number(claims);
                }
            }
            const h = module1039(limit) ? t("STORAGE_VOLUME_LIMIT_HAS_A_LIMIT", {
                num: o
            }) : t("STORAGE_VOLUME_LIMIT_NO_LIMIT");
            const E = module1039(count) ? t("STORAGE_PERSISTENT_VOLUME_HAS_A_LIMIT", {
                num: u
            }) : t("STORAGE_PERSISTENT_VOLUME_NO_LIMIT");
            const message = `${h}, ${E}`;
            return module553.default.createElement("div", {
                className: module3302.tipContent
            }, module553.default.createElement(module186.Alert, {
                type: "info",
                title: t("AVAILABLE_QUOTAS"),
                message
            }), (V || z) && module553.default.createElement("div", {
                className: module3302.warning
            }, t("REQUEST_EXCEED_AVAILABLE_QUOTA")));
        })(), module553.default.createElement("div", {
            className: module3302.closeContent
        }, module553.default.createElement("div", {
            className: module3302.icon,
            onClick: Z
        }, module553.default.createElement(module186.Icon, {
            name: "close",
            size: 16
        })), module553.default.createElement("div", {
            className: module3(module3302.icon, module31({}, module3302.disabled, z || V)),
            onClick: $
        }, module553.default.createElement(module186.Icon, {
            name: "check",
            size: 16
        })))));
    }
    return ae();
};
