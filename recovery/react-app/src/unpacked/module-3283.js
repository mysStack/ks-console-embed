import "./module-1104.js";
import "./module-1171.js";
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
import module3284 from "./module-3284.js";
const m = {
    small: 20,
    medium: 32,
    large: 48
};
const b = ((e)=>{
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
    function n(e) {
        let r;
        module1004(this, n);
        r = t.call(this, e);
        r.state = {
            spinning: e.spinning
        };
        return r;
    }
    module1005(n, [
        {
            key: "isNestedPattern",
            value: function() {
                return this.props.children;
            }
        },
        {
            key: "renderIndicator",
            value: function() {
                const size = this.props.size;
                return module553.default.createElement("span", {
                    className: "spin-dot spin-dot-spin"
                }, module553.default.createElement(module3284, {
                    name: "loading",
                    type: "dark",
                    size: module2.isNumber(size) ? size : m[size],
                    style: {
                        display: "block",
                        margin: "auto"
                    }
                }));
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, size, children, wrapperClassName, ...rest } = props;
                const spinning = this.state.spinning;
                const s = module3("spin", {
                    "spin-sm": size === "small",
                    "spin-lg": size === "large",
                    "spin-spinning": spinning
                }, className);
                const c = module2.omit(rest, [
                    "spinning"
                ]);
                const f = module553.default.createElement("div", {
                    ...c,
                    className: s
                }, this.renderIndicator());
                if (this.isNestedPattern()) {
                    let d = "spin-nested-loading";
                    if (wrapperClassName) {
                        d += ` ${wrapperClassName}`;
                    }
                    const h = module3({
                        "spin-container": true,
                        "spin-blur": spinning
                    });
                    return module553.default.createElement("div", {
                        ...c,
                        className: d
                    }, spinning && module553.default.createElement("div", {
                        key: "loading"
                    }, f), module553.default.createElement("div", {
                        className: h,
                        key: "container"
                    }, children));
                }
                return spinning && f;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function({ spinning }, { spinning: spinning_1 }) {
                if (spinning_1 !== spinning) {
                    return {
                        spinning
                    };
                }
                return null;
            }
        }
    ]);
    return n;
})(module553.Component);
module1045(b, "propTypes", {
    className: module1.string,
    size: module1.oneOfType([
        module1.string,
        module1.number
    ]),
    spinning: module1.bool,
    children: module1.element
});
module1045(b, "defaultProps", {
    spinning: true,
    size: "medium"
});
export default b;
