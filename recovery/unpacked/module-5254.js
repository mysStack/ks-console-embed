import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-86.js";
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
import module3 from "./module-3.js";
import { observer } from "./module-239.js";
import { Link } from "./module-433.js";
import module26 from "./module-26.js";
import module451 from "./module-451.js";
import module63 from "./module-63.js";
import module186 from "./module-186.js";
import Module790 from "./module-790.js";
import Module791 from "./module-791.js";
import Module874 from "./module-874.js";
import * as module1152 from "./module-1152.js";
import { getLocalTime } from "./module-52.js";
import { getAlertingResource } from "./module-879.js";
import { MODULE_KIND_MAP, PAGESIZE_OPTION } from "./module-72.js";
import module1998 from "./module-1998.js";
import module5255 from "./module-5255.js";
let o;
const w = observer(o = ((Component_1)=>{
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
        r.fetchData = function(e) {
            const params = r.props.match.params;
            const { cluster, namespace, name } = params;
            const r_state = r.state;
            const { limit, page, sortBy, ascending } = r_state;
            const d = {
                ...e,
                cluster,
                namespace,
                ruleName: name,
                type: r.type,
                limit,
                page,
                sortBy,
                ascending,
                label_filters: `rule_group=${name}`
            };
            r.store.fetchList(d);
        };
        r.getResourceType = function(e) {
            const a = module451(e);
            return t("ALERT_TYPE", {
                type: t(a)
            });
        };
        r.getColumns = function() {
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
                    render: function(e) {
                        const a = module1152.severityOptions.find((t)=>t.value === e);
                        if (a) {
                            return <span style={{
                                backgroundColor: a.bgColor,
                                color: a.color,
                                fontWeight: 600,
                                padding: "0px 4px"
                            }}>{t(a.label)}</span>;
                        }
                        return "-";
                    }
                },
                {
                    title: t("MONITORING_TARGET"),
                    dataIndex: "labels",
                    isHideable: true,
                    width: "20%",
                    render: function(e) {
                        const a = getAlertingResource(e);
                        const { module, name, namespace } = a;
                        if (module) {
                            if (module === "hpas") {
                                return <span>{t(MODULE_KIND_MAP[module])}: {name}</span>;
                            }
                            return <Link to={`${r.getPrefix({
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
        r.handlePage = function(page) {
            r.setState({
                page
            }, function() {
                r.fetchData();
            });
        };
        r.handlePageSizeClick = function(e, limit) {
            r.setState({
                limit
            }, function() {
                r.fetchData();
            });
        };
        r.renderFooter = function() {
            const r_pagination = r.pagination;
            const { total, limit } = r_pagination;
            return <module186.Level className={module5255.footer}><module186.LevelLeft><div className={module5255.pageSizeBox}><module186.Dropdown placement="top" trigger="hover" content=<module186.Menu className={module5255.pageSizeMenu} onClick={r.handlePageSizeClick}>{PAGESIZE_OPTION.map((e)=><module186.Menu.MenuItem className={module3(module5255.pageSizeMenuitem)} key={e}><span>{e}</span></module186.Menu.MenuItem>)}</module186.Menu>><div className={module5255.pagesize}><span className={module5255.text}>{t("SHOW_NUM", {
                num: limit
            })}</span><module186.Icon name="caret-down" size={16}/></div></module186.Dropdown><div className={module5255.gap}/><span>{t("TOTAL_ITEMS", {
                num: total
            })}</span></div></module186.LevelLeft><module186.LevelRight><module186.Pagination {...r_pagination} onChange={r.handlePage}/></module186.LevelRight></module186.Level>;
        };
        r.store = new module1998;
        r.state = {
            page: 1,
            limit: 10,
            sortBy: "activeAt",
            ascending: false
        };
        return r;
    }
    module37(n, [
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
                return <Module790 title={t("ALERTING_MESSAGE_PL")} loading={isLoading}>{module63(data) ? <div>{t("NO_DATA_DESC")}</div> : <><Module874 className={module5255.table} filters={filters} data={data} name="Alerting Message" rowKey="value" columns={this.getColumns()} selectedRowKeys={[]} selectActions={[]} hideHeader hideFooter/>{this.renderFooter()}</>}</Module790>;
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
    return n;
})(Component)) || o;
export default w;
