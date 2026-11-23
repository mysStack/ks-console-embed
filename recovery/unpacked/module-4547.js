import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import { Link } from "./module-433.js";
import module186 from "./module-186.js";
import Module838 from "./module-838.js";
import Module793 from "./module-793.js";
import Module797 from "./module-797.js";
import { ListPage, withProjectList } from "./module-794.js";
import Module805 from "./module-805.js";
import { getLocalTime } from "./module-52.js";
import { ICON_TYPES, PODS_STATUS, POD_PHASE_DETAILS, POD_STATUS, getPodPhaseDetail } from "./module-72.js";
import module452 from "./module-452.js";
import { inject } from "./module-239.js";
import module4548 from "./module-4548.js";
let o;
const A = withProjectList({
    store: new module452,
    module: "pods",
    name: "POD"
})(o = inject("workspaceStore")(o = ((Component_1)=>{
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
    function r(...o_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...o_1);
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
                    title: t("PODS.PHASE"),
                    dataIndex: "phase",
                    filters: e.getPodPhaseOptions(),
                    isHideable: true,
                    search: true,
                    render: function(e, { status }) {
                        const phase = status?.phase;
                        const text = getPodPhaseDetail({
                            phase
                        }).text;
                        return <span>{t(text)}</span>;
                    }
                },
                {
                    title: t("NODE"),
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
                    title: t("APP"),
                    dataIndex: "app",
                    isHideable: true,
                    search: true,
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
        e.renderAvatar = function(t, a) {
            const module = e.props.module;
            const params = e.props.match.params;
            const { workspace, cluster, namespace } = params;
            const a_podStatus = a.podStatus;
            return <div className={module4548.avatar}><div className={module4548.icon}><module186.Icon name={ICON_TYPES[module]} size={40}/><Module838 className={module4548.indicator} type={a_podStatus.type} flicker/></div><div><Link className={module4548.title} to={`/${workspace}/clusters/${cluster}/projects/${namespace}/${module}/${t}`}>{t}</Link><div className={module4548.desc}>{e.getItemDesc(a)}</div></div></div>;
        };
        e.renderNode = function(a, r) {
            const isEdge = e.props.workspaceStore.isEdge;
            const cluster = e.props.match.params.cluster;
            const { node, nodeIp } = r;
            if (!node) {
                return "-";
            }
            const l = t("NODE_IP", {
                node,
                ip: nodeIp
            });
            return <Link to={`${isEdge ? "/v2/edgewize" : ""}/clusters/${cluster}/nodes/${node}`}>{l}</Link>;
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
            key: "getStatus",
            value: function() {
                return POD_STATUS.map((e)=>({
                        text: t(e.text),
                        value: e.value
                    }));
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
                const { bannerProps, tableProps } = props;
                return <ListPage {...this.props}><Module793 {...bannerProps}/><Module797 {...tableProps} itemActions={this.itemActions} columns={this.getColumns()} hideColumn={[
                    "status"
                ]} onCreate={null}/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const props = this.props;
                const { getData, trigger, name } = props;
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
    return r;
})(Component)) || o) || o;
export default A;
