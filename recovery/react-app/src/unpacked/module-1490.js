import "./module-15.js";
import "./module-5.js";
import "./module-84.js";
import "./module-4.js";
import "./module-23.js";
import "./module-17.js";
import "./module-85.js";
import "./module-45.js";
import "./module-28.js";
import "./module-42.js";
import "./module-57.js";
import module36 from "./module-36.js";
import module37 from "./module-37.js";
import module55 from "./module-55.js";
import module56 from "utils/babel-helpers/possibleConstructorReturn";
import module51 from "./module-51.js";
import * as module553 from "./module-553.js";
import module2103 from "./module-2103.js";
import { OPERATORS, PUNCTUATION_MAP, getCaretCharacterOffsetWithin, getTokenContext, highlightPromql, setCaretPosition } from "./module-1493.js";
import module2108 from "./module-2108.js";
import module2109 from "./module-2109.js";
const h = ((e)=>{
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
        e.state = {
            value: e.props.value,
            visible: false
        };
        e.editor = module553.default.createRef();
        e.wrapper = module553.default.createRef();
        e.valueHistory = new module2108;
        e.cursorHistory = new module2108;
        e.triggerChange = function(t) {
            const onChange = e.props.onChange;
            e.valueHistory.push(t);
            e.cursorHistory.push(e.state.position);
            onChange(t);
        };
        e.handleValueUpdateFromProps = function(t) {
            e.editor.current.innerHTML = highlightPromql(t);
        };
        e.handleInput = function(t) {
            const t_target = t.target;
            const r = getCaretCharacterOffsetWithin(t_target);
            let a_innerText = t_target.innerText;
            if (t.data && PUNCTUATION_MAP[t.data]) {
                const l = a_innerText.substring(0, r);
                const u = a_innerText.substring(r);
                a_innerText = l + PUNCTUATION_MAP[t.data] + u;
            }
            t_target.innerHTML = highlightPromql(a_innerText);
            setCaretPosition(t_target, r);
            const startContainer = window.getSelection().getRangeAt(0).startContainer;
            const o_textContent = startContainer.textContent;
            const c = getTokenContext(e.editor.current, startContainer);
            e.setState({
                value: a_innerText,
                focusValue: o_textContent,
                position: r,
                tokenContext: c,
                visible: true
            }, function() {
                return e.triggerChange(a_innerText);
            });
        };
        e.handleKeyDown = function(t) {
            if (e.keydownHandler[t.keyCode]) {
                e.keydownHandler[t.keyCode](t);
            }
            if (t.metaKey && t.keyCode === 90) {
                t.stopPropagation();
                t.preventDefault();
                if (t.shiftKey) {
                    e.handleRedo();
                } else {
                    e.handleUndo();
                }
            }
        };
        e.handleKeyUp = function(t) {
            if (e.keyupHandler[t.keyCode]) {
                e.keyupHandler[t.keyCode](t);
            }
        };
        e.handleRedo = function() {
            const t = e.valueHistory.redo();
            const a = e.cursorHistory.redo();
            e.setState({
                position: a
            }, function() {
                e.props.onChange(t);
            });
        };
        e.handleUndo = function() {
            const t = e.valueHistory.undo();
            const a = e.cursorHistory.undo();
            e.setState({
                position: a
            }, function() {
                e.props.onChange(t);
            });
        };
        e.handleCursorChange = function() {
            const current = e.editor.current;
            const a = getCaretCharacterOffsetWithin(current);
            const startContainer = window.getSelection().getRangeAt(0).startContainer;
            const r_textContent = startContainer.textContent;
            const l = getTokenContext(e.editor.current, startContainer);
            e.setState({
                focusValue: r_textContent,
                position: a,
                tokenContext: l,
                visible: true
            });
        };
        e.handleLabelSearch = function() {
            const focusValue = e.state.focusValue;
            const onLabelSearch = e.props.onLabelSearch;
            if (focusValue && onLabelSearch) {
                onLabelSearch(focusValue);
            }
        };
        e.handleSuggestionSelect = function(focusValue_1) {
            const e_state = e.state;
            const { value, focusValue, position } = e_state;
            let u = 0;
            let focusValue_length = focusValue.length;
            if (OPERATORS.includes(focusValue)) {
                u = position;
                focusValue_length = 0;
            } else {
                for(let i = position - 1; i >= 0; i--){
                    if (OPERATORS.includes(value[i]) || value[i] === "") {
                        u = i + 1;
                        break;
                    }
                }
            }
            const c = value.substring(0, u) + focusValue_1 + value.substring(u + focusValue_length);
            const s = u + focusValue_1.length;
            e.setState({
                visible: false,
                value: c,
                focusValue: focusValue_1,
                position: s
            }, function() {
                e.triggerChange(c);
                if (value[s] === "{") {
                    e.handleLabelSearch();
                }
                if (e.editor.current) {
                    const t = e.editor.current;
                    t.innerHTML = highlightPromql(c);
                    setCaretPosition(t, s);
                }
            });
        };
        e.handleDOMClick = function(t) {
            if (e.wrapper && e.wrapper.current && !e.wrapper.current.contains(t.target)) {
                e.setState({
                    visible: false
                });
            }
            if (e.editor && e.editor.current && e.editor.current.contains(t.target)) {
                e.handleCursorChange();
            }
        };
        return e;
    }
    module37(a, [
        {
            key: "componentDidMount",
            value: function() {
                if (this.editor.current) {
                    const e = this.state.value;
                    this.editor.current.addEventListener("input", this.handleInput);
                    this.editor.current.addEventListener("keydown", this.handleKeyDown);
                    this.editor.current.addEventListener("keyup", this.handleKeyUp);
                    this.handleValueUpdateFromProps(e);
                }
                document.addEventListener("click", this.handleDOMClick);
            }
        },
        {
            key: "componentDidUpdate",
            value: function(e, t) {
                const _this = this;
                const value = this.props.value;
                if (t.value !== value) {
                    this.setState({
                        value
                    }, function() {
                        _this.handleValueUpdateFromProps(value);
                    });
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function() {
                if (this.editor.current) {
                    this.editor.current.removeEventListener("input", this.handleInput);
                    this.editor.current.removeEventListener("keydown", this.handleKeyDown);
                    this.editor.current.removeEventListener("keyup", this.handleKeyUp);
                }
                document.removeEventListener("click", this.handleDOMClick);
            }
        },
        {
            key: "render",
            value: function() {
                const state = this.state;
                const { visible, focusValue, tokenContext } = state;
                const props = this.props;
                const { metrics, labelsets } = props;
                return module553.default.createElement("div", {
                    className: module2109.wrapper,
                    ref: this.wrapper
                }, module553.default.createElement("pre", null, module553.default.createElement("code", {
                    className: module2109.input,
                    ref: this.editor,
                    spellCheck: "false",
                    contentEditable: true
                })), visible && focusValue && module553.default.createElement(module2103, {
                    className: module2109.suggestions,
                    value: focusValue,
                    metrics,
                    tokenContext,
                    labelsets,
                    onSelect: this.handleSuggestionSelect
                }));
            }
        },
        {
            key: "keydownHandler",
            get: function() {
                return {
                    219: this.handleLabelSearch
                };
            }
        },
        {
            key: "keyupHandler",
            get: function() {
                return {
                    37: this.handleCursorChange,
                    39: this.handleCursorChange
                };
            }
        }
    ]);
    return a;
})(module553.Component);
export default h;
h.defaultProps = {
    value: ""
};
