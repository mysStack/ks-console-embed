import "./module-15.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-200.js";
import "./module-86.js";
import "./module-30.js";
import "./module-18.js";
import "./module-16.js";
import "./module-326.js";
import "./module-4.js";
import "./module-38.js";
import "./module-7.js";
import "./module-32.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module186 from "./module-186.js";
import module63 from "./module-63.js";
import module816 from "./module-816.js";
import module791 from "./module-791.js";
import { ClusterTagGroup } from "./module-925.js";
import module3 from "./module-3.js";
import module2121 from "./module-2121.js";
import module2122 from "./module-2122.js";
export default function(e) {
    const a = module553.useState("");
    const r = module96(a, 2);
    const n = r[0];
    const l = r[1];
    const v = module553.useState([]);
    const g = module96(v, 2);
    const y = g[0];
    const E = g[1];
    const b = module2121();
    const _ = module96(b, 1)[0];
    const O = module553.useState(new Map);
    const S = module96(O, 2);
    const C = S[0];
    const D = S[1];
    const k = module553.useState(false);
    const N = module96(k, 2);
    const checked = N[0];
    const R = N[1];
    module553.useEffect(function() {
        const map = new Map;
        const e_value = e.value;
        e.allClusters.forEach((e)=>{
            if (e_value.indexOf(e.name) !== -1 || module63(e_value)) {
                map.set(e.name, e);
            }
        });
        D(map);
        R(map.size === e.allClusters.length);
        E(e.allClusters);
    }, []);
    module553.useEffect(function() {
        e.fetchClusterList({
            name: n,
            limit: -1
        });
    }, [
        n
    ]);
    const I = (t, a)=>{
        const r = Array.from(t.values()).map((e)=>e.name);
        e.onChange(a ? [] : module63(r) ? undefined : r);
    };
    return module553.default.createElement("div", {
        className: module2122.clusterListBox
    }, module553.default.createElement("div", {
        className: module3(module2122.clusterContainer)
    }, module553.default.createElement("div", {
        className: module2122.clusterSearch
    }, module553.default.createElement(module186.Checkbox, {
        checked,
        onChange: function(e) {
            const map = new Map;
            if (e) {
                y.forEach((e)=>{
                    map.set(e.name, e);
                });
                D(map);
            } else {
                D(map);
            }
            R(!checked);
            I(map, !checked);
        },
        className: module2122.checkBox,
        indeterminate: !(y.length === C.size || C.size === 0)
    }, t("SELECT_ALL")), module553.default.createElement(module186.InputSearch, {
        className: module2122.input,
        placeholder: t("SEARCH"),
        value: n,
        onSearch: function(e) {
            l(e);
        }
    })), ((e)=>module553.default.createElement("ul", {
            className: module3(module2122.clusterList, module2122.longList)
        }, e.map((cluster)=>module553.default.createElement("li", {
                className: module2122.cluster,
                key: cluster.uid
            }, module553.default.createElement(module186.Columns, {
                className: module2122.inline
            }, module553.default.createElement(module186.Column, {
                className: module3("is-6", module2122.left)
            }, module553.default.createElement(module186.Checkbox, {
                className: module2122.checkBox,
                checked: C.has(cluster.name),
                onChange: function() {
                    return ((cluster_1)=>{
                        if (C.has(cluster_1.name)) {
                            C.delete(cluster_1.name);
                            D(new Map(C));
                            R(false);
                            I(C, false);
                        } else {
                            const t = new Map(C.set(cluster_1.name, cluster_1));
                            const a = t.size === y.length;
                            D(t);
                            R(a);
                            I(t, a);
                        }
                    })(cluster);
                }
            }), module553.default.createElement(module816, {
                className: "flex",
                cluster
            })), module553.default.createElement(module186.Column, {
                className: "is-6"
            }, module553.default.createElement(module791, {
                title: module553.default.createElement(ClusterTagGroup, {
                    data: cluster.tags.map((e)=>(_ || []).find((t)=>e.name === t.name)).filter(Boolean),
                    empty: "-"
                }),
                description: t("CLUSTER_TAG")
            })))))))(e.allClusters)));
};
