import "./module-15.js";
import "./module-11.js";
import "./module-6.js";
import "./module-30.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-22.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import module61 from "./module-61.js";
import module96 from "./module-96.js";
import module186 from "./module-186.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module1153 from "./module-1153.js";
import * as module553 from "./module-553.js";
import module318 from "./module-318.js";
import { getDomTitle, showNameAndAlias } from "./module-52.js";
import { CLUSTER_PROVIDER_ICON } from "./module-72.js";
import module1486 from "./module-1486.js";
import module2085 from "./module-2085.js";
function y(e, t) {
    const a = (y.canvas || (y.canvas = document.createElement("canvas"))).getContext("2d");
    a.font = t;
    return a.measureText(e).width;
}
export default function(e) {
    const { clusterOptions, value, onChange, workloadType } = e;
    const _RefRef = module553.useRef({
        Deployment: new module318("deployments"),
        StatefulSet: new module318("statefulsets"),
        DaemonSet: new module318("daemonsets")
    });
    const ORef = module553.useRef();
    const S = module553.useState("");
    const C = module96(S, 2);
    const selectedWs = C[0];
    const k = C[1];
    const N = module553.useState([]);
    const T = module96(N, 2);
    const R = T[0];
    const I = T[1];
    const w = module553.useState([]);
    const M = module96(w, 2);
    const P = M[0];
    const A = M[1];
    const jRef = module553.useRef("");
    module553.useEffect(function() {
        const value_names = value.names;
        const t = value_names === undefined ? [] : value_names;
        if (!(t.length < 1)) {
            let a = false;
            let r = 0;
            let n = -1;
            const o = ORef.current.selectRef.current.children[0].children[0].children;
            const i = o[o.length - 1].offsetParent.offsetWidth;
            t.forEach((e, t)=>{
                r += y(e, "12px PingFang SC") + 36;
                if (!a && r > i - 30) {
                    n = t;
                    a = true;
                }
            });
            const c = t.map((e, t)=>({
                    label: e,
                    value: e,
                    hide: n !== -1 && t > n
                }));
            if (r > i - 30) {
                c[n].label = `+${t.length - n}`;
                I(module61(c));
            } else {
                I(module61(c));
            }
            const s = ORef.current.selectRef.current.children[0].children[0].children;
            c.forEach((e, t)=>{
                if (s[t] && (e.hide || s[t].setAttribute("style", "display:inline-block;"), module1153(e.label, "+"))) {
                    const a = module1486.hideIcon;
                    if (s[t]) {
                        s[t].setAttribute("class", `tag tag-default select-multi-value-item ${a}`);
                    }
                }
            });
        }
    }, [
        value
    ]);
    module553.useEffect(function() {
        const value_cluster = value.cluster;
        const t = value_cluster === undefined ? "" : value_cluster;
        const value_namespace = value.namespace;
        const r = value_namespace === undefined ? "" : value_namespace;
        if (t !== "" && r !== "" && r !== jRef.current) {
            Promise.all([
                _RefRef.current[workloadType].fetchList({
                    cluster: value.cluster,
                    namespace: value.namespace,
                    limit: -1
                })
            ]).then((e)=>{
                const t = module96(e, 1)[0];
                A(t.map((e)=>e.name));
            });
        }
        jRef.current = value.namespace;
    }, [
        value,
        workloadType
    ]);
    const L = module553.useCallback(function(cluster) {
        if (cluster !== value.cluster) {
            k("");
            onChange({
                cluster,
                namespace: "",
                names: []
            });
        }
    }, [
        value
    ]);
    const x = module553.useCallback(function({ namespace, workspace }) {
        k(workspace);
        onChange({
            cluster: value.cluster,
            namespace,
            names: []
        });
    }, [
        value
    ]);
    const U = module553.useCallback(function(names) {
        onChange({
            cluster: value.cluster,
            namespace: value.namespace,
            names
        });
    }, [
        value
    ]);
    const optionRenderer = module553.useCallback(function(e) {
        const t = clusterOptions.filter((t)=>t.name === e.value)[0];
        if (e.value) {
            return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module186.Icon, {
                name: CLUSTER_PROVIDER_ICON[t.provider] || "kubernetes",
                size: 20,
                type: "light"
            }), module553.default.createElement("span", {
                className: module1486.optionText
            }, e.label));
        }
        return null;
    }, [
        clusterOptions
    ]);
    const F = module553.useCallback(function(e) {
        if (e.value === "") {
            return module553.default.createElement("span", null, e.label);
        }
        const t = clusterOptions.filter((t)=>t.name === e.value)[0];
        if (!t) {
            return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module186.Icon, {
                name: "question",
                size: 20
            }), module553.default.createElement("span", {
                className: module1486.optionText
            }, e.label));
        }
        const name = module26(t, "provider", false) ? CLUSTER_PROVIDER_ICON[t.provider] : "kubernetes";
        return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module186.Icon, {
            name,
            size: 20
        }), module553.default.createElement("span", {
            className: module1486.optionText
        }, e.label));
    }, [
        clusterOptions
    ]);
    const G = module553.useCallback(function(e) {
        const t = R.filter((t)=>t.value === e.value);
        return t.length > 0 && module553.default.createElement("span", {
            className: module1486.nodeLabel
        }, t[0].label);
    }, [
        R
    ]);
    return module553.default.createElement("div", {
        className: module1486.selectItem
    }, module553.default.createElement(module186.Select, {
        className: module1486.clusterOpt,
        value: clusterOptions.filter((e)=>e.name === value.cluster)[0]?.name ?? value.cluster,
        options: clusterOptions.map((e)=>({
                label: getDomTitle(showNameAndAlias(e.name, "cluster", {}, true, function() {
                    return undefined.forceUpdate();
                })),
                value: e.name
            })),
        onChange: L,
        optionRenderer,
        valueRenderer: F,
        placeholder: t("CLUSTER")
    }), module553.default.createElement(module2085, {
        selectedWs,
        value: value.namespace,
        allWorkspace: e.allWorkspace,
        fetchNsList: e.fetchNsList,
        cluster: value.cluster,
        onChange: x
    }), module553.default.createElement(module186.Select, {
        ref: ORef,
        className: module1486.nodeOpt,
        value: module63(value.names) ? "" : value.names,
        options: P.map((e)=>({
                label: e,
                value: e
            })),
        valueRenderer: G,
        onChange: U,
        placeholder: t("WORKLOAD"),
        multi: true
    }));
};
