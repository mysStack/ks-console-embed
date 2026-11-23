import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-98.js";
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
import module76 from "./module-76.js";
import module186 from "./module-186.js";
import module2843 from "./module-2843.js";
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
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.state = {
            collapse: true
        };
        e.handleTitleClick = function() {
            e.setState(function(e) {
                return {
                    collapse: !e.collapse
                };
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { title, metrics } = props;
                const collapse = this.state.collapse;
                return <div className={module2843.wrapper}><h3 onClick={this.handleTitleClick}><span>{title}</span><small><module186.Icon name={collapse ? "chevron-right" : "chevron-down"}/></small></h3>{!collapse && <div className={module2843.legendsContainer}>{metrics.map((e, key)=><div className={module2843.legends} key={key}><p><small style={{
                        backgroundColor: e.color
                    }}/><span title={e.title}>{e.title}</span></p><div className={module2843.subMetrics}>{module76(e.value) && Object.entries(e.value).map((e)=>{
                        const t = module96(e, 2);
                        const a = t[0];
                        const r = t[1];
                        return <div key={a}><span>{a}</span><span>{r}</span></div>;
                    })}</div></div>)}</div>}</div>;
            }
        }
    ]);
    return a;
})(Component);
export default m;
