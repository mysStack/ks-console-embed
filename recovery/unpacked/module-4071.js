import "./module-15.js";
import "./module-6.js";
import "./module-86.js";
import "./module-18.js";
import "./module-48.js";
import "./module-97.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-62.js";
import "./module-7.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module471 from "./module-471.js";
import Module4072 from "./module-4072.js";
import module1845 from "./module-1845.js";
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
    function r(e) {
        let t;
        module36(this, r);
        t = a.call(this, e);
        t.handleItemOpen = function(e) {
            t.setState(function(t) {
                return {
                    openedNav: t.openedNav === e ? "" : e
                };
            });
        };
        t.state = {
            openedNav: t.getOpenedNav()
        };
        return t;
    }
    module37(r, [
        {
            key: "getOpenedNav",
            value: function() {
                let e = "";
                const navs = this.props.navs;
                const currentPath = this.currentPath;
                navs.forEach((t)=>{
                    t.items.forEach((t)=>{
                        if (t.children && t.children.some((e)=>e.name === currentPath || currentPath.indexOf(e.name) === 0 || !!e.tabs && e.tabs.some((e)=>currentPath.indexOf(e.name) === 0))) {
                            e = t.name;
                        }
                    });
                });
                return e;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { className, navs, match, innerRef, onItemClick, disabled } = props;
                const openedNav = this.state.openedNav;
                const currentPath = this.currentPath;
                const prefix = module471(match.url, "/");
                return <div ref={innerRef} className={className}>{navs.map((a)=><div key={a.cate} className={module1845.subNav}>{a.title && <p>{t(a.title)}</p>}<ul>{a.items.map((item)=><Module4072 key={item.name} item={item} prefix={prefix} current={currentPath} onClick={onItemClick} isOpen={item.name === openedNav} onOpen={_this.handleItemOpen} disabled={disabled}/>)}</ul></div>)}</div>;
            }
        },
        {
            key: "currentPath",
            get: function() {
                const props = this.props;
                const pathname = props.location.pathname;
                const url = props.match.url;
                const length = module471(url, "/").length;
                return pathname.slice(length + 1);
            }
        }
    ]);
    return r;
})(Component);
h.propTypes = {
    className: module1.string,
    navs: module1.array.isRequired,
    prefix: module1.string,
    checkSelect: module1.func,
    onItemClick: module1.func,
    innerRef: module1.object
};
h.defaultProps = {
    className: "",
    prefix: "",
    checkSelect: function() {},
    onItemClick: function() {}
};
export default h;
