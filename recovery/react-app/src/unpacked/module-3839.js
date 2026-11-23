import "unpacked/module-15.js";
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
import { Component } from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import Module788 from "components/Base/Modal";
import Module802 from "components/Base/Card";
import Module848 from "components/Base/Empty";
import Module1364 from "unpacked/module-1364.js";
import module1 from "unpacked/module-1.js";
import module3840 from "unpacked/module-3840.js";
const y = ((Component_1)=>{
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
            key: "renderContent",
            value: function() {
                const container = this.props.container;
                const { namespace, name } = container;
                const props = this.props;
                const { podName, isEdgeWize } = props;
                const context = this.context;
                const { gatewayName, gatewayNs } = context;
                const cluster = context.cluster || this.props.cluster;
                if (module26(this.props, "container.containerID")) {
                    return <Module1364 isEdgeWize={isEdgeWize} className={module3840.containerLog} contentClassName={module3840.containerLogContent} namespace={namespace} podName={podName} cluster={cluster} containerName={name} gatewayName={gatewayName} gatewayNamespace={gatewayNs}/>;
                }
                return <Module802><Module848 desc="CONTAINER_LOGS_NOT_SUPPORTED"/></Module802>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel } = props;
                return <Module788 bodyClassName={module3840.body} title={t("CONTAINER_LOGS")} visible={visible} onCancel={onCancel} fullScreen hideFooter>{this.renderContent()}</Module788>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
y.contextTypes = {
    isEdgeWize: module1.PropTypes.bool,
    gatewayName: module1.PropTypes.string,
    gatewayNs: module1.PropTypes.string,
    cluster: module1.PropTypes.string
};
