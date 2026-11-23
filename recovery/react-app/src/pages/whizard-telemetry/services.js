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
import { Component } from "unpacked/module-553.js";
import { Link } from "unpacked/module-433.js";
import module443 from "stores/service";
import { getDisplayName, getLocalTime, showNameAndAlias } from "utils/index";
import { ICON_TYPES } from "utils/constants";
let u;
const O = withClusterList({
    store: new module443,
    module: "services",
    name: "SERVICE",
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
        e.getCheckboxProps = function(e) {
            return {
                disabled: e.isFedManaged,
                name: e.name
            };
        };
        e.renderExternalService = function(e) {
            const a = {
                des: "-",
                title: "-"
            };
            if (e.specType === "NodePort") {
                a.des = t("PORT_PL");
                a.title = e.ports.filter((e)=>e.nodePort).map((e)=>`${e.nodePort}/${e.protocol}`).join("; ");
            }
            if (e.specType === "LoadBalancer") {
                a.des = e.loadBalancerIngress.length > 1 ? t("LOAD_BALANCERS_SCAP") : t("LOAD_BALANCER_SCAP");
                a.title = e.loadBalancerIngress.join("; ");
            }
            if (e.externalName) {
                return <Module791 description={a.des} title={function() {
                    return <module186.Tooltip content={e.externalName}><span>{a.title}</span></module186.Tooltip>;
                }}/>;
            }
            return <Module791 description={t(`${a.des}`)} title={a.title}/>;
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
                    width: "24%",
                    render: function(e, t) {
                        return <Module789 icon={ICON_TYPES[module]} iconSize={40} title={getDisplayName(t)} desc={t.description || "-"} isMultiCluster={t.isFedManaged} to={`/whizard-telemetry/${cluster}/projects/${t.namespace}/${module}/${e}`}/>;
                    }
                },
                {
                    title: t("PROJECT"),
                    dataIndex: "namespace",
                    isHideable: true,
                    width: "18%",
                    render: function(e) {
                        return <Link to={`/whizard-telemetry/${cluster}/projects/${e}`}>{showNameAndAlias(e, "project")}</Link>;
                    }
                },
                {
                    title: t("INTERNAL_ACCESS"),
                    dataIndex: 'annotations["kubesphere.io/serviceType"]',
                    isHideable: true,
                    width: "16%",
                    render: function(e, a) {
                        return <Module791 title={a.clusterIP || ""} description={t(`${a.type}`)}/>;
                    }
                },
                {
                    title: t("EXTERNAL_ACCESS"),
                    dataIndex: "specType",
                    isHideable: true,
                    width: "20%",
                    render: function(t, a) {
                        return e.renderExternalService(a);
                    }
                },
                {
                    title: t("CREATION_TIME_TCAP"),
                    dataIndex: "createTime",
                    sorter: true,
                    sortOrder: getSortOrder("createTime"),
                    isHideable: true,
                    width: 150,
                    render: function(e) {
                        return getLocalTime(e).format("YYYY-MM-DD HH:mm:ss");
                    }
                }
            ];
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { match, bannerProps, tableProps } = props;
                return <ListPage {...this.props}><Module793 {...bannerProps}/><Module811 {...tableProps} itemActions={this.itemActions} selectActions={this.selectActions} columns={this.getColumns()} cluster={match.params.cluster} getCheckboxProps={this.getCheckboxProps}/></ListPage>;
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
export default O;
