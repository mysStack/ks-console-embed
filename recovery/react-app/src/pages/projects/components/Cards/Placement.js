import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import { Link } from "unpacked/module-433.js";
import module321 from "unpacked/module-321.js";
import module186 from "unpacked/module-186.js";
import module790 from "components/Base/Panel";
import module816 from "components/Clusters/ClusterTitle";
import module438 from "stores/cluster";
import module437 from "stores/federated";
import module955 from "unpacked/module-955.js";
import module1000 from "unpacked/module-1000.js";
import module3852 from "unpacked/module-3852.js";
let u;
const C = observer(u = ((e)=>{
    module55(r, e);
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
        e.fedStore = e.props.isEdgeWize ? new module1000({
            module: e.props.module
        }) : new module437({
            module: e.props.module
        });
        e.clusterStore = e.props.isEdgeWize ? new module955 : new module438;
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                const props = this.props;
                const { name, namespace } = props;
                this.fedStore.fetchDetail({
                    name,
                    namespace
                });
                this.clusterStore.fetchList({
                    limit: -1
                });
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { module, name, namespace } = props;
                const clusters = this.fedStore.detail.clusters;
                const u = module321(this.clusterStore.list.data, "name");
                if (clusters) {
                    return module553.default.createElement(module790, {
                        title: t("CLUSTER_PL")
                    }, module553.default.createElement(module186.Alert, {
                        type: "info",
                        message: t("MULTI_CLUSTER_RESOURCE_TIP"),
                        hideIcon: true
                    }), module553.default.createElement("div", {
                        className: module3852.clusters
                    }, clusters.map((e)=>{
                        if (u[e.name]) {
                            return module553.default.createElement(Link, {
                                key: e.name,
                                className: module3852.cluster,
                                to: `/clusters/${e.name}/projects/${namespace}/${module}/${name}`
                            }, module553.default.createElement(module816, {
                                cluster: u[e.name],
                                theme: "light",
                                tagClass: "float-right"
                            }));
                        }
                        return null;
                    })));
                }
                return null;
            }
        }
    ]);
    return r;
})(module553.Component)) || u;
export default C;
