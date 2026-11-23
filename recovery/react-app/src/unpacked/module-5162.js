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
import "unpacked/module-315.js";
import "unpacked/module-58.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module63 from "unpacked/module-63.js";
import module194 from "unpacked/module-194.js";
import module186 from "unpacked/module-186.js";
import module5163 from "unpacked/module-5163.js";
const b = ((e)=>{
    module55(r, e);
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
    function r(...n_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...n_1);
        e.handleMoreClick = function(t, a) {
            const onClick = e.props.options.find((e)=>e.key === a).onClick;
            if (onClick) {
                onClick();
            }
        };
        e.renderBtn = function({ text, show = true, icon: _icon, ...rest }) {
            if (show) {
                return module553.default.createElement(module186.Button, {
                    className: module5163.button,
                    ...rest,
                    "data-test": `detail-${rest.key}`
                }, text);
            }
            return null;
        };
        return e;
    }
    module37(r, [
        {
            key: "renderBtns",
            value: function() {
                const options = this.props.options;
                if (module63(options)) {
                    return null;
                }
                const content = this.renderMoreOptions();
                return module553.default.createElement("div", null, content && module553.default.createElement(module186.Dropdown, {
                    theme: "dark",
                    content
                }, module553.default.createElement(module186.Button, {
                    className: module5163.more,
                    "data-test": "detail-more"
                }, t("OPERATION"), " ", module553.default.createElement(module186.Icon, {
                    name: "caret-down"
                }), " ")));
            }
        },
        {
            key: "renderMoreOptions",
            value: function() {
                const e = this.props.options.map(({ icon, text, show = true, ...rest })=>{
                    if (show) {
                        return module553.default.createElement(module186.Menu.MenuItem, rest, icon && (module194(icon) ? icon() : module553.default.createElement(module186.Icon, {
                            name: icon,
                            type: "light"
                        })), module553.default.createElement("span", {
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
                const { className, limit: _limit, options: _options, ...rest } = props;
                return module553.default.createElement("div", {
                    className: module3(module5163.group, className),
                    ...rest
                }, this.renderBtns());
            }
        }
    ]);
    return r;
})(module553.Component);
export default b;
b.propTypes = {
    className: module1.string,
    options: module1.array
};
b.defaultProps = {
    options: []
};
