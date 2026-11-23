import "./module-15.js";
import "./module-84.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import Module1096 from "./module-1096.js";
import Module1288 from "./module-1288.js";
import Module1290 from "./module-1290.js";
import Module1292 from "./module-1292.js";
import Module1293 from "./module-1293.js";
import Module2604 from "./module-2604.js";
import module2605 from "./module-2605.js";
const E = ((Component_1)=>{
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
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        r.formRef = createRef();
        return r;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, data, cluster, namespace, withService, supportGpuSelect, projectDetail, isEdgeWize } = props;
                const prefix = "spec.template.spec.containers[0]";
                return <div className={module3(module2605.wrapper, className)}><Module2604 isEdgeWize={isEdgeWize} prefix={prefix} cluster={cluster} namespace={namespace} data={data} supportGpuSelect={supportGpuSelect} projectDetail={projectDetail}/><Module1096 prefix={prefix} withService={withService}/><Module1292 prefix={prefix}/>{this.supportProbe && <Module1293 prefix={prefix}/>}<Module1288 prefix={prefix}/><Module1290 prefix={prefix} namespace={namespace} cluster={cluster} projectDetail={projectDetail} isEdgeWize={isEdgeWize} configMaps={configMaps} secrets={secrets}/></div>;
            }
        },
        {
            key: "supportProbe",
            get: function() {
                return [
                    "deployments",
                    "daemonsets",
                    "statefulsets"
                ].includes(this.props.module);
            }
        }
    ]);
    return a;
})(Component);
export default E;
E.propTypes = {
    className: module1.string,
    type: module1.string,
    titlePrefix: module1.string,
    namespace: module1.string,
    module: module1.string,
    data: module1.object,
    onSave: module1.func,
    onCancel: module1.func,
    configMaps: module1.array,
    secrets: module1.array
};
E.defaultProps = {
    className: "",
    namespace: "",
    module: "",
    data: {},
    onSave: function() {},
    onCancel: function() {},
    configMaps: [],
    secrets: []
};
E.contextTypes = {
    registerSubRoute: module1.func,
    resetSubRoute: module1.func
};
