import "unpacked/module-15.js";
import "unpacked/module-5.js";
import "unpacked/module-6.js";
import "unpacked/module-84.js";
import "unpacked/module-18.js";
import "unpacked/module-16.js";
import "unpacked/module-4.js";
import "unpacked/module-23.js";
import "unpacked/module-17.js";
import "unpacked/module-85.js";
import "unpacked/module-45.js";
import "unpacked/module-42.js";
import "unpacked/module-57.js";
import module31 from "unpacked/module-31.js";
import module36 from "unpacked/module-36.js";
import module37 from "unpacked/module-37.js";
import module55 from "unpacked/module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "unpacked/module-51.js";
import { Component } from "unpacked/module-553.js";
import module1 from "unpacked/module-1.js";
import module3 from "unpacked/module-3.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import Module802 from "components/Base/Card";
import module3836 from "unpacked/module-3836.js";
const y = [
    "password",
    "secret"
];
const E = ((Component_1)=>{
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
    function r(...n) {
        let e;
        module36(this, r);
        e = a.call(this, ...n);
        e.state = {
            isExpand: e.props.expand,
            defaultExpand: e.props.expand
        };
        e.handleHideValue = function(e) {
            const t = e.toLowerCase();
            let a = false;
            y.forEach((e)=>{
                if (t.includes(e)) {
                    a = true;
                }
            });
            return a;
        };
        e.handleExpand = function() {
            e.setState({
                isExpand: !e.state.isExpand
            });
        };
        return e;
    }
    module37(r, [
        {
            key: "renderTitle",
            value: function() {
                const props = this.props;
                const e_detail = props.detail;
                const { type, name } = e_detail;
                const e_icon = props.icon;
                return <div className={module3836.title}><module186.Icon name={e_icon || "docker"} size={20}/>{type ? type === "init" ? t("INIT_CONTAINER_VALUE", {
                    value: name
                }) : t("CONTAINER_VALUE", {
                    value: name
                }) : name}</div>;
            }
        },
        {
            key: "renderOperations",
            value: function() {
                return <div className={module3836.arrow}><module186.Icon name="caret-down" size={12} type="light"/></div>;
            }
        },
        {
            key: "renderContent",
            value: function() {
                const _this = this;
                const variables = this.props.detail.variables;
                if (module63(variables)) {
                    return null;
                }
                return <div className={module3836.content} onClick={function(e) {
                    e.stopPropagation();
                }}><ul className={module3836.variables}>{variables.map(({ name, value })=>{
                    const n = _this.handleHideValue(name) ? "******" : value;
                    return <li key={name}><div className={module3836.name}>{name}</div><div>{n}</div></li>;
                })}</ul></div>;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { loading, emptyText } = props;
                return <Module802 className={module3(module3836.main, module31({}, module3836.expanded, this.state.isExpand))} title={this.renderTitle()} operations={this.renderOperations()} empty={emptyText || t("EMPTY_WRAPPER", {
                    resource: t("ENVIRONMENT_VARIABLE")
                })} loading={loading} onClick={this.handleExpand}>{this.renderContent()}</Module802>;
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                if (e.expand !== t.defaultExpand) {
                    return {
                        isExpand: e.expand,
                        defaultExpand: e.expand
                    };
                }
                return null;
            }
        }
    ]);
    return r;
})(Component);
export default E;
E.propTypes = {
    className: module1.string,
    detail: module1.object,
    expand: module1.bool,
    loading: module1.bool
};
E.defaultProps = {
    detail: {},
    expand: false,
    loading: true
};
