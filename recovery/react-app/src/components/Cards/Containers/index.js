import "unpacked/module-15.js";
import "unpacked/module-18.js";
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
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import Module790 from "components/Base/Panel";
import Module1219 from "components/Cards/Containers/Item";
import module1809 from "unpacked/module-1809.js";
const m = ((Component_1)=>{
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
    function a() {
        module36(this, a);
        return t.apply(this, arguments);
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, prefix, cluster, containers, initContainers, title, podName, isEdgeWize } = props;
                return <Module790 className={className} title={title}><div className={module1809.wrapper}>{containers.map((e, t)=><Module1219 isEdgeWize={isEdgeWize} key={t} prefix={prefix} cluster={cluster} detail={e} podName={podName}/>)}{initContainers.map((e, t)=><Module1219 isEdgeWize={isEdgeWize} key={t} prefix={prefix} cluster={cluster} detail={e} podName={podName} isInit/>)}</div></Module790>;
            }
        }
    ]);
    return a;
})(Component);
export default m;
m.propTypes = {
    isEdgeWize: module1.bool,
    className: module1.string,
    prefix: module1.string,
    title: module1.string,
    containers: module1.array,
    initContainers: module1.array
};
m.defaultProps = {
    prefix: "",
    containers: [],
    initContainers: []
};
