import { Component, PureComponent, cloneElement, createElement, isValidElement } from "./module-553.js";
import module803 from "./module-803.js";
import module1 from "./module-1.js";
import { a } from "./module-865.js";
import { a as a_1 } from "./module-1186.js";
import { a as a_3 } from "./module-1118.js";
import { a as a_4 } from "./module-1345.js";
import module2814 from "./module-2814.js";
import { a as a_5 } from "./module-899.js";
import { a as a_6 } from "./module-1191.js";
import Module2815 from "./module-2815.js";
import Module2816 from "./module-2816.js";
const l = (e, hsl, direction, r, container)=>{
    const { clientWidth, clientHeight } = container;
    const l = typeof e.pageX === "number" ? e.pageX : e.touches[0].pageX;
    const u = typeof e.pageY === "number" ? e.pageY : e.touches[0].pageY;
    const s = l - (container.getBoundingClientRect().left + window.pageXOffset);
    const c = u - (container.getBoundingClientRect().top + window.pageYOffset);
    if (direction === "vertical") {
        let f;
        f = c < 0 ? 0 : c > clientHeight ? 1 : Math.round(100 * c / clientHeight) / 100;
        if (hsl.a !== f) {
            return {
                h: hsl.h,
                s: hsl.s,
                l: hsl.l,
                a: f,
                source: "rgb"
            };
        }
    } else {
        let d;
        if (r !== (d = s < 0 ? 0 : s > clientWidth ? 1 : Math.round(100 * s / clientWidth) / 100)) {
            return {
                h: hsl.h,
                s: hsl.s,
                l: hsl.l,
                a: d,
                source: "rgb"
            };
        }
    }
    return null;
};
const u = {};
const s = (white, grey, size, canvas)=>{
    const o = `${white}-${grey}-${size}${canvas ? "-server" : ""}`;
    if (u[o]) {
        return u[o];
    }
    const i = ((white_1, grey_1, size_1, canvas_1)=>{
        if (typeof document === "undefined" && !canvas_1) {
            return null;
        }
        const o = canvas_1 ? new canvas_1 : document.createElement("canvas");
        o.width = 2 * size_1;
        o.height = 2 * size_1;
        const i = o.getContext("2d");
        if (i) {
            i.fillStyle = white_1;
            i.fillRect(0, 0, o.width, o.height);
            i.fillStyle = grey_1;
            i.fillRect(0, 0, size_1, size_1);
            i.translate(size_1, size_1);
            i.fillRect(0, 0, size_1, size_1);
            return o.toDataURL();
        }
        return null;
    })(white, grey, size, canvas);
    u[o] = i;
    return i;
};
const FComponent = function({ white, grey, size, renderers, borderRadius, boxShadow, children }) {
    const p = module803({
        default: {
            grid: {
                borderRadius,
                boxShadow,
                absolute: "0px 0px 0px 0px",
                background: `url(${s(white, grey, size, renderers.canvas)}) center left`
            }
        }
    });
    if (isValidElement(children)) {
        return cloneElement(children, {
            ...children.props,
            style: {
                ...children.props.style,
                ...p.grid
            }
        });
    }
    return <div style={p.grid}/>;
};
FComponent.defaultProps = {
    size: 8,
    white: "transparent",
    grey: "rgba(0,0,0,.08)",
    renderers: {}
};
const D = FComponent;
class Y extends (PureComponent || Component) {
    constructor(...i){
        super(...i);
        var _this = this;
        this.handleChange = function(e) {
            const t = l(e, _this.props.hsl, _this.props.direction, _this.props.a, _this.container);
            if (t && typeof _this.props.onChange === "function") {
                _this.props.onChange(t, e);
            }
        };
        this.handleMouseDown = function(e) {
            _this.handleChange(e);
            window.addEventListener("mousemove", _this.handleChange);
            window.addEventListener("mouseup", _this.handleMouseUp);
        };
        this.handleMouseUp = function() {
            _this.unbindEventListeners();
        };
        this.unbindEventListeners = function() {
            window.removeEventListener("mousemove", _this.handleChange);
            window.removeEventListener("mouseup", _this.handleMouseUp);
        };
    }
    componentWillUnmount() {
        this.unbindEventListeners();
    }
    render() {
        const _this = this;
        const rgb = this.props.rgb;
        const n = module803({
            default: {
                alpha: {
                    absolute: "0px 0px 0px 0px",
                    borderRadius: this.props.radius
                },
                checkboard: {
                    absolute: "0px 0px 0px 0px",
                    overflow: "hidden",
                    borderRadius: this.props.radius
                },
                gradient: {
                    absolute: "0px 0px 0px 0px",
                    background: `linear-gradient(to right, rgba(${rgb.r},${rgb.g},${rgb.b}, 0) 0%,
           rgba(${rgb.r},${rgb.g},${rgb.b}, 1) 100%)`,
                    boxShadow: this.props.shadow,
                    borderRadius: this.props.radius
                },
                container: {
                    position: "relative",
                    height: "100%",
                    margin: "0 3px"
                },
                pointer: {
                    position: "absolute",
                    left: `${100 * rgb.a}%`
                },
                slider: {
                    width: "4px",
                    borderRadius: "1px",
                    height: "8px",
                    boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                    background: "#fff",
                    marginTop: "1px",
                    transform: "translateX(-2px)"
                }
            },
            vertical: {
                gradient: {
                    background: `linear-gradient(to bottom, rgba(${rgb.r},${rgb.g},${rgb.b}, 0) 0%,
           rgba(${rgb.r},${rgb.g},${rgb.b}, 1) 100%)`
                },
                pointer: {
                    left: 0,
                    top: `${100 * rgb.a}%`
                }
            },
            overwrite: {
                ...this.props.style
            }
        }, {
            vertical: this.props.direction === "vertical",
            overwrite: true
        });
        return <div style={n.alpha}><div style={n.checkboard}>{<D renderers={this.props.renderers}/>}</div><div style={n.gradient}/><div style={n.container} ref={function(t) {
            return _this.container = t;
        }} onMouseDown={this.handleMouseDown} onTouchMove={this.handleChange} onTouchStart={this.handleChange}><div style={n.pointer}>{this.props.pointer ? createElement(this.props.pointer, this.props) : <div style={n.slider}/>}</div></div></div>;
    }
}
const b = [
    38,
    40
];
let x = 1;
class W extends (PureComponent || Component) {
    constructor(e){
        var n = ((e, t)=>{
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            if (!t || typeof t !== "object" && typeof t !== "function") {
                return e;
            }
            return t;
        })(this, super());
        n.handleBlur = function() {
            if (n.state.blurValue) {
                n.setState({
                    value: n.state.blurValue,
                    blurValue: null
                });
            }
        };
        n.handleChange = function(e) {
            n.setUpdatedValue(e.target.value, e);
        };
        n.handleKeyDown = function(e) {
            let t;
            const r = ((e)=>Number(String(e).replace(/%/g, "")))(e.target.value);
            if (!isNaN(r) && (t = e.keyCode, b.indexOf(t) > -1)) {
                const o = n.getArrowOffset();
                const i = e.keyCode === 38 ? r + o : r - o;
                n.setUpdatedValue(i, e);
            }
        };
        n.handleDrag = function(e) {
            if (n.props.dragLabel) {
                const t = Math.round(n.props.value + e.movementX);
                if (t >= 0 && t <= n.props.dragMax && n.props.onChange) {
                    n.props.onChange(n.getValueObjectWithLabel(t), e);
                }
            }
        };
        n.handleMouseDown = function(e) {
            if (n.props.dragLabel) {
                e.preventDefault();
                n.handleDrag(e);
                window.addEventListener("mousemove", n.handleDrag);
                window.addEventListener("mouseup", n.handleMouseUp);
            }
        };
        n.handleMouseUp = function() {
            n.unbindEventListeners();
        };
        n.unbindEventListeners = function() {
            window.removeEventListener("mousemove", n.handleDrag);
            window.removeEventListener("mouseup", n.handleMouseUp);
        };
        n.state = {
            value: String(e.value).toUpperCase(),
            blurValue: String(e.value).toUpperCase()
        };
        n.inputId = `rc-editable-input-${x++}`;
        return n;
    }
    componentDidUpdate(e, t) {
        if (!(this.props.value === this.state.value || e.value === this.props.value && t.value === this.state.value)) {
            if (this.input === document.activeElement) {
                this.setState({
                    blurValue: String(this.props.value).toUpperCase()
                });
            } else {
                this.setState({
                    value: String(this.props.value).toUpperCase(),
                    blurValue: !this.state.blurValue && String(this.props.value).toUpperCase()
                });
            }
        }
    }
    componentWillUnmount() {
        this.unbindEventListeners();
    }
    getValueObjectWithLabel(e) {
        return ((e, t, n)=>{
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
        })({}, this.props.label, e);
    }
    getArrowOffset() {
        return this.props.arrowOffset || 1;
    }
    setUpdatedValue(e, t) {
        const n = this.props.label ? this.getValueObjectWithLabel(e) : e;
        if (this.props.onChange) {
            this.props.onChange(n, t);
        }
        this.setState({
            value: e
        });
    }
    render() {
        const _this = this;
        const t = module803({
            default: {
                wrap: {
                    position: "relative"
                }
            },
            "user-override": {
                wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
                input: this.props.style && this.props.style.input ? this.props.style.input : {},
                label: this.props.style && this.props.style.label ? this.props.style.label : {}
            },
            "dragLabel-true": {
                label: {
                    cursor: "ew-resize"
                }
            }
        }, {
            "user-override": true
        }, this.props);
        return <div style={t.wrap}><input id={this.inputId} style={t.input} ref={function(t) {
            return _this.input = t;
        }} value={this.state.value} onKeyDown={this.handleKeyDown} onChange={this.handleChange} onBlur={this.handleBlur} placeholder={this.props.placeholder} spellCheck="false"/>{this.props.label && !this.props.hideLabel ? <label htmlFor={this.inputId} style={t.label} onMouseDown={this.handleMouseDown}>{this.props.label}</label> : null}</div>;
    }
}
const _ = (e, direction, hsl, container)=>{
    const { clientWidth, clientHeight } = container;
    const a = typeof e.pageX === "number" ? e.pageX : e.touches[0].pageX;
    const l = typeof e.pageY === "number" ? e.pageY : e.touches[0].pageY;
    const u = a - (container.getBoundingClientRect().left + window.pageXOffset);
    const s = l - (container.getBoundingClientRect().top + window.pageYOffset);
    if (direction === "vertical") {
        let c;
        c = s < 0 ? 359 : s > clientHeight ? 0 : 360 * (-100 * s / clientHeight + 100) / 100;
        if (hsl.h !== c) {
            return {
                h: c,
                s: hsl.s,
                l: hsl.l,
                a: hsl.a,
                source: "hsl"
            };
        }
    } else {
        let f;
        f = u < 0 ? 0 : u > clientWidth ? 359 : 100 * u / clientWidth * 360 / 100;
        if (hsl.h !== f) {
            return {
                h: f,
                s: hsl.s,
                l: hsl.l,
                a: hsl.a,
                source: "hsl"
            };
        }
    }
    return null;
};
class M extends (PureComponent || Component) {
    constructor(...i){
        super(...i);
        var _this = this;
        this.handleChange = function(e) {
            const t = _(e, _this.props.direction, _this.props.hsl, _this.container);
            if (t && typeof _this.props.onChange === "function") {
                _this.props.onChange(t, e);
            }
        };
        this.handleMouseDown = function(e) {
            _this.handleChange(e);
            window.addEventListener("mousemove", _this.handleChange);
            window.addEventListener("mouseup", _this.handleMouseUp);
        };
        this.handleMouseUp = function() {
            _this.unbindEventListeners();
        };
    }
    componentWillUnmount() {
        this.unbindEventListeners();
    }
    unbindEventListeners() {
        window.removeEventListener("mousemove", this.handleChange);
        window.removeEventListener("mouseup", this.handleMouseUp);
    }
    render() {
        const _this = this;
        const direction = this.props.direction;
        const n = direction === undefined ? "horizontal" : direction;
        const r = module803({
            default: {
                hue: {
                    absolute: "0px 0px 0px 0px",
                    borderRadius: this.props.radius,
                    boxShadow: this.props.shadow
                },
                container: {
                    padding: "0 2px",
                    position: "relative",
                    height: "100%",
                    borderRadius: this.props.radius
                },
                pointer: {
                    position: "absolute",
                    left: `${100 * this.props.hsl.h / 360}%`
                },
                slider: {
                    marginTop: "1px",
                    width: "4px",
                    borderRadius: "1px",
                    height: "8px",
                    boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                    background: "#fff",
                    transform: "translateX(-2px)"
                }
            },
            vertical: {
                pointer: {
                    left: "0px",
                    top: `${-100 * this.props.hsl.h / 360 + 100}%`
                }
            }
        }, {
            vertical: n === "vertical"
        });
        return <div style={r.hue}><div className={`hue-${n}`} style={r.container} ref={function(t) {
            return _this.container = t;
        }} onMouseDown={this.handleMouseDown} onTouchMove={this.handleChange} onTouchStart={this.handleChange}><style>{"\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          "}</style><div style={r.pointer}>{this.props.pointer ? createElement(this.props.pointer, this.props) : <div style={r.slider}/>}</div></div></div>;
    }
}
const JComponent = function({ zDepth, radius, background, children, styles = {} }) {
    const s = module803(a({
        default: {
            wrap: {
                position: "relative",
                display: "inline-block"
            },
            content: {
                position: "relative"
            },
            bg: {
                absolute: "0px 0px 0px 0px",
                boxShadow: `0 ${zDepth}px ${4 * zDepth}px rgba(0,0,0,.24)`,
                borderRadius: radius,
                background
            }
        },
        "zDepth-0": {
            bg: {
                boxShadow: "none"
            }
        },
        "zDepth-1": {
            bg: {
                boxShadow: "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)"
            }
        },
        "zDepth-2": {
            bg: {
                boxShadow: "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)"
            }
        },
        "zDepth-3": {
            bg: {
                boxShadow: "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)"
            }
        },
        "zDepth-4": {
            bg: {
                boxShadow: "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)"
            }
        },
        "zDepth-5": {
            bg: {
                boxShadow: "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)"
            }
        },
        square: {
            bg: {
                borderRadius: "0"
            }
        },
        circle: {
            bg: {
                borderRadius: "50%"
            }
        }
    }, styles), {
        "zDepth-1": zDepth === 1
    });
    return <div style={s.wrap}><div style={s.bg}/><div style={s.content}>{children}</div></div>;
};
JComponent.propTypes = {
    background: module1.string,
    zDepth: module1.oneOf([
        0,
        1,
        2,
        3,
        4,
        5
    ]),
    radius: module1.number,
    styles: module1.object
};
JComponent.defaultProps = {
    background: "#fff",
    zDepth: 1,
    radius: 2,
    styles: {}
};
const T = JComponent;
class Z extends (PureComponent || Component) {
    constructor(e){
        var n = ((e, t)=>{
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            if (!t || typeof t !== "object" && typeof t !== "function") {
                return e;
            }
            return t;
        })(this, super(e));
        n.handleChange = function(e) {
            if (typeof n.props.onChange === "function") {
                n.throttle(n.props.onChange, ((e, t, n)=>{
                    const r = n.getBoundingClientRect();
                    const { width, height } = r;
                    const a = typeof e.pageX === "number" ? e.pageX : e.touches[0].pageX;
                    const l = typeof e.pageY === "number" ? e.pageY : e.touches[0].pageY;
                    let u = a - (n.getBoundingClientRect().left + window.pageXOffset);
                    let s = l - (n.getBoundingClientRect().top + window.pageYOffset);
                    if (u < 0) {
                        u = 0;
                    } else if (u > width) {
                        u = width;
                    }
                    if (s < 0) {
                        s = 0;
                    } else if (s > height) {
                        s = height;
                    }
                    const s_1 = u / width;
                    const v = 1 - s / height;
                    return {
                        h: t.h,
                        s: s_1,
                        v,
                        a: t.a,
                        source: "hsv"
                    };
                })(e, n.props.hsl, n.container), e);
            }
        };
        n.handleMouseDown = function(e) {
            n.handleChange(e);
            const t = n.getContainerRenderWindow();
            t.addEventListener("mousemove", n.handleChange);
            t.addEventListener("mouseup", n.handleMouseUp);
        };
        n.handleMouseUp = function() {
            n.unbindEventListeners();
        };
        n.throttle = a_1(function(e, t, n) {
            e(t, n);
        }, 50);
        return n;
    }
    componentWillUnmount() {
        this.throttle.cancel();
        this.unbindEventListeners();
    }
    getContainerRenderWindow() {
        for(var e = this.container, t = window; !t.document.contains(e) && t.parent !== t;){
            t = t.parent;
        }
        return t;
    }
    unbindEventListeners() {
        const e = this.getContainerRenderWindow();
        e.removeEventListener("mousemove", this.handleChange);
        e.removeEventListener("mouseup", this.handleMouseUp);
    }
    render() {
        const _this = this;
        const t = this.props.style || {};
        const { color, white, black, pointer, circle } = t;
        const s = module803({
            default: {
                color: {
                    absolute: "0px 0px 0px 0px",
                    background: `hsl(${this.props.hsl.h},100%, 50%)`,
                    borderRadius: this.props.radius
                },
                white: {
                    absolute: "0px 0px 0px 0px",
                    borderRadius: this.props.radius
                },
                black: {
                    absolute: "0px 0px 0px 0px",
                    boxShadow: this.props.shadow,
                    borderRadius: this.props.radius
                },
                pointer: {
                    position: "absolute",
                    top: `${-100 * this.props.hsv.v + 100}%`,
                    left: `${100 * this.props.hsv.s}%`,
                    cursor: "default"
                },
                circle: {
                    width: "4px",
                    height: "4px",
                    boxShadow: "0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)",
                    borderRadius: "50%",
                    cursor: "hand",
                    transform: "translate(-2px, -2px)"
                }
            },
            custom: {
                color,
                white,
                black,
                pointer,
                circle
            }
        }, {
            custom: !!this.props.style
        });
        return <div style={s.color} ref={function(t) {
            return _this.container = t;
        }} onMouseDown={this.handleMouseDown} onTouchMove={this.handleChange} onTouchStart={this.handleChange}><style>{"\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        "}</style><div style={s.white} className="saturation-white"><div style={s.black} className="saturation-black"/><div style={s.pointer}>{this.props.pointer ? createElement(this.props.pointer, this.props) : <div style={s.circle}/>}</div></div></div>;
    }
}
const H = (e)=>{
    let t = 0;
    let n = 0;
    a_4([
        "r",
        "g",
        "b",
        "a",
        "h",
        "s",
        "l",
        "v"
    ], function(r) {
        if (e[r] && (t += 1, isNaN(e[r]) || (n += 1), r === "s" || r === "l") && /^\d+%$/.test(e[r])) {
            n += 1;
        }
    });
    return t === n && e;
};
const B = (e, t)=>{
    const n = e.hex ? module2814(e.hex) : module2814(e);
    const hsl = n.toHsl();
    const hsv = n.toHsv();
    const rgb = n.toRgb();
    const a = n.toHex();
    if (hsl.s === 0) {
        hsl.h = t || 0;
        hsv.h = t || 0;
    }
    return {
        hsl,
        hex: a === "000000" && rgb.a === 0 ? "transparent" : `#${a}`,
        rgb,
        hsv,
        oldHue: e.h || t || hsl.h,
        source: e.source
    };
};
const F = (e)=>{
    if (e === "transparent") {
        return true;
    }
    const t = String(e).charAt(0) === "#" ? 1 : 0;
    return e.length !== 4 + t && e.length < 7 + t && module2814(e).isValid();
};
const V = (e)=>{
    if (!e) {
        return "#fff";
    }
    const t = B(e);
    if (t.hex === "transparent") {
        return "rgba(0,0,0,0.4)";
    }
    if ((299 * t.rgb.r + 587 * t.rgb.g + 114 * t.rgb.b) / 1000 >= 128) {
        return "#000";
    }
    return "#fff";
};
const $ = (e, t)=>{
    const n = e.replace("°", "");
    return module2814(`${t} (${n})`)._ok;
};
export const CustomPicker = function(e) {
    class t extends (PureComponent || Component) {
        constructor(e){
            var t = ((e, t)=>{
                if (!e) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                if (!t || typeof t !== "object" && typeof t !== "function") {
                    return e;
                }
                return t;
            })(this, super());
            t.handleChange = function(e, n) {
                if (H(e)) {
                    const r = B(e, e.h || t.state.oldHue);
                    t.setState(r);
                    if (t.props.onChangeComplete) {
                        t.debounce(t.props.onChangeComplete, r, n);
                    }
                    if (t.props.onChange) {
                        t.props.onChange(r, n);
                    }
                }
            };
            t.handleSwatchHover = function(e, n) {
                if (H(e)) {
                    const r = B(e, e.h || t.state.oldHue);
                    if (t.props.onSwatchHover) {
                        t.props.onSwatchHover(r, n);
                    }
                }
            };
            t.state = {
                ...B(e.color, 0)
            };
            t.debounce = a_3(function(e, t, n) {
                e(t, n);
            }, 100);
            return t;
        }
        render() {
            const t = {};
            if (this.props.onSwatchHover) {
                t.onSwatchHover = this.handleSwatchHover;
            }
            return createElement(e, {
                ...this.props,
                ...this.state,
                onChange: this.handleChange,
                ...t
            });
        }
        static getDerivedStateFromProps(e, t) {
            return {
                ...B(e.color, t.oldHue)
            };
        }
    }
    t.propTypes = {
        ...e.propTypes
    };
    t.defaultProps = {
        ...e.defaultProps,
        color: {
            h: 250,
            s: 0.5,
            l: 0.2,
            a: 1
        }
    };
    return t;
};
const Q = function(e, t = "span") {
    return class r extends Component {
        constructor(...i){
            super(...i);
            var _this = this;
            this.state = {
                focus: false
            };
            this.handleFocus = function() {
                return _this.setState({
                    focus: true
                });
            };
            this.handleBlur = function() {
                return _this.setState({
                    focus: false
                });
            };
        }
        render() {
            return createElement(t, {
                onFocus: this.handleFocus,
                onBlur: this.handleBlur
            }, createElement(e, {
                ...this.props,
                ...this.state
            }));
        }
    };
}(function({ color, style, onClick = function() {}, onHover, title = color, children, focus, focusStyle = {} }) {
    const v = color === "transparent";
    const g = module803({
        default: {
            swatch: {
                background: color,
                height: "100%",
                width: "100%",
                cursor: "pointer",
                position: "relative",
                outline: "none",
                ...style,
                ...focus ? focusStyle : {}
            }
        }
    });
    const y = {};
    if (onHover) {
        y.onMouseOver = function(e) {
            return onHover(color, e);
        };
    }
    return <div style={g.swatch} onClick={function(e) {
        return onClick(color, e);
    }} title={title} tabIndex={0} onKeyDown={function(e) {
        return e.keyCode === 13 && onClick(color, e);
    }} {...y}>{children}{v && <D borderRadius={g.swatch.borderRadius} boxShadow="inset 0 0 0 1px rgba(0,0,0,0.1)"/>}</div>;
});
const TeComponent = function({ rgb, hsl, width, height, onChange, direction, style, renderers, pointer, className = "" }) {
    const h = module803({
        default: {
            picker: {
                position: "relative",
                width,
                height
            },
            alpha: {
                radius: "2px",
                style
            }
        }
    });
    return <div style={h.picker} className={`alpha-picker ${className}`}>{<Y {...h.alpha} rgb={rgb} hsl={hsl} pointer={pointer} renderers={renderers} onChange={onChange} direction={direction}/>}</div>;
};
TeComponent.defaultProps = {
    width: "316px",
    height: "16px",
    direction: "horizontal",
    pointer: function({ direction }) {
        const n = module803({
            default: {
                picker: {
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    transform: "translate(-9px, -1px)",
                    backgroundColor: "rgb(248, 248, 248)",
                    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
                }
            },
            vertical: {
                picker: {
                    transform: "translate(-3px, -9px)"
                }
            }
        }, {
            vertical: direction === "vertical"
        });
        return <div style={n.picker}/>;
    }
};
export const AlphaPicker = CustomPicker(TeComponent);
const OeComponent = function({ colors, onClick, onSwatchHover }) {
    const i = module803({
        default: {
            swatches: {
                marginRight: "-10px"
            },
            swatch: {
                width: "22px",
                height: "22px",
                float: "left",
                marginRight: "10px",
                marginBottom: "10px",
                borderRadius: "4px"
            },
            clear: {
                clear: "both"
            }
        }
    });
    return <div style={i.swatches}>{a_5(colors, function(e) {
        return <Q key={e} color={e} style={i.swatch} onClick={onClick} onHover={onSwatchHover} focusStyle={{
            boxShadow: `0 0 4px ${e}`
        }}/>;
    })}<div style={i.clear}/></div>;
};
const IeComponent = function({ onChange, onSwatchHover, hex, colors, width, triangle, styles = {}, className = "" }) {
    const h = hex === "transparent";
    const v = function(e, n) {
        if (F(e)) {
            onChange({
                hex: e,
                source: "hex"
            }, n);
        }
    };
    const g = module803(a({
        default: {
            card: {
                width,
                background: "#fff",
                boxShadow: "0 1px rgba(0,0,0,.1)",
                borderRadius: "6px",
                position: "relative"
            },
            head: {
                height: "110px",
                background: hex,
                borderRadius: "6px 6px 0 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative"
            },
            body: {
                padding: "10px"
            },
            label: {
                fontSize: "18px",
                color: V(hex),
                position: "relative"
            },
            triangle: {
                width: "0px",
                height: "0px",
                borderStyle: "solid",
                borderWidth: "0 10px 10px 10px",
                borderColor: `transparent transparent ${hex} transparent`,
                position: "absolute",
                top: "-10px",
                left: "50%",
                marginLeft: "-10px"
            },
            input: {
                width: "100%",
                fontSize: "12px",
                color: "#666",
                border: "0px",
                outline: "none",
                height: "22px",
                boxShadow: "inset 0 0 0 1px #ddd",
                borderRadius: "4px",
                padding: "0 7px",
                boxSizing: "border-box"
            }
        },
        "hide-triangle": {
            triangle: {
                display: "none"
            }
        }
    }, styles), {
        "hide-triangle": triangle === "hide"
    });
    return <div style={g.card} className={`block-picker ${className}`}><div style={g.triangle}/><div style={g.head}>{h && <D borderRadius="6px 6px 0 0"/>}<div style={g.label}>{hex}</div></div><div style={g.body}>{<OeComponent colors={colors} onClick={v} onSwatchHover={onSwatchHover}/>}{<W style={{
        input: g.input
    }} value={hex} onChange={v}/>}</div></div>;
};
IeComponent.propTypes = {
    width: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    colors: module1.arrayOf(module1.string),
    triangle: module1.oneOf([
        "top",
        "hide"
    ]),
    styles: module1.object
};
IeComponent.defaultProps = {
    width: 170,
    colors: [
        "#D9E3F0",
        "#F47373",
        "#697689",
        "#37D67A",
        "#2CCCE4",
        "#555555",
        "#dce775",
        "#ff8a65",
        "#ba68c8"
    ],
    triangle: "top",
    styles: {}
};
export const BlockPicker = CustomPicker(IeComponent);
const le = "#ffcdd2";
const ue = "#e57373";
const se = "#f44336";
const ce = "#d32f2f";
const fe = "#b71c1c";
const de = "#f8bbd0";
const pe = "#f06292";
const he = "#e91e63";
const ve = "#c2185b";
const ge = "#880e4f";
const ye = "#e1bee7";
const me = "#ba68c8";
const be = "#9c27b0";
const xe = "#7b1fa2";
const we = "#4a148c";
const _e = "#d1c4e9";
const Ce = "#9575cd";
const Oe = "#673ab7";
const Ee = "#512da8";
const Me = "#311b92";
const Se = "#c5cae9";
const Ae = "#7986cb";
const ke = "#3f51b5";
const je = "#303f9f";
const Te = "#1a237e";
const Pe = "#bbdefb";
const Le = "#64b5f6";
const ze = "#2196f3";
const Ne = "#1976d2";
const De = "#0d47a1";
const Ie = "#b3e5fc";
const Re = "#4fc3f7";
const He = "#03a9f4";
const Be = "#0288d1";
const Fe = "#01579b";
const Ve = "#b2ebf2";
const $e = "#4dd0e1";
const Ue = "#00bcd4";
const Ze = "#0097a7";
const We = "#006064";
const Ke = "#b2dfdb";
const Ge = "#4db6ac";
const qe = "#009688";
const Ye = "#00796b";
const Xe = "#004d40";
const Je = "#c8e6c9";
const Qe = "#81c784";
const et = "#4caf50";
const tt = "#388e3c";
const nt = "#dcedc8";
const rt = "#aed581";
const ot = "#8bc34a";
const it = "#689f38";
const at = "#33691e";
const lt = "#f0f4c3";
const ut = "#dce775";
const st = "#cddc39";
const ct = "#afb42b";
const ft = "#827717";
const dt = "#fff9c4";
const pt = "#fff176";
const ht = "#ffeb3b";
const vt = "#fbc02d";
const gt = "#f57f17";
const yt = "#ffecb3";
const mt = "#ffd54f";
const bt = "#ffc107";
const xt = "#ffa000";
const wt = "#ff6f00";
const _t = "#ffe0b2";
const Ct = "#ffb74d";
const Ot = "#ff9800";
const Et = "#f57c00";
const Mt = "#e65100";
const St = "#ffccbc";
const At = "#ff8a65";
const kt = "#ff5722";
const jt = "#e64a19";
const Tt = "#bf360c";
const Pt = "#d7ccc8";
const Lt = "#a1887f";
const zt = "#795548";
const Nt = "#5d4037";
const Dt = "#3e2723";
const It = "#cfd8dc";
const Rt = "#90a4ae";
const Ht = "#607d8b";
const Bt = "#455a64";
const Ft = "#263238";
const VtComponent = function({ color, onClick, onSwatchHover, hover, active, circleSize, circleSpacing }) {
    const c = module803({
        default: {
            swatch: {
                width: circleSize,
                height: circleSize,
                marginRight: circleSpacing,
                marginBottom: circleSpacing,
                transform: "scale(1)",
                transition: "100ms transform ease"
            },
            Swatch: {
                borderRadius: "50%",
                background: "transparent",
                boxShadow: `inset 0 0 0 ${circleSize / 2 + 1}px ${color}`,
                transition: "100ms box-shadow ease"
            }
        },
        hover: {
            swatch: {
                transform: "scale(1.2)"
            }
        },
        active: {
            Swatch: {
                boxShadow: `inset 0 0 0 3px ${color}`
            }
        }
    }, {
        hover,
        active
    });
    return <div style={c.swatch}><Q style={c.Swatch} color={color} onClick={onClick} onHover={onSwatchHover} focusStyle={{
        boxShadow: `${c.Swatch.boxShadow}, 0 0 5px ${color}`
    }}/></div>;
};
VtComponent.defaultProps = {
    circleSize: 28,
    circleSpacing: 14
};
const $t = module803.handleHover(VtComponent);
const UtComponent = function({ width, onChange, onSwatchHover, colors, hex, circleSize, styles = {}, circleSpacing, className = "" }) {
    const h = module803(a({
        default: {
            card: {
                width,
                display: "flex",
                flexWrap: "wrap",
                marginRight: -circleSpacing,
                marginBottom: -circleSpacing
            }
        }
    }, styles));
    const v = function(e, t) {
        return onChange({
            hex: e,
            source: "hex"
        }, t);
    };
    return <div style={h.card} className={`circle-picker ${className}`}>{a_5(colors, function(e) {
        return <$t key={e} color={e} onClick={v} onSwatchHover={onSwatchHover} active={hex === e.toLowerCase()} circleSize={circleSize} circleSpacing={circleSpacing}/>;
    })}</div>;
};
UtComponent.propTypes = {
    width: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    circleSize: module1.number,
    circleSpacing: module1.number,
    styles: module1.object
};
UtComponent.defaultProps = {
    width: 252,
    circleSize: 28,
    circleSpacing: 14,
    colors: [
        se,
        he,
        be,
        Oe,
        ke,
        ze,
        He,
        Ue,
        qe,
        et,
        ot,
        st,
        ht,
        bt,
        Ot,
        kt,
        zt,
        Ht
    ],
    styles: {}
};
export const CirclePicker = CustomPicker(UtComponent);
class Yt extends Component {
    constructor(e){
        var n = ((e, t)=>{
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            if (!t || typeof t !== "object" && typeof t !== "function") {
                return e;
            }
            return t;
        })(this, super());
        n.toggleViews = function() {
            if (n.state.view === "hex") {
                n.setState({
                    view: "rgb"
                });
            } else if (n.state.view === "rgb") {
                n.setState({
                    view: "hsl"
                });
            } else {
                if (n.state.view === "hsl") {
                    if (n.props.hsl.a === 1) {
                        n.setState({
                            view: "hex"
                        });
                    } else {
                        n.setState({
                            view: "rgb"
                        });
                    }
                }
            }
        };
        n.handleChange = function(e, t) {
            if (e.hex) {
                if (F(e.hex)) {
                    n.props.onChange({
                        hex: e.hex,
                        source: "hex"
                    }, t);
                }
            } else if (e.r || e.g || e.b) {
                n.props.onChange({
                    r: e.r || n.props.rgb.r,
                    g: e.g || n.props.rgb.g,
                    b: e.b || n.props.rgb.b,
                    source: "rgb"
                }, t);
            } else if (e.a) {
                if (e.a < 0) {
                    e.a = 0;
                } else if (e.a > 1) {
                    e.a = 1;
                }
                n.props.onChange({
                    h: n.props.hsl.h,
                    s: n.props.hsl.s,
                    l: n.props.hsl.l,
                    a: Math.round(100 * e.a) / 100,
                    source: "rgb"
                }, t);
            } else if (e.h || e.s || e.l) {
                if (typeof e.s === "string" && e.s.includes("%")) {
                    e.s = e.s.replace("%", "");
                }
                if (typeof e.l === "string" && e.l.includes("%")) {
                    e.l = e.l.replace("%", "");
                }
                if (e.s == 1) {
                    e.s = 0.01;
                } else if (e.l == 1) {
                    e.l = 0.01;
                }
                n.props.onChange({
                    h: e.h || n.props.hsl.h,
                    s: Number(a_6(e.s) ? n.props.hsl.s : e.s),
                    l: Number(a_6(e.l) ? n.props.hsl.l : e.l),
                    source: "hsl"
                }, t);
            }
        };
        n.showHighlight = function(e) {
            e.currentTarget.style.background = "#eee";
        };
        n.hideHighlight = function(e) {
            e.currentTarget.style.background = "transparent";
        };
        if (e.hsl.a !== 1 && e.view === "hex") {
            n.state = {
                view: "rgb"
            };
        } else {
            n.state = {
                view: e.view
            };
        }
        return n;
    }
    render() {
        const _this = this;
        const t = module803({
            default: {
                wrap: {
                    paddingTop: "16px",
                    display: "flex"
                },
                fields: {
                    flex: "1",
                    display: "flex",
                    marginLeft: "-6px"
                },
                field: {
                    paddingLeft: "6px",
                    width: "100%"
                },
                alpha: {
                    paddingLeft: "6px",
                    width: "100%"
                },
                toggle: {
                    width: "32px",
                    textAlign: "right",
                    position: "relative"
                },
                icon: {
                    marginRight: "-4px",
                    marginTop: "12px",
                    cursor: "pointer",
                    position: "relative"
                },
                iconHighlight: {
                    position: "absolute",
                    width: "24px",
                    height: "28px",
                    background: "#eee",
                    borderRadius: "4px",
                    top: "10px",
                    left: "12px",
                    display: "none"
                },
                input: {
                    fontSize: "11px",
                    color: "#333",
                    width: "100%",
                    borderRadius: "2px",
                    border: "none",
                    boxShadow: "inset 0 0 0 1px #dadada",
                    height: "21px",
                    textAlign: "center"
                },
                label: {
                    textTransform: "uppercase",
                    fontSize: "11px",
                    lineHeight: "11px",
                    color: "#969696",
                    textAlign: "center",
                    display: "block",
                    marginTop: "12px"
                },
                svg: {
                    fill: "#333",
                    width: "24px",
                    height: "24px",
                    border: "1px transparent solid",
                    borderRadius: "5px"
                }
            },
            disableAlpha: {
                alpha: {
                    display: "none"
                }
            }
        }, this.props, this.state);
        let n;
        if (this.state.view === "hex") {
            n = <div style={t.fields} className="flexbox-fix"><div style={t.field}>{<W style={{
                input: t.input,
                label: t.label
            }} label="hex" value={this.props.hex} onChange={this.handleChange}/>}</div></div>;
        } else if (this.state.view === "rgb") {
            n = <div style={t.fields} className="flexbox-fix"><div style={t.field}>{<W style={{
                input: t.input,
                label: t.label
            }} label="r" value={this.props.rgb.r} onChange={this.handleChange}/>}</div><div style={t.field}>{<W style={{
                input: t.input,
                label: t.label
            }} label="g" value={this.props.rgb.g} onChange={this.handleChange}/>}</div><div style={t.field}>{<W style={{
                input: t.input,
                label: t.label
            }} label="b" value={this.props.rgb.b} onChange={this.handleChange}/>}</div><div style={t.alpha}>{<W style={{
                input: t.input,
                label: t.label
            }} label="a" value={this.props.rgb.a} arrowOffset={0.01} onChange={this.handleChange}/>}</div></div>;
        } else if (this.state.view === "hsl") {
            n = <div style={t.fields} className="flexbox-fix"><div style={t.field}>{<W style={{
                input: t.input,
                label: t.label
            }} label="h" value={Math.round(this.props.hsl.h)} onChange={this.handleChange}/>}</div><div style={t.field}>{<W style={{
                input: t.input,
                label: t.label
            }} label="s" value={`${Math.round(100 * this.props.hsl.s)}%`} onChange={this.handleChange}/>}</div><div style={t.field}>{<W style={{
                input: t.input,
                label: t.label
            }} label="l" value={`${Math.round(100 * this.props.hsl.l)}%`} onChange={this.handleChange}/>}</div><div style={t.alpha}>{<W style={{
                input: t.input,
                label: t.label
            }} label="a" value={this.props.hsl.a} arrowOffset={0.01} onChange={this.handleChange}/>}</div></div>;
        }
        return <div style={t.wrap} className="flexbox-fix">{n}<div style={t.toggle}><div style={t.icon} onClick={this.toggleViews} ref={function(t) {
            return _this.icon = t;
        }}><Module2815 style={t.svg} onMouseOver={this.showHighlight} onMouseEnter={this.showHighlight} onMouseOut={this.hideHighlight}/></div></div></div>;
    }
    static getDerivedStateFromProps(e, t) {
        if (e.hsl.a !== 1 && t.view === "hex") {
            return {
                view: "rgb"
            };
        }
        return null;
    }
}
Yt.defaultProps = {
    view: "hex"
};
const Xt = Yt;
const JtComponent = function() {
    const e = module803({
        default: {
            picker: {
                width: "12px",
                height: "12px",
                borderRadius: "6px",
                transform: "translate(-6px, -1px)",
                backgroundColor: "rgb(248, 248, 248)",
                boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
            }
        }
    });
    return <div style={e.picker}/>;
};
const QtComponent = function() {
    const e = module803({
        default: {
            picker: {
                width: "12px",
                height: "12px",
                borderRadius: "6px",
                boxShadow: "inset 0 0 0 1px #fff",
                transform: "translate(-6px, -6px)"
            }
        }
    });
    return <div style={e.picker}/>;
};
const EnComponent = function({ width, onChange, disableAlpha, rgb, hsl, hsv, hex, renderers, styles = {}, className = "", defaultView }) {
    const m = module803(a({
        default: {
            picker: {
                width,
                background: "#fff",
                borderRadius: "2px",
                boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
                boxSizing: "initial",
                fontFamily: "Menlo"
            },
            saturation: {
                width: "100%",
                paddingBottom: "55%",
                position: "relative",
                borderRadius: "2px 2px 0 0",
                overflow: "hidden"
            },
            Saturation: {
                radius: "2px 2px 0 0"
            },
            body: {
                padding: "16px 16px 12px"
            },
            controls: {
                display: "flex"
            },
            color: {
                width: "32px"
            },
            swatch: {
                marginTop: "6px",
                width: "16px",
                height: "16px",
                borderRadius: "8px",
                position: "relative",
                overflow: "hidden"
            },
            active: {
                absolute: "0px 0px 0px 0px",
                borderRadius: "8px",
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
                background: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`,
                zIndex: "2"
            },
            toggles: {
                flex: "1"
            },
            hue: {
                height: "10px",
                position: "relative",
                marginBottom: "8px"
            },
            Hue: {
                radius: "2px"
            },
            alpha: {
                height: "10px",
                position: "relative"
            },
            Alpha: {
                radius: "2px"
            }
        },
        disableAlpha: {
            color: {
                width: "22px"
            },
            alpha: {
                display: "none"
            },
            hue: {
                marginBottom: "0px"
            },
            swatch: {
                width: "10px",
                height: "10px",
                marginTop: "0px"
            }
        }
    }, styles), {
        disableAlpha
    });
    return <div style={m.picker} className={`chrome-picker ${className}`}><div style={m.saturation}>{<Z style={m.Saturation} hsl={hsl} hsv={hsv} pointer={QtComponent} onChange={onChange}/>}</div><div style={m.body}><div style={m.controls} className="flexbox-fix"><div style={m.color}><div style={m.swatch}><div style={m.active}/>{<D renderers={renderers}/>}</div></div><div style={m.toggles}><div style={m.hue}><M style={m.Hue} hsl={hsl} pointer={JtComponent} onChange={onChange}/></div><div style={m.alpha}>{<Y style={m.Alpha} rgb={rgb} hsl={hsl} pointer={JtComponent} renderers={renderers} onChange={onChange}/>}</div></div></div><Xt rgb={rgb} hsl={hsl} hex={hex} view={defaultView} onChange={onChange} disableAlpha={disableAlpha}/></div></div>;
};
EnComponent.propTypes = {
    width: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    disableAlpha: module1.bool,
    styles: module1.object,
    defaultView: module1.oneOf([
        "hex",
        "rgb",
        "hsl"
    ])
};
EnComponent.defaultProps = {
    width: 225,
    disableAlpha: false,
    styles: {}
};
export const ChromePicker = CustomPicker(EnComponent);
export { ChromePicker as default };
const NnComponent = function({ color, onClick = function() {}, onSwatchHover, active }) {
    const u = module803({
        default: {
            color: {
                background: color,
                width: "15px",
                height: "15px",
                float: "left",
                marginRight: "5px",
                marginBottom: "5px",
                position: "relative",
                cursor: "pointer"
            },
            dot: {
                absolute: "5px 5px 5px 5px",
                background: V(color),
                borderRadius: "50%",
                opacity: "0"
            }
        },
        active: {
            dot: {
                opacity: "1"
            }
        },
        "color-#FFFFFF": {
            color: {
                boxShadow: "inset 0 0 0 1px #ddd"
            },
            dot: {
                background: "#000"
            }
        },
        transparent: {
            dot: {
                background: "#000"
            }
        }
    }, {
        active,
        "color-#FFFFFF": color === "#FFFFFF",
        transparent: color === "transparent"
    });
    return <Q style={u.color} color={color} onClick={onClick} onHover={onSwatchHover} focusStyle={{
        boxShadow: `0 0 4px ${color}`
    }}><div style={u.dot}/></Q>;
};
const RnComponent = function({ hex, rgb, onChange }) {
    const i = module803({
        default: {
            fields: {
                display: "flex",
                paddingBottom: "6px",
                paddingRight: "5px",
                position: "relative"
            },
            active: {
                position: "absolute",
                top: "6px",
                left: "5px",
                height: "9px",
                width: "9px",
                background: hex
            },
            HEXwrap: {
                flex: "6",
                position: "relative"
            },
            HEXinput: {
                width: "80%",
                padding: "0px",
                paddingLeft: "20%",
                border: "none",
                outline: "none",
                background: "none",
                fontSize: "12px",
                color: "#333",
                height: "16px"
            },
            HEXlabel: {
                display: "none"
            },
            RGBwrap: {
                flex: "3",
                position: "relative"
            },
            RGBinput: {
                width: "70%",
                padding: "0px",
                paddingLeft: "30%",
                border: "none",
                outline: "none",
                background: "none",
                fontSize: "12px",
                color: "#333",
                height: "16px"
            },
            RGBlabel: {
                position: "absolute",
                top: "3px",
                left: "0px",
                lineHeight: "16px",
                textTransform: "uppercase",
                fontSize: "12px",
                color: "#999"
            }
        }
    });
    const l = function(e, t) {
        if (e.r || e.g || e.b) {
            onChange({
                r: e.r || rgb.r,
                g: e.g || rgb.g,
                b: e.b || rgb.b,
                source: "rgb"
            }, t);
        } else {
            onChange({
                hex: e.hex,
                source: "hex"
            }, t);
        }
    };
    return <div style={i.fields} className="flexbox-fix"><div style={i.active}/>{<W style={{
        wrap: i.HEXwrap,
        input: i.HEXinput,
        label: i.HEXlabel
    }} label="hex" value={hex} onChange={l}/>}{<W style={{
        wrap: i.RGBwrap,
        input: i.RGBinput,
        label: i.RGBlabel
    }} label="r" value={rgb.r} onChange={l}/>}{<W style={{
        wrap: i.RGBwrap,
        input: i.RGBinput,
        label: i.RGBlabel
    }} label="g" value={rgb.g} onChange={l}/>}{<W style={{
        wrap: i.RGBwrap,
        input: i.RGBinput,
        label: i.RGBlabel
    }} label="b" value={rgb.b} onChange={l}/>}</div>;
};
const OnComponent = function({ onChange, onSwatchHover, colors, hex, rgb, styles = {}, className = "" }) {
    const d = module803(a({
        default: {
            Compact: {
                background: "#f6f6f6",
                radius: "4px"
            },
            compact: {
                paddingTop: "5px",
                paddingLeft: "5px",
                boxSizing: "initial",
                width: "240px"
            },
            clear: {
                clear: "both"
            }
        }
    }, styles));
    const p = function(e, n) {
        if (e.hex) {
            if (F(e.hex)) {
                onChange({
                    hex: e.hex,
                    source: "hex"
                }, n);
            }
        } else {
            onChange(e, n);
        }
    };
    return <T style={d.Compact} styles={styles}><div style={d.compact} className={`compact-picker ${className}`}><div>{a_5(colors, function(e) {
        return <NnComponent key={e} color={e} active={e.toLowerCase() === hex} onClick={p} onSwatchHover={onSwatchHover}/>;
    })}<div style={d.clear}/></div>{<RnComponent hex={hex} rgb={rgb} onChange={p}/>}</div></T>;
};
OnComponent.propTypes = {
    colors: module1.arrayOf(module1.string),
    styles: module1.object
};
OnComponent.defaultProps = {
    colors: [
        "#4D4D4D",
        "#999999",
        "#FFFFFF",
        "#F44E3B",
        "#FE9200",
        "#FCDC00",
        "#DBDF00",
        "#A4DD00",
        "#68CCCA",
        "#73D8FF",
        "#AEA1FF",
        "#FDA1FF",
        "#333333",
        "#808080",
        "#cccccc",
        "#D33115",
        "#E27300",
        "#FCC400",
        "#B0BC00",
        "#68BC00",
        "#16A5A5",
        "#009CE0",
        "#7B64FF",
        "#FA28FF",
        "#000000",
        "#666666",
        "#B3B3B3",
        "#9F0500",
        "#C45100",
        "#FB9E00",
        "#808900",
        "#194D33",
        "#0C797D",
        "#0062B1",
        "#653294",
        "#AB149E"
    ],
    styles: {}
};
export const CompactPicker = CustomPicker(OnComponent);
const Ln1 = module803.handleHover(function({ hover, color, onClick, onSwatchHover }) {
    const l = {
        position: "relative",
        zIndex: "2",
        outline: "2px solid #fff",
        boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)"
    };
    const u = module803({
        default: {
            swatch: {
                width: "25px",
                height: "25px",
                fontSize: "0"
            }
        },
        hover: {
            swatch: l
        }
    }, {
        hover
    });
    return <div style={u.swatch}><Q color={color} onClick={onClick} onHover={onSwatchHover} focusStyle={l}/></div>;
});
const UnComponent = function({ width, colors, onChange, onSwatchHover, triangle, styles = {}, className = "" }) {
    const d = module803(a({
        default: {
            card: {
                width,
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.2)",
                boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
                borderRadius: "4px",
                position: "relative",
                padding: "5px",
                display: "flex",
                flexWrap: "wrap"
            },
            triangle: {
                position: "absolute",
                border: "7px solid transparent",
                borderBottomColor: "#fff"
            },
            triangleShadow: {
                position: "absolute",
                border: "8px solid transparent",
                borderBottomColor: "rgba(0,0,0,0.15)"
            }
        },
        "hide-triangle": {
            triangle: {
                display: "none"
            },
            triangleShadow: {
                display: "none"
            }
        },
        "top-left-triangle": {
            triangle: {
                top: "-14px",
                left: "10px"
            },
            triangleShadow: {
                top: "-16px",
                left: "9px"
            }
        },
        "top-right-triangle": {
            triangle: {
                top: "-14px",
                right: "10px"
            },
            triangleShadow: {
                top: "-16px",
                right: "9px"
            }
        },
        "bottom-left-triangle": {
            triangle: {
                top: "35px",
                left: "10px",
                transform: "rotate(180deg)"
            },
            triangleShadow: {
                top: "37px",
                left: "9px",
                transform: "rotate(180deg)"
            }
        },
        "bottom-right-triangle": {
            triangle: {
                top: "35px",
                right: "10px",
                transform: "rotate(180deg)"
            },
            triangleShadow: {
                top: "37px",
                right: "9px",
                transform: "rotate(180deg)"
            }
        }
    }, styles), {
        "hide-triangle": triangle === "hide",
        "top-left-triangle": triangle === "top-left",
        "top-right-triangle": triangle === "top-right",
        "bottom-left-triangle": triangle === "bottom-left",
        "bottom-right-triangle": triangle === "bottom-right"
    });
    const p = function(e, t) {
        return onChange({
            hex: e,
            source: "hex"
        }, t);
    };
    return <div style={d.card} className={`github-picker ${className}`}><div style={d.triangleShadow}/><div style={d.triangle}/>{a_5(colors, function(e) {
        return <Ln1 color={e} key={e} onClick={p} onSwatchHover={onSwatchHover}/>;
    })}</div>;
};
UnComponent.propTypes = {
    width: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    colors: module1.arrayOf(module1.string),
    triangle: module1.oneOf([
        "hide",
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right"
    ]),
    styles: module1.object
};
UnComponent.defaultProps = {
    width: 200,
    colors: [
        "#B80000",
        "#DB3E00",
        "#FCCB00",
        "#008B02",
        "#006B76",
        "#1273DE",
        "#004DCF",
        "#5300EB",
        "#EB9694",
        "#FAD0C3",
        "#FEF3BD",
        "#C1E1C5",
        "#BEDADC",
        "#C4DEF6",
        "#BED3F3",
        "#D4C4FB"
    ],
    triangle: "top-left",
    styles: {}
};
export const GithubPicker = CustomPicker(UnComponent);
const FnComponent = function({ width, height, onChange, hsl, direction, pointer, styles = {}, className = "" }) {
    const p = module803(a({
        default: {
            picker: {
                position: "relative",
                width,
                height
            },
            hue: {
                radius: "2px"
            }
        }
    }, styles));
    return <div style={p.picker} className={`hue-picker ${className}`}><M {...p.hue} hsl={hsl} pointer={pointer} onChange={function(e) {
        return onChange({
            a: 1,
            h: e.h,
            l: 0.5,
            s: 1
        });
    }} direction={direction}/></div>;
};
FnComponent.propTypes = {
    styles: module1.object
};
FnComponent.defaultProps = {
    width: "316px",
    height: "16px",
    direction: "horizontal",
    pointer: function({ direction }) {
        const n = module803({
            default: {
                picker: {
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    transform: "translate(-9px, -1px)",
                    backgroundColor: "rgb(248, 248, 248)",
                    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
                }
            },
            vertical: {
                picker: {
                    transform: "translate(-3px, -9px)"
                }
            }
        }, {
            vertical: direction === "vertical"
        });
        return <div style={n.picker}/>;
    },
    styles: {}
};
export const HuePicker = CustomPicker(FnComponent);
export const MaterialPicker = CustomPicker(function({ onChange, hex, rgb, styles = {}, className = "" }) {
    const c = module803(a({
        default: {
            material: {
                width: "98px",
                height: "98px",
                padding: "16px",
                fontFamily: "Roboto"
            },
            HEXwrap: {
                position: "relative"
            },
            HEXinput: {
                width: "100%",
                marginTop: "12px",
                fontSize: "15px",
                color: "#333",
                padding: "0px",
                border: "0px",
                borderBottom: `2px solid ${hex}`,
                outline: "none",
                height: "30px"
            },
            HEXlabel: {
                position: "absolute",
                top: "0px",
                left: "0px",
                fontSize: "11px",
                color: "#999999",
                textTransform: "capitalize"
            },
            Hex: {
                style: {}
            },
            RGBwrap: {
                position: "relative"
            },
            RGBinput: {
                width: "100%",
                marginTop: "12px",
                fontSize: "15px",
                color: "#333",
                padding: "0px",
                border: "0px",
                borderBottom: "1px solid #eee",
                outline: "none",
                height: "30px"
            },
            RGBlabel: {
                position: "absolute",
                top: "0px",
                left: "0px",
                fontSize: "11px",
                color: "#999999",
                textTransform: "capitalize"
            },
            split: {
                display: "flex",
                marginRight: "-10px",
                paddingTop: "11px"
            },
            third: {
                flex: "1",
                paddingRight: "10px"
            }
        }
    }, styles));
    const f = function(e, n) {
        if (e.hex) {
            if (F(e.hex)) {
                onChange({
                    hex: e.hex,
                    source: "hex"
                }, n);
            }
        } else if (e.r || e.g || e.b) {
            onChange({
                r: e.r || rgb.r,
                g: e.g || rgb.g,
                b: e.b || rgb.b,
                source: "rgb"
            }, n);
        }
    };
    return <T styles={styles}><div style={c.material} className={`material-picker ${className}`}>{<W style={{
        wrap: c.HEXwrap,
        input: c.HEXinput,
        label: c.HEXlabel
    }} label="hex" value={hex} onChange={f}/>}<div style={c.split} className="flexbox-fix"><div style={c.third}>{<W style={{
        wrap: c.RGBwrap,
        input: c.RGBinput,
        label: c.RGBlabel
    }} label="r" value={rgb.r} onChange={f}/>}</div><div style={c.third}>{<W style={{
        wrap: c.RGBwrap,
        input: c.RGBinput,
        label: c.RGBlabel
    }} label="g" value={rgb.g} onChange={f}/>}</div><div style={c.third}>{<W style={{
        wrap: c.RGBwrap,
        input: c.RGBinput,
        label: c.RGBlabel
    }} label="b" value={rgb.b} onChange={f}/>}</div></div></div></T>;
});
const HnComponent = function({ onChange, rgb, hsv, hex }) {
    const l = module803({
        default: {
            fields: {
                paddingTop: "5px",
                paddingBottom: "9px",
                width: "80px",
                position: "relative"
            },
            divider: {
                height: "5px"
            },
            RGBwrap: {
                position: "relative"
            },
            RGBinput: {
                marginLeft: "40%",
                width: "40%",
                height: "18px",
                border: "1px solid #888888",
                boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
                marginBottom: "5px",
                fontSize: "13px",
                paddingLeft: "3px",
                marginRight: "10px"
            },
            RGBlabel: {
                left: "0px",
                top: "0px",
                width: "34px",
                textTransform: "uppercase",
                fontSize: "13px",
                height: "18px",
                lineHeight: "22px",
                position: "absolute"
            },
            HEXwrap: {
                position: "relative"
            },
            HEXinput: {
                marginLeft: "20%",
                width: "80%",
                height: "18px",
                border: "1px solid #888888",
                boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
                marginBottom: "6px",
                fontSize: "13px",
                paddingLeft: "3px"
            },
            HEXlabel: {
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "14px",
                textTransform: "uppercase",
                fontSize: "13px",
                height: "18px",
                lineHeight: "22px"
            },
            fieldSymbols: {
                position: "absolute",
                top: "5px",
                right: "-7px",
                fontSize: "13px"
            },
            symbol: {
                height: "20px",
                lineHeight: "22px",
                paddingBottom: "7px"
            }
        }
    });
    const u = function(e, o) {
        if (e["#"]) {
            if (F(e["#"])) {
                onChange({
                    hex: e["#"],
                    source: "hex"
                }, o);
            }
        } else if (e.r || e.g || e.b) {
            onChange({
                r: e.r || rgb.r,
                g: e.g || rgb.g,
                b: e.b || rgb.b,
                source: "rgb"
            }, o);
        } else if (e.h || e.s || e.v) {
            onChange({
                h: e.h || hsv.h,
                s: e.s || hsv.s,
                v: e.v || hsv.v,
                source: "hsv"
            }, o);
        }
    };
    return <div style={l.fields}>{<W style={{
        wrap: l.RGBwrap,
        input: l.RGBinput,
        label: l.RGBlabel
    }} label="h" value={Math.round(hsv.h)} onChange={u}/>}{<W style={{
        wrap: l.RGBwrap,
        input: l.RGBinput,
        label: l.RGBlabel
    }} label="s" value={Math.round(100 * hsv.s)} onChange={u}/>}{<W style={{
        wrap: l.RGBwrap,
        input: l.RGBinput,
        label: l.RGBlabel
    }} label="v" value={Math.round(100 * hsv.v)} onChange={u}/>}<div style={l.divider}/>{<W style={{
        wrap: l.RGBwrap,
        input: l.RGBinput,
        label: l.RGBlabel
    }} label="r" value={rgb.r} onChange={u}/>}{<W style={{
        wrap: l.RGBwrap,
        input: l.RGBinput,
        label: l.RGBlabel
    }} label="g" value={rgb.g} onChange={u}/>}{<W style={{
        wrap: l.RGBwrap,
        input: l.RGBinput,
        label: l.RGBlabel
    }} label="b" value={rgb.b} onChange={u}/>}<div style={l.divider}/>{<W style={{
        wrap: l.HEXwrap,
        input: l.HEXinput,
        label: l.HEXlabel
    }} label="#" value={hex.replace("#", "")} onChange={u}/>}<div style={l.fieldSymbols}><div style={l.symbol}>°</div><div style={l.symbol}>%</div><div style={l.symbol}>%</div></div></div>;
};
const VnComponent = function({ hsl }) {
    const n = module803({
        default: {
            picker: {
                width: "12px",
                height: "12px",
                borderRadius: "6px",
                boxShadow: "inset 0 0 0 1px #fff",
                transform: "translate(-6px, -6px)"
            }
        },
        "black-outline": {
            picker: {
                boxShadow: "inset 0 0 0 1px #000"
            }
        }
    }, {
        "black-outline": hsl.l > 0.5
    });
    return <div style={n.picker}/>;
};
const GnComponent = function() {
    const e = module803({
        default: {
            triangle: {
                width: 0,
                height: 0,
                borderStyle: "solid",
                borderWidth: "4px 0 4px 6px",
                borderColor: "transparent transparent transparent #fff",
                position: "absolute",
                top: "1px",
                left: "1px"
            },
            triangleBorder: {
                width: 0,
                height: 0,
                borderStyle: "solid",
                borderWidth: "5px 0 5px 8px",
                borderColor: "transparent transparent transparent #555"
            },
            left: {
                Extend: "triangleBorder",
                transform: "translate(-13px, -4px)"
            },
            leftInside: {
                Extend: "triangle",
                transform: "translate(-8px, -5px)"
            },
            right: {
                Extend: "triangleBorder",
                transform: "translate(20px, -14px) rotate(180deg)"
            },
            rightInside: {
                Extend: "triangle",
                transform: "translate(-8px, -5px)"
            }
        }
    });
    return <div style={e.pointer}><div style={e.left}><div style={e.leftInside}/></div><div style={e.right}><div style={e.rightInside}/></div></div>;
};
const YnComponent = function({ onClick, label, children, active }) {
    const l = module803({
        default: {
            button: {
                backgroundImage: "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
                border: "1px solid #878787",
                borderRadius: "2px",
                height: "20px",
                boxShadow: "0 1px 0 0 #EAEAEA",
                fontSize: "14px",
                color: "#000",
                lineHeight: "20px",
                textAlign: "center",
                marginBottom: "10px",
                cursor: "pointer"
            }
        },
        active: {
            button: {
                boxShadow: "0 0 0 1px #878787"
            }
        }
    }, {
        active
    });
    return <div style={l.button} onClick={onClick}>{label || children}</div>;
};
const MnComponent = function({ rgb, currentColor }) {
    const r = module803({
        default: {
            swatches: {
                border: "1px solid #B3B3B3",
                borderBottom: "1px solid #F0F0F0",
                marginBottom: "2px",
                marginTop: "1px"
            },
            new: {
                height: "34px",
                background: `rgb(${rgb.r},${rgb.g}, ${rgb.b})`,
                boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000"
            },
            current: {
                height: "34px",
                background: currentColor,
                boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000"
            },
            label: {
                fontSize: "14px",
                color: "#000",
                textAlign: "center"
            }
        }
    });
    return <div><div style={r.label}>new</div><div style={r.swatches}><div style={r.new}/><div style={r.current}/></div><div style={r.label}>current</div></div>;
};
class xn extends Component {
    constructor(e){
        var n = ((e, t)=>{
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            if (!t || typeof t !== "object" && typeof t !== "function") {
                return e;
            }
            return t;
        })(this, super());
        n.state = {
            currentColor: e.hex
        };
        return n;
    }
    render() {
        const { styles = {}, className = "" } = this.props;
        const l = module803(a({
            default: {
                picker: {
                    background: "#DCDCDC",
                    borderRadius: "4px",
                    boxShadow: "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
                    boxSizing: "initial",
                    width: "513px"
                },
                head: {
                    backgroundImage: "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
                    borderBottom: "1px solid #B1B1B1",
                    boxShadow: "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
                    height: "23px",
                    lineHeight: "24px",
                    borderRadius: "4px 4px 0 0",
                    fontSize: "13px",
                    color: "#4D4D4D",
                    textAlign: "center"
                },
                body: {
                    padding: "15px 15px 0",
                    display: "flex"
                },
                saturation: {
                    width: "256px",
                    height: "256px",
                    position: "relative",
                    border: "2px solid #B3B3B3",
                    borderBottom: "2px solid #F0F0F0",
                    overflow: "hidden"
                },
                hue: {
                    position: "relative",
                    height: "256px",
                    width: "19px",
                    marginLeft: "10px",
                    border: "2px solid #B3B3B3",
                    borderBottom: "2px solid #F0F0F0"
                },
                controls: {
                    width: "180px",
                    marginLeft: "10px"
                },
                top: {
                    display: "flex"
                },
                previews: {
                    width: "60px"
                },
                actions: {
                    flex: "1",
                    marginLeft: "20px"
                }
            }
        }, styles));
        return <div style={l.picker} className={`photoshop-picker ${className}`}><div style={l.head}>{this.props.header}</div><div style={l.body} className="flexbox-fix"><div style={l.saturation}>{<Z hsl={this.props.hsl} hsv={this.props.hsv} pointer={VnComponent} onChange={this.props.onChange}/>}</div><div style={l.hue}><M direction="vertical" hsl={this.props.hsl} pointer={GnComponent} onChange={this.props.onChange}/></div><div style={l.controls}><div style={l.top} className="flexbox-fix"><div style={l.previews}>{<MnComponent rgb={this.props.rgb} currentColor={this.state.currentColor}/>}</div><div style={l.actions}>{<YnComponent label="OK" onClick={this.props.onAccept} active/>}{<YnComponent label="Cancel" onClick={this.props.onCancel}/>}{<HnComponent onChange={this.props.onChange} rgb={this.props.rgb} hsv={this.props.hsv} hex={this.props.hex}/>}</div></div></div></div></div>;
    }
}
xn.propTypes = {
    header: module1.string,
    styles: module1.object
};
xn.defaultProps = {
    header: "Color Picker",
    styles: {}
};
export const PhotoshopPicker = CustomPicker(xn);
const NComponent = function({ onChange, rgb, hsl, hex, disableAlpha }) {
    const u = module803({
        default: {
            fields: {
                display: "flex",
                paddingTop: "4px"
            },
            single: {
                flex: "1",
                paddingLeft: "6px"
            },
            alpha: {
                flex: "1",
                paddingLeft: "6px"
            },
            double: {
                flex: "2"
            },
            input: {
                width: "80%",
                padding: "4px 10% 3px",
                border: "none",
                boxShadow: "inset 0 0 0 1px #ccc",
                fontSize: "11px"
            },
            label: {
                display: "block",
                textAlign: "center",
                fontSize: "11px",
                color: "#222",
                paddingTop: "3px",
                paddingBottom: "4px",
                textTransform: "capitalize"
            }
        },
        disableAlpha: {
            alpha: {
                display: "none"
            }
        }
    }, {
        disableAlpha
    });
    const s = function(e, o) {
        if (e.hex) {
            if (F(e.hex)) {
                onChange({
                    hex: e.hex,
                    source: "hex"
                }, o);
            }
        } else if (e.r || e.g || e.b) {
            onChange({
                r: e.r || rgb.r,
                g: e.g || rgb.g,
                b: e.b || rgb.b,
                a: rgb.a,
                source: "rgb"
            }, o);
        } else if (e.a) {
            if (e.a < 0) {
                e.a = 0;
            } else if (e.a > 100) {
                e.a = 100;
            }
            e.a /= 100;
            onChange({
                h: hsl.h,
                s: hsl.s,
                l: hsl.l,
                a: e.a,
                source: "rgb"
            }, o);
        }
    };
    return <div style={u.fields} className="flexbox-fix"><div style={u.double}>{<W style={{
        input: u.input,
        label: u.label
    }} label="hex" value={hex.replace("#", "")} onChange={s}/>}</div><div style={u.single}>{<W style={{
        input: u.input,
        label: u.label
    }} label="r" value={rgb.r} onChange={s} dragLabel="true" dragMax="255"/>}</div><div style={u.single}>{<W style={{
        input: u.input,
        label: u.label
    }} label="g" value={rgb.g} onChange={s} dragLabel="true" dragMax="255"/>}</div><div style={u.single}>{<W style={{
        input: u.input,
        label: u.label
    }} label="b" value={rgb.b} onChange={s} dragLabel="true" dragMax="255"/>}</div><div style={u.alpha}>{<W style={{
        input: u.input,
        label: u.label
    }} label="a" value={Math.round(100 * rgb.a)} onChange={s} dragLabel="true" dragMax="100"/>}</div></div>;
};
const On = function({ colors, onClick = function() {}, onSwatchHover }) {
    const l = module803({
        default: {
            colors: {
                margin: "0 -10px",
                padding: "10px 0 0 10px",
                borderTop: "1px solid #eee",
                display: "flex",
                flexWrap: "wrap",
                position: "relative"
            },
            swatchWrap: {
                width: "16px",
                height: "16px",
                margin: "0 10px 10px 0"
            },
            swatch: {
                borderRadius: "3px",
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)"
            }
        },
        "no-presets": {
            colors: {
                display: "none"
            }
        }
    }, {
        "no-presets": !colors || !colors.length
    });
    const u = function(e, t) {
        onClick({
            hex: e,
            source: "hex"
        }, t);
    };
    return <div style={l.colors} className="flexbox-fix">{colors.map((color)=>{
        const t = typeof color === "string" ? {
            color
        } : color;
        const n = `${t.color}${t.title || ""}`;
        return <div key={n} style={l.swatchWrap}><Q {...t} style={l.swatch} onClick={u} onHover={onSwatchHover} focusStyle={{
            boxShadow: `inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ${t.color}`
        }}/></div>;
    })}</div>;
};
On.propTypes = {
    colors: module1.arrayOf(module1.oneOfType([
        module1.string,
        module1.shape({
            color: module1.string,
            title: module1.string
        })
    ])).isRequired
};
const En = On;
const SnComponent = function({ width, rgb, hex, hsv, hsl, onChange, onSwatchHover, disableAlpha, presetColors, renderers, styles = {}, className = "" }) {
    const b = module803(a({
        default: {
            picker: {
                width,
                padding: "10px 10px 0",
                boxSizing: "initial",
                background: "#fff",
                borderRadius: "4px",
                boxShadow: "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)"
            },
            saturation: {
                width: "100%",
                paddingBottom: "75%",
                position: "relative",
                overflow: "hidden"
            },
            Saturation: {
                radius: "3px",
                shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
            },
            controls: {
                display: "flex"
            },
            sliders: {
                padding: "4px 0",
                flex: "1"
            },
            color: {
                width: "24px",
                height: "24px",
                position: "relative",
                marginTop: "4px",
                marginLeft: "4px",
                borderRadius: "3px"
            },
            activeColor: {
                absolute: "0px 0px 0px 0px",
                borderRadius: "2px",
                background: `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`,
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
            },
            hue: {
                position: "relative",
                height: "10px",
                overflow: "hidden"
            },
            Hue: {
                radius: "2px",
                shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
            },
            alpha: {
                position: "relative",
                height: "10px",
                marginTop: "4px",
                overflow: "hidden"
            },
            Alpha: {
                radius: "2px",
                shadow: "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)"
            },
            ...styles
        },
        disableAlpha: {
            color: {
                height: "10px"
            },
            hue: {
                height: "10px"
            },
            alpha: {
                display: "none"
            }
        }
    }, styles), {
        disableAlpha
    });
    return <div style={b.picker} className={`sketch-picker ${className}`}><div style={b.saturation}>{<Z style={b.Saturation} hsl={hsl} hsv={hsv} onChange={onChange}/>}</div><div style={b.controls} className="flexbox-fix"><div style={b.sliders}><div style={b.hue}><M style={b.Hue} hsl={hsl} onChange={onChange}/></div><div style={b.alpha}>{<Y style={b.Alpha} rgb={rgb} hsl={hsl} renderers={renderers} onChange={onChange}/>}</div></div><div style={b.color}>{<D/>}<div style={b.activeColor}/></div></div><NComponent rgb={rgb} hsl={hsl} hex={hex} onChange={onChange} disableAlpha={disableAlpha}/><En colors={presetColors} onClick={onChange} onSwatchHover={onSwatchHover}/></div>;
};
SnComponent.propTypes = {
    disableAlpha: module1.bool,
    width: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    styles: module1.object
};
SnComponent.defaultProps = {
    disableAlpha: false,
    width: 200,
    styles: {},
    presetColors: [
        "#D0021B",
        "#F5A623",
        "#F8E71C",
        "#8B572A",
        "#7ED321",
        "#417505",
        "#BD10E0",
        "#9013FE",
        "#4A90E2",
        "#50E3C2",
        "#B8E986",
        "#000000",
        "#4A4A4A",
        "#9B9B9B",
        "#FFFFFF"
    ]
};
export const SketchPicker = CustomPicker(SnComponent);
const KnComponent = function({ hsl, offset, onClick = function() {}, active, first, last }) {
    const c = module803({
        default: {
            swatch: {
                height: "12px",
                background: `hsl(${hsl.h}, 50%, ${100 * offset}%)`,
                cursor: "pointer"
            }
        },
        first: {
            swatch: {
                borderRadius: "2px 0 0 2px"
            }
        },
        last: {
            swatch: {
                borderRadius: "0 2px 2px 0"
            }
        },
        active: {
            swatch: {
                transform: "scaleY(1.8)",
                borderRadius: "3.6px/2px"
            }
        }
    }, {
        active,
        first,
        last
    });
    return <div style={c.swatch} onClick={function(e) {
        return onClick({
            h: hsl.h,
            s: 0.5,
            l: offset,
            source: "hsl"
        }, e);
    }}/>;
};
const JnComponent = function({ onClick, hsl }) {
    const r = module803({
        default: {
            swatches: {
                marginTop: "20px"
            },
            swatch: {
                boxSizing: "border-box",
                width: "20%",
                paddingRight: "1px",
                float: "left"
            },
            clear: {
                clear: "both"
            }
        }
    });
    return <div style={r.swatches}><div style={r.swatch}>{<KnComponent hsl={hsl} offset=".80" active={Math.abs(hsl.l - 0.8) < 0.1 && Math.abs(hsl.s - 0.5) < 0.1} onClick={onClick} first/>}</div><div style={r.swatch}>{<KnComponent hsl={hsl} offset=".65" active={Math.abs(hsl.l - 0.65) < 0.1 && Math.abs(hsl.s - 0.5) < 0.1} onClick={onClick}/>}</div><div style={r.swatch}>{<KnComponent hsl={hsl} offset=".50" active={Math.abs(hsl.l - 0.5) < 0.1 && Math.abs(hsl.s - 0.5) < 0.1} onClick={onClick}/>}</div><div style={r.swatch}>{<KnComponent hsl={hsl} offset=".35" active={Math.abs(hsl.l - 0.35) < 0.1 && Math.abs(hsl.s - 0.5) < 0.1} onClick={onClick}/>}</div><div style={r.swatch}>{<KnComponent hsl={hsl} offset=".20" active={Math.abs(hsl.l - 0.2) < 0.1 && Math.abs(hsl.s - 0.5) < 0.1} onClick={onClick} last/>}</div><div style={r.clear}/></div>;
};
const TnComponent = function({ hsl, onChange, pointer, styles = {}, className = "" }) {
    const c = module803(a({
        default: {
            hue: {
                height: "12px",
                position: "relative"
            },
            Hue: {
                radius: "2px"
            }
        }
    }, styles));
    return <div style={c.wrap || {}} className={`slider-picker ${className}`}><div style={c.hue}><M style={c.Hue} hsl={hsl} pointer={pointer} onChange={onChange}/></div><div style={c.swatches}>{<JnComponent hsl={hsl} onClick={onChange}/>}</div></div>;
};
TnComponent.propTypes = {
    styles: module1.object
};
TnComponent.defaultProps = {
    pointer: function() {
        const e = module803({
            default: {
                picker: {
                    width: "14px",
                    height: "14px",
                    borderRadius: "6px",
                    transform: "translate(-7px, -1px)",
                    backgroundColor: "rgb(248, 248, 248)",
                    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)"
                }
            }
        });
        return <div style={e.picker}/>;
    },
    styles: {}
};
export const SliderPicker = CustomPicker(TnComponent);
const Nn = function({ color, onClick = function() {}, onSwatchHover, first, last, active }) {
    const c = module803({
        default: {
            color: {
                width: "40px",
                height: "24px",
                cursor: "pointer",
                background: color,
                marginBottom: "1px"
            },
            check: {
                color: V(color),
                marginLeft: "8px",
                display: "none"
            }
        },
        first: {
            color: {
                overflow: "hidden",
                borderRadius: "2px 2px 0 0"
            }
        },
        last: {
            color: {
                overflow: "hidden",
                borderRadius: "0 0 2px 2px"
            }
        },
        active: {
            check: {
                display: "block"
            }
        },
        "color-#FFFFFF": {
            color: {
                boxShadow: "inset 0 0 0 1px #ddd"
            },
            check: {
                color: "#333"
            }
        },
        transparent: {
            check: {
                color: "#333"
            }
        }
    }, {
        first,
        last,
        active,
        "color-#FFFFFF": color === "#FFFFFF",
        transparent: color === "transparent"
    });
    return <Q color={color} style={c.color} onClick={onClick} onHover={onSwatchHover} focusStyle={{
        boxShadow: `0 0 4px ${color}`
    }}><div style={c.check}><Module2816/></div></Q>;
};
const DnComponent = function({ onClick, onSwatchHover, group, active }) {
    const l = module803({
        default: {
            group: {
                paddingBottom: "10px",
                width: "40px",
                float: "left",
                marginRight: "10px"
            }
        }
    });
    return <div style={l.group}>{a_5(group, function(e, a) {
        return <Nn key={e} color={e} active={e.toLowerCase() === active} first={a === 0} last={a === group.length - 1} onClick={onClick} onSwatchHover={onSwatchHover}/>;
    })}</div>;
};
const InComponent = function({ width, height, onChange, onSwatchHover, colors, hex, styles = {}, className = "" }) {
    const p = module803(a({
        default: {
            picker: {
                width,
                height
            },
            overflow: {
                height,
                overflowY: "scroll"
            },
            body: {
                padding: "16px 0 6px 16px"
            },
            clear: {
                clear: "both"
            }
        }
    }, styles));
    const h = function(e, t) {
        return onChange({
            hex: e,
            source: "hex"
        }, t);
    };
    return <div style={p.picker} className={`swatches-picker ${className}`}><T><div style={p.overflow}><div style={p.body}>{a_5(colors, function(group) {
        return <DnComponent key={group.toString()} group={group} active={hex} onClick={h} onSwatchHover={onSwatchHover}/>;
    })}<div style={p.clear}/></div></div></T></div>;
};
InComponent.propTypes = {
    width: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    height: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    colors: module1.arrayOf(module1.arrayOf(module1.string)),
    styles: module1.object
};
InComponent.defaultProps = {
    width: 320,
    height: 240,
    colors: [
        [
            fe,
            ce,
            se,
            ue,
            le
        ],
        [
            ge,
            ve,
            he,
            pe,
            de
        ],
        [
            we,
            xe,
            be,
            me,
            ye
        ],
        [
            Me,
            Ee,
            Oe,
            Ce,
            _e
        ],
        [
            Te,
            je,
            ke,
            Ae,
            Se
        ],
        [
            De,
            Ne,
            ze,
            Le,
            Pe
        ],
        [
            Fe,
            Be,
            He,
            Re,
            Ie
        ],
        [
            We,
            Ze,
            Ue,
            $e,
            Ve
        ],
        [
            Xe,
            Ye,
            qe,
            Ge,
            Ke
        ],
        [
            "#194D33",
            tt,
            et,
            Qe,
            Je
        ],
        [
            at,
            it,
            ot,
            rt,
            nt
        ],
        [
            ft,
            ct,
            st,
            ut,
            lt
        ],
        [
            gt,
            vt,
            ht,
            pt,
            dt
        ],
        [
            wt,
            xt,
            bt,
            mt,
            yt
        ],
        [
            Mt,
            Et,
            Ot,
            Ct,
            _t
        ],
        [
            Tt,
            jt,
            kt,
            At,
            St
        ],
        [
            Dt,
            Nt,
            zt,
            Lt,
            Pt
        ],
        [
            Ft,
            Bt,
            Ht,
            Rt,
            It
        ],
        [
            "#000000",
            "#525252",
            "#969696",
            "#D9D9D9",
            "#FFFFFF"
        ]
    ],
    styles: {}
};
export const SwatchesPicker = CustomPicker(InComponent);
const Hn = function({ onChange, onSwatchHover, hex, colors, width, triangle, styles = {}, className = "" }) {
    const p = module803(a({
        default: {
            card: {
                width,
                background: "#fff",
                border: "0 solid rgba(0,0,0,0.25)",
                boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
                borderRadius: "4px",
                position: "relative"
            },
            body: {
                padding: "15px 9px 9px 15px"
            },
            label: {
                fontSize: "18px",
                color: "#fff"
            },
            triangle: {
                width: "0px",
                height: "0px",
                borderStyle: "solid",
                borderWidth: "0 9px 10px 9px",
                borderColor: "transparent transparent #fff transparent",
                position: "absolute"
            },
            triangleShadow: {
                width: "0px",
                height: "0px",
                borderStyle: "solid",
                borderWidth: "0 9px 10px 9px",
                borderColor: "transparent transparent rgba(0,0,0,.1) transparent",
                position: "absolute"
            },
            hash: {
                background: "#F0F0F0",
                height: "30px",
                width: "30px",
                borderRadius: "4px 0 0 4px",
                float: "left",
                color: "#98A1A4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            },
            input: {
                width: "100px",
                fontSize: "14px",
                color: "#666",
                border: "0px",
                outline: "none",
                height: "28px",
                boxShadow: "inset 0 0 0 1px #F0F0F0",
                boxSizing: "content-box",
                borderRadius: "0 4px 4px 0",
                float: "left",
                paddingLeft: "8px"
            },
            swatch: {
                width: "30px",
                height: "30px",
                float: "left",
                borderRadius: "4px",
                margin: "0 6px 6px 0"
            },
            clear: {
                clear: "both"
            }
        },
        "hide-triangle": {
            triangle: {
                display: "none"
            },
            triangleShadow: {
                display: "none"
            }
        },
        "top-left-triangle": {
            triangle: {
                top: "-10px",
                left: "12px"
            },
            triangleShadow: {
                top: "-11px",
                left: "12px"
            }
        },
        "top-right-triangle": {
            triangle: {
                top: "-10px",
                right: "12px"
            },
            triangleShadow: {
                top: "-11px",
                right: "12px"
            }
        }
    }, styles), {
        "hide-triangle": triangle === "hide",
        "top-left-triangle": triangle === "top-left",
        "top-right-triangle": triangle === "top-right"
    });
    const h = function(e, n) {
        if (F(e)) {
            onChange({
                hex: e,
                source: "hex"
            }, n);
        }
    };
    return <div style={p.card} className={`twitter-picker ${className}`}><div style={p.triangleShadow}/><div style={p.triangle}/><div style={p.body}>{a_5(colors, function(e, t) {
        return <Q key={t} color={e} hex={e} style={p.swatch} onClick={h} onHover={onSwatchHover} focusStyle={{
            boxShadow: `0 0 4px ${e}`
        }}/>;
    })}<div style={p.hash}>#</div>{<W label={null} style={{
        input: p.input
    }} value={hex.replace("#", "")} onChange={h}/>}<div style={p.clear}/></div></div>;
};
Hn.propTypes = {
    width: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    triangle: module1.oneOf([
        "hide",
        "top-left",
        "top-right"
    ]),
    colors: module1.arrayOf(module1.string),
    styles: module1.object
};
Hn.defaultProps = {
    width: 276,
    colors: [
        "#FF6900",
        "#FCB900",
        "#7BDCB5",
        "#00D084",
        "#8ED1FC",
        "#0693E3",
        "#ABB8C3",
        "#EB144C",
        "#F78DA7",
        "#9900EF"
    ],
    triangle: "top-left",
    styles: {}
};
export const TwitterPicker = CustomPicker(Hn);
const Fn = function(e) {
    const t = module803({
        default: {
            picker: {
                width: "20px",
                height: "20px",
                borderRadius: "22px",
                border: "2px #fff solid",
                transform: "translate(-12px, -13px)",
                background: `hsl(${Math.round(e.hsl.h)}, ${Math.round(100 * e.hsl.s)}%, ${Math.round(100 * e.hsl.l)}%)`
            }
        }
    });
    return <div style={t.picker}/>;
};
Fn.propTypes = {
    hsl: module1.shape({
        h: module1.number,
        s: module1.number,
        l: module1.number,
        a: module1.number
    })
};
Fn.defaultProps = {
    hsl: {
        a: 1,
        h: 249.94,
        l: 0.2,
        s: 0.5
    }
};
const Vn = Fn;
const $n = function(e) {
    const t = module803({
        default: {
            picker: {
                width: "20px",
                height: "20px",
                borderRadius: "22px",
                transform: "translate(-10px, -7px)",
                background: `hsl(${Math.round(e.hsl.h)}, 100%, 50%)`,
                border: "2px white solid"
            }
        }
    });
    return <div style={t.picker}/>;
};
$n.propTypes = {
    hsl: module1.shape({
        h: module1.number,
        s: module1.number,
        l: module1.number,
        a: module1.number
    })
};
$n.defaultProps = {
    hsl: {
        a: 1,
        h: 249.94,
        l: 0.2,
        s: 0.5
    }
};
const Un = $n;
const ZnComponent = function({ onChange, rgb, hsl, hex, hsv }) {
    const u = function(e, n) {
        if (e.hex) {
            if (F(e.hex)) {
                onChange({
                    hex: e.hex,
                    source: "hex"
                }, n);
            }
        } else if (e.rgb) {
            const r = e.rgb.split(",");
            if ($(e.rgb, "rgb")) {
                onChange({
                    r: r[0],
                    g: r[1],
                    b: r[2],
                    a: 1,
                    source: "rgb"
                }, n);
            }
        } else if (e.hsv) {
            const o = e.hsv.split(",");
            if ($(e.hsv, "hsv")) {
                o[2] = o[2].replace("%", "");
                o[1] = o[1].replace("%", "");
                o[0] = o[0].replace("°", "");
                if (o[1] == 1) {
                    o[1] = 0.01;
                } else if (o[2] == 1) {
                    o[2] = 0.01;
                }
                onChange({
                    h: Number(o[0]),
                    s: Number(o[1]),
                    v: Number(o[2]),
                    source: "hsv"
                }, n);
            }
        } else if (e.hsl) {
            const i = e.hsl.split(",");
            if ($(e.hsl, "hsl")) {
                i[2] = i[2].replace("%", "");
                i[1] = i[1].replace("%", "");
                i[0] = i[0].replace("°", "");
                if (d[1] == 1) {
                    d[1] = 0.01;
                } else if (d[2] == 1) {
                    d[2] = 0.01;
                }
                onChange({
                    h: Number(i[0]),
                    s: Number(i[1]),
                    v: Number(i[2]),
                    source: "hsl"
                }, n);
            }
        }
    };
    const s = module803({
        default: {
            wrap: {
                display: "flex",
                height: "100px",
                marginTop: "4px"
            },
            fields: {
                width: "100%"
            },
            column: {
                paddingTop: "10px",
                display: "flex",
                justifyContent: "space-between"
            },
            double: {
                padding: "0px 4.4px",
                boxSizing: "border-box"
            },
            input: {
                width: "100%",
                height: "38px",
                boxSizing: "border-box",
                padding: "4px 10% 3px",
                textAlign: "center",
                border: "1px solid #dadce0",
                fontSize: "11px",
                textTransform: "lowercase",
                borderRadius: "5px",
                outline: "none",
                fontFamily: "Roboto,Arial,sans-serif"
            },
            input2: {
                height: "38px",
                width: "100%",
                border: "1px solid #dadce0",
                boxSizing: "border-box",
                fontSize: "11px",
                textTransform: "lowercase",
                borderRadius: "5px",
                outline: "none",
                paddingLeft: "10px",
                fontFamily: "Roboto,Arial,sans-serif"
            },
            label: {
                textAlign: "center",
                fontSize: "12px",
                background: "#fff",
                position: "absolute",
                textTransform: "uppercase",
                color: "#3c4043",
                width: "35px",
                top: "-6px",
                left: "0",
                right: "0",
                marginLeft: "auto",
                marginRight: "auto",
                fontFamily: "Roboto,Arial,sans-serif"
            },
            label2: {
                left: "10px",
                textAlign: "center",
                fontSize: "12px",
                background: "#fff",
                position: "absolute",
                textTransform: "uppercase",
                color: "#3c4043",
                width: "32px",
                top: "-6px",
                fontFamily: "Roboto,Arial,sans-serif"
            },
            single: {
                flexGrow: "1",
                margin: "0px 4.4px"
            }
        }
    });
    const c = `${rgb.r}, ${rgb.g}, ${rgb.b}`;
    const f = `${Math.round(hsl.h)}°, ${Math.round(100 * hsl.s)}%, ${Math.round(100 * hsl.l)}%`;
    var d = `${Math.round(hsv.h)}°, ${Math.round(100 * hsv.s)}%, ${Math.round(100 * hsv.v)}%`;
    return <div style={s.wrap} className="flexbox-fix"><div style={s.fields}><div style={s.double}>{<W style={{
        input: s.input,
        label: s.label
    }} label="hex" value={hex} onChange={u}/>}</div><div style={s.column}><div style={s.single}>{<W style={{
        input: s.input2,
        label: s.label2
    }} label="rgb" value={c} onChange={u}/>}</div><div style={s.single}>{<W style={{
        input: s.input2,
        label: s.label2
    }} label="hsv" value={d} onChange={u}/>}</div><div style={s.single}>{<W style={{
        input: s.input2,
        label: s.label2
    }} label="hsl" value={f} onChange={u}/>}</div></div></div></div>;
};
const WnComponent = function({ width, onChange, rgb, hsl, hsv, hex, header, styles = {}, className = "" }) {
    const h = module803(a({
        default: {
            picker: {
                width,
                background: "#fff",
                border: "1px solid #dfe1e5",
                boxSizing: "initial",
                display: "flex",
                flexWrap: "wrap",
                borderRadius: "8px 8px 0px 0px"
            },
            head: {
                height: "57px",
                width: "100%",
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "16px",
                fontSize: "20px",
                boxSizing: "border-box",
                fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif"
            },
            saturation: {
                width: "70%",
                padding: "0px",
                position: "relative",
                overflow: "hidden"
            },
            swatch: {
                width: "30%",
                height: "228px",
                padding: "0px",
                background: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
                position: "relative",
                overflow: "hidden"
            },
            body: {
                margin: "auto",
                width: "95%"
            },
            controls: {
                display: "flex",
                boxSizing: "border-box",
                height: "52px",
                paddingTop: "22px"
            },
            color: {
                width: "32px"
            },
            hue: {
                height: "8px",
                position: "relative",
                margin: "0px 16px 0px 16px",
                width: "100%"
            },
            Hue: {
                radius: "2px"
            }
        }
    }, styles));
    return <div style={h.picker} className={`google-picker ${className}`}><div style={h.head}>{header}</div><div style={h.swatch}/><div style={h.saturation}>{<Z hsl={hsl} hsv={hsv} pointer={Vn} onChange={onChange}/>}</div><div style={h.body}><div style={h.controls} className="flexbox-fix"><div style={h.hue}><M style={h.Hue} hsl={hsl} radius="4px" pointer={Un} onChange={onChange}/></div></div><ZnComponent rgb={rgb} hsl={hsl} hex={hex} hsv={hsv} onChange={onChange}/></div></div>;
};
WnComponent.propTypes = {
    width: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    styles: module1.object,
    header: module1.string
};
WnComponent.defaultProps = {
    width: 652,
    styles: {},
    header: "Color picker"
};
export const GooglePicker = CustomPicker(WnComponent);
