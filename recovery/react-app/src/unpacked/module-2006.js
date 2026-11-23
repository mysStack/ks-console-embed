"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.editorOptions = [
    "minLines",
    "maxLines",
    "readOnly",
    "highlightActiveLine",
    "tabSize",
    "enableBasicAutocompletion",
    "enableLiveAutocompletion",
    "enableSnippets"
];
exports.editorEvents = [
    "onChange",
    "onFocus",
    "onInput",
    "onBlur",
    "onCopy",
    "onPaste",
    "onSelectionChange",
    "onCursorChange",
    "onScroll",
    "handleOptions",
    "updateRef"
];
exports.getAceInstance = function() {
    let e;
    if (window.ace) {
        e = window.ace;
        e.acequire = window.ace.require || window.ace.acequire;
    } else {
        e = require("unpacked/module-2007.js");
    }
    return e;
};
exports.debounce = function(e, t) {
    let i = null;
    return function() {
        const _this = this;
        const o = arguments;
        clearTimeout(i);
        i = setTimeout(()=>{
            e.apply(_this, o);
        }, t);
    };
};
