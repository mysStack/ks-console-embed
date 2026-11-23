import "./module-15.js";
import "./module-5.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module1 from "./module-1.js";
import module186 from "./module-186.js";
import module2309 from "./module-2309.js";
const h = ((e)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.handleClickBack = function() {
            if (e.props.onClickBack) {
                e.props.onClickBack();
            } else {
                history.back();
            }
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { title, desc } = props;
                return module553.default.createElement("div", {
                    className: module2309.banner
                }, module553.default.createElement("div", {
                    className: module2309.back,
                    onClick: this.handleClickBack
                }, module553.default.createElement(module186.Icon, {
                    name: "return",
                    size: 20
                }), module553.default.createElement("span", null, t("BACK"))), module553.default.createElement("div", {
                    className: module2309.intro
                }, module553.default.createElement("span", {
                    className: module2309.icon
                }, module553.default.createElement(module186.Icon, {
                    name: "appcenter",
                    size: 48
                })), module553.default.createElement("div", {
                    className: module2309.text
                }, module553.default.createElement("h3", null, title), module553.default.createElement("p", null, desc))), module553.default.createElement("div", {
                    className: module2309.rightIcon
                }, module553.default.createElement("span", {
                    className: module2309.image
                }, module553.default.createElement(module186.Icon, {
                    name: "appcenter",
                    size: 200
                }))));
            }
        }
    ]);
    return r;
})(module553.PureComponent);
h.propTypes = {
    title: module1.string,
    desc: module1.string,
    onClickBack: module1.func
};
export default h;
