import module2006 from "./module-2006.js";
import module2007 from "./module-2007.js";
import module5302 from "./module-5302.js";
import module1 from "./module-1.js";
import { Component } from "./module-553.js";
import module2005 from "./module-2005.js";
import module5303 from "./module-5303.js";
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
const a = module2006.getAceInstance();
const g = ((Component_1)=>{
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
        const { className, onBeforeLoad, mode, focus, theme, fontSize, value, defaultValue, cursorStart, showGutter, wrapEnabled, showPrintMargin, scrollMargin = [
            0,
            0,
            0,
            0
        ], keyboardHandler, onLoad, commands, annotations, markers, splits } = this.props;
        this.editor = a.edit(this.refEditor);
        this.editor.setTheme(`ace/theme/${theme}`);
        if (onBeforeLoad) {
            onBeforeLoad(a);
        }
        const M = Object.keys(this.props.editorProps);
        const A = new module5302.Split(this.editor.container, `ace/theme/${theme}`, splits);
        this.editor.env.split = A;
        this.splitEditor = A.getEditor(0);
        this.split = A;
        this.editor.setShowPrintMargin(false);
        this.editor.renderer.setShowGutter(false);
        const $options = this.splitEditor.$options;
        if (this.props.debounceChangePeriod) {
            this.onChange = this.debounce(this.onChange, this.props.debounceChangePeriod);
        }
        A.forEach((t, i)=>{
            for(var n = 0; n < M.length; n++){
                t[M[n]] = _this.props.editorProps[M[n]];
            }
            const s = module5303(defaultValue, i);
            const l = module5303(value, i, "");
            t.session.setUndoManager(new a.UndoManager);
            t.setTheme(`ace/theme/${theme}`);
            t.renderer.setScrollMargin(scrollMargin[0], scrollMargin[1], scrollMargin[2], scrollMargin[3]);
            t.getSession().setMode(`ace/mode/${mode}`);
            t.setFontSize(fontSize);
            t.renderer.setShowGutter(showGutter);
            t.getSession().setUseWrapMode(wrapEnabled);
            t.setShowPrintMargin(showPrintMargin);
            t.on("focus", _this.onFocus);
            t.on("blur", _this.onBlur);
            t.on("input", _this.onInput);
            t.on("copy", _this.onCopy);
            t.on("paste", _this.onPaste);
            t.on("change", _this.onChange);
            t.getSession().selection.on("changeSelection", _this.onSelectionChange);
            t.getSession().selection.on("changeCursor", _this.onCursorChange);
            t.session.on("changeScrollTop", _this.onScroll);
            t.setValue(s === undefined ? l : s, cursorStart);
            const v = module5303(annotations, i, []);
            const y = module5303(markers, i, []);
            t.getSession().setAnnotations(v);
            if (y && y.length > 0) {
                _this.handleMarkers(y, t);
            }
            for(n = 0; n < module2006.editorOptions.length; n++){
                const k = module2006.editorOptions[n];
                if ($options.hasOwnProperty(k)) {
                    t.setOption(k, _this.props[k]);
                } else if (_this.props[k]) {
                    console.warn(`ReaceAce: editor option ${k} was activated but not found. Did you need to import a related tool or did you possibly mispell the option?`);
                }
            }
            _this.handleOptions(_this.props, t);
            if (Array.isArray(commands)) {
                commands.forEach((e)=>{
                    if (typeof e.exec === "string") {
                        t.commands.bindKey(e.bindKey, e.exec);
                    } else {
                        t.commands.addCommand(e);
                    }
                });
            }
            if (keyboardHandler) {
                t.setKeyboardHandler(`ace/keyboard/${keyboardHandler}`);
            }
        });
        if (className) {
            this.refEditor.className += ` ${className}`;
        }
        if (focus) {
            this.splitEditor.focus();
        }
        const split = this.editor.env.split;
        split.setOrientation(this.props.orientation === "below" ? split.BELOW : split.BESIDE);
        split.resize(true);
        if (onLoad) {
            onLoad(split);
        }
    };
    t.prototype.componentDidUpdate = function(e) {
        const _this = this;
        const i = e;
        const props = this.props;
        const split = this.editor.env.split;
        if (props.splits !== i.splits) {
            split.setSplits(props.splits);
        }
        if (props.orientation !== i.orientation) {
            split.setOrientation(props.orientation === "below" ? split.BELOW : split.BESIDE);
        }
        split.forEach((e, o)=>{
            if (props.mode !== i.mode) {
                e.getSession().setMode(`ace/mode/${props.mode}`);
            }
            if (props.keyboardHandler !== i.keyboardHandler) {
                if (props.keyboardHandler) {
                    e.setKeyboardHandler(`ace/keyboard/${props.keyboardHandler}`);
                } else {
                    e.setKeyboardHandler(null);
                }
            }
            if (props.fontSize !== i.fontSize) {
                e.setFontSize(props.fontSize);
            }
            if (props.wrapEnabled !== i.wrapEnabled) {
                e.getSession().setUseWrapMode(props.wrapEnabled);
            }
            if (props.showPrintMargin !== i.showPrintMargin) {
                e.setShowPrintMargin(props.showPrintMargin);
            }
            if (props.showGutter !== i.showGutter) {
                e.renderer.setShowGutter(props.showGutter);
            }
            for(let s = 0; s < module2006.editorOptions.length; s++){
                const editorOption = module2006.editorOptions[s];
                if (props[editorOption] !== i[editorOption]) {
                    e.setOption(editorOption, props[editorOption]);
                }
            }
            if (!module2005(props.setOptions, i.setOptions)) {
                _this.handleOptions(props, e);
            }
            const c = module5303(props.value, o, "");
            if (e.getValue() !== c) {
                _this.silent = true;
                const l = e.session.selection.toJSON();
                e.setValue(c, props.cursorStart);
                e.session.selection.fromJSON(l);
                _this.silent = false;
            }
            const h = module5303(props.annotations, o, []);
            const d = module5303(i.annotations, o, []);
            if (!module2005(h, d)) {
                e.getSession().setAnnotations(h);
            }
            const g = module5303(props.markers, o, []);
            const p = module5303(i.markers, o, []);
            if (!module2005(g, p) && Array.isArray(g)) {
                _this.handleMarkers(g, e);
            }
        });
        if (props.className !== i.className) {
            const s = this.refEditor.className.trim().split(" ");
            i.className.trim().split(" ").forEach((e)=>{
                const t = s.indexOf(e);
                s.splice(t, 1);
            });
            this.refEditor.className = ` ${props.className} ${s.join(" ")}`;
        }
        if (props.theme !== i.theme) {
            split.setTheme(`ace/theme/${props.theme}`);
        }
        if (props.focus && !i.focus) {
            this.splitEditor.focus();
        }
        if (!(props.height === this.props.height && props.width === this.props.width)) {
            this.editor.resize();
        }
    };
    t.prototype.componentWillUnmount = function() {
        this.editor.destroy();
        this.editor = null;
    };
    t.prototype.onChange = function(e) {
        if (this.props.onChange && !this.silent) {
            const t = [];
            this.editor.env.split.forEach((e)=>{
                t.push(e.getValue());
            });
            this.props.onChange(t, e);
        }
    };
    t.prototype.onSelectionChange = function(e) {
        if (this.props.onSelectionChange) {
            const t = [];
            this.editor.env.split.forEach((e)=>{
                t.push(e.getSelection());
            });
            this.props.onSelectionChange(t, e);
        }
    };
    t.prototype.onCursorChange = function(e) {
        if (this.props.onCursorChange) {
            const t = [];
            this.editor.env.split.forEach((e)=>{
                t.push(e.getSelection());
            });
            this.props.onCursorChange(t, e);
        }
    };
    t.prototype.onFocus = function(e) {
        if (this.props.onFocus) {
            this.props.onFocus(e);
        }
    };
    t.prototype.onInput = function(e) {
        if (this.props.onInput) {
            this.props.onInput(e);
        }
    };
    t.prototype.onBlur = function(e) {
        if (this.props.onBlur) {
            this.props.onBlur(e);
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
    t.prototype.handleOptions = function(e, t) {
        for(let i = Object.keys(e.setOptions), n = 0; n < i.length; n++){
            t.setOption(i[n], e.setOptions[i[n]]);
        }
    };
    t.prototype.handleMarkers = function(e, t) {
        let i = t.getSession().getMarkers(true);
        for(var n in i){
            if (i.hasOwnProperty(n)) {
                t.getSession().removeMarker(i[n].id);
            }
        }
        for(var n in i = t.getSession().getMarkers(false)){
            if (i.hasOwnProperty(n)) {
                t.getSession().removeMarker(i[n].id);
            }
        }
        e.forEach(({ startRow, startCol, endRow, endCol, className, type, inFront })=>{
            const h = inFront !== undefined && inFront;
            const d = new module2007.Range(startRow, startCol, endRow, endCol);
            t.getSession().addMarker(d, className, type, h);
        });
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
        className: module1.string,
        debounceChangePeriod: module1.number,
        defaultValue: module1.arrayOf(module1.string),
        focus: module1.bool,
        fontSize: module1.oneOfType([
            module1.number,
            module1.string
        ]),
        height: module1.string,
        mode: module1.string,
        name: module1.string,
        onBlur: module1.func,
        onChange: module1.func,
        onCopy: module1.func,
        onFocus: module1.func,
        onInput: module1.func,
        onLoad: module1.func,
        onPaste: module1.func,
        onScroll: module1.func,
        orientation: module1.string,
        showGutter: module1.bool,
        splits: module1.number,
        theme: module1.string,
        value: module1.arrayOf(module1.string),
        width: module1.string,
        onSelectionChange: module1.func,
        onCursorChange: module1.func,
        onBeforeLoad: module1.func,
        minLines: module1.number,
        maxLines: module1.number,
        readOnly: module1.bool,
        highlightActiveLine: module1.bool,
        tabSize: module1.number,
        showPrintMargin: module1.bool,
        cursorStart: module1.number,
        editorProps: module1.object,
        setOptions: module1.object,
        style: module1.object,
        scrollMargin: module1.array,
        annotations: module1.array,
        markers: module1.array,
        keyboardHandler: module1.string,
        wrapEnabled: module1.bool,
        enableBasicAutocompletion: module1.oneOfType([
            module1.bool,
            module1.array
        ]),
        enableLiveAutocompletion: module1.oneOfType([
            module1.bool,
            module1.array
        ]),
        commands: module1.array
    };
    t.defaultProps = {
        name: "ace-editor",
        focus: false,
        orientation: "beside",
        splits: 2,
        mode: "",
        theme: "",
        height: "500px",
        width: "500px",
        value: [],
        fontSize: 12,
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
        enableLiveAutocompletion: false
    };
    return t;
})(Component);
export default g;
