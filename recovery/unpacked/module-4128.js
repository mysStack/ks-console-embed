import "./module-12.js";
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
import "./module-31.js";
import "./module-315.js";
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
import module1069 from "./module-1069.js";
let l;
const O = module794({
    store: new module1069,
    module: "customresourcedefinitions",
    name: "CRD"
})(l = ((Component_1)=>{
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
    function r(...u) {
        let e;
        module36(this, r);
        e = a.call(this, ...u);
        e.getColumns = function() {
            const cluster = e.props.match.params.cluster;
            const getSortOrder = e.props.getSortOrder;
            return [
                {
                    title: t("KIND_TCAP"),
                    dataIndex: "kind",
                    render: function(title, t) {
                        return <Module789 to={`/clusters/${cluster}/customresources/${t.name}`} title={title} desc={`${t.group}/${t.latestVersion}`}/>;
                    }
                },
                {
                    title: t("NAME"),
                    key: "name",
                    dataIndex: "name"
                },
                {
                    title: t("SCOPE_TCAP"),
                    key: "scope",
                    dataIndex: "scope"
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    sorter: true,
                    sortOrder: getSortOrder("createTime"),
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
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props} noWatch><Module793 {...bannerProps} tabs={this.tabs}/><Module797 {...tableProps} itemActions={this.itemActions} tableActions={this.tableActions} columns={this.getColumns()} onCreate={null} searchType="name"/></ListPage>;
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
                    actions: [],
                    selectActions: []
                };
            }
        }
    ]);
    return r;
})(Component)) || l;
export default O;
