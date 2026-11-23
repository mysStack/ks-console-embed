import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-18.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-137.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import module449 from "./module-449.js";
import module3 from "./module-3.js";
import Module793 from "./module-793.js";
import module186 from "./module-186.js";
import Module789 from "./module-789.js";
import Module797 from "./module-797.js";
import { getLocalTime } from "./module-52.js";
import { ListPage, withClusterList } from "./module-794.js";
import module854 from "./module-854.js";
import module953 from "./module-953.js";
import { NodeTree } from "./module-5184.js";
import module1311 from "./module-1311.js";
let o;
const R = withClusterList({
    store: new module854,
    module: "node-groups",
    name: "NODE_GROUP",
    authKey: "nodegroups",
    rowKey: "uid",
    skipAuth: true
})(o = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const r = module51(this).constructor;
                a = Reflect.construct(n, arguments, r);
            } else {
                a = n.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(n);
    function n(e) {
        let r;
        module36(this, n);
        r = a.call(this, e);
        r.nodeTreeStore = new module953;
        r.handleTabChange = function(tab) {
            const cluster = r.props.match.params.cluster;
            r.setState({
                tab
            });
            r.props.routing.push(`/v2/edgewize/clusters/${cluster}/node-groups`);
        };
        r.getColumns = function() {
            const r_props = r.props;
            const { getSortOrder, location } = r_props;
            const cluster = r.props.match.params.cluster;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sortOrder: getSortOrder("name"),
                    render: function(e, t) {
                        const t_metadata = t.metadata;
                        const r = t_metadata?.annotations["kubesphere.io/alias-name"];
                        const desc = t_metadata?.annotations["kubesphere.io/description"] || "-";
                        const u = r ? `${r}（${e}）` : undefined;
                        return <Module789 to={t.status === "Terminating" ? null : `/node-groups/clusters/${cluster}/${e}/nodes?path=${location.pathname}`} avatar="/assets/disk_group.svg" iconSize={40} isMultiCluster={t.isFedHostNamespace} desc={desc} title={u || e}/>;
                    }
                },
                {
                    title: t("NODE_COUNT"),
                    dataIndex: "count",
                    isHideable: true,
                    width: "12.5%",
                    render: function(e, t) {
                        return module26(t, '_originData.metadata.labels["apps.edgewize.io/nodes-count"]');
                    }
                },
                {
                    title: t("PROJECT_COUNT"),
                    dataIndex: "project",
                    isHideable: true,
                    width: "12.5%",
                    render: function(e, t) {
                        return module26(t, '_originData.metadata.labels["apps.edgewize.io/namespaces-count"]');
                    }
                },
                {
                    title: t("NODE_GROUP"),
                    dataIndex: "group",
                    isHideable: true,
                    width: "12.5%",
                    render: function(e, t) {
                        const { "nodetree.kubesphere.io/path": nodetree_kubesphere_iopath = "", "nodetree.kubesphere.io/alias-path": nodetree_kubesphere_ioalias_path = "" } = (t?.metadata || {}).annotations || {};
                        if (nodetree_kubesphere_iopath) {
                            const u = nodetree_kubesphere_iopath.split("/");
                            const l = nodetree_kubesphere_ioalias_path.split("/");
                            u.shift();
                            l.shift();
                            const content = <div className={module1311["node-tooltip"]}>{u.map((e, t)=><div key={t} className={module3(module1311["node-tooltip-item"], t === u.length - 1 && module1311["node-tooltip-active"])} style={{
                                    marginLeft: 8 * t
                                }}>{t > 0 && <span>{">"} </span>}<span>{e}</span>{l[t] && <span>（{l[t]}）</span>}</div>)}</div>;
                            return <module186.Tooltip content={content} placement="bottom"><span><span>{`${module449(u)}`}</span>{module449(l) && <span>（{`${module449(l)}`}）</span>}</span></module186.Tooltip>;
                        }
                        return "-";
                    }
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    sorter: true,
                    sortOrder: getSortOrder("createTime"),
                    isHideable: true,
                    width: "17.8%",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        r.showCreate = function() {
            r.props.trigger("node.group.create", {
                store: r.nodeTreeStore,
                module: r.props.module,
                ...r.props.match.params,
                success: function() {
                    return r.props.getData();
                }
            });
        };
        r.state = {
            tab: "list"
        };
        return r;
    }
    module37(n, [
        {
            key: "renderContent",
            value: function() {
                if (this.state.tab === "tree") {
                    const cluster = this.props.match.params.cluster;
                    return <NodeTree cluster={cluster} {...this.props}/>;
                }
                const tableProps = this.props.tableProps;
                return <Module797 {...tableProps} columns={this.getColumns()} itemActions={this.itemActions} onCreate={this.showCreate} searchType="name"/>;
            }
        },
        {
            key: "render",
            value: function() {
                const bannerProps = this.props.bannerProps;
                return <ListPage {...this.props} noWatch><Module793 {...bannerProps} icon="node-group" tabs={this.tabs}/>{this.renderContent()}</ListPage>;
            }
        },
        {
            key: "tabs",
            get: function() {
                return {
                    value: this.state.tab,
                    onChange: this.handleTabChange,
                    options: [
                        {
                            value: "list",
                            label: t("NODE_GROUP_LIST")
                        },
                        {
                            value: "tree",
                            label: t("NODE_GROUP_TREE")
                        }
                    ]
                };
            }
        },
        {
            key: "itemActions",
            get: function() {
                const props = this.props;
                const { trigger, name, getData, match } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(e) {
                            return trigger("node.group.baseinfo.edit", {
                                detail: e,
                                ...match.params,
                                success: getData
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        show: this.showAction,
                        onClick: function(e) {
                            trigger("resource.delete", {
                                type: name,
                                detail: e,
                                success: getData
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return n;
})(Component)) || o;
export default R;
