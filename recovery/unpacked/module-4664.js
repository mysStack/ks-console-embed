import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-16.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
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
import Module793 from "./module-793.js";
import Module789 from "./module-789.js";
import Module838 from "./module-838.js";
import Module797 from "./module-797.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import module794, { ListPage } from "./module-794.js";
import module854 from "./module-854.js";
import Module4665 from "./module-4665.js";
import module4667 from "./module-4667.js";
let c;
const k = {
    active: "RUNNING"
};
const D = module794({
    store: new module854,
    module: "node-groups",
    name: "NODE_GROUP",
    rowKey: "uid",
    skipAuth: true
})(c = ((Component_1)=>{
    module55(r, Component_1);
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
            const r = module51(e);
            if (t) {
                const n = module51(this).constructor;
                a = Reflect.construct(r, arguments, n);
            } else {
                a = r.apply(this, arguments);
            }
            return module56(this, a);
        };
    })(r);
    function r(...o) {
        let e;
        module36(this, r);
        e = a.call(this, ...o);
        e.getData = function(t) {
            e.props.store.fetchListProjectGroups({
                ...t,
                cluster: e.cluster,
                labelSelector: `apps.edgewize.io/namespaces-${e.namespace}`
            });
        };
        e.getColumns = function() {
            const getSortOrder = e.props.getSortOrder;
            const cluster = e.props.match.params.cluster;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sortOrder: getSortOrder("name"),
                    render: function(e, t) {
                        return <Module789 to={t.status === "Terminating" ? null : `/node-groups/clusters/${cluster}/${e}`} avatar="/assets/disk_group.svg" iconSize={40} isMultiCluster={t.isFedHostNamespace} desc={t.description || "-"} title={getDisplayName(t)}/>;
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    width: "12.5%",
                    render: function(e) {
                        const a = module26(k, e);
                        if (a) {
                            return <div className={module4667.status}><Module838 type={e} flicker/><span>{t(a)}</span></div>;
                        }
                        return "-";
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
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} getData={this.getData} noWatch><Module793 {...bannerProps} icon="node-group"/><Module797 {...tableProps} columns={this.getColumns()} itemActions={[]} emptyProps={{
                    icon: "edge-node",
                    title: t("NO_NODE_GROUP_FOUNDED"),
                    desc: t("NO_NODE_GROUP_FOUNDED_DESC")
                }} expandedRowRender={function({ name }) {
                    return <Module4665 name={name} cluster={_this.cluster} namespace={_this.namespace}/>;
                }} searchType="name"/></ListPage>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "namespace",
            get: function() {
                return this.props.match.params.namespace;
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
    return r;
})(Component)) || c;
export default D;
