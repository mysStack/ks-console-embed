import module1004 from "./module-1004.js";
import module1005 from "./module-1005.js";
import module1006 from "./module-1006.js";
import module1007 from "./module-1007.js";
import module1008 from "./module-1008.js";
import module1045 from "./module-1045.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module3 from "./module-3.js";
import module3516 from "./module-3516.js";
import module3517 from "./module-3517.js";
if (!(typeof window === "undefined" || window.iconfont__svg__inject)) {
    window.iconfont__svg__inject = true;
    module3517(function() {
        const divElement = document.createElement("div");
        divElement.innerHTML = module3516;
        let t;
        let n;
        const r = divElement.getElementsByTagName("svg")[0];
        if (r) {
            r.setAttribute("aria-hidden", "true");
            r.style.position = "absolute";
            r.style.width = 0;
            r.style.height = 0;
            r.style.overflow = "hidden";
            t = r;
            if ((n = document.body).firstChild) {
                n.insertBefore(t, n.firstChild);
            } else {
                n.appendChild(t);
            }
        }
    });
}
const g = ((e)=>{
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
                const { prefix, name, type, size, className, onClick, style, clickable, changeable, disabled, color } = props;
                let g = style;
                let y = {};
                const m = !isNaN(Number(size));
                if (m) {
                    g = {
                        ...style,
                        width: `${size}px`,
                        height: `${size}px`
                    };
                }
                if (color) {
                    y = {
                        color: color.primary,
                        fill: color.secondary
                    };
                }
                return module553.default.createElement("span", {
                    style: g,
                    className: module3("icon", (e = {}, module1045(e, `is-${size}`, !m), module1045(e, "icon-clickable", clickable), module1045(e, "icon-changeable", changeable && !disabled), module1045(e, "icon-disabled", disabled), e), className),
                    onClick: disabled ? null : onClick
                }, module553.default.createElement("svg", {
                    className: `${prefix} ${prefix}-${name} ${prefix}-${type}`,
                    style: y
                }, module553.default.createElement("use", {
                    xlinkHref: `#${`icon-${name}`}`
                })));
            }
        }
    ]);
    return n;
})(module553.PureComponent);
export default g;
module1045(g, "propTypes", {
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
    disabled: module1.bool,
    color: module1.object
});
module1045(g, "defaultProps", {
    type: "dark",
    size: "small",
    prefix: "kubed-icon",
    style: {},
    changeable: false,
    clickable: false,
    disabled: false,
    onClick: function() {}
});
