import "./module-15.js";
import "./module-828.js";
import "./module-200.js";
import "./module-84.js";
import "./module-86.js";
import "./module-18.js";
import "./module-192.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-38.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import { Component } from "./module-553.js";
import module186 from "./module-186.js";
import module3 from "./module-3.js";
import { observer } from "./module-239.js";
import module201 from "./module-201.js";
import module3373 from "./module-3373.js";
let d;
const g = [
    {
        label: t("MONDAY"),
        value: 1
    },
    {
        label: t("TUESDAY"),
        value: 2
    },
    {
        label: t("WEDNESDAY"),
        value: 3
    },
    {
        label: t("THURSDAY"),
        value: 4
    },
    {
        label: t("FRIDAY"),
        value: 5
    },
    {
        label: t("SATURDAY"),
        value: 6
    },
    {
        label: t("SUNDAY"),
        value: 0
    }
];
const b = new Array(31).fill(1).map((e, t)=>({
        label: t + 1,
        value: t + 1
    }));
const S = observer(d = ((Component_1)=>{
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
        let l;
        module36(this, a);
        l = t.call(this, e);
        l.handleClick = function(e) {
            const { onChange, multi = false } = l.props;
            let value = l.state.value;
            if (multi) {
                const u = value.indexOf(e);
                if (u > -1) {
                    value.splice(u, 1);
                } else {
                    value.push(e);
                }
            } else {
                value = [
                    e
                ];
            }
            l.setState({
                value
            });
            if (onChange) {
                onChange(value);
            }
        };
        l.state = {
            value: Array.from(e.value ?? e.defaultValue ?? [])
        };
        return l;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const type = this.props.type;
                const value = this.state.value;
                const r = module201("lang") === "zh" ? "zh" : "en";
                return <div className={module3373.wrapper}>{this.options.map((n, key)=>{
                    let u;
                    return <module186.Button className={module3(module3373.item, (u = {}, module31(u, module3373.week, type === "week"), module31(u, module3373.month, type === "month"), module31(u, module3373.enButton, type === "week" && r !== "zh"), u))} key={key} type={value.includes(n.value) ? "control" : "default"} onClick={function() {
                        return _this.handleClick(n.value, n);
                    }}>{n.label}</module186.Button>;
                })}</div>;
            }
        },
        {
            key: "options",
            get: function() {
                if (this.props.type === "week") {
                    return g;
                }
                return b;
            }
        }
    ]);
    return a;
})(Component)) || d;
export default S;
