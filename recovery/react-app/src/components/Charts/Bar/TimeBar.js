import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-62.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-319.js";
import "unpacked/module-57.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module243 from "unpacked/module-243.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module1034 from "unpacked/module-1034.js";
import module870 from "unpacked/module-870.js";
import module871 from "unpacked/module-871.js";
import module1279 from "unpacked/module-1279.js";
import module872 from "unpacked/module-872.js";
import { timestampify } from "utils/monitoring";
import module3402 from "unpacked/module-3402.js";
const S = ((e)=>{
    module55(r, e);
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
    function r(...l_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...l_1);
        e.xTickFormatter = function(t) {
            const a = e.props.interval.match(/\d+(\w+)/) || [];
            const r = module96(a, 2)[1];
            const n = r === undefined ? "s" : r;
            const l = parseInt(t, 10);
            return module243(l).format({
                s: "HH:mm:ss",
                m: "HH:mm",
                h: "HH:mm",
                d: "MM/DD",
                M: "YYYY/MM",
                Y: "YYYY"
            }[n]);
        };
        e.labelFormatter = function(a) {
            const r = a;
            const n = r + timestampify(e.props.interval);
            const l = module243(r);
            const u = module243(n);
            const o = l.isSame(u, "day");
            const i = `YYYY/MM/DD HH:mm:ss`;
            const c = l.format(i);
            const s = u.format(i);
            const f = o ? `${c} ~ ${u.format("HH:mm:ss")}` : `${c} ~ ${s}`;
            return `${t("TIME_RANGE")} : ${f}`;
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { title, className, data, xKey, tooltipCursor } = props;
                return module553.default.createElement("div", {
                    className: module3(module3402.wrapper, className)
                }, title, module553.default.createElement(module872, {
                    width: "100%",
                    height: "100%",
                    debounce: 1
                }, module553.default.createElement(module1279, {
                    data
                }, module553.default.createElement(module871, {
                    dataKey: xKey,
                    tickFormatter: this.xTickFormatter,
                    tickLine: false
                }), module553.default.createElement(module870, {
                    cursor: tooltipCursor,
                    labelFormatter: this.labelFormatter
                }), this.renderBars())));
            }
        },
        {
            key: "renderBars",
            value: function() {
                const props = this.props;
                const { legend, onBarClick } = props;
                return legend.map((e)=>{
                    const t = module96(e, 2);
                    const r = t[0];
                    const name = t[1];
                    return module553.default.createElement(module1034, {
                        key: r,
                        dataKey: r,
                        onClick: onBarClick,
                        name,
                        maxBarSize: 40
                    });
                });
            }
        }
    ]);
    return r;
})(module553.Component);
S.propTypes = {
    title: module1.string,
    xKey: module1.string,
    onBarClick: module1.func,
    tooltipCursor: module1.oneOfType([
        module1.object,
        module1.bool
    ]),
    data: module1.array.isRequired,
    interval: module1.string.isRequired,
    legend: module1.arrayOf(module1.array)
};
S.defaultProps = {
    tooltipCursor: false,
    onBarClick: function() {}
};
export default S;
