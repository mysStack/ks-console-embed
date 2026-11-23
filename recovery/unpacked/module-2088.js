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
import module3 from "./module-3.js";
import module801 from "./module-801.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import module1153 from "./module-1153.js";
import * as module553 from "./module-553.js";
import module858 from "./module-858.js";
import { getDomTitle, showNameAndAlias } from "./module-52.js";
import { CLUSTER_PROVIDER_ICON } from "./module-72.js";
import module1487 from "./module-1487.js";
function E(e, t) {
    const a = (E.canvas || (E.canvas = document.createElement("canvas"))).getContext("2d");
    a.font = t;
    return a.measureText(e).width;
}
export default function({ clusterOptions, value, onChange }) {
    const ORef = module553.useRef(new module858);
    const S = module553.useState([]);
    const C = module96(S, 2);
    const D = C[0];
    const k = C[1];
    const N = module553.useState(value?.names ?? []);
    const T = module96(N, 2);
    const R = T[0];
    const I = T[1];
    const wRef = module553.useRef();
    const M = module553.useState([]);
    const P = module96(M, 2);
    const A = P[0];
    const j = P[1];
    module553.useEffect(function() {
        const value_cluster = value.cluster;
        const cluster = value_cluster === undefined ? "" : value_cluster;
        if (cluster !== "") {
            Promise.all([
                ORef.current.fetchList({
                    limit: -1,
                    cluster
                })
            ]).then((e)=>{
                const t = module96(e, 1)[0];
                k(t);
            });
        }
    }, [
        value.cluster
    ]);
    module553.useEffect(function() {
        if (!(R.length < 1)) {
            let e = false;
            let t = 0;
            let a = -1;
            const r = wRef.current.selectRef.current.children[0].children[0].children;
            const n = r[r.length - 1].offsetParent.offsetWidth;
            R.forEach((r, l)=>{
                t += E(r, "12px PingFang SC") + 36;
                if (!e && t > n) {
                    a = l;
                    e = true;
                }
            });
            const l = R.map((e, t)=>({
                    label: e,
                    value: e,
                    hide: a !== -1 && t > a
                }));
            if (t > n) {
                l[a].label = `+${R.length - a}`;
                j(module61(l));
            } else {
                j(module61(l));
            }
        }
    }, [
        R
    ]);
    module553.useEffect(function() {
        const children = wRef.current.selectRef.current.children[0].children[0].children;
        A.forEach((t, a)=>{
            if (children[a] && (t.hide || children[a].setAttribute("style", "display:inline-block;"), module1153(t.label, "+"))) {
                const r = module1487.hideIcon;
                children[a].setAttribute("class", `tag tag-default select-multi-value-item ${r}`);
            }
        });
    }, [
        A
    ]);
    const L = module553.useCallback(module801(function(cluster) {
        I([]);
        onChange({
            cluster,
            names: []
        });
    }, 1000));
    const x = module553.useCallback(function(names) {
        I(names);
        onChange({
            cluster: value.cluster,
            names
        });
    });
    const optionRenderer = module553.useCallback(function(e) {
        const t = clusterOptions.filter((t)=>t.name === e.value)[0];
        if (e.value) {
            return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module186.Icon, {
                name: CLUSTER_PROVIDER_ICON[t.provider] || "kubernetes",
                size: 20,
                type: "light"
            }), module553.default.createElement("span", {
                className: module1487.optionText
            }, e.label));
        }
        return null;
    }, [
        clusterOptions
    ]);
    const valueRenderer = module553.useCallback(function(e) {
        if (e.value === "") {
            return module553.default.createElement("span", null, e.label);
        }
        const t = clusterOptions.filter((t)=>t.name === e.value)[0];
        if (!t) {
            return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module186.Icon, {
                name: "question",
                size: 20
            }), module553.default.createElement("span", {
                className: module1487.optionText
            }, e.label));
        }
        const name = module26(t, "provider", false) ? CLUSTER_PROVIDER_ICON[t.provider] : "kubernetes";
        return module553.default.createElement(module553.default.Fragment, null, module553.default.createElement(module186.Icon, {
            name,
            size: 20
        }), module553.default.createElement("span", {
            className: module1487.optionText
        }, e.label));
    }, [
        clusterOptions
    ]);
    return module553.default.createElement("div", {
        className: module1487.selectItem
    }, module553.default.createElement(module186.Select, {
        className: module1487.clusterOpt,
        value: clusterOptions.filter((e)=>e.name === value.cluster)[0]?.name ?? value.cluster,
        options: clusterOptions.map((e)=>({
                label: getDomTitle(showNameAndAlias(e.name, "cluster", {}, true, function() {
                    return undefined.forceUpdate();
                })),
                value: e.name
            })),
        onChange: L,
        optionRenderer,
        valueRenderer,
        placeholder: t("CLUSTER")
    }), module553.default.createElement(module186.Select, {
        ref: wRef,
        className: module3(module1487.nodeOpt),
        value: module63(R) ? "" : R,
        options: D.map((e)=>({
                label: e.name,
                value: e.name
            })),
        valueRenderer: function(e) {
            const t = A.filter((t)=>t.value === e.value);
            return t.length > 0 && module553.default.createElement("span", {
                className: module1487.nodeLabel
            }, t[0].label);
        },
        onChange: x,
        multi: true,
        placeholder: t("NODE")
    }));
};
