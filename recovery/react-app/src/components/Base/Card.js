import "unpacked/module-15.js";
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
import module195 from "unpacked/module-195.js";
import module186 from "unpacked/module-186.js";
import module2338 from "unpacked/module-2338.js";
const y = ((e)=>{
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
    function a() {
        module36(this, a);
        return t.apply(this, arguments);
    }
    module37(a, [
        {
            key: "renderTitle",
            value: function() {
                const props = this.props;
                const { header, title, operations } = props;
                return header || (title || operations ? module553.default.createElement("div", {
                    className: module2338.title
                }, operations && module553.default.createElement("div", {
                    className: module2338.operations
                }, operations), title) : null);
            }
        },
        {
            key: "renderContent",
            value: function() {
                const props = this.props;
                const { empty, children } = props;
                if (props.isEmpty || !children) {
                    if (module195(empty)) {
                        return module553.default.createElement("div", {
                            className: module2338.empty
                        }, empty);
                    }
                    return empty;
                }
                return children;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, type, loading, refreshing: _refreshing, title: _title, operations: _operations, empty: _empty, children: _children, isEmpty: _isEmpty, ...rest } = props;
                return module553.default.createElement("div", {
                    className: module3(module2338.card, className, module2338[type]),
                    ...rest
                }, this.renderTitle(), loading ? module553.default.createElement(module186.Loading, {
                    className: module2338.loading
                }) : this.renderContent());
            }
        }
    ]);
    return a;
})(module553.PureComponent);
export default y;
y.propTypes = {
    className: module1.string,
    type: module1.string,
    loading: module1.bool,
    refreshing: module1.bool,
    title: module1.oneOfType([
        module1.string,
        module1.element,
        module1.node
    ]),
    operations: module1.oneOfType([
        module1.string,
        module1.element,
        module1.node
    ]),
    header: module1.node,
    empty: module1.oneOfType([
        module1.string,
        module1.element,
        module1.node
    ]),
    isEmpty: module1.bool
};
y.defaultProps = {
    title: "",
    type: "default",
    isEmpty: false
};
