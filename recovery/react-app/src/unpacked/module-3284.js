import module1004 from "./module-1004.js";
import module1005 from "./module-1005.js";
import module1006 from "./module-1006.js";
import module1007 from "./module-1007.js";
import module1008 from "./module-1008.js";
import module1045 from "./module-1045.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module2 from "./module-2.js";
const v = ((e)=>{
    module1006(n, e);
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
            let n;
            const r = module1008(e);
            if (t) {
                const o = module1008(this).constructor;
                n = Reflect.construct(r, arguments, o);
            } else {
                n = r.apply(this, arguments);
            }
            return module1007(this, n);
        };
    })(n);
    function n() {
        module1004(this, n);
        return t.apply(this, arguments);
    }
    module1005(n, [
        {
            key: "render",
            value: function() {
                let e;
                const props = this.props;
                const { prefix, name, type, size, className, onClick, style, clickable, changeable, disabled } = props;
                let style_1 = style;
                if (module2.isNumber(size)) {
                    style_1 = {
                        ...style,
                        width: `${size}px`,
                        height: `${size}px`
                    };
                }
                return module553.default.createElement("span", {
                    style: style_1,
                    className: module3("icon", (e = {}, module1045(e, `is-${size}`, !module2.isNumber(size)), module1045(e, "icon-clickable", clickable), module1045(e, "icon-changeable", changeable && !disabled), module1045(e, "icon-disabled", disabled), e), className),
                    onClick
                }, module553.default.createElement("svg", {
                    className: `${prefix} ${prefix}-${name} ${prefix}-${type} svg-loading`,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "48",
                    height: "48",
                    viewBox: "0 0 48 48"
                }, module553.default.createElement("defs", null, module553.default.createElement("linearGradient", {
                    id: "icon-line-spinner-a",
                    x1: "4.167%",
                    x2: "4.167%",
                    y1: "0%",
                    y2: "100%"
                }, module553.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#E4EBF1"
                }), module553.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#86919C"
                })), module553.default.createElement("linearGradient", {
                    id: "icon-line-spinner-b",
                    x1: "95.833%",
                    x2: "95.833%",
                    y1: "0%",
                    y2: "100%"
                }, module553.default.createElement("stop", {
                    offset: "0%",
                    stopColor: "#324558"
                }), module553.default.createElement("stop", {
                    offset: "100%",
                    stopColor: "#86919C"
                }))), module553.default.createElement("g", {
                    fillRule: "evenodd",
                    fill: "none"
                }, module553.default.createElement("path", {
                    d: "M24,0 C37.254834,-2.4348735e-15 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 C10.745166,48 1.623249e-15,37.254834 0,24 C-1.623249e-15,10.745166 10.745166,2.4348735e-15 24,0 Z"
                }), module553.default.createElement("path", {
                    fill: "url(#icon-line-spinner-a)",
                    d: "M24,48 L24,46 C36.1502645,46 46,36.1502645 46,24 C46,12.1554065 36.6396211,2.49704654 24.9125246,2.01858157 L24.9954814,0.0202708022 C37.7886803,0.542235439 48,11.078627 48,24 C48,37.254834 37.254834,48 24,48 Z"
                }), module553.default.createElement("path", {
                    fill: "url(#icon-line-spinner-b)",
                    d: "M24,46 L24,48 C10.745166,48 0,37.254834 0,24.0000001 C0,11.0786271 10.2113197,0.542235649 23.0045134,0.0202712255 L23.0874754,2.01858177 C11.3603789,2.49704674 2,12.1554066 2,24.0000001 C2,36.1502645 11.8497355,46 24,46 Z"
                }))));
            }
        }
    ]);
    return n;
})(module553.PureComponent);
module1045(v, "propTypes", {
    prefix: module1.string,
    name: module1.string.isRequired,
    type: module1.string,
    size: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    className: module1.string,
    style: module1.object,
    changeable: module1.bool,
    clickable: module1.bool,
    onClick: module1.func,
    disabled: module1.bool
});
module1045(v, "defaultProps", {
    type: "dark",
    size: "small",
    prefix: "qicon",
    style: {},
    changeable: false,
    clickable: false,
    disabled: false,
    onClick: module2.noop
});
export default v;
