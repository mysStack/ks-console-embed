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
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import module186 from "./module-186.js";
import Module802 from "./module-802.js";
import Module838 from "./module-838.js";
import { getLocalTime } from "./module-52.js";
import module4350 from "./module-4350.js";
let o;
const S = inject("rootStore", "detailStore")(o = observer(o = ((Component_1)=>{
    module55(n, Component_1);
    var r = ((t)=>{
        const e = (()=>{
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
            } catch (t) {
                return false;
            }
        })();
        return function() {
            let r;
            const n = module51(t);
            if (e) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...o) {
        let e;
        module36(this, n);
        e = r.call(this, ...o);
        e.fetchData = function(t = {}) {
            const name = e.store.detail.name;
            e.store.fetchLoginRecords({
                name,
                ...t
            });
        };
        e.handlePagination = function(page) {
            e.fetchData({
                page
            });
        };
        e.getColumns = function() {
            return [
                {
                    title: t("TIME"),
                    dataIndex: "createTime",
                    render: function(t) {
                        return getLocalTime(t).format("YYYY-MM-DD HH:mm:ss");
                    }
                },
                {
                    title: t("STATUS"),
                    dataIndex: "spec.success",
                    render: function(e) {
                        return <div className={module4350.status}><Module838 type={e ? "success" : "failed"}/> <span>{e ? t("SUCCESSFUL") : t("FAILED")}</span></div>;
                    }
                },
                {
                    title: t("SOURCE_IP_ADDRESS"),
                    dataIndex: "spec.sourceIP"
                },
                {
                    title: t("REASON"),
                    dataIndex: "spec.reason"
                }
            ];
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "renderContent",
            value: function() {
                const data = module14.toJS(this.store.records).data;
                return <module186.Table className={module4350.table} dataSource={data} rowKey="login_time" columns={this.getColumns()}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const records = this.store.records;
                const { page, total, limit } = records;
                return <Module802 title={t("LOGIN_HISTORY")} empty={t("NO_LOGIN_HISTORY")}>{this.renderContent()}{total > limit && <div className="margin-t12 text-right"><module186.Pagination page={page} total={total} limit={limit} onChange={this.handlePagination}/></div>}</Module802>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        }
    ]);
    return n;
})(Component)) || o) || o;
export default S;
