import "unpacked/module-15.js";
import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-29.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-64.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import module321 from "unpacked/module-321.js";
import module63 from "unpacked/module-63.js";
import module482 from "unpacked/module-482.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import { CLUSTER_GROUP_TAG_TYPE, CLUSTER_PROVIDER_ICON, ICON_TYPES, MODULE_KIND_MAP } from "utils/constants";
import Module2609 from "pages/projects/components/Modals/CreateApp/Services/ServiceList/ClusterDiffs";
import module1612 from "unpacked/module-1612.js";
const b = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.handleEdit = function() {
            e.props.onEdit(e.props.propsKey);
        };
        e.handleDelete = function() {
            e.props.onDelete(e.props.propsKey);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { data, clusters } = props;
                const n = module26(data, "workload.kind").replace("Federated", "");
                const l = module482(MODULE_KIND_MAP, function(e) {
                    return e === n;
                }) || "deployments";
                const u = module321(clusters, "name");
                const o = module26(data, "workload.spec.placement.clusters", []).map((e)=>u[e.name]);
                const overrides = module26(data, "workload.spec.overrides", []);
                return <div className={module1612.item}><div className={module1612.icon}><module186.Icon name={ICON_TYPES[l]} size={40}/></div><div className={module1612.texts}><div className={module1612.text}><div className={module1612.title}>{module26(data, "service.metadata.name", "-")}</div><div className={module1612.description}>{l === "deployments" ? t("STATELESS_SERVICE") : t("STATEFUL_SERVICE")}</div></div></div>{!module63(o) && <div className={module1612.clusters}><div className={module1612.text}><div className={module1612.title}>{clusters.map((e)=>{
                    let r = module26(data, "workload.spec.template.spec.replicas");
                    r = (((overrides.find((t)=>t.clusterName === e.name) || {}).clusterOverrides || []).find((e)=>e.path === "/spec/replicas") || {}).value || r;
                    return <module186.Tag key={e.name} type={CLUSTER_GROUP_TAG_TYPE[e.group]}><module186.Icon name={CLUSTER_PROVIDER_ICON[e.provider] || "kubernetes"} size={16} type="light"/><span>{r} {r === 1 ? t("REPLICA_LOW_SI") : t("REPLICA_LOW_PL")}</span></module186.Tag>;
                })}</div></div></div>}{!module63(overrides) && <div className={module1612.overrides}><Module2609 overrides={overrides} clusters={clusters} workload={module26(data, "workload")}/></div>}<div className="buttons"><module186.Button type="flat" icon="trash" onClick={this.handleDelete}/><module186.Button type="flat" icon="pen" onClick={this.handleEdit}/></div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default b;
b.propTypes = {
    data: module1.shape({
        workload: module1.object,
        service: module1.object
    }),
    propsKey: module1.string,
    onEdit: module1.func,
    onDelete: module1.func
};
b.defaultProps = {
    data: {
        workload: {},
        service: {}
    },
    propsKey: "",
    onEdit: function() {},
    onDelete: function() {}
};
