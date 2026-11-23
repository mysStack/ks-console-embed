import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-18.js";
import "./module-97.js";
import "./module-16.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module446 from "./module-446.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import { getLocalTime } from "./module-52.js";
import { formatRelativeDate } from "./module-1022.js";
import module186 from "./module-186.js";
import module1918 from "./module-1918.js";
const y = function({ key, value }) {
    return key === "error" && (value === true || value === "true");
};
const E = ((Component_1)=>{
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
            const e_props = e.props;
            e_props.onClick(e_props.detail);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, detail } = props;
                if (!detail) {
                    return null;
                }
                const { duration, durationPercent, services, startTime, spans, traceName, serviceColorMap } = detail;
                const E = getLocalTime(startTime / 1000);
                const b = E.format("HH:mm:ss");
                const _ = E.fromNow();
                const spans_length = spans.length;
                const length = spans.filter((e)=>e.tags.some(y)).length;
                return <div className={module3(module1918.item, className)} onClick={this.handleClick}><div className={module1918.header}><div className={module1918.title}>{traceName}</div><div className={module1918.duration}><module186.Icon name="timed-task"/>{`${duration / 1000} ms`}</div><div className={module1918.durationBar} style={{
                    width: `${durationPercent}%`,
                    borderTopRightRadius: durationPercent === 100 ? 4 : 0
                }}/></div><div className={module1918.content}><div className={module1918.spanWrapper}><div className={module1918.spans}>{spans_length === 1 ? t("NUM_SPAN_SI", {
                    num: spans_length
                }) : t("NUM_SPAN_PL", {
                    num: spans_length
                })}</div>{length > 0 && <div className={module1918.errorSpans}>{length === 1 ? t("NUM_ERROR_SI", {
                    num: length
                }) : t("NUM_ERROR_PL", {
                    num: length
                })}</div>}</div><ul className={module1918.services}>{module446(services, "name").map((e)=><li key={e.name}><span className={module1918.tag} style={{
                        backgroundColor: serviceColorMap[e.name]
                    }}/>{`${e.name} (${e.numberOfSpans})`}</li>)}</ul><div className={module1918.startTime}><p>{formatRelativeDate(startTime / 1000)}  |  <strong>{b}</strong></p><p>{_}</p></div></div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default E;
E.propTypes = {
    className: module1.string,
    onClick: module1.func,
    detail: module1.object,
    durationPercent: module1.number
};
E.defaultProps = {
    onClick: function() {},
    durationPercent: 0,
    detail: {}
};
