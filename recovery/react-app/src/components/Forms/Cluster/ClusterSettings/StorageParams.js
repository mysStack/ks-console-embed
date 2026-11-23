import "unpacked/module-12.js";
import "unpacked/module-135.js";
import "unpacked/module-5.js";
import "unpacked/module-11.js";
import "unpacked/module-6.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-16.js";
import "unpacked/module-98.js";
import "unpacked/module-9.js";
import "unpacked/module-13.js";
import "unpacked/module-10.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-24.js";
import "unpacked/module-17.js";
import "unpacked/module-137.js";
import "unpacked/module-7.js";
import "unpacked/module-45.js";
import "unpacked/module-28.js";
import "unpacked/module-42.js";
import "unpacked/module-34.js";
import "unpacked/module-15.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module96 from "utils/babel-helpers/slicedToArray";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import * as module553 from "unpacked/module-553.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module74 from "unpacked/module-74.js";
import module186 from "unpacked/module-186.js";
import module788 from "components/Base/Modal";
import { flattenObject } from "utils/index";
import module1180 from "components/Forms/Cluster/ParamInput";
import module2688 from "unpacked/module-2688.js";
const C = ((e)=>{
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
        e.state = {
            visible: false,
            value: e.getFormData()
        };
        e.showEdit = function() {
            e.setState({
                visible: true
            });
        };
        e.hideEdit = function() {
            e.setState({
                visible: false
            });
        };
        e.handleEdit = function(t) {
            const e_props = e.props;
            const { value, onChange } = e_props;
            const l = flattenObject(t);
            e.setState({
                value: l,
                visible: false
            });
            module74(value, "sources.chart.values", Object.entries(l).map((e)=>{
                const t = module96(e, 2);
                const a = t[0];
                const r = t[1];
                return `${a}=${r}`;
            }));
            onChange({
                ...value
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "getFormData",
            value: function() {
                const value = this.props.value;
                return module26(value, "sources.chart.values", []).reduce((acc, item)=>{
                    const a = item.split("=");
                    const r = module96(a, 2);
                    const n = r[0];
                    const l = r[1];
                    return {
                        ...acc,
                        ...module31({}, n, l)
                    };
                }, {});
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (this.props.value !== e.value) {
                    this.setState({
                        value: this.getFormData()
                    });
                }
            }
        },
        {
            key: "renderPreview",
            value: function() {
                const params = this.props.params;
                const value = this.state.value;
                if (module63(params)) {
                    return null;
                }
                return module553.default.createElement("div", {
                    className: module2688.preview
                }, params.map((e)=>module553.default.createElement("div", {
                        key: e.name,
                        className: module2688.item
                    }, module553.default.createElement("span", null, e.title, ": "), module553.default.createElement("span", null, value[e.name]))), module553.default.createElement("a", {
                    className: module2688.edit,
                    onClick: this.showEdit
                }, t("EDIT")));
            }
        },
        {
            key: "renderModal",
            value: function() {
                const state = this.state;
                const { value, visible } = state;
                const params = this.props.params;
                return module553.default.createElement(module788.Form, {
                    title: t("EDIT"),
                    data: value,
                    onOk: this.handleEdit,
                    onCancel: this.hideEdit,
                    visible
                }, params.map((param)=>module553.default.createElement(module186.Form.Item, {
                        key: param.name,
                        label: t(param.title),
                        desc: t(param.description)
                    }, module553.default.createElement(module1180, {
                        name: param.name,
                        defaultValue: param.default,
                        param
                    }))));
            }
        },
        {
            key: "render",
            value: function() {
                return module553.default.createElement("div", null, this.renderPreview(), this.renderModal());
            }
        }
    ]);
    return r;
})(module553.Component);
export default C;
