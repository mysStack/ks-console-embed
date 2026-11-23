import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-436.js";
import "./module-319.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module26 from "./module-26.js";
import { SimpleCircle } from "./module-799.js";
import module3757 from "./module-3757.js";
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
        e.handleClick = function() {
            const onClick = e.props.onClick;
            if (onClick) {
                onClick();
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { theme, className, name, legend, used, total, unit, showRate, onClick } = props;
                const title = t(name);
                const y = t(module26(legend, "[0]", ""));
                const E = t(module26(legend, "[1]", ""));
                return <div className={module3(module3757.card, className, module3757[theme], module31({}, module3757.cursor, !!onClick))} onClick={this.handleClick}><img className={module3757.cardImg} src="/assets/banner-icon-1.svg"/><div className={module3757.chart}><SimpleCircle theme={theme} width="100%" height="100%" title={title} legend={legend} value={parseFloat(used)} total={parseFloat(total)} unit={unit} showRate={showRate}/></div><div className={module3757.status}><div className={module3757.title}>{title}</div><div className={module3757.detail}><p><label>{y}:</label> {used} {unit}</p><p><label>{E}:</label> {total} {unit}</p></div></div></div>;
            }
        },
        {
            key: "usageRate",
            get: function() {
                const props = this.props;
                const { used, total } = props;
                if (total) {
                    return parseInt(parseFloat(used) / parseFloat(total) * 100, 10);
                }
                return 0;
            }
        }
    ]);
    return r;
})(Component);
export default g;
g.propTypes = {
    theme: module1.string,
    className: module1.string,
    name: module1.string,
    legend: module1.array,
    used: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    total: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    unit: module1.string,
    showRate: module1.bool,
    onClick: module1.func
};
g.defaultProps = {
    theme: "dark",
    name: "Status",
    legend: [
        "USED",
        "TOTAL"
    ],
    used: 0,
    total: 0,
    unit: "",
    showRate: false
};
