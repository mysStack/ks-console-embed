import "./module-15.js";
import "./module-5.js";
import "./module-18.js";
import "./module-87.js";
import "./module-27.js";
import "./module-1200.js";
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
import { Component, createRef } from "./module-553.js";
import module1 from "./module-1.js";
import module837 from "./module-837.js";
import module1039 from "./module-1039.js";
import module186 from "./module-186.js";
import module3300 from "./module-3300.js";
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
        t.triggerChange = function({ right }) {
            const t_props = t.props;
            const r_marks = t_props.marks;
            t_props.onChange(t.getValueFromPercent(r_marks, right));
        };
        t.handleResize = function() {
            t.rect = t.ref.current.getBoundingClientRect();
        };
        t.handleMouseDown = function(e) {
            document.addEventListener("mouseup", t.handleMouseUp);
            if (e.target.getAttribute("role") === "slider") {
                document.addEventListener("mousemove", t.handleMouseMove);
                t.type = e.target.dataset.type;
            } else if (t.ref.current.contains(e.target)) {
                let a = (e.x - t.rect.x) / t.rect.width * 100;
                if (a > t.endPercent) {
                    a = 100;
                }
                t.triggerChange({
                    right: a
                });
            }
        };
        t.handleMouseMove = function(e) {
            let a = 100 * (e.x - t.rect.x) / t.rect.width;
            if (a > t.endPercent) {
                a = 100;
            }
            if (a < 0) {
                a = 0;
            }
            return t.triggerChange({
                right: a
            });
        };
        t.handleMouseUp = function() {
            document.removeEventListener("mousemove", t.handleMouseMove);
        };
        t.totalWeight = e.marks.reduce((acc, mark)=>acc + (mark.weight || 1), 0) - 1;
        t.endPercent = 100 * t.totalWeight / (t.totalWeight + 1);
        t.state = t.getStateFromProps(e);
        t.ref = createRef();
        return t;
    }
    module37(r, [
        {
            key: "getValuePercent",
            value: function(e, t) {
                let a = 0;
                for(let r = 0; r < e.length - 1; r++){
                    const n = e[r].weight || 1;
                    if (t >= e[r + 1].value) {
                        a += n / this.totalWeight;
                    } else if (t >= e[r].value && t < e[r + 1].value) {
                        a += n * ((t - e[r].value) / (e[r + 1].value - e[r].value)) / this.totalWeight;
                    }
                }
                return a;
            }
        },
        {
            key: "getValueFromPercent",
            value: function(e, t) {
                const valueFormatter = this.props.valueFormatter;
                const r = this.totalWeight * t / 100;
                let n = 0;
                let l = 0;
                for(let o = 0; o < e.length - 1; o++){
                    const u = e[o].weight || 1;
                    if ((l += u) >= r && l < u + r) {
                        const c = (r + u - l) / u;
                        n = (e[o + 1].value - e[o].value) * c + e[o].value;
                    }
                }
                if (valueFormatter) {
                    return Number.parseInt(valueFormatter(n), 10);
                }
                return Number.parseInt(n, 10);
            }
        },
        {
            key: "getStateFromProps",
            value: function({ marks, value }) {
                return {
                    right: 100 * this.getValuePercent(marks, value)
                };
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!module837(e.value, this.props.value)) {
                    const right = this.getStateFromProps(this.props).right;
                    this.setState({
                        right
                    });
                }
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                if (this.ref && this.ref.current) {
                    this.ref.current.addEventListener("mousedown", this.handleMouseDown);
                    this.rect = this.ref.current.getBoundingClientRect();
                    window.addEventListener("resize", this.handleResize);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.ref && this.ref.current) {
                    this.ref.current.removeEventListener("mousedown", this.handleMouseDown);
                    document.removeEventListener("mousemove", this.handleMouseMove);
                    document.removeEventListener("mouseup", this.handleMouseUp);
                    window.removeEventListener("resize", this.handleResize);
                }
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const right = this.state.right;
                const props = this.props;
                const { value, unit, marks } = props;
                let u = 0;
                return <div className={module3300.slider} ref={this.ref}><div className={module3300.rail}/><div className={module3300.track} role="track" style={{
                    left: "0%",
                    width: `${right}%`
                }}/><module186.Tooltip content=<span>{module1039(value) ? `${value} ${unit}` : t("NO_LIMIT")}</span>><div className={module3300.handler} role="slider" data-type="right" style={{
                    left: `calc(${right}% - 10px)`
                }}/></module186.Tooltip><div className={module3300.mark}>{marks.map((t)=>{
                    const a = t.weight || 1;
                    const r = 100 * ((u += a) - a) / _this.totalWeight;
                    return <span key={t.value} style={{
                        left: `${r}%`
                    }}>{t.label}</span>;
                })}</div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default h;
h.propTypes = {
    marks: module1.array,
    value: module1.number,
    defaultValue: module1.array,
    unit: module1.string,
    onChange: module1.func,
    valueFormatter: module1.func
};
h.defaultProps = {
    marks: [],
    value: 0,
    unit: "",
    onChange: function() {}
};
