import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-187.js";
import "unpacked/module-11.js";
import "unpacked/module-197.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-87.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-448.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module159 from "unpacked/module-159.js";
import module247 from "unpacked/module-247.js";
import module186 from "unpacked/module-186.js";
import Module3037 from "components/Modals/Node/TaintManagement/TaintInput/Item";
import module1696 from "unpacked/module-1696.js";
const _ = ((Component_1)=>{
    module55(r, Component_1);
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.showKeyError = function({ index, message }) {
            const r = module247([].concat(module61(n.state.errorKeys), [
                index
            ]));
            n.setState({
                errorKeys: r,
                errorMsg: message
            });
        };
        n.hideKeyError = function({ index } = {}) {
            const a = index ? n.state.errorKeys.filter((e)=>e !== index) : [];
            n.setState({
                errorKeys: a,
                errorMsg: ""
            });
        };
        n.handleAdd = function() {
            const n_props = n.props;
            const e_value = n_props.value;
            n_props.onChange([].concat(module61(e_value), [
                n.defaultValue
            ]), n.defaultValue);
        };
        n.handleChange = function(e, a) {
            const n_props = n.props;
            const { value, onChange } = n_props;
            const c = module26(a, "currentTarget.value", a);
            const s = value.findIndex((e)=>module63(e.key));
            if (s !== -1) {
                n.showKeyError({
                    index: s,
                    message: t("EMPTY_KEY")
                });
                return false;
            }
            let i = n.commonKeys.includes(c.key);
            value.reduce((acc, item)=>{
                if (acc.key === item.key) {
                    i = true;
                }
                return item;
            });
            if (i) {
                n.showKeyError({
                    index: e,
                    message: t("DUPLICATE_KEYS")
                });
                return false;
            }
            let f = [];
            if (module159(value[e])) {
                f = module61(value);
                f[e] = c;
            } else {
                f = value.map((t, a)=>{
                    if (a === e) {
                        return c;
                    }
                    return t;
                });
            }
            n.hideKeyError({
                index: e
            });
            onChange(f);
        };
        n.handleSelect = function(e) {
            const n_props = n.props;
            const t_value = n_props.value;
            n_props.onSelect(t_value[e], e);
        };
        n.handleDelete = function(e) {
            const n_props = n.props;
            const { value, onChange } = n_props;
            if (n.state.errorKeys.includes(e)) {
                n.hideKeyError({
                    index: e
                });
            }
            onChange(value.filter((t, a)=>a !== e), value[e]);
        };
        n.state = {
            errorKeys: [],
            errorMsg: ""
        };
        return n;
    }
    module37(r, [
        {
            key: "isAddEnable",
            value: function() {
                const props = this.props;
                const { value, checkItemValid } = props;
                const errorKeys = this.state.errorKeys;
                if (checkItemValid) {
                    return value.every(checkItemValid);
                }
                return module63(errorKeys) && value.every((e)=>!module63(e));
            }
        },
        {
            key: "renderItems",
            value: function() {
                const _this = this;
                const props = this.props;
                const { value, onSelect } = props;
                const state = this.state;
                const { errorKeys, errorMsg } = state;
                return value.map((t, a)=><div key={a} className={module3(module1696.inputItem, module31({}, module1696.errorItem, errorKeys.includes(a)))}><Module3037 value={t || _this.defaultValue} disabled={!_this.isAddEnable()} onChange={_this.handleChange.bind(_this, a)} onSelect={onSelect && _this.handleSelect.bind(_this, a)} onDelete={_this.handleDelete.bind(_this, a)}/><div className={module1696.error}>{errorMsg}</div></div>);
            }
        },
        {
            key: "render",
            value: function() {
                const className = this.props.className;
                return <div className={module3(module1696.wrapper, className)}>{this.renderItems()}<div className="text-right"><module186.Button className={module1696.add} onClick={this.handleAdd} disabled={!this.isAddEnable()}>{t("ADD")}</module186.Button></div></div>;
            }
        },
        {
            key: "defaultValue",
            get: function() {
                return {};
            }
        },
        {
            key: "commonKeys",
            get: function() {
                return this.props.common.map((e)=>e.key).filter((e)=>e);
            }
        }
    ]);
    return r;
})(Component);
export default _;
_.propTypes = {
    name: module1.string,
    common: module1.array,
    value: module1.array,
    onChange: module1.func,
    checkItemValid: module1.func
};
_.defaultProps = {
    name: "",
    common: [],
    value: [
        ""
    ],
    onChange: function() {}
};
