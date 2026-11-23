import module1 from "./module-1.js";
import { Component } from "./module-553.js";
import module2005 from "./module-2005.js";
import module2006 from "./module-2006.js";
let n;
const o = this && this.__extends || (n = function(e, t) {
    return (n = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(e, t) {
        e.__proto__ = t;
    } || function(e, t) {
        for(const i in t){
            if (t.hasOwnProperty(i)) {
                e[i] = t[i];
            }
        }
    })(e, t);
}, (e, t)=>{
    function i() {
        this.constructor = e;
    }
    n(e, t);
    e.prototype = t === null ? Object.create(t) : (i.prototype = t.prototype, new i);
});
const h = module2006.getAceInstance();
const Range = h.require("ace/range").Range;
const u = ((Component_1)=>{
    function t(t) {
        const i = Component_1.call(this, t) || this;
        module2006.editorEvents.forEach((e)=>{
            i[e] = i[e].bind(i);
        });
        i.debounce = module2006.debounce;
        return i;
    }
    o(t, Component_1);
    t.prototype.componentDidMount = function() {
        const _this = this;
        const { className, onBeforeLoad, onValidate, mode, focus, theme, fontSize, value, defaultValue, cursorStart, showGutter, wrapEnabled, showPrintMargin, scrollMargin = [
            0,
            0,
            0,
            0
        ], keyboardHandler, onLoad, commands, annotations, markers, placeholder } = this.props;
        this.editor = h.edit(this.refEditor);
        if (onBeforeLoad) {
            onBeforeLoad(h);
        }
        for(let k = Object.keys(this.props.editorProps), M = 0; M < k.length; M++){
            this.editor[k[M]] = this.props.editorProps[k[M]];
        }
        if (this.props.debounceChangePeriod) {
            this.onChange = this.debounce(this.onChange, this.props.debounceChangePeriod);
        }
        this.editor.renderer.setScrollMargin(scrollMargin[0], scrollMargin[1], scrollMargin[2], scrollMargin[3]);
        this.editor.getSession().setMode(`ace/mode/${mode}`);
        this.editor.setTheme(`ace/theme/${theme}`);
        this.editor.setFontSize(fontSize);
        this.editor.getSession().setValue(defaultValue || value, cursorStart);
        if (this.props.navigateToFileEnd) {
            this.editor.navigateFileEnd();
        }
        this.editor.renderer.setShowGutter(showGutter);
        this.editor.getSession().setUseWrapMode(wrapEnabled);
        this.editor.setShowPrintMargin(showPrintMargin);
        this.editor.on("focus", this.onFocus);
        this.editor.on("blur", this.onBlur);
        this.editor.on("copy", this.onCopy);
        this.editor.on("paste", this.onPaste);
        this.editor.on("change", this.onChange);
        this.editor.on("input", this.onInput);
        if (placeholder) {
            this.updatePlaceholder();
        }
        this.editor.getSession().selection.on("changeSelection", this.onSelectionChange);
        this.editor.getSession().selection.on("changeCursor", this.onCursorChange);
        if (onValidate) {
            this.editor.getSession().on("changeAnnotation", function() {
                const t = _this.editor.getSession().getAnnotations();
                _this.props.onValidate(t);
            });
        }
        this.editor.session.on("changeScrollTop", this.onScroll);
        this.editor.getSession().setAnnotations(annotations || []);
        if (markers && markers.length > 0) {
            this.handleMarkers(markers);
        }
        const $options = this.editor.$options;
        module2006.editorOptions.forEach((t)=>{
            if ($options.hasOwnProperty(t)) {
                _this.editor.setOption(t, _this.props[t]);
            } else if (_this.props[t]) {
                console.warn(`ReactAce: editor option ${t} was activated but not found. Did you need to import a related tool or did you possibly mispell the option?`);
            }
        });
        this.handleOptions(this.props);
        if (Array.isArray(commands)) {
            commands.forEach((t)=>{
                if (typeof t.exec === "string") {
                    _this.editor.commands.bindKey(t.bindKey, t.exec);
                } else {
                    _this.editor.commands.addCommand(t);
                }
            });
        }
        if (keyboardHandler) {
            this.editor.setKeyboardHandler(`ace/keyboard/${keyboardHandler}`);
        }
        if (className) {
            this.refEditor.className += ` ${className}`;
        }
        if (onLoad) {
            onLoad(this.editor);
        }
        this.editor.resize();
        if (focus) {
            this.editor.focus();
        }
    };
    t.prototype.componentDidUpdate = function(e) {
        const t = e;
        const props = this.props;
        for(let n = 0; n < module2006.editorOptions.length; n++){
            const editorOption = module2006.editorOptions[n];
            if (props[editorOption] !== t[editorOption]) {
                this.editor.setOption(editorOption, props[editorOption]);
            }
        }
        if (props.className !== t.className) {
            const s = this.refEditor.className.trim().split(" ");
            t.className.trim().split(" ").forEach((e)=>{
                const t = s.indexOf(e);
                s.splice(t, 1);
            });
            this.refEditor.className = ` ${props.className} ${s.join(" ")}`;
        }
        if (this.editor && this.editor.getValue() !== props.value) {
            this.silent = true;
            const r = this.editor.session.selection.toJSON();
            this.editor.setValue(props.value, props.cursorStart);
            this.editor.session.selection.fromJSON(r);
            this.silent = false;
        }
        if (props.placeholder !== t.placeholder) {
            this.updatePlaceholder();
        }
        if (props.mode !== t.mode) {
            this.editor.getSession().setMode(`ace/mode/${props.mode}`);
        }
        if (props.theme !== t.theme) {
            this.editor.setTheme(`ace/theme/${props.theme}`);
        }
        if (props.keyboardHandler !== t.keyboardHandler) {
            if (props.keyboardHandler) {
                this.editor.setKeyboardHandler(`ace/keyboard/${props.keyboardHandler}`);
            } else {
                this.editor.setKeyboardHandler(null);
            }
        }
        if (props.fontSize !== t.fontSize) {
            this.editor.setFontSize(props.fontSize);
        }
        if (props.wrapEnabled !== t.wrapEnabled) {
            this.editor.getSession().setUseWrapMode(props.wrapEnabled);
        }
        if (props.showPrintMargin !== t.showPrintMargin) {
            this.editor.setShowPrintMargin(props.showPrintMargin);
        }
        if (props.showGutter !== t.showGutter) {
            this.editor.renderer.setShowGutter(props.showGutter);
        }
        if (!module2005(props.setOptions, t.setOptions)) {
            this.handleOptions(props);
        }
        if (!module2005(props.annotations, t.annotations)) {
            this.editor.getSession().setAnnotations(props.annotations || []);
        }
        if (!module2005(props.markers, t.markers) && Array.isArray(props.markers)) {
            this.handleMarkers(props.markers);
        }
        if (!module2005(props.scrollMargin, t.scrollMargin)) {
            this.handleScrollMargins(props.scrollMargin);
        }
        if (!(e.height === this.props.height && e.width === this.props.width)) {
            this.editor.resize();
        }
        if (this.props.focus && !e.focus) {
            this.editor.focus();
        }
    };
    t.prototype.handleScrollMargins = function(e = [
        0,
        0,
        0,
        0
    ]) {
        this.editor.renderer.setScrollMargins(e[0], e[1], e[2], e[3]);
    };
    t.prototype.componentWillUnmount = function() {
        this.editor.destroy();
        this.editor = null;
    };
    t.prototype.onChange = function(e) {
        if (this.props.onChange && !this.silent) {
            const t = this.editor.getValue();
            this.props.onChange(t, e);
        }
    };
    t.prototype.onSelectionChange = function(e) {
        if (this.props.onSelectionChange) {
            const t = this.editor.getSelection();
            this.props.onSelectionChange(t, e);
        }
    };
    t.prototype.onCursorChange = function(e) {
        if (this.props.onCursorChange) {
            const t = this.editor.getSelection();
            this.props.onCursorChange(t, e);
        }
    };
    t.prototype.onInput = function(e) {
        if (this.props.onInput) {
            this.props.onInput(e);
        }
        if (this.props.placeholder) {
            this.updatePlaceholder();
        }
    };
    t.prototype.onFocus = function(e) {
        if (this.props.onFocus) {
            this.props.onFocus(e, this.editor);
        }
    };
    t.prototype.onBlur = function(e) {
        if (this.props.onBlur) {
            this.props.onBlur(e, this.editor);
        }
    };
    t.prototype.onCopy = function(e) {
        if (this.props.onCopy) {
            this.props.onCopy(e);
        }
    };
    t.prototype.onPaste = function(e) {
        if (this.props.onPaste) {
            this.props.onPaste(e);
        }
    };
    t.prototype.onScroll = function() {
        if (this.props.onScroll) {
            this.props.onScroll(this.editor);
        }
    };
    t.prototype.handleOptions = function(e) {
        for(let t = Object.keys(e.setOptions), i = 0; i < t.length; i++){
            this.editor.setOption(t[i], e.setOptions[t[i]]);
        }
    };
    t.prototype.handleMarkers = function(e) {
        const _this = this;
        let i = this.editor.getSession().getMarkers(true);
        for(var n in i){
            if (i.hasOwnProperty(n)) {
                this.editor.getSession().removeMarker(i[n].id);
            }
        }
        for(var n in i = this.editor.getSession().getMarkers(false)){
            if (i.hasOwnProperty(n) && i[n].clazz !== "ace_active-line" && i[n].clazz !== "ace_selected-word") {
                this.editor.getSession().removeMarker(i[n].id);
            }
        }
        e.forEach(({ startRow, startCol, endRow, endCol, className, type, inFront })=>{
            const l = inFront !== undefined && inFront;
            const h = new Range(startRow, startCol, endRow, endCol);
            _this.editor.getSession().addMarker(h, className, type, l);
        });
    };
    t.prototype.updatePlaceholder = function() {
        const editor = this.editor;
        const placeholder = this.props.placeholder;
        const i = !editor.session.getValue().length;
        let placeholderNode = editor.renderer.placeholderNode;
        if (!i && placeholderNode) {
            editor.renderer.scroller.removeChild(editor.renderer.placeholderNode);
            editor.renderer.placeholderNode = null;
        } else if (i && !placeholderNode) {
            placeholderNode = editor.renderer.placeholderNode = document.createElement("div");
            placeholderNode.textContent = placeholder || "";
            placeholderNode.className = "ace_comment ace_placeholder";
            placeholderNode.style.padding = "0 9px";
            placeholderNode.style.position = "absolute";
            placeholderNode.style.zIndex = "3";
            editor.renderer.scroller.appendChild(placeholderNode);
        } else if (i && placeholderNode) {
            placeholderNode.textContent = placeholder;
        }
    };
    t.prototype.updateRef = function(e) {
        this.refEditor = e;
    };
    t.prototype.render = function() {
        const props = this.props;
        const { name, width, height, style } = props;
        const style_1 = {
            width,
            height,
            ...style
        };
        return <div ref={this.updateRef} id={name} style={style_1}/>;
    };
    t.propTypes = {
        mode: module1.string,
        focus: module1.bool,
        theme: module1.string,
        name: module1.string,
        className: module1.string,
        height: module1.string,
        width: module1.string,
        fontSize: module1.oneOfType([
            module1.number,
            module1.string
        ]),
        showGutter: module1.bool,
        onChange: module1.func,
        onCopy: module1.func,
        onPaste: module1.func,
        onFocus: module1.func,
        onInput: module1.func,
        onBlur: module1.func,
        onScroll: module1.func,
        value: module1.string,
        defaultValue: module1.string,
        onLoad: module1.func,
        onSelectionChange: module1.func,
        onCursorChange: module1.func,
        onBeforeLoad: module1.func,
        onValidate: module1.func,
        minLines: module1.number,
        maxLines: module1.number,
        readOnly: module1.bool,
        highlightActiveLine: module1.bool,
        tabSize: module1.number,
        showPrintMargin: module1.bool,
        cursorStart: module1.number,
        debounceChangePeriod: module1.number,
        editorProps: module1.object,
        setOptions: module1.object,
        style: module1.object,
        scrollMargin: module1.array,
        annotations: module1.array,
        markers: module1.array,
        keyboardHandler: module1.string,
        wrapEnabled: module1.bool,
        enableSnippets: module1.bool,
        enableBasicAutocompletion: module1.oneOfType([
            module1.bool,
            module1.array
        ]),
        enableLiveAutocompletion: module1.oneOfType([
            module1.bool,
            module1.array
        ]),
        navigateToFileEnd: module1.bool,
        commands: module1.array,
        placeholder: module1.string
    };
    t.defaultProps = {
        name: "ace-editor",
        focus: false,
        mode: "",
        theme: "",
        height: "500px",
        width: "500px",
        value: "",
        fontSize: 12,
        enableSnippets: false,
        showGutter: true,
        onChange: null,
        onPaste: null,
        onLoad: null,
        onScroll: null,
        minLines: null,
        maxLines: null,
        readOnly: false,
        highlightActiveLine: true,
        showPrintMargin: true,
        tabSize: 4,
        cursorStart: 1,
        editorProps: {},
        style: {},
        scrollMargin: [
            0,
            0,
            0,
            0
        ],
        setOptions: {},
        wrapEnabled: false,
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        placeholder: null,
        navigateToFileEnd: true
    };
    return t;
})(Component);
export default u;
