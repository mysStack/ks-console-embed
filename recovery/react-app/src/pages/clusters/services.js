import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-73.js";
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
import module61 from "unpacked/module-61.js";
import "unpacked/module-315.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module186 from "unpacked/module-186.js";
import Module811 from "pages/clusters/components/ResourceTable";
import Module789 from "components/Base/Avatar";
import Module791 from "components/Base/Text";
import Module793 from "unpacked/module-793.js";
import { ListPage, withClusterList } from "components/HOCs/withList";
import module26 from "unpacked/module-26.js";
import { Component } from "unpacked/module-553.js";
import { Link } from "unpacked/module-433.js";
import module443 from "stores/service";
import { getDisplayName, getLocalTime, showNameAndAlias } from "utils/index";
import { ICON_TYPES, SERVICE_TYPES } from "utils/constants";
let o;
const C = withClusterList({
    store: new module443,
    module: "services",
    name: "SERVICE",
    rowKey: "uid"
})(o = ((Component_1)=>{
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
        e.showAction = function(e) {
            return !e.isFedManaged;
        };
        e.getCheckboxProps = function(e) {
            return {
                disabled: e.isFedManaged,
                name: e.name
            };
        };
        e.renderExternalService = function(e) {
            const r = {
                des: "-",
                title: "-"
            };
            if (e.specType === "NodePort") {
                r.des = t("PORT_PL");
                r.title = e.ports.filter((e)=>e.nodePort).map((e)=>`${e.nodePort}/${e.protocol}`).join("; ");
            }
            if (e.specType === "LoadBalancer") {
                r.des = e.loadBalancerIngress.length > 1 ? t("LOAD_BALANCERS_SCAP") : t("LOAD_BALANCER_SCAP");
                r.title = e.loadBalancerIngress.join("; ");
            }
            if (e.externalName) {
                return <Module791 description={r.des} title={function() {
                    return <module186.Tooltip content={e.externalName}><span>{r.title}</span></module186.Tooltip>;
                }}/>;
            }
            return <Module791 description={t(`${r.des}`)} title={r.title}/>;
        };
        e.getColumns = function() {
            const e_props = e.props;
            const { getSortOrder, module } = e_props;
            const cluster = e.props.match.params.cluster;
            return [
                {
                    title: t("NAME"),
                    dataIndex: "name",
                    sorter: true,
                    sortOrder: getSortOrder("name"),
                    search: true,
                    width: "20%",
                    render: function(e, t) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(t)} desc={t.description || "-"} isMultiCluster={t.isFedManaged} to={`/clusters/${cluster}/projects/${t.namespace}/${module}/${e}`}/>;
                    }
                },
                {
                    title: t("PROJECT"),
                    dataIndex: "namespace",
                    isHideable: true,
                    width: "15%",
                    render: function(e) {
                        return <Link to={`/clusters/${cluster}/projects/${e}`}>{showNameAndAlias(e, "project")}</Link>;
                    }
                },
                {
                    title: t("INTERNAL_ACCESS"),
                    dataIndex: 'annotations["kubesphere.io/serviceType"]',
                    isHideable: true,
                    width: "15%",
                    render: function(e, r) {
                        return <Module791 title={r.clusterIP || ""} description={t(`${r.type}`)}/>;
                    }
                },
                {
                    title: t("EXTERNAL_ACCESS"),
                    dataIndex: "specType",
                    isHideable: true,
                    width: "20%",
                    render: function(t, r) {
                        return e.renderExternalService(r);
                    }
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    sorter: true,
                    sortOrder: getSortOrder("createTime"),
                    isHideable: true,
                    width: "10%",
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        e.showCreate = function() {
            const e_props = e.props;
            const { query, match, module, getData } = e_props;
            return e.props.trigger("service.simple.create", {
                module,
                namespace: query.namespace,
                cluster: match.params.cluster,
                success: getData
            });
        };
        return e;
    }
    module37(n, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { match, bannerProps, tableProps } = props;
                return <ListPage {...this.props}><Module793 {...bannerProps}/><Module811 {...tableProps} itemActions={this.itemActions} selectActions={this.selectActions} columns={this.getColumns()} onCreate={this.showCreate} cluster={match.params.cluster} getCheckboxProps={this.getCheckboxProps}/></ListPage>;
            }
        },
        {
            key: "itemActions",
            get: function() {
                const _this = this;
                const props = this.props;
                const { trigger, name } = props;
                return [
                    {
                        key: "edit",
                        icon: "pen",
                        text: t("EDIT_INFORMATION"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(e) {
                            return trigger("resource.baseinfo.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "editYaml",
                        icon: "pen",
                        text: t("EDIT_YAML"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(e) {
                            return trigger("resource.yaml.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "editService",
                        icon: "network-router",
                        text: t("EDIT_SERVICE"),
                        action: "edit",
                        show: this.showAction,
                        onClick: function(e) {
                            return trigger("service.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "editGateway",
                        icon: "ip",
                        text: t("EDIT_EXTERNAL_ACCESS"),
                        action: "edit",
                        show: function(t) {
                            return _this.showAction(t) && t.type === SERVICE_TYPES.VirtualIP;
                        },
                        onClick: function(e) {
                            return trigger("service.gateway.edit", {
                                detail: e
                            });
                        }
                    },
                    {
                        key: "delete",
                        icon: "trash",
                        text: t("DELETE"),
                        action: "delete",
                        show: this.showAction,
                        onClick: function(e) {
                            return trigger("service.delete", {
                                type: name,
                                detail: e
                            });
                        }
                    }
                ];
            }
        },
        {
            key: "selectActions",
            get: function() {
                const props = this.props;
                const { tableProps, trigger, name } = props;
                return module61(module26(tableProps, "tableActions.selectActions", {})).filter((e)=>e.key !== "delete").concat([
                    {
                        key: "delete",
                        type: "danger",
                        text: t("DELETE"),
                        action: "delete",
                        onClick: function() {
                            trigger("service.batch.delete", {
                                type: name,
                                rowKey: "uid"
                            });
                        }
                    }
                ]);
            }
        }
    ]);
    return n;
})(Component)) || o;
export default C;
