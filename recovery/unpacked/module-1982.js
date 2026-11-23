import "./module-15.js";
import "./module-5.js";
import "./module-29.js";
import "./module-18.js";
import "./module-16.js";
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
import module186 from "./module-186.js";
import module790 from "./module-790.js";
import * as module553 from "./module-553.js";
import { getDisplayNameNew } from "./module-52.js";
import { CLUSTER_GROUP_TAG_TYPE, CLUSTER_PROVIDER_ICON } from "./module-72.js";
import module4990 from "./module-4990.js";
const y = ((e)=>{
    module55(a, e);
    var r = ((e)=>{
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
            let r;
            const a = module51(e);
            if (t) {
                const n = module51(this).constructor;
                r = Reflect.construct(a, arguments, n);
            } else {
                r = a.apply(this, arguments);
            }
            return module56(this, r);
        };
    })(a);
    function a(...n) {
        let e;
        module36(this, a);
        e = r.call(this, ...n);
        e.state = {
            showOptions: false
        };
        e.optionsRef = module553.default.createRef();
        e.handleDOMClick = function(t) {
            if (e.optionsRef && e.optionsRef.current && !e.optionsRef.current.contains(t.target)) {
                e.setState({
                    showOptions: false
                });
            }
        };
        e.handleClick = function(t) {
            e.setState({
                showOptions: false
            }, function() {
                e.props.onChange(t);
            });
        };
        e.toggleOptions = function() {
            e.setState(function(e) {
                return {
                    showOptions: !e.showOptions
                };
            });
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                document.addEventListener("click", this.handleDOMClick);
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                document.removeEventListener("click", this.handleDOMClick);
            }
        },
        {
            key: "renderValue",
            value: function(e) {
                const extra = this.props.extra;
                return module553.default.createElement("div", {
                    key: e.name,
                    className: module4990.option,
                    onClick: this.toggleOptions
                }, module553.default.createElement(module186.Icon, {
                    name: CLUSTER_PROVIDER_ICON[e.provider] || "kubernetes",
                    size: 20,
                    type: "light"
                }), module553.default.createElement("span", {
                    className: module4990.name
                }, getDisplayNameNew(e)), e.group && module553.default.createElement(module186.Tag, {
                    key: e.name,
                    type: CLUSTER_GROUP_TAG_TYPE[e.group]
                }, t(`ENV_${e.group.toUpperCase()}`, {
                    defaultValue: e.group
                })), extra && extra(e), module553.default.createElement(module186.Icon, {
                    className: module4990.indicator,
                    name: "chevron-down",
                    type: "light"
                }));
            }
        },
        {
            key: "renderOption",
            value: function(e) {
                const _this = this;
                const extra = this.props.extra;
                return module553.default.createElement("div", {
                    key: e.name,
                    className: module4990.option,
                    onClick: function() {
                        return _this.handleClick(e);
                    }
                }, module553.default.createElement(module186.Icon, {
                    name: CLUSTER_PROVIDER_ICON[e.provider] || "kubernetes",
                    size: 20,
                    type: "light"
                }), module553.default.createElement("span", {
                    className: module4990.name
                }, getDisplayNameNew(e)), e.group && module553.default.createElement(module186.Tag, {
                    key: e.name,
                    type: CLUSTER_GROUP_TAG_TYPE[e.group]
                }, t(`ENV_${e.group.toUpperCase()}`, {
                    defaultValue: e.group
                })), extra && extra(e));
            }
        },
        {
            key: "render",
            value: function() {
                const _this = this;
                const props = this.props;
                const { value, options } = props;
                const showOptions = this.state.showOptions;
                const c = options.find((e)=>e.name === value.name);
                if (c) {
                    return module553.default.createElement(module790, {
                        title: t("CLUSTER")
                    }, module553.default.createElement("div", {
                        className: module4990.wrapper,
                        ref: this.optionsRef
                    }, module553.default.createElement("div", {
                        className: module4990.value
                    }, this.renderValue(c)), showOptions && module553.default.createElement("div", {
                        className: module4990.options
                    }, options.map((t)=>_this.renderOption(t)))));
                }
                return null;
            }
        }
    ]);
    return a;
})(module553.Component);
export default y;
