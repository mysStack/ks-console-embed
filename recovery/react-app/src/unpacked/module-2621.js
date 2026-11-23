import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module26 from "./module-26.js";
import Module791 from "components/Base/Text";
import Module1595 from "components/Forms/Route/RouteRules/RuleList/Item";
import module2622 from "./module-2622.js";
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
    function r() {
        module36(this, r);
        return a.apply(this, arguments);
    }
    module37(r, [
        {
            key: "renderContent",
            value: function() {
                const props = this.props;
                const { data, onEdit, onDelete, onAdd, projectDetail } = props;
                const o = module26(data, "spec.rules", []);
                const tls = module26(data, "spec.tls", []);
                return <ul>{o.filter((e)=>e.host).map((rule, index)=><Module1595 key={`${rule.host}-${index}`} rule={rule} tls={tls} index={index} onEdit={onEdit} onDelete={onDelete} projectDetail={projectDetail}/>)}<div className={module2622.add} onClick={onAdd}><Module791 title={t("ADD_ROUTING_RULE")} description={t("ADD_ROUTING_RULE_DESC")}/></div></ul>;
            }
        },
        {
            key: "render",
            value: function() {
                const error = this.props.error;
                return <div className={module2622.wrapper}>{this.renderContent()}{error && <p className={module2622.error}>{error}</p>}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default v;
v.propTypes = {
    data: module1.object,
    onAdd: module1.func,
    onDelete: module1.func
};
v.defaultProps = {
    data: {},
    onAdd: function() {},
    onDelete: function() {}
};
