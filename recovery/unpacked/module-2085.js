import "./module-15.js";
import "./module-11.js";
import "./module-29.js";
import "./module-30.js";
import "./module-18.js";
import "./module-97.js";
import "./module-16.js";
import "./module-4.js";
import "./module-22.js";
import "./module-38.js";
import "./module-32.js";
import module31 from "./module-31.js";
import module61 from "./module-61.js";
import module96 from "./module-96.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import * as module553 from "./module-553.js";
import { getDisplayNameNew, getDomTitle, showNameAndAlias } from "./module-52.js";
import module2086 from "./module-2086.js";
export default function(e) {
    const e_allWorkspace = e.allWorkspace;
    const n = e_allWorkspace === undefined ? [] : e_allWorkspace;
    const e_cluster = e.cluster;
    const cluster = e_cluster === undefined ? "" : e_cluster;
    const { selectedWs, value } = e;
    const g = module553.useState(false);
    const y = module96(g, 2);
    const E = y[0];
    const b = y[1];
    const _ = module553.useState(selectedWs);
    const O = module96(_, 2);
    const workspace = O[0];
    const C = O[1];
    const D = module553.useState([]);
    const k = module96(D, 2);
    const N = k[0];
    const T = k[1];
    const R = module553.useState([]);
    const I = module96(R, 2);
    const w = I[0];
    const M = I[1];
    const P = module553.useState(false);
    const A = module96(P, 2);
    const j = A[0];
    const L = A[1];
    const xRef = module553.useRef();
    module553.useEffect(function() {
        if (workspace !== "" && cluster !== "") {
            Promise.all([
                e.fetchNsList({
                    cluster,
                    workspace
                })
            ]).then((e)=>{
                const t = module96(e, 1)[0];
                L(false);
                if (t.length > 0) {
                    M(t.map((e)=>({
                            label: getDisplayNameNew(e),
                            value: e.name
                        })));
                } else {
                    M([]);
                }
            });
        }
        if (cluster && value && !selectedWs) {
            e.fetchNsList({
                cluster
            }).then((e)=>{
                L(false);
                if (e.length > 0) {
                    const t = e.find((e)=>e.name === value);
                    if (t) {
                        C(t.workspace);
                    }
                }
            });
        }
    }, [
        workspace,
        cluster
    ]);
    module553.useEffect(function() {
        const e = n.filter((e)=>e.clusters.some((e)=>e.name === cluster) || e.name === "system-workspace");
        T(module61(e));
    }, [
        cluster,
        n
    ]);
    module553.useEffect(function() {
        const e = function({ target }) {
            const xRef_current = xRef.current;
            if (xRef_current && !xRef_current.contains(target)) {
                b(false);
            }
        };
        document.addEventListener("click", e);
        return function() {
            return document.removeEventListener("click", e);
        };
    }, []);
    const onClick = module553.useCallback(function() {
        b(!E);
    }, []);
    return module553.default.createElement("div", {
        className: module2086.selectBox,
        ref: xRef
    }, module553.default.createElement("div", {
        className: module3("select-control", module2086.innerBox),
        onClick
    }, module553.default.createElement("input", {
        readOnly: true,
        autoComplete: "off",
        placeholder: t("PROJECT"),
        value: w.find((e)=>e.value === value)?.label || ""
    }), module553.default.createElement("div", {
        className: module3(module31({}, module2086.iconRotate, E))
    }, module553.default.createElement(module186.Icon, {
        name: "chevron-down",
        size: 16
    }))), module553.default.createElement("div", {
        className: module3(module2086.options, module31({}, module2086.show, E))
    }, module553.default.createElement("ul", null, N.map((e)=>module553.default.createElement("li", {
            className: module3(module2086.ws, module31({}, module2086.isActive, workspace === e.name)),
            key: e.name,
            onClick: function() {
                let t;
                if ((t = e.name) !== workspace) {
                    C(t);
                    L(true);
                }
            }
        }, module553.default.createElement(module186.Icon, {
            name: "enterprise",
            color: {
                primary: "#fff"
            },
            size: 16
        }), module553.default.createElement("span", {
            className: module2086.wsName
        }, showNameAndAlias(e.name, "workspace", {}, false, undefined, true)), module553.default.createElement(module186.Icon, {
            name: "chevron-right",
            color: {
                primary: "#fff"
            },
            size: 16
        })))), module553.default.createElement("ul", {
        className: module2086.ListWrapper
    }, cluster === "" ? module553.default.createElement("div", {
        className: module2086.loadingBox
    }, t("CLUSTER_FIELD_EMPTY")) : j ? module553.default.createElement("div", {
        className: module2086.loadingBox
    }, t("LOADING")) : w.length < 1 ? module553.default.createElement("div", {
        className: module2086.loadingBox
    }, t("NO_DATA_DESC")) : w.map((t)=>module553.default.createElement("li", {
            key: t.value,
            className: module3(module2086.nsItem, module31({}, module2086.isActive, value === t.value)),
            onClick: function() {
                if ((namespace = t.value) !== value) {
                    e.onChange({
                        namespace,
                        workspace
                    });
                }
                return void b(false);
                var namespace;
            }
        }, getDomTitle(t.label))))));
};
