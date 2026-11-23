import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-29.js";
import "./module-6.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-137.js";
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
import module63 from "./module-63.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import { Link } from "./module-433.js";
import module837 from "./module-837.js";
import module1553 from "./module-1553.js";
import module2337 from "./module-2337.js";
const g = ((Component_1)=>{
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
        e.compile = function(t) {
            const params = e.props.params;
            return module1553.compile(t)(params);
        };
        return e;
    }
    module37(r, [
        {
            key: "shouldComponentUpdate",
            value: function(e) {
                return !module837(e.breadcrumbs, this.props.breadcrumbs) || !module837(e.routes, this.props.routes) || !module837(e.params, this.props.params) || e.pathname !== this.props.pathname;
            }
        },
        {
            key: "getCurrentPath",
            value: function() {
                const props = this.props;
                const e_pathname = props.pathname;
                return props.routes.filter((e)=>e.name).find((e)=>!module63(module1553(e.path).exec(e_pathname)));
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const breadcrumbs = this.props.breadcrumbs;
                const r = [];
                breadcrumbs.forEach((a, n)=>{
                    const l = _this.compile(a.label);
                    if (n === 0) {
                        return r.push(<Link key={n} to={_this.compile(a.url)}>{t(l)}</Link>);
                    }
                    return r.push(<span key={`split-${n}`} className={module2337.split}>/</span>, <Link key={n} to={_this.compile(a.url)}>{t(l)}</Link>);
                });
                const n = this.getCurrentPath();
                if (n) {
                    const l = r.length;
                    if (r.length > 0) {
                        r.push(<span key={`split-${l}`} className={module2337.split}>/</span>);
                    }
                    r.push(<span key={l} className={module2337.current}>{t(n.title)}</span>);
                }
                return <div className={module2337.breadcrumb}>{r}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default g;
g.propTypes = {
    breadcrumbs: module1.array,
    routes: module1.array,
    params: module1.object,
    pathname: module1.string
};
g.defaultProps = {
    breadcrumbs: [],
    routes: [],
    params: {},
    pathname: ""
};
