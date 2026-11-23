import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
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
import module186 from "./module-186.js";
import Module5045 from "./module-5045.js";
import module1 from "./module-1.js";
import { Component } from "./module-553.js";
import { getDomTitle, showNameAndAlias } from "./module-52.js";
import module5051 from "./module-5051.js";
const m = ((Component_1)=>{
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
            const n = module51(e);
            if (t) {
                const a = module51(this).constructor;
                r = Reflect.construct(n, arguments, a);
            } else {
                r = n.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(r);
    function r(e) {
        let n;
        module36(this, r);
        n = t.call(this, e);
        n.showSelect = function() {
            n.setState({
                showSelect: true
            });
        };
        n.hideSelect = function() {
            n.setState({
                showSelect: false
            });
        };
        n.handleSelect = function(e) {
            const onChange = n.props.onChange;
            n.hideSelect();
            onChange(e);
        };
        n.state = {
            showSelect: false
        };
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { title, type, detail, isEdge } = props;
                const { description, cluster, workspace } = detail;
                const showSelect = this.state.showSelect;
                return <div><div className={module5051.titleWrapper} onClick={this.showSelect}><div className={module5051.icon}><module186.Icon name={type === "devops" ? "strategy-group" : "project"} size={40} type="light"/></div><div className={module5051.text}><div className="h6" title={showNameAndAlias(detail)}>{getDomTitle(showNameAndAlias(detail))}</div><p>{getDomTitle(description || title)}</p></div></div><Module5045 defaultType={type} cluster={cluster} workspace={workspace || this.props.workspace} isEdge={isEdge} visible={showSelect} onChange={this.handleSelect} onCancel={this.hideSelect}/></div>;
            }
        }
    ]);
    return r;
})(Component);
export default m;
m.propTypes = {
    detail: module1.object,
    isEdge: module1.bool,
    onChange: module1.func
};
m.defaultProps = {
    type: "projects",
    detail: {},
    onChange: function() {}
};
