import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component, Fragment } from "unpacked/module-553.js";
import module60 from "unpacked/module-60.js";
import module63 from "unpacked/module-63.js";
import module3226 from "unpacked/module-3226.js";
const m = ((Component_1)=>{
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
    function a(...u_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...u_1);
        e.getMaxHeight = function() {
            const e_props = e.props;
            const { heights, index } = e_props;
            return Math.max(...[].concat(module61(heights[index] || []), module61(heights[index + 1] || [])));
        };
        e.onInsertColumn = function(t) {
            return function() {
                e.props.onInsertColumn(t);
            };
        };
        e.renderLines = function(t, a) {
            if (module60(t)) {
                return t.map((r, n)=>{
                    if (n === t.length - 1) {
                        return null;
                    }
                    return <Fragment key={n}>{e.renderLine(r, a)}</Fragment>;
                });
            }
            return null;
        };
        e.renderEditLines = function() {
            const e_props = e.props;
            const { heights, index, isEditMode } = e_props;
            const l = [];
            if (!module60(heights) || !isEditMode) {
                return null;
            }
            if (module60(heights[index]) && !module63(heights[index])) {
                const { length, last = length - 1 } = heights[index];
                l.push(e.renderLine(heights[index][last] - 50, "left", true));
            }
            if (module60(heights[index + 1]) && !module63(heights[index + 1])) {
                const { length, last = length - 1 } = heights[index + 1];
                l.push(e.renderLine(heights[index + 1][last] - 50, "right", true));
            }
            return l;
        };
        return e;
    }
    module37(a, [
        {
            key: "getRightLinePath",
            value: function(e) {
                if (e) {
                    e += -4;
                    return `M${35} ${6}  V ${e - 10} Q ${35}, ${e} ${45}, ${e} H ${64}`;
                }
                return `M ${35} ${6} H ${64}`;
            }
        },
        {
            key: "getLeftLinePath",
            value: function(e) {
                if (e) {
                    e += -4;
                    return `M${6} ${e} H ${25} Q ${35},${e} ${35},${e - 10} V ${6}`;
                }
                return `M${6} ${6} H ${35}`;
            }
        },
        {
            key: "renderEditButton",
            value: function() {
                const props = this.props;
                const e_index = props.index;
                if (props.isEditMode) {
                    return <g className={module3226.editButton}><circle cx={35} cy={6} r="10" stroke="#d8dee5" strokeDasharray="3,3" fill="white" strokeWidth={2} onClick={this.onInsertColumn(e_index + 1)}/><line x1={30} x2={40} y1={6} y2={6} stroke="black"/><line x1={35} x2={35} y1={1} y2={11} stroke="black"/></g>;
                }
            }
        },
        {
            key: "renderLine",
            value: function(e, t, a) {
                if (t === "left") {
                    return <path key={`left-${this.props.index}`} d={this.getLeftLinePath(e)} stroke={a ? "#d8dee5" : "black"} strokeWidth={2} fill="none" markerStart={`url(#path-marker-${a ? "grey" : "black"})`} markerEnd={`url(#path-marker-${a ? "grey" : "black"})`}/>;
                }
                return <path key={`right-${this.props.index}`} d={this.getRightLinePath(e)} stroke={a ? "#d8dee5" : "black"} strokeWidth={2} fill="none" markerStart={`url(#path-marker-${a ? "grey" : "black"})`} markerEnd={`url(#path-marker-${a ? "grey" : "black"})`}/>;
            }
        },
        {
            key: "renderFirstLines",
            value: function() {
                return <>{this.renderLine(0, "right")}{this.renderLine(0, "left")}</>;
            }
        },
        {
            key: "renderBoldLines",
            value: function() {
                const props = this.props;
                const { heights, index } = props;
                return <>{this.renderLines(heights[index], "left")}{this.renderLines(heights[index + 1], "right")}</>;
            }
        },
        {
            key: "renderEdges",
            value: function() {
                return <svg xmlns="http://www.w3.org/2000/svg"><defs><marker id="path-marker-black" viewBox="0 0 12 12" refX="6" refY="6" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><circle cx={6} cy={6} r={5} fill="#329dce"/></marker><marker id="path-marker-grey" viewBox="0 0 12 12" refX="6" refY="6" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><circle cx={6} cy={6} r={5} fill="#d8dee5"/></marker></defs>{this.renderEditLines()}{this.renderBoldLines()}{this.renderFirstLines()}{this.renderEditButton()}</svg>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { heights, index, posision, isEditMode } = props;
                if (isEditMode || index !== heights.length - 1) {
                    return <><div className={module3226.connects__column} style={{
                        height: `${this.getMaxHeight() + 32}px`
                    }}>{this.renderEdges()}{isEditMode && !index && posision === "Right" ? this.renderEditButton() : null}</div></>;
                }
                return <div className={module3226.connects__column}/>;
            }
        }
    ]);
    return a;
})(Component);
export default m;
