import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import "./module-315.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import Module843 from "./module-843.js";
import Module2585 from "./module-2585.js";
import module2587 from "./module-2587.js";
const v = ((Component_1)=>{
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
        e.state = {
            visible: false
        };
        e.handleNodeSelect = function(t) {
            const onChange = e.props.onChange;
            if (onChange) {
                onChange(t);
            }
        };
        e.handleCancel = function() {
            e.setState({
                visible: false
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "renderNodeSelectForm",
            value: function() {
                const props = this.props;
                const { cluster, namespace, isEdgeWize } = props;
                return <Module2585 cluster={cluster} isEdgeWize={isEdgeWize} namespace={namespace} onSelect={this.handleNodeSelect} onCancel={this.handleCancel} visible={this.state.visible}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const visible = this.state.visible;
                return <div className={module2587.wrapper}><Module843 {...this.props} controlled/><module186.Popper className={module2587.popper} visible={visible} placement="right" content={this.renderNodeSelectForm()} closeAfterClick={false} trigger="click"><module186.Button className={module2587.node}>{t("SPECIFY_NODE")}</module186.Button></module186.Popper></div>;
            }
        }
    ]);
    return r;
})(Component);
export default v;
