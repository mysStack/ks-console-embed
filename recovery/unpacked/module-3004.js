import "./module-12.js";
import "./module-135.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-22.js";
import "./module-315.js";
import "./module-31.js";
import "./module-41.js";
import "./module-44.js";
import module96 from "./module-96.js";
import "./module-58.js";
import * as module553 from "./module-553.js";
import module241 from "./module-241.js";
import module186 from "./module-186.js";
import module788 from "./module-788.js";
import module818 from "./module-818.js";
import module854 from "./module-854.js";
import module1175 from "./module-1175.js";
import { showNameAndAlias } from "./module-52.js";
import module3005 from "./module-3005.js";
const O = new module854;
const C = new module1175;
const T = {
    label: t("SELECT_POD_IP_POOL"),
    description: t("SELECT_POD_IP_POOL_TO_NODEGROUP_DESC"),
    icon: "eip-group",
    value: ""
};
export default function(e) {
    const { detail, onOk, ...rest } = e;
    const { cluster, group } = e;
    const E = module553.useState(module241(detail || {}, [
        "namespace",
        "ippool"
    ]));
    const y = module96(E, 2);
    const S = y[0];
    const R = y[1];
    const D = module553.useState([]);
    const N = module96(D, 2);
    const k = N[0];
    const I = N[1];
    const P = module553.useState(false);
    const A = module96(P, 2);
    const isLoading = A[0];
    const M = A[1];
    const L = module553.useState({
        page: 1,
        limit: 10,
        total: 0
    });
    const j = module96(L, 2);
    const pagination = j[0];
    const U = j[1];
    const F = module553.useState([
        T
    ]);
    const V = module96(F, 2);
    const G = V[0];
    const B = V[1];
    const YRef = module553.useRef();
    function onFetch(e) {
        return H.apply(this, arguments);
    }
    function H() {
        return (H = async function e(t) {
            let a;
            let r;
            let total;
            let o;
            M(true);
            a = await O.fetchChildResource({
                kind: "namespaces",
                cluster,
                group,
                ...t
            });
            r = a.data;
            total = a.total;
            if (r) {
                o = r.map((e)=>({
                        label: showNameAndAlias(e, "name"),
                        value: e.name
                    }));
                I(o);
                U({
                    ...pagination,
                    total
                });
            }
            M(false);
        }).apply(this, arguments);
    }
    module553.useEffect(function() {
        onFetch();
    }, [
        detail
    ]);
    const onChange = async (namespace)=>{
        let a;
        let r;
        R({
            namespace,
            ippool: ""
        });
        if ((a = await C.fetchList({
            cluster,
            hasStatus: false,
            limit: -1,
            page: 1,
            labelSelector: `kubesphere.io/namespace=${namespace},node-role.kubernetes.io/edge`
        })) == null ? undefined : a.length) {
            (r = a.map((e)=>({
                    label: e.aliasName || e.name,
                    description: e.cidr,
                    icon: "eip-group",
                    value: e.name
                }))).push(T);
            B(r);
        } else {
            B([
                T
            ]);
        }
    };
    return module553.default.createElement(module788, {
        icon: "pen",
        width: 960,
        title: t("绑定容器组 IP池"),
        bodyClassName: module3005["modal-body"],
        ...rest,
        onOk: function() {
            if (YRef.current) {
                YRef.current.validate(function() {
                    onOk(S);
                });
            }
        }
    }, module553.default.createElement("div", null, module553.default.createElement(module186.Form, {
        ref: YRef,
        data: S
    }, module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, {
        label: t("EDGE_PROJECT"),
        rules: [
            {
                required: true,
                message: t("IPIP_MODE_REQUIRED")
            }
        ]
    }, module553.default.createElement(module186.Select, {
        name: "namespace",
        options: k,
        searchable: true,
        clearable: true,
        pagination,
        isLoading,
        onFetch,
        onChange
    })))), module553.default.createElement(module186.Columns, null, module553.default.createElement(module186.Column, null, module553.default.createElement(module186.Form.Item, {
        label: t("POD_IP_POOL_PL"),
        rules: [
            {
                required: true,
                message: t("POD_IP_POOL_PL_REQUIRED")
            }
        ],
        desc: t("POD_IP_POOL_PL_DESC")
    }, module553.default.createElement(module818, {
        name: "ippool",
        onChange: function(ippool) {
            R({
                ...S,
                ippool
            });
        },
        defaultValue: "",
        options: G,
        renderOption: function(e) {
            return module553.default.createElement("div", {
                className: module3005["ippool-option"]
            }, module553.default.createElement("div", {
                className: module3005["ippool-option-item"]
            }, module553.default.createElement("div", {
                className: module3005["ippool-option-item-title"]
            }, e.label), module553.default.createElement("div", {
                className: module3005["ippool-option-item-des"]
            }, e.value)), e.value && module553.default.createElement("div", {
                className: module3005["ippool-option-item"]
            }, module553.default.createElement("div", {
                className: module3005["ippool-option-item-title"]
            }, e.description), module553.default.createElement("div", {
                className: module3005["ippool-option-item-des"]
            }, t("NETWORK_SEGMENT"))));
        },
        searchable: true
    })))))));
};
