import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-187.js";
import "unpacked/module-29.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import "unpacked/module-58.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
const h = ((e)=>{
    module55(a, e);
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
        e.handleMoreClick = function(t, a) {
            const onClick = e.props.options.find((e)=>e.key === a).onClick;
            if (onClick) {
                onClick();
            }
        };
        return e;
    }
    module37(a, [
        {
            key: "renderMoreOptions",
            value: function() {
                const e = this.props.options.map(({ icon, text, show = true, ...rest })=>{
                    if (show) {
                        return module553.default.createElement(module186.Menu.MenuItem, rest, icon && module553.default.createElement(module186.Icon, {
                            name: icon,
                            type: "light"
                        }), " ", module553.default.createElement("span", {
                            "data-test": `detail-${rest.key}`
                        }, text));
                    }
                    return null;
                });
                if (e.every((e)=>e === null)) {
                    return null;
                }
                return module553.default.createElement(module186.Menu, {
                    onClick: this.handleMoreClick
                }, e);
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { options, className } = props;
                if (module63(options)) {
                    return null;
                }
                const content = this.renderMoreOptions();
                if (content) {
                    return module553.default.createElement(module186.Dropdown, {
                        theme: "dark",
                        content
                    }, module553.default.createElement(module186.Button, {
                        className,
                        type: "flat",
                        icon: "more"
                    }));
                }
                return null;
            }
        }
    ]);
    return a;
})(module553.Component);
export default h;
h.propTypes = {
    className: module1.string,
    options: module1.array
};
h.defaultProps = {
    options: []
};
