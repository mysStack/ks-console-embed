import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-84.js";
import "./module-18.js";
import "./module-97.js";
import "./module-98.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-4.js";
import "./module-23.js";
import "./module-24.js";
import "./module-17.js";
import "./module-85.js";
import "./module-64.js";
import "./module-188.js";
import "./module-7.js";
import "./module-45.js";
import "./module-118.js";
import "./module-28.js";
import "./module-42.js";
import "./module-34.js";
import "./module-15.js";
import "./module-57.js";
import module61 from "./module-61.js";
import module31 from "./module-31.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "./module-56.js";
import module51 from "./module-51.js";
import module96 from "./module-96.js";
import module246 from "./module-246.js";
import * as module553 from "./module-553.js";
import module3 from "./module-3.js";
import module837 from "./module-837.js";
import module454 from "./module-454.js";
import module63 from "./module-63.js";
import module972 from "./module-972.js";
import module189 from "./module-189.js";
import module1506 from "./module-1506.js";
import module26 from "./module-26.js";
import module186 from "./module-186.js";
import { addClass, hasClass, removeClass } from "./module-453.js";
import module2423 from "./module-2423.js";
import module2425 from "./module-2425.js";
function I(suggestions, filters) {
    if (module246(filters) !== "object") {
        return [];
    }
    return module1506(Object.entries(filters), function(e) {
        const t = module96(e, 2);
        const a = t[0];
        const r = t[1];
        return [].concat(r).map((e)=>[
                a,
                e
            ]);
    }).map((a)=>{
        const r = module96(a, 2);
        const n = r[0];
        const l = r[1];
        const u = module454(suggestions, {
            key: n
        }) || {};
        const o = u.options && module454(u.options, {
            key: l
        }) || {};
        return {
            filter: n,
            filterLabel: "label" in u ? u.label : "",
            value: l,
            valueLabel: "label" in o ? o.label : filters[n]
        };
    }).filter((e)=>e.filterLabel);
}
const w = {
    label: t("TIME_RANGE"),
    key: "timeRange"
};
const M = {
    label: t("KEYWORDS"),
    key: "keyword"
};
const P = ((e)=>{
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
    function r(e) {
        let n;
        module36(this, r);
        n = a.call(this, e);
        n.handleFocus = function() {
            if (n.filterInput && n.filterInput.current) {
                if (!hasClass(n.filterInput.current, module2425.focus)) {
                    addClass(n.filterInput.current, module2425.focus);
                }
            }
        };
        n.handleBlur = function() {
            if (n.filterInput && n.filterInput.current && hasClass(n.filterInput.current, module2425.focus)) {
                removeClass(n.filterInput.current, module2425.focus);
            }
        };
        n.handleChange = function(e) {
            const value = e.target.value;
            n.setState({
                value
            }, function() {
                if (module63(value)) {
                    n.setState({
                        activeSuggestion: null
                    });
                }
            });
        };
        n.handleClear = function(e) {
            e.nativeEvent.stopImmediatePropagation();
            n.setState({
                value: "",
                activeSuggestion: null
            }, function() {
                n.props.onChange({});
            });
        };
        n.handleKeyUp = function(e) {
            if (e.keyCode === 13) {
                const t = n.state;
                const { value, suggestions, activeSuggestion } = t;
                if (!module63(value)) {
                    const u = n.props;
                    const { onChange, filters } = u;
                    const s = activeSuggestion || suggestions[0];
                    onChange({
                        ...filters,
                        ...module31({}, s.key, module972(value.replace(`${s.label}:`, "")))
                    });
                }
            }
        };
        n.handleTagDelete = function(e) {
            const n_props = n.props;
            const { onChange, onTimeSelectorDelete, filters } = n_props;
            if (e.filter !== "timeRange") {
                if (Array.isArray(filters[e.filter])) {
                    onChange({
                        ...filters,
                        ...module31({}, e.filter, [])
                    });
                } else {
                    onChange(module189(filters, e.filter));
                }
            } else {
                onTimeSelectorDelete(filters);
            }
        };
        n.handleMenuClick = function(e, t, activeSuggestion) {
            n.setState({
                activeSuggestion,
                value: `${activeSuggestion.label}:`,
                optionVisible: !!activeSuggestion.options,
                activeTimeselector: t === "timeRange"
            }, function() {
                n.input.current.focus();
            });
        };
        n.handleTimeSelectorToggle = function() {
            n.setState({
                value: "",
                activeSuggestion: null,
                activeTimeselector: false
            });
        };
        n.handleTimeSelectorChange = function(e) {
            n.setState({
                activeTimeselector: false
            }, function() {
                n.props.onTimeSelectorChange(e);
            });
        };
        n.handleSuggestionMenuClick = function(e, t, a) {
            const activeSuggestion = n.state.activeSuggestion;
            const n_props = n.props;
            n_props.onChange({
                ...n_props.filters,
                ...module31({}, activeSuggestion.key, module972(a))
            });
        };
        n.renderSuggestionOptions = function() {
            const activeSuggestion = n.state.activeSuggestion;
            const e_render = activeSuggestion.render;
            const r = document.getElementsByClassName("table-body");
            const l = module26(r, "[0].clientHeight", "none");
            if (activeSuggestion.options.length === 0) {
                return module553.default.createElement("div", {
                    className: module2425.multi
                }, module553.default.createElement("div", {
                    className: module2425.empty
                }, t("NO_DATA_DESC")));
            }
            return module553.default.createElement(module186.Menu, {
                onClick: n.handleSuggestionMenuClick,
                style: {
                    maxHeight: l,
                    overflowY: "auto"
                }
            }, activeSuggestion.options.map((e)=>module553.default.createElement(module186.Menu.MenuItem, {
                    key: e.key,
                    value: e.key
                }, e_render ? e_render(e) : e.label)));
        };
        n.multiValues = {};
        n.handleOnClose = function() {
            const activeSuggestion = n.state.activeSuggestion;
            const n_props = n.props;
            const { onChange, filters } = n_props;
            if (activeSuggestion?.multi && !module63(n.multiValues)) {
                if (onChange) {
                    onChange({
                        ...filters,
                        ...n.multiValues,
                        __index: n.state.index + 1
                    });
                }
                n.multiValues = {};
            }
        };
        n.renderMultiSuggestionOptions = function() {
            const n_state = n.state;
            const { activeSuggestion, tags } = n_state;
            const { key, render, options } = activeSuggestion;
            const f = tags.filter((e)=>e.filter === key).map((e)=>e.value);
            const d = n.multiValues?.[key] ?? [];
            const p = d.length > 0 ? d : f;
            const m = options.map((e)=>({
                    ...e,
                    value: e.key
                }));
            const g = key === "tags" && p.length >= 5;
            if (m.length === 0) {
                return module553.default.createElement("div", {
                    className: module2425.multi
                }, module553.default.createElement("div", {
                    className: module2425.empty
                }, t("NO_DATA_DESC")));
            }
            return module553.default.createElement("div", {
                className: module2425.multi
            }, module553.default.createElement(module186.CheckboxGroup, {
                value: p,
                onChange: function(e) {
                    n.multiValues = module31({}, key, e);
                    n.forceUpdate();
                }
            }, m.map((e, t)=>{
                const a = p.includes(e.key);
                return module553.default.createElement(module186.Checkbox, {
                    className: module3(module2425.option, module31({}, module2425.checked, a)),
                    value: e.value,
                    disabled: g && !a,
                    key: `${e.value}-${t}`
                }, render ? render(e) : e.label);
            })));
        };
        n.merageMultiTags = function(e) {
            const t = [];
            for(let a = 0; a < e.length; a++){
                let total = 1;
                const n = e[a];
                for(let l = a + 1; l < e.length; l++){
                    if (n.filter === e[l].filter) {
                        total++;
                    }
                }
                if (total > 1) {
                    a = total + a - 1;
                }
                t.push({
                    ...n,
                    total
                });
            }
            return t;
        };
        const suggestions = n.getSuggestions(e.columns);
        const tags = I(suggestions, e.filters);
        n.state = {
            suggestions,
            activeSuggestion: null,
            optionVisible: false,
            tags,
            activeTimeselector: false,
            index: 0
        };
        n.input = module553.default.createRef();
        n.filterInput = module553.default.createRef();
        return n;
    }
    module37(r, [
        {
            key: "componentDidUpdate",
            value: function(e) {
                let suggestions = this.state.suggestions;
                if (this.props.columns !== e.columns) {
                    suggestions = this.getSuggestions(this.props.columns);
                    this.setState({
                        suggestions
                    });
                }
                if (!module837(this.props.filters, e.filters)) {
                    this.setState({
                        value: "",
                        activeSuggestion: null,
                        optionVisible: false,
                        tags: I(suggestions, this.props.filters)
                    });
                }
            }
        },
        {
            key: "getSuggestions",
            value: function(e) {
                const props = this.props;
                const { showTimeSelector, showKeywords } = props;
                const n = e.filter((e)=>e.search && e.dataIndex).map((e)=>({
                        label: e.title,
                        key: e.searchKey || e.dataIndex,
                        options: e.filters && e.filters.map((e)=>({
                                label: e.text,
                                key: e.value
                            })),
                        multi: e.multi,
                        render: e.renderSearch
                    }));
                if (showTimeSelector) {
                    return [].concat(module61(n), [
                        w
                    ]);
                }
                if (showKeywords) {
                    return [
                        M
                    ].concat(module61(n));
                }
                return n;
            }
        },
        {
            key: "renderMenu",
            value: function() {
                const state = this.state;
                const { suggestions, tags } = state;
                const r = document.getElementsByClassName("table-body");
                const n = module26(r, "[0].clientHeight", "none");
                const l = suggestions.filter((e)=>e.multi || !tags.some((t)=>t.filter === e.key));
                if (l.length < 1) {
                    return null;
                }
                return module553.default.createElement(module186.Menu, {
                    onClick: this.handleMenuClick,
                    style: {
                        maxHeight: n,
                        overflowY: "auto"
                    }
                }, l.map((e)=>module553.default.createElement(module186.Menu.MenuItem, {
                        key: e.key,
                        value: e
                    }, e.label)));
            }
        },
        {
            key: "renderTags",
            value: function() {
                const _this = this;
                const tags = this.state.tags;
                return this.merageMultiTags(tags).map((t)=>module553.default.createElement(module186.Tag, {
                        key: `${t.filter}-${t.value}`
                    }, module553.default.createElement("span", null, t.filterLabel, ":", t.valueLabel), t.total > 1 && module553.default.createElement("span", {
                        style: {
                            marginLeft: "6px"
                        }
                    }, "(+", t.total - 1, ")"), module553.default.createElement(module186.Icon, {
                        name: "close",
                        type: "light",
                        clickable: true,
                        onClick: function() {
                            return _this.handleTagDelete(t);
                        }
                    })));
            }
        },
        {
            key: "renderInput",
            value: function() {
                let content;
                const state = this.state;
                const { activeSuggestion, optionVisible, value } = state;
                const u = module553.default.createElement(module186.Input, {
                    type: "text",
                    innerRef: this.input,
                    placeholder: t("SEARCH"),
                    onChange: this.handleChange,
                    onKeyUp: this.handleKeyUp,
                    value: value || "",
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur
                });
                if (activeSuggestion) {
                    if (activeSuggestion.options && !activeSuggestion.multi) {
                        content = this.renderSuggestionOptions();
                    } else if (activeSuggestion.options && activeSuggestion.multi) {
                        content = this.renderMultiSuggestionOptions();
                    }
                } else {
                    content = this.renderMenu();
                }
                if (content) {
                    return module553.default.createElement(module186.Dropdown, {
                        onClose: this.handleOnClose,
                        theme: "dark",
                        content,
                        visible: optionVisible,
                        closeAfterClick: false
                    }, u);
                }
                return u;
            }
        },
        {
            key: "render",
            value: function() {
                const props = this.props;
                const { className, contentClassName, showTimeSelector } = props;
                const state = this.state;
                const { value, tags, activeTimeselector } = state;
                const c = !module63(value) || !module63(tags);
                return module553.default.createElement("div", {
                    className: module3(module2425.wrapper, module31({}, module2425.hasValue, c), className),
                    ref: this.filterInput
                }, module553.default.createElement(module186.Icon, {
                    className: "is-left",
                    name: "magnifier"
                }), module553.default.createElement("div", {
                    className: module3(module2425.content, contentClassName)
                }, this.renderTags(), this.renderInput()), c && module553.default.createElement(module186.Icon, {
                    className: "is-right",
                    name: "close",
                    clickable: true,
                    onClick: this.handleClear
                }), showTimeSelector && module553.default.createElement(module2423, {
                    visible: activeTimeselector,
                    onChange: this.handleTimeSelectorChange,
                    onToggle: this.handleTimeSelectorToggle
                }));
            }
        }
    ], [
        {
            key: "getDerivedStateFromProps",
            value: function(e, t) {
                const index = e.filters?.__index || 0;
                if (index !== t.index) {
                    return {
                        index,
                        value: "",
                        activeSuggestion: null,
                        optionVisible: false,
                        tags: I(t.suggestions, e.filters)
                    };
                }
                return null;
            }
        }
    ]);
    return r;
})(module553.Component);
export default P;
