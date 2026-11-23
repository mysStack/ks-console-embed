import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-24.js";
import "./module-85.js";
import "./module-62.js";
import "./module-7.js";
import "./module-28.js";
import "./module-860.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-22.js";
import "./module-41.js";
import "./module-31.js";
import "./module-315.js";
import "./module-44.js";
import module96 from "./module-96.js";
import * as module553 from "./module-553.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import module797 from "./module-797.js";
import module789 from "./module-789.js";
import module796 from "./module-796.js";
import { getNodeStatus } from "./module-444.js";
import { NODE_STATUS } from "./module-72.js";
import module953 from "./module-953.js";
import module1573 from "./module-1573.js";
const S = new module953;
export const EdgewizeNodeTable = module553.forwardRef(function(e, ref) {
    const _this = this;
    const { node, prefix, getSortOrder, getFilteredValue, cluster, selectKeys, enabled, onSelect, setEdgeNodeStatus } = e;
    const R = module553.useState(selectKeys);
    const I = module96(R, 2);
    const w = I[0];
    const M = I[1];
    module553.useEffect(function() {
        if (!w) {
            M(selectKeys);
        }
    }, [
        selectKeys,
        w
    ]);
    let P;
    const A = module553.useState({
        data: [],
        name: "EDGE_NODE",
        module: "edgenodes",
        authKey: "nodes",
        enabledActions: e?.tableProps?.enabledActions,
        rowKey: "name",
        tableId: "",
        isEmptyList: false,
        pagination: {
            page: 1,
            limit: 10,
            total: 0
        }
    });
    const j = module96(A, 2);
    const L = j[0];
    const x = j[1];
    function onFetch(e) {
        return z.apply(this, arguments);
    }
    function z() {
        return (z = async function t(a) {
            let o;
            o = await S.getTreeNode({
                ...e?.match?.params,
                ...a,
                cluster,
                nodetree: node?.key
            });
            setEdgeNodeStatus(!!o.items?.length);
            x({
                ...L,
                data: o.items,
                pagination: {
                    ...L.pagination,
                    data: o.items,
                    total: o.totalItems
                }
            });
        }).apply(this, arguments);
    }
    module553.useEffect(function() {
        if (_this) {
            _this.getData = onFetch;
            _this.props = e;
        }
        if (node?.key) {
            onFetch({});
        }
    }, [
        node
    ]);
    return module553.default.createElement(module797, {
        ref,
        key: w,
        ...L,
        onFetch,
        columns: (P = [
            {
                title: t("NAME"),
                dataIndex: "name",
                sorter: true,
                sortOrder: getSortOrder?.("name"),
                search: true,
                render: function(e, t) {
                    const metadata = (t || {}).metadata;
                    const r_name = metadata.name;
                    const { ip, importStatus } = t;
                    const i = metadata.labels?.["kubeedge.io/internal-ip"] || ip;
                    return module553.default.createElement(module789, {
                        icon: "edge-node",
                        iconSize: 40,
                        to: importStatus !== "success" ? null : `${prefix}/${r_name}`,
                        title: r_name,
                        desc: i ?? "-"
                    });
                }
            },
            {
                title: t("STATUS"),
                dataIndex: "status",
                filters: NODE_STATUS.map((e)=>({
                        text: t(e.text),
                        value: e.value
                    })),
                filteredValue: getFilteredValue?.("status"),
                isHideable: true,
                search: true,
                render: function(e, a) {
                    let r;
                    const n = getNodeStatus(a);
                    const a_taints = a.taints;
                    return module553.default.createElement("div", {
                        className: module1573.status
                    }, module553.default.createElement(module796, {
                        type: n,
                        name: t(`NODE_STATUS_${n.toUpperCase()}`)
                    }), !module63(a_taints) && a.importStatus === "success" && module553.default.createElement(module186.Tooltip, {
                        content: (r = a_taints, module553.default.createElement("div", null, module553.default.createElement("div", null, t("TAINTS"), ":"), module553.default.createElement("div", null, r.map((e)=>{
                            const t = `${e.key}=${e.value || ""}:${e.effect}`;
                            return module553.default.createElement("div", {
                                key: t
                            }, t);
                        }))))
                    }, module553.default.createElement("span", {
                        className: module1573.taints
                    }, a_taints.length)));
                }
            }
        ], enabled || P.unshift({
            title: "",
            dataIndex: "radio",
            isHideable: enabled,
            search: false,
            render: function(e, t) {
                const checked = w.includes(t.metadata.name);
                return module553.default.createElement(module186.Radio, {
                    checked,
                    onChange: function() {
                        M(t.metadata.name);
                        onSelect(t);
                    }
                });
            }
        }), P),
        isLoading: L?.isLoading
    });
});
export default EdgewizeNodeTable;
