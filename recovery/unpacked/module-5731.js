import { Terminal } from "./module-5732.js";
import * as module1467 from "./module-1467.js";
const s = function() {
    class e {
        constructor(e){
            this._core = new Terminal(e);
        }
        blur() {
            this._core.blur();
        }
        focus() {
            this._core.focus();
        }
        on(e, t) {
            this._core.on(e, t);
        }
        off(e, t) {
            this._core.off(e, t);
        }
        emit(e, t) {
            this._core.emit(e, t);
        }
        addDisposableListener(e, t) {
            return this._core.addDisposableListener(e, t);
        }
        resize(e, t) {
            this._core.resize(e, t);
        }
        writeln(e) {
            this._core.writeln(e);
        }
        open(e) {
            this._core.open(e);
        }
        attachCustomKeyEventHandler(e) {
            this._core.attachCustomKeyEventHandler(e);
        }
        registerLinkMatcher(e, t, i) {
            return this._core.registerLinkMatcher(e, t, i);
        }
        deregisterLinkMatcher(e) {
            this._core.deregisterLinkMatcher(e);
        }
        registerCharacterJoiner(e) {
            return this._core.registerCharacterJoiner(e);
        }
        deregisterCharacterJoiner(e) {
            this._core.deregisterCharacterJoiner(e);
        }
        addMarker(e) {
            return this._core.addMarker(e);
        }
        hasSelection() {
            return this._core.hasSelection();
        }
        getSelection() {
            return this._core.getSelection();
        }
        clearSelection() {
            this._core.clearSelection();
        }
        selectAll() {
            this._core.selectAll();
        }
        selectLines(e, t) {
            this._core.selectLines(e, t);
        }
        dispose() {
            this._core.dispose();
        }
        destroy() {
            this._core.destroy();
        }
        scrollLines(e) {
            this._core.scrollLines(e);
        }
        scrollPages(e) {
            this._core.scrollPages(e);
        }
        scrollToTop() {
            this._core.scrollToTop();
        }
        scrollToBottom() {
            this._core.scrollToBottom();
        }
        scrollToLine(e) {
            this._core.scrollToLine(e);
        }
        clear() {
            this._core.clear();
        }
        write(e) {
            this._core.write(e);
        }
        getOption(e) {
            return this._core.getOption(e);
        }
        setOption(e, t) {
            this._core.setOption(e, t);
        }
        refresh(e, t) {
            this._core.refresh(e, t);
        }
        reset() {
            this._core.reset();
        }
        static applyAddon(t) {
            t.apply(e);
        }
    }
    Object.defineProperty(e.prototype, "element", {
        get: function() {
            return this._core.element;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(e.prototype, "textarea", {
        get: function() {
            return this._core.textarea;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(e.prototype, "rows", {
        get: function() {
            return this._core.rows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(e.prototype, "cols", {
        get: function() {
            return this._core.cols;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(e.prototype, "markers", {
        get: function() {
            return this._core.markers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(e, "strings", {
        get: function() {
            return module1467;
        },
        enumerable: true,
        configurable: true
    });
    return e;
}();
export { s as Terminal };
