import "./module-12.js";
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
import "./module-193.js";
import "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module14 from "./module-14.js";
import { inject, observer } from "./module-239.js";
import { getLocalTime } from "./module-52.js";
import module186 from "./module-186.js";
import Module802 from "./module-802.js";
import Module796 from "./module-796.js";
import module3870 from "./module-3870.js";
let l;
const O = inject("rootStore", "detailStore", "recordStore")(l = observer(l = ((Component_1)=>{
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.fetchData = function(e) {
            if (n.recordStore) {
                n.recordStore.fetchExcuteRecords({
                    ...e,
                    ...n.props.match.params
                });
            }
        };
        n.getColumns = function() {
            return [
                {
                    title: t("SN_NO"),
                    dataIndex: "id",
                    width: "7%"
                },
                {
                    title: t("STATUS"),
                    dataIndex: "status",
                    width: "19%",
                    render: function(e, a) {
                        return <Module796 type={e} name={t(`JOB_${e.toUpperCase()}`)} ready={a.succeed} total={a.desire}/>;
                    }
                },
                {
                    title: t("MESSAGE"),
                    dataIndex: "messages[0]",
                    render: function(e) {
                        return e || "-";
                    }
                },
                {
                    title: t("START_TIME"),
                    dataIndex: "start-time",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                },
                {
                    title: t("END_TIME"),
                    dataIndex: "completion-time",
                    render: function(e) {
                        if (!e || /^0001-01-01/.test(e)) {
                            return "-";
                        }
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        n.handleSearch = function(e) {
            n.fetchData(e);
        };
        n.handlePagination = function(page) {
            n.fetchData({
                page
            });
        };
        n.handleRefresh = function() {
            n.fetchData();
        };
        n.renderTableTitle = function() {
            return <div className={module3870.nav}><module186.Columns><module186.Column><module186.InputSearch name="search" placeholder={t("SEARCH")} onSearch={n.handleSearch}/></module186.Column></module186.Columns></div>;
        };
        n.renderTableFooter = function() {
            const n_excute = n.excute;
            const { total, page, limit } = n_excute;
            return <module186.Level><module186.LevelLeft>{t("TOTAL_ITEMS", {
                num: total
            })}</module186.LevelLeft><module186.LevelRight><module186.Pagination page={page} total={total} limit={limit} onChange={n.handlePagination}/></module186.LevelRight></module186.Level>;
        };
        n.fetchData();
        n.disposer = module14.reaction(function() {
            return n.store.detail;
        }, function() {
            return n.fetchData();
        });
        return n;
    }
    module37(r, [
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "recordStore",
            get: function() {
                return this.props.recordStore;
            }
        },
        {
            key: "excute",
            get: function() {
                return module14.toJS(this.recordStore.excute);
            }
        }
    ]);
    module37(r, [
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.disposer) {
                    this.disposer();
                }
            }
        },
        {
            key: "renderTable",
            value: function() {
                const excute = this.excute;
                const { data, isLoading } = excute;
                return <module186.Table rowKey="uid" className={module3870.table} dataSource={data} columns={this.getColumns()} loading={isLoading}/>;
            }
        },
        {
            key: "render",
            value: function() {
                return <Module802 className={module3870.main} title={t("RUN_RECORDS")} operations=<module186.Button icon="refresh" type="flat" onClick={this.handleRefresh}/>><div className={module3870.content}>{this.renderTable()}</div></Module802>;
            }
        }
    ]);
    return r;
})(Component)) || l) || l;
export default O;
