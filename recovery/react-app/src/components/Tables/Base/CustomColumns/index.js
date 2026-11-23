import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module3 from "unpacked/module-3.js";
import module1 from "unpacked/module-1.js";
import module186 from "unpacked/module-186.js";
import module250 from "unpacked/module-250.js";
import module929 from "unpacked/module-929.js";
import module26 from "unpacked/module-26.js";
import module159 from "unpacked/module-159.js";
import module63 from "unpacked/module-63.js";
import { observer } from "unpacked/module-239.js";
import module2422 from "unpacked/module-2422.js";
let l;
let u;
let o;
const D = observer((o = u = ((e)=>{
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
    function a(...n_1) {
        let e;
        module36(this, a);
        e = t.call(this, ...n_1);
        e.handleOptionClick = function(t) {
            const a = module26(t, "currentTarget.dataset.value");
            const e_props = e.props;
            const { value, onChange } = e_props;
            const u = module61(value);
            if (module250(u, a)) {
                module929(u, function(e) {
                    return e === a;
                });
            } else {
                u.push(a);
            }
            onChange(u);
        };
        return e;
    }
    module37(a, [
        {
            key: "isVisibleOption",
            value: function({ value }) {
                const value_1 = this.props.value;
                return !module250(value_1, value);
            }
        },
        {
            key: "renderContent",
            value: function() {
                const className = this.props.className;
                return module553.default.createElement("div", {
                    className: module3(module2422.wrapper, className)
                }, this.renderHeader(), this.renderOptions());
            }
        },
        {
            key: "renderHeader",
            value: function() {
                const title = this.props.title;
                if (module159(title)) {
                    return null;
                }
                return module553.default.createElement("header", null, title);
            }
        },
        {
            key: "renderOptions",
            value: function() {
                return module553.default.createElement("ul", null, this.hideableColumns.map(this.renderOption, this));
            }
        },
        {
            key: "renderOption",
            value: function(e) {
                const t = this.isVisibleOption(e);
                const { value, label } = e;
                const name = t ? "eye" : "eye-closed";
                return module553.default.createElement("li", {
                    "data-value": value,
                    key: value,
                    onClick: this.handleOptionClick
                }, module553.default.createElement(module186.Icon, {
                    name
                }), label);
            }
        },
        {
            key: "render",
            value: function() {
                if (module63(this.hideableColumns)) {
                    return null;
                }
                return module553.default.createElement(module186.Dropdown, {
                    content: this.renderContent(),
                    placement: "bottomRight",
                    positionFixed: true
                }, module553.default.createElement(module186.Button, {
                    type: "flat",
                    icon: "cogwheel",
                    "data-test": "table-columns"
                }));
            }
        },
        {
            key: "hideableColumns",
            get: function() {
                return this.props.columns.filter((e)=>e.isHideable).map((e)=>({
                        label: e.title,
                        value: e.dataIndex || e.key
                    }));
            }
        }
    ]);
    return a;
})(module553.Component), u.propTypes = {
    value: module1.array,
    onChange: module1.func.isRequired,
    className: module1.string,
    title: module1.node,
    columns: module1.array.isRequired
}, u.defaultProps = {
    value: [],
    columns: []
}, l = o)) || l;
export default D;
