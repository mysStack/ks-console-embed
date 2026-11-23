import "unpacked/module-12.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-86.js";
import "unpacked/module-16.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module14 from "unpacked/module-14.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import module438 from "stores/cluster";
import Module4335 from "unpacked/module-4335.js";
let u;
const b = inject("detailStore")(u = observer(u = ((Component_1)=>{
    module55(a, Component_1);
    var t = ((e)=>{
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
    })(a);
    function a(...u_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...u_1);
        e.clusterStore = new module438;
        e.state = {
            allClusters: []
        };
        e.fetchData = function(t) {
            const params = e.props.match.params;
            const { cluster, namespace, name } = params;
            if (e.store.fetchDetail) {
                e.store.fetchDetail({
                    cluster,
                    namespace,
                    name,
                    type: e.type,
                    ...t
                });
            }
        };
        e.getAllCluster = async function t() {
            let allClusters;
            allClusters = await e.clusterStore.fetchList({
                limit: -1
            });
            e.setState({
                allClusters
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchData();
                this.getAllCluster();
            }
        },
        {
            key: "render",
            value: function() {
                const params = this.props.match.params;
                const { cluster, namespace } = params;
                return <Module4335 store={this.store} cluster={cluster} namespace={namespace} rules={this.rules} handleRefresh={this.fetchData} allClusters={this.state.allClusters}/>;
            }
        },
        {
            key: "store",
            get: function() {
                return this.props.detailStore;
            }
        },
        {
            key: "module",
            get: function() {
                return this.store.module;
            }
        },
        {
            key: "params",
            get: function() {
                return this.props.match.params;
            }
        },
        {
            key: "type",
            get: function() {
                if (this.props.match.url.indexOf("/builtin-rules") > 0) {
                    return "builtin";
                }
                return "custom";
            }
        },
        {
            key: "rules",
            get: function() {
                return module14.toJS(module26(this.store, "detail._originDataWithStatus.spec.rules", []));
            }
        }
    ]);
    return a;
})(Component)) || u) || u;
export default b;
