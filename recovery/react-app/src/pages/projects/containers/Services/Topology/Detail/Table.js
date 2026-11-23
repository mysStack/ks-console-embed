import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-29.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-75.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import "unpacked/module-45.js";
import "unpacked/module-245.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module446 from "unpacked/module-446.js";
import module63 from "unpacked/module-63.js";
import * as module553 from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import { getSuitableValue } from "utils/monitoring";
import module4611 from "unpacked/module-4611.js";
const v = ((e)=>{
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
    function a(e) {
        let r;
        module36(this, a);
        r = t.call(this, e);
        r.handleTitleClick = function(e) {
            const sortKey_1 = e.currentTarget.dataset.id;
            r.setState(function({ sortKey, order }) {
                return {
                    sortKey: sortKey_1,
                    order: sortKey !== sortKey_1 ? "asc" : order === "asc" ? "desc" : "asc"
                };
            });
        };
        const n = r.props.columns.find((e)=>e.defaultSort);
        r.state = {
            sortKey: n ? n.id : "",
            order: "asc"
        };
        return r;
    }
    module37(a, [
        {
            key: "componentDidUpdate",
            value: function(e, t) {
                if (!t.sortKey && e.columns !== this.props.columns) {
                    const a = this.props.columns.find((e)=>e.defaultSort);
                    if (a) {
                        this.setState({
                            sortKey: a.id,
                            order: "asc"
                        });
                    }
                }
            }
        },
        {
            key: "getValue",
            value: function(e) {
                if (module63(e)) {
                    return "";
                }
                if (e.format === "percent") {
                    return `${e.value}%`;
                }
                if (e.format === "filesize") {
                    return `${getSuitableValue(e.value, "disk")}`;
                }
                return e.value;
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { columns, data } = props;
                const state = this.state;
                const { sortKey, order } = state;
                const s = ((data_1, sortKey_1, a = "asc")=>{
                    if (!sortKey_1) {
                        return data_1;
                    }
                    let r = module446(data_1, `${sortKey_1}.value`);
                    if (a === "asc") {
                        r = r.reverse();
                    }
                    return r;
                })(data, sortKey, order);
                return module553.default.createElement("table", {
                    className: module4611.table
                }, module553.default.createElement("thead", null, module553.default.createElement("tr", null, columns.map((t)=>module553.default.createElement("th", {
                        key: t.id,
                        title: t.label,
                        "data-id": t.id,
                        onClick: _this.handleTitleClick
                    }, t.dataType === "number" && t.label.startsWith("#") ? "#" : t.label, sortKey === t.id && module553.default.createElement(module186.Icon, {
                        name: order === "asc" ? "caret-down" : "caret-up"
                    }))))), module553.default.createElement("tbody", null, s.map((t, r)=>module553.default.createElement("tr", {
                        key: `${t.id}-${r}`
                    }, columns.map((a)=>{
                        const title = _this.getValue(t[a.id]);
                        return module553.default.createElement("td", {
                            key: a.id,
                            title
                        }, a.render ? a.render(title, t) : title);
                    })))));
            }
        }
    ]);
    return a;
})(module553.Component);
export default v;
