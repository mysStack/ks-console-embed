import "./module-15.js";
import "./module-5.js";
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
import { Component } from "./module-553.js";
import module26 from "./module-26.js";
import Module788 from "./module-788.js";
import Module1364 from "./module-1364.js";
import module1051 from "./module-1051.js";
import module3032 from "./module-3032.js";
import { observer } from "./module-239.js";
import module3033 from "./module-3033.js";
let l;
const g = observer(l = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.kubekeyClusterStore = e.props.isEdgeWize ? new module3032 : new module1051;
        e.fetchPod = function() {
            const t = module26(e.props, "detail.kkName");
            if (t) {
                e.kubekeyClusterStore.fetchDetail({
                    name: t
                });
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fetchPod();
            }
        },
        {
            key: "renderContent",
            value: function() {
                const e = module26(this.kubekeyClusterStore.detail, "status.jobInfo", {});
                const { namespace, pods } = e;
                const podName = module26(pods, "[0].name");
                const containerName = module26(pods, "[0].containers[0].name");
                return <Module1364 className={module3033.containerLog} contentClassName={module3033.containerLogContent} namespace={namespace} podName={podName} isEdgeWize={this.props.isEdgeWize} containerName={containerName} isRealtime/>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { visible, onCancel } = props;
                return <Module788 bodyClassName={module3033.body} title={t("LOGS")} visible={visible} onCancel={onCancel} fullScreen hideFooter>{this.renderContent()}</Module788>;
            }
        }
    ]);
    return r;
})(Component)) || l;
export default g;
