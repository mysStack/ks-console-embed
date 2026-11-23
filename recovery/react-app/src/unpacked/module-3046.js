import "./module-15.js";
import "./module-5.js";
import "./module-187.js";
import "./module-11.js";
import "./module-84.js";
import "./module-18.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import module247 from "./module-247.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import { getAccessNodeDisplayName } from "./module-983.js";
import Module788 from "components/Base/Modal";
import Module796 from "components/Base/Status";
import Module789 from "components/Base/Avatar";
import module3047 from "./module-3047.js";
const _ = ((Component_1)=>{
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleSelectAll = function() {
            if (t.isSelectedAll) {
                return t.setState({
                    selectedKeys: []
                });
            }
            t.setState({
                selectedKeys: t.allowedNodes.map((e)=>e.name)
            });
        };
        t.handleNodeCheckedChange = function(e, a) {
            const n = t.state.selectedKeys ?? [];
            if (e) {
                return t.setState({
                    selectedKeys: module247([].concat(module61(n), [
                        a
                    ]))
                });
            }
            return t.setState({
                selectedKeys: n.filter((e)=>e !== a)
            });
        };
        t.handleOk = function() {
            const onOk = t.props.onOk;
            onOk?.(t.selectedNodes);
        };
        t.state = {
            selectedKeys: t.allowedNodes.map((e)=>e.name)
        };
        return t;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { visible, title, okText, onCancel } = props;
                return <Module788 width={600} title={title} visible={visible} okText={okText} onOk={this.handleOk} onCancel={onCancel}><div className={module3047.banner}><span className={module3047.title}>{t("EDGE_NODE")}</span><span onClick={this.handleSelectAll} className={module3047.action}>{this.isSelectedAll ? t("CANCEL_SELECT_ALL") : t("SELECT_ALL")}</span></div><div className={module3047.list}>{this.allowedNodes.map((a)=>{
                    const { name, nodeIP, status } = a;
                    return <div key={name} className={module3(module3047.node, module31({}, module3047.active, _this.state.selectedKeys.includes(name)))}><module186.Checkbox checked={_this.state.selectedKeys.includes(name)} onChange={function(t) {
                        return _this.handleNodeCheckedChange(t, name);
                    }}/><Module789 className={module3047.content} to={null} icon="edge-node" iconSize={20} title={getAccessNodeDisplayName(a)} desc={nodeIP}/><Module796 type={status} name={t(`NODE_STATUS_${status.toLocaleUpperCase()}`)}/></div>;
                })}</div></Module788>;
            }
        },
        {
            key: "allowedNodes",
            get: function() {
                return this.props.nodes ?? [];
            }
        },
        {
            key: "isSelectedAll",
            get: function() {
                const _this = this;
                return this.allowedNodes.every(({ name })=>_this.state.selectedKeys.includes(name));
            }
        },
        {
            key: "selectedNodes",
            get: function() {
                const _this = this;
                return this.allowedNodes.filter(({ name })=>_this.state.selectedKeys.includes(name));
            }
        }
    ]);
    return r;
})(Component);
export default _;
_.propTypes = {
    detail: module1.object,
    visible: module1.bool,
    onOk: module1.func,
    onCancel: module1.func,
    isSubmitting: module1.bool
};
_.defaultProps = {
    visible: false,
    onOk: function() {},
    onCancel: function() {},
    isSubmitting: false
};
