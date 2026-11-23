import "./module-15.js";
import "./module-18.js";
import "./module-190.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import { Component, createRef } from "./module-553.js";
import { COORD_COUNT, formatDuration } from "./module-1022.js";
import module1920 from "./module-1920.js";
const p = ((Component_1)=>{
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
        t.handleMouseDown = function(e) {
            t.originX = e.x;
            t.hideCursorGuide();
            const t_svgBound = t.svgBound;
            const { left, width } = t_svgBound;
            const l = Math.max(e.x - left, 0) / width;
            t.setState({
                viewStart: l,
                viewEnd: l
            });
        };
        t.handleMouseUp = function() {
            t.originX = -1;
            const t_state = t.state;
            const { viewStart, viewEnd } = t_state;
            if (Math.abs(viewStart - viewEnd) > 0.01) {
                t.props.onRangeChange({
                    viewStart,
                    viewEnd
                });
            }
        };
        t.handleMouseLeave = function() {
            t.hideCursorGuide();
        };
        t.handleMouseMove = function(e) {
            if (t.originX > -1) {
                const a = t.svgBound;
                const { left, width } = a;
                const l = Math.max(e.x - left, 0) / width;
                if (l > t.state.viewStart) {
                    t.setState({
                        viewEnd: l
                    });
                } else {
                    t.setState({
                        viewStart: l
                    });
                }
            } else {
                t.showCursorGuide(e);
            }
        };
        t.handleClear = function() {
            t.props.onRangeChange({
                viewStart: 0,
                viewEnd: 1
            });
        };
        t.showCursorGuide = function(e) {
            if (t.cursorGuide) {
                const a = t.svgBound;
                const { left, width } = a;
                const l = Math.max(e.x - left, 0) / width;
                const u = `${100 * l}%`;
                for(let o = 0; o < t.cursorGuide.children.length; o++){
                    t.cursorGuide.children[o].setAttribute("x1", u);
                    t.cursorGuide.children[o].setAttribute("x2", u);
                    t.cursorGuide.children[o].setAttribute("stroke-opacity", 1);
                }
            }
        };
        t.hideCursorGuide = function() {
            if (t.cursorGuide) {
                for(let e = 0; e < t.cursorGuide.children.length; e++){
                    t.cursorGuide.children[e].setAttribute("stroke-opacity", 0);
                }
            }
        };
        t.svg = createRef();
        t.originX = -1;
        t.state = {
            viewStart: e.viewRange.viewStart,
            viewEnd: e.viewRange.viewEnd
        };
        return t;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                const viewRange = this.props.viewRange;
                if (viewRange.viewStart !== e.viewRange.viewStart) {
                    this.setState({
                        viewStart: viewRange.viewStart
                    });
                }
                if (viewRange.viewEnd !== e.viewRange.viewEnd) {
                    this.setState({
                        viewEnd: viewRange.viewEnd
                    });
                }
            }
        },
        {
            key: "componentDidMount",
            value: function() {
                if (this.svg && this.svg.current) {
                    this.svg.current.addEventListener("mousedown", this.handleMouseDown);
                    this.svg.current.addEventListener("mousemove", this.handleMouseMove);
                    this.svg.current.addEventListener("mouseup", this.handleMouseUp);
                    this.svg.current.addEventListener("mouseleave", this.handleMouseLeave);
                    this.svgBound = this.svg.current.getBoundingClientRect();
                    this.cursorGuide = this.svg.current.querySelector('[name="cursor-guide"]');
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.svg && this.svg.current) {
                    this.svg.current.removeEventListener("mousedown", this.handleMouseDown);
                    this.svg.current.removeEventListener("mousemove", this.handleMouseMove);
                    this.svg.current.removeEventListener("mouseup", this.handleMouseUp);
                    this.svg.current.removeEventListener("mouseleave", this.handleMouseLeave);
                }
            }
        },
        {
            key: "getCoords",
            value: function() {
                const duration = this.props.data.duration;
                const t = (duration / COORD_COUNT).toFixed(2);
                const a = 100 / COORD_COUNT;
                const r = [];
                for(let n = 0; n < COORD_COUNT; n++){
                    r.push({
                        value: n * t,
                        percent: `${n * a}%`
                    });
                }
                r.push({
                    value: duration,
                    percent: "100%"
                });
                return r;
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { viewStart, viewEnd } = state;
                const n = viewStart > 0 && viewEnd < 1;
                const l = `${100 * viewStart}%`;
                const u = `${100 * viewEnd}%`;
                const o = this.getCoords();
                return <div className={module1920.range}><svg height="100%" width="100%" ref={this.svg}><g className={module1920.coord}>{o.map((e, t)=><g key={e.value} className={module1920.coordLine}><line y1="0%" y2="100%" x1={e.percent} x2={e.percent}/><text x={e.percent} y={12} transform={t === COORD_COUNT ? "translate(-2,0)" : "translate(2,0)"} textAnchor={t === COORD_COUNT ? "end" : "start"}>{formatDuration(e.value)}</text></g>)}</g><g className={module1920.cursorGuide} name="cursor-guide"><line y1={0} y2={58} strokeWidth="1" stroke="#212b36" strokeOpacity="0" strokeDasharray="2,2"/><line y1={19} y2={41} stroke="#242e42" strokeWidth="4" strokeOpacity="0" strokeLinecap="round"/><line y1={0} y2={58} strokeWidth="20" stroke="transparent"/></g>{n && <g className={module1920.scrubber}><line className={module1920.scrubberLine} y1="0%" y2="100%" x1={l} x2={l}/><line className={module1920.scrubberLine} y1="0%" y2="100%" x1={u} x2={u}/></g>}</svg>{n && <><div className={module1920.hoverBlock} style={{
                    left: 0,
                    width: l
                }}/><div className={module1920.hoverBlock} style={{
                    left: u,
                    width: `${100 * (1 - viewEnd)}%`
                }}/><div className={module1920.clearBlock} onClick={this.handleClear}>{t("CLEAR")}</div></>}</div>;
            }
        }
    ]);
    return r;
})(Component);
export default p;
