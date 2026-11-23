import "./module-15.js";
import "./module-5.js";
import "./module-9.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module65 from "./module-65.js";
import module36 from "./module-36.js";
import module88 from "./module-88.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import "./module-66.js";
import module49 from "./module-49.js";
import { Component } from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module74 from "./module-74.js";
import { observer } from "./module-239.js";
import module14 from "./module-14.js";
import module186 from "./module-186.js";
import { addFullScreenChangeEvents, enterFullScreen, exitFullScreen, removeFullScreenChangeEvents } from "./module-453.js";
import module2402 from "./module-2402.js";
let n;
let l;
let u;
let o;
let i;
let c;
let s;
let f;
let d;
let p;
let m;
let h;
let v;
let g;
let y;
let E;
let b;
let _;
let O;
let S;
let C;
let D;
const B = observer((D = C = ((Component_1)=>{
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
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        r.handleContainerClick = function(e) {
            if (Math.abs(r.deltaX) > 10 || Math.abs(r.deltaY) > 10) {
                e.stopPropagation();
            } else {
                r.props.onClick(e);
            }
        };
        r.fullScreenFlagChange = function() {
            r.isFullscreen = !r.isFullscreen;
        };
        module65(r, "scale", u, module88(r));
        module65(r, "translateX", o, module88(r));
        module65(r, "translateY", i, module88(r));
        module65(r, "isFullscreen", c, module88(r));
        module65(r, "initialComponent", s, module88(r));
        module65(r, "initialPosition", f, module88(r));
        module65(r, "initialScale", d, module88(r));
        module65(r, "handleWheel", p, module88(r));
        r.stopPropagation = function(e) {
            e.stopPropagation();
        };
        module65(r, "handleZoomOut", m, module88(r));
        module65(r, "handleZoomIn", h, module88(r));
        module65(r, "handleNormalSize", v, module88(r));
        module65(r, "handleAutoSize", g, module88(r));
        module65(r, "handleContentMove", y, module88(r));
        module65(r, "handleMouseLeave", E, module88(r));
        module65(r, "handleMouseDown", b, module88(r));
        module65(r, "handleMouseUp", _, module88(r));
        module65(r, "handleChangeScale", O, module88(r));
        module65(r, "toggleFullscreen", S, module88(r));
        r.initPosition = {
            x: 0,
            y: 0
        };
        r.lastPosition = {
            x: 0,
            y: 0
        };
        r.isMoved = false;
        return r;
    }
    module37(a, [
        {
            key: "getChildContext",
            value: function() {
                return {
                    scale: this.scale
                };
            }
        }
    ]);
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                const _this = this;
                this.initialComponent();
                addFullScreenChangeEvents(this.fullScreenFlagChange);
                if (this.container) {
                    this.container.addEventListener("wheel", this.handleWheel);
                }
                if (this.content) {
                    const t = this.content.getBoundingClientRect();
                    const { left, top } = t;
                    this.domOffsetX = left;
                    this.domOffsetY = top;
                }
                if (this.content) {
                    this.setStyleReaction = module14.reaction(function() {
                        return _this.styles;
                    }, function() {
                        module74(_this.content, "style.transform", module14.toJS(_this.styles).transform);
                    }, {
                        fireImmediately: true
                    });
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                removeFullScreenChangeEvents(this.fullScreenFlagChange);
                if (this.container) {
                    this.container.removeEventListener("wheel", this.handleWheel, false);
                }
                if (this.setStyleReaction) {
                    this.setStyleReaction();
                }
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { children, className, contentClassName, controlStyle, enableToggleFullScreen, onRefresh } = props;
                return <div className={module3(module2402.container, className)} onClickCapture={this.handleContainerClick} onMouseLeave={this.handleMouseLeave} onMouseMove={this.handleContentMove} onMouseUp={this.handleMouseUp} onMouseDown={this.handleMouseDown} data-container="pipeline" ref={function(t) {
                    _this.container = t;
                }}><div className={module2402.controls} style={controlStyle} onMouseLeave={this.stopPropagation} onMouseMove={this.stopPropagation}>{enableToggleFullScreen ? <div className={module2402.control} onClick={this.toggleFullscreen}><module186.Icon name={this.isFullscreen ? "minimize" : "maximize"} clickable/></div> : null}<div className={module2402.control} onClick={this.handleZoomOut}><module186.Icon name="add" clickable/></div><div className={module2402.control} onClick={this.handleZoomIn}><module186.Icon name="substract" clickable/></div>{onRefresh && <div className={module2402.control} onClick={onRefresh}><module186.Icon name="refresh" clickable/></div>}</div><div className={module3(module2402.main_content, contentClassName)} ref={function(t) {
                    _this.content = t;
                }}>{children}</div></div>;
            }
        },
        {
            key: "styles",
            get: function() {
                return {
                    transform: `translate3d(${this.translateX}px, ${this.translateY}px, 0)
          scale(${this.scale})`
                };
            }
        }
    ]);
    return a;
})(Component), C.defaultProps = {
    onClick: function() {},
    enableToggleFullScreen: true,
    XOffset: 0,
    YOffset: 0
}, C.childContextTypes = {
    scale: module1.PropTypes.number
}, l = D, module49(l.prototype, "styles", [
    module14.computed
], Object.getOwnPropertyDescriptor(l.prototype, "styles"), l.prototype), u = module49(l.prototype, "scale", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 1;
    }
}), o = module49(l.prototype, "translateX", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 30;
    }
}), i = module49(l.prototype, "translateY", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return 60;
    }
}), c = module49(l.prototype, "isFullscreen", [
    module14.observable
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        return false;
    }
}), s = module49(l.prototype, "initialComponent", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            if (_this.props.initialScale) {
                _this.scale = _this.props.initialScale;
            } else {
                _this.initialScale();
            }
            _this.initialPosition();
        };
    }
}), f = module49(l.prototype, "initialPosition", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            const props = _this.props;
            const { XOffset, YOffset } = props;
            _this.translateX = XOffset;
            _this.translateY = YOffset;
            _this.lastPosition = {
                x: _this.translateX,
                y: _this.translateY
            };
        };
    }
}), d = module49(l.prototype, "initialScale", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            const t = _this.container.clientWidth / _this.content.clientWidth;
            const a = _this.container.clientHeight / _this.content.clientHeight;
            const r = Math.min(t, a);
            _this.scale = r > 1 ? 1 : Math.max(r, 0.6);
        };
    }
}), p = module49(l.prototype, "handleWheel", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            t.preventDefault();
            t.stopPropagation();
            const a = t.deltaY > 0 ? 1 : -1;
            const r = t.clientY - _this.domOffsetY;
            const n = t.clientX - _this.domOffsetX;
            const l = -0.01 * (Math.abs(t.deltaY) > 5 ? 5 * a : t.deltaY);
            const u = _this.scale + l;
            if (u < 1 && u > 0.2) {
                const o = _this.content.clientWidth * _this.scale;
                const i = _this.content.clientHeight * _this.scale;
                if (n > _this.translateX + o) {
                    _this.translateX = -l * _this.content.clientWidth + _this.translateX;
                } else if (n >= _this.translateX) {
                    _this.translateX = -l * (n - _this.translateX) / _this.scale + _this.translateX;
                }
                if (r > _this.translateY + i) {
                    _this.translateY = -l * _this.content.clientHeight + _this.translateY;
                } else if (r >= _this.translateY) {
                    _this.translateY = -l * (r - _this.translateY) / _this.scale + _this.translateY;
                }
                _this.scale = u;
                _this.lastPosition = {
                    x: _this.translateX,
                    y: _this.translateY
                };
                _this.isMoved = true;
            }
        };
    }
}), m = module49(l.prototype, "handleZoomOut", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            if (_this.scale < 1) {
                _this.scale += 0.2;
                _this.isMoved = true;
            }
        };
    }
}), h = module49(l.prototype, "handleZoomIn", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            if (_this.scale > 0.4) {
                _this.scale -= 0.2;
                _this.isMoved = true;
            }
        };
    }
}), v = module49(l.prototype, "handleNormalSize", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.scale = 1;
            _this.translateX = 30;
            _this.translateY = 60;
            _this.lastPosition = {
                x: _this.translateX,
                y: _this.translateY
            };
        };
    }
}), g = module49(l.prototype, "handleAutoSize", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            _this.initialScale();
            _this.initialPosition();
        };
    }
}), y = module49(l.prototype, "handleContentMove", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            if (_this.DragContent) {
                _this.translateX = t.clientX - _this.initPosition.x + _this.lastPosition.x;
                _this.translateY = t.clientY - _this.initPosition.y + _this.lastPosition.y;
                _this.isMoved = true;
            }
        };
    }
}), E = module49(l.prototype, "handleMouseLeave", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            if (t.currentTarget.dataset.container === "pipeline") {
                _this.lastPosition = {
                    x: _this.translateX,
                    y: _this.translateY
                };
                _this.DragContent = false;
            }
        };
    }
}), b = module49(l.prototype, "handleMouseDown", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            t.preventDefault();
            if (t.button === 0) {
                _this.initPosition = {
                    x: t.clientX,
                    y: t.clientY
                };
                _this.DragContent = true;
            }
        };
    }
}), _ = module49(l.prototype, "handleMouseUp", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            if (_this.DragContent) {
                _this.deltaX = t.clientX - _this.initPosition.x;
                _this.deltaY = t.clientY - _this.initPosition.y;
                _this.translateX = _this.deltaX + _this.lastPosition.x;
                _this.translateY = _this.deltaY + _this.lastPosition.y;
                _this.lastPosition = {
                    x: _this.translateX,
                    y: _this.translateY
                };
                _this.DragContent = false;
            }
        };
    }
}), O = module49(l.prototype, "handleChangeScale", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function(t) {
            _this.scale = t / 100;
        };
    }
}), S = module49(l.prototype, "toggleFullscreen", [
    module14.action
], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function() {
        const _this = this;
        return function() {
            const onFullScreen = _this.props.onFullScreen;
            if (onFullScreen) {
                _this.fullScreenFlagChange();
                return onFullScreen();
            }
            if (_this.isFullscreen) {
                exitFullScreen(_this.container);
            } else {
                enterFullScreen(_this.container);
            }
        };
    }
}), n = l)) || n;
export default B;
