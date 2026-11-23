import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import module14 from "./module-14.js";
import * as module553 from "./module-553.js";
import { getDisplayNameNew, showNameAndAlias } from "./module-52.js";
import { CLUSTER_PROVIDER_ICON } from "./module-72.js";
import module2571 from "./module-2571.js";
const y = ((e)=>{
    module55(a, e);
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
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.state = {
            selectCluster: ""
        };
        e.handleClick = function(t) {
            e.setState({
                selectCluster: t.currentTarget.dataset.cluster
            });
        };
        e.handleSelect = function(selectCluster) {
            e.setState({
                selectCluster
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { clusters, clustersDetail, namespace, children } = props;
                const selectCluster = this.state.selectCluster;
                return module553.default.createElement("div", {
                    className: module2571.wrapper
                }, clusters.map((t)=>{
                    const i = module14.toJS(clustersDetail[t.name]) || t;
                    return module553.default.createElement("div", {
                        key: i.name,
                        className: module3(module2571.cluster, module31({}, module2571.selected, i.name === selectCluster)),
                        onClick: _this.handleClick,
                        "data-cluster": i.name
                    }, module553.default.createElement("div", {
                        className: module2571.title
                    }, module553.default.createElement(module186.Icon, {
                        name: CLUSTER_PROVIDER_ICON[i.provider || "kubesphere"],
                        type: "light",
                        size: 20
                    }), module553.default.createElement("span", null, i === t ? showNameAndAlias(t.name, "cluster") : getDisplayNameNew(i, false))), module553.default.createElement("div", null, children({
                        namespace,
                        clusters,
                        cluster: i.name,
                        selected: i.name === selectCluster,
                        onSelect: _this.handleSelect
                    })));
                }));
            }
        }
    ]);
    return a;
})(module553.Component);
export default y;
