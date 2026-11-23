import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import { Link } from "unpacked/module-433.js";
import module186 from "unpacked/module-186.js";
import Module838 from "components/Base/Indicator";
import Module793 from "unpacked/module-793.js";
import { ListPage, withClusterList } from "components/HOCs/withList";
import Module805 from "unpacked/module-805.js";
import Module811 from "pages/clusters/components/ResourceTable";
import { getLocalTime } from "utils/index";
import { ICON_TYPES, PODS_STATUS, POD_PHASE_DETAILS, getPodPhaseDetail } from "utils/constants";
import module452 from "stores/pod";
import module937 from "unpacked/module-937.js";
import module3740 from "unpacked/module-3740.js";
let o;
const C = withClusterList({
    store: new module452,
    module: "pods",
    name: "POD",
    rowKey: "uid"
})(o = module937([
    "event"
])(o = ((Component_1)=>{
    module55(n, Component_1);
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
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(n);
    function n(...o_1) {
        let e;
        module36(this, n);
        e = r.call(this, ...o_1);
        e.getItemDesc = function(r) {
            const r_podStatus = r.podStatus;
            const { status, type } = r_podStatus;
            if (type !== "running" && type !== "completed") {
                return <Module805 status={type} reason={t(status)} data={r} type="pod" onShowEvents={function() {
                    return e.showEvents(r);
                }}/>;
            }
            return t(type.toUpperCase());
        };
        e.getColumns = function() {
            const getSortOrder = e.props.getSortOrder;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    render: e.renderAvatar
                },
                {
                    title: t("PODS.PHASE"),
                    dataIndex: "phase",
                    filters: e.getPodPhaseOptions(),
                    isHideable: true,
                    search: true,
                    with: "5%",
                    render: function(e, { status }) {
                        const phase = status?.phase;
                        const text = getPodPhaseDetail({
                            phase
                        }).text;
                        return <span>{t(text)}</span>;
                    }
                },
                {
                    title: t("NODE_SI"),
                    dataIndex: "node",
                    isHideable: true,
                    width: "18%",
                    render: e.renderNode
                },
                {
                    title: t("POD_IP_ADDRESS"),
                    dataIndex: "podIP",
                    search: true,
                    isHideable: true,
                    width: "15%",
                    render: function(e, { podIp }) {
                        return <span>{podIp}</span>;
                    }
                },
                {
                    title: t("UPDATE_TIME_TCAP"),
                    dataIndex: "startTime",
                    sorter: true,
                    sortOrder: getSortOrder("startTime"),
                    isHideable: true,
                    width: 150,
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.showEvents = function(r) {
            e.props.trigger("pod.events", {
                detail: r,
                title: <span><module186.Icon name="event"/>{t("VIEW_EVENTS")}</span>,
                cluster: e.props.match.params.cluster
            });
        };
        e.renderAvatar = function(t, r) {
            const module = e.props.module;
            const cluster = e.props.match.params.cluster;
            const r_podStatus = r.podStatus;
            return <div className={module3740.avatar}><div className={module3740.icon}><module186.Icon name={ICON_TYPES[module]} size={40}/><Module838 className={module3740.indicator} type={r_podStatus.type} flicker/></div><div><Link className={module3740.title} to={`/clusters/${cluster}/projects/${r.namespace}/${module}/${t}`}>{t}</Link><div className={module3740.desc}>{e.getItemDesc(r)}</div></div></div>;
        };
        e.renderNode = function(r, n) {
            const cluster = e.props.match.params.cluster;
            const { node, nodeIp } = n;
            if (!node) {
                return "-";
            }
            const i = t("NODE_IP", {
                node,
                ip: nodeIp
            });
            return <Link to={`/clusters/${cluster}/nodes/${node}`}>{i}</Link>;
        };
        e.renderStatus = function(e) {
            return <Status type={e.type} name={t(e.type)} flicker/>;
        };
        return e;
    }
    module37(n, [
        {
            key: "componentDidMount",
            value: function() {
                localStorage.setItem("pod-detail-referrer", location.pathname);
            }
        },
        {
            key: "getPodPhaseOptions",
            value: function() {
                return POD_PHASE_DETAILS.map(({ value, text })=>({
                        value,
                        text: t(text)
                    }));
            }
        },
        {
            key: "getPodsStatus",
            value: function() {
                return PODS_STATUS.map((e)=>({
                        text: t(e.text),
                        value: e.value
                    }));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { match, bannerProps, tableProps } = props;
                return <ListPage {...this.props}><Module793 {...bannerProps}/><Module811 {...tableProps} itemActions={this.itemActions} columns={this.getColumns()} hideColumn={[
                    "status"
                ]} onCreate={null} cluster={match.params.cluster}/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const props = this.props;
                const { getData, name, trigger } = props;
                return [
                    {
                        key: "viewYaml",
                        icon: "eye",
                        text: t("VIEW_YAML"),
                        action: "view",
                        onClick: function(e) {
                            return trigger("resource.yaml.edit", {
                                detail: e,
                                readOnly: true
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function(e) {
                            return trigger("resource.delete", {
                                type: name,
                                detail: e,
                                success: getData
                            });
                        }
                    }
                ];
            }
        }
    ]);
    return n;
})(Component)) || o) || o;
export default C;
