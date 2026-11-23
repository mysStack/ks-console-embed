import "unpacked/module-15.js";
import "unpacked/module-86.js";
import "unpacked/module-97.js";
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
import Module2610 from "unpacked/module-2610.js";
import Module2612 from "pages/projects/components/Modals/CreateApp/Services/ServiceList/ClusterDiffs/ContainersMapper";
import Module2614 from "unpacked/module-2614.js";
import Module2616 from "pages/projects/components/Modals/CreateApp/Services/ServiceList/ClusterDiffs/ContainerPorts";
import module2618 from "unpacked/module-2618.js";
const g = ((Component_1)=>{
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { workload, clusters, overrides } = props;
                return <div>{this.showContainerSettings && <><div className={module2618.title}>{t("CONTAINER_IMAGE")}</div><Module2610 clusters={clusters} overrides={overrides}>{function(e) {
                    return <Module2612 formTemplate={workload} {...e}>{function(e) {
                        return <Module2614 {...e}/>;
                    }}</Module2612>;
                }}</Module2610></>}{this.showServiceSettings && <><div className={module2618.title}>{t("SERVICE_SETTINGS")}</div><Module2610 clusters={clusters} overrides={overrides}>{function(e) {
                    return <Module2612 formTemplate={workload} {...e}>{function(e) {
                        return <Module2616 {...e}/>;
                    }}</Module2612>;
                }}</Module2610></>}</div>;
            }
        },
        {
            key: "showContainerSettings",
            get: function() {
                return this.props.overrides.some((e)=>e.clusterOverrides.some((e)=>e.path.indexOf("image") !== -1));
            }
        },
        {
            key: "showServiceSettings",
            get: function() {
                return this.props.overrides.some((e)=>e.clusterOverrides.some((e)=>e.path.indexOf("ports") !== -1));
            }
        }
    ]);
    return r;
})(Component);
export default g;
