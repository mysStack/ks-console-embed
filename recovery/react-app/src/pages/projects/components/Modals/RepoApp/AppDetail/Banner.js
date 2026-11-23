import "unpacked/module-15.js";
import "unpacked/module-5.js";
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
import module186 from "unpacked/module-186.js";
import module836 from "components/Base/Image";
import module3101 from "unpacked/module-3101.js";
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
                const { title, desc, icon } = props;
                return module553.default.createElement("div", {
                    className: module3101.banner
                }, module553.default.createElement("div", {
                    className: module3101.back,
                    onClick: this.handleClickBack
                }, module553.default.createElement(module186.Icon, {
                    name: "return",
                    size: 20
                }), module553.default.createElement("span", null, t("BACK"))), module553.default.createElement("div", {
                    className: module3101.intro
                }, module553.default.createElement("span", {
                    className: module3101.icon
                }, module553.default.createElement(module836, {
                    src: icon,
                    alt: "",
                    iconLetter: title,
                    iconSize: 48
                })), module553.default.createElement("div", {
                    className: module3101.text
                }, module553.default.createElement("h3", null, title), module553.default.createElement("p", null, desc))), module553.default.createElement("div", {
                    className: module3101.rightIcon
                }, module553.default.createElement("span", {
                    className: module3101.image
                }, module553.default.createElement(module836, {
                    src: icon,
                    alt: "",
                    iconLetter: title,
                    iconSize: 200
                }))));
            }
        }
    ]);
    return r;
})(module553.PureComponent);
h.propTypes = {
    title: module1.string,
    desc: module1.string,
    icon: module1.string,
    onClickBack: module1.func
};
export default h;
