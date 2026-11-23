import "unpacked/module-15.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module790 from "components/Base/Panel";
import module851 from "unpacked/module-851.js";
import module816 from "components/Clusters/ClusterTitle";
import module5031 from "unpacked/module-5031.js";
const h = ((e)=>{
    module55(r, e);
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
    })(r);
    function r() {
        module36(this, r);
        return t.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const cluster = this.props.cluster;
                const params = this.props.match.params;
                const { namespace, workspace, name } = params;
                const detail = {
                    kind: "PVC",
                    cluster: cluster.name,
                    namespace,
                    workspace,
                    name
                };
                return module553.default.createElement(module790, null, module553.default.createElement("div", {
                    className: module5031.cluster
                }, module553.default.createElement(module816, {
                    cluster,
                    theme: "light",
                    tagClass: "float-right"
                })), module553.default.createElement("div", {
                    className: module5031.content
                }, module553.default.createElement(module851, {
                    detail,
                    hideHeader: true,
                    hideFooter: true,
                    noWrapper: true
                })));
            }
        },
        {
            key: "prefix",
            get: function() {
                return `/${this.props.match.params.workspace}`;
            }
        }
    ]);
    return r;
})(module553.Component);
export default h;
