import "./module-15.js";
import "./module-18.js";
import "./module-48.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import Module1494 from "./module-1494.js";
import module2117 from "./module-2117.js";
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.renderBadge = function(e) {
            if (e.length === 0) {
                return null;
            }
            return <module186.Tooltip placement="top" appendToBody content=<div><div>{t("TAG_PL")}</div><div className={module2117.clusterTags}>{e.map((e)=><Module1494 label={e.label} value={e.value} key={e.name} name={e.name} isTooltipContent/>)}</div></div>><div className={module2117.clusterTagBadge}>{e.length}</div></module186.Tooltip>;
        };
        n.state = {};
        return n;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const { data = [], empty = null, className } = this.props;
                if (!data.length) {
                    return empty;
                }
                const o = module96(data, 2);
                const i = o[0];
                const c = o[1];
                return <div className={module3(module2117.clusterTagGroup, className)}><Module1494 label={i.label} value={i.value} name={i.name}/>{c && <Module1494 label={c.label} value={c.value} name={c.name}/>}{this.renderBadge(data.slice(2))}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
y.propTypes = {
    data: module1.array.isRequired,
    empty: module1.string || module1.node
};
