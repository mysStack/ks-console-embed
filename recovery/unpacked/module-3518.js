import "./module-15.js";
import "./module-5.js";
import "./module-6.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-7.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import { ICON_TYPES } from "./module-72.js";
import module3519 from "./module-3519.js";
import Module1389 from "./module-1389.js";
const h = ((Component_1)=>{
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
    function a(...l) {
        let e;
        module36(this, a);
        e = t.call(this, ...l);
        e.renderCrumbContainer = function() {
            const t = [];
            const length = e.crumbData.length;
            e.crumbData.forEach((r, n)=>{
                t.push(<div key={`${r.name}-${r.type}`} title={r.name}><Module1389 icon={ICON_TYPES[r.type]} type={r.type} name={r.name} crumb/><span className={module3519.crumbTitle}>{n === 0 && r.type !== "cluster" && e.props.cluster ? `${r.name} (${e.props.cluster})` : r.name}</span>{n !== length - 1 ? <module186.Icon name="caret-right"/> : null}</div>);
            });
            return t;
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { handleCrumbOperation, loading } = props;
                return <div className={module3519.crumbContainer}><module186.Button icon="chevron-left" iconType="light" disabled={loading} onClick={function() {
                    return handleCrumbOperation("back");
                }}/><module186.Button icon="chevron-right" iconType="light" disabled={loading} onClick={function() {
                    return handleCrumbOperation("front");
                }}/><div className={module3519.crumb}>{this.renderCrumbContainer()}</div></div>;
            }
        },
        {
            key: "crumbData",
            get: function() {
                return this.props.crumbData;
            }
        }
    ]);
    return a;
})(Component);
export default h;
h.propTypes = {
    crumbData: module1.array,
    handleCrumbOperation: module1.func,
    loading: module1.bool,
    cluster: module1.string
};
