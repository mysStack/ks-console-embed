import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
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
import { ICON_TYPES, PODS_STATUS } from "utils/constants";
import module452 from "stores/pod";
import module4135 from "unpacked/module-4135.js";
let u;
const R = withClusterList({
    store: new module452,
    module: "pods",
    name: "POD",
    rowKey: "uid"
})(u = ((Component_1)=>{
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
        e.getItemDesc = function(e) {
            const e_podStatus = e.podStatus;
            const { status, type } = e_podStatus;
            if (type !== "running" && type !== "completed") {
                return <Module805 status={type} reason={t(status)} data={e} type="pod"/>;
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
        e.renderAvatar = function(t, a) {
            const module = e.props.module;
            const cluster = e.props.match.params.cluster;
            const a_podStatus = a.podStatus;
            return <div className={module4135.avatar}><div className={module4135.icon}><module186.Icon name={ICON_TYPES[module]} size={40}/><Module838 className={module4135.indicator} type={a_podStatus.type} flicker/></div><div><Link className={module4135.title} to={`/whizard-telemetry/${cluster}/projects/${a.namespace}/${module}/${t}`}>{t}</Link><div className={module4135.desc}>{e.getItemDesc(a)}</div></div></div>;
        };
        e.renderNode = function(a, r) {
            const cluster = e.props.match.params.cluster;
            const { node, nodeIp } = r;
            if (!node) {
                return "-";
            }
            const o = t("NODE_IP", {
                node,
                ip: nodeIp
            });
            return <Link to={`/whizard-telemetry/${cluster}/nodes/${node}`}>{o}</Link>;
        };
        e.renderStatus = function(e) {
            return <Status type={e.type} name={t(e.type)} flicker/>;
        };
        return e;
    }
    module37(r, [
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
                return <ListPage {...this.props}><Module793 {...bannerProps}/><Module811 {...tableProps} itemActions={this.itemActions} selectActions={this.selectActions} columns={this.getColumns()} hideColumn={[
                    "status"
                ]} cluster={match.params.cluster}/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                return [];
            }
        },
        {
            key: "selectActions",
            get: function() {
                return [];
            }
        }
    ]);
    return r;
})(Component)) || u;
export default R;
