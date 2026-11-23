import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-24.js";
import "./module-62.js";
import "./module-188.js";
import "./module-7.js";
import "./module-315.js";
import module41 from "./module-41.js";
import "./module-31.js";
import module44 from "./module-44.js";
import module96 from "./module-96.js";
import "./module-28.js";
import "./module-860.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import "./module-22.js";
import * as module553 from "./module-553.js";
import module26 from "./module-26.js";
import module63 from "./module-63.js";
import { Link, useLocation, useParams } from "./module-433.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module240 from "./module-240.js";
import module1175 from "./module-1175.js";
import module953 from "./module-953.js";
import module1309 from "./module-1309.js";
import { EdgewizeNodeTable } from "./module-5185.js";
import module1572 from "./module-1572.js";
import module1311 from "./module-1311.js";
const store_1 = new module953;
const store = new module1175;
export function NodeTree(e) {
    let n;
    const ref = module553.createRef();
    const o = useLocation();
    const l = useParams();
    const l_cluster = l.cluster;
    const _ = module553.useState([]);
    const k = module96(_, 2);
    const treeData = k[0];
    const R = k[1];
    const D = module553.useState([]);
    const P = module96(D, 2);
    const expandedKeys = P[0];
    const I = P[1];
    const x = module553.useState({
        page: 1,
        searchValue: ""
    });
    const M = module96(x, 2);
    const L = M[0];
    const j = M[1];
    const U = module553.useState(true);
    const z = module96(U, 2);
    const autoExpandParent = z[0];
    const Y = z[1];
    const F = module553.useState({});
    const H = module96(F, 2);
    const V = H[0];
    const B = H[1];
    function W() {
        return K.apply(this, arguments);
    }
    function K() {
        return (K = async function e() {
            let t;
            t = await store_1.getAllNodeTree(l_cluster);
            R(t);
            if (!V?.metadata && t.length) {
                B(t[0]);
            }
        }).apply(this, arguments);
    }
    function J() {
        return (J = async function a(n) {
            e.trigger("resource.delete", {
                type: "NODE_GROUP_TREE",
                detail: {
                    ...n,
                    name: n.metadata.name
                },
                onOk: function() {
                    return store_1.deleteNodeTree(l_cluster, n.key);
                },
                success: function() {
                    W();
                    module240.success({
                        content: t("DELETED_SUCCESSFULLY")
                    });
                }
            });
        }).apply(this, arguments);
    }
    function q() {
        return (q = async function t(a) {
            e.trigger("node.group.tree.baseinfo.edit", {
                detail: {
                    name: a.key,
                    ...a,
                    metadata: a.metadata,
                    spec: {
                        alias: module26(a, 'metadata.annotations["kubesphere.io/alias-name"]'),
                        description: module26(a, 'metadata.annotations["kubesphere.io/description"]')
                    }
                },
                ...e.match.params,
                onOk: async function(t) {
                    let n;
                    let r;
                    n = await store_1.getNodeTree(l_cluster, a.key);
                    r = n.metadata;
                    return store_1.updateNodeTree({
                        cluster: l_cluster,
                        nodetree: a.key,
                        ...n,
                        kind: "NodeTree",
                        apiVersion: "infra.kubesphere.io/v1alpha1",
                        metadata: {
                            ...r,
                            annotations: {
                                ...r.annotations,
                                "kubesphere.io/alias-name": t.alias,
                                "kubesphere.io/description": t.description
                            }
                        }
                    });
                },
                success: W
            });
        }).apply(this, arguments);
    }
    module553.useEffect(function() {
        if (autoExpandParent) {
            const e = function e(treeData_1, a = []) {
                treeData_1?.forEach(function(t) {
                    a.push(t.metadata.name);
                    if (t.spec?.children) {
                        e(t.spec?.children, a);
                    }
                });
                return a;
            }(treeData);
            I(e);
        } else {
            I([]);
        }
    }, [
        autoExpandParent,
        treeData
    ]);
    module553.useEffect(function() {
        (function() {
            if (this?.props) {
                this.props = e;
            }
        })();
        W();
    }, []);
    return module553.default.createElement(module186.Columns, {
        className: module1311["node-tree"]
    }, module553.default.createElement(module186.Column, {
        className: module3(module1311["node-tree-left"], "is-4")
    }, module553.default.createElement("div", {
        className: module1311["node-tree-bg"]
    }, module553.default.createElement(module186.InputSearch, {
        className: module1311.search,
        name: "search",
        value: L.searchValue,
        placeholder: t("SEARCH_BY_NAME"),
        onChange: function(e, searchValue) {
            j({
                searchValue,
                page: 1
            });
        },
        autoComplete: "off"
    }), module553.default.createElement("div", null, module553.default.createElement("div", {
        className: module3(module1311["node-group__tree-item"], module1311["node-group__tree-item-margin"])
    }, module553.default.createElement("img", {
        className: module1311.icon,
        width: 20,
        src: "/assets/disk_group.svg",
        alt: ""
    }), module553.default.createElement("span", {
        className: module1311["node-group__tree-item-title"],
        onClick: W
    }, "全部节点组"), module553.default.createElement("img", {
        className: module1311["node-group__tree-item-icon-hover"],
        name: autoExpandParent ? "sort-ascending" : "sort-descending",
        width: 20,
        src: `/assets/${autoExpandParent ? "close_all" : "expand_all"}.svg`,
        onClick: function() {
            return Y(!autoExpandParent);
        },
        alt: ""
    }), module553.default.createElement("span", {
        className: module1311["node-group__tree-item-add"]
    }, module553.default.createElement(module186.Icon, {
        onClick: function() {
            e.trigger("node.group.create", {
                store: store_1,
                module: e.module,
                ...e.match.params,
                success: function() {
                    W();
                }
            });
        },
        className: module1311["node-group__tree-item-icon-hover"],
        type: "light",
        name: "add",
        size: 20
    }))), module553.default.createElement(module1309, {
        treeData,
        expandedKeys,
        onSelect: function(e) {
            B(e);
            store_1.setSelectRowKeys([
                e
            ]);
        },
        autoExpandParent,
        renderMenu: function(a) {
            const r = [
                module553.default.createElement(module186.Menu.MenuItem, {
                    key: "edit"
                }, t("EDIT_INFORMATION"))
            ];
            if (!a.spec.children?.length) {
                r.unshift(module553.default.createElement(module186.Menu.MenuItem, {
                    key: "move"
                }, t("MOVE_NODE_GROUP_TREE")));
                r.push(module553.default.createElement(module186.Menu.MenuItem, {
                    key: "delete"
                }, t("DELETE")));
            }
            return module553.default.createElement(module186.Dropdown, {
                content: module553.default.createElement(module186.Menu, {
                    onClick: function(t, n) {
                        switch(n){
                            case "delete":
                                (function(e) {
                                    J.apply(this, arguments);
                                })(a);
                                break;
                            case "move":
                                ((t)=>{
                                    e.trigger("node.group.tree.move", {
                                        ...e.match.params,
                                        onOk: async (value)=>store_1.moveTreeNode({
                                                cluster: l_cluster,
                                                nodetree: t.key,
                                                params: [
                                                    {
                                                        op: "replace",
                                                        path: "/spec/parent",
                                                        value
                                                    }
                                                ]
                                            }),
                                        required: false,
                                        visible: true,
                                        success: W
                                    });
                                })(a);
                                break;
                            case "edit":
                                (function(e) {
                                    q.apply(this, arguments);
                                })(a);
                        }
                    }
                }, r.map((e)=>e))
            }, module553.default.createElement(module186.Icon, {
                name: "more",
                size: "20"
            }));
        },
        filterName: L.searchValue
    })))), module553.default.createElement(module186.Column, {
        className: module1311["node-tree-right"]
    }, !module63(V) && module553.default.createElement(module1572, {
        handleBindIp: function() {
            e.trigger("edge.nodegroup.ippool.add", {
                module: "ippools",
                ...l,
                group: V.metadata?.name,
                store,
                success: function(e) {
                    W();
                    if (V.metadata?.annotations) {
                        V.metadata.annotations[`infra.kubesphere.io/ippool-${e.namespace}`] = e.ippool;
                    }
                }
            });
        },
        cluster: l_cluster,
        detail: V,
        renderBtn: module553.default.createElement(module186.Button, null, module553.default.createElement(Link, {
            to: `/node-groups/clusters/${l_cluster}/${V?.metadata?.name}/nodes?path=${o.pathname}`,
            className: "ellipsis block"
        }, t("管理节点组")))
    }), module553.default.createElement(EdgewizeNodeTable, {
        ref,
        ...e,
        node: V,
        cluster: l_cluster,
        itemActions: [
            {
                key: "delete",
                icon: "trash",
                text: t("UNBOUND_NODE_GROUP"),
                action: "delete",
                onClick: (n = module44(module41.mark(function t(a) {
                    let params;
                    return module41.wrap(function(t) {
                        while(true){
                            switch(t.prev = t.next){
                                case 0:
                                    t.next = 2;
                                    return store_1.checkNodeGroupEdgeNode({
                                        cluster: l_cluster,
                                        nodegroup: V.key,
                                        name: a.metadata.name
                                    });
                                case 2:
                                    if ((params = t.sent).metadata.annotations["apps.edgewize.io/drain-nodegroup"] === V.metadata?.name) {
                                        t.next = 6;
                                        break;
                                    }
                                    module240.error("无法移出该节点，节点上存在 非系统项目空间的 pod");
                                    return t.abrupt("return");
                                case 6:
                                    e.trigger("edgeNode.unbound.nodeGroup", {
                                        resource: a.metadata.name,
                                        params: {
                                            cluster: l_cluster,
                                            nodegroup: V.key,
                                            name: a.metadata.name,
                                            params
                                        },
                                        store: store_1,
                                        success: function() {
                                            ref.current?.getData?.();
                                        }
                                    });
                                case 7:
                                case "end":
                                    return t.stop();
                            }
                        }
                    }, t);
                })), function(e) {
                    return n.apply(this, arguments);
                })
            }
        ]
    })));
}
export default NodeTree;
