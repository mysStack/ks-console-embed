import "./module-15.js";
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
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module26 from "./module-26.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import Module791 from "./module-791.js";
import Module1595 from "./module-1595.js";
import module1596 from "./module-1596.js";
const h = ((Component_1)=>{
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
                const { value, onShow, onEdit, onDelete, projectDetail } = props;
                const tls = module26(this.context.formData, "spec.tls", []);
                return <ul>{value.filter((e)=>e && e.host).map((rule, t)=><Module1595 rule={rule} tls={tls} key={t} index={t} onEdit={onEdit} onDelete={onDelete} projectDetail={projectDetail}/>)}<div className={module1596.add} onClick={onShow}><Module791 title={t("ADD_ROUTING_RULE")} description={t("ADD_ROUTING_RULE_DESC")}/></div></ul>;
            }
        },
        {
            key: "render",
            value: function() {
                return <div className={module1596.wrapper}>{this.renderContent()}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default h;
h.propTypes = {
    name: module1.string,
    value: module1.array,
    onDelete: module1.func,
    onShow: module1.func
};
h.defaultProps = {
    name: "",
    value: [],
    onDelete: function() {},
    onShow: function() {}
};
h.contextTypes = {
    formData: module1.object
};
