import "./module-15.js";
import "./module-5.js";
import "./module-11.js";
import "./module-86.js";
import "./module-18.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-188.js";
import module61 from "./module-61.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import "./module-45.js";
import "./module-42.js";
import "./module-57.js";
import module63 from "./module-63.js";
import * as module553 from "./module-553.js";
import module3 from "./module-3.js";
import module837 from "./module-837.js";
import module2104 from "./module-2104.js";
import { FUNCTIONS, RATE_RANGES } from "./module-1491.js";
import module2105 from "./module-2105.js";
import module1492 from "./module-1492.js";
const b = ((e)=>{
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
            focusIndex: 0,
            labels: [],
            functions: [],
            metrics: [],
            rateRanges: []
        };
        e.wrapper = module553.default.createRef();
        e.handleArrowDown = function() {
            e.setState(function({ focusIndex, labels, functions, metrics, rateRanges }) {
                return {
                    focusIndex: focusIndex >= labels.length + functions.length + metrics.length + rateRanges.length - 1 ? 0 : focusIndex + 1
                };
            }, e.scrollToFocus);
        };
        e.handleArrowUp = function() {
            e.setState(function({ focusIndex, labels, functions, metrics, rateRanges }) {
                const u = labels.length + functions.length + metrics.length + rateRanges.length;
                return {
                    focusIndex: focusIndex <= 0 ? u - 1 : focusIndex - 1
                };
            }, e.scrollToFocus);
        };
        e.handleEnter = function() {
            const onSelect = e.props.onSelect;
            const e_state = e.state;
            const { focusIndex, functions, metrics, rateRanges, labels } = e_state;
            const c = [].concat(module61(labels), module61(functions), module61(metrics), module61(rateRanges))[focusIndex];
            if (c) {
                onSelect(c.value || c.label);
            }
        };
        e.handleKeyDown = function(t) {
            if (e.keydownHandler[t.keyCode]) {
                t.stopPropagation();
                t.preventDefault();
                e.keydownHandler[t.keyCode](t);
            }
        };
        e.scrollToFocus = function() {
            if (e.wrapper && e.wrapper.current) {
                const t = e.wrapper.current;
                const a = t.querySelector(".is-focus");
                if (!a) {
                    return;
                }
                const r = t.scrollTop;
                const n = r + t.offsetHeight;
                const l = a.offsetTop;
                const u = l + a.offsetHeight;
                if (r > l || n < u) {
                    t.scrollTop = a.offsetTop - 6;
                }
            }
        };
        e.searchMetrics = function(t) {
            return e.fuse.search(t, {
                limit: 50
            }).map((e)=>({
                    value: e.item
                }));
        };
        return e;
    }
    module37(r, [
        {
            key: "componentDidMount",
            value: function() {
                this.fuse = new module2104(this.props.metrics.map((e)=>e.value));
                this.getSuggestions();
                document.addEventListener("keydown", this.handleKeyDown);
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e) {
                if (!(e.value === this.props.value && module837(e.tokenContext, this.props.tokenContext) && module837(e.labelsets, this.props.labelsets))) {
                    this.getSuggestions();
                }
                if (!module837(e.metrics, this.props.metrics)) {
                    this.fuse = new module2104(this.props.metrics.map((e)=>e.value));
                    this.getSuggestions();
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                document.removeEventListener("keydown", this.handleKeyDown);
            }
        },
        {
            key: "getSuggestions",
            value: function() {
                const props = this.props;
                const { value, labelsets, tokenContext } = props;
                let functions = [];
                let metrics = [];
                let rateRanges = [];
                let labels = [];
                if (tokenContext && tokenContext.type.indexOf("context-labels") > -1) {
                    labels = ((e = {}, value_1, tokenContext_1)=>{
                        const r = Object.keys(e);
                        if (value_1 === "{" || value_1 === ",") {
                            return r.map((e)=>({
                                    value: e
                                }));
                        }
                        if (tokenContext_1.label) {
                            const n = e[tokenContext_1.label] || [];
                            if (value_1 === "=") {
                                return n.map((e)=>({
                                        value: `"${e}"`
                                    }));
                            }
                            if (value_1 === '""' || value_1 === "''") {
                                return n.map((e)=>({
                                        value: e
                                    }));
                            }
                            return n.map((e)=>`"${e}"`).filter((e)=>e.indexOf(value_1) >= 0).map((e)=>({
                                    value: e
                                }));
                        }
                        return r.filter((e)=>e.indexOf(value_1) >= 0).map((e)=>({
                                value: e
                            }));
                    })(labelsets, value, tokenContext);
                } else {
                    functions = ((e)=>FUNCTIONS.filter((t)=>t.label.indexOf(e) >= 0))(value);
                    metrics = this.searchMetrics(value);
                    rateRanges = ((value_1)=>{
                        if (value_1 === "[") {
                            return RATE_RANGES;
                        }
                        return [];
                    })(value);
                }
                this.setState({
                    functions,
                    metrics,
                    rateRanges,
                    labels
                });
            }
        },
        {
            key: "renderList",
            value: function(e, t) {
                const props = this.props;
                const { value, onSelect } = props;
                const focusIndex = this.state.focusIndex;
                if (module63(e)) {
                    return null;
                }
                return module553.default.createElement("div", {
                    className: module1492.group
                }, module553.default.createElement("div", {
                    className: module1492.groupTitle
                }, t), module553.default.createElement("div", {
                    className: module1492.options
                }, e.map((e, t)=>module553.default.createElement(module2105, {
                        key: e.value || e.label,
                        data: e.value || e.label,
                        inputValue: value,
                        isFocused: focusIndex === t,
                        onSelect
                    }))));
            }
        },
        {
            key: "render",
            value: function() {
                const className = this.props.className;
                const state = this.state;
                const { functions, metrics, rateRanges, labels } = state;
                if (module63(functions) && module63(metrics) && module63(rateRanges) && module63(labels)) {
                    return null;
                }
                return module553.default.createElement("div", {
                    className: module3(module1492.wrapper, className),
                    ref: this.wrapper
                }, this.renderList(labels, t("ALERT_LABELS")), this.renderList(functions, t("ALERT_FUNCTIONS")), this.renderList(rateRanges, t("ALERT_RATE_RANGES")), this.renderList(metrics, t("ALERT_METRICS")));
            }
        },
        {
            key: "keydownHandler",
            get: function() {
                return {
                    38: this.handleArrowUp,
                    40: this.handleArrowDown,
                    13: this.handleEnter,
                    14: this.handleEnter
                };
            }
        }
    ]);
    return r;
})(module553.Component);
export default b;
