import "./module-15.js";
import "./module-5.js";
import "./module-16.js";
import "./module-190.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import { Component } from "./module-553.js";
import module3 from "./module-3.js";
import module186 from "./module-186.js";
import { formatDuration, isErrorSpan } from "./module-1022.js";
import module4779 from "./module-4779.js";
function h(e) {
    return `${(100 * e).toFixed(1)}%`;
}
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
    function a(...n) {
        let e;
        module36(this, a);
        e = t.call(this, ...n);
        e.handleClick = function() {
            const e_props = e.props;
            e_props.onClick(e_props.span);
        };
        return e;
    }
    module37(a, [
        {
            key: "render",
            value: function() {
                let e;
                const props = this.props;
                const { span: span_1, color, getViewedBounds, selected } = props;
                const o = isErrorSpan(span_1);
                const i = formatDuration(span_1.duration);
                const c = getViewedBounds(span_1.startTime, span_1.startTime + span_1.duration);
                e = c.start > 1 - c.end ? "Left" : "Right";
                return <li className={module3(module4779.wrapper, module31({}, module4779.selected, selected))} onClick={this.handleClick}><module186.Columns className="is-gapless"><module186.Column className="is-3"><div className={module4779.nameWrapper}><span className={module4779.padder} style={{
                    paddingLeft: 12 * (span_1.depth + 1)
                }}/><a className={module4779.name} style={{
                    borderColor: color
                }}><span className={module4779.svc}>{o && <module186.Icon name="error" color={{
                    primary: "#fff",
                    secondary: "#ea4641"
                }}/>}{span_1.process.serviceName} </span><span className={module4779.endpoint}>{span_1.operationName}</span></a></div></module186.Column><module186.Column className="margin-l12 margin-r12"><div className={module4779.barWrapper}><div className={module4779.bar} style={{
                    backgroundColor: color,
                    left: h(c.start),
                    width: h(c.end - c.start)
                }}><div className={module3(module4779.barLabel, module4779[`barLabel${e}`])}>{i}</div></div></div></module186.Column></module186.Columns></li>;
            }
        }
    ]);
    return a;
})(Component);
export default v;
