import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import { getTimeOptions } from "unpacked/module-1841.js";
import module4033 from "unpacked/module-4033.js";
const v = [
    "1m",
    "5m",
    "10m",
    "30m",
    "1h",
    "3h",
    "6h",
    "12h"
];
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
        e.handleClick = function(t) {
            const value = t.target.dataset.value;
            if (value) {
                e.props.onChange({
                    duration: value
                });
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const e = getTimeOptions(v);
                const duration = this.props.duration;
                return <div className={module4033.default}><div className={module4033.title}>{t("SELECT_TIME_RANGE")}</div><ul onClick={this.handleClick}>{e.map(({ label, value })=><li key={label} data-value={value} className={module3(module31({}, module4033.cur, value === duration))}>{t("LAST_TIME", {
                        value: label
                    })}</li>)}</ul></div>;
            }
        }
    ]);
    return r;
})(Component);
export default g;
g.propTypes = {
    duration: module1.string,
    onChange: module1.func
};
g.defaultProps = {
    duration: "10m",
    onChange: function() {}
};
