import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-86.js";
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
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { observer } from "./module-239.js";
import module26 from "./module-26.js";
import module451 from "./module-451.js";
import module63 from "./module-63.js";
import { Link } from "./module-433.js";
import { getLocalTime } from "./module-52.js";
import { MODULE_KIND_MAP } from "./module-72.js";
import { getAlertingResource } from "./module-879.js";
import module1127 from "./module-1127.js";
import Module790 from "./module-790.js";
import Module791 from "./module-791.js";
import Module881 from "./module-881.js";
import Module874 from "./module-874.js";
import module4184 from "./module-4184.js";
let u;
const k = observer(u = ((Component_1)=>{
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
            const l = {
                ...e,
                sortBy: "activeAt",
                ascending: false,
                cluster,
                namespace,
                ruleName: name,
                type: n.type,
                label_filters: `rule_group=${name}`
            };
            n.store.fetchList(l);
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
        n.store = new module1127;
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
                return <Module790 title={t("ALERTING_MESSAGE_PL")} loading={isLoading}>{module63(data) ? <div>{t("NO_DATA_DESC")}</div> : <Module874 className={module4184.table} filters={filters} data={data} name="Alerting Message" rowKey="value" columns={this.getColumns()} selectedRowKeys={[]} selectActions={[]} hideHeader hideFooter/>}</Module790>;
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
        }
    ]);
    return r;
})(Component)) || u;
export default k;
