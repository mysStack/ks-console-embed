import "unpacked/module-15.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
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
import module63 from "unpacked/module-63.js";
import Module874 from "components/Tables/Base";
import Module833 from "unpacked/module-833.js";
import module1315 from "components/HOCs/withTableActions";
import Module1395 from "unpacked/module-1395.js";
const y = ((Component_1)=>{
    module55(a, Component_1);
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
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a() {
        module36(this, a);
        return r.apply(this, arguments);
    }
    module37(a, [
        {
            key: "renderCustomFilter",
            value: function() {
                const props = this.props;
                const { showClusterSelect, clusters, cluster, onClusterChange } = props;
                if (showClusterSelect) {
                    return <Module1395 clusters={clusters} cluster={cluster} onChange={onClusterChange}/>;
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                const clusters = this.props.clusters;
                if (globals.app.isMultiCluster && module63(clusters)) {
                    return <Module833 icon="cluster" title={t("NO_CLUSTER_AVAILABLE")} desc={t("WORKSPACE_NO_CLUSTER_TIP")}/>;
                }
                return <Module874 customFilter={this.renderCustomFilter()} {...this.props}/>;
            }
        }
    ]);
    return a;
})(Component);
const g = module1315(y);
export default g;
