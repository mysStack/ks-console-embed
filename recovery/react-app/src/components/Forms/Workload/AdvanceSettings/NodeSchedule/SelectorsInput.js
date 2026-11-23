import "unpacked/module-15.js";
import "unpacked/module-5.js";
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
import module186 from "unpacked/module-186.js";
import Module843 from "components/Inputs/PropertiesInput";
import Module788 from "components/Base/Modal";
import Module2442 from "components/Forms/Workload/AdvanceSettings/NodeSchedule/NodeSelect";
import Module2444 from "unpacked/module-2444.js";
import module2446 from "unpacked/module-2446.js";
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
            e.handleCancel();
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
                const { cluster, namespace, isEdgeWize, formTemplate } = props;
                if (isEdgeWize) {
                    return <Module2444 cluster={cluster} namespace={namespace} onSelect={this.handleNodeSelect} onCancel={this.handleCancel} visible={this.state.visible} formTemplate={formTemplate}/>;
                }
                return <Module2442 cluster={cluster} namespace={namespace} onSelect={this.handleNodeSelect} onCancel={this.handleCancel} visible={this.state.visible}/>;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const visible = this.state.visible;
                return <><div className={module2446.wrapper}><Module843 {...this.props} controlled/><module186.Button className={module2446.node} onClick={function() {
                    _this.setState({
                        visible: true
                    });
                }}>{t("SPECIFY_NODE")}</module186.Button></div><Module788 visible={visible} bodyClassName={module2446.body} width={600} hideHeader hideFooter>{this.renderNodeSelectForm()}</Module788></>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
