import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-187.js";
import "unpacked/module-11.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-4.js";
import "unpacked/module-316.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-448.js";
import "unpacked/module-57.js";
import module61 from "unpacked/module-61.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module159 from "unpacked/module-159.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module186 from "unpacked/module-186.js";
import Module2083 from "components/Inputs/ArrayInput/Item";
import module1485 from "unpacked/module-1485.js";
const b = ((Component_1)=>{
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
    function r(...o_1) {
        let e;
        module36(this, r);
        e = a.call(this, ...o_1);
        e.handleAdd = function() {
            const e_props = e.props;
            const t_value = e_props.value;
            e_props.onChange([].concat(module61(t_value), [
                e.getDefaultValue()
            ]));
        };
        e.handleChange = function(t, a) {
            const e_props = e.props;
            const { value, onChange } = e_props;
            const o = module26(a, "currentTarget.value", a);
            let i = [];
            if (module159(value[t])) {
                value[t] = o;
                i = module61(value);
            } else {
                i = value.map((e, a)=>{
                    if (a === t) {
                        return o;
                    }
                    return e;
                });
            }
            onChange(i);
        };
        e.handleDelete = function(t) {
            const e_props = e.props;
            const a_value = e_props.value;
            e_props.onChange(a_value.filter((e, a)=>a !== t));
        };
        e.rolesValidator = function(e, a, r) {
            if (a) {
                if (a.role) {
                    return void r();
                }
                return r({
                    message: t("SELECT_ROLE_TIP")
                });
            }
            return r();
        };
        return e;
    }
    module37(r, [
        {
            key: "getDefaultValue",
            value: function() {
                if (this.props.itemType === "object") {
                    return {};
                }
                return "";
            }
        },
        {
            key: "isAddEnable",
            value: function() {
                const props = this.props;
                const { value, checkItemValid } = props;
                if (checkItemValid) {
                    return value.every(checkItemValid);
                }
                return value.every((e)=>!module63(e) && Object.values(e).every((e)=>e));
            }
        },
        {
            key: "renderItems",
            value: function() {
                const _this = this;
                const props = this.props;
                const { value, children, id } = props;
                if (id && id.includes("metadata.annotations['kubesphere.io/")) {
                    return value.map((t, l)=><module186.Form.Item key={l} rules={[
                            {
                                validator: _this.rolesValidator,
                                checkOnSubmit: true
                            }
                        ]}><Module2083 name={`${id}[${l}]`} index={l} value={t || _this.getDefaultValue()} arrayValue={value} component={children} onChange={_this.handleChange.bind(_this, l)} onDelete={_this.handleDelete.bind(_this, l)}/></module186.Form.Item>);
                }
                return value.map((t, n)=><Module2083 key={n} index={n} value={t || _this.getDefaultValue()} arrayValue={value} component={children} onChange={_this.handleChange.bind(_this, n)} onDelete={_this.handleDelete.bind(_this, n)}/>);
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, addText, extraAdd, desc } = props;
                return <div className={module3(module1485.wrapper, className)}>{this.renderItems()}<div className={module1485.footer}><div className={module1485.desc}>{desc}</div><div className="text-right"><module186.Button className={module1485.add} onClick={this.handleAdd} disabled={!this.isAddEnable()}>{addText}</module186.Button>{extraAdd}</div></div></div>;
            }
        }
    ]);
    return r;
})(Component);
export default b;
b.propTypes = {
    name: module1.string,
    value: module1.array,
    onChange: module1.func,
    addText: module1.string,
    itemType: module1.oneOf([
        "string",
        "object"
    ]),
    children: module1.node.isRequired,
    checkItemValid: module1.func
};
b.defaultProps = {
    name: "",
    value: [
        ""
    ],
    onChange: function() {},
    addText: t("ADD"),
    itemType: "string"
};
