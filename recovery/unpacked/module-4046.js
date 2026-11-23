import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-11.js";
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
import "./module-188.js";
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
import "./module-58.js";
import "./module-44.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import Module789 from "./module-789.js";
import Module796 from "./module-796.js";
import Module793 from "./module-793.js";
import module794, { ListPage } from "./module-794.js";
import Module797 from "./module-797.js";
import module26 from "./module-26.js";
import { getDisplayName, getLocalTime } from "./module-52.js";
import { ALERTING_STATUS } from "./module-879.js";
import { SEVERITY_LEVEL } from "./module-832.js";
import module1015 from "./module-1015.js";
import Module4047 from "./module-4047.js";
import module4049 from "./module-4049.js";
let s;
const w = module794({
    store: new module1015,
    module: "rules",
    authKey: "rulegroups",
    name: "ALERTING_POLICY"
})(s = ((Component_1)=>{
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
    function r(...u_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...u_1);
        e.state = {
            type: location.search.indexOf("type=builtin") > 0 ? "builtin" : "custom"
        };
        e.handleTabChange = function(type) {
            e.setState({
                type
            }, function() {
                e.props.store.list.reset();
                e.getData();
            });
        };
        e.getData = async function t() {
            let a;
            let r;
            let n;
            let u;
            const l = arguments;
            a = l.length > 0 && l[0] !== undefined ? l[0] : {};
            ({ silent: r, ...n } = a);
            u = e.props.store;
            if (r) {
                u.list.silent = true;
            }
            await u.fetchList({
                ...e.props.match.params,
                ...n,
                type: e.state.type
            });
            u.list.silent = false;
        };
        e.getColumns = function() {
            const getFilteredValue = e.props.getFilteredValue;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    search: true,
                    render: function(t, a) {
                        return <Module789 avatar="/assets/bell_gear_duotone.svg" title={getDisplayName(a)} desc={a.description} className={module4049["table-icon"]} to={e.state.type === "builtin" ? `${e.props.match.url}/builtin/${a.name}` : `${e.props.match.url}/${t}`}/>;
                    }
                },
                {
                    title: t("POLICY_STATUS"),
                    dataIndex: "enable",
                    filters: e.getEnableFilter(),
                    filteredValue: getFilteredValue("enable"),
                    isHideable: true,
                    search: true,
                    width: "16%",
                    render: function(e, a) {
                        return <Module796 className={module4049.status_icon} type={a.enabled && JSON.parse(a.enabled) ? "active" : "disabled"} name={a.enabled && JSON.parse(a.enabled) ? t("ENABLED") : t("DISABLED")}/>;
                    }
                },
                {
                    title: t("RULE_STATUS"),
                    dataIndex: "state",
                    search: true,
                    filters: e.getStatus(),
                    isHideable: true,
                    width: "16%",
                    render: function(e, t) {
                        return <Module4047 rulesStats={t.rulesStats}/>;
                    }
                },
                {
                    title: t("TIME_SPENT"),
                    dataIndex: "evaluationTime",
                    isHideable: true,
                    width: "12%",
                    render: function(num) {
                        return <span>{num !== "-" ? t("TIME_S", {
                            num
                        }) : num}</span>;
                    }
                },
                {
                    title: t("RECENT_DETECT_TIME"),
                    dataIndex: "lastEvaluation",
                    isHideable: true,
                    width: "15.8%",
                    render: function(e, t) {
                        const a = module26(t._originDataWithStatus, "status.lastEvaluation");
                        return <span>{a ? getLocalTime(a).format("YYYY-MM-DD HH:mm:ss") : "-"}</span>;
                    }
                }
            ];
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const params = this.props.match.params;
                const e_cluster = params.cluster;
                if (!params.namespace) {
                    this.props.store.fetchCount({
                        cluster: e_cluster
                    });
                }
                localStorage.removeItem("alert-policy-detail-referrer");
            }
        },
        {
            key: "getStatus",
            value: function() {
                return ALERTING_STATUS.map((e)=>({
                        text: t(`ALERT_RULE_${e.toUpperCase()}`),
                        value: e
                    }));
            }
        },
        {
            key: "getEnableFilter",
            value: function() {
                return [
                    {
                        text: t("ENABLED"),
                        value: "true"
                    },
                    {
                        text: t("DISABLED"),
                        value: "false"
                    }
                ];
            }
        },
        {
            key: "getAlertingTypes",
            value: function() {
                return SEVERITY_LEVEL.map((e)=>({
                        text: t(e.label),
                        value: e.value
                    }));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { bannerProps, tableProps } = props;
                const namespace = props.match.params.namespace;
                return <ListPage {...this.props} getData={this.getData} noWatch><Module793 {...bannerProps} icon={function() {
                    return <img src="/assets/bell_gear_duotone.svg"/>;
                }} tips={this.tips} tabs={namespace ? {} : this.tabs}/><Module797 {...tableProps} rowKey="name" itemActions={this.itemActions} columns={this.getColumns()} tableActions={this.tableActions}/></ListPage>;
            }
        },
        {
            key: "tabs",
            get: function() {
                return {
                    value: this.state.type,
                    onChange: this.handleTabChange,
                    options: [
                        {
                            value: "custom",
                            label: t("CUSTOM_POLICIES"),
                            count: this.props.store.ruleCount
                        },
                        {
                            value: "builtin",
                            label: t("BUILT_IN_POLICIES"),
                            count: this.props.store.builtinRuleCount
                        }
                    ]
                };
            }
        },
        {
            key: "tips",
            get: function() {
                return [
                    {
                        title: t("REQUESTS_FOR_PUSH_AN_ALARM_Q"),
                        description: t("REQUESTS_FOR_PUSH_AN_ALARM_A")
                    }
                ];
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
                    selectActions: []
                };
            }
        }
    ]);
    return r;
})(Component)) || s;
export default w;
