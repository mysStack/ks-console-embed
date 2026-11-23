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
import "./module-57.js";
import "./module-315.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import Module797 from "./module-797.js";
import module794, { ListPage } from "./module-794.js";
import Module1418 from "./module-1418.js";
import module1868 from "./module-1868.js";
import { getLocalTime } from "./module-52.js";
import module4407 from "./module-4407.js";
let u;
const k = module794({
    store: new module1868,
    module: "apps",
    name: "RELEASE_RECORD",
    rowKey: "status_time"
})(u = ((Component_1)=>{
    module55(a, Component_1);
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(...o) {
        let e;
        module36(this, a);
        e = r.call(this, ...o);
        e.getData = function(t) {
            const appId = e.props.match.params.appId;
            e.props.store.fetchList({
                app_id: appId,
                ...t
            });
        };
        e.getColumns = function() {
            return [
                {
                    title: t("TIME"),
                    dataIndex: "status_time",
                    width: "20%",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    isHideable: true,
                    width: "15%",
                    render: function(e) {
                        return <Module1418 type={e} name={e}/>;
                    }
                },
                {
                    title: t("VERSION"),
                    dataIndex: "version_name",
                    isHideable: true,
                    width: "15%"
                },
                {
                    title: t("REJECTION_REASON"),
                    key: "reject",
                    isHideable: true,
                    width: "40%",
                    render: function(e, t) {
                        return t.message || "-";
                    }
                },
                {
                    title: t("OPERATOR"),
                    dataIndex: "operator",
                    isHideable: true,
                    width: "10%"
                }
            ];
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const tableProps = this.props.tableProps;
                return <ListPage {...this.props} getData={this.getData} noWatch><div className={module4407.title}>{t("APP_REVIEW")}</div><Module797 {...tableProps} tableActions={this.tableActions} itemActions={[]} columns={this.getColumns()} hideSearch/></ListPage>;
            }
        },
        {
            key: "tableActions",
            get: function() {
                return {
                    ...this.props.tableProps.tableActions,
                    onCreate: null,
                    selectActions: []
                };
            }
        }
    ]);
    return a;
})(Component)) || u;
export default k;
