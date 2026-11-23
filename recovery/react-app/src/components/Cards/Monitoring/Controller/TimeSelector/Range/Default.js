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
import { getLastTimeStr, getTimeOptions } from "unpacked/module-950.js";
import module1519 from "unpacked/module-1519.js";
const v = [
    "10m",
    "20m",
    "30m",
    "1h",
    "2h",
    "3h",
    "5h",
    "12h",
    "1d",
    "2d",
    "3d",
    "7d"
];
const g = {
    "10m": {
        times: 10,
        step: "1m"
    },
    "20m": {
        times: 10,
        step: "2m"
    },
    "30m": {
        times: 10,
        step: "3m"
    },
    "1h": {
        times: 10,
        step: "6m"
    },
    "2h": {
        times: 10,
        step: "12m"
    },
    "3h": {
        times: 10,
        step: "18m"
    },
    "5h": {
        times: 10,
        step: "30m"
    },
    "12h": {
        times: 12,
        step: "60m"
    },
    "1d": {
        times: 24,
        step: "60m"
    },
    "2d": {
        times: 48,
        step: "60m"
    },
    "3d": {
        times: 72,
        step: "60m"
    },
    "7d": {
        times: 178,
        step: "60m"
    }
};
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.handleClick = function(t) {
            const value = t.target.dataset.value;
            if (value) {
                const { times = 10, step = "30m" } = g[value];
                e.props.onChange({
                    step,
                    times,
                    start: "",
                    end: "",
                    lastTime: value
                });
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { step, times } = props;
                const n = getTimeOptions(v);
                const u = getLastTimeStr(step, times);
                return <div className={module1519.default}><div className={module1519.title}>{t("SELECT_TIME_RANGE")}</div><ul onClick={this.handleClick}>{n.map(({ label, value })=><li key={label} data-value={value} className={module3(module31({}, module1519.cur, value === u))}>{t("LAST_TIME", {
                        value: label
                    })}</li>)}</ul></div>;
            }
        }
    ]);
    return r;
})(Component);
export default y;
y.propTypes = {
    step: module1.string,
    times: module1.number,
    onChange: module1.func
};
y.defaultProps = {
    step: "10m",
    times: 30,
    onChange: function() {}
};
