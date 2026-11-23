import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module794, { ListPage } from "./module-794.js";
import Module789 from "./module-789.js";
import Module793 from "./module-793.js";
import Module797 from "./module-797.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import module911 from "./module-911.js";
let l;
const E = module794({
    store: new module911,
    module: "volumesnapshotclasses",
    authKey: "volumes",
    name: "VOLUME_SNAPSHOT_CLASS",
    rowKey: "uid"
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
            const e_props = e.props;
            const { getSortOrder, prefix } = e_props;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    search: true,
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    render: function(e, t) {
                        return <Module789 to={`${prefix}/${e}`} title={getDisplayName(t)} desc={t.description}/>;
                    }
                },
                {
                    title: t("VOLUME_SNAPSHOT_PL"),
                    dataIndex: "count",
                    isHideable: true,
                    width: "17.6%"
                },
                {
                    title: t("PROVISIONER"),
                    dataIndex: "driver",
                    isHideable: true,
                    width: "17.6%"
                },
                {
                    title: t("DELETION_POLICY"),
                    dataIndex: "deletionPolicy",
                    isHideable: true,
                    width: "17.6%"
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    sorter: true,
                    isHideable: true,
                    width: "12.3%",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm");
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
                const { tableProps, bannerProps } = props;
                return <ListPage {...this.props} noWatch><Module793 {...bannerProps}/><Module797 {...tableProps} columns={this.getColumns()} itemActions={this.itemActions}/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                return [];
            }
        }
    ]);
    return r;
})(Component)) || l;
export default E;
