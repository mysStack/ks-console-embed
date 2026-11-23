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
import module321 from "unpacked/module-321.js";
import module63 from "unpacked/module-63.js";
import { inject, observer } from "unpacked/module-239.js";
import { joinSelector } from "utils/index";
import module186 from "unpacked/module-186.js";
import module790 from "components/Base/Panel";
import module816 from "components/Clusters/ClusterTitle";
import module443 from "stores/service";
import module4980 from "pages/fedprojects/containers/Applications/Detail/AppComponents/Components/ServiceCard";
import module4982 from "unpacked/module-4982.js";
let c;
const k = inject("projectStore")(c = observer(c = ((e)=>{
    module55(a, e);
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
    function a(...n) {
        let e;
        module36(this, a);
        e = r.call(this, ...n);
        e.serviceStore = new module443;
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                this.getData();
            }
        },
        {
            key: "getData",
            value: function() {
                const props = this.props;
                const { cluster, namespace } = props;
                const selector = props.detail.selector;
                if (selector) {
                    const n = {
                        cluster,
                        namespace,
                        labelSelector: joinSelector(selector)
                    };
                    this.serviceStore.fetchListByK8s(n);
                }
            }
        },
        {
            key: "renderServices",
            value: function() {
                const _this = this;
                const data = this.serviceStore.list.data;
                if (module63(data)) {
                    return module553.default.createElement("div", {
                        className: module4982.empty
                    }, t("NO_SERVICE_FOUND"));
                }
                return module553.default.createElement("div", null, data.map((t)=>module553.default.createElement(module4980, {
                        key: t.name,
                        data: t,
                        prefix: _this.prefix
                    })));
            }
        },
        {
            key: "render",
            value: function() {
                const cluster = this.props.cluster;
                const isLoading = this.serviceStore.list.isLoading;
                const r = module321(this.props.projectStore.detail.clusters, "name");
                return module553.default.createElement(module790, null, module553.default.createElement("div", {
                    className: module4982.header
                }, module553.default.createElement("div", {
                    className: module4982.cluster
                }, module553.default.createElement(module816, {
                    cluster: r[cluster],
                    theme: "light",
                    tagClass: "float-right"
                }))), module553.default.createElement("div", {
                    className: module4982.content
                }, module553.default.createElement(module186.Loading, {
                    spinning: isLoading
                }, this.renderServices())));
            }
        },
        {
            key: "prefix",
            get: function() {
                const props = this.props;
                const { workspace, namespace } = props;
                return `/${workspace}/federatedprojects/${namespace}`;
            }
        }
    ]);
    return a;
})(module553.Component)) || c) || c;
export default k;
