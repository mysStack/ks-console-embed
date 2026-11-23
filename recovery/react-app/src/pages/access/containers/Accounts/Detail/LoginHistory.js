import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module186 from "unpacked/module-186.js";
import Module802 from "components/Base/Card";
import Module838 from "components/Base/Indicator";
import { getLocalTime } from "utils/index";
import module4350 from "unpacked/module-4350.js";
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
