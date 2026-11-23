import "unpacked/module-12.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-448.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module246 from "unpacked/module-246.js";
import "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import module3498 from "unpacked/module-3498.js";
const v = ((Component_1)=>{
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
        r.state = {
            data: e.data
        };
        return r;
    }
    module37(a, [
        {
            key: "onCollapsed",
            value: function(e) {
                const data = {
                    ...e,
                    collapsed: !e.collapsed
                };
                this.setState({
                    data
                });
            }
        },
        {
            key: "render",
            value: function() {
                const data = this.state.data;
                const t = Object.keys(data)[0];
                if (module246(data[t]) === "object" && data[t] != null) {
                    return <div key={t} className={data.collapsed ? module3498.close : ""} style={{
                        marginLeft: 30 * data.level
                    }}><div className={module3498.header} onClick={this.onCollapsed.bind(this, data)}><module186.Icon name={data.collapsed ? "caret-right" : "caret-down"} size={16}/> <span className={module3498.title}>{t}</span> <span className={module3498.count}>{Object.keys(data[t]).length || 0} item</span></div>{this.props.renderMetadata(data[t])}</div>;
                }
                return <div style={{
                    marginLeft: data.level ? 30 : 0,
                    display: "flex"
                }} key={t}><div className={module3498.text}>{`${t}:`}</div> <div className={module3498.value}>{`${data[t]}`}</div></div>;
            }
        }
    ]);
    return a;
})(Component);
export default v;
