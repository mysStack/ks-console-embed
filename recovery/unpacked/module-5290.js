import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
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
import "./module-22.js";
import "./module-57.js";
import "./module-315.js";
import "./module-41.js";
import "./module-31.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import Module789 from "./module-789.js";
import Module793 from "./module-793.js";
import Module797 from "./module-797.js";
import module794, { ListPage } from "./module-794.js";
import { getLocalTime } from "./module-52.js";
import { ICON_TYPES } from "./module-72.js";
import module1463 from "./module-1463.js";
let l;
const P = module794({
    store: new module1463,
    name: "NODE_GROUP_ROLE"
})(l = ((Component_1)=>{
    module55(n, Component_1);
    var r = ((e)=>{
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
            let r;
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...o_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...o_1);
        e.getData = async (r)=>{
            let n;
            n = e.props.store;
            await n.fetchChildResource({
                ...r,
                kind: "roles",
                cluster: e.cluster,
                group: e.group
            });
        };
        e.getColumns = function() {
            const e_props = e.props;
            const r_getSortOrder = e_props.getSortOrder;
            const params = e_props.match.params;
            const { cluster, group } = params;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    width: "25%",
                    render: function(title) {
                        return <Module789 icon={ICON_TYPES[e.module]} to={`/node-groups/clusters/${cluster}/${group}/roles/${title}`} title={title}/>;
                    }
                },
                {
                    title: t("DESCRIPTION"),
                    key: "description",
                    dataIndex: "description",
                    isHideable: true,
                    width: "55%"
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    sorter: true,
                    sortOrder: r_getSortOrder("createTime"),
                    isHideable: true,
                    width: "19%",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        return e;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} getData={this.getData} noWatch><Module793 {...bannerProps} icon="role"/><Module797 {...tableProps} emptyProps={this.emptyProps} tableActions={this.tableActions} itemActions={this.itemActions} columns={this.getColumns()} searchType="name"/></ListPage>;
            }
        },
        {
            key: "cluster",
            get: function() {
                return this.props.match.params.cluster;
            }
        },
        {
            key: "group",
            get: function() {
                return this.props.match.params.group;
            }
        },
        {
            key: "itemActions",
            get: function() {
                return [];
            }
        },
        {
            key: "tableActions",
            get: function() {
                return {
                    ...this.props.tableProps.tableActions,
                    onCreate: undefined,
                    selectActions: []
                };
            }
        },
        {
            key: "emptyProps",
            get: function() {
                return {
                    desc: t("CLUSTER_ROLE_DESC")
                };
            }
        }
    ]);
    return n;
})(Component)) || l;
export default P;
