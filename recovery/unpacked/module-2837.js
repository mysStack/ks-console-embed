import "./module-15.js";
import "./module-12.js";
import "./module-135.js";
import "./module-5.js";
import "./module-18.js";
import "./module-16.js";
import "./module-98.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module31 from "./module-31.js";
import module96 from "./module-96.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module3 from "./module-3.js";
import module788 from "./module-788.js";
import module186 from "./module-186.js";
import module1111 from "./module-1111.js";
import module2838 from "./module-2838.js";
const g = ((e)=>{
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
    function r(...l) {
        let e;
        module36(this, r);
        e = a.call(this, ...l);
        e.state = {
            type: "line"
        };
        e.typeConfig = {
            line: {
                icon: "linechart",
                name: t("LINE_CHART"),
                desc: [
                    {
                        title: t("APPLICABLE_SCENE"),
                        description: t("LINE_CHART_DESC")
                    },
                    {
                        title: t("BASE_LINE_CHART"),
                        description: t("BASE_LINE_CHART_DESC")
                    },
                    {
                        title: t("STACK_LINE_CHART"),
                        description: t("STACK_LINE_CHART_DESC")
                    }
                ]
            },
            bar: {
                icon: "barchart",
                name: t("BAR_CHART"),
                desc: [
                    {
                        title: t("APPLICABLE_SCENE"),
                        description: t("BAR_CHART_DESC")
                    },
                    {
                        title: t("BASE_BAR_CHART"),
                        description: t("BASE_BAR_CHART_DESC")
                    },
                    {
                        title: t("STACK_BAR_CHART"),
                        description: t("STACK_BAR_CHART_DESC")
                    }
                ]
            }
        };
        e.handleClick = function(t) {
            e.setState({
                type: t.currentTarget.dataset.type
            });
        };
        e.onOk = function() {
            e.props.onOk(e.state.type);
        };
        return e;
    }
    module37(r, [
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { visible, onCancel } = props;
                const type = this.state.type;
                const c = this.typeConfig[type];
                return module553.default.createElement(module788, {
                    width: 960,
                    imageIcon: "/assets/coin.svg",
                    title: t("SELECT_CHART_TYPE"),
                    description: t("SELECT_CHART_TYPE_MODAL_DESC"),
                    visible,
                    onCancel,
                    onOk: this.onOk
                }, module553.default.createElement("div", {
                    className: module2838.wrapper
                }, module553.default.createElement(module1111, {
                    label: t("CHART_TYPES")
                }, Object.entries(this.typeConfig).map((t)=>{
                    const a = module96(t, 2);
                    const r = a[0];
                    const n = a[1];
                    return module553.default.createElement("div", {
                        key: r,
                        "data-type": r,
                        onClick: _this.handleClick,
                        className: module2838.typeOpts
                    }, module553.default.createElement("div", {
                        className: module3(module2838.typeOpt, module31({}, module2838.select, r === type))
                    }, module553.default.createElement(module186.Icon, {
                        className: module2838.icon,
                        name: n.icon,
                        size: 40,
                        type: r === type ? "light" : "dark"
                    }), module553.default.createElement("h4", null, n.name)));
                })), c.desc.map((e)=>module553.default.createElement("div", {
                        key: e.title
                    }, module553.default.createElement("h3", null, e.title), module553.default.createElement("p", null, e.description))), module553.default.createElement(module1111, {
                    label: t("DISPLAY_POSITION")
                }, module553.default.createElement("div", {
                    className: module2838.position
                }, module553.default.createElement("div", {
                    className: module2838.navs
                }, module553.default.createElement("div", null), module553.default.createElement("div", null)), module553.default.createElement("div", {
                    className: module2838.placeholderWrapper
                }, module553.default.createElement("div", {
                    className: module2838.placeholder
                }, module553.default.createElement("div", {
                    className: "text-center"
                }, module553.default.createElement(module186.Icon, {
                    name: c.icon,
                    size: 40
                }), module553.default.createElement("div", {
                    className: "margin-t12"
                }, t("EMPTY_CHART_PLACEHOLDER")))))))));
            }
        }
    ]);
    return r;
})(module553.Component);
export default g;
