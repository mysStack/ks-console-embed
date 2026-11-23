import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
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
import { Component } from "unpacked/module-1415.js";
import module1223 from "stores/workload/resource";
import Module4204 from "unpacked/module-4204.js";
let u;
const g = inject("detailStore")(u = observer(u = ((Component_1)=>{
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
        e.resourceStore = new module1223;
        e.fetchData = async function t() {
            let a;
            let cluster;
            let namespace;
            let l;
            a = e.store.detail;
            cluster = a.cluster;
            namespace = a.namespace;
            l = {
                name: e.serviceName,
                cluster,
                namespace
            };
            await e.resourceStore.checkService(l);
            if (e.resourceStore.isExistService) {
                await e.resourceStore.fetchService(l);
            }
        };
        return e;
    }
    module37(a, [
        {
            key: "renderServices",
            value: function() {
                const resourceStore = this.resourceStore;
                const { service, isLoading } = resourceStore;
                if (service.name) {
                    return <Module4204 prefix={this.prefix} service={service} loading={isLoading}/>;
                }
                return null;
            }
        },
        {
            key: "renderContent",
            value: function() {
                return <div>{this.renderPlacement()}{this.renderReplicaInfo()}{this.renderServices()}{this.renderContainerPorts()}{this.renderPods()}</div>;
            }
        },
        {
            key: "serviceName",
            get: function() {
                return module26(this.store.detail, "spec.serviceName", "");
            }
        }
    ]);
    return a;
})(Component)) || u) || u;
export default g;
