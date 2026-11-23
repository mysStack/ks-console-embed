import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-22.js";
import "unpacked/module-57.js";
import "unpacked/module-41.js";
import "utils/babel-helpers/asyncToGenerator";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-553.js";
import { inject, observer } from "unpacked/module-239.js";
import module26 from "unpacked/module-26.js";
import { Component } from "unpacked/module-1983.js";
import module437 from "stores/federated";
import Module5004 from "pages/fedprojects/containers/StatefulSets/Detail/ServiceCard";
let o;
const g = inject("projectStore", "detailStore")(o = observer(o = ((Component_1)=>{
    module55(r, Component_1);
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
    function r(...o_1) {
        let e;
        module36(this, r);
        e = t.call(this, ...o_1);
        e.serviceStore = new module437({
            module: "services"
        });
        e.fetchService = async function t() {
            let r;
            let namespace;
            let o;
            let c;
            r = e.store.detail;
            namespace = r.namespace;
            o = r.template;
            c = module26(o, "spec.serviceName", "");
            if ((await e.serviceStore.checkName({
                name: c,
                namespace
            })).exist) {
                await e.serviceStore.fetchDetail({
                    name: c,
                    namespace
                });
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchService();
            }
        },
        {
            key: "renderServices",
            value: function() {
                const serviceStore = this.serviceStore;
                const { detail, isLoading } = serviceStore;
                const workspace = this.props.match.params.workspace;
                if (detail.name) {
                    return <Module5004 service={detail} workspace={workspace} loading={isLoading}/>;
                }
                return null;
            }
        },
        {
            key: "renderContent",
            value: function() {
                return <div>{this.renderReplicaInfo()}{this.renderServices()}{this.renderContainerPorts()}{this.renderPods()}</div>;
            }
        }
    ]);
    return r;
})(Component)) || o) || o;
export default g;
