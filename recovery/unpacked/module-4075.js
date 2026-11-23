import "./module-15.js";
import "./module-29.js";
import "./module-18.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import module4076 from "./module-4076.js";
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
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        r.handleScroll = function(e) {
            if (r.threshold && e.target.scrollTop >= r.threshold - 2) {
                r.props.onScrollBottom();
            }
        };
        r.handleMenuClick = function(e, t) {
            r.props.onSelect(t);
        };
        r.contentRef = createRef();
        return r;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.contentRef.current) {
                    this.$dropdownContent = this.contentRef.current.querySelector(".dropdown-content");
                    this.$dropdownContent.addEventListener("scroll", this.handleScroll);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.$dropdownContent) {
                    this.$dropdownContent.removeEventListener("scroll", this.handleScroll);
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: function() {
                if (this.contentRef.current) {
                    const e = this.contentRef.current.querySelector(".dropdown-content > .menu-wrapper");
                    if (e && this.$dropdownContent) {
                        this.threshold = e.offsetHeight - this.$dropdownContent.offsetHeight;
                    }
                }
            }
        },
        {
            key: "renderList",
            value: function() {
                const props = this.props;
                const { defaultIcon, options, loading } = props;
                if (this.isMulti) {
                    return <div className="menu-wrapper"><module186.Menu width={220} onClick={this.handleMenuClick}>{options.map((e)=><module186.Menu.MenuItem key={e.value}><img src={defaultIcon} alt=""/>{e.label}</module186.Menu.MenuItem>)}</module186.Menu><div className={module4076.bottom}>{loading && <module186.Loading size="small"/>}</div></div>;
                }
                return null;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { icon, defaultIcon, value, type } = props;
                const u = props.options.find((e)=>e.value === value) || {};
                return <div ref={this.contentRef}><module186.Dropdown theme="dark" content={this.renderList()}><div className={module3(module4076.titleWrapper, module31({}, module4076.multi, this.isMulti))}><div className={module4076.icon}><img src={icon || defaultIcon} alt=""/></div><div className={module4076.text}><p>{type}</p><div className="h6">{u.label || value}</div></div>{this.isMulti && <div className={module4076.arrow}><module186.Icon name="caret-down" type="light"/></div>}</div></module186.Dropdown></div>;
            }
        },
        {
            key: "isMulti",
            get: function() {
                return this.props.options.length > 1;
            }
        }
    ]);
    return a;
})(Component);
export default h;
h.propTypes = {
    icon: module1.string,
    defaultIcon: module1.string,
    value: module1.string,
    type: module1.string,
    loading: module1.bool,
    options: module1.array,
    onSelect: module1.func,
    onScrollBottom: module1.func
};
h.defaultProps = {
    icon: "",
    defaultIcon: "",
    value: "",
    type: "",
    loading: false,
    options: [],
    onSelect: function() {},
    onScrollBottom: function() {}
};
