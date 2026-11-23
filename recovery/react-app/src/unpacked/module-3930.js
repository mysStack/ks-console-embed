import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-86.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module451 from "unpacked/module-451.js";
import module63 from "unpacked/module-63.js";
import { Link } from "unpacked/module-433.js";
import module186 from "unpacked/module-186.js";
import { getLocalTime } from "utils/index";
import { MODULE_KIND_MAP, PAGESIZE_OPTION } from "utils/constants";
import { getAlertingResource } from "utils/alerting";
import module1127 from "stores/alerting/message";
import Module790 from "components/Base/Panel";
import Module791 from "components/Base/Text";
import Module881 from "unpacked/module-881.js";
import Module874 from "components/Tables/Base";
import module3 from "unpacked/module-3.js";
import module3931 from "unpacked/module-3931.js";
let l;
const M = observer(l = ((Component_1)=>{
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
            const params = n.props.match.params;
            const { cluster, namespace, name } = params;
            const n_state = n.state;
            const { limit, page, sortBy, ascending } = n_state;
            const f = {
                ...e,
                cluster,
                namespace,
                ruleName: name,
                type: n.type,
                limit,
                page,
                sortBy,
                ascending,
                label_filters: `rule_group=${name}`
            };
            n.store.fetchList(f);
        };
        n.getResourceType = function(e) {
            const a = module451(e);
            return t("ALERT_TYPE", {
                type: t(a)
            });
        };
        n.getColumns = function() {
            return [
                {
                    title: t("MESSAGE"),
                    dataIndex: "value",
                    render: function(e, t) {
                        return <Module791 icon="loudspeaker" title={module26(t, "annotations.summary")} description={module26(t, "annotations.message") || module26(t, "annotations.description", "-")}/>;
                    }
                },
                {
                    title: t("SEVERITY"),
                    dataIndex: "labels.severity",
                    width: "15%",
                    render: function(data) {
                        return <Module881 data={data}/>;
                    }
                },
                {
                    title: t("MONITORING_TARGET"),
                    dataIndex: "labels",
                    isHideable: true,
                    width: "20%",
                    render: function(e) {
                        if (e.rule_type !== "template") {
                            return "-";
                        }
                        const a = getAlertingResource(e);
                        const { module, name, namespace } = a;
                        if (module) {
                            if (module === "hpas") {
                                return <span>{t(MODULE_KIND_MAP[module])}: {name}</span>;
                            }
                            return <Link to={`${n.getPrefix({
                                namespace
                            })}/${module}/${name}`}>{t(MODULE_KIND_MAP[module])}: {name}</Link>;
                        }
                        return "-";
                    }
                },
                {
                    title: t("TRIGGER_TIME"),
                    dataIndex: "activeAt",
                    isHideable: true,
                    width: 200,
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        n.handlePage = function(page) {
            n.setState({
                page
            }, function() {
                n.fetchData();
            });
        };
        n.handlePageSizeClick = function(e, limit) {
            n.setState({
                limit
            }, function() {
                n.fetchData();
            });
        };
        n.renderFooter = function() {
            const n_pagination = n.pagination;
            const { total, limit } = n_pagination;
            return <module186.Level className={module3931.footer}><module186.LevelLeft><div className={module3931.pageSizeBox}><module186.Dropdown placement="top" trigger="hover" content=<module186.Menu className={module3931.pageSizeMenu} onClick={n.handlePageSizeClick}>{PAGESIZE_OPTION.map((e)=><module186.Menu.MenuItem className={module3(module3931.pageSizeMenuitem)} key={e}><span>{e}</span></module186.Menu.MenuItem>)}</module186.Menu>><div className={module3931.pagesize}><span className={module3931.text}>{t("SHOW_NUM", {
                num: limit
            })}</span><module186.Icon name="caret-down" size={16}/></div></module186.Dropdown><div className={module3931.gap}/><span>{t("TOTAL_ITEMS", {
                num: total
            })}</span></div></module186.LevelLeft><module186.LevelRight><module186.Pagination {...n_pagination} onChange={n.handlePage}/></module186.LevelRight></module186.Level>;
        };
        n.store = new module1127;
        n.state = {
            page: 1,
            limit: 10,
            sortBy: "activeAt",
            ascending: false
        };
        return n;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
            }
        },
        {
            key: "getPrefix",
            value: function({ cluster, namespace } = {}) {
                const params = this.props.match.params;
                const { cluster: cluster_1, namespace: namespace_1, workspace } = params;
                cluster = cluster || cluster_1;
                namespace = namespace || namespace_1;
                return `${workspace ? `/${workspace}` : ""}/clusters/${cluster}${namespace ? `/projects/${namespace}` : ""}`;
            }
        },
        {
            key: "render",
            value: function() {
                const list = this.store.list;
                const { data, isLoading, filters } = list;
                return <Module790 title={t("ALERTING_MESSAGE_PL")} loading={isLoading}>{module63(data) ? <div>{t("NO_DATA_DESC")}</div> : <><Module874 className={module3931.table} filters={filters} data={data} name="Alerting Message" rowKey="value" columns={this.getColumns()} selectedRowKeys={[]} selectActions={[]} hideHeader hideFooter/>{this.renderFooter()}</>}</Module790>;
            }
        },
        {
            key: "type",
            get: function() {
                if (this.props.match.url.indexOf("alert-rules/builtin") > 0) {
                    return "builtin";
                }
                return "";
            }
        },
        {
            key: "pagination",
            get: function() {
                const state = this.state;
                return {
                    page: state.page,
                    limit: state.limit,
                    total: this.store.list.total
                };
            }
        }
    ]);
    return r;
})(Component)) || l;
export default M;
