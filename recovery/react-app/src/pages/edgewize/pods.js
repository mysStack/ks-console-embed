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
import module937 from "unpacked/module-937.js";
import Module805 from "unpacked/module-805.js";
import Module811 from "pages/clusters/components/ResourceTable";
import { ListPage, withClusterList } from "components/HOCs/withList";
import { getLocalTime } from "utils/index";
import { ICON_TYPES, PODS_STATUS } from "utils/constants";
import module859 from "unpacked/module-859.js";
import module5189 from "unpacked/module-5189.js";
let o;
const T = withClusterList({
    store: new module859("pods"),
    module: "pods",
    name: "POD",
    rowKey: "uid"
})(o = module937([
    "event"
])(o = ((Component_1)=>{
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
    function n(...o_1) {
        let e;
        module36(this, n);
        e = a.call(this, ...o_1);
        e.getItemDesc = function(a) {
            const a_podStatus = a.podStatus;
            const { status, type } = a_podStatus;
            if (type !== "running" && type !== "completed") {
                return <Module805 status={type} reason={t(status)} data={a} type="pod" onShowEvents={function() {
                    return e.showEvents(a);
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
                    title: t("STATUS"),
                    dataIndex: "status",
                    filters: e.getPodsStatus(),
                    isHideable: true,
                    search: true,
                    with: "5%",
                    render: function(e, { podStatus }) {
                        return <span>{t(podStatus.type.toUpperCase())}</span>;
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
                    dataIndex: "podIp",
                    isHideable: true,
                    width: "15%"
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
        e.showEvents = function(a) {
            e.props.trigger("pod.events", {
                detail: a,
                title: <span><module186.Icon name="event"/>{t("VIEW_EVENTS")}</span>,
                isEdgeWize: true,
                cluster: e.props.match.params.cluster
            });
        };
        e.renderAvatar = function(t, a) {
            const module = e.props.module;
            const cluster = e.props.match.params.cluster;
            const a_podStatus = a.podStatus;
            return <div className={module5189.avatar}><div className={module5189.icon}><module186.Icon name={ICON_TYPES[module]} size={40}/><Module838 className={module5189.indicator} type={a_podStatus.type} flicker/></div><div><Link className={module5189.title} to={`/v2/edgewize/clusters/${cluster}/projects/${a.namespace}/${module}/${t}`}>{t}</Link><div className={module5189.desc}>{e.getItemDesc(a)}</div></div></div>;
        };
        e.renderNode = function(a, n) {
            const cluster = e.props.match.params.cluster;
            const { node, nodeIp } = n;
            if (!node) {
                return "-";
            }
            const u = t("NODE_IP", {
                node,
                ip: nodeIp
            });
            return <Link to={`/v2/edgewize/clusters/${cluster}/nodes/${node}`}>{u}</Link>;
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
export default T;
