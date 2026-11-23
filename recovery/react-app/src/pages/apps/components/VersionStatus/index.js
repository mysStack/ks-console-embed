import "unpacked/module-15.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import { transferVersionStatus } from "utils/app";
import { STATUS_TO_ICON } from "configs/openpitrix/version";
import module4406 from "unpacked/module-4406.js";
const y = ((e)=>{
    module55(r, e);
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
            let r;
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(r);
    function r() {
        module36(this, r);
        return t.apply(this, arguments);
    }
    module37(r, [
        {
            key: "renderIcon",
            value: function() {
                const type = this.props.type;
                const t = STATUS_TO_ICON[type] || type;
                switch(t){
                    case "draft":
                        return module553.default.createElement("label", {
                            className: module4406.draft
                        });
                    case "review":
                        return module553.default.createElement("label", {
                            className: module4406.review
                        });
                    case "passed":
                        return module553.default.createElement(module186.Icon, {
                            size: 16,
                            name: "success",
                            className: module4406.passed
                        });
                    case "suspended":
                        return module553.default.createElement("label", {
                            className: module4406.suspended
                        }, module553.default.createElement(module186.Icon, {
                            size: 13,
                            name: "substract",
                            className: module4406.substract
                        }));
                    case "deleted":
                        return module553.default.createElement(module186.Icon, {
                            size: 16,
                            name: "error",
                            className: module4406.deleted
                        });
                    default:
                        return module553.default.createElement("label", {
                            className: module4406.review
                        });
                }
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, name, type, noIcon, noName } = props;
                const u = transferVersionStatus(name || type);
                return module553.default.createElement("span", {
                    className: module3(module4406.status, className)
                }, !noIcon && module553.default.createElement("label", {
                    className: module4406.icon
                }, this.renderIcon()), !noName && module553.default.createElement("label", {
                    className: module4406.name
                }, u));
            }
        }
    ]);
    return r;
})(module553.PureComponent);
export default y;
y.propTypes = {
    className: module1.string,
    name: module1.string,
    type: module1.string,
    noIcon: module1.bool,
    noName: module1.bool
};
y.defaultProps = {
    type: "",
    name: "",
    noIcon: false,
    noName: false
};
