import module1085 from "unpacked/module-1085.js";
import module194 from "unpacked/module-194.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import { scalePoint } from "unpacked/module-2017.js";
import { getValueByDataKey } from "unpacked/module-912.js";
import module869 from "unpacked/module-869.js";
import module1032 from "unpacked/module-1032.js";
import { isNumber } from "unpacked/module-827.js";
import { generatePrefixStyle } from "unpacked/module-2157.js";
function h() {
    if (typeof WeakMap !== "function") {
        return null;
    }
    const weakMap = new WeakMap;
    h = function() {
        return weakMap;
    };
    return weakMap;
}
function g(e) {
    return (g = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
        return typeof e;
    } : function(e) {
        if (e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype) {
            return "symbol";
        }
        return typeof e;
    })(e);
}
function m(e, t, n) {
    if (t in e) {
        Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        e[t] = n;
    }
    return e;
}
function b(e, t) {
    for (const r of t){
        r.enumerable = r.enumerable || false;
        r.configurable = true;
        if ("value" in r) {
            r.writable = true;
        }
        Object.defineProperty(e, r.key, r);
    }
}
function x(e) {
    return (x = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function w(e) {
    if (e === undefined) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return e;
}
function _(e, t) {
    return (_ = Object.setPrototypeOf || function(e, t) {
        e.__proto__ = t;
        return e;
    })(e, t);
}
const Brush = ((e)=>{
    function t(e) {
        let n;
        ((e, t)=>{
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function");
            }
        })(this, t);
        n = ((e, t)=>{
            if (!t || g(t) !== "object" && typeof t !== "function") {
                return w(e);
            }
            return t;
        })(this, x(t).call(this, e));
        n.handleDrag = function(e) {
            if (n.leaveTimer) {
                clearTimeout(n.leaveTimer);
                n.leaveTimer = null;
            }
            if (n.state.isTravellerMoving) {
                n.handleTravellerMove(e);
            } else if (n.state.isSlideMoving) {
                n.handleSlideDrag(e);
            }
        };
        n.handleTouchMove = function(e) {
            if (e.changedTouches != null && e.changedTouches.length > 0) {
                n.handleDrag(e.changedTouches[0]);
            }
        };
        n.handleDragEnd = function() {
            n.setState({
                isTravellerMoving: false,
                isSlideMoving: false
            });
        };
        n.handleLeaveWrapper = function() {
            if (n.state.isTravellerMoving || n.state.isSlideMoving) {
                n.leaveTimer = setTimeout(n.handleDragEnd, n.props.leaveTimeOut);
            }
        };
        n.handleEnterSlideOrTraveller = function() {
            n.setState({
                isTextActive: true
            });
        };
        n.handleLeaveSlideOrTraveller = function() {
            n.setState({
                isTextActive: false
            });
        };
        n.handleSlideDragStart = function(e) {
            const t = e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e;
            n.setState({
                isTravellerMoving: false,
                isSlideMoving: true,
                slideMoveStartX: t.pageX
            });
        };
        n.travellerDragStartHandlers = {
            startX: n.handleTravellerDragStart.bind(w(n), "startX"),
            endX: n.handleTravellerDragStart.bind(w(n), "endX")
        };
        n.state = e.data && e.data.length ? n.updateScale(e) : {};
        return n;
    }
    let n;
    let a;
    let h;
    ((e, t)=>{
        if (typeof t !== "function" && t !== null) {
            throw new TypeError("Super expression must either be null or a function");
        }
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: true,
                configurable: true
            }
        });
        if (t) {
            _(e, t);
        }
    })(t, e);
    n = t;
    h = [
        {
            key: "getIndexInRange",
            value: function(e, t) {
                for(var n = 0, r = e.length - 1; r - n > 1;){
                    const o = Math.floor((n + r) / 2);
                    if (e[o] > t) {
                        r = o;
                    } else {
                        n = o;
                    }
                }
                if (t >= e[r]) {
                    return r;
                }
                return n;
            }
        }
    ];
    if (a = [
        {
            key: "componentWillReceiveProps",
            value: function(e) {
                const _this = this;
                const props = this.props;
                const { data, width, x, travellerWidth, updateId } = props;
                if ((e.data !== data || e.updateId !== updateId) && e.data && e.data.length) {
                    this.setState(this.updateScale(e));
                } else if (!(e.width === width && e.x === x && e.travellerWidth === travellerWidth)) {
                    this.scale.range([
                        e.x,
                        e.x + e.width - e.travellerWidth
                    ]);
                    this.scaleValues = this.scale.domain().map((e)=>_this.scale(e));
                    this.setState({
                        startX: this.scale(e.startIndex),
                        endX: this.scale(e.endIndex)
                    });
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                this.scale = null;
                this.scaleValues = null;
                if (this.leaveTimer) {
                    clearTimeout(this.leaveTimer);
                    this.leaveTimer = null;
                }
            }
        },
        {
            key: "getIndex",
            value: function({ startX, endX }) {
                const props = this.props;
                const r_gap = props.gap;
                const i = props.data.length - 1;
                const a = Math.min(startX, endX);
                const l = Math.max(startX, endX);
                const u = this.constructor.getIndexInRange(this.scaleValues, a);
                const s = this.constructor.getIndexInRange(this.scaleValues, l);
                return {
                    startIndex: u - u % r_gap,
                    endIndex: s === i ? i : s - s % r_gap
                };
            }
        },
        {
            key: "getTextOfTick",
            value: function(e) {
                const props = this.props;
                const { data, tickFormatter, dataKey } = props;
                const a = getValueByDataKey(data[e], dataKey, e);
                if (module194(tickFormatter)) {
                    return tickFormatter(a);
                }
                return a;
            }
        },
        {
            key: "handleSlideDrag",
            value: function(e) {
                const state = this.state;
                const { slideMoveStartX, startX, endX } = state;
                const props = this.props;
                const { x, width, travellerWidth, startIndex, endIndex, onChange } = props;
                let d = e.pageX - slideMoveStartX;
                if (d > 0) {
                    d = Math.min(d, x + width - travellerWidth - endX, x + width - travellerWidth - startX);
                } else if (d < 0) {
                    d = Math.max(d, x - startX, x - endX);
                }
                const p = this.getIndex({
                    startX: startX + d,
                    endX: endX + d
                });
                if (!(p.startIndex === startIndex && p.endIndex === endIndex || !onChange)) {
                    onChange(p);
                }
                this.setState({
                    startX: startX + d,
                    endX: endX + d,
                    slideMoveStartX: e.pageX
                });
            }
        },
        {
            key: "handleTravellerDragStart",
            value: function(movingTravellerId, t) {
                const n = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t;
                this.setState({
                    isSlideMoving: false,
                    isTravellerMoving: true,
                    movingTravellerId,
                    brushMoveStartX: n.pageX
                });
            }
        },
        {
            key: "handleTravellerMove",
            value: function(e) {
                let t;
                const state = this.state;
                const { brushMoveStartX, movingTravellerId, endX, startX } = state;
                const l = this.state[movingTravellerId];
                const props = this.props;
                const { x: x_1, width, travellerWidth, onChange, gap, data } = props;
                const v = {
                    startX: this.state.startX,
                    endX: this.state.endX
                };
                let g = e.pageX - brushMoveStartX;
                if (g > 0) {
                    g = Math.min(g, x_1 + width - travellerWidth - l);
                } else if (g < 0) {
                    g = Math.max(g, x_1 - l);
                }
                v[movingTravellerId] = l + g;
                const y = this.getIndex(v);
                const { startIndex, endIndex } = y;
                this.setState((m(t = {}, movingTravellerId, l + g), m(t, "brushMoveStartX", e.pageX), t), function() {
                    let e;
                    if (onChange) {
                        e = data.length - 1;
                        if (movingTravellerId === "startX" && (endX > startX ? startIndex % gap == 0 : endIndex % gap == 0) || endX < startX && endIndex === e || movingTravellerId === "endX" && (endX > startX ? endIndex % gap == 0 : startIndex % gap == 0) || endX > startX && endIndex === e) {
                            onChange(y);
                        }
                    }
                });
            }
        },
        {
            key: "updateScale",
            value: function(e) {
                const _this = this;
                const { data, startIndex, endIndex, x, width, travellerWidth } = e;
                const data_length = data.length;
                this.scale = scalePoint().domain(module1085(0, data_length)).range([
                    x,
                    x + width - travellerWidth
                ]);
                this.scaleValues = this.scale.domain().map((e)=>_this.scale(e));
                return {
                    isTextActive: false,
                    isSlideMoving: false,
                    isTravellerMoving: false,
                    startX: this.scale(startIndex),
                    endX: this.scale(endIndex)
                };
            }
        },
        {
            key: "renderBackground",
            value: function() {
                const props = this.props;
                const { x, y, width, height, fill, stroke } = props;
                return module553.default.createElement("rect", {
                    stroke,
                    fill,
                    x,
                    y,
                    width,
                    height
                });
            }
        },
        {
            key: "renderPanorama",
            value: function() {
                const props = this.props;
                const { x, y, width, height, data, children, padding } = props;
                const s = module553.Children.only(children);
                if (s) {
                    return module553.default.cloneElement(s, {
                        x,
                        y,
                        width,
                        height,
                        margin: padding,
                        compact: true,
                        data
                    });
                }
                return null;
            }
        },
        {
            key: "renderTraveller",
            value: function(e, t) {
                const props = this.props;
                const { y, travellerWidth, height, stroke } = props;
                const u = Math.floor(y + height / 2) - 1;
                const x_1 = Math.max(e, this.props.x);
                return module553.default.createElement(module869, {
                    className: "recharts-brush-traveller",
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.travellerDragStartHandlers[t],
                    onTouchStart: this.travellerDragStartHandlers[t],
                    style: {
                        cursor: "col-resize"
                    }
                }, module553.default.createElement("rect", {
                    x: x_1,
                    y,
                    width: travellerWidth,
                    height,
                    fill: stroke,
                    stroke: "none"
                }), module553.default.createElement("line", {
                    x1: x_1 + 1,
                    y1: u,
                    x2: x_1 + travellerWidth - 1,
                    y2: u,
                    fill: "none",
                    stroke: "#fff"
                }), module553.default.createElement("line", {
                    x1: x_1 + 1,
                    y1: u + 2,
                    x2: x_1 + travellerWidth - 1,
                    y2: u + 2,
                    fill: "none",
                    stroke: "#fff"
                }));
            }
        },
        {
            key: "renderSlide",
            value: function(e, t) {
                const props = this.props;
                const { y, height, stroke } = props;
                return module553.default.createElement("rect", {
                    className: "recharts-brush-slide",
                    onMouseEnter: this.handleEnterSlideOrTraveller,
                    onMouseLeave: this.handleLeaveSlideOrTraveller,
                    onMouseDown: this.handleSlideDragStart,
                    onTouchStart: this.handleSlideDragStart,
                    style: {
                        cursor: "move"
                    },
                    stroke: "none",
                    fill: stroke,
                    fillOpacity: 0.2,
                    x: Math.min(e, t),
                    y,
                    width: Math.abs(t - e),
                    height
                });
            }
        },
        {
            key: "renderText",
            value: function() {
                const props = this.props;
                const { startIndex, endIndex, y, height, travellerWidth, stroke } = props;
                const state = this.state;
                const { startX, endX } = state;
                const p = {
                    pointerEvents: "none",
                    fill: stroke
                };
                return module553.default.createElement(module869, {
                    className: "recharts-brush-texts"
                }, module553.default.createElement(module1032, {
                    textAnchor: "end",
                    verticalAnchor: "middle",
                    x: Math.min(startX, endX) - 5,
                    y: y + height / 2,
                    ...p
                }, this.getTextOfTick(startIndex)), module553.default.createElement(module1032, {
                    textAnchor: "start",
                    verticalAnchor: "middle",
                    x: Math.max(startX, endX) + travellerWidth + 5,
                    y: y + height / 2,
                    ...p
                }, this.getTextOfTick(endIndex)));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { data, className, children, x: x_1, y: y_1, width, height, alwaysShowText } = props;
                const state = this.state;
                const { startX, endX, isTextActive, isSlideMoving, isTravellerMoving } = state;
                if (!data || !data.length || !isNumber(x_1) || !isNumber(y_1) || !isNumber(width) || !isNumber(height) || width <= 0 || height <= 0) {
                    return null;
                }
                const className_1 = module3("recharts-brush", className);
                const w = module553.default.Children.count(children) === 1;
                const style = generatePrefixStyle("userSelect", "none");
                return module553.default.createElement(module869, {
                    className: className_1,
                    onMouseMove: this.handleDrag,
                    onMouseLeave: this.handleLeaveWrapper,
                    onMouseUp: this.handleDragEnd,
                    onTouchEnd: this.handleDragEnd,
                    onTouchMove: this.handleTouchMove,
                    style
                }, this.renderBackground(), w && this.renderPanorama(), this.renderSlide(startX, endX), this.renderTraveller(startX, "startX"), this.renderTraveller(endX, "endX"), (isTextActive || isSlideMoving || isTravellerMoving || alwaysShowText) && this.renderText());
            }
        }
    ]) {
        b(n.prototype, a);
    }
    if (h) {
        b(n, h);
    }
    return t;
})(module553.PureComponent);
Brush.displayName = "Brush";
Brush.propTypes = {
    className: module1.string,
    fill: module1.string,
    stroke: module1.string,
    x: module1.number,
    y: module1.number,
    width: module1.number,
    height: module1.number.isRequired,
    travellerWidth: module1.number,
    gap: module1.number,
    padding: module1.shape({
        top: module1.number,
        right: module1.number,
        bottom: module1.number,
        left: module1.number
    }),
    dataKey: module1.oneOfType([
        module1.string,
        module1.number,
        module1.func
    ]),
    data: module1.array,
    startIndex: module1.number,
    endIndex: module1.number,
    tickFormatter: module1.func,
    children: module1.node,
    onChange: module1.func,
    updateId: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    leaveTimeOut: module1.number,
    alwaysShowText: module1.bool
};
Brush.defaultProps = {
    height: 40,
    travellerWidth: 5,
    gap: 1,
    fill: "#fff",
    stroke: "#666",
    padding: {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
    },
    leaveTimeOut: 1000,
    alwaysShowText: false
};
export default Brush;
